var __srv=1;function __sr(){__srv=(__srv*16807)%2147483647;return __srv/2147483647}function __noRaf(){return 0}function __noCaf(){}
(()=>{var Sh="170";var mf=0,Td=1,gf=2;var Hu=1,Th=2,xi=3,ji=0,sn=1,Et=2,pi=0,Ki=1,Rn=2,bd=3,wd=4,Ef=5,bs=100,yf=101,vf=102,_f=103,Af=104,Mf=200,Sf=201,Tf=202,bf=203,Kl=204,jl=205,wf=206,Rf=207,xf=208,Cf=209,Ff=210,Pf=211,If=212,Lf=213,Df=214,ec=0,tc=1,nc=2,gr=3,ic=4,sc=5,rc=6,oc=7,Bu=0,Uf=1,Hf=2,mi=0,Bf=1,Nf=2,Of=3,zf=4,kf=5,Gf=6,Vf=7;var Nu=300,Er=301,yr=302,ac=303,lc=304,Oa=306,rn=1e3,Rs=1001,cc=1002,zn=1003,Wf=1004;var Fo=1005;var ui=1006,gl=1007;var xs=1008;var Li=1009,Ou=1010,zu=1011,so=1012,bh=1013,Di=1014,fi=1015,Pn=1016,wh=1017,Rh=1018,vr=1020,ku=35902,Gu=1021,Vu=1022,ii=1023,Wu=1024,Xu=1025,fr=1026,_r=1027,xh=1028,Ch=1029,qu=1030,Fh=1031;var Ph=1033,aa=33776,la=33777,ca=33778,ha=33779,hc=35840,dc=35841,uc=35842,fc=35843,pc=36196,mc=37492,gc=37496,Ec=37808,yc=37809,vc=37810,_c=37811,Ac=37812,Mc=37813,Sc=37814,Tc=37815,bc=37816,wc=37817,Rc=37818,xc=37819,Cc=37820,Fc=37821,da=36492,Pc=36494,Ic=36495,Yu=36283,Lc=36284,Dc=36285,Uc=36286;var ua=2300,Hc=2301,El=2302,Rd=2400,xd=2401,Cd=2402;var Xf=3200,Cr=3201;var Zu=0,qf=1,Ji="",Nt="srgb",ss="srgb-linear",za="linear",wt="srgb";var qs=7680;var Fd=519,Yf=512,Zf=513,$f=514,$u=515,Jf=516,Qf=517,Kf=518,jf=519,Bc=35044;var Pd="300 es",Fi=2e3,fa=2001,es=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let i=this._listeners[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},mn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var yl=Math.PI/180,pa=180/Math.PI;function Pi(){let n=__sr()*4294967295|0,e=__sr()*4294967295|0,t=__sr()*4294967295|0,i=__sr()*4294967295|0;return(mn[n&255]+mn[n>>8&255]+mn[n>>16&255]+mn[n>>24&255]+"-"+mn[e&255]+mn[e>>8&255]+"-"+mn[e>>16&15|64]+mn[e>>24&255]+"-"+mn[t&63|128]+mn[t>>8&255]+"-"+mn[t>>16&255]+mn[t>>24&255]+mn[i&255]+mn[i>>8&255]+mn[i>>16&255]+mn[i>>24&255]).toLowerCase()}function En(n,e,t){return Math.max(e,Math.min(t,n))}function ep(n,e){return(n%e+e)%e}function vl(n,e,t){return(1-t)*n+t*e}function di(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Rt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var ie=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(En(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=__sr(),this.y=__sr(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Qe=class n{constructor(e,t,i,s,r,o,a,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],d=i[7],u=i[2],p=i[5],g=i[8],E=s[0],m=s[3],f=s[6],_=s[1],v=s[4],y=s[7],L=s[2],C=s[5],w=s[8];return r[0]=o*E+a*_+l*L,r[3]=o*m+a*v+l*C,r[6]=o*f+a*y+l*w,r[1]=c*E+h*_+d*L,r[4]=c*m+h*v+d*C,r[7]=c*f+h*y+d*w,r[2]=u*E+p*_+g*L,r[5]=u*m+p*v+g*C,r[8]=u*f+p*y+g*w,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=h*o-a*c,u=a*l-h*r,p=c*r-o*l,g=t*d+i*u+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let E=1/g;return e[0]=d*E,e[1]=(s*c-h*i)*E,e[2]=(a*i-s*o)*E,e[3]=u*E,e[4]=(h*t-s*l)*E,e[5]=(s*r-a*t)*E,e[6]=p*E,e[7]=(i*l-c*t)*E,e[8]=(o*t-i*r)*E,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(_l.makeScale(e,t)),this}rotate(e){return this.premultiply(_l.makeRotation(-e)),this}translate(e,t){return this.premultiply(_l.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},_l=new Qe;function Ju(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function ma(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function tp(){let n=ma("canvas");return n.style.display="block",n}var Id={};function Kr(n){n in Id||(Id[n]=!0,console.warn(n))}function np(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}function ip(n){let e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function sp(n){let e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var ft={enabled:!0,workingColorSpace:ss,spaces:{},convert:function(n,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===wt&&(n.r=Ii(n.r),n.g=Ii(n.g),n.b=Ii(n.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(n.applyMatrix3(this.spaces[e].toXYZ),n.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===wt&&(n.r=pr(n.r),n.g=pr(n.g),n.b=pr(n.b))),n},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Ji?za:this.spaces[n].transfer},getLuminanceCoefficients:function(n,e=this.workingColorSpace){return n.fromArray(this.spaces[e].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,e,t){return n.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function Ii(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function pr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Ld=[.64,.33,.3,.6,.15,.06],Dd=[.2126,.7152,.0722],Ud=[.3127,.329],Hd=new Qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Bd=new Qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ft.define({[ss]:{primaries:Ld,whitePoint:Ud,transfer:za,toXYZ:Hd,fromXYZ:Bd,luminanceCoefficients:Dd,workingColorSpaceConfig:{unpackColorSpace:Nt},outputColorSpaceConfig:{drawingBufferColorSpace:Nt}},[Nt]:{primaries:Ld,whitePoint:Ud,transfer:wt,toXYZ:Hd,fromXYZ:Bd,luminanceCoefficients:Dd,outputColorSpaceConfig:{drawingBufferColorSpace:Nt}}});var Ys,Nc=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ys===void 0&&(Ys=ma("canvas")),Ys.width=e.width,Ys.height=e.height;let i=Ys.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Ys}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=ma("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ii(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ii(t[i]/255)*255):t[i]=Ii(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},rp=0,ga=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:rp++}),this.uuid=Pi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Al(s[o].image)):r.push(Al(s[o]))}else r=Al(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function Al(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Nc.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var op=0,xn=class n extends es{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=Rs,s=Rs,r=ui,o=xs,a=ii,l=Li,c=n.DEFAULT_ANISOTROPY,h=Ji){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:op++}),this.uuid=Pi(),this.name="",this.source=new ga(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ie(0,0),this.repeat=new ie(1,1),this.center=new ie(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Nu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case rn:e.x=e.x-Math.floor(e.x);break;case Rs:e.x=e.x<0?0:1;break;case cc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case rn:e.y=e.y-Math.floor(e.y);break;case Rs:e.y=e.y<0?0:1;break;case cc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};xn.DEFAULT_IMAGE=null;xn.DEFAULT_MAPPING=Nu;xn.DEFAULT_ANISOTROPY=1;var xt=class n{constructor(e=0,t=0,i=0,s=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],h=l[4],d=l[8],u=l[1],p=l[5],g=l[9],E=l[2],m=l[6],f=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-E)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+E)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let v=(c+1)/2,y=(p+1)/2,L=(f+1)/2,C=(h+u)/4,w=(d+E)/4,F=(g+m)/4;return v>y&&v>L?v<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(v),s=C/i,r=w/i):y>L?y<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),i=C/s,r=F/s):L<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(L),i=w/r,s=F/r),this.set(i,s,r,t),this}let _=Math.sqrt((m-g)*(m-g)+(d-E)*(d-E)+(u-h)*(u-h));return Math.abs(_)<.001&&(_=1),this.x=(m-g)/_,this.y=(d-E)/_,this.z=(u-h)/_,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=__sr(),this.y=__sr(),this.z=__sr(),this.w=__sr(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Oc=class extends es{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new xt(0,0,e,t),this.scissorTest=!1,this.viewport=new xt(0,0,e,t);let s={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ui,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let r=new xn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new ga(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},on=class extends Oc{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Ea=class extends xn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=zn,this.minFilter=zn,this.wrapR=Rs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var zc=class extends xn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=zn,this.minFilter=zn,this.wrapR=Rs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ts=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],d=i[s+3],u=r[o+0],p=r[o+1],g=r[o+2],E=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d;return}if(a===1){e[t+0]=u,e[t+1]=p,e[t+2]=g,e[t+3]=E;return}if(d!==E||l!==u||c!==p||h!==g){let m=1-a,f=l*u+c*p+h*g+d*E,_=f>=0?1:-1,v=1-f*f;if(v>Number.EPSILON){let L=Math.sqrt(v),C=Math.atan2(L,f*_);m=Math.sin(m*C)/L,a=Math.sin(a*C)/L}let y=a*_;if(l=l*m+u*y,c=c*m+p*y,h=h*m+g*y,d=d*m+E*y,m===1-a){let L=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=L,c*=L,h*=L,d*=L}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],d=r[o],u=r[o+1],p=r[o+2],g=r[o+3];return e[t]=a*g+h*d+l*p-c*u,e[t+1]=l*g+h*u+c*d-a*p,e[t+2]=c*g+h*p+a*u-l*d,e[t+3]=h*g-a*d-l*u-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),d=a(r/2),u=l(i/2),p=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=u*h*d+c*p*g,this._y=c*p*d-u*h*g,this._z=c*h*g+u*p*d,this._w=c*h*d-u*p*g;break;case"YXZ":this._x=u*h*d+c*p*g,this._y=c*p*d-u*h*g,this._z=c*h*g-u*p*d,this._w=c*h*d+u*p*g;break;case"ZXY":this._x=u*h*d-c*p*g,this._y=c*p*d+u*h*g,this._z=c*h*g+u*p*d,this._w=c*h*d-u*p*g;break;case"ZYX":this._x=u*h*d-c*p*g,this._y=c*p*d+u*h*g,this._z=c*h*g-u*p*d,this._w=c*h*d+u*p*g;break;case"YZX":this._x=u*h*d+c*p*g,this._y=c*p*d+u*h*g,this._z=c*h*g-u*p*d,this._w=c*h*d-u*p*g;break;case"XZY":this._x=u*h*d-c*p*g,this._y=c*p*d-u*h*g,this._z=c*h*g+u*p*d,this._w=c*h*d+u*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],d=t[10],u=i+a+d;if(u>0){let p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(i>a&&i>d){let p=2*Math.sqrt(1+i-a-d);this._w=(h-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>d){let p=2*Math.sqrt(1+a-i-d);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+d-i-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(En(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),d=Math.sin((1-t)*h)/c,u=Math.sin(t*h)/c;return this._w=o*d+this._w*u,this._x=i*d+this._x*u,this._y=s*d+this._y*u,this._z=r*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*__sr(),t=2*Math.PI*__sr(),i=__sr(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},P=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Nd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Nd.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),h=2*(a*t-r*s),d=2*(r*i-o*t);return this.x=t+l*c+o*d-a*h,this.y=i+l*h+a*c-r*d,this.z=s+l*d+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ml.copy(this).projectOnVector(e),this.sub(Ml)}reflect(e){return this.sub(Ml.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(En(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=__sr(),this.y=__sr(),this.z=__sr(),this}randomDirection(){let e=__sr()*Math.PI*2,t=__sr()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ml=new P,Nd=new ts,Ui=class{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(ei.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(ei.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=ei.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ei):ei.fromBufferAttribute(r,o),ei.applyMatrix4(e.matrixWorld),this.expandByPoint(ei);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Po.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Po.copy(i.boundingBox)),Po.applyMatrix4(e.matrixWorld),this.union(Po)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ei),ei.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Gr),Io.subVectors(this.max,Gr),Zs.subVectors(e.a,Gr),$s.subVectors(e.b,Gr),Js.subVectors(e.c,Gr),Wi.subVectors($s,Zs),Xi.subVectors(Js,$s),ys.subVectors(Zs,Js);let t=[0,-Wi.z,Wi.y,0,-Xi.z,Xi.y,0,-ys.z,ys.y,Wi.z,0,-Wi.x,Xi.z,0,-Xi.x,ys.z,0,-ys.x,-Wi.y,Wi.x,0,-Xi.y,Xi.x,0,-ys.y,ys.x,0];return!Sl(t,Zs,$s,Js,Io)||(t=[1,0,0,0,1,0,0,0,1],!Sl(t,Zs,$s,Js,Io))?!1:(Lo.crossVectors(Wi,Xi),t=[Lo.x,Lo.y,Lo.z],Sl(t,Zs,$s,Js,Io))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ei).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ei).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Si[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Si[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Si[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Si[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Si[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Si[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Si[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Si[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Si),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Si=[new P,new P,new P,new P,new P,new P,new P,new P],ei=new P,Po=new Ui,Zs=new P,$s=new P,Js=new P,Wi=new P,Xi=new P,ys=new P,Gr=new P,Io=new P,Lo=new P,vs=new P;function Sl(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){vs.fromArray(n,r);let a=s.x*Math.abs(vs.x)+s.y*Math.abs(vs.y)+s.z*Math.abs(vs.z),l=e.dot(vs),c=t.dot(vs),h=i.dot(vs);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var ap=new Ui,Vr=new P,Tl=new P,ns=class{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):ap.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Vr.subVectors(e,this.center);let t=Vr.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Vr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Tl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Vr.copy(e.center).add(Tl)),this.expandByPoint(Vr.copy(e.center).sub(Tl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Ti=new P,bl=new P,Do=new P,qi=new P,wl=new P,Uo=new P,Rl=new P,ya=class{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ti)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ti.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ti.copy(this.origin).addScaledVector(this.direction,t),Ti.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){bl.copy(e).add(t).multiplyScalar(.5),Do.copy(t).sub(e).normalize(),qi.copy(this.origin).sub(bl);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Do),a=qi.dot(this.direction),l=-qi.dot(Do),c=qi.lengthSq(),h=Math.abs(1-o*o),d,u,p,g;if(h>0)if(d=o*l-a,u=o*a-l,g=r*h,d>=0)if(u>=-g)if(u<=g){let E=1/h;d*=E,u*=E,p=d*(d+o*u+2*a)+u*(o*d+u+2*l)+c}else u=r,d=Math.max(0,-(o*u+a)),p=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(o*u+a)),p=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-l),r),p=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-r,-l),r),p=u*(u+2*l)+c):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-l),r),p=-d*d+u*(u+2*l)+c);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),p=-d*d+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(bl).addScaledVector(Do,u),p}intersectSphere(e,t){Ti.subVectors(e.center,this.origin);let i=Ti.dot(this.direction),s=Ti.dot(Ti)-i*i,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(i=(e.min.x-u.x)*c,s=(e.max.x-u.x)*c):(i=(e.max.x-u.x)*c,s=(e.min.x-u.x)*c),h>=0?(r=(e.min.y-u.y)*h,o=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,o=(e.min.y-u.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(a=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Ti)!==null}intersectTriangle(e,t,i,s,r){wl.subVectors(t,e),Uo.subVectors(i,e),Rl.crossVectors(wl,Uo);let o=this.direction.dot(Rl),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;qi.subVectors(this.origin,e);let l=a*this.direction.dot(Uo.crossVectors(qi,Uo));if(l<0)return null;let c=a*this.direction.dot(wl.cross(qi));if(c<0||l+c>o)return null;let h=-a*qi.dot(Rl);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ct=class n{constructor(e,t,i,s,r,o,a,l,c,h,d,u,p,g,E,m){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,h,d,u,p,g,E,m)}set(e,t,i,s,r,o,a,l,c,h,d,u,p,g,E,m){let f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=h,f[10]=d,f[14]=u,f[3]=p,f[7]=g,f[11]=E,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,s=1/Qs.setFromMatrixColumn(e,0).length(),r=1/Qs.setFromMatrixColumn(e,1).length(),o=1/Qs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let u=o*h,p=o*d,g=a*h,E=a*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=p+g*c,t[5]=u-E*c,t[9]=-a*l,t[2]=E-u*c,t[6]=g+p*c,t[10]=o*l}else if(e.order==="YXZ"){let u=l*h,p=l*d,g=c*h,E=c*d;t[0]=u+E*a,t[4]=g*a-p,t[8]=o*c,t[1]=o*d,t[5]=o*h,t[9]=-a,t[2]=p*a-g,t[6]=E+u*a,t[10]=o*l}else if(e.order==="ZXY"){let u=l*h,p=l*d,g=c*h,E=c*d;t[0]=u-E*a,t[4]=-o*d,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*h,t[9]=E-u*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let u=o*h,p=o*d,g=a*h,E=a*d;t[0]=l*h,t[4]=g*c-p,t[8]=u*c+E,t[1]=l*d,t[5]=E*c+u,t[9]=p*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let u=o*l,p=o*c,g=a*l,E=a*c;t[0]=l*h,t[4]=E-u*d,t[8]=g*d+p,t[1]=d,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=p*d+g,t[10]=u-E*d}else if(e.order==="XZY"){let u=o*l,p=o*c,g=a*l,E=a*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=u*d+E,t[5]=o*h,t[9]=p*d-g,t[2]=g*d-p,t[6]=a*h,t[10]=E*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(lp,e,cp)}lookAt(e,t,i){let s=this.elements;return Nn.subVectors(e,t),Nn.lengthSq()===0&&(Nn.z=1),Nn.normalize(),Yi.crossVectors(i,Nn),Yi.lengthSq()===0&&(Math.abs(i.z)===1?Nn.x+=1e-4:Nn.z+=1e-4,Nn.normalize(),Yi.crossVectors(i,Nn)),Yi.normalize(),Ho.crossVectors(Nn,Yi),s[0]=Yi.x,s[4]=Ho.x,s[8]=Nn.x,s[1]=Yi.y,s[5]=Ho.y,s[9]=Nn.y,s[2]=Yi.z,s[6]=Ho.z,s[10]=Nn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],d=i[5],u=i[9],p=i[13],g=i[2],E=i[6],m=i[10],f=i[14],_=i[3],v=i[7],y=i[11],L=i[15],C=s[0],w=s[4],F=s[8],S=s[12],A=s[1],I=s[5],N=s[9],k=s[13],X=s[2],ee=s[6],Z=s[10],oe=s[14],Y=s[3],ue=s[7],Me=s[11],Oe=s[15];return r[0]=o*C+a*A+l*X+c*Y,r[4]=o*w+a*I+l*ee+c*ue,r[8]=o*F+a*N+l*Z+c*Me,r[12]=o*S+a*k+l*oe+c*Oe,r[1]=h*C+d*A+u*X+p*Y,r[5]=h*w+d*I+u*ee+p*ue,r[9]=h*F+d*N+u*Z+p*Me,r[13]=h*S+d*k+u*oe+p*Oe,r[2]=g*C+E*A+m*X+f*Y,r[6]=g*w+E*I+m*ee+f*ue,r[10]=g*F+E*N+m*Z+f*Me,r[14]=g*S+E*k+m*oe+f*Oe,r[3]=_*C+v*A+y*X+L*Y,r[7]=_*w+v*I+y*ee+L*ue,r[11]=_*F+v*N+y*Z+L*Me,r[15]=_*S+v*k+y*oe+L*Oe,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],d=e[6],u=e[10],p=e[14],g=e[3],E=e[7],m=e[11],f=e[15];return g*(+r*l*d-s*c*d-r*a*u+i*c*u+s*a*p-i*l*p)+E*(+t*l*p-t*c*u+r*o*u-s*o*p+s*c*h-r*l*h)+m*(+t*c*d-t*a*p-r*o*d+i*o*p+r*a*h-i*c*h)+f*(-s*a*h-t*l*d+t*a*u+s*o*d-i*o*u+i*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],p=e[11],g=e[12],E=e[13],m=e[14],f=e[15],_=d*m*c-E*u*c+E*l*p-a*m*p-d*l*f+a*u*f,v=g*u*c-h*m*c-g*l*p+o*m*p+h*l*f-o*u*f,y=h*E*c-g*d*c+g*a*p-o*E*p-h*a*f+o*d*f,L=g*d*l-h*E*l-g*a*u+o*E*u+h*a*m-o*d*m,C=t*_+i*v+s*y+r*L;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let w=1/C;return e[0]=_*w,e[1]=(E*u*r-d*m*r-E*s*p+i*m*p+d*s*f-i*u*f)*w,e[2]=(a*m*r-E*l*r+E*s*c-i*m*c-a*s*f+i*l*f)*w,e[3]=(d*l*r-a*u*r-d*s*c+i*u*c+a*s*p-i*l*p)*w,e[4]=v*w,e[5]=(h*m*r-g*u*r+g*s*p-t*m*p-h*s*f+t*u*f)*w,e[6]=(g*l*r-o*m*r-g*s*c+t*m*c+o*s*f-t*l*f)*w,e[7]=(o*u*r-h*l*r+h*s*c-t*u*c-o*s*p+t*l*p)*w,e[8]=y*w,e[9]=(g*d*r-h*E*r-g*i*p+t*E*p+h*i*f-t*d*f)*w,e[10]=(o*E*r-g*a*r+g*i*c-t*E*c-o*i*f+t*a*f)*w,e[11]=(h*a*r-o*d*r-h*i*c+t*d*c+o*i*p-t*a*p)*w,e[12]=L*w,e[13]=(h*E*s-g*d*s+g*i*u-t*E*u-h*i*m+t*d*m)*w,e[14]=(g*a*s-o*E*s-g*i*l+t*E*l+o*i*m-t*a*m)*w,e[15]=(o*d*s-h*a*s+h*i*l-t*d*l-o*i*u+t*a*u)*w,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,d=a+a,u=r*c,p=r*h,g=r*d,E=o*h,m=o*d,f=a*d,_=l*c,v=l*h,y=l*d,L=i.x,C=i.y,w=i.z;return s[0]=(1-(E+f))*L,s[1]=(p+y)*L,s[2]=(g-v)*L,s[3]=0,s[4]=(p-y)*C,s[5]=(1-(u+f))*C,s[6]=(m+_)*C,s[7]=0,s[8]=(g+v)*w,s[9]=(m-_)*w,s[10]=(1-(u+E))*w,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements,r=Qs.set(s[0],s[1],s[2]).length(),o=Qs.set(s[4],s[5],s[6]).length(),a=Qs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],ti.copy(this);let c=1/r,h=1/o,d=1/a;return ti.elements[0]*=c,ti.elements[1]*=c,ti.elements[2]*=c,ti.elements[4]*=h,ti.elements[5]*=h,ti.elements[6]*=h,ti.elements[8]*=d,ti.elements[9]*=d,ti.elements[10]*=d,t.setFromRotationMatrix(ti),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=Fi){let l=this.elements,c=2*r/(t-e),h=2*r/(i-s),d=(t+e)/(t-e),u=(i+s)/(i-s),p,g;if(a===Fi)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===fa)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=Fi){let l=this.elements,c=1/(t-e),h=1/(i-s),d=1/(o-r),u=(t+e)*c,p=(i+s)*h,g,E;if(a===Fi)g=(o+r)*d,E=-2*d;else if(a===fa)g=r*d,E=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=E,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},Qs=new P,ti=new Ct,lp=new P(0,0,0),cp=new P(1,1,1),Yi=new P,Ho=new P,Nn=new P,Od=new Ct,zd=new ts,gi=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(En(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-En(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(En(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-En(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(En(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-En(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Od.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Od,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return zd.setFromEuler(this),this.setFromQuaternion(zd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};gi.DEFAULT_ORDER="XYZ";var va=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},hp=0,kd=new P,Ks=new ts,bi=new Ct,Bo=new P,Wr=new P,dp=new P,up=new ts,Gd=new P(1,0,0),Vd=new P(0,1,0),Wd=new P(0,0,1),Xd={type:"added"},fp={type:"removed"},js={type:"childadded",child:null},xl={type:"childremoved",child:null},qt=class n extends es{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:hp++}),this.uuid=Pi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new P,t=new gi,i=new ts,s=new P(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ct},normalMatrix:{value:new Qe}}),this.matrix=new Ct,this.matrixWorld=new Ct,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new va,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ks.setFromAxisAngle(e,t),this.quaternion.multiply(Ks),this}rotateOnWorldAxis(e,t){return Ks.setFromAxisAngle(e,t),this.quaternion.premultiply(Ks),this}rotateX(e){return this.rotateOnAxis(Gd,e)}rotateY(e){return this.rotateOnAxis(Vd,e)}rotateZ(e){return this.rotateOnAxis(Wd,e)}translateOnAxis(e,t){return kd.copy(e).applyQuaternion(this.quaternion),this.position.add(kd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Gd,e)}translateY(e){return this.translateOnAxis(Vd,e)}translateZ(e){return this.translateOnAxis(Wd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(bi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Bo.copy(e):Bo.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Wr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?bi.lookAt(Wr,Bo,this.up):bi.lookAt(Bo,Wr,this.up),this.quaternion.setFromRotationMatrix(bi),s&&(bi.extractRotation(s.matrixWorld),Ks.setFromRotationMatrix(bi),this.quaternion.premultiply(Ks.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Xd),js.child=e,this.dispatchEvent(js),js.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(fp),xl.child=e,this.dispatchEvent(xl),xl.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),bi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),bi.multiply(e.parent.matrixWorld)),e.applyMatrix4(bi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Xd),js.child=e,this.dispatchEvent(js),js.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wr,e,dp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wr,up,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),d=o(e.shapes),u=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}};qt.DEFAULT_UP=new P(0,1,0);qt.DEFAULT_MATRIX_AUTO_UPDATE=!0;qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ni=new P,wi=new P,Cl=new P,Ri=new P,er=new P,tr=new P,qd=new P,Fl=new P,Pl=new P,Il=new P,Ll=new xt,Dl=new xt,Ul=new xt,Qi=class n{constructor(e=new P,t=new P,i=new P){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),ni.subVectors(e,t),s.cross(ni);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){ni.subVectors(s,t),wi.subVectors(i,t),Cl.subVectors(e,t);let o=ni.dot(ni),a=ni.dot(wi),l=ni.dot(Cl),c=wi.dot(wi),h=wi.dot(Cl),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let u=1/d,p=(c*l-a*h)*u,g=(o*h-a*l)*u;return r.set(1-p-g,g,p)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Ri)===null?!1:Ri.x>=0&&Ri.y>=0&&Ri.x+Ri.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,Ri)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ri.x),l.addScaledVector(o,Ri.y),l.addScaledVector(a,Ri.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return Ll.setScalar(0),Dl.setScalar(0),Ul.setScalar(0),Ll.fromBufferAttribute(e,t),Dl.fromBufferAttribute(e,i),Ul.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Ll,r.x),o.addScaledVector(Dl,r.y),o.addScaledVector(Ul,r.z),o}static isFrontFacing(e,t,i,s){return ni.subVectors(i,t),wi.subVectors(e,t),ni.cross(wi).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ni.subVectors(this.c,this.b),wi.subVectors(this.a,this.b),ni.cross(wi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,o,a;er.subVectors(s,i),tr.subVectors(r,i),Fl.subVectors(e,i);let l=er.dot(Fl),c=tr.dot(Fl);if(l<=0&&c<=0)return t.copy(i);Pl.subVectors(e,s);let h=er.dot(Pl),d=tr.dot(Pl);if(h>=0&&d<=h)return t.copy(s);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(i).addScaledVector(er,o);Il.subVectors(e,r);let p=er.dot(Il),g=tr.dot(Il);if(g>=0&&p<=g)return t.copy(r);let E=p*c-l*g;if(E<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(tr,a);let m=h*g-p*d;if(m<=0&&d-h>=0&&p-g>=0)return qd.subVectors(r,s),a=(d-h)/(d-h+(p-g)),t.copy(s).addScaledVector(qd,a);let f=1/(m+E+u);return o=E*f,a=u*f,t.copy(i).addScaledVector(er,o).addScaledVector(tr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Qu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Zi={h:0,s:0,l:0},No={h:0,s:0,l:0};function Hl(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var le=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Nt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ft.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=ft.workingColorSpace){return this.r=e,this.g=t,this.b=i,ft.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=ft.workingColorSpace){if(e=ep(e,1),t=En(t,0,1),i=En(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=Hl(o,r,e+1/3),this.g=Hl(o,r,e),this.b=Hl(o,r,e-1/3)}return ft.toWorkingColorSpace(this,s),this}setStyle(e,t=Nt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Nt){let i=Qu[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ii(e.r),this.g=Ii(e.g),this.b=Ii(e.b),this}copyLinearToSRGB(e){return this.r=pr(e.r),this.g=pr(e.g),this.b=pr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Nt){return ft.fromWorkingColorSpace(gn.copy(this),e),Math.round(En(gn.r*255,0,255))*65536+Math.round(En(gn.g*255,0,255))*256+Math.round(En(gn.b*255,0,255))}getHexString(e=Nt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ft.workingColorSpace){ft.fromWorkingColorSpace(gn.copy(this),t);let i=gn.r,s=gn.g,r=gn.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=ft.workingColorSpace){return ft.fromWorkingColorSpace(gn.copy(this),t),e.r=gn.r,e.g=gn.g,e.b=gn.b,e}getStyle(e=Nt){ft.fromWorkingColorSpace(gn.copy(this),e);let t=gn.r,i=gn.g,s=gn.b;return e!==Nt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Zi),this.setHSL(Zi.h+e,Zi.s+t,Zi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Zi),e.getHSL(No);let i=vl(Zi.h,No.h,t),s=vl(Zi.s,No.s,t),r=vl(Zi.l,No.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},gn=new le;le.NAMES=Qu;var pp=0,Hi=class extends es{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:pp++}),this.uuid=Pi(),this.name="",this.blending=Ki,this.side=ji,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Kl,this.blendDst=jl,this.blendEquation=bs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new le(0,0,0),this.blendAlpha=0,this.depthFunc=gr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Fd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qs,this.stencilZFail=qs,this.stencilZPass=qs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ki&&(i.blending=this.blending),this.side!==ji&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Kl&&(i.blendSrc=this.blendSrc),this.blendDst!==jl&&(i.blendDst=this.blendDst),this.blendEquation!==bs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==gr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Fd&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==qs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==qs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==qs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},nt=class extends Hi{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gi,this.combine=Bu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var $t=new P,Oo=new ie,Kt=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Bc,this.updateRanges=[],this.gpuType=fi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Oo.fromBufferAttribute(this,t),Oo.applyMatrix3(e),this.setXY(t,Oo.x,Oo.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix3(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix4(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)$t.fromBufferAttribute(this,t),$t.applyNormalMatrix(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)$t.fromBufferAttribute(this,t),$t.transformDirection(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=di(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Rt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=di(t,this.array)),t}setX(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=di(t,this.array)),t}setY(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=di(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=di(t,this.array)),t}setW(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Rt(t,this.array),i=Rt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Rt(t,this.array),i=Rt(i,this.array),s=Rt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=Rt(t,this.array),i=Rt(i,this.array),s=Rt(s,this.array),r=Rt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Bc&&(e.usage=this.usage),e}};var _a=class extends Kt{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Aa=class extends Kt{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var pt=class extends Kt{constructor(e,t,i){super(new Float32Array(e),t,i)}},mp=0,Wn=new Ct,Bl=new qt,nr=new P,On=new Ui,Xr=new Ui,nn=new P,Wt=class n extends es{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:mp++}),this.uuid=Pi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ju(e)?Aa:_a)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Qe().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Wn.makeRotationFromQuaternion(e),this.applyMatrix4(Wn),this}rotateX(e){return Wn.makeRotationX(e),this.applyMatrix4(Wn),this}rotateY(e){return Wn.makeRotationY(e),this.applyMatrix4(Wn),this}rotateZ(e){return Wn.makeRotationZ(e),this.applyMatrix4(Wn),this}translate(e,t,i){return Wn.makeTranslation(e,t,i),this.applyMatrix4(Wn),this}scale(e,t,i){return Wn.makeScale(e,t,i),this.applyMatrix4(Wn),this}lookAt(e){return Bl.lookAt(e),Bl.updateMatrix(),this.applyMatrix4(Bl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(nr).negate(),this.translate(nr.x,nr.y,nr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new pt(i,3))}else{for(let i=0,s=t.count;i<s;i++){let r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ui);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];On.setFromBufferAttribute(r),this.morphTargetsRelative?(nn.addVectors(this.boundingBox.min,On.min),this.boundingBox.expandByPoint(nn),nn.addVectors(this.boundingBox.max,On.max),this.boundingBox.expandByPoint(nn)):(this.boundingBox.expandByPoint(On.min),this.boundingBox.expandByPoint(On.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ns);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){let i=this.boundingSphere.center;if(On.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Xr.setFromBufferAttribute(a),this.morphTargetsRelative?(nn.addVectors(On.min,Xr.min),On.expandByPoint(nn),nn.addVectors(On.max,Xr.max),On.expandByPoint(nn)):(On.expandByPoint(Xr.min),On.expandByPoint(Xr.max))}On.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)nn.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(nn));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)nn.fromBufferAttribute(a,c),l&&(nr.fromBufferAttribute(e,c),nn.add(nr)),s=Math.max(s,i.distanceToSquared(nn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Kt(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let F=0;F<i.count;F++)a[F]=new P,l[F]=new P;let c=new P,h=new P,d=new P,u=new ie,p=new ie,g=new ie,E=new P,m=new P;function f(F,S,A){c.fromBufferAttribute(i,F),h.fromBufferAttribute(i,S),d.fromBufferAttribute(i,A),u.fromBufferAttribute(r,F),p.fromBufferAttribute(r,S),g.fromBufferAttribute(r,A),h.sub(c),d.sub(c),p.sub(u),g.sub(u);let I=1/(p.x*g.y-g.x*p.y);isFinite(I)&&(E.copy(h).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(I),m.copy(d).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(I),a[F].add(E),a[S].add(E),a[A].add(E),l[F].add(m),l[S].add(m),l[A].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let F=0,S=_.length;F<S;++F){let A=_[F],I=A.start,N=A.count;for(let k=I,X=I+N;k<X;k+=3)f(e.getX(k+0),e.getX(k+1),e.getX(k+2))}let v=new P,y=new P,L=new P,C=new P;function w(F){L.fromBufferAttribute(s,F),C.copy(L);let S=a[F];v.copy(S),v.sub(L.multiplyScalar(L.dot(S))).normalize(),y.crossVectors(C,S);let I=y.dot(l[F])<0?-1:1;o.setXYZW(F,v.x,v.y,v.z,I)}for(let F=0,S=_.length;F<S;++F){let A=_[F],I=A.start,N=A.count;for(let k=I,X=I+N;k<X;k+=3)w(e.getX(k+0)),w(e.getX(k+1)),w(e.getX(k+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Kt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let u=0,p=i.count;u<p;u++)i.setXYZ(u,0,0,0);let s=new P,r=new P,o=new P,a=new P,l=new P,c=new P,h=new P,d=new P;if(e)for(let u=0,p=e.count;u<p;u+=3){let g=e.getX(u+0),E=e.getX(u+1),m=e.getX(u+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,E),o.fromBufferAttribute(t,m),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,m),a.add(h),l.add(h),c.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(E,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,p=t.count;u<p;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)nn.fromBufferAttribute(e,t),nn.normalize(),e.setXYZ(t,nn.x,nn.y,nn.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h),p=0,g=0;for(let E=0,m=l.length;E<m;E++){a.isInterleavedBufferAttribute?p=l[E]*a.data.stride+a.offset:p=l[E]*h;for(let f=0;f<h;f++)u[g++]=c[p++]}return new Kt(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,i);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){let u=c[h],p=e(u,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let p=c[d];h.push(p.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,p=d.length;u<p;u++)h.push(d[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Yd=new Ct,_s=new ya,zo=new ns,Zd=new P,ko=new P,Go=new P,Vo=new P,Nl=new P,Wo=new P,$d=new P,Xo=new P,O=class extends qt{constructor(e=new Wt,t=new nt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){Wo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],d=r[l];h!==0&&(Nl.fromBufferAttribute(d,e),o?Wo.addScaledVector(Nl,h):Wo.addScaledVector(Nl.sub(t),h))}t.add(Wo)}return t}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),zo.copy(i.boundingSphere),zo.applyMatrix4(r),_s.copy(e.ray).recast(e.near),!(zo.containsPoint(_s.origin)===!1&&(_s.intersectSphere(zo,Zd)===null||_s.origin.distanceToSquared(Zd)>(e.far-e.near)**2))&&(Yd.copy(r).invert(),_s.copy(e.ray).applyMatrix4(Yd),!(i.boundingBox!==null&&_s.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,_s)))}_computeIntersections(e,t,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,E=u.length;g<E;g++){let m=u[g],f=o[m.materialIndex],_=Math.max(m.start,p.start),v=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let y=_,L=v;y<L;y+=3){let C=a.getX(y),w=a.getX(y+1),F=a.getX(y+2);s=qo(this,f,e,i,c,h,d,C,w,F),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,p.start),E=Math.min(a.count,p.start+p.count);for(let m=g,f=E;m<f;m+=3){let _=a.getX(m),v=a.getX(m+1),y=a.getX(m+2);s=qo(this,o,e,i,c,h,d,_,v,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,E=u.length;g<E;g++){let m=u[g],f=o[m.materialIndex],_=Math.max(m.start,p.start),v=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=_,L=v;y<L;y+=3){let C=y,w=y+1,F=y+2;s=qo(this,f,e,i,c,h,d,C,w,F),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,p.start),E=Math.min(l.count,p.start+p.count);for(let m=g,f=E;m<f;m+=3){let _=m,v=m+1,y=m+2;s=qo(this,o,e,i,c,h,d,_,v,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function gp(n,e,t,i,s,r,o,a){let l;if(e.side===sn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===ji,a),l===null)return null;Xo.copy(a),Xo.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(Xo);return c<t.near||c>t.far?null:{distance:c,point:Xo.clone(),object:n}}function qo(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,ko),n.getVertexPosition(l,Go),n.getVertexPosition(c,Vo);let h=gp(n,e,t,i,ko,Go,Vo,$d);if(h){let d=new P;Qi.getBarycoord($d,ko,Go,Vo,d),s&&(h.uv=Qi.getInterpolatedAttribute(s,a,l,c,d,new ie)),r&&(h.uv1=Qi.getInterpolatedAttribute(r,a,l,c,d,new ie)),o&&(h.normal=Qi.getInterpolatedAttribute(o,a,l,c,d,new P),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new P,materialIndex:0};Qi.getNormal(ko,Go,Vo,u.normal),h.face=u,h.barycoord=d}return h}var Cn=class n extends Wt{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],d=[],u=0,p=0;g("z","y","x",-1,-1,i,t,e,o,r,0),g("z","y","x",1,-1,i,t,-e,o,r,1),g("x","z","y",1,1,e,i,t,s,o,2),g("x","z","y",1,-1,e,i,-t,s,o,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new pt(c,3)),this.setAttribute("normal",new pt(h,3)),this.setAttribute("uv",new pt(d,2));function g(E,m,f,_,v,y,L,C,w,F,S){let A=y/w,I=L/F,N=y/2,k=L/2,X=C/2,ee=w+1,Z=F+1,oe=0,Y=0,ue=new P;for(let Me=0;Me<Z;Me++){let Oe=Me*I-k;for(let st=0;st<ee;st++){let Ft=st*A-N;ue[E]=Ft*_,ue[m]=Oe*v,ue[f]=X,c.push(ue.x,ue.y,ue.z),ue[E]=0,ue[m]=0,ue[f]=C>0?1:-1,h.push(ue.x,ue.y,ue.z),d.push(st/w),d.push(1-Me/F),oe+=1}}for(let Me=0;Me<F;Me++)for(let Oe=0;Oe<w;Oe++){let st=u+Oe+ee*Me,Ft=u+Oe+ee*(Me+1),J=u+(Oe+1)+ee*(Me+1),ae=u+(Oe+1)+ee*Me;l.push(st,Ft,ae),l.push(Ft,J,ae),Y+=6}a.addGroup(p,Y,S),p+=Y,u+=oe}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Ar(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Mn(n){let e={};for(let t=0;t<n.length;t++){let i=Ar(n[t]);for(let s in i)e[s]=i[s]}return e}function Ep(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Ku(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ft.workingColorSpace}var Fr={clone:Ar,merge:Mn},yp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,vp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,an=class extends Hi{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=yp,this.fragmentShader=vp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ar(e.uniforms),this.uniformsGroups=Ep(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},Ma=class extends qt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ct,this.projectionMatrix=new Ct,this.projectionMatrixInverse=new Ct,this.coordinateSystem=Fi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},$i=new P,Jd=new ie,Qd=new ie,dn=class extends Ma{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=pa*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(yl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return pa*2*Math.atan(Math.tan(yl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){$i.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set($i.x,$i.y).multiplyScalar(-e/$i.z),$i.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set($i.x,$i.y).multiplyScalar(-e/$i.z)}getViewSize(e,t){return this.getViewBounds(e,Jd,Qd),t.subVectors(Qd,Jd)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(yl*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},ir=-90,sr=1,kc=class extends qt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new dn(ir,sr,e,t);s.layers=this.layers,this.add(s);let r=new dn(ir,sr,e,t);r.layers=this.layers,this.add(r);let o=new dn(ir,sr,e,t);o.layers=this.layers,this.add(o);let a=new dn(ir,sr,e,t);a.layers=this.layers,this.add(a);let l=new dn(ir,sr,e,t);l.layers=this.layers,this.add(l);let c=new dn(ir,sr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===Fi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===fa)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let E=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=E,e.setRenderTarget(i,5,s),e.render(t,h),e.setRenderTarget(d,u,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},Sa=class extends xn{constructor(e,t,i,s,r,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Er,super(e,t,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Gc=class extends on{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Sa(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:ui}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Cn(5,5,5),r=new an({name:"CubemapFromEquirect",uniforms:Ar(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:sn,blending:pi});r.uniforms.tEquirect.value=t;let o=new O(s,r),a=t.minFilter;return t.minFilter===xs&&(t.minFilter=ui),new kc(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}},Ol=new P,_p=new P,Ap=new Qe,Ci=class{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=Ol.subVectors(i,t).cross(_p.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(Ol),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Ap.getNormalMatrix(e),s=this.coplanarPoint(Ol).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},As=new ns,Yo=new P,ro=class{constructor(e=new Ci,t=new Ci,i=new Ci,s=new Ci,r=new Ci,o=new Ci){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Fi){let i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],d=s[6],u=s[7],p=s[8],g=s[9],E=s[10],m=s[11],f=s[12],_=s[13],v=s[14],y=s[15];if(i[0].setComponents(l-r,u-c,m-p,y-f).normalize(),i[1].setComponents(l+r,u+c,m+p,y+f).normalize(),i[2].setComponents(l+o,u+h,m+g,y+_).normalize(),i[3].setComponents(l-o,u-h,m-g,y-_).normalize(),i[4].setComponents(l-a,u-d,m-E,y-v).normalize(),t===Fi)i[5].setComponents(l+a,u+d,m+E,y+v).normalize();else if(t===fa)i[5].setComponents(a,d,E,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),As.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),As.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(As)}intersectsSprite(e){return As.center.set(0,0,0),As.radius=.7071067811865476,As.applyMatrix4(e.matrixWorld),this.intersectsSphere(As)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(Yo.x=s.normal.x>0?e.max.x:e.min.x,Yo.y=s.normal.y>0?e.max.y:e.min.y,Yo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Yo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function ju(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.__noRaf(s)}return{start:function(){e!==!0&&t!==null&&(i=n.__noRaf(s),e=!0)},stop:function(){n.__noCaf(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function Mp(n){let e=new WeakMap;function t(a,l){let c=a.array,h=a.usage,d=c.byteLength,u=n.createBuffer();n.bindBuffer(l,u),n.bufferData(l,c,h),a.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){let h=l.array,d=l.updateRanges;if(n.bindBuffer(c,a),d.length===0)n.bufferSubData(c,0,h);else{d.sort((p,g)=>p.start-g.start);let u=0;for(let p=1;p<d.length;p++){let g=d[u],E=d[p];E.start<=g.start+g.count+1?g.count=Math.max(g.count,E.start+E.count-g.start):(++u,d[u]=E)}d.length=u+1;for(let p=0,g=d.length;p<g;p++){let E=d[p];n.bufferSubData(c,E.start*h.BYTES_PER_ELEMENT,h,E.start,E.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Ae=class n extends Wt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,d=e/a,u=t/l,p=[],g=[],E=[],m=[];for(let f=0;f<h;f++){let _=f*u-o;for(let v=0;v<c;v++){let y=v*d-r;g.push(y,-_,0),E.push(0,0,1),m.push(v/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let _=0;_<a;_++){let v=_+c*f,y=_+c*(f+1),L=_+1+c*(f+1),C=_+1+c*f;p.push(v,y,C),p.push(y,L,C)}this.setIndex(p),this.setAttribute("position",new pt(g,3)),this.setAttribute("normal",new pt(E,3)),this.setAttribute("uv",new pt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},Sp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Tp=`#ifdef USE_ALPHAHASH
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
#endif`,bp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,wp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Rp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,xp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Cp=`#ifdef USE_AOMAP
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
#endif`,Fp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Pp=`#ifdef USE_BATCHING
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
#endif`,Ip=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Lp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Dp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Up=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Hp=`#ifdef USE_IRIDESCENCE
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
#endif`,Bp=`#ifdef USE_BUMPMAP
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
#endif`,Np=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Op=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,zp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,kp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Gp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Vp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Wp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Xp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,qp=`#define PI 3.141592653589793
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
} // validated`,Yp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Zp=`vec3 transformedNormal = objectNormal;
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
#endif`,$p=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Jp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Qp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Kp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,jp="gl_FragColor = linearToOutputTexel( gl_FragColor );",e1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,t1=`#ifdef USE_ENVMAP
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
#endif`,n1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,i1=`#ifdef USE_ENVMAP
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
#endif`,s1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,r1=`#ifdef USE_ENVMAP
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
#endif`,o1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,a1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,l1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,c1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,h1=`#ifdef USE_GRADIENTMAP
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
}`,d1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,u1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,f1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,p1=`uniform bool receiveShadow;
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
#endif`,m1=`#ifdef USE_ENVMAP
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
#endif`,g1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,E1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,y1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,v1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,_1=`PhysicalMaterial material;
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
#endif`,A1=`struct PhysicalMaterial {
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
}`,M1=`
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
#endif`,S1=`#if defined( RE_IndirectDiffuse )
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
#endif`,T1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,b1=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,w1=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,R1=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,x1=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,C1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,F1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,P1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,I1=`#if defined( USE_POINTS_UV )
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
#endif`,L1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,D1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,U1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,H1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,B1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,N1=`#ifdef USE_MORPHTARGETS
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
#endif`,O1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,z1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,k1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,G1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,V1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,W1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,X1=`#ifdef USE_NORMALMAP
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
#endif`,q1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Y1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Z1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,$1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,J1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Q1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,K1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,j1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,em=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,tm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,nm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,im=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,sm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,rm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,om=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,am=`float getShadowMask() {
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
}`,lm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,cm=`#ifdef USE_SKINNING
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
#endif`,hm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,dm=`#ifdef USE_SKINNING
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
#endif`,um=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,fm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,pm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,mm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,gm=`#ifdef USE_TRANSMISSION
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
#endif`,Em=`#ifdef USE_TRANSMISSION
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
#endif`,ym=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_m=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Am=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Mm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Sm=`uniform sampler2D t2D;
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
}`,Tm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,wm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xm=`#include <common>
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
}`,Cm=`#if DEPTH_PACKING == 3200
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
}`,Fm=`#define DISTANCE
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
}`,Pm=`#define DISTANCE
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
}`,Im=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Lm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dm=`uniform float scale;
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
}`,Um=`uniform vec3 diffuse;
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
}`,Hm=`#include <common>
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
}`,Bm=`uniform vec3 diffuse;
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
}`,Nm=`#define LAMBERT
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
}`,Om=`#define LAMBERT
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
}`,zm=`#define MATCAP
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
}`,km=`#define MATCAP
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
}`,Gm=`#define NORMAL
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
}`,Vm=`#define NORMAL
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
}`,Wm=`#define PHONG
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
}`,Xm=`#define PHONG
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
}`,qm=`#define STANDARD
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
}`,Ym=`#define STANDARD
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
}`,Zm=`#define TOON
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
}`,$m=`#define TOON
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
}`,Jm=`uniform float size;
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
}`,Qm=`uniform vec3 diffuse;
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
}`,Km=`#include <common>
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
}`,jm=`uniform vec3 color;
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
}`,e2=`uniform float rotation;
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
}`,t2=`uniform vec3 diffuse;
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
}`,tt={alphahash_fragment:Sp,alphahash_pars_fragment:Tp,alphamap_fragment:bp,alphamap_pars_fragment:wp,alphatest_fragment:Rp,alphatest_pars_fragment:xp,aomap_fragment:Cp,aomap_pars_fragment:Fp,batching_pars_vertex:Pp,batching_vertex:Ip,begin_vertex:Lp,beginnormal_vertex:Dp,bsdfs:Up,iridescence_fragment:Hp,bumpmap_pars_fragment:Bp,clipping_planes_fragment:Np,clipping_planes_pars_fragment:Op,clipping_planes_pars_vertex:zp,clipping_planes_vertex:kp,color_fragment:Gp,color_pars_fragment:Vp,color_pars_vertex:Wp,color_vertex:Xp,common:qp,cube_uv_reflection_fragment:Yp,defaultnormal_vertex:Zp,displacementmap_pars_vertex:$p,displacementmap_vertex:Jp,emissivemap_fragment:Qp,emissivemap_pars_fragment:Kp,colorspace_fragment:jp,colorspace_pars_fragment:e1,envmap_fragment:t1,envmap_common_pars_fragment:n1,envmap_pars_fragment:i1,envmap_pars_vertex:s1,envmap_physical_pars_fragment:m1,envmap_vertex:r1,fog_vertex:o1,fog_pars_vertex:a1,fog_fragment:l1,fog_pars_fragment:c1,gradientmap_pars_fragment:h1,lightmap_pars_fragment:d1,lights_lambert_fragment:u1,lights_lambert_pars_fragment:f1,lights_pars_begin:p1,lights_toon_fragment:g1,lights_toon_pars_fragment:E1,lights_phong_fragment:y1,lights_phong_pars_fragment:v1,lights_physical_fragment:_1,lights_physical_pars_fragment:A1,lights_fragment_begin:M1,lights_fragment_maps:S1,lights_fragment_end:T1,logdepthbuf_fragment:b1,logdepthbuf_pars_fragment:w1,logdepthbuf_pars_vertex:R1,logdepthbuf_vertex:x1,map_fragment:C1,map_pars_fragment:F1,map_particle_fragment:P1,map_particle_pars_fragment:I1,metalnessmap_fragment:L1,metalnessmap_pars_fragment:D1,morphinstance_vertex:U1,morphcolor_vertex:H1,morphnormal_vertex:B1,morphtarget_pars_vertex:N1,morphtarget_vertex:O1,normal_fragment_begin:z1,normal_fragment_maps:k1,normal_pars_fragment:G1,normal_pars_vertex:V1,normal_vertex:W1,normalmap_pars_fragment:X1,clearcoat_normal_fragment_begin:q1,clearcoat_normal_fragment_maps:Y1,clearcoat_pars_fragment:Z1,iridescence_pars_fragment:$1,opaque_fragment:J1,packing:Q1,premultiplied_alpha_fragment:K1,project_vertex:j1,dithering_fragment:em,dithering_pars_fragment:tm,roughnessmap_fragment:nm,roughnessmap_pars_fragment:im,shadowmap_pars_fragment:sm,shadowmap_pars_vertex:rm,shadowmap_vertex:om,shadowmask_pars_fragment:am,skinbase_vertex:lm,skinning_pars_vertex:cm,skinning_vertex:hm,skinnormal_vertex:dm,specularmap_fragment:um,specularmap_pars_fragment:fm,tonemapping_fragment:pm,tonemapping_pars_fragment:mm,transmission_fragment:gm,transmission_pars_fragment:Em,uv_pars_fragment:ym,uv_pars_vertex:vm,uv_vertex:_m,worldpos_vertex:Am,background_vert:Mm,background_frag:Sm,backgroundCube_vert:Tm,backgroundCube_frag:bm,cube_vert:wm,cube_frag:Rm,depth_vert:xm,depth_frag:Cm,distanceRGBA_vert:Fm,distanceRGBA_frag:Pm,equirect_vert:Im,equirect_frag:Lm,linedashed_vert:Dm,linedashed_frag:Um,meshbasic_vert:Hm,meshbasic_frag:Bm,meshlambert_vert:Nm,meshlambert_frag:Om,meshmatcap_vert:zm,meshmatcap_frag:km,meshnormal_vert:Gm,meshnormal_frag:Vm,meshphong_vert:Wm,meshphong_frag:Xm,meshphysical_vert:qm,meshphysical_frag:Ym,meshtoon_vert:Zm,meshtoon_frag:$m,points_vert:Jm,points_frag:Qm,shadow_vert:Km,shadow_frag:jm,sprite_vert:e2,sprite_frag:t2},he={common:{diffuse:{value:new le(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qe}},envmap:{envMap:{value:null},envMapRotation:{value:new Qe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qe},normalScale:{value:new ie(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new le(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new le(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0},uvTransform:{value:new Qe}},sprite:{diffuse:{value:new le(16777215)},opacity:{value:1},center:{value:new ie(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}}},hi={basic:{uniforms:Mn([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:tt.meshbasic_vert,fragmentShader:tt.meshbasic_frag},lambert:{uniforms:Mn([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new le(0)}}]),vertexShader:tt.meshlambert_vert,fragmentShader:tt.meshlambert_frag},phong:{uniforms:Mn([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new le(0)},specular:{value:new le(1118481)},shininess:{value:30}}]),vertexShader:tt.meshphong_vert,fragmentShader:tt.meshphong_frag},standard:{uniforms:Mn([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new le(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag},toon:{uniforms:Mn([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new le(0)}}]),vertexShader:tt.meshtoon_vert,fragmentShader:tt.meshtoon_frag},matcap:{uniforms:Mn([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:tt.meshmatcap_vert,fragmentShader:tt.meshmatcap_frag},points:{uniforms:Mn([he.points,he.fog]),vertexShader:tt.points_vert,fragmentShader:tt.points_frag},dashed:{uniforms:Mn([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:tt.linedashed_vert,fragmentShader:tt.linedashed_frag},depth:{uniforms:Mn([he.common,he.displacementmap]),vertexShader:tt.depth_vert,fragmentShader:tt.depth_frag},normal:{uniforms:Mn([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:tt.meshnormal_vert,fragmentShader:tt.meshnormal_frag},sprite:{uniforms:Mn([he.sprite,he.fog]),vertexShader:tt.sprite_vert,fragmentShader:tt.sprite_frag},background:{uniforms:{uvTransform:{value:new Qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:tt.background_vert,fragmentShader:tt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Qe}},vertexShader:tt.backgroundCube_vert,fragmentShader:tt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:tt.cube_vert,fragmentShader:tt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:tt.equirect_vert,fragmentShader:tt.equirect_frag},distanceRGBA:{uniforms:Mn([he.common,he.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:tt.distanceRGBA_vert,fragmentShader:tt.distanceRGBA_frag},shadow:{uniforms:Mn([he.lights,he.fog,{color:{value:new le(0)},opacity:{value:1}}]),vertexShader:tt.shadow_vert,fragmentShader:tt.shadow_frag}};hi.physical={uniforms:Mn([hi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qe},clearcoatNormalScale:{value:new ie(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qe},sheen:{value:0},sheenColor:{value:new le(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qe},transmissionSamplerSize:{value:new ie},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qe},attenuationDistance:{value:0},attenuationColor:{value:new le(0)},specularColor:{value:new le(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qe},anisotropyVector:{value:new ie},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qe}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag};var Zo={r:0,b:0,g:0},Ms=new gi,n2=new Ct;function i2(n,e,t,i,s,r,o){let a=new le(0),l=r===!0?0:1,c,h,d=null,u=0,p=null;function g(_){let v=_.isScene===!0?_.background:null;return v&&v.isTexture&&(v=(_.backgroundBlurriness>0?t:e).get(v)),v}function E(_){let v=!1,y=g(_);y===null?f(a,l):y&&y.isColor&&(f(y,1),v=!0);let L=n.xr.getEnvironmentBlendMode();L==="additive"?i.buffers.color.setClear(0,0,0,1,o):L==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(_,v){let y=g(v);y&&(y.isCubeTexture||y.mapping===Oa)?(h===void 0&&(h=new O(new Cn(1,1,1),new an({name:"BackgroundCubeMaterial",uniforms:Ar(hi.backgroundCube.uniforms),vertexShader:hi.backgroundCube.vertexShader,fragmentShader:hi.backgroundCube.fragmentShader,side:sn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(L,C,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Ms.copy(v.backgroundRotation),Ms.x*=-1,Ms.y*=-1,Ms.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Ms.y*=-1,Ms.z*=-1),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(n2.makeRotationFromEuler(Ms)),h.material.toneMapped=ft.getTransfer(y.colorSpace)!==wt,(d!==y||u!==y.version||p!==n.toneMapping)&&(h.material.needsUpdate=!0,d=y,u=y.version,p=n.toneMapping),h.layers.enableAll(),_.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new O(new Ae(2,2),new an({name:"BackgroundMaterial",uniforms:Ar(hi.background.uniforms),vertexShader:hi.background.vertexShader,fragmentShader:hi.background.fragmentShader,side:ji,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=ft.getTransfer(y.colorSpace)!==wt,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(d!==y||u!==y.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,d=y,u=y.version,p=n.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function f(_,v){_.getRGB(Zo,Ku(n)),i.buffers.color.setClear(Zo.r,Zo.g,Zo.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(_,v=1){a.set(_),l=v,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,f(a,l)},render:E,addToRenderList:m}}function s2(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=u(null),r=s,o=!1;function a(A,I,N,k,X){let ee=!1,Z=d(k,N,I);r!==Z&&(r=Z,c(r.object)),ee=p(A,k,N,X),ee&&g(A,k,N,X),X!==null&&e.update(X,n.ELEMENT_ARRAY_BUFFER),(ee||o)&&(o=!1,y(A,I,N,k),X!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function l(){return n.createVertexArray()}function c(A){return n.bindVertexArray(A)}function h(A){return n.deleteVertexArray(A)}function d(A,I,N){let k=N.wireframe===!0,X=i[A.id];X===void 0&&(X={},i[A.id]=X);let ee=X[I.id];ee===void 0&&(ee={},X[I.id]=ee);let Z=ee[k];return Z===void 0&&(Z=u(l()),ee[k]=Z),Z}function u(A){let I=[],N=[],k=[];for(let X=0;X<t;X++)I[X]=0,N[X]=0,k[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:N,attributeDivisors:k,object:A,attributes:{},index:null}}function p(A,I,N,k){let X=r.attributes,ee=I.attributes,Z=0,oe=N.getAttributes();for(let Y in oe)if(oe[Y].location>=0){let Me=X[Y],Oe=ee[Y];if(Oe===void 0&&(Y==="instanceMatrix"&&A.instanceMatrix&&(Oe=A.instanceMatrix),Y==="instanceColor"&&A.instanceColor&&(Oe=A.instanceColor)),Me===void 0||Me.attribute!==Oe||Oe&&Me.data!==Oe.data)return!0;Z++}return r.attributesNum!==Z||r.index!==k}function g(A,I,N,k){let X={},ee=I.attributes,Z=0,oe=N.getAttributes();for(let Y in oe)if(oe[Y].location>=0){let Me=ee[Y];Me===void 0&&(Y==="instanceMatrix"&&A.instanceMatrix&&(Me=A.instanceMatrix),Y==="instanceColor"&&A.instanceColor&&(Me=A.instanceColor));let Oe={};Oe.attribute=Me,Me&&Me.data&&(Oe.data=Me.data),X[Y]=Oe,Z++}r.attributes=X,r.attributesNum=Z,r.index=k}function E(){let A=r.newAttributes;for(let I=0,N=A.length;I<N;I++)A[I]=0}function m(A){f(A,0)}function f(A,I){let N=r.newAttributes,k=r.enabledAttributes,X=r.attributeDivisors;N[A]=1,k[A]===0&&(n.enableVertexAttribArray(A),k[A]=1),X[A]!==I&&(n.vertexAttribDivisor(A,I),X[A]=I)}function _(){let A=r.newAttributes,I=r.enabledAttributes;for(let N=0,k=I.length;N<k;N++)I[N]!==A[N]&&(n.disableVertexAttribArray(N),I[N]=0)}function v(A,I,N,k,X,ee,Z){Z===!0?n.vertexAttribIPointer(A,I,N,X,ee):n.vertexAttribPointer(A,I,N,k,X,ee)}function y(A,I,N,k){E();let X=k.attributes,ee=N.getAttributes(),Z=I.defaultAttributeValues;for(let oe in ee){let Y=ee[oe];if(Y.location>=0){let ue=X[oe];if(ue===void 0&&(oe==="instanceMatrix"&&A.instanceMatrix&&(ue=A.instanceMatrix),oe==="instanceColor"&&A.instanceColor&&(ue=A.instanceColor)),ue!==void 0){let Me=ue.normalized,Oe=ue.itemSize,st=e.get(ue);if(st===void 0)continue;let Ft=st.buffer,J=st.type,ae=st.bytesPerElement,Ue=J===n.INT||J===n.UNSIGNED_INT||ue.gpuType===bh;if(ue.isInterleavedBufferAttribute){let fe=ue.data,Ve=fe.stride,Ze=ue.offset;if(fe.isInstancedInterleavedBuffer){for(let rt=0;rt<Y.locationSize;rt++)f(Y.location+rt,fe.meshPerAttribute);A.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let rt=0;rt<Y.locationSize;rt++)m(Y.location+rt);n.bindBuffer(n.ARRAY_BUFFER,Ft);for(let rt=0;rt<Y.locationSize;rt++)v(Y.location+rt,Oe/Y.locationSize,J,Me,Ve*ae,(Ze+Oe/Y.locationSize*rt)*ae,Ue)}else{if(ue.isInstancedBufferAttribute){for(let fe=0;fe<Y.locationSize;fe++)f(Y.location+fe,ue.meshPerAttribute);A.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let fe=0;fe<Y.locationSize;fe++)m(Y.location+fe);n.bindBuffer(n.ARRAY_BUFFER,Ft);for(let fe=0;fe<Y.locationSize;fe++)v(Y.location+fe,Oe/Y.locationSize,J,Me,Oe*ae,Oe/Y.locationSize*fe*ae,Ue)}}else if(Z!==void 0){let Me=Z[oe];if(Me!==void 0)switch(Me.length){case 2:n.vertexAttrib2fv(Y.location,Me);break;case 3:n.vertexAttrib3fv(Y.location,Me);break;case 4:n.vertexAttrib4fv(Y.location,Me);break;default:n.vertexAttrib1fv(Y.location,Me)}}}}_()}function L(){F();for(let A in i){let I=i[A];for(let N in I){let k=I[N];for(let X in k)h(k[X].object),delete k[X];delete I[N]}delete i[A]}}function C(A){if(i[A.id]===void 0)return;let I=i[A.id];for(let N in I){let k=I[N];for(let X in k)h(k[X].object),delete k[X];delete I[N]}delete i[A.id]}function w(A){for(let I in i){let N=i[I];if(N[A.id]===void 0)continue;let k=N[A.id];for(let X in k)h(k[X].object),delete k[X];delete N[A.id]}}function F(){S(),o=!0,r!==s&&(r=s,c(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:F,resetDefaultState:S,dispose:L,releaseStatesOfGeometry:C,releaseStatesOfProgram:w,initAttributes:E,enableAttribute:m,disableUnusedAttributes:_}}function r2(n,e,t){let i;function s(c){i=c}function r(c,h){n.drawArrays(i,c,h),t.update(h,i,1)}function o(c,h,d){d!==0&&(n.drawArraysInstanced(i,c,h,d),t.update(h,i,d))}function a(c,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,d);let p=0;for(let g=0;g<d;g++)p+=h[g];t.update(p,i,1)}function l(c,h,d,u){if(d===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],h[g],u[g]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,h,0,u,0,d);let g=0;for(let E=0;E<d;E++)g+=h[E]*u[E];t.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function o2(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let w=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(w){return!(w!==ii&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){let F=w===Pn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==Li&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==fi&&!F)}function l(w){if(w==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=t.logarithmicDepthBuffer===!0,u=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),f=n.getParameter(n.MAX_VERTEX_ATTRIBS),_=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),v=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),L=g>0,C=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:u,maxTextures:p,maxVertexTextures:g,maxTextureSize:E,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:_,maxVaryings:v,maxFragmentUniforms:y,vertexTextures:L,maxSamples:C}}function a2(n){let e=this,t=null,i=0,s=!1,r=!1,o=new Ci,a=new Qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let p=d.length!==0||u||i!==0||s;return s=u,i=d.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,p){let g=d.clippingPlanes,E=d.clipIntersection,m=d.clipShadows,f=n.get(d);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let _=r?0:i,v=_*4,y=f.clippingState||null;l.value=y,y=h(g,u,v,p);for(let L=0;L!==v;++L)y[L]=t[L];f.clippingState=y,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(d,u,p,g){let E=d!==null?d.length:0,m=null;if(E!==0){if(m=l.value,g!==!0||m===null){let f=p+E*4,_=u.matrixWorldInverse;a.getNormalMatrix(_),(m===null||m.length<f)&&(m=new Float32Array(f));for(let v=0,y=p;v!==E;++v,y+=4)o.copy(d[v]).applyMatrix4(_,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,m}}function l2(n){let e=new WeakMap;function t(o,a){return a===ac?o.mapping=Er:a===lc&&(o.mapping=yr),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===ac||a===lc)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Gc(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}var Mr=class extends Ma{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},dr=4,Kd=[.125,.215,.35,.446,.526,.582],ws=20,zl=new Mr,jd=new le,kl=null,Gl=0,Vl=0,Wl=!1,Ts=(1+Math.sqrt(5))/2,rr=1/Ts,eu=[new P(-Ts,rr,0),new P(Ts,rr,0),new P(-rr,0,Ts),new P(rr,0,Ts),new P(0,Ts,-rr),new P(0,Ts,rr),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)],Ta=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){kl=this._renderer.getRenderTarget(),Gl=this._renderer.getActiveCubeFace(),Vl=this._renderer.getActiveMipmapLevel(),Wl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=iu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=nu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(kl,Gl,Vl),this._renderer.xr.enabled=Wl,e.scissorTest=!1,$o(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Er||e.mapping===yr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),kl=this._renderer.getRenderTarget(),Gl=this._renderer.getActiveCubeFace(),Vl=this._renderer.getActiveMipmapLevel(),Wl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:ui,minFilter:ui,generateMipmaps:!1,type:Pn,format:ii,colorSpace:ss,depthBuffer:!1},s=tu(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=tu(e,t,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=c2(r)),this._blurMaterial=h2(r,e,t)}return s}_compileMaterial(e){let t=new O(this._lodPlanes[0],e);this._renderer.compile(t,zl)}_sceneToCubeUV(e,t,i,s){let a=new dn(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(jd),h.toneMapping=mi,h.autoClear=!1;let p=new nt({name:"PMREM.Background",side:sn,depthWrite:!1,depthTest:!1}),g=new O(new Cn,p),E=!1,m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,E=!0):(p.color.copy(jd),E=!0);for(let f=0;f<6;f++){let _=f%3;_===0?(a.up.set(0,l[f],0),a.lookAt(c[f],0,0)):_===1?(a.up.set(0,0,l[f]),a.lookAt(0,c[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,c[f]));let v=this._cubeSize;$o(s,_*v,f>2?v:0,v,v),h.setRenderTarget(s),E&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=u,h.autoClear=d,e.background=m}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===Er||e.mapping===yr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=iu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=nu());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new O(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;$o(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,zl)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=eu[(s-r-1)%eu.length];this._blur(e,r-1,r,o,a)}t.autoClear=i}_blur(e,t,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,d=new O(this._lodPlanes[s],c),u=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*ws-1),E=r/g,m=isFinite(r)?1+Math.floor(h*E):ws;m>ws&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ws}`);let f=[],_=0;for(let w=0;w<ws;++w){let F=w/E,S=Math.exp(-F*F/2);f.push(S),w===0?_+=S:w<m&&(_+=2*S)}for(let w=0;w<f.length;w++)f[w]=f[w]/_;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=f,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);let{_lodMax:v}=this;u.dTheta.value=g,u.mipInt.value=v-i;let y=this._sizeLods[s],L=3*y*(s>v-dr?s-v+dr:0),C=4*(this._cubeSize-y);$o(t,L,C,3*y,2*y),l.setRenderTarget(t),l.render(d,zl)}};function c2(n){let e=[],t=[],i=[],s=n,r=n-dr+1+Kd.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let l=1/a;o>n-dr?l=Kd[o-n+dr-1]:o===0&&(l=0),i.push(l);let c=1/(a-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],p=6,g=6,E=3,m=2,f=1,_=new Float32Array(E*g*p),v=new Float32Array(m*g*p),y=new Float32Array(f*g*p);for(let C=0;C<p;C++){let w=C%3*2/3-1,F=C>2?0:-1,S=[w,F,0,w+2/3,F,0,w+2/3,F+1,0,w,F,0,w+2/3,F+1,0,w,F+1,0];_.set(S,E*g*C),v.set(u,m*g*C);let A=[C,C,C,C,C,C];y.set(A,f*g*C)}let L=new Wt;L.setAttribute("position",new Kt(_,E)),L.setAttribute("uv",new Kt(v,m)),L.setAttribute("faceIndex",new Kt(y,f)),e.push(L),s>dr&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function tu(n,e,t){let i=new on(n,e,t);return i.texture.mapping=Oa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function $o(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function h2(n,e,t){let i=new Float32Array(ws),s=new P(0,1,0);return new an({name:"SphericalGaussianBlur",defines:{n:ws,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ih(),fragmentShader:`

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
		`,blending:pi,depthTest:!1,depthWrite:!1})}function nu(){return new an({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ih(),fragmentShader:`

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
		`,blending:pi,depthTest:!1,depthWrite:!1})}function iu(){return new an({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ih(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:pi,depthTest:!1,depthWrite:!1})}function Ih(){return`

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
	`}function d2(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){let l=a.mapping,c=l===ac||l===lc,h=l===Er||l===yr;if(c||h){let d=e.get(a),u=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==u)return t===null&&(t=new Ta(n)),d=c?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{let p=a.image;return c&&p&&p.height>0||h&&p&&s(p)?(t===null&&(t=new Ta(n)),d=c?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function u2(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&Kr("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function f2(n,e,t,i){let s={},r=new WeakMap;function o(d){let u=d.target;u.index!==null&&e.remove(u.index);for(let g in u.attributes)e.remove(u.attributes[g]);for(let g in u.morphAttributes){let E=u.morphAttributes[g];for(let m=0,f=E.length;m<f;m++)e.remove(E[m])}u.removeEventListener("dispose",o),delete s[u.id];let p=r.get(u);p&&(e.remove(p),r.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function a(d,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,t.memory.geometries++),u}function l(d){let u=d.attributes;for(let g in u)e.update(u[g],n.ARRAY_BUFFER);let p=d.morphAttributes;for(let g in p){let E=p[g];for(let m=0,f=E.length;m<f;m++)e.update(E[m],n.ARRAY_BUFFER)}}function c(d){let u=[],p=d.index,g=d.attributes.position,E=0;if(p!==null){let _=p.array;E=p.version;for(let v=0,y=_.length;v<y;v+=3){let L=_[v+0],C=_[v+1],w=_[v+2];u.push(L,C,C,w,w,L)}}else if(g!==void 0){let _=g.array;E=g.version;for(let v=0,y=_.length/3-1;v<y;v+=3){let L=v+0,C=v+1,w=v+2;u.push(L,C,C,w,w,L)}}else return;let m=new(Ju(u)?Aa:_a)(u,1);m.version=E;let f=r.get(d);f&&e.remove(f),r.set(d,m)}function h(d){let u=r.get(d);if(u){let p=d.index;p!==null&&u.version<p.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function p2(n,e,t){let i;function s(u){i=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function l(u,p){n.drawElements(i,p,r,u*o),t.update(p,i,1)}function c(u,p,g){g!==0&&(n.drawElementsInstanced(i,p,r,u*o,g),t.update(p,i,g))}function h(u,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,r,u,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];t.update(m,i,1)}function d(u,p,g,E){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<u.length;f++)c(u[f]/o,p[f],E[f]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,r,u,0,E,0,g);let f=0;for(let _=0;_<g;_++)f+=p[_]*E[_];t.update(f,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function m2(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function g2(n,e,t){let i=new WeakMap,s=new xt;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,u=i.get(a);if(u===void 0||u.count!==d){let S=function(){w.dispose(),i.delete(a),a.removeEventListener("dispose",S)};u!==void 0&&u.texture.dispose();let p=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,E=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],f=a.morphAttributes.normal||[],_=a.morphAttributes.color||[],v=0;p===!0&&(v=1),g===!0&&(v=2),E===!0&&(v=3);let y=a.attributes.position.count*v,L=1;y>e.maxTextureSize&&(L=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let C=new Float32Array(y*L*4*d),w=new Ea(C,y,L,d);w.type=fi,w.needsUpdate=!0;let F=v*4;for(let A=0;A<d;A++){let I=m[A],N=f[A],k=_[A],X=y*L*4*A;for(let ee=0;ee<I.count;ee++){let Z=ee*F;p===!0&&(s.fromBufferAttribute(I,ee),C[X+Z+0]=s.x,C[X+Z+1]=s.y,C[X+Z+2]=s.z,C[X+Z+3]=0),g===!0&&(s.fromBufferAttribute(N,ee),C[X+Z+4]=s.x,C[X+Z+5]=s.y,C[X+Z+6]=s.z,C[X+Z+7]=0),E===!0&&(s.fromBufferAttribute(k,ee),C[X+Z+8]=s.x,C[X+Z+9]=s.y,C[X+Z+10]=s.z,C[X+Z+11]=k.itemSize===4?s.w:1)}}u={count:d,texture:w,size:new ie(y,L)},i.set(a,u),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let p=0;for(let E=0;E<c.length;E++)p+=c[E];let g=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:r}}function E2(n,e,t,i){let s=new WeakMap;function r(l){let c=i.render.frame,h=l.geometry,d=e.get(l,h);if(s.get(d)!==c&&(e.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let u=l.skeleton;s.get(u)!==c&&(u.update(),s.set(u,c))}return d}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}var Sr=class extends xn{constructor(e,t,i,s,r,o,a,l,c,h=fr){if(h!==fr&&h!==_r)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===fr&&(i=Di),i===void 0&&h===_r&&(i=vr),super(null,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:zn,this.minFilter=l!==void 0?l:zn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},e0=new xn,su=new Sr(1,1),t0=new Ea,n0=new zc,i0=new Sa,ru=[],ou=[],au=new Float32Array(16),lu=new Float32Array(9),cu=new Float32Array(4);function Pr(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=ru[s];if(r===void 0&&(r=new Float32Array(s),ru[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function jt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function en(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function ka(n,e){let t=ou[e];t===void 0&&(t=new Int32Array(e),ou[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function y2(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function v2(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;n.uniform2fv(this.addr,e),en(t,e)}}function _2(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(jt(t,e))return;n.uniform3fv(this.addr,e),en(t,e)}}function A2(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;n.uniform4fv(this.addr,e),en(t,e)}}function M2(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(jt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),en(t,e)}else{if(jt(t,i))return;cu.set(i),n.uniformMatrix2fv(this.addr,!1,cu),en(t,i)}}function S2(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(jt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),en(t,e)}else{if(jt(t,i))return;lu.set(i),n.uniformMatrix3fv(this.addr,!1,lu),en(t,i)}}function T2(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(jt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),en(t,e)}else{if(jt(t,i))return;au.set(i),n.uniformMatrix4fv(this.addr,!1,au),en(t,i)}}function b2(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function w2(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;n.uniform2iv(this.addr,e),en(t,e)}}function R2(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(jt(t,e))return;n.uniform3iv(this.addr,e),en(t,e)}}function x2(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;n.uniform4iv(this.addr,e),en(t,e)}}function C2(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function F2(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;n.uniform2uiv(this.addr,e),en(t,e)}}function P2(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(jt(t,e))return;n.uniform3uiv(this.addr,e),en(t,e)}}function I2(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;n.uniform4uiv(this.addr,e),en(t,e)}}function L2(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(su.compareFunction=$u,r=su):r=e0,t.setTexture2D(e||r,s)}function D2(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||n0,s)}function U2(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||i0,s)}function H2(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||t0,s)}function B2(n){switch(n){case 5126:return y2;case 35664:return v2;case 35665:return _2;case 35666:return A2;case 35674:return M2;case 35675:return S2;case 35676:return T2;case 5124:case 35670:return b2;case 35667:case 35671:return w2;case 35668:case 35672:return R2;case 35669:case 35673:return x2;case 5125:return C2;case 36294:return F2;case 36295:return P2;case 36296:return I2;case 35678:case 36198:case 36298:case 36306:case 35682:return L2;case 35679:case 36299:case 36307:return D2;case 35680:case 36300:case 36308:case 36293:return U2;case 36289:case 36303:case 36311:case 36292:return H2}}function N2(n,e){n.uniform1fv(this.addr,e)}function O2(n,e){let t=Pr(e,this.size,2);n.uniform2fv(this.addr,t)}function z2(n,e){let t=Pr(e,this.size,3);n.uniform3fv(this.addr,t)}function k2(n,e){let t=Pr(e,this.size,4);n.uniform4fv(this.addr,t)}function G2(n,e){let t=Pr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function V2(n,e){let t=Pr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function W2(n,e){let t=Pr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function X2(n,e){n.uniform1iv(this.addr,e)}function q2(n,e){n.uniform2iv(this.addr,e)}function Y2(n,e){n.uniform3iv(this.addr,e)}function Z2(n,e){n.uniform4iv(this.addr,e)}function $2(n,e){n.uniform1uiv(this.addr,e)}function J2(n,e){n.uniform2uiv(this.addr,e)}function Q2(n,e){n.uniform3uiv(this.addr,e)}function K2(n,e){n.uniform4uiv(this.addr,e)}function j2(n,e,t){let i=this.cache,s=e.length,r=ka(t,s);jt(i,r)||(n.uniform1iv(this.addr,r),en(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||e0,r[o])}function eg(n,e,t){let i=this.cache,s=e.length,r=ka(t,s);jt(i,r)||(n.uniform1iv(this.addr,r),en(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||n0,r[o])}function tg(n,e,t){let i=this.cache,s=e.length,r=ka(t,s);jt(i,r)||(n.uniform1iv(this.addr,r),en(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||i0,r[o])}function ng(n,e,t){let i=this.cache,s=e.length,r=ka(t,s);jt(i,r)||(n.uniform1iv(this.addr,r),en(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||t0,r[o])}function ig(n){switch(n){case 5126:return N2;case 35664:return O2;case 35665:return z2;case 35666:return k2;case 35674:return G2;case 35675:return V2;case 35676:return W2;case 5124:case 35670:return X2;case 35667:case 35671:return q2;case 35668:case 35672:return Y2;case 35669:case 35673:return Z2;case 5125:return $2;case 36294:return J2;case 36295:return Q2;case 36296:return K2;case 35678:case 36198:case 36298:case 36306:case 35682:return j2;case 35679:case 36299:case 36307:return eg;case 35680:case 36300:case 36308:case 36293:return tg;case 36289:case 36303:case 36311:case 36292:return ng}}var Vc=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=B2(t.type)}},Wc=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=ig(t.type)}},Xc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],i)}}},Xl=/(\w+)(\])?(\[|\.)?/g;function hu(n,e){n.seq.push(e),n.map[e.id]=e}function sg(n,e,t){let i=n.name,s=i.length;for(Xl.lastIndex=0;;){let r=Xl.exec(i),o=Xl.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){hu(t,c===void 0?new Vc(a,n,e):new Wc(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new Xc(a),hu(t,d)),t=d}}}var mr=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);sg(r,o,this)}}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&i.push(o)}return i}};function du(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var rg=37297,og=0;function ag(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}var uu=new Qe;function lg(n){ft._getMatrix(uu,ft.workingColorSpace,n);let e=`mat3( ${uu.elements.map(t=>t.toFixed(4))} )`;switch(ft.getTransfer(n)){case za:return[e,"LinearTransferOETF"];case wt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function fu(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+ag(n.getShaderSource(e),o)}else return s}function cg(n,e){let t=lg(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function hg(n,e){let t;switch(e){case Bf:t="Linear";break;case Nf:t="Reinhard";break;case Of:t="Cineon";break;case zf:t="ACESFilmic";break;case Gf:t="AgX";break;case Vf:t="Neutral";break;case kf:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Jo=new P;function dg(){ft.getLuminanceCoefficients(Jo);let n=Jo.x.toFixed(4),e=Jo.y.toFixed(4),t=Jo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ug(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(jr).join(`
`)}function fg(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function pg(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function jr(n){return n!==""}function pu(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function mu(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var mg=/^[ \t]*#include +<([\w\d./]+)>/gm;function qc(n){return n.replace(mg,Eg)}var gg=new Map;function Eg(n,e){let t=tt[e];if(t===void 0){let i=gg.get(e);if(i!==void 0)t=tt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return qc(t)}var yg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function gu(n){return n.replace(yg,vg)}function vg(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Eu(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function _g(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Hu?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Th?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===xi&&(e="SHADOWMAP_TYPE_VSM"),e}function Ag(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Er:case yr:e="ENVMAP_TYPE_CUBE";break;case Oa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Mg(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case yr:e="ENVMAP_MODE_REFRACTION";break}return e}function Sg(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Bu:e="ENVMAP_BLENDING_MULTIPLY";break;case Uf:e="ENVMAP_BLENDING_MIX";break;case Hf:e="ENVMAP_BLENDING_ADD";break}return e}function Tg(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function bg(n,e,t,i){let s=n.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=_g(t),c=Ag(t),h=Mg(t),d=Sg(t),u=Tg(t),p=ug(t),g=fg(r),E=s.createProgram(),m,f,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(jr).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(jr).join(`
`),f.length>0&&(f+=`
`)):(m=[Eu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(jr).join(`
`),f=[Eu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==mi?"#define TONE_MAPPING":"",t.toneMapping!==mi?tt.tonemapping_pars_fragment:"",t.toneMapping!==mi?hg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",tt.colorspace_pars_fragment,cg("linearToOutputTexel",t.outputColorSpace),dg(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(jr).join(`
`)),o=qc(o),o=pu(o,t),o=mu(o,t),a=qc(a),a=pu(a,t),a=mu(a,t),o=gu(o),a=gu(a),t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===Pd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Pd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let v=_+m+o,y=_+f+a,L=du(s,s.VERTEX_SHADER,v),C=du(s,s.FRAGMENT_SHADER,y);s.attachShader(E,L),s.attachShader(E,C),t.index0AttributeName!==void 0?s.bindAttribLocation(E,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(E,0,"position"),s.linkProgram(E);function w(I){if(n.debug.checkShaderErrors){let N=s.getProgramInfoLog(E).trim(),k=s.getShaderInfoLog(L).trim(),X=s.getShaderInfoLog(C).trim(),ee=!0,Z=!0;if(s.getProgramParameter(E,s.LINK_STATUS)===!1)if(ee=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,E,L,C);else{let oe=fu(s,L,"vertex"),Y=fu(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(E,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+N+`
`+oe+`
`+Y)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(k===""||X==="")&&(Z=!1);Z&&(I.diagnostics={runnable:ee,programLog:N,vertexShader:{log:k,prefix:m},fragmentShader:{log:X,prefix:f}})}s.deleteShader(L),s.deleteShader(C),F=new mr(s,E),S=pg(s,E)}let F;this.getUniforms=function(){return F===void 0&&w(this),F};let S;this.getAttributes=function(){return S===void 0&&w(this),S};let A=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=s.getProgramParameter(E,rg)),A},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(E),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=og++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=L,this.fragmentShader=C,this}var wg=0,Yc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Zc(e),t.set(e,i)),i}},Zc=class{constructor(e){this.id=wg++,this.code=e,this.usedTimes=0}};function Rg(n,e,t,i,s,r,o){let a=new va,l=new Yc,c=new Set,h=[],d=s.logarithmicDepthBuffer,u=s.vertexTextures,p=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,A,I,N,k){let X=N.fog,ee=k.geometry,Z=S.isMeshStandardMaterial?N.environment:null,oe=(S.isMeshStandardMaterial?t:e).get(S.envMap||Z),Y=oe&&oe.mapping===Oa?oe.image.height:null,ue=g[S.type];S.precision!==null&&(p=s.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));let Me=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,Oe=Me!==void 0?Me.length:0,st=0;ee.morphAttributes.position!==void 0&&(st=1),ee.morphAttributes.normal!==void 0&&(st=2),ee.morphAttributes.color!==void 0&&(st=3);let Ft,J,ae,Ue;if(ue){let St=hi[ue];Ft=St.vertexShader,J=St.fragmentShader}else Ft=S.vertexShader,J=S.fragmentShader,l.update(S),ae=l.getVertexShaderID(S),Ue=l.getFragmentShaderID(S);let fe=n.getRenderTarget(),Ve=n.state.buffers.depth.getReversed(),Ze=k.isInstancedMesh===!0,rt=k.isBatchedMesh===!0,Ot=!!S.map,dt=!!S.matcap,Xt=!!oe,B=!!S.aoMap,Gn=!!S.lightMap,at=!!S.bumpMap,lt=!!S.normalMap,ke=!!S.displacementMap,Dt=!!S.emissiveMap,ze=!!S.metalnessMap,x=!!S.roughnessMap,M=S.anisotropy>0,G=S.clearcoat>0,Q=S.dispersion>0,te=S.iridescence>0,$=S.sheen>0,He=S.transmission>0,pe=M&&!!S.anisotropyMap,Se=G&&!!S.clearcoatMap,ut=G&&!!S.clearcoatNormalMap,se=G&&!!S.clearcoatRoughnessMap,be=te&&!!S.iridescenceMap,Ge=te&&!!S.iridescenceThicknessMap,We=$&&!!S.sheenColorMap,we=$&&!!S.sheenRoughnessMap,ct=!!S.specularMap,et=!!S.specularColorMap,Pt=!!S.specularIntensityMap,D=He&&!!S.transmissionMap,de=He&&!!S.thicknessMap,q=!!S.gradientMap,K=!!S.alphaMap,_e=S.alphaTest>0,ge=!!S.alphaHash,$e=!!S.extensions,Vt=mi;S.toneMapped&&(fe===null||fe.isXRRenderTarget===!0)&&(Vt=n.toneMapping);let pn={shaderID:ue,shaderType:S.type,shaderName:S.name,vertexShader:Ft,fragmentShader:J,defines:S.defines,customVertexShaderID:ae,customFragmentShaderID:Ue,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:rt,batchingColor:rt&&k._colorsTexture!==null,instancing:Ze,instancingColor:Ze&&k.instanceColor!==null,instancingMorph:Ze&&k.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:fe===null?n.outputColorSpace:fe.isXRRenderTarget===!0?fe.texture.colorSpace:ss,alphaToCoverage:!!S.alphaToCoverage,map:Ot,matcap:dt,envMap:Xt,envMapMode:Xt&&oe.mapping,envMapCubeUVHeight:Y,aoMap:B,lightMap:Gn,bumpMap:at,normalMap:lt,displacementMap:u&&ke,emissiveMap:Dt,normalMapObjectSpace:lt&&S.normalMapType===qf,normalMapTangentSpace:lt&&S.normalMapType===Zu,metalnessMap:ze,roughnessMap:x,anisotropy:M,anisotropyMap:pe,clearcoat:G,clearcoatMap:Se,clearcoatNormalMap:ut,clearcoatRoughnessMap:se,dispersion:Q,iridescence:te,iridescenceMap:be,iridescenceThicknessMap:Ge,sheen:$,sheenColorMap:We,sheenRoughnessMap:we,specularMap:ct,specularColorMap:et,specularIntensityMap:Pt,transmission:He,transmissionMap:D,thicknessMap:de,gradientMap:q,opaque:S.transparent===!1&&S.blending===Ki&&S.alphaToCoverage===!1,alphaMap:K,alphaTest:_e,alphaHash:ge,combine:S.combine,mapUv:Ot&&E(S.map.channel),aoMapUv:B&&E(S.aoMap.channel),lightMapUv:Gn&&E(S.lightMap.channel),bumpMapUv:at&&E(S.bumpMap.channel),normalMapUv:lt&&E(S.normalMap.channel),displacementMapUv:ke&&E(S.displacementMap.channel),emissiveMapUv:Dt&&E(S.emissiveMap.channel),metalnessMapUv:ze&&E(S.metalnessMap.channel),roughnessMapUv:x&&E(S.roughnessMap.channel),anisotropyMapUv:pe&&E(S.anisotropyMap.channel),clearcoatMapUv:Se&&E(S.clearcoatMap.channel),clearcoatNormalMapUv:ut&&E(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:se&&E(S.clearcoatRoughnessMap.channel),iridescenceMapUv:be&&E(S.iridescenceMap.channel),iridescenceThicknessMapUv:Ge&&E(S.iridescenceThicknessMap.channel),sheenColorMapUv:We&&E(S.sheenColorMap.channel),sheenRoughnessMapUv:we&&E(S.sheenRoughnessMap.channel),specularMapUv:ct&&E(S.specularMap.channel),specularColorMapUv:et&&E(S.specularColorMap.channel),specularIntensityMapUv:Pt&&E(S.specularIntensityMap.channel),transmissionMapUv:D&&E(S.transmissionMap.channel),thicknessMapUv:de&&E(S.thicknessMap.channel),alphaMapUv:K&&E(S.alphaMap.channel),vertexTangents:!!ee.attributes.tangent&&(lt||M),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!ee.attributes.uv&&(Ot||K),fog:!!X,useFog:S.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:Ve,skinning:k.isSkinnedMesh===!0,morphTargets:ee.morphAttributes.position!==void 0,morphNormals:ee.morphAttributes.normal!==void 0,morphColors:ee.morphAttributes.color!==void 0,morphTargetsCount:Oe,morphTextureStride:st,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&I.length>0,shadowMapType:n.shadowMap.type,toneMapping:Vt,decodeVideoTexture:Ot&&S.map.isVideoTexture===!0&&ft.getTransfer(S.map.colorSpace)===wt,decodeVideoTextureEmissive:Dt&&S.emissiveMap.isVideoTexture===!0&&ft.getTransfer(S.emissiveMap.colorSpace)===wt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Et,flipSided:S.side===sn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:$e&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:($e&&S.extensions.multiDraw===!0||rt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return pn.vertexUv1s=c.has(1),pn.vertexUv2s=c.has(2),pn.vertexUv3s=c.has(3),c.clear(),pn}function f(S){let A=[];if(S.shaderID?A.push(S.shaderID):(A.push(S.customVertexShaderID),A.push(S.customFragmentShaderID)),S.defines!==void 0)for(let I in S.defines)A.push(I),A.push(S.defines[I]);return S.isRawShaderMaterial===!1&&(_(A,S),v(A,S),A.push(n.outputColorSpace)),A.push(S.customProgramCacheKey),A.join()}function _(S,A){S.push(A.precision),S.push(A.outputColorSpace),S.push(A.envMapMode),S.push(A.envMapCubeUVHeight),S.push(A.mapUv),S.push(A.alphaMapUv),S.push(A.lightMapUv),S.push(A.aoMapUv),S.push(A.bumpMapUv),S.push(A.normalMapUv),S.push(A.displacementMapUv),S.push(A.emissiveMapUv),S.push(A.metalnessMapUv),S.push(A.roughnessMapUv),S.push(A.anisotropyMapUv),S.push(A.clearcoatMapUv),S.push(A.clearcoatNormalMapUv),S.push(A.clearcoatRoughnessMapUv),S.push(A.iridescenceMapUv),S.push(A.iridescenceThicknessMapUv),S.push(A.sheenColorMapUv),S.push(A.sheenRoughnessMapUv),S.push(A.specularMapUv),S.push(A.specularColorMapUv),S.push(A.specularIntensityMapUv),S.push(A.transmissionMapUv),S.push(A.thicknessMapUv),S.push(A.combine),S.push(A.fogExp2),S.push(A.sizeAttenuation),S.push(A.morphTargetsCount),S.push(A.morphAttributeCount),S.push(A.numDirLights),S.push(A.numPointLights),S.push(A.numSpotLights),S.push(A.numSpotLightMaps),S.push(A.numHemiLights),S.push(A.numRectAreaLights),S.push(A.numDirLightShadows),S.push(A.numPointLightShadows),S.push(A.numSpotLightShadows),S.push(A.numSpotLightShadowsWithMaps),S.push(A.numLightProbes),S.push(A.shadowMapType),S.push(A.toneMapping),S.push(A.numClippingPlanes),S.push(A.numClipIntersection),S.push(A.depthPacking)}function v(S,A){a.disableAll(),A.supportsVertexTextures&&a.enable(0),A.instancing&&a.enable(1),A.instancingColor&&a.enable(2),A.instancingMorph&&a.enable(3),A.matcap&&a.enable(4),A.envMap&&a.enable(5),A.normalMapObjectSpace&&a.enable(6),A.normalMapTangentSpace&&a.enable(7),A.clearcoat&&a.enable(8),A.iridescence&&a.enable(9),A.alphaTest&&a.enable(10),A.vertexColors&&a.enable(11),A.vertexAlphas&&a.enable(12),A.vertexUv1s&&a.enable(13),A.vertexUv2s&&a.enable(14),A.vertexUv3s&&a.enable(15),A.vertexTangents&&a.enable(16),A.anisotropy&&a.enable(17),A.alphaHash&&a.enable(18),A.batching&&a.enable(19),A.dispersion&&a.enable(20),A.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.reverseDepthBuffer&&a.enable(4),A.skinning&&a.enable(5),A.morphTargets&&a.enable(6),A.morphNormals&&a.enable(7),A.morphColors&&a.enable(8),A.premultipliedAlpha&&a.enable(9),A.shadowMapEnabled&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),A.decodeVideoTextureEmissive&&a.enable(20),A.alphaToCoverage&&a.enable(21),S.push(a.mask)}function y(S){let A=g[S.type],I;if(A){let N=hi[A];I=Fr.clone(N.uniforms)}else I=S.uniforms;return I}function L(S,A){let I;for(let N=0,k=h.length;N<k;N++){let X=h[N];if(X.cacheKey===A){I=X,++I.usedTimes;break}}return I===void 0&&(I=new bg(n,A,S,r),h.push(I)),I}function C(S){if(--S.usedTimes===0){let A=h.indexOf(S);h[A]=h[h.length-1],h.pop(),S.destroy()}}function w(S){l.remove(S)}function F(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:y,acquireProgram:L,releaseProgram:C,releaseShaderCache:w,programs:h,dispose:F}}function xg(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function Cg(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function yu(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function vu(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(d,u,p,g,E,m){let f=n[e];return f===void 0?(f={id:d.id,object:d,geometry:u,material:p,groupOrder:g,renderOrder:d.renderOrder,z:E,group:m},n[e]=f):(f.id=d.id,f.object=d,f.geometry=u,f.material=p,f.groupOrder=g,f.renderOrder=d.renderOrder,f.z=E,f.group=m),e++,f}function a(d,u,p,g,E,m){let f=o(d,u,p,g,E,m);p.transmission>0?i.push(f):p.transparent===!0?s.push(f):t.push(f)}function l(d,u,p,g,E,m){let f=o(d,u,p,g,E,m);p.transmission>0?i.unshift(f):p.transparent===!0?s.unshift(f):t.unshift(f)}function c(d,u){t.length>1&&t.sort(d||Cg),i.length>1&&i.sort(u||yu),s.length>1&&s.sort(u||yu)}function h(){for(let d=e,u=n.length;d<u;d++){let p=n[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function Fg(){let n=new WeakMap;function e(i,s){let r=n.get(i),o;return r===void 0?(o=new vu,n.set(i,[o])):s>=r.length?(o=new vu,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function Pg(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new le};break;case"SpotLight":t={position:new P,direction:new P,color:new le,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new le,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new le,groundColor:new le};break;case"RectAreaLight":t={color:new le,position:new P,halfWidth:new P,halfHeight:new P};break}return n[e.id]=t,t}}}function Ig(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var Lg=0;function Dg(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Ug(n){let e=new Pg,t=Ig(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new P);let s=new P,r=new Ct,o=new Ct;function a(c){let h=0,d=0,u=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let p=0,g=0,E=0,m=0,f=0,_=0,v=0,y=0,L=0,C=0,w=0;c.sort(Dg);for(let S=0,A=c.length;S<A;S++){let I=c[S],N=I.color,k=I.intensity,X=I.distance,ee=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)h+=N.r*k,d+=N.g*k,u+=N.b*k;else if(I.isLightProbe){for(let Z=0;Z<9;Z++)i.probe[Z].addScaledVector(I.sh.coefficients[Z],k);w++}else if(I.isDirectionalLight){let Z=e.get(I);if(Z.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let oe=I.shadow,Y=t.get(I);Y.shadowIntensity=oe.intensity,Y.shadowBias=oe.bias,Y.shadowNormalBias=oe.normalBias,Y.shadowRadius=oe.radius,Y.shadowMapSize=oe.mapSize,i.directionalShadow[p]=Y,i.directionalShadowMap[p]=ee,i.directionalShadowMatrix[p]=I.shadow.matrix,_++}i.directional[p]=Z,p++}else if(I.isSpotLight){let Z=e.get(I);Z.position.setFromMatrixPosition(I.matrixWorld),Z.color.copy(N).multiplyScalar(k),Z.distance=X,Z.coneCos=Math.cos(I.angle),Z.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),Z.decay=I.decay,i.spot[E]=Z;let oe=I.shadow;if(I.map&&(i.spotLightMap[L]=I.map,L++,oe.updateMatrices(I),I.castShadow&&C++),i.spotLightMatrix[E]=oe.matrix,I.castShadow){let Y=t.get(I);Y.shadowIntensity=oe.intensity,Y.shadowBias=oe.bias,Y.shadowNormalBias=oe.normalBias,Y.shadowRadius=oe.radius,Y.shadowMapSize=oe.mapSize,i.spotShadow[E]=Y,i.spotShadowMap[E]=ee,y++}E++}else if(I.isRectAreaLight){let Z=e.get(I);Z.color.copy(N).multiplyScalar(k),Z.halfWidth.set(I.width*.5,0,0),Z.halfHeight.set(0,I.height*.5,0),i.rectArea[m]=Z,m++}else if(I.isPointLight){let Z=e.get(I);if(Z.color.copy(I.color).multiplyScalar(I.intensity),Z.distance=I.distance,Z.decay=I.decay,I.castShadow){let oe=I.shadow,Y=t.get(I);Y.shadowIntensity=oe.intensity,Y.shadowBias=oe.bias,Y.shadowNormalBias=oe.normalBias,Y.shadowRadius=oe.radius,Y.shadowMapSize=oe.mapSize,Y.shadowCameraNear=oe.camera.near,Y.shadowCameraFar=oe.camera.far,i.pointShadow[g]=Y,i.pointShadowMap[g]=ee,i.pointShadowMatrix[g]=I.shadow.matrix,v++}i.point[g]=Z,g++}else if(I.isHemisphereLight){let Z=e.get(I);Z.skyColor.copy(I.color).multiplyScalar(k),Z.groundColor.copy(I.groundColor).multiplyScalar(k),i.hemi[f]=Z,f++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=he.LTC_FLOAT_1,i.rectAreaLTC2=he.LTC_FLOAT_2):(i.rectAreaLTC1=he.LTC_HALF_1,i.rectAreaLTC2=he.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=u;let F=i.hash;(F.directionalLength!==p||F.pointLength!==g||F.spotLength!==E||F.rectAreaLength!==m||F.hemiLength!==f||F.numDirectionalShadows!==_||F.numPointShadows!==v||F.numSpotShadows!==y||F.numSpotMaps!==L||F.numLightProbes!==w)&&(i.directional.length=p,i.spot.length=E,i.rectArea.length=m,i.point.length=g,i.hemi.length=f,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=y+L-C,i.spotLightMap.length=L,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=w,F.directionalLength=p,F.pointLength=g,F.spotLength=E,F.rectAreaLength=m,F.hemiLength=f,F.numDirectionalShadows=_,F.numPointShadows=v,F.numSpotShadows=y,F.numSpotMaps=L,F.numLightProbes=w,i.version=Lg++)}function l(c,h){let d=0,u=0,p=0,g=0,E=0,m=h.matrixWorldInverse;for(let f=0,_=c.length;f<_;f++){let v=c[f];if(v.isDirectionalLight){let y=i.directional[d];y.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),d++}else if(v.isSpotLight){let y=i.spot[p];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),p++}else if(v.isRectAreaLight){let y=i.rectArea[g];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(m),o.identity(),r.copy(v.matrixWorld),r.premultiply(m),o.extractRotation(r),y.halfWidth.set(v.width*.5,0,0),y.halfHeight.set(0,v.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(v.isPointLight){let y=i.point[u];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(m),u++}else if(v.isHemisphereLight){let y=i.hemi[E];y.direction.setFromMatrixPosition(v.matrixWorld),y.direction.transformDirection(m),E++}}}return{setup:a,setupView:l,state:i}}function _u(n){let e=new Ug(n),t=[],i=[];function s(h){c.camera=h,t.length=0,i.length=0}function r(h){t.push(h)}function o(h){i.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}let c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Hg(n){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new _u(n),e.set(s,[a])):r>=o.length?(a=new _u(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var is=class extends Hi{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Xf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},$c=class extends Hi{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},Bg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ng=`uniform sampler2D shadow_pass;
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
}`;function Og(n,e,t){let i=new ro,s=new ie,r=new ie,o=new xt,a=new is({depthPacking:Cr}),l=new $c,c={},h=t.maxTextureSize,d={[ji]:sn,[sn]:ji,[Et]:Et},u=new an({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ie},radius:{value:4}},vertexShader:Bg,fragmentShader:Ng}),p=u.clone();p.defines.HORIZONTAL_PASS=1;let g=new Wt;g.setAttribute("position",new Kt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let E=new O(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Hu;let f=this.type;this.render=function(C,w,F){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;let S=n.getRenderTarget(),A=n.getActiveCubeFace(),I=n.getActiveMipmapLevel(),N=n.state;N.setBlending(pi),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let k=f!==xi&&this.type===xi,X=f===xi&&this.type!==xi;for(let ee=0,Z=C.length;ee<Z;ee++){let oe=C[ee],Y=oe.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",oe,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;s.copy(Y.mapSize);let ue=Y.getFrameExtents();if(s.multiply(ue),r.copy(Y.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ue.x),s.x=r.x*ue.x,Y.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ue.y),s.y=r.y*ue.y,Y.mapSize.y=r.y)),Y.map===null||k===!0||X===!0){let Oe=this.type!==xi?{minFilter:zn,magFilter:zn}:{};Y.map!==null&&Y.map.dispose(),Y.map=new on(s.x,s.y,Oe),Y.map.texture.name=oe.name+".shadowMap",Y.camera.updateProjectionMatrix()}n.setRenderTarget(Y.map),n.clear();let Me=Y.getViewportCount();for(let Oe=0;Oe<Me;Oe++){let st=Y.getViewport(Oe);o.set(r.x*st.x,r.y*st.y,r.x*st.z,r.y*st.w),N.viewport(o),Y.updateMatrices(oe,Oe),i=Y.getFrustum(),y(w,F,Y.camera,oe,this.type)}Y.isPointLightShadow!==!0&&this.type===xi&&_(Y,F),Y.needsUpdate=!1}f=this.type,m.needsUpdate=!1,n.setRenderTarget(S,A,I)};function _(C,w){let F=e.update(E);u.defines.VSM_SAMPLES!==C.blurSamples&&(u.defines.VSM_SAMPLES=C.blurSamples,p.defines.VSM_SAMPLES=C.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new on(s.x,s.y)),u.uniforms.shadow_pass.value=C.map.texture,u.uniforms.resolution.value=C.mapSize,u.uniforms.radius.value=C.radius,n.setRenderTarget(C.mapPass),n.clear(),n.renderBufferDirect(w,null,F,u,E,null),p.uniforms.shadow_pass.value=C.mapPass.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,n.setRenderTarget(C.map),n.clear(),n.renderBufferDirect(w,null,F,p,E,null)}function v(C,w,F,S){let A=null,I=F.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(I!==void 0)A=I;else if(A=F.isPointLight===!0?l:a,n.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){let N=A.uuid,k=w.uuid,X=c[N];X===void 0&&(X={},c[N]=X);let ee=X[k];ee===void 0&&(ee=A.clone(),X[k]=ee,w.addEventListener("dispose",L)),A=ee}if(A.visible=w.visible,A.wireframe=w.wireframe,S===xi?A.side=w.shadowSide!==null?w.shadowSide:w.side:A.side=w.shadowSide!==null?w.shadowSide:d[w.side],A.alphaMap=w.alphaMap,A.alphaTest=w.alphaTest,A.map=w.map,A.clipShadows=w.clipShadows,A.clippingPlanes=w.clippingPlanes,A.clipIntersection=w.clipIntersection,A.displacementMap=w.displacementMap,A.displacementScale=w.displacementScale,A.displacementBias=w.displacementBias,A.wireframeLinewidth=w.wireframeLinewidth,A.linewidth=w.linewidth,F.isPointLight===!0&&A.isMeshDistanceMaterial===!0){let N=n.properties.get(A);N.light=F}return A}function y(C,w,F,S,A){if(C.visible===!1)return;if(C.layers.test(w.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&A===xi)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,C.matrixWorld);let k=e.update(C),X=C.material;if(Array.isArray(X)){let ee=k.groups;for(let Z=0,oe=ee.length;Z<oe;Z++){let Y=ee[Z],ue=X[Y.materialIndex];if(ue&&ue.visible){let Me=v(C,ue,S,A);C.onBeforeShadow(n,C,w,F,k,Me,Y),n.renderBufferDirect(F,null,k,Me,C,Y),C.onAfterShadow(n,C,w,F,k,Me,Y)}}}else if(X.visible){let ee=v(C,X,S,A);C.onBeforeShadow(n,C,w,F,k,ee,null),n.renderBufferDirect(F,null,k,ee,C,null),C.onAfterShadow(n,C,w,F,k,ee,null)}}let N=C.children;for(let k=0,X=N.length;k<X;k++)y(N[k],w,F,S,A)}function L(C){C.target.removeEventListener("dispose",L);for(let F in c){let S=c[F],A=C.target.uuid;A in S&&(S[A].dispose(),delete S[A])}}}var zg={[ec]:tc,[nc]:rc,[ic]:oc,[gr]:sc,[tc]:ec,[rc]:nc,[oc]:ic,[sc]:gr};function kg(n,e){function t(){let D=!1,de=new xt,q=null,K=new xt(0,0,0,0);return{setMask:function(_e){q!==_e&&!D&&(n.colorMask(_e,_e,_e,_e),q=_e)},setLocked:function(_e){D=_e},setClear:function(_e,ge,$e,Vt,pn){pn===!0&&(_e*=Vt,ge*=Vt,$e*=Vt),de.set(_e,ge,$e,Vt),K.equals(de)===!1&&(n.clearColor(_e,ge,$e,Vt),K.copy(de))},reset:function(){D=!1,q=null,K.set(-1,0,0,0)}}}function i(){let D=!1,de=!1,q=null,K=null,_e=null;return{setReversed:function(ge){if(de!==ge){let $e=e.get("EXT_clip_control");de?$e.clipControlEXT($e.LOWER_LEFT_EXT,$e.ZERO_TO_ONE_EXT):$e.clipControlEXT($e.LOWER_LEFT_EXT,$e.NEGATIVE_ONE_TO_ONE_EXT);let Vt=_e;_e=null,this.setClear(Vt)}de=ge},getReversed:function(){return de},setTest:function(ge){ge?fe(n.DEPTH_TEST):Ve(n.DEPTH_TEST)},setMask:function(ge){q!==ge&&!D&&(n.depthMask(ge),q=ge)},setFunc:function(ge){if(de&&(ge=zg[ge]),K!==ge){switch(ge){case ec:n.depthFunc(n.NEVER);break;case tc:n.depthFunc(n.ALWAYS);break;case nc:n.depthFunc(n.LESS);break;case gr:n.depthFunc(n.LEQUAL);break;case ic:n.depthFunc(n.EQUAL);break;case sc:n.depthFunc(n.GEQUAL);break;case rc:n.depthFunc(n.GREATER);break;case oc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}K=ge}},setLocked:function(ge){D=ge},setClear:function(ge){_e!==ge&&(de&&(ge=1-ge),n.clearDepth(ge),_e=ge)},reset:function(){D=!1,q=null,K=null,_e=null,de=!1}}}function s(){let D=!1,de=null,q=null,K=null,_e=null,ge=null,$e=null,Vt=null,pn=null;return{setTest:function(St){D||(St?fe(n.STENCIL_TEST):Ve(n.STENCIL_TEST))},setMask:function(St){de!==St&&!D&&(n.stencilMask(St),de=St)},setFunc:function(St,Kn,Ai){(q!==St||K!==Kn||_e!==Ai)&&(n.stencilFunc(St,Kn,Ai),q=St,K=Kn,_e=Ai)},setOp:function(St,Kn,Ai){(ge!==St||$e!==Kn||Vt!==Ai)&&(n.stencilOp(St,Kn,Ai),ge=St,$e=Kn,Vt=Ai)},setLocked:function(St){D=St},setClear:function(St){pn!==St&&(n.clearStencil(St),pn=St)},reset:function(){D=!1,de=null,q=null,K=null,_e=null,ge=null,$e=null,Vt=null,pn=null}}}let r=new t,o=new i,a=new s,l=new WeakMap,c=new WeakMap,h={},d={},u=new WeakMap,p=[],g=null,E=!1,m=null,f=null,_=null,v=null,y=null,L=null,C=null,w=new le(0,0,0),F=0,S=!1,A=null,I=null,N=null,k=null,X=null,ee=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Z=!1,oe=0,Y=n.getParameter(n.VERSION);Y.indexOf("WebGL")!==-1?(oe=parseFloat(/^WebGL (\d)/.exec(Y)[1]),Z=oe>=1):Y.indexOf("OpenGL ES")!==-1&&(oe=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),Z=oe>=2);let ue=null,Me={},Oe=n.getParameter(n.SCISSOR_BOX),st=n.getParameter(n.VIEWPORT),Ft=new xt().fromArray(Oe),J=new xt().fromArray(st);function ae(D,de,q,K){let _e=new Uint8Array(4),ge=n.createTexture();n.bindTexture(D,ge),n.texParameteri(D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(D,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let $e=0;$e<q;$e++)D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY?n.texImage3D(de,0,n.RGBA,1,1,K,0,n.RGBA,n.UNSIGNED_BYTE,_e):n.texImage2D(de+$e,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,_e);return ge}let Ue={};Ue[n.TEXTURE_2D]=ae(n.TEXTURE_2D,n.TEXTURE_2D,1),Ue[n.TEXTURE_CUBE_MAP]=ae(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ue[n.TEXTURE_2D_ARRAY]=ae(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Ue[n.TEXTURE_3D]=ae(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),fe(n.DEPTH_TEST),o.setFunc(gr),at(!1),lt(Td),fe(n.CULL_FACE),B(pi);function fe(D){h[D]!==!0&&(n.enable(D),h[D]=!0)}function Ve(D){h[D]!==!1&&(n.disable(D),h[D]=!1)}function Ze(D,de){return d[D]!==de?(n.bindFramebuffer(D,de),d[D]=de,D===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=de),D===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=de),!0):!1}function rt(D,de){let q=p,K=!1;if(D){q=u.get(de),q===void 0&&(q=[],u.set(de,q));let _e=D.textures;if(q.length!==_e.length||q[0]!==n.COLOR_ATTACHMENT0){for(let ge=0,$e=_e.length;ge<$e;ge++)q[ge]=n.COLOR_ATTACHMENT0+ge;q.length=_e.length,K=!0}}else q[0]!==n.BACK&&(q[0]=n.BACK,K=!0);K&&n.drawBuffers(q)}function Ot(D){return g!==D?(n.useProgram(D),g=D,!0):!1}let dt={[bs]:n.FUNC_ADD,[yf]:n.FUNC_SUBTRACT,[vf]:n.FUNC_REVERSE_SUBTRACT};dt[_f]=n.MIN,dt[Af]=n.MAX;let Xt={[Mf]:n.ZERO,[Sf]:n.ONE,[Tf]:n.SRC_COLOR,[Kl]:n.SRC_ALPHA,[Ff]:n.SRC_ALPHA_SATURATE,[xf]:n.DST_COLOR,[wf]:n.DST_ALPHA,[bf]:n.ONE_MINUS_SRC_COLOR,[jl]:n.ONE_MINUS_SRC_ALPHA,[Cf]:n.ONE_MINUS_DST_COLOR,[Rf]:n.ONE_MINUS_DST_ALPHA,[Pf]:n.CONSTANT_COLOR,[If]:n.ONE_MINUS_CONSTANT_COLOR,[Lf]:n.CONSTANT_ALPHA,[Df]:n.ONE_MINUS_CONSTANT_ALPHA};function B(D,de,q,K,_e,ge,$e,Vt,pn,St){if(D===pi){E===!0&&(Ve(n.BLEND),E=!1);return}if(E===!1&&(fe(n.BLEND),E=!0),D!==Ef){if(D!==m||St!==S){if((f!==bs||y!==bs)&&(n.blendEquation(n.FUNC_ADD),f=bs,y=bs),St)switch(D){case Ki:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Rn:n.blendFunc(n.ONE,n.ONE);break;case bd:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case wd:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Ki:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Rn:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case bd:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case wd:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}_=null,v=null,L=null,C=null,w.set(0,0,0),F=0,m=D,S=St}return}_e=_e||de,ge=ge||q,$e=$e||K,(de!==f||_e!==y)&&(n.blendEquationSeparate(dt[de],dt[_e]),f=de,y=_e),(q!==_||K!==v||ge!==L||$e!==C)&&(n.blendFuncSeparate(Xt[q],Xt[K],Xt[ge],Xt[$e]),_=q,v=K,L=ge,C=$e),(Vt.equals(w)===!1||pn!==F)&&(n.blendColor(Vt.r,Vt.g,Vt.b,pn),w.copy(Vt),F=pn),m=D,S=!1}function Gn(D,de){D.side===Et?Ve(n.CULL_FACE):fe(n.CULL_FACE);let q=D.side===sn;de&&(q=!q),at(q),D.blending===Ki&&D.transparent===!1?B(pi):B(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),r.setMask(D.colorWrite);let K=D.stencilWrite;a.setTest(K),K&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Dt(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?fe(n.SAMPLE_ALPHA_TO_COVERAGE):Ve(n.SAMPLE_ALPHA_TO_COVERAGE)}function at(D){A!==D&&(D?n.frontFace(n.CW):n.frontFace(n.CCW),A=D)}function lt(D){D!==mf?(fe(n.CULL_FACE),D!==I&&(D===Td?n.cullFace(n.BACK):D===gf?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ve(n.CULL_FACE),I=D}function ke(D){D!==N&&(Z&&n.lineWidth(D),N=D)}function Dt(D,de,q){D?(fe(n.POLYGON_OFFSET_FILL),(k!==de||X!==q)&&(n.polygonOffset(de,q),k=de,X=q)):Ve(n.POLYGON_OFFSET_FILL)}function ze(D){D?fe(n.SCISSOR_TEST):Ve(n.SCISSOR_TEST)}function x(D){D===void 0&&(D=n.TEXTURE0+ee-1),ue!==D&&(n.activeTexture(D),ue=D)}function M(D,de,q){q===void 0&&(ue===null?q=n.TEXTURE0+ee-1:q=ue);let K=Me[q];K===void 0&&(K={type:void 0,texture:void 0},Me[q]=K),(K.type!==D||K.texture!==de)&&(ue!==q&&(n.activeTexture(q),ue=q),n.bindTexture(D,de||Ue[D]),K.type=D,K.texture=de)}function G(){let D=Me[ue];D!==void 0&&D.type!==void 0&&(n.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function Q(){try{n.compressedTexImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function te(){try{n.compressedTexImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function $(){try{n.texSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function He(){try{n.texSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function pe(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Se(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ut(){try{n.texStorage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function se(){try{n.texStorage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function be(){try{n.texImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ge(){try{n.texImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function We(D){Ft.equals(D)===!1&&(n.scissor(D.x,D.y,D.z,D.w),Ft.copy(D))}function we(D){J.equals(D)===!1&&(n.viewport(D.x,D.y,D.z,D.w),J.copy(D))}function ct(D,de){let q=c.get(de);q===void 0&&(q=new WeakMap,c.set(de,q));let K=q.get(D);K===void 0&&(K=n.getUniformBlockIndex(de,D.name),q.set(D,K))}function et(D,de){let K=c.get(de).get(D);l.get(de)!==K&&(n.uniformBlockBinding(de,K,D.__bindingPointIndex),l.set(de,K))}function Pt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},ue=null,Me={},d={},u=new WeakMap,p=[],g=null,E=!1,m=null,f=null,_=null,v=null,y=null,L=null,C=null,w=new le(0,0,0),F=0,S=!1,A=null,I=null,N=null,k=null,X=null,Ft.set(0,0,n.canvas.width,n.canvas.height),J.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:fe,disable:Ve,bindFramebuffer:Ze,drawBuffers:rt,useProgram:Ot,setBlending:B,setMaterial:Gn,setFlipSided:at,setCullFace:lt,setLineWidth:ke,setPolygonOffset:Dt,setScissorTest:ze,activeTexture:x,bindTexture:M,unbindTexture:G,compressedTexImage2D:Q,compressedTexImage3D:te,texImage2D:be,texImage3D:Ge,updateUBOMapping:ct,uniformBlockBinding:et,texStorage2D:ut,texStorage3D:se,texSubImage2D:$,texSubImage3D:He,compressedTexSubImage2D:pe,compressedTexSubImage3D:Se,scissor:We,viewport:we,reset:Pt}}function Au(n,e,t,i){let s=Gg(i);switch(t){case Gu:return n*e;case Wu:return n*e;case Xu:return n*e*2;case xh:return n*e/s.components*s.byteLength;case Ch:return n*e/s.components*s.byteLength;case qu:return n*e*2/s.components*s.byteLength;case Fh:return n*e*2/s.components*s.byteLength;case Vu:return n*e*3/s.components*s.byteLength;case ii:return n*e*4/s.components*s.byteLength;case Ph:return n*e*4/s.components*s.byteLength;case aa:case la:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ca:case ha:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case dc:case fc:return Math.max(n,16)*Math.max(e,8)/4;case hc:case uc:return Math.max(n,8)*Math.max(e,8)/2;case pc:case mc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case gc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ec:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case yc:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case vc:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case _c:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Ac:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Mc:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Sc:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Tc:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case bc:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case wc:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Rc:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case xc:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Cc:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Fc:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case da:case Pc:case Ic:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Yu:case Lc:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Dc:case Uc:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Gg(n){switch(n){case Li:case Ou:return{byteLength:1,components:1};case so:case zu:case Pn:return{byteLength:2,components:1};case wh:case Rh:return{byteLength:2,components:4};case Di:case bh:case fi:return{byteLength:4,components:1};case ku:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function Vg(n,e,t,i,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ie,h=new WeakMap,d,u=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(x,M){return p?new OffscreenCanvas(x,M):ma("canvas")}function E(x,M,G){let Q=1,te=ze(x);if((te.width>G||te.height>G)&&(Q=G/Math.max(te.width,te.height)),Q<1)if(typeof HTMLImageElement<"u"&&x instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&x instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&x instanceof ImageBitmap||typeof VideoFrame<"u"&&x instanceof VideoFrame){let $=Math.floor(Q*te.width),He=Math.floor(Q*te.height);d===void 0&&(d=g($,He));let pe=M?g($,He):d;return pe.width=$,pe.height=He,pe.getContext("2d").drawImage(x,0,0,$,He),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+$+"x"+He+")."),pe}else return"data"in x&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),x;return x}function m(x){return x.generateMipmaps}function f(x){n.generateMipmap(x)}function _(x){return x.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:x.isWebGL3DRenderTarget?n.TEXTURE_3D:x.isWebGLArrayRenderTarget||x.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function v(x,M,G,Q,te=!1){if(x!==null){if(n[x]!==void 0)return n[x];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+x+"'")}let $=M;if(M===n.RED&&(G===n.FLOAT&&($=n.R32F),G===n.HALF_FLOAT&&($=n.R16F),G===n.UNSIGNED_BYTE&&($=n.R8)),M===n.RED_INTEGER&&(G===n.UNSIGNED_BYTE&&($=n.R8UI),G===n.UNSIGNED_SHORT&&($=n.R16UI),G===n.UNSIGNED_INT&&($=n.R32UI),G===n.BYTE&&($=n.R8I),G===n.SHORT&&($=n.R16I),G===n.INT&&($=n.R32I)),M===n.RG&&(G===n.FLOAT&&($=n.RG32F),G===n.HALF_FLOAT&&($=n.RG16F),G===n.UNSIGNED_BYTE&&($=n.RG8)),M===n.RG_INTEGER&&(G===n.UNSIGNED_BYTE&&($=n.RG8UI),G===n.UNSIGNED_SHORT&&($=n.RG16UI),G===n.UNSIGNED_INT&&($=n.RG32UI),G===n.BYTE&&($=n.RG8I),G===n.SHORT&&($=n.RG16I),G===n.INT&&($=n.RG32I)),M===n.RGB_INTEGER&&(G===n.UNSIGNED_BYTE&&($=n.RGB8UI),G===n.UNSIGNED_SHORT&&($=n.RGB16UI),G===n.UNSIGNED_INT&&($=n.RGB32UI),G===n.BYTE&&($=n.RGB8I),G===n.SHORT&&($=n.RGB16I),G===n.INT&&($=n.RGB32I)),M===n.RGBA_INTEGER&&(G===n.UNSIGNED_BYTE&&($=n.RGBA8UI),G===n.UNSIGNED_SHORT&&($=n.RGBA16UI),G===n.UNSIGNED_INT&&($=n.RGBA32UI),G===n.BYTE&&($=n.RGBA8I),G===n.SHORT&&($=n.RGBA16I),G===n.INT&&($=n.RGBA32I)),M===n.RGB&&G===n.UNSIGNED_INT_5_9_9_9_REV&&($=n.RGB9_E5),M===n.RGBA){let He=te?za:ft.getTransfer(Q);G===n.FLOAT&&($=n.RGBA32F),G===n.HALF_FLOAT&&($=n.RGBA16F),G===n.UNSIGNED_BYTE&&($=He===wt?n.SRGB8_ALPHA8:n.RGBA8),G===n.UNSIGNED_SHORT_4_4_4_4&&($=n.RGBA4),G===n.UNSIGNED_SHORT_5_5_5_1&&($=n.RGB5_A1)}return($===n.R16F||$===n.R32F||$===n.RG16F||$===n.RG32F||$===n.RGBA16F||$===n.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function y(x,M){let G;return x?M===null||M===Di||M===vr?G=n.DEPTH24_STENCIL8:M===fi?G=n.DEPTH32F_STENCIL8:M===so&&(G=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Di||M===vr?G=n.DEPTH_COMPONENT24:M===fi?G=n.DEPTH_COMPONENT32F:M===so&&(G=n.DEPTH_COMPONENT16),G}function L(x,M){return m(x)===!0||x.isFramebufferTexture&&x.minFilter!==zn&&x.minFilter!==ui?Math.log2(Math.max(M.width,M.height))+1:x.mipmaps!==void 0&&x.mipmaps.length>0?x.mipmaps.length:x.isCompressedTexture&&Array.isArray(x.image)?M.mipmaps.length:1}function C(x){let M=x.target;M.removeEventListener("dispose",C),F(M),M.isVideoTexture&&h.delete(M)}function w(x){let M=x.target;M.removeEventListener("dispose",w),A(M)}function F(x){let M=i.get(x);if(M.__webglInit===void 0)return;let G=x.source,Q=u.get(G);if(Q){let te=Q[M.__cacheKey];te.usedTimes--,te.usedTimes===0&&S(x),Object.keys(Q).length===0&&u.delete(G)}i.remove(x)}function S(x){let M=i.get(x);n.deleteTexture(M.__webglTexture);let G=x.source,Q=u.get(G);delete Q[M.__cacheKey],o.memory.textures--}function A(x){let M=i.get(x);if(x.depthTexture&&(x.depthTexture.dispose(),i.remove(x.depthTexture)),x.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(M.__webglFramebuffer[Q]))for(let te=0;te<M.__webglFramebuffer[Q].length;te++)n.deleteFramebuffer(M.__webglFramebuffer[Q][te]);else n.deleteFramebuffer(M.__webglFramebuffer[Q]);M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer[Q])}else{if(Array.isArray(M.__webglFramebuffer))for(let Q=0;Q<M.__webglFramebuffer.length;Q++)n.deleteFramebuffer(M.__webglFramebuffer[Q]);else n.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&n.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let Q=0;Q<M.__webglColorRenderbuffer.length;Q++)M.__webglColorRenderbuffer[Q]&&n.deleteRenderbuffer(M.__webglColorRenderbuffer[Q]);M.__webglDepthRenderbuffer&&n.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let G=x.textures;for(let Q=0,te=G.length;Q<te;Q++){let $=i.get(G[Q]);$.__webglTexture&&(n.deleteTexture($.__webglTexture),o.memory.textures--),i.remove(G[Q])}i.remove(x)}let I=0;function N(){I=0}function k(){let x=I;return x>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+x+" texture units while this GPU supports only "+s.maxTextures),I+=1,x}function X(x){let M=[];return M.push(x.wrapS),M.push(x.wrapT),M.push(x.wrapR||0),M.push(x.magFilter),M.push(x.minFilter),M.push(x.anisotropy),M.push(x.internalFormat),M.push(x.format),M.push(x.type),M.push(x.generateMipmaps),M.push(x.premultiplyAlpha),M.push(x.flipY),M.push(x.unpackAlignment),M.push(x.colorSpace),M.join()}function ee(x,M){let G=i.get(x);if(x.isVideoTexture&&ke(x),x.isRenderTargetTexture===!1&&x.version>0&&G.__version!==x.version){let Q=x.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(G,x,M);return}}t.bindTexture(n.TEXTURE_2D,G.__webglTexture,n.TEXTURE0+M)}function Z(x,M){let G=i.get(x);if(x.version>0&&G.__version!==x.version){J(G,x,M);return}t.bindTexture(n.TEXTURE_2D_ARRAY,G.__webglTexture,n.TEXTURE0+M)}function oe(x,M){let G=i.get(x);if(x.version>0&&G.__version!==x.version){J(G,x,M);return}t.bindTexture(n.TEXTURE_3D,G.__webglTexture,n.TEXTURE0+M)}function Y(x,M){let G=i.get(x);if(x.version>0&&G.__version!==x.version){ae(G,x,M);return}t.bindTexture(n.TEXTURE_CUBE_MAP,G.__webglTexture,n.TEXTURE0+M)}let ue={[rn]:n.REPEAT,[Rs]:n.CLAMP_TO_EDGE,[cc]:n.MIRRORED_REPEAT},Me={[zn]:n.NEAREST,[Wf]:n.NEAREST_MIPMAP_NEAREST,[Fo]:n.NEAREST_MIPMAP_LINEAR,[ui]:n.LINEAR,[gl]:n.LINEAR_MIPMAP_NEAREST,[xs]:n.LINEAR_MIPMAP_LINEAR},Oe={[Yf]:n.NEVER,[jf]:n.ALWAYS,[Zf]:n.LESS,[$u]:n.LEQUAL,[$f]:n.EQUAL,[Kf]:n.GEQUAL,[Jf]:n.GREATER,[Qf]:n.NOTEQUAL};function st(x,M){if(M.type===fi&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===ui||M.magFilter===gl||M.magFilter===Fo||M.magFilter===xs||M.minFilter===ui||M.minFilter===gl||M.minFilter===Fo||M.minFilter===xs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(x,n.TEXTURE_WRAP_S,ue[M.wrapS]),n.texParameteri(x,n.TEXTURE_WRAP_T,ue[M.wrapT]),(x===n.TEXTURE_3D||x===n.TEXTURE_2D_ARRAY)&&n.texParameteri(x,n.TEXTURE_WRAP_R,ue[M.wrapR]),n.texParameteri(x,n.TEXTURE_MAG_FILTER,Me[M.magFilter]),n.texParameteri(x,n.TEXTURE_MIN_FILTER,Me[M.minFilter]),M.compareFunction&&(n.texParameteri(x,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(x,n.TEXTURE_COMPARE_FUNC,Oe[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===zn||M.minFilter!==Fo&&M.minFilter!==xs||M.type===fi&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){let G=e.get("EXT_texture_filter_anisotropic");n.texParameterf(x,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function Ft(x,M){let G=!1;x.__webglInit===void 0&&(x.__webglInit=!0,M.addEventListener("dispose",C));let Q=M.source,te=u.get(Q);te===void 0&&(te={},u.set(Q,te));let $=X(M);if($!==x.__cacheKey){te[$]===void 0&&(te[$]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,G=!0),te[$].usedTimes++;let He=te[x.__cacheKey];He!==void 0&&(te[x.__cacheKey].usedTimes--,He.usedTimes===0&&S(M)),x.__cacheKey=$,x.__webglTexture=te[$].texture}return G}function J(x,M,G){let Q=n.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(Q=n.TEXTURE_2D_ARRAY),M.isData3DTexture&&(Q=n.TEXTURE_3D);let te=Ft(x,M),$=M.source;t.bindTexture(Q,x.__webglTexture,n.TEXTURE0+G);let He=i.get($);if($.version!==He.__version||te===!0){t.activeTexture(n.TEXTURE0+G);let pe=ft.getPrimaries(ft.workingColorSpace),Se=M.colorSpace===Ji?null:ft.getPrimaries(M.colorSpace),ut=M.colorSpace===Ji||pe===Se?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ut);let se=E(M.image,!1,s.maxTextureSize);se=Dt(M,se);let be=r.convert(M.format,M.colorSpace),Ge=r.convert(M.type),We=v(M.internalFormat,be,Ge,M.colorSpace,M.isVideoTexture);st(Q,M);let we,ct=M.mipmaps,et=M.isVideoTexture!==!0,Pt=He.__version===void 0||te===!0,D=$.dataReady,de=L(M,se);if(M.isDepthTexture)We=y(M.format===_r,M.type),Pt&&(et?t.texStorage2D(n.TEXTURE_2D,1,We,se.width,se.height):t.texImage2D(n.TEXTURE_2D,0,We,se.width,se.height,0,be,Ge,null));else if(M.isDataTexture)if(ct.length>0){et&&Pt&&t.texStorage2D(n.TEXTURE_2D,de,We,ct[0].width,ct[0].height);for(let q=0,K=ct.length;q<K;q++)we=ct[q],et?D&&t.texSubImage2D(n.TEXTURE_2D,q,0,0,we.width,we.height,be,Ge,we.data):t.texImage2D(n.TEXTURE_2D,q,We,we.width,we.height,0,be,Ge,we.data);M.generateMipmaps=!1}else et?(Pt&&t.texStorage2D(n.TEXTURE_2D,de,We,se.width,se.height),D&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,se.width,se.height,be,Ge,se.data)):t.texImage2D(n.TEXTURE_2D,0,We,se.width,se.height,0,be,Ge,se.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){et&&Pt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,de,We,ct[0].width,ct[0].height,se.depth);for(let q=0,K=ct.length;q<K;q++)if(we=ct[q],M.format!==ii)if(be!==null)if(et){if(D)if(M.layerUpdates.size>0){let _e=Au(we.width,we.height,M.format,M.type);for(let ge of M.layerUpdates){let $e=we.data.subarray(ge*_e/we.data.BYTES_PER_ELEMENT,(ge+1)*_e/we.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,q,0,0,ge,we.width,we.height,1,be,$e)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,q,0,0,0,we.width,we.height,se.depth,be,we.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,q,We,we.width,we.height,se.depth,0,we.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else et?D&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,q,0,0,0,we.width,we.height,se.depth,be,Ge,we.data):t.texImage3D(n.TEXTURE_2D_ARRAY,q,We,we.width,we.height,se.depth,0,be,Ge,we.data)}else{et&&Pt&&t.texStorage2D(n.TEXTURE_2D,de,We,ct[0].width,ct[0].height);for(let q=0,K=ct.length;q<K;q++)we=ct[q],M.format!==ii?be!==null?et?D&&t.compressedTexSubImage2D(n.TEXTURE_2D,q,0,0,we.width,we.height,be,we.data):t.compressedTexImage2D(n.TEXTURE_2D,q,We,we.width,we.height,0,we.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):et?D&&t.texSubImage2D(n.TEXTURE_2D,q,0,0,we.width,we.height,be,Ge,we.data):t.texImage2D(n.TEXTURE_2D,q,We,we.width,we.height,0,be,Ge,we.data)}else if(M.isDataArrayTexture)if(et){if(Pt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,de,We,se.width,se.height,se.depth),D)if(M.layerUpdates.size>0){let q=Au(se.width,se.height,M.format,M.type);for(let K of M.layerUpdates){let _e=se.data.subarray(K*q/se.data.BYTES_PER_ELEMENT,(K+1)*q/se.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,K,se.width,se.height,1,be,Ge,_e)}M.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,be,Ge,se.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,We,se.width,se.height,se.depth,0,be,Ge,se.data);else if(M.isData3DTexture)et?(Pt&&t.texStorage3D(n.TEXTURE_3D,de,We,se.width,se.height,se.depth),D&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,be,Ge,se.data)):t.texImage3D(n.TEXTURE_3D,0,We,se.width,se.height,se.depth,0,be,Ge,se.data);else if(M.isFramebufferTexture){if(Pt)if(et)t.texStorage2D(n.TEXTURE_2D,de,We,se.width,se.height);else{let q=se.width,K=se.height;for(let _e=0;_e<de;_e++)t.texImage2D(n.TEXTURE_2D,_e,We,q,K,0,be,Ge,null),q>>=1,K>>=1}}else if(ct.length>0){if(et&&Pt){let q=ze(ct[0]);t.texStorage2D(n.TEXTURE_2D,de,We,q.width,q.height)}for(let q=0,K=ct.length;q<K;q++)we=ct[q],et?D&&t.texSubImage2D(n.TEXTURE_2D,q,0,0,be,Ge,we):t.texImage2D(n.TEXTURE_2D,q,We,be,Ge,we);M.generateMipmaps=!1}else if(et){if(Pt){let q=ze(se);t.texStorage2D(n.TEXTURE_2D,de,We,q.width,q.height)}D&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,be,Ge,se)}else t.texImage2D(n.TEXTURE_2D,0,We,be,Ge,se);m(M)&&f(Q),He.__version=$.version,M.onUpdate&&M.onUpdate(M)}x.__version=M.version}function ae(x,M,G){if(M.image.length!==6)return;let Q=Ft(x,M),te=M.source;t.bindTexture(n.TEXTURE_CUBE_MAP,x.__webglTexture,n.TEXTURE0+G);let $=i.get(te);if(te.version!==$.__version||Q===!0){t.activeTexture(n.TEXTURE0+G);let He=ft.getPrimaries(ft.workingColorSpace),pe=M.colorSpace===Ji?null:ft.getPrimaries(M.colorSpace),Se=M.colorSpace===Ji||He===pe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);let ut=M.isCompressedTexture||M.image[0].isCompressedTexture,se=M.image[0]&&M.image[0].isDataTexture,be=[];for(let K=0;K<6;K++)!ut&&!se?be[K]=E(M.image[K],!0,s.maxCubemapSize):be[K]=se?M.image[K].image:M.image[K],be[K]=Dt(M,be[K]);let Ge=be[0],We=r.convert(M.format,M.colorSpace),we=r.convert(M.type),ct=v(M.internalFormat,We,we,M.colorSpace),et=M.isVideoTexture!==!0,Pt=$.__version===void 0||Q===!0,D=te.dataReady,de=L(M,Ge);st(n.TEXTURE_CUBE_MAP,M);let q;if(ut){et&&Pt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,de,ct,Ge.width,Ge.height);for(let K=0;K<6;K++){q=be[K].mipmaps;for(let _e=0;_e<q.length;_e++){let ge=q[_e];M.format!==ii?We!==null?et?D&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,_e,0,0,ge.width,ge.height,We,ge.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,_e,ct,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):et?D&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,_e,0,0,ge.width,ge.height,We,we,ge.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,_e,ct,ge.width,ge.height,0,We,we,ge.data)}}}else{if(q=M.mipmaps,et&&Pt){q.length>0&&de++;let K=ze(be[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,de,ct,K.width,K.height)}for(let K=0;K<6;K++)if(se){et?D&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,be[K].width,be[K].height,We,we,be[K].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,ct,be[K].width,be[K].height,0,We,we,be[K].data);for(let _e=0;_e<q.length;_e++){let $e=q[_e].image[K].image;et?D&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,_e+1,0,0,$e.width,$e.height,We,we,$e.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,_e+1,ct,$e.width,$e.height,0,We,we,$e.data)}}else{et?D&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,We,we,be[K]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,ct,We,we,be[K]);for(let _e=0;_e<q.length;_e++){let ge=q[_e];et?D&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,_e+1,0,0,We,we,ge.image[K]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,_e+1,ct,We,we,ge.image[K])}}}m(M)&&f(n.TEXTURE_CUBE_MAP),$.__version=te.version,M.onUpdate&&M.onUpdate(M)}x.__version=M.version}function Ue(x,M,G,Q,te,$){let He=r.convert(G.format,G.colorSpace),pe=r.convert(G.type),Se=v(G.internalFormat,He,pe,G.colorSpace),ut=i.get(M),se=i.get(G);if(se.__renderTarget=M,!ut.__hasExternalTextures){let be=Math.max(1,M.width>>$),Ge=Math.max(1,M.height>>$);te===n.TEXTURE_3D||te===n.TEXTURE_2D_ARRAY?t.texImage3D(te,$,Se,be,Ge,M.depth,0,He,pe,null):t.texImage2D(te,$,Se,be,Ge,0,He,pe,null)}t.bindFramebuffer(n.FRAMEBUFFER,x),lt(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Q,te,se.__webglTexture,0,at(M)):(te===n.TEXTURE_2D||te>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Q,te,se.__webglTexture,$),t.bindFramebuffer(n.FRAMEBUFFER,null)}function fe(x,M,G){if(n.bindRenderbuffer(n.RENDERBUFFER,x),M.depthBuffer){let Q=M.depthTexture,te=Q&&Q.isDepthTexture?Q.type:null,$=y(M.stencilBuffer,te),He=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,pe=at(M);lt(M)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,pe,$,M.width,M.height):G?n.renderbufferStorageMultisample(n.RENDERBUFFER,pe,$,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,$,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,He,n.RENDERBUFFER,x)}else{let Q=M.textures;for(let te=0;te<Q.length;te++){let $=Q[te],He=r.convert($.format,$.colorSpace),pe=r.convert($.type),Se=v($.internalFormat,He,pe,$.colorSpace),ut=at(M);G&&lt(M)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ut,Se,M.width,M.height):lt(M)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ut,Se,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,Se,M.width,M.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ve(x,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,x),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Q=i.get(M.depthTexture);Q.__renderTarget=M,(!Q.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),ee(M.depthTexture,0);let te=Q.__webglTexture,$=at(M);if(M.depthTexture.format===fr)lt(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,te,0,$):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,te,0);else if(M.depthTexture.format===_r)lt(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,te,0,$):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,te,0);else throw new Error("Unknown depthTexture format")}function Ze(x){let M=i.get(x),G=x.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==x.depthTexture){let Q=x.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),Q){let te=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,Q.removeEventListener("dispose",te)};Q.addEventListener("dispose",te),M.__depthDisposeCallback=te}M.__boundDepthTexture=Q}if(x.depthTexture&&!M.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");Ve(M.__webglFramebuffer,x)}else if(G){M.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[Q]),M.__webglDepthbuffer[Q]===void 0)M.__webglDepthbuffer[Q]=n.createRenderbuffer(),fe(M.__webglDepthbuffer[Q],x,!1);else{let te=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,$=M.__webglDepthbuffer[Q];n.bindRenderbuffer(n.RENDERBUFFER,$),n.framebufferRenderbuffer(n.FRAMEBUFFER,te,n.RENDERBUFFER,$)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=n.createRenderbuffer(),fe(M.__webglDepthbuffer,x,!1);else{let Q=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,te=M.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,te),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,te)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function rt(x,M,G){let Q=i.get(x);M!==void 0&&Ue(Q.__webglFramebuffer,x,x.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),G!==void 0&&Ze(x)}function Ot(x){let M=x.texture,G=i.get(x),Q=i.get(M);x.addEventListener("dispose",w);let te=x.textures,$=x.isWebGLCubeRenderTarget===!0,He=te.length>1;if(He||(Q.__webglTexture===void 0&&(Q.__webglTexture=n.createTexture()),Q.__version=M.version,o.memory.textures++),$){G.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(M.mipmaps&&M.mipmaps.length>0){G.__webglFramebuffer[pe]=[];for(let Se=0;Se<M.mipmaps.length;Se++)G.__webglFramebuffer[pe][Se]=n.createFramebuffer()}else G.__webglFramebuffer[pe]=n.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){G.__webglFramebuffer=[];for(let pe=0;pe<M.mipmaps.length;pe++)G.__webglFramebuffer[pe]=n.createFramebuffer()}else G.__webglFramebuffer=n.createFramebuffer();if(He)for(let pe=0,Se=te.length;pe<Se;pe++){let ut=i.get(te[pe]);ut.__webglTexture===void 0&&(ut.__webglTexture=n.createTexture(),o.memory.textures++)}if(x.samples>0&&lt(x)===!1){G.__webglMultisampledFramebuffer=n.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let pe=0;pe<te.length;pe++){let Se=te[pe];G.__webglColorRenderbuffer[pe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,G.__webglColorRenderbuffer[pe]);let ut=r.convert(Se.format,Se.colorSpace),se=r.convert(Se.type),be=v(Se.internalFormat,ut,se,Se.colorSpace,x.isXRRenderTarget===!0),Ge=at(x);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ge,be,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.RENDERBUFFER,G.__webglColorRenderbuffer[pe])}n.bindRenderbuffer(n.RENDERBUFFER,null),x.depthBuffer&&(G.__webglDepthRenderbuffer=n.createRenderbuffer(),fe(G.__webglDepthRenderbuffer,x,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if($){t.bindTexture(n.TEXTURE_CUBE_MAP,Q.__webglTexture),st(n.TEXTURE_CUBE_MAP,M);for(let pe=0;pe<6;pe++)if(M.mipmaps&&M.mipmaps.length>0)for(let Se=0;Se<M.mipmaps.length;Se++)Ue(G.__webglFramebuffer[pe][Se],x,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Se);else Ue(G.__webglFramebuffer[pe],x,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);m(M)&&f(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(He){for(let pe=0,Se=te.length;pe<Se;pe++){let ut=te[pe],se=i.get(ut);t.bindTexture(n.TEXTURE_2D,se.__webglTexture),st(n.TEXTURE_2D,ut),Ue(G.__webglFramebuffer,x,ut,n.COLOR_ATTACHMENT0+pe,n.TEXTURE_2D,0),m(ut)&&f(n.TEXTURE_2D)}t.unbindTexture()}else{let pe=n.TEXTURE_2D;if((x.isWebGL3DRenderTarget||x.isWebGLArrayRenderTarget)&&(pe=x.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(pe,Q.__webglTexture),st(pe,M),M.mipmaps&&M.mipmaps.length>0)for(let Se=0;Se<M.mipmaps.length;Se++)Ue(G.__webglFramebuffer[Se],x,M,n.COLOR_ATTACHMENT0,pe,Se);else Ue(G.__webglFramebuffer,x,M,n.COLOR_ATTACHMENT0,pe,0);m(M)&&f(pe),t.unbindTexture()}x.depthBuffer&&Ze(x)}function dt(x){let M=x.textures;for(let G=0,Q=M.length;G<Q;G++){let te=M[G];if(m(te)){let $=_(x),He=i.get(te).__webglTexture;t.bindTexture($,He),f($),t.unbindTexture()}}}let Xt=[],B=[];function Gn(x){if(x.samples>0){if(lt(x)===!1){let M=x.textures,G=x.width,Q=x.height,te=n.COLOR_BUFFER_BIT,$=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,He=i.get(x),pe=M.length>1;if(pe)for(let Se=0;Se<M.length;Se++)t.bindFramebuffer(n.FRAMEBUFFER,He.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Se,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,He.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Se,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,He.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,He.__webglFramebuffer);for(let Se=0;Se<M.length;Se++){if(x.resolveDepthBuffer&&(x.depthBuffer&&(te|=n.DEPTH_BUFFER_BIT),x.stencilBuffer&&x.resolveStencilBuffer&&(te|=n.STENCIL_BUFFER_BIT)),pe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,He.__webglColorRenderbuffer[Se]);let ut=i.get(M[Se]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ut,0)}n.blitFramebuffer(0,0,G,Q,0,0,G,Q,te,n.NEAREST),l===!0&&(Xt.length=0,B.length=0,Xt.push(n.COLOR_ATTACHMENT0+Se),x.depthBuffer&&x.resolveDepthBuffer===!1&&(Xt.push($),B.push($),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,B)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Xt))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),pe)for(let Se=0;Se<M.length;Se++){t.bindFramebuffer(n.FRAMEBUFFER,He.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Se,n.RENDERBUFFER,He.__webglColorRenderbuffer[Se]);let ut=i.get(M[Se]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,He.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Se,n.TEXTURE_2D,ut,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,He.__webglMultisampledFramebuffer)}else if(x.depthBuffer&&x.resolveDepthBuffer===!1&&l){let M=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[M])}}}function at(x){return Math.min(s.maxSamples,x.samples)}function lt(x){let M=i.get(x);return x.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function ke(x){let M=o.render.frame;h.get(x)!==M&&(h.set(x,M),x.update())}function Dt(x,M){let G=x.colorSpace,Q=x.format,te=x.type;return x.isCompressedTexture===!0||x.isVideoTexture===!0||G!==ss&&G!==Ji&&(ft.getTransfer(G)===wt?(Q!==ii||te!==Li)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),M}function ze(x){return typeof HTMLImageElement<"u"&&x instanceof HTMLImageElement?(c.width=x.naturalWidth||x.width,c.height=x.naturalHeight||x.height):typeof VideoFrame<"u"&&x instanceof VideoFrame?(c.width=x.displayWidth,c.height=x.displayHeight):(c.width=x.width,c.height=x.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=N,this.setTexture2D=ee,this.setTexture2DArray=Z,this.setTexture3D=oe,this.setTextureCube=Y,this.rebindTextures=rt,this.setupRenderTarget=Ot,this.updateRenderTargetMipmap=dt,this.updateMultisampleRenderTarget=Gn,this.setupDepthRenderbuffer=Ze,this.setupFrameBufferTexture=Ue,this.useMultisampledRTT=lt}function Wg(n,e){function t(i,s=Ji){let r,o=ft.getTransfer(s);if(i===Li)return n.UNSIGNED_BYTE;if(i===wh)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Rh)return n.UNSIGNED_SHORT_5_5_5_1;if(i===ku)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Ou)return n.BYTE;if(i===zu)return n.SHORT;if(i===so)return n.UNSIGNED_SHORT;if(i===bh)return n.INT;if(i===Di)return n.UNSIGNED_INT;if(i===fi)return n.FLOAT;if(i===Pn)return n.HALF_FLOAT;if(i===Gu)return n.ALPHA;if(i===Vu)return n.RGB;if(i===ii)return n.RGBA;if(i===Wu)return n.LUMINANCE;if(i===Xu)return n.LUMINANCE_ALPHA;if(i===fr)return n.DEPTH_COMPONENT;if(i===_r)return n.DEPTH_STENCIL;if(i===xh)return n.RED;if(i===Ch)return n.RED_INTEGER;if(i===qu)return n.RG;if(i===Fh)return n.RG_INTEGER;if(i===Ph)return n.RGBA_INTEGER;if(i===aa||i===la||i===ca||i===ha)if(o===wt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===aa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===la)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ca)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ha)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===aa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===la)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ca)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ha)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===hc||i===dc||i===uc||i===fc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===hc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===dc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===uc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===fc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===pc||i===mc||i===gc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===pc||i===mc)return o===wt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===gc)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Ec||i===yc||i===vc||i===_c||i===Ac||i===Mc||i===Sc||i===Tc||i===bc||i===wc||i===Rc||i===xc||i===Cc||i===Fc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Ec)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===yc)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===vc)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===_c)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ac)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Mc)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Sc)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Tc)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===bc)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===wc)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Rc)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===xc)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Cc)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Fc)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===da||i===Pc||i===Ic)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===da)return o===wt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Pc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ic)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Yu||i===Lc||i===Dc||i===Uc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===da)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Lc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Dc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Uc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===vr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var Jc=class extends dn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},ce=class extends qt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Xg={type:"move"},eo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ce,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ce,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ce,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let E of e.hand.values()){let m=t.getJointPose(E,i),f=this._getHandJoint(c,E);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),p=.02,g=.005;c.inputState.pinching&&u>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Xg)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new ce;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},qg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Yg=`
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

}`,Qc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){let s=new xn,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new an({vertexShader:qg,fragmentShader:Yg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new O(new Ae(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Kc=class extends es{constructor(e,t){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,u=null,p=null,g=null,E=new Qc,m=t.getContextAttributes(),f=null,_=null,v=[],y=[],L=new ie,C=null,w=new dn;w.viewport=new xt;let F=new dn;F.viewport=new xt;let S=[w,F],A=new Jc,I=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let ae=v[J];return ae===void 0&&(ae=new eo,v[J]=ae),ae.getTargetRaySpace()},this.getControllerGrip=function(J){let ae=v[J];return ae===void 0&&(ae=new eo,v[J]=ae),ae.getGripSpace()},this.getHand=function(J){let ae=v[J];return ae===void 0&&(ae=new eo,v[J]=ae),ae.getHandSpace()};function k(J){let ae=y.indexOf(J.inputSource);if(ae===-1)return;let Ue=v[ae];Ue!==void 0&&(Ue.update(J.inputSource,J.frame,c||o),Ue.dispatchEvent({type:J.type,data:J.inputSource}))}function X(){s.removeEventListener("select",k),s.removeEventListener("selectstart",k),s.removeEventListener("selectend",k),s.removeEventListener("squeeze",k),s.removeEventListener("squeezestart",k),s.removeEventListener("squeezeend",k),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",ee);for(let J=0;J<v.length;J++){let ae=y[J];ae!==null&&(y[J]=null,v[J].disconnect(ae))}I=null,N=null,E.reset(),e.setRenderTarget(f),p=null,u=null,d=null,s=null,_=null,Ft.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(L.width,L.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){a=J,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(f=e.getRenderTarget(),s.addEventListener("select",k),s.addEventListener("selectstart",k),s.addEventListener("selectend",k),s.addEventListener("squeeze",k),s.addEventListener("squeezestart",k),s.addEventListener("squeezeend",k),s.addEventListener("end",X),s.addEventListener("inputsourceschange",ee),m.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(L),s.renderState.layers===void 0){let ae={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,ae),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),_=new on(p.framebufferWidth,p.framebufferHeight,{format:ii,type:Li,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ae=null,Ue=null,fe=null;m.depth&&(fe=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ae=m.stencil?_r:fr,Ue=m.stencil?vr:Di);let Ve={colorFormat:t.RGBA8,depthFormat:fe,scaleFactor:r};d=new XRWebGLBinding(s,t),u=d.createProjectionLayer(Ve),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),_=new on(u.textureWidth,u.textureHeight,{format:ii,type:Li,depthTexture:new Sr(u.textureWidth,u.textureHeight,Ue,void 0,void 0,void 0,void 0,void 0,void 0,ae),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Ft.setContext(s),Ft.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return E.getDepthTexture()};function ee(J){for(let ae=0;ae<J.removed.length;ae++){let Ue=J.removed[ae],fe=y.indexOf(Ue);fe>=0&&(y[fe]=null,v[fe].disconnect(Ue))}for(let ae=0;ae<J.added.length;ae++){let Ue=J.added[ae],fe=y.indexOf(Ue);if(fe===-1){for(let Ze=0;Ze<v.length;Ze++)if(Ze>=y.length){y.push(Ue),fe=Ze;break}else if(y[Ze]===null){y[Ze]=Ue,fe=Ze;break}if(fe===-1)break}let Ve=v[fe];Ve&&Ve.connect(Ue)}}let Z=new P,oe=new P;function Y(J,ae,Ue){Z.setFromMatrixPosition(ae.matrixWorld),oe.setFromMatrixPosition(Ue.matrixWorld);let fe=Z.distanceTo(oe),Ve=ae.projectionMatrix.elements,Ze=Ue.projectionMatrix.elements,rt=Ve[14]/(Ve[10]-1),Ot=Ve[14]/(Ve[10]+1),dt=(Ve[9]+1)/Ve[5],Xt=(Ve[9]-1)/Ve[5],B=(Ve[8]-1)/Ve[0],Gn=(Ze[8]+1)/Ze[0],at=rt*B,lt=rt*Gn,ke=fe/(-B+Gn),Dt=ke*-B;if(ae.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Dt),J.translateZ(ke),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Ve[10]===-1)J.projectionMatrix.copy(ae.projectionMatrix),J.projectionMatrixInverse.copy(ae.projectionMatrixInverse);else{let ze=rt+ke,x=Ot+ke,M=at-Dt,G=lt+(fe-Dt),Q=dt*Ot/x*ze,te=Xt*Ot/x*ze;J.projectionMatrix.makePerspective(M,G,Q,te,ze,x),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function ue(J,ae){ae===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(ae.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;let ae=J.near,Ue=J.far;E.texture!==null&&(E.depthNear>0&&(ae=E.depthNear),E.depthFar>0&&(Ue=E.depthFar)),A.near=F.near=w.near=ae,A.far=F.far=w.far=Ue,(I!==A.near||N!==A.far)&&(s.updateRenderState({depthNear:A.near,depthFar:A.far}),I=A.near,N=A.far),w.layers.mask=J.layers.mask|2,F.layers.mask=J.layers.mask|4,A.layers.mask=w.layers.mask|F.layers.mask;let fe=J.parent,Ve=A.cameras;ue(A,fe);for(let Ze=0;Ze<Ve.length;Ze++)ue(Ve[Ze],fe);Ve.length===2?Y(A,w,F):A.projectionMatrix.copy(w.projectionMatrix),Me(J,A,fe)};function Me(J,ae,Ue){Ue===null?J.matrix.copy(ae.matrixWorld):(J.matrix.copy(Ue.matrixWorld),J.matrix.invert(),J.matrix.multiply(ae.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(ae.projectionMatrix),J.projectionMatrixInverse.copy(ae.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=pa*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(u===null&&p===null))return l},this.setFoveation=function(J){l=J,u!==null&&(u.fixedFoveation=J),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=J)},this.hasDepthSensing=function(){return E.texture!==null},this.getDepthSensingMesh=function(){return E.getMesh(A)};let Oe=null;function st(J,ae){if(h=ae.getViewerPose(c||o),g=ae,h!==null){let Ue=h.views;p!==null&&(e.setRenderTargetFramebuffer(_,p.framebuffer),e.setRenderTarget(_));let fe=!1;Ue.length!==A.cameras.length&&(A.cameras.length=0,fe=!0);for(let Ze=0;Ze<Ue.length;Ze++){let rt=Ue[Ze],Ot=null;if(p!==null)Ot=p.getViewport(rt);else{let Xt=d.getViewSubImage(u,rt);Ot=Xt.viewport,Ze===0&&(e.setRenderTargetTextures(_,Xt.colorTexture,u.ignoreDepthValues?void 0:Xt.depthStencilTexture),e.setRenderTarget(_))}let dt=S[Ze];dt===void 0&&(dt=new dn,dt.layers.enable(Ze),dt.viewport=new xt,S[Ze]=dt),dt.matrix.fromArray(rt.transform.matrix),dt.matrix.decompose(dt.position,dt.quaternion,dt.scale),dt.projectionMatrix.fromArray(rt.projectionMatrix),dt.projectionMatrixInverse.copy(dt.projectionMatrix).invert(),dt.viewport.set(Ot.x,Ot.y,Ot.width,Ot.height),Ze===0&&(A.matrix.copy(dt.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),fe===!0&&A.cameras.push(dt)}let Ve=s.enabledFeatures;if(Ve&&Ve.includes("depth-sensing")){let Ze=d.getDepthInformation(Ue[0]);Ze&&Ze.isValid&&Ze.texture&&E.init(e,Ze,s.renderState)}}for(let Ue=0;Ue<v.length;Ue++){let fe=y[Ue],Ve=v[Ue];fe!==null&&Ve!==void 0&&Ve.update(fe,ae,c||o)}Oe&&Oe(J,ae),ae.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ae}),g=null}let Ft=new ju;Ft.setAnimationLoop(st),this.setAnimationLoop=function(J){Oe=J},this.dispose=function(){}}},Ss=new gi,Zg=new Ct;function $g(n,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,Ku(n)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,_,v,y){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),d(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),u(m,f),f.isMeshPhysicalMaterial&&p(m,f,y)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),E(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,_,v):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===sn&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===sn&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let _=e.get(f),v=_.envMap,y=_.envMapRotation;v&&(m.envMap.value=v,Ss.copy(y),Ss.x*=-1,Ss.y*=-1,Ss.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Ss.y*=-1,Ss.z*=-1),m.envMapRotation.value.setFromMatrix4(Zg.makeRotationFromEuler(Ss)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,_,v){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*_,m.scale.value=v*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function u(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,_){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===sn&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function E(m,f){let _=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Jg(n,e,t,i){let s={},r={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,v){let y=v.program;i.uniformBlockBinding(_,y)}function c(_,v){let y=s[_.id];y===void 0&&(g(_),y=h(_),s[_.id]=y,_.addEventListener("dispose",m));let L=v.program;i.updateUBOMapping(_,L);let C=e.render.frame;r[_.id]!==C&&(u(_),r[_.id]=C)}function h(_){let v=d();_.__bindingPointIndex=v;let y=n.createBuffer(),L=_.__size,C=_.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,L,C),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,v,y),y}function d(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(_){let v=s[_.id],y=_.uniforms,L=_.__cache;n.bindBuffer(n.UNIFORM_BUFFER,v);for(let C=0,w=y.length;C<w;C++){let F=Array.isArray(y[C])?y[C]:[y[C]];for(let S=0,A=F.length;S<A;S++){let I=F[S];if(p(I,C,S,L)===!0){let N=I.__offset,k=Array.isArray(I.value)?I.value:[I.value],X=0;for(let ee=0;ee<k.length;ee++){let Z=k[ee],oe=E(Z);typeof Z=="number"||typeof Z=="boolean"?(I.__data[0]=Z,n.bufferSubData(n.UNIFORM_BUFFER,N+X,I.__data)):Z.isMatrix3?(I.__data[0]=Z.elements[0],I.__data[1]=Z.elements[1],I.__data[2]=Z.elements[2],I.__data[3]=0,I.__data[4]=Z.elements[3],I.__data[5]=Z.elements[4],I.__data[6]=Z.elements[5],I.__data[7]=0,I.__data[8]=Z.elements[6],I.__data[9]=Z.elements[7],I.__data[10]=Z.elements[8],I.__data[11]=0):(Z.toArray(I.__data,X),X+=oe.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,N,I.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(_,v,y,L){let C=_.value,w=v+"_"+y;if(L[w]===void 0)return typeof C=="number"||typeof C=="boolean"?L[w]=C:L[w]=C.clone(),!0;{let F=L[w];if(typeof C=="number"||typeof C=="boolean"){if(F!==C)return L[w]=C,!0}else if(F.equals(C)===!1)return F.copy(C),!0}return!1}function g(_){let v=_.uniforms,y=0,L=16;for(let w=0,F=v.length;w<F;w++){let S=Array.isArray(v[w])?v[w]:[v[w]];for(let A=0,I=S.length;A<I;A++){let N=S[A],k=Array.isArray(N.value)?N.value:[N.value];for(let X=0,ee=k.length;X<ee;X++){let Z=k[X],oe=E(Z),Y=y%L,ue=Y%oe.boundary,Me=Y+ue;y+=ue,Me!==0&&L-Me<oe.storage&&(y+=L-Me),N.__data=new Float32Array(oe.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=y,y+=oe.storage}}}let C=y%L;return C>0&&(y+=L-C),_.__size=y,_.__cache={},this}function E(_){let v={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(v.boundary=4,v.storage=4):_.isVector2?(v.boundary=8,v.storage=8):_.isVector3||_.isColor?(v.boundary=16,v.storage=12):_.isVector4?(v.boundary=16,v.storage=16):_.isMatrix3?(v.boundary=48,v.storage=48):_.isMatrix4?(v.boundary=64,v.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),v}function m(_){let v=_.target;v.removeEventListener("dispose",m);let y=o.indexOf(v.__bindingPointIndex);o.splice(y,1),n.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function f(){for(let _ in s)n.deleteBuffer(s[_]);o=[],s={},r={}}return{bind:l,update:c,dispose:f}}var ba=class{constructor(e={}){let{canvas:t=tp(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:u=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;let g=new Uint32Array(4),E=new Int32Array(4),m=null,f=null,_=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Nt,this.toneMapping=mi,this.toneMappingExposure=1;let y=this,L=!1,C=0,w=0,F=null,S=-1,A=null,I=new xt,N=new xt,k=null,X=new le(0),ee=0,Z=t.width,oe=t.height,Y=1,ue=null,Me=null,Oe=new xt(0,0,Z,oe),st=new xt(0,0,Z,oe),Ft=!1,J=new ro,ae=!1,Ue=!1,fe=new Ct,Ve=new Ct,Ze=new P,rt=new xt,Ot={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},dt=!1;function Xt(){return F===null?Y:1}let B=i;function Gn(T,U){return t.getContext(T,U)}try{let T={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Sh}`),t.addEventListener("webglcontextlost",K,!1),t.addEventListener("webglcontextrestored",_e,!1),t.addEventListener("webglcontextcreationerror",ge,!1),B===null){let U="webgl2";if(B=Gn(U,T),B===null)throw Gn(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let at,lt,ke,Dt,ze,x,M,G,Q,te,$,He,pe,Se,ut,se,be,Ge,We,we,ct,et,Pt,D;function de(){at=new u2(B),at.init(),et=new Wg(B,at),lt=new o2(B,at,e,et),ke=new kg(B,at),lt.reverseDepthBuffer&&u&&ke.buffers.depth.setReversed(!0),Dt=new m2(B),ze=new xg,x=new Vg(B,at,ke,ze,lt,et,Dt),M=new l2(y),G=new d2(y),Q=new Mp(B),Pt=new s2(B,Q),te=new f2(B,Q,Dt,Pt),$=new E2(B,te,Q,Dt),We=new g2(B,lt,x),se=new a2(ze),He=new Rg(y,M,G,at,lt,Pt,se),pe=new $g(y,ze),Se=new Fg,ut=new Hg(at),Ge=new i2(y,M,G,ke,$,p,l),be=new Og(y,$,lt),D=new Jg(B,Dt,lt,ke),we=new r2(B,at,Dt),ct=new p2(B,at,Dt),Dt.programs=He.programs,y.capabilities=lt,y.extensions=at,y.properties=ze,y.renderLists=Se,y.shadowMap=be,y.state=ke,y.info=Dt}de();let q=new Kc(y,B);this.xr=q,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){let T=at.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=at.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(T){T!==void 0&&(Y=T,this.setSize(Z,oe,!1))},this.getSize=function(T){return T.set(Z,oe)},this.setSize=function(T,U,V=!0){if(q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Z=T,oe=U,t.width=Math.floor(T*Y),t.height=Math.floor(U*Y),V===!0&&(t.style.width=T+"px",t.style.height=U+"px"),this.setViewport(0,0,T,U)},this.getDrawingBufferSize=function(T){return T.set(Z*Y,oe*Y).floor()},this.setDrawingBufferSize=function(T,U,V){Z=T,oe=U,Y=V,t.width=Math.floor(T*V),t.height=Math.floor(U*V),this.setViewport(0,0,T,U)},this.getCurrentViewport=function(T){return T.copy(I)},this.getViewport=function(T){return T.copy(Oe)},this.setViewport=function(T,U,V,W){T.isVector4?Oe.set(T.x,T.y,T.z,T.w):Oe.set(T,U,V,W),ke.viewport(I.copy(Oe).multiplyScalar(Y).round())},this.getScissor=function(T){return T.copy(st)},this.setScissor=function(T,U,V,W){T.isVector4?st.set(T.x,T.y,T.z,T.w):st.set(T,U,V,W),ke.scissor(N.copy(st).multiplyScalar(Y).round())},this.getScissorTest=function(){return Ft},this.setScissorTest=function(T){ke.setScissorTest(Ft=T)},this.setOpaqueSort=function(T){ue=T},this.setTransparentSort=function(T){Me=T},this.getClearColor=function(T){return T.copy(Ge.getClearColor())},this.setClearColor=function(){Ge.setClearColor.apply(Ge,arguments)},this.getClearAlpha=function(){return Ge.getClearAlpha()},this.setClearAlpha=function(){Ge.setClearAlpha.apply(Ge,arguments)},this.clear=function(T=!0,U=!0,V=!0){let W=0;if(T){let H=!1;if(F!==null){let re=F.texture.format;H=re===Ph||re===Fh||re===Ch}if(H){let re=F.texture.type,Ee=re===Li||re===Di||re===so||re===vr||re===wh||re===Rh,Pe=Ge.getClearColor(),Ie=Ge.getClearAlpha(),qe=Pe.r,Je=Pe.g,Le=Pe.b;Ee?(g[0]=qe,g[1]=Je,g[2]=Le,g[3]=Ie,B.clearBufferuiv(B.COLOR,0,g)):(E[0]=qe,E[1]=Je,E[2]=Le,E[3]=Ie,B.clearBufferiv(B.COLOR,0,E))}else W|=B.COLOR_BUFFER_BIT}U&&(W|=B.DEPTH_BUFFER_BIT),V&&(W|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",K,!1),t.removeEventListener("webglcontextrestored",_e,!1),t.removeEventListener("webglcontextcreationerror",ge,!1),Se.dispose(),ut.dispose(),ze.dispose(),M.dispose(),G.dispose(),$.dispose(),Pt.dispose(),D.dispose(),He.dispose(),q.dispose(),q.removeEventListener("sessionstart",gd),q.removeEventListener("sessionend",Ed),Es.stop()};function K(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function _e(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;let T=Dt.autoReset,U=be.enabled,V=be.autoUpdate,W=be.needsUpdate,H=be.type;de(),Dt.autoReset=T,be.enabled=U,be.autoUpdate=V,be.needsUpdate=W,be.type=H}function ge(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function $e(T){let U=T.target;U.removeEventListener("dispose",$e),Vt(U)}function Vt(T){pn(T),ze.remove(T)}function pn(T){let U=ze.get(T).programs;U!==void 0&&(U.forEach(function(V){He.releaseProgram(V)}),T.isShaderMaterial&&He.releaseShaderCache(T))}this.renderBufferDirect=function(T,U,V,W,H,re){U===null&&(U=Ot);let Ee=H.isMesh&&H.matrixWorld.determinant()<0,Pe=uf(T,U,V,W,H);ke.setMaterial(W,Ee);let Ie=V.index,qe=1;if(W.wireframe===!0){if(Ie=te.getWireframeAttribute(V),Ie===void 0)return;qe=2}let Je=V.drawRange,Le=V.attributes.position,gt=Je.start*qe,It=(Je.start+Je.count)*qe;re!==null&&(gt=Math.max(gt,re.start*qe),It=Math.min(It,(re.start+re.count)*qe)),Ie!==null?(gt=Math.max(gt,0),It=Math.min(It,Ie.count)):Le!=null&&(gt=Math.max(gt,0),It=Math.min(It,Le.count));let Ut=It-gt;if(Ut<0||Ut===1/0)return;Pt.setup(H,W,Pe,V,Ie);let wn,_t=we;if(Ie!==null&&(wn=Q.get(Ie),_t=ct,_t.setIndex(wn)),H.isMesh)W.wireframe===!0?(ke.setLineWidth(W.wireframeLinewidth*Xt()),_t.setMode(B.LINES)):_t.setMode(B.TRIANGLES);else if(H.isLine){let Be=W.linewidth;Be===void 0&&(Be=1),ke.setLineWidth(Be*Xt()),H.isLineSegments?_t.setMode(B.LINES):H.isLineLoop?_t.setMode(B.LINE_LOOP):_t.setMode(B.LINE_STRIP)}else H.isPoints?_t.setMode(B.POINTS):H.isSprite&&_t.setMode(B.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)_t.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(at.get("WEBGL_multi_draw"))_t.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{let Be=H._multiDrawStarts,Mi=H._multiDrawCounts,At=H._multiDrawCount,jn=Ie?Q.get(Ie).bytesPerElement:1,Xs=ze.get(W).currentProgram.getUniforms();for(let Bn=0;Bn<At;Bn++)Xs.setValue(B,"_gl_DrawID",Bn),_t.render(Be[Bn]/jn,Mi[Bn])}else if(H.isInstancedMesh)_t.renderInstances(gt,Ut,H.count);else if(V.isInstancedBufferGeometry){let Be=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Mi=Math.min(V.instanceCount,Be);_t.renderInstances(gt,Ut,Mi)}else _t.render(gt,Ut)};function St(T,U,V){T.transparent===!0&&T.side===Et&&T.forceSinglePass===!1?(T.side=sn,T.needsUpdate=!0,Co(T,U,V),T.side=ji,T.needsUpdate=!0,Co(T,U,V),T.side=Et):Co(T,U,V)}this.compile=function(T,U,V=null){V===null&&(V=T),f=ut.get(V),f.init(U),v.push(f),V.traverseVisible(function(H){H.isLight&&H.layers.test(U.layers)&&(f.pushLight(H),H.castShadow&&f.pushShadow(H))}),T!==V&&T.traverseVisible(function(H){H.isLight&&H.layers.test(U.layers)&&(f.pushLight(H),H.castShadow&&f.pushShadow(H))}),f.setupLights();let W=new Set;return T.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;let re=H.material;if(re)if(Array.isArray(re))for(let Ee=0;Ee<re.length;Ee++){let Pe=re[Ee];St(Pe,V,H),W.add(Pe)}else St(re,V,H),W.add(re)}),v.pop(),f=null,W},this.compileAsync=function(T,U,V=null){let W=this.compile(T,U,V);return new Promise(H=>{function re(){if(W.forEach(function(Ee){ze.get(Ee).currentProgram.isReady()&&W.delete(Ee)}),W.size===0){H(T);return}setTimeout(re,10)}at.get("KHR_parallel_shader_compile")!==null?re():setTimeout(re,10)})};let Kn=null;function Ai(T){Kn&&Kn(T)}function gd(){Es.stop()}function Ed(){Es.start()}let Es=new ju;Es.setAnimationLoop(Ai),typeof self<"u"&&Es.setContext(self),this.setAnimationLoop=function(T){Kn=T,q.setAnimationLoop(T),T===null?Es.stop():Es.start()},q.addEventListener("sessionstart",gd),q.addEventListener("sessionend",Ed),this.render=function(T,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(q.cameraAutoUpdate===!0&&q.updateCamera(U),U=q.getCamera()),T.isScene===!0&&T.onBeforeRender(y,T,U,F),f=ut.get(T,v.length),f.init(U),v.push(f),Ve.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),J.setFromProjectionMatrix(Ve),Ue=this.localClippingEnabled,ae=se.init(this.clippingPlanes,Ue),m=Se.get(T,_.length),m.init(),_.push(m),q.enabled===!0&&q.isPresenting===!0){let re=y.xr.getDepthSensingMesh();re!==null&&ml(re,U,-1/0,y.sortObjects)}ml(T,U,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(ue,Me),dt=q.enabled===!1||q.isPresenting===!1||q.hasDepthSensing()===!1,dt&&Ge.addToRenderList(m,T),this.info.render.frame++,ae===!0&&se.beginShadows();let V=f.state.shadowsArray;be.render(V,T,U),ae===!0&&se.endShadows(),this.info.autoReset===!0&&this.info.reset();let W=m.opaque,H=m.transmissive;if(f.setupLights(),U.isArrayCamera){let re=U.cameras;if(H.length>0)for(let Ee=0,Pe=re.length;Ee<Pe;Ee++){let Ie=re[Ee];vd(W,H,T,Ie)}dt&&Ge.render(T);for(let Ee=0,Pe=re.length;Ee<Pe;Ee++){let Ie=re[Ee];yd(m,T,Ie,Ie.viewport)}}else H.length>0&&vd(W,H,T,U),dt&&Ge.render(T),yd(m,T,U);F!==null&&(x.updateMultisampleRenderTarget(F),x.updateRenderTargetMipmap(F)),T.isScene===!0&&T.onAfterRender(y,T,U),Pt.resetDefaultState(),S=-1,A=null,v.pop(),v.length>0?(f=v[v.length-1],ae===!0&&se.setGlobalState(y.clippingPlanes,f.state.camera)):f=null,_.pop(),_.length>0?m=_[_.length-1]:m=null};function ml(T,U,V,W){if(T.visible===!1)return;if(T.layers.test(U.layers)){if(T.isGroup)V=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(U);else if(T.isLight)f.pushLight(T),T.castShadow&&f.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||J.intersectsSprite(T)){W&&rt.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Ve);let Ee=$.update(T),Pe=T.material;Pe.visible&&m.push(T,Ee,Pe,V,rt.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||J.intersectsObject(T))){let Ee=$.update(T),Pe=T.material;if(W&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),rt.copy(T.boundingSphere.center)):(Ee.boundingSphere===null&&Ee.computeBoundingSphere(),rt.copy(Ee.boundingSphere.center)),rt.applyMatrix4(T.matrixWorld).applyMatrix4(Ve)),Array.isArray(Pe)){let Ie=Ee.groups;for(let qe=0,Je=Ie.length;qe<Je;qe++){let Le=Ie[qe],gt=Pe[Le.materialIndex];gt&&gt.visible&&m.push(T,Ee,gt,V,rt.z,Le)}}else Pe.visible&&m.push(T,Ee,Pe,V,rt.z,null)}}let re=T.children;for(let Ee=0,Pe=re.length;Ee<Pe;Ee++)ml(re[Ee],U,V,W)}function yd(T,U,V,W){let H=T.opaque,re=T.transmissive,Ee=T.transparent;f.setupLightsView(V),ae===!0&&se.setGlobalState(y.clippingPlanes,V),W&&ke.viewport(I.copy(W)),H.length>0&&xo(H,U,V),re.length>0&&xo(re,U,V),Ee.length>0&&xo(Ee,U,V),ke.buffers.depth.setTest(!0),ke.buffers.depth.setMask(!0),ke.buffers.color.setMask(!0),ke.setPolygonOffset(!1)}function vd(T,U,V,W){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[W.id]===void 0&&(f.state.transmissionRenderTarget[W.id]=new on(1,1,{generateMipmaps:!0,type:at.has("EXT_color_buffer_half_float")||at.has("EXT_color_buffer_float")?Pn:Li,minFilter:xs,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ft.workingColorSpace}));let re=f.state.transmissionRenderTarget[W.id],Ee=W.viewport||I;re.setSize(Ee.z,Ee.w);let Pe=y.getRenderTarget();y.setRenderTarget(re),y.getClearColor(X),ee=y.getClearAlpha(),ee<1&&y.setClearColor(16777215,.5),y.clear(),dt&&Ge.render(V);let Ie=y.toneMapping;y.toneMapping=mi;let qe=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),f.setupLightsView(W),ae===!0&&se.setGlobalState(y.clippingPlanes,W),xo(T,V,W),x.updateMultisampleRenderTarget(re),x.updateRenderTargetMipmap(re),at.has("WEBGL_multisampled_render_to_texture")===!1){let Je=!1;for(let Le=0,gt=U.length;Le<gt;Le++){let It=U[Le],Ut=It.object,wn=It.geometry,_t=It.material,Be=It.group;if(_t.side===Et&&Ut.layers.test(W.layers)){let Mi=_t.side;_t.side=sn,_t.needsUpdate=!0,_d(Ut,V,W,wn,_t,Be),_t.side=Mi,_t.needsUpdate=!0,Je=!0}}Je===!0&&(x.updateMultisampleRenderTarget(re),x.updateRenderTargetMipmap(re))}y.setRenderTarget(Pe),y.setClearColor(X,ee),qe!==void 0&&(W.viewport=qe),y.toneMapping=Ie}function xo(T,U,V){let W=U.isScene===!0?U.overrideMaterial:null;for(let H=0,re=T.length;H<re;H++){let Ee=T[H],Pe=Ee.object,Ie=Ee.geometry,qe=W===null?Ee.material:W,Je=Ee.group;Pe.layers.test(V.layers)&&_d(Pe,U,V,Ie,qe,Je)}}function _d(T,U,V,W,H,re){T.onBeforeRender(y,U,V,W,H,re),T.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),H.onBeforeRender(y,U,V,W,T,re),H.transparent===!0&&H.side===Et&&H.forceSinglePass===!1?(H.side=sn,H.needsUpdate=!0,y.renderBufferDirect(V,U,W,H,T,re),H.side=ji,H.needsUpdate=!0,y.renderBufferDirect(V,U,W,H,T,re),H.side=Et):y.renderBufferDirect(V,U,W,H,T,re),T.onAfterRender(y,U,V,W,H,re)}function Co(T,U,V){U.isScene!==!0&&(U=Ot);let W=ze.get(T),H=f.state.lights,re=f.state.shadowsArray,Ee=H.state.version,Pe=He.getParameters(T,H.state,re,U,V),Ie=He.getProgramCacheKey(Pe),qe=W.programs;W.environment=T.isMeshStandardMaterial?U.environment:null,W.fog=U.fog,W.envMap=(T.isMeshStandardMaterial?G:M).get(T.envMap||W.environment),W.envMapRotation=W.environment!==null&&T.envMap===null?U.environmentRotation:T.envMapRotation,qe===void 0&&(T.addEventListener("dispose",$e),qe=new Map,W.programs=qe);let Je=qe.get(Ie);if(Je!==void 0){if(W.currentProgram===Je&&W.lightsStateVersion===Ee)return Md(T,Pe),Je}else Pe.uniforms=He.getUniforms(T),T.onBeforeCompile(Pe,y),Je=He.acquireProgram(Pe,Ie),qe.set(Ie,Je),W.uniforms=Pe.uniforms;let Le=W.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Le.clippingPlanes=se.uniform),Md(T,Pe),W.needsLights=pf(T),W.lightsStateVersion=Ee,W.needsLights&&(Le.ambientLightColor.value=H.state.ambient,Le.lightProbe.value=H.state.probe,Le.directionalLights.value=H.state.directional,Le.directionalLightShadows.value=H.state.directionalShadow,Le.spotLights.value=H.state.spot,Le.spotLightShadows.value=H.state.spotShadow,Le.rectAreaLights.value=H.state.rectArea,Le.ltc_1.value=H.state.rectAreaLTC1,Le.ltc_2.value=H.state.rectAreaLTC2,Le.pointLights.value=H.state.point,Le.pointLightShadows.value=H.state.pointShadow,Le.hemisphereLights.value=H.state.hemi,Le.directionalShadowMap.value=H.state.directionalShadowMap,Le.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Le.spotShadowMap.value=H.state.spotShadowMap,Le.spotLightMatrix.value=H.state.spotLightMatrix,Le.spotLightMap.value=H.state.spotLightMap,Le.pointShadowMap.value=H.state.pointShadowMap,Le.pointShadowMatrix.value=H.state.pointShadowMatrix),W.currentProgram=Je,W.uniformsList=null,Je}function Ad(T){if(T.uniformsList===null){let U=T.currentProgram.getUniforms();T.uniformsList=mr.seqWithValue(U.seq,T.uniforms)}return T.uniformsList}function Md(T,U){let V=ze.get(T);V.outputColorSpace=U.outputColorSpace,V.batching=U.batching,V.batchingColor=U.batchingColor,V.instancing=U.instancing,V.instancingColor=U.instancingColor,V.instancingMorph=U.instancingMorph,V.skinning=U.skinning,V.morphTargets=U.morphTargets,V.morphNormals=U.morphNormals,V.morphColors=U.morphColors,V.morphTargetsCount=U.morphTargetsCount,V.numClippingPlanes=U.numClippingPlanes,V.numIntersection=U.numClipIntersection,V.vertexAlphas=U.vertexAlphas,V.vertexTangents=U.vertexTangents,V.toneMapping=U.toneMapping}function uf(T,U,V,W,H){U.isScene!==!0&&(U=Ot),x.resetTextureUnits();let re=U.fog,Ee=W.isMeshStandardMaterial?U.environment:null,Pe=F===null?y.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:ss,Ie=(W.isMeshStandardMaterial?G:M).get(W.envMap||Ee),qe=W.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Je=!!V.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Le=!!V.morphAttributes.position,gt=!!V.morphAttributes.normal,It=!!V.morphAttributes.color,Ut=mi;W.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(Ut=y.toneMapping);let wn=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,_t=wn!==void 0?wn.length:0,Be=ze.get(W),Mi=f.state.lights;if(ae===!0&&(Ue===!0||T!==A)){let Vn=T===A&&W.id===S;se.setState(W,T,Vn)}let At=!1;W.version===Be.__version?(Be.needsLights&&Be.lightsStateVersion!==Mi.state.version||Be.outputColorSpace!==Pe||H.isBatchedMesh&&Be.batching===!1||!H.isBatchedMesh&&Be.batching===!0||H.isBatchedMesh&&Be.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&Be.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&Be.instancing===!1||!H.isInstancedMesh&&Be.instancing===!0||H.isSkinnedMesh&&Be.skinning===!1||!H.isSkinnedMesh&&Be.skinning===!0||H.isInstancedMesh&&Be.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Be.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Be.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Be.instancingMorph===!1&&H.morphTexture!==null||Be.envMap!==Ie||W.fog===!0&&Be.fog!==re||Be.numClippingPlanes!==void 0&&(Be.numClippingPlanes!==se.numPlanes||Be.numIntersection!==se.numIntersection)||Be.vertexAlphas!==qe||Be.vertexTangents!==Je||Be.morphTargets!==Le||Be.morphNormals!==gt||Be.morphColors!==It||Be.toneMapping!==Ut||Be.morphTargetsCount!==_t)&&(At=!0):(At=!0,Be.__version=W.version);let jn=Be.currentProgram;At===!0&&(jn=Co(W,U,H));let Xs=!1,Bn=!1,zr=!1,Ht=jn.getUniforms(),ci=Be.uniforms;if(ke.useProgram(jn.program)&&(Xs=!0,Bn=!0,zr=!0),W.id!==S&&(S=W.id,Bn=!0),Xs||A!==T){ke.buffers.depth.getReversed()?(fe.copy(T.projectionMatrix),ip(fe),sp(fe),Ht.setValue(B,"projectionMatrix",fe)):Ht.setValue(B,"projectionMatrix",T.projectionMatrix),Ht.setValue(B,"viewMatrix",T.matrixWorldInverse);let Gi=Ht.map.cameraPosition;Gi!==void 0&&Gi.setValue(B,Ze.setFromMatrixPosition(T.matrixWorld)),lt.logarithmicDepthBuffer&&Ht.setValue(B,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&Ht.setValue(B,"isOrthographic",T.isOrthographicCamera===!0),A!==T&&(A=T,Bn=!0,zr=!0)}if(H.isSkinnedMesh){Ht.setOptional(B,H,"bindMatrix"),Ht.setOptional(B,H,"bindMatrixInverse");let Vn=H.skeleton;Vn&&(Vn.boneTexture===null&&Vn.computeBoneTexture(),Ht.setValue(B,"boneTexture",Vn.boneTexture,x))}H.isBatchedMesh&&(Ht.setOptional(B,H,"batchingTexture"),Ht.setValue(B,"batchingTexture",H._matricesTexture,x),Ht.setOptional(B,H,"batchingIdTexture"),Ht.setValue(B,"batchingIdTexture",H._indirectTexture,x),Ht.setOptional(B,H,"batchingColorTexture"),H._colorsTexture!==null&&Ht.setValue(B,"batchingColorTexture",H._colorsTexture,x));let kr=V.morphAttributes;if((kr.position!==void 0||kr.normal!==void 0||kr.color!==void 0)&&We.update(H,V,jn),(Bn||Be.receiveShadow!==H.receiveShadow)&&(Be.receiveShadow=H.receiveShadow,Ht.setValue(B,"receiveShadow",H.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(ci.envMap.value=Ie,ci.flipEnvMap.value=Ie.isCubeTexture&&Ie.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&U.environment!==null&&(ci.envMapIntensity.value=U.environmentIntensity),Bn&&(Ht.setValue(B,"toneMappingExposure",y.toneMappingExposure),Be.needsLights&&ff(ci,zr),re&&W.fog===!0&&pe.refreshFogUniforms(ci,re),pe.refreshMaterialUniforms(ci,W,Y,oe,f.state.transmissionRenderTarget[T.id]),mr.upload(B,Ad(Be),ci,x)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(mr.upload(B,Ad(Be),ci,x),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&Ht.setValue(B,"center",H.center),Ht.setValue(B,"modelViewMatrix",H.modelViewMatrix),Ht.setValue(B,"normalMatrix",H.normalMatrix),Ht.setValue(B,"modelMatrix",H.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){let Vn=W.uniformsGroups;for(let Gi=0,Vi=Vn.length;Gi<Vi;Gi++){let Sd=Vn[Gi];D.update(Sd,jn),D.bind(Sd,jn)}}return jn}function ff(T,U){T.ambientLightColor.needsUpdate=U,T.lightProbe.needsUpdate=U,T.directionalLights.needsUpdate=U,T.directionalLightShadows.needsUpdate=U,T.pointLights.needsUpdate=U,T.pointLightShadows.needsUpdate=U,T.spotLights.needsUpdate=U,T.spotLightShadows.needsUpdate=U,T.rectAreaLights.needsUpdate=U,T.hemisphereLights.needsUpdate=U}function pf(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(T,U,V){ze.get(T.texture).__webglTexture=U,ze.get(T.depthTexture).__webglTexture=V;let W=ze.get(T);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=V===void 0,W.__autoAllocateDepthBuffer||at.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,U){let V=ze.get(T);V.__webglFramebuffer=U,V.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(T,U=0,V=0){F=T,C=U,w=V;let W=!0,H=null,re=!1,Ee=!1;if(T){let Ie=ze.get(T);if(Ie.__useDefaultFramebuffer!==void 0)ke.bindFramebuffer(B.FRAMEBUFFER,null),W=!1;else if(Ie.__webglFramebuffer===void 0)x.setupRenderTarget(T);else if(Ie.__hasExternalTextures)x.rebindTextures(T,ze.get(T.texture).__webglTexture,ze.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let Le=T.depthTexture;if(Ie.__boundDepthTexture!==Le){if(Le!==null&&ze.has(Le)&&(T.width!==Le.image.width||T.height!==Le.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");x.setupDepthRenderbuffer(T)}}let qe=T.texture;(qe.isData3DTexture||qe.isDataArrayTexture||qe.isCompressedArrayTexture)&&(Ee=!0);let Je=ze.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Je[U])?H=Je[U][V]:H=Je[U],re=!0):T.samples>0&&x.useMultisampledRTT(T)===!1?H=ze.get(T).__webglMultisampledFramebuffer:Array.isArray(Je)?H=Je[V]:H=Je,I.copy(T.viewport),N.copy(T.scissor),k=T.scissorTest}else I.copy(Oe).multiplyScalar(Y).floor(),N.copy(st).multiplyScalar(Y).floor(),k=Ft;if(ke.bindFramebuffer(B.FRAMEBUFFER,H)&&W&&ke.drawBuffers(T,H),ke.viewport(I),ke.scissor(N),ke.setScissorTest(k),re){let Ie=ze.get(T.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+U,Ie.__webglTexture,V)}else if(Ee){let Ie=ze.get(T.texture),qe=U||0;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ie.__webglTexture,V||0,qe)}S=-1},this.readRenderTargetPixels=function(T,U,V,W,H,re,Ee){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pe=ze.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ee!==void 0&&(Pe=Pe[Ee]),Pe){ke.bindFramebuffer(B.FRAMEBUFFER,Pe);try{let Ie=T.texture,qe=Ie.format,Je=Ie.type;if(!lt.textureFormatReadable(qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!lt.textureTypeReadable(Je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=T.width-W&&V>=0&&V<=T.height-H&&B.readPixels(U,V,W,H,et.convert(qe),et.convert(Je),re)}finally{let Ie=F!==null?ze.get(F).__webglFramebuffer:null;ke.bindFramebuffer(B.FRAMEBUFFER,Ie)}}},this.readRenderTargetPixelsAsync=async function(T,U,V,W,H,re,Ee){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pe=ze.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ee!==void 0&&(Pe=Pe[Ee]),Pe){let Ie=T.texture,qe=Ie.format,Je=Ie.type;if(!lt.textureFormatReadable(qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!lt.textureTypeReadable(Je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=T.width-W&&V>=0&&V<=T.height-H){ke.bindFramebuffer(B.FRAMEBUFFER,Pe);let Le=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,Le),B.bufferData(B.PIXEL_PACK_BUFFER,re.byteLength,B.STREAM_READ),B.readPixels(U,V,W,H,et.convert(qe),et.convert(Je),0);let gt=F!==null?ze.get(F).__webglFramebuffer:null;ke.bindFramebuffer(B.FRAMEBUFFER,gt);let It=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await np(B,It,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,Le),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,re),B.deleteBuffer(Le),B.deleteSync(It),re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,U=null,V=0){T.isTexture!==!0&&(Kr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,T=arguments[1]);let W=Math.pow(2,-V),H=Math.floor(T.image.width*W),re=Math.floor(T.image.height*W),Ee=U!==null?U.x:0,Pe=U!==null?U.y:0;x.setTexture2D(T,0),B.copyTexSubImage2D(B.TEXTURE_2D,V,0,0,Ee,Pe,H,re),ke.unbindTexture()},this.copyTextureToTexture=function(T,U,V=null,W=null,H=0){T.isTexture!==!0&&(Kr("WebGLRenderer: copyTextureToTexture function signature has changed."),W=arguments[0]||null,T=arguments[1],U=arguments[2],H=arguments[3]||0,V=null);let re,Ee,Pe,Ie,qe,Je,Le,gt,It,Ut=T.isCompressedTexture?T.mipmaps[H]:T.image;V!==null?(re=V.max.x-V.min.x,Ee=V.max.y-V.min.y,Pe=V.isBox3?V.max.z-V.min.z:1,Ie=V.min.x,qe=V.min.y,Je=V.isBox3?V.min.z:0):(re=Ut.width,Ee=Ut.height,Pe=Ut.depth||1,Ie=0,qe=0,Je=0),W!==null?(Le=W.x,gt=W.y,It=W.z):(Le=0,gt=0,It=0);let wn=et.convert(U.format),_t=et.convert(U.type),Be;U.isData3DTexture?(x.setTexture3D(U,0),Be=B.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(x.setTexture2DArray(U,0),Be=B.TEXTURE_2D_ARRAY):(x.setTexture2D(U,0),Be=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,U.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,U.unpackAlignment);let Mi=B.getParameter(B.UNPACK_ROW_LENGTH),At=B.getParameter(B.UNPACK_IMAGE_HEIGHT),jn=B.getParameter(B.UNPACK_SKIP_PIXELS),Xs=B.getParameter(B.UNPACK_SKIP_ROWS),Bn=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,Ut.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Ut.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Ie),B.pixelStorei(B.UNPACK_SKIP_ROWS,qe),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Je);let zr=T.isDataArrayTexture||T.isData3DTexture,Ht=U.isDataArrayTexture||U.isData3DTexture;if(T.isRenderTargetTexture||T.isDepthTexture){let ci=ze.get(T),kr=ze.get(U),Vn=ze.get(ci.__renderTarget),Gi=ze.get(kr.__renderTarget);ke.bindFramebuffer(B.READ_FRAMEBUFFER,Vn.__webglFramebuffer),ke.bindFramebuffer(B.DRAW_FRAMEBUFFER,Gi.__webglFramebuffer);for(let Vi=0;Vi<Pe;Vi++)zr&&B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,ze.get(T).__webglTexture,H,Je+Vi),T.isDepthTexture?(Ht&&B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,ze.get(U).__webglTexture,H,It+Vi),B.blitFramebuffer(Ie,qe,re,Ee,Le,gt,re,Ee,B.DEPTH_BUFFER_BIT,B.NEAREST)):Ht?B.copyTexSubImage3D(Be,H,Le,gt,It+Vi,Ie,qe,re,Ee):B.copyTexSubImage2D(Be,H,Le,gt,It+Vi,Ie,qe,re,Ee);ke.bindFramebuffer(B.READ_FRAMEBUFFER,null),ke.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else Ht?T.isDataTexture||T.isData3DTexture?B.texSubImage3D(Be,H,Le,gt,It,re,Ee,Pe,wn,_t,Ut.data):U.isCompressedArrayTexture?B.compressedTexSubImage3D(Be,H,Le,gt,It,re,Ee,Pe,wn,Ut.data):B.texSubImage3D(Be,H,Le,gt,It,re,Ee,Pe,wn,_t,Ut):T.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,H,Le,gt,re,Ee,wn,_t,Ut.data):T.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,H,Le,gt,Ut.width,Ut.height,wn,Ut.data):B.texSubImage2D(B.TEXTURE_2D,H,Le,gt,re,Ee,wn,_t,Ut);B.pixelStorei(B.UNPACK_ROW_LENGTH,Mi),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,At),B.pixelStorei(B.UNPACK_SKIP_PIXELS,jn),B.pixelStorei(B.UNPACK_SKIP_ROWS,Xs),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Bn),H===0&&U.generateMipmaps&&B.generateMipmap(Be),ke.unbindTexture()},this.copyTextureToTexture3D=function(T,U,V=null,W=null,H=0){return T.isTexture!==!0&&(Kr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),V=arguments[0]||null,W=arguments[1]||null,T=arguments[2],U=arguments[3],H=arguments[4]||0),Kr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,U,V,W,H)},this.initRenderTarget=function(T){ze.get(T).__webglFramebuffer===void 0&&x.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?x.setTextureCube(T,0):T.isData3DTexture?x.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?x.setTexture2DArray(T,0):x.setTexture2D(T,0),ke.unbindTexture()},this.resetState=function(){C=0,w=0,F=null,ke.reset(),Pt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Fi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=ft._getDrawingBufferColorSpace(e),t.unpackColorSpace=ft._getUnpackColorSpace()}},xe=class n{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new le(e),this.density=t}clone(){return new n(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var wa=class extends qt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new gi,this.environmentIntensity=1,this.environmentRotation=new gi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},jc=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Bc,this.updateRanges=[],this.version=0,this.uuid=Pi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Pi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Pi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},An=new P,Ra=class n{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)An.fromBufferAttribute(this,t),An.applyMatrix4(e),this.setXYZ(t,An.x,An.y,An.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)An.fromBufferAttribute(this,t),An.applyNormalMatrix(e),this.setXYZ(t,An.x,An.y,An.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)An.fromBufferAttribute(this,t),An.transformDirection(e),this.setXYZ(t,An.x,An.y,An.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=di(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Rt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=Rt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Rt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Rt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Rt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=di(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=di(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=di(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=di(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Rt(t,this.array),i=Rt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Rt(t,this.array),i=Rt(i,this.array),s=Rt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Rt(t,this.array),i=Rt(i,this.array),s=Rt(s,this.array),r=Rt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Kt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Tr=class extends Hi{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new le(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},or,qr=new P,ar=new P,lr=new P,cr=new ie,Yr=new ie,s0=new Ct,Qo=new P,Zr=new P,Ko=new P,Mu=new ie,ql=new ie,Su=new ie,oo=class extends qt{constructor(e=new Tr){if(super(),this.isSprite=!0,this.type="Sprite",or===void 0){or=new Wt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new jc(t,5);or.setIndex([0,1,2,0,2,3]),or.setAttribute("position",new Ra(i,3,0,!1)),or.setAttribute("uv",new Ra(i,2,3,!1))}this.geometry=or,this.material=e,this.center=new ie(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ar.setFromMatrixScale(this.matrixWorld),s0.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),lr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ar.multiplyScalar(-lr.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let o=this.center;jo(Qo.set(-.5,-.5,0),lr,o,ar,s,r),jo(Zr.set(.5,-.5,0),lr,o,ar,s,r),jo(Ko.set(.5,.5,0),lr,o,ar,s,r),Mu.set(0,0),ql.set(1,0),Su.set(1,1);let a=e.ray.intersectTriangle(Qo,Zr,Ko,!1,qr);if(a===null&&(jo(Zr.set(-.5,.5,0),lr,o,ar,s,r),ql.set(0,1),a=e.ray.intersectTriangle(Qo,Ko,Zr,!1,qr),a===null))return;let l=e.ray.origin.distanceTo(qr);l<e.near||l>e.far||t.push({distance:l,point:qr.clone(),uv:Qi.getInterpolation(qr,Qo,Zr,Ko,Mu,ql,Su,new ie),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function jo(n,e,t,i,s,r){cr.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(Yr.x=r*cr.x-s*cr.y,Yr.y=s*cr.x+r*cr.y):Yr.copy(cr),n.copy(e),n.x+=Yr.x,n.y+=Yr.y,n.applyMatrix4(s0)}var eh=class extends xn{constructor(e=null,t=1,i=1,s,r,o,a,l,c=zn,h=zn,d,u){super(null,o,a,l,c,h,s,r,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var xa=class extends Kt{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},hr=new Ct,Tu=new Ct,ea=[],bu=new Ui,Qg=new Ct,$r=new O,Jr=new ns,Ca=class extends O{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new xa(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,Qg)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ui),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,hr),bu.copy(e.boundingBox).applyMatrix4(hr),this.boundingBox.union(bu)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ns),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,hr),Jr.copy(e.boundingSphere).applyMatrix4(hr),this.boundingSphere.union(Jr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,t){let i=this.matrixWorld,s=this.count;if($r.geometry=this.geometry,$r.material=this.material,$r.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Jr.copy(this.boundingSphere),Jr.applyMatrix4(i),e.ray.intersectsSphere(Jr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,hr),Tu.multiplyMatrices(i,hr),$r.matrixWorld=Tu,$r.raycast(e,ea);for(let o=0,a=ea.length;o<a;o++){let l=ea[o];l.instanceId=r,l.object=this,t.push(l)}ea.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new xa(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new eh(new Float32Array(s*this.count),s,this.count,xh,fi));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<i.length;c++)o+=i[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;r[l]=a,r.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var br=class extends Hi{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new le(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},wu=new Ct,th=new ya,ta=new ns,na=new P,ao=class extends qt{constructor(e=new Wt,t=new br){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ta.copy(i.boundingSphere),ta.applyMatrix4(s),ta.radius+=r,e.ray.intersectsSphere(ta)===!1)return;wu.copy(s).invert(),th.copy(e.ray).applyMatrix4(wu);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,d=i.attributes.position;if(c!==null){let u=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let g=u,E=p;g<E;g++){let m=c.getX(g);na.fromBufferAttribute(d,m),Ru(na,m,l,s,e,t,this)}}else{let u=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let g=u,E=p;g<E;g++)na.fromBufferAttribute(d,g),Ru(na,g,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Ru(n,e,t,i,s,r,o){let a=th.distanceSqToPoint(n);if(a<t){let l=new P;th.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var Xn=class extends xn{constructor(e,t,i,s,r,o,a,l,c){super(e,t,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},qn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let i=this.getLengths(),s=0,r=i.length,o;t?o=t:o=e*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);let h=i[s],u=i[s+1]-h,p=(o-h)/u;return(s+p)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new ie:new P);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){let i=new P,s=[],r=[],o=[],a=new P,l=new Ct;for(let p=0;p<=e;p++){let g=p/e;s[p]=this.getTangentAt(g,new P)}r[0]=new P,o[0]=new P;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),u<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(s[p-1],s[p]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(En(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(a,g))}o[p].crossVectors(s[p],r[p])}if(t===!0){let p=Math.acos(En(r[0].dot(r[e]),-1,1));p/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(p=-p);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],p*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},lo=class extends qn{constructor(e=0,t=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new ie){let i=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,p=c-this.aY;l=u*h-p*d+this.aX,c=u*d+p*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},nh=class extends lo{constructor(e,t,i,s,r,o){super(e,t,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Lh(){let n=0,e=0,t=0,i=0;function s(r,o,a,l){n=r,e=a,t=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,d){let u=(o-r)/c-(a-r)/(c+h)+(a-o)/h,p=(a-o)/h-(l-o)/(h+d)+(l-a)/d;u*=h,p*=h,s(o,a,u,p)},calc:function(r){let o=r*r,a=o*r;return n+e*r+t*o+i*a}}}var ia=new P,Yl=new Lh,Zl=new Lh,$l=new Lh,Cs=class extends qn{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new P){let i=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(ia.subVectors(s[0],s[1]).add(s[0]),c=ia);let d=s[a%r],u=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(ia.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=ia),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(d),p),E=Math.pow(d.distanceToSquared(u),p),m=Math.pow(u.distanceToSquared(h),p);E<1e-4&&(E=1),g<1e-4&&(g=E),m<1e-4&&(m=E),Yl.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,g,E,m),Zl.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,g,E,m),$l.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,g,E,m)}else this.curveType==="catmullrom"&&(Yl.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),Zl.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),$l.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return i.set(Yl.calc(l),Zl.calc(l),$l.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new P().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function xu(n,e,t,i,s){let r=(i-e)*.5,o=(s-t)*.5,a=n*n,l=n*a;return(2*t-2*i+r+o)*l+(-3*t+3*i-2*r-o)*a+r*n+t}function Kg(n,e){let t=1-n;return t*t*e}function jg(n,e){return 2*(1-n)*n*e}function eE(n,e){return n*n*e}function to(n,e,t,i){return Kg(n,e)+jg(n,t)+eE(n,i)}function tE(n,e){let t=1-n;return t*t*t*e}function nE(n,e){let t=1-n;return 3*t*t*n*e}function iE(n,e){return 3*(1-n)*n*n*e}function sE(n,e){return n*n*n*e}function no(n,e,t,i,s){return tE(n,e)+nE(n,t)+iE(n,i)+sE(n,s)}var Fa=class extends qn{constructor(e=new ie,t=new ie,i=new ie,s=new ie){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new ie){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(no(e,s.x,r.x,o.x,a.x),no(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ih=class extends qn{constructor(e=new P,t=new P,i=new P,s=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new P){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(no(e,s.x,r.x,o.x,a.x),no(e,s.y,r.y,o.y,a.y),no(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Pa=class extends qn{constructor(e=new ie,t=new ie){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ie){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ie){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},sh=class extends qn{constructor(e=new P,t=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new P){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new P){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ia=class extends qn{constructor(e=new ie,t=new ie,i=new ie){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new ie){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(to(e,s.x,r.x,o.x),to(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},La=class extends qn{constructor(e=new P,t=new P,i=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new P){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(to(e,s.x,r.x,o.x),to(e,s.y,r.y,o.y),to(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Da=class extends qn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ie){let i=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return i.set(xu(a,l.x,c.x,h.x,d.x),xu(a,l.y,c.y,h.y,d.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new ie().fromArray(s))}return this}},rh=Object.freeze({__proto__:null,ArcCurve:nh,CatmullRomCurve3:Cs,CubicBezierCurve:Fa,CubicBezierCurve3:ih,EllipseCurve:lo,LineCurve:Pa,LineCurve3:sh,QuadraticBezierCurve:Ia,QuadraticBezierCurve3:La,SplineCurve:Da}),oh=class extends qn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new rh[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(new rh[s.type]().fromJSON(s))}return this}},Ua=class extends oh{constructor(e){super(),this.type="Path",this.currentPoint=new ie,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new Pa(this.currentPoint.clone(),new ie(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){let r=new Ia(this.currentPoint.clone(),new ie(e,t),new ie(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,o){let a=new Fa(this.currentPoint.clone(),new ie(e,t),new ie(i,s),new ie(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new Da(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,i,s,r,o),this}absarc(e,t,i,s,r,o){return this.absellipse(e,t,i,i,s,r,o),this}ellipse(e,t,i,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,i,s,r,o,a,l),this}absellipse(e,t,i,s,r,o,a,l){let c=new lo(e,t,i,s,r,o,a,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}};var ln=class n extends Wt{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new P,h=new ie;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=t;d++,u+=3){let p=i+d/t*s;c.x=e*Math.cos(p),c.y=e*Math.sin(p),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[u]/e+1)/2,h.y=(o[u+1]/e+1)/2,l.push(h.x,h.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new pt(o,3)),this.setAttribute("normal",new pt(a,3)),this.setAttribute("uv",new pt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Ke=class n extends Wt{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],u=[],p=[],g=0,E=[],m=i/2,f=0;_(),o===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new pt(d,3)),this.setAttribute("normal",new pt(u,3)),this.setAttribute("uv",new pt(p,2));function _(){let y=new P,L=new P,C=0,w=(t-e)/i;for(let F=0;F<=r;F++){let S=[],A=F/r,I=A*(t-e)+e;for(let N=0;N<=s;N++){let k=N/s,X=k*l+a,ee=Math.sin(X),Z=Math.cos(X);L.x=I*ee,L.y=-A*i+m,L.z=I*Z,d.push(L.x,L.y,L.z),y.set(ee,w,Z).normalize(),u.push(y.x,y.y,y.z),p.push(k,1-A),S.push(g++)}E.push(S)}for(let F=0;F<s;F++)for(let S=0;S<r;S++){let A=E[S][F],I=E[S+1][F],N=E[S+1][F+1],k=E[S][F+1];(e>0||S!==0)&&(h.push(A,I,k),C+=3),(t>0||S!==r-1)&&(h.push(I,N,k),C+=3)}c.addGroup(f,C,0),f+=C}function v(y){let L=g,C=new ie,w=new P,F=0,S=y===!0?e:t,A=y===!0?1:-1;for(let N=1;N<=s;N++)d.push(0,m*A,0),u.push(0,A,0),p.push(.5,.5),g++;let I=g;for(let N=0;N<=s;N++){let X=N/s*l+a,ee=Math.cos(X),Z=Math.sin(X);w.x=S*Z,w.y=m*A,w.z=S*ee,d.push(w.x,w.y,w.z),u.push(0,A,0),C.x=ee*.5+.5,C.y=Z*.5*A+.5,p.push(C.x,C.y),g++}for(let N=0;N<s;N++){let k=L+N,X=I+N;y===!0?h.push(X,X+1,k):h.push(X+1,X,k),F+=3}c.addGroup(f,F,y===!0?1:2),f+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},un=class n extends Ke{constructor(e=1,t=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},ah=class n extends Wt{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};let r=[],o=[];a(s),c(i),h(),this.setAttribute("position",new pt(r,3)),this.setAttribute("normal",new pt(r.slice(),3)),this.setAttribute("uv",new pt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(_){let v=new P,y=new P,L=new P;for(let C=0;C<t.length;C+=3)p(t[C+0],v),p(t[C+1],y),p(t[C+2],L),l(v,y,L,_)}function l(_,v,y,L){let C=L+1,w=[];for(let F=0;F<=C;F++){w[F]=[];let S=_.clone().lerp(y,F/C),A=v.clone().lerp(y,F/C),I=C-F;for(let N=0;N<=I;N++)N===0&&F===C?w[F][N]=S:w[F][N]=S.clone().lerp(A,N/I)}for(let F=0;F<C;F++)for(let S=0;S<2*(C-F)-1;S++){let A=Math.floor(S/2);S%2===0?(u(w[F][A+1]),u(w[F+1][A]),u(w[F][A])):(u(w[F][A+1]),u(w[F+1][A+1]),u(w[F+1][A]))}}function c(_){let v=new P;for(let y=0;y<r.length;y+=3)v.x=r[y+0],v.y=r[y+1],v.z=r[y+2],v.normalize().multiplyScalar(_),r[y+0]=v.x,r[y+1]=v.y,r[y+2]=v.z}function h(){let _=new P;for(let v=0;v<r.length;v+=3){_.x=r[v+0],_.y=r[v+1],_.z=r[v+2];let y=m(_)/2/Math.PI+.5,L=f(_)/Math.PI+.5;o.push(y,1-L)}g(),d()}function d(){for(let _=0;_<o.length;_+=6){let v=o[_+0],y=o[_+2],L=o[_+4],C=Math.max(v,y,L),w=Math.min(v,y,L);C>.9&&w<.1&&(v<.2&&(o[_+0]+=1),y<.2&&(o[_+2]+=1),L<.2&&(o[_+4]+=1))}}function u(_){r.push(_.x,_.y,_.z)}function p(_,v){let y=_*3;v.x=e[y+0],v.y=e[y+1],v.z=e[y+2]}function g(){let _=new P,v=new P,y=new P,L=new P,C=new ie,w=new ie,F=new ie;for(let S=0,A=0;S<r.length;S+=9,A+=6){_.set(r[S+0],r[S+1],r[S+2]),v.set(r[S+3],r[S+4],r[S+5]),y.set(r[S+6],r[S+7],r[S+8]),C.set(o[A+0],o[A+1]),w.set(o[A+2],o[A+3]),F.set(o[A+4],o[A+5]),L.copy(_).add(v).add(y).divideScalar(3);let I=m(L);E(C,A+0,_,I),E(w,A+2,v,I),E(F,A+4,y,I)}}function E(_,v,y,L){L<0&&_.x===1&&(o[v]=_.x-1),y.x===0&&y.z===0&&(o[v]=L/2/Math.PI+.5)}function m(_){return Math.atan2(_.z,-_.x)}function f(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.details)}},Bi=class n extends ah{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,s=1/i,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-i,0,-s,i,0,s,-i,0,s,i,-s,-i,0,-s,i,0,s,-i,0,s,i,0,-i,0,-s,i,0,-s,-i,0,s,i,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}};var co=class extends Ua{constructor(e){super(e),this.uuid=Pi(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(new Ua().fromJSON(s))}return this}},rE={triangulate:function(n,e,t=2){let i=e&&e.length,s=i?e[0]*t:n.length,r=r0(n,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c,h,d,u,p;if(i&&(r=hE(n,e,r,t)),n.length>80*t){a=c=n[0],l=h=n[1];for(let g=t;g<s;g+=t)d=n[g],u=n[g+1],d<a&&(a=d),u<l&&(l=u),d>c&&(c=d),u>h&&(h=u);p=Math.max(c-a,h-l),p=p!==0?32767/p:0}return ho(r,o,t,a,l,p,0),o}};function r0(n,e,t,i,s){let r,o;if(s===AE(n,e,t,i)>0)for(r=e;r<t;r+=i)o=Cu(r,n[r],n[r+1],o);else for(r=t-i;r>=e;r-=i)o=Cu(r,n[r],n[r+1],o);return o&&Ga(o,o.next)&&(fo(o),o=o.next),o}function Fs(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(Ga(t,t.next)||zt(t.prev,t,t.next)===0)){if(fo(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function ho(n,e,t,i,s,r,o){if(!n)return;!o&&r&&mE(n,i,s,r);let a=n,l,c;for(;n.prev!==n.next;){if(l=n.prev,c=n.next,r?aE(n,i,s,r):oE(n)){e.push(l.i/t|0),e.push(n.i/t|0),e.push(c.i/t|0),fo(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=lE(Fs(n),e,t),ho(n,e,t,i,s,r,2)):o===2&&cE(n,e,t,i,s,r):ho(Fs(n),e,t,i,s,r,1);break}}}function oE(n){let e=n.prev,t=n,i=n.next;if(zt(e,t,i)>=0)return!1;let s=e.x,r=t.x,o=i.x,a=e.y,l=t.y,c=i.y,h=s<r?s<o?s:o:r<o?r:o,d=a<l?a<c?a:c:l<c?l:c,u=s>r?s>o?s:o:r>o?r:o,p=a>l?a>c?a:c:l>c?l:c,g=i.next;for(;g!==e;){if(g.x>=h&&g.x<=u&&g.y>=d&&g.y<=p&&ur(s,a,r,l,o,c,g.x,g.y)&&zt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function aE(n,e,t,i){let s=n.prev,r=n,o=n.next;if(zt(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,d=r.y,u=o.y,p=a<l?a<c?a:c:l<c?l:c,g=h<d?h<u?h:u:d<u?d:u,E=a>l?a>c?a:c:l>c?l:c,m=h>d?h>u?h:u:d>u?d:u,f=lh(p,g,e,t,i),_=lh(E,m,e,t,i),v=n.prevZ,y=n.nextZ;for(;v&&v.z>=f&&y&&y.z<=_;){if(v.x>=p&&v.x<=E&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&ur(a,h,l,d,c,u,v.x,v.y)&&zt(v.prev,v,v.next)>=0||(v=v.prevZ,y.x>=p&&y.x<=E&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&ur(a,h,l,d,c,u,y.x,y.y)&&zt(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;v&&v.z>=f;){if(v.x>=p&&v.x<=E&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&ur(a,h,l,d,c,u,v.x,v.y)&&zt(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;y&&y.z<=_;){if(y.x>=p&&y.x<=E&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&ur(a,h,l,d,c,u,y.x,y.y)&&zt(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function lE(n,e,t){let i=n;do{let s=i.prev,r=i.next.next;!Ga(s,r)&&o0(s,i,i.next,r)&&uo(s,r)&&uo(r,s)&&(e.push(s.i/t|0),e.push(i.i/t|0),e.push(r.i/t|0),fo(i),fo(i.next),i=n=r),i=i.next}while(i!==n);return Fs(i)}function cE(n,e,t,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&yE(o,a)){let l=a0(o,a);o=Fs(o,o.next),l=Fs(l,l.next),ho(o,e,t,i,s,r,0),ho(l,e,t,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function hE(n,e,t,i){let s=[],r,o,a,l,c;for(r=0,o=e.length;r<o;r++)a=e[r]*i,l=r<o-1?e[r+1]*i:n.length,c=r0(n,a,l,i,!1),c===c.next&&(c.steiner=!0),s.push(EE(c));for(s.sort(dE),r=0;r<s.length;r++)t=uE(s[r],t);return t}function dE(n,e){return n.x-e.x}function uE(n,e){let t=fE(n,e);if(!t)return e;let i=a0(t,n);return Fs(i,i.next),Fs(t,t.next)}function fE(n,e){let t=e,i=-1/0,s,r=n.x,o=n.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){let u=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=r&&u>i&&(i=u,s=t.x<t.next.x?t:t.next,u===r))return s}t=t.next}while(t!==e);if(!s)return null;let a=s,l=s.x,c=s.y,h=1/0,d;t=s;do r>=t.x&&t.x>=l&&r!==t.x&&ur(o<c?r:i,o,l,c,o<c?i:r,o,t.x,t.y)&&(d=Math.abs(o-t.y)/(r-t.x),uo(t,n)&&(d<h||d===h&&(t.x>s.x||t.x===s.x&&pE(s,t)))&&(s=t,h=d)),t=t.next;while(t!==a);return s}function pE(n,e){return zt(n.prev,n,e.prev)<0&&zt(e.next,n,n.next)<0}function mE(n,e,t,i){let s=n;do s.z===0&&(s.z=lh(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,gE(s)}function gE(n){let e,t,i,s,r,o,a,l,c=1;do{for(t=n,n=null,r=null,o=0;t;){for(o++,i=t,a=0,e=0;e<c&&(a++,i=i.nextZ,!!i);e++);for(l=c;a>0||l>0&&i;)a!==0&&(l===0||!i||t.z<=i.z)?(s=t,t=t.nextZ,a--):(s=i,i=i.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;t=i}r.nextZ=null,c*=2}while(o>1);return n}function lh(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function EE(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function ur(n,e,t,i,s,r,o,a){return(s-o)*(e-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(i-a)}function yE(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!vE(n,e)&&(uo(n,e)&&uo(e,n)&&_E(n,e)&&(zt(n.prev,n,e.prev)||zt(n,e.prev,e))||Ga(n,e)&&zt(n.prev,n,n.next)>0&&zt(e.prev,e,e.next)>0)}function zt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function Ga(n,e){return n.x===e.x&&n.y===e.y}function o0(n,e,t,i){let s=ra(zt(n,e,t)),r=ra(zt(n,e,i)),o=ra(zt(t,i,n)),a=ra(zt(t,i,e));return!!(s!==r&&o!==a||s===0&&sa(n,t,e)||r===0&&sa(n,i,e)||o===0&&sa(t,n,i)||a===0&&sa(t,e,i))}function sa(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function ra(n){return n>0?1:n<0?-1:0}function vE(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&o0(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function uo(n,e){return zt(n.prev,n,n.next)<0?zt(n,e,n.next)>=0&&zt(n,n.prev,e)>=0:zt(n,e,n.prev)<0||zt(n,n.next,e)<0}function _E(n,e){let t=n,i=!1,s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function a0(n,e){let t=new ch(n.i,n.x,n.y),i=new ch(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function Cu(n,e,t,i){let s=new ch(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function fo(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function ch(n,e,t){this.i=n,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function AE(n,e,t,i){let s=0;for(let r=e,o=t-i;r<t;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}var io=class n{static area(e){let t=e.length,i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return n.area(e)<0}static triangulateShape(e,t){let i=[],s=[],r=[];Fu(e),Pu(i,e);let o=e.length;t.forEach(Fu);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,Pu(i,t[l]);let a=rE.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function Fu(n){let e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function Pu(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}var Ha=class n extends Wt{constructor(e=new co([new ie(0,.5),new ie(-.5,-.5),new ie(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let i=[],s=[],r=[],o=[],a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(i),this.setAttribute("position",new pt(s,3)),this.setAttribute("normal",new pt(r,3)),this.setAttribute("uv",new pt(o,2));function c(h){let d=s.length/3,u=h.extractPoints(t),p=u.shape,g=u.holes;io.isClockWise(p)===!1&&(p=p.reverse());for(let m=0,f=g.length;m<f;m++){let _=g[m];io.isClockWise(_)===!0&&(g[m]=_.reverse())}let E=io.triangulateShape(p,g);for(let m=0,f=g.length;m<f;m++){let _=g[m];p=p.concat(_)}for(let m=0,f=p.length;m<f;m++){let _=p[m];s.push(_.x,_.y,0),r.push(0,0,1),o.push(_.x,_.y)}for(let m=0,f=E.length;m<f;m++){let _=E[m],v=_[0]+d,y=_[1]+d,L=_[2]+d;i.push(v,y,L),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return ME(t,e)}static fromJSON(e,t){let i=[];for(let s=0,r=e.shapes.length;s<r;s++){let o=t[e.shapes[s]];i.push(o)}return new n(i,e.curveSegments)}};function ME(n,e){if(e.shapes=[],Array.isArray(n))for(let t=0,i=n.length;t<i;t++){let s=n[t];e.shapes.push(s.uuid)}else e.shapes.push(n.uuid);return e}var Mt=class n extends Wt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,h=[],d=new P,u=new P,p=[],g=[],E=[],m=[];for(let f=0;f<=i;f++){let _=[],v=f/i,y=0;f===0&&o===0?y=.5/t:f===i&&l===Math.PI&&(y=-.5/t);for(let L=0;L<=t;L++){let C=L/t;d.x=-e*Math.cos(s+C*r)*Math.sin(o+v*a),d.y=e*Math.cos(o+v*a),d.z=e*Math.sin(s+C*r)*Math.sin(o+v*a),g.push(d.x,d.y,d.z),u.copy(d).normalize(),E.push(u.x,u.y,u.z),m.push(C+y,1-v),_.push(c++)}h.push(_)}for(let f=0;f<i;f++)for(let _=0;_<t;_++){let v=h[f][_+1],y=h[f][_],L=h[f+1][_],C=h[f+1][_+1];(f!==0||o>0)&&p.push(v,y,C),(f!==i-1||l<Math.PI)&&p.push(y,L,C)}this.setIndex(p),this.setAttribute("position",new pt(g,3)),this.setAttribute("normal",new pt(E,3)),this.setAttribute("uv",new pt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var cn=class n extends Wt{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);let o=[],a=[],l=[],c=[],h=new P,d=new P,u=new P;for(let p=0;p<=i;p++)for(let g=0;g<=s;g++){let E=g/s*r,m=p/i*Math.PI*2;d.x=(e+t*Math.cos(m))*Math.cos(E),d.y=(e+t*Math.cos(m))*Math.sin(E),d.z=t*Math.sin(m),a.push(d.x,d.y,d.z),h.x=e*Math.cos(E),h.y=e*Math.sin(E),u.subVectors(d,h).normalize(),l.push(u.x,u.y,u.z),c.push(g/s),c.push(p/i)}for(let p=1;p<=i;p++)for(let g=1;g<=s;g++){let E=(s+1)*p+g-1,m=(s+1)*(p-1)+g-1,f=(s+1)*(p-1)+g,_=(s+1)*p+g;o.push(E,m,_),o.push(m,f,_)}this.setIndex(o),this.setAttribute("position",new pt(a,3)),this.setAttribute("normal",new pt(l,3)),this.setAttribute("uv",new pt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var wr=class n extends Wt{constructor(e=new La(new P(-1,-1,0),new P(-1,1,0),new P(1,1,0)),t=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:s,closed:r};let o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new P,l=new P,c=new ie,h=new P,d=[],u=[],p=[],g=[];E(),this.setIndex(g),this.setAttribute("position",new pt(d,3)),this.setAttribute("normal",new pt(u,3)),this.setAttribute("uv",new pt(p,2));function E(){for(let v=0;v<t;v++)m(v);m(r===!1?t:0),_(),f()}function m(v){h=e.getPointAt(v/t,h);let y=o.normals[v],L=o.binormals[v];for(let C=0;C<=s;C++){let w=C/s*Math.PI*2,F=Math.sin(w),S=-Math.cos(w);l.x=S*y.x+F*L.x,l.y=S*y.y+F*L.y,l.z=S*y.z+F*L.z,l.normalize(),u.push(l.x,l.y,l.z),a.x=h.x+i*l.x,a.y=h.y+i*l.y,a.z=h.z+i*l.z,d.push(a.x,a.y,a.z)}}function f(){for(let v=1;v<=t;v++)for(let y=1;y<=s;y++){let L=(s+1)*(v-1)+(y-1),C=(s+1)*v+(y-1),w=(s+1)*v+y,F=(s+1)*(v-1)+y;g.push(L,C,F),g.push(C,w,F)}}function _(){for(let v=0;v<=t;v++)for(let y=0;y<=s;y++)c.x=v/t,c.y=y/s,p.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new n(new rh[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};var Ce=class extends Hi{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new le(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Zu,this.normalScale=new ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function oa(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function SE(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var Rr=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},hh=class extends Rr{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Rd,endingEnd:Rd}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case xd:r=e,a=2*t-i;break;case Cd:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case xd:o=e,l=2*i-t;break;case Cd:o=1,l=i+s[1]-s[0];break;default:o=e-1,l=t}let c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,p=this._weightNext,g=(i-t)/(s-t),E=g*g,m=E*g,f=-u*m+2*u*E-u*g,_=(1+u)*m+(-1.5-2*u)*E+(-.5+u)*g+1,v=(-1-p)*m+(1.5+p)*E+.5*g,y=p*m-p*E;for(let L=0;L!==a;++L)r[L]=f*o[h+L]+_*o[c+L]+v*o[l+L]+y*o[d+L];return r}},dh=class extends Rr{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(i-t)/(s-t),d=1-h;for(let u=0;u!==a;++u)r[u]=o[c+u]*d+o[l+u]*h;return r}},uh=class extends Rr{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},si=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=oa(t,this.TimeBufferType),this.values=oa(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:oa(e.times,Array),values:oa(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new uh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new dh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new hh(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ua:t=this.InterpolantFactoryMethodDiscrete;break;case Hc:t=this.InterpolantFactoryMethodLinear;break;case El:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ua;case this.InterpolantFactoryMethodLinear:return Hc;case this.InterpolantFactoryMethodSmooth:return El}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&SE(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===El,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(s)l=!0;else{let d=a*i,u=d-i,p=d+i;for(let g=0;g!==i;++g){let E=t[d+g];if(E!==t[u+g]||E!==t[p+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let d=a*i,u=o*i;for(let p=0;p!==i;++p)t[u+p]=t[d+p]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};si.prototype.TimeBufferType=Float32Array;si.prototype.ValueBufferType=Float32Array;si.prototype.DefaultInterpolation=Hc;var Ps=class extends si{constructor(e,t,i){super(e,t,i)}};Ps.prototype.ValueTypeName="bool";Ps.prototype.ValueBufferType=Array;Ps.prototype.DefaultInterpolation=ua;Ps.prototype.InterpolantFactoryMethodLinear=void 0;Ps.prototype.InterpolantFactoryMethodSmooth=void 0;var fh=class extends si{};fh.prototype.ValueTypeName="color";var ph=class extends si{};ph.prototype.ValueTypeName="number";var mh=class extends Rr{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(s-t),c=e*a;for(let h=c+a;c!==h;c+=4)ts.slerpFlat(r,0,o,c-a,o,c,l);return r}},Ba=class extends si{InterpolantFactoryMethodLinear(e){return new mh(this.times,this.values,this.getValueSize(),e)}};Ba.prototype.ValueTypeName="quaternion";Ba.prototype.InterpolantFactoryMethodSmooth=void 0;var Is=class extends si{constructor(e,t,i){super(e,t,i)}};Is.prototype.ValueTypeName="string";Is.prototype.ValueBufferType=Array;Is.prototype.DefaultInterpolation=ua;Is.prototype.InterpolantFactoryMethodLinear=void 0;Is.prototype.InterpolantFactoryMethodSmooth=void 0;var gh=class extends si{};gh.prototype.ValueTypeName="vector";var Eh=class{constructor(e,t,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let p=c[d],g=c[d+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null}}},TE=new Eh,yh=class{constructor(e){this.manager=e!==void 0?e:TE,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};yh.DEFAULT_MATERIAL_NAME="__DEFAULT";var xr=class extends qt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new le(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Re=class extends xr{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(qt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new le(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Jl=new Ct,Iu=new P,Lu=new P,po=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ie(512,512),this.map=null,this.mapPass=null,this.matrix=new Ct,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ro,this._frameExtents=new ie(1,1),this._viewportCount=1,this._viewports=[new xt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;Iu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Iu),Lu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Lu),t.updateMatrixWorld(),Jl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Jl),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Jl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},vh=class extends po{constructor(){super(new dn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,i=pa*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(i!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Fn=class extends xr{constructor(e,t,i=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(qt.DEFAULT_UP),this.updateMatrix(),this.target=new qt,this.distance=i,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new vh}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Du=new Ct,Qr=new P,Ql=new P,_h=class extends po{constructor(){super(new dn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ie(4,2),this._viewportCount=6,this._viewports=[new xt(2,1,1,1),new xt(0,1,1,1),new xt(3,1,1,1),new xt(1,1,1,1),new xt(3,0,1,1),new xt(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(e,t=0){let i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),Qr.setFromMatrixPosition(e.matrixWorld),i.position.copy(Qr),Ql.copy(i.position),Ql.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Ql),i.updateMatrixWorld(),s.makeTranslation(-Qr.x,-Qr.y,-Qr.z),Du.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Du)}},it=class extends xr{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new _h}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Ah=class extends po{constructor(){super(new Mr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ei=class extends xr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(qt.DEFAULT_UP),this.updateMatrix(),this.target=new qt,this.shadow=new Ah}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Na=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Uu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=Uu();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function Uu(){return 0}var Dh="\\[\\]\\.:\\/",bE=new RegExp("["+Dh+"]","g"),Uh="[^"+Dh+"]",wE="[^"+Dh.replace("\\.","")+"]",RE=/((?:WC+[\/:])*)/.source.replace("WC",Uh),xE=/(WCOD+)?/.source.replace("WCOD",wE),CE=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Uh),FE=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Uh),PE=new RegExp("^"+RE+xE+CE+FE+"$"),IE=["material","materials","bones","map"],Mh=class{constructor(e,t,i){let s=i||Bt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Bt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(bE,"")}static parseTrackName(e){let t=PE.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);IE.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=i(a.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Bt.Composite=Mh;Bt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Bt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Bt.prototype.GetterByBindingType=[Bt.prototype._getValue_direct,Bt.prototype._getValue_array,Bt.prototype._getValue_arrayElement,Bt.prototype._getValue_toArray];Bt.prototype.SetterByBindingTypeAndVersioning=[[Bt.prototype._setValue_direct,Bt.prototype._setValue_direct_setNeedsUpdate,Bt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Bt.prototype._setValue_array,Bt.prototype._setValue_array_setNeedsUpdate,Bt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Bt.prototype._setValue_arrayElement,Bt.prototype._setValue_arrayElement_setNeedsUpdate,Bt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Bt.prototype._setValue_fromArray,Bt.prototype._setValue_fromArray_setNeedsUpdate,Bt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var jy=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Sh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Sh);var Va={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var Ni=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},LE=new Mr(-1,1,1,-1,0,1),Hh=class extends Wt{constructor(){super(),this.setAttribute("position",new pt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new pt([0,2,0,0,2,0],2))}},DE=new Hh,Ir=class{constructor(e){this._mesh=new O(DE,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,LE)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Ls=class extends Ni{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof an?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Fr.clone(e.uniforms),this.material=new an({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Ir(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var mo=class extends Ni{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Wa=class extends Ni{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Xa=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let i=e.getSize(new ie);this._width=i.width,this._height=i.height,t=new on(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Pn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Ls(Va),this.copyPass.material.blending=pi,this.clock=new Na}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),i=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}mo!==void 0&&(o instanceof mo?i=!0:o instanceof Wa&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new ie);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var l0={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new le(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var Lr=class n extends Ni{constructor(e,t,i,s){super(),this.strength=t!==void 0?t:1,this.radius=i,this.threshold=s,this.resolution=e!==void 0?new ie(e.x,e.y):new ie(256,256),this.clearColor=new le(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new on(r,o,{type:Pn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let d=0;d<this.nMips;d++){let u=new on(r,o,{type:Pn});u.texture.name="UnrealBloomPass.h"+d,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);let p=new on(r,o,{type:Pn});p.texture.name="UnrealBloomPass.v"+d,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),r=Math.round(r/2),o=Math.round(o/2)}let a=l0;this.highPassUniforms=Fr.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new an({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let d=0;d<this.nMips;d++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[d])),this.separableBlurMaterials[d].uniforms.invSize.value=new ie(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=Va;this.copyUniforms=Fr.clone(h.uniforms),this.blendMaterial=new an({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Rn,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new le,this.oldClearAlpha=1,this.basic=new nt,this.fsQuad=new Ir(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(i,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,s),this.renderTargetsVertical[r].setSize(i,s),this.separableBlurMaterials[r].uniforms.invSize.value=new ie(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(e,t,i,s,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(i),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){let t=[];for(let i=0;i<e;i++)t.push(.39894*Math.exp(-.5*i*i/(e*e))/e);return new an({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new ie(.5,.5)},direction:{value:new ie(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}};Lr.BlurDirectionX=new ie(1,0);Lr.BlurDirectionY=new ie(0,1);var Ds=1280,Us=720;function Ne(n){let e=n>>>0;return()=>{e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}var Bh=(n,e=0,t=1)=>Math.min(t,Math.max(e,n)),Tt=(n,e,t)=>n+(e-n)*t,ye=(n,e,t)=>{let i=Bh((t-n)/(e-n));return i*i*(3-2*i)};var UE=n=>(n=Bh(n),n*n*(3-2*n));function Ya(n,e){if(e<=n[0][0])return n[0][1];for(let t=1;t<n.length;t++)if(e<=n[t][0]){let i=UE((e-n[t-1][0])/(n[t][0]-n[t-1][0])),s=n[t-1][1],r=n[t][1];return Array.isArray(s)?s.map((o,a)=>Tt(o,r[a],i)):Tt(s,r,i)}return n[n.length-1][1]}var HE={uniforms:{tColor:{value:null},tDepth:{value:null},near:{value:.1},far:{value:400},focus:{value:6},range:{value:3},maxBlur:{value:22},res:{value:new ie(Ds,Us)}},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}",fragmentShader:`varying vec2 vUv;uniform sampler2D tColor,tDepth;uniform float near,far,focus,range,maxBlur;uniform vec2 res;
  float lin(float z){float n=z*2.-1.;return 2.*near*far/(far+near-n*(far-near));}
  float coc(vec2 uv){float d=lin(texture2D(tDepth,uv).r);return clamp((d-focus)/(d<focus?range*.6:range),-1.,1.);}
  float hash(vec2 p){return fract(sin(dot(p,vec2(41.3,289.1)))*43758.5453);}
  void main(){float c0=coc(vUv);float r0=abs(c0)*maxBlur;vec3 sum=texture2D(tColor,vUv).rgb;float w=1.;float rot=hash(vUv*res)*6.283;
    const float G=2.39996;for(int i=1;i<72;i++){float fi=float(i);float r=sqrt(fi/72.)*maxBlur;float an=fi*G+rot;vec2 uv=vUv+vec2(cos(an),sin(an))*r/res;float c=coc(uv);float rs=abs(c)*maxBlur;
      float k=c<c0?smoothstep(r-1.5,r+1.5,rs):smoothstep(r-1.5,r+1.5,r0);sum+=texture2D(tColor,uv).rgb*k;w+=k;}
    gl_FragColor=vec4(sum/w,1.);}`},BE={uniforms:{tDiffuse:{value:null},vig:{value:.42},exposure:{value:1},grain:{value:.016},frame:{value:0},tint:{value:new le(1,1,1)},sat:{value:1},flash:{value:0}},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}",fragmentShader:`varying vec2 vUv;uniform sampler2D tDiffuse;uniform float vig,exposure,grain,frame,sat,flash;uniform vec3 tint;
  vec3 aces(vec3 x){return clamp((x*(2.51*x+.03))/(x*(2.43*x+.59)+.14),0.,1.);}
  float rnd(vec2 p){return fract(sin(dot(p,vec2(12.9898,78.233))+frame)*43758.5453);}
  void main(){vec3 c=texture2D(tDiffuse,vUv).rgb*exposure*tint;c=aces(c*.88);
    float l=dot(c,vec3(.2126,.7152,.0722));c=mix(vec3(l),c,sat);
    vec2 q=(vUv-.5)*vec2(.86,1.);float v=smoothstep(.32,.86,length(q));c*=1.-vig*v;
    c=pow(c,vec3(1./2.2));c+=(rnd(vUv*vec2(1280.,720.))-.5)*grain;c=mix(c,vec3(1.),flash);gl_FragColor=vec4(c,1.);}`},qa=class{constructor(e){let t=this.r=new ba({canvas:e,antialias:!1,preserveDrawingBuffer:!0,powerPreference:"high-performance"});t.setPixelRatio(1),t.setSize(Ds,Us,!1),t.shadowMap.enabled=!0,t.shadowMap.type=Th,t.toneMapping=mi,t.outputColorSpace=ss;let i=new Sr(Ds,Us);i.type=Di,this.rt=new on(Ds,Us,{type:Pn,samples:2,depthTexture:i}),this.composer=new Xa(t,new on(Ds,Us,{type:Pn})),this.dof=new Ls(HE,"tDummy"),this.dof.uniforms.tColor.value=this.rt.texture,this.dof.uniforms.tDepth.value=i,this.bloom=new Lr(new ie(Ds/2,Us/2),.45,.75,.82),this.grade=new Ls(BE),this.composer.addPass(this.dof),this.composer.addPass(this.bloom),this.composer.addPass(this.grade),this.shots=[]}add(e){this.shots.push(e)}render(e){let t=this.shots.find(o=>e>=o.t0&&e<o.t1)||this.shots[this.shots.length-1];t.update(e,e-t.t0,this);let i=t.update(e,e-t.t0,this)||{},s=this.dof.uniforms,r=this.grade.uniforms;s.near.value=t.camera.near,s.far.value=t.camera.far,s.focus.value=i.focus??6,s.range.value=i.range??3,s.maxBlur.value=i.blur??20,this.bloom.strength=i.bloom??.45,this.bloom.threshold=i.bloomT??.82,this.bloom.radius=i.bloomR??.75,r.vig.value=i.vig??.42,r.exposure.value=i.exposure??1,r.sat.value=i.sat??1,r.flash.value=i.flash??0,r.frame.value=Math.floor(e*30)%97,r.tint.value.set(i.tint??"#ffffff"),this.r.setRenderTarget(this.rt),this.r.clear(),this.r.render(t.scene,t.camera),this.r.setRenderTarget(null),this.composer.render()}};function c0(n,e,t,i=40){let s=new wa;s.background=new le(t);let r=new dn(i,Ds/Us,.08,400);return{t0:n,t1:e,scene:s,camera:r,update(){return{}}}}function h0(n,e,t,i=0){n.position.set(e[0],e[1],e[2]),n.up.set(Math.sin(i),Math.cos(i),0),n.lookAt(t[0],t[1],t[2])}var Ln=1/420,Nh=new Map;function Dn(n,e,t,i){if(Nh.has(n))return Nh.get(n);let s=document.createElement("canvas");s.width=e*2,s.height=t*2;let r=s.getContext("2d");r.scale(2,2),r.lineJoin="round",r.lineCap="round",i(r,e,t);let o=new Xn(s);return o.colorSpace=Nt,o.anisotropy=8,o.generateMipmaps=!0,o.premultiplyAlpha=!1,Nh.set(n,o),o}var yt=n=>new Path2D(n);function hn(n,e,t){n.save(),n.fillStyle=t,n.fill(e),n.restore()}function ri(n,e,t,i,s,...r){let o=n.createLinearGradient(e,t,i,s);return r.forEach((a,l)=>o.addColorStop(l/(r.length-1),a)),o}var NE={hero:{a:"#43C4B4",b:"#27998C",c:"#1F7C72",s:"#6FDCCB",kind:"hoodie",cuff:"#2A9F93"},jaleco:{a:"#F6F4EE",b:"#D9D6CE",c:"#B9B6AE",s:"#FFFFFF",kind:"coat",cuff:"#E9E6DE",pants:"#2E3648"},terno2:{a:"#3C4C72",b:"#2A3756",c:"#1E2842",s:"#6D80A8",kind:"suit",cuff:"#F2EFE8"},terno3:{a:"#6A3A44",b:"#4C2830",c:"#381D23",s:"#8F5A66",kind:"suit",cuff:"#F2EFE8"},avental:{a:"#D2483A",b:"#AE3429",c:"#8A261D",s:"#EF7E70",kind:"hoodie",cuff:"#8A261D"},terno:{a:"#2E3442",b:"#1C2029",c:"#14171e",s:"#566072",kind:"suit",cuff:"#F2EFE8"},rosa:{a:"#F08AA0",b:"#D66A86",c:"#B44F6C",s:"#F9B6C4",kind:"dress",cuff:"#111",belt:"#EFC04F",flora:"#FFF3DA"},amarelo:{a:"#F7CC58",b:"#E3A92F",c:"#C78F22",s:"#FFE596",kind:"blouse",cuff:"#111",pants:"#59607a"},verde:{a:"#8EAE86",b:"#6F9068",c:"#58744f",s:"#B6CFAE",kind:"dress",cuff:"#111",belt:"#EFC04F",flora:"#FFF8E6"},azul:{a:"#6F97C4",b:"#4C729F",c:"#3A5A82",s:"#A3C2E0",kind:"blouse",cuff:"#111",pants:"#3a3f55"},laranja:{a:"#F2A766",b:"#DD8A45",c:"#BC6F2E",s:"#FBCB9B",kind:"hoodie",cuff:"#BC6F2E"},roxo:{a:"#A98AD0",b:"#8667B0",c:"#6D5093",s:"#CDB6E6",kind:"dress",cuff:"#111",belt:"#F2F0E6",flora:"#F6E4FF"}};function OE(n,e){return Dn("torso_"+e,300,320,t=>{if(t.translate(150,20),n.kind==="hoodie"){let i=yt("M-92 34 Q-60 2 0 -2 Q60 2 92 34 Q106 130 104 262 L-104 262 Q-106 130 -92 34Z");hn(t,i,ri(t,-100,0,100,260,n.a,n.b)),t.fillStyle=n.c,t.globalAlpha=.3,t.fill(yt("M60 20 Q100 40 104 262 L52 262 Q70 150 60 20Z")),t.globalAlpha=1,t.fillStyle=n.b,t.fill(yt("M-70 26 Q0 92 70 26 Q84 44 72 70 Q0 118 -72 70 Q-84 44 -70 26Z")),t.fillStyle=n.c,t.fill(yt("M-44 22 Q0 -4 44 22 Q30 62 0 66 Q-30 62 -44 22Z")),t.strokeStyle="#F4F4EE",t.lineWidth=5,t.beginPath(),t.moveTo(-18,66),t.lineTo(-20,126),t.moveTo(18,66),t.lineTo(20,126),t.stroke(),t.fillStyle="#F4F4EE",t.beginPath(),t.arc(-20,130,4.5,0,7),t.arc(20,130,4.5,0,7),t.fill(),t.fillStyle=n.b,t.strokeStyle=n.c,t.lineWidth=3.5;let s=yt("M-62 164 L62 164 L78 240 L-78 240Z");t.fill(s),t.stroke(s),t.fillStyle=n.c,t.fillRect(-104,240,208,24),t.strokeStyle=n.b,t.lineWidth=2.5;for(let r=-100;r<104;r+=10)t.beginPath(),t.moveTo(r,242),t.lineTo(r,263),t.stroke()}else if(n.kind==="suit"){hn(t,yt("M-92 26 Q-46 4 0 4 Q46 4 92 26 Q104 130 100 280 L-100 280 Q-104 130 -92 26Z"),ri(t,-100,0,100,280,n.a,n.b)),t.strokeStyle="#ffffff10",t.lineWidth=2;for(let i=-92;i<96;i+=13)t.beginPath(),t.moveTo(i,30),t.lineTo(i,280),t.stroke();t.fillStyle="#F4F2EA",t.fill(yt("M-34 6 L34 6 L10 138 L-10 138Z")),t.fillStyle="#39AE9F",t.fill(yt("M-13 16 L13 16 L8 30 L18 116 L0 138 L-18 116 L-8 30Z")),t.strokeStyle="#8FDCCF",t.lineWidth=2;for(let i=0;i<4;i++)t.beginPath(),t.moveTo(-10,52+i*20),t.lineTo(10,44+i*20),t.stroke();t.fillStyle=n.c,t.fill(yt("M-34 6 L-58 22 L-46 66 L-8 146 L-12 150 L-34 6Z")),t.fill(yt("M34 6 L58 22 L46 66 L8 146 L12 150 L34 6Z")),t.fillStyle="#39AE9F",t.fill(yt("M-70 86 L-34 86 L-46 70 L-58 70Z")),t.fillStyle="#0d0f14",t.beginPath(),t.arc(0,176,7,0,7),t.arc(0,216,7,0,7),t.fill()}else if(n.kind==="coat")hn(t,yt("M-88 26 Q-44 4 0 4 Q44 4 88 26 Q100 150 104 292 L-104 292 Q-100 150 -88 26Z"),ri(t,-100,0,100,290,n.a,n.b)),t.fillStyle="#39AE9F",t.fill(yt("M-30 6 L30 6 L12 118 L-12 118Z")),t.fillStyle="#20273a",t.fillRect(-13,16,26,100),t.fillStyle=n.c,t.fill(yt("M-30 6 L-54 24 L-30 78 L-6 128 L-12 134Z")),t.fill(yt("M30 6 L54 24 L30 78 L6 128 L12 134Z")),t.strokeStyle=n.c,t.lineWidth=3,t.beginPath(),t.moveTo(0,130),t.lineTo(0,292),t.stroke(),t.strokeRect(-76,188,54,46),t.strokeRect(22,188,54,46),t.fillStyle="#3F6FB0",t.fillRect(44,182,5,26),t.fillStyle="#C9361F",t.fillRect(56,182,5,22);else if(n.kind==="dress"){hn(t,yt("M-62 14 Q-30 26 0 26 Q30 26 62 14 Q78 40 58 96 L54 118 L-54 118 L-58 96 Q-78 40 -62 14Z"),ri(t,-60,0,60,120,n.a,n.b)),hn(t,yt("M-52 118 L52 118 Q90 190 116 292 Q0 312 -116 292 Q-90 190 -52 118Z"),ri(t,-100,120,100,300,n.a,n.b)),t.fillStyle=n.belt,t.fillRect(-58,104,116,20);let i=7,s=()=>(i=i*16807%2147483647)/2147483647;t.fillStyle=n.flora;for(let r=0;r<34;r++){let o=34+s()*250,a=o<118?52:52+(o-118)*.36,l=(s()*2-1)*a;if(!(o>100&&o<128))for(let c=0;c<5;c++)t.beginPath(),t.arc(l+Math.cos(c*1.256)*5,o+Math.sin(c*1.256)*5,3.2,0,7),t.fill()}}else hn(t,yt("M-74 18 Q-30 30 0 30 Q30 30 74 18 Q88 110 74 196 L-74 196 Q-88 110 -74 18Z"),ri(t,-70,0,70,200,n.a,n.b)),t.fillStyle="#0a0a12",t.fill(yt("M-22 26 L22 26 L0 64Z")),hn(t,yt("M-68 196 L68 196 L74 276 L-74 276Z"),n.pants||"#555",null),t.fillStyle=n.belt||n.c,t.fillRect(-70,192,140,12)})}function d0(n,e,t){return Dn("sl_"+e+t,90,170,i=>{if(i.translate(45,10),n.kind==="dress"||n.kind==="blouse"){t==="u"?(hn(i,yt("M-26 -2 Q0 -16 26 -2 Q32 34 22 54 Q0 62 -22 54 Q-32 34 -26 -2Z"),ri(i,-26,0,26,50,n.a,n.b)),i.fillStyle="#17161e",i.fillRect(-7,48,14,100)):(hn(i,yt("M-8 -4 L8 -4 L8 136 L-8 136Z"),"#17161e",n.kind?"#FFE9C8":null,3),i.fillStyle="#3a3a48",i.fillRect(-2,0,3,130));return}let s=134,r=t==="u"?27:23,o=t==="u"?23:18;hn(i,yt(`M${-r} 4 Q0 -22 ${r} 4 L${o} ${s} Q0 ${s+16} ${-o} ${s}Z`),ri(i,-r,0,r,0,n.a,n.b)),i.fillStyle=n.s,i.globalAlpha=.5,i.fill(yt(`M${-r+8} 10 L${-r+16} 6 L${-o+13} ${s-6} L${-o+6} ${s-4}Z`)),i.globalAlpha=1,t==="f"&&(i.fillStyle=n.cuff,i.fill(yt(`M-20 ${s-14} Q0 ${s-4} 20 ${s-14} L19 ${s+6} Q0 ${s+16} -19 ${s+6}Z`)))})}function zE(){return Dn("hand",90,100,n=>{n.translate(45,14);let e=yt("M-20 0 Q-30 22 -26 44 L-22 72 Q-16 80 -11 70 L-10 50 L-6 78 Q0 86 5 76 L5 50 L12 72 Q18 78 22 68 L18 40 L32 44 Q40 38 32 28 L18 8 Q2 -6 -20 0Z");hn(n,e,ri(n,-20,0,20,70,"#34343F","#1C1C25"),"#FFE9C8",4),n.strokeStyle="#4a4a58",n.lineWidth=2,n.beginPath(),n.moveTo(-12,18),n.quadraticCurveTo(0,8,12,16),n.stroke()})}function u0(n){return Dn("leg"+n,50,160,e=>{e.translate(25,6),e.fillStyle="#191922",e.beginPath(),e.roundRect(-9,-6,18,158,9),e.fill(),e.fillStyle="#46465a",e.fillRect(-2.5,2,3,140)})}function kE(){return Dn("foot",80,40,n=>{n.translate(26,6),hn(n,yt("M-13 -2 L13 -2 Q40 6 42 22 L-14 22Z"),"#20202A","#FFE9C8",3),n.fillStyle="#E8E4DA",n.fillRect(-14,19,56,5)})}function GE(n="round"){return Dn("head"+n,300,300,e=>{e.translate(150,150);let t=new Path2D;t.arc(0,0,118,0,7);let i=e.createRadialGradient(10,-46,2,0,0,122);i.addColorStop(0,"#2C2E44"),i.addColorStop(.42,"#14141F"),i.addColorStop(1,"#08080E"),e.fillStyle=i,e.fill(t),e.save(),e.clip(t),e.globalAlpha=.1,e.fillStyle="#9fa4d8",e.beginPath(),e.ellipse(-4,-98,70,16,0,0,7),e.fill(),e.restore()})}var m0={open(n,e){n.fillStyle="#F6EFE6",n.beginPath(),n.ellipse(0,0,18,27,e*.06,0,7),n.fill()},look(n,e){n.fillStyle="#F6EFE6",n.beginPath(),n.ellipse(11,0,18,26,0,0,7),n.fill()},lookl(n,e){n.fillStyle="#F6EFE6",n.beginPath(),n.ellipse(-11,0,18,26,0,0,7),n.fill()},down(n,e){n.fillStyle="#F6EFE6",n.beginPath(),n.ellipse(0,16,18,22,0,0,7),n.fill()},wide(n,e){n.fillStyle="#F6EFE6",n.beginPath(),n.ellipse(0,-2,23,33,0,0,7),n.fill()},small(n,e){n.fillStyle="#F6EFE6",n.beginPath(),n.ellipse(0,0,10,14,0,0,7),n.fill()},happy(n,e){n.strokeStyle="#F6EFE6",n.lineWidth=8.5,n.beginPath(),n.moveTo(-22,8),n.quadraticCurveTo(0,-24,22,8),n.stroke()},shut(n,e){n.strokeStyle="#F6EFE6",n.lineWidth=8.5,n.beginPath(),n.moveTo(-22,-6),n.quadraticCurveTo(0,18,22,-6),n.stroke()},flat(n,e){n.strokeStyle="#F6EFE6",n.lineWidth=8.5,n.beginPath(),n.moveTo(-22,2),n.lineTo(22,2),n.stroke()},smug(n,e){n.fillStyle="#F6EFE6",n.beginPath(),n.moveTo(-22,-6),n.lineTo(22,-6),n.quadraticCurveTo(20,24,0,24),n.quadraticCurveTo(-20,24,-22,-6),n.fill()},sad(n,e){n.fillStyle="#F6EFE6",n.beginPath(),n.moveTo(-19,e>0?-14:2),n.lineTo(19,e>0?2:-14),n.quadraticCurveTo(20,26,0,26),n.quadraticCurveTo(-20,26,-19,e>0?-14:2),n.fill()},angry(n,e){n.fillStyle="#F6EFE6",n.beginPath(),n.moveTo(-19,e>0?6:-14),n.lineTo(19,e>0?-14:6),n.quadraticCurveTo(20,26,0,26),n.quadraticCurveTo(-20,26,-19,e>0?6:-14),n.fill()},heart(n,e){n.fillStyle="#F0728C",n.beginPath(),n.moveTo(0,22),n.bezierCurveTo(-34,-2,-18,-30,0,-10),n.bezierCurveTo(18,-30,34,-2,0,22),n.fill()}};function VE(n,e){return Dn("eye_"+n+(e?"L":""),300,300,t=>{t.translate(150,150),[-1,1].forEach(i=>{t.save(),t.translate(i*42,0),m0[n](t,i),e&&(t.strokeStyle="#F6EFE6",t.lineWidth=3.5,[0,1,2].forEach(s=>{t.beginPath(),t.moveTo(i*(8+s*6),-22+s*3),t.quadraticCurveTo(i*(16+s*7),-34+s*2,i*(26+s*6),-36+s*5),t.stroke()})),t.restore()}),e&&(t.fillStyle="#E8667F55",[-1,1].forEach(i=>{t.beginPath(),t.ellipse(i*48,40,26,13,0,0,7),t.fill()}))})}function WE(n,e,t){return Dn("hair_"+n+e,420,500,i=>{if(i.translate(210,170),n==="long"){let s=yt("M-130 -24 Q-136 -146 0 -152 Q136 -146 130 -24 Q150 120 128 250 Q0 276 -128 250 Q-150 120 -130 -24Z");hn(i,s,ri(i,-120,-150,120,250,e,t||e)),i.strokeStyle="#ffffff30",i.lineWidth=7,[[-90,-100,-118,180],[-60,-128,-70,40],[86,-100,112,200],[54,-130,70,60],[10,-146,20,-110]].forEach(([r,o,a,l])=>{i.beginPath(),i.moveTo(r,o),i.quadraticCurveTo(r*1.25,(o+l)/2,a,l),i.stroke()})}if(n==="bun"){let s=new Path2D;s.arc(0,-152,46,0,7),hn(i,s,e);let r=yt("M-126 -24 Q-128 -128 0 -132 Q128 -128 126 -24 Q124 14 114 34 Q90 -40 0 -60 Q-90 -40 -114 34 Q-124 14 -126 -24Z");hn(i,r,e),i.strokeStyle="#ffffff33",i.lineWidth=6,i.beginPath(),i.moveTo(-60,-112),i.quadraticCurveTo(-10,-128,40,-112),i.stroke()}if(n==="afro"){let s=(r,o,a)=>{let l=new Path2D;l.arc(r,o,a,0,7),hn(i,l,e)};[[-118,-20,52],[-104,-82,56],[-58,-130,58],[0,-148,60],[58,-130,58],[104,-82,56],[118,-20,52],[-118,40,44],[118,40,44]].forEach(r=>s(...r)),i.strokeStyle="#ffffff22",i.lineWidth=4,[[-70,-120],[-10,-140],[60,-118],[100,-70],[-100,-66]].forEach(([r,o])=>{i.beginPath(),i.arc(r,o,26,3.6,5.4),i.stroke()})}if(n==="bob"){let s=yt("M-128 -20 Q-132 -146 0 -150 Q132 -146 128 -20 Q130 74 104 104 L-104 104 Q-130 74 -128 -20Z");hn(i,s,ri(i,0,-150,0,100,e,t||e)),i.strokeStyle="#ffffff30",i.lineWidth=6,[[-80,-110,-112,70],[78,-112,110,70],[0,-142,4,-110]].forEach(([r,o,a,l])=>{i.beginPath(),i.moveTo(r,o),i.quadraticCurveTo(r*1.22,(o+l)/2,a,l),i.stroke()})}n==="old"&&[[-1],[1]].forEach(([s])=>{[[118,-30,40],[132,18,44],[112,62,34],[92,-66,30]].forEach(([r,o,a])=>{let l=new Path2D;l.arc(s*r,o,a,0,7),hn(i,l,"#E9E9EF")})})})}var f0=(n,e={})=>new nt({map:n,alphaTest:.5,alphaToCoverage:!0,side:Et,...e}),p0=new Map,Oh=new Map,XE=[];function qE(n){if(Oh.has(n))return Oh.get(n);let e=n.image,t=document.createElement("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d"),s=7;for(let o=0;o<16;o++){let a=o/16*6.283;i.drawImage(e,Math.cos(a)*s,Math.sin(a)*s)}i.globalCompositeOperation="source-in",i.fillStyle="#FFFFFF",i.fillRect(0,0,t.width,t.height);let r=new Xn(t);return r.colorSpace=Nt,r.anisotropy=8,Oh.set(n,r),r}function In(n,e,t,i,s,r=0,o,a=!1){let l=new Ae(e*Ln,t*Ln);l.translate((e/2-i)*Ln,(s-t/2)*Ln,0);let c=f0(n);o.push(c);let h=new O(l,c);if(h.position.z=r,h.castShadow=!0,!a){let u=f0(qE(n),{color:"#FFE9C8"});XE.push(u);let p=new O(l,u);p.position.z=-.045-r,h.add(p)}let d=p0.get(n);return d||(d=new is({depthPacking:Cr,map:n,alphaTest:.5,side:Et}),p0.set(n,d)),h.customDepthMaterial=d,h}function YE(){return Dn("blob",128,128,n=>{let e=n.createRadialGradient(64,64,2,64,64,62);e.addColorStop(0,"#000000AA"),e.addColorStop(.55,"#00000055"),e.addColorStop(1,"#00000000"),n.fillStyle=e,n.fillRect(0,0,128,128)})}function ZE(){return Dn("halo",256,512,n=>{let e=n.createRadialGradient(128,256,10,128,256,128);e.addColorStop(0,"#FFE6C0"),e.addColorStop(.62,"#FFE6C066"),e.addColorStop(1,"#FFE6C000"),n.save(),n.translate(0,0),n.scale(1,2),n.translate(0,-128),n.fillStyle=e,n.fillRect(0,0,256,512),n.restore()})}function zh(n={}){let e=NE[n.outfit||"hero"],t=n.outfit||"hero",i=new ce,s=[],r=new ce;i.add(r);let o=316,a=o+262,l={},c={};for(let[m,f,_]of[["L",-1,-.012],["R",1,-.01]]){let v=new ce;v.position.set(f*34*Ln,o*Ln,_);let y=new ce;y.position.y=-142*Ln,v.add(In(u0(1),50,160,25,6,0,s)),y.add(In(u0(1),50,160,25,6,0,s));let L=In(kE(),80,40,26,6,.001,s);L.position.y=-142*Ln,f<0&&(L.scale.x=-1),y.add(L),v.add(y),r.add(v),l[m]={th:v,shin:y}}let h=In(OE(e,t),300,320,150,20,0,s);h.position.y=(a+4)*Ln,r.add(h);for(let[m,f,_]of[["L",-1,-.006],["R",1,.006]]){let v=new ce;v.position.set(f*(e.kind==="dress"?66:84)*Ln,(a-24)*Ln,_);let y=new ce;y.position.y=-124*Ln,v.add(In(d0(e,t,"u"),90,170,45,10,0,s)),y.add(In(d0(e,t,"f"),90,170,45,10,.001,s));let L=In(zE(),90,100,45,14,.002,s);L.position.y=-128*Ln,L.scale.set(f>0?-.8:.8,.8,1),y.add(L),v.add(y),r.add(v),c[m]={u:v,f:y,hand:L}}let d=new ce;if(d.position.set(0,(a+104)*Ln,.02),r.add(d),n.hair){let m=In(WE(n.hair,n.hairc||"#4a2c1a",n.hairhi),420,500,210,170,-.03,s);d.add(m)}if(d.add(In(GE(),300,300,150,150,0,s)),n.hair&&n.hair!=="old"&&n.hair!=="afro"){let m=In(Dn("fringe_"+n.hair+(n.hairc||""),300,300,f=>{f.translate(150,150);let _=n.hairc||"#4a2c1a";f.fillStyle=_,f.fill(yt(n.hair==="bun"?"M-122 -18 Q-120 -122 0 -124 Q120 -122 122 -18 Q70 -78 0 -84 Q-70 -78 -122 -18Z":"M-124 12 Q-126 -124 0 -126 Q126 -124 124 12 Q106 -44 44 -66 Q0 -76 -44 -66 Q-106 -44 -124 12Z")),f.strokeStyle="#ffffff2c",f.lineWidth=5,f.beginPath(),f.moveTo(-70,-92),f.quadraticCurveTo(-10,-114,54,-96),f.stroke()}),300,300,150,150,.003,s,!0);d.add(m)}if(n.lash){let m=In(Dn("earring",300,300,f=>{f.translate(150,150),[-1,1].forEach(_=>{f.strokeStyle="#F2C94C",f.lineWidth=6,f.beginPath(),f.arc(_*124,58,15,0,7),f.stroke()})}),300,300,150,150,.004,s,!0);m.castShadow=!1,d.add(m)}let u={};for(let m of Object.keys(m0)){let f=In(VE(m,n.lash),300,300,150,150,.002,s,!0);f.castShadow=!1,f.visible=m==="open",d.add(f),u[m]=f}if(n.glasses){let m=In(Dn("glasses",300,300,f=>{f.translate(150,150),f.strokeStyle="#E4E6EC",f.lineWidth=7,f.beginPath(),f.arc(-42,0,36,0,7),f.stroke(),f.beginPath(),f.arc(42,0,36,0,7),f.stroke(),f.beginPath(),f.moveTo(-6,0),f.lineTo(6,0),f.stroke()}),300,300,150,150,.004,s,!0);m.castShadow=!1,d.add(m)}if(n.hat){let m=In(n.hat(Dn),300,300,150,150,.006,s);d.add(m)}let p=new O(new Ae(1,.4),new nt({map:YE(),transparent:!0,depthWrite:!1}));p.rotation.x=-Math.PI/2,p.position.y=.012,i.add(p);let g=null;n.glow&&(g=new O(new Ae(2.1,3),new nt({map:ZE(),transparent:!0,depthWrite:!1,opacity:n.glow,blending:Rn,side:Et})),g.position.set(0,.95,-.09),r.add(g));let E={root:i,body:r,head:d,arms:c,legs:l,eyes:u,mats:s,torso:h,tint(m){s.forEach(f=>f.color.set(m))},eye(m){for(let f in u)u[f].visible=f===m},cheer(m,f=0,_=1){let v=m*6+f,y=Math.sin(v);E.pose({armL:[150+y*16*_,18+y*10],armR:[150-y*16*_,18-y*10],bob:Math.abs(Math.sin(v*.5))*.07*_,head:y*3,legL:[2,0],legR:[2,0]})},opacity(m){s.forEach(f=>{f.transparent=m<1,f.opacity=m,f.alphaTest=m<1?.02:.5,f.alphaToCoverage=m>=1,f.depthWrite=m>=1}),p.material.opacity=m,g&&(g.material.opacity=(n.glow||0)*m)},pose(m={}){let f=Math.PI/180,_=m.armL||[6,4],v=m.armR||[6,4],y=m.legL||[0,0],L=m.legR||[0,0];c.L.u.rotation.z=-_[0]*f,c.L.f.rotation.z=-_[1]*f,c.R.u.rotation.z=v[0]*f,c.R.f.rotation.z=v[1]*f,l.L.th.rotation.z=-y[0]*f,l.L.shin.rotation.z=-y[1]*f,l.R.th.rotation.z=L[0]*f,l.R.shin.rotation.z=L[1]*f,d.rotation.z=(m.head||0)*f,r.rotation.z=(m.lean||0)*f,r.position.y=m.bob||0;let C=m.squash||0;r.scale.set(1-C*.5,1+C,1)},walk(m,f=1,_=1){let v=m*6.4*f,y=Math.sin(v),L=Math.cos(v);E.pose({legL:[y*15*_,Math.max(0,-y)*26*_],legR:[-y*15*_,Math.max(0,y)*26*_],armL:[8-y*12*_,6],armR:[8+y*12*_,6],bob:Math.abs(L)*.03*_,head:y*2})},place(m,f,_=0,v=1){i.position.set(m,_,f),i.scale.setScalar(v)},face(m){let f=m.position;i.rotation.y=Math.atan2(f.x-i.position.x,f.z-i.position.z),p.rotation.z=-i.rotation.y}};return E.pose(),E}function ve(n,e,t){let i=document.createElement("canvas");i.width=n,i.height=e;let s=i.getContext("2d");t(s,n,e);let r=new Xn(i);return r.colorSpace=Nt,r.anisotropy=8,r}var Hs=(n,e={})=>new Ce({color:n,roughness:.88,metalness:0,...e});function R(n,e,t,i,s=0,r=0,o=0,a=!0){let l=new O(new Cn(n,e,t),typeof i=="string"?Hs(i):i);return l.position.set(s,r,o),l.castShadow=a,l.receiveShadow=!0,l}function Ye(n,e,t=1){let i=ve(128,128,r=>{let o=r.createRadialGradient(64,64,0,64,64,64);o.addColorStop(0,"#fff"),o.addColorStop(.25,"#ffffff66"),o.addColorStop(1,"#ffffff00"),r.fillStyle=o,r.fillRect(0,0,128,128)}),s=new oo(new Tr({map:i,color:n,transparent:!0,depthWrite:!1,opacity:t,blending:Rn}));return s.scale.set(e,e,1),s}var g0=["#8C4A3C","#6E4152","#4F5A70","#9A6A48","#59685E","#7B3B3B"];function $E(n,e,t,i,s,r=.42){let o=Ne(n),a=256*e,l=300*t,c,h=ve(a,l,u=>{u.fillStyle=i,u.fillRect(0,0,a,l);for(let p=0;p<l;p+=12)for(let g=p/12%2*-14;g<a;g+=30)u.fillStyle=`rgba(${o()<.5?"255,235,215":"20,8,8"},${.03+o()*.07})`,u.fillRect(g,p,28,10);for(let p=0;p<t;p++)u.fillStyle="rgba(255,240,220,.14)",u.fillRect(0,p*300+292,a,8)}),d=ve(a,l,u=>{u.fillStyle="#000",u.fillRect(0,0,a,l);let p=h.image.getContext("2d");for(let g=0;g<t;g++)for(let E=0;E<e;E++){let m=E*256+56,f=g*300+60,_=144,v=196,y=o()<r,L=o();if(p.fillStyle="#E8E0CE",p.fillRect(m-9,f-9,_+18,v+18),p.fillStyle="rgba(0,0,0,.35)",p.fillRect(m-18,f+v+9,_+36,12),p.fillStyle="rgba(245,235,215,.8)",p.fillRect(m-18,f+v+6,_+36,8),p.fillStyle=s?y?"#F7C97F":"#1C2238":o()<.5?"#7E93A8":"#94A9B6",p.fillRect(m,f,_,v),y||!s){let C=y?L<.5?"#D69A6A":"#E7AC8C":"#D9D2BE";p.fillStyle=C,p.fillRect(m,f,26,v),p.fillRect(m+_-26,f,26,v)}s||(p.fillStyle="#ffffff30",p.beginPath(),p.moveTo(m+20,f+v),p.lineTo(m+90,f),p.lineTo(m+124,f),p.lineTo(m+54,f+v),p.fill()),p.fillStyle="#E8E0CE",p.fillRect(m+_/2-3,f,6,v),p.fillRect(m,f+v*.45,_,6),y&&s&&(u.fillStyle=L<.5?"#FFC47A":"#FFD79C",u.fillRect(m,f,_,v),u.fillStyle="#000",u.fillRect(m+_/2-3,f,6,v),u.fillRect(m,f+v*.45,_,6))}h.needsUpdate=!0});return d.colorSpace=Nt,{map:h,emissiveMap:d}}function rs(n,e){let{x:t,z:i,w:s,d:r,floors:o=5,side:a=1,night:l=!0,col:c,shop:h}=e,d=Ne(n),u=new ce,p=o*2.9+3.6,g=c||g0[Math.floor(d()*g0.length)],E=Math.max(2,Math.round(r/2.1)),m=$E(n,E,o,g,l,e.lit??.42),f=new Ce({map:m.map,emissiveMap:m.emissiveMap,emissive:new le(l?.62:0,l?.56:0,l?.48:0),roughness:.95}),_=Hs(g),v=[a>0?f:_,a>0?_:f,Hs("#2c2730"),_,_,_],y=new O(new Cn(s,o*2.9,r),v);y.position.set(t,3.6+o*1.45,i),y.castShadow=y.receiveShadow=!0,u.add(y),u.add(R(s+.5,.5,r+.5,"#3d3540",t,p+.25,i)),u.add(R(s+.3,.35,r+.3,g,t,3.6,i));let L=t+a*(s/2+.01);if(h){let C=ve(1024,180,I=>{I.fillStyle=h.bg,I.fillRect(0,0,1024,180),I.fillStyle="#ffffff22",I.fillRect(0,0,1024,8),I.font=`900 ${h.size||104}px ${h.font||"Fraunces"}`,I.textAlign="center",I.textBaseline="middle",I.fillStyle=h.fg||"#FFF4DC",I.shadowColor=h.fg||"#FFF4DC",I.shadowBlur=l?26:0,I.fillText(h.name,512,96)}),w=new O(new Cn(.18,1.05,r-.3),[new Ce({map:C,emissiveMap:C,emissive:new le(l?.85:0,l?.85:0,l?.85:0)}),new Ce({map:C,emissiveMap:C,emissive:new le(l?.85:0,l?.85:0,l?.85:0)}),Hs("#222"),Hs("#222"),Hs("#222"),Hs("#222")]);w.position.set(L+a*.1,3.25,i),a>0&&(w.scale.z=-1),w.castShadow=!0,u.add(w);let F=ve(512,256,I=>{let N=I.createLinearGradient(0,0,0,256);N.addColorStop(0,h.win||"#F4C783"),N.addColorStop(1,"#D59A5C"),I.fillStyle=N,I.fillRect(0,0,512,256);let k=Ne(n+9);for(let X=0;X<26;X++)I.fillStyle=["#C64236","#36AEA2","#EABA42","#D2728A","#4A86C7","#F6EFE6"][Math.floor(k()*6)],I.fillRect(k()*490,30+Math.floor(k()*3)*76,12+k()*26,52);for(let X of[84,160,236])I.fillStyle="#6b4530",I.fillRect(0,X,512,7)}),S=new Ce({map:F,emissiveMap:F,emissive:new le(l?.62:.1,l?.62:.1,l?.62:.1),roughness:.25});u.add(R(.3,2.8,r-.1,"#3a2a24",L-a*.1,1.4,i));let A=new O(new Ae(r-.9,2.1),S);A.rotation.y=a*Math.PI/2,A.position.set(L+a*.07,1.5,i),u.add(A);for(let I=-1;I<=1;I++)u.add(R(.08,2.3,.09,"#2a1d18",L+a*.1,1.5,i+I*(r-.9)/2));if(h.awning){let I=ve(512,128,k=>{for(let X=0;X<12;X++)k.fillStyle=X%2?h.awning:"#F4EEDF",k.fillRect(X*512/12,0,42.666666666666664,128)}),N=new O(new Ae(r-.3,1.3),new Ce({map:I,side:Et,roughness:.9}));N.rotation.y=a*Math.PI/2,N.rotation.order="YXZ",N.rotation.x=-1,N.position.set(L+a*.55,2.56,i),N.castShadow=!0,u.add(N)}if(l){let I=new it(h.light||"#FFC88A",3.2,7,1.8);I.position.set(L+a*1.7,2.1,i),u.add(I)}}return u}function E0(n,e,t){let i=new O(new Ae(n,e),t);return i.rotation.x=-Math.PI/2,i.receiveShadow=!0,i}function JE(n="#A99D90"){let e=ve(512,512,t=>{t.fillStyle=n,t.fillRect(0,0,512,512);let i=Ne(4);for(let s=0;s<2400;s++)t.fillStyle=`rgba(${i()<.5?"255,255,255":"0,0,0"},.035)`,t.fillRect(i()*512,i()*512,2,2);t.strokeStyle="rgba(30,20,20,.42)",t.lineWidth=4,t.strokeRect(0,0,512,512)});return e.wrapS=e.wrapT=rn,e}function Za(n,e){let t=ve(1024,1024,s=>{s.fillStyle=e?"#1E1E26":"#4b4a52",s.fillRect(0,0,1024,1024);let r=Ne(5);for(let o=0;o<7e3;o++)s.fillStyle=`rgba(255,255,255,${r()*.05})`,s.fillRect(r()*1024,r()*1024,2,2);s.fillStyle="#D9D2BD";for(let o=40;o<1024;o+=256)s.fillRect(504,o,14,130)});t.wrapS=t.wrapT=rn,t.repeat.set(1,12);let i=E0(9,240,new Ce({map:t,roughness:.78,metalness:.05}));i.position.set(0,0,-100),n.add(i);for(let s of[-1,1]){let r=JE(e?"#8E8378":"#B8AC9D");r.repeat.set(2,100);let o=E0(4.4,240,new Ce({map:r,roughness:.92}));o.position.set(s*6.7,.14,-100),n.add(o),n.add(R(.22,.16,240,e?"#B8AFA2":"#D0C6B6",s*4.55,.07,-100,!1))}}function $a(n,e,t,i,s=!0,r=5.5){let o=new ce;o.add(R(.09,3.7,.09,"#15151b",e,1.85,t)),o.add(R(.26,.3,.26,"#15151b",e,.15,t));let a=R(.26,.4,.26,new Ce({color:"#FFE2AC",emissive:"#FFD089",emissiveIntensity:s?2.2:0}),e,3.85,t,!1);if(o.add(a),o.add(R(.34,.06,.34,"#15151b",e,4.08,t,!1)),s){let l=Ye("#FFB870",1.8,.4);l.position.set(e,3.85,t),o.add(l);let c=new it("#FFC688",r,11,1.6);c.position.set(e,3.5,t),o.add(c)}return n.add(o),o}var y0={};function kt(n,e,t,i=1,s=["#2E4F2C","#3B6636","#55813F","#A9B65A"],r=1){let o=new ce;o.add(R(.18*i,2.6*i,.18*i,"#2b1e18",e,1.3*i,t));let a=s.join()+r%3,l=y0[a]||(y0[a]=ve(512,512,c=>{let h=Ne(r%3+3),d=(u,p,g,E)=>{c.fillStyle=E,c.beginPath();for(let m=0;m<=26;m++){let f=m/26*6.283,_=g*(.86+.14*Math.sin(f*5+u)+h()*.05);c.lineTo(u+Math.cos(f)*_,p+Math.sin(f)*_)}c.fill()};for(let[u,p,g]of[[256,170,130],[150,240,118],[362,240,118],[256,300,128],[188,150,92],[324,150,92]])d(u,p,g,s[0]);for(let[u,p,g]of[[256,150,92],[160,226,80],[350,226,80],[256,270,92]])d(u,p,g,s[1]);for(let[u,p,g]of[[226,122,52],[320,196,46],[160,200,40],[262,240,46]])d(u,p,g,s[2]);c.fillStyle=s[3];for(let u=0;u<70;u++){let p=90+h()*330,g=70+h()*300;c.save(),c.translate(p,g),c.rotate(h()*3),c.beginPath(),c.ellipse(0,0,8,3.6,0,0,7),c.fill(),c.restore()}}));for(let c=0;c<3;c++){let h=new O(new Ae(3.6*i,3.6*i),new Ce({map:l,alphaTest:.5,side:Et,roughness:1}));h.position.set(e,3.5*i,t),h.rotation.y=c*1.05+r,h.castShadow=!0,h.customDepthMaterial=new is({depthPacking:Cr,map:l,alphaTest:.5,side:Et}),o.add(h)}return n.add(o),o}function oi(n,e,t,i,s,r,o=3,a=0){let l=ve(1600,900,h=>{h.clearRect(0,0,1600,900);let d=Ne(o);for(let u=0;u<3;u++)for(let p=-40;p<1620;){let g=50+d()*110,E=180+d()*(u===0?660:400);if(h.fillStyle=s[u],h.fillRect(p,900-E,g,E),d()<.2&&h.fillRect(p+g/2-4,900-E-60,8,60),r)for(let m=900-E+12;m<890;m+=18)for(let f=p+8;f<p+g-8;f+=14)d()<.34&&(h.fillStyle=u===2?"#FFD999":u===1?"#E9C28C":"#A98BA0",h.fillRect(f,m,7,10));p+=g*.92}}),c=new O(new Ae(t,i),new nt({map:l,transparent:!0,fog:!1,depthWrite:!1}));return c.position.set(0,a+i/2,e),n.add(c),c}function ht(n,e,t,i,s){let r=ve(8,512,a=>{let l=a.createLinearGradient(0,0,0,512);s.forEach(([c,h])=>l.addColorStop(c,h)),a.fillStyle=l,a.fillRect(0,0,8,512)}),o=new O(new Ae(t,i),new nt({map:r,fog:!1,depthWrite:!1}));return o.position.set(0,i*.32,e),n.add(o),o}var b=(n,e={})=>new Ce({color:n,roughness:.85,...e});function Fe(n,e,t,i={}){let s=new O(new Ae(e,t),new nt({map:n,alphaTest:i.blend?0:.5,transparent:!!i.blend,depthWrite:!i.blend,side:Et,color:i.color||"#fff",blending:i.add?Rn:Ki,fog:i.fog??!0}));return i.shadow&&(s.castShadow=!0,s.customDepthMaterial=new is({depthPacking:Cr,map:n,alphaTest:.5,side:Et})),s}function Bs(n,e){n.rotation.y=Math.atan2(e.position.x-n.position.x,e.position.z-n.position.z)}var kh={value:0};function Ja(n="#8E3D30",e=4,t=3){let i=ve(1024,1024,s=>{s.fillStyle="#4b2a24",s.fillRect(0,0,1024,1024);let r=Ne(7);for(let o=0,a=0;a<1024;a+=34,o++)for(let l=o%2*-44;l<1024;l+=88){let c=r();s.fillStyle=n,s.globalAlpha=.78+c*.22,s.fillRect(l+2,a+2,84,30),s.globalAlpha=1,s.fillStyle=`rgba(255,${200+c*40},${180+c*30},${c*.1})`,s.fillRect(l+2,a+2,84,6),c>.84&&(s.fillStyle="rgba(30,8,4,.2)",s.fillRect(l+2,a+2,84,30))}});return i.wrapS=i.wrapT=rn,i.repeat.set(e,t),i}function v0(n="#A59383",e=12,t=12){let i=ve(1024,1024,s=>{s.fillStyle="#5e5248",s.fillRect(0,0,1024,1024);let r=Ne(3);for(let o=0;o<16;o++)for(let a=-1;a<17;a++){let l=r();s.fillStyle=n,s.globalAlpha=.7+l*.3,s.beginPath(),s.roundRect(a*64+o%2*32+3,o*64+3,58,58,12),s.fill(),s.globalAlpha=1}});return i.wrapS=i.wrapT=rn,i.repeat.set(e,t),i}var _0=[["#36AEA2","#1F7C72","#1A1A22",null],["#F08AA0","#C75C78","#3a2418","long"],["#F7CC58","#D39E2C","#2a1b18","afro"],["#6F97C4","#4C729F","#D9B65A","bob"],["#F2A766","#CC7E3C","#1d1412","bun"],["#A98AD0","#7E5FA8","#6b3d20","long"],["#8EAE86","#688A60","#111",null],["#E9E5DA","#C8C3B5","#8a4a26","bob"]];function QE(n,e){let[t,i,s,r]=_0[n];return ve(192,384,o=>{o.translate(96,0),o.lineCap="round",o.strokeStyle="#17161e",o.lineWidth=11,o.beginPath(),o.moveTo(-20,270),o.lineTo(-22,378),o.moveTo(20,270),o.lineTo(22,378),o.stroke(),o.strokeStyle=t,o.lineWidth=22,o.beginPath(),e?(o.moveTo(-44,148),o.lineTo(-72,58),o.moveTo(44,148),o.lineTo(72,58)):(o.moveTo(-46,148),o.lineTo(-64,240),o.moveTo(46,148),o.lineTo(64,240)),o.stroke(),o.fillStyle=t,o.beginPath(),o.roundRect(-52,128,104,150,24),o.fill(),o.fillStyle=i,o.fillRect(-52,250,104,26),o.fillStyle="#1C1C25",o.beginPath(),e?(o.arc(-74,50,13,0,7),o.arc(74,50,13,0,7)):(o.arc(-66,246,12,0,7),o.arc(66,246,12,0,7)),o.fill(),(r==="long"||r==="bob")&&(o.fillStyle=s,o.beginPath(),o.roundRect(-64,22,128,r==="long"?160:110,54),o.fill()),r==="afro"&&(o.fillStyle=s,[[-52,58],[-36,28],[0,18],[36,28],[52,58]].forEach(([l,c])=>{o.beginPath(),o.arc(l,c,34,0,7),o.fill()})),r==="bun"&&(o.fillStyle=s,o.beginPath(),o.arc(0,14,22,0,7),o.fill());let a=o.createRadialGradient(4,56,2,0,76,58);a.addColorStop(0,"#2A2C40"),a.addColorStop(1,"#0A0A12"),o.fillStyle=a,o.beginPath(),o.arc(0,76,54,0,7),o.fill(),o.fillStyle="#F6EFE6",o.beginPath(),o.ellipse(-20,76,8,12,0,0,7),o.ellipse(20,76,8,12,0,0,7),o.fill(),r&&(o.fillStyle=s,o.beginPath(),o.moveTo(-54,70),o.quadraticCurveTo(-52,22,0,22),o.quadraticCurveTo(52,22,54,70),o.quadraticCurveTo(26,40,0,40),o.quadraticCurveTo(-26,40,-54,70),o.fill())})}function Gh(n,e,t={}){let{h:i=1.75,jump:s=.1,tint:r="#ffffff",seed:o=2}=t,a=Ne(o),l={};for(let c of e){let h=Math.floor(a()*_0.length)+(a()<(t.raised??.5)?100:0);(l[h]=l[h]||[]).push(c)}for(let c in l){let h=c>=100,d=c%100,u=QE(d,h),p=new nt({map:u,alphaTest:.5,side:Et,color:r});p.onBeforeCompile=m=>{m.uniforms.uT=kh,m.vertexShader=`uniform float uT;
`+m.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
 vec4 ip = instanceMatrix * vec4(0.,0.,0.,1.); float ph = ip.x*3.1 + ip.z*2.3; transformed.y += abs(sin(uT*${(5+d%3).toFixed(1)} + ph))*${s.toFixed(3)}/${i.toFixed(2)};`)};let g=new Ca(new Ae(i*.5,i),p,l[c].length),E=new qt;l[c].forEach((m,f)=>{E.position.set(m[0],(m[2]||0)+i/2,m[1]),E.rotation.y=m[3]||0;let _=.92+a()*.16;E.scale.set(_,_,1),E.updateMatrix(),g.setMatrixAt(f,E.matrix)}),g.frustumCulled=!1,n.add(g)}}function vn(n,e=2600,t=300,i=1){let s=Ne(i),r=new Float32Array(e*3),o=new Float32Array(e*3);for(let d=0;d<e;d++){let u=s()*2-1,p=s()*6.283,g=Math.sqrt(1-u*u);r[d*3]=g*Math.cos(p)*t,r[d*3+1]=u*t,r[d*3+2]=g*Math.sin(p)*t;let E=.55+s()*.45,m=s();o[d*3]=E*(m>.8?1:.9),o[d*3+1]=E*.94,o[d*3+2]=E*(m<.2?.8:1)}let a=new Wt;a.setAttribute("position",new Kt(r,3)),a.setAttribute("color",new Kt(o,3));let l=ve(32,32,d=>{let u=d.createRadialGradient(16,16,0,16,16,16);u.addColorStop(0,"#fff"),u.addColorStop(.35,"#ffffffaa"),u.addColorStop(1,"#ffffff00"),d.fillStyle=u,d.fillRect(0,0,32,32)}),c=new br({map:l,size:3.2,vertexColors:!0,transparent:!0,depthWrite:!1,sizeAttenuation:!1,fog:!1}),h=new ao(a,c);return h.frustumCulled=!1,n.add(h),h}function ai(n,e,t="#6D4A33"){let i=ve(1024,1024,r=>{r.fillStyle=t,r.fillRect(0,0,1024,1024);let o=Ne(8);for(let a=0;a<11;a++){let l=a*94;r.fillStyle=`rgba(${o()<.5?"255,220,180":"20,10,5"},${o()*.13})`,r.fillRect(l,0,94,1024),r.fillStyle="#21140D",r.fillRect(l,0,4,1024);let c=o()*300;for(;c<1024;)r.fillRect(l,c,94,3),c+=340+o()*300}});i.wrapS=i.wrapT=rn,i.repeat.set(n/5,e/5);let s=new O(new Ae(n,e),new Ce({map:i,roughness:.55}));return s.rotation.x=-Math.PI/2,s.receiveShadow=!0,s}function yi(n,e,t="#D6D3C9",i="#C8C5BA",s=8){let r=ve(256,256,a=>{a.fillStyle=t,a.fillRect(0,0,256,256),a.fillStyle=i,a.fillRect(0,0,128,128),a.fillRect(128,128,128,128)});r.wrapS=r.wrapT=rn,r.repeat.set(n/s*4,e/s*4);let o=new O(new Ae(n,e),new Ce({map:r,roughness:.3,metalness:.05}));return o.rotation.x=-Math.PI/2,o.receiveShadow=!0,o}function Ns(n,e,t="#FFD9A0",i=.22){let s=ve(64,256,o=>{let a=o.createLinearGradient(0,0,0,256);a.addColorStop(0,t+"FF"),a.addColorStop(1,t+"00"),o.fillStyle=a,o.fillRect(0,0,64,256);let l=o.createLinearGradient(0,0,64,0);l.addColorStop(0,"#000000"),l.addColorStop(.25,"#00000000"),l.addColorStop(.75,"#00000000"),l.addColorStop(1,"#000000"),o.globalCompositeOperation="destination-out",o.fillStyle=l,o.fillRect(0,0,64,256)});return new O(new Ae(n,e),new nt({map:s,transparent:!0,opacity:i,depthWrite:!1,blending:Rn,side:Et,fog:!1}))}function Vh(n,e,t,i=1,s="#C76B4A",r="#3E8A52"){let o=new ce,a=new O(new Ke(.3,.22,.5,20),b(s));a.position.y=.25,a.castShadow=!0,o.add(a);let l=ve(256,256,h=>{h.clearRect(0,0,256,256);for(let d=0;d<9;d++)h.save(),h.translate(128,250),h.rotate((d-4)*.3),h.fillStyle=d%2?r:"#5BA868",h.beginPath(),h.ellipse(0,-110,20,110,0,0,7),h.fill(),h.restore()}),c=Fe(l,1.5,1.5,{shadow:!0});return c.position.y=1.15,o.add(c),o.leaf=c,o.position.set(n,e,t),o.scale.setScalar(i),o}function Wh(n,e,t,i="#2A1E18"){let s=new ce;s.add(R(n+.08,e+.08,.04,i,0,0,0));let r=ve(Math.round(n*400),Math.round(e*400),t),o=new O(new Ae(n,e),new Ce({map:r,roughness:.8}));return o.position.z=.025,s.add(o),s}function Lt(n,e,t,i=1.2){return new O(new Ae(n,e),new Ce({color:"#000",emissive:t,emissiveIntensity:i}))}function je(n,e,t,i=10,s=60){let r=new Ei(n,e);return r.position.set(...t),r.castShadow=!0,r.shadow.mapSize.set(1024,1024),Object.assign(r.shadow.camera,{left:-i,right:i,top:i,bottom:-i,far:s}),r.shadow.bias=-6e-4,r.shadow.radius=4,r}function go(n,e={}){let{wall:t="#9A4632",night:i=!1,floor:s="#7A5236",win:r=!0}=e;n.fog=new xe(i?"#2A1E2E":"#E9B48C",i?.02:.008),r&&(ht(n,-60,220,120,i?[[0,"#0E1030"],[.6,"#2A2252"],[1,"#6B3A62"]]:[[0,"#7FA6D8"],[.55,"#F2C4A0"],[1,"#FFD9A8"]]),oi(n,-50,220,30,i?["#2F2748","#3B2F54","#4A3A5E"]:["#C48A86","#B07A80","#9C6E7A"],i,4));let o=Ja(t,2,2),a=()=>new Ce({map:o,roughness:.95});if(r){[[-5.4,2.6,7,5.2],[5.4,2.6,7,5.2],[0,.5,3.8,1],[0,4.7,3.8,.8]].forEach(([p,g,E,m])=>n.add(R(E,m,.3,a(),p,g,-3)));for(let[p,g,E,m]of[[-1.9,2.6,.12,3.4],[1.9,2.6,.12,3.4],[0,2.6,.07,3.3],[0,4.3,3.9,.12],[0,1.05,4,.16]])n.add(R(E,m,.2,"#EDE7DA",p,g,-2.95))}else n.add(R(18,5.2,.3,a(),0,2.6,-3));n.add(ai(18,12,s));let l=Wh(.9,1.2,p=>{p.fillStyle="#F2E6CC",p.fillRect(0,0,360,480),p.fillStyle="#E8667F",p.beginPath(),p.arc(180,200,110,0,7),p.fill(),p.fillStyle="#36AEA2",p.fillRect(0,330,360,150)});l.position.set(-3.6,2.8,-2.83),n.add(l),n.add(Vh(4.4,0,-2.4,1.1)),n.add(Vh(-5,0,-2.4,.9,"#36AEA2")),n.add(new Re(i?"#6E74C0":"#B9C8F0","#6A4430",i?.7:.9));let c=je(i?"#9FB0FF":"#FFD6A0",i?.9:2.4,[3,7,-10],9,40);c.target.position.set(-1,0,0),n.add(c,c.target);let h=new it("#FFB56E",i?10:4,8,1.6);h.position.set(3.4,2.2,-1.2),n.add(h);let d=new O(new Ke(.18,.3,.34,24),new Ce({color:"#F6DDA4",emissive:"#FFB866",emissiveIntensity:1.2}));d.position.set(3.6,1.9,-1.9),n.add(d),n.add(R(.04,1.7,.04,"#222",3.6,.85,-1.9));let u=Ye("#FFC07A",1.2,.35);u.position.copy(d.position),n.add(u)}var A0=[{name:"PANADER\xCDA",bg:"#6C4A2C",fg:"#FFE7B8",awning:"#3E7A5C"},{name:"FARMACIA",bg:"#2F6E5A",fg:"#F0FFF4"},{name:"LUNA CAF\xC9",bg:"#A85A36",fg:"#FFE3C8",awning:"#D94F58",font:"Caveat",size:120},{name:"LIBROS",bg:"#3A4F7A",fg:"#FFF0C8"},{name:"FLORES",bg:"#B04463",fg:"#FFF2E2",awning:"#EFEDE0"}];function Eo(n,e={}){let{night:t=!1,seed:i=0,lit:s=.25,dusk:r=!1}=e;n.fog=new xe(t?"#2A2240":r?"#C88A7A":"#F7CFA4",t?.012:.009),ht(n,-170,500,240,t?[[0,"#0E1030"],[.5,"#2A2252"],[.8,"#5B3460"],[1,"#8A4A6A"]]:r?[[0,"#3A3A78"],[.5,"#B86A88"],[.8,"#F29A6A"],[1,"#FFC88A"]]:[[0,"#6FA7D8"],[.5,"#CFD8DC"],[.8,"#FBD7A6"],[1,"#FFE7BE"]]),oi(n,-150,420,90,t?["#2F2748","#3B2F54","#4A3A5E"]:["#B89AA0","#A98E9A","#9A8592"],t||r,21),Za(n,t||r);let o=6,a=0;for(;o>-90;){let l=7+a*37%5;n.add(rs(100+a+i,{x:13,z:o-l/2,w:8,d:l,floors:4+a%3,side:-1,night:t||r,lit:s,shop:A0[(a+i)%5]})),n.add(rs(200+a+i,{x:-13,z:o-l/2,w:8,d:l,floors:5+a%3,side:1,night:t||r,lit:s,shop:A0[(a+2+i)%5]})),o-=l,a++}for(let l=0;l<6;l++)kt(n,5.2,-6-l*11,1.2,["#3E5F3A","#4F7A44","#6E9A50","#D7D282"],l),$a(n,-5,-3-l*12,1,t||r);n.add(new Re(t?"#8E86C8":"#E9EEFF","#6A5A4A",t?.8:1.05)),n.add(je(t?"#B9B0F0":r?"#FFB080":"#FFD29A",t?1:2.8,[-20,16,10],30,90))}var ne=(n,e,t,i,s,r,o=0)=>{n.fillStyle=r,n.beginPath(),n.ellipse(e,t,i,s,o,0,7),n.fill()},ot=(n,e,t,i,s,r,o)=>{n.fillStyle=o,n.beginPath(),n.roundRect(e,t,i,s,r),n.fill()},vt=(n,e,t)=>{n.fillStyle=t,n.beginPath(),n.moveTo(...e[0]);for(let i of e.slice(1))n.lineTo(...i);n.closePath(),n.fill()},Dr={perro:[520,440,n=>{ne(n,250,300,150,90,"#C98E5E"),ne(n,250,330,100,50,"#E9C49A"),ot(n,120,330,34,100,14,"#B5784A"),ot(n,340,330,34,100,14,"#B5784A"),ot(n,180,340,34,90,14,"#C98E5E"),ot(n,300,340,34,90,14,"#C98E5E"),n.strokeStyle="#B5784A",n.lineWidth=22,n.lineCap="round",n.beginPath(),n.moveTo(390,260),n.quadraticCurveTo(470,200,450,150),n.stroke(),ne(n,180,170,110,100,"#C98E5E"),ne(n,100,140,40,80,"#8A5A34",-.3),ne(n,262,140,40,80,"#8A5A34",.3),ne(n,180,220,54,40,"#E9C49A"),ne(n,180,200,22,16,"#1A1A24")},[.3,.34],22,1],viejo:[520,440,n=>{ne(n,250,300,150,90,"#C9A07E"),ne(n,250,330,100,50,"#EEDCC4"),ot(n,120,330,34,100,14,"#B5906A"),ot(n,340,330,34,100,14,"#B5906A"),ot(n,180,340,34,90,14,"#C9A07E"),ot(n,300,340,34,90,14,"#C9A07E"),ne(n,180,170,110,100,"#C9A07E"),ne(n,100,140,40,80,"#9A7A5A",-.3),ne(n,262,140,40,80,"#9A7A5A",.3),ne(n,180,220,60,46,"#F4F0E8"),ne(n,180,200,22,16,"#1A1A24")},[.3,.34],22,1],gato:[420,440,n=>{ne(n,220,320,110,90,"#E9853A"),n.strokeStyle="#E9853A",n.lineWidth=24,n.lineCap="round",n.beginPath(),n.moveTo(320,340),n.quadraticCurveTo(400,280,370,180),n.stroke(),ne(n,180,170,100,92,"#E9853A"),vt(n,[[96,120],[110,30],[160,100]],"#E9853A"),vt(n,[[264,120],[250,30],[200,100]],"#E9853A"),n.strokeStyle="#C96A22",n.lineWidth=9;for(let e=0;e<3;e++)n.beginPath(),n.moveTo(150+e*30,90),n.lineTo(160+e*30,120),n.stroke();ne(n,180,215,16,11,"#E8667F"),n.strokeStyle="#FFFFFF",n.lineWidth=4;for(let e of[-1,1])for(let t=0;t<3;t++)n.beginPath(),n.moveTo(180+e*30,220+t*8),n.lineTo(180+e*110,205+t*18),n.stroke()},[.43,.34],20,.8],loro:[300,440,n=>{ne(n,150,260,80,130,"#3FA34D"),ne(n,150,140,80,80,"#3FA34D"),vt(n,[[150,380],[110,440],[190,440]],"#2F6E9A"),ne(n,150,300,56,70,"#F2C14E"),vt(n,[[200,150],[250,180],[205,200]],"#2A2A34"),ne(n,120,90,26,18,"#C9361F")},[.48,.3],18,.5],paloma:[360,300,n=>{ne(n,170,190,130,80,"#8D94A8"),ne(n,90,110,56,52,"#7A8296"),ne(n,120,150,40,26,"#5FA898",.3),vt(n,[[40,110],[0,122],[40,128]],"#E9853A"),n.strokeStyle="#E9853A",n.lineWidth=8,n.beginPath(),n.moveTo(160,260),n.lineTo(150,296),n.moveTo(200,260),n.lineTo(210,296),n.stroke(),ne(n,280,170,70,30,"#6A7084",-.3)},[.25,.34],14,.5],mosquito:[300,240,n=>{ne(n,150,130,70,22,"#3A3040"),ne(n,90,120,34,30,"#3A3040"),n.strokeStyle="#3A3040",n.lineWidth=5,n.beginPath(),n.moveTo(60,120),n.lineTo(0,130),n.stroke();for(let e=0;e<3;e++)n.beginPath(),n.moveTo(130+e*30,145),n.lineTo(110+e*34,230),n.stroke();ne(n,150,70,60,26,"rgba(220,240,255,.8)",-.4),ne(n,190,76,50,22,"rgba(220,240,255,.7)",.3)},[.28,.48],12,.25],pradera:[300,380,n=>{ne(n,150,260,90,120,"#C9A06A"),ne(n,150,290,56,80,"#EBD3A8"),ne(n,150,120,74,70,"#C9A06A"),ne(n,100,70,18,14,"#A87A44"),ne(n,200,70,18,14,"#A87A44"),ne(n,150,156,14,10,"#1A1A24"),ot(n,92,200,26,70,12,"#A87A44"),ot(n,182,200,26,70,12,"#A87A44")},[.5,.28],14,.45],abeja:[300,240,n=>{ne(n,160,140,100,64,"#F2C14E"),n.fillStyle="#1A1A24";for(let e=0;e<3;e++)n.fillRect(120+e*40,80,20,120);ne(n,64,130,46,44,"#1A1A24"),ne(n,140,60,60,34,"rgba(230,246,255,.85)",-.4),ne(n,200,64,54,30,"rgba(230,246,255,.8)",.3),vt(n,[[258,140],[296,134],[258,150]],"#1A1A24")},[.2,.5],13,.35],delfin:[600,300,n=>{ne(n,300,160,250,80,"#6F9FC4"),ne(n,300,200,200,40,"#D8E8F4"),vt(n,[[60,150],[0,168],[62,178]],"#6F9FC4"),vt(n,[[300,90],[360,20],[370,100]],"#5A88AC"),vt(n,[[530,150],[600,90],[590,160],[600,230],[530,175]],"#5A88AC"),vt(n,[[260,220],[230,290],[300,230]],"#5A88AC")},[.2,.45],16,2],elefante:[600,520,n=>{ne(n,320,280,220,150,"#9A9AA8");for(let e of[170,240,390,460])ot(n,e,360,70,160,20,"#8A8A98");ne(n,170,200,120,110,"#9A9AA8"),ne(n,270,190,100,130,"#8A8A9A",.2),n.strokeStyle="#9A9AA8",n.lineWidth=46,n.lineCap="round",n.beginPath(),n.moveTo(110,260),n.quadraticCurveTo(60,380,110,460),n.stroke(),vt(n,[[130,280],[110,330],[150,300]],"#F4F0E4")},[.24,.34],20,3],cachalote:[900,320,n=>{ot(n,20,60,560,220,110,"#4A5A6E"),ne(n,600,180,220,90,"#4A5A6E"),vt(n,[[780,170],[900,90],[870,180],[900,270],[780,200]],"#3E4C60"),ot(n,80,250,380,20,10,"#6A7A8E")},[.12,.45],20,8],pollo:[320,360,n=>{ne(n,170,230,120,100,"#FBF7EC"),ne(n,120,120,66,64,"#FBF7EC"),vt(n,[[100,50],[120,20],[140,52],[160,24],[170,62]],"#E2483A"),vt(n,[[60,120],[20,132],[60,144]],"#F2C14E"),ne(n,74,160,12,20,"#E2483A"),n.strokeStyle="#F2C14E",n.lineWidth=9,n.beginPath(),n.moveTo(150,320),n.lineTo(140,360),n.moveTo(200,320),n.lineTo(210,360),n.stroke(),ne(n,270,200,40,70,"#EDE6D4",.4)},[.36,.32],14,.5],vaca:[620,460,n=>{ne(n,340,220,230,130,"#FBF7EC");for(let[e,t,i]of[[300,180,50],[420,250,40],[240,260,34]])ne(n,e,t,i,i*.8,"#2A2A34");for(let e of[190,260,410,480])ot(n,e,300,50,150,16,"#EDE6D4");ne(n,140,160,100,92,"#FBF7EC"),ne(n,120,220,70,46,"#F2B4C0"),vt(n,[[80,80],[60,40],[104,72]],"#C9A06A"),vt(n,[[200,80],[220,40],[176,72]],"#C9A06A")},[.2,.28],18,2.2],cerdo:[480,360,n=>{ne(n,250,200,200,120,"#F2A8B8");for(let e of[110,170,300,360])ot(n,e,260,44,90,14,"#E890A4");ne(n,120,170,34,24,"#E06A84"),vt(n,[[160,70],[150,30],[196,70]],"#E890A4"),vt(n,[[250,70],[270,30],[226,70]],"#E890A4"),n.fillStyle="#B04A64",n.beginPath(),n.arc(110,170,6,0,7),n.arc(130,170,6,0,7),n.fill()},[.3,.34],16,1.4],gorila:[460,520,n=>{ne(n,230,320,170,170,"#2E2E38"),ne(n,230,160,110,104,"#2E2E38"),ne(n,230,190,70,56,"#5A5A68"),ot(n,40,260,70,240,30,"#2E2E38"),ot(n,350,260,70,240,30,"#2E2E38")},[.5,.28],16,1.6],jirafa:[400,900,n=>{ot(n,160,120,70,560,30,"#F2C14E"),ne(n,230,700,150,110,"#F2C14E");for(let e of[120,180,290,340])ot(n,e,760,30,140,12,"#E2A83A");ne(n,190,110,80,60,"#F2C14E"),ot(n,160,20,12,50,6,"#8A5A2A"),ot(n,210,20,12,50,6,"#8A5A2A"),n.fillStyle="#B5784A";for(let e=0;e<18;e++)n.beginPath(),n.ellipse(170+e%3*25,200+e*30,12,16,0,0,7),n.fill()},[.47,.1],14,1.8],lobo:[560,420,n=>{ne(n,300,260,190,100,"#8A8E9A"),ne(n,300,300,120,50,"#C8CCD4");for(let e of[160,220,360,420])ot(n,e,320,36,100,14,"#7A7E8A");ne(n,140,170,96,90,"#8A8E9A"),vt(n,[[80,120],[90,40],[130,100]],"#7A7E8A"),vt(n,[[200,120],[190,40],[150,100]],"#7A7E8A"),vt(n,[[60,190],[10,210],[70,230]],"#8A8E9A"),n.strokeStyle="#8A8E9A",n.lineWidth=30,n.lineCap="round",n.beginPath(),n.moveTo(480,250),n.quadraticCurveTo(540,300,530,370),n.stroke()},[.26,.38],18,1.4],leon:[600,460,n=>{ne(n,340,280,200,110,"#E2A83A");for(let e of[200,260,400,460])ot(n,e,330,44,120,16,"#D29A30");ne(n,170,200,150,150,"#A8642A"),ne(n,170,210,96,92,"#E2A83A"),ne(n,170,260,30,20,"#7A4A2A"),n.strokeStyle="#E2A83A",n.lineWidth=16,n.beginPath(),n.moveTo(530,250),n.quadraticCurveTo(600,300,580,380),n.stroke()},[.28,.4],18,2],pulpo:[420,420,n=>{ne(n,210,150,130,120,"#E8667F"),n.strokeStyle="#E8667F",n.lineWidth=26,n.lineCap="round";for(let e=0;e<8;e++)n.beginPath(),n.moveTo(110+e*28,240),n.quadraticCurveTo(80+e*36+Math.sin(e)*40,340,60+e*44,400),n.stroke()},[.5,.34],18,1],hormiga:[300,300,n=>{ne(n,230,190,60,46,"#3A2A2A"),ne(n,150,180,40,34,"#3A2A2A"),ne(n,80,150,50,46,"#3A2A2A"),n.strokeStyle="#3A2A2A",n.lineWidth=7;for(let e=0;e<3;e++)n.beginPath(),n.moveTo(140+e*20,200),n.lineTo(110+e*40,280),n.stroke();n.beginPath(),n.moveTo(70,110),n.lineTo(40,40),n.moveTo(90,108),n.lineTo(110,40),n.stroke()},[.27,.5],13,.35],ciervo:[520,520,n=>{ne(n,300,300,170,80,"#B5784A"),ne(n,300,330,110,40,"#E9C49A");for(let e of[170,220,360,410])ot(n,e,330,26,180,12,"#9A6238");ot(n,120,120,60,200,26,"#B5784A"),ne(n,130,110,70,56,"#B5784A"),ne(n,80,130,30,22,"#3A2A22"),vt(n,[[150,70],[200,30],[170,90]],"#9A6238"),n.strokeStyle="#7A5230",n.lineWidth=12,n.lineCap="round",n.beginPath(),n.moveTo(120,60),n.lineTo(90,10),n.moveTo(105,35),n.lineTo(60,25),n.moveTo(150,60),n.lineTo(180,8),n.moveTo(165,32),n.lineTo(210,22),n.stroke(),ne(n,470,270,26,20,"#F4F0E4")},[.25,.2],18,1.4],alce:[600,560,n=>{ne(n,340,300,200,110,"#5A3E2A");for(let e of[190,250,400,460])ot(n,e,360,34,190,14,"#4A3222");ot(n,110,150,90,200,36,"#5A3E2A"),ne(n,110,160,80,66,"#5A3E2A"),ne(n,60,200,54,46,"#6A4A34"),ne(n,40,200,12,10,"#2A1A12"),n.fillStyle="#C8AE84",n.beginPath(),n.ellipse(70,70,70,30,-.3,0,7),n.ellipse(170,70,70,30,.3,0,7),n.fill()},[.2,.28],16,2],jabali:[480,340,n=>{ne(n,250,190,190,110,"#5E4A3E"),n.fillStyle="#4A3A30";for(let e=0;e<9;e++)vt(n,[[150+e*22,90],[160+e*22,60],[172+e*22,92]],"#4A3A30");for(let e of[110,170,300,360])ot(n,e,250,40,90,14,"#4A3A30");ne(n,90,200,70,60,"#5E4A3E"),ne(n,30,220,34,28,"#7A6050"),vt(n,[[50,240],[30,200],[62,236]],"#F4F0E4"),vt(n,[[100,130],[90,100],[126,136]],"#4A3A30")},[.18,.5],14,1.2],caballo:[620,560,n=>{ne(n,330,280,200,100,"#8A5A3A");for(let e of[190,240,400,450])ot(n,e,320,34,230,14,"#7A4A2E");ot(n,120,100,80,220,36,"#8A5A3A"),n.save(),n.translate(110,110),n.rotate(-.5),ot(n,-50,-40,160,66,30,"#8A5A3A"),n.restore(),n.fillStyle="#2A1A12",n.fillRect(170,70,30,200),vt(n,[[110,60],[120,20],[140,64]],"#7A4A2E"),n.strokeStyle="#2A1A12",n.lineWidth=26,n.lineCap="round",n.beginPath(),n.moveTo(520,250),n.quadraticCurveTo(580,320,560,420),n.stroke()},[.2,.2],16,2.2]},Qa={perro:[[.35,.39],.3],viejo:[[.35,.39],.3],gato:[[.43,.39],.34],loro:[[.5,.32],.4],paloma:[[.25,.37],.24],mosquito:[[.3,.5],.2],pradera:[[.5,.3],.36],abeja:[[.21,.54],.24],delfin:[[.2,.5],.12],elefante:[[.28,.38],.2],cachalote:[[.12,.45],.06],pollo:[[.37,.33],.32],vaca:[[.22,.33],.2],cerdo:[[.3,.4],.18],gorila:[[.5,.29],.3],jirafa:[[.47,.12],.3],lobo:[[.25,.4],.22],leon:[[.28,.44],.22],pulpo:[[.5,.34],.4],hormiga:[[.27,.48],.26]};Object.assign(Qa,{ciervo:[[.24,.2],.14],alce:[[.18,.3],.12],jabali:[[.17,.55],.14],caballo:[[.22,.2],.1]});for(let n in Qa)Dr[n][3]=Qa[n][0],Dr[n][4]=Qa[n][1];Dr.pato=[380,400,n=>{ne(n,210,280,150,100,"#F6D44A"),ne(n,290,250,70,50,"#E8BC30",-.4),ne(n,130,140,86,82,"#F6D44A"),ne(n,40,160,56,22,"#F2913A"),ne(n,46,172,46,14,"#E07A2A"),n.strokeStyle="#F2913A",n.lineWidth=14,n.lineCap="round",n.beginPath(),n.moveTo(180,370),n.lineTo(170,398),n.moveTo(240,370),n.lineTo(250,398),n.stroke(),vt(n,[[340,250],[380,220],[360,280]],"#F6D44A")},[.36,.3],.3,1];Dr.dragon=[480,440,n=>{ne(n,250,300,140,110,"#7BC86A"),ne(n,250,330,90,70,"#D8F0B8");for(let e=0;e<4;e++)vt(n,[[170+e*50,200],[190+e*50,150],[210+e*50,200]],"#F2913A");ne(n,380,210,80,50,"#9AD884",-.6),ne(n,130,160,100,92,"#7BC86A"),ne(n,70,190,46,34,"#9AD884"),vt(n,[[100,80],[90,30],[130,74]],"#F2913A"),vt(n,[[160,76],[170,26],[190,80]],"#F2913A"),ot(n,160,380,40,56,18,"#6AB05A"),ot(n,290,380,40,56,18,"#6AB05A"),n.strokeStyle="#7BC86A",n.lineWidth=30,n.lineCap="round",n.beginPath(),n.moveTo(380,330),n.quadraticCurveTo(470,360,450,280),n.stroke(),n.strokeStyle="rgba(0,0,0,.25)",n.lineWidth=4,n.setLineDash([10,8]),n.beginPath(),n.moveTo(250,200),n.lineTo(250,400),n.stroke()},[.28,.34],.3,1.6];Dr.caballoB=[620,560,n=>{ne(n,330,280,200,100,"#F4F0E8");for(let e of[190,240,400,450])ot(n,e,320,34,230,14,"#E4DED2");ot(n,120,100,80,220,36,"#F4F0E8"),n.save(),n.translate(110,110),n.rotate(-.5),ot(n,-50,-40,160,66,30,"#F4F0E8"),n.restore(),n.fillStyle="#E8D8A8",n.fillRect(170,70,30,200),vt(n,[[110,60],[120,20],[140,64]],"#E4DED2"),n.strokeStyle="#E8D8A8",n.lineWidth=26,n.lineCap="round",n.beginPath(),n.moveTo(520,250),n.quadraticCurveTo(580,320,560,420),n.stroke()},[.2,.2],.1,2.2];var Ka={},M0=n=>Ka["e"+n]||(Ka["e"+n]=ve(128,64,e=>{e.clearRect(0,0,128,64),e.fillStyle="#FBF7EC",e.strokeStyle="#FBF7EC",e.lineWidth=9,e.lineCap="round";for(let t of[32,96])if(n==="happy")e.beginPath(),e.arc(t,40,16,Math.PI*1.1,Math.PI*1.9),e.stroke();else if(n==="flat"||n==="shut")e.beginPath(),e.moveTo(t-16,34),e.lineTo(t+16,34),e.stroke();else if(n==="sad")e.beginPath(),e.ellipse(t,36,13,16,0,0,7),e.fill(),e.fillStyle="#1A1A24",e.fillRect(t-16,18,32,10),e.fillStyle="#FBF7EC";else{let i=n==="wide"?17:13;e.beginPath(),e.ellipse(t,32,i,i*1.25,0,0,7),e.fill(),n==="look"&&(e.fillStyle="#1A1A24",e.beginPath(),e.arc(t+5,34,5,0,7),e.fill(),e.fillStyle="#FBF7EC")}}));function S0(n,e={}){let[t,i,s,r,o,a]=Dr[n],l=Ka[n]||(Ka[n]=ve(t,i,s)),c=a*i/t,h=new ce,d=new ce;h.add(d);let u=Fe(l,a,c,{shadow:!0});u.position.y=c/2,d.add(u);let p=new O(new Ae(o*a,o*a*.5),new nt({map:M0("open"),transparent:!0,depthWrite:!1}));p.position.set(-a/2+r[0]*a,c-r[1]*c,.01),d.add(p);let g=new O(new ln(a*.45,24),new nt({color:"#000",transparent:!0,opacity:.22,depthWrite:!1}));g.rotation.x=-Math.PI/2,g.scale.y=.35,g.position.y=.01,h.add(g),e.flip&&(d.scale.x=-1);let E={root:h,card:d,kind:n,h:c,w:a,eye(m){p.material.map=M0(m)},face(m){let f=new P;h.getWorldPosition(f),d.rotation.y=Math.atan2(m.position.x-f.x,m.position.z-f.z)},talk(m,f=!0){u.position.y=c/2+(f?Math.abs(Math.sin(m*14))*c*.015:0),d.scale.y=f?1+Math.sin(m*14)*.012:1},place(m,f,_=0,v=1){return h.position.set(m,_,f),h.scale.setScalar(v),E}};return E}var os=(n,e,t=200,i=200,s)=>{let r=new O(new Ae(t,i),s?new Ce({map:s,roughness:.95}):b(e,{roughness:1}));return r.rotation.x=-Math.PI/2,r.receiveShadow=!0,n.add(r),r},Xh=(n,e=1)=>{n.add(new Re("#E9EEFF","#B08A6A",1.05*e)),n.add(je("#FFD29A",3*e,[-14,16,10],20,70))},me={sala:(n,e)=>go(n,{wall:e.wall||"#2F6E68",night:e.night,win:e.win??!0}),quarto:(n,e)=>{go(n,{wall:"#9A4632",night:e.night}),n.add(R(2.4,.45,3.2,b("#6B4A33"),-1.7,.25,-1.4)),n.add(R(2.3,.3,3,b("#F3EEE4"),-1.7,.6,-1.4)),n.add(R(2.38,.22,2,b("#4A86C7",{roughness:.9}),-1.7,.8,-.7)),n.add(R(.8,.22,.5,b("#FFFFFF"),-1.7,.82,-2.5))},rua:(n,e)=>Eo(n,{seed:e.seed||0,night:e.night,dusk:e.dusk}),parque:(n,e)=>{n.fog=new xe(e.dusk?"#E8A880":"#F2D8B8",.02),ht(n,-100,500,200,e.dusk?[[0,"#3A3A78"],[.5,"#B86A88"],[.8,"#F29A6A"],[1,"#FFC88A"]]:[[0,"#6FA7D8"],[.6,"#CFD8DC"],[1,"#FFE7BE"]]),oi(n,-80,400,40,["#B89AA0","#A98E9A","#9A8592"],!!e.dusk,5),os(n,"#7A9A50");for(let t=0;t<12;t++)kt(n,-12+t*2.3,-7-t%3*2.5,1.4,["#3E5F3A","#4F7A44","#6E9A50","#D7D282"],t);n.add(R(2.4,.1,.5,b("#8E6242"),-3.4,.5,-2.2)),n.add(R(2.4,.5,.08,b("#8E6242"),-3.4,.8,-2.45));for(let t=0;t<3;t++)$a(n,-6+t*6,-4,1,!!e.dusk);n.add(new Re("#E9EEFF","#B08A6A",1)),n.add(je(e.dusk?"#FFB080":"#FFD29A",e.dusk?2.2:3,[-10,12,8],14,50))},plaza:(n,e)=>{Eo(n,{seed:e.seed||2}),os(n,"",60,60,v0("#B49F8C",24,24)).position.set(0,.01,-10)},granja:(n,e)=>{n.fog=new xe("#F2D8B8",.012),ht(n,-200,700,260,[[0,"#6FA7D8"],[.6,"#CFE0E8"],[1,"#FFE7BE"]]),os(n,"#8AAA58");let t=new ce;t.add(R(6,4,5,b("#B5402E"),0,2,0));let i=new O(new Ke(.01,4.4,2.2,4),b("#5A3A2A"));i.rotation.y=Math.PI/4,i.scale.z=.8,i.position.y=5.1,t.add(i),t.add(R(2,2.6,.1,b("#F4F0E4"),0,1.3,2.51)),t.position.set(-4,0,-12),n.add(t);for(let s=0;s<16;s++)n.add(R(.1,1,.1,b("#C9A06A"),-10+s*1.3,.5,-4));n.add(R(20,.08,.06,b("#C9A06A"),0,.9,-4)),n.add(R(20,.08,.06,b("#C9A06A"),0,.5,-4));for(let s=0;s<6;s++)kt(n,6+s*3,-16-s%2*3,1.6,void 0,s);Xh(n)},sabana:(n,e)=>{n.fog=new xe("#F2C890",.01),ht(n,-300,900,300,[[0,"#E89A5A"],[.6,"#F6C888"],[1,"#FFE8B8"]]);let t=Ye("#FFF0C0",40,.9);t.position.set(-30,20,-200),t.material.fog=!1,n.add(t),os(n,"#C8A858");for(let i=0;i<6;i++){let s=new ce;s.add(R(.3,3,.3,b("#5A3A22"),0,1.5,0));let r=new O(new Ke(2.6,2.2,.6,12),b("#6E8A40"));r.position.y=3.2,s.add(r),s.position.set(-20+i*9,0,-14-i%3*8),n.add(s)}n.add(new Re("#FFE8C8","#8A6A3A",1)),n.add(je("#FFD8A0",3,[-20,14,-10],30,90))},pradera:(n,e)=>{n.fog=new xe("#F2E2C0",.012),ht(n,-200,700,260,[[0,"#6FA7D8"],[.6,"#CFE0E8"],[1,"#F6E8C8"]]),os(n,"#B8B070");for(let t=0;t<14;t++){let i=new O(new Mt(.55,16,10,0,Math.PI*2,0,Math.PI/2),b("#A88A5A"));i.scale.y=.4,i.position.set(-8+t%7*2.6,0,-1-Math.floor(t/7)*4-t%3),n.add(i)}Xh(n)},mar:(n,e)=>{KE(n,e.deep?"#04182E":"#0A3A5A"),n.fog=new xe(e.deep?"#06223E":"#0E4A6A",e.deep?.04:.06);let t=os(n,"#C8B48A");if(t.position.y=-3,!e.deep){let s=Ne(5);for(let r=0;r<30;r++){let o=new O(new un(.2+s()*.3,.8+s()*1.4,7),b(["#E8667F","#F2A766","#B47AFF","#36AEA2"][r%4]));o.position.set((s()-.5)*14,-2.6,-2-s()*12),n.add(o)}}for(let s=0;s<7;s++){let r=Ns(1.6,16,"#BFEFFF",e.deep?.05:.12);r.position.set(-6+s*2,5,-6),r.rotation.set(0,0,.25),n.add(r)}let i=[];for(let s=0;s<60;s++){let r=Ye("#DFF8FF",.08,.7);n.add(r),i.push(r)}n.userData.bub=i,n.add(new Re("#9FE0FF","#2A4A5A",e.deep?.5:1)),n.add(je("#BFEFFF",e.deep?.6:1.4,[0,20,4],14,40))},lab:(n,e)=>{n.fog=new xe("#162238",.04),n.add(yi(16,20,"#2A3348","#232B3E",6)),n.add(R(16,6,.3,b("#2E3A52"),0,3,-3.2));for(let r=0;r<4;r++){let o=Lt(.6,3,"#9FC8FF",1.4);o.rotation.x=Math.PI/2,o.position.set(-3+r*2,4.2,-1),n.add(o)}let t=Lt(2.6,1.4,"#7FD08A",.5);t.position.set(0,2.8,-3.03),n.add(t);let i=ve(520,280,r=>{r.fillStyle="#0A1A12",r.fillRect(0,0,520,280),r.strokeStyle="#7FD08A",r.lineWidth=4,r.beginPath();for(let o=0;o<520;o++)r.lineTo(o,140+Math.sin(o*.08)*40*Math.sin(o*.013));r.stroke()}),s=new O(new Ae(2.5,1.3),new nt({map:i}));s.position.set(0,2.8,-3.02),n.add(s),n.add(new Re("#6E86C8","#101420",.8)),n.add(je("#BFD4FF",1.4,[3,6,5],8,30))},hall:(n,e)=>{n.fog=new xe("#1E2236",.02),os(n,"#2F4A7A"),n.add(R(30,10,.3,b("#E8E2D2"),0,5,-8));let t=ve(512,512,r=>{r.clearRect(0,0,512,512),r.strokeStyle="#4A86C7",r.lineWidth=16,r.beginPath(),r.arc(256,256,200,0,7),r.stroke();for(let o=1;o<4;o++)r.beginPath(),r.arc(256,256,o*55,0,7),r.stroke();r.beginPath(),r.moveTo(56,256),r.lineTo(456,256),r.moveTo(256,56),r.lineTo(256,456),r.stroke()}),i=Fe(t,4,4);i.position.set(0,6,-7.8),n.add(i);let s=new O(new cn(4,.35,10,48),b("#8E6242"));s.rotation.x=Math.PI/2,s.position.set(0,.8,-1),n.add(s);for(let r=0;r<8;r++){let o=new it("#FFE8C0",5,10,1.6);o.position.set(-6+r*1.8,6,0),n.add(o)}n.add(new Re("#E8E8FF","#3A3A50",.9)),n.add(je("#FFF0D8",1.6,[4,10,8],12,40))},super:(n,e)=>{n.fog=new xe("#E6E2D6",.03),n.add(yi(9,40));for(let i of[-1,1]){n.add(R(.7,4.2,30,b("#8F96A3"),i*3.6,2.1,-10));for(let s=0;s<4;s++)n.add(R(1.2,.05,30,b("#DDE0E4"),i*3,.5+s*.9,-10))}let t=Ne(3);for(let i=0;i<160;i++){let s=i%2?1:-1;t()<.55||n.add(R(.3,.3,.4,b(["#3F8A52","#6E9A50","#E8843E","#C64236","#F2C14E"][i%5]),s*3,.7+Math.floor(t()*4)*.9,-i*.18))}for(let i=0;i<6;i++){let s=Lt(1,2.6,"#FFF6DE",1.6);s.rotation.x=Math.PI/2,s.position.set(0,4.6,2-i*5),n.add(s)}n.add(new Re("#FFFFFF","#B9B3A6",1)),n.add(je("#FFF6E0",.8,[1,8,6],10,30))},zoo:(n,e)=>{me.parque(n,{});for(let t=0;t<12;t++)n.add(R(.08,1.4,.08,b("#3A3A40",{metalness:.5}),-4+t*.7,.7,1.2));n.add(R(8,.08,.08,b("#3A3A40"),0,1.35,1.2))},noite:(n,e)=>{go(n,{night:!0,wall:"#3A3050"})},ruina:(n,e)=>{n.fog=new xe("#8A8070",.03),ht(n,-100,400,160,[[0,"#7A8A9A"],[1,"#C8C0B0"]]),os(n,"#8A8070");let t=Ne(8);for(let i=0;i<40;i++){let s=R(.4+t()*1.6,.3+t()*1,.4+t()*1.4,b(["#9A9088","#8A8078","#B0A898"][i%3]),(t()-.5)*10,.3,-1-t()*8);s.rotation.set(t(),t()*3,t()*.4),n.add(s)}Xh(n,.8)}};function KE(n,e){n.background=new le(e)}function jE(n,e={}){let t=zh({outfit:e.outfit||"hero",hair:e.hair,hairc:e.hairc,lash:!!e.lash,glasses:e.glasses,glow:e.glow??.14});return t.place(e.x||0,e.z||0,e.y||0,e.s||1),t.tint(e.tint||"#FFF0DC"),n.add(t.root),t}var ey=(n,e,t)=>{if(!n)return t;let i=t;for(let[s,r]of n)e>=s&&(i=r);return i};function qh(n,e,t){let i=c0(n,e,t.bg||"#F1C39A",t.fov||32),s=i.scene;(me[t.amb]||(()=>{}))(s,t.ambo||{});let r=(t.atores||[]).map(a=>{let l=a.tipo==="humano"?jE(s,a):(()=>{let c=S0(a.tipo,a);return c.place(a.x||0,a.z||0,a.y||0,a.s||1),s.add(c.root),c})();return{a,k:l}}),o=t.extra?t.extra(s,i,r.map(a=>a.k)):null;return i.update=(a,l)=>{kh.value=a;let c=i.camera,h=s.userData.bub;h&&h.forEach((g,E)=>g.position.set(-4+E%12*.7,-2.5+(l*.5+E*.13)%7,-2-E%5*1.5));let d=Ya(t.cam.map(([g,E])=>[g,E]),l),u=Ya(t.cam.map(([g,,E])=>[g,E]),l);h0(c,d,u,0);for(let{a:g,k:E}of r){if(g.move){let f=g.move(l);E.root.position.set(f[0],f[1],f[2])}E.face(c),E.eye(ey(g.eyes,l,g.tipo==="humano"?"look":"open"));let m=(g.talk||[]).some(([f,_])=>l>=f&&l<_);g.tipo==="humano"?g.pose?g.pose(E,l):E.pose({armL:[12,8],armR:[m?50+Math.sin(l*8)*15:12,m?30:8],bob:m?Math.abs(Math.sin(l*8))*.015:0}):(E.talk(l,m),g.pose&&g.pose(E,l))}return o&&o.update&&o.update(l,a,c),{focus:t.f?Ya(t.f,l):5,range:t.range??2.4,blur:t.blur??12,bloom:.3,bloomT:.92,vig:.45,exposure:1.02,...t.look||{},...t.lookFn?t.lookFn(l):{}}},i}function T0(n,e,t,i="#E8667F"){n.add(R(2.2,.45,3,b("#6B4A33"),e,.25,t)),n.add(R(2.1,.3,2.8,b("#F3EEE4"),e,.6,t)),n.add(R(2.18,.2,1.9,b(i,{roughness:.9}),e,.8,t+.5)),n.add(R(2.2,1.3,.16,b("#5A3C28"),e,.9,t-1.55)),n.add(R(.8,.2,.45,b("#FFFFFF"),e-.5,.82,t-1.1)),n.add(R(.8,.2,.45,b("#F6E6C8"),e+.5,.82,t-1.1))}function Yh(n,e=Math.PI/2){n.root.rotation.z=e}function b0(n,e={}){let{w:t=640,h:i=400,bg:s="#FBF7EC",fg:r="#2A2A34",size:o=64,font:a="800",tail:l="left"}=e;return ve(t,i,c=>{c.clearRect(0,0,t,i),c.fillStyle=s,c.strokeStyle="#2A2A34",c.lineWidth=8,c.beginPath(),c.ellipse(t/2,i*.42,t*.46,i*.37,0,0,7),c.fill(),c.stroke();let h=l==="left"?t*.3:t*.7;for(let[u,p,g]of[[h,i*.86,20],[h+(l==="left"?-40:40),i*.96,11]])c.beginPath(),c.arc(u,p,g,0,7),c.fill(),c.stroke();c.fillStyle=r,c.textAlign="center",c.textBaseline="middle",c.font=`${a} ${o}px Inter`;let d=Array.isArray(n)?n:[n];d.forEach((u,p)=>c.fillText(u,t/2,i*.42+(p-(d.length-1)/2)*o*1.15))})}function w0(n,e={}){let{w:t=640,h:i=300,size:s=66}=e;return ve(t,i,r=>{r.clearRect(0,0,t,i),r.fillStyle="#FFFFFF",r.strokeStyle="#2A2A34",r.lineWidth=8,r.beginPath(),r.roundRect(10,10,t-20,i*.72,40),r.fill(),r.stroke(),r.beginPath(),r.moveTo(t*.3,i*.72+6),r.lineTo(t*.26,i*.98),r.lineTo(t*.42,i*.72+6),r.fill(),r.stroke(),r.fillStyle="#2A2A34",r.font=`800 ${s}px Inter`,r.textAlign="center",r.textBaseline="middle";let o=Array.isArray(n)?n:[n];o.forEach((a,l)=>r.fillText(a,t/2,i*.38+(l-(o.length-1)/2)*s*1.15))})}function ja(n,e="#F2C14E",t=140,i=256,s=200){return ve(i,s,r=>{r.clearRect(0,0,i,s),r.font=`900 ${t}px Fraunces`,r.textAlign="center",r.textBaseline="middle",r.lineWidth=12,r.strokeStyle="#2A2A34",r.strokeText(n,i/2,s/2),r.fillStyle=e,r.fillText(n,i/2,s/2)})}function ty(n,e,t={}){let{S:i=256,vazio:s=!1,face:r="#FBF7EC",rim:o="#2A2A34"}=t;n.clearRect(0,0,i,i);let a=i*.46;if(n.save(),n.translate(i/2,i/2),s){n.fillStyle="rgba(255,232,205,.35)",n.beginPath(),n.arc(0,0,a*.95,0,7),n.fill(),n.setLineDash([14,12]),n.strokeStyle="#FFF0D8",n.lineWidth=9,n.beginPath(),n.arc(0,0,a*.95,0,7),n.stroke(),n.restore();return}n.fillStyle=o,n.beginPath(),n.arc(0,0,a,0,7),n.fill(),n.fillStyle=r,n.beginPath(),n.arc(0,0,a*.86,0,7),n.fill(),n.fillStyle=o;for(let c=0;c<12;c++){let h=c/12*Math.PI*2;n.save(),n.rotate(h),n.fillRect(-4,-a*.8,8,c%3?a*.1:a*.18),n.restore()}let l=(c,h,d)=>{n.save(),n.rotate(c),n.fillRect(-d/2,-h,d,h+10),n.restore()};l(e%12/12*Math.PI*2,a*.5,12),l(e%1*Math.PI*2,a*.72,7),n.fillStyle="#C9361F",n.beginPath(),n.arc(0,0,10,0,7),n.fill(),n.restore()}function R0(n=.6,e=3,t={}){let i=document.createElement("canvas");i.width=i.height=256;let s=i.getContext("2d"),r=new Xn(i);r.colorSpace=Nt;let o=new O(new Ae(n,n),new Ce({map:r,transparent:!0,alphaTest:.05,side:Et,roughness:.7}));return o.set=(a,l={})=>{ty(s,a,{...t,...l}),r.needsUpdate=!0},o.set(e),o}function ny(n,e={}){let{w:t=512,h:i=256,bg:s="#10141E",fg:r="#FFFFFF",size:o=80,font:a="Inter",weight:l=800}=e;return ve(t,i,c=>{c.fillStyle=s,c.fillRect(0,0,t,i),c.fillStyle=r,c.font=`${l} ${o}px ${a}`,c.textAlign="center",c.textBaseline="middle";let h=Array.isArray(n)?n:[n];h.forEach((d,u)=>c.fillText(d,t/2,i/2+(u-(h.length-1)/2)*o*1.15))})}function x0(n,e,t,i,s={}){let r=ny(e,s),o=new O(new Ae(t,i),new nt({map:r,toneMapped:!1}));return n.add(o),o}var Ur=[.1,3.3,9.21,12.08,15.51,19.25,23.17,27.33,30.75,41.49,45.77,50.56,55.13,61.43,64.04,75.54,79.57,83.09,90.49,94.25,96.06,97.5,102.71,106.19,111.71,121.89,126.69,131.05,134.93,137.29,143.38,146.39,150.59,155.77,161.57,165.83,168.92,177.16,180.08,188.89,193.42,202.75,210.83,216.07,224.41,233.61,242.96,247.34,252.8,259.5,263.51,269.6,273.37,277.48,281,285.29,291.14,297.7,302.07,307.57,311.87,316.99,324.79,333.59,338.73,344.43,349.18,355.87,359.25,368.47,370.98,385.18,387.61,393.72,401.88,406.84,412.5,426.35,437.24,441.09,447.72,454.09,460.77,469.07,472.48,478.34,483.28,489.38,491.42,498.32,504.28,512.04,515.75,524.06,529,541.36,543.83,555.15,572.56,579.93,582.74,587.42,596.37,604.62,612.1,615.93,622.78,629.09],iy=[["martes",.098],["ultimo",1.583],["recreo",1.988],["estas",3.298],["en",3.702],["la",3.798],["biblioteca",3.869],["fingiendo",4.75],["que",5.25],["estudias",5.357],["cuando",6.155],["alguien",6.44],["se",6.738],["sienta",6.869],["justo",7.238],["delante",7.607],["de",8],["ti",8.131],["es",9.214],["ella",9.452],["tu",10.631],["crush",10.786],["mira",12.083],["a",12.464],["los",12.512],["lados",12.702],["se",13.976],["acerca",14.19],["y",15.512],["te",15.667],["dice",15.774],["en",16.071],["voz",16.167],["muy",16.417],["bajita",16.583],["puedo",17.333],["contarte",17.571],["algo",18.095],["algo",19.25],["que",19.583],["no",19.714],["sabe",19.881],["nadie",20.155],["ni",21.357],["siquiera",21.524],["sara",21.952],["sara",23.167],["su",24.512],["mejor",24.726],["amiga",25.024],["desde",25.333],["los",25.607],["cinco",25.75],["anos",26.083],["tragas",27.333],["saliva",27.69],["y",28.988],["dices",29.131],["que",29.5],["si",29.619],["y",30.75],["antes",30.929],["de",31.238],["saber",31.321],["que",31.655],["secreto",31.762],["es",32.262],["si",32.69],["te",32.893],["gustan",33],["estas",33.357],["historias",33.679],["de",34.167],["y",34.262],["si",34.345],["suscribete",34.774],["al",35.369],["canal",35.476],["y",35.833],["activa",35.917],["la",36.31],["campanita",36.429],["y",37.917],["ahora",38.083],["si",38.393],["vamos",39.512],["a",39.893],["ver",39.952],["que",40.143],["pasa",40.274],["ella",41.488],["no",41.786],["habla",41.976],["enseguida",42.179],["juega",43.571],["con",43.917],["la",44.083],["goma",44.155],["del",44.417],["pelo",44.607],["abre",45.774],["la",46.107],["boca",46.202],["la",47.405],["cierra",47.583],["mira",48.869],["el",49.19],["reloj",49.274],["prometeme",50.56],["que",51.083],["no",51.226],["se",51.393],["lo",51.536],["vas",51.643],["a",51.881],["contar",51.94],["a",52.321],["nadie",52.369],["te",53.583],["lo",53.702],["prometo",53.821],["y",55.131],["en",55.321],["ese",55.44],["silencio",55.655],["piensas",56.464],["cuantos",57.226],["secretos",57.56],["tendra",58.048],["cuantos",59.333],["tendra",59.726],["cualquiera",60.06],["los",61.429],["cientificos",61.595],["lo",62.31],["han",62.44],["preguntado",62.571],["en",64.036],["2017",64.226],["el",65.476],["psicologo",65.631],["michael",66.143],["slepian",66.464],["de",67.202],["la",67.298],["universidad",67.417],["de",68.06],["columbia",68.155],["y",68.952],["su",69.036],["equipo",69.155],["pidieron",69.5],["a",69.941],["miles",70],["de",70.345],["personas",70.441],["que",70.952],["repasaran",71.083],["una",71.667],["lista",71.833],["de",72.167],["secretos",72.286],["tipicos",72.821],["y",73.357],["marcaran",73.417],["los",73.905],["que",74.071],["tenian",74.202],["de",75.536],["media",75.679],["cada",76.321],["persona",76.571],["guardaba",76.976],["unos",77.452],["trece",77.774],["secretos",78.083],["y",79.571],["unos",79.702],["cinco",79.941],["no",80.25],["se",80.429],["los",80.56],["habia",80.726],["contado",81.012],["jamas",81.452],["a",81.833],["nadie",81.893],["pero",83.095],["lo",83.298],["mas",83.405],["curioso",83.655],["fue",84.131],["otra",84.333],["cosa",84.583],["lo",85.786],["que",85.964],["mas",86.071],["pesaba",86.31],["no",86.691],["era",86.905],["tener",87.071],["que",87.393],["esconder",87.512],["el",88],["secreto",88.095],["delante",88.536],["de",88.941],["los",89.048],["demas",89.202],["era",90.488],["pensar",90.726],["en",91.131],["el",91.238],["a",91.357],["solas",91.405],["en",92.762],["la",92.941],["cama",93.036],["en",94.25],["el",94.429],["autobus",94.56],["en",96.06],["clase",96.25],["el",97.5],["secreto",97.679],["se",98.095],["te",98.25],["cuela",98.369],["en",98.655],["la",98.738],["cabeza",98.821],["una",99.262],["y",99.5],["otra",99.619],["vez",99.833],["aunque",100.321],["nadie",100.595],["te",100.917],["pregunte",101.036],["por",101.488],["el",101.667],["y",102.714],["cuanto",102.857],["mas",103.167],["vueltas",103.405],["le",103.786],["das",103.857],["peor",104.393],["te",104.679],["sientes",104.786],["ella",106.191],["respira",106.488],["hondo",106.976],["saca",108.167],["el",108.56],["movil",108.643],["lo",109.869],["gira",110.06],["hacia",110.405],["ti",110.631],["en",111.714],["la",111.905],["pantalla",112],["hay",112.488],["una",112.643],["cuenta",112.798],["que",113.131],["conoces",113.274],["muy",113.786],["bien",113.964],["un",115.083],["dibujo",115.226],["de",115.643],["una",115.762],["nube",115.976],["morada",116.274],["doscientos",117.571],["mil",118.143],["seguidores",118.321],["se",119.857],["llama",120.095],["nube",120.393],["lila",120.702],["nube",121.893],["lila",122.191],["sube",122.5],["canciones",122.81],["solo",124.321],["la",124.667],["voz",124.762],["y",125.06],["una",125.167],["guitarra",125.345],["nunca",126.691],["ha",127.095],["ensenado",127.167],["la",127.691],["cara",127.798],["nadie",128.976],["sabe",129.357],["quien",129.679],["es",129.905],["y",131.048],["tu",131.202],["la",131.726],["escuchas",131.81],["todas",132.31],["las",132.643],["noches",132.821],["antes",133.226],["de",133.548],["dormir",133.619],["soy",134.929],["yo",135.274],["dice",135.786],["ella",136.143],["te",137.286],["quedas",137.417],["mirando",137.774],["el",138.131],["movil",138.214],["luego",139.44],["a",139.821],["ella",139.964],["luego",141.131],["al",141.464],["movil",141.571],["otra",141.94],["vez",142.155],["tu",143.381],["eres",143.548],["nube",144.857],["lila",145.167],["shhh",146.393],["te",148.381],["tapa",148.512],["la",148.786],["boca",148.881],["con",149.19],["la",149.357],["mano",149.429],["y",150.595],["los",150.738],["dos",150.94],["os",151.143],["reis",151.274],["en",151.583],["voz",151.702],["baja",151.917],["como",152.488],["si",152.714],["os",152.881],["hubieran",153.036],["pillado",153.393],["haciendo",153.762],["algo",154.179],["terrible",154.429],["y",155.774],["por",155.905],["que",156.095],["no",156.214],["se",156.345],["lo",156.488],["has",156.631],["contado",156.762],["a",157.202],["nadie",157.238],["porque",158.452],["me",158.726],["da",158.833],["panico",158.976],["cantar",159.405],["delante",159.81],["de",160.214],["gente",160.321],["en",161.571],["mi",161.75],["cuarto",161.869],["si",162.583],["con",163.726],["el",163.917],["movil",164.036],["si",164.69],["pero",165.833],["si",166.036],["alguien",166.214],["me",166.512],["mira",166.607],["me",167.202],["quedo",167.321],["en",167.583],["blanco",167.667],["y",168.917],["por",169.048],["que",169.226],["me",169.333],["lo",169.429],["cuentas",169.536],["a",169.94],["mi",170],["se",171.048],["encoge",171.262],["de",171.679],["hombros",171.81],["no",173.131],["se",173.345],["necesitaba",174.488],["contarselo",175.179],["a",175.833],["alguien",175.94],["y",177.155],["eso",177.357],["tiene",177.583],["mas",177.857],["ciencia",178.083],["de",178.464],["lo",178.571],["que",178.679],["parece",178.798],["en",180.083],["2012",180.274],["dos",181.262],["neurocientificos",181.476],["de",182.405],["la",182.488],["universidad",182.583],["de",183.214],["harvard",183.298],["diana",183.976],["tamir",184.25],["y",184.607],["jason",184.679],["mitchell",185.048],["metieron",185.726],["a",186.167],["personas",186.226],["en",186.786],["un",186.917],["escaner",187.048],["cerebral",187.5],["les",188.893],["pedian",189.119],["que",189.464],["hablaran",189.571],["de",189.94],["si",190.036],["mismas",190.202],["o",190.881],["que",190.976],["hablaran",191.095],["de",191.476],["otras",191.595],["personas",191.929],["cuando",193.417],["hablaban",193.679],["de",194.048],["si",194.131],["mismas",194.298],["se",194.976],["encendian",195.143],["en",195.69],["el",195.81],["cerebro",195.929],["las",196.345],["mismas",196.548],["zonas",196.893],["que",197.238],["se",197.345],["activan",197.452],["con",197.857],["la",198.012],["comida",198.095],["rica",198.488],["o",198.869],["con",198.964],["el",199.143],["dinero",199.25],["las",200.524],["zonas",200.726],["de",201.048],["la",201.131],["recompensa",201.238],["y",202.75],["luego",202.881],["hicieron",203.155],["una",203.571],["prueba",203.774],["mas",204.071],["les",205.31],["ofrecian",205.536],["elegir",206],["o",206.643],["ganar",206.69],["unos",207],["centimos",207.19],["extra",207.655],["o",208.274],["hablar",208.381],["un",208.643],["poco",208.774],["de",209.06],["ellos",209.226],["mismos",209.5],["muchisimas",210.833],["personas",211.476],["renunciaron",211.976],["al",212.56],["dinero",212.655],["solo",213.321],["por",213.607],["poder",213.798],["hablar",214.095],["de",214.393],["si",214.5],["mismas",214.679],["contar",216.071],["algo",216.464],["de",216.679],["ti",216.798],["a",217.25],["tu",217.321],["cerebro",217.452],["le",218.19],["sienta",218.286],["bien",218.655],["y",219.798],["contar",219.94],["algo",220.333],["que",220.583],["llevas",220.702],["anos",221.06],["guardando",221.345],["le",222.155],["sienta",222.25],["todavia",222.655],["mejor",223.143],["suena",224.405],["el",224.786],["timbre",224.893],["ella",226.119],["se",226.393],["levanta",226.536],["se",227.262],["cuelga",227.405],["la",227.726],["mochila",227.821],["y",228.56],["antes",228.69],["de",229.012],["irse",229.119],["te",229.464],["dice",229.571],["gracias",230.214],["por",230.631],["escuchar",230.774],["y",232.179],["se",232.298],["va",232.476],["tu",233.607],["te",233.762],["quedas",233.893],["sentado",234.202],["solo",235.524],["en",236.857],["la",237.048],["biblioteca",237.131],["vacia",237.714],["con",239.012],["el",239.19],["secreto",239.298],["mas",239.738],["grande",239.988],["del",240.31],["instituto",240.488],["dentro",241.071],["de",241.417],["la",241.524],["cabeza",241.631],["miercoles",242.964],["primera",244.548],["hora",244.976],["clase",245.548],["de",245.893],["ingles",246],["marcos",247.345],["tu",248.143],["mejor",248.25],["amigo",248.536],["se",249.155],["sienta",249.298],["a",249.655],["tu",249.714],["lado",249.845],["y",250.155],["te",250.238],["pone",250.369],["un",250.655],["auricular",250.81],["en",251.345],["la",251.452],["oreja",251.56],["escucha",252.798],["esto",253.333],["nube",254.5],["lila",254.798],["ha",255.155],["subido",255.214],["cancion",255.631],["nueva",256.048],["esta",257.238],["tia",257.56],["canta",257.81],["increible",258.095],["quien",259.5],["sera",259.774],["seguro",260.988],["que",261.488],["es",261.655],["de",261.81],["otro",261.905],["pais",262.179],["tu",263.512],["miras",263.643],["al",264],["frente",264.119],["dos",265.369],["filas",265.643],["delante",265.988],["esta",266.357],["ella",266.655],["tomando",267.202],["apuntes",267.583],["como",268.036],["si",268.262],["nada",268.405],["si",269.595],["seguro",270.19],["que",270.619],["es",270.774],["de",270.929],["otro",271.024],["pais",271.298],["dices",272.036],["marcos",273.369],["te",273.857],["mira",273.952],["raro",274.226],["por",275.393],["que",275.56],["te",275.702],["has",275.821],["puesto",275.964],["rojo",276.274],["hace",277.476],["calor",277.786],["estais",279.071],["en",279.536],["diciembre",279.643],["en",281],["el",281.179],["recreo",281.286],["sara",282.012],["se",282.274],["acerca",282.405],["a",282.821],["ti",282.881],["con",283.06],["los",283.226],["ojos",283.405],["entornados",283.702],["ayer",285.286],["os",285.655],["vi",285.81],["en",285.952],["la",286.048],["biblioteca",286.131],["muy",287.619],["juntitos",287.833],["de",289.357],["que",289.512],["hablabais",289.655],["de",291.143],["deberes",291.714],["de",293.131],["deberes",293.298],["ella",294.738],["nunca",294.988],["hace",295.405],["los",295.643],["deberes",295.798],["en",296.202],["el",296.31],["recreo",296.417],["sara",297.702],["se",298.071],["va",298.214],["pero",299.31],["se",299.512],["gira",299.655],["dos",299.929],["veces",300.19],["para",300.548],["mirarte",300.738],["y",302.071],["ahora",302.25],["lo",302.56],["entiendes",302.655],["guardar",304.131],["el",304.571],["secreto",304.667],["de",305.107],["otra",305.214],["persona",305.476],["tambien",305.94],["pesa",306.357],["cada",307.571],["vez",307.81],["que",308.012],["alguien",308.155],["dice",308.512],["nube",308.81],["lila",309.083],["te",309.69],["da",309.798],["un",309.94],["vuelco",310.071],["el",310.369],["estomago",310.452],["cada",311.869],["vez",312.107],["que",312.321],["sara",312.44],["te",312.738],["mira",312.845],["sientes",314.09],["que",314.613],["lo",314.732],["llevas",314.828],["escrito",315.161],["en",315.578],["la",315.649],["frente",315.744],["jueves",316.992],["a",318.444],["la",318.575],["salida",318.694],["ella",319.397],["te",319.647],["escribe",319.766],["te",320.516],["vienes",320.623],["al",321.004],["aula",321.135],["de",321.361],["musica",321.468],["quiero",322.825],["ensenarte",323.063],["algo",323.623],["el",324.79],["aula",325.004],["de",325.218],["musica",325.337],["esta",325.754],["vacia",325.968],["hay",327.254],["un",327.468],["piano",327.587],["viejo",327.861],["un",328.528],["monton",328.635],["de",329.016],["sillas",329.111],["apiladas",329.516],["y",330.087],["una",330.171],["guitarra",330.325],["con",330.754],["una",330.956],["pegatina",331.135],["de",331.647],["una",331.778],["nube",331.992],["morada",332.29],["ella",333.587],["se",333.861],["sienta",334.004],["con",334.385],["la",334.54],["guitarra",334.611],["abre",335.956],["una",336.242],["libreta",336.432],["llena",336.849],["de",337.123],["tachones",337.254],["es",338.73],["la",338.968],["cancion",339.075],["nueva",339.504],["no",340.694],["esta",340.921],["terminada",341.182],["me",342.635],["falta",342.802],["el",343.123],["final",343.194],["de",344.432],["que",344.611],["va",344.766],["de",345.873],["alguien",346.052],["a",346.373],["quien",346.444],["no",346.671],["me",346.802],["atrevo",346.909],["a",347.254],["decirle",347.278],["una",347.766],["cosa",347.98],["te",349.182],["ensena",349.302],["la",349.778],["libreta",349.885],["hay",351.218],["frases",351.409],["enteras",351.802],["tachadas",352.242],["otras",353.694],["escritas",354.075],["encima",354.575],["hay",355.873],["una",356.063],["que",356.218],["pone",356.349],["lo",356.956],["que",357.063],["no",357.182],["digo",357.325],["lo",357.885],["escribo",357.944],["es",359.254],["que",359.468],["yo",359.587],["soy",359.766],["asi",360.004],["dice",360.575],["lo",361.766],["que",361.944],["no",362.063],["puedo",362.218],["decir",362.456],["en",362.778],["voz",362.873],["alta",363.099],["lo",363.718],["escribo",363.778],["en",364.182],["una",364.29],["cancion",364.48],["y",365.813],["entonces",365.968],["ya",366.528],["no",366.659],["me",366.802],["pesa",366.932],["tanto",367.242],["eso",368.468],["tambien",368.754],["lo",369.123],["estudio",369.182],["la",369.563],["ciencia",369.671],["en",370.98],["1986",371.159],["el",372.909],["psicologo",373.063],["james",373.575],["pennebaker",373.885],["de",374.659],["estados",374.742],["unidos",375.171],["pidio",375.861],["a",376.206],["un",376.242],["grupo",376.397],["de",376.706],["estudiantes",376.813],["universitarios",377.444],["que",378.266],["escribieran",378.385],["durante",378.968],["quince",379.337],["minutos",379.694],["al",380.171],["dia",380.302],["cuatro",380.837],["dias",381.171],["seguidos",381.433],["sobre",382.159],["lo",382.54],["que",382.647],["mas",382.766],["les",383.04],["habia",383.218],["dolido",383.492],["en",383.849],["la",383.921],["vida",384.004],["cosas",385.183],["que",385.54],["nunca",385.647],["habian",385.98],["contado",386.278],["a",387.611],["otro",387.766],["grupo",388.004],["le",388.302],["pidio",388.421],["que",388.766],["escribieran",388.897],["sobre",389.492],["cosas",389.766],["sin",390.111],["importancia",390.266],["como",391.171],["su",391.397],["habitacion",391.516],["o",392.063],["sus",392.123],["zapatos",392.302],["durante",393.718],["esos",394.159],["dias",394.444],["los",395.075],["que",395.218],["escribieron",395.325],["sobre",395.897],["lo",396.194],["que",396.302],["sentian",396.409],["lo",396.909],["pasaron",397.016],["peor",397.456],["se",398.706],["emocionaron",398.944],["lloraron",400.48],["pero",401.885],["en",402.099],["los",402.171],["meses",402.337],["siguientes",402.611],["fueron",403.444],["menos",403.73],["veces",404.063],["al",404.409],["medico",404.54],["que",404.956],["los",405.087],["del",405.242],["otro",405.385],["grupo",405.623],["poner",406.837],["en",407.135],["palabras",407.242],["lo",407.718],["que",407.813],["guardas",407.921],["dentro",408.302],["ayuda",408.861],["aunque",410.159],["solo",410.48],["lo",410.766],["lea",410.897],["un",411.147],["papel",411.266],["pasais",412.504],["la",412.956],["tarde",413.063],["buscando",413.361],["el",413.813],["final",413.885],["de",414.194],["la",414.278],["cancion",414.385],["tu",415.706],["propones",415.837],["una",416.337],["frase",416.516],["ella",417.742],["la",418.028],["canta",418.135],["no",419.385],["suena",419.587],["bien",419.837],["os",420.992],["reis",421.218],["pruebas",422.575],["otra",422.968],["ella",424.147],["la",424.421],["canta",424.54],["otra",424.921],["vez",425.147],["y",426.349],["por",426.48],["primera",426.683],["vez",427.028],["la",427.587],["escuchas",427.694],["cantar",428.171],["en",428.552],["directo",428.647],["sin",429.944],["movil",430.254],["sin",431.492],["nube",431.802],["morada",432.04],["a",433.325],["un",433.456],["metro",433.635],["de",433.956],["ti",434.075],["y",435.159],["no",435.302],["se",435.48],["queda",435.647],["en",435.909],["blanco",435.992],["viernes",437.242],["festival",438.73],["de",439.266],["fin",439.373],["de",439.587],["trimestre",439.706],["el",441.087],["gimnasio",441.266],["esta",441.79],["lleno",442.004],["hay",443.206],["padres",443.421],["profesores",444.099],["y",444.742],["todo",444.837],["el",445.075],["instituto",445.159],["sentado",445.683],["en",446.147],["las",446.218],["gradas",446.373],["hay",447.718],["un",447.933],["chico",448.052],["que",448.397],["hace",448.54],["malabares",448.742],["un",449.611],["grupo",449.694],["de",449.98],["baile",450.087],["y",450.48],["un",450.635],["profesor",450.754],["que",451.254],["cuenta",451.385],["chistes",451.73],["que",452.183],["no",452.313],["hacen",452.552],["gracia",452.825],["y",454.087],["en",454.254],["el",454.361],["programa",454.48],["al",455.218],["final",455.385],["del",455.706],["todo",455.873],["pone",456.444],["actuacion",457.004],["sorpresa",457.48],["tu",458.885],["sabes",459.016],["quien",459.385],["es",459.599],["vas",460.766],["detras",461.04],["del",461.421],["escenario",461.552],["ella",462.956],["esta",463.206],["sentada",463.421],["en",463.885],["una",463.98],["caja",464.147],["con",464.742],["la",464.909],["guitarra",464.98],["en",465.397],["las",465.468],["rodillas",465.635],["le",467.04],["tiemblan",467.23],["las",467.611],["manos",467.778],["no",469.075],["puedo",469.29],["hay",470.516],["demasiada",470.706],["gente",471.23],["no",472.48],["mires",472.683],["a",473.028],["la",473.087],["gente",473.183],["mirame",474.433],["a",474.885],["mi",474.933],["haz",476.004],["como",476.23],["en",476.456],["el",476.552],["aula",476.694],["de",476.909],["musica",477.016],["ella",478.337],["respira",478.635],["hondo",479.123],["se",480.313],["levanta",480.552],["y",481.897],["sale",482.028],["las",483.278],["luces",483.563],["se",483.885],["apagan",483.968],["un",485.242],["foco",485.433],["solo",485.742],["para",486.052],["ella",486.349],["silencio",487.492],["total",488.111],["y",489.385],["empieza",489.54],["a",490.016],["cantar",490.063],["a",491.421],["los",491.563],["diez",491.766],["segundos",491.944],["alguien",492.718],["en",493.075],["las",493.183],["gradas",493.349],["grita",493.706],["es",494.337],["nube",494.54],["lila",494.802],["es",496.052],["la",496.266],["cancion",496.349],["de",496.766],["nube",496.861],["lila",497.135],["marcos",498.325],["se",498.73],["levanta",498.837],["de",499.218],["la",499.337],["silla",499.433],["con",499.778],["la",499.944],["boca",500.028],["abierta",500.325],["sara",501.623],["se",501.98],["lleva",502.123],["las",502.397],["manos",502.587],["a",502.921],["la",502.98],["cara",503.099],["y",504.278],["ella",504.48],["sigue",504.694],["cantando",505.028],["te",506.444],["busca",506.563],["con",506.885],["la",507.04],["mirada",507.111],["en",507.718],["la",507.897],["esquina",507.98],["del",508.373],["escenario",508.552],["y",509.956],["no",510.099],["deja",510.29],["de",510.563],["cantar",510.683],["cuando",512.04],["termina",512.325],["el",513.075],["gimnasio",513.23],["entero",513.73],["se",514.087],["pone",514.242],["de",514.516],["pie",514.647],["detras",515.754],["del",516.183],["escenario",516.313],["ella",517.135],["llega",517.385],["corriendo",517.706],["temblando",519.111],["todavia",519.635],["riendose",521.028],["y",522.492],["te",522.635],["abraza",522.754],["lo",524.063],["he",524.325],["hecho",524.528],["no",525.718],["me",525.933],["lo",526.052],["creo",526.171],["lo",527.349],["he",527.611],["hecho",527.813],["y",529.004],["luego",529.135],["se",529.421],["separa",529.563],["un",529.933],["poco",530.063],["te",531.266],["mira",531.385],["y",532.587],["dice",532.742],["oye",533.397],["yo",534.563],["te",534.766],["he",534.933],["contado",535.016],["mi",535.456],["secreto",535.563],["ahora",536.933],["te",537.29],["toca",537.433],["a",537.754],["ti",537.813],["cuentame",538.897],["uno",539.313],["que",539.575],["no",539.706],["sepa",539.861],["nadie",540.159],["y",541.361],["aqui",541.528],["viene",541.778],["el",542.063],["ultimo",542.183],["estudio",542.504],["en",543.825],["1994",544.004],["dos",545.802],["psicologas",545.968],["de",546.528],["la",546.611],["universidad",546.706],["de",547.302],["california",547.397],["nancy",548.325],["collins",548.671],["y",549.099],["lynn",549.159],["miller",549.349],["reunieron",549.944],["los",550.468],["resultados",550.635],["de",551.23],["decenas",551.313],["de",551.778],["experimentos",551.861],["sobre",552.552],["contar",552.778],["cosas",553.194],["personales",553.575],["y",555.147],["encontraron",555.29],["tres",555.944],["cosas",556.218],["una",557.587],["las",558.194],["personas",558.337],["que",558.813],["se",558.921],["abren",559.075],["y",559.325],["cuentan",559.397],["cosas",559.802],["intimas",560.183],["suelen",560.587],["caer",560.921],["mejor",561.254],["dos",562.504],["a",563.135],["la",563.218],["gente",563.325],["que",563.647],["nos",563.754],["gusta",563.921],["le",564.552],["contamos",564.647],["mas",565.194],["cosas",565.409],["y",566.754],["tres",566.909],["despues",567.528],["de",567.909],["abrirnos",567.968],["con",568.421],["alguien",568.611],["esa",569.278],["persona",569.48],["nos",569.909],["gusta",570.123],["un",570.433],["poco",570.575],["mas",570.873],["que",571.111],["antes",571.254],["es",572.563],["como",572.766],["un",572.98],["circulo",573.135],["tu",574.48],["te",574.623],["abres",574.766],["la",575.433],["otra",575.587],["persona",575.825],["se",576.254],["abre",576.433],["y",576.98],["cada",577.087],["vuelta",577.337],["os",577.694],["acerca",577.849],["un",578.278],["poco",578.421],["mas",578.706],["y",579.933],["ella",580.147],["acaba",580.361],["de",580.671],["dar",580.79],["la",581.004],["primera",581.111],["vuelta",581.48],["tu",582.742],["respiras",582.873],["hondo",583.421],["como",584.587],["ella",584.885],["antes",585.147],["de",585.456],["salir",585.54],["al",585.909],["escenario",586.016],["vale",587.421],["mi",588.718],["secreto",588.873],["es",589.397],["que",589.897],["me",590.016],["gustas",590.123],["desde",591.516],["hace",591.885],["mucho",592.099],["desde",593.325],["antes",593.683],["de",593.992],["saber",594.075],["que",594.433],["eras",594.611],["nube",594.909],["lila",595.183],["silencio",596.373],["y",597.885],["ella",598.099],["sonrie",598.313],["saca",599.694],["la",600.087],["libreta",600.194],["del",600.611],["bolsillo",600.778],["la",602.147],["abre",602.385],["por",602.611],["la",602.802],["ultima",602.909],["pagina",603.29],["y",604.623],["te",604.766],["ensena",604.873],["el",605.266],["final",605.349],["de",605.683],["la",605.766],["cancion",605.873],["la",607.194],["frase",607.373],["que",607.694],["faltaba",607.825],["pone",609.194],["y",609.79],["al",609.885],["final",610.004],["se",610.647],["lo",610.813],["dije",610.909],["y",612.099],["tu",612.254],["de",612.397],["quien",612.516],["creias",612.73],["que",613.206],["iba",613.349],["la",613.575],["cancion",613.683],["te",614.433],["pregunta",614.563],["asi",615.933],["que",616.278],["ya",616.397],["lo",616.563],["sabes",616.671],["todo",618.016],["el",618.218],["mundo",618.302],["guarda",618.611],["secretos",618.956],["unos",620.468],["trece",620.825],["de",621.456],["media",621.54],["y",622.778],["a",622.944],["veces",623.016],["contarle",623.659],["uno",624.183],["a",624.409],["la",624.444],["persona",624.552],["adecuada",624.98],["es",625.754],["lo",625.933],["que",626.028],["hace",626.171],["que",626.385],["la",626.516],["otra",626.647],["persona",626.885],["te",627.325],["cuente",627.456],["el",627.766],["suyo",627.849],["y",629.087],["tu",630.602],["que",631.09],["secreto",631.209],["le",631.637],["contarias",631.733],["a",632.304],["tu",632.375],["crush",632.506],["o",633.742],["te",633.873],["lo",634.004],["guardarias",634.099],["para",634.694],["siempre",634.897],["cuentamelo",636.194],["en",636.694],["los",636.754],["comentarios",636.885],["y",638.492],["suscribete",638.611],["para",639.266],["mas",639.48],["videos",639.73]],Zh=(n,e=0)=>{for(let[t,i]of iy)if(i>=e&&t===n)return i;return e};var el=(n,e,t=200,i=200)=>{let s=new O(new Ae(t,i),b(e,{roughness:1}));return s.rotation.x=-Math.PI/2,s.receiveShadow=!0,n.add(s),s},bt=(n,e={})=>{let{w:t=512,h:i=200,bg:s="#FBF7EC",fg:r="#2A2A34",size:o=64}=e;return ve(t,i,a=>{a.clearRect(0,0,t,i),a.fillStyle=s,a.beginPath(),a.roundRect(6,6,t-12,i-12,26),a.fill(),a.fillStyle=r,a.font=`900 ${o}px Fraunces`,a.textAlign="center",a.textBaseline="middle",n.forEach((l,c)=>a.fillText(l,t/2,i/2+(c-(n.length-1)/2)*o*1.1))})};function C0(n="#E9B44C"){let e=new ce;e.add(R(2.4,2.4,9,b(n,{roughness:.5}),0,1.5,0));for(let i=0;i<6;i++)for(let s of[-1,1])e.add(R(.02,.8,1.1,b("#1A2233",{roughness:.1,metalness:.5}),s*1.21,2,-3.6+i*1.4));e.add(R(2.2,1,.02,b("#1A2233",{roughness:.1}),0,2,4.51));let t=R(.02,1.8,1,b("#2A2A34"),1.22,1.2,2.8);e.add(t);for(let i of[-3,3])for(let s of[-1,1]){let r=new O(new Ke(.45,.45,.3,20),b("#1A1A20"));r.rotation.z=Math.PI/2,r.position.set(s*1.1,.45,i),e.add(r)}return e}function sy(n,e=.5){let t=new ce,i=ve(1024,256,r=>{r.clearRect(0,0,1024,256);let o=Ne(77);for(let a=0;a<70;a++){let l=r.createRadialGradient(o()*1024,128+(o()-.5)*90,0,0,0,0)}for(let a=0;a<40;a++){let l=o()*1024,c=128+(o()-.5)*70,h=40+o()*80,d=r.createRadialGradient(l,c,0,l,c,h);d.addColorStop(0,["rgba(200,180,255,.22)","rgba(255,220,200,.2)","rgba(170,200,255,.2)"][a%3]),d.addColorStop(1,"rgba(0,0,0,0)"),r.fillStyle=d,r.fillRect(0,0,1024,256)}r.fillStyle="rgba(20,10,30,.35)";for(let a=0;a<18;a++)r.beginPath(),r.ellipse(o()*1024,128+(o()-.5)*30,40+o()*60,6+o()*8,(o()-.5)*.3,0,7),r.fill();for(let a=0;a<2600;a++){let l=128+(o()+o()+o()-1.5)*70;r.fillStyle=`rgba(255,255,255,${.3+o()*.7})`;let c=o()<.03?2.4:1.2;r.fillRect(o()*1024,l,c,c)}}),s=new O(new Ae(400,100),new nt({map:i,transparent:!0,depthWrite:!1,fog:!1,blending:Rn}));return s.position.set(0,60,-150),s.rotation.z=e,t.add(s),n.add(t),t}function ry(n,e=0,t=-1){for(let i=0;i<4;i++){let s=R(5,.22,.6,b("#5A3E2A",{roughness:1}),e,.1,t-i*1.1);s.receiveShadow=!0,n.add(s);for(let r=0;r<7;r++){let o=new O(new un(.16,.35,6),b(["#4F7A44","#6E9A50"][r%2]));o.position.set(e-2.1+r*.7,.38,t-i*1.1),n.add(o)}}}function $h(n,e=40,t=3,i=[-12,12,-40,4]){let s=Ne(t),r=ve(256,512,o=>{o.clearRect(0,0,256,512),o.strokeStyle="#3E6A34",o.lineWidth=6,o.beginPath(),o.moveTo(128,512);for(let a=512;a>0;a-=20)o.lineTo(128+Math.sin(a*.05)*40,a);o.stroke();for(let a=0;a<60;a++){o.fillStyle=["#4F8A44","#6EA850","#3E6A34"][a%3],o.beginPath();let l=s()*512;o.ellipse(128+Math.sin(l*.05)*40+(s()-.5)*60,l,16,10,s()*3,0,7),o.fill()}});for(let o=0;o<e;o++){let a=1.5+s()*4,l=Fe(r,a*.5,a),c=s()<.5?-1:1;l.position.set(c*(8.8+s()*.4),a/2,i[2]+s()*(i[3]-i[2])),l.rotation.y=c*-Math.PI/2,n.add(l)}}function F0(n,e=200,t=5,i=10,s=30,r=2){let o=Ne(t),a=ve(64,64,l=>{l.clearRect(0,0,64,64),l.fillStyle="#6E9A50";for(let c=0;c<7;c++)l.beginPath(),l.moveTo(10+c*7,64),l.lineTo(14+c*7+(c-3)*3,10+c%3*8),l.lineTo(18+c*7,64),l.fill()});for(let l=0;l<e;l++){let c=Fe(a,.5,.5);c.position.set((o()-.5)*i,.25,r-o()*s),c.rotation.y=o()*3,n.add(c)}}me.pasteleria=n=>{n.fog=new xe("#F3D2C0",.02),n.add(yi(16,14,"#F2E6DA","#E2CFC0",8)),n.add(R(16,5,.3,b("#E89AA8"),0,2.5,-3.2));for(let i=0;i<6;i++)n.add(R(.12,5,.05,b("#F6C2CC"),-6+i*2.4,2.5,-3.02));n.add(R(5.4,1,.9,b("#8A5A3C"),0,.5,-1.2)),n.add(R(5.5,.08,1,b("#F4EEE6"),0,1.04,-1.2)),n.add(R(3.6,.1,.5,b("#F4EEE6"),0,2.1,-3)),n.add(R(3.6,.1,.5,b("#F4EEE6"),0,2.9,-3));let e=Fe(bt(["PASTELER\xCDA"],{bg:"#6C4A2C",fg:"#FFE7B8",size:80,w:768,h:160}),2.8,.58);e.position.set(0,3.9,-3),n.add(e),n.add(new Re("#FFF0F0","#A07060",1));let t=je("#FFE6C8",1.8,[3,8,6],8,30);n.add(t);for(let i=0;i<3;i++){let s=new it("#FFD8A8",5,7,1.6);s.position.set(-2+i*2,3.4,-.5),n.add(s)}};me.espacio=n=>{n.background=new le("#05060E"),vn(n,2600,200,3),n.add(new Re("#8FA8FF","#101020",.5));let e=new Ei("#FFF4E0",3.2);e.position.set(-10,6,8),n.add(e)};me.aula=n=>{n.fog=new xe("#E8DCC8",.02),n.add(yi(16,16,"#C9B89A","#BBA98A",10)),n.add(R(16,5,.3,b("#E8DCC0"),0,2.5,-3.6)),n.add(R(4.4,1.8,.06,b("#2F5A48"),0,2.3,-3.42)),n.add(R(4.6,.1,.2,b("#8E6242"),0,1.36,-3.35));let e=Fe(ve(512,200,t=>{t.clearRect(0,0,512,200),t.fillStyle="#F4F0E4",t.font="700 60px Caveat",t.fillText("EXAMEN  \u2014  2 + 2 = ?",30,90),t.fillText("x\xB2 \u2212 9 = 0",60,170)}),3.4,1.3);e.position.set(0,2.35,-3.38),n.add(e),n.add(new Re("#FFFFFF","#9A8A70",1)),n.add(je("#FFE8C8",2.2,[-6,8,6],10,40))};me.ruaV=(n,e)=>{Eo(n,{seed:e.seed||0,night:e.night,dusk:e.dusk}),e.selva&&($h(n,60,4),F0(n,260,6,9,40))};me.apagon=(n,e)=>{n.fog=new xe("#0A0C18",.03),ht(n,-170,500,240,[[0,"#04050C"],[.6,"#0C1028"],[1,"#1A1A34"]]),vn(n,1800,200,4),Za(n,!0);let t=6,i=0;for(;t>-60;){let s=7+i*37%5;n.add(rs(300+i,{x:13,z:t-s/2,w:8,d:s,floors:5,side:-1,night:!0,lit:0})),n.add(rs(400+i,{x:-13,z:t-s/2,w:8,d:s,floors:6,side:1,night:!0,lit:0})),t-=s,i++}n.add(new Re("#5A64A8","#141420",.5)),n.add(je("#8A9AE0",.7,[-10,20,10],30,90))};me.azotea=(n,e)=>{n.background=new le("#03040A"),n.fog=new xe("#060814",.008),vn(n,4200,200,9),sy(n,e.ang??.45),oi(n,-60,300,30,["#0E1020","#121428","#161830"],!1,7);let t=R(16,.3,12,b("#3A3A44",{roughness:1}),0,-.15,-2);t.receiveShadow=!0,n.add(t),n.add(R(16,.5,.2,b("#4A4A54"),0,.25,-8)),n.add(R(1.4,1.2,1.4,b("#4A4A54"),4.5,.6,-5)),n.add(new Re("#6A78C8","#141420",.55)),n.add(je("#9AAAF0",.6,[-6,10,6],12,40))};me.panaderia=n=>{me.pasteleria(n);let e=Fe(bt(["PANADER\xCDA"],{bg:"#6C4A2C",fg:"#FFE7B8",size:80,w:768,h:160}),2.8,.58);e.position.set(0,3.9,-2.98),n.add(e)};me.metro=n=>{n.background=new le("#0A0C10"),n.fog=new xe("#0C1014",.07);let e=b("#4A4E54",{roughness:.9,side:sn}),t=new O(new Ke(3.2,3.2,60,32,1,!0,0,Math.PI),e);t.rotation.set(Math.PI/2,0,Math.PI/2),t.rotation.order="YXZ";let i=new ce,s=new O(new Ke(3.2,3.2,60,32,1,!0),e);s.rotation.x=Math.PI/2,s.position.set(0,1.2,-20),i.add(s),n.add(i);let r=R(6.4,.1,60,b("#2A2C30"),0,-.05,-20);n.add(r);for(let o of[-.75,.75])n.add(R(.08,.12,60,b("#8A8E98",{metalness:.8,roughness:.3}),o,.1,-20));for(let o=0;o<40;o++)n.add(R(2.2,.08,.2,b("#3A2E26"),0,.03,5-o*1.5));for(let o=0;o<6;o++){let a=new it("#FFE0A0",4,8,1.8);a.position.set(2.2,3,2-o*8),n.add(a);let l=Ye("#FFE0A0",.5,.9);l.position.copy(a.position),n.add(l)}n.add(new Re("#8A90A0","#202024",1.1))};me.bosque=(n,e)=>{n.fog=new xe(e.nieve?"#E8EEF4":"#C8D0B8",.025),ht(n,-100,500,200,e.nieve?[[0,"#9AB0C8"],[1,"#EEF2F6"]]:[[0,"#8AA8C0"],[.7,"#C8D4C8"],[1,"#E8E4C8"]]),el(n,e.nieve?"#F2F4F8":"#6E8A48");let t=Ne(14);for(let i=0;i<26;i++)kt(n,(t()-.5)*30,-4-t()*22,1.2+t()*.8,e.nieve?["#4A6A5A","#5A7A6A","#E8EEF4","#FFFFFF"]:["#3E5F3A","#4F7A44","#6E9A50","#A9B65A"],i);if(e.ruina){let i=rs(55,{x:6,z:-14,w:10,d:8,floors:5,side:-1,night:!1,lit:0,col:"#A8A49A"});n.add(i),$h(n,0)}n.add(new Re("#E9EEFF","#5A6A4A",.95)),n.add(je("#FFE8C0",2.4,[-10,14,8],18,60))};me.rio=(n,e)=>{me.parque(n,e);let t=new O(new Ae(60,3.4),new Ce({color:"#4A8AB0",roughness:.08,metalness:.3}));t.rotation.x=-Math.PI/2,t.position.set(0,.02,-3.6),n.add(t)};me.playa=(n,e)=>{let t=!!e.dusk;n.fog=new xe(t?"#F2A880":"#CFE8F0",.006),ht(n,-200,900,300,t?[[0,"#3A3A78"],[.45,"#C86A88"],[.75,"#F6A060"],[1,"#FFD890"]]:[[0,"#4F9AD8"],[.6,"#9FD0E8"],[1,"#E8F4F0"]]);let i=Ye(t?"#FFC070":"#FFFFF0",t?30:16,.9);i.position.set(0,t?6:40,-220),i.material.fog=!1,n.add(i);let s=el(n,"#E8D4A0"),r=new O(new Ae(800,400),new Ce({color:t?"#5A6AA0":"#3A9AC0",roughness:.12,metalness:.4}));r.rotation.x=-Math.PI/2,r.position.set(0,.03,-206),n.add(r);let o=R(800,.02,.6,b("#F4F8FA"),0,.04,-6.2);if(n.add(o),n.userData.foam=o,e.roca){let a=new O(new Bi(1.1,0),b("#7A6A60"));a.scale.set(1.4,.55,1),a.position.set(0,.25,-1),a.castShadow=a.receiveShadow=!0,n.add(a)}n.add(new Re(t?"#FFC8A8":"#E9F4FF","#C8A878",1)),n.add(je(t?"#FFB070":"#FFF0D0",t?2.2:3,[0,t?5:16,-14],16,60))};me.svalbard=n=>{n.fog=new xe("#C8D8E8",.02),ht(n,-200,700,260,[[0,"#4A5A8A"],[.6,"#A8B8D8"],[1,"#E8EEF8"]]),el(n,"#F4F6FA");let e=Ne(19);for(let l=0;l<8;l++){let c=new O(new un(10+e()*12,10+e()*10,7),b("#E8EEF4",{roughness:1}));c.position.set(-40+l*12,4,-40-e()*30),n.add(c)}let t=new O(new Mt(14,32,16,0,Math.PI*2,0,Math.PI/2),b("#EEF2F6",{roughness:1}));t.scale.y=.5,t.position.set(0,0,-20),n.add(t);let i=R(3,4.4,6,b("#9A9EA4",{roughness:.8}),0,1.6,-6.5);i.rotation.x=-.18,n.add(i);let s=R(1.4,2.2,.1,b("#4A4E56",{metalness:.5}),0,1.1,-3.45);n.add(s);let r=Lt(2.6,1,"#7FE8FF",1.3);r.position.set(0,3.1,-3.3),r.rotation.x=-.18,n.add(r);let o=Ye("#7FE8FF",4,.35);o.position.set(0,3.1,-3),n.add(o);let a=[];for(let l=0;l<300;l++){let c=Ye("#FFFFFF",.05,.9);n.add(c),a.push([c,e()*20-10,e()*8,e()*12-8,e()])}n.userData.snow=a,n.add(new Re("#D8E8FF","#8A9AB0",1.1)),n.add(je("#F0F4FF",1.6,[-8,10,8],16,50))};me.huerto=(n,e)=>{me.parque(n,e),ry(n,0,-1.4)};me.biblio=n=>{n.fog=new xe("#4A3A2A",.03),n.add(ai(18,14,"#6D4A33")),n.add(R(18,6,.3,b("#5A3E2A"),0,3,-3.4));let e=Ne(8);for(let s=0;s<5;s++){n.add(R(14,.06,.4,b("#3E2A1C"),0,.5+s*.9,-3.05));for(let r=0;r<60;r++){let o=.1+e()*.1,a=.5+e()*.3;n.add(R(o,a,.3,b(["#8A3A2A","#2F5A48","#3A4F7A","#C9A06A","#6A3A5A"][r%5]),-6.8+r*.23,.5+s*.9+a/2+.03,-3.05))}}n.add(new Re("#FFE8C8","#3A2A1C",.7));let t=new it("#FFC880",10,8,1.6);t.position.set(0,2.6,.5),n.add(t);let i=Ye("#FFC880",1,.4);i.position.copy(t.position),n.add(i)};me.hotel=n=>{n.fog=new xe("#E8D8C0",.02),n.add(ai(18,14,"#8A5A3A")),n.add(R(18,6,.3,b("#C8B898"),0,3,-3.4));for(let i of[-3,3]){n.add(R(2.4,2.6,.05,b("#9FC8E8",{roughness:.05,metalness:.3,transparent:!0,opacity:.35}),i,2.4,-3.22));let s=Fe(ve(256,256,r=>{r.clearRect(0,0,256,256),r.strokeStyle="#FFFFFF",r.lineWidth=3;for(let o=0;o<9;o++)r.beginPath(),r.moveTo(128,128),r.lineTo(128+Math.cos(o*.7)*140,128+Math.sin(o*.7)*140),r.stroke()}),2.4,2.4);s.position.set(i,2.4,-3.18),n.add(s)}let e=R(3.2,.6,2.4,b("#F4F0E4"),0,.3,-1.6);n.add(e),n.add(R(3.3,1.4,.2,b("#6A3A2A"),0,.7,-2.8)),$h(n,0);let t=Fe(ve(256,256,i=>{i.clearRect(0,0,256,256);for(let s=0;s<90;s++)i.fillStyle=["#4F8A44","#6EA850"][s%2],i.beginPath(),i.ellipse(__sr()*256,__sr()*120,12,8,1,0,7),i.fill()}),3,3);t.position.set(3,3.6,-3.15),n.add(t),n.add(new Re("#FFF0E0","#8A6A4A",1)),n.add(je("#FFE0B0",2,[-4,8,6],10,30))};me.selva=n=>{n.fog=new xe("#7AA870",.05),ht(n,-100,400,200,[[0,"#4A7A5A"],[1,"#B8D8A0"]]),el(n,"#3E5A2A");let e=Ne(23);for(let t=0;t<40;t++)kt(n,(e()-.5)*26,-2-e()*18,1.6+e(),["#1E4A24","#2E6A34","#4A8A3E","#7AB048"],t);F0(n,160,9,12,12,3),n.add(new Re("#D8F0C8","#2A3A1A",.9)),n.add(je("#FFF0C0",2.2,[-6,14,4],14,50))};me.desierto=n=>{me.sabana(n,{})};var Qh=(n,e,t=200,i=200)=>{let s=new O(new Ae(t,i),b(e,{roughness:1}));return s.rotation.x=-Math.PI/2,s.receiveShadow=!0,n.add(s),s};var oy=(n,e={})=>{let{w:t=512,h:i=360,size:s=92,col:r="#1E2A55"}=e,o=Array.isArray(n)?n:[n];return ve(t,i,a=>{a.fillStyle="#FBF8EE",a.fillRect(0,0,t,i),a.strokeStyle="#D8D0BC",a.lineWidth=4,a.strokeRect(6,6,t-12,i-12),a.fillStyle=r,a.font=`700 ${s}px Caveat`,a.textAlign="center",a.textBaseline="middle",o.forEach((l,c)=>a.fillText(l,t/2,i/2+(c-(o.length-1)/2)*s*1.05))})};function Kh(n,e=.9,t={}){let i=oy(n,t),s=new O(new Ae(e,e*(t.h||360)/(t.w||512)),new Ce({map:i,roughness:.9,emissive:"#FFFFFF",emissiveMap:i,emissiveIntensity:t.glow??.25}));return s.renderOrder=3,s}function tl(n={}){let{w:e=10,h:t=7,col:i="#E8C8A0",win:s=[0,2.6,2,1.8],night:r=!1,inner:o="#F2D49A",lit:a=r,brick:l=!1,sill:c=.9}=n,h=new ce,[d,u,p,g]=s,E=()=>l?new Ce({map:Ja(i,3,3),roughness:.95}):b(i,{roughness:.9}),m=d-p/2+e/2,f=e/2-(d+p/2),_=u-g/2,v=t-(u+g/2);h.add(R(m,t,.3,E(),-e/2+m/2,t/2,0)),h.add(R(f,t,.3,E(),e/2-f/2,t/2,0)),h.add(R(p,_,.3,E(),d,_/2,0)),h.add(R(p,v,.3,E(),d,t-v/2,0));let y=b("#F4F0E4");for(let[N,k,X,ee]of[[d-p/2,u,.1,g+.1],[d+p/2,u,.1,g+.1],[d,u+g/2,p+.2,.1],[d,u,.05,g]])h.add(R(X,ee,.36,y,N,k,0));h.add(R(p+.4,.1,.5,y,d,u-g/2-.03,.12));let L=3.2,C=b(o,{roughness:.9});h.add(R(p+3,t,.2,C,d,t/2,-L)),h.add(R(.2,t,L,C,d-p/2-1.4,t/2,-L/2)),h.add(R(.2,t,L,C,d+p/2+1.4,t/2,-L/2)),h.add(R(p+3,.2,L,b("#8A6A4A"),d,_-c,-L/2)),h.add(R(p+3,.2,L,C,d,u+g/2+.5,-L/2));let w=new it("#FFC880",a?9:2.5,7,1.4);w.position.set(d,u+.6,-1.2),h.add(w);let F=Lt(p+2.6,t*.6,"#FFD9A0",a?.35:.08);F.position.set(d,u,-L+.12),h.add(F);let S=R(p-.04,g,.06,b("#E8E2D2",{roughness:.8}),d,u,.1);S.castShadow=!1,h.add(S);let A=[];for(let N=0;N<10;N++){let k=R(p-.04,.015,.07,"#B8B0A0",d,0,.11,!1);h.add(k),A.push([k,N])}let I=N=>{let k=Math.max(.001,g*N);S.scale.y=k/g,S.position.y=u+g/2-k/2,S.visible=N>.01,A.forEach(([X,ee])=>{let Z=u+g/2-(ee+.5)*g/10;X.visible=N>.01&&Z>u+g/2-k,X.position.y=Z})};return I(0),h.userData={persiana:I,luz:N=>{w.intensity=N?9:2.5,F.material.emissiveIntensity=N?.35:.08},win:s,lamp:w},h.children.forEach(N=>{N.castShadow=N.castShadow??!0,N.receiveShadow=!0}),h}function yo(n={}){let{col:e="#E8C8A0",roof:t="#A8442E",w:i=7,h:s=5.6,d:r=7,door:o="#3E6A5A",night:a=!1}=n,l=new ce;l.add(R(i,s,r,b(e,{roughness:.9}),0,s/2,-r/2));let c=new O(new Ke(.01,i*.62,2.4,4,1),b(t,{roughness:.8}));c.rotation.y=Math.PI/4,c.scale.set(1,1,r/i),c.position.set(0,s+1.2,-r/2),c.castShadow=!0,l.add(c),l.add(R(1.1,2.1,.1,b(o),0,1.05,.02)),l.add(R(.08,.08,.08,"#E9B44C",.38,1,.1));let h=()=>new Ce({color:"#1A2233",emissive:a?"#FFC880":"#000",emissiveIntensity:a?.7:0,roughness:.1,metalness:.3});for(let[d,u]of[[-2.2,1.6],[2.2,1.6],[-2.2,4.1],[2.2,4.1]])l.add(R(1.3,1.2,.06,h(),d,u,.03)),l.add(R(1.5,.1,.2,"#F4F0E4",d,u-.65,.08));return l.add(R(2,.2,1.2,b("#B8AC9D"),0,.1,.6)),l.children.forEach(d=>{d.castShadow=!0,d.receiveShadow=!0}),l}function Jh(n=4){let e=new ce,t=Ne(n*7);for(let i=0;i<n*3;i++){let s=new O(new Mt(.42+t()*.12,12,10),b(["#3E6A34","#4F7A44","#5A8A48"][i%3],{roughness:1}));s.position.set(-n/2+i/3+.15,.5+t()*.25,(t()-.5)*.2),s.castShadow=!0,e.add(s)}return e}function P0(n=8,e="#E8E2D2"){let t=new ce;for(let i=0;i<=n*4;i++)t.add(R(.1,1.3,.05,b(e),-n/2+i*.25,.65,0));for(let i of[.35,1.05])t.add(R(n,.08,.06,b(e),0,i,-.04));return t.children.forEach(i=>i.castShadow=!0),t}function nl(){let n=new ce,e=Ne(4);for(let t=0;t<7;t++){let i=new O(new Mt(.35,12,10),b("#3E6A34",{roughness:1}));i.position.set((e()-.5)*1.4,.35+e()*.3,(e()-.5)*.5),n.add(i)}for(let t=0;t<16;t++){let i=new O(new Mt(.08,10,8),b(["#D8344A","#E8667F"][t%2],{roughness:.5}));i.position.set((e()-.5)*1.5,.55+e()*.4,(e()-.5)*.6+.2),n.add(i)}return n.children.forEach(t=>t.castShadow=!0),n}function ay(){let n=new ce;n.add(R(2.2,2,1.8,b("#8A6A4A",{roughness:.9}),0,1,0));let e=R(2.6,.12,2.3,b("#5A3E2A"),0,2.12,0);return n.add(e),n.add(R(.8,1.5,.05,b("#5A3E2A"),0,.75,.92)),n.children.forEach(t=>{t.castShadow=!0,t.receiveShadow=!0}),n}function I0(n=.6){let e=R(n,n*.8,n,b("#C9A06A",{roughness:.9}),0,n*.4,0);return e.add(R(n*1.01,.06,.15,b("#E8D8A8"),0,n*.4,0)),e}function L0(){let n=new ce;n.add(R(.04,1.4,.04,b("#E8667F"),0,.7,0));let e=new O(new Mt(.28,16,12),new Ce({color:"#FF8AA8",emissive:"#FF6A90",emissiveIntensity:.5}));e.scale.set(1.3,.8,.8),e.position.y=1.5,n.add(e);let t=new O(new cn(.18,.04,8,16,Math.PI*1.2),b("#FF8AA8"));t.position.set(.25,1.75,0),n.add(t);let i=Ye("#FF9AB8",1.2,.4);return i.position.y=1.5,n.add(i),n}function D0(n=.9,e=1.2){let t=ve(360,480,r=>{r.fillStyle="#BFE0F2",r.fillRect(0,0,360,480),r.fillStyle="#FFFFFF",r.beginPath(),r.ellipse(180,270,95,55,0,0,7),r.fill(),r.beginPath(),r.ellipse(270,200,30,50,.5,0,7),r.fill();for(let o of[120,150,210,240])r.fillRect(o,300,16,100);r.fillStyle="#F2C1E0",r.beginPath(),r.moveTo(170,240),r.quadraticCurveTo(80,90,40,140),r.quadraticCurveTo(100,180,170,260),r.fill(),r.fillStyle="#E9B44C",r.beginPath(),r.moveTo(280,160),r.lineTo(300,100),r.lineTo(295,165),r.fill(),r.fillStyle="#7F6BC4",r.font="700 46px Caveat",r.textAlign="center",r.fillText("\xA1VUELA ALTO!",180,455)}),i=new ce;i.add(R(n+.08,e+.08,.04,"#2A1E18",0,0,0));let s=new O(new Ae(n,e),b("#fff"));return s.material.map=t,s.position.z=.025,i.add(s),i}function U0(n=.9,e=1.2){let t=ve(360,480,r=>{r.fillStyle="#1E1A30",r.fillRect(0,0,360,480),r.fillStyle="#E8667F",r.beginPath(),r.arc(180,210,120,0,7),r.fill(),r.fillStyle="#1E1A30",r.beginPath(),r.arc(180,210,40,0,7),r.fill(),r.fillStyle="#F2C14E",r.font="900 60px Fraunces",r.textAlign="center",r.fillText("LOS GRILLOS",180,420)}),i=new ce;i.add(R(n+.08,e+.08,.04,"#111",0,0,0));let s=new O(new Ae(n,e),b("#fff"));return s.material.map=t,s.position.z=.025,i.add(s),i}var ly=(n,e)=>{me.quarto(n,e);let t=D0();t.position.set(-3,2.8,-2.8),n.add(t)};me.cuartoYo=(n,e)=>{ly(n,e);let t=tl({w:18,h:9,col:e.night?"#7A6A88":"#E8C8A0",win:[1,2.2,1.7,1.6],night:!!e.night,lit:e.lit??!!e.night,inner:"#F2C8D0"});t.position.set(0,-.2,-6.2),n.add(t),n.userData.her=t;let i=L0();i.position.set(-.4,.4,-8.6),i.scale.setScalar(.9),n.add(i);let s=U0(.7,.9);s.position.set(1.9,2.6,-9.2),n.add(s),e.night&&vn(n,600,120,2)};me.cuartoElla=(n,e)=>{me.sala(n,{wall:"#6E5A9A",night:e.night}),n.add(R(2.4,.45,3.2,b("#6B4A33"),1.7,.25,-1.4)),n.add(R(2.3,.3,3,b("#F3EEE4"),1.7,.6,-1.4)),n.add(R(2.38,.22,2,b("#E8667F",{roughness:.9}),1.7,.8,-.7));let t=L0();t.position.set(-3.2,0,-2.2),n.add(t);let i=U0();i.position.set(-3.6,2.8,-2.8),n.add(i);let s=tl({w:18,h:9,col:e.night?"#6A5A50":"#D8B890",win:[-1,2.2,1.7,1.6],night:!!e.night,lit:e.lit??!!e.night,inner:"#C8D8E8"});s.position.set(0,-.2,-6.2),n.add(s),n.userData.me=s;let r=D0(.6,.8);r.position.set(-2.2,2.6,-9.2),n.add(r),e.night&&vn(n,600,120,2)};me.entreCasas=(n,e)=>{let t=!!e.night;n.background=new le(t?"#0A0C1E":"#9FC8E8"),n.fog=new xe(t?"#0E1028":"#CFE0EE",.02),ht(n,-60,300,140,t?[[0,"#05060E"],[.6,"#141838"],[1,"#2A2A50"]]:[[0,"#6FA7D8"],[.6,"#CFE0E8"],[1,"#FFE7BE"]]),t&&vn(n,1600,120,5),Qh(n,t?"#24301E":"#6E9A50");let i=tl({w:9,h:8,col:t?"#6A5A50":"#D8B890",win:[0,4.2,1.7,1.8],night:t,lit:t,inner:"#C8D8E8"});i.position.set(-2.3,0,-1),i.rotation.y=.62,n.add(i);let s=tl({w:9,h:8,col:t?"#7A6A88":"#E8C8A0",win:[0,4.2,1.7,1.8],night:t,lit:t,inner:"#F2C8D0"});s.position.set(2.3,0,-1),s.rotation.y=-.62,n.add(s),n.userData.me=i,n.userData.her=s;let r=P0(10);r.rotation.y=Math.PI/2,r.position.set(0,0,2),n.add(r),n.add(new Re(t?"#6E74C0":"#E9EEFF",t?"#1A1A24":"#6A5A4A",t?.55:1)),n.add(je(t?"#9FB0FF":"#FFD29A",t?.5:2.6,[6,14,10],14,40))};me.barrio=(n,e)=>{let t=!!e.night,i=!!e.dusk;n.fog=new xe(t?"#1A1A30":i?"#E8A880":"#F2E2C8",.012),ht(n,-120,500,200,t?[[0,"#05060E"],[.6,"#141838"],[1,"#2A2A50"]]:i?[[0,"#3A3A78"],[.5,"#B86A88"],[.8,"#F29A6A"],[1,"#FFC88A"]]:[[0,"#6FA7D8"],[.6,"#CFE0E8"],[1,"#FFE7BE"]]),Qh(n,t?"#24301E":"#6E9A50");let s=R(200,.02,6,b(t?"#2A2A30":"#55545C",{roughness:.9}),0,.01,4);s.receiveShadow=!0,n.add(s);let r=R(200,.1,2,b("#B8AC9D"),0,.05,.2);r.receiveShadow=!0,n.add(r);let o=[[-13.5,"#C8D8B0","#5A6E8A"],[-4.5,"#D8B890","#A8442E"],[4.5,"#E8C8A0","#7A4A8A"],[13.5,"#B8D0E0","#A8442E"],[22.5,"#E8D8A8","#5A6E8A"],[-22.5,"#E0B8B0","#3E6A5A"]];for(let[h,d,u]of o){let p=yo({col:d,roof:u,night:t});p.position.set(h,0,-3),n.add(p)}let a=Jh(3);a.position.set(-7.6,0,-1.4),n.add(a);let l=Jh(3);l.position.set(-1.4,0,-1.4),n.add(l);let c=Jh(3);c.position.set(7.6,0,-1.4),n.add(c);for(let h of[-9,0,9,18])kt(n,h,-11,1.4,["#2E4F2C","#3B6636","#55813F","#A9B65A"],Math.abs(h));oi(n,-60,300,16,["#B8C8D8","#A8B8C8","#98A8B8"],t,9),n.add(new Re(t?"#6E74C0":"#E9EEFF","#6A5A4A",t?.6:1.05)),n.add(je(t?"#9FB0FF":i?"#FFB080":"#FFD29A",t?.6:2.8,[-14,16,12],24,70))};me.jardin=(n,e)=>{let t=!!e.dusk;n.fog=new xe(t?"#E8A880":"#F2E2C8",.015),ht(n,-100,400,200,t?[[0,"#3A3A78"],[.5,"#B86A88"],[.8,"#F29A6A"],[1,"#FFC88A"]]:[[0,"#6FA7D8"],[.6,"#CFE0E8"],[1,"#FFE7BE"]]),Qh(n,"#6E9A50");let i=P0(16);i.rotation.y=Math.PI/2,i.position.set(0,0,-2),n.add(i);let s=nl();s.position.set(1.6,0,-1.2),n.add(s);let r=nl();r.position.set(2.8,0,-2.6),n.add(r);let o=ay();o.position.set(-2.4,0,-3.2),n.add(o);let a=yo({col:"#D8B890",roof:"#A8442E"});a.position.set(-5,0,-9),a.rotation.y=0,n.add(a);let l=yo({col:"#E8C8A0",roof:"#7A4A8A"});l.position.set(5,0,-9),n.add(l);for(let c of[-12,12])kt(n,c,-8,1.3,["#2E4F2C","#3B6636","#55813F","#A9B65A"],Math.abs(c));n.add(new Re("#E9EEFF","#6A5A4A",1.05)),n.add(je(t?"#FFB080":"#FFD29A",2.8,[-10,14,10],14,50)),n.userData.caseta=o};me.esquina=(n,e)=>{me.barrio(n,e)};me.concurso=n=>{n.background=new le("#140C24"),n.fog=new xe("#1A1030",.03);let e=R(20,.2,12,b("#2A1E48",{metalness:.3,roughness:.4}),0,-.1,-2);e.receiveShadow=!0,n.add(e);for(let r=0;r<9;r++){let o=Ye(["#FF5A9A","#5AC8FF","#F2C14E"][r%3],1,.9);o.position.set(-6+r*1.5,5,-6),n.add(o)}let t=Fe(bt(["\xBFQUI\xC9N SABE M\xC1S?"],{bg:"#3A1E6A",fg:"#F2C14E",size:90,w:1024,h:180}),6,1.05);t.position.set(0,4,-5.8),n.add(t);let i=R(1.2,1.1,.7,b("#C9361F",{metalness:.3}),0,.55,-.6);n.add(i),n.add(R(1.3,.1,.8,b("#F2C14E"),0,1.12,-.6)),n.add(new Re("#B8A8FF","#2A1A3A",.9));let s=new Fn("#FFF2D8",60,20,.5,.5,1.2);s.position.set(0,8,4),s.target.position.set(0,1,-.6),s.castShadow=!0,n.add(s,s.target)};me.residencia=n=>{n.fog=new xe("#E8DCC8",.02),n.add(ai(20,14,"#8A6A4A")),n.add(R(20,4,.3,b("#E8DCC0"),0,2,-3.4));for(let e=0;e<8;e++){n.add(R(1,2.2,.08,b("#6B4A33"),-7+e*2,1.1,-3.2));let t=Fe(bt([String(e+1)],{bg:"#F2C14E",fg:"#2A2A34",size:90,w:160,h:140}),.4,.35);t.position.set(-7+e*2,2.5,-3.15),n.add(t)}n.add(new Re("#FFFFFF","#9A8A70",1)),n.add(je("#FFE8C8",2,[-6,8,6],12,40))};var sl=(n,e,t=200,i=200)=>{let s=new O(new Ae(t,i),b(e,{roughness:1}));return s.rotation.x=-Math.PI/2,s.receiveShadow=!0,n.add(s),s},il=["#2E4F2C","#3B6636","#55813F","#A9B65A"],H0=["#0E1A16","#13221C","#1A2C22","#22382A"],rl=(n,e=-60,t="#7A8AA8",i="#F4F6FA",s=4,r=9)=>{let o=Ne(s);for(let a=0;a<r;a++){let l=14+o()*16,c=12+o()*10,h=new O(new un(c,l,7),b(t,{roughness:1}));if(h.position.set(-70+a*17+o()*6,l/2-1,e-o()*25),n.add(h),i){let d=new O(new un(c*.34,l*.34,7),b(i,{roughness:1}));d.position.set(h.position.x,l-l*.17-1,h.position.z),n.add(d)}}},jh=(n,e,t,i,s,r="#4A8AB0",o=!1)=>{let a=new O(new ln(1,48),new Ce({color:r,roughness:.08,metalness:.35,emissive:o?"#0A1A30":"#000",emissiveIntensity:o?.6:0}));return a.rotation.x=-Math.PI/2,a.scale.set(i,s,1),a.position.set(e,.02,t),a.receiveShadow=!0,n.add(a),a};me.albergue=(n,e)=>{let t=!!e.dusk;n.fog=new xe(t?"#E8B090":"#D8E4E8",.012),ht(n,-200,700,260,t?[[0,"#3A3A78"],[.5,"#B86A88"],[.8,"#F29A6A"],[1,"#FFC88A"]]:[[0,"#4F8AC8"],[.6,"#BFD8EC"],[1,"#EEF4F0"]]),rl(n,-70,t?"#6A5A88":"#7A8EAE"),sl(n,"#6E9A48");let i=yo({col:"#9A6A44",roof:"#5A3A2A",w:9,h:4.2,d:6,door:"#4A2E1E"});i.position.set(-3.5,0,-7),n.add(i);let s=Fe(bt(["ALBERGUE LOS PINOS"],{bg:"#4A2E1E",fg:"#F2C14E",size:70,w:900,h:150}),3.2,.54);s.position.set(-3.5,3.4,-6.9),n.add(s),jh(n,6,-9,6,3.2);let r=Ne(31);for(let o=0;o<22;o++){let a=(r()-.5)*40;Math.abs(a+3.5)<6&&o<14||kt(n,a,-10-r()*16,1.3+r()*.7,il,o)}for(let[o,a]of[[-9,-3],[9,-4],[-11,-6]])kt(n,o,a,1.4,il,o|0);n.add(new Re("#E9EEFF","#5A6A4A",1)),n.add(je(t?"#FFB080":"#FFE2B0",t?2.2:2.8,[-10,16,10],16,70))};me.gymkana=(n,e)=>{n.fog=new xe("#D8E4E8",.012),ht(n,-200,700,260,[[0,"#4F8AC8"],[.6,"#BFD8EC"],[1,"#EEF4F0"]]),rl(n,-70),sl(n,"#7AA850"),jh(n,0,-9,9,3.4);let t=Ne(7);for(let s=0;s<18;s++)kt(n,(t()-.5)*44,-14-t()*14,1.3+t()*.6,il,s);let i=new O(new ln(1,32),b("#6A4A2E",{roughness:.4}));i.rotation.x=-Math.PI/2,i.scale.set(1.6,1,1),i.position.set(1.2,.015,-1.2),n.add(i);for(let s of[-3,3]){let r=new O(new un(.18,.45,12),b("#F2A766"));r.position.set(s,.22,.8),n.add(r)}n.add(new Re("#E9EEFF","#5A6A4A",1)),n.add(je("#FFE2B0",2.8,[-10,16,10],16,70))};me.lagoNoche=(n,e)=>{n.background=new le("#05071A"),n.fog=new xe("#0A0E24",.02),vn(n,4200,200,11),ht(n,-150,600,220,[[0,"#03040E"],[.6,"#0E1434"],[1,"#22284A"]]),rl(n,-80,"#141A30","#3A4460",6),sl(n,"#1E2A20"),jh(n,0,-8,12,4,"#1A2A48",!0);let t=Ne(17);for(let r=0;r<24;r++){let o=(t()-.5)*40;kt(n,o,-14-t()*14,1.3+t()*.6,H0,r)}for(let[r,o]of[[-6,-2],[6.5,-3],[-8,-5]])kt(n,r,o,1.3,H0,r*3|0);let i=Ye("#F4F0D8",5,.9);i.position.set(14,22,-90),i.material.fog=!1,n.add(i),n.add(new Re("#6A78C8","#10141E",.55));let s=new Ei("#9AA8E8",.6);s.position.set(8,12,-6),n.add(s)};me.cima=(n,e)=>{n.fog=new xe("#E4EEF4",.006),ht(n,-200,900,300,[[0,"#2F6AB8"],[.55,"#8EC0E8"],[1,"#F4F8FA"]]);let t=new O(new Ae(800,800),b("#F6F8FA",{roughness:1}));t.rotation.x=-Math.PI/2,t.position.y=-14,n.add(t);let i=Ne(9);for(let l=0;l<40;l++){let c=Ye("#FFFFFF",18+i()*14,.55);c.position.set((i()-.5)*300,-12+i()*3,-40-i()*200),n.add(c)}for(let l=0;l<6;l++){let c=10+i()*8,h=new O(new un(8+i()*6,c,6),b("#8A8EA0"));h.position.set(-60+l*24,-14+c/2,-90-i()*40),n.add(h);let d=new O(new un(3,c*.3,6),b("#F4F6FA"));d.position.set(h.position.x,-14+c*.85,h.position.z),n.add(d)}let s=new O(new Ke(4.5,9,14,9),b("#8A8070",{roughness:1}));s.position.set(0,-7,-1),n.add(s);let r=new O(new ln(4.6,9),b("#9A9070",{roughness:1}));r.rotation.x=-Math.PI/2,r.position.set(0,.01,-1),n.add(r);for(let l=0;l<10;l++){let c=new O(new Bi(.3+i()*.4),b("#7A7262")),h=i()*6.28;c.position.set(Math.cos(h)*(3+i()),.1,-1+Math.sin(h)*(2.5+i())),!(c.position.z>1.2)&&n.add(c)}n.add(R(.5,1,.5,b("#C8C0A8"),-2.6,.5,-2.6));let o=R(.06,.9,.06,b("#3A3A40"),-2.6,1.45,-2.6);n.add(o),n.add(R(.5,.06,.06,b("#3A3A40"),-2.6,1.6,-2.6));let a=Fe(bt(["PICO \xB7 2.130 m"],{bg:"#FBF7EC",fg:"#2A2A34",size:70,w:600,h:150}),1,.25);a.position.set(-2.6,.75,-2.34),n.add(a),n.add(new Re("#EEF4FF","#8A8070",1.05)),n.add(je("#FFF0D0",3,[-8,18,10],12,60))};me.sendero=(n,e)=>{n.fog=new xe("#C8D8C8",.02),ht(n,-200,700,260,[[0,"#5F96C8"],[.6,"#BFD4E0"],[1,"#EEF0E4"]]),rl(n,-60,"#7A8EAE"),sl(n,"#6E8A48");let t=new O(new Ae(2.2,60),b("#B49A72",{roughness:1}));t.rotation.x=-Math.PI/2,t.position.set(0,.012,-20),n.add(t);let i=Ne(23);for(let s=0;s<30;s++){let r=i()<.5?-1:1;kt(n,r*(2.6+i()*12),2-i()*30,1.2+i()*.7,il,s)}for(let s=0;s<8;s++){let r=new O(new Bi(.2+i()*.3),b("#8A8070"));r.position.set((i()<.5?-1:1)*(1.3+i()),.1,-i()*10),n.add(r)}n.add(new Re("#E9EEFF","#5A6A4A",1)),n.add(je("#FFE2B0",2.6,[-10,16,10],16,70))};me.comedor=(n,e)=>{n.background=new le("#0E0A1E"),n.fog=new xe("#140E2A",.03),n.add(ai(20,14,"#6A4A30")),n.add(R(20,5,.3,b("#5A3A2A"),0,2.5,-4.2));for(let a of[-1,1])n.add(R(.3,5,14,b("#5A3A2A"),a*8,2.5,0));for(let a=0;a<9;a++)n.add(R(.12,5,.1,b("#3A2418"),-8+a*2,2.5,-4));let t=Fe(bt(["FIESTA FIN DE CURSO"],{bg:"#E8447A",fg:"#FFFFFF",size:80,w:1100,h:170}),4,.62);t.position.set(0,3.6,-4),n.add(t);for(let a of[-5.2,5.2]){n.add(R(1,.08,4,b("#8E6242"),a,.78,-1.2));for(let[l,c]of[[-1,-2.8],[1,-2.8],[-1,.4],[1,.4]])n.add(R(.06,.78,.06,b("#3A2418"),a+l*.4,.39,c))}let i=[];for(let a=0;a<26;a++){let l=-7+a*.56,c=Ye(["#FF6A9A","#6AD8FF","#FFD84A","#9AFF8A"][a%4],.35,.9);c.position.set(l,3-Math.sin(a/25*Math.PI)*.5,-3.8),n.add(c),i.push(c)}let s=new O(new ln(2.8,48),new Ce({color:"#2A2240",roughness:.2,metalness:.4,emissive:"#4A2A7A",emissiveIntensity:.35}));s.rotation.x=-Math.PI/2,s.position.set(0,.015,-.8),n.add(s);let r=[];for(let[a,l]of[["#FF3A8A",-3],["#3AB8FF",0],["#FFD83A",3]]){let c=new it(a,10,9,1.4);c.position.set(l,3.2,0),n.add(c),r.push(c)}n.add(new Re("#8A7AC8","#20142A",.55));let o=new Fn("#FFE8F0",30,14,.6,.6,1.2);o.position.set(0,6,3),o.target.position.set(0,0,-.8),o.castShadow=!0,n.add(o,o.target),n.userData.disco=a=>{r.forEach((l,c)=>{l.position.x=Math.sin(a*.9+c*2.1)*3.5,l.intensity=8+Math.sin(a*5+c)*3}),i.forEach((l,c)=>l.material.opacity=.55+.45*Math.sin(a*4+c))}};me.salida=(n,e)=>{let t=!!e.dusk,i=!!e.manana;me.barrio(n,{dusk:t});let s=C0("#F2C14E");s.rotation.y=Math.PI/2,s.position.set(1,0,-3.4),n.add(s);let r=Fe(bt(["VIAJE FIN DE CURSO"],{bg:"#2F5A9A",fg:"#FFFFFF",size:70,w:900,h:140}),2.6,.4);if(r.position.set(1,2.3,-2.18),n.add(r),i){let o=new Ei("#FFD0A0",.8);o.position.set(10,3,6),n.add(o)}};var _o=(n,e,t=200,i=200,s={})=>{let r=new O(new Ae(t,i),b(e,{roughness:1,...s}));return r.rotation.x=-Math.PI/2,r.receiveShadow=!0,n.add(r),r},vo=(n,e=1.6)=>new Ce({color:n,emissive:n,emissiveIntensity:e});function ed(n=2.6){let e=new ce,t=ve(1024,300,s=>{s.clearRect(0,0,1024,300),s.fillStyle="#E2231A",s.beginPath(),s.roundRect(10,30,780,240,60),s.fill(),s.fillStyle="#fff",s.font="900 112px Inter",s.textAlign="center",s.textBaseline="middle",s.fillText("SUSCR\xCDBETE",400,156),s.fillStyle="#F2C14E",s.beginPath(),s.arc(910,150,100,0,7),s.fill(),s.fillStyle="#2A2A34",s.beginPath(),s.moveTo(860,190),s.quadraticCurveTo(870,80,910,78),s.quadraticCurveTo(950,80,960,190),s.closePath(),s.fill(),s.fillRect(850,186,120,16),s.beginPath(),s.arc(910,214,14,0,7),s.fill(),s.beginPath(),s.arc(910,70,10,0,7),s.fill()}),i=Fe(t,n,n*300/1024,{blend:!0});return i.renderOrder=6,e.add(i),e.userData.m=i,e}function cy(n="#FFB25A"){let e=new ce,t=new O(new Ke(.16,.12,.34,12),vo(n,1.8));e.add(t);let i=Ye(n,1,.55);return e.add(i),e}var hy=(n,e,t,i=3)=>{let s=Ne(i),r=["#F2A8C8","#FBF7EC","#F2C14E","#B48AE8","#E8667F"];for(let o=0;o<e;o++){let a=new O(new Mt(.07+s()*.06,10,8),vo(r[o%5],.4));a.position.set((s()-.5)*t[0],.06,t[2]-s()*t[1]),n.add(a);let l=R(.02,.12,.02,b("#3E8A52"),a.position.x,.02,a.position.z,!1);n.add(l)}};me.desvan=(n,e)=>{let t=!!e.night;n.background=new le("#1A120C"),n.fog=new xe("#2A1C12",.05),n.add(ai(16,14,"#6A4630"));for(let h of[-1,1]){let d=R(16,.15,7.5,b("#5A3A26",{roughness:.9}),0,0,0);d.position.set(0,3.3,-1.2+h*2.3),d.rotation.x=h*-.62,d.position.y=3.2,d.position.z=h>0?2.4:-4.4,d.rotation.x=h>0?.62:-.62,h<0&&n.add(d)}n.add(R(16,6,.2,b("#4E3422",{roughness:1}),0,2.5,-4.6));for(let h=0;h<6;h++){let d=R(.22,.22,9,b("#3A2618"),-6+h*2.4,4.4,-1);n.add(d)}let i=Ne(6);for(let h=0;h<9;h++){let d=I0(.5+i()*.5);d.position.set(-5+i()*10,0,-3.6+i()*1.2),d.rotation.y=i(),Math.abs(d.position.x)>1.4&&n.add(d)}let s=R(1.4,.8,.7,b("#6A3A22",{roughness:.7}),-3.2,.4,-2.2);n.add(s),n.add(R(1.44,.1,.74,b("#C9A06A",{metalness:.4}),-3.2,.55,-2.2));let r=Lt(.9,.9,t?"#5A6AA8":"#FFE2A8",t?.6:1.6);r.position.set(2.6,2.9,-4.48),n.add(r);let o=Ns(1.4,7,t?"#9FB0FF":"#FFD9A0",t?.08:.2);o.position.set(1.6,1.7,-2.6),o.rotation.set(-.2,0,-.75),n.add(o);let a=new O(new Mt(.09,12,10),vo("#FFD089",2));a.position.set(0,3.1,-1.2),n.add(a),n.add(R(.01,1.2,.01,"#111",0,3.75,-1.2,!1));let l=new it("#FFB66E",9,9,1.4);l.position.set(0,3,-1),l.castShadow=!0,n.add(l),n.add(new Re("#FFD8A8","#3A2418",.55));let c=[];for(let h=0;h<40;h++){let d=Ye("#FFE8C0",.05,.6);d.position.set(.5+i()*2.4,.6+i()*2.6,-3+i()*2.6),n.add(d),c.push(d)}n.userData.dust=c};me.pasillo=(n,e)=>{n.background=new le("#1A1036"),n.fog=new xe("#2A1850",.045),vn(n,1600,120,7),_o(n,"#C8A8E8",8,120,{roughness:.9}).position.z=-40;let t=Ne(11),i=["#E8667F","#36AEA2","#F2C14E","#4A86C7","#7F6BC4","#F2913A","#5FB04A"];for(let u=0;u<26;u++)for(let p of[-1,1]){let g=-2-u*2.2,E=i[(u*2+(p>0?1:0))%i.length],m=R(.12,2.6,1.3,b("#F4ECD6"),p*2.4,1.3,g);n.add(m);let f=R(.08,2.3,1.05,b(E,{roughness:.6}),p*2.35,1.15,g);n.add(f);let _=new O(new Mt(.05,8,6),vo("#F2C14E",.6));_.position.set(p*2.29,1.1,g+.35),n.add(_)}let s=new ce,r=new ce;r.position.set(0,0,.55),s.add(r);let o=R(.08,2.3,1.05,b("#F2A8C8",{roughness:.5}),0,1.15,-.525);r.add(o);let a=new O(new Mt(.05,8,6),vo("#F2C14E",.8));a.position.set(-.06,1.1,-.9),r.add(a);let l=Fe(bt(["SARA"],{bg:"#FBF7EC",fg:"#C9361F",size:110,w:400,h:160}),.6,.24);l.position.set(-.06,1.85,-.525),l.rotation.y=-Math.PI/2,r.add(l);let c=Lt(.04,2.3,"#FFF0C8",2.2);c.rotation.y=-Math.PI/2,c.position.set(.05,1.15,-.525),s.add(c),s.position.set(2.35,0,-8.6),n.add(s),n.userData.door=r,n.userData.doorPos=[2.35,0,-8.6];for(let u=0;u<14;u++){let p=Ye(["#FFB2E0","#B2D8FF","#FFF2B0"][u%3],.25+t()*.3,.7);p.position.set((t()-.5)*4,.5+t()*3,-1-t()*30),n.add(p)}n.add(new Re("#D8C8FF","#4A3070",1));let h=new it("#FFE0F0",14,14,1.4);h.position.set(0,3,-4),n.add(h);let d=new it("#B8C8FF",10,14,1.4);d.position.set(0,3,-12),n.add(d)};me.playaSueno=(n,e)=>{n.fog=new xe("#E8B8E0",.018),ht(n,-120,600,240,[[0,"#6A4AB8"],[.45,"#C88AD8"],[.75,"#F6B8C8"],[1,"#FFE2D0"]]);let t=Ye("#FFF6E0",16,.9);t.position.set(10,22,-110),t.material.fog=!1,n.add(t);let i=new O(new ln(4,40),new nt({color:"#FFF6E8",fog:!1}));i.position.set(10,22,-112),n.add(i);let s=_o(n,"#F8EEF2",200,200),r=new O(new Ae(400,200),new Ce({color:"#B48AE8",roughness:.12,metalness:.35,emissive:"#6A3AA8",emissiveIntensity:.25}));r.rotation.x=-Math.PI/2,r.position.set(0,.03,-104),n.add(r),n.userData.sea=r;let o=R(400,.02,.3,b("#FFFFFF",{roughness:.5}),0,.04,-4.1,!1);n.add(o),n.userData.foam=o;let a=Ne(4);for(let l=0;l<70;l++){let c=Ye("#FFFFFF",.08+a()*.1,.8);c.position.set((a()-.5)*16,.05,2-a()*6),n.add(c)}for(let l=0;l<4;l++){let c=new ce;c.add(R(.18,2.8,.18,b("#E8A0C0"),0,1.4,0));let h=Ye(["#7FD08A","#F2C14E","#5AC8FF","#FF8AC8"][l],1.6,.8);h.position.y=3,c.add(h),c.position.set([-6,-3.6,4.5,7][l],0,[-2.6,-3.4,-3,-2][l]),n.add(c)}n.add(new Re("#FFE0F6","#B88AC8",1.15)),n.add(je("#FFD8E8",2,[8,14,-6],14,60))};me.baile=(n,e)=>{n.background=new le("#0E0A28"),n.fog=new xe("#1A1240",.03),vn(n,2400,160,3),ht(n,-100,500,200,[[0,"#0A0820"],[.6,"#2A1A58"],[1,"#6A3A78"]]),_o(n,"#3A2A5A");let t=new O(new ln(3.2,48),new Ce({color:"#F4E8F8",roughness:.25,metalness:.2,emissive:"#8A6AB8",emissiveIntensity:.25}));t.rotation.x=-Math.PI/2,t.position.set(0,.02,-1),t.receiveShadow=!0,n.add(t),hy(n,260,[16,12,3]);for(let[a,l]of[[-4.2,-2.4],[4.2,-2.4],[-5.2,-5],[5.2,-5],[0,-6]]){let c=nl();c.position.set(a,0,l),n.add(c)}let i=Ne(9),s=[];for(let a=0;a<22;a++){let l=cy(["#FFB25A","#FF8A6A","#FFD27A"][a%3]);l.position.set((i()-.5)*12,2.6+i()*4,-1-i()*9),l.userData.y0=l.position.y,l.userData.ph=i()*6,n.add(l),s.push(l)}n.userData.farol=s,n.add(new Re("#B8A8FF","#2A1A3A",.7));let r=new Fn("#FFE2C8",50,20,.6,.6,1.2);r.position.set(0,8,3),r.target.position.set(0,0,-1),r.castShadow=!0,n.add(r,r.target);let o=new it("#FFB25A",8,12,1.5);o.position.set(0,3.5,-2),n.add(o)};me.estadio=(n,e)=>{n.background=new le("#0A1020"),n.fog=new xe("#18203A",.02),vn(n,800,160,5);let t=ve(512,512,h=>{for(let d=0;d<8;d++)h.fillStyle=d%2?"#3E8A3E":"#4A9A46",h.fillRect(0,d*64,512,64);h.strokeStyle="#F4F4F4",h.lineWidth=6,h.strokeRect(20,20,472,472),h.beginPath(),h.moveTo(20,256),h.lineTo(492,256),h.stroke(),h.beginPath(),h.arc(256,256,60,0,7),h.stroke()}),i=new O(new Ae(40,40),new Ce({map:t,roughness:.9}));i.rotation.x=-Math.PI/2,i.position.z=-14,i.receiveShadow=!0,n.add(i);let s=new ce,r=b("#FFFFFF",{roughness:.4});s.add(R(.12,2.4,.12,r,-3.6,1.2,0),R(.12,2.4,.12,r,3.6,1.2,0),R(7.3,.12,.12,r,0,2.4,0));let o=new O(new Ae(7.2,2.4),new nt({color:"#FFFFFF",transparent:!0,opacity:.18,side:Et}));o.position.set(0,1.2,-1),s.add(o),s.position.set(0,0,-7),n.add(s);for(let h=0;h<4;h++)n.add(R(60,1,2,b(["#2A3A6A","#3A2A5A","#2A3A6A","#3A2A5A"][h]),0,.5+h*1.1,-14-h*2));let a=[],l=Ne(2);for(let h=0;h<4;h++)for(let d=0;d<48;d++)a.push([-24+d+l()*.4,1+h*1.1,-14-h*2]);Gh(n,a,{h:1.3,tint:"#C8C8E8",raised:.7});for(let h of[-1,1]){let d=Ye("#FFFFFF",6,.9);d.position.set(h*16,14,-20),n.add(d)}n.add(new Re("#D8E0FF","#2A3A2A",1));let c=je("#FFFFFF",2.6,[6,16,8],14,60);n.add(c)};me.concierto=(n,e)=>{n.background=new le("#0C0820"),n.fog=new xe("#140C2C",.025);let t=R(14,.6,6,b("#2A1E48",{metalness:.3,roughness:.4}),0,.3,-2.5);t.receiveShadow=!0,n.add(t),_o(n,"#140E26").position.y=-.01;let i=Lt(14,6,"#3A1E6A",.5);i.position.set(0,3.6,-5.5),n.add(i);let s=Ne(4);for(let l=0;l<9;l++){let c=Ye(["#FF5A9A","#5AC8FF","#F2C14E"][l%3],1.2,.9);c.position.set(-6+l*1.5,6,-5),n.add(c);let h=Ns(1.2,8,["#FF5A9A","#5AC8FF","#F2C14E"][l%3],.1);h.position.set(-6+l*1.5,3,-4.5),h.rotation.z=(l-4)*.08,n.add(h)}let r=new ce;r.add(R(.03,1.4,.03,b("#2A2A30",{metalness:.6}),0,.7+.6,0));let o=new O(new Mt(.06,12,10),b("#888",{metalness:.8}));o.position.y=2.05,r.add(o),r.position.set(.5,0,-.6),n.add(r);for(let l=0;l<40;l++){let c=Ye(["#FFF2C0","#B8E0FF","#FFB2E0"][l%3],.18,.8);c.position.set(-7+s()*14,1.2+s()*1.2,2.5+s()*3),n.add(c)}n.add(new Re("#B8A8FF","#2A1A3A",.8));let a=new Fn("#FFF2D8",70,22,.45,.5,1.2);a.position.set(0,9,4),a.target.position.set(0,.6,-.6),a.castShadow=!0,n.add(a,a.target)};me.gris=(n,e)=>{n.background=new le("#1C1E24"),n.fog=new xe("#262830",.06),_o(n,"#4A4C54"),n.add(R(14,7,.2,b("#5A5C64",{roughness:1}),0,3.5,-4)),n.add(R(.2,7,12,b("#52545C",{roughness:1}),-4.2,3.5,0)),n.add(R(.2,7,12,b("#52545C",{roughness:1}),4.2,3.5,0));let t=Lt(1.2,1.4,"#8A94A8",.35);t.position.set(1.8,2.8,-3.88),n.add(t);for(let r of[1.8])n.add(R(.06,1.4,.05,"#3A3C44",r,2.8,-3.86)),n.add(R(1.2,.06,.05,"#3A3C44",r,2.8,-3.86));n.add(new Re("#A8B0C8","#2A2A30",.6));let i=new Fn("#C8D0E8",28,14,.5,.7,1.3);i.position.set(-1.4,6,1),i.target.position.set(-2.6,0,-2.8),i.castShadow=!0,n.add(i,i.target);let s=new it("#FFD8A0",0,10,1.2);s.position.set(-2,2.4,-1.4),n.add(s),n.userData.warm=s};me.labSueno=(n,e)=>{me.lab(n,e),T0(n,-1.4,-1.6,"#4A86C7");let t=new ce;t.add(R(.12,1.4,.12,b("#3A3A44"),0,.7,0)),t.add(R(1,.7,.1,b("#20242E"),0,1.7,0));let i=Lt(.9,.6,"#7FD08A",.6);i.position.set(0,1.7,.06),t.add(i),t.position.set(1,0,-2.4),t.rotation.y=-.4,n.add(t),n.userData.mon=i};var ol=(n,e,t=200,i=200,s={})=>{let r=new O(new Ae(t,i),b(e,{roughness:1,...s}));return r.rotation.x=-Math.PI/2,r.receiveShadow=!0,n.add(r),r},B0=(n,e=1.6)=>new Ce({color:n,emissive:n,emissiveIntensity:e}),dy=(n="#8C8A84",e=3)=>{let t=ve(512,512,i=>{i.fillStyle=n,i.fillRect(0,0,512,512);let s=Ne(e);for(let r=0;r<900;r++)i.fillStyle=`rgba(${s()<.5?"255,255,255":"0,0,0"},${s()*.07})`,i.fillRect(s()*512,s()*512,2+s()*6,2+s()*6);i.strokeStyle="rgba(0,0,0,.18)",i.lineWidth=3;for(let r=128;r<512;r+=128)i.beginPath(),i.moveTo(0,r),i.lineTo(512,r),i.stroke();for(let r=0;r<5;r++){i.strokeStyle="rgba(40,30,20,.12)",i.lineWidth=8,i.beginPath();let o=s()*512;i.moveTo(o,0),i.lineTo(o+(s()-.5)*30,140+s()*300),i.stroke()}});return t.wrapS=t.wrapT=rn,t},Os=(n,e,t,i,s,r,o,a=3)=>{let l=dy(o);l.repeat.set(Math.max(1,Math.max(n,t)/a),Math.max(1,e/a));let c=new O(new Cn(n,e,t),new Ce({map:l,roughness:.95}));return c.position.set(i,s,r),c.receiveShadow=!0,c.castShadow=!0,c};function uy(n="#B8B4A8"){let e=new ce,t=new O(new Ke(.09,.09,.22,18),b(n,{metalness:.6,roughness:.35}));t.position.y=.11,t.castShadow=!0,e.add(t);let i=new O(new Ke(.092,.092,.12,18,1,!0),new Ce({map:ve(256,64,s=>{s.fillStyle="#7A8A3A",s.fillRect(0,0,256,64),s.fillStyle="#F4E8C8",s.font="800 30px Inter",s.textAlign="center",s.fillText("JUD\xCDAS \xB7 1987",128,44)}),roughness:.7}));return i.position.y=.11,e.add(i),e}function fy(){let n=new ce;n.add(R(1,.8,.6,b("#4A6A4A",{roughness:.6,metalness:.3}),0,.4,0)),n.add(R(.3,.3,.02,b("#222"),-.25,.5,.31));let e=new O(new Mt(.04,10,8),B0("#5AE05A",2.5));e.position.set(.3,.62,.31),n.add(e);for(let t=0;t<5;t++)n.add(R(.02,.4,.02,b("#2A3A2A"),.05+t*.06,.4,.31));return n.userData.led=e,n}function py(){let n=new ce;n.add(R(.36,.5,.08,b("#3A3C3A",{metalness:.5}),0,0,0));let e=new ce;e.position.set(0,0,.06),n.add(e);let t=R(.05,.4,.05,b("#9A9A9A",{metalness:.8,roughness:.3}),0,.2,0);e.add(t);let i=new O(new Mt(.07,14,10),b("#D8251A",{roughness:.3}));return i.position.y=.42,e.add(i),e.rotation.x=-.5,n.userData.piv=e,n.userData.knob=i,n}function my(){let n=new ce;n.add(R(8,2.4,2.5,b("#F2B830",{roughness:.5}),0,1.6,0)),n.add(R(8.02,.25,2.52,b("#2A2A2A"),0,.9,0));for(let t=0;t<7;t++)for(let i of[-1,1])n.add(R(.85,.7,.02,b("#9AC8E8",{metalness:.4,roughness:.15}),-3.3+t*1.05,2.1,i*1.26));for(let t of[-2.6,2.6])for(let i of[-1,1]){let s=new O(new Ke(.45,.45,.3,16),b("#1A1A1A"));s.rotation.x=Math.PI/2,s.position.set(t,.45,i*1.2),n.add(s)}let e=Ye("#FFF2C0",.5,.9);return e.position.set(4.02,1.1,.8),n.add(e),n}function N0(n,e,t={}){let i=bt(n,{bg:"#3A4A2A",fg:"#F4E8C8",size:90,w:1100,h:260,...t});return Fe(i,e,e*(t.h||260)/(t.w||1100))}me.bunker=(n,e)=>{let t=!!e.dark,i=!!e.open;n.background=new le("#0E0F10"),n.fog=new xe(t?"#050608":"#2A2A28",t?.08:.045);let s=Os(12,.2,10,0,-.1,-.5,"#6E6C66",2.5);n.add(s),n.add(Os(12,4,.3,0,2,-3.55,"#8C8A84")),n.add(Os(.3,4,10,-4.2,2,-.5,"#84827C")),n.add(Os(.3,4,10,4.2,2,-.5,"#84827C")),n.add(Os(12,.3,10,0,3.6,-.5,"#7A7872"));for(let w of[-2.4,0,2.4])n.add(R(.25,.3,10,b("#6A6862"),w,3.35,-.5));let r=new ce;r.add(R(2,.2,.3,b("#5A5E5A",{metalness:.6,roughness:.4}),0,2.5,0),R(.2,2.6,.3,b("#5A5E5A",{metalness:.6,roughness:.4}),-.95,1.25,0),R(.2,2.6,.3,b("#5A5E5A",{metalness:.6,roughness:.4}),.95,1.25,0)),r.position.set(0,0,-3.36),n.add(r);let o=new ce;o.position.set(-.85,0,-3.3),n.add(o);let a=b("#6E7670",{metalness:.7,roughness:.35}),l=R(1.7,2.4,.16,a,.85,1.2,0);o.add(l);for(let w of[.5,1.9])o.add(R(1.6,.08,.04,b("#5A605C",{metalness:.7}),.85,w,.1));let c=new O(new cn(.26,.035,8,28),b("#B8241A",{metalness:.4,roughness:.4}));c.position.set(.85,1.25,.14),o.add(c);for(let w=0;w<3;w++){let F=R(.5,.03,.03,b("#B8241A"),.85,1.25,.14);F.rotation.z=w*Math.PI/3,o.add(F)}o.rotation.y=i?-1.45:0,n.userData.door=o,n.userData.wheel=c;let h=py();h.position.set(1.55,1.45,-3.36),n.add(h),n.userData.lever=h.userData.piv,n.userData.leverKnob=h.userData.knob;let d=Fe(bt(["\xA1NO TOCAR!"],{bg:"#F2C14E",fg:"#2A2A34",size:80,w:500,h:130}),.5,.13);d.position.set(1.55,1.82,-3.38),n.add(d);let u=w=>{let F=new ce,S=b("#4A5450",{metalness:.6,roughness:.4});for(let A of[-.45,.45])for(let I of[-1,1])F.add(R(.06,2.3,.06,S,A,1.15,I));for(let A of[.45,1.6])F.add(R(.96,.06,2.1,S,0,A,0)),F.add(R(.86,.14,1.96,b("#7A8A6A",{roughness:1}),0,A+.1,0)),F.add(R(.5,.1,.3,b("#D8D2C0"),0,A+.21,-.8));return F.position.set(w,0,-1.1),F};n.add(u(-3.3)),n.add(u(3.3));let p=new ce;for(let w of[.9,1.5])p.add(R(1.4,.05,.35,b("#5A4A3A"),0,w,0));for(let w of[-.7,.7])p.add(R(.05,1.6,.35,b("#5A4A3A"),w,.8,0));p.position.set(-2,0,-3.2),n.add(p);let g=[];for(let w=0;w<6;w++){let F=uy();F.position.set(-2.5+w%3*.26,w<3?.93:1.53,-3.2),p.parent.add(F),g.push(F)}n.userData.cans=g;let E=fy();E.position.set(2.6,0,-3),n.add(E),n.userData.gen=E.userData.led;let m=new ce;m.add(R(.06,.7,.9,b("#3A3C3A",{metalness:.5}),0,0,0));for(let w=0;w<6;w++)m.add(R(.08,.04,.8,b("#5A5C5A",{metalness:.6}),.02,-.28+w*.11,0));if(m.position.set(-4.02,2.75,-1.1),n.add(m),e.mesa!==!1){n.add(R(1.4,.06,.8,b("#5A4632"),0,.75,.3));for(let w of[-.6,.6])for(let F of[-.32,.32])n.add(R(.05,.75,.05,b("#3A2E22"),w,.375,.3+F))}if(e.museo){let w=N0(["MUSEO DE LA GUERRA FR\xCDA"],2.4,{size:80});w.position.set(-2,2.6,-3.38),n.add(w)}let f=Fe(ve(360,480,w=>{w.fillStyle="#E8D8A0",w.fillRect(0,0,360,480),w.fillStyle="#7A2A1A",w.font="900 46px Fraunces",w.textAlign="center",w.fillText("REFUGIO",180,70),w.fillStyle="#3A3A2A",w.fillRect(80,140,200,140),w.fillStyle="#E8D8A0",w.beginPath(),w.moveTo(60,150),w.lineTo(180,90),w.lineTo(300,150),w.fill(),w.fillStyle="#7A2A1A",w.font="700 30px Inter",w.fillText("1962",180,340)}),.5,.66);f.position.set(2.6,2.3,-3.38),n.add(f);let _=[];for(let w of[-1.6,1.6]){let F=new O(new Mt(.09,12,10),B0("#FFD089",t?0:2.2));F.position.set(w,3.1,-.6),n.add(F),_.push(F),n.add(R(.22,.02,.22,b("#333"),w,3.2,-.6,!1))}let v=[];if(!t)for(let w of[-1.6,1.6]){let F=new it("#FFC27A",11,10,1.4);F.position.set(w,2.9,-.4),F.castShadow=w<0,n.add(F),v.push(F)}let y=new Re(t?"#3A4A6A":"#E8DCC8",t?"#0A0A0E":"#3A3430",t?.12:.55);if(n.add(y),n.userData.lights=v,n.userData.bulbs=_,n.userData.hemi=y,i){let w=Lt(1.7,2.4,"#FFF4D8",3.2);w.position.set(0,1.2,-3.5),n.add(w);let F=Ns(2.2,8,"#FFE8B8",.3);F.position.set(0,1.4,-.6),F.rotation.set(-1.25,0,0),n.add(F);let S=new Fn("#FFF0D0",60,14,.6,.6,1.2);S.position.set(0,2.2,-3.6),S.target.position.set(0,0,1.5),S.castShadow=!0,n.add(S,S.target),n.userData.sunObjs=[w,F,S]}let L=Ne(5),C=[];for(let w=0;w<26;w++){let F=Ye("#FFE8C0",.04,t?.2:.5);F.position.set((L()-.5)*6,.5+L()*2.6,-3+L()*4),n.add(F),C.push(F)}n.userData.dust=C};me.bosqueBunker=(n,e)=>{let t=!!e.storm;n.fog=new xe(t?"#1A1E28":"#C8D0B8",t?.045:.022),ht(n,-100,500,200,t?[[0,"#05070C"],[.6,"#1A2030"],[1,"#2A3040"]]:[[0,"#8AA8C0"],[.7,"#C8D4C8"],[1,"#E8E4C8"]]),ol(n,t?"#2A3A24":"#6E8A48");let i=Ne(14);for(let a=0;a<30;a++){let l=(i()-.5)*34,c=-3-i()*24;Math.abs(l)<4&&c>-9||kt(n,l,c,1.2+i()*.8,t?["#1E2E1E","#24381F","#2E4628","#3A4A2A"]:["#3E5F3A","#4F7A44","#6E9A50","#A9B65A"],a)}let s=new O(new Mt(3.2,24,12,0,Math.PI*2,0,Math.PI/2),b(t?"#3A4A30":"#6E8A50",{roughness:1}));s.scale.set(1.3,.7,1),s.position.set(0,0,-6.5),n.add(s),n.add(Os(3.2,2.6,.8,0,1.3,-4,"#8C8A84")),n.add(R(1.5,2,.1,b("#5E6660",{metalness:.6,roughness:.4}),0,1,-3.56));let r=N0(["MUSEO DE LA GUERRA FR\xCDA"],3,{size:84});r.position.set(0,2.95,-3.55),n.add(r);let o=my();if(o.position.set(e.busX??6.5,0,-1.4),o.rotation.y=Math.PI,n.add(o),n.userData.bus=o,t){n.add(new Re("#6A7A9A","#1A1E1A",.75));let a=new Re("#DDE6FF","#5A6070",0);n.add(a),n.userData.flash=a;let l=je("#7A8AB8",.5,[-8,14,8],14,60);n.add(l);let c=[],h=new nt({color:"#AFC4E8",transparent:!0,opacity:.45});for(let d=0;d<260;d++){let u=new O(new Cn(.012,.45,.012),h);u.userData.p=[(i()-.5)*16,i()*8,4-i()*14,i()],n.add(u),c.push(u)}n.userData.rain=d=>c.forEach(u=>{let[p,g,E,m]=u.userData.p;u.position.set(p+(d*1.2+m)%1*-.3,7-(g+d*14)%8,E),u.rotation.z=.12})}else n.add(new Re("#E9EEFF","#5A6A4A",.95)),n.add(je("#FFD29A",2.6,[-12,16,10],16,70))};me.puente=(n,e)=>{let t=!!e.normal;n.fog=new xe("#C8D8E0",t?.02:.012),ht(n,-200,700,260,[[0,"#5F96C8"],[.6,"#BFD4E0"],[1,"#EEF0E4"]]),n.add(new Re("#E9EEFF","#5A6A4A",1)),n.add(je("#FFE2B0",2.6,[-10,18,12],16,80));let i=Ne(21),s=["#2E4F2C","#3B6636","#55813F","#A9B65A"];if(t){ol(n,"#6E8A48");let l=new O(new Ae(3.4,60),b("#5A8AB0",{roughness:.15,metalness:.3}));l.rotation.x=-Math.PI/2,l.position.set(0,.02,-10),n.add(l),n.add(R(1.4,.14,5,b("#8E6242"),0,.35,0));for(let c of[-1,1]){n.add(R(.08,.5,5,b("#6A4630"),c*.66,.65,0));for(let h=0;h<5;h++)n.add(R(.1,.6,.1,b("#6A4630"),c*.66,.3,-2+h))}for(let c=0;c<16;c++)kt(n,(i()<.5?-1:1)*(4+i()*10),-2-i()*20,1.2+i()*.6,s,c);n.userData.y=.42;return}for(let l of[-1,1]){let c=Os(20,40,30,l*16,-20,-6,"#8A7A62",6);n.add(c),ol(n,"#6E8A48",20,30).position.set(l*16,.01,-6);for(let d=0;d<8;d++)kt(n,l*(8+i()*10),-4-i()*18,1.2+i()*.6,s,d+(l>0?9:0))}let r=new O(new Ae(14,200),new Ce({color:"#4A8AB0",roughness:.2,metalness:.3,emissive:"#1A3A50",emissiveIntensity:.3}));r.rotation.x=-Math.PI/2,r.position.set(0,-38,-40),n.add(r);for(let l=0;l<8;l++){let c=new O(new Bi(1.5+i()*2),b("#7A6A52"));c.position.set((i()-.5)*10,-38,-10-i()*60),n.add(c)}let o=l=>-.55*(1-(l/6)**2);n.userData.sag=o;let a=b("#9A7448",{roughness:.9});for(let l=0;l<=40;l++){let c=-6+l*.3,h=R(.22,.05,1.1,a,c,o(c),0);h.rotation.z=Math.atan(.55*2*c/36),n.add(h)}for(let l of[-1,1]){let c=[];for(let d=0;d<=24;d++){let u=-6+d*.5;c.push(new P(u,o(u)+1,l*.55))}let h=new O(new wr(new Cs(c),60,.025,6),b("#C8B088"));n.add(h);for(let d=0;d<=24;d+=2){let u=-6+d*.5;n.add(R(.015,1,.015,b("#C8B088"),u,o(u)+.5,l*.55))}for(let d of[-6.1,6.1])n.add(R(.18,1.6,.18,b("#6A4630"),d,.8,l*.55))}n.userData.y=0};me.marte=(n,e)=>{n.background=new le("#10141A"),n.fog=new xe("#1A2028",.05);let t=new O(new Ke(2.4,2.4,30,28,1,!0),new Ce({color:"#C8CCD0",side:sn,roughness:.6,metalness:.2}));t.rotation.x=Math.PI/2,t.position.set(0,1.9,-10),n.add(t),n.add(R(3.6,.1,30,b("#6A707A",{metalness:.4}),0,0,-10));for(let r=0;r<10;r++){let o=new O(new cn(2.38,.05,6,28),b("#8A9098",{metalness:.6}));o.position.set(0,1.9,2-r*3),n.add(o);let a=Lt(1,.2,"#DDEEFF",1.6);a.rotation.x=Math.PI/2,a.position.set(0,4.2,1-r*3),n.add(a)}for(let r of[-1,1])for(let o=0;o<4;o++){n.add(R(.6,.5,1.8,b("#7A8A9A"),r*1.5,.45,-1-o*3)),n.add(R(.05,.6,.5,b("#2A3A4A"),r*1.75,1.6,-o*3));let a=Lt(.5,.32,["#7FD08A","#5AC8FF"][o%2],.6);a.rotation.y=-r*Math.PI/2,a.position.set(r*1.72,1.6,-o*3),n.add(a)}let i=Fe(bt(["MARS-500 \xB7 MOSC\xDA"],{bg:"#2A3A6A",fg:"#FFFFFF",size:80,w:900,h:150}),2,.33);i.position.set(0,3,-6),n.add(i),n.add(new Re("#E8F0FF","#4A505A",.9));let s=new it("#E8F0FF",12,12,1.4);s.position.set(0,3,0),n.add(s)};me.biosfera=(n,e)=>{n.fog=new xe("#F2D8B0",.012),ht(n,-200,700,260,[[0,"#5F96C8"],[.6,"#F0C890"],[1,"#FFE2B8"]]),ol(n,"#D8B07A");let t=Ne(31);for(let l=0;l<8;l++){let c=new O(new un(8+t()*8,6+t()*6,6),b("#C88A5A",{roughness:1}));c.position.set(-60+l*18,0,-70-t()*30),n.add(c)}for(let l=0;l<9;l++){let c=new ce;c.add(R(.3,1.6+t(),.3,b("#4A8A4A"),0,.8,0)),c.position.set((t()-.5)*20,0,1-t()*6),Math.abs(c.position.x)>3&&n.add(c)}let i=new Ce({color:"#CFE8F0",transparent:!0,opacity:.32,roughness:.05,metalness:.5,side:Et}),s=new nt({color:"#F4F4F0",wireframe:!0}),r=(l,c,h)=>{let d=new un(l,l*1.1,4,4);for(let u of[i,s]){let p=new O(d,u);p.rotation.y=Math.PI/4,p.position.set(c,l*.55,h),n.add(p)}};r(5,-3,-12),r(3.4,5,-10);let o=new Mt(3.6,20,10,0,Math.PI*2,0,Math.PI/2);for(let l of[i,s]){let c=new O(o,l);c.position.set(11,0,-14),n.add(c)}for(let l=0;l<10;l++)kt(n,-6+t()*6,-10-t()*4,.7+t()*.5,["#2E5F2C","#3B7636","#55913F","#A9C65A"],50+l);let a=Fe(bt(["BIOSFERA 2 \xB7 ARIZONA"],{bg:"#2A2A34",fg:"#F2C14E",size:80,w:1e3,h:150}),2.4,.36);a.position.set(-1,4.6,-6),n.add(a),n.userData.tag=a,n.add(new Re("#FFF0DC","#B08A6A",1.05)),n.add(je("#FFD29A",3,[-14,16,10],20,70))};me.noria=(n,e)=>{me.parque(n,{dusk:!0});let t=new ce,i=b("#E8E2D2",{metalness:.4,roughness:.4}),s=new O(new cn(5,.08,8,60),i);t.add(s);let r=s.clone();r.scale.setScalar(.7),t.add(r);for(let a=0;a<12;a++){let l=R(10,.06,.06,i,0,0,0);l.rotation.z=a*Math.PI/12,t.add(l)}let o=[];for(let a=0;a<12;a++){let l=a*Math.PI/6,c=new ce;c.add(R(.7,.6,.6,b(["#E8667F","#F2C14E","#4A86C7","#36AEA2"][a%4]),0,-.35,0)),c.position.set(Math.cos(l)*5,Math.sin(l)*5,0),t.add(c),o.push(c);let h=Ye("#FFE2A8",.6,.8);h.position.set(Math.cos(l)*5,Math.sin(l)*5,.1),t.add(h)}t.position.set(2.5,6.2,-9),n.add(t);for(let a of[-1,1]){let l=R(.2,7.5,.2,i,2.5+a*1.8,3.2,-9);l.rotation.z=a*.25,n.add(l)}n.userData.wheel=t,n.userData.cabs=o};var Ao=(n,e=1.6)=>new Ce({color:n,emissive:n,emissiveIntensity:e}),Yn=(n="#A8ACB0")=>b(n,{metalness:.75,roughness:.32}),al=(n="#9EA2A6")=>{let e=ve(256,256,t=>{t.fillStyle=n,t.fillRect(0,0,256,256);let i=Ne(7);for(let s=0;s<500;s++)t.fillStyle=`rgba(${i()<.5?"255,255,255":"0,0,0"},${i()*.06})`,t.fillRect(0,i()*256,256,1+i()*2)});return new Ce({map:e,metalness:.7,roughness:.35})},O0=(n,e,t,i="#1A1C20",s="#FF5A3A",r=150)=>Fe(bt([n],{bg:i,fg:s,size:r,w:300,h:200}),e,t);function z0(n=7){let e=document.createElement("canvas");e.width=256,e.height=160;let t=e.getContext("2d"),i=new Xn(e);i.colorSpace=Nt;let s=(o,a="")=>{t.fillStyle="#0C0D10",t.fillRect(0,0,256,160),t.fillStyle="#FF6A3A",t.font="700 110px 'IBM Plex Mono'",t.textAlign="center",t.fillText(String(o),150,122),a&&(t.font="700 70px Inter",t.fillText(a,50,110)),i.needsUpdate=!0};s(n);let r=new O(new Ae(.5,.31),new nt({map:i,toneMapped:!1}));return r.userData.set=s,r}function gy(){let n=new ce;n.add(R(.36,.9,.03,Yn("#8E9296"),0,0,0));let e=[];["12","11","10","9","8","7","6","5","4","3","2","1","0","\u25C0\u25B6"].forEach((o,a)=>{let l=new O(new Ke(.04,.04,.02,16),Ao("#F4E8C8",.15));l.rotation.x=Math.PI/2;let c=a%2,h=Math.floor(a/2);l.position.set(-.07+c*.14,.3-h*.085,.025),n.add(l);let d=Fe(bt([o],{bg:"rgba(0,0,0,0)",fg:"#1A1A1A",size:120,w:200,h:160}),.055,.044);d.position.set(-.07+c*.14,.3-h*.085,.037),n.add(d),e.push(l)});let i=new O(new Ke(.05,.05,.025,16),Ao("#F2C14E",.3));i.rotation.x=Math.PI/2,i.position.set(0,-.33,.025),n.add(i);let s=Fe(bt(["\u{1F514}"],{bg:"rgba(0,0,0,0)",fg:"#2A2A34",size:120,w:200,h:160}),.06,.048);s.position.set(0,-.33,.04),n.add(s);let r=new ce;for(let o=0;o<5;o++)r.add(R(.16,.012,.01,b("#2A2A2A"),0,-.03*o,.02));return r.position.set(0,-.18,0),n.add(r),n.userData.btns=e,n.userData.alarm=i,n}me.ascensor=(n,e)=>{n.background=new le("#08090C"),n.fog=new xe("#08090C",.03);let t=1.2,i=-1.6,s=2.8,r=al("#A4A8AC"),o=R(2.6,.1,2.4,b("#3A3634",{roughness:.8}),0,-.05,-.4);o.receiveShadow=!0,n.add(o);let a=new O(new Ae(2.4,2),new Ce({map:(()=>{let C=ve(256,256,w=>{w.fillStyle="#4A4440",w.fillRect(0,0,256,256),w.strokeStyle="#3A3430",w.lineWidth=3;for(let F=0;F<256;F+=32)w.beginPath(),w.moveTo(F,0),w.lineTo(F,256),w.stroke(),w.beginPath(),w.moveTo(0,F),w.lineTo(256,F),w.stroke()});return C.wrapS=C.wrapT=rn,C.repeat.set(3,3),C})(),roughness:.7}));a.rotation.x=-Math.PI/2,a.position.set(0,.005,-.6),a.receiveShadow=!0,n.add(a),n.add(R(.08,s,2.4,r,-t-.04,s/2,-.4)),n.add(R(.08,s,2.4,r,t+.04,s/2,-.4)),n.add(R(2.6,.08,2.4,b("#5A5E62",{metalness:.4,roughness:.5}),0,s+.04,-.4)),n.add(R(.65,s,.08,r,-t+.325-.02,s/2,i)),n.add(R(.65,s,.08,r,t-.325+.02,s/2,i)),n.add(R(1.2,s-2.2,.08,r,0,2.2+(s-2.2)/2,i));let l=Yn("#B4B8BC"),c=R(.56,2.2,.04,l,-.28,1.1,i+.03),h=R(.56,2.2,.04,l,.28,1.1,i+.03);n.add(c,h),n.add(R(.01,2.2,.045,b("#555"),0,1.1,i+.04));let d=R(1.1,2.2,.02,b("#050505"),0,1.1,i-.02);n.add(d),n.userData.doors=C=>{c.position.x=-.28-.55*C,h.position.x=.28+.55*C};let u=z0(e.piso??7);u.position.set(0,2.5,i+.05),n.add(u),n.userData.display=u;let p=gy();p.position.set(.85,1.25,i+.05),n.add(p),n.userData.botonera=p;for(let C of[-1,1])n.add(R(.04,.04,1.8,Yn("#C8CCD0"),C*(t-.06),.95,-.5));let g=new O(new Ae(1.5,1.5),new Ce({color:"#C8D4DC",metalness:.9,roughness:.08,emissive:"#22303A",emissiveIntensity:.35}));g.rotation.y=Math.PI/2,g.position.set(-t+.005,1.55,-.6),n.add(g),n.userData.mirror=g,n.add(R(.02,1.56,1.56,b("#6A6E72",{metalness:.6}),-t+.001,1.55,-.6));let E=Fe(bt(["M\xC1X. 6 PERSONAS \xB7 450 KG"],{bg:"#2A2C30",fg:"#D8DCE0",size:44,w:600,h:90}),.5,.075);E.position.set(.85,1.82,i+.05),n.add(E);let m=Lt(1.6,.9,"#FFF6E8",1.6);m.rotation.x=Math.PI/2,m.position.set(0,s-.01,-.5),n.add(m);let f=new it("#FFF4E4",10,7,1.4);f.position.set(0,s-.3,-.3),f.castShadow=!0,n.add(f);let _=new O(new Cn(.3,.06,.14),Ao("#FFB040",0));_.position.set(-.7,s-.05,-1.3),n.add(_);let v=new it("#FFA840",0,6,1.4);v.position.set(-.6,s-.4,-1),n.add(v);let y=new Re("#E8ECF0","#3A3634",.5);n.add(y);let L=new it("#FFE8C8",0,8,1.6);L.position.set(0,1.8,2.4),n.add(L),n.userData.luz=(C,w=0)=>{let F=Math.max(0,Math.min(1,C))*(1-w);m.material.emissiveIntensity=1.6*F,f.intensity=10*F,_.material.emissiveIntensity=2.4*(1-F),v.intensity=9*(1-F),y.intensity=.14+.36*F,y.color.set(F>.5?"#E8ECF0":"#FFC890"),L.intensity=3.2*(1-F)},n.userData.luz(e.luz??1)};me.rellano=(n,e)=>{let t=!!e.night;n.background=new le("#14120F"),n.fog=new xe("#2A2620",.035),n.add(yi(14,10,e.portal?"#D8D0C0":"#B8A890",e.portal?"#C8C0B0":"#A89880",8));let i=e.portal?"#E8E0D0":"#D8C8A8";n.add(R(6.38,3.4,.3,b(i),-3.81,1.7,-3.2)),n.add(R(6.38,3.4,.3,b(i),3.81,1.7,-3.2)),n.add(R(1.24,1.2,.3,b(i),0,2.8,-3.2)),n.add(R(.3,3.4,10,b(i),-5,1.7,0)),n.add(R(.3,3.4,10,b(i),5,1.7,0)),n.add(R(14,.2,10,b("#F0EAE0"),0,3.4,0));for(let E of[-1,1])n.add(R(6.3,.9,.02,b(e.portal?"#8A6A4A":"#9A7A5A"),E*3.85,.45,-3.04));n.add(R(1.5,.12,.1,Yn("#9EA2A6"),0,2.26,-3.02));for(let E of[-1,1])n.add(R(.12,2.3,.1,Yn("#9EA2A6"),E*.69,1.13,-3.02));let s=new ce;s.add(R(1.3,.05,1.6,b("#4A4440"),0,0,-.8)),s.add(R(1.3,2.2,.05,al(),0,1.1,-1.6));for(let E of[-1,1])s.add(R(.05,2.2,1.6,al(),E*.65,1.1,-.8));let r=Lt(1.1,1.2,"#FFF6E8",1.8);r.rotation.x=Math.PI/2,r.position.set(0,2.18,-.8),s.add(r),s.position.set(0,0,-3.05),n.add(s);let o=new it("#FFF4E4",0,5,1.4);o.position.set(0,1.8,-3.6),n.add(o);let a=Yn("#B4B8BC"),l=R(.62,2.2,.05,a,-.31,1.1,-3),c=R(.62,2.2,.05,a,.31,1.1,-3);n.add(l,c),n.userData.doors=E=>{l.position.x=-.31-.6*E,c.position.x=.31+.6*E,o.intensity=8*E},n.userData.doors(e.open||0);let h=z0(e.piso??8);h.scale.setScalar(.8),h.position.set(0,2.55,-3.02),n.add(h),n.userData.display=h;let d=R(.1,.2,.03,Yn(),.95,1.2,-3.03);n.add(d);let u=new O(new Mt(.03,10,8),Ao("#FFB040",1));u.position.set(.95,1.2,-3),n.add(u);let p=O0(String(e.piso??8),.45,.3,"#2A2A34","#F2C14E");if(p.position.set(1.5,2.2,-3.03),n.add(p),e.portal){let E=new ce;for(let f=0;f<12;f++)E.add(R(.36,.26,.04,b("#8E6242"),-.6+f%4*.4,-Math.floor(f/4)*.3,0)),E.add(R(.2,.02,.02,b("#2A2A2A"),-.6+f%4*.4,-Math.floor(f/4)*.3+.05,.03));E.position.set(-3,1.9,-3.03),n.add(E),n.add(R(.04,2.6,2,b("#9FC8E8",{transparent:!0,opacity:.35,metalness:.3,roughness:.1}),4.84,1.3,.5));let m=Fe(bt(["PORTAL"],{bg:"#2A2A34",fg:"#F2C14E",size:80,w:400,h:120}),.8,.24);m.position.set(-3,2.6,-3.03),n.add(m)}else for(let[E,m]of[[-3.2,"A"],[3.2,"B"]]){n.add(R(1,2.2,.06,b("#6B4A33"),E,1.1,-3.02));let f=Fe(bt([String(e.piso??8)+"\xBA"+m],{bg:"#C8A858",fg:"#2A2A34",size:70,w:240,h:110}),.3,.14);f.position.set(E,1.85,-2.98),n.add(f);let _=new O(new Mt(.04,10,8),Yn("#D8B860"));_.position.set(E+.38,1.05,-2.96),n.add(_)}let g=[];for(let E of[-2.5,2.5]){let m=new O(new Mt(.16,14,10),Ao("#FFE8C0",t?1.4:2));m.position.set(E,3.15,-1),n.add(m),g.push(m);let f=new it("#FFE0B0",t?6:9,9,1.4);f.position.set(E,2.9,-.8),f.castShadow=E<0,n.add(f)}n.add(new Re("#F4ECE0","#4A4034",t?.35:.6))};var as=3;me.hueco=(n,e)=>{n.background=new le("#05060C"),n.fog=new xe("#0A0C18",.02),ht(n,-120,500,260,[[0,"#04050C"],[.6,"#0E1230"],[1,"#2A2450"]]),vn(n,1600,220,3),oi(n,-60,300,50,["#0C0E1E","#12142A","#181A34"],!0,6);let t=13*as,i=b("#3A3A42",{roughness:.95});n.add(R(4.4,t+2,.3,i,0,t/2,-2.2));for(let g of[-1,1])n.add(R(.3,t+2,3.2,i,g*2.2,t/2,-.8));for(let g=0;g<=13;g++){let E=g*as;if(n.add(R(4.1,.14,.1,b("#6A6A74"),0,E-.07,-2.02)),g===0&&n.add(R(4.1,.25,3.2,b("#5A5A64"),0,-.12,-.8)),g<=12){let m=Fe(bt([g===0?"BAJO":"PISO "+g],{bg:"#F2C14E",fg:"#2A2A34",size:70,w:420,h:110}),.9,.24);m.position.set(-1.55,E+2.5,-2.03),n.add(m)}}for(let g of[-1,1])n.add(R(.08,t,.08,Yn("#7A7E84"),g*1.75,t/2,-1.6));let s=new ce,r=al("#A4A8AC");s.add(R(2.6,.12,2.2,b("#3A3634"),0,0,0)),s.add(R(2.6,.1,2.2,b("#5A5E62",{metalness:.4}),0,2.85,0));for(let g of[-1,1])s.add(R(.08,2.8,2.2,r,g*1.3,1.4,0));s.add(R(2.6,2.8,.08,r,0,1.4,-1.1));let o=Lt(1.6,1,"#FFF6E8",1.6);o.rotation.x=Math.PI/2,o.position.set(0,2.79,0),s.add(o);let a=new it("#FFF4E4",8,5,1.4);a.position.set(0,2.4,.3),s.add(a);let l=new it("#FFA840",0,5,1.4);l.position.set(0,2.4,.3),s.add(l),s.add(R(.4,.3,.4,b("#2A2A2E",{metalness:.6}),0,3.05,0));for(let g of[-1,1]){let E=R(.18,.3,.18,b("#C9361F",{metalness:.4}),g*1.6,.25,-.5);s.add(E)}s.position.set(0,0,-.6),n.add(s),n.userData.cab=s,n.userData.cabLuz=g=>{o.material.emissiveIntensity=1.6*g,a.intensity=8*g,l.intensity=7*(1-g)};let c=new O(new Ke(.6,.6,.3,24),Yn("#6A6E74"));c.rotation.x=Math.PI/2,c.position.set(.6,t+.3,-1.4),n.add(c);let h=[];for(let g=0;g<4;g++){let E=new O(new Ke(.018,.018,1,6),Yn("#2A2C30"));n.add(E),h.push([E,-.09+g*.06])}let d=R(.7,1.6,.3,b("#4A4C52",{metalness:.5}),1.25,0,-1.8);n.add(d);let u=new O(new Ke(.03,.03,1,6),Yn("#2A2C30"));n.add(u),n.userData.setCab=(g,E=0)=>{s.position.y=g;let m=g+3.2;h.forEach(([v,y])=>{let L=Math.max(.01,(t-m)*(1-E));v.scale.y=L,v.position.set(y,t-L/2,-.6)});let f=t-4-g*.9%(t-6);d.position.y=Math.max(1,t-2-g);let _=t-d.position.y-.8;u.scale.y=Math.max(.01,_),u.position.set(1.25,t-_/2,-1.8)},n.userData.setCab(e.y??7.5*as);for(let g=0;g<=12;g+=2){let E=new it("#8A9ACA",2.2,8,1.6);E.position.set(-1.5,g*as+2.2,.4),n.add(E)}n.add(new Re("#6A78A8","#101018",.5));let p=Ne(12);for(let g=0;g<13;g++)for(let E of[-1,1])for(let m=0;m<2;m++){let f=p()<.55,_=Lt(.8,1,f?"#FFD890":"#1A1C2A",f?1.2:.2);_.position.set(E*(3.2+m*1.6),g*as+1.6,-.6),n.add(_),n.add(R(1.4,as,.2,b("#2A2A34"),E*(3.2+m*1.6),g*as+as/2,-.75))}e.fuegos&&(n.userData.fuegos=!0)};me.feria=(n,e)=>{n.background=new le("#2A2018"),n.fog=new xe("#6A5A44",.03),n.add(yi(40,30,"#8A7258","#7E6850",14));for(let l=-3;l<=3;l++){n.add(R(.25,12,.25,b("#4A4A4E",{metalness:.5}),l*4,6,-9));let c=new O(new cn(2,.1,6,24,Math.PI),b("#4A4A4E",{metalness:.5}));c.position.set(l*4+2,12,-9),n.add(c)}for(let l=0;l<8;l++){let c=Lt(3.6,4,"#FFF0D0",.55);c.position.set(-14+l*4,7,-9.15),n.add(c)}let t=["#C9361F","#F4F0E4","#2A4A8A"];for(let l=0;l<9;l++)n.add(R(.6,.4,.02,b(t[l%3]),-8+l*2,9.5,-6));let i=b("#6A4A30",{roughness:.8});for(let l of[-1,1])n.add(R(.25,9,.25,i,l*1.4,4.5,-3));n.add(R(3.2,.3,.4,i,0,9,-3));for(let l=1;l<9;l+=1.5)for(let c of[-1,1]){let h=R(.08,2.1,.08,i,c*1.4,l,-3.2);h.rotation.z=c*.7,n.add(h)}let s=new O(new Ke(.4,.4,.15,18),b("#3A3A3E",{metalness:.6}));s.rotation.x=Math.PI/2,s.position.set(0,9.3,-3),n.add(s);let r=new ce;r.add(R(2.4,.15,1.8,b("#8A6A44"),0,0,0));for(let l of[-1,1])r.add(R(.08,1,.08,i,l*1.1,.5,.8));r.add(R(2.3,.06,.06,i,0,1,.8));for(let l of[-1,1]){let c=R(.16,.2,.16,b("#3A3A3E",{metalness:.6}),l*1.3,.05,0);r.add(c)}r.position.set(0,5,-3),n.add(r),n.userData.plat=r;let o=new O(new Ke(.03,.03,1,6),b("#C8A870"));n.add(o),n.userData.rope=o,n.userData.setPlat=(l,c=0)=>{r.position.y=l;let h=(9.2-(l+.1))*(1-c);o.visible=h>.02,o.scale.y=Math.max(.01,h),o.position.set(0,9.2-h/2,-3)},n.userData.setPlat(e.y??5);let a=Fe(bt(["NUEVA YORK \xB7 1854"],{bg:"#3A2A1A",fg:"#F4E0B0",size:80,w:900,h:140}),4,.62);a.position.set(0,10.6,-8.8),n.add(a),n.add(new Re("#FFE8C8","#5A4A38",.9)),n.add(je("#FFD8A0",2.2,[-6,14,8],14,50))};var Ey=n=>Math.max(0,Math.min(2.6,2.6-(n+3)/.32*.18));me.escalera=(n,e)=>{n.background=new le("#1E1A16"),n.fog=new xe("#2A2620",.04),n.add(yi(14,10,"#C8B898","#B8A888",8)),n.add(R(16,7,.3,b("#E0D4BC"),0,3.5,-2.4));for(let o=0;o<15;o++){let a=R(.34,.18*(15-o),1.6,b("#B8A890",{roughness:.8}),-3+o*.32+.16,.09*(15-o),-1.3);a.receiveShadow=!0,n.add(a),n.add(R(.34,.03,1.62,b("#8A7A60"),-3+o*.32+.16,.18*(15-o)+.01,-1.3))}n.add(R(2.6,2.6,1.6,b("#B8A890"),-4.3,1.3,-1.3));let i=new O(new Ke(.03,.03,5.7,8),b("#5A3A22"));i.position.set(-.6,2.4,-.45),i.rotation.z=Math.atan2(2.7,4.8)+Math.PI/2,n.add(i);for(let o=0;o<14;o+=2)n.add(R(.025,.9,.025,b("#2A2A2E"),-2.9+o*.32,Ey(-2.9+o*.32)+.45,-.5));let s=O0(String(e.piso??9),.5,.34,"#2A2A34","#F2C14E");s.position.set(-4.2,3.6,-2.23),n.add(s);let r=Lt(1.1,1.4,e.night?"#2A3A6A":"#FFF4D8",e.night?.5:1.6);r.position.set(1.5,3.4,-2.23),n.add(r);for(let o of[-3.5,2]){let a=new it("#FFE0B0",8,9,1.4);a.position.set(o,4.4,.5),a.castShadow=o<0,n.add(a)}n.add(new Re("#F4ECE0","#4A4034",.6))};var Br=[],q0=999,Y0=n=>n+1<Ur.length?Ur[n+1]:q0,td=(n,e,t)=>n.map((i,s)=>e[s]+(i-e[s])*t),Z0=(n,e)=>{let t=n.k??1.35;if(n.c&&t!==1){let[i,s,r,o]=n.c;n.c=[td(i,s,t),s,td(r,o,t),o]}else n.cam&&t!==1&&(n.cam=n.cam.map(([i,s,r])=>[i,td(s,r,t),r]),n.f&&(n.f=n.f.map(([i,s])=>[i,s*t])));if(n.c){let[i,s,r,o]=n.c;n.cam=[[0,i,s],[e,r,o]];let a=(l,c)=>Math.hypot(l[0]-c[0],l[1]-c[1],l[2]-c[2]);n.f=[[0,a(i,s)],[e,a(r,o)]]}return n},j=(n,e)=>{let t=Ur[n],i=Y0(n),s=Math.min(i,643)-t;Br.push([(r,o)=>qh(r,o,Z0(e(s,t),s)),t,i])},$0=(n,e,t)=>{let i=Math.min(e,643)-n;Br.push([(s,r)=>qh(s,r,Z0(t(i,n),i)),n,e])},J0=(n,e,t)=>{let i=Ur[n],s=Y0(n),r=[i],o=i;for(let a of e){let[l,c]=Array.isArray(a)?a:[a,1];for(let h=0;h<c;h++)o=Zh(l,o+.01);r.push(o)}r.push(s),t.forEach((a,l)=>$0(r[l],r[l+1],a))},Jt=n=>({tipo:"humano",...n}),Xe=(n={})=>Jt({glow:.1,...n});var mt=(n={})=>Jt({outfit:"amarelo",hair:"long",hairc:"#4A2A1A",lash:!0,...n});var z=(n,e,t=0)=>Zh(e,n+t)-n,Un=(n,e,t,i,s={})=>{let r=Array.isArray(e)?e:[e],o=s.size||72,a={w:Math.max(720,Math.max(...r.map(c=>c.length))*o*.66+90),...s},l=Fe(bt(Array.isArray(e)?e:[e],{bg:"#2A2A34",fg:"#F2C14E",size:72,w:720,h:150,...a}),t,t*(a.h||150)/(a.w||720));return l.position.set(...i),l.renderOrder=4,n.add(l),l},ds=(n,e,t,i,s={})=>Un(n,e,t,i,{bg:"#FBF7EC",fg:"#2A2A34",...s}),Q0=(n,e,t,i,s={})=>Un(n,e,t,i,{bg:"#6A3AB8",fg:"#FFFFFF",...s});var De=(n,e,t,i=1e9,s)=>{let r=ye(t,t+.2,e)*(1-ye(i,i+.2,e));n.visible=r>.01,n.scale.setScalar(Math.max(.001,.5+.5*r)),s&&Bs(n,s)},rd=(n,e)=>n.pose({armL:[12,8],armR:[150+Math.sin(e*9)*18,20]}),yy=(n,e)=>{let t=Math.abs(Math.sin(e*10));n.pose({armL:[70+t*12,70+t*30],armR:[70+t*12,70+t*30]})},k0=(n,e)=>n.pose({head:Math.sin(e*7)*6,bob:Math.abs(Math.sin(e*7))*.02}),nd=(n,e)=>n.pose({armL:[12,8],armR:[50+Math.sin(e*8)*15,30],bob:Math.abs(Math.sin(e*8))*.015}),zi=n=>n.pose({armL:[12,8],armR:[95,0]});var vy=n=>{for(let e of Object.values(n.legs))e.th.visible=!1,e.shin&&(e.shin.visible=!1)},us=n=>{n.pose({armL:[8,6],armR:[8,6]}),vy(n)},_y=(n,e,t=1)=>{let i=Math.sin(e*7);n.pose({armL:[40+i*30*t,40],armR:[120,100],lean:i*8*t,bob:Math.abs(Math.cos(e*7))*.06*t,legL:[i*10,0],legR:[-i*10,0],head:i*6})},ks=n=>{let e=new P;return n.arms.R.hand.getWorldPosition(e),e},Mo=n=>{let e=[-1,1].map(t=>{let i=Ye("#FF3A4A",.42,0);return i.position.set(t*.2,-.12,.08),n.head.add(i),i});return t=>e.forEach(i=>i.material.opacity=t*.85)},ki=(n,e=6)=>{let t=[];for(let i=0;i<e;i++){let s=Fe(ja(i%2?"\u266A":"\u266B","#F2C14E",150),.35,.28);s.renderOrder=5,n.add(s),t.push(s)}return(i,s,r,o=!0)=>t.forEach((a,l)=>{let c=(i*.5+l/e)%1;a.visible=o,a.position.set(s.x+.4+Math.sin(l*2+i)*.3+c*.4,s.y+c*1.2,s.z),a.material.opacity=Math.sin(c*Math.PI),Bs(a,r)})},Nr=(n,e=10,t="#FFF2C0")=>{let i=[];for(let s=0;s<e;s++){let r=Ye(t,.3,0);n.add(r),i.push(r)}return(s,r,o=1)=>i.forEach((a,l)=>{let c=(s*.8+l/e)%1;a.position.set(r[0]+Math.sin(l*2.4)*r[3],r[1]+Math.cos(l*1.7)*r[3]*.6,r[2]),a.material.opacity=o*Math.sin(c*Math.PI)*.9,a.scale.setScalar(.15+Math.sin(c*Math.PI)*.25)})},Ay=n=>{let e=[0,1,2].map(()=>{let t=Fe(ja("Z","#B8C8FF",150),.3,.24);return t.renderOrder=5,n.add(t),t});return(t,i,s,r=!0)=>e.forEach((o,a)=>{let l=(t*.35+a/3)%1;o.visible=r,o.position.set(i[0]+l*.6,i[1]+l*.9,i[2]),o.material.opacity=Math.sin(l*Math.PI),o.scale.setScalar(.6+l*.6),Bs(o,s)})};var My={bloom:.45,bloomT:.88,vig:.5},Sy=(n,e={})=>n({eyes:[[0,"shut"]],...e,pose:(t,i)=>{t.pose({armL:[10,6],armR:[10,6]}),Yh(t),e.p2&&e.p2(t,i)}});var _i=(n,e,t,i,s=60)=>{let r=Array.isArray(e)?e:[e],o=Math.max(640,Math.max(...r.map(c=>c.length))*s*.62+80),a=Math.round(s*1.25*r.length/.72+60),l=Fe(w0(r,{w:o,h:a,size:s}),t,t*a/o);return l.position.set(...i),l.renderOrder=6,n.add(l),l};var G0=[["rosa","long","#6B3A22"],["amarelo","afro","#2a1b18"],["azul","bob","#D9B65A"],["verde","long","#3a2418"],["roxo","bun","#3a2030"],["rosa","bob","#22161a"],["amarelo","bun","#8a4a26"],["laranja","long","#1E120C"]],bn=(n,e={})=>{let[t,i,s]=G0[n%G0.length];return Jt({outfit:t,hair:i,hairc:s,lash:!0,glow:0,...e})},ls=(n=0,e={})=>bn(n,{outfit:"jaleco",glasses:!0,...e}),Ty={bg:"#C9361F",fg:"#fff"},by={bg:"#2F5A9A",fg:"#fff"};var wy={bloom:.38,bloomT:.9,vig:.6,exposure:1},Te=(n,e,t,i,s=2.2)=>{let r={y:Un,w:ds,p:Q0,r:(l,c,h,d)=>Un(l,c,h,d,Ty),b:(l,c,h,d)=>Un(l,c,h,d,by)},o=t.map(([l,,c="y",h=i,d=s])=>r[c](n,l,d,h)),a=t.map(([,l])=>typeof l=="number"?l:z(e,l));return(l,c)=>o.forEach((h,d)=>De(h,l,a[d],t[d][5]||d+1>=a.length?99:a[d+1]-.15,c))};var Ry=(n,e,t,i=.9,s=2,r=1,o="#C8A27A")=>{n.add(R(s,.08,r,b(o),e,i,t));for(let[a,l]of[[-1,-1],[1,-1],[-1,1],[1,1]])n.add(R(.07,i,.07,b("#5C3C28"),e+a*(s/2-.1),i/2,t+l*(r/2-.1)))},Oi=(n,e,t,i=0,s="#8E6242")=>{let r=new ce;r.add(R(.5,.06,.5,b(s),0,.5,0)),r.add(R(.5,.7,.06,b(s),0,.85,-.22));for(let[o,a]of[[-1,-1],[1,-1],[-1,1],[1,1]])r.add(R(.05,.5,.05,b(s),o*.2,.25,a*.2));return r.position.set(e,0,t),r.rotation.y=i,n.add(r),r};var xy=(n=[],e=[])=>{let t=ve(640,400,s=>{s.fillStyle="#F6EEDB",s.fillRect(0,0,640,400),s.fillStyle="#D8CCB0",s.fillRect(316,0,8,400),s.fillStyle="#2A2A34",s.textAlign="center",s.font="900 34px Fraunces",n.forEach((r,o)=>s.fillText(r,160,90+o*50)),e.forEach((r,o)=>s.fillText(r,480,90+o*50)),s.fillStyle="#9A8A70";for(let r=0;r<6;r++)s.fillRect(40,250+r*22,230,6),s.fillRect(360,250+r*22,230,6)});return new O(new Ae(.9,.56),new Ce({map:t,roughness:.8}))},Cy=(n,e={})=>ve(540,1e3,t=>{t.fillStyle=e.bg||"#141830",t.fillRect(0,0,540,1e3),t.fillStyle="#fff",t.textAlign="center",t.font="700 70px Inter",t.fillText(e.hora||"23:31",270,130),t.font="800 52px Inter",(n||[]).forEach((i,s)=>{t.fillStyle=s===0?"#FF7A6A":"#F4F0E4",t.fillText(i,270,480+s*70)})}),ll=(n,e)=>{let t=new ce;t.add(R(.62,1.18,.06,b("#1A1A24",{metalness:.4}),0,0,0,!1));let i=new O(new Ae(.56,1.04),new nt({map:Cy(n,e),toneMapped:!1}));return i.position.z=.032,t.add(i),t};var od=(n,e=.35,t="#E8667F")=>{let i=Fe(ja("\u2665",t,170),e,e*.8);return i.renderOrder=6,n.add(i),i},K0=(n,e=120)=>{let t=n*e/60%1;return 1+.18*Math.exp(-t*9)+.1*Math.exp(-Math.max(0,t-.22)*12)*(t>.22?1:0)};var V0=n=>ve(512,400,e=>{e.clearRect(0,0,512,400),e.fillStyle="#F2A6B4";for(let[t,i,s]of[[170,170,110],[300,150,120],[380,210,90],[230,250,100],[130,250,70]])e.beginPath(),e.arc(t,i,s,0,7),e.fill();e.fillStyle="#E08A9A",e.fillRect(250,300,50,80),e.strokeStyle="#D0788A",e.lineWidth=9;for(let t=0;t<9;t++)e.beginPath(),e.arc(150+t%3*100,130+Math.floor(t/3)*70,34,t,t+2.4),e.stroke();if(n){let t=e.createRadialGradient(270,230,5,270,230,120);t.addColorStop(0,"rgba(255,240,120,1)"),t.addColorStop(1,"rgba(255,200,60,0)"),e.fillStyle=t,e.beginPath(),e.arc(270,230,120,0,7),e.fill()}}),j0=(n,e,t=1.6)=>{let i=Fe(V0(!1),t,t*.78),s=Fe(V0(!0),t,t*.78);for(let r of[i,s])r.position.set(...e),r.renderOrder=4,n.add(r);return s.position.z+=.01,s.visible=!1,r=>{s.visible=r}},Fy=(n,e={})=>ve(900,520,t=>{t.fillStyle=e.bg||"#FBF7EC",t.beginPath(),t.roundRect(0,0,900,520,30),t.fill(),t.fillStyle="#2A2A34",t.font="900 46px Inter",t.textAlign="center",t.fillText(e.title||"",450,64);let i=n.length,s=760/i;n.forEach(([r,o,a],l)=>{let c=70+s*l+s/2,h=o*300;t.fillStyle=a,t.beginPath(),t.roundRect(c-s*.3,420-h,s*.6,h,12),t.fill(),t.fillStyle="#2A2A34",t.font="800 30px Inter",r.split(`
`).forEach((d,u)=>t.fillText(d,c,462+u*34))})}),Py=(n,e,t,i,s)=>{let r=Fe(Fy(e,s),t,t*520/900);return r.position.set(...i),r.renderOrder=5,n.add(r),r},Iy=(n,e=64)=>ve(700,520,t=>{t.fillStyle="#FFF6C8",t.fillRect(0,0,700,520),t.strokeStyle="#9EC0E8",t.lineWidth=3;for(let i=90;i<520;i+=70)t.beginPath(),t.moveTo(0,i),t.lineTo(700,i),t.stroke();t.fillStyle="#2A3A8A",t.font=`700 ${e}px Caveat`,t.textAlign="center",n.forEach((i,s)=>t.fillText(i,350,260-(n.length-1)*e*.55+s*e*1.1))}),To=(n,e,t,i,s)=>{let r=new O(new Ae(t,t*520/700),new Ce({map:Iy(e,s),roughness:.9}));return r.position.set(...i),r.renderOrder=4,n.add(r),r};var ef=n=>{let e=Kh(["INSTITUTO"],2.6,{bg:"#2F5A9A",fg:"#fff"});e.position.set(0,3.2,-4.2),n.add(e)},ad=(n,e)=>{let t=x0(n,e,4.2,1.6,{bg:"#2F5A48",fg:"#F4F0E4",size:64,font:"Caveat",w:1024,h:390});return t.position.set(0,2.3,-3.38),t},vi=(n,e,t=-.1)=>{for(let i of e){n.add(R(1,.06,.6,b("#C8A27A"),i,.75,t));for(let[s,r]of[[-1,-1],[1,-1],[-1,1],[1,1]])n.add(R(.05,.75,.05,b("#6A6E78"),i+s*.44,.37,t+r*.25))}};var Ly=n=>ad(n,["x\xB2 + 3x = 10","x = ?"]);var W0=(n,e,t,i,s={})=>{let r=Array.isArray(e)?e:[e],o=s.size||60,a=Math.round(Math.max(640,Math.max(...r.map(d=>d.length))*o*.6+220)),l=Math.round(o*1.2*r.length+230),c=b0(r,{w:a,h:l,size:o,bg:s.bg||"#EFE6FF",fg:s.fg||"#4A2A8A",tail:s.tail||"left"}),h=Fe(c,t,t*l/a);return h.position.set(...i),h.renderOrder=6,n.add(h),h};var Dy=n=>{let e=new ce,t=new O(new cn(.34,.035,8,24,Math.PI),b("#E8667F"));e.add(t);for(let i of[-1,1]){let s=new O(new Ke(.09,.09,.07,16),b("#E8667F"));s.rotation.z=Math.PI/2,s.position.set(i*.34,0,0),e.add(s)}return n.head.add(e),e};var Uy=()=>{let n=ve(1024,256,e=>{e.fillStyle="#BFE0F2",e.fillRect(0,0,1024,256);let t=Ne(5);for(let i=0;i<24;i++){e.fillStyle=["#D88A6A","#E8C27A","#8AA8C8","#C8B8A0"][i%4];let s=40+t()*60,r=60+t()*150;e.fillRect(i*44,256-r,s,r)}e.fillStyle="#6EAA50";for(let i=0;i<12;i++)e.beginPath(),e.arc(i*90+30,236,32,0,7),e.fill()});return n.wrapS=rn,n},Hy=n=>{n.add(R(12,3.4,.1,b("#E8E2D2"),0,1.7,-1.8));let e=Uy(),t=new O(new Ae(9,1.1),new nt({map:e,toneMapped:!1}));t.position.set(0,1.9,-1.74),n.add(t);for(let s of[-4.5,-1.5,1.5,4.5])n.add(R(.12,1.2,.05,b("#C8C2B2"),s,1.9,-1.72));for(let s of[-3.2,-1.8,-.4,1,2.4,3.8])n.add(R(.9,.45,.55,b("#2F5A9A"),s,.45,-1.3)),n.add(R(.9,.75,.12,b("#2F5A9A"),s,.95,-1.55));for(let s of[-2.2,.4,3]){let r=new O(new Ke(.03,.03,3.4,8),b("#F2C14E",{metalness:.5,roughness:.3}));r.position.set(s,1.7,-.4),n.add(r)}let i=Fe(bt(["AUTOB\xDAS 7 \xB7 INSTITUTO"],{bg:"#F2C14E",fg:"#2A2A34",size:70,w:900,h:140}),2.4,.37);return i.position.set(0,2.85,-1.7),n.add(i),s=>{e.offset.x=s*.09}},By=(n,e=-1.2)=>{let t=new O(new cn(.95,.5,20,48),b("#F4F2EE",{roughness:.35}));t.rotation.y=Math.PI/2,t.position.set(e,1.15,-.4),n.add(t),n.add(R(.9,.7,2.4,b("#E8E6E0"),e,.35,-.4)),n.add(R(2.6,.14,.7,b("#DDE6EE"),e+1.2,.78,-.4)),n.add(R(.4,.7,.4,b("#B8C0C8"),e+2.2,.35,-.4));let i=Ye("#7FD0FF",.9,0);return i.position.set(e,1.15,-.4),n.add(i),i},cl=(n,e,t)=>{let i=new Fn("#FFF2C0",40,9,.32,.45,1.2);i.position.set(e,5,t+1.2),i.target.position.set(e,0,t),n.add(i,i.target);let s=new O(new ln(.75,32),new nt({color:"#FFF2C0",transparent:!0,opacity:.35,depthWrite:!1}));return s.rotation.x=-Math.PI/2,s.position.set(e,.02,t),n.add(s),[i,s]};var c_=(()=>{let n=[];for(let e of[-1,1])for(let t of[0,1])for(let i=0;i<5;i++)n.push([e*(2.9+t*.75),-2+i*.8,e*-Math.PI/2]);return n})();var hl=(n={})=>Jt({outfit:"laranja",glow:0,...n});var Ny=(n,e=6,t="#8AC8F2")=>{let i=[];for(let s=0;s<e;s++){let r=Ye(t,.12,0);n.add(r),i.push(r)}return(s,r,o=1)=>i.forEach((a,l)=>{let c=(s*.9+l/e)%1;a.position.set(r[0]+Math.sin(l*2.3)*r[3],r[1]-c*.7,r[2]+.1),a.material.opacity=o*(1-c)})};var Oy=()=>ve(256,256,n=>{n.clearRect(0,0,256,256),n.fillStyle="#F4F0E4",n.font="900 150px Inter",n.textAlign="center",n.fillText("23",128,180)}),zy=n=>{if(n.dorsal)return;let e=Fe(Oy(),.26,.26);e.position.set(0,-.3,.012),e.castShadow=!1,n.torso.add(e),n.dorsal=e},tf=(n={})=>{let e=n.pose;return Jt({outfit:"laranja",glow:0,...n,pose:(t,i)=>{zy(t),e?e(t,i):t.pose()}})},cs=-.28;var Sn=n=>{ef(n);for(let e=-6;e<=6;e++)n.add(R(.06,1.2,.06,b("#6A6E78"),e*.9,.6,-3.6));n.add(R(11,.05,.05,b("#6A6E78"),0,1.15,-3.6))};var ld=(n={})=>Jt({outfit:"azul",glasses:!0,hair:"old",hairc:"#6A5A4A",glow:0,...n});me.tiendaIn=(n,e)=>{n.background=new le("#07060E");let t=e.col||"#C8602E",i=new O(new Ae(3.4,4.4),b("#3A3448",{roughness:1}));i.rotation.x=-Math.PI/2,i.receiveShadow=!0,n.add(i);let s=b(t,{roughness:.9,side:Et,emissive:t,emissiveIntensity:e.glow??.12});s.depthWrite=!1;for(let l of[-1,1]){let c=R(.03,2.58,4.4,s,l*.82,1,0);c.rotation.z=l*.675,n.add(c)}let r=new co;r.moveTo(-1.65,0),r.lineTo(1.65,0),r.lineTo(0,2.05),r.lineTo(-1.65,0);let o=new O(new Ha(r),s);o.position.z=-2.2,n.add(o);let a=R(.02,1.9,.01,b("#3A2A22"),0,.95,-2.18);n.add(a),n.add(new Re("#FFC890","#2A2440",e.dim?.25:.55))};var nf=(n,e)=>n.pose({armL:[8,6],armR:[80,140],head:6});var id=n=>n.pose({armL:[60,100],armR:[60,100],head:6});var Gt=(n,e,t,i={})=>{let s=i.pose;return n({x:e,z:t,y:cs,...i,pose:(r,o)=>{us(r),s&&s(r,o)}})};var sf=(n,e,t=1)=>n.pose({armL:[14+Math.sin(e*40)*4*t,8],armR:[14+Math.cos(e*38)*4*t,8],legL:[Math.sin(e*45)*5*t,0],legR:[Math.cos(e*43)*5*t,0]});var So=(n,e)=>n.pose({armL:[40,60],armR:[40,60],bob:Math.abs(Math.sin(e*12))*.04,head:Math.sin(e*12)*5}),cd={exposure:1.05,bloom:.32},rf={exposure:1,bloom:.4,vig:.55},hd=(n,e,t)=>{let i=Ye("#FF4A5A",.55,0);n.add(i);let s=new P;return r=>{e[t].head.getWorldPosition(s),i.position.set(s.x,s.y-.1,s.z+.12),i.material.opacity=r*.35}},tn=(n,e,t)=>{let i=t.map(([r,,o,a=1.6,,l=60])=>_i(n,r,a,o,l)),s=t.map(([,r])=>typeof r=="number"?r:z(e,r));return(r,o)=>i.forEach((a,l)=>De(a,r,s[l],t[l][4]??(l+1<s.length?s[l+1]-.1:1e9),o))};var ky=(n,e)=>n.pose({armL:[165,20],armR:[165,20],head:Math.sin(e*5)*6}),Gy=n=>n.pose({armL:[12,8],armR:[80,-40]});var of=(n,e)=>n.pose({armL:[70,40],armR:[70+Math.sin(e*14)*6,40]});var hs=(n={})=>hl({hair:"long",hairc:"#2A1A12",lash:!0,...n});var af=(n={})=>({amb:"cuartoElla",fov:32,look:cd,...n}),dd=(n={})=>({amb:"cuartoYo",fov:32,look:cd,...n});var Vy=(n={})=>({amb:"esquina",fov:30,look:cd,...n}),kn=(n={})=>({amb:"aula",fov:32,...n}),Tn=(n={})=>({amb:"parque",fov:30,...n}),Yt=(n={})=>({amb:"biblio",fov:32,...n}),Gs=(n={})=>({amb:"lab",fov:32,look:{exposure:1.08},...n});var zs=n=>{let e=od(n,.28,"#E8447A");return(t,i,s=1)=>{e.position.set(i[0],i[1],i[2]);let r=K0(t,140);e.scale.setScalar(s>.01?r:.001),e.visible=s>.01}};var Wy=[[-1.6,1.2],[0,1.2],[1.6,1.2],[-1.6,-.2],[1.6,-.2]],lf=(n,e)=>Wy.map(([t,i],s)=>Gt(r=>s%2?bn(s+1,r):Jt({outfit:["laranja","azul","hero"][s%3],glow:0,...r}),t,i,{eyes:e?e(s):[[0,n||"look"]]})),bo={exposure:.92,bloom:.45,vig:.6},ud=()=>ve(512,340,n=>{n.clearRect(0,0,512,340),n.fillStyle="#A07AE8";for(let[e,t,i]of[[150,200,90],[250,150,115],[360,195,95],[255,230,95]])n.beginPath(),n.arc(e,t,i,0,7),n.fill();n.fillStyle="#C8B0F6",n.beginPath(),n.arc(220,120,40,0,7),n.fill(),n.fillStyle="#2A1A4A",n.beginPath(),n.arc(215,205,12,0,7),n.arc(295,205,12,0,7),n.fill(),n.strokeStyle="#2A1A4A",n.lineWidth=8,n.beginPath(),n.arc(255,225,26,.3,2.84),n.stroke()}),wo=(n,e,t)=>{let i=Fe(ud(),e,e*340/512);return i.position.set(...t),i.renderOrder=5,i.castShadow=!1,n.add(i),i},Ro=(n=[])=>{let e=ll(["","","","","NUBE LILA","200 MIL","SEGUIDORES",...n],{hora:"10:42",bg:"#1A1230"}),t=Fe(ud(),.4,.27);return t.position.set(0,.2,.04),t.castShadow=!1,e.add(t),e},cf=n=>n.pose({armL:[8,6],armR:[140,165],head:4}),$n=()=>{let n=new ce,e=new O(new Ke(.22,.22,.08,24),b("#C98A4A",{roughness:.5}));e.rotation.x=Math.PI/2,e.scale.set(1,1,1.25),n.add(e);let t=e.clone();t.scale.set(.75,1,.9),t.position.y=.26,n.add(t);let i=new O(new ln(.07,18),b("#2A1A10"));i.position.set(0,.08,.042),n.add(i),n.add(R(.06,.62,.04,b("#5A3A22"),0,.66,.01,!1)),n.add(R(.09,.12,.04,b("#3A2416"),0,1.02,.01,!1));let s=Fe(ud(),.14,.095);return s.position.set(.1,-.08,.045),s.castShadow=!1,n.add(s),n.rotation.z=-1.1,n},li=(n,e,t=0,i=0)=>{let s=new P;e.torso.getWorldPosition(s),n.position.set(s.x+.05+t,s.y-.25+i,s.z+.2)},fs=(n,e)=>n.pose({armL:[60,80],armR:[40+Math.sin(e*12)*8,70]}),Xy=(n,e={})=>ve(700,520,t=>{t.fillStyle="#FBF7EC",t.fillRect(0,0,700,520),t.strokeStyle="#B8CCE8",t.lineWidth=3;for(let i=80;i<520;i+=62)t.beginPath(),t.moveTo(30,i),t.lineTo(670,i),t.stroke();t.fillStyle="#E8667F",t.fillRect(70,0,4,520),t.font=`700 ${e.size||50}px Caveat`,t.textAlign="left",n.forEach(([i,s],r)=>{let o=70+r*62;if(t.fillStyle=s?"#6A6A7A":"#2A3A8A",t.fillText(i,92,o),s){let a=t.measureText(i).width;t.strokeStyle="#2A2A34",t.lineWidth=6,t.beginPath(),t.moveTo(88,o-14),t.lineTo(96+a,o-18),t.stroke(),t.beginPath(),t.moveTo(88,o-22),t.lineTo(96+a,o-8),t.stroke()}})}),Or=(n,e,t,i,s)=>{let r=Xy(e,s),o=new O(new Ae(t,t*520/700),new Ce({map:r,roughness:.9,emissive:"#FFFFFF",emissiveMap:r,emissiveIntensity:.55}));return o.position.set(...i),o.renderOrder=5,n.add(o),o},dl=[["Te miro y no digo",1],["Lo que no digo, lo escribo",0],["Si supieras que t\xFA",1],["Cada vez que te veo",0],["me quedo sin voz",1],["...",0]],hf=(n,e,t,i="#4A86C7")=>{n.add(R(2.7,.45,1.3,b("#6B4A33"),e,.25,t)),n.add(R(2.6,.25,1.2,b("#F3EEE4"),e,.6,t)),n.add(R(1.7,.16,1.24,b(i,{roughness:.9}),e+.45,.78,t)),n.add(R(.5,.18,.8,b("#FFFFFF"),e-1,.8,t))},df=(n={})=>Sy(Xe,{x:.05,z:-1,y:1.12,...n});var ul=(n,e=2.6)=>{for(let t=0;t<3;t++){let i=R(12,.45,.8,b("#8E6242"),0,.22+t*.45,e+t*.8);i.receiveShadow=!0,n.add(i)}},fd=(n=2.6,e=7,t=[[0,"look"]],i)=>{let s=[];for(let r=0;r<3;r++)for(let o=0;o<e;o++){let a=-3.6+o*1.2+r%2*.55,l=c=>(o+r)%2?bn((o+r)%4,c):Jt({outfit:["laranja","azul","hero","verde"][(o+r*2)%4],glow:0,...c});s.push(Gt(l,a,n+r*.8-.05,{y:.45+r*.45+cs+.05,eyes:t,s:.9,pose:i}))}return s},pd=(n,e,t=10.7)=>{let i=R0(.6,t);return i.position.set(...e),n.add(i),i},qy=n=>{let e=new ce;e.add(R(1.5,1,.6,b("#2A1A14",{roughness:.4}),0,.5,0)),e.add(R(1.5,.06,.3,b("#F4F0E4"),0,.9,.38)),e.add(R(1.5,.5,.1,b("#2A1A14"),0,1.25,-.25)),e.position.set(-2.2,0,-2.6),n.add(e);for(let r=0;r<5;r++)Oi(n,2+r%2*.1,-2.6+.05*r,0,"#6A7080").position.y=r*.12;let t=ve(1024,420,r=>{r.fillStyle="#2F5A48",r.fillRect(0,0,1024,420),r.strokeStyle="#F4F0E4",r.lineWidth=4;for(let o=0;o<2;o++)for(let a=0;a<5;a++){let l=90+o*180+a*18;r.beginPath(),r.moveTo(40,l),r.lineTo(984,l),r.stroke()}r.fillStyle="#F4F0E4",r.font="700 120px Caveat",r.fillText("\u266A \u266B \u266A",300,150),r.fillText("\u266B \u266A \u266B",520,330)}),i=new O(new Ae(4.4,1.8),new Ce({map:t,roughness:.9}));i.position.set(0,2.3,-3.37),n.add(i);let s=Kh(["AULA DE M\xDASICA"],1.5,{bg:"#6A3AB8",fg:"#fff"});s.position.set(0,3.55,-3.38),n.add(s)};var _n=.6;var Yy=(n="#6A3AB8")=>ve(256,256,e=>{e.clearRect(0,0,256,256),e.fillStyle=n,e.beginPath(),e.roundRect(8,8,240,240,40),e.fill(),e.strokeStyle="#F4F0E4",e.lineWidth=22,e.beginPath(),e.arc(128,104,46,Math.PI,0),e.lineTo(174,130),e.moveTo(82,104),e.lineTo(82,130),e.stroke(),e.fillStyle="#F2C14E",e.beginPath(),e.roundRect(58,120,140,100,16),e.fill(),e.fillStyle="#2A2A34",e.beginPath(),e.arc(128,160,14,0,7),e.fill(),e.fillRect(122,162,12,32)}),X0={},Hn=(n,e,t,i="#6A3AB8")=>{let s=X0[i]||(X0[i]=Yy(i)),r=Fe(s,e,e);return r.position.set(...t),r.renderOrder=6,r.castShadow=!1,n.add(r),r},Zy=()=>ve(256,160,n=>{n.clearRect(0,0,256,160),n.fillStyle="#FBF7EC",n.beginPath(),n.ellipse(128,80,118,70,0,0,7),n.fill(),n.fillStyle="#2A2A34",n.beginPath(),n.arc(128,80,40,0,7),n.fill(),n.fillStyle="#fff",n.beginPath(),n.arc(140,68,12,0,7),n.fill()}),sd=(n,e,t)=>{let i=Fe(Zy(),e,e*160/256);return i.position.set(...t),i.renderOrder=6,i.castShadow=!1,n.add(i),i},Hr=(n,e)=>n.pose({armL:[22,20],armR:[28+Math.sin(e*14)*5,30],head:4}),fl={w:240,h:200,size:150},$y=(n,e)=>{let t=sd(n,.2,[e[0]-.12,e[1],e[2]]),i=sd(n,.2,[e[0]+.12,e[1],e[2]]);return[t,i]},Zt=n=>{Ry(n,0,.55,.72,2.8,.8,"#A8825A"),n.add(R(2.7,.66,.04,b("#8A6640"),0,.38,.93));let e=xy(["INGL\xC9S"],["UNIT 4"]);e.rotation.x=-Math.PI/2,e.position.set(-.6,.77,.55),n.add(e)},Qt=(n={})=>Gt(Xe,n.x??-.55,n.z??0,n),fn=(n={})=>Gt(mt,n.x??.55,n.z??0,n),pl=[[0,1.35,3.6],[0,.95,0],[0,1.3,3.1],[0,.95,0]];j(0,(n,e)=>({...Tn(),atores:[Xe({x:-1.4,z:.6,eyes:[[0,"look"]],move:t=>[Tt(-2.6,-.4,ye(0,n,t)),0,.6],pose:(t,i)=>t.walk(i)}),bn(1,{x:1.2,z:-1,eyes:[[0,"happy"]],pose:rd}),Jt({outfit:"azul",glow:0,x:2.2,z:-1.4,eyes:[[0,"happy"]]})],extra:(t,i,s)=>{Sn(t);let r=Te(t,e,[[["MARTES"],.05,"y",[-.6,2.4,.6],1.2],[["\xDALTIMO RECREO"],z(e,"ultimo"),"b",[-.6,2.4,.6],1.6,1]]);return{update:(o,a,l)=>r(o,l)}},c:[[-1.2,1.5,4.6],[-.6,1.2,0],[-.4,1.5,4.2],[-.2,1.2,0]]}));j(1,(n,e)=>{let t=z(e,"fingiendo"),i=z(e,"sienta");return{...Yt(),atores:[Qt({x:0,eyes:[[0,"down"],[t+1,"flat"],[i+.3,"wide"]],pose:(s,r)=>s.pose({armL:[12,8],armR:[r>t&&r<i?70+Math.sin(r*10)*6:60,70]})})],extra:s=>{Zt(s);let r=Te(s,e,[[["LA BIBLIOTECA"],z(e,"biblioteca"),"y",[0,2.2,0],1.6],[["ESTUDIANDO\u2026"],t,"w",[0,2.2,0],1.4],[["\xBF?"],i,"p",[0,2.2,0],.5,1]]);return{update:(o,a,l)=>r(o,l)}},c:[[0,1.3,3.2],[0,1,0],[0,1.25,2.7],[0,1,0]],look:{exposure:1.02}}});j(2,(n,e)=>{let t=z(e,"crush");return{...Yt(),atores:[Qt({eyes:[[0,"wide"],[t,"heart"]]}),fn({eyes:[[0,"look"]],pose:i=>i.pose({armL:[12,8],armR:[12,8]})})],extra:(i,s,r)=>{Zt(i);let o=Mo(r[0]),a=Te(i,e,[[["TU CRUSH"],t-.1,"p",[.55,2.05,0],1.2,1]]);return{update:(l,c,h)=>{o(ye(t,t+.4,l)*.5),a(l,h)}}},c:pl}});j(3,(n,e)=>{let t=z(e,"acerca");return{...Yt(),atores:[Qt({eyes:[[0,"look"]]}),fn({eyes:[[0,"look"],[.7,"lookl"],[1.4,"look"],[t,"lookl"]],move:i=>[Tt(.55,.3,ye(t,t+.6,i)),cs,0],pose:(i,s)=>i.pose({armL:[12,8],armR:[12,8],head:s<t?Math.sin(s*4)*8:6,lean:-ye(t,t+.6,s)*10})})],extra:i=>(Zt(i),{update:()=>{}}),c:[[0,1.3,3.2],[0,.95,0],[0,1.2,2.4],[0,.95,0]]}});j(4,(n,e)=>{let t=z(e,"puedo");return{...Yt(),atores:[Qt({x:-.45,eyes:[[0,"look"],[t,"wide"]]}),fn({x:.3,eyes:[[0,"lookl"]],pose:nf})],extra:i=>{Zt(i);let s=_i(i,["\xBFPuedo","contarte algo?"],.9,[.35,1.9,0],56);return{update:(r,o,a)=>De(s,r,t-.1,1e9,a)}},c:[[0,1.35,2.9],[-.05,1.2,0],[0,1.35,2.6],[-.05,1.25,0]]}});j(5,(n,e)=>{let t=z(e,"sara");return{...Yt(),atores:[Qt({x:-.45,eyes:[[0,"wide"]]}),fn({x:.3,eyes:[[0,"lookl"],[t,"small"]],pose:nf})],extra:i=>{Zt(i);let s=tn(i,e,[[["Algo que","no sabe nadie."],.05,[.35,1.9,0],.95],[["Ni siquiera Sara."],t-.6,[.35,1.9,0],.95]]);return{update:(r,o,a)=>s(r,a)}},c:[[0,1.35,2.9],[-.05,1.2,0],[0,1.35,2.6],[-.05,1.25,0]]}});j(6,(n,e)=>{let t=z(e,"cinco");return{...Tn({look:wy}),atores:[hs({x:-.45,z:0,eyes:[[0,"happy"]],pose:Gy}),mt({x:.45,z:0,eyes:[[0,"happy"]],pose:i=>i.pose({armL:[80,-40],armR:[12,8]})}),hs({x:-.35,z:1.4,s:.55,eyes:[[0,"happy"]],pose:i=>i.pose({armL:[12,8],armR:[80,-40]})}),mt({x:.35,z:1.4,s:.55,eyes:[[0,"happy"]],pose:i=>i.pose({armL:[80,-40],armR:[12,8]})})],extra:(i,s,r)=>{Sn(i);let o=Te(i,e,[[["SARA"],.05,"y",[-.45,2.3,0],.9],[["SU MEJOR AMIGA"],z(e,"mejor"),"p",[0,2.3,0],1.7],[["DESDE LOS 5 A\xD1OS"],t-.4,"b",[0,2.3,0],1.8,1]]);return{update:(a,l,c)=>{o(a,c),r[2].root.visible=r[3].root.visible=a>t-.3}}},c:[[0,1.5,4.2],[0,1.2,.4],[0,1.45,3.7],[0,1.2,.4]]}});j(7,(n,e)=>{let t=z(e,"si");return{...Yt(),atores:[Qt({x:-.45,eyes:[[0,"small"],[t,"look"]],pose:(i,s)=>i.pose({armL:[12,8],armR:[12,8],head:s>t?Math.sin(s*9)*6*(1-ye(t+.6,t+1,s)):0,bob:s<1.2?Math.abs(Math.sin(s*6))*.02:0})}),fn({x:.3,eyes:[[0,"lookl"],[t+.3,"happy"]]})],extra:(i,s,r)=>{Zt(i);let o=ds(i,["*GLUP*"],.7,[-.45,1.85,.1]),a=Un(i,["S\xCD"],.4,[-.45,1.75,.1],{bg:"#3F8A52",fg:"#fff",w:300,h:160,size:110});return{update:(l,c,h)=>{De(o,l,.1,1.6,h),De(a,l,t,1e9,h)}}},c:[[-.2,1.35,2.9],[-.2,1.2,0],[-.2,1.35,2.6],[-.2,1.25,0]]}});j(8,(n,e)=>{let t=z(e,"suscribete"),i=z(e,"vamos");return{...Yt({look:{exposure:1,vig:.6}}),atores:[Qt({x:-.45,eyes:[[0,"look"],[t,"happy"],[i,"look"]],pose:(s,r)=>r>t&&r<i?rd(s,r):s.pose({armL:[12,8],armR:[12,8]})}),fn({x:.3,eyes:[[0,"flat"]],pose:s=>s.pose({armL:[12,8],armR:[12,8]})})],extra:s=>{Zt(s);let r=ed(1.3);s.add(r),r.position.set(0,1.95,.4);let o=ds(s,["\xBFQU\xC9 SECRETO SER\xC1?"],1.5,[0,1.95,.2]),a=Un(s,["PAUSA"],.55,[.95,2.15,0],{bg:"#2A2A34",fg:"#fff"});return{update:(l,c,h)=>{De(o,l,.1,t-.6,h),De(r,l,t-.3,i-.2,h),r.visible&&r.scale.multiplyScalar(1+.04*Math.sin(l*6)),De(a,l,.1,i-.2,h)}}},lookFn:s=>({exposure:1-.25*ye(.3,1,s)*(1-ye(9,10,s))}),c:[[0,1.45,3.2],[-.05,1.3,0],[0,1.45,3],[-.05,1.3,0]]}});j(9,(n,e)=>{let t=z(e,"goma");return{...Yt(),atores:[Qt({x:-.45,eyes:[[0,"look"]]}),fn({x:.3,eyes:[[0,"down"]],pose:(i,s)=>s>t-.3?i.pose({armL:[12,8],armR:[160+Math.sin(s*8)*8,30],head:5}):i.pose({armL:[12,8],armR:[12,8]})})],extra:i=>(Zt(i),{update:()=>{}}),c:[[.4,1.25,2.2],[.3,1.05,0],[.35,1.2,1.9],[.3,1.1,0]]}});j(10,(n,e)=>{let t=z(e,"cierra"),i=z(e,"reloj");return{...Yt(),atores:[Qt({x:-.45,eyes:[[0,"look"]]}),fn({x:.3,eyes:[[0,"small"],[t,"flat"],[i-.2,"lookl"]],talk:[[0,t]],pose:s=>s.pose({armL:[12,8],armR:[12,8]})})],extra:s=>{Zt(s);let r=pd(s,[-1.6,2.4,-2.75],10.7),o=Un(s,["\u2026"],.4,[.3,1.85,0],fl);return{update:(a,l,c)=>{r.set(10.7+a*.01),De(o,a,.1,t+.3,c)}}},cam:[[0,[.3,1.25,2.2],[.3,1.05,0]],[3,[.1,1.3,2.6],[0,1.2,0]],[3.6,[-.9,2,.6],[-1.6,2.4,-2.75]],[99,[-1,2.1,.3],[-1.6,2.4,-2.75]]],f:[[0,2.2],[3,2.7],[3.6,4.3],[99,4]]}});j(11,(n,e)=>{let t=z(e,"te",2);return{...Yt(),atores:[Qt({x:-.45,eyes:[[0,"look"],[t,"happy"]],pose:(i,s)=>s>t-.2?i.pose({armL:[12,8],armR:[150,10]}):i.pose({armL:[12,8],armR:[12,8]})}),fn({x:.3,eyes:[[0,"small"]],pose:i=>i.pose({armL:[12,8],armR:[100,60]})})],extra:i=>{Zt(i);let s=tn(i,e,[[["Prom\xE9teme que no","se lo vas a contar","a nadie."],.05,[.4,1.95,0],1],[["Te lo prometo."],t-.1,[-.5,1.85,0],.9]]);return{update:(r,o,a)=>s(r,a)}},c:pl}});j(12,(n,e)=>{let t=z(e,"cuantos"),i=z(e,"cualquiera");return{...Yt({look:My}),atores:[Qt({x:-.45,eyes:[[0,"look"],[t,"lookl"]]}),fn({x:.3,eyes:[[0,"down"]]})],extra:s=>{Zt(s);let r=W0(s,["\xBFCu\xE1ntos secretos","tendr\xE1?"],1.1,[-.9,1.95,.1]),o=W0(s,["\xBFY cualquiera?"],1,[-.9,1.95,.1]),a=[];for(let l=0;l<6;l++){let c=ds(s,["?"],.3,[-1.6+l*.6,2.5+l%2*.2,-.6],fl);a.push(c)}return{update:(l,c,h)=>{De(r,l,t-.1,i-.2,h),De(o,l,i-.1,1e9,h),a.forEach((d,u)=>De(d,l,i+u*.1,1e9,h))}}},c:[[-.3,1.35,3.4],[-.3,1.2,0],[-.3,1.4,3],[-.3,1.3,0]]}});j(13,(n,e)=>({...Gs(),atores:[ls(0,{x:-.5,z:0,eyes:[[0,"look"]],pose:t=>t.pose({armL:[12,8],armR:[12,8]})}),ls(1,{x:.6,z:-.2,eyes:[[0,"happy"]],pose:of})],extra:t=>{let i=Te(t,e,[[["LA CIENCIA"],.1,"p",[0,2.3,0],1.3,1]]);return{update:(s,r,o)=>i(s,o)}},c:[[0,1.4,3.8],[0,1.2,0],[0,1.4,3.3],[0,1.25,0]]}));j(14,(n,e)=>{let t=z(e,"miles"),i=z(e,"lista"),s=z(e,"marcaran");return{...Gs(),atores:[ld({x:-1.6,z:-.4,eyes:[[0,"look"]],pose:(r,o)=>o>i?zi(r):r.pose()}),...[0,1,2,3,4].map(r=>r%2?bn(r,{x:-.3+r*.55,z:.3-r%2*.5,s:.9,eyes:[[0,"down"]],pose:o=>o.pose({head:5})}):Jt({outfit:["laranja","azul","hero"][r%3],glow:0,x:-.3+r*.55,z:.3-r%2*.5,s:.9,eyes:[[0,"down"]],pose:o=>o.pose({head:5})}))],extra:(r,o,a)=>{let l=Te(r,e,[[["MICHAEL SLEPIAN"],z(e,"slepian")-.2,"w",[-1.6,2.35,-.4],1.6],[["MILES DE PERSONAS"],t-.2,"y",[.8,2.4,0],1.8],[["LISTA DE SECRETOS"],i-.1,"b",[.8,2.4,0],1.8,1]]),c=To(r,["[x] Un amor secreto","[ ] Algo que romp\xED","[x] Lo que pienso de\u2026","[ ] Una mentira"],1.2,[-1.6,1.25,.25],46);return{update:(h,d,u)=>{l(h,u),De(c,h,i,1e9,u)}}},cam:[[0,[-1.2,1.5,4],[-.6,1.2,0]],[6,[.2,1.5,4],[.2,1.2,0]],[99,[.4,1.5,3.6],[.2,1.2,0]]],f:[[0,4],[6,4],[99,3.6]]}});j(15,(n,e)=>{let t=z(e,"trece");return{amb:"gris",fov:32,atores:[Xe({x:-1.1,z:0,eyes:[[0,"look"],[t,"wide"]]})],extra:i=>{let s=[];for(let o=0;o<13;o++){let a=Hn(i,.34,[-.1+o%5*.42,2.3-Math.floor(o/5)*.45,0]);s.push(a)}let r=Te(i,e,[[["13 SECRETOS"],t-.1,"y",[.75,.75,.2],1.4,1]]);return{update:(o,a,l)=>{s.forEach((c,h)=>De(c,o,t-1+h*.08,1e9,l)),r(o,l)}}},c:[[0,1.5,4.4],[0,1.4,0],[0,1.5,4],[0,1.45,0]],k:1,look:{exposure:1}}});j(16,(n,e)=>{let t=z(e,"cinco");return{amb:"gris",fov:32,atores:[Xe({x:-1.1,z:0,eyes:[[0,"wide"],[t+.4,"small"]],pose:cf})],extra:i=>{let s=[];for(let o=0;o<13;o++){let a=Hn(i,.34,[-.1+o%5*.42,2.3-Math.floor(o/5)*.45,0],o<5?"#C83A4A":"#6A3AB8");s.push(a)}let r=Te(i,e,[[["5 JAM\xC1S CONTADOS"],t,"r",[.75,.75,.2],1.7,1]]);return{update:(o,a,l)=>{s.forEach((c,h)=>{De(c,o,-1,1e9,l),h<5&&c.scale.multiplyScalar(1+.12*ye(t,t+.3,o)*Math.abs(Math.sin(o*5)))}),r(o,l)}}},c:[[0,1.5,4.4],[0,1.4,0],[0,1.5,4],[0,1.45,0]],k:1}});j(17,(n,e)=>{let t=z(e,"esconder");return{...Tn(),atores:[Xe({x:0,z:.3,eyes:[[0,"look"],[t,"small"]],pose:i=>i.pose({armL:[12,8],armR:[12,8]})}),hl({x:-1.2,z:-.3,eyes:[[0,"happy"]],talk:[[0,99]]}),bn(2,{x:1.2,z:-.3,eyes:[[0,"happy"]],talk:[[0,99]]})],extra:i=>{Sn(i);let s=Te(i,e,[[["LO M\xC1S CURIOSO"],.1,"p",[0,2.45,.3],1.6],[["\xBFESCONDERLO?"],t-.3,"w",[0,2.45,.3],1.5],[["NO ES LO QUE M\xC1S PESA"],t+1.6,"r",[0,2.45,.3],2.2,1]]);return{update:(r,o,a)=>s(r,a)}},c:[[0,1.5,4.4],[0,1.25,0],[0,1.45,3.8],[0,1.25,0]]}});j(18,(n,e)=>{let t=z(e,"cama");return{...dd({ambo:{night:!0},look:bo}),atores:[df({eyes:[[0,"wide"]]})],extra:i=>{hf(i,0,-1.2);let s=Hn(i,.7*.6,[.5,1.9,-1.1]),r=Te(i,e,[[["A SOLAS"],z(e,"solas")-.1,"b",[-.2,2.3,-1.1],1.1],[["EN LA CAMA"],t-.1,"w",[-.2,2.3,-1.1],1.3,1]]);return{update:(o,a,l)=>{De(s,o,.3,1e9,l),r(o,l)}}},c:[[.2,2.7,1.8],[0,.9,-1.2],[.2,2.6,1.5],[0,.9,-1.2]]}});j(19,(n,e)=>({amb:"gris",fov:32,atores:[Gt(Xe,-.2,0,{eyes:[[0,"flat"]],pose:(t,i)=>t.pose({armL:[8,6],armR:[8,6],bob:Math.abs(Math.sin(i*9))*.01})}),Gt(t=>bn(3,t),.7,0,{eyes:[[0,"down"]]})],extra:t=>{Hy(t);let i=Hn(t,.6*.6,[.25,1.6,.1]),s=Te(t,e,[[["EN EL AUTOB\xDAS"],.05,"y",[0,2.3,0],1.5,1]]);return{update:(r,o,a)=>{De(i,r,.3,1e9,a),s(r,a)}}},c:[[0,1.2,3.2],[0,1,0],[0,1.2,2.9],[0,1,0]],look:{exposure:1.02}}));j(20,(n,e)=>({...kn(),atores:[...lf("look")],extra:(t,i,s)=>{Ly(t),vi(t,[-1.6,0,1.6],1.55),vi(t,[-1.6,1.6],.15);let r=Hn(t,.6*.6,[.4,1.7,1.2]),o=Te(t,e,[[["EN CLASE"],.05,"w",[0,2.6,1.2],1.1,1]]);return{update:(a,l,c)=>{De(r,a,.2,1e9,c),o(a,c)}}},c:[[0,1.6,4.6],[0,1.2,.6],[0,1.55,4.2],[0,1.2,.6]]}));j(21,(n,e)=>{let t=z(e,"vez");return{amb:"gris",fov:32,atores:[Xe({x:0,z:0,eyes:[[0,"small"]],pose:(i,s)=>s>t?ky(i,s):i.pose()})],extra:(i,s,r)=>{let o=[];for(let a=0;a<8;a++){let l=Hn(i,.3,[0,0,0]);o.push(l)}return{update:(a,l,c)=>{let h=new P;r[0].head.getWorldPosition(h),o.forEach((d,u)=>{let p=a*1.6+u*Math.PI/4;d.position.set(h.x+Math.cos(p)*.7,h.y+.1+Math.sin(p)*.35,h.z+Math.sin(p)*.3),De(d,a,u*.3,1e9,c)})}}},c:[[0,1.6,3.2],[0,1.55,0],[0,1.6,2.6],[0,1.6,0]]}});j(22,(n,e)=>{let t=z(e,"peor");return{amb:"gris",fov:32,atores:[Xe({x:0,z:0,eyes:[[0,"small"],[t,"flat"]],pose:(i,s)=>i.pose({armL:[14,10],armR:[14,10],lean:ye(t-.5,t+.5,s)*10,head:-ye(t-.5,t+.5,s)*8})})],extra:i=>{let s=wo(i,1.4,[0,2.55,-.2]),r=Te(i,e,[[["PEOR TE SIENTES"],t-.2,"b",[0,.55,.4],1.6,1]]);return{update:(o,a,l)=>{s.material.color.setRGB(Tt(1,.45,ye(0,n,o)),Tt(1,.45,ye(0,n,o)),Tt(1,.5,ye(0,n,o))),r(o,l)}}},lookFn:i=>({exposure:Tt(1,.75,ye(1,3.4,i))}),c:[[0,1.6,3.6],[0,1.5,0],[0,1.6,3.2],[0,1.5,0]]}});j(23,(n,e)=>{let t=z(e,"saca"),i=z(e,"gira");return{...Yt(),atores:[Qt({x:-.45,eyes:[[0,"look"],[i+.3,"wide"]]}),fn({x:.3,eyes:[[0,"shut"],[1,"small"],[t,"down"]],pose:(s,r)=>r<1?s.pose({armL:[12,8],armR:[12,8],bob:ye(0,.5,r)*.03}):s.pose({armL:[12,8],armR:[r>i?90:70,r>i?40:70]})})],extra:(s,r,o)=>{Zt(s);let a=Ro();return a.scale.setScalar(.3),s.add(a),{update:(l,c,h)=>{let d=ks(o[1]);a.visible=l>t,a.position.set(d.x-.05,d.y+.12,d.z+.1),a.rotation.y=Tt(Math.PI,-.4,ye(i-.2,i+.4,l))}}},c:[[0,1.25,2.4],[0,1,0],[0,1.2,2.1],[0,1.05,0]]}});j(24,(n,e)=>{let t=z(e,"nube"),i=z(e,"doscientos"),s=z(e,"lila");return{amb:"gris",fov:32,atores:[],extra:r=>{let o=Ro();o.position.set(0,1.5,0),r.add(o);let a=Ye("#B898F0",2.6,.3);a.position.set(0,1.5,-.1),r.add(a);let l=Te(r,e,[[["NUBE MORADA"],t,"p",[-1,2,.1],1.2],[["200.000"],i,"y",[1,1.6,.1],1],[["NUBE LILA"],s-.1,"p",[0,.75,.2],1.4,1]]),c=Nr(r,10,"#E0D0FF");return{update:(h,d,u)=>{o.position.y=1.5+Math.sin(h*1.5)*.02,l(h,u),c(h,[0,1.8,.1,.6],ye(t,t+.5,h))}}},cam:[[0,[0,1.5,3],[0,1.5,0]],[99,[0,1.5,2.4],[0,1.55,0]]],f:[[0,3],[99,2.4]],k:1,look:{exposure:.95,bloom:.45}}});j(25,(n,e)=>{let t=z(e,"guitarra");return{...af({ambo:{night:!0},look:bo}),atores:[Jt({outfit:"verde",tint:"#2A1E48",glow:0,x:0,z:-.4,eyes:[[0,"shut"]],hair:"long",hairc:"#1A1028",pose:fs})],extra:(i,s,r)=>{let o=$n();i.add(o);let a=wo(i,.9,[0,1.5,.3]),l=ki(i,6),c=Te(i,e,[[["SOLO VOZ Y GUITARRA"],t-.5,"p",[0,2.5,-.4],2,1]]);return{update:(h,d,u)=>{li(o,r[0]),a.position.set(0,1.55,.25),Bs(a,u),l(h,new P(.2,1.6,-.3),u),c(h,u)}}},c:[[0,1.45,3.4],[0,1.25,-.4],[0,1.4,3],[0,1.3,-.4]]}});j(26,(n,e)=>{let t=z(e,"nadie");return{amb:"gris",fov:32,atores:[...[0,1,2,3,4].map(i=>i%2?bn(i,{x:-1.6+i*.8,z:0,eyes:[[0,"look"]],pose:(s,r)=>s.pose({head:Math.sin(r*3+i)*8})}):Jt({outfit:["laranja","azul","hero"][i%3],glow:0,x:-1.6+i*.8,z:0,eyes:[[0,"look"]],pose:(s,r)=>s.pose({head:Math.sin(r*3+i)*8})}))],extra:(i,s,r)=>{let o=wo(i,1,[0,2.6,-.3]),a=r.map((c,h)=>ds(i,["?"],.32,[-1.6+h*.8,2.05,0],fl)),l=Te(i,e,[[["\xBFQUI\xC9N ES?"],t,"p",[0,.5,.4],1.3,1]]);return{update:(c,h,d)=>{a.forEach((u,p)=>De(u,c,t-.3+p*.1,1e9,d)),l(c,d),o.position.y=2.6+Math.sin(c*2)*.04}}},c:[[0,1.6,4.8],[0,1.4,0],[0,1.6,4.4],[0,1.45,0]]}});j(27,(n,e)=>({...dd({ambo:{night:!0},look:bo}),atores:[df({eyes:[[0,"happy"]],p2:t=>{t._cas||(t._cas=Dy(t))}})],extra:t=>{hf(t,0,-1.2);let i=ki(t,6),s=Ro();return s.scale.setScalar(.25),s.rotation.x=-1.2,s.position.set(.8,.9,-.75),t.add(s),{update:(r,o,a)=>i(r,new P(-1.2,1.1,-1.2),a)}},c:[[.2,2.7,1.8],[0,.9,-1.2],[.2,2.6,1.5],[0,.9,-1.2]]}));j(28,(n,e)=>({...Yt(),atores:[fn({x:0,eyes:[[0,"small"]],pose:t=>t.pose({armL:[12,8],armR:[90,40]})})],extra:(t,i,s)=>{Zt(t);let r=Ro();r.scale.setScalar(.3),t.add(r);let o=_i(t,["Soy yo."],.7,[.5,1.85,0],64);return{update:(a,l,c)=>{let h=ks(s[0]);r.position.set(h.x-.05,h.y+.12,h.z+.1),r.rotation.y=-.4,De(o,a,.05,1e9,c)}}},c:[[.1,1.2,1.9],[.1,1.05,0],[.1,1.2,1.6],[.1,1.1,0]]}));j(29,(n,e)=>{let t=z(e,"luego"),i=z(e,"luego",t+.3);return{...Yt(),atores:[Qt({x:-.45,eyes:[[0,"down"],[t,"lookl"],[i,"down"]],pose:(s,r)=>s.pose({armL:[12,8],armR:[12,8],head:r>t&&r<i?-6:4})}),fn({x:.3,eyes:[[0,"small"]],pose:s=>s.pose({armL:[12,8],armR:[90,40]})})],extra:(s,r,o)=>{Zt(s);let a=Ro();return a.scale.setScalar(.3),s.add(a),{update:l=>{let c=ks(o[1]);a.position.set(c.x-.05,c.y+.12,c.z+.1),a.rotation.y=-.4}}},cam:[[0,[-.2,1.25,2.4],[0,1,0]],[99,[-.3,1.2,2],[-.1,1.05,0]]],f:[[0,2.4],[99,2]]}});j(30,(n,e)=>{let t=z(e,"nube");return{...Yt(),atores:[Qt({x:0,eyes:[[0,"wide"]],pose:i=>i.pose({armL:[12,8],armR:[95,10]})})],extra:i=>{Zt(i);let s=tn(i,e,[[["\xBFT\xFA eres\u2026"],.05,[.4,1.85,0],.8],[["\xBF\u2026Nube Lila?"],t-.1,[.4,1.85,0],.9]]);return{update:(r,o,a)=>s(r,a)}},c:[[-.1,1.2,1.9],[-.1,1.05,0],[-.1,1.2,1.6],[-.1,1.1,0]]}});j(31,(n,e)=>{let t=z(e,"tapa");return{...Yt(),atores:[Qt({x:-.3,eyes:[[0,"wide"]]}),fn({x:.3,eyes:[[0,"small"]],move:i=>[Tt(.3,.1,ye(t-.3,t+.2,i)),cs,0],pose:(i,s)=>s<t-.2?cf(i):i.pose({armL:[8,6],armR:[95,-60],lean:-8})})],extra:i=>{Zt(i);let s=Un(i,["SHHH"],.7,[.45,1.9,0],{bg:"#6A3AB8",fg:"#fff"});return{update:(r,o,a)=>De(s,r,.05,t,a)}},c:[[0,1.2,2],[0,1.05,0],[0,1.2,1.7],[0,1.1,0]]}});j(32,(n,e)=>{let t=z(e,"pillado");return{...Yt(),atores:[Qt({x:-.4,eyes:[[0,"happy"]],pose:So}),fn({x:.35,eyes:[[0,"happy"]],pose:So}),Jt({outfit:"jaleco",glasses:!0,hair:"old",hairc:"#CFC8C0",glow:0,x:2.1,z:-1.6,eyes:[[0,"flat"],[t,"angry"]],pose:(i,s)=>s>t?zi(i):i.pose()})],extra:i=>{Zt(i);let s=Te(i,e,[[["\xA1SHHH!"],t,"r",[2.1,2.3,-1.6],.9,1]]);return{update:(r,o,a)=>s(r,a)}},c:[[.4,1.35,3.6],[.5,1.05,-.4],[.3,1.3,3.2],[.5,1.1,-.4]]}});j(33,(n,e)=>{let t=z(e,"porque");return{...Yt(),atores:[Qt({x:-.45,eyes:[[0,"look"]],talk:[[0,t]]}),fn({x:.3,eyes:[[0,"down"],[t+1.4,"small"]],talk:[[t,n]]})],extra:i=>{Zt(i);let s=tn(i,e,[[["\xBFPor qu\xE9 no se lo","has contado a nadie?"],.05,[-.5,1.9,0],1.05],[["Me da p\xE1nico cantar","delante de gente."],t,[.45,1.9,0],1.05]]);return{update:(r,o,a)=>s(r,a)}},c:pl}});j(34,(n,e)=>{let t=z(e,"movil");return{...af({ambo:{night:!0},look:bo}),atores:[mt({x:0,z:-.4,eyes:[[0,"shut"]],talk:[[0,n]],pose:fs})],extra:(i,s,r)=>{let o=$n();i.add(o);let a=ki(i,5),l=ll(["\u25CF REC"],{hora:"23:12"});l.scale.setScalar(.3),l.position.set(.8,1.05,.4),l.rotation.y=-.5,i.add(l);let c=Te(i,e,[[["EN SU CUARTO: S\xCD"],.05,"w",[0,2.45,-.4],1.8],[["CON EL M\xD3VIL: S\xCD"],t-.3,"w",[0,2.45,-.4],1.8,1]]);return{update:(h,d,u)=>{li(o,r[0]),l.visible=h>t-.5,a(h,new P(.1,1.6,-.3),u),c(h,u)}}},c:[[0,1.45,3.4],[0,1.25,-.4],[0,1.4,3],[0,1.3,-.4]]}});j(35,(n,e)=>{let t=z(e,"blanco");return{amb:"concierto",fov:32,atores:[mt({x:0,y:_n,z:-.6,eyes:[[0,"wide"],[t,"flat"]],pose:(i,s)=>sf(i,s)})],extra:i=>{let[s]=cl(i,0,-.6),r=[];for(let a=0;a<6;a++)r.push(...$y(i,[-1.7+a*.68,1.15+a%2*.25,1.2]));let o=Te(i,e,[[["EN BLANCO"],t-.1,"w",[0,2.75,-.6],1.3,1]]);return{update:(a,l,c)=>{r.forEach((h,d)=>De(h,a,.1+Math.floor(d/2)*.1,1e9,c)),o(a,c)}}},lookFn:i=>({exposure:1+ye(2,2.8,i)*1.4}),c:[[0,1.6,4],[0,1.6,-.6],[0,1.6,3.4],[0,1.65,-.6]]}});j(36,(n,e)=>{let t=z(e,"encoge"),i=z(e,"no");return{...Yt(),atores:[Qt({x:-.45,eyes:[[0,"look"]],talk:[[0,t]]}),fn({x:.3,eyes:[[0,"look"],[i,"down"],[i+2,"happy"]],talk:[[i,n]],pose:(s,r)=>r>t&&r<i?s.pose({armL:[40,-30],armR:[40,30],bob:.03}):s.pose({armL:[12,8],armR:[12,8]})})],extra:s=>{Zt(s);let r=tn(s,e,[[["\xBFY por qu\xE9","me lo cuentas a m\xED?"],.05,[-.5,1.9,0],1,t],[["No s\xE9. Necesitaba","cont\xE1rselo a alguien."],i,[.45,1.9,0],1.05]]);return{update:(o,a,l)=>r(o,l)}},c:pl}});var md=(n,e,t)=>{let i=Fe(ve(200,200,s=>{s.clearRect(0,0,200,200),s.fillStyle="#E8B83A",s.beginPath(),s.arc(100,100,92,0,7),s.fill(),s.fillStyle="#F6D46A",s.beginPath(),s.arc(100,100,70,0,7),s.fill(),s.fillStyle="#B8862A",s.font="900 100px Inter",s.textAlign="center",s.fillText("\u20AC",100,136)}),e,e);return i.position.set(...t),i.renderOrder=6,i.castShadow=!1,n.add(i),i},Vs=(n={})=>({amb:"aula",fov:32,...n}),Ws=n=>{qy(n)},ps=n=>{ad(n,["Unit 4: Present Perfect","I have never\u2026"])},ms=(n={})=>[Gt(Xe,-.55,-.6,{eyes:[[0,"look"]],...n.yo}),Gt(tf,.45,-.6,{eyes:[[0,"happy"]],...n.marcos}),Gt(mt,1.15,1.3,{eyes:[[0,"down"]],pose:Hr,...n.ella})],Jy=[[0,1.6,4.6],[0,1,.2],[0,1.55,4.2],[0,1.05,.2]],gs=n=>{vi(n,[-.55,.45],-.25),vi(n,[1.15],1.65)};j(37,(n,e)=>({...Gs(),atores:[ls(0,{x:0,z:0,eyes:[[0,"happy"]],pose:zi})],extra:t=>{let i=Te(t,e,[[["M\xC1S CIENCIA DE LO QUE PARECE"],.1,"p",[0,2.35,0],2.6,1]]);return{update:(s,r,o)=>i(s,o)}},c:[[0,1.4,3.6],[0,1.25,0],[0,1.4,3.1],[0,1.3,0]]}));j(38,(n,e)=>{let t=z(e,"escaner"),i=z(e,"tamir");return{...Gs({look:{exposure:1.05}}),atores:[ls(1,{x:1.4,z:-1.2,eyes:[[0,"look"]],pose:s=>s.pose({armL:[12,8],armR:[60,70]})}),Jt({outfit:"jaleco",glasses:!0,glow:0,x:2.2,z:-1,eyes:[[0,"look"]]}),Jt({outfit:"azul",glow:0,x:-.6,z:-.4,y:.92,eyes:[[0,"shut"]],pose:s=>{s.pose({armL:[8,6],armR:[8,6]}),Yh(s,-Math.PI/2)}})],extra:s=>{let r=By(s,-1.4),o=Te(s,e,[[["HARVARD"],z(e,"harvard")-.1,"w",[1.8,2.35,-1.1],1.1],[["DIANA TAMIR Y JASON MITCHELL"],i-.1,"y",[.6,2.6,-.4],2.6],[["ESC\xC1NER CEREBRAL"],t-.2,"b",[.6,2.6,-.4],1.8,1]]);return{update:(a,l,c)=>{r.material.opacity=.5+.3*Math.sin(a*4),o(a,c)}}},c:[[.4,1.6,4.6],[0,1.1,-.4],[.2,1.55,4],[0,1.15,-.4]]}});j(39,(n,e)=>{let t=z(e,"otras");return{amb:"gris",fov:32,atores:[Xe({x:0,z:0,eyes:[[0,"happy"],[t-.2,"look"]],talk:[[0,n]],pose:(i,s)=>s<t-.3?i.pose({armL:[12,8],armR:[70,110]}):zi(i)})],extra:i=>{let s=Te(i,e,[[["DE S\xCD MISMAS"],.2,"p",[-.9,2.2,0],1.3],[["DE OTRAS PERSONAS"],t-.2,"w",[.9,2.2,0],1.6,1]]);return{update:(r,o,a)=>s(r,a)}},c:[[0,1.5,3.8],[0,1.4,0],[0,1.5,3.4],[0,1.45,0]]}});j(40,(n,e)=>{let t=z(e,"comida"),i=z(e,"dinero"),s=z(e,"recompensa");return{amb:"gris",fov:32,atores:[],extra:r=>{let o=j0(r,[0,1.5,0],1.8),a=Nr(r,12,"#FFE27A"),l=ds(r,["PIZZA"],.7,[-1.4,2,.2]),c=md(r,.5,[1.4,2,.2]),h=Te(r,e,[[["LAS ZONAS DE LA RECOMPENSA"],s-.3,"y",[0,.45,.3],2.6,1]]);return{update:(d,u,p)=>{o(d>.6&&Math.sin(d*6)>-.6),a(d,[0,1.6,.2,.6],ye(.5,1,d)),De(l,d,t-.2,1e9,p),De(c,d,i-.2,1e9,p),h(d,p)}}},c:[[0,1.4,4],[0,1.35,0],[0,1.4,3.6],[0,1.35,0]],k:1,look:{exposure:1,bloom:.5}}});j(41,(n,e)=>{let t=z(e,"ganar"),i=z(e,"hablar");return{amb:"gris",fov:32,atores:[Xe({x:0,z:0,eyes:[[0,"look"],[t,"lookl"],[i,"look"]],pose:(s,r)=>s.pose({armL:[r>t?70:12,30],armR:[r>i?70:12,30]})})],extra:s=>{let r=[0,1,2].map(l=>md(s,.32,[-1.3+l*.25,1.35,.3])),o=_i(s,["Yo, yo, yo\u2026"],.9,[1.2,1.6,.2],60),a=Te(s,e,[[["ELIGE"],z(e,"elegir")-.1,"p",[0,2.3,0],.9,1]]);return{update:(l,c,h)=>{r.forEach((d,u)=>De(d,l,t+u*.1,1e9,h)),De(o,l,i,1e9,h),a(l,h)}}},c:[[0,1.5,3.8],[0,1.4,0],[0,1.5,3.4],[0,1.45,0]]}});j(42,(n,e)=>{let t=z(e,"renunciaron"),i=z(e,"solo");return{amb:"gris",fov:32,atores:[...[0,1,2,3].map(s=>s%2?bn(s,{x:-1.5+s,z:0,eyes:[[0,"happy"]],talk:[[i,n]],pose:(r,o)=>r.pose({armL:[12,8],armR:[o>t?60:12,40]})}):Jt({outfit:["laranja","azul"][s/2],glow:0,x:-1.5+s,z:0,eyes:[[0,"happy"]],talk:[[i,n]],pose:(r,o)=>r.pose({armL:[12,8],armR:[o>t?60:12,40]})}))],extra:s=>{let r=[0,1,2,3].map(a=>md(s,.3,[-1.5+a,1,.3])),o=Te(s,e,[[["\xA1PREFIEREN HABLAR DE S\xCD!"],i-.2,"y",[0,2.35,0],2.4,1]]);return{update:(a,l,c)=>{r.forEach((h,d)=>{De(h,a,.1,1e9,c);let u=ye(t+d*.15,t+.6+d*.15,a);h.position.set(-1.5+d+u*.3,1-u*1.2,.3),h.material.opacity=1-u}),o(a,c)}}},c:[[0,1.5,4.6],[0,1.3,0],[0,1.5,4.2],[0,1.35,0]]}});j(43,(n,e)=>{let t=z(e,"y"),i=z(e,"mejor");return{amb:"gris",fov:32,atores:[],extra:s=>{let r=j0(s,[0,1.5,0],1.6),o=Nr(s,14,"#FFE27A"),a=Hn(s,.5,[1.4,1.5,.3]),l=Te(s,e,[[["LE SIENTA BIEN"],z(e,"bien")-.3,"w",[0,.5,.3],1.6],[["\xA1TODAV\xCDA MEJOR!"],i-.3,"y",[0,.5,.3],1.8,1]]);return{update:(c,h,d)=>{r(!0);let u=ye(i-.5,i+.3,c);o(c,[0,1.6,.2,.5+u*.6],.6+u*.4),De(a,c,t,i-.3,d),a.position.x=1.4-ye(t+.5,i-.3,c)*1.2,l(c,d)}}},lookFn:s=>({bloom:.4+ye(6.5,7.5,s)*.5}),c:[[0,1.4,3.8],[0,1.35,0],[0,1.4,3.4],[0,1.35,0]],k:1}});j(44,(n,e)=>{let t=z(e,"levanta"),i=z(e,"gracias"),s=z(e,"va");return{...Yt(),atores:[Qt({x:-.45,eyes:[[0,"look"],[i,"happy"],[s,"look"]]}),mt({x:.3,z:0,y:cs,eyes:[[0,"look"],[i,"happy"]],move:r=>{let o=ye(t,t+.5,r),a=ye(s,n,r);return[Tt(.3,3.2,a),Tt(cs,0,o),Tt(0,-.6,a)]},pose:(r,o)=>{o<t?us(r):o>s?r.walk(o):r.pose({armL:[12,8],armR:[o>i?70:12,30]})}})],extra:r=>{Zt(r);let o=Un(r,["RIIING"],.9,[-1.4,2.4,-1],{bg:"#C83A4A",fg:"#fff"}),a=_i(r,["Gracias","por escuchar."],.9,[.75,2.25,0],60);return{update:(l,c,h)=>{De(o,l,.05,1.6,h),De(a,l,i,s+.5,h)}}},c:[[.2,1.35,3.8],[.3,1.05,0],[.3,1.3,3.4],[.4,1.1,0]]}});j(45,(n,e)=>{let t=z(e,"secreto");return{...Yt({look:{exposure:.95,vig:.65}}),atores:[Qt({x:0,eyes:[[0,"look"],[t,"wide"]]})],extra:(i,s,r)=>{Zt(i);let o=Hn(i,.5,[0,1.85,.1]),a=Te(i,e,[[["SOLO"],z(e,"solo")-.1,"w",[-1.4,2.4,-.6],.9],[["EL SECRETO M\xC1S GRANDE","DEL INSTITUTO"],t-.1,"p",[0,2.5,-.2],2.2,1]]);return{update:(l,c,h)=>{De(o,l,t+1,1e9,h),o.scale.multiplyScalar(K0(l,70)),a(l,h)}}},cam:[[0,[0,1.6,2],[0,1,0]],[99,[0,2.6,6],[0,1.2,0]]],f:[[0,2.1],[99,6]]}});j(46,(n,e)=>({...kn(),atores:ms(),extra:t=>{ps(t),gs(t);let i=Te(t,e,[[["MI\xC9RCOLES"],.05,"y",[0,2.75,.3],1.3],[["CLASE DE INGL\xC9S"],z(e,"ingles")-.5,"b",[0,2.75,.3],1.7,1]]);return{update:(s,r,o)=>i(s,o)}},c:Jy}));j(47,(n,e)=>{let t=z(e,"auricular");return{...kn(),atores:ms({yo:{eyes:[[0,"look"],[t,"wide"]]},marcos:{pose:(i,s)=>i.pose({armL:[12,8],armR:[s>t-.4?120:12,s>t-.4?-60:8]})}}),extra:(i,s,r)=>{ps(i),gs(i);let o=Te(i,e,[[["MARCOS"],.1,"y",[.45,1.95,-.6],.9],[["TU MEJOR AMIGO"],z(e,"mejor")-.1,"w",[.45,1.95,-.6],1.5,1]]),a=R(.06,.06,.06,b("#F4F0E4"),0,0,0,!1);return i.add(a),{update:(l,c,h)=>{o(l,h);let d=new P;r[0].head.getWorldPosition(d),a.position.set(d.x+.3,d.y,d.z),a.visible=l>t}}},c:[[0,1.35,3],[-.05,1.05,-.6],[0,1.3,2.6],[-.05,1.1,-.6]]}});j(48,(n,e)=>{let t=z(e,"nube"),i=z(e,"increible");return{...kn(),atores:ms({yo:{eyes:[[0,"look"],[t,"wide"]]},marcos:{talk:[[0,n]],eyes:[[0,"happy"]],pose:(s,r)=>s.pose({armL:[12,8],armR:[60+Math.sin(r*6)*10,60]})}}),extra:(s,r,o)=>{ps(s),gs(s);let a=ki(s,5),l=tn(s,e,[[["\xA1Escucha esto!"],.05,[.6,1.8,-.6],.9],[["Nube Lila ha subido","canci\xF3n nueva."],t-.1,[.6,1.8,-.6],1.1],[["\xA1Esta t\xEDa canta","incre\xEDble!"],i-.6,[.6,1.8,-.6],1]]);return{update:(c,h,d)=>{l(c,d),a(c,new P(-.6,1.3,-.5),d)}}},c:[[0,1.35,3],[-.05,1.05,-.6],[0,1.3,2.6],[-.05,1.1,-.6]]}});j(49,(n,e)=>({...kn(),atores:ms({yo:{eyes:[[0,"small"]]},marcos:{talk:[[0,n]],eyes:[[0,"look"]],pose:(t,i)=>t.pose({armL:[40,-30],armR:[40,30]})}}),extra:t=>{ps(t),gs(t);let i=tn(t,e,[[["\xBFQui\xE9n ser\xE1?"],.05,[.6,1.8,-.6],.8],[["Seguro que es","de otro pa\xEDs."],z(e,"seguro")-.1,[.6,1.8,-.6],1]]);return{update:(s,r,o)=>i(s,o)}},c:[[0,1.35,3],[-.05,1.05,-.6],[0,1.3,2.6],[-.05,1.1,-.6]]}));j(50,(n,e)=>{let t=z(e,"dos");return{...kn(),atores:ms({yo:{eyes:[[0,"look"]]},marcos:{eyes:[[0,"flat"]]}}),extra:i=>{ps(i),gs(i);let s=Te(i,e,[[["COMO SI NADA"],z(e,"nada")-.3,"w",[1.15,1.7,1.3],1.4,1]]);return{update:(r,o,a)=>s(r,a)}},cam:[[0,[-.6,1.2,1.4],[-.55,1,-.6]],[t,[-.6,1.2,1.4],[-.55,1,-.6]],[t+1,[1.1,1.25,3],[1.15,1,1.3]],[99,[1.1,1.2,2.7],[1.15,1,1.3]]],f:[[0,2],[t,2],[t+1,1.7],[99,1.4]]}});j(51,(n,e)=>({...kn(),atores:ms({yo:{eyes:[[0,"flat"]],talk:[[0,2.6]]},marcos:{eyes:[[0,"look"]]}}),extra:t=>{ps(t),gs(t);let i=_i(t,["S\xED\u2026 seguro que","es de otro pa\xEDs."],1,[-.75,1.8,-.6],58);return{update:(s,r,o)=>De(i,s,.05,1e9,o)}},c:[[0,1.35,3],[-.05,1.05,-.6],[0,1.3,2.6],[-.05,1.1,-.6]]}));j(52,(n,e)=>{let t=z(e,"por");return{...kn(),atores:ms({yo:{eyes:[[0,"wide"]]},marcos:{eyes:[[0,"angry"],[t,"lookl"]],talk:[[t,n]]}}),extra:(i,s,r)=>{ps(i),gs(i);let o=hd(i,r,0),a=_i(i,["\xBFPor qu\xE9 te has","puesto rojo?"],1,[.7,1.8,-.6],58);return{update:(l,c,h)=>{o(ye(t,t+.8,l)),De(a,l,t,1e9,h)}}},c:[[0,1.35,2.8],[-.05,1.05,-.6],[0,1.3,2.4],[-.05,1.1,-.6]]}});j(53,(n,e)=>{let t=z(e,"diciembre");return{...kn(),atores:ms({yo:{eyes:[[0,"small"]],talk:[[0,1]],pose:(i,s)=>i.pose({armL:[12,8],armR:[100+Math.sin(s*14)*15,120]})},marcos:{eyes:[[0,"flat"]]}}),extra:(i,s,r)=>{ps(i),gs(i);let o=hd(i,r,0),a=_i(i,["Hace calor."],.8,[-.75,1.8,-.6],60),l=Te(i,e,[[["DICIEMBRE"],t-.2,"b",[0,2.75,.3],1.2,1]]),c=Nr(i,16,"#FFFFFF");return{update:(h,d,u)=>{o(1),De(a,h,.05,t,u),l(h,u),c(h,[2,2.6,-3.2,1],ye(t-.3,t,h))}}},c:[[0,1.4,3.4],[0,1.15,-.4],[0,1.35,3],[0,1.2,-.4]]}});j(54,(n,e)=>{let t=z(e,"entornados");return{...Tn(),atores:[Xe({x:-.45,z:0,eyes:[[0,"look"],[t,"small"]]}),hs({x:.5,z:0,eyes:[[0,"look"],[t-.5,"flat"]],move:i=>[Tt(2.4,.5,ye(0,2.4,i)),0,0],pose:(i,s)=>s<2.4?i.walk(s):i.pose({armL:[60,-30],armR:[60,30]})})],extra:i=>{Sn(i);let s=Te(i,e,[[["SARA"],.2,"y",[.5,2.3,0],.9,1]]);return{update:(r,o,a)=>s(r,a)}},c:[[.4,1.5,4],[.3,1.25,0],[0,1.45,3.4],[0,1.25,0]]}});j(55,(n,e)=>{let t=z(e,"juntitos"),i=z(e,"de");return{...Tn(),atores:[Xe({x:-.45,z:0,eyes:[[0,"small"],[t,"wide"]]}),hs({x:.5,z:0,eyes:[[0,"flat"],[t,"smug"]],talk:[[0,n]],pose:s=>s.pose({armL:[60,-30],armR:[60,30]})})],extra:s=>{Sn(s);let r=tn(s,e,[[["Ayer os vi en","la biblioteca."],.05,[.6,2.3,0],1],[["Muy juntitos\u2026"],t-.1,[.6,2.3,0],.9],[["\xBFDe qu\xE9 hablabais?"],i-.1,[.6,2.3,0],1]]);return{update:(o,a,l)=>r(o,l)}},c:[[0,1.5,3.2],[0,1.4,0],[0,1.45,2.8],[0,1.45,0]]}});j(56,(n,e)=>{let t=z(e,"de",1.6),i=z(e,"nunca");return{...Tn(),atores:[Xe({x:-.45,z:0,eyes:[[0,"small"]],talk:[[0,1.4]]}),hs({x:.5,z:0,eyes:[[0,"smug"]],talk:[[t,n]],pose:(s,r)=>r>i?zi(s):s.pose({armL:[60,-30],armR:[60,30]})})],extra:(s,r,o)=>{Sn(s);let a=hd(s,o,0),l=tn(s,e,[[["De\u2026 deberes."],.05,[-.6,2.25,0],.9,t],[["\xBFDe deberes?"],t,[.6,2.3,0],.9],[["Ella nunca hace","los deberes","en el recreo."],i-.3,[.6,2.35,0],1]]);return{update:(c,h,d)=>{a(.6),l(c,d)}}},c:[[0,1.5,3.2],[0,1.4,0],[0,1.45,2.8],[0,1.45,0]]}});j(57,(n,e)=>{let t=z(e,"gira");return{...Tn(),atores:[Xe({x:-.8,z:.4,eyes:[[0,"look"]]}),hs({x:.5,z:0,eyes:[[0,"smug"]],move:i=>[Tt(.5,3,ye(0,n,i)),0,Tt(0,-1.6,ye(0,n,i))],pose:(i,s)=>{s>t&&s<t+.6||s>t+1.2&&s<t+1.8?i.pose({head:10}):i.walk(s)}})],extra:(i,s,r)=>{Sn(i);let o=sd(i,.3,[0,0,0]),a=Te(i,e,[[["x2"],t+1.2,"r",[2.6,2.3,-1.2],.5,1]]);return{update:(l,c,h)=>{let d=new P;r[1].head.getWorldPosition(d),o.position.set(d.x,d.y+.55,d.z),De(o,l,t,1e9,h),a(l,h)}}},c:[[0,1.5,4.4],[.6,1.2,-.6],[.2,1.5,4],[1,1.2,-.8]]}});j(58,(n,e)=>{let t=z(e,"pesa");return{amb:"gris",fov:32,atores:[Xe({x:0,z:0,eyes:[[0,"look"],[t,"flat"]],pose:(i,s)=>i.pose({armL:[150,20],armR:[150,20],bob:-ye(t-.3,t+.3,s)*.1})})],extra:(i,s,r)=>{let o=Hn(i,.9,[0,2.6,0]),a=Te(i,e,[[["TAMBI\xC9N PESA"],t-.3,"r",[0,.5,.4],1.4,1]]);return{update:(l,c,h)=>{let d=new P;r[0].head.getWorldPosition(d),o.position.set(d.x,d.y+.75,d.z),De(o,l,.3,1e9,h),a(l,h)}}},c:[[0,1.6,3.8],[0,1.6,0],[0,1.6,3.4],[0,1.6,0]]}});j(59,(n,e)=>{let t=z(e,"vuelco");return{...Tn(),atores:[Xe({x:0,z:0,eyes:[[0,"look"],[t,"wide"]],pose:(i,s)=>s>t?i.pose({armL:[40,80],armR:[40,80],lean:6}):i.pose()}),hl({x:-1.5,z:-.8,eyes:[[0,"happy"]],talk:[[.2,2]]}),bn(2,{x:1.5,z:-.8,eyes:[[0,"happy"]],talk:[[.8,2.6]]})],extra:i=>{Sn(i);let s=tn(i,e,[[["\xA1Nube Lila!"],.2,[-1.5,2.2,-.8],.8],[["\xBFHas o\xEDdo a","Nube Lila?"],.9,[1.5,2.25,-.8],.9]]),r=Te(i,e,[[["\xA1VUELCO!"],t,"r",[0,2.3,0],.9,1]]);return{update:(o,a,l)=>{s(o,l),r(o,l)}}},c:[[0,1.5,4.4],[0,1.3,-.3],[0,1.45,4],[0,1.3,-.3]]}});j(60,(n,e)=>{let t=z(e,"frente");return{...Tn(),atores:[Xe({x:-.5,z:0,eyes:[[0,"small"]]}),hs({x:1.6,z:-1.2,eyes:[[0,"flat"]]})],extra:(i,s,r)=>{Sn(i);let o=Un(i,["S\xC9 QUI\xC9N ES NUBE LILA"],1.7,[0,0,0],{bg:"#FBF7EC",fg:"#C83A4A"});return{update:(a,l,c)=>{let h=new P;r[0].head.getWorldPosition(h),o.position.set(h.x,h.y+.55,h.z+.3),De(o,a,t-.6,1e9,c)}}},c:[[.2,1.55,3.4],[.3,1.4,-.4],[.1,1.5,3],[.2,1.45,-.4]]}});j(61,(n,e)=>{let t=z(e,"te",2);return{...Vy(),atores:[Xe({x:0,z:.4,eyes:[[0,"look"],[t,"wide"]],pose:i=>i.pose({armL:[12,8],armR:[80,70]})})],extra:(i,s,r)=>{ef(i);let o=ll(["ELLA","","\xBFTe vienes al","aula de m\xFAsica?","Quiero ense\xF1arte","algo."],{hora:"14:35"});o.scale.setScalar(.36),i.add(o);let a=Te(i,e,[[["JUEVES"],.05,"y",[0,2.4,.4],1.1,1]]);return{update:(l,c,h)=>{let d=ks(r[0]);o.position.set(d.x-.05,d.y+.2,d.z+.12),Bs(o,h),o.visible=l>1,a(l,h)}}},c:[[0,1.55,2.8],[0,1.45,.4],[0,1.55,2.3],[0,1.5,.4]]}});j(62,(n,e)=>{let t=z(e,"piano"),i=z(e,"sillas"),s=z(e,"guitarra");return{...Vs(),atores:[],extra:r=>{Ws(r);let o=$n();o.rotation.z=.25,o.position.set(.4,.55,-2.4),r.add(o);let a=Te(r,e,[[["PIANO VIEJO"],t-.2,"w",[-2.2,1.9,-2.4],1.3],[["SILLAS APILADAS"],i-.2,"w",[2,2.4,-2.6],1.5],[["NUBE MORADA"],s+.6,"p",[.4,1.7,-2.2],1.3,1]]);return{update:(l,c,h)=>a(l,h)}},cam:[[0,[0,1.8,3.2],[0,1.2,-2.4]],[t,[-1.6,1.4,-.4],[-2.2,1,-2.6]],[i,[1.6,1.6,-.2],[2,1.2,-2.6]],[s,[.5,1.2,-.6],[.4,.8,-2.4]],[99,[.45,1.1,-1],[.4,.8,-2.4]]],f:[[0,3.6],[t,2.3],[i,2.5],[s,1.9],[99,1.5]],k:1}});j(63,(n,e)=>{let t=z(e,"libreta");return{...Vs(),atores:[Gt(mt,0,-1.6,{eyes:[[0,"down"]],pose:(i,s)=>s>t?i.pose({armL:[60,70],armR:[60,70]}):fs(i,s)}),Xe({x:-1.2,z:-1,eyes:[[0,"look"]]})],extra:(i,s,r)=>{Ws(i),Oi(i,0,-1.75);let o=$n();i.add(o);let a=Or(i,dl,.7,[0,0,0]);return{update:(l,c,h)=>{li(o,r[0],0,0),o.visible=l<t;let d=ks(r[0]);a.position.set(d.x-.15,d.y+.15,d.z+.15),a.visible=l>t}}},c:[[-.3,1.5,2.4],[-.4,1,-1.4],[-.3,1.45,2],[-.4,1.05,-1.4]]}});j(64,(n,e)=>{let t=z(e,"falta");return{...Vs(),atores:[Gt(mt,0,-1.6,{eyes:[[0,"down"],[t,"small"]],talk:[[0,n]],pose:i=>i.pose({armL:[60,70],armR:[60,70]})}),Xe({x:-1,z:-1,eyes:[[0,"look"]]})],extra:(i,s,r)=>{Ws(i),Oi(i,0,-1.75);let o=Or(i,dl,.7,[0,0,0]),a=tn(i,e,[[["Es la canci\xF3n nueva."],.05,[.6,1.9,-1.6],1],[["No est\xE1 terminada."],z(e,"no")-.1,[.6,1.9,-1.6],1],[["Me falta el final."],t-.1,[.6,1.9,-1.6],1]]);return{update:(l,c,h)=>{let d=ks(r[0]);o.position.set(d.x-.15,d.y+.15,d.z+.15),a(l,h)}}},c:[[-.1,1.45,2.4],[-.2,1.1,-1.4],[-.1,1.4,2],[-.2,1.15,-1.4]]}});j(65,(n,e)=>{let t=z(e,"alguien");return{...Vs(),atores:[Gt(mt,0,-1.6,{eyes:[[0,"look"],[t+1,"down"]],talk:[[t,n]],pose:i=>i.pose({armL:[60,70],armR:[60,70]})}),Xe({x:-1,z:-1,eyes:[[0,"look"]],talk:[[0,t-.2]]})],extra:(i,s,r)=>{Ws(i),Oi(i,0,-1.75);let o=Mo(r[0]),a=tn(i,e,[[["\xBFDe qu\xE9 va?"],.05,[-1.1,2.3,-1],.8,t],[["De alguien a quien","no me atrevo a","decirle una cosa."],t-.1,[.65,1.95,-1.6],1]]);return{update:(l,c,h)=>{o(.4*ye(t+.5,t+1.5,l)),a(l,h)}}},c:[[-.3,1.5,2.6],[-.4,1.25,-1.4],[-.3,1.45,2.2],[-.4,1.3,-1.4]]}});j(66,(n,e)=>({amb:"gris",fov:32,atores:[],extra:t=>{let i=Or(t,dl,1.9,[0,1.5,0],{size:52});return{update:s=>{i.rotation.z=Math.sin(s*.8)*.02}}},cam:[[0,[0,1.5,3.4],[0,1.5,0]],[99,[0,1.5,3],[0,1.5,0]]],f:[[0,3.4],[99,3]],k:1,look:{exposure:1}}));j(67,(n,e)=>({amb:"gris",fov:32,atores:[],extra:t=>{let i=Or(t,dl,1.9,[0,1.5,0],{size:52}),s=Ye("#FFE27A",1.4,0);return s.position.set(-.15,1.84,.05),t.add(s),{update:r=>{s.material.opacity=.22*ye(.6,1.2,r)}}},cam:[[0,[0,1.6,3],[0,1.6,0]],[99,[-.15,1.8,1.6],[-.15,1.82,0]]],f:[[0,3],[99,1.6]],k:1}));j(68,(n,e)=>{let t=z(e,"lo"),i=z(e,"entonces");return{...Vs(),atores:[Gt(mt,0,-1.6,{eyes:[[0,"happy"],[t,"look"],[i,"happy"]],talk:[[0,n]],pose:fs}),Xe({x:-1,z:-1,eyes:[[0,"look"]]})],extra:(s,r,o)=>{Ws(s),Oi(s,0,-1.75);let a=$n();s.add(a);let l=ki(s,5),c=tn(s,e,[[["Es que yo soy as\xED."],.05,[.7,2,-1.6],.95],[["Lo que no puedo decir","en voz alta,","lo escribo en una canci\xF3n."],t-.1,[.75,2.05,-1.6],1.2],[["Y ya no me pesa tanto."],i-.1,[.7,2,-1.6],1.1]]);return{update:(h,d,u)=>{li(a,o[0]),l(h,new P(.2,1.2,-1.5),u),c(h,u)}}},c:[[0,1.5,2.8],[-.1,1.2,-1.4],[0,1.45,2.4],[-.1,1.25,-1.4]]}});j(69,(n,e)=>({...Gs(),atores:[ls(1,{x:0,z:0,eyes:[[0,"happy"]],pose:zi})],extra:t=>{let i=Te(t,e,[[["LA CIENCIA"],.1,"p",[0,2.35,0],1.3,1]]);return{update:(s,r,o)=>i(s,o)}},c:[[0,1.4,3.4],[0,1.25,0],[0,1.4,3],[0,1.3,0]]}));j(70,(n,e)=>{let t=z(e,"quince"),i=z(e,"cuatro"),s=z(e,"dolido");return{...kn(),atores:[ld({x:-1.9,z:.2,eyes:[[0,"look"]],pose:(r,o)=>o>t?zi(r):r.pose()}),...lf(null,()=>[[0,"down"]]).map(r=>({...r,pose:(o,a)=>{us(o),Hr(o,a)}}))],extra:r=>{ad(r,["Escribe sobre lo que","m\xE1s te ha dolido"]),vi(r,[-1.6,0,1.6],1.55),vi(r,[-1.6,1.6],.15);let o=pd(r,[2.6,2.6,-3.3],9),a=Te(r,e,[[["JAMES PENNEBAKER"],z(e,"pennebaker")-.2,"w",[-1.9,2.3,.2],1.7],[["15 MIN AL D\xCDA"],t-.1,"y",[0,2.8,.6],1.5],[["4 D\xCDAS SEGUIDOS"],i-.1,"b",[0,2.8,.6],1.7],[["LO QUE M\xC1S LES DOLI\xD3"],s-.4,"r",[0,2.8,.6],2,1]]);return{update:(l,c,h)=>{o.set(9+ye(t,t+2,l)*.25),a(l,h)}}},cam:[[0,[-1.6,1.6,4.2],[-1.2,1.3,0]],[5,[0,1.7,4.8],[0,1.3,.4]],[99,[.3,1.6,4.2],[0,1.3,.4]]],f:[[0,4.3],[5,4.6],[99,4]]}});j(71,(n,e)=>({...kn(),atores:[Gt(t=>bn(1,t),0,.6,{eyes:[[0,"small"]],pose:Hr})],extra:t=>{vi(t,[0],1);let i=To(t,["Nunca se lo","he contado a nadie\u2026"],.8,[.95,1.45,.9],54),s=Hn(t,.3,[-.5,1.7,.9]);return{update:(r,o,a)=>{De(s,r,.3,1e9,a)}}},c:[[0,1.3,2.6],[0,1.1,.6],[0,1.3,2.3],[0,1.15,.6]]}));j(72,(n,e)=>{let t=z(e,"habitacion"),i=z(e,"zapatos");return{...kn(),atores:[Gt(s=>Jt({outfit:"hero",glow:0,...s}),0,.6,{eyes:[[0,"flat"]],pose:(s,r)=>s.pose({armL:[22,20],armR:[26+Math.sin(r*5)*4,28],head:Math.sin(r*1.5)*4})})],extra:s=>{vi(s,[0],1);let r=Te(s,e,[[["OTRO GRUPO"],.05,"w",[0,2.2,.6],1.3],[["MI HABITACI\xD3N"],t-.1,"w",[0,2.2,.6],1.5],[["MIS ZAPATOS"],i-.1,"w",[0,2.2,.6],1.3,1]]),o=Ay(s);return{update:(a,l,c)=>{r(a,c),o(a,[.35,1.8,.6],c,a>i)}}},c:[[0,1.4,2.8],[0,1.2,.6],[0,1.4,2.5],[0,1.25,.6]]}});j(73,(n,e)=>{let t=z(e,"peor"),i=z(e,"lloraron");return{...kn({look:{exposure:.9,vig:.6}}),atores:[Gt(s=>bn(1,s),-.6,.6,{eyes:[[0,"down"],[t,"small"],[i,"shut"]],pose:Hr}),Gt(s=>Jt({outfit:"laranja",glow:0,...s}),.6,.6,{eyes:[[0,"down"],[t+.5,"small"],[i,"shut"]],pose:Hr})],extra:(s,r,o)=>{vi(s,[-.6,.6],1);let a=[0,1].map(()=>Ny(s)),l=Te(s,e,[[["LO PASARON PEOR"],t-.2,"b",[0,2.25,.6],1.7,1]]);return{update:(c,h,d)=>{l(c,d),o.forEach((u,p)=>{let g=new P;u.head.getWorldPosition(g),a[p](c,g,ye(i-.3,i,c))})}}},c:[[0,1.4,3],[0,1.2,.6],[0,1.4,2.7],[0,1.25,.6]]}});j(74,(n,e)=>{let t=z(e,"medico");return{amb:"gris",fov:32,atores:[],extra:i=>{let s=Py(i,[[`ESCRIBIERON
LO QUE SENT\xCDAN`,.3,"#6A3AB8"],[`ESCRIBIERON
DE ZAPATOS`,.75,"#9AA8B8"]],2.4,[0,1.5,0],{title:"VISITAS AL M\xC9DICO"}),r=Te(i,e,[[["MESES DESPU\xC9S"],.05,"w",[0,2.4,.1],1.5,1]]);return{update:(o,a,l)=>{De(s,o,t-.8,1e9,l),r(o,l)}}},c:[[0,1.6,3.4],[0,1.6,0],[0,1.6,3.1],[0,1.6,0]],k:1,look:{exposure:1,bloom:.2}}});j(75,(n,e)=>{let t=z(e,"ayuda"),i=z(e,"papel");return{...dd({ambo:{night:!0},look:bo}),atores:[Gt(Xe,0,-.4,{eyes:[[0,"down"],[t,"happy"]],pose:Hr})],extra:s=>{vi(s,[0],0);let r=Hn(s,.4,[.6,1.6,-.2]),o=To(s,["Querido papel\u2026"],.6,[-.55,1.3,-.1],60),a=Te(s,e,[[["AYUDA"],t-.1,"y",[0,1.95,-.4],.9,1]]);return{update:(l,c,h)=>{De(r,l,.2,t,h),De(o,l,i-.4,1e9,h),a(l,h)}}},c:[[0,1.4,2.6],[0,1.1,-.4],[0,1.35,2.3],[0,1.15,-.4]]}});j(76,(n,e)=>{let t=z(e,"propones"),i=z(e,"canta"),s=z(e,"no"),r=z(e,"reis"),o=z(e,"otra");return{...Vs(),atores:[Gt(mt,.4,-1.6,{eyes:[[0,"happy"],[s,"flat"],[r,"happy"]],talk:[[i,s]],pose:(a,l)=>l>r&&l<r+1.2?So(a,l):fs(a,l)}),Gt(Xe,-.5,-1.6,{eyes:[[0,"look"],[r,"happy"]],talk:[[t,t+1]],pose:(a,l)=>l>r&&l<r+1.2?So(a,l):a.pose({armL:[12,8],armR:[60,70]})})],extra:(a,l,c)=>{Ws(a),Oi(a,.4,-1.75),Oi(a,-.5,-1.75);let h=$n();a.add(h);let d=ki(a,5),u=Te(a,e,[[["LA TARDE ENTERA"],.1,"w",[0,2.2,-1.6],1.6],[["NO SUENA BIEN"],s-.1,"r",[0,2.2,-1.6],1.5],[["OTRA VEZ"],o-.2,"p",[0,2.2,-1.6],1,1]]),p=pd(a,[-1.4,2.6,-3.3],16);return{update:(g,E,m)=>{li(h,c[0]),d(g,new P(.6,1.2,-1.5),m),u(g,m),p.set(16+g*.12)}}},lookFn:a=>({exposure:Tt(1.05,.9,ye(0,13,a))}),c:[[0,1.4,2.8],[0,1,-1.6],[.1,1.4,2.3],[0,1.05,-1.6]]}});j(77,(n,e)=>{let t=z(e,"sin"),i=z(e,"nube"),s=z(e,"metro"),r=z(e,"blanco");return{...Vs({look:{exposure:.95,bloom:.5,vig:.55}}),atores:[Gt(mt,.35,-1.6,{eyes:[[0,"shut"],[s,"look"],[r,"happy"]],talk:[[0,n]],pose:fs}),Gt(Xe,-.45,-1.6,{eyes:[[0,"wide"],[s,"heart"]]})],extra:(o,a,l)=>{Ws(o),Oi(o,.35,-1.75),Oi(o,-.45,-1.75);let c=$n();o.add(c);let h=ki(o,7),d=ll(["\u25CF REC"],{});d.scale.setScalar(.25),d.position.set(1.2,1,-1.4),o.add(d);let u=wo(o,.5,[1.2,1.6,-1.4]),p=Un(o,["\u2715"],.3,[1.2,1,-1.3],{bg:"#C83A4A",fg:"#fff",w:300}),g=Un(o,["\u2715"],.3,[1.2,1.6,-1.3],{bg:"#C83A4A",fg:"#fff",w:300}),E=Te(o,e,[[["EN DIRECTO"],z(e,"directo")-.2,"p",[0,2.15,-1.6],1.2],[["A UN METRO"],s-.3,"y",[0,2.15,-1.6],1.2],[["\xA1NO SE QUEDA EN BLANCO!"],r-.4,"w",[0,2.15,-1.6],2.2,1]]);return{update:(m,f,_)=>{li(c,l[0]),h(m,new P(.5,1.25,-1.5),_),De(p,m,t,s,_),De(g,m,i,s,_),d.visible=u.visible=m<s,E(m,_)}}},cam:[[0,[0,1.4,2.8],[0,1.05,-1.6]],[5,[0,1.3,1.4],[-.05,1.05,-1.6]],[99,[0,1.3,1],[-.05,1.05,-1.6]]],f:[[0,4.4],[5,3],[99,2.6]]}});var Zn=(n={})=>({amb:"concierto",fov:32,...n}),Qy=(n,e,t)=>To(n,["FESTIVAL DE INVIERNO","1. Malabares","2. Grupo de baile","3. Chistes del profe","4. ACTUACI\xD3N SORPRESA"],e,t,44),Jn=(n={})=>({amb:"gris",fov:32,look:{exposure:.9,vig:.6,bloom:.35},...n}),Qn=n=>{n.add(R(.1,3.2,3,b("#3A1E4A"),1.6,1.6,-1.2));for(let t=0;t<6;t++)n.add(R(.08,2.9,.2,b("#5A2A6A"),1.5,1.5,-2.4+t*.5));let e=Ye("#FFC8F0",2.4,.5);e.position.set(2.4,1.6,-1.2),n.add(e)};j(78,(n,e)=>({...Zn(),atores:[],extra:t=>{let i=Te(t,e,[[["VIERNES"],.05,"y",[0,2.6,-.6],1.3],[["FESTIVAL DE FIN DE TRIMESTRE"],z(e,"festival")-.2,"p",[0,2.6,-.6],2.8,1]]);return{update:(s,r,o)=>i(s,o)}},c:[[0,2,5.4],[0,1.6,-1],[0,2,4.8],[0,1.6,-1]]}));j(79,(n,e)=>{let t=z(e,"gradas");return{...Zn(),atores:fd(2,6,[[0,"happy"]]),extra:i=>{ul(i,2);let s=Te(i,e,[[["\xA1LLENO!"],.3,"y",[0,3.6,2.6],1,1]]);return{update:(r,o,a)=>s(r,a)}},cam:[[0,[0,2,-1.2],[0,1.4,3]],[99,[-1,2.2,-1.6],[0,1.6,3]]],f:[[0,4.2],[99,4.8]]}});J0(80,["grupo","profesor"],[(n,e)=>({...Zn(),atores:[Jt({outfit:"laranja",glow:0,x:0,y:_n,z:-.6,eyes:[[0,"happy"]],pose:(t,i)=>t.pose({armL:[80+Math.sin(i*9)*20,60],armR:[80-Math.sin(i*9)*20,60]})})],extra:t=>{let i=[0,1,2].map(r=>{let o=new O(new Mt(.08,12,8),b(["#E8667F","#F2C14E","#4A86C7"][r]));return t.add(o),o}),s=Te(t,e,[[["MALABARES"],.05,"w",[0,3,-.6],1.3,1]]);return{update:(r,o,a)=>{i.forEach((l,c)=>{let h=r*6+c*2.1;l.position.set(Math.cos(h)*.35,_n+2+Math.abs(Math.sin(h))*.6,-.4)}),s(r,a)}}},c:[[0,1.9,3.4],[0,1.9,-.6],[0,1.9,3],[0,1.95,-.6]]}),(n,e)=>({...Zn(),atores:[0,1,2].map(t=>bn(t,{x:-.9+t*.9,y:_n,z:-.8,eyes:[[0,"happy"]],pose:(i,s)=>_y(i,s+t*.3)})),extra:t=>{let i=Te(t,e,[[["GRUPO DE BAILE"],.05,"w",[0,3,-.8],1.6,1]]);return{update:(s,r,o)=>i(s,o)}},c:[[0,1.9,4.2],[0,1.8,-.8],[0,1.9,3.8],[0,1.85,-.8]]}),(n,e)=>({...Zn(),atores:[ld({x:0,y:_n,z:-.6,eyes:[[0,"happy"]],talk:[[0,n]],pose:nd})],extra:t=>{let i=_i(t,["\xBFPor qu\xE9 el libro de","mates est\xE1 triste?"],1.2,[.8,_n+2,-.6],56),s=ds(t,["\u2026"],.45,[-1,1.4,1.5],fl);return{update:(r,o,a)=>{De(i,r,.05,1e9,a),De(s,r,1.2,1e9,a)}}},c:[[0,1.9,3.4],[0,1.9,-.6],[0,1.9,3],[0,1.95,-.6]]})]);j(81,(n,e)=>{let t=z(e,"actuacion"),i=z(e,"sabes");return{...Zn(),atores:[],extra:s=>{let r=Qy(s,1.6,[0,1.6,2]),o=Ye("#FFE27A",1.4,0);o.position.set(0,1.25,2.05),s.add(o);let a=wo(s,.5,[.65,1.15,2.1]);return{update:(l,c,h)=>{o.material.opacity=.4*ye(t-.2,t+.3,l),De(a,l,i,1e9,h)}}},cam:[[0,[0,1.65,3.6],[0,1.6,2]],[t-.3,[0,1.65,3.4],[0,1.6,2]],[t+.4,[0,1.3,3],[0,1.25,2]],[99,[0,1.3,2.9],[0,1.25,2]]],f:[[0,1.6],[t-.3,1.4],[t+.4,1],[99,.9]],k:1,look:{exposure:1.05,bloom:.3}}});j(82,(n,e)=>{let t=z(e,"caja"),i=z(e,"tiemblan");return{...Jn(),atores:[Xe({x:-1.6,z:0,eyes:[[0,"look"]],move:s=>[Tt(-2.6,-.9,ye(0,t,s)),0,0],pose:(s,r)=>r<t?s.walk(r):s.pose()}),mt({x:.3,z:-.4,y:-.22,eyes:[[0,"down"],[i,"small"]],pose:(s,r)=>{us(s),s.pose({armL:[40+Math.sin(r*40)*4*ye(i-.3,i,r),60],armR:[40+Math.cos(r*38)*4*ye(i-.3,i,r),60]})}})],extra:(s,r,o)=>{Qn(s),s.add(R(.7,.5,.55,b("#6A5A44"),.3,.25,-.5));let a=$n();s.add(a);let l=Te(s,e,[[["DETR\xC1S DEL ESCENARIO"],.05,"w",[0,2.4,-.4],2],[["LE TIEMBLAN LAS MANOS"],i-.2,"b",[0,2.4,-.4],2.1,1]]);return{update:(c,h,d)=>{li(a,o[1],0,-.08),a.position.x+=Math.sin(c*40)*.01*ye(i-.3,i,c),l(c,d)}}},c:[[-.4,1.4,4],[-.3,1.1,-.2],[-.2,1.35,3.4],[-.2,1.1,-.2]]}});j(83,(n,e)=>({...Jn(),atores:[mt({x:.3,z:-.4,y:-.22,eyes:[[0,"small"]],talk:[[0,n]],pose:(t,i)=>{us(t),t.pose({armL:[20,30],armR:[20,30]})}})],extra:t=>{Qn(t),t.add(R(.7,.5,.55,b("#6A5A44"),.3,.25,-.5));let i=tn(t,e,[[["No puedo."],.05,[1,1.9,-.4],.7],[["Hay demasiada gente."],z(e,"hay")-.1,[1,1.9,-.4],1]]);return{update:(s,r,o)=>i(s,o)}},c:[[.4,1.3,2.4],[.4,1.2,-.4],[.4,1.3,2.1],[.4,1.25,-.4]]}));j(84,(n,e)=>{let t=z(e,"mirame"),i=z(e,"haz");return{...Jn(),atores:[Xe({x:-.5,z:0,eyes:[[0,"look"],[t,"happy"]],talk:[[0,n]],pose:(s,r)=>r>t?s.pose({armL:[12,8],armR:[80,20]}):s.pose()}),mt({x:.3,z:-.4,y:-.22,eyes:[[0,"small"],[i+.5,"look"]],pose:s=>{us(s),s.pose({armL:[20,30],armR:[20,30]})}})],extra:s=>{Qn(s),s.add(R(.7,.5,.55,b("#6A5A44"),.3,.25,-.5));let r=tn(s,e,[[["No mires a la gente."],.05,[-.6,2.1,0],1],[["M\xEDrame a m\xED."],t-.1,[-.6,2.1,0],.8],[["Haz como en","el aula de m\xFAsica."],i-.1,[-.6,2.15,0],1]]);return{update:(o,a,l)=>r(o,l)}},c:[[0,1.4,3],[-.1,1.2,-.2],[0,1.35,2.6],[-.1,1.25,-.2]]}});j(85,(n,e)=>{let t=z(e,"levanta"),i=z(e,"sale");return{...Jn(),atores:[Xe({x:-.6,z:0,eyes:[[0,"happy"]],pose:s=>s.pose({armL:[150,30],armR:[12,8]})}),mt({x:.3,z:-.4,y:-.22,eyes:[[0,"shut"],[t,"look"]],move:s=>{let r=ye(t,t+.4,s),o=ye(i,n,s);return[Tt(.3,2.6,o),Tt(-.22,0,r),-.4]},pose:(s,r)=>{r<t?(us(s),s.pose({armL:[40,60],armR:[40,60],bob:ye(0,.8,r)*.03})):r>i?s.walk(r):s.pose({armL:[60,70],armR:[60,70]})}})],extra:(s,r,o)=>{Qn(s),s.add(R(.7,.5,.55,b("#6A5A44"),.3,.25,-.5));let a=$n();return s.add(a),{update:l=>li(a,o[1],0,l<t?-.08:0)}},c:[[0,1.4,3.6],[.2,1.15,-.3],[.4,1.35,3.2],[.6,1.15,-.3]]}});j(86,(n,e)=>{let t=z(e,"foco"),i=z(e,"silencio");return{...Zn(),atores:[mt({x:0,y:_n,z:-.6,eyes:[[0,"small"]],pose:s=>s.pose({armL:[60,80],armR:[40,70]})})],extra:(s,r,o)=>{let[a,l]=cl(s,0,-.6);l.position.y=_n+.02;let c=$n();s.add(c);let h=Te(s,e,[[["SILENCIO TOTAL"],i-.1,"w",[0,3.2,-.6],1.7,1]]);return{update:(d,u,p)=>{let g=ye(t-.3,t+.2,d);a.intensity=40*g,l.material.opacity=.35*g,li(c,o[0]),h(d,p)}}},lookFn:s=>({exposure:Tt(1,.35,ye(0,1.2,s))+ye(2,2.6,s)*.45,bloom:.55}),c:[[0,2,5],[0,1.8,-.6],[0,1.95,4.2],[0,1.85,-.6]]}});j(87,(n,e)=>({...Zn({look:{exposure:.85,bloom:.55}}),atores:[mt({x:0,y:_n,z:-.6,eyes:[[0,"shut"]],talk:[[0,n]],pose:fs})],extra:(t,i,s)=>{let[r,o]=cl(t,0,-.6);o.position.y=_n+.02;let a=$n();t.add(a);let l=ki(t,6);return{update:(c,h,d)=>{li(a,s[0]),l(c,new P(.2,_n+1.6,-.5),d)}}},c:[[0,1.95,2.8],[0,1.9,-.6],[0,1.95,2.5],[0,1.95,-.6]]}));j(88,(n,e)=>{let t=z(e,"grita");return{...Zn(),atores:fd(2,6,[[0,"look"],[t+.3,"wide"]],(i,s)=>i.pose({armL:[12,8],armR:[s>t?140:12,30]})),extra:i=>{ul(i,2);let s=tn(i,e,[[["\xA1Es Nube Lila!"],t,[-1.2,2.8,2.4],1],[["\xA1Es la canci\xF3n","de Nube Lila!"],z(e,"es",t+.8)-.1,[1.4,3.1,3],1.1]]),r=Te(i,e,[[["10 SEGUNDOS"],.05,"w",[0,3.5,2.6],1.3]]);return{update:(o,a,l)=>{s(o,l),r(o,l)}}},c:[[0,2,-1.4],[0,1.6,3],[0,2,-.8],[0,1.6,3]]}});j(89,(n,e)=>{let t=z(e,"sara");return{...Zn(),atores:[tf({x:-.6,z:2.2,y:0,eyes:[[0,"wide"]],move:i=>[-.6,Tt(cs+.45,.45,ye(.3,.8,i)),2.2],pose:(i,s)=>s<.5?us(i):i.pose({armL:[12,8],armR:[12,8]})}),Gt(hs,.6,2.2,{y:.45+cs,eyes:[[0,"look"],[t+.3,"wide"]],pose:(i,s)=>i.pose({armL:[s>t?140:12,s>t?140:8],armR:[s>t?140:12,s>t?140:8]})})],extra:i=>{ul(i,2);let s=Te(i,e,[[["\xA1\xBFQU\xC9?!"],.6,"y",[-.6,2.85,2.2],.8],[["NO PUEDE SER"],t+.3,"p",[.6,2.6,2.2],1.3,1]]);return{update:(r,o,a)=>s(r,a)}},c:[[0,1.9,-.6],[0,1.6,2.2],[0,1.9,-.2],[0,1.6,2.2]]}});j(90,(n,e)=>{let t=z(e,"busca"),i=z(e,"esquina");return{...Zn({look:{exposure:.9,bloom:.55}}),atores:[mt({x:.4,y:_n,z:-.6,eyes:[[0,"shut"],[t,"lookl"]],talk:[[0,n]],pose:fs}),Xe({x:-1.8,y:_n,z:-.2,eyes:[[0,"happy"],[i,"heart"]],pose:s=>s.pose({armL:[12,8],armR:[150,30]})})],extra:(s,r,o)=>{let[a,l]=cl(s,.4,-.6);l.position.y=_n+.02;let c=$n();s.add(c);let h=ki(s,7),d=zs(s);return{update:(u,p,g)=>{li(c,o[0]),h(u,new P(.6,_n+1.6,-.5),g),d(u,[-1.8,_n+2.1,-.2],ye(i,i+.3,u))}}},cam:[[0,[.4,2,3.2],[.4,1.95,-.6]],[t,[-.4,2,4.4],[-.6,1.9,-.4]],[99,[-.6,2,4],[-.7,1.9,-.4]]],f:[[0,3.8],[t,4.8],[99,4.4]]}});j(91,(n,e)=>{let t=z(e,"pie");return{...Zn(),atores:fd(2,6,[[0,"happy"]],(i,s)=>s>t-.4?yy(i,s):i.pose()).map(i=>({...i,move:s=>[i.x,i.y+ye(t-.5,t,s)*.3,i.z]})),extra:i=>{ul(i,2);let s=Nr(i,20,"#FFE27A");return{update:r=>s(r,[0,3,2.4,2.4],ye(t-.4,t,r))}},c:[[0,2,-1.4],[0,1.7,3],[0,2.1,-1],[0,1.8,3]]}});j(92,(n,e)=>{let t=z(e,"riendose"),i=z(e,"abraza");return{...Jn(),atores:[Xe({x:-.35,z:0,eyes:[[0,"happy"],[i,"shut"]],pose:(s,r)=>r>i?id(s):s.pose({armL:[12,8],armR:[12,8]})}),mt({x:.3,z:0,eyes:[[0,"wide"],[t,"happy"],[i,"shut"]],move:s=>[Tt(2.6,i>s?.45:.22,ye(0,1.6,s)*(s>i,1)),0,0],pose:(s,r)=>r<1.6?s.walk(r*1.6):r>i?id(s):r>t?So(s,r):sf(s,r)})],extra:s=>{Qn(s);let r=Te(s,e,[[["TEMBLANDO"],z(e,"temblando")-.1,"b",[.5,2.3,0],1.2],[["RI\xC9NDOSE"],t-.1,"y",[.5,2.3,0],1.1,1]]);return{update:(o,a,l)=>r(o,l)}},c:[[0,1.4,3.4],[0,1.2,0],[0,1.4,2.8],[0,1.25,0]]}});j(93,(n,e)=>({...Jn(),atores:[Xe({x:-.35,z:0,eyes:[[0,"happy"]],pose:id}),mt({x:.25,z:0,eyes:[[0,"happy"]],talk:[[0,n]],pose:(t,i)=>t.pose({armL:[150+Math.sin(i*8)*10,30],armR:[150-Math.sin(i*8)*10,30],bob:Math.abs(Math.sin(i*8))*.04})})],extra:t=>{Qn(t);let i=tn(t,e,[[["\xA1Lo he hecho!"],.05,[.6,2.15,0],.8],[["\xA1No me lo creo!"],z(e,"no")-.1,[.6,2.15,0],.9],[["\xA1LO HE HECHO!"],z(e,"lo",2)-.1,[.6,2.15,0],.9]]),s=Nr(t,12,"#FFE27A");return{update:(r,o,a)=>{i(r,a),s(r,[.25,1.8,.1,.6],1)}}},c:[[0,1.4,2.8],[0,1.25,0],[0,1.4,2.4],[0,1.3,0]]}));j(94,(n,e)=>{let t=z(e,"oye"),i=z(e,"ahora"),s=z(e,"cuentame");return{...Jn(),atores:[Xe({x:-.4,z:0,eyes:[[0,"happy"],[i,"wide"]]}),mt({x:.4,z:0,eyes:[[0,"happy"],[t,"look"],[s,"smug"]],talk:[[t,n]],pose:(r,o)=>o>i&&o<s?zi(r):r.pose({armL:[12,8],armR:[12,8]})})],extra:(r,o,a)=>{Qn(r);let l=Mo(a[0]),c=tn(r,e,[[["Oye. Yo te he contado","mi secreto."],t,[.6,2.2,0],1.1],[["Ahora te toca a ti."],i-.1,[.6,2.15,0],1],[["Cu\xE9ntame uno que","no sepa nadie."],s-.1,[.6,2.2,0],1]]);return{update:(h,d,u)=>{l(.3*ye(i,i+.6,h)),c(h,u)}}},cam:[[0,[0,1.4,3.2],[0,1.25,0]],[t,[.1,1.4,2.6],[.05,1.3,0]],[99,[.1,1.4,2.3],[.05,1.35,0]]],f:[[0,3.2],[t,2.6],[99,2.3]]}});j(95,(n,e)=>({...Gs(),atores:[ls(0,{x:0,z:0,eyes:[[0,"happy"]],pose:zi})],extra:t=>{let i=Te(t,e,[[["EL \xDALTIMO ESTUDIO"],.1,"p",[0,2.35,0],1.8,1]]);return{update:(s,r,o)=>i(s,o)}},c:[[0,1.4,3.4],[0,1.25,0],[0,1.4,3],[0,1.3,0]]}));j(96,(n,e)=>{let t=z(e,"nancy"),i=z(e,"decenas");return{...Gs(),atores:[ls(0,{x:-.6,z:0,eyes:[[0,"look"]],pose:of}),ls(2,{x:.6,z:0,eyes:[[0,"happy"]],pose:s=>s.pose({armL:[12,8],armR:[60,70]})})],extra:s=>{let r=[];for(let a=0;a<12;a++){let l=To(s,["Estudio "+(a+1)],.45,[-1.8+a%6*.72,2.55-Math.floor(a/6)*.45,-1.2],48);r.push(l)}let o=Te(s,e,[[["NANCY COLLINS Y LYNN MILLER"],t-.1,"w",[0,.55,.4],2.6],[["DECENAS DE EXPERIMENTOS"],i-.2,"y",[0,.55,.4],2.4,1]]);return{update:(a,l,c)=>{r.forEach((h,d)=>De(h,a,i+d*.1,1e9,c)),o(a,c)}}},c:[[0,1.6,4.4],[0,1.5,-.4],[0,1.6,4],[0,1.5,-.4]]}});J0(97,["una","dos","tres"],[(n,e)=>({amb:"gris",fov:32,atores:[],extra:t=>{let i=Te(t,e,[[["3 COSAS"],.1,"p",[0,1.6,0],1.6,1]]);return{update:(s,r,o)=>i(s,o)}},c:[[0,1.6,3.4],[0,1.6,0],[0,1.6,3],[0,1.6,0]],k:1}),(n,e)=>({...Tn(),atores:[Xe({x:-.5,z:0,eyes:[[0,"happy"]],talk:[[0,n]],pose:nd}),hl({x:.5,z:0,eyes:[[0,"happy"]],pose:k0}),bn(2,{x:1.4,z:-.4,eyes:[[0,"happy"]]})],extra:t=>{Sn(t);let i=Te(t,e,[[["1. QUIEN SE ABRE, CAE MEJOR"],.1,"y",[.3,2.4,0],2.6,1]]),s=zs(t);return{update:(r,o,a)=>{i(r,a),s(r,[.5,2,0],ye(1,1.5,r))}}},c:[[.3,1.5,4],[.3,1.3,0],[.3,1.5,3.6],[.3,1.3,0]]}),(n,e)=>({...Tn(),atores:[Xe({x:-.45,z:0,eyes:[[0,"heart"]],talk:[[0,n]],pose:nd}),mt({x:.45,z:0,eyes:[[0,"happy"]],pose:k0})],extra:t=>{Sn(t);let i=Te(t,e,[[["2. A QUIEN NOS GUSTA, LE CONTAMOS M\xC1S"],.1,"p",[0,2.4,0],3,1]]);return{update:(s,r,o)=>i(s,o)}},c:[[0,1.5,3.6],[0,1.3,0],[0,1.5,3.2],[0,1.3,0]]}),(n,e)=>({...Tn(),atores:[Xe({x:-.45,z:0,eyes:[[0,"happy"]],talk:[[0,1.5]]}),mt({x:.45,z:0,eyes:[[0,"happy"],[1.6,"heart"]]})],extra:t=>{Sn(t);let i=Te(t,e,[[["3. DESPU\xC9S DE ABRIRTE, OS GUST\xC1IS M\xC1S"],.1,"y",[0,2.4,0],3,1]]),s=zs(t),r=zs(t);return{update:(o,a,l)=>{i(o,l),s(o,[-.45,2,0],ye(2.4,2.8,o)),r(o,[.45,2,0],ye(1.6,2,o))}}},c:[[0,1.5,3.6],[0,1.3,0],[0,1.5,3.2],[0,1.3,0]]})]);j(98,(n,e)=>{let t=z(e,"vuelta");return{amb:"gris",fov:32,atores:[Xe({x:-1,z:0,eyes:[[0,"happy"]],move:i=>[Tt(-1,-.45,ye(t-1,n,i)),0,0]}),mt({x:1,z:0,eyes:[[0,"happy"]],move:i=>[Tt(1,.45,ye(t-1,n,i)),0,0]})],extra:i=>{let s=[];for(let o=0;o<10;o++){let a=od(i,.22,o%2?"#E8447A":"#A07AE8");s.push(a)}let r=Te(i,e,[[["UN C\xCDRCULO"],.1,"p",[0,2.75,0],1.3,1]]);return{update:(o,a,l)=>{s.forEach((c,h)=>{let d=o*1.4+h*Math.PI/5,u=Tt(1.25,.8,ye(t-1,n,o));c.position.set(Math.cos(d)*u,1.3+Math.sin(d)*.7,Math.sin(d)*.2+.3),De(c,o,h*.1,1e9,l)}),r(o,l)}}},c:[[0,1.5,4],[0,1.4,0],[0,1.5,3.4],[0,1.4,0]]}});j(99,(n,e)=>({...Jn(),atores:[Xe({x:-.4,z:0,eyes:[[0,"look"]]}),mt({x:.4,z:0,eyes:[[0,"smug"]]})],extra:t=>{Qn(t);let i=Te(t,e,[[["1\xAA VUELTA"],.2,"p",[.4,2.2,0],1,1]]);return{update:(s,r,o)=>i(s,o)}},c:[[0,1.4,3],[0,1.25,0],[0,1.4,2.6],[0,1.3,0]]}));j(100,(n,e)=>({...Jn(),atores:[Xe({x:-.4,z:0,eyes:[[0,"shut"],[3,"look"]],pose:(t,i)=>t.pose({armL:[12,8],armR:[12,8],bob:Math.sin(i*2)*.02})}),mt({x:.4,z:0,eyes:[[0,"look"]]})],extra:t=>(Qn(t),{update:()=>{}}),c:[[-.3,1.4,2.2],[-.35,1.35,0],[-.3,1.4,1.9],[-.35,1.4,0]]}));j(101,(n,e)=>{let t=z(e,"gustas"),i=z(e,"desde",3),s=z(e,"nube");return{...Jn(),atores:[Xe({x:-.4,z:0,eyes:[[0,"look"],[t,"happy"]],talk:[[0,n]]}),mt({x:.4,z:0,eyes:[[0,"look"],[t+.4,"wide"]]})],extra:(r,o,a)=>{Qn(r);let l=Mo(a[0]),c=Mo(a[1]),h=tn(r,e,[[["Vale."],.05,[-.6,2.15,0],.6],[["Mi secreto es\u2026"],z(e,"mi")-.1,[-.6,2.15,0],.9],[["\u2026que me gustas."],t-.3,[-.6,2.15,0],.9],[["Desde antes de saber","que eras Nube Lila."],i-.1,[-.6,2.2,0],1.1]]);return{update:(d,u,p)=>{l(.3*ye(t-.5,t,d)),c(.3*ye(t+.5,t+1.2,d)),h(d,p)}}},cam:[[0,[-.2,1.4,2.4],[-.2,1.35,0]],[t,[0,1.4,2.8],[0,1.3,0]],[99,[0,1.4,2.6],[0,1.3,0]]],f:[[0,2.4],[t,2.8],[99,2.6]]}});j(102,(n,e)=>{let t=z(e,"sonrie"),i=z(e,"libreta");return{...Jn(),atores:[Xe({x:-.4,z:0,eyes:[[0,"small"]]}),mt({x:.4,z:0,eyes:[[0,"look"],[t,"happy"]],pose:(s,r)=>s.pose({armL:[12,8],armR:[r>i?80:12,r>i?60:8]})})],extra:(s,r,o)=>{Qn(s);let a=Or(s,[["",0]],.5,[0,0,0]),l=Te(s,e,[[["SILENCIO"],.05,"w",[0,2.05,0],1.1,1]]);return{update:(c,h,d)=>{let u=ks(o[1]);a.position.set(u.x-.1,u.y+.12,u.z+.12),a.visible=c>i,l(c,d)}}},c:[[0,1.4,3],[0,1.25,0],[0,1.4,2.6],[0,1.3,0]]}});j(103,(n,e)=>{let t=z(e,"pone");return{amb:"gris",fov:32,atores:[],extra:i=>{let s=Or(i,[["",0],["",0],["Y al final, se lo dije.",0]],1.9,[0,1.5,0],{size:64}),r=Ye("#FFB8D8",1.6,0);r.position.set(0,1.3,.05),i.add(r);let o=od(i,.3);return o.position.set(.75,1.25,.1),{update:(a,l,c)=>{r.material.opacity=.18*ye(t,t+.6,a),De(o,a,t+1.2,1e9,c)}}},cam:[[0,[0,1.5,2.6],[0,1.5,0]],[99,[0,1.5,1.7],[0,1.5,0]]],f:[[0,2.6],[99,1.7]],k:1}});j(104,(n,e)=>({...Jn(),atores:[Xe({x:-.4,z:0,eyes:[[0,"wide"],[2.4,"heart"]]}),mt({x:.4,z:0,eyes:[[0,"smug"]],talk:[[0,2.6]]})],extra:(t,i,s)=>{Qn(t);let r=_i(t,["\xBFY de qui\xE9n cre\xEDas","que iba la canci\xF3n?"],1,[.85,1.85,.35],58),o=zs(t);return{update:(a,l,c)=>{De(r,a,.05,1e9,c),o(a,[0,2.15,.2],ye(2.6,3,a))}}},c:[[0,1.4,2.8],[0,1.3,0],[0,1.4,2.4],[0,1.35,0]]}));j(105,(n,e)=>{let t=z(e,"trece");return{...Tn(),atores:[...[0,1,2,3,4].map(i=>i%2?bn(i,{x:-1.8+i*.9,z:-.2,eyes:[[0,"happy"]]}):Jt({outfit:["laranja","azul","hero"][i%3],glow:0,x:-1.8+i*.9,z:-.2,eyes:[[0,"happy"]]}))],extra:(i,s,r)=>{Sn(i);let o=r.map(()=>Hn(i,.3,[0,0,0])),a=Te(i,e,[[["TODO EL MUNDO"],z(e,"todo")-.1,"w",[0,2.55,-.2],1.5],[["UNOS 13"],t-.1,"p",[0,2.55,-.2],1.1,1]]);return{update:(l,c,h)=>{r.forEach((d,u)=>{let p=new P;d.head.getWorldPosition(p),o[u].position.set(p.x,p.y+.5,p.z),De(o[u],l,1.5+u*.15,1e9,h)}),a(l,h)}}},c:[[0,1.6,5],[0,1.4,-.2],[0,1.6,4.5],[0,1.45,-.2]]}});j(106,(n,e)=>{let t=z(e,"cuente");return{...Tn({look:rf}),atores:[Xe({x:-.45,z:0,eyes:[[0,"happy"]],talk:[[.5,2.5]]}),mt({x:.45,z:0,eyes:[[0,"happy"]],talk:[[t-.5,n]]})],extra:i=>{Sn(i);let s=Hn(i,.3,[-.45,2.15,0]),r=Hn(i,.3,[.45,2.15,0]),o=zs(i);return{update:(a,l,c)=>{De(s,a,.2,2.6,c),De(r,a,.2,t,c),o(a,[0,2.3,.1],ye(t,t+.4,a))}}},c:[[0,1.5,3.6],[0,1.35,0],[0,1.5,3.1],[0,1.4,0]]}});$0(Ur[107],q0,(n,e)=>{let t=z(e,"guardarias"),i=z(e,"comentarios"),s=z(e,"suscribete");return{...Tn({look:rf}),atores:[Xe({x:-.45,z:0,eyes:[[0,"look"],[i,"happy"]],pose:(r,o)=>o>s?rd(r,o):r.pose()}),mt({x:.45,z:0,eyes:[[0,"happy"]]})],extra:r=>{Sn(r);let o=Q0(r,["\xBFQU\xC9 SECRETO LE CONTAR\xCDAS","A TU CRUSH?"],2.2,[0,2.45,-.1],{h:260}),a=ds(r,["\xBFO TE LO GUARDAR\xCDAS?"],1.9,[0,2.45,-.1]),l=Un(r,["COMENTA ABAJO"],1.5,[0,2.45,-.1],{bg:"#2A2A34",fg:"#F2C14E"}),c=ed(1.4);r.add(c),c.position.set(0,2.4,.4);let h=zs(r);return{update:(d,u,p)=>{De(o,d,.05,t-.2,p),De(a,d,t-.1,i-.3,p),De(l,d,i-.2,s-.2,p),De(c,d,s-.1,1e9,p),c.visible&&c.scale.multiplyScalar(1+.04*Math.sin(d*6)),h(d,[0,1.95,.1],ye(.6,1,d))}}},c:[[0,1.6,3.8],[0,1.6,0],[0,1.6,3.4],[0,1.65,0]]}});function Ky(n){n.traverse(e=>{e.geometry&&e.geometry.dispose();let t=e.material;(Array.isArray(t)?t:t?[t]:[]).forEach(i=>{for(let s in i){let r=i[s];r&&r.isTexture&&r.dispose()}i.dispose()}),e.shadow&&e.shadow.map&&e.shadow.map.dispose()})}window.__hf=window.__hf||{};window.__hf.buildReady=window.__hf.buildReady||{};window.__hf.buildReady.film=(async()=>{await Promise.all(["900 40px Fraunces","700 40px Caveat","700 40px Inter","800 40px Inter","600 40px Inter","700 40px 'IBM Plex Mono'","600 40px 'IBM Plex Mono'"].map(r=>document.fonts.load(r))).catch(()=>{});let n=new qa(document.getElementById("film3d")),e=-1,t=null,i=r=>{let o=Br.findIndex(([,a,l])=>r>=a&&r<l);return o<0&&(o=Br.length-1),o},s=n.render.bind(n);n.render=r=>{let o=i(r);if(o!==e){t&&(Ky(t.scene),n.r.renderLists.dispose()),window.__srv=1+o*7919;let[a,l,c]=Br[o];t=a(l,c),n.shots=[t],e=o}s(r)},window.addEventListener("hf-seek",r=>n.render(r.detail.time)),n.render(0)})();})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
