var __srv=1;function __sr(){__srv=(__srv*16807)%2147483647;return __srv/2147483647}function __noRaf(){return 0}function __noCaf(){}
(()=>{var dh="170";var zf=0,rd=1,kf=2;var pu=1,uh=2,bi=3,Ji=0,sn=1,Dt=2,di=0,Yi=1,wn=2,od=3,ad=4,Gf=5,ps=100,Vf=101,Wf=102,Xf=103,qf=104,Yf=200,Zf=201,Jf=202,$f=203,zl=204,kl=205,Qf=206,Kf=207,jf=208,e0=209,t0=210,n0=211,i0=212,s0=213,r0=214,Gl=0,Vl=1,Wl=2,ir=3,Xl=4,ql=5,Yl=6,Zl=7,mu=0,o0=1,a0=2,ui=0,l0=1,c0=2,h0=3,d0=4,u0=5,f0=6,p0=7;var gu=300,sr=301,rr=302,Jl=303,$l=304,_a=306,dn=1e3,gs=1001,Ql=1002,Bn=1003,m0=1004;var yo=1005;var ci=1006,sl=1007;var Es=1008;var Ci=1009,Eu=1010,yu=1011,Yr=1012,fh=1013,Fi=1014,hi=1015,Cn=1016,ph=1017,mh=1018,or=1020,vu=35902,_u=1021,Au=1022,jn=1023,Mu=1024,Su=1025,er=1026,ar=1027,gh=1028,Eh=1029,Tu=1030,yh=1031;var vh=1033,Yo=33776,Zo=33777,Jo=33778,$o=33779,Kl=35840,jl=35841,ec=35842,tc=35843,nc=36196,ic=37492,sc=37496,rc=37808,oc=37809,ac=37810,lc=37811,cc=37812,hc=37813,dc=37814,uc=37815,fc=37816,pc=37817,mc=37818,gc=37819,Ec=37820,yc=37821,Qo=36492,vc=36494,_c=36495,bu=36283,Ac=36284,Mc=36285,Sc=36286;var Ko=2300,Tc=2301,rl=2302,ld=2400,cd=2401,hd=2402;var g0=3200,gr=3201;var wu=0,E0=1,Xi="",Vt="srgb",es="srgb-linear",Aa="linear",xt="srgb";var Ds=7680;var dd=519,y0=512,v0=513,_0=514,Ru=515,A0=516,M0=517,S0=518,T0=519,bc=35044;var ud="300 es",Ri=2e3,jo=2001,$i=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let i=this._listeners[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var ol=Math.PI/180,ea=180/Math.PI;function Zi(){let n=__sr()*4294967295|0,e=__sr()*4294967295|0,t=__sr()*4294967295|0,i=__sr()*4294967295|0;return(pn[n&255]+pn[n>>8&255]+pn[n>>16&255]+pn[n>>24&255]+"-"+pn[e&255]+pn[e>>8&255]+"-"+pn[e>>16&15|64]+pn[e>>24&255]+"-"+pn[t&63|128]+pn[t>>8&255]+"-"+pn[t>>16&255]+pn[t>>24&255]+pn[i&255]+pn[i>>8&255]+pn[i>>16&255]+pn[i>>24&255]).toLowerCase()}function gn(n,e,t){return Math.max(e,Math.min(t,n))}function b0(n,e){return(n%e+e)%e}function al(n,e,t){return(1-t)*n+t*e}function li(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Ct(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var he=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(gn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=__sr(),this.y=__sr(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ke=class n{constructor(e,t,i,s,r,o,a,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],d=i[7],u=i[2],p=i[5],g=i[8],E=s[0],m=s[3],f=s[6],v=s[1],_=s[4],y=s[7],L=s[2],C=s[5],b=s[8];return r[0]=o*E+a*v+l*L,r[3]=o*m+a*_+l*C,r[6]=o*f+a*y+l*b,r[1]=c*E+h*v+d*L,r[4]=c*m+h*_+d*C,r[7]=c*f+h*y+d*b,r[2]=u*E+p*v+g*L,r[5]=u*m+p*_+g*C,r[8]=u*f+p*y+g*b,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=h*o-a*c,u=a*l-h*r,p=c*r-o*l,g=t*d+i*u+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let E=1/g;return e[0]=d*E,e[1]=(s*c-h*i)*E,e[2]=(a*i-s*o)*E,e[3]=u*E,e[4]=(h*t-s*l)*E,e[5]=(s*r-a*t)*E,e[6]=p*E,e[7]=(i*l-c*t)*E,e[8]=(o*t-i*r)*E,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(ll.makeScale(e,t)),this}rotate(e){return this.premultiply(ll.makeRotation(-e)),this}translate(e,t){return this.premultiply(ll.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},ll=new Ke;function xu(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function ta(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function w0(){let n=ta("canvas");return n.style.display="block",n}var fd={};function Gr(n){n in fd||(fd[n]=!0,console.warn(n))}function R0(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}function x0(n){let e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function C0(n){let e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var Et={enabled:!0,workingColorSpace:es,spaces:{},convert:function(n,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===xt&&(n.r=xi(n.r),n.g=xi(n.g),n.b=xi(n.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(n.applyMatrix3(this.spaces[e].toXYZ),n.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===xt&&(n.r=tr(n.r),n.g=tr(n.g),n.b=tr(n.b))),n},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Xi?Aa:this.spaces[n].transfer},getLuminanceCoefficients:function(n,e=this.workingColorSpace){return n.fromArray(this.spaces[e].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,e,t){return n.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function xi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function tr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var pd=[.64,.33,.3,.6,.15,.06],md=[.2126,.7152,.0722],gd=[.3127,.329],Ed=new Ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),yd=new Ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Et.define({[es]:{primaries:pd,whitePoint:gd,transfer:Aa,toXYZ:Ed,fromXYZ:yd,luminanceCoefficients:md,workingColorSpaceConfig:{unpackColorSpace:Vt},outputColorSpaceConfig:{drawingBufferColorSpace:Vt}},[Vt]:{primaries:pd,whitePoint:gd,transfer:xt,toXYZ:Ed,fromXYZ:yd,luminanceCoefficients:md,outputColorSpaceConfig:{drawingBufferColorSpace:Vt}}});var Us,wc=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Us===void 0&&(Us=ta("canvas")),Us.width=e.width,Us.height=e.height;let i=Us.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Us}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=ta("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=xi(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(xi(t[i]/255)*255):t[i]=xi(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},F0=0,na=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:F0++}),this.uuid=Zi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(cl(s[o].image)):r.push(cl(s[o]))}else r=cl(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function cl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?wc.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var P0=0,Rn=class n extends $i{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=gs,s=gs,r=ci,o=Es,a=jn,l=Ci,c=n.DEFAULT_ANISOTROPY,h=Xi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:P0++}),this.uuid=Zi(),this.name="",this.source=new na(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new he(0,0),this.repeat=new he(1,1),this.center=new he(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==gu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case dn:e.x=e.x-Math.floor(e.x);break;case gs:e.x=e.x<0?0:1;break;case Ql:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case dn:e.y=e.y-Math.floor(e.y);break;case gs:e.y=e.y<0?0:1;break;case Ql:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Rn.DEFAULT_IMAGE=null;Rn.DEFAULT_MAPPING=gu;Rn.DEFAULT_ANISOTROPY=1;var Ft=class n{constructor(e=0,t=0,i=0,s=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],h=l[4],d=l[8],u=l[1],p=l[5],g=l[9],E=l[2],m=l[6],f=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-E)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+E)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let _=(c+1)/2,y=(p+1)/2,L=(f+1)/2,C=(h+u)/4,b=(d+E)/4,F=(g+m)/4;return _>y&&_>L?_<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(_),s=C/i,r=b/i):y>L?y<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),i=C/s,r=F/s):L<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(L),i=b/r,s=F/r),this.set(i,s,r,t),this}let v=Math.sqrt((m-g)*(m-g)+(d-E)*(d-E)+(u-h)*(u-h));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(d-E)/v,this.z=(u-h)/v,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=__sr(),this.y=__sr(),this.z=__sr(),this.w=__sr(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Rc=class extends $i{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ft(0,0,e,t),this.scissorTest=!1,this.viewport=new Ft(0,0,e,t);let s={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ci,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let r=new Rn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new na(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},on=class extends Rc{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},ia=class extends Rn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Bn,this.minFilter=Bn,this.wrapR=gs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var xc=class extends Rn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Bn,this.minFilter=Bn,this.wrapR=gs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Qi=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],d=i[s+3],u=r[o+0],p=r[o+1],g=r[o+2],E=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d;return}if(a===1){e[t+0]=u,e[t+1]=p,e[t+2]=g,e[t+3]=E;return}if(d!==E||l!==u||c!==p||h!==g){let m=1-a,f=l*u+c*p+h*g+d*E,v=f>=0?1:-1,_=1-f*f;if(_>Number.EPSILON){let L=Math.sqrt(_),C=Math.atan2(L,f*v);m=Math.sin(m*C)/L,a=Math.sin(a*C)/L}let y=a*v;if(l=l*m+u*y,c=c*m+p*y,h=h*m+g*y,d=d*m+E*y,m===1-a){let L=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=L,c*=L,h*=L,d*=L}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],d=r[o],u=r[o+1],p=r[o+2],g=r[o+3];return e[t]=a*g+h*d+l*p-c*u,e[t+1]=l*g+h*u+c*d-a*p,e[t+2]=c*g+h*p+a*u-l*d,e[t+3]=h*g-a*d-l*u-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),d=a(r/2),u=l(i/2),p=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=u*h*d+c*p*g,this._y=c*p*d-u*h*g,this._z=c*h*g+u*p*d,this._w=c*h*d-u*p*g;break;case"YXZ":this._x=u*h*d+c*p*g,this._y=c*p*d-u*h*g,this._z=c*h*g-u*p*d,this._w=c*h*d+u*p*g;break;case"ZXY":this._x=u*h*d-c*p*g,this._y=c*p*d+u*h*g,this._z=c*h*g+u*p*d,this._w=c*h*d-u*p*g;break;case"ZYX":this._x=u*h*d-c*p*g,this._y=c*p*d+u*h*g,this._z=c*h*g-u*p*d,this._w=c*h*d+u*p*g;break;case"YZX":this._x=u*h*d+c*p*g,this._y=c*p*d+u*h*g,this._z=c*h*g-u*p*d,this._w=c*h*d-u*p*g;break;case"XZY":this._x=u*h*d-c*p*g,this._y=c*p*d-u*h*g,this._z=c*h*g+u*p*d,this._w=c*h*d+u*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],d=t[10],u=i+a+d;if(u>0){let p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(i>a&&i>d){let p=2*Math.sqrt(1+i-a-d);this._w=(h-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>d){let p=2*Math.sqrt(1+a-i-d);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+d-i-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(gn(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),d=Math.sin((1-t)*h)/c,u=Math.sin(t*h)/c;return this._w=o*d+this._w*u,this._x=i*d+this._x*u,this._y=s*d+this._y*u,this._z=r*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*__sr(),t=2*Math.PI*__sr(),i=__sr(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},I=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(vd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(vd.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),h=2*(a*t-r*s),d=2*(r*i-o*t);return this.x=t+l*c+o*d-a*h,this.y=i+l*h+a*c-r*d,this.z=s+l*d+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return hl.copy(this).projectOnVector(e),this.sub(hl)}reflect(e){return this.sub(hl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(gn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=__sr(),this.y=__sr(),this.z=__sr(),this}randomDirection(){let e=__sr()*Math.PI*2,t=__sr()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},hl=new I,vd=new Qi,Pi=class{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint($n.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint($n.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=$n.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,$n):$n.fromBufferAttribute(r,o),$n.applyMatrix4(e.matrixWorld),this.expandByPoint($n);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),vo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),vo.copy(i.boundingBox)),vo.applyMatrix4(e.matrixWorld),this.union(vo)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,$n),$n.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ir),_o.subVectors(this.max,Ir),Os.subVectors(e.a,Ir),Ns.subVectors(e.b,Ir),Bs.subVectors(e.c,Ir),Hi.subVectors(Ns,Os),zi.subVectors(Bs,Ns),as.subVectors(Os,Bs);let t=[0,-Hi.z,Hi.y,0,-zi.z,zi.y,0,-as.z,as.y,Hi.z,0,-Hi.x,zi.z,0,-zi.x,as.z,0,-as.x,-Hi.y,Hi.x,0,-zi.y,zi.x,0,-as.y,as.x,0];return!dl(t,Os,Ns,Bs,_o)||(t=[1,0,0,0,1,0,0,0,1],!dl(t,Os,Ns,Bs,_o))?!1:(Ao.crossVectors(Hi,zi),t=[Ao.x,Ao.y,Ao.z],dl(t,Os,Ns,Bs,_o))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,$n).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize($n).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(_i[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),_i[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),_i[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),_i[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),_i[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),_i[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),_i[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),_i[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(_i),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},_i=[new I,new I,new I,new I,new I,new I,new I,new I],$n=new I,vo=new Pi,Os=new I,Ns=new I,Bs=new I,Hi=new I,zi=new I,as=new I,Ir=new I,_o=new I,Ao=new I,ls=new I;function dl(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){ls.fromArray(n,r);let a=s.x*Math.abs(ls.x)+s.y*Math.abs(ls.y)+s.z*Math.abs(ls.z),l=e.dot(ls),c=t.dot(ls),h=i.dot(ls);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var I0=new Pi,Lr=new I,ul=new I,Ki=class{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):I0.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Lr.subVectors(e,this.center);let t=Lr.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Lr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ul.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Lr.copy(e.center).add(ul)),this.expandByPoint(Lr.copy(e.center).sub(ul))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Ai=new I,fl=new I,Mo=new I,ki=new I,pl=new I,So=new I,ml=new I,sa=class{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ai)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ai.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ai.copy(this.origin).addScaledVector(this.direction,t),Ai.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){fl.copy(e).add(t).multiplyScalar(.5),Mo.copy(t).sub(e).normalize(),ki.copy(this.origin).sub(fl);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Mo),a=ki.dot(this.direction),l=-ki.dot(Mo),c=ki.lengthSq(),h=Math.abs(1-o*o),d,u,p,g;if(h>0)if(d=o*l-a,u=o*a-l,g=r*h,d>=0)if(u>=-g)if(u<=g){let E=1/h;d*=E,u*=E,p=d*(d+o*u+2*a)+u*(o*d+u+2*l)+c}else u=r,d=Math.max(0,-(o*u+a)),p=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(o*u+a)),p=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-l),r),p=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-r,-l),r),p=u*(u+2*l)+c):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-l),r),p=-d*d+u*(u+2*l)+c);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),p=-d*d+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(fl).addScaledVector(Mo,u),p}intersectSphere(e,t){Ai.subVectors(e.center,this.origin);let i=Ai.dot(this.direction),s=Ai.dot(Ai)-i*i,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(i=(e.min.x-u.x)*c,s=(e.max.x-u.x)*c):(i=(e.max.x-u.x)*c,s=(e.min.x-u.x)*c),h>=0?(r=(e.min.y-u.y)*h,o=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,o=(e.min.y-u.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(a=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Ai)!==null}intersectTriangle(e,t,i,s,r){pl.subVectors(t,e),So.subVectors(i,e),ml.crossVectors(pl,So);let o=this.direction.dot(ml),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ki.subVectors(this.origin,e);let l=a*this.direction.dot(So.crossVectors(ki,So));if(l<0)return null;let c=a*this.direction.dot(pl.cross(ki));if(c<0||l+c>o)return null;let h=-a*ki.dot(ml);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Pt=class n{constructor(e,t,i,s,r,o,a,l,c,h,d,u,p,g,E,m){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,h,d,u,p,g,E,m)}set(e,t,i,s,r,o,a,l,c,h,d,u,p,g,E,m){let f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=h,f[10]=d,f[14]=u,f[3]=p,f[7]=g,f[11]=E,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,s=1/Hs.setFromMatrixColumn(e,0).length(),r=1/Hs.setFromMatrixColumn(e,1).length(),o=1/Hs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let u=o*h,p=o*d,g=a*h,E=a*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=p+g*c,t[5]=u-E*c,t[9]=-a*l,t[2]=E-u*c,t[6]=g+p*c,t[10]=o*l}else if(e.order==="YXZ"){let u=l*h,p=l*d,g=c*h,E=c*d;t[0]=u+E*a,t[4]=g*a-p,t[8]=o*c,t[1]=o*d,t[5]=o*h,t[9]=-a,t[2]=p*a-g,t[6]=E+u*a,t[10]=o*l}else if(e.order==="ZXY"){let u=l*h,p=l*d,g=c*h,E=c*d;t[0]=u-E*a,t[4]=-o*d,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*h,t[9]=E-u*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let u=o*h,p=o*d,g=a*h,E=a*d;t[0]=l*h,t[4]=g*c-p,t[8]=u*c+E,t[1]=l*d,t[5]=E*c+u,t[9]=p*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let u=o*l,p=o*c,g=a*l,E=a*c;t[0]=l*h,t[4]=E-u*d,t[8]=g*d+p,t[1]=d,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=p*d+g,t[10]=u-E*d}else if(e.order==="XZY"){let u=o*l,p=o*c,g=a*l,E=a*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=u*d+E,t[5]=o*h,t[9]=p*d-g,t[2]=g*d-p,t[6]=a*h,t[10]=E*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(L0,e,D0)}lookAt(e,t,i){let s=this.elements;return On.subVectors(e,t),On.lengthSq()===0&&(On.z=1),On.normalize(),Gi.crossVectors(i,On),Gi.lengthSq()===0&&(Math.abs(i.z)===1?On.x+=1e-4:On.z+=1e-4,On.normalize(),Gi.crossVectors(i,On)),Gi.normalize(),To.crossVectors(On,Gi),s[0]=Gi.x,s[4]=To.x,s[8]=On.x,s[1]=Gi.y,s[5]=To.y,s[9]=On.y,s[2]=Gi.z,s[6]=To.z,s[10]=On.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],d=i[5],u=i[9],p=i[13],g=i[2],E=i[6],m=i[10],f=i[14],v=i[3],_=i[7],y=i[11],L=i[15],C=s[0],b=s[4],F=s[8],S=s[12],A=s[1],P=s[5],B=s[9],H=s[13],W=s[2],ee=s[6],Z=s[10],oe=s[14],q=s[3],fe=s[7],Ae=s[11],Be=s[15];return r[0]=o*C+a*A+l*W+c*q,r[4]=o*b+a*P+l*ee+c*fe,r[8]=o*F+a*B+l*Z+c*Ae,r[12]=o*S+a*H+l*oe+c*Be,r[1]=h*C+d*A+u*W+p*q,r[5]=h*b+d*P+u*ee+p*fe,r[9]=h*F+d*B+u*Z+p*Ae,r[13]=h*S+d*H+u*oe+p*Be,r[2]=g*C+E*A+m*W+f*q,r[6]=g*b+E*P+m*ee+f*fe,r[10]=g*F+E*B+m*Z+f*Ae,r[14]=g*S+E*H+m*oe+f*Be,r[3]=v*C+_*A+y*W+L*q,r[7]=v*b+_*P+y*ee+L*fe,r[11]=v*F+_*B+y*Z+L*Ae,r[15]=v*S+_*H+y*oe+L*Be,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],d=e[6],u=e[10],p=e[14],g=e[3],E=e[7],m=e[11],f=e[15];return g*(+r*l*d-s*c*d-r*a*u+i*c*u+s*a*p-i*l*p)+E*(+t*l*p-t*c*u+r*o*u-s*o*p+s*c*h-r*l*h)+m*(+t*c*d-t*a*p-r*o*d+i*o*p+r*a*h-i*c*h)+f*(-s*a*h-t*l*d+t*a*u+s*o*d-i*o*u+i*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],p=e[11],g=e[12],E=e[13],m=e[14],f=e[15],v=d*m*c-E*u*c+E*l*p-a*m*p-d*l*f+a*u*f,_=g*u*c-h*m*c-g*l*p+o*m*p+h*l*f-o*u*f,y=h*E*c-g*d*c+g*a*p-o*E*p-h*a*f+o*d*f,L=g*d*l-h*E*l-g*a*u+o*E*u+h*a*m-o*d*m,C=t*v+i*_+s*y+r*L;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let b=1/C;return e[0]=v*b,e[1]=(E*u*r-d*m*r-E*s*p+i*m*p+d*s*f-i*u*f)*b,e[2]=(a*m*r-E*l*r+E*s*c-i*m*c-a*s*f+i*l*f)*b,e[3]=(d*l*r-a*u*r-d*s*c+i*u*c+a*s*p-i*l*p)*b,e[4]=_*b,e[5]=(h*m*r-g*u*r+g*s*p-t*m*p-h*s*f+t*u*f)*b,e[6]=(g*l*r-o*m*r-g*s*c+t*m*c+o*s*f-t*l*f)*b,e[7]=(o*u*r-h*l*r+h*s*c-t*u*c-o*s*p+t*l*p)*b,e[8]=y*b,e[9]=(g*d*r-h*E*r-g*i*p+t*E*p+h*i*f-t*d*f)*b,e[10]=(o*E*r-g*a*r+g*i*c-t*E*c-o*i*f+t*a*f)*b,e[11]=(h*a*r-o*d*r-h*i*c+t*d*c+o*i*p-t*a*p)*b,e[12]=L*b,e[13]=(h*E*s-g*d*s+g*i*u-t*E*u-h*i*m+t*d*m)*b,e[14]=(g*a*s-o*E*s-g*i*l+t*E*l+o*i*m-t*a*m)*b,e[15]=(o*d*s-h*a*s+h*i*l-t*d*l-o*i*u+t*a*u)*b,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,d=a+a,u=r*c,p=r*h,g=r*d,E=o*h,m=o*d,f=a*d,v=l*c,_=l*h,y=l*d,L=i.x,C=i.y,b=i.z;return s[0]=(1-(E+f))*L,s[1]=(p+y)*L,s[2]=(g-_)*L,s[3]=0,s[4]=(p-y)*C,s[5]=(1-(u+f))*C,s[6]=(m+v)*C,s[7]=0,s[8]=(g+_)*b,s[9]=(m-v)*b,s[10]=(1-(u+E))*b,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements,r=Hs.set(s[0],s[1],s[2]).length(),o=Hs.set(s[4],s[5],s[6]).length(),a=Hs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Qn.copy(this);let c=1/r,h=1/o,d=1/a;return Qn.elements[0]*=c,Qn.elements[1]*=c,Qn.elements[2]*=c,Qn.elements[4]*=h,Qn.elements[5]*=h,Qn.elements[6]*=h,Qn.elements[8]*=d,Qn.elements[9]*=d,Qn.elements[10]*=d,t.setFromRotationMatrix(Qn),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=Ri){let l=this.elements,c=2*r/(t-e),h=2*r/(i-s),d=(t+e)/(t-e),u=(i+s)/(i-s),p,g;if(a===Ri)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===jo)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=Ri){let l=this.elements,c=1/(t-e),h=1/(i-s),d=1/(o-r),u=(t+e)*c,p=(i+s)*h,g,E;if(a===Ri)g=(o+r)*d,E=-2*d;else if(a===jo)g=r*d,E=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=E,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},Hs=new I,Qn=new Pt,L0=new I(0,0,0),D0=new I(1,1,1),Gi=new I,To=new I,On=new I,_d=new Pt,Ad=new Qi,fi=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(gn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-gn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(gn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-gn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(gn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-gn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return _d.makeRotationFromQuaternion(e),this.setFromRotationMatrix(_d,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ad.setFromEuler(this),this.setFromQuaternion(Ad,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};fi.DEFAULT_ORDER="XYZ";var ra=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},U0=0,Md=new I,zs=new Qi,Mi=new Pt,bo=new I,Dr=new I,O0=new I,N0=new Qi,Sd=new I(1,0,0),Td=new I(0,1,0),bd=new I(0,0,1),wd={type:"added"},B0={type:"removed"},ks={type:"childadded",child:null},gl={type:"childremoved",child:null},$t=class n extends $i{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:U0++}),this.uuid=Zi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new I,t=new fi,i=new Qi,s=new I(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Pt},normalMatrix:{value:new Ke}}),this.matrix=new Pt,this.matrixWorld=new Pt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ra,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return zs.setFromAxisAngle(e,t),this.quaternion.multiply(zs),this}rotateOnWorldAxis(e,t){return zs.setFromAxisAngle(e,t),this.quaternion.premultiply(zs),this}rotateX(e){return this.rotateOnAxis(Sd,e)}rotateY(e){return this.rotateOnAxis(Td,e)}rotateZ(e){return this.rotateOnAxis(bd,e)}translateOnAxis(e,t){return Md.copy(e).applyQuaternion(this.quaternion),this.position.add(Md.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Sd,e)}translateY(e){return this.translateOnAxis(Td,e)}translateZ(e){return this.translateOnAxis(bd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Mi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?bo.copy(e):bo.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Dr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Mi.lookAt(Dr,bo,this.up):Mi.lookAt(bo,Dr,this.up),this.quaternion.setFromRotationMatrix(Mi),s&&(Mi.extractRotation(s.matrixWorld),zs.setFromRotationMatrix(Mi),this.quaternion.premultiply(zs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(wd),ks.child=e,this.dispatchEvent(ks),ks.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(B0),gl.child=e,this.dispatchEvent(gl),gl.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Mi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Mi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Mi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(wd),ks.child=e,this.dispatchEvent(ks),ks.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Dr,e,O0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Dr,N0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),d=o(e.shapes),u=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}};$t.DEFAULT_UP=new I(0,1,0);$t.DEFAULT_MATRIX_AUTO_UPDATE=!0;$t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Kn=new I,Si=new I,El=new I,Ti=new I,Gs=new I,Vs=new I,Rd=new I,yl=new I,vl=new I,_l=new I,Al=new Ft,Ml=new Ft,Sl=new Ft,qi=class n{constructor(e=new I,t=new I,i=new I){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Kn.subVectors(e,t),s.cross(Kn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Kn.subVectors(s,t),Si.subVectors(i,t),El.subVectors(e,t);let o=Kn.dot(Kn),a=Kn.dot(Si),l=Kn.dot(El),c=Si.dot(Si),h=Si.dot(El),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let u=1/d,p=(c*l-a*h)*u,g=(o*h-a*l)*u;return r.set(1-p-g,g,p)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Ti)===null?!1:Ti.x>=0&&Ti.y>=0&&Ti.x+Ti.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,Ti)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ti.x),l.addScaledVector(o,Ti.y),l.addScaledVector(a,Ti.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return Al.setScalar(0),Ml.setScalar(0),Sl.setScalar(0),Al.fromBufferAttribute(e,t),Ml.fromBufferAttribute(e,i),Sl.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Al,r.x),o.addScaledVector(Ml,r.y),o.addScaledVector(Sl,r.z),o}static isFrontFacing(e,t,i,s){return Kn.subVectors(i,t),Si.subVectors(e,t),Kn.cross(Si).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Kn.subVectors(this.c,this.b),Si.subVectors(this.a,this.b),Kn.cross(Si).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,o,a;Gs.subVectors(s,i),Vs.subVectors(r,i),yl.subVectors(e,i);let l=Gs.dot(yl),c=Vs.dot(yl);if(l<=0&&c<=0)return t.copy(i);vl.subVectors(e,s);let h=Gs.dot(vl),d=Vs.dot(vl);if(h>=0&&d<=h)return t.copy(s);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(i).addScaledVector(Gs,o);_l.subVectors(e,r);let p=Gs.dot(_l),g=Vs.dot(_l);if(g>=0&&p<=g)return t.copy(r);let E=p*c-l*g;if(E<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(Vs,a);let m=h*g-p*d;if(m<=0&&d-h>=0&&p-g>=0)return Rd.subVectors(r,s),a=(d-h)/(d-h+(p-g)),t.copy(s).addScaledVector(Rd,a);let f=1/(m+E+u);return o=E*f,a=u*f,t.copy(i).addScaledVector(Gs,o).addScaledVector(Vs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Cu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Vi={h:0,s:0,l:0},wo={h:0,s:0,l:0};function Tl(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var ce=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Vt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Et.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=Et.workingColorSpace){return this.r=e,this.g=t,this.b=i,Et.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=Et.workingColorSpace){if(e=b0(e,1),t=gn(t,0,1),i=gn(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=Tl(o,r,e+1/3),this.g=Tl(o,r,e),this.b=Tl(o,r,e-1/3)}return Et.toWorkingColorSpace(this,s),this}setStyle(e,t=Vt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Vt){let i=Cu[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=xi(e.r),this.g=xi(e.g),this.b=xi(e.b),this}copyLinearToSRGB(e){return this.r=tr(e.r),this.g=tr(e.g),this.b=tr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Vt){return Et.fromWorkingColorSpace(mn.copy(this),e),Math.round(gn(mn.r*255,0,255))*65536+Math.round(gn(mn.g*255,0,255))*256+Math.round(gn(mn.b*255,0,255))}getHexString(e=Vt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Et.workingColorSpace){Et.fromWorkingColorSpace(mn.copy(this),t);let i=mn.r,s=mn.g,r=mn.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Et.workingColorSpace){return Et.fromWorkingColorSpace(mn.copy(this),t),e.r=mn.r,e.g=mn.g,e.b=mn.b,e}getStyle(e=Vt){Et.fromWorkingColorSpace(mn.copy(this),e);let t=mn.r,i=mn.g,s=mn.b;return e!==Vt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Vi),this.setHSL(Vi.h+e,Vi.s+t,Vi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Vi),e.getHSL(wo);let i=al(Vi.h,wo.h,t),s=al(Vi.s,wo.s,t),r=al(Vi.l,wo.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},mn=new ce;ce.NAMES=Cu;var H0=0,Ii=class extends $i{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:H0++}),this.uuid=Zi(),this.name="",this.blending=Yi,this.side=Ji,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=zl,this.blendDst=kl,this.blendEquation=ps,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ce(0,0,0),this.blendAlpha=0,this.depthFunc=ir,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=dd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ds,this.stencilZFail=Ds,this.stencilZPass=Ds,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Yi&&(i.blending=this.blending),this.side!==Ji&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==zl&&(i.blendSrc=this.blendSrc),this.blendDst!==kl&&(i.blendDst=this.blendDst),this.blendEquation!==ps&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ir&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==dd&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ds&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ds&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ds&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},rt=class extends Ii{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fi,this.combine=mu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Kt=new I,Ro=new he,rn=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=bc,this.updateRanges=[],this.gpuType=hi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ro.fromBufferAttribute(this,t),Ro.applyMatrix3(e),this.setXY(t,Ro.x,Ro.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Kt.fromBufferAttribute(this,t),Kt.applyMatrix3(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Kt.fromBufferAttribute(this,t),Kt.applyMatrix4(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Kt.fromBufferAttribute(this,t),Kt.applyNormalMatrix(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Kt.fromBufferAttribute(this,t),Kt.transformDirection(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=li(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ct(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=li(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=li(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=li(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=li(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),i=Ct(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),i=Ct(i,this.array),s=Ct(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),i=Ct(i,this.array),s=Ct(s,this.array),r=Ct(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==bc&&(e.usage=this.usage),e}};var oa=class extends rn{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var aa=class extends rn{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var Tt=class extends rn{constructor(e,t,i){super(new Float32Array(e),t,i)}},z0=0,Vn=new Pt,bl=new $t,Ws=new I,Nn=new Pi,Ur=new Pi,nn=new I,Qt=class n extends $i{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:z0++}),this.uuid=Zi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(xu(e)?aa:oa)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Ke().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Vn.makeRotationFromQuaternion(e),this.applyMatrix4(Vn),this}rotateX(e){return Vn.makeRotationX(e),this.applyMatrix4(Vn),this}rotateY(e){return Vn.makeRotationY(e),this.applyMatrix4(Vn),this}rotateZ(e){return Vn.makeRotationZ(e),this.applyMatrix4(Vn),this}translate(e,t,i){return Vn.makeTranslation(e,t,i),this.applyMatrix4(Vn),this}scale(e,t,i){return Vn.makeScale(e,t,i),this.applyMatrix4(Vn),this}lookAt(e){return bl.lookAt(e),bl.updateMatrix(),this.applyMatrix4(bl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ws).negate(),this.translate(Ws.x,Ws.y,Ws.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Tt(i,3))}else{for(let i=0,s=t.count;i<s;i++){let r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Pi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];Nn.setFromBufferAttribute(r),this.morphTargetsRelative?(nn.addVectors(this.boundingBox.min,Nn.min),this.boundingBox.expandByPoint(nn),nn.addVectors(this.boundingBox.max,Nn.max),this.boundingBox.expandByPoint(nn)):(this.boundingBox.expandByPoint(Nn.min),this.boundingBox.expandByPoint(Nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ki);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){let i=this.boundingSphere.center;if(Nn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Ur.setFromBufferAttribute(a),this.morphTargetsRelative?(nn.addVectors(Nn.min,Ur.min),Nn.expandByPoint(nn),nn.addVectors(Nn.max,Ur.max),Nn.expandByPoint(nn)):(Nn.expandByPoint(Ur.min),Nn.expandByPoint(Ur.max))}Nn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)nn.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(nn));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)nn.fromBufferAttribute(a,c),l&&(Ws.fromBufferAttribute(e,c),nn.add(Ws)),s=Math.max(s,i.distanceToSquared(nn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new rn(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let F=0;F<i.count;F++)a[F]=new I,l[F]=new I;let c=new I,h=new I,d=new I,u=new he,p=new he,g=new he,E=new I,m=new I;function f(F,S,A){c.fromBufferAttribute(i,F),h.fromBufferAttribute(i,S),d.fromBufferAttribute(i,A),u.fromBufferAttribute(r,F),p.fromBufferAttribute(r,S),g.fromBufferAttribute(r,A),h.sub(c),d.sub(c),p.sub(u),g.sub(u);let P=1/(p.x*g.y-g.x*p.y);isFinite(P)&&(E.copy(h).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(P),m.copy(d).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(P),a[F].add(E),a[S].add(E),a[A].add(E),l[F].add(m),l[S].add(m),l[A].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let F=0,S=v.length;F<S;++F){let A=v[F],P=A.start,B=A.count;for(let H=P,W=P+B;H<W;H+=3)f(e.getX(H+0),e.getX(H+1),e.getX(H+2))}let _=new I,y=new I,L=new I,C=new I;function b(F){L.fromBufferAttribute(s,F),C.copy(L);let S=a[F];_.copy(S),_.sub(L.multiplyScalar(L.dot(S))).normalize(),y.crossVectors(C,S);let P=y.dot(l[F])<0?-1:1;o.setXYZW(F,_.x,_.y,_.z,P)}for(let F=0,S=v.length;F<S;++F){let A=v[F],P=A.start,B=A.count;for(let H=P,W=P+B;H<W;H+=3)b(e.getX(H+0)),b(e.getX(H+1)),b(e.getX(H+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new rn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let u=0,p=i.count;u<p;u++)i.setXYZ(u,0,0,0);let s=new I,r=new I,o=new I,a=new I,l=new I,c=new I,h=new I,d=new I;if(e)for(let u=0,p=e.count;u<p;u+=3){let g=e.getX(u+0),E=e.getX(u+1),m=e.getX(u+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,E),o.fromBufferAttribute(t,m),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,m),a.add(h),l.add(h),c.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(E,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,p=t.count;u<p;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)nn.fromBufferAttribute(e,t),nn.normalize(),e.setXYZ(t,nn.x,nn.y,nn.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h),p=0,g=0;for(let E=0,m=l.length;E<m;E++){a.isInterleavedBufferAttribute?p=l[E]*a.data.stride+a.offset:p=l[E]*h;for(let f=0;f<h;f++)u[g++]=c[p++]}return new rn(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,i);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){let u=c[h],p=e(u,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let p=c[d];h.push(p.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,p=d.length;u<p;u++)h.push(d[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},xd=new Pt,cs=new sa,xo=new Ki,Cd=new I,Co=new I,Fo=new I,Po=new I,wl=new I,Io=new I,Fd=new I,Lo=new I,z=class extends $t{constructor(e=new Qt,t=new rt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){Io.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],d=r[l];h!==0&&(wl.fromBufferAttribute(d,e),o?Io.addScaledVector(wl,h):Io.addScaledVector(wl.sub(t),h))}t.add(Io)}return t}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),xo.copy(i.boundingSphere),xo.applyMatrix4(r),cs.copy(e.ray).recast(e.near),!(xo.containsPoint(cs.origin)===!1&&(cs.intersectSphere(xo,Cd)===null||cs.origin.distanceToSquared(Cd)>(e.far-e.near)**2))&&(xd.copy(r).invert(),cs.copy(e.ray).applyMatrix4(xd),!(i.boundingBox!==null&&cs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,cs)))}_computeIntersections(e,t,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,E=u.length;g<E;g++){let m=u[g],f=o[m.materialIndex],v=Math.max(m.start,p.start),_=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let y=v,L=_;y<L;y+=3){let C=a.getX(y),b=a.getX(y+1),F=a.getX(y+2);s=Do(this,f,e,i,c,h,d,C,b,F),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,p.start),E=Math.min(a.count,p.start+p.count);for(let m=g,f=E;m<f;m+=3){let v=a.getX(m),_=a.getX(m+1),y=a.getX(m+2);s=Do(this,o,e,i,c,h,d,v,_,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,E=u.length;g<E;g++){let m=u[g],f=o[m.materialIndex],v=Math.max(m.start,p.start),_=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=v,L=_;y<L;y+=3){let C=y,b=y+1,F=y+2;s=Do(this,f,e,i,c,h,d,C,b,F),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,p.start),E=Math.min(l.count,p.start+p.count);for(let m=g,f=E;m<f;m+=3){let v=m,_=m+1,y=m+2;s=Do(this,o,e,i,c,h,d,v,_,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function k0(n,e,t,i,s,r,o,a){let l;if(e.side===sn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===Ji,a),l===null)return null;Lo.copy(a),Lo.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(Lo);return c<t.near||c>t.far?null:{distance:c,point:Lo.clone(),object:n}}function Do(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,Co),n.getVertexPosition(l,Fo),n.getVertexPosition(c,Po);let h=k0(n,e,t,i,Co,Fo,Po,Fd);if(h){let d=new I;qi.getBarycoord(Fd,Co,Fo,Po,d),s&&(h.uv=qi.getInterpolatedAttribute(s,a,l,c,d,new he)),r&&(h.uv1=qi.getInterpolatedAttribute(r,a,l,c,d,new he)),o&&(h.normal=qi.getInterpolatedAttribute(o,a,l,c,d,new I),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new I,materialIndex:0};qi.getNormal(Co,Fo,Po,u.normal),h.face=u,h.barycoord=d}return h}var xn=class n extends Qt{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],d=[],u=0,p=0;g("z","y","x",-1,-1,i,t,e,o,r,0),g("z","y","x",1,-1,i,t,-e,o,r,1),g("x","z","y",1,1,e,i,t,s,o,2),g("x","z","y",1,-1,e,i,-t,s,o,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Tt(c,3)),this.setAttribute("normal",new Tt(h,3)),this.setAttribute("uv",new Tt(d,2));function g(E,m,f,v,_,y,L,C,b,F,S){let A=y/b,P=L/F,B=y/2,H=L/2,W=C/2,ee=b+1,Z=F+1,oe=0,q=0,fe=new I;for(let Ae=0;Ae<Z;Ae++){let Be=Ae*P-H;for(let it=0;it<ee;it++){let Lt=it*A-B;fe[E]=Lt*v,fe[m]=Be*_,fe[f]=W,c.push(fe.x,fe.y,fe.z),fe[E]=0,fe[m]=0,fe[f]=C>0?1:-1,h.push(fe.x,fe.y,fe.z),d.push(it/b),d.push(1-Ae/F),oe+=1}}for(let Ae=0;Ae<F;Ae++)for(let Be=0;Be<b;Be++){let it=u+Be+ee*Ae,Lt=u+Be+ee*(Ae+1),$=u+(Be+1)+ee*(Ae+1),ae=u+(Be+1)+ee*Ae;l.push(it,Lt,ae),l.push(Lt,$,ae),q+=6}a.addGroup(p,q,S),p+=q,u+=oe}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function lr(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function An(n){let e={};for(let t=0;t<n.length;t++){let i=lr(n[t]);for(let s in i)e[s]=i[s]}return e}function G0(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Fu(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Et.workingColorSpace}var Er={clone:lr,merge:An},V0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,W0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,an=class extends Ii{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=V0,this.fragmentShader=W0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=lr(e.uniforms),this.uniformsGroups=G0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},la=class extends $t{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Pt,this.projectionMatrix=new Pt,this.projectionMatrixInverse=new Pt,this.coordinateSystem=Ri}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Wi=new I,Pd=new he,Id=new he,hn=class extends la{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ea*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ol*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ea*2*Math.atan(Math.tan(ol*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Wi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Wi.x,Wi.y).multiplyScalar(-e/Wi.z),Wi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Wi.x,Wi.y).multiplyScalar(-e/Wi.z)}getViewSize(e,t){return this.getViewBounds(e,Pd,Id),t.subVectors(Id,Pd)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ol*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Xs=-90,qs=1,Cc=class extends $t{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new hn(Xs,qs,e,t);s.layers=this.layers,this.add(s);let r=new hn(Xs,qs,e,t);r.layers=this.layers,this.add(r);let o=new hn(Xs,qs,e,t);o.layers=this.layers,this.add(o);let a=new hn(Xs,qs,e,t);a.layers=this.layers,this.add(a);let l=new hn(Xs,qs,e,t);l.layers=this.layers,this.add(l);let c=new hn(Xs,qs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===Ri)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===jo)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let E=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=E,e.setRenderTarget(i,5,s),e.render(t,h),e.setRenderTarget(d,u,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},ca=class extends Rn{constructor(e,t,i,s,r,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:sr,super(e,t,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Fc=class extends on{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new ca(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:ci}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new xn(5,5,5),r=new an({name:"CubemapFromEquirect",uniforms:lr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:sn,blending:di});r.uniforms.tEquirect.value=t;let o=new z(s,r),a=t.minFilter;return t.minFilter===Es&&(t.minFilter=ci),new Cc(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}},Rl=new I,X0=new I,q0=new Ke,wi=class{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=Rl.subVectors(i,t).cross(X0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(Rl),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||q0.getNormalMatrix(e),s=this.coplanarPoint(Rl).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},hs=new Ki,Uo=new I,Zr=class{constructor(e=new wi,t=new wi,i=new wi,s=new wi,r=new wi,o=new wi){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Ri){let i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],d=s[6],u=s[7],p=s[8],g=s[9],E=s[10],m=s[11],f=s[12],v=s[13],_=s[14],y=s[15];if(i[0].setComponents(l-r,u-c,m-p,y-f).normalize(),i[1].setComponents(l+r,u+c,m+p,y+f).normalize(),i[2].setComponents(l+o,u+h,m+g,y+v).normalize(),i[3].setComponents(l-o,u-h,m-g,y-v).normalize(),i[4].setComponents(l-a,u-d,m-E,y-_).normalize(),t===Ri)i[5].setComponents(l+a,u+d,m+E,y+_).normalize();else if(t===jo)i[5].setComponents(a,d,E,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),hs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),hs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(hs)}intersectsSprite(e){return hs.center.set(0,0,0),hs.radius=.7071067811865476,hs.applyMatrix4(e.matrixWorld),this.intersectsSphere(hs)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(Uo.x=s.normal.x>0?e.max.x:e.min.x,Uo.y=s.normal.y>0?e.max.y:e.min.y,Uo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Uo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Pu(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.__noRaf(s)}return{start:function(){e!==!0&&t!==null&&(i=n.__noRaf(s),e=!0)},stop:function(){n.__noCaf(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function Y0(n){let e=new WeakMap;function t(a,l){let c=a.array,h=a.usage,d=c.byteLength,u=n.createBuffer();n.bindBuffer(l,u),n.bufferData(l,c,h),a.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){let h=l.array,d=l.updateRanges;if(n.bindBuffer(c,a),d.length===0)n.bufferSubData(c,0,h);else{d.sort((p,g)=>p.start-g.start);let u=0;for(let p=1;p<d.length;p++){let g=d[u],E=d[p];E.start<=g.start+g.count+1?g.count=Math.max(g.count,E.start+E.count-g.start):(++u,d[u]=E)}d.length=u+1;for(let p=0,g=d.length;p<g;p++){let E=d[p];n.bufferSubData(c,E.start*h.BYTES_PER_ELEMENT,h,E.start,E.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var be=class n extends Qt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,d=e/a,u=t/l,p=[],g=[],E=[],m=[];for(let f=0;f<h;f++){let v=f*u-o;for(let _=0;_<c;_++){let y=_*d-r;g.push(y,-v,0),E.push(0,0,1),m.push(_/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let v=0;v<a;v++){let _=v+c*f,y=v+c*(f+1),L=v+1+c*(f+1),C=v+1+c*f;p.push(_,y,C),p.push(y,L,C)}this.setIndex(p),this.setAttribute("position",new Tt(g,3)),this.setAttribute("normal",new Tt(E,3)),this.setAttribute("uv",new Tt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},Z0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,J0=`#ifdef USE_ALPHAHASH
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
#endif`,$0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Q0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,K0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,j0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ep=`#ifdef USE_AOMAP
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
#endif`,tp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,np=`#ifdef USE_BATCHING
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
#endif`,ip=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,sp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,rp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,op=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ap=`#ifdef USE_IRIDESCENCE
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
#endif`,lp=`#ifdef USE_BUMPMAP
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
#endif`,cp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,hp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,dp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,up=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,fp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,pp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,mp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,gp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Ep=`#define PI 3.141592653589793
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
} // validated`,yp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,vp=`vec3 transformedNormal = objectNormal;
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
#endif`,_p=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ap=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Mp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Sp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Tp="gl_FragColor = linearToOutputTexel( gl_FragColor );",bp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,wp=`#ifdef USE_ENVMAP
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
#endif`,Rp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,xp=`#ifdef USE_ENVMAP
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
#endif`,Cp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Fp=`#ifdef USE_ENVMAP
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
#endif`,Pp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ip=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Lp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Dp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Up=`#ifdef USE_GRADIENTMAP
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
}`,Op=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Np=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Bp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Hp=`uniform bool receiveShadow;
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
#endif`,zp=`#ifdef USE_ENVMAP
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
#endif`,kp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Gp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Vp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Wp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Xp=`PhysicalMaterial material;
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
#endif`,qp=`struct PhysicalMaterial {
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
}`,Yp=`
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
#endif`,Zp=`#if defined( RE_IndirectDiffuse )
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
#endif`,Jp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,$p=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Qp=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Kp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jp=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,em=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,tm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,nm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,im=`#if defined( USE_POINTS_UV )
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
#endif`,sm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,rm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,om=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,am=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,lm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cm=`#ifdef USE_MORPHTARGETS
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
#endif`,hm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,dm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,um=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,fm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,gm=`#ifdef USE_NORMALMAP
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
#endif`,Em=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ym=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,vm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,_m=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Am=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Mm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Sm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Tm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,bm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,wm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Rm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,xm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Cm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Fm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Pm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Im=`float getShadowMask() {
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
}`,Lm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Dm=`#ifdef USE_SKINNING
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
#endif`,Um=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Om=`#ifdef USE_SKINNING
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
#endif`,Nm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Bm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Hm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,zm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,km=`#ifdef USE_TRANSMISSION
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
#endif`,Gm=`#ifdef USE_TRANSMISSION
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
#endif`,Vm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Wm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Xm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Ym=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Zm=`uniform sampler2D t2D;
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
}`,Jm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$m=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Qm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Km=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jm=`#include <common>
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
}`,e1=`#if DEPTH_PACKING == 3200
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
}`,t1=`#define DISTANCE
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
}`,n1=`#define DISTANCE
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
}`,i1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,s1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,r1=`uniform float scale;
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
}`,o1=`uniform vec3 diffuse;
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
}`,a1=`#include <common>
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
}`,l1=`uniform vec3 diffuse;
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
}`,c1=`#define LAMBERT
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
}`,h1=`#define LAMBERT
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
}`,d1=`#define MATCAP
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
}`,u1=`#define MATCAP
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
}`,f1=`#define NORMAL
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
}`,p1=`#define NORMAL
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
}`,m1=`#define PHONG
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
}`,g1=`#define PHONG
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
}`,E1=`#define STANDARD
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
}`,y1=`#define STANDARD
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
}`,v1=`#define TOON
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
}`,_1=`#define TOON
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
}`,A1=`uniform float size;
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
}`,M1=`uniform vec3 diffuse;
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
}`,S1=`#include <common>
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
}`,T1=`uniform vec3 color;
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
}`,b1=`uniform float rotation;
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
}`,w1=`uniform vec3 diffuse;
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
}`,tt={alphahash_fragment:Z0,alphahash_pars_fragment:J0,alphamap_fragment:$0,alphamap_pars_fragment:Q0,alphatest_fragment:K0,alphatest_pars_fragment:j0,aomap_fragment:ep,aomap_pars_fragment:tp,batching_pars_vertex:np,batching_vertex:ip,begin_vertex:sp,beginnormal_vertex:rp,bsdfs:op,iridescence_fragment:ap,bumpmap_pars_fragment:lp,clipping_planes_fragment:cp,clipping_planes_pars_fragment:hp,clipping_planes_pars_vertex:dp,clipping_planes_vertex:up,color_fragment:fp,color_pars_fragment:pp,color_pars_vertex:mp,color_vertex:gp,common:Ep,cube_uv_reflection_fragment:yp,defaultnormal_vertex:vp,displacementmap_pars_vertex:_p,displacementmap_vertex:Ap,emissivemap_fragment:Mp,emissivemap_pars_fragment:Sp,colorspace_fragment:Tp,colorspace_pars_fragment:bp,envmap_fragment:wp,envmap_common_pars_fragment:Rp,envmap_pars_fragment:xp,envmap_pars_vertex:Cp,envmap_physical_pars_fragment:zp,envmap_vertex:Fp,fog_vertex:Pp,fog_pars_vertex:Ip,fog_fragment:Lp,fog_pars_fragment:Dp,gradientmap_pars_fragment:Up,lightmap_pars_fragment:Op,lights_lambert_fragment:Np,lights_lambert_pars_fragment:Bp,lights_pars_begin:Hp,lights_toon_fragment:kp,lights_toon_pars_fragment:Gp,lights_phong_fragment:Vp,lights_phong_pars_fragment:Wp,lights_physical_fragment:Xp,lights_physical_pars_fragment:qp,lights_fragment_begin:Yp,lights_fragment_maps:Zp,lights_fragment_end:Jp,logdepthbuf_fragment:$p,logdepthbuf_pars_fragment:Qp,logdepthbuf_pars_vertex:Kp,logdepthbuf_vertex:jp,map_fragment:em,map_pars_fragment:tm,map_particle_fragment:nm,map_particle_pars_fragment:im,metalnessmap_fragment:sm,metalnessmap_pars_fragment:rm,morphinstance_vertex:om,morphcolor_vertex:am,morphnormal_vertex:lm,morphtarget_pars_vertex:cm,morphtarget_vertex:hm,normal_fragment_begin:dm,normal_fragment_maps:um,normal_pars_fragment:fm,normal_pars_vertex:pm,normal_vertex:mm,normalmap_pars_fragment:gm,clearcoat_normal_fragment_begin:Em,clearcoat_normal_fragment_maps:ym,clearcoat_pars_fragment:vm,iridescence_pars_fragment:_m,opaque_fragment:Am,packing:Mm,premultiplied_alpha_fragment:Sm,project_vertex:Tm,dithering_fragment:bm,dithering_pars_fragment:wm,roughnessmap_fragment:Rm,roughnessmap_pars_fragment:xm,shadowmap_pars_fragment:Cm,shadowmap_pars_vertex:Fm,shadowmap_vertex:Pm,shadowmask_pars_fragment:Im,skinbase_vertex:Lm,skinning_pars_vertex:Dm,skinning_vertex:Um,skinnormal_vertex:Om,specularmap_fragment:Nm,specularmap_pars_fragment:Bm,tonemapping_fragment:Hm,tonemapping_pars_fragment:zm,transmission_fragment:km,transmission_pars_fragment:Gm,uv_pars_fragment:Vm,uv_pars_vertex:Wm,uv_vertex:Xm,worldpos_vertex:qm,background_vert:Ym,background_frag:Zm,backgroundCube_vert:Jm,backgroundCube_frag:$m,cube_vert:Qm,cube_frag:Km,depth_vert:jm,depth_frag:e1,distanceRGBA_vert:t1,distanceRGBA_frag:n1,equirect_vert:i1,equirect_frag:s1,linedashed_vert:r1,linedashed_frag:o1,meshbasic_vert:a1,meshbasic_frag:l1,meshlambert_vert:c1,meshlambert_frag:h1,meshmatcap_vert:d1,meshmatcap_frag:u1,meshnormal_vert:f1,meshnormal_frag:p1,meshphong_vert:m1,meshphong_frag:g1,meshphysical_vert:E1,meshphysical_frag:y1,meshtoon_vert:v1,meshtoon_frag:_1,points_vert:A1,points_frag:M1,shadow_vert:S1,shadow_frag:T1,sprite_vert:b1,sprite_frag:w1},de={common:{diffuse:{value:new ce(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ke}},envmap:{envMap:{value:null},envMapRotation:{value:new Ke},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ke},normalScale:{value:new he(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ce(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ce(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0},uvTransform:{value:new Ke}},sprite:{diffuse:{value:new ce(16777215)},opacity:{value:1},center:{value:new he(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}}},ai={basic:{uniforms:An([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.fog]),vertexShader:tt.meshbasic_vert,fragmentShader:tt.meshbasic_frag},lambert:{uniforms:An([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new ce(0)}}]),vertexShader:tt.meshlambert_vert,fragmentShader:tt.meshlambert_frag},phong:{uniforms:An([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new ce(0)},specular:{value:new ce(1118481)},shininess:{value:30}}]),vertexShader:tt.meshphong_vert,fragmentShader:tt.meshphong_frag},standard:{uniforms:An([de.common,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.roughnessmap,de.metalnessmap,de.fog,de.lights,{emissive:{value:new ce(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag},toon:{uniforms:An([de.common,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.gradientmap,de.fog,de.lights,{emissive:{value:new ce(0)}}]),vertexShader:tt.meshtoon_vert,fragmentShader:tt.meshtoon_frag},matcap:{uniforms:An([de.common,de.bumpmap,de.normalmap,de.displacementmap,de.fog,{matcap:{value:null}}]),vertexShader:tt.meshmatcap_vert,fragmentShader:tt.meshmatcap_frag},points:{uniforms:An([de.points,de.fog]),vertexShader:tt.points_vert,fragmentShader:tt.points_frag},dashed:{uniforms:An([de.common,de.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:tt.linedashed_vert,fragmentShader:tt.linedashed_frag},depth:{uniforms:An([de.common,de.displacementmap]),vertexShader:tt.depth_vert,fragmentShader:tt.depth_frag},normal:{uniforms:An([de.common,de.bumpmap,de.normalmap,de.displacementmap,{opacity:{value:1}}]),vertexShader:tt.meshnormal_vert,fragmentShader:tt.meshnormal_frag},sprite:{uniforms:An([de.sprite,de.fog]),vertexShader:tt.sprite_vert,fragmentShader:tt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:tt.background_vert,fragmentShader:tt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ke}},vertexShader:tt.backgroundCube_vert,fragmentShader:tt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:tt.cube_vert,fragmentShader:tt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:tt.equirect_vert,fragmentShader:tt.equirect_frag},distanceRGBA:{uniforms:An([de.common,de.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:tt.distanceRGBA_vert,fragmentShader:tt.distanceRGBA_frag},shadow:{uniforms:An([de.lights,de.fog,{color:{value:new ce(0)},opacity:{value:1}}]),vertexShader:tt.shadow_vert,fragmentShader:tt.shadow_frag}};ai.physical={uniforms:An([ai.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ke},clearcoatNormalScale:{value:new he(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ke},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ke},sheen:{value:0},sheenColor:{value:new ce(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ke},transmissionSamplerSize:{value:new he},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ke},attenuationDistance:{value:0},attenuationColor:{value:new ce(0)},specularColor:{value:new ce(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ke},anisotropyVector:{value:new he},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ke}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag};var Oo={r:0,b:0,g:0},ds=new fi,R1=new Pt;function x1(n,e,t,i,s,r,o){let a=new ce(0),l=r===!0?0:1,c,h,d=null,u=0,p=null;function g(v){let _=v.isScene===!0?v.background:null;return _&&_.isTexture&&(_=(v.backgroundBlurriness>0?t:e).get(_)),_}function E(v){let _=!1,y=g(v);y===null?f(a,l):y&&y.isColor&&(f(y,1),_=!0);let L=n.xr.getEnvironmentBlendMode();L==="additive"?i.buffers.color.setClear(0,0,0,1,o):L==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||_)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(v,_){let y=g(_);y&&(y.isCubeTexture||y.mapping===_a)?(h===void 0&&(h=new z(new xn(1,1,1),new an({name:"BackgroundCubeMaterial",uniforms:lr(ai.backgroundCube.uniforms),vertexShader:ai.backgroundCube.vertexShader,fragmentShader:ai.backgroundCube.fragmentShader,side:sn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(L,C,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),ds.copy(_.backgroundRotation),ds.x*=-1,ds.y*=-1,ds.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(ds.y*=-1,ds.z*=-1),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(R1.makeRotationFromEuler(ds)),h.material.toneMapped=Et.getTransfer(y.colorSpace)!==xt,(d!==y||u!==y.version||p!==n.toneMapping)&&(h.material.needsUpdate=!0,d=y,u=y.version,p=n.toneMapping),h.layers.enableAll(),v.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new z(new be(2,2),new an({name:"BackgroundMaterial",uniforms:lr(ai.background.uniforms),vertexShader:ai.background.vertexShader,fragmentShader:ai.background.fragmentShader,side:Ji,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=Et.getTransfer(y.colorSpace)!==xt,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(d!==y||u!==y.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,d=y,u=y.version,p=n.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function f(v,_){v.getRGB(Oo,Fu(n)),i.buffers.color.setClear(Oo.r,Oo.g,Oo.b,_,o)}return{getClearColor:function(){return a},setClearColor:function(v,_=1){a.set(v),l=_,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,f(a,l)},render:E,addToRenderList:m}}function C1(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=u(null),r=s,o=!1;function a(A,P,B,H,W){let ee=!1,Z=d(H,B,P);r!==Z&&(r=Z,c(r.object)),ee=p(A,H,B,W),ee&&g(A,H,B,W),W!==null&&e.update(W,n.ELEMENT_ARRAY_BUFFER),(ee||o)&&(o=!1,y(A,P,B,H),W!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function l(){return n.createVertexArray()}function c(A){return n.bindVertexArray(A)}function h(A){return n.deleteVertexArray(A)}function d(A,P,B){let H=B.wireframe===!0,W=i[A.id];W===void 0&&(W={},i[A.id]=W);let ee=W[P.id];ee===void 0&&(ee={},W[P.id]=ee);let Z=ee[H];return Z===void 0&&(Z=u(l()),ee[H]=Z),Z}function u(A){let P=[],B=[],H=[];for(let W=0;W<t;W++)P[W]=0,B[W]=0,H[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:B,attributeDivisors:H,object:A,attributes:{},index:null}}function p(A,P,B,H){let W=r.attributes,ee=P.attributes,Z=0,oe=B.getAttributes();for(let q in oe)if(oe[q].location>=0){let Ae=W[q],Be=ee[q];if(Be===void 0&&(q==="instanceMatrix"&&A.instanceMatrix&&(Be=A.instanceMatrix),q==="instanceColor"&&A.instanceColor&&(Be=A.instanceColor)),Ae===void 0||Ae.attribute!==Be||Be&&Ae.data!==Be.data)return!0;Z++}return r.attributesNum!==Z||r.index!==H}function g(A,P,B,H){let W={},ee=P.attributes,Z=0,oe=B.getAttributes();for(let q in oe)if(oe[q].location>=0){let Ae=ee[q];Ae===void 0&&(q==="instanceMatrix"&&A.instanceMatrix&&(Ae=A.instanceMatrix),q==="instanceColor"&&A.instanceColor&&(Ae=A.instanceColor));let Be={};Be.attribute=Ae,Ae&&Ae.data&&(Be.data=Ae.data),W[q]=Be,Z++}r.attributes=W,r.attributesNum=Z,r.index=H}function E(){let A=r.newAttributes;for(let P=0,B=A.length;P<B;P++)A[P]=0}function m(A){f(A,0)}function f(A,P){let B=r.newAttributes,H=r.enabledAttributes,W=r.attributeDivisors;B[A]=1,H[A]===0&&(n.enableVertexAttribArray(A),H[A]=1),W[A]!==P&&(n.vertexAttribDivisor(A,P),W[A]=P)}function v(){let A=r.newAttributes,P=r.enabledAttributes;for(let B=0,H=P.length;B<H;B++)P[B]!==A[B]&&(n.disableVertexAttribArray(B),P[B]=0)}function _(A,P,B,H,W,ee,Z){Z===!0?n.vertexAttribIPointer(A,P,B,W,ee):n.vertexAttribPointer(A,P,B,H,W,ee)}function y(A,P,B,H){E();let W=H.attributes,ee=B.getAttributes(),Z=P.defaultAttributeValues;for(let oe in ee){let q=ee[oe];if(q.location>=0){let fe=W[oe];if(fe===void 0&&(oe==="instanceMatrix"&&A.instanceMatrix&&(fe=A.instanceMatrix),oe==="instanceColor"&&A.instanceColor&&(fe=A.instanceColor)),fe!==void 0){let Ae=fe.normalized,Be=fe.itemSize,it=e.get(fe);if(it===void 0)continue;let Lt=it.buffer,$=it.type,ae=it.bytesPerElement,Pe=$===n.INT||$===n.UNSIGNED_INT||fe.gpuType===fh;if(fe.isInterleavedBufferAttribute){let pe=fe.data,Ge=pe.stride,Ze=fe.offset;if(pe.isInstancedInterleavedBuffer){for(let st=0;st<q.locationSize;st++)f(q.location+st,pe.meshPerAttribute);A.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let st=0;st<q.locationSize;st++)m(q.location+st);n.bindBuffer(n.ARRAY_BUFFER,Lt);for(let st=0;st<q.locationSize;st++)_(q.location+st,Be/q.locationSize,$,Ae,Ge*ae,(Ze+Be/q.locationSize*st)*ae,Pe)}else{if(fe.isInstancedBufferAttribute){for(let pe=0;pe<q.locationSize;pe++)f(q.location+pe,fe.meshPerAttribute);A.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let pe=0;pe<q.locationSize;pe++)m(q.location+pe);n.bindBuffer(n.ARRAY_BUFFER,Lt);for(let pe=0;pe<q.locationSize;pe++)_(q.location+pe,Be/q.locationSize,$,Ae,Be*ae,Be/q.locationSize*pe*ae,Pe)}}else if(Z!==void 0){let Ae=Z[oe];if(Ae!==void 0)switch(Ae.length){case 2:n.vertexAttrib2fv(q.location,Ae);break;case 3:n.vertexAttrib3fv(q.location,Ae);break;case 4:n.vertexAttrib4fv(q.location,Ae);break;default:n.vertexAttrib1fv(q.location,Ae)}}}}v()}function L(){F();for(let A in i){let P=i[A];for(let B in P){let H=P[B];for(let W in H)h(H[W].object),delete H[W];delete P[B]}delete i[A]}}function C(A){if(i[A.id]===void 0)return;let P=i[A.id];for(let B in P){let H=P[B];for(let W in H)h(H[W].object),delete H[W];delete P[B]}delete i[A.id]}function b(A){for(let P in i){let B=i[P];if(B[A.id]===void 0)continue;let H=B[A.id];for(let W in H)h(H[W].object),delete H[W];delete B[A.id]}}function F(){S(),o=!0,r!==s&&(r=s,c(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:F,resetDefaultState:S,dispose:L,releaseStatesOfGeometry:C,releaseStatesOfProgram:b,initAttributes:E,enableAttribute:m,disableUnusedAttributes:v}}function F1(n,e,t){let i;function s(c){i=c}function r(c,h){n.drawArrays(i,c,h),t.update(h,i,1)}function o(c,h,d){d!==0&&(n.drawArraysInstanced(i,c,h,d),t.update(h,i,d))}function a(c,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,d);let p=0;for(let g=0;g<d;g++)p+=h[g];t.update(p,i,1)}function l(c,h,d,u){if(d===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],h[g],u[g]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,h,0,u,0,d);let g=0;for(let E=0;E<d;E++)g+=h[E]*u[E];t.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function P1(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let b=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(b){return!(b!==jn&&i.convert(b)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(b){let F=b===Cn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(b!==Ci&&i.convert(b)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==hi&&!F)}function l(b){if(b==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=t.logarithmicDepthBuffer===!0,u=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),f=n.getParameter(n.MAX_VERTEX_ATTRIBS),v=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),_=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),L=g>0,C=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:u,maxTextures:p,maxVertexTextures:g,maxTextureSize:E,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:v,maxVaryings:_,maxFragmentUniforms:y,vertexTextures:L,maxSamples:C}}function I1(n){let e=this,t=null,i=0,s=!1,r=!1,o=new wi,a=new Ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let p=d.length!==0||u||i!==0||s;return s=u,i=d.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,p){let g=d.clippingPlanes,E=d.clipIntersection,m=d.clipShadows,f=n.get(d);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let v=r?0:i,_=v*4,y=f.clippingState||null;l.value=y,y=h(g,u,_,p);for(let L=0;L!==_;++L)y[L]=t[L];f.clippingState=y,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(d,u,p,g){let E=d!==null?d.length:0,m=null;if(E!==0){if(m=l.value,g!==!0||m===null){let f=p+E*4,v=u.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<f)&&(m=new Float32Array(f));for(let _=0,y=p;_!==E;++_,y+=4)o.copy(d[_]).applyMatrix4(v,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,m}}function L1(n){let e=new WeakMap;function t(o,a){return a===Jl?o.mapping=sr:a===$l&&(o.mapping=rr),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===Jl||a===$l)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Fc(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}var cr=class extends la{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},js=4,Ld=[.125,.215,.35,.446,.526,.582],ms=20,xl=new cr,Dd=new ce,Cl=null,Fl=0,Pl=0,Il=!1,fs=(1+Math.sqrt(5))/2,Ys=1/fs,Ud=[new I(-fs,Ys,0),new I(fs,Ys,0),new I(-Ys,0,fs),new I(Ys,0,fs),new I(0,fs,-Ys),new I(0,fs,Ys),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)],ha=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){Cl=this._renderer.getRenderTarget(),Fl=this._renderer.getActiveCubeFace(),Pl=this._renderer.getActiveMipmapLevel(),Il=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Bd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Nd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Cl,Fl,Pl),this._renderer.xr.enabled=Il,e.scissorTest=!1,No(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===sr||e.mapping===rr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Cl=this._renderer.getRenderTarget(),Fl=this._renderer.getActiveCubeFace(),Pl=this._renderer.getActiveMipmapLevel(),Il=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:ci,minFilter:ci,generateMipmaps:!1,type:Cn,format:jn,colorSpace:es,depthBuffer:!1},s=Od(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Od(e,t,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=D1(r)),this._blurMaterial=U1(r,e,t)}return s}_compileMaterial(e){let t=new z(this._lodPlanes[0],e);this._renderer.compile(t,xl)}_sceneToCubeUV(e,t,i,s){let a=new hn(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(Dd),h.toneMapping=ui,h.autoClear=!1;let p=new rt({name:"PMREM.Background",side:sn,depthWrite:!1,depthTest:!1}),g=new z(new xn,p),E=!1,m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,E=!0):(p.color.copy(Dd),E=!0);for(let f=0;f<6;f++){let v=f%3;v===0?(a.up.set(0,l[f],0),a.lookAt(c[f],0,0)):v===1?(a.up.set(0,0,l[f]),a.lookAt(0,c[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,c[f]));let _=this._cubeSize;No(s,v*_,f>2?_:0,_,_),h.setRenderTarget(s),E&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=u,h.autoClear=d,e.background=m}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===sr||e.mapping===rr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Bd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Nd());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new z(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;No(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,xl)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Ud[(s-r-1)%Ud.length];this._blur(e,r-1,r,o,a)}t.autoClear=i}_blur(e,t,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,d=new z(this._lodPlanes[s],c),u=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*ms-1),E=r/g,m=isFinite(r)?1+Math.floor(h*E):ms;m>ms&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ms}`);let f=[],v=0;for(let b=0;b<ms;++b){let F=b/E,S=Math.exp(-F*F/2);f.push(S),b===0?v+=S:b<m&&(v+=2*S)}for(let b=0;b<f.length;b++)f[b]=f[b]/v;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=f,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);let{_lodMax:_}=this;u.dTheta.value=g,u.mipInt.value=_-i;let y=this._sizeLods[s],L=3*y*(s>_-js?s-_+js:0),C=4*(this._cubeSize-y);No(t,L,C,3*y,2*y),l.setRenderTarget(t),l.render(d,xl)}};function D1(n){let e=[],t=[],i=[],s=n,r=n-js+1+Ld.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let l=1/a;o>n-js?l=Ld[o-n+js-1]:o===0&&(l=0),i.push(l);let c=1/(a-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],p=6,g=6,E=3,m=2,f=1,v=new Float32Array(E*g*p),_=new Float32Array(m*g*p),y=new Float32Array(f*g*p);for(let C=0;C<p;C++){let b=C%3*2/3-1,F=C>2?0:-1,S=[b,F,0,b+2/3,F,0,b+2/3,F+1,0,b,F,0,b+2/3,F+1,0,b,F+1,0];v.set(S,E*g*C),_.set(u,m*g*C);let A=[C,C,C,C,C,C];y.set(A,f*g*C)}let L=new Qt;L.setAttribute("position",new rn(v,E)),L.setAttribute("uv",new rn(_,m)),L.setAttribute("faceIndex",new rn(y,f)),e.push(L),s>js&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Od(n,e,t){let i=new on(n,e,t);return i.texture.mapping=_a,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function No(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function U1(n,e,t){let i=new Float32Array(ms),s=new I(0,1,0);return new an({name:"SphericalGaussianBlur",defines:{n:ms,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:_h(),fragmentShader:`

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
		`,blending:di,depthTest:!1,depthWrite:!1})}function Nd(){return new an({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_h(),fragmentShader:`

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
		`,blending:di,depthTest:!1,depthWrite:!1})}function Bd(){return new an({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_h(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:di,depthTest:!1,depthWrite:!1})}function _h(){return`

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
	`}function O1(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){let l=a.mapping,c=l===Jl||l===$l,h=l===sr||l===rr;if(c||h){let d=e.get(a),u=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==u)return t===null&&(t=new ha(n)),d=c?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{let p=a.image;return c&&p&&p.height>0||h&&p&&s(p)?(t===null&&(t=new ha(n)),d=c?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function N1(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&Gr("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function B1(n,e,t,i){let s={},r=new WeakMap;function o(d){let u=d.target;u.index!==null&&e.remove(u.index);for(let g in u.attributes)e.remove(u.attributes[g]);for(let g in u.morphAttributes){let E=u.morphAttributes[g];for(let m=0,f=E.length;m<f;m++)e.remove(E[m])}u.removeEventListener("dispose",o),delete s[u.id];let p=r.get(u);p&&(e.remove(p),r.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function a(d,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,t.memory.geometries++),u}function l(d){let u=d.attributes;for(let g in u)e.update(u[g],n.ARRAY_BUFFER);let p=d.morphAttributes;for(let g in p){let E=p[g];for(let m=0,f=E.length;m<f;m++)e.update(E[m],n.ARRAY_BUFFER)}}function c(d){let u=[],p=d.index,g=d.attributes.position,E=0;if(p!==null){let v=p.array;E=p.version;for(let _=0,y=v.length;_<y;_+=3){let L=v[_+0],C=v[_+1],b=v[_+2];u.push(L,C,C,b,b,L)}}else if(g!==void 0){let v=g.array;E=g.version;for(let _=0,y=v.length/3-1;_<y;_+=3){let L=_+0,C=_+1,b=_+2;u.push(L,C,C,b,b,L)}}else return;let m=new(xu(u)?aa:oa)(u,1);m.version=E;let f=r.get(d);f&&e.remove(f),r.set(d,m)}function h(d){let u=r.get(d);if(u){let p=d.index;p!==null&&u.version<p.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function H1(n,e,t){let i;function s(u){i=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function l(u,p){n.drawElements(i,p,r,u*o),t.update(p,i,1)}function c(u,p,g){g!==0&&(n.drawElementsInstanced(i,p,r,u*o,g),t.update(p,i,g))}function h(u,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,r,u,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];t.update(m,i,1)}function d(u,p,g,E){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<u.length;f++)c(u[f]/o,p[f],E[f]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,r,u,0,E,0,g);let f=0;for(let v=0;v<g;v++)f+=p[v]*E[v];t.update(f,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function z1(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function k1(n,e,t){let i=new WeakMap,s=new Ft;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,u=i.get(a);if(u===void 0||u.count!==d){let S=function(){b.dispose(),i.delete(a),a.removeEventListener("dispose",S)};u!==void 0&&u.texture.dispose();let p=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,E=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],f=a.morphAttributes.normal||[],v=a.morphAttributes.color||[],_=0;p===!0&&(_=1),g===!0&&(_=2),E===!0&&(_=3);let y=a.attributes.position.count*_,L=1;y>e.maxTextureSize&&(L=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let C=new Float32Array(y*L*4*d),b=new ia(C,y,L,d);b.type=hi,b.needsUpdate=!0;let F=_*4;for(let A=0;A<d;A++){let P=m[A],B=f[A],H=v[A],W=y*L*4*A;for(let ee=0;ee<P.count;ee++){let Z=ee*F;p===!0&&(s.fromBufferAttribute(P,ee),C[W+Z+0]=s.x,C[W+Z+1]=s.y,C[W+Z+2]=s.z,C[W+Z+3]=0),g===!0&&(s.fromBufferAttribute(B,ee),C[W+Z+4]=s.x,C[W+Z+5]=s.y,C[W+Z+6]=s.z,C[W+Z+7]=0),E===!0&&(s.fromBufferAttribute(H,ee),C[W+Z+8]=s.x,C[W+Z+9]=s.y,C[W+Z+10]=s.z,C[W+Z+11]=H.itemSize===4?s.w:1)}}u={count:d,texture:b,size:new he(y,L)},i.set(a,u),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let p=0;for(let E=0;E<c.length;E++)p+=c[E];let g=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:r}}function G1(n,e,t,i){let s=new WeakMap;function r(l){let c=i.render.frame,h=l.geometry,d=e.get(l,h);if(s.get(d)!==c&&(e.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let u=l.skeleton;s.get(u)!==c&&(u.update(),s.set(u,c))}return d}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}var hr=class extends Rn{constructor(e,t,i,s,r,o,a,l,c,h=er){if(h!==er&&h!==ar)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===er&&(i=Fi),i===void 0&&h===ar&&(i=or),super(null,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Bn,this.minFilter=l!==void 0?l:Bn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Iu=new Rn,Hd=new hr(1,1),Lu=new ia,Du=new xc,Uu=new ca,zd=[],kd=[],Gd=new Float32Array(16),Vd=new Float32Array(9),Wd=new Float32Array(4);function yr(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=zd[s];if(r===void 0&&(r=new Float32Array(s),zd[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function en(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function tn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Ma(n,e){let t=kd[e];t===void 0&&(t=new Int32Array(e),kd[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function V1(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function W1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;n.uniform2fv(this.addr,e),tn(t,e)}}function X1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(en(t,e))return;n.uniform3fv(this.addr,e),tn(t,e)}}function q1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;n.uniform4fv(this.addr,e),tn(t,e)}}function Y1(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(en(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),tn(t,e)}else{if(en(t,i))return;Wd.set(i),n.uniformMatrix2fv(this.addr,!1,Wd),tn(t,i)}}function Z1(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(en(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),tn(t,e)}else{if(en(t,i))return;Vd.set(i),n.uniformMatrix3fv(this.addr,!1,Vd),tn(t,i)}}function J1(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(en(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),tn(t,e)}else{if(en(t,i))return;Gd.set(i),n.uniformMatrix4fv(this.addr,!1,Gd),tn(t,i)}}function $1(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Q1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;n.uniform2iv(this.addr,e),tn(t,e)}}function K1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(en(t,e))return;n.uniform3iv(this.addr,e),tn(t,e)}}function j1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;n.uniform4iv(this.addr,e),tn(t,e)}}function e2(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function t2(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;n.uniform2uiv(this.addr,e),tn(t,e)}}function n2(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(en(t,e))return;n.uniform3uiv(this.addr,e),tn(t,e)}}function i2(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;n.uniform4uiv(this.addr,e),tn(t,e)}}function s2(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Hd.compareFunction=Ru,r=Hd):r=Iu,t.setTexture2D(e||r,s)}function r2(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Du,s)}function o2(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Uu,s)}function a2(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Lu,s)}function l2(n){switch(n){case 5126:return V1;case 35664:return W1;case 35665:return X1;case 35666:return q1;case 35674:return Y1;case 35675:return Z1;case 35676:return J1;case 5124:case 35670:return $1;case 35667:case 35671:return Q1;case 35668:case 35672:return K1;case 35669:case 35673:return j1;case 5125:return e2;case 36294:return t2;case 36295:return n2;case 36296:return i2;case 35678:case 36198:case 36298:case 36306:case 35682:return s2;case 35679:case 36299:case 36307:return r2;case 35680:case 36300:case 36308:case 36293:return o2;case 36289:case 36303:case 36311:case 36292:return a2}}function c2(n,e){n.uniform1fv(this.addr,e)}function h2(n,e){let t=yr(e,this.size,2);n.uniform2fv(this.addr,t)}function d2(n,e){let t=yr(e,this.size,3);n.uniform3fv(this.addr,t)}function u2(n,e){let t=yr(e,this.size,4);n.uniform4fv(this.addr,t)}function f2(n,e){let t=yr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function p2(n,e){let t=yr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function m2(n,e){let t=yr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function g2(n,e){n.uniform1iv(this.addr,e)}function E2(n,e){n.uniform2iv(this.addr,e)}function y2(n,e){n.uniform3iv(this.addr,e)}function v2(n,e){n.uniform4iv(this.addr,e)}function _2(n,e){n.uniform1uiv(this.addr,e)}function A2(n,e){n.uniform2uiv(this.addr,e)}function M2(n,e){n.uniform3uiv(this.addr,e)}function S2(n,e){n.uniform4uiv(this.addr,e)}function T2(n,e,t){let i=this.cache,s=e.length,r=Ma(t,s);en(i,r)||(n.uniform1iv(this.addr,r),tn(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Iu,r[o])}function b2(n,e,t){let i=this.cache,s=e.length,r=Ma(t,s);en(i,r)||(n.uniform1iv(this.addr,r),tn(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Du,r[o])}function w2(n,e,t){let i=this.cache,s=e.length,r=Ma(t,s);en(i,r)||(n.uniform1iv(this.addr,r),tn(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Uu,r[o])}function R2(n,e,t){let i=this.cache,s=e.length,r=Ma(t,s);en(i,r)||(n.uniform1iv(this.addr,r),tn(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Lu,r[o])}function x2(n){switch(n){case 5126:return c2;case 35664:return h2;case 35665:return d2;case 35666:return u2;case 35674:return f2;case 35675:return p2;case 35676:return m2;case 5124:case 35670:return g2;case 35667:case 35671:return E2;case 35668:case 35672:return y2;case 35669:case 35673:return v2;case 5125:return _2;case 36294:return A2;case 36295:return M2;case 36296:return S2;case 35678:case 36198:case 36298:case 36306:case 35682:return T2;case 35679:case 36299:case 36307:return b2;case 35680:case 36300:case 36308:case 36293:return w2;case 36289:case 36303:case 36311:case 36292:return R2}}var Pc=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=l2(t.type)}},Ic=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=x2(t.type)}},Lc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],i)}}},Ll=/(\w+)(\])?(\[|\.)?/g;function Xd(n,e){n.seq.push(e),n.map[e.id]=e}function C2(n,e,t){let i=n.name,s=i.length;for(Ll.lastIndex=0;;){let r=Ll.exec(i),o=Ll.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Xd(t,c===void 0?new Pc(a,n,e):new Ic(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new Lc(a),Xd(t,d)),t=d}}}var nr=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);C2(r,o,this)}}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&i.push(o)}return i}};function qd(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var F2=37297,P2=0;function I2(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}var Yd=new Ke;function L2(n){Et._getMatrix(Yd,Et.workingColorSpace,n);let e=`mat3( ${Yd.elements.map(t=>t.toFixed(4))} )`;switch(Et.getTransfer(n)){case Aa:return[e,"LinearTransferOETF"];case xt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Zd(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+I2(n.getShaderSource(e),o)}else return s}function D2(n,e){let t=L2(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function U2(n,e){let t;switch(e){case l0:t="Linear";break;case c0:t="Reinhard";break;case h0:t="Cineon";break;case d0:t="ACESFilmic";break;case f0:t="AgX";break;case p0:t="Neutral";break;case u0:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Bo=new I;function O2(){Et.getLuminanceCoefficients(Bo);let n=Bo.x.toFixed(4),e=Bo.y.toFixed(4),t=Bo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function N2(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Vr).join(`
`)}function B2(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function H2(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Vr(n){return n!==""}function Jd(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function $d(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var z2=/^[ \t]*#include +<([\w\d./]+)>/gm;function Dc(n){return n.replace(z2,G2)}var k2=new Map;function G2(n,e){let t=tt[e];if(t===void 0){let i=k2.get(e);if(i!==void 0)t=tt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Dc(t)}var V2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Qd(n){return n.replace(V2,W2)}function W2(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Kd(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function X2(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===pu?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===uh?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===bi&&(e="SHADOWMAP_TYPE_VSM"),e}function q2(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case sr:case rr:e="ENVMAP_TYPE_CUBE";break;case _a:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Y2(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case rr:e="ENVMAP_MODE_REFRACTION";break}return e}function Z2(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case mu:e="ENVMAP_BLENDING_MULTIPLY";break;case o0:e="ENVMAP_BLENDING_MIX";break;case a0:e="ENVMAP_BLENDING_ADD";break}return e}function J2(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function $2(n,e,t,i){let s=n.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=X2(t),c=q2(t),h=Y2(t),d=Z2(t),u=J2(t),p=N2(t),g=B2(r),E=s.createProgram(),m,f,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Vr).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Vr).join(`
`),f.length>0&&(f+=`
`)):(m=[Kd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Vr).join(`
`),f=[Kd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ui?"#define TONE_MAPPING":"",t.toneMapping!==ui?tt.tonemapping_pars_fragment:"",t.toneMapping!==ui?U2("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",tt.colorspace_pars_fragment,D2("linearToOutputTexel",t.outputColorSpace),O2(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Vr).join(`
`)),o=Dc(o),o=Jd(o,t),o=$d(o,t),a=Dc(a),a=Jd(a,t),a=$d(a,t),o=Qd(o),a=Qd(a),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===ud?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ud?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let _=v+m+o,y=v+f+a,L=qd(s,s.VERTEX_SHADER,_),C=qd(s,s.FRAGMENT_SHADER,y);s.attachShader(E,L),s.attachShader(E,C),t.index0AttributeName!==void 0?s.bindAttribLocation(E,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(E,0,"position"),s.linkProgram(E);function b(P){if(n.debug.checkShaderErrors){let B=s.getProgramInfoLog(E).trim(),H=s.getShaderInfoLog(L).trim(),W=s.getShaderInfoLog(C).trim(),ee=!0,Z=!0;if(s.getProgramParameter(E,s.LINK_STATUS)===!1)if(ee=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,E,L,C);else{let oe=Zd(s,L,"vertex"),q=Zd(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(E,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+B+`
`+oe+`
`+q)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(H===""||W==="")&&(Z=!1);Z&&(P.diagnostics={runnable:ee,programLog:B,vertexShader:{log:H,prefix:m},fragmentShader:{log:W,prefix:f}})}s.deleteShader(L),s.deleteShader(C),F=new nr(s,E),S=H2(s,E)}let F;this.getUniforms=function(){return F===void 0&&b(this),F};let S;this.getAttributes=function(){return S===void 0&&b(this),S};let A=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=s.getProgramParameter(E,F2)),A},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(E),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=P2++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=L,this.fragmentShader=C,this}var Q2=0,Uc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Oc(e),t.set(e,i)),i}},Oc=class{constructor(e){this.id=Q2++,this.code=e,this.usedTimes=0}};function K2(n,e,t,i,s,r,o){let a=new ra,l=new Uc,c=new Set,h=[],d=s.logarithmicDepthBuffer,u=s.vertexTextures,p=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,A,P,B,H){let W=B.fog,ee=H.geometry,Z=S.isMeshStandardMaterial?B.environment:null,oe=(S.isMeshStandardMaterial?t:e).get(S.envMap||Z),q=oe&&oe.mapping===_a?oe.image.height:null,fe=g[S.type];S.precision!==null&&(p=s.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));let Ae=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,Be=Ae!==void 0?Ae.length:0,it=0;ee.morphAttributes.position!==void 0&&(it=1),ee.morphAttributes.normal!==void 0&&(it=2),ee.morphAttributes.color!==void 0&&(it=3);let Lt,$,ae,Pe;if(fe){let wt=ai[fe];Lt=wt.vertexShader,$=wt.fragmentShader}else Lt=S.vertexShader,$=S.fragmentShader,l.update(S),ae=l.getVertexShaderID(S),Pe=l.getFragmentShaderID(S);let pe=n.getRenderTarget(),Ge=n.state.buffers.depth.getReversed(),Ze=H.isInstancedMesh===!0,st=H.isBatchedMesh===!0,Xt=!!S.map,mt=!!S.matcap,Jt=!!oe,N=!!S.aoMap,kn=!!S.lightMap,ht=!!S.bumpMap,dt=!!S.normalMap,ze=!!S.displacementMap,Nt=!!S.emissiveMap,He=!!S.metalnessMap,x=!!S.roughnessMap,M=S.anisotropy>0,k=S.clearcoat>0,K=S.dispersion>0,ne=S.iridescence>0,J=S.sheen>0,De=S.transmission>0,me=M&&!!S.anisotropyMap,Me=k&&!!S.clearcoatMap,gt=k&&!!S.clearcoatNormalMap,se=k&&!!S.clearcoatRoughnessMap,Se=ne&&!!S.iridescenceMap,ke=ne&&!!S.iridescenceThicknessMap,We=J&&!!S.sheenColorMap,Te=J&&!!S.sheenRoughnessMap,ut=!!S.specularMap,et=!!S.specularColorMap,Ut=!!S.specularIntensityMap,D=De&&!!S.transmissionMap,ue=De&&!!S.thicknessMap,X=!!S.gradientMap,j=!!S.alphaMap,ve=S.alphaTest>0,ge=!!S.alphaHash,$e=!!S.extensions,Yt=ui;S.toneMapped&&(pe===null||pe.isXRRenderTarget===!0)&&(Yt=n.toneMapping);let fn={shaderID:fe,shaderType:S.type,shaderName:S.name,vertexShader:Lt,fragmentShader:$,defines:S.defines,customVertexShaderID:ae,customFragmentShaderID:Pe,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:st,batchingColor:st&&H._colorsTexture!==null,instancing:Ze,instancingColor:Ze&&H.instanceColor!==null,instancingMorph:Ze&&H.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:pe===null?n.outputColorSpace:pe.isXRRenderTarget===!0?pe.texture.colorSpace:es,alphaToCoverage:!!S.alphaToCoverage,map:Xt,matcap:mt,envMap:Jt,envMapMode:Jt&&oe.mapping,envMapCubeUVHeight:q,aoMap:N,lightMap:kn,bumpMap:ht,normalMap:dt,displacementMap:u&&ze,emissiveMap:Nt,normalMapObjectSpace:dt&&S.normalMapType===E0,normalMapTangentSpace:dt&&S.normalMapType===wu,metalnessMap:He,roughnessMap:x,anisotropy:M,anisotropyMap:me,clearcoat:k,clearcoatMap:Me,clearcoatNormalMap:gt,clearcoatRoughnessMap:se,dispersion:K,iridescence:ne,iridescenceMap:Se,iridescenceThicknessMap:ke,sheen:J,sheenColorMap:We,sheenRoughnessMap:Te,specularMap:ut,specularColorMap:et,specularIntensityMap:Ut,transmission:De,transmissionMap:D,thicknessMap:ue,gradientMap:X,opaque:S.transparent===!1&&S.blending===Yi&&S.alphaToCoverage===!1,alphaMap:j,alphaTest:ve,alphaHash:ge,combine:S.combine,mapUv:Xt&&E(S.map.channel),aoMapUv:N&&E(S.aoMap.channel),lightMapUv:kn&&E(S.lightMap.channel),bumpMapUv:ht&&E(S.bumpMap.channel),normalMapUv:dt&&E(S.normalMap.channel),displacementMapUv:ze&&E(S.displacementMap.channel),emissiveMapUv:Nt&&E(S.emissiveMap.channel),metalnessMapUv:He&&E(S.metalnessMap.channel),roughnessMapUv:x&&E(S.roughnessMap.channel),anisotropyMapUv:me&&E(S.anisotropyMap.channel),clearcoatMapUv:Me&&E(S.clearcoatMap.channel),clearcoatNormalMapUv:gt&&E(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:se&&E(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Se&&E(S.iridescenceMap.channel),iridescenceThicknessMapUv:ke&&E(S.iridescenceThicknessMap.channel),sheenColorMapUv:We&&E(S.sheenColorMap.channel),sheenRoughnessMapUv:Te&&E(S.sheenRoughnessMap.channel),specularMapUv:ut&&E(S.specularMap.channel),specularColorMapUv:et&&E(S.specularColorMap.channel),specularIntensityMapUv:Ut&&E(S.specularIntensityMap.channel),transmissionMapUv:D&&E(S.transmissionMap.channel),thicknessMapUv:ue&&E(S.thicknessMap.channel),alphaMapUv:j&&E(S.alphaMap.channel),vertexTangents:!!ee.attributes.tangent&&(dt||M),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!ee.attributes.uv&&(Xt||j),fog:!!W,useFog:S.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:Ge,skinning:H.isSkinnedMesh===!0,morphTargets:ee.morphAttributes.position!==void 0,morphNormals:ee.morphAttributes.normal!==void 0,morphColors:ee.morphAttributes.color!==void 0,morphTargetsCount:Be,morphTextureStride:it,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:Yt,decodeVideoTexture:Xt&&S.map.isVideoTexture===!0&&Et.getTransfer(S.map.colorSpace)===xt,decodeVideoTextureEmissive:Nt&&S.emissiveMap.isVideoTexture===!0&&Et.getTransfer(S.emissiveMap.colorSpace)===xt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Dt,flipSided:S.side===sn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:$e&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:($e&&S.extensions.multiDraw===!0||st)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return fn.vertexUv1s=c.has(1),fn.vertexUv2s=c.has(2),fn.vertexUv3s=c.has(3),c.clear(),fn}function f(S){let A=[];if(S.shaderID?A.push(S.shaderID):(A.push(S.customVertexShaderID),A.push(S.customFragmentShaderID)),S.defines!==void 0)for(let P in S.defines)A.push(P),A.push(S.defines[P]);return S.isRawShaderMaterial===!1&&(v(A,S),_(A,S),A.push(n.outputColorSpace)),A.push(S.customProgramCacheKey),A.join()}function v(S,A){S.push(A.precision),S.push(A.outputColorSpace),S.push(A.envMapMode),S.push(A.envMapCubeUVHeight),S.push(A.mapUv),S.push(A.alphaMapUv),S.push(A.lightMapUv),S.push(A.aoMapUv),S.push(A.bumpMapUv),S.push(A.normalMapUv),S.push(A.displacementMapUv),S.push(A.emissiveMapUv),S.push(A.metalnessMapUv),S.push(A.roughnessMapUv),S.push(A.anisotropyMapUv),S.push(A.clearcoatMapUv),S.push(A.clearcoatNormalMapUv),S.push(A.clearcoatRoughnessMapUv),S.push(A.iridescenceMapUv),S.push(A.iridescenceThicknessMapUv),S.push(A.sheenColorMapUv),S.push(A.sheenRoughnessMapUv),S.push(A.specularMapUv),S.push(A.specularColorMapUv),S.push(A.specularIntensityMapUv),S.push(A.transmissionMapUv),S.push(A.thicknessMapUv),S.push(A.combine),S.push(A.fogExp2),S.push(A.sizeAttenuation),S.push(A.morphTargetsCount),S.push(A.morphAttributeCount),S.push(A.numDirLights),S.push(A.numPointLights),S.push(A.numSpotLights),S.push(A.numSpotLightMaps),S.push(A.numHemiLights),S.push(A.numRectAreaLights),S.push(A.numDirLightShadows),S.push(A.numPointLightShadows),S.push(A.numSpotLightShadows),S.push(A.numSpotLightShadowsWithMaps),S.push(A.numLightProbes),S.push(A.shadowMapType),S.push(A.toneMapping),S.push(A.numClippingPlanes),S.push(A.numClipIntersection),S.push(A.depthPacking)}function _(S,A){a.disableAll(),A.supportsVertexTextures&&a.enable(0),A.instancing&&a.enable(1),A.instancingColor&&a.enable(2),A.instancingMorph&&a.enable(3),A.matcap&&a.enable(4),A.envMap&&a.enable(5),A.normalMapObjectSpace&&a.enable(6),A.normalMapTangentSpace&&a.enable(7),A.clearcoat&&a.enable(8),A.iridescence&&a.enable(9),A.alphaTest&&a.enable(10),A.vertexColors&&a.enable(11),A.vertexAlphas&&a.enable(12),A.vertexUv1s&&a.enable(13),A.vertexUv2s&&a.enable(14),A.vertexUv3s&&a.enable(15),A.vertexTangents&&a.enable(16),A.anisotropy&&a.enable(17),A.alphaHash&&a.enable(18),A.batching&&a.enable(19),A.dispersion&&a.enable(20),A.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.reverseDepthBuffer&&a.enable(4),A.skinning&&a.enable(5),A.morphTargets&&a.enable(6),A.morphNormals&&a.enable(7),A.morphColors&&a.enable(8),A.premultipliedAlpha&&a.enable(9),A.shadowMapEnabled&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),A.decodeVideoTextureEmissive&&a.enable(20),A.alphaToCoverage&&a.enable(21),S.push(a.mask)}function y(S){let A=g[S.type],P;if(A){let B=ai[A];P=Er.clone(B.uniforms)}else P=S.uniforms;return P}function L(S,A){let P;for(let B=0,H=h.length;B<H;B++){let W=h[B];if(W.cacheKey===A){P=W,++P.usedTimes;break}}return P===void 0&&(P=new $2(n,A,S,r),h.push(P)),P}function C(S){if(--S.usedTimes===0){let A=h.indexOf(S);h[A]=h[h.length-1],h.pop(),S.destroy()}}function b(S){l.remove(S)}function F(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:y,acquireProgram:L,releaseProgram:C,releaseShaderCache:b,programs:h,dispose:F}}function j2(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function eg(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function jd(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function eu(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(d,u,p,g,E,m){let f=n[e];return f===void 0?(f={id:d.id,object:d,geometry:u,material:p,groupOrder:g,renderOrder:d.renderOrder,z:E,group:m},n[e]=f):(f.id=d.id,f.object=d,f.geometry=u,f.material=p,f.groupOrder=g,f.renderOrder=d.renderOrder,f.z=E,f.group=m),e++,f}function a(d,u,p,g,E,m){let f=o(d,u,p,g,E,m);p.transmission>0?i.push(f):p.transparent===!0?s.push(f):t.push(f)}function l(d,u,p,g,E,m){let f=o(d,u,p,g,E,m);p.transmission>0?i.unshift(f):p.transparent===!0?s.unshift(f):t.unshift(f)}function c(d,u){t.length>1&&t.sort(d||eg),i.length>1&&i.sort(u||jd),s.length>1&&s.sort(u||jd)}function h(){for(let d=e,u=n.length;d<u;d++){let p=n[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function tg(){let n=new WeakMap;function e(i,s){let r=n.get(i),o;return r===void 0?(o=new eu,n.set(i,[o])):s>=r.length?(o=new eu,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function ng(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new ce};break;case"SpotLight":t={position:new I,direction:new I,color:new ce,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new ce,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new ce,groundColor:new ce};break;case"RectAreaLight":t={color:new ce,position:new I,halfWidth:new I,halfHeight:new I};break}return n[e.id]=t,t}}}function ig(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var sg=0;function rg(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function og(n){let e=new ng,t=ig(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new I);let s=new I,r=new Pt,o=new Pt;function a(c){let h=0,d=0,u=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let p=0,g=0,E=0,m=0,f=0,v=0,_=0,y=0,L=0,C=0,b=0;c.sort(rg);for(let S=0,A=c.length;S<A;S++){let P=c[S],B=P.color,H=P.intensity,W=P.distance,ee=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=B.r*H,d+=B.g*H,u+=B.b*H;else if(P.isLightProbe){for(let Z=0;Z<9;Z++)i.probe[Z].addScaledVector(P.sh.coefficients[Z],H);b++}else if(P.isDirectionalLight){let Z=e.get(P);if(Z.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let oe=P.shadow,q=t.get(P);q.shadowIntensity=oe.intensity,q.shadowBias=oe.bias,q.shadowNormalBias=oe.normalBias,q.shadowRadius=oe.radius,q.shadowMapSize=oe.mapSize,i.directionalShadow[p]=q,i.directionalShadowMap[p]=ee,i.directionalShadowMatrix[p]=P.shadow.matrix,v++}i.directional[p]=Z,p++}else if(P.isSpotLight){let Z=e.get(P);Z.position.setFromMatrixPosition(P.matrixWorld),Z.color.copy(B).multiplyScalar(H),Z.distance=W,Z.coneCos=Math.cos(P.angle),Z.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),Z.decay=P.decay,i.spot[E]=Z;let oe=P.shadow;if(P.map&&(i.spotLightMap[L]=P.map,L++,oe.updateMatrices(P),P.castShadow&&C++),i.spotLightMatrix[E]=oe.matrix,P.castShadow){let q=t.get(P);q.shadowIntensity=oe.intensity,q.shadowBias=oe.bias,q.shadowNormalBias=oe.normalBias,q.shadowRadius=oe.radius,q.shadowMapSize=oe.mapSize,i.spotShadow[E]=q,i.spotShadowMap[E]=ee,y++}E++}else if(P.isRectAreaLight){let Z=e.get(P);Z.color.copy(B).multiplyScalar(H),Z.halfWidth.set(P.width*.5,0,0),Z.halfHeight.set(0,P.height*.5,0),i.rectArea[m]=Z,m++}else if(P.isPointLight){let Z=e.get(P);if(Z.color.copy(P.color).multiplyScalar(P.intensity),Z.distance=P.distance,Z.decay=P.decay,P.castShadow){let oe=P.shadow,q=t.get(P);q.shadowIntensity=oe.intensity,q.shadowBias=oe.bias,q.shadowNormalBias=oe.normalBias,q.shadowRadius=oe.radius,q.shadowMapSize=oe.mapSize,q.shadowCameraNear=oe.camera.near,q.shadowCameraFar=oe.camera.far,i.pointShadow[g]=q,i.pointShadowMap[g]=ee,i.pointShadowMatrix[g]=P.shadow.matrix,_++}i.point[g]=Z,g++}else if(P.isHemisphereLight){let Z=e.get(P);Z.skyColor.copy(P.color).multiplyScalar(H),Z.groundColor.copy(P.groundColor).multiplyScalar(H),i.hemi[f]=Z,f++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=de.LTC_FLOAT_1,i.rectAreaLTC2=de.LTC_FLOAT_2):(i.rectAreaLTC1=de.LTC_HALF_1,i.rectAreaLTC2=de.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=u;let F=i.hash;(F.directionalLength!==p||F.pointLength!==g||F.spotLength!==E||F.rectAreaLength!==m||F.hemiLength!==f||F.numDirectionalShadows!==v||F.numPointShadows!==_||F.numSpotShadows!==y||F.numSpotMaps!==L||F.numLightProbes!==b)&&(i.directional.length=p,i.spot.length=E,i.rectArea.length=m,i.point.length=g,i.hemi.length=f,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=_,i.spotLightMatrix.length=y+L-C,i.spotLightMap.length=L,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=b,F.directionalLength=p,F.pointLength=g,F.spotLength=E,F.rectAreaLength=m,F.hemiLength=f,F.numDirectionalShadows=v,F.numPointShadows=_,F.numSpotShadows=y,F.numSpotMaps=L,F.numLightProbes=b,i.version=sg++)}function l(c,h){let d=0,u=0,p=0,g=0,E=0,m=h.matrixWorldInverse;for(let f=0,v=c.length;f<v;f++){let _=c[f];if(_.isDirectionalLight){let y=i.directional[d];y.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),d++}else if(_.isSpotLight){let y=i.spot[p];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),p++}else if(_.isRectAreaLight){let y=i.rectArea[g];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(m),o.identity(),r.copy(_.matrixWorld),r.premultiply(m),o.extractRotation(r),y.halfWidth.set(_.width*.5,0,0),y.halfHeight.set(0,_.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(_.isPointLight){let y=i.point[u];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(m),u++}else if(_.isHemisphereLight){let y=i.hemi[E];y.direction.setFromMatrixPosition(_.matrixWorld),y.direction.transformDirection(m),E++}}}return{setup:a,setupView:l,state:i}}function tu(n){let e=new og(n),t=[],i=[];function s(h){c.camera=h,t.length=0,i.length=0}function r(h){t.push(h)}function o(h){i.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}let c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function ag(n){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new tu(n),e.set(s,[a])):r>=o.length?(a=new tu(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var ji=class extends Ii{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=g0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Nc=class extends Ii{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},lg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,cg=`uniform sampler2D shadow_pass;
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
}`;function hg(n,e,t){let i=new Zr,s=new he,r=new he,o=new Ft,a=new ji({depthPacking:gr}),l=new Nc,c={},h=t.maxTextureSize,d={[Ji]:sn,[sn]:Ji,[Dt]:Dt},u=new an({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new he},radius:{value:4}},vertexShader:lg,fragmentShader:cg}),p=u.clone();p.defines.HORIZONTAL_PASS=1;let g=new Qt;g.setAttribute("position",new rn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let E=new z(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=pu;let f=this.type;this.render=function(C,b,F){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;let S=n.getRenderTarget(),A=n.getActiveCubeFace(),P=n.getActiveMipmapLevel(),B=n.state;B.setBlending(di),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);let H=f!==bi&&this.type===bi,W=f===bi&&this.type!==bi;for(let ee=0,Z=C.length;ee<Z;ee++){let oe=C[ee],q=oe.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",oe,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;s.copy(q.mapSize);let fe=q.getFrameExtents();if(s.multiply(fe),r.copy(q.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/fe.x),s.x=r.x*fe.x,q.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/fe.y),s.y=r.y*fe.y,q.mapSize.y=r.y)),q.map===null||H===!0||W===!0){let Be=this.type!==bi?{minFilter:Bn,magFilter:Bn}:{};q.map!==null&&q.map.dispose(),q.map=new on(s.x,s.y,Be),q.map.texture.name=oe.name+".shadowMap",q.camera.updateProjectionMatrix()}n.setRenderTarget(q.map),n.clear();let Ae=q.getViewportCount();for(let Be=0;Be<Ae;Be++){let it=q.getViewport(Be);o.set(r.x*it.x,r.y*it.y,r.x*it.z,r.y*it.w),B.viewport(o),q.updateMatrices(oe,Be),i=q.getFrustum(),y(b,F,q.camera,oe,this.type)}q.isPointLightShadow!==!0&&this.type===bi&&v(q,F),q.needsUpdate=!1}f=this.type,m.needsUpdate=!1,n.setRenderTarget(S,A,P)};function v(C,b){let F=e.update(E);u.defines.VSM_SAMPLES!==C.blurSamples&&(u.defines.VSM_SAMPLES=C.blurSamples,p.defines.VSM_SAMPLES=C.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new on(s.x,s.y)),u.uniforms.shadow_pass.value=C.map.texture,u.uniforms.resolution.value=C.mapSize,u.uniforms.radius.value=C.radius,n.setRenderTarget(C.mapPass),n.clear(),n.renderBufferDirect(b,null,F,u,E,null),p.uniforms.shadow_pass.value=C.mapPass.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,n.setRenderTarget(C.map),n.clear(),n.renderBufferDirect(b,null,F,p,E,null)}function _(C,b,F,S){let A=null,P=F.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(P!==void 0)A=P;else if(A=F.isPointLight===!0?l:a,n.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){let B=A.uuid,H=b.uuid,W=c[B];W===void 0&&(W={},c[B]=W);let ee=W[H];ee===void 0&&(ee=A.clone(),W[H]=ee,b.addEventListener("dispose",L)),A=ee}if(A.visible=b.visible,A.wireframe=b.wireframe,S===bi?A.side=b.shadowSide!==null?b.shadowSide:b.side:A.side=b.shadowSide!==null?b.shadowSide:d[b.side],A.alphaMap=b.alphaMap,A.alphaTest=b.alphaTest,A.map=b.map,A.clipShadows=b.clipShadows,A.clippingPlanes=b.clippingPlanes,A.clipIntersection=b.clipIntersection,A.displacementMap=b.displacementMap,A.displacementScale=b.displacementScale,A.displacementBias=b.displacementBias,A.wireframeLinewidth=b.wireframeLinewidth,A.linewidth=b.linewidth,F.isPointLight===!0&&A.isMeshDistanceMaterial===!0){let B=n.properties.get(A);B.light=F}return A}function y(C,b,F,S,A){if(C.visible===!1)return;if(C.layers.test(b.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&A===bi)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,C.matrixWorld);let H=e.update(C),W=C.material;if(Array.isArray(W)){let ee=H.groups;for(let Z=0,oe=ee.length;Z<oe;Z++){let q=ee[Z],fe=W[q.materialIndex];if(fe&&fe.visible){let Ae=_(C,fe,S,A);C.onBeforeShadow(n,C,b,F,H,Ae,q),n.renderBufferDirect(F,null,H,Ae,C,q),C.onAfterShadow(n,C,b,F,H,Ae,q)}}}else if(W.visible){let ee=_(C,W,S,A);C.onBeforeShadow(n,C,b,F,H,ee,null),n.renderBufferDirect(F,null,H,ee,C,null),C.onAfterShadow(n,C,b,F,H,ee,null)}}let B=C.children;for(let H=0,W=B.length;H<W;H++)y(B[H],b,F,S,A)}function L(C){C.target.removeEventListener("dispose",L);for(let F in c){let S=c[F],A=C.target.uuid;A in S&&(S[A].dispose(),delete S[A])}}}var dg={[Gl]:Vl,[Wl]:Yl,[Xl]:Zl,[ir]:ql,[Vl]:Gl,[Yl]:Wl,[Zl]:Xl,[ql]:ir};function ug(n,e){function t(){let D=!1,ue=new Ft,X=null,j=new Ft(0,0,0,0);return{setMask:function(ve){X!==ve&&!D&&(n.colorMask(ve,ve,ve,ve),X=ve)},setLocked:function(ve){D=ve},setClear:function(ve,ge,$e,Yt,fn){fn===!0&&(ve*=Yt,ge*=Yt,$e*=Yt),ue.set(ve,ge,$e,Yt),j.equals(ue)===!1&&(n.clearColor(ve,ge,$e,Yt),j.copy(ue))},reset:function(){D=!1,X=null,j.set(-1,0,0,0)}}}function i(){let D=!1,ue=!1,X=null,j=null,ve=null;return{setReversed:function(ge){if(ue!==ge){let $e=e.get("EXT_clip_control");ue?$e.clipControlEXT($e.LOWER_LEFT_EXT,$e.ZERO_TO_ONE_EXT):$e.clipControlEXT($e.LOWER_LEFT_EXT,$e.NEGATIVE_ONE_TO_ONE_EXT);let Yt=ve;ve=null,this.setClear(Yt)}ue=ge},getReversed:function(){return ue},setTest:function(ge){ge?pe(n.DEPTH_TEST):Ge(n.DEPTH_TEST)},setMask:function(ge){X!==ge&&!D&&(n.depthMask(ge),X=ge)},setFunc:function(ge){if(ue&&(ge=dg[ge]),j!==ge){switch(ge){case Gl:n.depthFunc(n.NEVER);break;case Vl:n.depthFunc(n.ALWAYS);break;case Wl:n.depthFunc(n.LESS);break;case ir:n.depthFunc(n.LEQUAL);break;case Xl:n.depthFunc(n.EQUAL);break;case ql:n.depthFunc(n.GEQUAL);break;case Yl:n.depthFunc(n.GREATER);break;case Zl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}j=ge}},setLocked:function(ge){D=ge},setClear:function(ge){ve!==ge&&(ue&&(ge=1-ge),n.clearDepth(ge),ve=ge)},reset:function(){D=!1,X=null,j=null,ve=null,ue=!1}}}function s(){let D=!1,ue=null,X=null,j=null,ve=null,ge=null,$e=null,Yt=null,fn=null;return{setTest:function(wt){D||(wt?pe(n.STENCIL_TEST):Ge(n.STENCIL_TEST))},setMask:function(wt){ue!==wt&&!D&&(n.stencilMask(wt),ue=wt)},setFunc:function(wt,Zn,yi){(X!==wt||j!==Zn||ve!==yi)&&(n.stencilFunc(wt,Zn,yi),X=wt,j=Zn,ve=yi)},setOp:function(wt,Zn,yi){(ge!==wt||$e!==Zn||Yt!==yi)&&(n.stencilOp(wt,Zn,yi),ge=wt,$e=Zn,Yt=yi)},setLocked:function(wt){D=wt},setClear:function(wt){fn!==wt&&(n.clearStencil(wt),fn=wt)},reset:function(){D=!1,ue=null,X=null,j=null,ve=null,ge=null,$e=null,Yt=null,fn=null}}}let r=new t,o=new i,a=new s,l=new WeakMap,c=new WeakMap,h={},d={},u=new WeakMap,p=[],g=null,E=!1,m=null,f=null,v=null,_=null,y=null,L=null,C=null,b=new ce(0,0,0),F=0,S=!1,A=null,P=null,B=null,H=null,W=null,ee=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Z=!1,oe=0,q=n.getParameter(n.VERSION);q.indexOf("WebGL")!==-1?(oe=parseFloat(/^WebGL (\d)/.exec(q)[1]),Z=oe>=1):q.indexOf("OpenGL ES")!==-1&&(oe=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),Z=oe>=2);let fe=null,Ae={},Be=n.getParameter(n.SCISSOR_BOX),it=n.getParameter(n.VIEWPORT),Lt=new Ft().fromArray(Be),$=new Ft().fromArray(it);function ae(D,ue,X,j){let ve=new Uint8Array(4),ge=n.createTexture();n.bindTexture(D,ge),n.texParameteri(D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(D,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let $e=0;$e<X;$e++)D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY?n.texImage3D(ue,0,n.RGBA,1,1,j,0,n.RGBA,n.UNSIGNED_BYTE,ve):n.texImage2D(ue+$e,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ve);return ge}let Pe={};Pe[n.TEXTURE_2D]=ae(n.TEXTURE_2D,n.TEXTURE_2D,1),Pe[n.TEXTURE_CUBE_MAP]=ae(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Pe[n.TEXTURE_2D_ARRAY]=ae(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Pe[n.TEXTURE_3D]=ae(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),pe(n.DEPTH_TEST),o.setFunc(ir),ht(!1),dt(rd),pe(n.CULL_FACE),N(di);function pe(D){h[D]!==!0&&(n.enable(D),h[D]=!0)}function Ge(D){h[D]!==!1&&(n.disable(D),h[D]=!1)}function Ze(D,ue){return d[D]!==ue?(n.bindFramebuffer(D,ue),d[D]=ue,D===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=ue),D===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=ue),!0):!1}function st(D,ue){let X=p,j=!1;if(D){X=u.get(ue),X===void 0&&(X=[],u.set(ue,X));let ve=D.textures;if(X.length!==ve.length||X[0]!==n.COLOR_ATTACHMENT0){for(let ge=0,$e=ve.length;ge<$e;ge++)X[ge]=n.COLOR_ATTACHMENT0+ge;X.length=ve.length,j=!0}}else X[0]!==n.BACK&&(X[0]=n.BACK,j=!0);j&&n.drawBuffers(X)}function Xt(D){return g!==D?(n.useProgram(D),g=D,!0):!1}let mt={[ps]:n.FUNC_ADD,[Vf]:n.FUNC_SUBTRACT,[Wf]:n.FUNC_REVERSE_SUBTRACT};mt[Xf]=n.MIN,mt[qf]=n.MAX;let Jt={[Yf]:n.ZERO,[Zf]:n.ONE,[Jf]:n.SRC_COLOR,[zl]:n.SRC_ALPHA,[t0]:n.SRC_ALPHA_SATURATE,[jf]:n.DST_COLOR,[Qf]:n.DST_ALPHA,[$f]:n.ONE_MINUS_SRC_COLOR,[kl]:n.ONE_MINUS_SRC_ALPHA,[e0]:n.ONE_MINUS_DST_COLOR,[Kf]:n.ONE_MINUS_DST_ALPHA,[n0]:n.CONSTANT_COLOR,[i0]:n.ONE_MINUS_CONSTANT_COLOR,[s0]:n.CONSTANT_ALPHA,[r0]:n.ONE_MINUS_CONSTANT_ALPHA};function N(D,ue,X,j,ve,ge,$e,Yt,fn,wt){if(D===di){E===!0&&(Ge(n.BLEND),E=!1);return}if(E===!1&&(pe(n.BLEND),E=!0),D!==Gf){if(D!==m||wt!==S){if((f!==ps||y!==ps)&&(n.blendEquation(n.FUNC_ADD),f=ps,y=ps),wt)switch(D){case Yi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case wn:n.blendFunc(n.ONE,n.ONE);break;case od:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case ad:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Yi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case wn:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case od:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case ad:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}v=null,_=null,L=null,C=null,b.set(0,0,0),F=0,m=D,S=wt}return}ve=ve||ue,ge=ge||X,$e=$e||j,(ue!==f||ve!==y)&&(n.blendEquationSeparate(mt[ue],mt[ve]),f=ue,y=ve),(X!==v||j!==_||ge!==L||$e!==C)&&(n.blendFuncSeparate(Jt[X],Jt[j],Jt[ge],Jt[$e]),v=X,_=j,L=ge,C=$e),(Yt.equals(b)===!1||fn!==F)&&(n.blendColor(Yt.r,Yt.g,Yt.b,fn),b.copy(Yt),F=fn),m=D,S=!1}function kn(D,ue){D.side===Dt?Ge(n.CULL_FACE):pe(n.CULL_FACE);let X=D.side===sn;ue&&(X=!X),ht(X),D.blending===Yi&&D.transparent===!1?N(di):N(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),r.setMask(D.colorWrite);let j=D.stencilWrite;a.setTest(j),j&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Nt(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?pe(n.SAMPLE_ALPHA_TO_COVERAGE):Ge(n.SAMPLE_ALPHA_TO_COVERAGE)}function ht(D){A!==D&&(D?n.frontFace(n.CW):n.frontFace(n.CCW),A=D)}function dt(D){D!==zf?(pe(n.CULL_FACE),D!==P&&(D===rd?n.cullFace(n.BACK):D===kf?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ge(n.CULL_FACE),P=D}function ze(D){D!==B&&(Z&&n.lineWidth(D),B=D)}function Nt(D,ue,X){D?(pe(n.POLYGON_OFFSET_FILL),(H!==ue||W!==X)&&(n.polygonOffset(ue,X),H=ue,W=X)):Ge(n.POLYGON_OFFSET_FILL)}function He(D){D?pe(n.SCISSOR_TEST):Ge(n.SCISSOR_TEST)}function x(D){D===void 0&&(D=n.TEXTURE0+ee-1),fe!==D&&(n.activeTexture(D),fe=D)}function M(D,ue,X){X===void 0&&(fe===null?X=n.TEXTURE0+ee-1:X=fe);let j=Ae[X];j===void 0&&(j={type:void 0,texture:void 0},Ae[X]=j),(j.type!==D||j.texture!==ue)&&(fe!==X&&(n.activeTexture(X),fe=X),n.bindTexture(D,ue||Pe[D]),j.type=D,j.texture=ue)}function k(){let D=Ae[fe];D!==void 0&&D.type!==void 0&&(n.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function K(){try{n.compressedTexImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ne(){try{n.compressedTexImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function J(){try{n.texSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function De(){try{n.texSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function me(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Me(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function gt(){try{n.texStorage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function se(){try{n.texStorage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Se(){try{n.texImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ke(){try{n.texImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function We(D){Lt.equals(D)===!1&&(n.scissor(D.x,D.y,D.z,D.w),Lt.copy(D))}function Te(D){$.equals(D)===!1&&(n.viewport(D.x,D.y,D.z,D.w),$.copy(D))}function ut(D,ue){let X=c.get(ue);X===void 0&&(X=new WeakMap,c.set(ue,X));let j=X.get(D);j===void 0&&(j=n.getUniformBlockIndex(ue,D.name),X.set(D,j))}function et(D,ue){let j=c.get(ue).get(D);l.get(ue)!==j&&(n.uniformBlockBinding(ue,j,D.__bindingPointIndex),l.set(ue,j))}function Ut(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},fe=null,Ae={},d={},u=new WeakMap,p=[],g=null,E=!1,m=null,f=null,v=null,_=null,y=null,L=null,C=null,b=new ce(0,0,0),F=0,S=!1,A=null,P=null,B=null,H=null,W=null,Lt.set(0,0,n.canvas.width,n.canvas.height),$.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:pe,disable:Ge,bindFramebuffer:Ze,drawBuffers:st,useProgram:Xt,setBlending:N,setMaterial:kn,setFlipSided:ht,setCullFace:dt,setLineWidth:ze,setPolygonOffset:Nt,setScissorTest:He,activeTexture:x,bindTexture:M,unbindTexture:k,compressedTexImage2D:K,compressedTexImage3D:ne,texImage2D:Se,texImage3D:ke,updateUBOMapping:ut,uniformBlockBinding:et,texStorage2D:gt,texStorage3D:se,texSubImage2D:J,texSubImage3D:De,compressedTexSubImage2D:me,compressedTexSubImage3D:Me,scissor:We,viewport:Te,reset:Ut}}function nu(n,e,t,i){let s=fg(i);switch(t){case _u:return n*e;case Mu:return n*e;case Su:return n*e*2;case gh:return n*e/s.components*s.byteLength;case Eh:return n*e/s.components*s.byteLength;case Tu:return n*e*2/s.components*s.byteLength;case yh:return n*e*2/s.components*s.byteLength;case Au:return n*e*3/s.components*s.byteLength;case jn:return n*e*4/s.components*s.byteLength;case vh:return n*e*4/s.components*s.byteLength;case Yo:case Zo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Jo:case $o:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case jl:case tc:return Math.max(n,16)*Math.max(e,8)/4;case Kl:case ec:return Math.max(n,8)*Math.max(e,8)/2;case nc:case ic:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case sc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case rc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case oc:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case ac:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case lc:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case cc:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case hc:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case dc:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case uc:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case fc:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case pc:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case mc:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case gc:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Ec:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case yc:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Qo:case vc:case _c:return Math.ceil(n/4)*Math.ceil(e/4)*16;case bu:case Ac:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Mc:case Sc:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function fg(n){switch(n){case Ci:case Eu:return{byteLength:1,components:1};case Yr:case yu:case Cn:return{byteLength:2,components:1};case ph:case mh:return{byteLength:2,components:4};case Fi:case fh:case hi:return{byteLength:4,components:1};case vu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function pg(n,e,t,i,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new he,h=new WeakMap,d,u=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(x,M){return p?new OffscreenCanvas(x,M):ta("canvas")}function E(x,M,k){let K=1,ne=He(x);if((ne.width>k||ne.height>k)&&(K=k/Math.max(ne.width,ne.height)),K<1)if(typeof HTMLImageElement<"u"&&x instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&x instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&x instanceof ImageBitmap||typeof VideoFrame<"u"&&x instanceof VideoFrame){let J=Math.floor(K*ne.width),De=Math.floor(K*ne.height);d===void 0&&(d=g(J,De));let me=M?g(J,De):d;return me.width=J,me.height=De,me.getContext("2d").drawImage(x,0,0,J,De),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+J+"x"+De+")."),me}else return"data"in x&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),x;return x}function m(x){return x.generateMipmaps}function f(x){n.generateMipmap(x)}function v(x){return x.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:x.isWebGL3DRenderTarget?n.TEXTURE_3D:x.isWebGLArrayRenderTarget||x.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function _(x,M,k,K,ne=!1){if(x!==null){if(n[x]!==void 0)return n[x];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+x+"'")}let J=M;if(M===n.RED&&(k===n.FLOAT&&(J=n.R32F),k===n.HALF_FLOAT&&(J=n.R16F),k===n.UNSIGNED_BYTE&&(J=n.R8)),M===n.RED_INTEGER&&(k===n.UNSIGNED_BYTE&&(J=n.R8UI),k===n.UNSIGNED_SHORT&&(J=n.R16UI),k===n.UNSIGNED_INT&&(J=n.R32UI),k===n.BYTE&&(J=n.R8I),k===n.SHORT&&(J=n.R16I),k===n.INT&&(J=n.R32I)),M===n.RG&&(k===n.FLOAT&&(J=n.RG32F),k===n.HALF_FLOAT&&(J=n.RG16F),k===n.UNSIGNED_BYTE&&(J=n.RG8)),M===n.RG_INTEGER&&(k===n.UNSIGNED_BYTE&&(J=n.RG8UI),k===n.UNSIGNED_SHORT&&(J=n.RG16UI),k===n.UNSIGNED_INT&&(J=n.RG32UI),k===n.BYTE&&(J=n.RG8I),k===n.SHORT&&(J=n.RG16I),k===n.INT&&(J=n.RG32I)),M===n.RGB_INTEGER&&(k===n.UNSIGNED_BYTE&&(J=n.RGB8UI),k===n.UNSIGNED_SHORT&&(J=n.RGB16UI),k===n.UNSIGNED_INT&&(J=n.RGB32UI),k===n.BYTE&&(J=n.RGB8I),k===n.SHORT&&(J=n.RGB16I),k===n.INT&&(J=n.RGB32I)),M===n.RGBA_INTEGER&&(k===n.UNSIGNED_BYTE&&(J=n.RGBA8UI),k===n.UNSIGNED_SHORT&&(J=n.RGBA16UI),k===n.UNSIGNED_INT&&(J=n.RGBA32UI),k===n.BYTE&&(J=n.RGBA8I),k===n.SHORT&&(J=n.RGBA16I),k===n.INT&&(J=n.RGBA32I)),M===n.RGB&&k===n.UNSIGNED_INT_5_9_9_9_REV&&(J=n.RGB9_E5),M===n.RGBA){let De=ne?Aa:Et.getTransfer(K);k===n.FLOAT&&(J=n.RGBA32F),k===n.HALF_FLOAT&&(J=n.RGBA16F),k===n.UNSIGNED_BYTE&&(J=De===xt?n.SRGB8_ALPHA8:n.RGBA8),k===n.UNSIGNED_SHORT_4_4_4_4&&(J=n.RGBA4),k===n.UNSIGNED_SHORT_5_5_5_1&&(J=n.RGB5_A1)}return(J===n.R16F||J===n.R32F||J===n.RG16F||J===n.RG32F||J===n.RGBA16F||J===n.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function y(x,M){let k;return x?M===null||M===Fi||M===or?k=n.DEPTH24_STENCIL8:M===hi?k=n.DEPTH32F_STENCIL8:M===Yr&&(k=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Fi||M===or?k=n.DEPTH_COMPONENT24:M===hi?k=n.DEPTH_COMPONENT32F:M===Yr&&(k=n.DEPTH_COMPONENT16),k}function L(x,M){return m(x)===!0||x.isFramebufferTexture&&x.minFilter!==Bn&&x.minFilter!==ci?Math.log2(Math.max(M.width,M.height))+1:x.mipmaps!==void 0&&x.mipmaps.length>0?x.mipmaps.length:x.isCompressedTexture&&Array.isArray(x.image)?M.mipmaps.length:1}function C(x){let M=x.target;M.removeEventListener("dispose",C),F(M),M.isVideoTexture&&h.delete(M)}function b(x){let M=x.target;M.removeEventListener("dispose",b),A(M)}function F(x){let M=i.get(x);if(M.__webglInit===void 0)return;let k=x.source,K=u.get(k);if(K){let ne=K[M.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&S(x),Object.keys(K).length===0&&u.delete(k)}i.remove(x)}function S(x){let M=i.get(x);n.deleteTexture(M.__webglTexture);let k=x.source,K=u.get(k);delete K[M.__cacheKey],o.memory.textures--}function A(x){let M=i.get(x);if(x.depthTexture&&(x.depthTexture.dispose(),i.remove(x.depthTexture)),x.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(M.__webglFramebuffer[K]))for(let ne=0;ne<M.__webglFramebuffer[K].length;ne++)n.deleteFramebuffer(M.__webglFramebuffer[K][ne]);else n.deleteFramebuffer(M.__webglFramebuffer[K]);M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer[K])}else{if(Array.isArray(M.__webglFramebuffer))for(let K=0;K<M.__webglFramebuffer.length;K++)n.deleteFramebuffer(M.__webglFramebuffer[K]);else n.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&n.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let K=0;K<M.__webglColorRenderbuffer.length;K++)M.__webglColorRenderbuffer[K]&&n.deleteRenderbuffer(M.__webglColorRenderbuffer[K]);M.__webglDepthRenderbuffer&&n.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let k=x.textures;for(let K=0,ne=k.length;K<ne;K++){let J=i.get(k[K]);J.__webglTexture&&(n.deleteTexture(J.__webglTexture),o.memory.textures--),i.remove(k[K])}i.remove(x)}let P=0;function B(){P=0}function H(){let x=P;return x>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+x+" texture units while this GPU supports only "+s.maxTextures),P+=1,x}function W(x){let M=[];return M.push(x.wrapS),M.push(x.wrapT),M.push(x.wrapR||0),M.push(x.magFilter),M.push(x.minFilter),M.push(x.anisotropy),M.push(x.internalFormat),M.push(x.format),M.push(x.type),M.push(x.generateMipmaps),M.push(x.premultiplyAlpha),M.push(x.flipY),M.push(x.unpackAlignment),M.push(x.colorSpace),M.join()}function ee(x,M){let k=i.get(x);if(x.isVideoTexture&&ze(x),x.isRenderTargetTexture===!1&&x.version>0&&k.__version!==x.version){let K=x.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(k,x,M);return}}t.bindTexture(n.TEXTURE_2D,k.__webglTexture,n.TEXTURE0+M)}function Z(x,M){let k=i.get(x);if(x.version>0&&k.__version!==x.version){$(k,x,M);return}t.bindTexture(n.TEXTURE_2D_ARRAY,k.__webglTexture,n.TEXTURE0+M)}function oe(x,M){let k=i.get(x);if(x.version>0&&k.__version!==x.version){$(k,x,M);return}t.bindTexture(n.TEXTURE_3D,k.__webglTexture,n.TEXTURE0+M)}function q(x,M){let k=i.get(x);if(x.version>0&&k.__version!==x.version){ae(k,x,M);return}t.bindTexture(n.TEXTURE_CUBE_MAP,k.__webglTexture,n.TEXTURE0+M)}let fe={[dn]:n.REPEAT,[gs]:n.CLAMP_TO_EDGE,[Ql]:n.MIRRORED_REPEAT},Ae={[Bn]:n.NEAREST,[m0]:n.NEAREST_MIPMAP_NEAREST,[yo]:n.NEAREST_MIPMAP_LINEAR,[ci]:n.LINEAR,[sl]:n.LINEAR_MIPMAP_NEAREST,[Es]:n.LINEAR_MIPMAP_LINEAR},Be={[y0]:n.NEVER,[T0]:n.ALWAYS,[v0]:n.LESS,[Ru]:n.LEQUAL,[_0]:n.EQUAL,[S0]:n.GEQUAL,[A0]:n.GREATER,[M0]:n.NOTEQUAL};function it(x,M){if(M.type===hi&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===ci||M.magFilter===sl||M.magFilter===yo||M.magFilter===Es||M.minFilter===ci||M.minFilter===sl||M.minFilter===yo||M.minFilter===Es)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(x,n.TEXTURE_WRAP_S,fe[M.wrapS]),n.texParameteri(x,n.TEXTURE_WRAP_T,fe[M.wrapT]),(x===n.TEXTURE_3D||x===n.TEXTURE_2D_ARRAY)&&n.texParameteri(x,n.TEXTURE_WRAP_R,fe[M.wrapR]),n.texParameteri(x,n.TEXTURE_MAG_FILTER,Ae[M.magFilter]),n.texParameteri(x,n.TEXTURE_MIN_FILTER,Ae[M.minFilter]),M.compareFunction&&(n.texParameteri(x,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(x,n.TEXTURE_COMPARE_FUNC,Be[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Bn||M.minFilter!==yo&&M.minFilter!==Es||M.type===hi&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){let k=e.get("EXT_texture_filter_anisotropic");n.texParameterf(x,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function Lt(x,M){let k=!1;x.__webglInit===void 0&&(x.__webglInit=!0,M.addEventListener("dispose",C));let K=M.source,ne=u.get(K);ne===void 0&&(ne={},u.set(K,ne));let J=W(M);if(J!==x.__cacheKey){ne[J]===void 0&&(ne[J]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,k=!0),ne[J].usedTimes++;let De=ne[x.__cacheKey];De!==void 0&&(ne[x.__cacheKey].usedTimes--,De.usedTimes===0&&S(M)),x.__cacheKey=J,x.__webglTexture=ne[J].texture}return k}function $(x,M,k){let K=n.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(K=n.TEXTURE_2D_ARRAY),M.isData3DTexture&&(K=n.TEXTURE_3D);let ne=Lt(x,M),J=M.source;t.bindTexture(K,x.__webglTexture,n.TEXTURE0+k);let De=i.get(J);if(J.version!==De.__version||ne===!0){t.activeTexture(n.TEXTURE0+k);let me=Et.getPrimaries(Et.workingColorSpace),Me=M.colorSpace===Xi?null:Et.getPrimaries(M.colorSpace),gt=M.colorSpace===Xi||me===Me?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,gt);let se=E(M.image,!1,s.maxTextureSize);se=Nt(M,se);let Se=r.convert(M.format,M.colorSpace),ke=r.convert(M.type),We=_(M.internalFormat,Se,ke,M.colorSpace,M.isVideoTexture);it(K,M);let Te,ut=M.mipmaps,et=M.isVideoTexture!==!0,Ut=De.__version===void 0||ne===!0,D=J.dataReady,ue=L(M,se);if(M.isDepthTexture)We=y(M.format===ar,M.type),Ut&&(et?t.texStorage2D(n.TEXTURE_2D,1,We,se.width,se.height):t.texImage2D(n.TEXTURE_2D,0,We,se.width,se.height,0,Se,ke,null));else if(M.isDataTexture)if(ut.length>0){et&&Ut&&t.texStorage2D(n.TEXTURE_2D,ue,We,ut[0].width,ut[0].height);for(let X=0,j=ut.length;X<j;X++)Te=ut[X],et?D&&t.texSubImage2D(n.TEXTURE_2D,X,0,0,Te.width,Te.height,Se,ke,Te.data):t.texImage2D(n.TEXTURE_2D,X,We,Te.width,Te.height,0,Se,ke,Te.data);M.generateMipmaps=!1}else et?(Ut&&t.texStorage2D(n.TEXTURE_2D,ue,We,se.width,se.height),D&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,se.width,se.height,Se,ke,se.data)):t.texImage2D(n.TEXTURE_2D,0,We,se.width,se.height,0,Se,ke,se.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){et&&Ut&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ue,We,ut[0].width,ut[0].height,se.depth);for(let X=0,j=ut.length;X<j;X++)if(Te=ut[X],M.format!==jn)if(Se!==null)if(et){if(D)if(M.layerUpdates.size>0){let ve=nu(Te.width,Te.height,M.format,M.type);for(let ge of M.layerUpdates){let $e=Te.data.subarray(ge*ve/Te.data.BYTES_PER_ELEMENT,(ge+1)*ve/Te.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,X,0,0,ge,Te.width,Te.height,1,Se,$e)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,X,0,0,0,Te.width,Te.height,se.depth,Se,Te.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,X,We,Te.width,Te.height,se.depth,0,Te.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else et?D&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,X,0,0,0,Te.width,Te.height,se.depth,Se,ke,Te.data):t.texImage3D(n.TEXTURE_2D_ARRAY,X,We,Te.width,Te.height,se.depth,0,Se,ke,Te.data)}else{et&&Ut&&t.texStorage2D(n.TEXTURE_2D,ue,We,ut[0].width,ut[0].height);for(let X=0,j=ut.length;X<j;X++)Te=ut[X],M.format!==jn?Se!==null?et?D&&t.compressedTexSubImage2D(n.TEXTURE_2D,X,0,0,Te.width,Te.height,Se,Te.data):t.compressedTexImage2D(n.TEXTURE_2D,X,We,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):et?D&&t.texSubImage2D(n.TEXTURE_2D,X,0,0,Te.width,Te.height,Se,ke,Te.data):t.texImage2D(n.TEXTURE_2D,X,We,Te.width,Te.height,0,Se,ke,Te.data)}else if(M.isDataArrayTexture)if(et){if(Ut&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ue,We,se.width,se.height,se.depth),D)if(M.layerUpdates.size>0){let X=nu(se.width,se.height,M.format,M.type);for(let j of M.layerUpdates){let ve=se.data.subarray(j*X/se.data.BYTES_PER_ELEMENT,(j+1)*X/se.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,j,se.width,se.height,1,Se,ke,ve)}M.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,Se,ke,se.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,We,se.width,se.height,se.depth,0,Se,ke,se.data);else if(M.isData3DTexture)et?(Ut&&t.texStorage3D(n.TEXTURE_3D,ue,We,se.width,se.height,se.depth),D&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,Se,ke,se.data)):t.texImage3D(n.TEXTURE_3D,0,We,se.width,se.height,se.depth,0,Se,ke,se.data);else if(M.isFramebufferTexture){if(Ut)if(et)t.texStorage2D(n.TEXTURE_2D,ue,We,se.width,se.height);else{let X=se.width,j=se.height;for(let ve=0;ve<ue;ve++)t.texImage2D(n.TEXTURE_2D,ve,We,X,j,0,Se,ke,null),X>>=1,j>>=1}}else if(ut.length>0){if(et&&Ut){let X=He(ut[0]);t.texStorage2D(n.TEXTURE_2D,ue,We,X.width,X.height)}for(let X=0,j=ut.length;X<j;X++)Te=ut[X],et?D&&t.texSubImage2D(n.TEXTURE_2D,X,0,0,Se,ke,Te):t.texImage2D(n.TEXTURE_2D,X,We,Se,ke,Te);M.generateMipmaps=!1}else if(et){if(Ut){let X=He(se);t.texStorage2D(n.TEXTURE_2D,ue,We,X.width,X.height)}D&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Se,ke,se)}else t.texImage2D(n.TEXTURE_2D,0,We,Se,ke,se);m(M)&&f(K),De.__version=J.version,M.onUpdate&&M.onUpdate(M)}x.__version=M.version}function ae(x,M,k){if(M.image.length!==6)return;let K=Lt(x,M),ne=M.source;t.bindTexture(n.TEXTURE_CUBE_MAP,x.__webglTexture,n.TEXTURE0+k);let J=i.get(ne);if(ne.version!==J.__version||K===!0){t.activeTexture(n.TEXTURE0+k);let De=Et.getPrimaries(Et.workingColorSpace),me=M.colorSpace===Xi?null:Et.getPrimaries(M.colorSpace),Me=M.colorSpace===Xi||De===me?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);let gt=M.isCompressedTexture||M.image[0].isCompressedTexture,se=M.image[0]&&M.image[0].isDataTexture,Se=[];for(let j=0;j<6;j++)!gt&&!se?Se[j]=E(M.image[j],!0,s.maxCubemapSize):Se[j]=se?M.image[j].image:M.image[j],Se[j]=Nt(M,Se[j]);let ke=Se[0],We=r.convert(M.format,M.colorSpace),Te=r.convert(M.type),ut=_(M.internalFormat,We,Te,M.colorSpace),et=M.isVideoTexture!==!0,Ut=J.__version===void 0||K===!0,D=ne.dataReady,ue=L(M,ke);it(n.TEXTURE_CUBE_MAP,M);let X;if(gt){et&&Ut&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ue,ut,ke.width,ke.height);for(let j=0;j<6;j++){X=Se[j].mipmaps;for(let ve=0;ve<X.length;ve++){let ge=X[ve];M.format!==jn?We!==null?et?D&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,ve,0,0,ge.width,ge.height,We,ge.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,ve,ut,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):et?D&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,ve,0,0,ge.width,ge.height,We,Te,ge.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,ve,ut,ge.width,ge.height,0,We,Te,ge.data)}}}else{if(X=M.mipmaps,et&&Ut){X.length>0&&ue++;let j=He(Se[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ue,ut,j.width,j.height)}for(let j=0;j<6;j++)if(se){et?D&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Se[j].width,Se[j].height,We,Te,Se[j].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,ut,Se[j].width,Se[j].height,0,We,Te,Se[j].data);for(let ve=0;ve<X.length;ve++){let $e=X[ve].image[j].image;et?D&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,ve+1,0,0,$e.width,$e.height,We,Te,$e.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,ve+1,ut,$e.width,$e.height,0,We,Te,$e.data)}}else{et?D&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,We,Te,Se[j]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,ut,We,Te,Se[j]);for(let ve=0;ve<X.length;ve++){let ge=X[ve];et?D&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,ve+1,0,0,We,Te,ge.image[j]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,ve+1,ut,We,Te,ge.image[j])}}}m(M)&&f(n.TEXTURE_CUBE_MAP),J.__version=ne.version,M.onUpdate&&M.onUpdate(M)}x.__version=M.version}function Pe(x,M,k,K,ne,J){let De=r.convert(k.format,k.colorSpace),me=r.convert(k.type),Me=_(k.internalFormat,De,me,k.colorSpace),gt=i.get(M),se=i.get(k);if(se.__renderTarget=M,!gt.__hasExternalTextures){let Se=Math.max(1,M.width>>J),ke=Math.max(1,M.height>>J);ne===n.TEXTURE_3D||ne===n.TEXTURE_2D_ARRAY?t.texImage3D(ne,J,Me,Se,ke,M.depth,0,De,me,null):t.texImage2D(ne,J,Me,Se,ke,0,De,me,null)}t.bindFramebuffer(n.FRAMEBUFFER,x),dt(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,K,ne,se.__webglTexture,0,ht(M)):(ne===n.TEXTURE_2D||ne>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,K,ne,se.__webglTexture,J),t.bindFramebuffer(n.FRAMEBUFFER,null)}function pe(x,M,k){if(n.bindRenderbuffer(n.RENDERBUFFER,x),M.depthBuffer){let K=M.depthTexture,ne=K&&K.isDepthTexture?K.type:null,J=y(M.stencilBuffer,ne),De=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,me=ht(M);dt(M)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,me,J,M.width,M.height):k?n.renderbufferStorageMultisample(n.RENDERBUFFER,me,J,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,J,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,De,n.RENDERBUFFER,x)}else{let K=M.textures;for(let ne=0;ne<K.length;ne++){let J=K[ne],De=r.convert(J.format,J.colorSpace),me=r.convert(J.type),Me=_(J.internalFormat,De,me,J.colorSpace),gt=ht(M);k&&dt(M)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,gt,Me,M.width,M.height):dt(M)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,gt,Me,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,Me,M.width,M.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ge(x,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,x),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let K=i.get(M.depthTexture);K.__renderTarget=M,(!K.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),ee(M.depthTexture,0);let ne=K.__webglTexture,J=ht(M);if(M.depthTexture.format===er)dt(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ne,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ne,0);else if(M.depthTexture.format===ar)dt(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ne,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ne,0);else throw new Error("Unknown depthTexture format")}function Ze(x){let M=i.get(x),k=x.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==x.depthTexture){let K=x.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),K){let ne=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,K.removeEventListener("dispose",ne)};K.addEventListener("dispose",ne),M.__depthDisposeCallback=ne}M.__boundDepthTexture=K}if(x.depthTexture&&!M.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");Ge(M.__webglFramebuffer,x)}else if(k){M.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[K]),M.__webglDepthbuffer[K]===void 0)M.__webglDepthbuffer[K]=n.createRenderbuffer(),pe(M.__webglDepthbuffer[K],x,!1);else{let ne=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,J=M.__webglDepthbuffer[K];n.bindRenderbuffer(n.RENDERBUFFER,J),n.framebufferRenderbuffer(n.FRAMEBUFFER,ne,n.RENDERBUFFER,J)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=n.createRenderbuffer(),pe(M.__webglDepthbuffer,x,!1);else{let K=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ne=M.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ne),n.framebufferRenderbuffer(n.FRAMEBUFFER,K,n.RENDERBUFFER,ne)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function st(x,M,k){let K=i.get(x);M!==void 0&&Pe(K.__webglFramebuffer,x,x.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),k!==void 0&&Ze(x)}function Xt(x){let M=x.texture,k=i.get(x),K=i.get(M);x.addEventListener("dispose",b);let ne=x.textures,J=x.isWebGLCubeRenderTarget===!0,De=ne.length>1;if(De||(K.__webglTexture===void 0&&(K.__webglTexture=n.createTexture()),K.__version=M.version,o.memory.textures++),J){k.__webglFramebuffer=[];for(let me=0;me<6;me++)if(M.mipmaps&&M.mipmaps.length>0){k.__webglFramebuffer[me]=[];for(let Me=0;Me<M.mipmaps.length;Me++)k.__webglFramebuffer[me][Me]=n.createFramebuffer()}else k.__webglFramebuffer[me]=n.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){k.__webglFramebuffer=[];for(let me=0;me<M.mipmaps.length;me++)k.__webglFramebuffer[me]=n.createFramebuffer()}else k.__webglFramebuffer=n.createFramebuffer();if(De)for(let me=0,Me=ne.length;me<Me;me++){let gt=i.get(ne[me]);gt.__webglTexture===void 0&&(gt.__webglTexture=n.createTexture(),o.memory.textures++)}if(x.samples>0&&dt(x)===!1){k.__webglMultisampledFramebuffer=n.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let me=0;me<ne.length;me++){let Me=ne[me];k.__webglColorRenderbuffer[me]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,k.__webglColorRenderbuffer[me]);let gt=r.convert(Me.format,Me.colorSpace),se=r.convert(Me.type),Se=_(Me.internalFormat,gt,se,Me.colorSpace,x.isXRRenderTarget===!0),ke=ht(x);n.renderbufferStorageMultisample(n.RENDERBUFFER,ke,Se,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.RENDERBUFFER,k.__webglColorRenderbuffer[me])}n.bindRenderbuffer(n.RENDERBUFFER,null),x.depthBuffer&&(k.__webglDepthRenderbuffer=n.createRenderbuffer(),pe(k.__webglDepthRenderbuffer,x,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(J){t.bindTexture(n.TEXTURE_CUBE_MAP,K.__webglTexture),it(n.TEXTURE_CUBE_MAP,M);for(let me=0;me<6;me++)if(M.mipmaps&&M.mipmaps.length>0)for(let Me=0;Me<M.mipmaps.length;Me++)Pe(k.__webglFramebuffer[me][Me],x,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+me,Me);else Pe(k.__webglFramebuffer[me],x,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0);m(M)&&f(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(De){for(let me=0,Me=ne.length;me<Me;me++){let gt=ne[me],se=i.get(gt);t.bindTexture(n.TEXTURE_2D,se.__webglTexture),it(n.TEXTURE_2D,gt),Pe(k.__webglFramebuffer,x,gt,n.COLOR_ATTACHMENT0+me,n.TEXTURE_2D,0),m(gt)&&f(n.TEXTURE_2D)}t.unbindTexture()}else{let me=n.TEXTURE_2D;if((x.isWebGL3DRenderTarget||x.isWebGLArrayRenderTarget)&&(me=x.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(me,K.__webglTexture),it(me,M),M.mipmaps&&M.mipmaps.length>0)for(let Me=0;Me<M.mipmaps.length;Me++)Pe(k.__webglFramebuffer[Me],x,M,n.COLOR_ATTACHMENT0,me,Me);else Pe(k.__webglFramebuffer,x,M,n.COLOR_ATTACHMENT0,me,0);m(M)&&f(me),t.unbindTexture()}x.depthBuffer&&Ze(x)}function mt(x){let M=x.textures;for(let k=0,K=M.length;k<K;k++){let ne=M[k];if(m(ne)){let J=v(x),De=i.get(ne).__webglTexture;t.bindTexture(J,De),f(J),t.unbindTexture()}}}let Jt=[],N=[];function kn(x){if(x.samples>0){if(dt(x)===!1){let M=x.textures,k=x.width,K=x.height,ne=n.COLOR_BUFFER_BIT,J=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,De=i.get(x),me=M.length>1;if(me)for(let Me=0;Me<M.length;Me++)t.bindFramebuffer(n.FRAMEBUFFER,De.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Me,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,De.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Me,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,De.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,De.__webglFramebuffer);for(let Me=0;Me<M.length;Me++){if(x.resolveDepthBuffer&&(x.depthBuffer&&(ne|=n.DEPTH_BUFFER_BIT),x.stencilBuffer&&x.resolveStencilBuffer&&(ne|=n.STENCIL_BUFFER_BIT)),me){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,De.__webglColorRenderbuffer[Me]);let gt=i.get(M[Me]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,gt,0)}n.blitFramebuffer(0,0,k,K,0,0,k,K,ne,n.NEAREST),l===!0&&(Jt.length=0,N.length=0,Jt.push(n.COLOR_ATTACHMENT0+Me),x.depthBuffer&&x.resolveDepthBuffer===!1&&(Jt.push(J),N.push(J),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,N)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Jt))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),me)for(let Me=0;Me<M.length;Me++){t.bindFramebuffer(n.FRAMEBUFFER,De.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Me,n.RENDERBUFFER,De.__webglColorRenderbuffer[Me]);let gt=i.get(M[Me]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,De.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Me,n.TEXTURE_2D,gt,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,De.__webglMultisampledFramebuffer)}else if(x.depthBuffer&&x.resolveDepthBuffer===!1&&l){let M=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[M])}}}function ht(x){return Math.min(s.maxSamples,x.samples)}function dt(x){let M=i.get(x);return x.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function ze(x){let M=o.render.frame;h.get(x)!==M&&(h.set(x,M),x.update())}function Nt(x,M){let k=x.colorSpace,K=x.format,ne=x.type;return x.isCompressedTexture===!0||x.isVideoTexture===!0||k!==es&&k!==Xi&&(Et.getTransfer(k)===xt?(K!==jn||ne!==Ci)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),M}function He(x){return typeof HTMLImageElement<"u"&&x instanceof HTMLImageElement?(c.width=x.naturalWidth||x.width,c.height=x.naturalHeight||x.height):typeof VideoFrame<"u"&&x instanceof VideoFrame?(c.width=x.displayWidth,c.height=x.displayHeight):(c.width=x.width,c.height=x.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=B,this.setTexture2D=ee,this.setTexture2DArray=Z,this.setTexture3D=oe,this.setTextureCube=q,this.rebindTextures=st,this.setupRenderTarget=Xt,this.updateRenderTargetMipmap=mt,this.updateMultisampleRenderTarget=kn,this.setupDepthRenderbuffer=Ze,this.setupFrameBufferTexture=Pe,this.useMultisampledRTT=dt}function mg(n,e){function t(i,s=Xi){let r,o=Et.getTransfer(s);if(i===Ci)return n.UNSIGNED_BYTE;if(i===ph)return n.UNSIGNED_SHORT_4_4_4_4;if(i===mh)return n.UNSIGNED_SHORT_5_5_5_1;if(i===vu)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Eu)return n.BYTE;if(i===yu)return n.SHORT;if(i===Yr)return n.UNSIGNED_SHORT;if(i===fh)return n.INT;if(i===Fi)return n.UNSIGNED_INT;if(i===hi)return n.FLOAT;if(i===Cn)return n.HALF_FLOAT;if(i===_u)return n.ALPHA;if(i===Au)return n.RGB;if(i===jn)return n.RGBA;if(i===Mu)return n.LUMINANCE;if(i===Su)return n.LUMINANCE_ALPHA;if(i===er)return n.DEPTH_COMPONENT;if(i===ar)return n.DEPTH_STENCIL;if(i===gh)return n.RED;if(i===Eh)return n.RED_INTEGER;if(i===Tu)return n.RG;if(i===yh)return n.RG_INTEGER;if(i===vh)return n.RGBA_INTEGER;if(i===Yo||i===Zo||i===Jo||i===$o)if(o===xt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Yo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Zo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Jo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===$o)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Yo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Zo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Jo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===$o)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Kl||i===jl||i===ec||i===tc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Kl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===jl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ec)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===tc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===nc||i===ic||i===sc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===nc||i===ic)return o===xt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===sc)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===rc||i===oc||i===ac||i===lc||i===cc||i===hc||i===dc||i===uc||i===fc||i===pc||i===mc||i===gc||i===Ec||i===yc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===rc)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===oc)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ac)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===lc)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===cc)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===hc)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===dc)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===uc)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===fc)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===pc)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===mc)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===gc)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ec)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===yc)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Qo||i===vc||i===_c)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Qo)return o===xt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===vc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===_c)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===bu||i===Ac||i===Mc||i===Sc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Qo)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Ac)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Mc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Sc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===or?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var Bc=class extends hn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},le=class extends $t{constructor(){super(),this.isGroup=!0,this.type="Group"}},gg={type:"move"},Wr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new le,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new le,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new le,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let E of e.hand.values()){let m=t.getJointPose(E,i),f=this._getHandJoint(c,E);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),p=.02,g=.005;c.inputState.pinching&&u>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(gg)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new le;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},Eg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,yg=`
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

}`,Hc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){let s=new Rn,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new an({vertexShader:Eg,fragmentShader:yg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new z(new be(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},zc=class extends $i{constructor(e,t){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,u=null,p=null,g=null,E=new Hc,m=t.getContextAttributes(),f=null,v=null,_=[],y=[],L=new he,C=null,b=new hn;b.viewport=new Ft;let F=new hn;F.viewport=new Ft;let S=[b,F],A=new Bc,P=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let ae=_[$];return ae===void 0&&(ae=new Wr,_[$]=ae),ae.getTargetRaySpace()},this.getControllerGrip=function($){let ae=_[$];return ae===void 0&&(ae=new Wr,_[$]=ae),ae.getGripSpace()},this.getHand=function($){let ae=_[$];return ae===void 0&&(ae=new Wr,_[$]=ae),ae.getHandSpace()};function H($){let ae=y.indexOf($.inputSource);if(ae===-1)return;let Pe=_[ae];Pe!==void 0&&(Pe.update($.inputSource,$.frame,c||o),Pe.dispatchEvent({type:$.type,data:$.inputSource}))}function W(){s.removeEventListener("select",H),s.removeEventListener("selectstart",H),s.removeEventListener("selectend",H),s.removeEventListener("squeeze",H),s.removeEventListener("squeezestart",H),s.removeEventListener("squeezeend",H),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",ee);for(let $=0;$<_.length;$++){let ae=y[$];ae!==null&&(y[$]=null,_[$].disconnect(ae))}P=null,B=null,E.reset(),e.setRenderTarget(f),p=null,u=null,d=null,s=null,v=null,Lt.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(L.width,L.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(f=e.getRenderTarget(),s.addEventListener("select",H),s.addEventListener("selectstart",H),s.addEventListener("selectend",H),s.addEventListener("squeeze",H),s.addEventListener("squeezestart",H),s.addEventListener("squeezeend",H),s.addEventListener("end",W),s.addEventListener("inputsourceschange",ee),m.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(L),s.renderState.layers===void 0){let ae={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,ae),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new on(p.framebufferWidth,p.framebufferHeight,{format:jn,type:Ci,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ae=null,Pe=null,pe=null;m.depth&&(pe=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ae=m.stencil?ar:er,Pe=m.stencil?or:Fi);let Ge={colorFormat:t.RGBA8,depthFormat:pe,scaleFactor:r};d=new XRWebGLBinding(s,t),u=d.createProjectionLayer(Ge),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),v=new on(u.textureWidth,u.textureHeight,{format:jn,type:Ci,depthTexture:new hr(u.textureWidth,u.textureHeight,Pe,void 0,void 0,void 0,void 0,void 0,void 0,ae),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Lt.setContext(s),Lt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return E.getDepthTexture()};function ee($){for(let ae=0;ae<$.removed.length;ae++){let Pe=$.removed[ae],pe=y.indexOf(Pe);pe>=0&&(y[pe]=null,_[pe].disconnect(Pe))}for(let ae=0;ae<$.added.length;ae++){let Pe=$.added[ae],pe=y.indexOf(Pe);if(pe===-1){for(let Ze=0;Ze<_.length;Ze++)if(Ze>=y.length){y.push(Pe),pe=Ze;break}else if(y[Ze]===null){y[Ze]=Pe,pe=Ze;break}if(pe===-1)break}let Ge=_[pe];Ge&&Ge.connect(Pe)}}let Z=new I,oe=new I;function q($,ae,Pe){Z.setFromMatrixPosition(ae.matrixWorld),oe.setFromMatrixPosition(Pe.matrixWorld);let pe=Z.distanceTo(oe),Ge=ae.projectionMatrix.elements,Ze=Pe.projectionMatrix.elements,st=Ge[14]/(Ge[10]-1),Xt=Ge[14]/(Ge[10]+1),mt=(Ge[9]+1)/Ge[5],Jt=(Ge[9]-1)/Ge[5],N=(Ge[8]-1)/Ge[0],kn=(Ze[8]+1)/Ze[0],ht=st*N,dt=st*kn,ze=pe/(-N+kn),Nt=ze*-N;if(ae.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Nt),$.translateZ(ze),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Ge[10]===-1)$.projectionMatrix.copy(ae.projectionMatrix),$.projectionMatrixInverse.copy(ae.projectionMatrixInverse);else{let He=st+ze,x=Xt+ze,M=ht-Nt,k=dt+(pe-Nt),K=mt*Xt/x*He,ne=Jt*Xt/x*He;$.projectionMatrix.makePerspective(M,k,K,ne,He,x),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function fe($,ae){ae===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(ae.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let ae=$.near,Pe=$.far;E.texture!==null&&(E.depthNear>0&&(ae=E.depthNear),E.depthFar>0&&(Pe=E.depthFar)),A.near=F.near=b.near=ae,A.far=F.far=b.far=Pe,(P!==A.near||B!==A.far)&&(s.updateRenderState({depthNear:A.near,depthFar:A.far}),P=A.near,B=A.far),b.layers.mask=$.layers.mask|2,F.layers.mask=$.layers.mask|4,A.layers.mask=b.layers.mask|F.layers.mask;let pe=$.parent,Ge=A.cameras;fe(A,pe);for(let Ze=0;Ze<Ge.length;Ze++)fe(Ge[Ze],pe);Ge.length===2?q(A,b,F):A.projectionMatrix.copy(b.projectionMatrix),Ae($,A,pe)};function Ae($,ae,Pe){Pe===null?$.matrix.copy(ae.matrixWorld):($.matrix.copy(Pe.matrixWorld),$.matrix.invert(),$.matrix.multiply(ae.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(ae.projectionMatrix),$.projectionMatrixInverse.copy(ae.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=ea*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(u===null&&p===null))return l},this.setFoveation=function($){l=$,u!==null&&(u.fixedFoveation=$),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=$)},this.hasDepthSensing=function(){return E.texture!==null},this.getDepthSensingMesh=function(){return E.getMesh(A)};let Be=null;function it($,ae){if(h=ae.getViewerPose(c||o),g=ae,h!==null){let Pe=h.views;p!==null&&(e.setRenderTargetFramebuffer(v,p.framebuffer),e.setRenderTarget(v));let pe=!1;Pe.length!==A.cameras.length&&(A.cameras.length=0,pe=!0);for(let Ze=0;Ze<Pe.length;Ze++){let st=Pe[Ze],Xt=null;if(p!==null)Xt=p.getViewport(st);else{let Jt=d.getViewSubImage(u,st);Xt=Jt.viewport,Ze===0&&(e.setRenderTargetTextures(v,Jt.colorTexture,u.ignoreDepthValues?void 0:Jt.depthStencilTexture),e.setRenderTarget(v))}let mt=S[Ze];mt===void 0&&(mt=new hn,mt.layers.enable(Ze),mt.viewport=new Ft,S[Ze]=mt),mt.matrix.fromArray(st.transform.matrix),mt.matrix.decompose(mt.position,mt.quaternion,mt.scale),mt.projectionMatrix.fromArray(st.projectionMatrix),mt.projectionMatrixInverse.copy(mt.projectionMatrix).invert(),mt.viewport.set(Xt.x,Xt.y,Xt.width,Xt.height),Ze===0&&(A.matrix.copy(mt.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),pe===!0&&A.cameras.push(mt)}let Ge=s.enabledFeatures;if(Ge&&Ge.includes("depth-sensing")){let Ze=d.getDepthInformation(Pe[0]);Ze&&Ze.isValid&&Ze.texture&&E.init(e,Ze,s.renderState)}}for(let Pe=0;Pe<_.length;Pe++){let pe=y[Pe],Ge=_[Pe];pe!==null&&Ge!==void 0&&Ge.update(pe,ae,c||o)}Be&&Be($,ae),ae.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ae}),g=null}let Lt=new Pu;Lt.setAnimationLoop(it),this.setAnimationLoop=function($){Be=$},this.dispose=function(){}}},us=new fi,vg=new Pt;function _g(n,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,Fu(n)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,v,_,y){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),d(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),u(m,f),f.isMeshPhysicalMaterial&&p(m,f,y)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),E(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,v,_):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===sn&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===sn&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let v=e.get(f),_=v.envMap,y=v.envMapRotation;_&&(m.envMap.value=_,us.copy(y),us.x*=-1,us.y*=-1,us.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(us.y*=-1,us.z*=-1),m.envMapRotation.value.setFromMatrix4(vg.makeRotationFromEuler(us)),m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,v,_){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*v,m.scale.value=_*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function u(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,v){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===sn&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function E(m,f){let v=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Ag(n,e,t,i){let s={},r={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,_){let y=_.program;i.uniformBlockBinding(v,y)}function c(v,_){let y=s[v.id];y===void 0&&(g(v),y=h(v),s[v.id]=y,v.addEventListener("dispose",m));let L=_.program;i.updateUBOMapping(v,L);let C=e.render.frame;r[v.id]!==C&&(u(v),r[v.id]=C)}function h(v){let _=d();v.__bindingPointIndex=_;let y=n.createBuffer(),L=v.__size,C=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,L,C),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,_,y),y}function d(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(v){let _=s[v.id],y=v.uniforms,L=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,_);for(let C=0,b=y.length;C<b;C++){let F=Array.isArray(y[C])?y[C]:[y[C]];for(let S=0,A=F.length;S<A;S++){let P=F[S];if(p(P,C,S,L)===!0){let B=P.__offset,H=Array.isArray(P.value)?P.value:[P.value],W=0;for(let ee=0;ee<H.length;ee++){let Z=H[ee],oe=E(Z);typeof Z=="number"||typeof Z=="boolean"?(P.__data[0]=Z,n.bufferSubData(n.UNIFORM_BUFFER,B+W,P.__data)):Z.isMatrix3?(P.__data[0]=Z.elements[0],P.__data[1]=Z.elements[1],P.__data[2]=Z.elements[2],P.__data[3]=0,P.__data[4]=Z.elements[3],P.__data[5]=Z.elements[4],P.__data[6]=Z.elements[5],P.__data[7]=0,P.__data[8]=Z.elements[6],P.__data[9]=Z.elements[7],P.__data[10]=Z.elements[8],P.__data[11]=0):(Z.toArray(P.__data,W),W+=oe.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,B,P.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(v,_,y,L){let C=v.value,b=_+"_"+y;if(L[b]===void 0)return typeof C=="number"||typeof C=="boolean"?L[b]=C:L[b]=C.clone(),!0;{let F=L[b];if(typeof C=="number"||typeof C=="boolean"){if(F!==C)return L[b]=C,!0}else if(F.equals(C)===!1)return F.copy(C),!0}return!1}function g(v){let _=v.uniforms,y=0,L=16;for(let b=0,F=_.length;b<F;b++){let S=Array.isArray(_[b])?_[b]:[_[b]];for(let A=0,P=S.length;A<P;A++){let B=S[A],H=Array.isArray(B.value)?B.value:[B.value];for(let W=0,ee=H.length;W<ee;W++){let Z=H[W],oe=E(Z),q=y%L,fe=q%oe.boundary,Ae=q+fe;y+=fe,Ae!==0&&L-Ae<oe.storage&&(y+=L-Ae),B.__data=new Float32Array(oe.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=y,y+=oe.storage}}}let C=y%L;return C>0&&(y+=L-C),v.__size=y,v.__cache={},this}function E(v){let _={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(_.boundary=4,_.storage=4):v.isVector2?(_.boundary=8,_.storage=8):v.isVector3||v.isColor?(_.boundary=16,_.storage=12):v.isVector4?(_.boundary=16,_.storage=16):v.isMatrix3?(_.boundary=48,_.storage=48):v.isMatrix4?(_.boundary=64,_.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),_}function m(v){let _=v.target;_.removeEventListener("dispose",m);let y=o.indexOf(_.__bindingPointIndex);o.splice(y,1),n.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function f(){for(let v in s)n.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:l,update:c,dispose:f}}var da=class{constructor(e={}){let{canvas:t=w0(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:u=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;let g=new Uint32Array(4),E=new Int32Array(4),m=null,f=null,v=[],_=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Vt,this.toneMapping=ui,this.toneMappingExposure=1;let y=this,L=!1,C=0,b=0,F=null,S=-1,A=null,P=new Ft,B=new Ft,H=null,W=new ce(0),ee=0,Z=t.width,oe=t.height,q=1,fe=null,Ae=null,Be=new Ft(0,0,Z,oe),it=new Ft(0,0,Z,oe),Lt=!1,$=new Zr,ae=!1,Pe=!1,pe=new Pt,Ge=new Pt,Ze=new I,st=new Ft,Xt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},mt=!1;function Jt(){return F===null?q:1}let N=i;function kn(T,U){return t.getContext(T,U)}try{let T={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${dh}`),t.addEventListener("webglcontextlost",j,!1),t.addEventListener("webglcontextrestored",ve,!1),t.addEventListener("webglcontextcreationerror",ge,!1),N===null){let U="webgl2";if(N=kn(U,T),N===null)throw kn(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let ht,dt,ze,Nt,He,x,M,k,K,ne,J,De,me,Me,gt,se,Se,ke,We,Te,ut,et,Ut,D;function ue(){ht=new N1(N),ht.init(),et=new mg(N,ht),dt=new P1(N,ht,e,et),ze=new ug(N,ht),dt.reverseDepthBuffer&&u&&ze.buffers.depth.setReversed(!0),Nt=new z1(N),He=new j2,x=new pg(N,ht,ze,He,dt,et,Nt),M=new L1(y),k=new O1(y),K=new Y0(N),Ut=new C1(N,K),ne=new B1(N,K,Nt,Ut),J=new G1(N,ne,K,Nt),We=new k1(N,dt,x),se=new I1(He),De=new K2(y,M,k,ht,dt,Ut,se),me=new _g(y,He),Me=new tg,gt=new ag(ht),ke=new x1(y,M,k,ze,J,p,l),Se=new hg(y,J,dt),D=new Ag(N,Nt,dt,ze),Te=new F1(N,ht,Nt),ut=new H1(N,ht,Nt),Nt.programs=De.programs,y.capabilities=dt,y.extensions=ht,y.properties=He,y.renderLists=Me,y.shadowMap=Se,y.state=ze,y.info=Nt}ue();let X=new zc(y,N);this.xr=X,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let T=ht.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=ht.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(T){T!==void 0&&(q=T,this.setSize(Z,oe,!1))},this.getSize=function(T){return T.set(Z,oe)},this.setSize=function(T,U,G=!0){if(X.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Z=T,oe=U,t.width=Math.floor(T*q),t.height=Math.floor(U*q),G===!0&&(t.style.width=T+"px",t.style.height=U+"px"),this.setViewport(0,0,T,U)},this.getDrawingBufferSize=function(T){return T.set(Z*q,oe*q).floor()},this.setDrawingBufferSize=function(T,U,G){Z=T,oe=U,q=G,t.width=Math.floor(T*G),t.height=Math.floor(U*G),this.setViewport(0,0,T,U)},this.getCurrentViewport=function(T){return T.copy(P)},this.getViewport=function(T){return T.copy(Be)},this.setViewport=function(T,U,G,V){T.isVector4?Be.set(T.x,T.y,T.z,T.w):Be.set(T,U,G,V),ze.viewport(P.copy(Be).multiplyScalar(q).round())},this.getScissor=function(T){return T.copy(it)},this.setScissor=function(T,U,G,V){T.isVector4?it.set(T.x,T.y,T.z,T.w):it.set(T,U,G,V),ze.scissor(B.copy(it).multiplyScalar(q).round())},this.getScissorTest=function(){return Lt},this.setScissorTest=function(T){ze.setScissorTest(Lt=T)},this.setOpaqueSort=function(T){fe=T},this.setTransparentSort=function(T){Ae=T},this.getClearColor=function(T){return T.copy(ke.getClearColor())},this.setClearColor=function(){ke.setClearColor.apply(ke,arguments)},this.getClearAlpha=function(){return ke.getClearAlpha()},this.setClearAlpha=function(){ke.setClearAlpha.apply(ke,arguments)},this.clear=function(T=!0,U=!0,G=!0){let V=0;if(T){let O=!1;if(F!==null){let re=F.texture.format;O=re===vh||re===yh||re===Eh}if(O){let re=F.texture.type,Ee=re===Ci||re===Fi||re===Yr||re===or||re===ph||re===mh,xe=ke.getClearColor(),Ce=ke.getClearAlpha(),qe=xe.r,Qe=xe.g,Fe=xe.b;Ee?(g[0]=qe,g[1]=Qe,g[2]=Fe,g[3]=Ce,N.clearBufferuiv(N.COLOR,0,g)):(E[0]=qe,E[1]=Qe,E[2]=Fe,E[3]=Ce,N.clearBufferiv(N.COLOR,0,E))}else V|=N.COLOR_BUFFER_BIT}U&&(V|=N.DEPTH_BUFFER_BIT),G&&(V|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",j,!1),t.removeEventListener("webglcontextrestored",ve,!1),t.removeEventListener("webglcontextcreationerror",ge,!1),Me.dispose(),gt.dispose(),He.dispose(),M.dispose(),k.dispose(),J.dispose(),Ut.dispose(),D.dispose(),De.dispose(),X.dispose(),X.removeEventListener("sessionstart",Qh),X.removeEventListener("sessionend",Kh),os.stop()};function j(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function ve(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;let T=Nt.autoReset,U=Se.enabled,G=Se.autoUpdate,V=Se.needsUpdate,O=Se.type;ue(),Nt.autoReset=T,Se.enabled=U,Se.autoUpdate=G,Se.needsUpdate=V,Se.type=O}function ge(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function $e(T){let U=T.target;U.removeEventListener("dispose",$e),Yt(U)}function Yt(T){fn(T),He.remove(T)}function fn(T){let U=He.get(T).programs;U!==void 0&&(U.forEach(function(G){De.releaseProgram(G)}),T.isShaderMaterial&&De.releaseShaderCache(T))}this.renderBufferDirect=function(T,U,G,V,O,re){U===null&&(U=Xt);let Ee=O.isMesh&&O.matrixWorld.determinant()<0,xe=Nf(T,U,G,V,O);ze.setMaterial(V,Ee);let Ce=G.index,qe=1;if(V.wireframe===!0){if(Ce=ne.getWireframeAttribute(G),Ce===void 0)return;qe=2}let Qe=G.drawRange,Fe=G.attributes.position,yt=Qe.start*qe,Ot=(Qe.start+Qe.count)*qe;re!==null&&(yt=Math.max(yt,re.start*qe),Ot=Math.min(Ot,(re.start+re.count)*qe)),Ce!==null?(yt=Math.max(yt,0),Ot=Math.min(Ot,Ce.count)):Fe!=null&&(yt=Math.max(yt,0),Ot=Math.min(Ot,Fe.count));let Bt=Ot-yt;if(Bt<0||Bt===1/0)return;Ut.setup(O,V,xe,G,Ce);let bn,Mt=Te;if(Ce!==null&&(bn=K.get(Ce),Mt=ut,Mt.setIndex(bn)),O.isMesh)V.wireframe===!0?(ze.setLineWidth(V.wireframeLinewidth*Jt()),Mt.setMode(N.LINES)):Mt.setMode(N.TRIANGLES);else if(O.isLine){let Ue=V.linewidth;Ue===void 0&&(Ue=1),ze.setLineWidth(Ue*Jt()),O.isLineSegments?Mt.setMode(N.LINES):O.isLineLoop?Mt.setMode(N.LINE_LOOP):Mt.setMode(N.LINE_STRIP)}else O.isPoints?Mt.setMode(N.POINTS):O.isSprite&&Mt.setMode(N.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)Mt.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(ht.get("WEBGL_multi_draw"))Mt.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{let Ue=O._multiDrawStarts,vi=O._multiDrawCounts,St=O._multiDrawCount,Jn=Ce?K.get(Ce).bytesPerElement:1,Ls=He.get(V).currentProgram.getUniforms();for(let Un=0;Un<St;Un++)Ls.setValue(N,"_gl_DrawID",Un),Mt.render(Ue[Un]/Jn,vi[Un])}else if(O.isInstancedMesh)Mt.renderInstances(yt,Bt,O.count);else if(G.isInstancedBufferGeometry){let Ue=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,vi=Math.min(G.instanceCount,Ue);Mt.renderInstances(yt,Bt,vi)}else Mt.render(yt,Bt)};function wt(T,U,G){T.transparent===!0&&T.side===Dt&&T.forceSinglePass===!1?(T.side=sn,T.needsUpdate=!0,Eo(T,U,G),T.side=Ji,T.needsUpdate=!0,Eo(T,U,G),T.side=Dt):Eo(T,U,G)}this.compile=function(T,U,G=null){G===null&&(G=T),f=gt.get(G),f.init(U),_.push(f),G.traverseVisible(function(O){O.isLight&&O.layers.test(U.layers)&&(f.pushLight(O),O.castShadow&&f.pushShadow(O))}),T!==G&&T.traverseVisible(function(O){O.isLight&&O.layers.test(U.layers)&&(f.pushLight(O),O.castShadow&&f.pushShadow(O))}),f.setupLights();let V=new Set;return T.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;let re=O.material;if(re)if(Array.isArray(re))for(let Ee=0;Ee<re.length;Ee++){let xe=re[Ee];wt(xe,G,O),V.add(xe)}else wt(re,G,O),V.add(re)}),_.pop(),f=null,V},this.compileAsync=function(T,U,G=null){let V=this.compile(T,U,G);return new Promise(O=>{function re(){if(V.forEach(function(Ee){He.get(Ee).currentProgram.isReady()&&V.delete(Ee)}),V.size===0){O(T);return}setTimeout(re,10)}ht.get("KHR_parallel_shader_compile")!==null?re():setTimeout(re,10)})};let Zn=null;function yi(T){Zn&&Zn(T)}function Qh(){os.stop()}function Kh(){os.start()}let os=new Pu;os.setAnimationLoop(yi),typeof self<"u"&&os.setContext(self),this.setAnimationLoop=function(T){Zn=T,X.setAnimationLoop(T),T===null?os.stop():os.start()},X.addEventListener("sessionstart",Qh),X.addEventListener("sessionend",Kh),this.render=function(T,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),X.enabled===!0&&X.isPresenting===!0&&(X.cameraAutoUpdate===!0&&X.updateCamera(U),U=X.getCamera()),T.isScene===!0&&T.onBeforeRender(y,T,U,F),f=gt.get(T,_.length),f.init(U),_.push(f),Ge.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),$.setFromProjectionMatrix(Ge),Pe=this.localClippingEnabled,ae=se.init(this.clippingPlanes,Pe),m=Me.get(T,v.length),m.init(),v.push(m),X.enabled===!0&&X.isPresenting===!0){let re=y.xr.getDepthSensingMesh();re!==null&&il(re,U,-1/0,y.sortObjects)}il(T,U,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(fe,Ae),mt=X.enabled===!1||X.isPresenting===!1||X.hasDepthSensing()===!1,mt&&ke.addToRenderList(m,T),this.info.render.frame++,ae===!0&&se.beginShadows();let G=f.state.shadowsArray;Se.render(G,T,U),ae===!0&&se.endShadows(),this.info.autoReset===!0&&this.info.reset();let V=m.opaque,O=m.transmissive;if(f.setupLights(),U.isArrayCamera){let re=U.cameras;if(O.length>0)for(let Ee=0,xe=re.length;Ee<xe;Ee++){let Ce=re[Ee];ed(V,O,T,Ce)}mt&&ke.render(T);for(let Ee=0,xe=re.length;Ee<xe;Ee++){let Ce=re[Ee];jh(m,T,Ce,Ce.viewport)}}else O.length>0&&ed(V,O,T,U),mt&&ke.render(T),jh(m,T,U);F!==null&&(x.updateMultisampleRenderTarget(F),x.updateRenderTargetMipmap(F)),T.isScene===!0&&T.onAfterRender(y,T,U),Ut.resetDefaultState(),S=-1,A=null,_.pop(),_.length>0?(f=_[_.length-1],ae===!0&&se.setGlobalState(y.clippingPlanes,f.state.camera)):f=null,v.pop(),v.length>0?m=v[v.length-1]:m=null};function il(T,U,G,V){if(T.visible===!1)return;if(T.layers.test(U.layers)){if(T.isGroup)G=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(U);else if(T.isLight)f.pushLight(T),T.castShadow&&f.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||$.intersectsSprite(T)){V&&st.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Ge);let Ee=J.update(T),xe=T.material;xe.visible&&m.push(T,Ee,xe,G,st.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||$.intersectsObject(T))){let Ee=J.update(T),xe=T.material;if(V&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),st.copy(T.boundingSphere.center)):(Ee.boundingSphere===null&&Ee.computeBoundingSphere(),st.copy(Ee.boundingSphere.center)),st.applyMatrix4(T.matrixWorld).applyMatrix4(Ge)),Array.isArray(xe)){let Ce=Ee.groups;for(let qe=0,Qe=Ce.length;qe<Qe;qe++){let Fe=Ce[qe],yt=xe[Fe.materialIndex];yt&&yt.visible&&m.push(T,Ee,yt,G,st.z,Fe)}}else xe.visible&&m.push(T,Ee,xe,G,st.z,null)}}let re=T.children;for(let Ee=0,xe=re.length;Ee<xe;Ee++)il(re[Ee],U,G,V)}function jh(T,U,G,V){let O=T.opaque,re=T.transmissive,Ee=T.transparent;f.setupLightsView(G),ae===!0&&se.setGlobalState(y.clippingPlanes,G),V&&ze.viewport(P.copy(V)),O.length>0&&go(O,U,G),re.length>0&&go(re,U,G),Ee.length>0&&go(Ee,U,G),ze.buffers.depth.setTest(!0),ze.buffers.depth.setMask(!0),ze.buffers.color.setMask(!0),ze.setPolygonOffset(!1)}function ed(T,U,G,V){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[V.id]===void 0&&(f.state.transmissionRenderTarget[V.id]=new on(1,1,{generateMipmaps:!0,type:ht.has("EXT_color_buffer_half_float")||ht.has("EXT_color_buffer_float")?Cn:Ci,minFilter:Es,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Et.workingColorSpace}));let re=f.state.transmissionRenderTarget[V.id],Ee=V.viewport||P;re.setSize(Ee.z,Ee.w);let xe=y.getRenderTarget();y.setRenderTarget(re),y.getClearColor(W),ee=y.getClearAlpha(),ee<1&&y.setClearColor(16777215,.5),y.clear(),mt&&ke.render(G);let Ce=y.toneMapping;y.toneMapping=ui;let qe=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),f.setupLightsView(V),ae===!0&&se.setGlobalState(y.clippingPlanes,V),go(T,G,V),x.updateMultisampleRenderTarget(re),x.updateRenderTargetMipmap(re),ht.has("WEBGL_multisampled_render_to_texture")===!1){let Qe=!1;for(let Fe=0,yt=U.length;Fe<yt;Fe++){let Ot=U[Fe],Bt=Ot.object,bn=Ot.geometry,Mt=Ot.material,Ue=Ot.group;if(Mt.side===Dt&&Bt.layers.test(V.layers)){let vi=Mt.side;Mt.side=sn,Mt.needsUpdate=!0,td(Bt,G,V,bn,Mt,Ue),Mt.side=vi,Mt.needsUpdate=!0,Qe=!0}}Qe===!0&&(x.updateMultisampleRenderTarget(re),x.updateRenderTargetMipmap(re))}y.setRenderTarget(xe),y.setClearColor(W,ee),qe!==void 0&&(V.viewport=qe),y.toneMapping=Ce}function go(T,U,G){let V=U.isScene===!0?U.overrideMaterial:null;for(let O=0,re=T.length;O<re;O++){let Ee=T[O],xe=Ee.object,Ce=Ee.geometry,qe=V===null?Ee.material:V,Qe=Ee.group;xe.layers.test(G.layers)&&td(xe,U,G,Ce,qe,Qe)}}function td(T,U,G,V,O,re){T.onBeforeRender(y,U,G,V,O,re),T.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),O.onBeforeRender(y,U,G,V,T,re),O.transparent===!0&&O.side===Dt&&O.forceSinglePass===!1?(O.side=sn,O.needsUpdate=!0,y.renderBufferDirect(G,U,V,O,T,re),O.side=Ji,O.needsUpdate=!0,y.renderBufferDirect(G,U,V,O,T,re),O.side=Dt):y.renderBufferDirect(G,U,V,O,T,re),T.onAfterRender(y,U,G,V,O,re)}function Eo(T,U,G){U.isScene!==!0&&(U=Xt);let V=He.get(T),O=f.state.lights,re=f.state.shadowsArray,Ee=O.state.version,xe=De.getParameters(T,O.state,re,U,G),Ce=De.getProgramCacheKey(xe),qe=V.programs;V.environment=T.isMeshStandardMaterial?U.environment:null,V.fog=U.fog,V.envMap=(T.isMeshStandardMaterial?k:M).get(T.envMap||V.environment),V.envMapRotation=V.environment!==null&&T.envMap===null?U.environmentRotation:T.envMapRotation,qe===void 0&&(T.addEventListener("dispose",$e),qe=new Map,V.programs=qe);let Qe=qe.get(Ce);if(Qe!==void 0){if(V.currentProgram===Qe&&V.lightsStateVersion===Ee)return id(T,xe),Qe}else xe.uniforms=De.getUniforms(T),T.onBeforeCompile(xe,y),Qe=De.acquireProgram(xe,Ce),qe.set(Ce,Qe),V.uniforms=xe.uniforms;let Fe=V.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Fe.clippingPlanes=se.uniform),id(T,xe),V.needsLights=Hf(T),V.lightsStateVersion=Ee,V.needsLights&&(Fe.ambientLightColor.value=O.state.ambient,Fe.lightProbe.value=O.state.probe,Fe.directionalLights.value=O.state.directional,Fe.directionalLightShadows.value=O.state.directionalShadow,Fe.spotLights.value=O.state.spot,Fe.spotLightShadows.value=O.state.spotShadow,Fe.rectAreaLights.value=O.state.rectArea,Fe.ltc_1.value=O.state.rectAreaLTC1,Fe.ltc_2.value=O.state.rectAreaLTC2,Fe.pointLights.value=O.state.point,Fe.pointLightShadows.value=O.state.pointShadow,Fe.hemisphereLights.value=O.state.hemi,Fe.directionalShadowMap.value=O.state.directionalShadowMap,Fe.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Fe.spotShadowMap.value=O.state.spotShadowMap,Fe.spotLightMatrix.value=O.state.spotLightMatrix,Fe.spotLightMap.value=O.state.spotLightMap,Fe.pointShadowMap.value=O.state.pointShadowMap,Fe.pointShadowMatrix.value=O.state.pointShadowMatrix),V.currentProgram=Qe,V.uniformsList=null,Qe}function nd(T){if(T.uniformsList===null){let U=T.currentProgram.getUniforms();T.uniformsList=nr.seqWithValue(U.seq,T.uniforms)}return T.uniformsList}function id(T,U){let G=He.get(T);G.outputColorSpace=U.outputColorSpace,G.batching=U.batching,G.batchingColor=U.batchingColor,G.instancing=U.instancing,G.instancingColor=U.instancingColor,G.instancingMorph=U.instancingMorph,G.skinning=U.skinning,G.morphTargets=U.morphTargets,G.morphNormals=U.morphNormals,G.morphColors=U.morphColors,G.morphTargetsCount=U.morphTargetsCount,G.numClippingPlanes=U.numClippingPlanes,G.numIntersection=U.numClipIntersection,G.vertexAlphas=U.vertexAlphas,G.vertexTangents=U.vertexTangents,G.toneMapping=U.toneMapping}function Nf(T,U,G,V,O){U.isScene!==!0&&(U=Xt),x.resetTextureUnits();let re=U.fog,Ee=V.isMeshStandardMaterial?U.environment:null,xe=F===null?y.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:es,Ce=(V.isMeshStandardMaterial?k:M).get(V.envMap||Ee),qe=V.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Qe=!!G.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Fe=!!G.morphAttributes.position,yt=!!G.morphAttributes.normal,Ot=!!G.morphAttributes.color,Bt=ui;V.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(Bt=y.toneMapping);let bn=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Mt=bn!==void 0?bn.length:0,Ue=He.get(V),vi=f.state.lights;if(ae===!0&&(Pe===!0||T!==A)){let Gn=T===A&&V.id===S;se.setState(V,T,Gn)}let St=!1;V.version===Ue.__version?(Ue.needsLights&&Ue.lightsStateVersion!==vi.state.version||Ue.outputColorSpace!==xe||O.isBatchedMesh&&Ue.batching===!1||!O.isBatchedMesh&&Ue.batching===!0||O.isBatchedMesh&&Ue.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Ue.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Ue.instancing===!1||!O.isInstancedMesh&&Ue.instancing===!0||O.isSkinnedMesh&&Ue.skinning===!1||!O.isSkinnedMesh&&Ue.skinning===!0||O.isInstancedMesh&&Ue.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Ue.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Ue.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Ue.instancingMorph===!1&&O.morphTexture!==null||Ue.envMap!==Ce||V.fog===!0&&Ue.fog!==re||Ue.numClippingPlanes!==void 0&&(Ue.numClippingPlanes!==se.numPlanes||Ue.numIntersection!==se.numIntersection)||Ue.vertexAlphas!==qe||Ue.vertexTangents!==Qe||Ue.morphTargets!==Fe||Ue.morphNormals!==yt||Ue.morphColors!==Ot||Ue.toneMapping!==Bt||Ue.morphTargetsCount!==Mt)&&(St=!0):(St=!0,Ue.__version=V.version);let Jn=Ue.currentProgram;St===!0&&(Jn=Eo(V,U,O));let Ls=!1,Un=!1,Fr=!1,Ht=Jn.getUniforms(),oi=Ue.uniforms;if(ze.useProgram(Jn.program)&&(Ls=!0,Un=!0,Fr=!0),V.id!==S&&(S=V.id,Un=!0),Ls||A!==T){ze.buffers.depth.getReversed()?(pe.copy(T.projectionMatrix),x0(pe),C0(pe),Ht.setValue(N,"projectionMatrix",pe)):Ht.setValue(N,"projectionMatrix",T.projectionMatrix),Ht.setValue(N,"viewMatrix",T.matrixWorldInverse);let Ni=Ht.map.cameraPosition;Ni!==void 0&&Ni.setValue(N,Ze.setFromMatrixPosition(T.matrixWorld)),dt.logarithmicDepthBuffer&&Ht.setValue(N,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&Ht.setValue(N,"isOrthographic",T.isOrthographicCamera===!0),A!==T&&(A=T,Un=!0,Fr=!0)}if(O.isSkinnedMesh){Ht.setOptional(N,O,"bindMatrix"),Ht.setOptional(N,O,"bindMatrixInverse");let Gn=O.skeleton;Gn&&(Gn.boneTexture===null&&Gn.computeBoneTexture(),Ht.setValue(N,"boneTexture",Gn.boneTexture,x))}O.isBatchedMesh&&(Ht.setOptional(N,O,"batchingTexture"),Ht.setValue(N,"batchingTexture",O._matricesTexture,x),Ht.setOptional(N,O,"batchingIdTexture"),Ht.setValue(N,"batchingIdTexture",O._indirectTexture,x),Ht.setOptional(N,O,"batchingColorTexture"),O._colorsTexture!==null&&Ht.setValue(N,"batchingColorTexture",O._colorsTexture,x));let Pr=G.morphAttributes;if((Pr.position!==void 0||Pr.normal!==void 0||Pr.color!==void 0)&&We.update(O,G,Jn),(Un||Ue.receiveShadow!==O.receiveShadow)&&(Ue.receiveShadow=O.receiveShadow,Ht.setValue(N,"receiveShadow",O.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(oi.envMap.value=Ce,oi.flipEnvMap.value=Ce.isCubeTexture&&Ce.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&U.environment!==null&&(oi.envMapIntensity.value=U.environmentIntensity),Un&&(Ht.setValue(N,"toneMappingExposure",y.toneMappingExposure),Ue.needsLights&&Bf(oi,Fr),re&&V.fog===!0&&me.refreshFogUniforms(oi,re),me.refreshMaterialUniforms(oi,V,q,oe,f.state.transmissionRenderTarget[T.id]),nr.upload(N,nd(Ue),oi,x)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(nr.upload(N,nd(Ue),oi,x),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&Ht.setValue(N,"center",O.center),Ht.setValue(N,"modelViewMatrix",O.modelViewMatrix),Ht.setValue(N,"normalMatrix",O.normalMatrix),Ht.setValue(N,"modelMatrix",O.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){let Gn=V.uniformsGroups;for(let Ni=0,Bi=Gn.length;Ni<Bi;Ni++){let sd=Gn[Ni];D.update(sd,Jn),D.bind(sd,Jn)}}return Jn}function Bf(T,U){T.ambientLightColor.needsUpdate=U,T.lightProbe.needsUpdate=U,T.directionalLights.needsUpdate=U,T.directionalLightShadows.needsUpdate=U,T.pointLights.needsUpdate=U,T.pointLightShadows.needsUpdate=U,T.spotLights.needsUpdate=U,T.spotLightShadows.needsUpdate=U,T.rectAreaLights.needsUpdate=U,T.hemisphereLights.needsUpdate=U}function Hf(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(T,U,G){He.get(T.texture).__webglTexture=U,He.get(T.depthTexture).__webglTexture=G;let V=He.get(T);V.__hasExternalTextures=!0,V.__autoAllocateDepthBuffer=G===void 0,V.__autoAllocateDepthBuffer||ht.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,U){let G=He.get(T);G.__webglFramebuffer=U,G.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(T,U=0,G=0){F=T,C=U,b=G;let V=!0,O=null,re=!1,Ee=!1;if(T){let Ce=He.get(T);if(Ce.__useDefaultFramebuffer!==void 0)ze.bindFramebuffer(N.FRAMEBUFFER,null),V=!1;else if(Ce.__webglFramebuffer===void 0)x.setupRenderTarget(T);else if(Ce.__hasExternalTextures)x.rebindTextures(T,He.get(T.texture).__webglTexture,He.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let Fe=T.depthTexture;if(Ce.__boundDepthTexture!==Fe){if(Fe!==null&&He.has(Fe)&&(T.width!==Fe.image.width||T.height!==Fe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");x.setupDepthRenderbuffer(T)}}let qe=T.texture;(qe.isData3DTexture||qe.isDataArrayTexture||qe.isCompressedArrayTexture)&&(Ee=!0);let Qe=He.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Qe[U])?O=Qe[U][G]:O=Qe[U],re=!0):T.samples>0&&x.useMultisampledRTT(T)===!1?O=He.get(T).__webglMultisampledFramebuffer:Array.isArray(Qe)?O=Qe[G]:O=Qe,P.copy(T.viewport),B.copy(T.scissor),H=T.scissorTest}else P.copy(Be).multiplyScalar(q).floor(),B.copy(it).multiplyScalar(q).floor(),H=Lt;if(ze.bindFramebuffer(N.FRAMEBUFFER,O)&&V&&ze.drawBuffers(T,O),ze.viewport(P),ze.scissor(B),ze.setScissorTest(H),re){let Ce=He.get(T.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+U,Ce.__webglTexture,G)}else if(Ee){let Ce=He.get(T.texture),qe=U||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ce.__webglTexture,G||0,qe)}S=-1},this.readRenderTargetPixels=function(T,U,G,V,O,re,Ee){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xe=He.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ee!==void 0&&(xe=xe[Ee]),xe){ze.bindFramebuffer(N.FRAMEBUFFER,xe);try{let Ce=T.texture,qe=Ce.format,Qe=Ce.type;if(!dt.textureFormatReadable(qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!dt.textureTypeReadable(Qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=T.width-V&&G>=0&&G<=T.height-O&&N.readPixels(U,G,V,O,et.convert(qe),et.convert(Qe),re)}finally{let Ce=F!==null?He.get(F).__webglFramebuffer:null;ze.bindFramebuffer(N.FRAMEBUFFER,Ce)}}},this.readRenderTargetPixelsAsync=async function(T,U,G,V,O,re,Ee){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xe=He.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ee!==void 0&&(xe=xe[Ee]),xe){let Ce=T.texture,qe=Ce.format,Qe=Ce.type;if(!dt.textureFormatReadable(qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!dt.textureTypeReadable(Qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=T.width-V&&G>=0&&G<=T.height-O){ze.bindFramebuffer(N.FRAMEBUFFER,xe);let Fe=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,Fe),N.bufferData(N.PIXEL_PACK_BUFFER,re.byteLength,N.STREAM_READ),N.readPixels(U,G,V,O,et.convert(qe),et.convert(Qe),0);let yt=F!==null?He.get(F).__webglFramebuffer:null;ze.bindFramebuffer(N.FRAMEBUFFER,yt);let Ot=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await R0(N,Ot,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,Fe),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,re),N.deleteBuffer(Fe),N.deleteSync(Ot),re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,U=null,G=0){T.isTexture!==!0&&(Gr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,T=arguments[1]);let V=Math.pow(2,-G),O=Math.floor(T.image.width*V),re=Math.floor(T.image.height*V),Ee=U!==null?U.x:0,xe=U!==null?U.y:0;x.setTexture2D(T,0),N.copyTexSubImage2D(N.TEXTURE_2D,G,0,0,Ee,xe,O,re),ze.unbindTexture()},this.copyTextureToTexture=function(T,U,G=null,V=null,O=0){T.isTexture!==!0&&(Gr("WebGLRenderer: copyTextureToTexture function signature has changed."),V=arguments[0]||null,T=arguments[1],U=arguments[2],O=arguments[3]||0,G=null);let re,Ee,xe,Ce,qe,Qe,Fe,yt,Ot,Bt=T.isCompressedTexture?T.mipmaps[O]:T.image;G!==null?(re=G.max.x-G.min.x,Ee=G.max.y-G.min.y,xe=G.isBox3?G.max.z-G.min.z:1,Ce=G.min.x,qe=G.min.y,Qe=G.isBox3?G.min.z:0):(re=Bt.width,Ee=Bt.height,xe=Bt.depth||1,Ce=0,qe=0,Qe=0),V!==null?(Fe=V.x,yt=V.y,Ot=V.z):(Fe=0,yt=0,Ot=0);let bn=et.convert(U.format),Mt=et.convert(U.type),Ue;U.isData3DTexture?(x.setTexture3D(U,0),Ue=N.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(x.setTexture2DArray(U,0),Ue=N.TEXTURE_2D_ARRAY):(x.setTexture2D(U,0),Ue=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,U.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,U.unpackAlignment);let vi=N.getParameter(N.UNPACK_ROW_LENGTH),St=N.getParameter(N.UNPACK_IMAGE_HEIGHT),Jn=N.getParameter(N.UNPACK_SKIP_PIXELS),Ls=N.getParameter(N.UNPACK_SKIP_ROWS),Un=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,Bt.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Bt.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Ce),N.pixelStorei(N.UNPACK_SKIP_ROWS,qe),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Qe);let Fr=T.isDataArrayTexture||T.isData3DTexture,Ht=U.isDataArrayTexture||U.isData3DTexture;if(T.isRenderTargetTexture||T.isDepthTexture){let oi=He.get(T),Pr=He.get(U),Gn=He.get(oi.__renderTarget),Ni=He.get(Pr.__renderTarget);ze.bindFramebuffer(N.READ_FRAMEBUFFER,Gn.__webglFramebuffer),ze.bindFramebuffer(N.DRAW_FRAMEBUFFER,Ni.__webglFramebuffer);for(let Bi=0;Bi<xe;Bi++)Fr&&N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,He.get(T).__webglTexture,O,Qe+Bi),T.isDepthTexture?(Ht&&N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,He.get(U).__webglTexture,O,Ot+Bi),N.blitFramebuffer(Ce,qe,re,Ee,Fe,yt,re,Ee,N.DEPTH_BUFFER_BIT,N.NEAREST)):Ht?N.copyTexSubImage3D(Ue,O,Fe,yt,Ot+Bi,Ce,qe,re,Ee):N.copyTexSubImage2D(Ue,O,Fe,yt,Ot+Bi,Ce,qe,re,Ee);ze.bindFramebuffer(N.READ_FRAMEBUFFER,null),ze.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else Ht?T.isDataTexture||T.isData3DTexture?N.texSubImage3D(Ue,O,Fe,yt,Ot,re,Ee,xe,bn,Mt,Bt.data):U.isCompressedArrayTexture?N.compressedTexSubImage3D(Ue,O,Fe,yt,Ot,re,Ee,xe,bn,Bt.data):N.texSubImage3D(Ue,O,Fe,yt,Ot,re,Ee,xe,bn,Mt,Bt):T.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,O,Fe,yt,re,Ee,bn,Mt,Bt.data):T.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,O,Fe,yt,Bt.width,Bt.height,bn,Bt.data):N.texSubImage2D(N.TEXTURE_2D,O,Fe,yt,re,Ee,bn,Mt,Bt);N.pixelStorei(N.UNPACK_ROW_LENGTH,vi),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,St),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Jn),N.pixelStorei(N.UNPACK_SKIP_ROWS,Ls),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Un),O===0&&U.generateMipmaps&&N.generateMipmap(Ue),ze.unbindTexture()},this.copyTextureToTexture3D=function(T,U,G=null,V=null,O=0){return T.isTexture!==!0&&(Gr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),G=arguments[0]||null,V=arguments[1]||null,T=arguments[2],U=arguments[3],O=arguments[4]||0),Gr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,U,G,V,O)},this.initRenderTarget=function(T){He.get(T).__webglFramebuffer===void 0&&x.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?x.setTextureCube(T,0):T.isData3DTexture?x.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?x.setTexture2DArray(T,0):x.setTexture2D(T,0),ze.unbindTexture()},this.resetState=function(){C=0,b=0,F=null,ze.reset(),Ut.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ri}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=Et._getDrawingBufferColorSpace(e),t.unpackColorSpace=Et._getUnpackColorSpace()}},Re=class n{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new ce(e),this.density=t}clone(){return new n(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var ua=class extends $t{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new fi,this.environmentIntensity=1,this.environmentRotation=new fi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},kc=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=bc,this.updateRanges=[],this.version=0,this.uuid=Zi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Zi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Zi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},_n=new I,fa=class n{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)_n.fromBufferAttribute(this,t),_n.applyMatrix4(e),this.setXYZ(t,_n.x,_n.y,_n.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)_n.fromBufferAttribute(this,t),_n.applyNormalMatrix(e),this.setXYZ(t,_n.x,_n.y,_n.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)_n.fromBufferAttribute(this,t),_n.transformDirection(e),this.setXYZ(t,_n.x,_n.y,_n.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=li(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ct(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=Ct(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=li(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=li(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=li(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=li(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ct(t,this.array),i=Ct(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ct(t,this.array),i=Ct(i,this.array),s=Ct(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ct(t,this.array),i=Ct(i,this.array),s=Ct(s,this.array),r=Ct(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new rn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},dr=class extends Ii{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new ce(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Zs,Or=new I,Js=new I,$s=new I,Qs=new he,Nr=new he,Ou=new Pt,Ho=new I,Br=new I,zo=new I,iu=new he,Dl=new he,su=new he,Jr=class extends $t{constructor(e=new dr){if(super(),this.isSprite=!0,this.type="Sprite",Zs===void 0){Zs=new Qt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new kc(t,5);Zs.setIndex([0,1,2,0,2,3]),Zs.setAttribute("position",new fa(i,3,0,!1)),Zs.setAttribute("uv",new fa(i,2,3,!1))}this.geometry=Zs,this.material=e,this.center=new he(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Js.setFromMatrixScale(this.matrixWorld),Ou.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),$s.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Js.multiplyScalar(-$s.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let o=this.center;ko(Ho.set(-.5,-.5,0),$s,o,Js,s,r),ko(Br.set(.5,-.5,0),$s,o,Js,s,r),ko(zo.set(.5,.5,0),$s,o,Js,s,r),iu.set(0,0),Dl.set(1,0),su.set(1,1);let a=e.ray.intersectTriangle(Ho,Br,zo,!1,Or);if(a===null&&(ko(Br.set(-.5,.5,0),$s,o,Js,s,r),Dl.set(0,1),a=e.ray.intersectTriangle(Ho,zo,Br,!1,Or),a===null))return;let l=e.ray.origin.distanceTo(Or);l<e.near||l>e.far||t.push({distance:l,point:Or.clone(),uv:qi.getInterpolation(Or,Ho,Br,zo,iu,Dl,su,new he),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function ko(n,e,t,i,s,r){Qs.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(Nr.x=r*Qs.x-s*Qs.y,Nr.y=s*Qs.x+r*Qs.y):Nr.copy(Qs),n.copy(e),n.x+=Nr.x,n.y+=Nr.y,n.applyMatrix4(Ou)}var Gc=class extends Rn{constructor(e=null,t=1,i=1,s,r,o,a,l,c=Bn,h=Bn,d,u){super(null,o,a,l,c,h,s,r,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var pa=class extends rn{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Ks=new Pt,ru=new Pt,Go=[],ou=new Pi,Mg=new Pt,Hr=new z,zr=new Ki,ma=class extends z{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new pa(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,Mg)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Pi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Ks),ou.copy(e.boundingBox).applyMatrix4(Ks),this.boundingBox.union(ou)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ki),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Ks),zr.copy(e.boundingSphere).applyMatrix4(Ks),this.boundingSphere.union(zr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,t){let i=this.matrixWorld,s=this.count;if(Hr.geometry=this.geometry,Hr.material=this.material,Hr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),zr.copy(this.boundingSphere),zr.applyMatrix4(i),e.ray.intersectsSphere(zr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ks),ru.multiplyMatrices(i,Ks),Hr.matrixWorld=ru,Hr.raycast(e,Go);for(let o=0,a=Go.length;o<a;o++){let l=Go[o];l.instanceId=r,l.object=this,t.push(l)}Go.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new pa(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Gc(new Float32Array(s*this.count),s,this.count,gh,hi));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<i.length;c++)o+=i[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;r[l]=a,r.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var ur=class extends Ii{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new ce(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},au=new Pt,Vc=new sa,Vo=new Ki,Wo=new I,$r=class extends $t{constructor(e=new Qt,t=new ur){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Vo.copy(i.boundingSphere),Vo.applyMatrix4(s),Vo.radius+=r,e.ray.intersectsSphere(Vo)===!1)return;au.copy(s).invert(),Vc.copy(e.ray).applyMatrix4(au);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,d=i.attributes.position;if(c!==null){let u=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let g=u,E=p;g<E;g++){let m=c.getX(g);Wo.fromBufferAttribute(d,m),lu(Wo,m,l,s,e,t,this)}}else{let u=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let g=u,E=p;g<E;g++)Wo.fromBufferAttribute(d,g),lu(Wo,g,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function lu(n,e,t,i,s,r,o){let a=Vc.distanceSqToPoint(n);if(a<t){let l=new I;Vc.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var Wn=class extends Rn{constructor(e,t,i,s,r,o,a,l,c){super(e,t,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},ei=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let i=this.getLengths(),s=0,r=i.length,o;t?o=t:o=e*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);let h=i[s],u=i[s+1]-h,p=(o-h)/u;return(s+p)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new he:new I);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){let i=new I,s=[],r=[],o=[],a=new I,l=new Pt;for(let p=0;p<=e;p++){let g=p/e;s[p]=this.getTangentAt(g,new I)}r[0]=new I,o[0]=new I;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),u<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(s[p-1],s[p]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(gn(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(a,g))}o[p].crossVectors(s[p],r[p])}if(t===!0){let p=Math.acos(gn(r[0].dot(r[e]),-1,1));p/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(p=-p);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],p*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},ga=class extends ei{constructor(e=0,t=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new he){let i=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,p=c-this.aY;l=u*h-p*d+this.aX,c=u*d+p*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Wc=class extends ga{constructor(e,t,i,s,r,o){super(e,t,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Ah(){let n=0,e=0,t=0,i=0;function s(r,o,a,l){n=r,e=a,t=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,d){let u=(o-r)/c-(a-r)/(c+h)+(a-o)/h,p=(a-o)/h-(l-o)/(h+d)+(l-a)/d;u*=h,p*=h,s(o,a,u,p)},calc:function(r){let o=r*r,a=o*r;return n+e*r+t*o+i*a}}}var Xo=new I,Ul=new Ah,Ol=new Ah,Nl=new Ah,ys=class extends ei{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new I){let i=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(Xo.subVectors(s[0],s[1]).add(s[0]),c=Xo);let d=s[a%r],u=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Xo.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Xo),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(d),p),E=Math.pow(d.distanceToSquared(u),p),m=Math.pow(u.distanceToSquared(h),p);E<1e-4&&(E=1),g<1e-4&&(g=E),m<1e-4&&(m=E),Ul.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,g,E,m),Ol.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,g,E,m),Nl.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,g,E,m)}else this.curveType==="catmullrom"&&(Ul.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),Ol.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),Nl.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return i.set(Ul.calc(l),Ol.calc(l),Nl.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new I().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function cu(n,e,t,i,s){let r=(i-e)*.5,o=(s-t)*.5,a=n*n,l=n*a;return(2*t-2*i+r+o)*l+(-3*t+3*i-2*r-o)*a+r*n+t}function Sg(n,e){let t=1-n;return t*t*e}function Tg(n,e){return 2*(1-n)*n*e}function bg(n,e){return n*n*e}function Xr(n,e,t,i){return Sg(n,e)+Tg(n,t)+bg(n,i)}function wg(n,e){let t=1-n;return t*t*t*e}function Rg(n,e){let t=1-n;return 3*t*t*n*e}function xg(n,e){return 3*(1-n)*n*n*e}function Cg(n,e){return n*n*n*e}function qr(n,e,t,i,s){return wg(n,e)+Rg(n,t)+xg(n,i)+Cg(n,s)}var Xc=class extends ei{constructor(e=new he,t=new he,i=new he,s=new he){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new he){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(qr(e,s.x,r.x,o.x,a.x),qr(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},qc=class extends ei{constructor(e=new I,t=new I,i=new I,s=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new I){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(qr(e,s.x,r.x,o.x,a.x),qr(e,s.y,r.y,o.y,a.y),qr(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Yc=class extends ei{constructor(e=new he,t=new he){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new he){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new he){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Zc=class extends ei{constructor(e=new I,t=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new I){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new I){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Jc=class extends ei{constructor(e=new he,t=new he,i=new he){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new he){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(Xr(e,s.x,r.x,o.x),Xr(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ea=class extends ei{constructor(e=new I,t=new I,i=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new I){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(Xr(e,s.x,r.x,o.x),Xr(e,s.y,r.y,o.y),Xr(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},$c=class extends ei{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new he){let i=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return i.set(cu(a,l.x,c.x,h.x,d.x),cu(a,l.y,c.y,h.y,d.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new he().fromArray(s))}return this}},Fg=Object.freeze({__proto__:null,ArcCurve:Wc,CatmullRomCurve3:ys,CubicBezierCurve:Xc,CubicBezierCurve3:qc,EllipseCurve:ga,LineCurve:Yc,LineCurve3:Zc,QuadraticBezierCurve:Jc,QuadraticBezierCurve3:Ea,SplineCurve:$c});var En=class n extends Qt{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new I,h=new he;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=t;d++,u+=3){let p=i+d/t*s;c.x=e*Math.cos(p),c.y=e*Math.sin(p),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[u]/e+1)/2,h.y=(o[u+1]/e+1)/2,l.push(h.x,h.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new Tt(o,3)),this.setAttribute("normal",new Tt(a,3)),this.setAttribute("uv",new Tt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},ot=class n extends Qt{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],u=[],p=[],g=0,E=[],m=i/2,f=0;v(),o===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new Tt(d,3)),this.setAttribute("normal",new Tt(u,3)),this.setAttribute("uv",new Tt(p,2));function v(){let y=new I,L=new I,C=0,b=(t-e)/i;for(let F=0;F<=r;F++){let S=[],A=F/r,P=A*(t-e)+e;for(let B=0;B<=s;B++){let H=B/s,W=H*l+a,ee=Math.sin(W),Z=Math.cos(W);L.x=P*ee,L.y=-A*i+m,L.z=P*Z,d.push(L.x,L.y,L.z),y.set(ee,b,Z).normalize(),u.push(y.x,y.y,y.z),p.push(H,1-A),S.push(g++)}E.push(S)}for(let F=0;F<s;F++)for(let S=0;S<r;S++){let A=E[S][F],P=E[S+1][F],B=E[S+1][F+1],H=E[S][F+1];(e>0||S!==0)&&(h.push(A,P,H),C+=3),(t>0||S!==r-1)&&(h.push(P,B,H),C+=3)}c.addGroup(f,C,0),f+=C}function _(y){let L=g,C=new he,b=new I,F=0,S=y===!0?e:t,A=y===!0?1:-1;for(let B=1;B<=s;B++)d.push(0,m*A,0),u.push(0,A,0),p.push(.5,.5),g++;let P=g;for(let B=0;B<=s;B++){let W=B/s*l+a,ee=Math.cos(W),Z=Math.sin(W);b.x=S*Z,b.y=m*A,b.z=S*ee,d.push(b.x,b.y,b.z),u.push(0,A,0),C.x=ee*.5+.5,C.y=Z*.5*A+.5,p.push(C.x,C.y),g++}for(let B=0;B<s;B++){let H=L+B,W=P+B;y===!0?h.push(W,W+1,H):h.push(W+1,W,H),F+=3}c.addGroup(f,F,y===!0?1:2),f+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},un=class n extends ot{constructor(e=1,t=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Qc=class n extends Qt{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};let r=[],o=[];a(s),c(i),h(),this.setAttribute("position",new Tt(r,3)),this.setAttribute("normal",new Tt(r.slice(),3)),this.setAttribute("uv",new Tt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(v){let _=new I,y=new I,L=new I;for(let C=0;C<t.length;C+=3)p(t[C+0],_),p(t[C+1],y),p(t[C+2],L),l(_,y,L,v)}function l(v,_,y,L){let C=L+1,b=[];for(let F=0;F<=C;F++){b[F]=[];let S=v.clone().lerp(y,F/C),A=_.clone().lerp(y,F/C),P=C-F;for(let B=0;B<=P;B++)B===0&&F===C?b[F][B]=S:b[F][B]=S.clone().lerp(A,B/P)}for(let F=0;F<C;F++)for(let S=0;S<2*(C-F)-1;S++){let A=Math.floor(S/2);S%2===0?(u(b[F][A+1]),u(b[F+1][A]),u(b[F][A])):(u(b[F][A+1]),u(b[F+1][A+1]),u(b[F+1][A]))}}function c(v){let _=new I;for(let y=0;y<r.length;y+=3)_.x=r[y+0],_.y=r[y+1],_.z=r[y+2],_.normalize().multiplyScalar(v),r[y+0]=_.x,r[y+1]=_.y,r[y+2]=_.z}function h(){let v=new I;for(let _=0;_<r.length;_+=3){v.x=r[_+0],v.y=r[_+1],v.z=r[_+2];let y=m(v)/2/Math.PI+.5,L=f(v)/Math.PI+.5;o.push(y,1-L)}g(),d()}function d(){for(let v=0;v<o.length;v+=6){let _=o[v+0],y=o[v+2],L=o[v+4],C=Math.max(_,y,L),b=Math.min(_,y,L);C>.9&&b<.1&&(_<.2&&(o[v+0]+=1),y<.2&&(o[v+2]+=1),L<.2&&(o[v+4]+=1))}}function u(v){r.push(v.x,v.y,v.z)}function p(v,_){let y=v*3;_.x=e[y+0],_.y=e[y+1],_.z=e[y+2]}function g(){let v=new I,_=new I,y=new I,L=new I,C=new he,b=new he,F=new he;for(let S=0,A=0;S<r.length;S+=9,A+=6){v.set(r[S+0],r[S+1],r[S+2]),_.set(r[S+3],r[S+4],r[S+5]),y.set(r[S+6],r[S+7],r[S+8]),C.set(o[A+0],o[A+1]),b.set(o[A+2],o[A+3]),F.set(o[A+4],o[A+5]),L.copy(v).add(_).add(y).divideScalar(3);let P=m(L);E(C,A+0,v,P),E(b,A+2,_,P),E(F,A+4,y,P)}}function E(v,_,y,L){L<0&&v.x===1&&(o[_]=v.x-1),y.x===0&&y.z===0&&(o[_]=L/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function f(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.details)}},Li=class n extends Qc{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,s=1/i,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-i,0,-s,i,0,s,-i,0,s,i,-s,-i,0,-s,i,0,s,-i,0,s,i,0,-i,0,-s,i,0,-s,-i,0,s,i,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}};var bt=class n extends Qt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,h=[],d=new I,u=new I,p=[],g=[],E=[],m=[];for(let f=0;f<=i;f++){let v=[],_=f/i,y=0;f===0&&o===0?y=.5/t:f===i&&l===Math.PI&&(y=-.5/t);for(let L=0;L<=t;L++){let C=L/t;d.x=-e*Math.cos(s+C*r)*Math.sin(o+_*a),d.y=e*Math.cos(o+_*a),d.z=e*Math.sin(s+C*r)*Math.sin(o+_*a),g.push(d.x,d.y,d.z),u.copy(d).normalize(),E.push(u.x,u.y,u.z),m.push(C+y,1-_),v.push(c++)}h.push(v)}for(let f=0;f<i;f++)for(let v=0;v<t;v++){let _=h[f][v+1],y=h[f][v],L=h[f+1][v],C=h[f+1][v+1];(f!==0||o>0)&&p.push(_,y,C),(f!==i-1||l<Math.PI)&&p.push(y,L,C)}this.setIndex(p),this.setAttribute("position",new Tt(g,3)),this.setAttribute("normal",new Tt(E,3)),this.setAttribute("uv",new Tt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var ln=class n extends Qt{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);let o=[],a=[],l=[],c=[],h=new I,d=new I,u=new I;for(let p=0;p<=i;p++)for(let g=0;g<=s;g++){let E=g/s*r,m=p/i*Math.PI*2;d.x=(e+t*Math.cos(m))*Math.cos(E),d.y=(e+t*Math.cos(m))*Math.sin(E),d.z=t*Math.sin(m),a.push(d.x,d.y,d.z),h.x=e*Math.cos(E),h.y=e*Math.sin(E),u.subVectors(d,h).normalize(),l.push(u.x,u.y,u.z),c.push(g/s),c.push(p/i)}for(let p=1;p<=i;p++)for(let g=1;g<=s;g++){let E=(s+1)*p+g-1,m=(s+1)*(p-1)+g-1,f=(s+1)*(p-1)+g,v=(s+1)*p+g;o.push(E,m,v),o.push(m,f,v)}this.setIndex(o),this.setAttribute("position",new Tt(a,3)),this.setAttribute("normal",new Tt(l,3)),this.setAttribute("uv",new Tt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var fr=class n extends Qt{constructor(e=new Ea(new I(-1,-1,0),new I(-1,1,0),new I(1,1,0)),t=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:s,closed:r};let o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new I,l=new I,c=new he,h=new I,d=[],u=[],p=[],g=[];E(),this.setIndex(g),this.setAttribute("position",new Tt(d,3)),this.setAttribute("normal",new Tt(u,3)),this.setAttribute("uv",new Tt(p,2));function E(){for(let _=0;_<t;_++)m(_);m(r===!1?t:0),v(),f()}function m(_){h=e.getPointAt(_/t,h);let y=o.normals[_],L=o.binormals[_];for(let C=0;C<=s;C++){let b=C/s*Math.PI*2,F=Math.sin(b),S=-Math.cos(b);l.x=S*y.x+F*L.x,l.y=S*y.y+F*L.y,l.z=S*y.z+F*L.z,l.normalize(),u.push(l.x,l.y,l.z),a.x=h.x+i*l.x,a.y=h.y+i*l.y,a.z=h.z+i*l.z,d.push(a.x,a.y,a.z)}}function f(){for(let _=1;_<=t;_++)for(let y=1;y<=s;y++){let L=(s+1)*(_-1)+(y-1),C=(s+1)*_+(y-1),b=(s+1)*_+y,F=(s+1)*(_-1)+y;g.push(L,C,F),g.push(C,b,F)}}function v(){for(let _=0;_<=t;_++)for(let y=0;y<=s;y++)c.x=_/t,c.y=y/s,p.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new n(new Fg[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};var Ie=class extends Ii{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new ce(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wu,this.normalScale=new he(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function qo(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function Pg(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var pr=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Kc=class extends pr{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ld,endingEnd:ld}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case cd:r=e,a=2*t-i;break;case hd:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case cd:o=e,l=2*i-t;break;case hd:o=1,l=i+s[1]-s[0];break;default:o=e-1,l=t}let c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,p=this._weightNext,g=(i-t)/(s-t),E=g*g,m=E*g,f=-u*m+2*u*E-u*g,v=(1+u)*m+(-1.5-2*u)*E+(-.5+u)*g+1,_=(-1-p)*m+(1.5+p)*E+.5*g,y=p*m-p*E;for(let L=0;L!==a;++L)r[L]=f*o[h+L]+v*o[c+L]+_*o[l+L]+y*o[d+L];return r}},jc=class extends pr{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(i-t)/(s-t),d=1-h;for(let u=0;u!==a;++u)r[u]=o[c+u]*d+o[l+u]*h;return r}},eh=class extends pr{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},ti=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=qo(t,this.TimeBufferType),this.values=qo(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:qo(e.times,Array),values:qo(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new eh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new jc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Kc(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ko:t=this.InterpolantFactoryMethodDiscrete;break;case Tc:t=this.InterpolantFactoryMethodLinear;break;case rl:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ko;case this.InterpolantFactoryMethodLinear:return Tc;case this.InterpolantFactoryMethodSmooth:return rl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&Pg(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===rl,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(s)l=!0;else{let d=a*i,u=d-i,p=d+i;for(let g=0;g!==i;++g){let E=t[d+g];if(E!==t[u+g]||E!==t[p+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let d=a*i,u=o*i;for(let p=0;p!==i;++p)t[u+p]=t[d+p]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};ti.prototype.TimeBufferType=Float32Array;ti.prototype.ValueBufferType=Float32Array;ti.prototype.DefaultInterpolation=Tc;var vs=class extends ti{constructor(e,t,i){super(e,t,i)}};vs.prototype.ValueTypeName="bool";vs.prototype.ValueBufferType=Array;vs.prototype.DefaultInterpolation=Ko;vs.prototype.InterpolantFactoryMethodLinear=void 0;vs.prototype.InterpolantFactoryMethodSmooth=void 0;var th=class extends ti{};th.prototype.ValueTypeName="color";var nh=class extends ti{};nh.prototype.ValueTypeName="number";var ih=class extends pr{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(s-t),c=e*a;for(let h=c+a;c!==h;c+=4)Qi.slerpFlat(r,0,o,c-a,o,c,l);return r}},ya=class extends ti{InterpolantFactoryMethodLinear(e){return new ih(this.times,this.values,this.getValueSize(),e)}};ya.prototype.ValueTypeName="quaternion";ya.prototype.InterpolantFactoryMethodSmooth=void 0;var _s=class extends ti{constructor(e,t,i){super(e,t,i)}};_s.prototype.ValueTypeName="string";_s.prototype.ValueBufferType=Array;_s.prototype.DefaultInterpolation=Ko;_s.prototype.InterpolantFactoryMethodLinear=void 0;_s.prototype.InterpolantFactoryMethodSmooth=void 0;var sh=class extends ti{};sh.prototype.ValueTypeName="vector";var rh=class{constructor(e,t,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let p=c[d],g=c[d+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null}}},Ig=new rh,oh=class{constructor(e){this.manager=e!==void 0?e:Ig,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};oh.DEFAULT_MATERIAL_NAME="__DEFAULT";var mr=class extends $t{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ce(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},we=class extends mr{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy($t.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ce(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Bl=new Pt,hu=new I,du=new I,Qr=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new he(512,512),this.map=null,this.mapPass=null,this.matrix=new Pt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Zr,this._frameExtents=new he(1,1),this._viewportCount=1,this._viewports=[new Ft(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;hu.setFromMatrixPosition(e.matrixWorld),t.position.copy(hu),du.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(du),t.updateMatrixWorld(),Bl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Bl),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Bl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},ah=class extends Qr{constructor(){super(new hn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,i=ea*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(i!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Hn=class extends mr{constructor(e,t,i=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy($t.DEFAULT_UP),this.updateMatrix(),this.target=new $t,this.distance=i,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new ah}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},uu=new Pt,kr=new I,Hl=new I,lh=class extends Qr{constructor(){super(new hn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new he(4,2),this._viewportCount=6,this._viewports=[new Ft(2,1,1,1),new Ft(0,1,1,1),new Ft(3,1,1,1),new Ft(1,1,1,1),new Ft(3,0,1,1),new Ft(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(e,t=0){let i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),kr.setFromMatrixPosition(e.matrixWorld),i.position.copy(kr),Hl.copy(i.position),Hl.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Hl),i.updateMatrixWorld(),s.makeTranslation(-kr.x,-kr.y,-kr.z),uu.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(uu)}},nt=class extends mr{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new lh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},ch=class extends Qr{constructor(){super(new cr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Di=class extends mr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy($t.DEFAULT_UP),this.updateMatrix(),this.target=new $t,this.shadow=new ch}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var va=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=fu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=fu();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function fu(){return 0}var Mh="\\[\\]\\.:\\/",Lg=new RegExp("["+Mh+"]","g"),Sh="[^"+Mh+"]",Dg="[^"+Mh.replace("\\.","")+"]",Ug=/((?:WC+[\/:])*)/.source.replace("WC",Sh),Og=/(WCOD+)?/.source.replace("WCOD",Dg),Ng=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Sh),Bg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Sh),Hg=new RegExp("^"+Ug+Og+Ng+Bg+"$"),zg=["material","materials","bones","map"],hh=class{constructor(e,t,i){let s=i||Gt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Gt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Lg,"")}static parseTrackName(e){let t=Hg.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);zg.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=i(a.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Gt.Composite=hh;Gt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Gt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Gt.prototype.GetterByBindingType=[Gt.prototype._getValue_direct,Gt.prototype._getValue_array,Gt.prototype._getValue_arrayElement,Gt.prototype._getValue_toArray];Gt.prototype.SetterByBindingTypeAndVersioning=[[Gt.prototype._setValue_direct,Gt.prototype._setValue_direct_setNeedsUpdate,Gt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Gt.prototype._setValue_array,Gt.prototype._setValue_array_setNeedsUpdate,Gt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Gt.prototype._setValue_arrayElement,Gt.prototype._setValue_arrayElement_setNeedsUpdate,Gt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Gt.prototype._setValue_fromArray,Gt.prototype._setValue_fromArray_setNeedsUpdate,Gt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var oy=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:dh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=dh);var Sa={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var Ui=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},kg=new cr(-1,1,1,-1,0,1),Th=class extends Qt{constructor(){super(),this.setAttribute("position",new Tt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Tt([0,2,0,0,2,0],2))}},Gg=new Th,vr=class{constructor(e){this._mesh=new z(Gg,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,kg)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var As=class extends Ui{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof an?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Er.clone(e.uniforms),this.material=new an({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new vr(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Kr=class extends Ui{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Ta=class extends Ui{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var ba=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let i=e.getSize(new he);this._width=i.width,this._height=i.height,t=new on(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Cn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new As(Sa),this.copyPass.material.blending=di,this.clock=new va}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),i=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Kr!==void 0&&(o instanceof Kr?i=!0:o instanceof Ta&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new he);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Nu={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ce(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var _r=class n extends Ui{constructor(e,t,i,s){super(),this.strength=t!==void 0?t:1,this.radius=i,this.threshold=s,this.resolution=e!==void 0?new he(e.x,e.y):new he(256,256),this.clearColor=new ce(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new on(r,o,{type:Cn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let d=0;d<this.nMips;d++){let u=new on(r,o,{type:Cn});u.texture.name="UnrealBloomPass.h"+d,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);let p=new on(r,o,{type:Cn});p.texture.name="UnrealBloomPass.v"+d,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),r=Math.round(r/2),o=Math.round(o/2)}let a=Nu;this.highPassUniforms=Er.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new an({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let d=0;d<this.nMips;d++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[d])),this.separableBlurMaterials[d].uniforms.invSize.value=new he(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=Sa;this.copyUniforms=Er.clone(h.uniforms),this.blendMaterial=new an({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:wn,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new ce,this.oldClearAlpha=1,this.basic=new rt,this.fsQuad=new vr(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(i,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,s),this.renderTargetsVertical[r].setSize(i,s),this.separableBlurMaterials[r].uniforms.invSize.value=new he(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(e,t,i,s,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(i),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){let t=[];for(let i=0;i<e;i++)t.push(.39894*Math.exp(-.5*i*i/(e*e))/e);return new an({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new he(.5,.5)},direction:{value:new he(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}};_r.BlurDirectionX=new he(1,0);_r.BlurDirectionY=new he(0,1);var Ms=1280,Ss=720;function Oe(n){let e=n>>>0;return()=>{e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}var bh=(n,e=0,t=1)=>Math.min(t,Math.max(e,n)),jt=(n,e,t)=>n+(e-n)*t,Ve=(n,e,t)=>{let i=bh((t-n)/(e-n));return i*i*(3-2*i)};var Vg=n=>(n=bh(n),n*n*(3-2*n));function Ra(n,e){if(e<=n[0][0])return n[0][1];for(let t=1;t<n.length;t++)if(e<=n[t][0]){let i=Vg((e-n[t-1][0])/(n[t][0]-n[t-1][0])),s=n[t-1][1],r=n[t][1];return Array.isArray(s)?s.map((o,a)=>jt(o,r[a],i)):jt(s,r,i)}return n[n.length-1][1]}var Wg={uniforms:{tColor:{value:null},tDepth:{value:null},near:{value:.1},far:{value:400},focus:{value:6},range:{value:3},maxBlur:{value:22},res:{value:new he(Ms,Ss)}},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}",fragmentShader:`varying vec2 vUv;uniform sampler2D tColor,tDepth;uniform float near,far,focus,range,maxBlur;uniform vec2 res;
  float lin(float z){float n=z*2.-1.;return 2.*near*far/(far+near-n*(far-near));}
  float coc(vec2 uv){float d=lin(texture2D(tDepth,uv).r);return clamp((d-focus)/(d<focus?range*.6:range),-1.,1.);}
  float hash(vec2 p){return fract(sin(dot(p,vec2(41.3,289.1)))*43758.5453);}
  void main(){float c0=coc(vUv);float r0=abs(c0)*maxBlur;vec3 sum=texture2D(tColor,vUv).rgb;float w=1.;float rot=hash(vUv*res)*6.283;
    const float G=2.39996;for(int i=1;i<72;i++){float fi=float(i);float r=sqrt(fi/72.)*maxBlur;float an=fi*G+rot;vec2 uv=vUv+vec2(cos(an),sin(an))*r/res;float c=coc(uv);float rs=abs(c)*maxBlur;
      float k=c<c0?smoothstep(r-1.5,r+1.5,rs):smoothstep(r-1.5,r+1.5,r0);sum+=texture2D(tColor,uv).rgb*k;w+=k;}
    gl_FragColor=vec4(sum/w,1.);}`},Xg={uniforms:{tDiffuse:{value:null},vig:{value:.42},exposure:{value:1},grain:{value:.016},frame:{value:0},tint:{value:new ce(1,1,1)},sat:{value:1},flash:{value:0}},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}",fragmentShader:`varying vec2 vUv;uniform sampler2D tDiffuse;uniform float vig,exposure,grain,frame,sat,flash;uniform vec3 tint;
  vec3 aces(vec3 x){return clamp((x*(2.51*x+.03))/(x*(2.43*x+.59)+.14),0.,1.);}
  float rnd(vec2 p){return fract(sin(dot(p,vec2(12.9898,78.233))+frame)*43758.5453);}
  void main(){vec3 c=texture2D(tDiffuse,vUv).rgb*exposure*tint;c=aces(c*.88);
    float l=dot(c,vec3(.2126,.7152,.0722));c=mix(vec3(l),c,sat);
    vec2 q=(vUv-.5)*vec2(.86,1.);float v=smoothstep(.32,.86,length(q));c*=1.-vig*v;
    c=pow(c,vec3(1./2.2));c+=(rnd(vUv*vec2(1280.,720.))-.5)*grain;c=mix(c,vec3(1.),flash);gl_FragColor=vec4(c,1.);}`},wa=class{constructor(e){let t=this.r=new da({canvas:e,antialias:!1,preserveDrawingBuffer:!0,powerPreference:"high-performance"});t.setPixelRatio(1),t.setSize(Ms,Ss,!1),t.shadowMap.enabled=!0,t.shadowMap.type=uh,t.toneMapping=ui,t.outputColorSpace=es;let i=new hr(Ms,Ss);i.type=Fi,this.rt=new on(Ms,Ss,{type:Cn,samples:2,depthTexture:i}),this.composer=new ba(t,new on(Ms,Ss,{type:Cn})),this.dof=new As(Wg,"tDummy"),this.dof.uniforms.tColor.value=this.rt.texture,this.dof.uniforms.tDepth.value=i,this.bloom=new _r(new he(Ms/2,Ss/2),.45,.75,.82),this.grade=new As(Xg),this.composer.addPass(this.dof),this.composer.addPass(this.bloom),this.composer.addPass(this.grade),this.shots=[]}add(e){this.shots.push(e)}render(e){let t=this.shots.find(o=>e>=o.t0&&e<o.t1)||this.shots[this.shots.length-1];t.update(e,e-t.t0,this);let i=t.update(e,e-t.t0,this)||{},s=this.dof.uniforms,r=this.grade.uniforms;s.near.value=t.camera.near,s.far.value=t.camera.far,s.focus.value=i.focus??6,s.range.value=i.range??3,s.maxBlur.value=i.blur??20,this.bloom.strength=i.bloom??.45,this.bloom.threshold=i.bloomT??.82,this.bloom.radius=i.bloomR??.75,r.vig.value=i.vig??.42,r.exposure.value=i.exposure??1,r.sat.value=i.sat??1,r.flash.value=i.flash??0,r.frame.value=Math.floor(e*30)%97,r.tint.value.set(i.tint??"#ffffff"),this.r.setRenderTarget(this.rt),this.r.clear(),this.r.render(t.scene,t.camera),this.r.setRenderTarget(null),this.composer.render()}};function Bu(n,e,t,i=40){let s=new ua;s.background=new ce(t);let r=new hn(i,Ms/Ss,.08,400);return{t0:n,t1:e,scene:s,camera:r,update(){return{}}}}function Hu(n,e,t,i=0){n.position.set(e[0],e[1],e[2]),n.up.set(Math.sin(i),Math.cos(i),0),n.lookAt(t[0],t[1],t[2])}var Pn=1/420,wh=new Map;function In(n,e,t,i){if(wh.has(n))return wh.get(n);let s=document.createElement("canvas");s.width=e*2,s.height=t*2;let r=s.getContext("2d");r.scale(2,2),r.lineJoin="round",r.lineCap="round",i(r,e,t);let o=new Wn(s);return o.colorSpace=Vt,o.anisotropy=8,o.generateMipmaps=!0,o.premultiplyAlpha=!1,wh.set(n,o),o}var _t=n=>new Path2D(n);function cn(n,e,t){n.save(),n.fillStyle=t,n.fill(e),n.restore()}function ni(n,e,t,i,s,...r){let o=n.createLinearGradient(e,t,i,s);return r.forEach((a,l)=>o.addColorStop(l/(r.length-1),a)),o}var qg={hero:{a:"#43C4B4",b:"#27998C",c:"#1F7C72",s:"#6FDCCB",kind:"hoodie",cuff:"#2A9F93"},jaleco:{a:"#F6F4EE",b:"#D9D6CE",c:"#B9B6AE",s:"#FFFFFF",kind:"coat",cuff:"#E9E6DE",pants:"#2E3648"},terno2:{a:"#3C4C72",b:"#2A3756",c:"#1E2842",s:"#6D80A8",kind:"suit",cuff:"#F2EFE8"},terno3:{a:"#6A3A44",b:"#4C2830",c:"#381D23",s:"#8F5A66",kind:"suit",cuff:"#F2EFE8"},avental:{a:"#D2483A",b:"#AE3429",c:"#8A261D",s:"#EF7E70",kind:"hoodie",cuff:"#8A261D"},terno:{a:"#2E3442",b:"#1C2029",c:"#14171e",s:"#566072",kind:"suit",cuff:"#F2EFE8"},rosa:{a:"#F08AA0",b:"#D66A86",c:"#B44F6C",s:"#F9B6C4",kind:"dress",cuff:"#111",belt:"#EFC04F",flora:"#FFF3DA"},amarelo:{a:"#F7CC58",b:"#E3A92F",c:"#C78F22",s:"#FFE596",kind:"blouse",cuff:"#111",pants:"#59607a"},verde:{a:"#8EAE86",b:"#6F9068",c:"#58744f",s:"#B6CFAE",kind:"dress",cuff:"#111",belt:"#EFC04F",flora:"#FFF8E6"},azul:{a:"#6F97C4",b:"#4C729F",c:"#3A5A82",s:"#A3C2E0",kind:"blouse",cuff:"#111",pants:"#3a3f55"},laranja:{a:"#F2A766",b:"#DD8A45",c:"#BC6F2E",s:"#FBCB9B",kind:"hoodie",cuff:"#BC6F2E"},roxo:{a:"#A98AD0",b:"#8667B0",c:"#6D5093",s:"#CDB6E6",kind:"dress",cuff:"#111",belt:"#F2F0E6",flora:"#F6E4FF"}};function Yg(n,e){return In("torso_"+e,300,320,t=>{if(t.translate(150,20),n.kind==="hoodie"){let i=_t("M-92 34 Q-60 2 0 -2 Q60 2 92 34 Q106 130 104 262 L-104 262 Q-106 130 -92 34Z");cn(t,i,ni(t,-100,0,100,260,n.a,n.b)),t.fillStyle=n.c,t.globalAlpha=.3,t.fill(_t("M60 20 Q100 40 104 262 L52 262 Q70 150 60 20Z")),t.globalAlpha=1,t.fillStyle=n.b,t.fill(_t("M-70 26 Q0 92 70 26 Q84 44 72 70 Q0 118 -72 70 Q-84 44 -70 26Z")),t.fillStyle=n.c,t.fill(_t("M-44 22 Q0 -4 44 22 Q30 62 0 66 Q-30 62 -44 22Z")),t.strokeStyle="#F4F4EE",t.lineWidth=5,t.beginPath(),t.moveTo(-18,66),t.lineTo(-20,126),t.moveTo(18,66),t.lineTo(20,126),t.stroke(),t.fillStyle="#F4F4EE",t.beginPath(),t.arc(-20,130,4.5,0,7),t.arc(20,130,4.5,0,7),t.fill(),t.fillStyle=n.b,t.strokeStyle=n.c,t.lineWidth=3.5;let s=_t("M-62 164 L62 164 L78 240 L-78 240Z");t.fill(s),t.stroke(s),t.fillStyle=n.c,t.fillRect(-104,240,208,24),t.strokeStyle=n.b,t.lineWidth=2.5;for(let r=-100;r<104;r+=10)t.beginPath(),t.moveTo(r,242),t.lineTo(r,263),t.stroke()}else if(n.kind==="suit"){cn(t,_t("M-92 26 Q-46 4 0 4 Q46 4 92 26 Q104 130 100 280 L-100 280 Q-104 130 -92 26Z"),ni(t,-100,0,100,280,n.a,n.b)),t.strokeStyle="#ffffff10",t.lineWidth=2;for(let i=-92;i<96;i+=13)t.beginPath(),t.moveTo(i,30),t.lineTo(i,280),t.stroke();t.fillStyle="#F4F2EA",t.fill(_t("M-34 6 L34 6 L10 138 L-10 138Z")),t.fillStyle="#39AE9F",t.fill(_t("M-13 16 L13 16 L8 30 L18 116 L0 138 L-18 116 L-8 30Z")),t.strokeStyle="#8FDCCF",t.lineWidth=2;for(let i=0;i<4;i++)t.beginPath(),t.moveTo(-10,52+i*20),t.lineTo(10,44+i*20),t.stroke();t.fillStyle=n.c,t.fill(_t("M-34 6 L-58 22 L-46 66 L-8 146 L-12 150 L-34 6Z")),t.fill(_t("M34 6 L58 22 L46 66 L8 146 L12 150 L34 6Z")),t.fillStyle="#39AE9F",t.fill(_t("M-70 86 L-34 86 L-46 70 L-58 70Z")),t.fillStyle="#0d0f14",t.beginPath(),t.arc(0,176,7,0,7),t.arc(0,216,7,0,7),t.fill()}else if(n.kind==="coat")cn(t,_t("M-88 26 Q-44 4 0 4 Q44 4 88 26 Q100 150 104 292 L-104 292 Q-100 150 -88 26Z"),ni(t,-100,0,100,290,n.a,n.b)),t.fillStyle="#39AE9F",t.fill(_t("M-30 6 L30 6 L12 118 L-12 118Z")),t.fillStyle="#20273a",t.fillRect(-13,16,26,100),t.fillStyle=n.c,t.fill(_t("M-30 6 L-54 24 L-30 78 L-6 128 L-12 134Z")),t.fill(_t("M30 6 L54 24 L30 78 L6 128 L12 134Z")),t.strokeStyle=n.c,t.lineWidth=3,t.beginPath(),t.moveTo(0,130),t.lineTo(0,292),t.stroke(),t.strokeRect(-76,188,54,46),t.strokeRect(22,188,54,46),t.fillStyle="#3F6FB0",t.fillRect(44,182,5,26),t.fillStyle="#C9361F",t.fillRect(56,182,5,22);else if(n.kind==="dress"){cn(t,_t("M-62 14 Q-30 26 0 26 Q30 26 62 14 Q78 40 58 96 L54 118 L-54 118 L-58 96 Q-78 40 -62 14Z"),ni(t,-60,0,60,120,n.a,n.b)),cn(t,_t("M-52 118 L52 118 Q90 190 116 292 Q0 312 -116 292 Q-90 190 -52 118Z"),ni(t,-100,120,100,300,n.a,n.b)),t.fillStyle=n.belt,t.fillRect(-58,104,116,20);let i=7,s=()=>(i=i*16807%2147483647)/2147483647;t.fillStyle=n.flora;for(let r=0;r<34;r++){let o=34+s()*250,a=o<118?52:52+(o-118)*.36,l=(s()*2-1)*a;if(!(o>100&&o<128))for(let c=0;c<5;c++)t.beginPath(),t.arc(l+Math.cos(c*1.256)*5,o+Math.sin(c*1.256)*5,3.2,0,7),t.fill()}}else cn(t,_t("M-74 18 Q-30 30 0 30 Q30 30 74 18 Q88 110 74 196 L-74 196 Q-88 110 -74 18Z"),ni(t,-70,0,70,200,n.a,n.b)),t.fillStyle="#0a0a12",t.fill(_t("M-22 26 L22 26 L0 64Z")),cn(t,_t("M-68 196 L68 196 L74 276 L-74 276Z"),n.pants||"#555",null),t.fillStyle=n.belt||n.c,t.fillRect(-70,192,140,12)})}function zu(n,e,t){return In("sl_"+e+t,90,170,i=>{if(i.translate(45,10),n.kind==="dress"||n.kind==="blouse"){t==="u"?(cn(i,_t("M-26 -2 Q0 -16 26 -2 Q32 34 22 54 Q0 62 -22 54 Q-32 34 -26 -2Z"),ni(i,-26,0,26,50,n.a,n.b)),i.fillStyle="#17161e",i.fillRect(-7,48,14,100)):(cn(i,_t("M-8 -4 L8 -4 L8 136 L-8 136Z"),"#17161e",n.kind?"#FFE9C8":null,3),i.fillStyle="#3a3a48",i.fillRect(-2,0,3,130));return}let s=134,r=t==="u"?27:23,o=t==="u"?23:18;cn(i,_t(`M${-r} 4 Q0 -22 ${r} 4 L${o} ${s} Q0 ${s+16} ${-o} ${s}Z`),ni(i,-r,0,r,0,n.a,n.b)),i.fillStyle=n.s,i.globalAlpha=.5,i.fill(_t(`M${-r+8} 10 L${-r+16} 6 L${-o+13} ${s-6} L${-o+6} ${s-4}Z`)),i.globalAlpha=1,t==="f"&&(i.fillStyle=n.cuff,i.fill(_t(`M-20 ${s-14} Q0 ${s-4} 20 ${s-14} L19 ${s+6} Q0 ${s+16} -19 ${s+6}Z`)))})}function Zg(){return In("hand",90,100,n=>{n.translate(45,14);let e=_t("M-20 0 Q-30 22 -26 44 L-22 72 Q-16 80 -11 70 L-10 50 L-6 78 Q0 86 5 76 L5 50 L12 72 Q18 78 22 68 L18 40 L32 44 Q40 38 32 28 L18 8 Q2 -6 -20 0Z");cn(n,e,ni(n,-20,0,20,70,"#34343F","#1C1C25"),"#FFE9C8",4),n.strokeStyle="#4a4a58",n.lineWidth=2,n.beginPath(),n.moveTo(-12,18),n.quadraticCurveTo(0,8,12,16),n.stroke()})}function ku(n){return In("leg"+n,50,160,e=>{e.translate(25,6),e.fillStyle="#191922",e.beginPath(),e.roundRect(-9,-6,18,158,9),e.fill(),e.fillStyle="#46465a",e.fillRect(-2.5,2,3,140)})}function Jg(){return In("foot",80,40,n=>{n.translate(26,6),cn(n,_t("M-13 -2 L13 -2 Q40 6 42 22 L-14 22Z"),"#20202A","#FFE9C8",3),n.fillStyle="#E8E4DA",n.fillRect(-14,19,56,5)})}function $g(n="round"){return In("head"+n,300,300,e=>{e.translate(150,150);let t=new Path2D;t.arc(0,0,118,0,7);let i=e.createRadialGradient(10,-46,2,0,0,122);i.addColorStop(0,"#2C2E44"),i.addColorStop(.42,"#14141F"),i.addColorStop(1,"#08080E"),e.fillStyle=i,e.fill(t),e.save(),e.clip(t),e.globalAlpha=.1,e.fillStyle="#9fa4d8",e.beginPath(),e.ellipse(-4,-98,70,16,0,0,7),e.fill(),e.restore()})}var Wu={open(n,e){n.fillStyle="#F6EFE6",n.beginPath(),n.ellipse(0,0,18,27,e*.06,0,7),n.fill()},look(n,e){n.fillStyle="#F6EFE6",n.beginPath(),n.ellipse(11,0,18,26,0,0,7),n.fill()},lookl(n,e){n.fillStyle="#F6EFE6",n.beginPath(),n.ellipse(-11,0,18,26,0,0,7),n.fill()},down(n,e){n.fillStyle="#F6EFE6",n.beginPath(),n.ellipse(0,16,18,22,0,0,7),n.fill()},wide(n,e){n.fillStyle="#F6EFE6",n.beginPath(),n.ellipse(0,-2,23,33,0,0,7),n.fill()},small(n,e){n.fillStyle="#F6EFE6",n.beginPath(),n.ellipse(0,0,10,14,0,0,7),n.fill()},happy(n,e){n.strokeStyle="#F6EFE6",n.lineWidth=8.5,n.beginPath(),n.moveTo(-22,8),n.quadraticCurveTo(0,-24,22,8),n.stroke()},shut(n,e){n.strokeStyle="#F6EFE6",n.lineWidth=8.5,n.beginPath(),n.moveTo(-22,-6),n.quadraticCurveTo(0,18,22,-6),n.stroke()},flat(n,e){n.strokeStyle="#F6EFE6",n.lineWidth=8.5,n.beginPath(),n.moveTo(-22,2),n.lineTo(22,2),n.stroke()},smug(n,e){n.fillStyle="#F6EFE6",n.beginPath(),n.moveTo(-22,-6),n.lineTo(22,-6),n.quadraticCurveTo(20,24,0,24),n.quadraticCurveTo(-20,24,-22,-6),n.fill()},sad(n,e){n.fillStyle="#F6EFE6",n.beginPath(),n.moveTo(-19,e>0?-14:2),n.lineTo(19,e>0?2:-14),n.quadraticCurveTo(20,26,0,26),n.quadraticCurveTo(-20,26,-19,e>0?-14:2),n.fill()},angry(n,e){n.fillStyle="#F6EFE6",n.beginPath(),n.moveTo(-19,e>0?6:-14),n.lineTo(19,e>0?-14:6),n.quadraticCurveTo(20,26,0,26),n.quadraticCurveTo(-20,26,-19,e>0?6:-14),n.fill()},heart(n,e){n.fillStyle="#F0728C",n.beginPath(),n.moveTo(0,22),n.bezierCurveTo(-34,-2,-18,-30,0,-10),n.bezierCurveTo(18,-30,34,-2,0,22),n.fill()}};function Qg(n,e){return In("eye_"+n+(e?"L":""),300,300,t=>{t.translate(150,150),[-1,1].forEach(i=>{t.save(),t.translate(i*42,0),Wu[n](t,i),e&&(t.strokeStyle="#F6EFE6",t.lineWidth=3.5,[0,1,2].forEach(s=>{t.beginPath(),t.moveTo(i*(8+s*6),-22+s*3),t.quadraticCurveTo(i*(16+s*7),-34+s*2,i*(26+s*6),-36+s*5),t.stroke()})),t.restore()}),e&&(t.fillStyle="#E8667F55",[-1,1].forEach(i=>{t.beginPath(),t.ellipse(i*48,40,26,13,0,0,7),t.fill()}))})}function Kg(n,e,t){return In("hair_"+n+e,420,500,i=>{if(i.translate(210,170),n==="long"){let s=_t("M-130 -24 Q-136 -146 0 -152 Q136 -146 130 -24 Q150 120 128 250 Q0 276 -128 250 Q-150 120 -130 -24Z");cn(i,s,ni(i,-120,-150,120,250,e,t||e)),i.strokeStyle="#ffffff30",i.lineWidth=7,[[-90,-100,-118,180],[-60,-128,-70,40],[86,-100,112,200],[54,-130,70,60],[10,-146,20,-110]].forEach(([r,o,a,l])=>{i.beginPath(),i.moveTo(r,o),i.quadraticCurveTo(r*1.25,(o+l)/2,a,l),i.stroke()})}if(n==="bun"){let s=new Path2D;s.arc(0,-152,46,0,7),cn(i,s,e);let r=_t("M-126 -24 Q-128 -128 0 -132 Q128 -128 126 -24 Q124 14 114 34 Q90 -40 0 -60 Q-90 -40 -114 34 Q-124 14 -126 -24Z");cn(i,r,e),i.strokeStyle="#ffffff33",i.lineWidth=6,i.beginPath(),i.moveTo(-60,-112),i.quadraticCurveTo(-10,-128,40,-112),i.stroke()}if(n==="afro"){let s=(r,o,a)=>{let l=new Path2D;l.arc(r,o,a,0,7),cn(i,l,e)};[[-118,-20,52],[-104,-82,56],[-58,-130,58],[0,-148,60],[58,-130,58],[104,-82,56],[118,-20,52],[-118,40,44],[118,40,44]].forEach(r=>s(...r)),i.strokeStyle="#ffffff22",i.lineWidth=4,[[-70,-120],[-10,-140],[60,-118],[100,-70],[-100,-66]].forEach(([r,o])=>{i.beginPath(),i.arc(r,o,26,3.6,5.4),i.stroke()})}if(n==="bob"){let s=_t("M-128 -20 Q-132 -146 0 -150 Q132 -146 128 -20 Q130 74 104 104 L-104 104 Q-130 74 -128 -20Z");cn(i,s,ni(i,0,-150,0,100,e,t||e)),i.strokeStyle="#ffffff30",i.lineWidth=6,[[-80,-110,-112,70],[78,-112,110,70],[0,-142,4,-110]].forEach(([r,o,a,l])=>{i.beginPath(),i.moveTo(r,o),i.quadraticCurveTo(r*1.22,(o+l)/2,a,l),i.stroke()})}n==="old"&&[[-1],[1]].forEach(([s])=>{[[118,-30,40],[132,18,44],[112,62,34],[92,-66,30]].forEach(([r,o,a])=>{let l=new Path2D;l.arc(s*r,o,a,0,7),cn(i,l,"#E9E9EF")})})})}var Gu=(n,e={})=>new rt({map:n,alphaTest:.5,alphaToCoverage:!0,side:Dt,...e}),Vu=new Map,Rh=new Map,jg=[];function eE(n){if(Rh.has(n))return Rh.get(n);let e=n.image,t=document.createElement("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d"),s=7;for(let o=0;o<16;o++){let a=o/16*6.283;i.drawImage(e,Math.cos(a)*s,Math.sin(a)*s)}i.globalCompositeOperation="source-in",i.fillStyle="#FFFFFF",i.fillRect(0,0,t.width,t.height);let r=new Wn(t);return r.colorSpace=Vt,r.anisotropy=8,Rh.set(n,r),r}function Fn(n,e,t,i,s,r=0,o,a=!1){let l=new be(e*Pn,t*Pn);l.translate((e/2-i)*Pn,(s-t/2)*Pn,0);let c=Gu(n);o.push(c);let h=new z(l,c);if(h.position.z=r,h.castShadow=!0,!a){let u=Gu(eE(n),{color:"#FFE9C8"});jg.push(u);let p=new z(l,u);p.position.z=-.045-r,h.add(p)}let d=Vu.get(n);return d||(d=new ji({depthPacking:gr,map:n,alphaTest:.5,side:Dt}),Vu.set(n,d)),h.customDepthMaterial=d,h}function tE(){return In("blob",128,128,n=>{let e=n.createRadialGradient(64,64,2,64,64,62);e.addColorStop(0,"#000000AA"),e.addColorStop(.55,"#00000055"),e.addColorStop(1,"#00000000"),n.fillStyle=e,n.fillRect(0,0,128,128)})}function nE(){return In("halo",256,512,n=>{let e=n.createRadialGradient(128,256,10,128,256,128);e.addColorStop(0,"#FFE6C0"),e.addColorStop(.62,"#FFE6C066"),e.addColorStop(1,"#FFE6C000"),n.save(),n.translate(0,0),n.scale(1,2),n.translate(0,-128),n.fillStyle=e,n.fillRect(0,0,256,512),n.restore()})}function xh(n={}){let e=qg[n.outfit||"hero"],t=n.outfit||"hero",i=new le,s=[],r=new le;i.add(r);let o=316,a=o+262,l={},c={};for(let[m,f,v]of[["L",-1,-.012],["R",1,-.01]]){let _=new le;_.position.set(f*34*Pn,o*Pn,v);let y=new le;y.position.y=-142*Pn,_.add(Fn(ku(1),50,160,25,6,0,s)),y.add(Fn(ku(1),50,160,25,6,0,s));let L=Fn(Jg(),80,40,26,6,.001,s);L.position.y=-142*Pn,f<0&&(L.scale.x=-1),y.add(L),_.add(y),r.add(_),l[m]={th:_,shin:y}}let h=Fn(Yg(e,t),300,320,150,20,0,s);h.position.y=(a+4)*Pn,r.add(h);for(let[m,f,v]of[["L",-1,-.006],["R",1,.006]]){let _=new le;_.position.set(f*(e.kind==="dress"?66:84)*Pn,(a-24)*Pn,v);let y=new le;y.position.y=-124*Pn,_.add(Fn(zu(e,t,"u"),90,170,45,10,0,s)),y.add(Fn(zu(e,t,"f"),90,170,45,10,.001,s));let L=Fn(Zg(),90,100,45,14,.002,s);L.position.y=-128*Pn,L.scale.set(f>0?-.8:.8,.8,1),y.add(L),_.add(y),r.add(_),c[m]={u:_,f:y,hand:L}}let d=new le;if(d.position.set(0,(a+104)*Pn,.02),r.add(d),n.hair){let m=Fn(Kg(n.hair,n.hairc||"#4a2c1a",n.hairhi),420,500,210,170,-.03,s);d.add(m)}if(d.add(Fn($g(),300,300,150,150,0,s)),n.hair&&n.hair!=="old"&&n.hair!=="afro"){let m=Fn(In("fringe_"+n.hair+(n.hairc||""),300,300,f=>{f.translate(150,150);let v=n.hairc||"#4a2c1a";f.fillStyle=v,f.fill(_t(n.hair==="bun"?"M-122 -18 Q-120 -122 0 -124 Q120 -122 122 -18 Q70 -78 0 -84 Q-70 -78 -122 -18Z":"M-124 12 Q-126 -124 0 -126 Q126 -124 124 12 Q106 -44 44 -66 Q0 -76 -44 -66 Q-106 -44 -124 12Z")),f.strokeStyle="#ffffff2c",f.lineWidth=5,f.beginPath(),f.moveTo(-70,-92),f.quadraticCurveTo(-10,-114,54,-96),f.stroke()}),300,300,150,150,.003,s,!0);d.add(m)}if(n.lash){let m=Fn(In("earring",300,300,f=>{f.translate(150,150),[-1,1].forEach(v=>{f.strokeStyle="#F2C94C",f.lineWidth=6,f.beginPath(),f.arc(v*124,58,15,0,7),f.stroke()})}),300,300,150,150,.004,s,!0);m.castShadow=!1,d.add(m)}let u={};for(let m of Object.keys(Wu)){let f=Fn(Qg(m,n.lash),300,300,150,150,.002,s,!0);f.castShadow=!1,f.visible=m==="open",d.add(f),u[m]=f}if(n.glasses){let m=Fn(In("glasses",300,300,f=>{f.translate(150,150),f.strokeStyle="#E4E6EC",f.lineWidth=7,f.beginPath(),f.arc(-42,0,36,0,7),f.stroke(),f.beginPath(),f.arc(42,0,36,0,7),f.stroke(),f.beginPath(),f.moveTo(-6,0),f.lineTo(6,0),f.stroke()}),300,300,150,150,.004,s,!0);m.castShadow=!1,d.add(m)}if(n.hat){let m=Fn(n.hat(In),300,300,150,150,.006,s);d.add(m)}let p=new z(new be(1,.4),new rt({map:tE(),transparent:!0,depthWrite:!1}));p.rotation.x=-Math.PI/2,p.position.y=.012,i.add(p);let g=null;n.glow&&(g=new z(new be(2.1,3),new rt({map:nE(),transparent:!0,depthWrite:!1,opacity:n.glow,blending:wn,side:Dt})),g.position.set(0,.95,-.09),r.add(g));let E={root:i,body:r,head:d,arms:c,legs:l,eyes:u,mats:s,torso:h,tint(m){s.forEach(f=>f.color.set(m))},eye(m){for(let f in u)u[f].visible=f===m},cheer(m,f=0,v=1){let _=m*6+f,y=Math.sin(_);E.pose({armL:[150+y*16*v,18+y*10],armR:[150-y*16*v,18-y*10],bob:Math.abs(Math.sin(_*.5))*.07*v,head:y*3,legL:[2,0],legR:[2,0]})},opacity(m){s.forEach(f=>{f.transparent=m<1,f.opacity=m,f.alphaTest=m<1?.02:.5,f.alphaToCoverage=m>=1,f.depthWrite=m>=1}),p.material.opacity=m,g&&(g.material.opacity=(n.glow||0)*m)},pose(m={}){let f=Math.PI/180,v=m.armL||[6,4],_=m.armR||[6,4],y=m.legL||[0,0],L=m.legR||[0,0];c.L.u.rotation.z=-v[0]*f,c.L.f.rotation.z=-v[1]*f,c.R.u.rotation.z=_[0]*f,c.R.f.rotation.z=_[1]*f,l.L.th.rotation.z=-y[0]*f,l.L.shin.rotation.z=-y[1]*f,l.R.th.rotation.z=L[0]*f,l.R.shin.rotation.z=L[1]*f,d.rotation.z=(m.head||0)*f,r.rotation.z=(m.lean||0)*f,r.position.y=m.bob||0;let C=m.squash||0;r.scale.set(1-C*.5,1+C,1)},walk(m,f=1,v=1){let _=m*6.4*f,y=Math.sin(_),L=Math.cos(_);E.pose({legL:[y*15*v,Math.max(0,-y)*26*v],legR:[-y*15*v,Math.max(0,y)*26*v],armL:[8-y*12*v,6],armR:[8+y*12*v,6],bob:Math.abs(L)*.03*v,head:y*2})},place(m,f,v=0,_=1){i.position.set(m,v,f),i.scale.setScalar(_)},face(m){let f=m.position;i.rotation.y=Math.atan2(f.x-i.position.x,f.z-i.position.z),p.rotation.z=-i.rotation.y}};return E.pose(),E}function _e(n,e,t){let i=document.createElement("canvas");i.width=n,i.height=e;let s=i.getContext("2d");t(s,n,e);let r=new Wn(i);return r.colorSpace=Vt,r.anisotropy=8,r}var Ts=(n,e={})=>new Ie({color:n,roughness:.88,metalness:0,...e});function w(n,e,t,i,s=0,r=0,o=0,a=!0){let l=new z(new xn(n,e,t),typeof i=="string"?Ts(i):i);return l.position.set(s,r,o),l.castShadow=a,l.receiveShadow=!0,l}function Je(n,e,t=1){let i=_e(128,128,r=>{let o=r.createRadialGradient(64,64,0,64,64,64);o.addColorStop(0,"#fff"),o.addColorStop(.25,"#ffffff66"),o.addColorStop(1,"#ffffff00"),r.fillStyle=o,r.fillRect(0,0,128,128)}),s=new Jr(new dr({map:i,color:n,transparent:!0,depthWrite:!1,opacity:t,blending:wn}));return s.scale.set(e,e,1),s}var Xu=["#8C4A3C","#6E4152","#4F5A70","#9A6A48","#59685E","#7B3B3B"];function iE(n,e,t,i,s,r=.42){let o=Oe(n),a=256*e,l=300*t,c,h=_e(a,l,u=>{u.fillStyle=i,u.fillRect(0,0,a,l);for(let p=0;p<l;p+=12)for(let g=p/12%2*-14;g<a;g+=30)u.fillStyle=`rgba(${o()<.5?"255,235,215":"20,8,8"},${.03+o()*.07})`,u.fillRect(g,p,28,10);for(let p=0;p<t;p++)u.fillStyle="rgba(255,240,220,.14)",u.fillRect(0,p*300+292,a,8)}),d=_e(a,l,u=>{u.fillStyle="#000",u.fillRect(0,0,a,l);let p=h.image.getContext("2d");for(let g=0;g<t;g++)for(let E=0;E<e;E++){let m=E*256+56,f=g*300+60,v=144,_=196,y=o()<r,L=o();if(p.fillStyle="#E8E0CE",p.fillRect(m-9,f-9,v+18,_+18),p.fillStyle="rgba(0,0,0,.35)",p.fillRect(m-18,f+_+9,v+36,12),p.fillStyle="rgba(245,235,215,.8)",p.fillRect(m-18,f+_+6,v+36,8),p.fillStyle=s?y?"#F7C97F":"#1C2238":o()<.5?"#7E93A8":"#94A9B6",p.fillRect(m,f,v,_),y||!s){let C=y?L<.5?"#D69A6A":"#E7AC8C":"#D9D2BE";p.fillStyle=C,p.fillRect(m,f,26,_),p.fillRect(m+v-26,f,26,_)}s||(p.fillStyle="#ffffff30",p.beginPath(),p.moveTo(m+20,f+_),p.lineTo(m+90,f),p.lineTo(m+124,f),p.lineTo(m+54,f+_),p.fill()),p.fillStyle="#E8E0CE",p.fillRect(m+v/2-3,f,6,_),p.fillRect(m,f+_*.45,v,6),y&&s&&(u.fillStyle=L<.5?"#FFC47A":"#FFD79C",u.fillRect(m,f,v,_),u.fillStyle="#000",u.fillRect(m+v/2-3,f,6,_),u.fillRect(m,f+_*.45,v,6))}h.needsUpdate=!0});return d.colorSpace=Vt,{map:h,emissiveMap:d}}function ts(n,e){let{x:t,z:i,w:s,d:r,floors:o=5,side:a=1,night:l=!0,col:c,shop:h}=e,d=Oe(n),u=new le,p=o*2.9+3.6,g=c||Xu[Math.floor(d()*Xu.length)],E=Math.max(2,Math.round(r/2.1)),m=iE(n,E,o,g,l,e.lit??.42),f=new Ie({map:m.map,emissiveMap:m.emissiveMap,emissive:new ce(l?.62:0,l?.56:0,l?.48:0),roughness:.95}),v=Ts(g),_=[a>0?f:v,a>0?v:f,Ts("#2c2730"),v,v,v],y=new z(new xn(s,o*2.9,r),_);y.position.set(t,3.6+o*1.45,i),y.castShadow=y.receiveShadow=!0,u.add(y),u.add(w(s+.5,.5,r+.5,"#3d3540",t,p+.25,i)),u.add(w(s+.3,.35,r+.3,g,t,3.6,i));let L=t+a*(s/2+.01);if(h){let C=_e(1024,180,P=>{P.fillStyle=h.bg,P.fillRect(0,0,1024,180),P.fillStyle="#ffffff22",P.fillRect(0,0,1024,8),P.font=`900 ${h.size||104}px ${h.font||"Fraunces"}`,P.textAlign="center",P.textBaseline="middle",P.fillStyle=h.fg||"#FFF4DC",P.shadowColor=h.fg||"#FFF4DC",P.shadowBlur=l?26:0,P.fillText(h.name,512,96)}),b=new z(new xn(.18,1.05,r-.3),[new Ie({map:C,emissiveMap:C,emissive:new ce(l?.85:0,l?.85:0,l?.85:0)}),new Ie({map:C,emissiveMap:C,emissive:new ce(l?.85:0,l?.85:0,l?.85:0)}),Ts("#222"),Ts("#222"),Ts("#222"),Ts("#222")]);b.position.set(L+a*.1,3.25,i),a>0&&(b.scale.z=-1),b.castShadow=!0,u.add(b);let F=_e(512,256,P=>{let B=P.createLinearGradient(0,0,0,256);B.addColorStop(0,h.win||"#F4C783"),B.addColorStop(1,"#D59A5C"),P.fillStyle=B,P.fillRect(0,0,512,256);let H=Oe(n+9);for(let W=0;W<26;W++)P.fillStyle=["#C64236","#36AEA2","#EABA42","#D2728A","#4A86C7","#F6EFE6"][Math.floor(H()*6)],P.fillRect(H()*490,30+Math.floor(H()*3)*76,12+H()*26,52);for(let W of[84,160,236])P.fillStyle="#6b4530",P.fillRect(0,W,512,7)}),S=new Ie({map:F,emissiveMap:F,emissive:new ce(l?.62:.1,l?.62:.1,l?.62:.1),roughness:.25});u.add(w(.3,2.8,r-.1,"#3a2a24",L-a*.1,1.4,i));let A=new z(new be(r-.9,2.1),S);A.rotation.y=a*Math.PI/2,A.position.set(L+a*.07,1.5,i),u.add(A);for(let P=-1;P<=1;P++)u.add(w(.08,2.3,.09,"#2a1d18",L+a*.1,1.5,i+P*(r-.9)/2));if(h.awning){let P=_e(512,128,H=>{for(let W=0;W<12;W++)H.fillStyle=W%2?h.awning:"#F4EEDF",H.fillRect(W*512/12,0,42.666666666666664,128)}),B=new z(new be(r-.3,1.3),new Ie({map:P,side:Dt,roughness:.9}));B.rotation.y=a*Math.PI/2,B.rotation.order="YXZ",B.rotation.x=-1,B.position.set(L+a*.55,2.56,i),B.castShadow=!0,u.add(B)}if(l){let P=new nt(h.light||"#FFC88A",3.2,7,1.8);P.position.set(L+a*1.7,2.1,i),u.add(P)}}return u}function qu(n,e,t){let i=new z(new be(n,e),t);return i.rotation.x=-Math.PI/2,i.receiveShadow=!0,i}function sE(n="#A99D90"){let e=_e(512,512,t=>{t.fillStyle=n,t.fillRect(0,0,512,512);let i=Oe(4);for(let s=0;s<2400;s++)t.fillStyle=`rgba(${i()<.5?"255,255,255":"0,0,0"},.035)`,t.fillRect(i()*512,i()*512,2,2);t.strokeStyle="rgba(30,20,20,.42)",t.lineWidth=4,t.strokeRect(0,0,512,512)});return e.wrapS=e.wrapT=dn,e}function xa(n,e){let t=_e(1024,1024,s=>{s.fillStyle=e?"#1E1E26":"#4b4a52",s.fillRect(0,0,1024,1024);let r=Oe(5);for(let o=0;o<7e3;o++)s.fillStyle=`rgba(255,255,255,${r()*.05})`,s.fillRect(r()*1024,r()*1024,2,2);s.fillStyle="#D9D2BD";for(let o=40;o<1024;o+=256)s.fillRect(504,o,14,130)});t.wrapS=t.wrapT=dn,t.repeat.set(1,12);let i=qu(9,240,new Ie({map:t,roughness:.78,metalness:.05}));i.position.set(0,0,-100),n.add(i);for(let s of[-1,1]){let r=sE(e?"#8E8378":"#B8AC9D");r.repeat.set(2,100);let o=qu(4.4,240,new Ie({map:r,roughness:.92}));o.position.set(s*6.7,.14,-100),n.add(o),n.add(w(.22,.16,240,e?"#B8AFA2":"#D0C6B6",s*4.55,.07,-100,!1))}}function Ca(n,e,t,i,s=!0,r=5.5){let o=new le;o.add(w(.09,3.7,.09,"#15151b",e,1.85,t)),o.add(w(.26,.3,.26,"#15151b",e,.15,t));let a=w(.26,.4,.26,new Ie({color:"#FFE2AC",emissive:"#FFD089",emissiveIntensity:s?2.2:0}),e,3.85,t,!1);if(o.add(a),o.add(w(.34,.06,.34,"#15151b",e,4.08,t,!1)),s){let l=Je("#FFB870",1.8,.4);l.position.set(e,3.85,t),o.add(l);let c=new nt("#FFC688",r,11,1.6);c.position.set(e,3.5,t),o.add(c)}return n.add(o),o}var Yu={};function qt(n,e,t,i=1,s=["#2E4F2C","#3B6636","#55813F","#A9B65A"],r=1){let o=new le;o.add(w(.18*i,2.6*i,.18*i,"#2b1e18",e,1.3*i,t));let a=s.join()+r%3,l=Yu[a]||(Yu[a]=_e(512,512,c=>{let h=Oe(r%3+3),d=(u,p,g,E)=>{c.fillStyle=E,c.beginPath();for(let m=0;m<=26;m++){let f=m/26*6.283,v=g*(.86+.14*Math.sin(f*5+u)+h()*.05);c.lineTo(u+Math.cos(f)*v,p+Math.sin(f)*v)}c.fill()};for(let[u,p,g]of[[256,170,130],[150,240,118],[362,240,118],[256,300,128],[188,150,92],[324,150,92]])d(u,p,g,s[0]);for(let[u,p,g]of[[256,150,92],[160,226,80],[350,226,80],[256,270,92]])d(u,p,g,s[1]);for(let[u,p,g]of[[226,122,52],[320,196,46],[160,200,40],[262,240,46]])d(u,p,g,s[2]);c.fillStyle=s[3];for(let u=0;u<70;u++){let p=90+h()*330,g=70+h()*300;c.save(),c.translate(p,g),c.rotate(h()*3),c.beginPath(),c.ellipse(0,0,8,3.6,0,0,7),c.fill(),c.restore()}}));for(let c=0;c<3;c++){let h=new z(new be(3.6*i,3.6*i),new Ie({map:l,alphaTest:.5,side:Dt,roughness:1}));h.position.set(e,3.5*i,t),h.rotation.y=c*1.05+r,h.castShadow=!0,h.customDepthMaterial=new ji({depthPacking:gr,map:l,alphaTest:.5,side:Dt}),o.add(h)}return n.add(o),o}function ii(n,e,t,i,s,r,o=3,a=0){let l=_e(1600,900,h=>{h.clearRect(0,0,1600,900);let d=Oe(o);for(let u=0;u<3;u++)for(let p=-40;p<1620;){let g=50+d()*110,E=180+d()*(u===0?660:400);if(h.fillStyle=s[u],h.fillRect(p,900-E,g,E),d()<.2&&h.fillRect(p+g/2-4,900-E-60,8,60),r)for(let m=900-E+12;m<890;m+=18)for(let f=p+8;f<p+g-8;f+=14)d()<.34&&(h.fillStyle=u===2?"#FFD999":u===1?"#E9C28C":"#A98BA0",h.fillRect(f,m,7,10));p+=g*.92}}),c=new z(new be(t,i),new rt({map:l,transparent:!0,fog:!1,depthWrite:!1}));return c.position.set(0,a+i/2,e),n.add(c),c}function ft(n,e,t,i,s){let r=_e(8,512,a=>{let l=a.createLinearGradient(0,0,0,512);s.forEach(([c,h])=>l.addColorStop(c,h)),a.fillStyle=l,a.fillRect(0,0,8,512)}),o=new z(new be(t,i),new rt({map:r,fog:!1,depthWrite:!1}));return o.position.set(0,i*.32,e),n.add(o),o}var R=(n,e={})=>new Ie({color:n,roughness:.85,...e});function Le(n,e,t,i={}){let s=new z(new be(e,t),new rt({map:n,alphaTest:i.blend?0:.5,transparent:!!i.blend,depthWrite:!i.blend,side:Dt,color:i.color||"#fff",blending:i.add?wn:Yi,fog:i.fog??!0}));return i.shadow&&(s.castShadow=!0,s.customDepthMaterial=new ji({depthPacking:gr,map:n,alphaTest:.5,side:Dt})),s}function yn(n,e){n.rotation.y=Math.atan2(e.position.x-n.position.x,e.position.z-n.position.z)}var Ch={value:0};function Fa(n="#8E3D30",e=4,t=3){let i=_e(1024,1024,s=>{s.fillStyle="#4b2a24",s.fillRect(0,0,1024,1024);let r=Oe(7);for(let o=0,a=0;a<1024;a+=34,o++)for(let l=o%2*-44;l<1024;l+=88){let c=r();s.fillStyle=n,s.globalAlpha=.78+c*.22,s.fillRect(l+2,a+2,84,30),s.globalAlpha=1,s.fillStyle=`rgba(255,${200+c*40},${180+c*30},${c*.1})`,s.fillRect(l+2,a+2,84,6),c>.84&&(s.fillStyle="rgba(30,8,4,.2)",s.fillRect(l+2,a+2,84,30))}});return i.wrapS=i.wrapT=dn,i.repeat.set(e,t),i}function Zu(n="#A59383",e=12,t=12){let i=_e(1024,1024,s=>{s.fillStyle="#5e5248",s.fillRect(0,0,1024,1024);let r=Oe(3);for(let o=0;o<16;o++)for(let a=-1;a<17;a++){let l=r();s.fillStyle=n,s.globalAlpha=.7+l*.3,s.beginPath(),s.roundRect(a*64+o%2*32+3,o*64+3,58,58,12),s.fill(),s.globalAlpha=1}});return i.wrapS=i.wrapT=dn,i.repeat.set(e,t),i}var Ju=[["#36AEA2","#1F7C72","#1A1A22",null],["#F08AA0","#C75C78","#3a2418","long"],["#F7CC58","#D39E2C","#2a1b18","afro"],["#6F97C4","#4C729F","#D9B65A","bob"],["#F2A766","#CC7E3C","#1d1412","bun"],["#A98AD0","#7E5FA8","#6b3d20","long"],["#8EAE86","#688A60","#111",null],["#E9E5DA","#C8C3B5","#8a4a26","bob"]];function rE(n,e){let[t,i,s,r]=Ju[n];return _e(192,384,o=>{o.translate(96,0),o.lineCap="round",o.strokeStyle="#17161e",o.lineWidth=11,o.beginPath(),o.moveTo(-20,270),o.lineTo(-22,378),o.moveTo(20,270),o.lineTo(22,378),o.stroke(),o.strokeStyle=t,o.lineWidth=22,o.beginPath(),e?(o.moveTo(-44,148),o.lineTo(-72,58),o.moveTo(44,148),o.lineTo(72,58)):(o.moveTo(-46,148),o.lineTo(-64,240),o.moveTo(46,148),o.lineTo(64,240)),o.stroke(),o.fillStyle=t,o.beginPath(),o.roundRect(-52,128,104,150,24),o.fill(),o.fillStyle=i,o.fillRect(-52,250,104,26),o.fillStyle="#1C1C25",o.beginPath(),e?(o.arc(-74,50,13,0,7),o.arc(74,50,13,0,7)):(o.arc(-66,246,12,0,7),o.arc(66,246,12,0,7)),o.fill(),(r==="long"||r==="bob")&&(o.fillStyle=s,o.beginPath(),o.roundRect(-64,22,128,r==="long"?160:110,54),o.fill()),r==="afro"&&(o.fillStyle=s,[[-52,58],[-36,28],[0,18],[36,28],[52,58]].forEach(([l,c])=>{o.beginPath(),o.arc(l,c,34,0,7),o.fill()})),r==="bun"&&(o.fillStyle=s,o.beginPath(),o.arc(0,14,22,0,7),o.fill());let a=o.createRadialGradient(4,56,2,0,76,58);a.addColorStop(0,"#2A2C40"),a.addColorStop(1,"#0A0A12"),o.fillStyle=a,o.beginPath(),o.arc(0,76,54,0,7),o.fill(),o.fillStyle="#F6EFE6",o.beginPath(),o.ellipse(-20,76,8,12,0,0,7),o.ellipse(20,76,8,12,0,0,7),o.fill(),r&&(o.fillStyle=s,o.beginPath(),o.moveTo(-54,70),o.quadraticCurveTo(-52,22,0,22),o.quadraticCurveTo(52,22,54,70),o.quadraticCurveTo(26,40,0,40),o.quadraticCurveTo(-26,40,-54,70),o.fill())})}function Fh(n,e,t={}){let{h:i=1.75,jump:s=.1,tint:r="#ffffff",seed:o=2}=t,a=Oe(o),l={};for(let c of e){let h=Math.floor(a()*Ju.length)+(a()<(t.raised??.5)?100:0);(l[h]=l[h]||[]).push(c)}for(let c in l){let h=c>=100,d=c%100,u=rE(d,h),p=new rt({map:u,alphaTest:.5,side:Dt,color:r});p.onBeforeCompile=m=>{m.uniforms.uT=Ch,m.vertexShader=`uniform float uT;
`+m.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
 vec4 ip = instanceMatrix * vec4(0.,0.,0.,1.); float ph = ip.x*3.1 + ip.z*2.3; transformed.y += abs(sin(uT*${(5+d%3).toFixed(1)} + ph))*${s.toFixed(3)}/${i.toFixed(2)};`)};let g=new ma(new be(i*.5,i),p,l[c].length),E=new $t;l[c].forEach((m,f)=>{E.position.set(m[0],(m[2]||0)+i/2,m[1]),E.rotation.y=m[3]||0;let v=.92+a()*.16;E.scale.set(v,v,1),E.updateMatrix(),g.setMatrixAt(f,E.matrix)}),g.frustumCulled=!1,n.add(g)}}function vn(n,e=2600,t=300,i=1){let s=Oe(i),r=new Float32Array(e*3),o=new Float32Array(e*3);for(let d=0;d<e;d++){let u=s()*2-1,p=s()*6.283,g=Math.sqrt(1-u*u);r[d*3]=g*Math.cos(p)*t,r[d*3+1]=u*t,r[d*3+2]=g*Math.sin(p)*t;let E=.55+s()*.45,m=s();o[d*3]=E*(m>.8?1:.9),o[d*3+1]=E*.94,o[d*3+2]=E*(m<.2?.8:1)}let a=new Qt;a.setAttribute("position",new rn(r,3)),a.setAttribute("color",new rn(o,3));let l=_e(32,32,d=>{let u=d.createRadialGradient(16,16,0,16,16,16);u.addColorStop(0,"#fff"),u.addColorStop(.35,"#ffffffaa"),u.addColorStop(1,"#ffffff00"),d.fillStyle=u,d.fillRect(0,0,32,32)}),c=new ur({map:l,size:3.2,vertexColors:!0,transparent:!0,depthWrite:!1,sizeAttenuation:!1,fog:!1}),h=new $r(a,c);return h.frustumCulled=!1,n.add(h),h}function si(n,e,t="#6D4A33"){let i=_e(1024,1024,r=>{r.fillStyle=t,r.fillRect(0,0,1024,1024);let o=Oe(8);for(let a=0;a<11;a++){let l=a*94;r.fillStyle=`rgba(${o()<.5?"255,220,180":"20,10,5"},${o()*.13})`,r.fillRect(l,0,94,1024),r.fillStyle="#21140D",r.fillRect(l,0,4,1024);let c=o()*300;for(;c<1024;)r.fillRect(l,c,94,3),c+=340+o()*300}});i.wrapS=i.wrapT=dn,i.repeat.set(n/5,e/5);let s=new z(new be(n,e),new Ie({map:i,roughness:.55}));return s.rotation.x=-Math.PI/2,s.receiveShadow=!0,s}function pi(n,e,t="#D6D3C9",i="#C8C5BA",s=8){let r=_e(256,256,a=>{a.fillStyle=t,a.fillRect(0,0,256,256),a.fillStyle=i,a.fillRect(0,0,128,128),a.fillRect(128,128,128,128)});r.wrapS=r.wrapT=dn,r.repeat.set(n/s*4,e/s*4);let o=new z(new be(n,e),new Ie({map:r,roughness:.3,metalness:.05}));return o.rotation.x=-Math.PI/2,o.receiveShadow=!0,o}function bs(n,e,t="#FFD9A0",i=.22){let s=_e(64,256,o=>{let a=o.createLinearGradient(0,0,0,256);a.addColorStop(0,t+"FF"),a.addColorStop(1,t+"00"),o.fillStyle=a,o.fillRect(0,0,64,256);let l=o.createLinearGradient(0,0,64,0);l.addColorStop(0,"#000000"),l.addColorStop(.25,"#00000000"),l.addColorStop(.75,"#00000000"),l.addColorStop(1,"#000000"),o.globalCompositeOperation="destination-out",o.fillStyle=l,o.fillRect(0,0,64,256)});return new z(new be(n,e),new rt({map:s,transparent:!0,opacity:i,depthWrite:!1,blending:wn,side:Dt,fog:!1}))}function Ph(n,e,t,i=1,s="#C76B4A",r="#3E8A52"){let o=new le,a=new z(new ot(.3,.22,.5,20),R(s));a.position.y=.25,a.castShadow=!0,o.add(a);let l=_e(256,256,h=>{h.clearRect(0,0,256,256);for(let d=0;d<9;d++)h.save(),h.translate(128,250),h.rotate((d-4)*.3),h.fillStyle=d%2?r:"#5BA868",h.beginPath(),h.ellipse(0,-110,20,110,0,0,7),h.fill(),h.restore()}),c=Le(l,1.5,1.5,{shadow:!0});return c.position.y=1.15,o.add(c),o.leaf=c,o.position.set(n,e,t),o.scale.setScalar(i),o}function Ih(n,e,t,i="#2A1E18"){let s=new le;s.add(w(n+.08,e+.08,.04,i,0,0,0));let r=_e(Math.round(n*400),Math.round(e*400),t),o=new z(new be(n,e),new Ie({map:r,roughness:.8}));return o.position.z=.025,s.add(o),s}function zt(n,e,t,i=1.2){return new z(new be(n,e),new Ie({color:"#000",emissive:t,emissiveIntensity:i}))}function je(n,e,t,i=10,s=60){let r=new Di(n,e);return r.position.set(...t),r.castShadow=!0,r.shadow.mapSize.set(1024,1024),Object.assign(r.shadow.camera,{left:-i,right:i,top:i,bottom:-i,far:s}),r.shadow.bias=-6e-4,r.shadow.radius=4,r}function jr(n,e={}){let{wall:t="#9A4632",night:i=!1,floor:s="#7A5236",win:r=!0}=e;n.fog=new Re(i?"#2A1E2E":"#E9B48C",i?.02:.008),r&&(ft(n,-60,220,120,i?[[0,"#0E1030"],[.6,"#2A2252"],[1,"#6B3A62"]]:[[0,"#7FA6D8"],[.55,"#F2C4A0"],[1,"#FFD9A8"]]),ii(n,-50,220,30,i?["#2F2748","#3B2F54","#4A3A5E"]:["#C48A86","#B07A80","#9C6E7A"],i,4));let o=Fa(t,2,2),a=()=>new Ie({map:o,roughness:.95});if(r){[[-5.4,2.6,7,5.2],[5.4,2.6,7,5.2],[0,.5,3.8,1],[0,4.7,3.8,.8]].forEach(([p,g,E,m])=>n.add(w(E,m,.3,a(),p,g,-3)));for(let[p,g,E,m]of[[-1.9,2.6,.12,3.4],[1.9,2.6,.12,3.4],[0,2.6,.07,3.3],[0,4.3,3.9,.12],[0,1.05,4,.16]])n.add(w(E,m,.2,"#EDE7DA",p,g,-2.95))}else n.add(w(18,5.2,.3,a(),0,2.6,-3));n.add(si(18,12,s));let l=Ih(.9,1.2,p=>{p.fillStyle="#F2E6CC",p.fillRect(0,0,360,480),p.fillStyle="#E8667F",p.beginPath(),p.arc(180,200,110,0,7),p.fill(),p.fillStyle="#36AEA2",p.fillRect(0,330,360,150)});l.position.set(-3.6,2.8,-2.83),n.add(l),n.add(Ph(4.4,0,-2.4,1.1)),n.add(Ph(-5,0,-2.4,.9,"#36AEA2")),n.add(new we(i?"#6E74C0":"#B9C8F0","#6A4430",i?.7:.9));let c=je(i?"#9FB0FF":"#FFD6A0",i?.9:2.4,[3,7,-10],9,40);c.target.position.set(-1,0,0),n.add(c,c.target);let h=new nt("#FFB56E",i?10:4,8,1.6);h.position.set(3.4,2.2,-1.2),n.add(h);let d=new z(new ot(.18,.3,.34,24),new Ie({color:"#F6DDA4",emissive:"#FFB866",emissiveIntensity:1.2}));d.position.set(3.6,1.9,-1.9),n.add(d),n.add(w(.04,1.7,.04,"#222",3.6,.85,-1.9));let u=Je("#FFC07A",1.2,.35);u.position.copy(d.position),n.add(u)}var $u=[{name:"PANADER\xCDA",bg:"#6C4A2C",fg:"#FFE7B8",awning:"#3E7A5C"},{name:"FARMACIA",bg:"#2F6E5A",fg:"#F0FFF4"},{name:"LUNA CAF\xC9",bg:"#A85A36",fg:"#FFE3C8",awning:"#D94F58",font:"Caveat",size:120},{name:"LIBROS",bg:"#3A4F7A",fg:"#FFF0C8"},{name:"FLORES",bg:"#B04463",fg:"#FFF2E2",awning:"#EFEDE0"}];function eo(n,e={}){let{night:t=!1,seed:i=0,lit:s=.25,dusk:r=!1}=e;n.fog=new Re(t?"#2A2240":r?"#C88A7A":"#F7CFA4",t?.012:.009),ft(n,-170,500,240,t?[[0,"#0E1030"],[.5,"#2A2252"],[.8,"#5B3460"],[1,"#8A4A6A"]]:r?[[0,"#3A3A78"],[.5,"#B86A88"],[.8,"#F29A6A"],[1,"#FFC88A"]]:[[0,"#6FA7D8"],[.5,"#CFD8DC"],[.8,"#FBD7A6"],[1,"#FFE7BE"]]),ii(n,-150,420,90,t?["#2F2748","#3B2F54","#4A3A5E"]:["#B89AA0","#A98E9A","#9A8592"],t||r,21),xa(n,t||r);let o=6,a=0;for(;o>-90;){let l=7+a*37%5;n.add(ts(100+a+i,{x:13,z:o-l/2,w:8,d:l,floors:4+a%3,side:-1,night:t||r,lit:s,shop:$u[(a+i)%5]})),n.add(ts(200+a+i,{x:-13,z:o-l/2,w:8,d:l,floors:5+a%3,side:1,night:t||r,lit:s,shop:$u[(a+2+i)%5]})),o-=l,a++}for(let l=0;l<6;l++)qt(n,5.2,-6-l*11,1.2,["#3E5F3A","#4F7A44","#6E9A50","#D7D282"],l),Ca(n,-5,-3-l*12,1,t||r);n.add(new we(t?"#8E86C8":"#E9EEFF","#6A5A4A",t?.8:1.05)),n.add(je(t?"#B9B0F0":r?"#FFB080":"#FFD29A",t?1:2.8,[-20,16,10],30,90))}var ie=(n,e,t,i,s,r,o=0)=>{n.fillStyle=r,n.beginPath(),n.ellipse(e,t,i,s,o,0,7),n.fill()},ct=(n,e,t,i,s,r,o)=>{n.fillStyle=o,n.beginPath(),n.roundRect(e,t,i,s,r),n.fill()},At=(n,e,t)=>{n.fillStyle=t,n.beginPath(),n.moveTo(...e[0]);for(let i of e.slice(1))n.lineTo(...i);n.closePath(),n.fill()},Ar={perro:[520,440,n=>{ie(n,250,300,150,90,"#C98E5E"),ie(n,250,330,100,50,"#E9C49A"),ct(n,120,330,34,100,14,"#B5784A"),ct(n,340,330,34,100,14,"#B5784A"),ct(n,180,340,34,90,14,"#C98E5E"),ct(n,300,340,34,90,14,"#C98E5E"),n.strokeStyle="#B5784A",n.lineWidth=22,n.lineCap="round",n.beginPath(),n.moveTo(390,260),n.quadraticCurveTo(470,200,450,150),n.stroke(),ie(n,180,170,110,100,"#C98E5E"),ie(n,100,140,40,80,"#8A5A34",-.3),ie(n,262,140,40,80,"#8A5A34",.3),ie(n,180,220,54,40,"#E9C49A"),ie(n,180,200,22,16,"#1A1A24")},[.3,.34],22,1],viejo:[520,440,n=>{ie(n,250,300,150,90,"#C9A07E"),ie(n,250,330,100,50,"#EEDCC4"),ct(n,120,330,34,100,14,"#B5906A"),ct(n,340,330,34,100,14,"#B5906A"),ct(n,180,340,34,90,14,"#C9A07E"),ct(n,300,340,34,90,14,"#C9A07E"),ie(n,180,170,110,100,"#C9A07E"),ie(n,100,140,40,80,"#9A7A5A",-.3),ie(n,262,140,40,80,"#9A7A5A",.3),ie(n,180,220,60,46,"#F4F0E8"),ie(n,180,200,22,16,"#1A1A24")},[.3,.34],22,1],gato:[420,440,n=>{ie(n,220,320,110,90,"#E9853A"),n.strokeStyle="#E9853A",n.lineWidth=24,n.lineCap="round",n.beginPath(),n.moveTo(320,340),n.quadraticCurveTo(400,280,370,180),n.stroke(),ie(n,180,170,100,92,"#E9853A"),At(n,[[96,120],[110,30],[160,100]],"#E9853A"),At(n,[[264,120],[250,30],[200,100]],"#E9853A"),n.strokeStyle="#C96A22",n.lineWidth=9;for(let e=0;e<3;e++)n.beginPath(),n.moveTo(150+e*30,90),n.lineTo(160+e*30,120),n.stroke();ie(n,180,215,16,11,"#E8667F"),n.strokeStyle="#FFFFFF",n.lineWidth=4;for(let e of[-1,1])for(let t=0;t<3;t++)n.beginPath(),n.moveTo(180+e*30,220+t*8),n.lineTo(180+e*110,205+t*18),n.stroke()},[.43,.34],20,.8],loro:[300,440,n=>{ie(n,150,260,80,130,"#3FA34D"),ie(n,150,140,80,80,"#3FA34D"),At(n,[[150,380],[110,440],[190,440]],"#2F6E9A"),ie(n,150,300,56,70,"#F2C14E"),At(n,[[200,150],[250,180],[205,200]],"#2A2A34"),ie(n,120,90,26,18,"#C9361F")},[.48,.3],18,.5],paloma:[360,300,n=>{ie(n,170,190,130,80,"#8D94A8"),ie(n,90,110,56,52,"#7A8296"),ie(n,120,150,40,26,"#5FA898",.3),At(n,[[40,110],[0,122],[40,128]],"#E9853A"),n.strokeStyle="#E9853A",n.lineWidth=8,n.beginPath(),n.moveTo(160,260),n.lineTo(150,296),n.moveTo(200,260),n.lineTo(210,296),n.stroke(),ie(n,280,170,70,30,"#6A7084",-.3)},[.25,.34],14,.5],mosquito:[300,240,n=>{ie(n,150,130,70,22,"#3A3040"),ie(n,90,120,34,30,"#3A3040"),n.strokeStyle="#3A3040",n.lineWidth=5,n.beginPath(),n.moveTo(60,120),n.lineTo(0,130),n.stroke();for(let e=0;e<3;e++)n.beginPath(),n.moveTo(130+e*30,145),n.lineTo(110+e*34,230),n.stroke();ie(n,150,70,60,26,"rgba(220,240,255,.8)",-.4),ie(n,190,76,50,22,"rgba(220,240,255,.7)",.3)},[.28,.48],12,.25],pradera:[300,380,n=>{ie(n,150,260,90,120,"#C9A06A"),ie(n,150,290,56,80,"#EBD3A8"),ie(n,150,120,74,70,"#C9A06A"),ie(n,100,70,18,14,"#A87A44"),ie(n,200,70,18,14,"#A87A44"),ie(n,150,156,14,10,"#1A1A24"),ct(n,92,200,26,70,12,"#A87A44"),ct(n,182,200,26,70,12,"#A87A44")},[.5,.28],14,.45],abeja:[300,240,n=>{ie(n,160,140,100,64,"#F2C14E"),n.fillStyle="#1A1A24";for(let e=0;e<3;e++)n.fillRect(120+e*40,80,20,120);ie(n,64,130,46,44,"#1A1A24"),ie(n,140,60,60,34,"rgba(230,246,255,.85)",-.4),ie(n,200,64,54,30,"rgba(230,246,255,.8)",.3),At(n,[[258,140],[296,134],[258,150]],"#1A1A24")},[.2,.5],13,.35],delfin:[600,300,n=>{ie(n,300,160,250,80,"#6F9FC4"),ie(n,300,200,200,40,"#D8E8F4"),At(n,[[60,150],[0,168],[62,178]],"#6F9FC4"),At(n,[[300,90],[360,20],[370,100]],"#5A88AC"),At(n,[[530,150],[600,90],[590,160],[600,230],[530,175]],"#5A88AC"),At(n,[[260,220],[230,290],[300,230]],"#5A88AC")},[.2,.45],16,2],elefante:[600,520,n=>{ie(n,320,280,220,150,"#9A9AA8");for(let e of[170,240,390,460])ct(n,e,360,70,160,20,"#8A8A98");ie(n,170,200,120,110,"#9A9AA8"),ie(n,270,190,100,130,"#8A8A9A",.2),n.strokeStyle="#9A9AA8",n.lineWidth=46,n.lineCap="round",n.beginPath(),n.moveTo(110,260),n.quadraticCurveTo(60,380,110,460),n.stroke(),At(n,[[130,280],[110,330],[150,300]],"#F4F0E4")},[.24,.34],20,3],cachalote:[900,320,n=>{ct(n,20,60,560,220,110,"#4A5A6E"),ie(n,600,180,220,90,"#4A5A6E"),At(n,[[780,170],[900,90],[870,180],[900,270],[780,200]],"#3E4C60"),ct(n,80,250,380,20,10,"#6A7A8E")},[.12,.45],20,8],pollo:[320,360,n=>{ie(n,170,230,120,100,"#FBF7EC"),ie(n,120,120,66,64,"#FBF7EC"),At(n,[[100,50],[120,20],[140,52],[160,24],[170,62]],"#E2483A"),At(n,[[60,120],[20,132],[60,144]],"#F2C14E"),ie(n,74,160,12,20,"#E2483A"),n.strokeStyle="#F2C14E",n.lineWidth=9,n.beginPath(),n.moveTo(150,320),n.lineTo(140,360),n.moveTo(200,320),n.lineTo(210,360),n.stroke(),ie(n,270,200,40,70,"#EDE6D4",.4)},[.36,.32],14,.5],vaca:[620,460,n=>{ie(n,340,220,230,130,"#FBF7EC");for(let[e,t,i]of[[300,180,50],[420,250,40],[240,260,34]])ie(n,e,t,i,i*.8,"#2A2A34");for(let e of[190,260,410,480])ct(n,e,300,50,150,16,"#EDE6D4");ie(n,140,160,100,92,"#FBF7EC"),ie(n,120,220,70,46,"#F2B4C0"),At(n,[[80,80],[60,40],[104,72]],"#C9A06A"),At(n,[[200,80],[220,40],[176,72]],"#C9A06A")},[.2,.28],18,2.2],cerdo:[480,360,n=>{ie(n,250,200,200,120,"#F2A8B8");for(let e of[110,170,300,360])ct(n,e,260,44,90,14,"#E890A4");ie(n,120,170,34,24,"#E06A84"),At(n,[[160,70],[150,30],[196,70]],"#E890A4"),At(n,[[250,70],[270,30],[226,70]],"#E890A4"),n.fillStyle="#B04A64",n.beginPath(),n.arc(110,170,6,0,7),n.arc(130,170,6,0,7),n.fill()},[.3,.34],16,1.4],gorila:[460,520,n=>{ie(n,230,320,170,170,"#2E2E38"),ie(n,230,160,110,104,"#2E2E38"),ie(n,230,190,70,56,"#5A5A68"),ct(n,40,260,70,240,30,"#2E2E38"),ct(n,350,260,70,240,30,"#2E2E38")},[.5,.28],16,1.6],jirafa:[400,900,n=>{ct(n,160,120,70,560,30,"#F2C14E"),ie(n,230,700,150,110,"#F2C14E");for(let e of[120,180,290,340])ct(n,e,760,30,140,12,"#E2A83A");ie(n,190,110,80,60,"#F2C14E"),ct(n,160,20,12,50,6,"#8A5A2A"),ct(n,210,20,12,50,6,"#8A5A2A"),n.fillStyle="#B5784A";for(let e=0;e<18;e++)n.beginPath(),n.ellipse(170+e%3*25,200+e*30,12,16,0,0,7),n.fill()},[.47,.1],14,1.8],lobo:[560,420,n=>{ie(n,300,260,190,100,"#8A8E9A"),ie(n,300,300,120,50,"#C8CCD4");for(let e of[160,220,360,420])ct(n,e,320,36,100,14,"#7A7E8A");ie(n,140,170,96,90,"#8A8E9A"),At(n,[[80,120],[90,40],[130,100]],"#7A7E8A"),At(n,[[200,120],[190,40],[150,100]],"#7A7E8A"),At(n,[[60,190],[10,210],[70,230]],"#8A8E9A"),n.strokeStyle="#8A8E9A",n.lineWidth=30,n.lineCap="round",n.beginPath(),n.moveTo(480,250),n.quadraticCurveTo(540,300,530,370),n.stroke()},[.26,.38],18,1.4],leon:[600,460,n=>{ie(n,340,280,200,110,"#E2A83A");for(let e of[200,260,400,460])ct(n,e,330,44,120,16,"#D29A30");ie(n,170,200,150,150,"#A8642A"),ie(n,170,210,96,92,"#E2A83A"),ie(n,170,260,30,20,"#7A4A2A"),n.strokeStyle="#E2A83A",n.lineWidth=16,n.beginPath(),n.moveTo(530,250),n.quadraticCurveTo(600,300,580,380),n.stroke()},[.28,.4],18,2],pulpo:[420,420,n=>{ie(n,210,150,130,120,"#E8667F"),n.strokeStyle="#E8667F",n.lineWidth=26,n.lineCap="round";for(let e=0;e<8;e++)n.beginPath(),n.moveTo(110+e*28,240),n.quadraticCurveTo(80+e*36+Math.sin(e)*40,340,60+e*44,400),n.stroke()},[.5,.34],18,1],hormiga:[300,300,n=>{ie(n,230,190,60,46,"#3A2A2A"),ie(n,150,180,40,34,"#3A2A2A"),ie(n,80,150,50,46,"#3A2A2A"),n.strokeStyle="#3A2A2A",n.lineWidth=7;for(let e=0;e<3;e++)n.beginPath(),n.moveTo(140+e*20,200),n.lineTo(110+e*40,280),n.stroke();n.beginPath(),n.moveTo(70,110),n.lineTo(40,40),n.moveTo(90,108),n.lineTo(110,40),n.stroke()},[.27,.5],13,.35],ciervo:[520,520,n=>{ie(n,300,300,170,80,"#B5784A"),ie(n,300,330,110,40,"#E9C49A");for(let e of[170,220,360,410])ct(n,e,330,26,180,12,"#9A6238");ct(n,120,120,60,200,26,"#B5784A"),ie(n,130,110,70,56,"#B5784A"),ie(n,80,130,30,22,"#3A2A22"),At(n,[[150,70],[200,30],[170,90]],"#9A6238"),n.strokeStyle="#7A5230",n.lineWidth=12,n.lineCap="round",n.beginPath(),n.moveTo(120,60),n.lineTo(90,10),n.moveTo(105,35),n.lineTo(60,25),n.moveTo(150,60),n.lineTo(180,8),n.moveTo(165,32),n.lineTo(210,22),n.stroke(),ie(n,470,270,26,20,"#F4F0E4")},[.25,.2],18,1.4],alce:[600,560,n=>{ie(n,340,300,200,110,"#5A3E2A");for(let e of[190,250,400,460])ct(n,e,360,34,190,14,"#4A3222");ct(n,110,150,90,200,36,"#5A3E2A"),ie(n,110,160,80,66,"#5A3E2A"),ie(n,60,200,54,46,"#6A4A34"),ie(n,40,200,12,10,"#2A1A12"),n.fillStyle="#C8AE84",n.beginPath(),n.ellipse(70,70,70,30,-.3,0,7),n.ellipse(170,70,70,30,.3,0,7),n.fill()},[.2,.28],16,2],jabali:[480,340,n=>{ie(n,250,190,190,110,"#5E4A3E"),n.fillStyle="#4A3A30";for(let e=0;e<9;e++)At(n,[[150+e*22,90],[160+e*22,60],[172+e*22,92]],"#4A3A30");for(let e of[110,170,300,360])ct(n,e,250,40,90,14,"#4A3A30");ie(n,90,200,70,60,"#5E4A3E"),ie(n,30,220,34,28,"#7A6050"),At(n,[[50,240],[30,200],[62,236]],"#F4F0E4"),At(n,[[100,130],[90,100],[126,136]],"#4A3A30")},[.18,.5],14,1.2],caballo:[620,560,n=>{ie(n,330,280,200,100,"#8A5A3A");for(let e of[190,240,400,450])ct(n,e,320,34,230,14,"#7A4A2E");ct(n,120,100,80,220,36,"#8A5A3A"),n.save(),n.translate(110,110),n.rotate(-.5),ct(n,-50,-40,160,66,30,"#8A5A3A"),n.restore(),n.fillStyle="#2A1A12",n.fillRect(170,70,30,200),At(n,[[110,60],[120,20],[140,64]],"#7A4A2E"),n.strokeStyle="#2A1A12",n.lineWidth=26,n.lineCap="round",n.beginPath(),n.moveTo(520,250),n.quadraticCurveTo(580,320,560,420),n.stroke()},[.2,.2],16,2.2]},Pa={perro:[[.35,.39],.3],viejo:[[.35,.39],.3],gato:[[.43,.39],.34],loro:[[.5,.32],.4],paloma:[[.25,.37],.24],mosquito:[[.3,.5],.2],pradera:[[.5,.3],.36],abeja:[[.21,.54],.24],delfin:[[.2,.5],.12],elefante:[[.28,.38],.2],cachalote:[[.12,.45],.06],pollo:[[.37,.33],.32],vaca:[[.22,.33],.2],cerdo:[[.3,.4],.18],gorila:[[.5,.29],.3],jirafa:[[.47,.12],.3],lobo:[[.25,.4],.22],leon:[[.28,.44],.22],pulpo:[[.5,.34],.4],hormiga:[[.27,.48],.26]};Object.assign(Pa,{ciervo:[[.24,.2],.14],alce:[[.18,.3],.12],jabali:[[.17,.55],.14],caballo:[[.22,.2],.1]});for(let n in Pa)Ar[n][3]=Pa[n][0],Ar[n][4]=Pa[n][1];Ar.pato=[380,400,n=>{ie(n,210,280,150,100,"#F6D44A"),ie(n,290,250,70,50,"#E8BC30",-.4),ie(n,130,140,86,82,"#F6D44A"),ie(n,40,160,56,22,"#F2913A"),ie(n,46,172,46,14,"#E07A2A"),n.strokeStyle="#F2913A",n.lineWidth=14,n.lineCap="round",n.beginPath(),n.moveTo(180,370),n.lineTo(170,398),n.moveTo(240,370),n.lineTo(250,398),n.stroke(),At(n,[[340,250],[380,220],[360,280]],"#F6D44A")},[.36,.3],.3,1];Ar.dragon=[480,440,n=>{ie(n,250,300,140,110,"#7BC86A"),ie(n,250,330,90,70,"#D8F0B8");for(let e=0;e<4;e++)At(n,[[170+e*50,200],[190+e*50,150],[210+e*50,200]],"#F2913A");ie(n,380,210,80,50,"#9AD884",-.6),ie(n,130,160,100,92,"#7BC86A"),ie(n,70,190,46,34,"#9AD884"),At(n,[[100,80],[90,30],[130,74]],"#F2913A"),At(n,[[160,76],[170,26],[190,80]],"#F2913A"),ct(n,160,380,40,56,18,"#6AB05A"),ct(n,290,380,40,56,18,"#6AB05A"),n.strokeStyle="#7BC86A",n.lineWidth=30,n.lineCap="round",n.beginPath(),n.moveTo(380,330),n.quadraticCurveTo(470,360,450,280),n.stroke(),n.strokeStyle="rgba(0,0,0,.25)",n.lineWidth=4,n.setLineDash([10,8]),n.beginPath(),n.moveTo(250,200),n.lineTo(250,400),n.stroke()},[.28,.34],.3,1.6];Ar.caballoB=[620,560,n=>{ie(n,330,280,200,100,"#F4F0E8");for(let e of[190,240,400,450])ct(n,e,320,34,230,14,"#E4DED2");ct(n,120,100,80,220,36,"#F4F0E8"),n.save(),n.translate(110,110),n.rotate(-.5),ct(n,-50,-40,160,66,30,"#F4F0E8"),n.restore(),n.fillStyle="#E8D8A8",n.fillRect(170,70,30,200),At(n,[[110,60],[120,20],[140,64]],"#E4DED2"),n.strokeStyle="#E8D8A8",n.lineWidth=26,n.lineCap="round",n.beginPath(),n.moveTo(520,250),n.quadraticCurveTo(580,320,560,420),n.stroke()},[.2,.2],.1,2.2];var Ia={},Qu=n=>Ia["e"+n]||(Ia["e"+n]=_e(128,64,e=>{e.clearRect(0,0,128,64),e.fillStyle="#FBF7EC",e.strokeStyle="#FBF7EC",e.lineWidth=9,e.lineCap="round";for(let t of[32,96])if(n==="happy")e.beginPath(),e.arc(t,40,16,Math.PI*1.1,Math.PI*1.9),e.stroke();else if(n==="flat"||n==="shut")e.beginPath(),e.moveTo(t-16,34),e.lineTo(t+16,34),e.stroke();else if(n==="sad")e.beginPath(),e.ellipse(t,36,13,16,0,0,7),e.fill(),e.fillStyle="#1A1A24",e.fillRect(t-16,18,32,10),e.fillStyle="#FBF7EC";else{let i=n==="wide"?17:13;e.beginPath(),e.ellipse(t,32,i,i*1.25,0,0,7),e.fill(),n==="look"&&(e.fillStyle="#1A1A24",e.beginPath(),e.arc(t+5,34,5,0,7),e.fill(),e.fillStyle="#FBF7EC")}}));function Ku(n,e={}){let[t,i,s,r,o,a]=Ar[n],l=Ia[n]||(Ia[n]=_e(t,i,s)),c=a*i/t,h=new le,d=new le;h.add(d);let u=Le(l,a,c,{shadow:!0});u.position.y=c/2,d.add(u);let p=new z(new be(o*a,o*a*.5),new rt({map:Qu("open"),transparent:!0,depthWrite:!1}));p.position.set(-a/2+r[0]*a,c-r[1]*c,.01),d.add(p);let g=new z(new En(a*.45,24),new rt({color:"#000",transparent:!0,opacity:.22,depthWrite:!1}));g.rotation.x=-Math.PI/2,g.scale.y=.35,g.position.y=.01,h.add(g),e.flip&&(d.scale.x=-1);let E={root:h,card:d,kind:n,h:c,w:a,eye(m){p.material.map=Qu(m)},face(m){let f=new I;h.getWorldPosition(f),d.rotation.y=Math.atan2(m.position.x-f.x,m.position.z-f.z)},talk(m,f=!0){u.position.y=c/2+(f?Math.abs(Math.sin(m*14))*c*.015:0),d.scale.y=f?1+Math.sin(m*14)*.012:1},place(m,f,v=0,_=1){return h.position.set(m,v,f),h.scale.setScalar(_),E}};return E}var ns=(n,e,t=200,i=200,s)=>{let r=new z(new be(t,i),s?new Ie({map:s,roughness:.95}):R(e,{roughness:1}));return r.rotation.x=-Math.PI/2,r.receiveShadow=!0,n.add(r),r},Lh=(n,e=1)=>{n.add(new we("#E9EEFF","#B08A6A",1.05*e)),n.add(je("#FFD29A",3*e,[-14,16,10],20,70))},ye={sala:(n,e)=>jr(n,{wall:e.wall||"#2F6E68",night:e.night,win:e.win??!0}),quarto:(n,e)=>{jr(n,{wall:"#9A4632",night:e.night}),n.add(w(2.4,.45,3.2,R("#6B4A33"),-1.7,.25,-1.4)),n.add(w(2.3,.3,3,R("#F3EEE4"),-1.7,.6,-1.4)),n.add(w(2.38,.22,2,R("#4A86C7",{roughness:.9}),-1.7,.8,-.7)),n.add(w(.8,.22,.5,R("#FFFFFF"),-1.7,.82,-2.5))},rua:(n,e)=>eo(n,{seed:e.seed||0,night:e.night,dusk:e.dusk}),parque:(n,e)=>{n.fog=new Re(e.dusk?"#E8A880":"#F2D8B8",.02),ft(n,-100,500,200,e.dusk?[[0,"#3A3A78"],[.5,"#B86A88"],[.8,"#F29A6A"],[1,"#FFC88A"]]:[[0,"#6FA7D8"],[.6,"#CFD8DC"],[1,"#FFE7BE"]]),ii(n,-80,400,40,["#B89AA0","#A98E9A","#9A8592"],!!e.dusk,5),ns(n,"#7A9A50");for(let t=0;t<12;t++)qt(n,-12+t*2.3,-7-t%3*2.5,1.4,["#3E5F3A","#4F7A44","#6E9A50","#D7D282"],t);n.add(w(2.4,.1,.5,R("#8E6242"),-3.4,.5,-2.2)),n.add(w(2.4,.5,.08,R("#8E6242"),-3.4,.8,-2.45));for(let t=0;t<3;t++)Ca(n,-6+t*6,-4,1,!!e.dusk);n.add(new we("#E9EEFF","#B08A6A",1)),n.add(je(e.dusk?"#FFB080":"#FFD29A",e.dusk?2.2:3,[-10,12,8],14,50))},plaza:(n,e)=>{eo(n,{seed:e.seed||2}),ns(n,"",60,60,Zu("#B49F8C",24,24)).position.set(0,.01,-10)},granja:(n,e)=>{n.fog=new Re("#F2D8B8",.012),ft(n,-200,700,260,[[0,"#6FA7D8"],[.6,"#CFE0E8"],[1,"#FFE7BE"]]),ns(n,"#8AAA58");let t=new le;t.add(w(6,4,5,R("#B5402E"),0,2,0));let i=new z(new ot(.01,4.4,2.2,4),R("#5A3A2A"));i.rotation.y=Math.PI/4,i.scale.z=.8,i.position.y=5.1,t.add(i),t.add(w(2,2.6,.1,R("#F4F0E4"),0,1.3,2.51)),t.position.set(-4,0,-12),n.add(t);for(let s=0;s<16;s++)n.add(w(.1,1,.1,R("#C9A06A"),-10+s*1.3,.5,-4));n.add(w(20,.08,.06,R("#C9A06A"),0,.9,-4)),n.add(w(20,.08,.06,R("#C9A06A"),0,.5,-4));for(let s=0;s<6;s++)qt(n,6+s*3,-16-s%2*3,1.6,void 0,s);Lh(n)},sabana:(n,e)=>{n.fog=new Re("#F2C890",.01),ft(n,-300,900,300,[[0,"#E89A5A"],[.6,"#F6C888"],[1,"#FFE8B8"]]);let t=Je("#FFF0C0",40,.9);t.position.set(-30,20,-200),t.material.fog=!1,n.add(t),ns(n,"#C8A858");for(let i=0;i<6;i++){let s=new le;s.add(w(.3,3,.3,R("#5A3A22"),0,1.5,0));let r=new z(new ot(2.6,2.2,.6,12),R("#6E8A40"));r.position.y=3.2,s.add(r),s.position.set(-20+i*9,0,-14-i%3*8),n.add(s)}n.add(new we("#FFE8C8","#8A6A3A",1)),n.add(je("#FFD8A0",3,[-20,14,-10],30,90))},pradera:(n,e)=>{n.fog=new Re("#F2E2C0",.012),ft(n,-200,700,260,[[0,"#6FA7D8"],[.6,"#CFE0E8"],[1,"#F6E8C8"]]),ns(n,"#B8B070");for(let t=0;t<14;t++){let i=new z(new bt(.55,16,10,0,Math.PI*2,0,Math.PI/2),R("#A88A5A"));i.scale.y=.4,i.position.set(-8+t%7*2.6,0,-1-Math.floor(t/7)*4-t%3),n.add(i)}Lh(n)},mar:(n,e)=>{oE(n,e.deep?"#04182E":"#0A3A5A"),n.fog=new Re(e.deep?"#06223E":"#0E4A6A",e.deep?.04:.06);let t=ns(n,"#C8B48A");if(t.position.y=-3,!e.deep){let s=Oe(5);for(let r=0;r<30;r++){let o=new z(new un(.2+s()*.3,.8+s()*1.4,7),R(["#E8667F","#F2A766","#B47AFF","#36AEA2"][r%4]));o.position.set((s()-.5)*14,-2.6,-2-s()*12),n.add(o)}}for(let s=0;s<7;s++){let r=bs(1.6,16,"#BFEFFF",e.deep?.05:.12);r.position.set(-6+s*2,5,-6),r.rotation.set(0,0,.25),n.add(r)}let i=[];for(let s=0;s<60;s++){let r=Je("#DFF8FF",.08,.7);n.add(r),i.push(r)}n.userData.bub=i,n.add(new we("#9FE0FF","#2A4A5A",e.deep?.5:1)),n.add(je("#BFEFFF",e.deep?.6:1.4,[0,20,4],14,40))},lab:(n,e)=>{n.fog=new Re("#162238",.04),n.add(pi(16,20,"#2A3348","#232B3E",6)),n.add(w(16,6,.3,R("#2E3A52"),0,3,-3.2));for(let r=0;r<4;r++){let o=zt(.6,3,"#9FC8FF",1.4);o.rotation.x=Math.PI/2,o.position.set(-3+r*2,4.2,-1),n.add(o)}let t=zt(2.6,1.4,"#7FD08A",.5);t.position.set(0,2.8,-3.03),n.add(t);let i=_e(520,280,r=>{r.fillStyle="#0A1A12",r.fillRect(0,0,520,280),r.strokeStyle="#7FD08A",r.lineWidth=4,r.beginPath();for(let o=0;o<520;o++)r.lineTo(o,140+Math.sin(o*.08)*40*Math.sin(o*.013));r.stroke()}),s=new z(new be(2.5,1.3),new rt({map:i}));s.position.set(0,2.8,-3.02),n.add(s),n.add(new we("#6E86C8","#101420",.8)),n.add(je("#BFD4FF",1.4,[3,6,5],8,30))},hall:(n,e)=>{n.fog=new Re("#1E2236",.02),ns(n,"#2F4A7A"),n.add(w(30,10,.3,R("#E8E2D2"),0,5,-8));let t=_e(512,512,r=>{r.clearRect(0,0,512,512),r.strokeStyle="#4A86C7",r.lineWidth=16,r.beginPath(),r.arc(256,256,200,0,7),r.stroke();for(let o=1;o<4;o++)r.beginPath(),r.arc(256,256,o*55,0,7),r.stroke();r.beginPath(),r.moveTo(56,256),r.lineTo(456,256),r.moveTo(256,56),r.lineTo(256,456),r.stroke()}),i=Le(t,4,4);i.position.set(0,6,-7.8),n.add(i);let s=new z(new ln(4,.35,10,48),R("#8E6242"));s.rotation.x=Math.PI/2,s.position.set(0,.8,-1),n.add(s);for(let r=0;r<8;r++){let o=new nt("#FFE8C0",5,10,1.6);o.position.set(-6+r*1.8,6,0),n.add(o)}n.add(new we("#E8E8FF","#3A3A50",.9)),n.add(je("#FFF0D8",1.6,[4,10,8],12,40))},super:(n,e)=>{n.fog=new Re("#E6E2D6",.03),n.add(pi(9,40));for(let i of[-1,1]){n.add(w(.7,4.2,30,R("#8F96A3"),i*3.6,2.1,-10));for(let s=0;s<4;s++)n.add(w(1.2,.05,30,R("#DDE0E4"),i*3,.5+s*.9,-10))}let t=Oe(3);for(let i=0;i<160;i++){let s=i%2?1:-1;t()<.55||n.add(w(.3,.3,.4,R(["#3F8A52","#6E9A50","#E8843E","#C64236","#F2C14E"][i%5]),s*3,.7+Math.floor(t()*4)*.9,-i*.18))}for(let i=0;i<6;i++){let s=zt(1,2.6,"#FFF6DE",1.6);s.rotation.x=Math.PI/2,s.position.set(0,4.6,2-i*5),n.add(s)}n.add(new we("#FFFFFF","#B9B3A6",1)),n.add(je("#FFF6E0",.8,[1,8,6],10,30))},zoo:(n,e)=>{ye.parque(n,{});for(let t=0;t<12;t++)n.add(w(.08,1.4,.08,R("#3A3A40",{metalness:.5}),-4+t*.7,.7,1.2));n.add(w(8,.08,.08,R("#3A3A40"),0,1.35,1.2))},noite:(n,e)=>{jr(n,{night:!0,wall:"#3A3050"})},ruina:(n,e)=>{n.fog=new Re("#8A8070",.03),ft(n,-100,400,160,[[0,"#7A8A9A"],[1,"#C8C0B0"]]),ns(n,"#8A8070");let t=Oe(8);for(let i=0;i<40;i++){let s=w(.4+t()*1.6,.3+t()*1,.4+t()*1.4,R(["#9A9088","#8A8078","#B0A898"][i%3]),(t()-.5)*10,.3,-1-t()*8);s.rotation.set(t(),t()*3,t()*.4),n.add(s)}Lh(n,.8)}};function oE(n,e){n.background=new ce(e)}function aE(n,e={}){let t=xh({outfit:e.outfit||"hero",hair:e.hair,hairc:e.hairc,lash:!!e.lash,glasses:e.glasses,glow:e.glow??.14});return t.place(e.x||0,e.z||0,e.y||0,e.s||1),t.tint(e.tint||"#FFF0DC"),n.add(t.root),t}var lE=(n,e,t)=>{if(!n)return t;let i=t;for(let[s,r]of n)e>=s&&(i=r);return i};function Dh(n,e,t){let i=Bu(n,e,t.bg||"#F1C39A",t.fov||32),s=i.scene;(ye[t.amb]||(()=>{}))(s,t.ambo||{});let r=(t.atores||[]).map(a=>{let l=a.tipo==="humano"?aE(s,a):(()=>{let c=Ku(a.tipo,a);return c.place(a.x||0,a.z||0,a.y||0,a.s||1),s.add(c.root),c})();return{a,k:l}}),o=t.extra?t.extra(s,i,r.map(a=>a.k)):null;return i.update=(a,l)=>{Ch.value=a;let c=i.camera,h=s.userData.bub;h&&h.forEach((g,E)=>g.position.set(-4+E%12*.7,-2.5+(l*.5+E*.13)%7,-2-E%5*1.5));let d=Ra(t.cam.map(([g,E])=>[g,E]),l),u=Ra(t.cam.map(([g,,E])=>[g,E]),l);Hu(c,d,u,0);for(let{a:g,k:E}of r){if(g.move){let f=g.move(l);E.root.position.set(f[0],f[1],f[2])}E.face(c),E.eye(lE(g.eyes,l,g.tipo==="humano"?"look":"open"));let m=(g.talk||[]).some(([f,v])=>l>=f&&l<v);g.tipo==="humano"?g.pose?g.pose(E,l):E.pose({armL:[12,8],armR:[m?50+Math.sin(l*8)*15:12,m?30:8],bob:m?Math.abs(Math.sin(l*8))*.015:0}):(E.talk(l,m),g.pose&&g.pose(E,l))}return o&&o.update&&o.update(l,a,c),{focus:t.f?Ra(t.f,l):5,range:t.range??2.4,blur:t.blur??12,bloom:.3,bloomT:.92,vig:.45,exposure:1.02,...t.look||{},...t.lookFn?t.lookFn(l):{}}},i}function ju(n,e,t,i="#E8667F"){n.add(w(2.2,.45,3,R("#6B4A33"),e,.25,t)),n.add(w(2.1,.3,2.8,R("#F3EEE4"),e,.6,t)),n.add(w(2.18,.2,1.9,R(i,{roughness:.9}),e,.8,t+.5)),n.add(w(2.2,1.3,.16,R("#5A3C28"),e,.9,t-1.55)),n.add(w(.8,.2,.45,R("#FFFFFF"),e-.5,.82,t-1.1)),n.add(w(.8,.2,.45,R("#F6E6C8"),e+.5,.82,t-1.1))}function ef(n,e=Math.PI/2){n.root.rotation.z=e}function tf(n,e={}){let{w:t=640,h:i=300,size:s=66}=e;return _e(t,i,r=>{r.clearRect(0,0,t,i),r.fillStyle="#FFFFFF",r.strokeStyle="#2A2A34",r.lineWidth=8,r.beginPath(),r.roundRect(10,10,t-20,i*.72,40),r.fill(),r.stroke(),r.beginPath(),r.moveTo(t*.3,i*.72+6),r.lineTo(t*.26,i*.98),r.lineTo(t*.42,i*.72+6),r.fill(),r.stroke(),r.fillStyle="#2A2A34",r.font=`800 ${s}px Inter`,r.textAlign="center",r.textBaseline="middle";let o=Array.isArray(n)?n:[n];o.forEach((a,l)=>r.fillText(a,t/2,i*.38+(l-(o.length-1)/2)*s*1.15))})}function to(n,e="#F2C14E",t=140,i=256,s=200){return _e(i,s,r=>{r.clearRect(0,0,i,s),r.font=`900 ${t}px Fraunces`,r.textAlign="center",r.textBaseline="middle",r.lineWidth=12,r.strokeStyle="#2A2A34",r.strokeText(n,i/2,s/2),r.fillStyle=e,r.fillText(n,i/2,s/2)})}var no=[0,6,10.34,13.98,19.46,23.12,28.3,31.02,35.18,37.06,40.82,45.52,54.9,58.8,63.74,66.6,71.24,74.7,79.3,82.82,85.5,93.34,95.98,101.66,104.44,108.98,114.38,120.36,122.94,126.84,132.62,135.86,139.72,143.22,146.82,151.08,154.06,157.56,161.1,165.14,169,173.22,176.86,181.7,186.58,192.9,196.62,200.5,204,210.22,213.64,220.12,224.76,231.98,237.34,242.92,246.76,251.5,256.2,260.42,264.62,271.02,279.44,283.2,287.72,294.56,305.42,310.7,316.04,323.2,328.36,332.94,337.28,342.48,344.7,351.08,352.94,361.7,365.34,370.62,375.7,381.2,389.72,397.74,401.64,406.06,412.4,418.56,427.59,430.13,434.47,441.81,450.46,455.2,458.98,463.46,468.16,476.54,478.88,485.3,487,495.66,509.4,514.76,522.58,529,534.6,540.98,546.78,551.84,557.22,563.34,569.68],cE=[["martes",0],["recreo",.98],["estas",2.2],["sentado",2.52],["en",3.02],["el",3.16],["banco",3.26],["de",3.52],["siempre",3.7],["comiendote",4.42],["el",4.98],["bocadillo",5.08],["cuando",6],["tu",6.14],["crush",6.36],["se",6.64],["sienta",6.98],["a",7.4],["tu",7.5],["lado",7.58],["asi",8.44],["sin",9.16],["avisar",9.3],["tu",10.34],["crush",10.5],["la",11.42],["persona",11.6],["que",11.98],["te",12.18],["gusta",12.32],["desde",12.56],["primero",12.8],["te",13.98],["mira",14.2],["respira",15.06],["hondo",15.56],["y",16.52],["dice",16.6],["necesito",17.54],["pedirte",18.1],["un",18.52],["favor",18.64],["un",19.46],["favor",19.66],["enorme",19.96],["y",20.98],["solo",21.16],["te",21.4],["lo",21.58],["puedo",21.72],["pedir",21.9],["a",22.22],["ti",22.38],["el",23.12],["corazon",23.28],["se",23.68],["te",23.94],["sube",24.04],["a",24.36],["la",24.48],["garganta",24.56],["dejas",25.58],["el",25.92],["bocadillo",26.08],["dime",27.34],["me",28.3],["gusta",28.54],["marcos",28.76],["el",29.2],["de",29.84],["baloncesto",30.02],["y",31.02],["tu",31.2],["eres",31.4],["su",31.6],["companero",31.78],["de",32.28],["laboratorio",32.42],["se",33.56],["muerde",33.82],["el",34.16],["labio",34.28],["me",35.18],["ayudas",35.34],["a",35.68],["conquistarlo",35.8],["y",37.06],["el",37.24],["bocadillo",37.36],["de",38.18],["repente",38.38],["sabe",39.46],["a",39.68],["carton",39.82],["tu",40.82],["crush",41],["pidiendote",41.78],["ayuda",42.4],["para",43.2],["enamorar",43.44],["a",43.88],["otra",44.06],["persona",44.3],["y",45.52],["antes",45.72],["de",45.94],["ver",46.12],["que",46.26],["haces",46.46],["si",47.26],["te",47.38],["gustan",47.48],["estas",47.78],["historias",47.98],["de",48.52],["y",48.78],["si",49.08],["suscribete",49.98],["al",50.6],["canal",50.74],["y",51],["activa",51.2],["la",51.58],["campanita",51.68],["y",52.68],["ahora",52.8],["si",53.02],["vamos",53.72],["alla",54.04],["lo",54.9],["logico",55.2],["seria",55.64],["decir",55.96],["que",56.36],["no",56.56],["inventarte",57.04],["una",57.66],["excusa",57.82],["que",58.8],["tienes",58.84],["examenes",59.1],["que",60.2],["marcos",60.32],["y",60.6],["tu",60.78],["no",60.96],["os",61.12],["hablais",61.26],["que",62.08],["te",62.14],["mudas",62.3],["a",62.6],["australia",62.72],["pero",63.74],["ella",63.9],["te",64.18],["esta",64.34],["mirando",64.56],["con",65],["esos",65.28],["ojos",65.56],["y",66.6],["tu",66.8],["dices",66.98],["la",67.6],["peor",67.86],["palabra",68.22],["posible",68.64],["vale",70.1],["esa",71.24],["noche",71.48],["no",71.78],["duermes",72.32],["miras",73.28],["el",73.7],["techo",73.84],["y",74.7],["te",74.78],["preguntas",74.88],["por",75.24],["que",75.64],["duele",75.88],["tanto",76.18],["algo",76.44],["que",76.9],["en",77.5],["realidad",77.64],["no",78.46],["te",78.56],["ha",78.7],["hecho",78.76],["dano",78.94],["nadie",79.3],["te",80.08],["ha",80.3],["empujado",80.38],["nadie",81.38],["te",81.6],["ha",81.82],["pegado",81.9],["y",82.82],["aun",82.88],["asi",83],["te",83.62],["duele",83.8],["el",84.12],["pecho",84.26],["de",84.58],["verdad",84.72],["y",85.5],["no",85.76],["es",85.94],["una",86.14],["forma",86.32],["de",86.58],["hablar",86.76],["en",87.62],["2003",87.88],["naomi",88.9],["eisenberger",89.28],["y",89.94],["su",90.2],["equipo",90.3],["en",90.9],["la",91.02],["universidad",91.1],["de",91.66],["california",91.76],["en",92.24],["los",92.44],["angeles",92.54],["metieron",93.34],["a",93.74],["voluntarios",93.88],["en",94.42],["un",94.64],["escaner",94.74],["cerebral",95.14],["y",95.98],["les",96.06],["pusieron",96.16],["a",96.54],["jugar",96.66],["a",96.88],["un",97.06],["videojuego",97.18],["muy",97.72],["simple",98.06],["tres",98.98],["jugadores",99.22],["pasandose",99.7],["una",100.42],["pelota",100.66],["al",101.66],["principio",101.82],["todos",102.7],["se",102.82],["la",103.08],["pasaban",103.14],["a",103.56],["todos",103.66],["pero",104.44],["de",104.92],["repente",105.1],["los",105.98],["otros",106.12],["dos",106.36],["dejaban",106.64],["de",107.12],["pasarsela",107.28],["al",107.84],["voluntario",107.98],["solo",108.98],["jugaban",109.3],["entre",109.8],["ellos",110.1],["y",110.78],["el",111.06],["voluntario",111.16],["se",111.72],["quedaba",111.96],["mirando",112.3],["fuera",113.34],["que",114.38],["vieron",114.5],["en",114.8],["el",114.98],["escaner",115.12],["que",116.06],["se",116.14],["encendia",116.28],["una",116.78],["parte",116.98],["del",117.3],["cerebro",117.52],["la",118.38],["corteza",118.48],["cingulada",118.9],["anterior",119.48],["que",120.36],["tambien",120.42],["se",120.78],["activa",120.94],["con",121.34],["el",121.5],["dolor",121.64],["fisico",121.88],["cuanto",122.94],["mas",123.22],["excluido",123.48],["se",124.1],["sentia",124.28],["alguien",124.7],["mas",125.42],["se",125.66],["activaba",125.86],["para",126.84],["tu",127.02],["cerebro",127.18],["quedarte",127.98],["fuera",128.26],["no",128.64],["es",128.92],["solo",129.1],["triste",129.3],["duele",130.2],["literalmente",130.78],["asi",132.62],["que",132.88],["no",133.18],["no",133.9],["estas",134.18],["exagerando",134.48],["miercoles",135.86],["plan",136.94],["numero",137.14],["uno",137.48],["el",138.36],["mensaje",138.5],["ella",139.72],["quiere",139.92],["escribirle",140.22],["a",140.86],["marcos",140.94],["pero",141.6],["no",141.64],["sabe",141.92],["que",142.2],["decir",142.36],["te",143.22],["ensena",143.34],["el",143.72],["borrador",143.84],["hola",144.84],["que",145.4],["tal",145.48],["jaja",146.08],["tu",146.82],["lo",147.02],["lees",147.16],["esto",147.9],["es",148.26],["horrible",148.46],["por",149.44],["eso",149.66],["te",149.84],["lo",150.02],["pido",150.12],["a",150.32],["ti",150.46],["asi",151.08],["que",151.42],["coges",151.62],["su",151.96],["movil",152.14],["y",152.96],["escribes",153.02],["escribes",154.06],["lo",154.58],["que",154.8],["tu",154.92],["le",155.16],["dirias",155.3],["a",155.66],["ella",155.84],["si",156.08],["te",156.4],["atrevieras",156.52],["que",157.56],["tiene",157.7],["una",157.96],["risa",158.16],["que",158.54],["se",158.66],["oye",158.82],["desde",159.1],["el",159.28],["otro",159.54],["lado",159.72],["del",159.98],["pasillo",160.18],["que",161.1],["siempre",161.26],["es",161.66],["la",161.86],["primera",161.98],["en",162.3],["ayudar",162.48],["cuando",162.76],["a",163.04],["alguien",163.04],["se",163.52],["le",163.72],["caen",163.82],["las",164.06],["cosas",164.2],["que",165.14],["cuando",165.22],["habla",165.44],["de",165.76],["lo",165.9],["que",166],["le",166.12],["gusta",166.2],["se",166.5],["le",166.94],["olvida",167.06],["todo",167.38],["lo",167.8],["demas",167.98],["ella",169],["lo",169.26],["lee",169.46],["en",169.66],["silencio",169.8],["es",171],["muy",171.36],["bonito",172.1],["te",173.22],["mira",173.38],["raro",173.56],["como",174.52],["sabes",174.72],["tu",175.08],["todo",175.34],["eso",175.66],["de",175.94],["mi",176.12],["te",176.86],["pones",177],["rojo",177.3],["eh",177.68],["es",178.36],["lo",178.92],["que",179.14],["dice",179.26],["la",179.46],["gente",179.6],["lo",180.5],["envia",180.64],["jueves",181.7],["marcos",182.58],["contesta",183.02],["jaja",183.52],["gracias",184.42],["igualmente",185.6],["ella",186.58],["esta",186.9],["feliz",187.28],["tu",188.24],["no",188.36],["entiendes",188.48],["nada",189.04],["igualmente",190.1],["igualmente",191.24],["que",191.92],["viernes",192.9],["plan",193.98],["numero",194.18],["dos",194.58],["el",195.44],["ensayo",195.58],["ella",196.62],["quiere",196.82],["hablar",197.12],["con",197.4],["marcos",197.66],["en",198],["persona",198.2],["pero",198.84],["se",199.06],["pone",199.34],["nerviosa",199.56],["asi",200.5],["que",200.76],["te",200.96],["pide",201.08],["que",201.32],["hagas",201.5],["de",201.82],["marcos",201.94],["para",202.66],["practicar",202.9],["te",204],["pones",204.12],["de",204.36],["pie",204.56],["en",204.74],["su",204.86],["cuarto",205],["botas",205.84],["un",206.28],["balon",206.44],["imaginario",206.7],["hola",207.8],["soy",208.42],["marcos",208.58],["me",209.36],["gusta",209.46],["el",209.64],["baloncesto",209.8],["ella",210.22],["se",211.04],["parte",211.3],["de",211.64],["risa",211.88],["tu",212.76],["tambien",212.82],["y",213.64],["practicais",213.8],["toda",214.38],["la",214.8],["tarde",215.04],["ella",215.92],["te",216.12],["pregunta",216.3],["cosas",216.64],["tu",217.56],["respondes",217.72],["como",218.34],["responderia",218.56],["marcos",219.24],["pero",220.12],["sin",220.3],["darte",220.56],["cuenta",220.86],["las",221.22],["respuestas",221.8],["se",222.36],["van",222.62],["convirtiendo",222.76],["en",223.48],["las",223.62],["tuyas",223.84],["le",224.76],["cuentas",225.06],["que",225.44],["te",225.6],["encanta",225.72],["ver",226.06],["las",226.36],["estrellas",226.56],["que",227.48],["tu",227.6],["abuelo",227.72],["te",228.06],["enseno",228.2],["a",228.62],["pescar",228.72],["que",229.58],["de",229.6],["pequeno",229.74],["querias",230.06],["ser",230.6],["astronauta",230.82],["y",231.98],["ella",232.04],["te",232.3],["escucha",232.48],["con",233.14],["los",233.62],["codos",233.84],["en",234.24],["la",234.38],["mesa",234.5],["durante",234.78],["dos",235.64],["horas",236.18],["cuando",237.34],["te",237.58],["vas",237.82],["ella",238.26],["dice",238.44],["oye",239.36],["sabes",240.16],["que",240.44],["es",240.62],["la",240.74],["primera",240.86],["vez",241.14],["que",241.4],["hablamos",241.56],["tanto",241.86],["sabado",242.92],["plan",243.96],["numero",244.2],["tres",244.58],["la",245.5],["cita",245.72],["marcos",246.76],["ha",247.08],["aceptado",247.28],["ir",247.76],["con",247.92],["ella",248.12],["a",248.32],["la",248.46],["feria",248.54],["y",249.34],["tu",249.46],["les",249.64],["has",249.84],["ayudado",250],["con",250.46],["todo",250.72],["has",251.5],["elegido",251.7],["la",252.1],["hora",252.26],["has",252.88],["mirado",253.02],["el",253.34],["tiempo",253.48],["le",254.22],["has",254.32],["dicho",254.42],["a",254.66],["ella",254.78],["que",254.94],["ponerse",255.2],["y",256.2],["te",256.32],["quedas",256.46],["en",256.78],["casa",256.94],["mirando",257.22],["el",258.14],["movil",258.28],["esperando",259.1],["ocho",260.42],["de",260.66],["la",260.84],["tarde",260.94],["nada",261.8],["nueve",262.68],["nada",263.62],["y",264.62],["aqui",264.76],["viene",264.94],["una",265.2],["pregunta",265.48],["por",266.5],["que",266.62],["te",266.82],["gusta",266.94],["tanto",267.22],["alguien",267.58],["que",267.96],["ni",268.26],["siquiera",268.46],["te",268.9],["ve",269.16],["de",269.3],["esa",269.44],["manera",269.68],["en",271.02],["1993",271.58],["el",272.98],["psicologo",273.14],["roy",273.6],["baumeister",273.92],["y",274.56],["su",274.72],["equipo",274.84],["pidieron",275.12],["a",275.78],["decenas",275.92],["de",276.26],["personas",276.46],["que",276.82],["escribieran",277.1],["dos",277.64],["historias",277.94],["reales",278.48],["una",279.44],["en",279.72],["la",280.06],["que",280.16],["estuvieron",280.26],["enamoradas",280.72],["de",281.24],["alguien",281.46],["que",281.72],["no",281.98],["les",282.12],["correspondia",282.26],["y",283.2],["otra",283.48],["en",283.7],["la",283.9],["que",284.02],["alguien",284.16],["estuvo",284.44],["enamorado",284.86],["de",285.4],["ellas",285.56],["sin",285.84],["ser",286.2],["correspondido",286.46],["y",287.72],["casi",287.84],["todos",288.04],["tenian",288.4],["historias",288.8],["de",289.36],["los",289.52],["dos",289.66],["lados",289.88],["casi",290.76],["todo",291.02],["el",291.3],["mundo",291.5],["ha",291.76],["estado",291.96],["alguna",292.24],["vez",292.58],["donde",292.86],["estas",293.1],["tu",293.48],["ahora",293.78],["pero",294.56],["hubo",294.84],["algo",295.16],["que",295.4],["les",295.6],["sorprendio",295.74],["los",296.94],["que",297.08],["no",297.26],["eran",297.4],["correspondidos",297.62],["solian",298.4],["recordar",298.92],["la",299.46],["historia",299.58],["con",299.92],["algo",300.26],["bonito",300.5],["la",301.5],["ilusion",301.6],["los",302.58],["nervios",302.7],["lo",303.64],["vivo",303.76],["que",304],["se",304.22],["sentian",304.34],["los",305.42],["que",305.6],["rechazaban",305.74],["en",306.48],["cambio",306.56],["la",307.36],["recordaban",307.44],["sobre",307.98],["todo",308.24],["con",308.54],["culpa",308.8],["e",309.28],["incomodidad",309.58],["no",310.7],["sabian",310.88],["que",311.26],["hacer",311.46],["nadie",312.24],["les",312.56],["habia",312.72],["ensenado",312.96],["como",313.5],["decir",313.84],["que",314.2],["no",314.42],["sin",314.6],["hacer",314.86],["dano",315.16],["o",316.04],["sea",316.2],["que",316.88],["querer",316.96],["a",317.22],["alguien",317.4],["que",317.66],["no",317.72],["te",318.06],["quiere",318.22],["duele",318.52],["pero",319.68],["no",320],["es",320.34],["el",320.5],["peor",320.64],["lugar",320.92],["en",321.2],["el",321.44],["que",321.54],["se",321.66],["puede",321.8],["estar",322.02],["diez",323.2],["de",323.66],["la",323.76],["noche",323.86],["te",324.58],["llega",324.74],["un",324.96],["mensaje",325.16],["es",326.04],["ella",326.24],["estas",327.08],["despierto",327.36],["contestas",328.36],["en",328.92],["menos",329.1],["de",329.34],["un",329.54],["segundo",329.68],["si",330.58],["ha",331.38],["sido",331.56],["horrible",331.78],["le",332.94],["llamas",333.2],["ella",334.04],["te",334.28],["lo",334.46],["cuenta",334.6],["todo",334.9],["marcos",335.78],["llego",336.22],["tarde",336.48],["se",337.28],["paso",337.44],["la",337.64],["noche",337.82],["mirando",338.04],["el",338.5],["movil",338.64],["hablo",339.44],["cuarenta",339.74],["minutos",340.08],["de",340.6],["su",340.9],["equipo",341.04],["de",341.3],["baloncesto",341.48],["no",342.48],["le",342.68],["pregunto",342.78],["ni",343.32],["una",343.54],["cosa",343.82],["y",344.7],["cuando",344.8],["ella",345.04],["le",345.38],["hablo",345.54],["del",345.8],["mensaje",345.92],["el",346.82],["bonito",346.94],["el",347.72],["de",347.82],["su",347.92],["risa",348.06],["marcos",348.88],["dijo",349.14],["que",349.46],["mensaje",350.1],["no",351.08],["lo",351.38],["habia",351.54],["leido",351.8],["entero",352.18],["ella",352.94],["se",353.18],["queda",353.4],["callada",353.64],["un",354.04],["momento",354.24],["sabes",355.3],["que",355.66],["es",355.78],["lo",355.9],["peor",356.02],["que",356.8],["he",356.96],["estado",357.12],["toda",357.36],["la",357.76],["noche",357.98],["pensando",358.24],["que",358.74],["me",359.06],["lo",359.16],["pasaba",359.28],["mejor",359.62],["ensayando",360],["contigo",360.58],["tu",361.7],["no",361.88],["dices",362.06],["nada",362.36],["te",363.24],["tiembla",363.34],["la",363.72],["mano",363.84],["con",364.12],["el",364.32],["movil",364.44],["perdona",365.34],["dice",366.18],["ella",366.48],["es",367.32],["tarde",367.52],["manana",368.2],["hablamos",368.56],["y",368.94],["cuelga",369.6],["domingo",370.62],["no",371.52],["te",371.82],["escribe",371.98],["lunes",372.96],["te",373.94],["evita",374.08],["en",374.44],["el",374.58],["pasillo",374.68],["y",375.7],["tu",375.82],["piensas",375.92],["que",376.36],["lo",376.56],["has",376.72],["estropeado",376.86],["todo",377.48],["que",378.28],["tendrias",378.42],["que",378.84],["haber",379],["dicho",379.14],["que",379.48],["no",379.64],["desde",379.84],["el",380.04],["principio",380.26],["pero",381.2],["por",381.42],["que",381.9],["de",382.14],["repente",382.28],["ella",382.7],["se",383.06],["fija",383.26],["en",383.56],["ti",383.76],["como",384.42],["puede",384.6],["gustarte",384.9],["alguien",385.38],["que",385.74],["llevas",386.02],["anos",386.28],["viendo",386.62],["y",387.08],["nunca",387.5],["te",387.78],["habia",388],["llamado",388.16],["la",388.6],["atencion",388.76],["en",389.72],["2015",390],["los",391.02],["investigadores",391.14],["lucy",391.84],["hunt",392.28],["paul",392.96],["eastwick",393.18],["y",393.7],["eli",394],["finkel",394.16],["estudiaron",394.6],["a",395.4],["167",395.58],["parejas",396.7],["les",397.74],["preguntaron",397.9],["cuanto",398.5],["tiempo",399],["se",399.24],["conocian",399.46],["antes",399.98],["de",400.28],["empezar",400.46],["a",400.76],["salir",400.9],["y",401.64],["luego",401.72],["compararon",401.96],["lo",402.64],["guapo",402.86],["que",403.18],["le",403.38],["parecia",403.48],["cada",404.06],["uno",404.2],["a",404.5],["gente",404.7],["de",404.96],["fuera",405.16],["las",406.06],["parejas",406.26],["que",406.62],["empezaron",406.8],["a",407.26],["salir",407.36],["muy",407.62],["rapido",407.88],["solian",408.34],["parecerse",408.82],["guapo",409.84],["con",410.2],["guapa",410.4],["normal",411.08],["con",411.34],["normal",411.6],["pero",412.4],["las",412.68],["que",412.88],["se",413],["conocian",413.12],["desde",413.6],["hacia",413.8],["mucho",414.16],["por",414.88],["ejemplo",415.02],["porque",415.6],["eran",415.72],["amigos",416],["no",416.8],["seguian",416.94],["esa",417.42],["regla",417.64],["con",418.56],["el",418.74],["tiempo",418.86],["lo",419.52],["que",419.81],["mas",419.81],["contaba",419.93],["ya",420.37],["no",420.57],["era",420.73],["como",420.91],["se",421.23],["veia",421.45],["la",421.85],["otra",421.91],["persona",422.11],["desde",422.59],["fuera",422.77],["sino",423.59],["como",423.77],["era",424.15],["por",424.47],["dentro",424.69],["lo",425.57],["que",425.75],["la",425.85],["hacia",426.01],["unica",426.33],["marcos",427.59],["es",428.07],["el",428.29],["que",428.45],["todo",428.57],["el",428.85],["mundo",429.07],["mira",429.27],["tu",430.13],["eres",430.31],["el",430.81],["que",431.03],["la",431.13],["escucho",431.25],["dos",431.71],["horas",432.01],["hablando",432.35],["de",432.81],["estrellas",433.07],["martes",434.47],["recreo",435.41],["estas",436.53],["en",436.85],["el",437.01],["banco",437.11],["de",437.35],["siempre",437.53],["y",438.39],["ella",438.53],["vuelve",438.79],["a",439.21],["sentarse",439.27],["a",439.71],["tu",439.85],["lado",439.93],["sin",440.59],["avisar",440.83],["tengo",441.81],["que",442.05],["preguntarte",442.21],["una",442.81],["cosa",442.95],["dice",443.65],["el",444.57],["mensaje",444.75],["que",445.23],["le",445.52],["escribiste",445.52],["a",445.98],["marcos",446.12],["lo",447.04],["de",447.16],["mi",447.3],["risa",447.4],["lo",448.28],["de",448.36],["que",448.5],["soy",448.66],["la",448.86],["primera",449],["en",449.3],["ayudar",449.48],["te",450.46],["mira",450.62],["eso",451.46],["no",451.72],["lo",452.02],["dice",452.14],["la",452.38],["gente",452.56],["eso",453.42],["lo",453.64],["has",453.86],["visto",453.98],["tu",454.2],["silencio",455.2],["un",456.28],["pajaro",456.4],["se",456.8],["lleva",456.98],["una",457.32],["miga",457.42],["de",457.7],["tu",457.9],["bocadillo",458],["y",458.98],["entonces",459.14],["por",460.08],["primera",460.16],["vez",460.54],["en",460.82],["tres",461.02],["anos",461.26],["no",462.1],["mientes",462.34],["si",463.46],["lo",464.24],["he",464.4],["visto",464.48],["yo",464.66],["porque",465.4],["llevo",465.58],["desde",465.94],["primero",466.08],["fijandome",466.62],["en",467.26],["ti",467.44],["ella",468.16],["no",468.4],["dice",468.66],["nada",468.9],["tu",469.74],["esperas",469.88],["el",470.36],["golpe",470.5],["que",471.22],["se",471.32],["ria",471.44],["que",471.74],["se",472.26],["levante",472.4],["que",473.22],["diga",473.36],["lo",474.04],["siento",474.18],["pero",474.74],["te",474.88],["veo",475.14],["como",475.32],["un",475.54],["amigo",475.72],["pero",476.54],["no",476.78],["pasa",477.06],["nada",477.36],["de",477.8],["eso",478.02],["ella",478.88],["se",479.12],["pone",479.36],["roja",479.58],["muy",480.58],["roja",480.78],["y",481.68],["dice",481.84],["y",482.7],["por",482.84],["que",483.2],["me",483.4],["has",483.54],["ayudado",483.66],["con",484.08],["marcos",484.28],["porque",485.3],["me",485.6],["lo",485.72],["pediste",485.84],["tu",486.16],["ella",487],["se",487.28],["tapa",487.48],["la",487.7],["cara",487.88],["con",488.12],["las",488.32],["manos",488.5],["soy",489.36],["idiota",489.74],["y",490.84],["se",491],["rie",491.14],["esa",491.92],["risa",492.26],["que",492.58],["se",492.72],["oye",492.88],["desde",493.14],["el",493.38],["otro",493.68],["lado",493.86],["del",494.2],["pasillo",494.42],["y",495.66],["aqui",496.02],["va",496.22],["el",496.42],["ultimo",496.62],["dato",496.92],["en",497.84],["2021",497.96],["la",499.18],["psicologa",499.26],["danu",499.8],["anthony",500.22],["stinson",500.52],["y",501.08],["su",501.3],["equipo",501.4],["preguntaron",501.7],["a",502.54],["casi",502.7],["dos",502.92],["mil",503.16],["personas",503.4],["entre",504.2],["universitarios",504.48],["y",505.36],["adultos",505.48],["de",505.88],["internet",505.98],["como",506.72],["habia",506.92],["empezado",507.22],["su",507.72],["relacion",507.9],["de",508.32],["pareja",508.52],["y",509.4],["cerca",509.62],["de",509.88],["dos",510.1],["de",510.38],["cada",510.56],["tres",510.7],["dijeron",511.08],["lo",511.6],["mismo",511.72],["empezaron",512.62],["siendo",513.2],["amigos",513.54],["no",514.76],["fue",514.94],["un",515.18],["flechazo",515.36],["no",516.28],["fue",516.44],["una",516.66],["cita",516.82],["perfecta",517.1],["fueron",518.12],["muchos",518.48],["recreos",518.82],["muchas",519.82],["conversaciones",520.08],["y",520.82],["muchos",521.34],["favores",521.68],["lo",522.58],["curioso",522.76],["es",523.24],["que",523.42],["la",523.56],["mayoria",523.68],["de",524],["los",524.24],["estudios",524.36],["sobre",524.9],["el",525.18],["amor",525.36],["se",525.6],["centran",525.96],["en",526.32],["desconocidos",526.5],["que",527.18],["se",527.4],["ven",527.54],["por",527.7],["primera",527.92],["vez",528.26],["y",529],["se",529.26],["olvidan",529.4],["del",529.76],["camino",529.94],["mas",530.26],["comun",530.68],["de",530.98],["todos",531.22],["el",532.06],["del",532.26],["amigo",532.4],["que",532.74],["estaba",533.02],["ahi",533.44],["miercoles",534.6],["ella",535.74],["te",535.96],["espera",536.16],["a",536.5],["la",536.68],["salida",536.74],["del",537.1],["instituto",537.3],["oye",538.36],["el",539.08],["sabado",539.16],["hay",539.48],["feria",539.68],["otra",540.02],["vez",540.2],["te",540.98],["da",541.12],["un",541.28],["codazo",541.42],["y",542.24],["esta",542.38],["vez",542.62],["no",542.86],["necesito",543.12],["que",543.7],["me",543.82],["ayudes",543.96],["a",544.26],["elegir",544.44],["la",544.78],["hora",544.94],["solo",545.54],["que",545.82],["vengas",545.96],["marcos",546.78],["pasa",547.2],["al",547.5],["lado",547.78],["botando",547.96],["el",548.42],["balon",548.56],["eh",549.2],["que",549.9],["mensaje",550.02],["era",550.29],["ese",550.56],["al",551],["final",551.08],["ella",551.84],["te",552.12],["mira",552.3],["tu",553.14],["la",553.32],["miras",553.48],["y",554.28],["los",554.42],["dos",554.6],["decis",554.8],["a",555.2],["la",555.32],["vez",555.38],["nada",556.2],["al",557.22],["final",557.38],["no",558.12],["le",558.24],["ayudaste",558.36],["a",558.82],["conquistar",558.94],["a",559.5],["otra",559.54],["persona",559.74],["le",560.7],["ayudaste",560.82],["a",561.3],["ver",561.44],["lo",561.6],["que",561.8],["tenia",561.92],["delante",562.26],["y",563.34],["de",563.42],["paso",563.52],["aprendiste",564.14],["algo",564.72],["que",565],["da",565.2],["mas",565.34],["miedo",565.72],["que",566.12],["cualquier",566.28],["rechazo",566.8],["decir",568.04],["la",568.48],["verdad",568.66],["y",569.68],["tu",569.8],["que",570.42],["habrias",570.5],["hecho",570.86],["le",571.7],["habrias",571.8],["ayudado",572.16],["o",572.68],["le",573.26],["habrias",573.4],["dicho",573.74],["la",573.98],["verdad",574.16],["desde",574.48],["el",574.74],["principio",574.96],["te",576.06],["leo",576.18],["en",576.44],["los",576.52],["comentarios",576.62]],Uh=(n,e=0)=>{for(let[t,i]of cE)if(i>=e&&t===n)return i;return e};var La=(n,e,t=200,i=200)=>{let s=new z(new be(t,i),R(e,{roughness:1}));return s.rotation.x=-Math.PI/2,s.receiveShadow=!0,n.add(s),s},It=(n,e={})=>{let{w:t=512,h:i=200,bg:s="#FBF7EC",fg:r="#2A2A34",size:o=64}=e;return _e(t,i,a=>{a.clearRect(0,0,t,i),a.fillStyle=s,a.beginPath(),a.roundRect(6,6,t-12,i-12,26),a.fill(),a.fillStyle=r,a.font=`900 ${o}px Fraunces`,a.textAlign="center",a.textBaseline="middle",n.forEach((l,c)=>a.fillText(l,t/2,i/2+(c-(n.length-1)/2)*o*1.1))})};function nf(n="#E9B44C"){let e=new le;e.add(w(2.4,2.4,9,R(n,{roughness:.5}),0,1.5,0));for(let i=0;i<6;i++)for(let s of[-1,1])e.add(w(.02,.8,1.1,R("#1A2233",{roughness:.1,metalness:.5}),s*1.21,2,-3.6+i*1.4));e.add(w(2.2,1,.02,R("#1A2233",{roughness:.1}),0,2,4.51));let t=w(.02,1.8,1,R("#2A2A34"),1.22,1.2,2.8);e.add(t);for(let i of[-3,3])for(let s of[-1,1]){let r=new z(new ot(.45,.45,.3,20),R("#1A1A20"));r.rotation.z=Math.PI/2,r.position.set(s*1.1,.45,i),e.add(r)}return e}function hE(n,e=.5){let t=new le,i=_e(1024,256,r=>{r.clearRect(0,0,1024,256);let o=Oe(77);for(let a=0;a<70;a++){let l=r.createRadialGradient(o()*1024,128+(o()-.5)*90,0,0,0,0)}for(let a=0;a<40;a++){let l=o()*1024,c=128+(o()-.5)*70,h=40+o()*80,d=r.createRadialGradient(l,c,0,l,c,h);d.addColorStop(0,["rgba(200,180,255,.22)","rgba(255,220,200,.2)","rgba(170,200,255,.2)"][a%3]),d.addColorStop(1,"rgba(0,0,0,0)"),r.fillStyle=d,r.fillRect(0,0,1024,256)}r.fillStyle="rgba(20,10,30,.35)";for(let a=0;a<18;a++)r.beginPath(),r.ellipse(o()*1024,128+(o()-.5)*30,40+o()*60,6+o()*8,(o()-.5)*.3,0,7),r.fill();for(let a=0;a<2600;a++){let l=128+(o()+o()+o()-1.5)*70;r.fillStyle=`rgba(255,255,255,${.3+o()*.7})`;let c=o()<.03?2.4:1.2;r.fillRect(o()*1024,l,c,c)}}),s=new z(new be(400,100),new rt({map:i,transparent:!0,depthWrite:!1,fog:!1,blending:wn}));return s.position.set(0,60,-150),s.rotation.z=e,t.add(s),n.add(t),t}function dE(n,e=0,t=-1){for(let i=0;i<4;i++){let s=w(5,.22,.6,R("#5A3E2A",{roughness:1}),e,.1,t-i*1.1);s.receiveShadow=!0,n.add(s);for(let r=0;r<7;r++){let o=new z(new un(.16,.35,6),R(["#4F7A44","#6E9A50"][r%2]));o.position.set(e-2.1+r*.7,.38,t-i*1.1),n.add(o)}}}function Oh(n,e=40,t=3,i=[-12,12,-40,4]){let s=Oe(t),r=_e(256,512,o=>{o.clearRect(0,0,256,512),o.strokeStyle="#3E6A34",o.lineWidth=6,o.beginPath(),o.moveTo(128,512);for(let a=512;a>0;a-=20)o.lineTo(128+Math.sin(a*.05)*40,a);o.stroke();for(let a=0;a<60;a++){o.fillStyle=["#4F8A44","#6EA850","#3E6A34"][a%3],o.beginPath();let l=s()*512;o.ellipse(128+Math.sin(l*.05)*40+(s()-.5)*60,l,16,10,s()*3,0,7),o.fill()}});for(let o=0;o<e;o++){let a=1.5+s()*4,l=Le(r,a*.5,a),c=s()<.5?-1:1;l.position.set(c*(8.8+s()*.4),a/2,i[2]+s()*(i[3]-i[2])),l.rotation.y=c*-Math.PI/2,n.add(l)}}function sf(n,e=200,t=5,i=10,s=30,r=2){let o=Oe(t),a=_e(64,64,l=>{l.clearRect(0,0,64,64),l.fillStyle="#6E9A50";for(let c=0;c<7;c++)l.beginPath(),l.moveTo(10+c*7,64),l.lineTo(14+c*7+(c-3)*3,10+c%3*8),l.lineTo(18+c*7,64),l.fill()});for(let l=0;l<e;l++){let c=Le(a,.5,.5);c.position.set((o()-.5)*i,.25,r-o()*s),c.rotation.y=o()*3,n.add(c)}}ye.pasteleria=n=>{n.fog=new Re("#F3D2C0",.02),n.add(pi(16,14,"#F2E6DA","#E2CFC0",8)),n.add(w(16,5,.3,R("#E89AA8"),0,2.5,-3.2));for(let i=0;i<6;i++)n.add(w(.12,5,.05,R("#F6C2CC"),-6+i*2.4,2.5,-3.02));n.add(w(5.4,1,.9,R("#8A5A3C"),0,.5,-1.2)),n.add(w(5.5,.08,1,R("#F4EEE6"),0,1.04,-1.2)),n.add(w(3.6,.1,.5,R("#F4EEE6"),0,2.1,-3)),n.add(w(3.6,.1,.5,R("#F4EEE6"),0,2.9,-3));let e=Le(It(["PASTELER\xCDA"],{bg:"#6C4A2C",fg:"#FFE7B8",size:80,w:768,h:160}),2.8,.58);e.position.set(0,3.9,-3),n.add(e),n.add(new we("#FFF0F0","#A07060",1));let t=je("#FFE6C8",1.8,[3,8,6],8,30);n.add(t);for(let i=0;i<3;i++){let s=new nt("#FFD8A8",5,7,1.6);s.position.set(-2+i*2,3.4,-.5),n.add(s)}};ye.espacio=n=>{n.background=new ce("#05060E"),vn(n,2600,200,3),n.add(new we("#8FA8FF","#101020",.5));let e=new Di("#FFF4E0",3.2);e.position.set(-10,6,8),n.add(e)};ye.aula=n=>{n.fog=new Re("#E8DCC8",.02),n.add(pi(16,16,"#C9B89A","#BBA98A",10)),n.add(w(16,5,.3,R("#E8DCC0"),0,2.5,-3.6)),n.add(w(4.4,1.8,.06,R("#2F5A48"),0,2.3,-3.42)),n.add(w(4.6,.1,.2,R("#8E6242"),0,1.36,-3.35));let e=Le(_e(512,200,t=>{t.clearRect(0,0,512,200),t.fillStyle="#F4F0E4",t.font="700 60px Caveat",t.fillText("EXAMEN  \u2014  2 + 2 = ?",30,90),t.fillText("x\xB2 \u2212 9 = 0",60,170)}),3.4,1.3);e.position.set(0,2.35,-3.38),n.add(e),n.add(new we("#FFFFFF","#9A8A70",1)),n.add(je("#FFE8C8",2.2,[-6,8,6],10,40))};ye.ruaV=(n,e)=>{eo(n,{seed:e.seed||0,night:e.night,dusk:e.dusk}),e.selva&&(Oh(n,60,4),sf(n,260,6,9,40))};ye.apagon=(n,e)=>{n.fog=new Re("#0A0C18",.03),ft(n,-170,500,240,[[0,"#04050C"],[.6,"#0C1028"],[1,"#1A1A34"]]),vn(n,1800,200,4),xa(n,!0);let t=6,i=0;for(;t>-60;){let s=7+i*37%5;n.add(ts(300+i,{x:13,z:t-s/2,w:8,d:s,floors:5,side:-1,night:!0,lit:0})),n.add(ts(400+i,{x:-13,z:t-s/2,w:8,d:s,floors:6,side:1,night:!0,lit:0})),t-=s,i++}n.add(new we("#5A64A8","#141420",.5)),n.add(je("#8A9AE0",.7,[-10,20,10],30,90))};ye.azotea=(n,e)=>{n.background=new ce("#03040A"),n.fog=new Re("#060814",.008),vn(n,4200,200,9),hE(n,e.ang??.45),ii(n,-60,300,30,["#0E1020","#121428","#161830"],!1,7);let t=w(16,.3,12,R("#3A3A44",{roughness:1}),0,-.15,-2);t.receiveShadow=!0,n.add(t),n.add(w(16,.5,.2,R("#4A4A54"),0,.25,-8)),n.add(w(1.4,1.2,1.4,R("#4A4A54"),4.5,.6,-5)),n.add(new we("#6A78C8","#141420",.55)),n.add(je("#9AAAF0",.6,[-6,10,6],12,40))};ye.panaderia=n=>{ye.pasteleria(n);let e=Le(It(["PANADER\xCDA"],{bg:"#6C4A2C",fg:"#FFE7B8",size:80,w:768,h:160}),2.8,.58);e.position.set(0,3.9,-2.98),n.add(e)};ye.metro=n=>{n.background=new ce("#0A0C10"),n.fog=new Re("#0C1014",.07);let e=R("#4A4E54",{roughness:.9,side:sn}),t=new z(new ot(3.2,3.2,60,32,1,!0,0,Math.PI),e);t.rotation.set(Math.PI/2,0,Math.PI/2),t.rotation.order="YXZ";let i=new le,s=new z(new ot(3.2,3.2,60,32,1,!0),e);s.rotation.x=Math.PI/2,s.position.set(0,1.2,-20),i.add(s),n.add(i);let r=w(6.4,.1,60,R("#2A2C30"),0,-.05,-20);n.add(r);for(let o of[-.75,.75])n.add(w(.08,.12,60,R("#8A8E98",{metalness:.8,roughness:.3}),o,.1,-20));for(let o=0;o<40;o++)n.add(w(2.2,.08,.2,R("#3A2E26"),0,.03,5-o*1.5));for(let o=0;o<6;o++){let a=new nt("#FFE0A0",4,8,1.8);a.position.set(2.2,3,2-o*8),n.add(a);let l=Je("#FFE0A0",.5,.9);l.position.copy(a.position),n.add(l)}n.add(new we("#8A90A0","#202024",1.1))};ye.bosque=(n,e)=>{n.fog=new Re(e.nieve?"#E8EEF4":"#C8D0B8",.025),ft(n,-100,500,200,e.nieve?[[0,"#9AB0C8"],[1,"#EEF2F6"]]:[[0,"#8AA8C0"],[.7,"#C8D4C8"],[1,"#E8E4C8"]]),La(n,e.nieve?"#F2F4F8":"#6E8A48");let t=Oe(14);for(let i=0;i<26;i++)qt(n,(t()-.5)*30,-4-t()*22,1.2+t()*.8,e.nieve?["#4A6A5A","#5A7A6A","#E8EEF4","#FFFFFF"]:["#3E5F3A","#4F7A44","#6E9A50","#A9B65A"],i);if(e.ruina){let i=ts(55,{x:6,z:-14,w:10,d:8,floors:5,side:-1,night:!1,lit:0,col:"#A8A49A"});n.add(i),Oh(n,0)}n.add(new we("#E9EEFF","#5A6A4A",.95)),n.add(je("#FFE8C0",2.4,[-10,14,8],18,60))};ye.rio=(n,e)=>{ye.parque(n,e);let t=new z(new be(60,3.4),new Ie({color:"#4A8AB0",roughness:.08,metalness:.3}));t.rotation.x=-Math.PI/2,t.position.set(0,.02,-3.6),n.add(t)};ye.playa=(n,e)=>{let t=!!e.dusk;n.fog=new Re(t?"#F2A880":"#CFE8F0",.006),ft(n,-200,900,300,t?[[0,"#3A3A78"],[.45,"#C86A88"],[.75,"#F6A060"],[1,"#FFD890"]]:[[0,"#4F9AD8"],[.6,"#9FD0E8"],[1,"#E8F4F0"]]);let i=Je(t?"#FFC070":"#FFFFF0",t?30:16,.9);i.position.set(0,t?6:40,-220),i.material.fog=!1,n.add(i);let s=La(n,"#E8D4A0"),r=new z(new be(800,400),new Ie({color:t?"#5A6AA0":"#3A9AC0",roughness:.12,metalness:.4}));r.rotation.x=-Math.PI/2,r.position.set(0,.03,-206),n.add(r);let o=w(800,.02,.6,R("#F4F8FA"),0,.04,-6.2);if(n.add(o),n.userData.foam=o,e.roca){let a=new z(new Li(1.1,0),R("#7A6A60"));a.scale.set(1.4,.55,1),a.position.set(0,.25,-1),a.castShadow=a.receiveShadow=!0,n.add(a)}n.add(new we(t?"#FFC8A8":"#E9F4FF","#C8A878",1)),n.add(je(t?"#FFB070":"#FFF0D0",t?2.2:3,[0,t?5:16,-14],16,60))};ye.svalbard=n=>{n.fog=new Re("#C8D8E8",.02),ft(n,-200,700,260,[[0,"#4A5A8A"],[.6,"#A8B8D8"],[1,"#E8EEF8"]]),La(n,"#F4F6FA");let e=Oe(19);for(let l=0;l<8;l++){let c=new z(new un(10+e()*12,10+e()*10,7),R("#E8EEF4",{roughness:1}));c.position.set(-40+l*12,4,-40-e()*30),n.add(c)}let t=new z(new bt(14,32,16,0,Math.PI*2,0,Math.PI/2),R("#EEF2F6",{roughness:1}));t.scale.y=.5,t.position.set(0,0,-20),n.add(t);let i=w(3,4.4,6,R("#9A9EA4",{roughness:.8}),0,1.6,-6.5);i.rotation.x=-.18,n.add(i);let s=w(1.4,2.2,.1,R("#4A4E56",{metalness:.5}),0,1.1,-3.45);n.add(s);let r=zt(2.6,1,"#7FE8FF",1.3);r.position.set(0,3.1,-3.3),r.rotation.x=-.18,n.add(r);let o=Je("#7FE8FF",4,.35);o.position.set(0,3.1,-3),n.add(o);let a=[];for(let l=0;l<300;l++){let c=Je("#FFFFFF",.05,.9);n.add(c),a.push([c,e()*20-10,e()*8,e()*12-8,e()])}n.userData.snow=a,n.add(new we("#D8E8FF","#8A9AB0",1.1)),n.add(je("#F0F4FF",1.6,[-8,10,8],16,50))};ye.huerto=(n,e)=>{ye.parque(n,e),dE(n,0,-1.4)};ye.biblio=n=>{n.fog=new Re("#4A3A2A",.03),n.add(si(18,14,"#6D4A33")),n.add(w(18,6,.3,R("#5A3E2A"),0,3,-3.4));let e=Oe(8);for(let s=0;s<5;s++){n.add(w(14,.06,.4,R("#3E2A1C"),0,.5+s*.9,-3.05));for(let r=0;r<60;r++){let o=.1+e()*.1,a=.5+e()*.3;n.add(w(o,a,.3,R(["#8A3A2A","#2F5A48","#3A4F7A","#C9A06A","#6A3A5A"][r%5]),-6.8+r*.23,.5+s*.9+a/2+.03,-3.05))}}n.add(new we("#FFE8C8","#3A2A1C",.7));let t=new nt("#FFC880",10,8,1.6);t.position.set(0,2.6,.5),n.add(t);let i=Je("#FFC880",1,.4);i.position.copy(t.position),n.add(i)};ye.hotel=n=>{n.fog=new Re("#E8D8C0",.02),n.add(si(18,14,"#8A5A3A")),n.add(w(18,6,.3,R("#C8B898"),0,3,-3.4));for(let i of[-3,3]){n.add(w(2.4,2.6,.05,R("#9FC8E8",{roughness:.05,metalness:.3,transparent:!0,opacity:.35}),i,2.4,-3.22));let s=Le(_e(256,256,r=>{r.clearRect(0,0,256,256),r.strokeStyle="#FFFFFF",r.lineWidth=3;for(let o=0;o<9;o++)r.beginPath(),r.moveTo(128,128),r.lineTo(128+Math.cos(o*.7)*140,128+Math.sin(o*.7)*140),r.stroke()}),2.4,2.4);s.position.set(i,2.4,-3.18),n.add(s)}let e=w(3.2,.6,2.4,R("#F4F0E4"),0,.3,-1.6);n.add(e),n.add(w(3.3,1.4,.2,R("#6A3A2A"),0,.7,-2.8)),Oh(n,0);let t=Le(_e(256,256,i=>{i.clearRect(0,0,256,256);for(let s=0;s<90;s++)i.fillStyle=["#4F8A44","#6EA850"][s%2],i.beginPath(),i.ellipse(__sr()*256,__sr()*120,12,8,1,0,7),i.fill()}),3,3);t.position.set(3,3.6,-3.15),n.add(t),n.add(new we("#FFF0E0","#8A6A4A",1)),n.add(je("#FFE0B0",2,[-4,8,6],10,30))};ye.selva=n=>{n.fog=new Re("#7AA870",.05),ft(n,-100,400,200,[[0,"#4A7A5A"],[1,"#B8D8A0"]]),La(n,"#3E5A2A");let e=Oe(23);for(let t=0;t<40;t++)qt(n,(e()-.5)*26,-2-e()*18,1.6+e(),["#1E4A24","#2E6A34","#4A8A3E","#7AB048"],t);sf(n,160,9,12,12,3),n.add(new we("#D8F0C8","#2A3A1A",.9)),n.add(je("#FFF0C0",2.2,[-6,14,4],14,50))};ye.desierto=n=>{ye.sabana(n,{})};var Bh=(n,e,t=200,i=200)=>{let s=new z(new be(t,i),R(e,{roughness:1}));return s.rotation.x=-Math.PI/2,s.receiveShadow=!0,n.add(s),s};var uE=(n,e={})=>{let{w:t=512,h:i=360,size:s=92,col:r="#1E2A55"}=e,o=Array.isArray(n)?n:[n];return _e(t,i,a=>{a.fillStyle="#FBF8EE",a.fillRect(0,0,t,i),a.strokeStyle="#D8D0BC",a.lineWidth=4,a.strokeRect(6,6,t-12,i-12),a.fillStyle=r,a.font=`700 ${s}px Caveat`,a.textAlign="center",a.textBaseline="middle",o.forEach((l,c)=>a.fillText(l,t/2,i/2+(c-(o.length-1)/2)*s*1.05))})};function rf(n,e=.9,t={}){let i=uE(n,t),s=new z(new be(e,e*(t.h||360)/(t.w||512)),new Ie({map:i,roughness:.9,emissive:"#FFFFFF",emissiveMap:i,emissiveIntensity:t.glow??.25}));return s.renderOrder=3,s}function Da(n={}){let{w:e=10,h:t=7,col:i="#E8C8A0",win:s=[0,2.6,2,1.8],night:r=!1,inner:o="#F2D49A",lit:a=r,brick:l=!1,sill:c=.9}=n,h=new le,[d,u,p,g]=s,E=()=>l?new Ie({map:Fa(i,3,3),roughness:.95}):R(i,{roughness:.9}),m=d-p/2+e/2,f=e/2-(d+p/2),v=u-g/2,_=t-(u+g/2);h.add(w(m,t,.3,E(),-e/2+m/2,t/2,0)),h.add(w(f,t,.3,E(),e/2-f/2,t/2,0)),h.add(w(p,v,.3,E(),d,v/2,0)),h.add(w(p,_,.3,E(),d,t-_/2,0));let y=R("#F4F0E4");for(let[B,H,W,ee]of[[d-p/2,u,.1,g+.1],[d+p/2,u,.1,g+.1],[d,u+g/2,p+.2,.1],[d,u,.05,g]])h.add(w(W,ee,.36,y,B,H,0));h.add(w(p+.4,.1,.5,y,d,u-g/2-.03,.12));let L=3.2,C=R(o,{roughness:.9});h.add(w(p+3,t,.2,C,d,t/2,-L)),h.add(w(.2,t,L,C,d-p/2-1.4,t/2,-L/2)),h.add(w(.2,t,L,C,d+p/2+1.4,t/2,-L/2)),h.add(w(p+3,.2,L,R("#8A6A4A"),d,v-c,-L/2)),h.add(w(p+3,.2,L,C,d,u+g/2+.5,-L/2));let b=new nt("#FFC880",a?9:2.5,7,1.4);b.position.set(d,u+.6,-1.2),h.add(b);let F=zt(p+2.6,t*.6,"#FFD9A0",a?.35:.08);F.position.set(d,u,-L+.12),h.add(F);let S=w(p-.04,g,.06,R("#E8E2D2",{roughness:.8}),d,u,.1);S.castShadow=!1,h.add(S);let A=[];for(let B=0;B<10;B++){let H=w(p-.04,.015,.07,"#B8B0A0",d,0,.11,!1);h.add(H),A.push([H,B])}let P=B=>{let H=Math.max(.001,g*B);S.scale.y=H/g,S.position.y=u+g/2-H/2,S.visible=B>.01,A.forEach(([W,ee])=>{let Z=u+g/2-(ee+.5)*g/10;W.visible=B>.01&&Z>u+g/2-H,W.position.y=Z})};return P(0),h.userData={persiana:P,luz:B=>{b.intensity=B?9:2.5,F.material.emissiveIntensity=B?.35:.08},win:s,lamp:b},h.children.forEach(B=>{B.castShadow=B.castShadow??!0,B.receiveShadow=!0}),h}function io(n={}){let{col:e="#E8C8A0",roof:t="#A8442E",w:i=7,h:s=5.6,d:r=7,door:o="#3E6A5A",night:a=!1}=n,l=new le;l.add(w(i,s,r,R(e,{roughness:.9}),0,s/2,-r/2));let c=new z(new ot(.01,i*.62,2.4,4,1),R(t,{roughness:.8}));c.rotation.y=Math.PI/4,c.scale.set(1,1,r/i),c.position.set(0,s+1.2,-r/2),c.castShadow=!0,l.add(c),l.add(w(1.1,2.1,.1,R(o),0,1.05,.02)),l.add(w(.08,.08,.08,"#E9B44C",.38,1,.1));let h=()=>new Ie({color:"#1A2233",emissive:a?"#FFC880":"#000",emissiveIntensity:a?.7:0,roughness:.1,metalness:.3});for(let[d,u]of[[-2.2,1.6],[2.2,1.6],[-2.2,4.1],[2.2,4.1]])l.add(w(1.3,1.2,.06,h(),d,u,.03)),l.add(w(1.5,.1,.2,"#F4F0E4",d,u-.65,.08));return l.add(w(2,.2,1.2,R("#B8AC9D"),0,.1,.6)),l.children.forEach(d=>{d.castShadow=!0,d.receiveShadow=!0}),l}function Nh(n=4){let e=new le,t=Oe(n*7);for(let i=0;i<n*3;i++){let s=new z(new bt(.42+t()*.12,12,10),R(["#3E6A34","#4F7A44","#5A8A48"][i%3],{roughness:1}));s.position.set(-n/2+i/3+.15,.5+t()*.25,(t()-.5)*.2),s.castShadow=!0,e.add(s)}return e}function of(n=8,e="#E8E2D2"){let t=new le;for(let i=0;i<=n*4;i++)t.add(w(.1,1.3,.05,R(e),-n/2+i*.25,.65,0));for(let i of[.35,1.05])t.add(w(n,.08,.06,R(e),0,i,-.04));return t.children.forEach(i=>i.castShadow=!0),t}function Ua(){let n=new le,e=Oe(4);for(let t=0;t<7;t++){let i=new z(new bt(.35,12,10),R("#3E6A34",{roughness:1}));i.position.set((e()-.5)*1.4,.35+e()*.3,(e()-.5)*.5),n.add(i)}for(let t=0;t<16;t++){let i=new z(new bt(.08,10,8),R(["#D8344A","#E8667F"][t%2],{roughness:.5}));i.position.set((e()-.5)*1.5,.55+e()*.4,(e()-.5)*.6+.2),n.add(i)}return n.children.forEach(t=>t.castShadow=!0),n}function fE(){let n=new le;n.add(w(2.2,2,1.8,R("#8A6A4A",{roughness:.9}),0,1,0));let e=w(2.6,.12,2.3,R("#5A3E2A"),0,2.12,0);return n.add(e),n.add(w(.8,1.5,.05,R("#5A3E2A"),0,.75,.92)),n.children.forEach(t=>{t.castShadow=!0,t.receiveShadow=!0}),n}function af(n=.6){let e=w(n,n*.8,n,R("#C9A06A",{roughness:.9}),0,n*.4,0);return e.add(w(n*1.01,.06,.15,R("#E8D8A8"),0,n*.4,0)),e}function lf(){let n=new le;n.add(w(.04,1.4,.04,R("#E8667F"),0,.7,0));let e=new z(new bt(.28,16,12),new Ie({color:"#FF8AA8",emissive:"#FF6A90",emissiveIntensity:.5}));e.scale.set(1.3,.8,.8),e.position.y=1.5,n.add(e);let t=new z(new ln(.18,.04,8,16,Math.PI*1.2),R("#FF8AA8"));t.position.set(.25,1.75,0),n.add(t);let i=Je("#FF9AB8",1.2,.4);return i.position.y=1.5,n.add(i),n}function cf(n=.9,e=1.2){let t=_e(360,480,r=>{r.fillStyle="#BFE0F2",r.fillRect(0,0,360,480),r.fillStyle="#FFFFFF",r.beginPath(),r.ellipse(180,270,95,55,0,0,7),r.fill(),r.beginPath(),r.ellipse(270,200,30,50,.5,0,7),r.fill();for(let o of[120,150,210,240])r.fillRect(o,300,16,100);r.fillStyle="#F2C1E0",r.beginPath(),r.moveTo(170,240),r.quadraticCurveTo(80,90,40,140),r.quadraticCurveTo(100,180,170,260),r.fill(),r.fillStyle="#E9B44C",r.beginPath(),r.moveTo(280,160),r.lineTo(300,100),r.lineTo(295,165),r.fill(),r.fillStyle="#7F6BC4",r.font="700 46px Caveat",r.textAlign="center",r.fillText("\xA1VUELA ALTO!",180,455)}),i=new le;i.add(w(n+.08,e+.08,.04,"#2A1E18",0,0,0));let s=new z(new be(n,e),R("#fff"));return s.material.map=t,s.position.z=.025,i.add(s),i}function hf(n=.9,e=1.2){let t=_e(360,480,r=>{r.fillStyle="#1E1A30",r.fillRect(0,0,360,480),r.fillStyle="#E8667F",r.beginPath(),r.arc(180,210,120,0,7),r.fill(),r.fillStyle="#1E1A30",r.beginPath(),r.arc(180,210,40,0,7),r.fill(),r.fillStyle="#F2C14E",r.font="900 60px Fraunces",r.textAlign="center",r.fillText("LOS GRILLOS",180,420)}),i=new le;i.add(w(n+.08,e+.08,.04,"#111",0,0,0));let s=new z(new be(n,e),R("#fff"));return s.material.map=t,s.position.z=.025,i.add(s),i}function df(n="#3A4F7A",e="FILOSOF\xCDA"){let t=new le;t.add(w(.5,.64,.06,R(n),0,0,0));let i=_e(256,128,r=>{r.fillStyle=n,r.fillRect(0,0,256,128),r.fillStyle="#F2C14E",r.font="900 40px Fraunces",r.textAlign="center",r.fillText(e,128,76)}),s=new z(new be(.46,.23),R("#fff"));return s.material.map=i,s.position.z=.032,t.add(s),t.userData.label=s,t}var pE=(n,e)=>{ye.quarto(n,e);let t=cf();t.position.set(-3,2.8,-2.8),n.add(t)};ye.cuartoYo=(n,e)=>{pE(n,e);let t=Da({w:18,h:9,col:e.night?"#7A6A88":"#E8C8A0",win:[1,2.2,1.7,1.6],night:!!e.night,lit:e.lit??!!e.night,inner:"#F2C8D0"});t.position.set(0,-.2,-6.2),n.add(t),n.userData.her=t;let i=lf();i.position.set(-.4,.4,-8.6),i.scale.setScalar(.9),n.add(i);let s=hf(.7,.9);s.position.set(1.9,2.6,-9.2),n.add(s),e.night&&vn(n,600,120,2)};ye.cuartoElla=(n,e)=>{ye.sala(n,{wall:"#6E5A9A",night:e.night}),n.add(w(2.4,.45,3.2,R("#6B4A33"),1.7,.25,-1.4)),n.add(w(2.3,.3,3,R("#F3EEE4"),1.7,.6,-1.4)),n.add(w(2.38,.22,2,R("#E8667F",{roughness:.9}),1.7,.8,-.7));let t=lf();t.position.set(-3.2,0,-2.2),n.add(t);let i=hf();i.position.set(-3.6,2.8,-2.8),n.add(i);let s=Da({w:18,h:9,col:e.night?"#6A5A50":"#D8B890",win:[-1,2.2,1.7,1.6],night:!!e.night,lit:e.lit??!!e.night,inner:"#C8D8E8"});s.position.set(0,-.2,-6.2),n.add(s),n.userData.me=s;let r=cf(.6,.8);r.position.set(-2.2,2.6,-9.2),n.add(r),e.night&&vn(n,600,120,2)};ye.entreCasas=(n,e)=>{let t=!!e.night;n.background=new ce(t?"#0A0C1E":"#9FC8E8"),n.fog=new Re(t?"#0E1028":"#CFE0EE",.02),ft(n,-60,300,140,t?[[0,"#05060E"],[.6,"#141838"],[1,"#2A2A50"]]:[[0,"#6FA7D8"],[.6,"#CFE0E8"],[1,"#FFE7BE"]]),t&&vn(n,1600,120,5),Bh(n,t?"#24301E":"#6E9A50");let i=Da({w:9,h:8,col:t?"#6A5A50":"#D8B890",win:[0,4.2,1.7,1.8],night:t,lit:t,inner:"#C8D8E8"});i.position.set(-2.3,0,-1),i.rotation.y=.62,n.add(i);let s=Da({w:9,h:8,col:t?"#7A6A88":"#E8C8A0",win:[0,4.2,1.7,1.8],night:t,lit:t,inner:"#F2C8D0"});s.position.set(2.3,0,-1),s.rotation.y=-.62,n.add(s),n.userData.me=i,n.userData.her=s;let r=of(10);r.rotation.y=Math.PI/2,r.position.set(0,0,2),n.add(r),n.add(new we(t?"#6E74C0":"#E9EEFF",t?"#1A1A24":"#6A5A4A",t?.55:1)),n.add(je(t?"#9FB0FF":"#FFD29A",t?.5:2.6,[6,14,10],14,40))};ye.barrio=(n,e)=>{let t=!!e.night,i=!!e.dusk;n.fog=new Re(t?"#1A1A30":i?"#E8A880":"#F2E2C8",.012),ft(n,-120,500,200,t?[[0,"#05060E"],[.6,"#141838"],[1,"#2A2A50"]]:i?[[0,"#3A3A78"],[.5,"#B86A88"],[.8,"#F29A6A"],[1,"#FFC88A"]]:[[0,"#6FA7D8"],[.6,"#CFE0E8"],[1,"#FFE7BE"]]),Bh(n,t?"#24301E":"#6E9A50");let s=w(200,.02,6,R(t?"#2A2A30":"#55545C",{roughness:.9}),0,.01,4);s.receiveShadow=!0,n.add(s);let r=w(200,.1,2,R("#B8AC9D"),0,.05,.2);r.receiveShadow=!0,n.add(r);let o=[[-13.5,"#C8D8B0","#5A6E8A"],[-4.5,"#D8B890","#A8442E"],[4.5,"#E8C8A0","#7A4A8A"],[13.5,"#B8D0E0","#A8442E"],[22.5,"#E8D8A8","#5A6E8A"],[-22.5,"#E0B8B0","#3E6A5A"]];for(let[h,d,u]of o){let p=io({col:d,roof:u,night:t});p.position.set(h,0,-3),n.add(p)}let a=Nh(3);a.position.set(-7.6,0,-1.4),n.add(a);let l=Nh(3);l.position.set(-1.4,0,-1.4),n.add(l);let c=Nh(3);c.position.set(7.6,0,-1.4),n.add(c);for(let h of[-9,0,9,18])qt(n,h,-11,1.4,["#2E4F2C","#3B6636","#55813F","#A9B65A"],Math.abs(h));ii(n,-60,300,16,["#B8C8D8","#A8B8C8","#98A8B8"],t,9),n.add(new we(t?"#6E74C0":"#E9EEFF","#6A5A4A",t?.6:1.05)),n.add(je(t?"#9FB0FF":i?"#FFB080":"#FFD29A",t?.6:2.8,[-14,16,12],24,70))};ye.jardin=(n,e)=>{let t=!!e.dusk;n.fog=new Re(t?"#E8A880":"#F2E2C8",.015),ft(n,-100,400,200,t?[[0,"#3A3A78"],[.5,"#B86A88"],[.8,"#F29A6A"],[1,"#FFC88A"]]:[[0,"#6FA7D8"],[.6,"#CFE0E8"],[1,"#FFE7BE"]]),Bh(n,"#6E9A50");let i=of(16);i.rotation.y=Math.PI/2,i.position.set(0,0,-2),n.add(i);let s=Ua();s.position.set(1.6,0,-1.2),n.add(s);let r=Ua();r.position.set(2.8,0,-2.6),n.add(r);let o=fE();o.position.set(-2.4,0,-3.2),n.add(o);let a=io({col:"#D8B890",roof:"#A8442E"});a.position.set(-5,0,-9),a.rotation.y=0,n.add(a);let l=io({col:"#E8C8A0",roof:"#7A4A8A"});l.position.set(5,0,-9),n.add(l);for(let c of[-12,12])qt(n,c,-8,1.3,["#2E4F2C","#3B6636","#55813F","#A9B65A"],Math.abs(c));n.add(new we("#E9EEFF","#6A5A4A",1.05)),n.add(je(t?"#FFB080":"#FFD29A",2.8,[-10,14,10],14,50)),n.userData.caseta=o};ye.esquina=(n,e)=>{ye.barrio(n,e)};ye.concurso=n=>{n.background=new ce("#140C24"),n.fog=new Re("#1A1030",.03);let e=w(20,.2,12,R("#2A1E48",{metalness:.3,roughness:.4}),0,-.1,-2);e.receiveShadow=!0,n.add(e);for(let r=0;r<9;r++){let o=Je(["#FF5A9A","#5AC8FF","#F2C14E"][r%3],1,.9);o.position.set(-6+r*1.5,5,-6),n.add(o)}let t=Le(It(["\xBFQUI\xC9N SABE M\xC1S?"],{bg:"#3A1E6A",fg:"#F2C14E",size:90,w:1024,h:180}),6,1.05);t.position.set(0,4,-5.8),n.add(t);let i=w(1.2,1.1,.7,R("#C9361F",{metalness:.3}),0,.55,-.6);n.add(i),n.add(w(1.3,.1,.8,R("#F2C14E"),0,1.12,-.6)),n.add(new we("#B8A8FF","#2A1A3A",.9));let s=new Hn("#FFF2D8",60,20,.5,.5,1.2);s.position.set(0,8,4),s.target.position.set(0,1,-.6),s.castShadow=!0,n.add(s,s.target)};ye.residencia=n=>{n.fog=new Re("#E8DCC8",.02),n.add(si(20,14,"#8A6A4A")),n.add(w(20,4,.3,R("#E8DCC0"),0,2,-3.4));for(let e=0;e<8;e++){n.add(w(1,2.2,.08,R("#6B4A33"),-7+e*2,1.1,-3.2));let t=Le(It([String(e+1)],{bg:"#F2C14E",fg:"#2A2A34",size:90,w:160,h:140}),.4,.35);t.position.set(-7+e*2,2.5,-3.15),n.add(t)}n.add(new we("#FFFFFF","#9A8A70",1)),n.add(je("#FFE8C8",2,[-6,8,6],12,40))};var Na=(n,e,t=200,i=200)=>{let s=new z(new be(t,i),R(e,{roughness:1}));return s.rotation.x=-Math.PI/2,s.receiveShadow=!0,n.add(s),s},Oa=["#2E4F2C","#3B6636","#55813F","#A9B65A"],uf=["#0E1A16","#13221C","#1A2C22","#22382A"],Ba=(n,e=-60,t="#7A8AA8",i="#F4F6FA",s=4,r=9)=>{let o=Oe(s);for(let a=0;a<r;a++){let l=14+o()*16,c=12+o()*10,h=new z(new un(c,l,7),R(t,{roughness:1}));if(h.position.set(-70+a*17+o()*6,l/2-1,e-o()*25),n.add(h),i){let d=new z(new un(c*.34,l*.34,7),R(i,{roughness:1}));d.position.set(h.position.x,l-l*.17-1,h.position.z),n.add(d)}}},Hh=(n,e,t,i,s,r="#4A8AB0",o=!1)=>{let a=new z(new En(1,48),new Ie({color:r,roughness:.08,metalness:.35,emissive:o?"#0A1A30":"#000",emissiveIntensity:o?.6:0}));return a.rotation.x=-Math.PI/2,a.scale.set(i,s,1),a.position.set(e,.02,t),a.receiveShadow=!0,n.add(a),a};ye.albergue=(n,e)=>{let t=!!e.dusk;n.fog=new Re(t?"#E8B090":"#D8E4E8",.012),ft(n,-200,700,260,t?[[0,"#3A3A78"],[.5,"#B86A88"],[.8,"#F29A6A"],[1,"#FFC88A"]]:[[0,"#4F8AC8"],[.6,"#BFD8EC"],[1,"#EEF4F0"]]),Ba(n,-70,t?"#6A5A88":"#7A8EAE"),Na(n,"#6E9A48");let i=io({col:"#9A6A44",roof:"#5A3A2A",w:9,h:4.2,d:6,door:"#4A2E1E"});i.position.set(-3.5,0,-7),n.add(i);let s=Le(It(["ALBERGUE LOS PINOS"],{bg:"#4A2E1E",fg:"#F2C14E",size:70,w:900,h:150}),3.2,.54);s.position.set(-3.5,3.4,-6.9),n.add(s),Hh(n,6,-9,6,3.2);let r=Oe(31);for(let o=0;o<22;o++){let a=(r()-.5)*40;Math.abs(a+3.5)<6&&o<14||qt(n,a,-10-r()*16,1.3+r()*.7,Oa,o)}for(let[o,a]of[[-9,-3],[9,-4],[-11,-6]])qt(n,o,a,1.4,Oa,o|0);n.add(new we("#E9EEFF","#5A6A4A",1)),n.add(je(t?"#FFB080":"#FFE2B0",t?2.2:2.8,[-10,16,10],16,70))};ye.gymkana=(n,e)=>{n.fog=new Re("#D8E4E8",.012),ft(n,-200,700,260,[[0,"#4F8AC8"],[.6,"#BFD8EC"],[1,"#EEF4F0"]]),Ba(n,-70),Na(n,"#7AA850"),Hh(n,0,-9,9,3.4);let t=Oe(7);for(let s=0;s<18;s++)qt(n,(t()-.5)*44,-14-t()*14,1.3+t()*.6,Oa,s);let i=new z(new En(1,32),R("#6A4A2E",{roughness:.4}));i.rotation.x=-Math.PI/2,i.scale.set(1.6,1,1),i.position.set(1.2,.015,-1.2),n.add(i);for(let s of[-3,3]){let r=new z(new un(.18,.45,12),R("#F2A766"));r.position.set(s,.22,.8),n.add(r)}n.add(new we("#E9EEFF","#5A6A4A",1)),n.add(je("#FFE2B0",2.8,[-10,16,10],16,70))};ye.lagoNoche=(n,e)=>{n.background=new ce("#05071A"),n.fog=new Re("#0A0E24",.02),vn(n,4200,200,11),ft(n,-150,600,220,[[0,"#03040E"],[.6,"#0E1434"],[1,"#22284A"]]),Ba(n,-80,"#141A30","#3A4460",6),Na(n,"#1E2A20"),Hh(n,0,-8,12,4,"#1A2A48",!0);let t=Oe(17);for(let r=0;r<24;r++){let o=(t()-.5)*40;qt(n,o,-14-t()*14,1.3+t()*.6,uf,r)}for(let[r,o]of[[-6,-2],[6.5,-3],[-8,-5]])qt(n,r,o,1.3,uf,r*3|0);let i=Je("#F4F0D8",5,.9);i.position.set(14,22,-90),i.material.fog=!1,n.add(i),n.add(new we("#6A78C8","#10141E",.55));let s=new Di("#9AA8E8",.6);s.position.set(8,12,-6),n.add(s)};ye.cima=(n,e)=>{n.fog=new Re("#E4EEF4",.006),ft(n,-200,900,300,[[0,"#2F6AB8"],[.55,"#8EC0E8"],[1,"#F4F8FA"]]);let t=new z(new be(800,800),R("#F6F8FA",{roughness:1}));t.rotation.x=-Math.PI/2,t.position.y=-14,n.add(t);let i=Oe(9);for(let l=0;l<40;l++){let c=Je("#FFFFFF",18+i()*14,.55);c.position.set((i()-.5)*300,-12+i()*3,-40-i()*200),n.add(c)}for(let l=0;l<6;l++){let c=10+i()*8,h=new z(new un(8+i()*6,c,6),R("#8A8EA0"));h.position.set(-60+l*24,-14+c/2,-90-i()*40),n.add(h);let d=new z(new un(3,c*.3,6),R("#F4F6FA"));d.position.set(h.position.x,-14+c*.85,h.position.z),n.add(d)}let s=new z(new ot(4.5,9,14,9),R("#8A8070",{roughness:1}));s.position.set(0,-7,-1),n.add(s);let r=new z(new En(4.6,9),R("#9A9070",{roughness:1}));r.rotation.x=-Math.PI/2,r.position.set(0,.01,-1),n.add(r);for(let l=0;l<10;l++){let c=new z(new Li(.3+i()*.4),R("#7A7262")),h=i()*6.28;c.position.set(Math.cos(h)*(3+i()),.1,-1+Math.sin(h)*(2.5+i())),!(c.position.z>1.2)&&n.add(c)}n.add(w(.5,1,.5,R("#C8C0A8"),-2.6,.5,-2.6));let o=w(.06,.9,.06,R("#3A3A40"),-2.6,1.45,-2.6);n.add(o),n.add(w(.5,.06,.06,R("#3A3A40"),-2.6,1.6,-2.6));let a=Le(It(["PICO \xB7 2.130 m"],{bg:"#FBF7EC",fg:"#2A2A34",size:70,w:600,h:150}),1,.25);a.position.set(-2.6,.75,-2.34),n.add(a),n.add(new we("#EEF4FF","#8A8070",1.05)),n.add(je("#FFF0D0",3,[-8,18,10],12,60))};ye.sendero=(n,e)=>{n.fog=new Re("#C8D8C8",.02),ft(n,-200,700,260,[[0,"#5F96C8"],[.6,"#BFD4E0"],[1,"#EEF0E4"]]),Ba(n,-60,"#7A8EAE"),Na(n,"#6E8A48");let t=new z(new be(2.2,60),R("#B49A72",{roughness:1}));t.rotation.x=-Math.PI/2,t.position.set(0,.012,-20),n.add(t);let i=Oe(23);for(let s=0;s<30;s++){let r=i()<.5?-1:1;qt(n,r*(2.6+i()*12),2-i()*30,1.2+i()*.7,Oa,s)}for(let s=0;s<8;s++){let r=new z(new Li(.2+i()*.3),R("#8A8070"));r.position.set((i()<.5?-1:1)*(1.3+i()),.1,-i()*10),n.add(r)}n.add(new we("#E9EEFF","#5A6A4A",1)),n.add(je("#FFE2B0",2.6,[-10,16,10],16,70))};ye.comedor=(n,e)=>{n.background=new ce("#0E0A1E"),n.fog=new Re("#140E2A",.03),n.add(si(20,14,"#6A4A30")),n.add(w(20,5,.3,R("#5A3A2A"),0,2.5,-4.2));for(let a of[-1,1])n.add(w(.3,5,14,R("#5A3A2A"),a*8,2.5,0));for(let a=0;a<9;a++)n.add(w(.12,5,.1,R("#3A2418"),-8+a*2,2.5,-4));let t=Le(It(["FIESTA FIN DE CURSO"],{bg:"#E8447A",fg:"#FFFFFF",size:80,w:1100,h:170}),4,.62);t.position.set(0,3.6,-4),n.add(t);for(let a of[-5.2,5.2]){n.add(w(1,.08,4,R("#8E6242"),a,.78,-1.2));for(let[l,c]of[[-1,-2.8],[1,-2.8],[-1,.4],[1,.4]])n.add(w(.06,.78,.06,R("#3A2418"),a+l*.4,.39,c))}let i=[];for(let a=0;a<26;a++){let l=-7+a*.56,c=Je(["#FF6A9A","#6AD8FF","#FFD84A","#9AFF8A"][a%4],.35,.9);c.position.set(l,3-Math.sin(a/25*Math.PI)*.5,-3.8),n.add(c),i.push(c)}let s=new z(new En(2.8,48),new Ie({color:"#2A2240",roughness:.2,metalness:.4,emissive:"#4A2A7A",emissiveIntensity:.35}));s.rotation.x=-Math.PI/2,s.position.set(0,.015,-.8),n.add(s);let r=[];for(let[a,l]of[["#FF3A8A",-3],["#3AB8FF",0],["#FFD83A",3]]){let c=new nt(a,10,9,1.4);c.position.set(l,3.2,0),n.add(c),r.push(c)}n.add(new we("#8A7AC8","#20142A",.55));let o=new Hn("#FFE8F0",30,14,.6,.6,1.2);o.position.set(0,6,3),o.target.position.set(0,0,-.8),o.castShadow=!0,n.add(o,o.target),n.userData.disco=a=>{r.forEach((l,c)=>{l.position.x=Math.sin(a*.9+c*2.1)*3.5,l.intensity=8+Math.sin(a*5+c)*3}),i.forEach((l,c)=>l.material.opacity=.55+.45*Math.sin(a*4+c))}};ye.salida=(n,e)=>{let t=!!e.dusk,i=!!e.manana;ye.barrio(n,{dusk:t});let s=nf("#F2C14E");s.rotation.y=Math.PI/2,s.position.set(1,0,-3.4),n.add(s);let r=Le(It(["VIAJE FIN DE CURSO"],{bg:"#2F5A9A",fg:"#FFFFFF",size:70,w:900,h:140}),2.6,.4);if(r.position.set(1,2.3,-2.18),n.add(r),i){let o=new Di("#FFD0A0",.8);o.position.set(10,3,6),n.add(o)}};var ro=(n,e,t=200,i=200,s={})=>{let r=new z(new be(t,i),R(e,{roughness:1,...s}));return r.rotation.x=-Math.PI/2,r.receiveShadow=!0,n.add(r),r},so=(n,e=1.6)=>new Ie({color:n,emissive:n,emissiveIntensity:e});function ff(n=2.6){let e=new le,t=_e(1024,300,s=>{s.clearRect(0,0,1024,300),s.fillStyle="#E2231A",s.beginPath(),s.roundRect(10,30,780,240,60),s.fill(),s.fillStyle="#fff",s.font="900 112px Inter",s.textAlign="center",s.textBaseline="middle",s.fillText("SUSCR\xCDBETE",400,156),s.fillStyle="#F2C14E",s.beginPath(),s.arc(910,150,100,0,7),s.fill(),s.fillStyle="#2A2A34",s.beginPath(),s.moveTo(860,190),s.quadraticCurveTo(870,80,910,78),s.quadraticCurveTo(950,80,960,190),s.closePath(),s.fill(),s.fillRect(850,186,120,16),s.beginPath(),s.arc(910,214,14,0,7),s.fill(),s.beginPath(),s.arc(910,70,10,0,7),s.fill()}),i=Le(t,n,n*300/1024,{blend:!0});return i.renderOrder=6,e.add(i),e.userData.m=i,e}function mE(n="#FFB25A"){let e=new le,t=new z(new ot(.16,.12,.34,12),so(n,1.8));e.add(t);let i=Je(n,1,.55);return e.add(i),e}var gE=(n,e,t,i=3)=>{let s=Oe(i),r=["#F2A8C8","#FBF7EC","#F2C14E","#B48AE8","#E8667F"];for(let o=0;o<e;o++){let a=new z(new bt(.07+s()*.06,10,8),so(r[o%5],.4));a.position.set((s()-.5)*t[0],.06,t[2]-s()*t[1]),n.add(a);let l=w(.02,.12,.02,R("#3E8A52"),a.position.x,.02,a.position.z,!1);n.add(l)}};ye.desvan=(n,e)=>{let t=!!e.night;n.background=new ce("#1A120C"),n.fog=new Re("#2A1C12",.05),n.add(si(16,14,"#6A4630"));for(let h of[-1,1]){let d=w(16,.15,7.5,R("#5A3A26",{roughness:.9}),0,0,0);d.position.set(0,3.3,-1.2+h*2.3),d.rotation.x=h*-.62,d.position.y=3.2,d.position.z=h>0?2.4:-4.4,d.rotation.x=h>0?.62:-.62,h<0&&n.add(d)}n.add(w(16,6,.2,R("#4E3422",{roughness:1}),0,2.5,-4.6));for(let h=0;h<6;h++){let d=w(.22,.22,9,R("#3A2618"),-6+h*2.4,4.4,-1);n.add(d)}let i=Oe(6);for(let h=0;h<9;h++){let d=af(.5+i()*.5);d.position.set(-5+i()*10,0,-3.6+i()*1.2),d.rotation.y=i(),Math.abs(d.position.x)>1.4&&n.add(d)}let s=w(1.4,.8,.7,R("#6A3A22",{roughness:.7}),-3.2,.4,-2.2);n.add(s),n.add(w(1.44,.1,.74,R("#C9A06A",{metalness:.4}),-3.2,.55,-2.2));let r=zt(.9,.9,t?"#5A6AA8":"#FFE2A8",t?.6:1.6);r.position.set(2.6,2.9,-4.48),n.add(r);let o=bs(1.4,7,t?"#9FB0FF":"#FFD9A0",t?.08:.2);o.position.set(1.6,1.7,-2.6),o.rotation.set(-.2,0,-.75),n.add(o);let a=new z(new bt(.09,12,10),so("#FFD089",2));a.position.set(0,3.1,-1.2),n.add(a),n.add(w(.01,1.2,.01,"#111",0,3.75,-1.2,!1));let l=new nt("#FFB66E",9,9,1.4);l.position.set(0,3,-1),l.castShadow=!0,n.add(l),n.add(new we("#FFD8A8","#3A2418",.55));let c=[];for(let h=0;h<40;h++){let d=Je("#FFE8C0",.05,.6);d.position.set(.5+i()*2.4,.6+i()*2.6,-3+i()*2.6),n.add(d),c.push(d)}n.userData.dust=c};ye.pasillo=(n,e)=>{n.background=new ce("#1A1036"),n.fog=new Re("#2A1850",.045),vn(n,1600,120,7),ro(n,"#C8A8E8",8,120,{roughness:.9}).position.z=-40;let t=Oe(11),i=["#E8667F","#36AEA2","#F2C14E","#4A86C7","#7F6BC4","#F2913A","#5FB04A"];for(let u=0;u<26;u++)for(let p of[-1,1]){let g=-2-u*2.2,E=i[(u*2+(p>0?1:0))%i.length],m=w(.12,2.6,1.3,R("#F4ECD6"),p*2.4,1.3,g);n.add(m);let f=w(.08,2.3,1.05,R(E,{roughness:.6}),p*2.35,1.15,g);n.add(f);let v=new z(new bt(.05,8,6),so("#F2C14E",.6));v.position.set(p*2.29,1.1,g+.35),n.add(v)}let s=new le,r=new le;r.position.set(0,0,.55),s.add(r);let o=w(.08,2.3,1.05,R("#F2A8C8",{roughness:.5}),0,1.15,-.525);r.add(o);let a=new z(new bt(.05,8,6),so("#F2C14E",.8));a.position.set(-.06,1.1,-.9),r.add(a);let l=Le(It(["SARA"],{bg:"#FBF7EC",fg:"#C9361F",size:110,w:400,h:160}),.6,.24);l.position.set(-.06,1.85,-.525),l.rotation.y=-Math.PI/2,r.add(l);let c=zt(.04,2.3,"#FFF0C8",2.2);c.rotation.y=-Math.PI/2,c.position.set(.05,1.15,-.525),s.add(c),s.position.set(2.35,0,-8.6),n.add(s),n.userData.door=r,n.userData.doorPos=[2.35,0,-8.6];for(let u=0;u<14;u++){let p=Je(["#FFB2E0","#B2D8FF","#FFF2B0"][u%3],.25+t()*.3,.7);p.position.set((t()-.5)*4,.5+t()*3,-1-t()*30),n.add(p)}n.add(new we("#D8C8FF","#4A3070",1));let h=new nt("#FFE0F0",14,14,1.4);h.position.set(0,3,-4),n.add(h);let d=new nt("#B8C8FF",10,14,1.4);d.position.set(0,3,-12),n.add(d)};ye.playaSueno=(n,e)=>{n.fog=new Re("#E8B8E0",.018),ft(n,-120,600,240,[[0,"#6A4AB8"],[.45,"#C88AD8"],[.75,"#F6B8C8"],[1,"#FFE2D0"]]);let t=Je("#FFF6E0",16,.9);t.position.set(10,22,-110),t.material.fog=!1,n.add(t);let i=new z(new En(4,40),new rt({color:"#FFF6E8",fog:!1}));i.position.set(10,22,-112),n.add(i);let s=ro(n,"#F8EEF2",200,200),r=new z(new be(400,200),new Ie({color:"#B48AE8",roughness:.12,metalness:.35,emissive:"#6A3AA8",emissiveIntensity:.25}));r.rotation.x=-Math.PI/2,r.position.set(0,.03,-104),n.add(r),n.userData.sea=r;let o=w(400,.02,.3,R("#FFFFFF",{roughness:.5}),0,.04,-4.1,!1);n.add(o),n.userData.foam=o;let a=Oe(4);for(let l=0;l<70;l++){let c=Je("#FFFFFF",.08+a()*.1,.8);c.position.set((a()-.5)*16,.05,2-a()*6),n.add(c)}for(let l=0;l<4;l++){let c=new le;c.add(w(.18,2.8,.18,R("#E8A0C0"),0,1.4,0));let h=Je(["#7FD08A","#F2C14E","#5AC8FF","#FF8AC8"][l],1.6,.8);h.position.y=3,c.add(h),c.position.set([-6,-3.6,4.5,7][l],0,[-2.6,-3.4,-3,-2][l]),n.add(c)}n.add(new we("#FFE0F6","#B88AC8",1.15)),n.add(je("#FFD8E8",2,[8,14,-6],14,60))};ye.baile=(n,e)=>{n.background=new ce("#0E0A28"),n.fog=new Re("#1A1240",.03),vn(n,2400,160,3),ft(n,-100,500,200,[[0,"#0A0820"],[.6,"#2A1A58"],[1,"#6A3A78"]]),ro(n,"#3A2A5A");let t=new z(new En(3.2,48),new Ie({color:"#F4E8F8",roughness:.25,metalness:.2,emissive:"#8A6AB8",emissiveIntensity:.25}));t.rotation.x=-Math.PI/2,t.position.set(0,.02,-1),t.receiveShadow=!0,n.add(t),gE(n,260,[16,12,3]);for(let[a,l]of[[-4.2,-2.4],[4.2,-2.4],[-5.2,-5],[5.2,-5],[0,-6]]){let c=Ua();c.position.set(a,0,l),n.add(c)}let i=Oe(9),s=[];for(let a=0;a<22;a++){let l=mE(["#FFB25A","#FF8A6A","#FFD27A"][a%3]);l.position.set((i()-.5)*12,2.6+i()*4,-1-i()*9),l.userData.y0=l.position.y,l.userData.ph=i()*6,n.add(l),s.push(l)}n.userData.farol=s,n.add(new we("#B8A8FF","#2A1A3A",.7));let r=new Hn("#FFE2C8",50,20,.6,.6,1.2);r.position.set(0,8,3),r.target.position.set(0,0,-1),r.castShadow=!0,n.add(r,r.target);let o=new nt("#FFB25A",8,12,1.5);o.position.set(0,3.5,-2),n.add(o)};ye.estadio=(n,e)=>{n.background=new ce("#0A1020"),n.fog=new Re("#18203A",.02),vn(n,800,160,5);let t=_e(512,512,h=>{for(let d=0;d<8;d++)h.fillStyle=d%2?"#3E8A3E":"#4A9A46",h.fillRect(0,d*64,512,64);h.strokeStyle="#F4F4F4",h.lineWidth=6,h.strokeRect(20,20,472,472),h.beginPath(),h.moveTo(20,256),h.lineTo(492,256),h.stroke(),h.beginPath(),h.arc(256,256,60,0,7),h.stroke()}),i=new z(new be(40,40),new Ie({map:t,roughness:.9}));i.rotation.x=-Math.PI/2,i.position.z=-14,i.receiveShadow=!0,n.add(i);let s=new le,r=R("#FFFFFF",{roughness:.4});s.add(w(.12,2.4,.12,r,-3.6,1.2,0),w(.12,2.4,.12,r,3.6,1.2,0),w(7.3,.12,.12,r,0,2.4,0));let o=new z(new be(7.2,2.4),new rt({color:"#FFFFFF",transparent:!0,opacity:.18,side:Dt}));o.position.set(0,1.2,-1),s.add(o),s.position.set(0,0,-7),n.add(s);for(let h=0;h<4;h++)n.add(w(60,1,2,R(["#2A3A6A","#3A2A5A","#2A3A6A","#3A2A5A"][h]),0,.5+h*1.1,-14-h*2));let a=[],l=Oe(2);for(let h=0;h<4;h++)for(let d=0;d<48;d++)a.push([-24+d+l()*.4,1+h*1.1,-14-h*2]);Fh(n,a,{h:1.3,tint:"#C8C8E8",raised:.7});for(let h of[-1,1]){let d=Je("#FFFFFF",6,.9);d.position.set(h*16,14,-20),n.add(d)}n.add(new we("#D8E0FF","#2A3A2A",1));let c=je("#FFFFFF",2.6,[6,16,8],14,60);n.add(c)};ye.concierto=(n,e)=>{n.background=new ce("#0C0820"),n.fog=new Re("#140C2C",.025);let t=w(14,.6,6,R("#2A1E48",{metalness:.3,roughness:.4}),0,.3,-2.5);t.receiveShadow=!0,n.add(t),ro(n,"#140E26").position.y=-.01;let i=zt(14,6,"#3A1E6A",.5);i.position.set(0,3.6,-5.5),n.add(i);let s=Oe(4);for(let l=0;l<9;l++){let c=Je(["#FF5A9A","#5AC8FF","#F2C14E"][l%3],1.2,.9);c.position.set(-6+l*1.5,6,-5),n.add(c);let h=bs(1.2,8,["#FF5A9A","#5AC8FF","#F2C14E"][l%3],.1);h.position.set(-6+l*1.5,3,-4.5),h.rotation.z=(l-4)*.08,n.add(h)}let r=new le;r.add(w(.03,1.4,.03,R("#2A2A30",{metalness:.6}),0,.7+.6,0));let o=new z(new bt(.06,12,10),R("#888",{metalness:.8}));o.position.y=2.05,r.add(o),r.position.set(.5,0,-.6),n.add(r);for(let l=0;l<40;l++){let c=Je(["#FFF2C0","#B8E0FF","#FFB2E0"][l%3],.18,.8);c.position.set(-7+s()*14,1.2+s()*1.2,2.5+s()*3),n.add(c)}n.add(new we("#B8A8FF","#2A1A3A",.8));let a=new Hn("#FFF2D8",70,22,.45,.5,1.2);a.position.set(0,9,4),a.target.position.set(0,.6,-.6),a.castShadow=!0,n.add(a,a.target)};ye.gris=(n,e)=>{n.background=new ce("#1C1E24"),n.fog=new Re("#262830",.06),ro(n,"#4A4C54"),n.add(w(14,7,.2,R("#5A5C64",{roughness:1}),0,3.5,-4)),n.add(w(.2,7,12,R("#52545C",{roughness:1}),-4.2,3.5,0)),n.add(w(.2,7,12,R("#52545C",{roughness:1}),4.2,3.5,0));let t=zt(1.2,1.4,"#8A94A8",.35);t.position.set(1.8,2.8,-3.88),n.add(t);for(let r of[1.8])n.add(w(.06,1.4,.05,"#3A3C44",r,2.8,-3.86)),n.add(w(1.2,.06,.05,"#3A3C44",r,2.8,-3.86));n.add(new we("#A8B0C8","#2A2A30",.6));let i=new Hn("#C8D0E8",28,14,.5,.7,1.3);i.position.set(-1.4,6,1),i.target.position.set(-2.6,0,-2.8),i.castShadow=!0,n.add(i,i.target);let s=new nt("#FFD8A0",0,10,1.2);s.position.set(-2,2.4,-1.4),n.add(s),n.userData.warm=s};ye.labSueno=(n,e)=>{ye.lab(n,e),ju(n,-1.4,-1.6,"#4A86C7");let t=new le;t.add(w(.12,1.4,.12,R("#3A3A44"),0,.7,0)),t.add(w(1,.7,.1,R("#20242E"),0,1.7,0));let i=zt(.9,.6,"#7FD08A",.6);i.position.set(0,1.7,.06),t.add(i),t.position.set(1,0,-2.4),t.rotation.y=-.4,n.add(t),n.userData.mon=i};var Ha=(n,e,t=200,i=200,s={})=>{let r=new z(new be(t,i),R(e,{roughness:1,...s}));return r.rotation.x=-Math.PI/2,r.receiveShadow=!0,n.add(r),r},pf=(n,e=1.6)=>new Ie({color:n,emissive:n,emissiveIntensity:e}),EE=(n="#8C8A84",e=3)=>{let t=_e(512,512,i=>{i.fillStyle=n,i.fillRect(0,0,512,512);let s=Oe(e);for(let r=0;r<900;r++)i.fillStyle=`rgba(${s()<.5?"255,255,255":"0,0,0"},${s()*.07})`,i.fillRect(s()*512,s()*512,2+s()*6,2+s()*6);i.strokeStyle="rgba(0,0,0,.18)",i.lineWidth=3;for(let r=128;r<512;r+=128)i.beginPath(),i.moveTo(0,r),i.lineTo(512,r),i.stroke();for(let r=0;r<5;r++){i.strokeStyle="rgba(40,30,20,.12)",i.lineWidth=8,i.beginPath();let o=s()*512;i.moveTo(o,0),i.lineTo(o+(s()-.5)*30,140+s()*300),i.stroke()}});return t.wrapS=t.wrapT=dn,t},ws=(n,e,t,i,s,r,o,a=3)=>{let l=EE(o);l.repeat.set(Math.max(1,Math.max(n,t)/a),Math.max(1,e/a));let c=new z(new xn(n,e,t),new Ie({map:l,roughness:.95}));return c.position.set(i,s,r),c.receiveShadow=!0,c.castShadow=!0,c};function yE(n="#B8B4A8"){let e=new le,t=new z(new ot(.09,.09,.22,18),R(n,{metalness:.6,roughness:.35}));t.position.y=.11,t.castShadow=!0,e.add(t);let i=new z(new ot(.092,.092,.12,18,1,!0),new Ie({map:_e(256,64,s=>{s.fillStyle="#7A8A3A",s.fillRect(0,0,256,64),s.fillStyle="#F4E8C8",s.font="800 30px Inter",s.textAlign="center",s.fillText("JUD\xCDAS \xB7 1987",128,44)}),roughness:.7}));return i.position.y=.11,e.add(i),e}function vE(){let n=new le;n.add(w(1,.8,.6,R("#4A6A4A",{roughness:.6,metalness:.3}),0,.4,0)),n.add(w(.3,.3,.02,R("#222"),-.25,.5,.31));let e=new z(new bt(.04,10,8),pf("#5AE05A",2.5));e.position.set(.3,.62,.31),n.add(e);for(let t=0;t<5;t++)n.add(w(.02,.4,.02,R("#2A3A2A"),.05+t*.06,.4,.31));return n.userData.led=e,n}function _E(){let n=new le;n.add(w(.36,.5,.08,R("#3A3C3A",{metalness:.5}),0,0,0));let e=new le;e.position.set(0,0,.06),n.add(e);let t=w(.05,.4,.05,R("#9A9A9A",{metalness:.8,roughness:.3}),0,.2,0);e.add(t);let i=new z(new bt(.07,14,10),R("#D8251A",{roughness:.3}));return i.position.y=.42,e.add(i),e.rotation.x=-.5,n.userData.piv=e,n.userData.knob=i,n}function AE(){let n=new le;n.add(w(8,2.4,2.5,R("#F2B830",{roughness:.5}),0,1.6,0)),n.add(w(8.02,.25,2.52,R("#2A2A2A"),0,.9,0));for(let t=0;t<7;t++)for(let i of[-1,1])n.add(w(.85,.7,.02,R("#9AC8E8",{metalness:.4,roughness:.15}),-3.3+t*1.05,2.1,i*1.26));for(let t of[-2.6,2.6])for(let i of[-1,1]){let s=new z(new ot(.45,.45,.3,16),R("#1A1A1A"));s.rotation.x=Math.PI/2,s.position.set(t,.45,i*1.2),n.add(s)}let e=Je("#FFF2C0",.5,.9);return e.position.set(4.02,1.1,.8),n.add(e),n}function mf(n,e,t={}){let i=It(n,{bg:"#3A4A2A",fg:"#F4E8C8",size:90,w:1100,h:260,...t});return Le(i,e,e*(t.h||260)/(t.w||1100))}ye.bunker=(n,e)=>{let t=!!e.dark,i=!!e.open;n.background=new ce("#0E0F10"),n.fog=new Re(t?"#050608":"#2A2A28",t?.08:.045);let s=ws(12,.2,10,0,-.1,-.5,"#6E6C66",2.5);n.add(s),n.add(ws(12,4,.3,0,2,-3.55,"#8C8A84")),n.add(ws(.3,4,10,-4.2,2,-.5,"#84827C")),n.add(ws(.3,4,10,4.2,2,-.5,"#84827C")),n.add(ws(12,.3,10,0,3.6,-.5,"#7A7872"));for(let b of[-2.4,0,2.4])n.add(w(.25,.3,10,R("#6A6862"),b,3.35,-.5));let r=new le;r.add(w(2,.2,.3,R("#5A5E5A",{metalness:.6,roughness:.4}),0,2.5,0),w(.2,2.6,.3,R("#5A5E5A",{metalness:.6,roughness:.4}),-.95,1.25,0),w(.2,2.6,.3,R("#5A5E5A",{metalness:.6,roughness:.4}),.95,1.25,0)),r.position.set(0,0,-3.36),n.add(r);let o=new le;o.position.set(-.85,0,-3.3),n.add(o);let a=R("#6E7670",{metalness:.7,roughness:.35}),l=w(1.7,2.4,.16,a,.85,1.2,0);o.add(l);for(let b of[.5,1.9])o.add(w(1.6,.08,.04,R("#5A605C",{metalness:.7}),.85,b,.1));let c=new z(new ln(.26,.035,8,28),R("#B8241A",{metalness:.4,roughness:.4}));c.position.set(.85,1.25,.14),o.add(c);for(let b=0;b<3;b++){let F=w(.5,.03,.03,R("#B8241A"),.85,1.25,.14);F.rotation.z=b*Math.PI/3,o.add(F)}o.rotation.y=i?-1.45:0,n.userData.door=o,n.userData.wheel=c;let h=_E();h.position.set(1.55,1.45,-3.36),n.add(h),n.userData.lever=h.userData.piv,n.userData.leverKnob=h.userData.knob;let d=Le(It(["\xA1NO TOCAR!"],{bg:"#F2C14E",fg:"#2A2A34",size:80,w:500,h:130}),.5,.13);d.position.set(1.55,1.82,-3.38),n.add(d);let u=b=>{let F=new le,S=R("#4A5450",{metalness:.6,roughness:.4});for(let A of[-.45,.45])for(let P of[-1,1])F.add(w(.06,2.3,.06,S,A,1.15,P));for(let A of[.45,1.6])F.add(w(.96,.06,2.1,S,0,A,0)),F.add(w(.86,.14,1.96,R("#7A8A6A",{roughness:1}),0,A+.1,0)),F.add(w(.5,.1,.3,R("#D8D2C0"),0,A+.21,-.8));return F.position.set(b,0,-1.1),F};n.add(u(-3.3)),n.add(u(3.3));let p=new le;for(let b of[.9,1.5])p.add(w(1.4,.05,.35,R("#5A4A3A"),0,b,0));for(let b of[-.7,.7])p.add(w(.05,1.6,.35,R("#5A4A3A"),b,.8,0));p.position.set(-2,0,-3.2),n.add(p);let g=[];for(let b=0;b<6;b++){let F=yE();F.position.set(-2.5+b%3*.26,b<3?.93:1.53,-3.2),p.parent.add(F),g.push(F)}n.userData.cans=g;let E=vE();E.position.set(2.6,0,-3),n.add(E),n.userData.gen=E.userData.led;let m=new le;m.add(w(.06,.7,.9,R("#3A3C3A",{metalness:.5}),0,0,0));for(let b=0;b<6;b++)m.add(w(.08,.04,.8,R("#5A5C5A",{metalness:.6}),.02,-.28+b*.11,0));if(m.position.set(-4.02,2.75,-1.1),n.add(m),e.mesa!==!1){n.add(w(1.4,.06,.8,R("#5A4632"),0,.75,.3));for(let b of[-.6,.6])for(let F of[-.32,.32])n.add(w(.05,.75,.05,R("#3A2E22"),b,.375,.3+F))}if(e.museo){let b=mf(["MUSEO DE LA GUERRA FR\xCDA"],2.4,{size:80});b.position.set(-2,2.6,-3.38),n.add(b)}let f=Le(_e(360,480,b=>{b.fillStyle="#E8D8A0",b.fillRect(0,0,360,480),b.fillStyle="#7A2A1A",b.font="900 46px Fraunces",b.textAlign="center",b.fillText("REFUGIO",180,70),b.fillStyle="#3A3A2A",b.fillRect(80,140,200,140),b.fillStyle="#E8D8A0",b.beginPath(),b.moveTo(60,150),b.lineTo(180,90),b.lineTo(300,150),b.fill(),b.fillStyle="#7A2A1A",b.font="700 30px Inter",b.fillText("1962",180,340)}),.5,.66);f.position.set(2.6,2.3,-3.38),n.add(f);let v=[];for(let b of[-1.6,1.6]){let F=new z(new bt(.09,12,10),pf("#FFD089",t?0:2.2));F.position.set(b,3.1,-.6),n.add(F),v.push(F),n.add(w(.22,.02,.22,R("#333"),b,3.2,-.6,!1))}let _=[];if(!t)for(let b of[-1.6,1.6]){let F=new nt("#FFC27A",11,10,1.4);F.position.set(b,2.9,-.4),F.castShadow=b<0,n.add(F),_.push(F)}let y=new we(t?"#3A4A6A":"#E8DCC8",t?"#0A0A0E":"#3A3430",t?.12:.55);if(n.add(y),n.userData.lights=_,n.userData.bulbs=v,n.userData.hemi=y,i){let b=zt(1.7,2.4,"#FFF4D8",3.2);b.position.set(0,1.2,-3.5),n.add(b);let F=bs(2.2,8,"#FFE8B8",.3);F.position.set(0,1.4,-.6),F.rotation.set(-1.25,0,0),n.add(F);let S=new Hn("#FFF0D0",60,14,.6,.6,1.2);S.position.set(0,2.2,-3.6),S.target.position.set(0,0,1.5),S.castShadow=!0,n.add(S,S.target),n.userData.sunObjs=[b,F,S]}let L=Oe(5),C=[];for(let b=0;b<26;b++){let F=Je("#FFE8C0",.04,t?.2:.5);F.position.set((L()-.5)*6,.5+L()*2.6,-3+L()*4),n.add(F),C.push(F)}n.userData.dust=C};ye.bosqueBunker=(n,e)=>{let t=!!e.storm;n.fog=new Re(t?"#1A1E28":"#C8D0B8",t?.045:.022),ft(n,-100,500,200,t?[[0,"#05070C"],[.6,"#1A2030"],[1,"#2A3040"]]:[[0,"#8AA8C0"],[.7,"#C8D4C8"],[1,"#E8E4C8"]]),Ha(n,t?"#2A3A24":"#6E8A48");let i=Oe(14);for(let a=0;a<30;a++){let l=(i()-.5)*34,c=-3-i()*24;Math.abs(l)<4&&c>-9||qt(n,l,c,1.2+i()*.8,t?["#1E2E1E","#24381F","#2E4628","#3A4A2A"]:["#3E5F3A","#4F7A44","#6E9A50","#A9B65A"],a)}let s=new z(new bt(3.2,24,12,0,Math.PI*2,0,Math.PI/2),R(t?"#3A4A30":"#6E8A50",{roughness:1}));s.scale.set(1.3,.7,1),s.position.set(0,0,-6.5),n.add(s),n.add(ws(3.2,2.6,.8,0,1.3,-4,"#8C8A84")),n.add(w(1.5,2,.1,R("#5E6660",{metalness:.6,roughness:.4}),0,1,-3.56));let r=mf(["MUSEO DE LA GUERRA FR\xCDA"],3,{size:84});r.position.set(0,2.95,-3.55),n.add(r);let o=AE();if(o.position.set(e.busX??6.5,0,-1.4),o.rotation.y=Math.PI,n.add(o),n.userData.bus=o,t){n.add(new we("#6A7A9A","#1A1E1A",.75));let a=new we("#DDE6FF","#5A6070",0);n.add(a),n.userData.flash=a;let l=je("#7A8AB8",.5,[-8,14,8],14,60);n.add(l);let c=[],h=new rt({color:"#AFC4E8",transparent:!0,opacity:.45});for(let d=0;d<260;d++){let u=new z(new xn(.012,.45,.012),h);u.userData.p=[(i()-.5)*16,i()*8,4-i()*14,i()],n.add(u),c.push(u)}n.userData.rain=d=>c.forEach(u=>{let[p,g,E,m]=u.userData.p;u.position.set(p+(d*1.2+m)%1*-.3,7-(g+d*14)%8,E),u.rotation.z=.12})}else n.add(new we("#E9EEFF","#5A6A4A",.95)),n.add(je("#FFD29A",2.6,[-12,16,10],16,70))};ye.puente=(n,e)=>{let t=!!e.normal;n.fog=new Re("#C8D8E0",t?.02:.012),ft(n,-200,700,260,[[0,"#5F96C8"],[.6,"#BFD4E0"],[1,"#EEF0E4"]]),n.add(new we("#E9EEFF","#5A6A4A",1)),n.add(je("#FFE2B0",2.6,[-10,18,12],16,80));let i=Oe(21),s=["#2E4F2C","#3B6636","#55813F","#A9B65A"];if(t){Ha(n,"#6E8A48");let l=new z(new be(3.4,60),R("#5A8AB0",{roughness:.15,metalness:.3}));l.rotation.x=-Math.PI/2,l.position.set(0,.02,-10),n.add(l),n.add(w(1.4,.14,5,R("#8E6242"),0,.35,0));for(let c of[-1,1]){n.add(w(.08,.5,5,R("#6A4630"),c*.66,.65,0));for(let h=0;h<5;h++)n.add(w(.1,.6,.1,R("#6A4630"),c*.66,.3,-2+h))}for(let c=0;c<16;c++)qt(n,(i()<.5?-1:1)*(4+i()*10),-2-i()*20,1.2+i()*.6,s,c);n.userData.y=.42;return}for(let l of[-1,1]){let c=ws(20,40,30,l*16,-20,-6,"#8A7A62",6);n.add(c),Ha(n,"#6E8A48",20,30).position.set(l*16,.01,-6);for(let d=0;d<8;d++)qt(n,l*(8+i()*10),-4-i()*18,1.2+i()*.6,s,d+(l>0?9:0))}let r=new z(new be(14,200),new Ie({color:"#4A8AB0",roughness:.2,metalness:.3,emissive:"#1A3A50",emissiveIntensity:.3}));r.rotation.x=-Math.PI/2,r.position.set(0,-38,-40),n.add(r);for(let l=0;l<8;l++){let c=new z(new Li(1.5+i()*2),R("#7A6A52"));c.position.set((i()-.5)*10,-38,-10-i()*60),n.add(c)}let o=l=>-.55*(1-(l/6)**2);n.userData.sag=o;let a=R("#9A7448",{roughness:.9});for(let l=0;l<=40;l++){let c=-6+l*.3,h=w(.22,.05,1.1,a,c,o(c),0);h.rotation.z=Math.atan(.55*2*c/36),n.add(h)}for(let l of[-1,1]){let c=[];for(let d=0;d<=24;d++){let u=-6+d*.5;c.push(new I(u,o(u)+1,l*.55))}let h=new z(new fr(new ys(c),60,.025,6),R("#C8B088"));n.add(h);for(let d=0;d<=24;d+=2){let u=-6+d*.5;n.add(w(.015,1,.015,R("#C8B088"),u,o(u)+.5,l*.55))}for(let d of[-6.1,6.1])n.add(w(.18,1.6,.18,R("#6A4630"),d,.8,l*.55))}n.userData.y=0};ye.marte=(n,e)=>{n.background=new ce("#10141A"),n.fog=new Re("#1A2028",.05);let t=new z(new ot(2.4,2.4,30,28,1,!0),new Ie({color:"#C8CCD0",side:sn,roughness:.6,metalness:.2}));t.rotation.x=Math.PI/2,t.position.set(0,1.9,-10),n.add(t),n.add(w(3.6,.1,30,R("#6A707A",{metalness:.4}),0,0,-10));for(let r=0;r<10;r++){let o=new z(new ln(2.38,.05,6,28),R("#8A9098",{metalness:.6}));o.position.set(0,1.9,2-r*3),n.add(o);let a=zt(1,.2,"#DDEEFF",1.6);a.rotation.x=Math.PI/2,a.position.set(0,4.2,1-r*3),n.add(a)}for(let r of[-1,1])for(let o=0;o<4;o++){n.add(w(.6,.5,1.8,R("#7A8A9A"),r*1.5,.45,-1-o*3)),n.add(w(.05,.6,.5,R("#2A3A4A"),r*1.75,1.6,-o*3));let a=zt(.5,.32,["#7FD08A","#5AC8FF"][o%2],.6);a.rotation.y=-r*Math.PI/2,a.position.set(r*1.72,1.6,-o*3),n.add(a)}let i=Le(It(["MARS-500 \xB7 MOSC\xDA"],{bg:"#2A3A6A",fg:"#FFFFFF",size:80,w:900,h:150}),2,.33);i.position.set(0,3,-6),n.add(i),n.add(new we("#E8F0FF","#4A505A",.9));let s=new nt("#E8F0FF",12,12,1.4);s.position.set(0,3,0),n.add(s)};ye.biosfera=(n,e)=>{n.fog=new Re("#F2D8B0",.012),ft(n,-200,700,260,[[0,"#5F96C8"],[.6,"#F0C890"],[1,"#FFE2B8"]]),Ha(n,"#D8B07A");let t=Oe(31);for(let l=0;l<8;l++){let c=new z(new un(8+t()*8,6+t()*6,6),R("#C88A5A",{roughness:1}));c.position.set(-60+l*18,0,-70-t()*30),n.add(c)}for(let l=0;l<9;l++){let c=new le;c.add(w(.3,1.6+t(),.3,R("#4A8A4A"),0,.8,0)),c.position.set((t()-.5)*20,0,1-t()*6),Math.abs(c.position.x)>3&&n.add(c)}let i=new Ie({color:"#CFE8F0",transparent:!0,opacity:.32,roughness:.05,metalness:.5,side:Dt}),s=new rt({color:"#F4F4F0",wireframe:!0}),r=(l,c,h)=>{let d=new un(l,l*1.1,4,4);for(let u of[i,s]){let p=new z(d,u);p.rotation.y=Math.PI/4,p.position.set(c,l*.55,h),n.add(p)}};r(5,-3,-12),r(3.4,5,-10);let o=new bt(3.6,20,10,0,Math.PI*2,0,Math.PI/2);for(let l of[i,s]){let c=new z(o,l);c.position.set(11,0,-14),n.add(c)}for(let l=0;l<10;l++)qt(n,-6+t()*6,-10-t()*4,.7+t()*.5,["#2E5F2C","#3B7636","#55913F","#A9C65A"],50+l);let a=Le(It(["BIOSFERA 2 \xB7 ARIZONA"],{bg:"#2A2A34",fg:"#F2C14E",size:80,w:1e3,h:150}),2.4,.36);a.position.set(-1,4.6,-6),n.add(a),n.userData.tag=a,n.add(new we("#FFF0DC","#B08A6A",1.05)),n.add(je("#FFD29A",3,[-14,16,10],20,70))};ye.noria=(n,e)=>{ye.parque(n,{dusk:!0});let t=new le,i=R("#E8E2D2",{metalness:.4,roughness:.4}),s=new z(new ln(5,.08,8,60),i);t.add(s);let r=s.clone();r.scale.setScalar(.7),t.add(r);for(let a=0;a<12;a++){let l=w(10,.06,.06,i,0,0,0);l.rotation.z=a*Math.PI/12,t.add(l)}let o=[];for(let a=0;a<12;a++){let l=a*Math.PI/6,c=new le;c.add(w(.7,.6,.6,R(["#E8667F","#F2C14E","#4A86C7","#36AEA2"][a%4]),0,-.35,0)),c.position.set(Math.cos(l)*5,Math.sin(l)*5,0),t.add(c),o.push(c);let h=Je("#FFE2A8",.6,.8);h.position.set(Math.cos(l)*5,Math.sin(l)*5,.1),t.add(h)}t.position.set(2.5,6.2,-9),n.add(t);for(let a of[-1,1]){let l=w(.2,7.5,.2,i,2.5+a*1.8,3.2,-9);l.rotation.z=a*.25,n.add(l)}n.userData.wheel=t,n.userData.cabs=o};var oo=(n,e=1.6)=>new Ie({color:n,emissive:n,emissiveIntensity:e}),Xn=(n="#A8ACB0")=>R(n,{metalness:.75,roughness:.32}),za=(n="#9EA2A6")=>{let e=_e(256,256,t=>{t.fillStyle=n,t.fillRect(0,0,256,256);let i=Oe(7);for(let s=0;s<500;s++)t.fillStyle=`rgba(${i()<.5?"255,255,255":"0,0,0"},${i()*.06})`,t.fillRect(0,i()*256,256,1+i()*2)});return new Ie({map:e,metalness:.7,roughness:.35})},gf=(n,e,t,i="#1A1C20",s="#FF5A3A",r=150)=>Le(It([n],{bg:i,fg:s,size:r,w:300,h:200}),e,t);function Ef(n=7){let e=document.createElement("canvas");e.width=256,e.height=160;let t=e.getContext("2d"),i=new Wn(e);i.colorSpace=Vt;let s=(o,a="")=>{t.fillStyle="#0C0D10",t.fillRect(0,0,256,160),t.fillStyle="#FF6A3A",t.font="700 110px 'IBM Plex Mono'",t.textAlign="center",t.fillText(String(o),150,122),a&&(t.font="700 70px Inter",t.fillText(a,50,110)),i.needsUpdate=!0};s(n);let r=new z(new be(.5,.31),new rt({map:i,toneMapped:!1}));return r.userData.set=s,r}function ME(){let n=new le;n.add(w(.36,.9,.03,Xn("#8E9296"),0,0,0));let e=[];["12","11","10","9","8","7","6","5","4","3","2","1","0","\u25C0\u25B6"].forEach((o,a)=>{let l=new z(new ot(.04,.04,.02,16),oo("#F4E8C8",.15));l.rotation.x=Math.PI/2;let c=a%2,h=Math.floor(a/2);l.position.set(-.07+c*.14,.3-h*.085,.025),n.add(l);let d=Le(It([o],{bg:"rgba(0,0,0,0)",fg:"#1A1A1A",size:120,w:200,h:160}),.055,.044);d.position.set(-.07+c*.14,.3-h*.085,.037),n.add(d),e.push(l)});let i=new z(new ot(.05,.05,.025,16),oo("#F2C14E",.3));i.rotation.x=Math.PI/2,i.position.set(0,-.33,.025),n.add(i);let s=Le(It(["\u{1F514}"],{bg:"rgba(0,0,0,0)",fg:"#2A2A34",size:120,w:200,h:160}),.06,.048);s.position.set(0,-.33,.04),n.add(s);let r=new le;for(let o=0;o<5;o++)r.add(w(.16,.012,.01,R("#2A2A2A"),0,-.03*o,.02));return r.position.set(0,-.18,0),n.add(r),n.userData.btns=e,n.userData.alarm=i,n}ye.ascensor=(n,e)=>{n.background=new ce("#08090C"),n.fog=new Re("#08090C",.03);let t=1.2,i=-1.6,s=2.8,r=za("#A4A8AC"),o=w(2.6,.1,2.4,R("#3A3634",{roughness:.8}),0,-.05,-.4);o.receiveShadow=!0,n.add(o);let a=new z(new be(2.4,2),new Ie({map:(()=>{let C=_e(256,256,b=>{b.fillStyle="#4A4440",b.fillRect(0,0,256,256),b.strokeStyle="#3A3430",b.lineWidth=3;for(let F=0;F<256;F+=32)b.beginPath(),b.moveTo(F,0),b.lineTo(F,256),b.stroke(),b.beginPath(),b.moveTo(0,F),b.lineTo(256,F),b.stroke()});return C.wrapS=C.wrapT=dn,C.repeat.set(3,3),C})(),roughness:.7}));a.rotation.x=-Math.PI/2,a.position.set(0,.005,-.6),a.receiveShadow=!0,n.add(a),n.add(w(.08,s,2.4,r,-t-.04,s/2,-.4)),n.add(w(.08,s,2.4,r,t+.04,s/2,-.4)),n.add(w(2.6,.08,2.4,R("#5A5E62",{metalness:.4,roughness:.5}),0,s+.04,-.4)),n.add(w(.65,s,.08,r,-t+.325-.02,s/2,i)),n.add(w(.65,s,.08,r,t-.325+.02,s/2,i)),n.add(w(1.2,s-2.2,.08,r,0,2.2+(s-2.2)/2,i));let l=Xn("#B4B8BC"),c=w(.56,2.2,.04,l,-.28,1.1,i+.03),h=w(.56,2.2,.04,l,.28,1.1,i+.03);n.add(c,h),n.add(w(.01,2.2,.045,R("#555"),0,1.1,i+.04));let d=w(1.1,2.2,.02,R("#050505"),0,1.1,i-.02);n.add(d),n.userData.doors=C=>{c.position.x=-.28-.55*C,h.position.x=.28+.55*C};let u=Ef(e.piso??7);u.position.set(0,2.5,i+.05),n.add(u),n.userData.display=u;let p=ME();p.position.set(.85,1.25,i+.05),n.add(p),n.userData.botonera=p;for(let C of[-1,1])n.add(w(.04,.04,1.8,Xn("#C8CCD0"),C*(t-.06),.95,-.5));let g=new z(new be(1.5,1.5),new Ie({color:"#C8D4DC",metalness:.9,roughness:.08,emissive:"#22303A",emissiveIntensity:.35}));g.rotation.y=Math.PI/2,g.position.set(-t+.005,1.55,-.6),n.add(g),n.userData.mirror=g,n.add(w(.02,1.56,1.56,R("#6A6E72",{metalness:.6}),-t+.001,1.55,-.6));let E=Le(It(["M\xC1X. 6 PERSONAS \xB7 450 KG"],{bg:"#2A2C30",fg:"#D8DCE0",size:44,w:600,h:90}),.5,.075);E.position.set(.85,1.82,i+.05),n.add(E);let m=zt(1.6,.9,"#FFF6E8",1.6);m.rotation.x=Math.PI/2,m.position.set(0,s-.01,-.5),n.add(m);let f=new nt("#FFF4E4",10,7,1.4);f.position.set(0,s-.3,-.3),f.castShadow=!0,n.add(f);let v=new z(new xn(.3,.06,.14),oo("#FFB040",0));v.position.set(-.7,s-.05,-1.3),n.add(v);let _=new nt("#FFA840",0,6,1.4);_.position.set(-.6,s-.4,-1),n.add(_);let y=new we("#E8ECF0","#3A3634",.5);n.add(y);let L=new nt("#FFE8C8",0,8,1.6);L.position.set(0,1.8,2.4),n.add(L),n.userData.luz=(C,b=0)=>{let F=Math.max(0,Math.min(1,C))*(1-b);m.material.emissiveIntensity=1.6*F,f.intensity=10*F,v.material.emissiveIntensity=2.4*(1-F),_.intensity=9*(1-F),y.intensity=.14+.36*F,y.color.set(F>.5?"#E8ECF0":"#FFC890"),L.intensity=3.2*(1-F)},n.userData.luz(e.luz??1)};ye.rellano=(n,e)=>{let t=!!e.night;n.background=new ce("#14120F"),n.fog=new Re("#2A2620",.035),n.add(pi(14,10,e.portal?"#D8D0C0":"#B8A890",e.portal?"#C8C0B0":"#A89880",8));let i=e.portal?"#E8E0D0":"#D8C8A8";n.add(w(6.38,3.4,.3,R(i),-3.81,1.7,-3.2)),n.add(w(6.38,3.4,.3,R(i),3.81,1.7,-3.2)),n.add(w(1.24,1.2,.3,R(i),0,2.8,-3.2)),n.add(w(.3,3.4,10,R(i),-5,1.7,0)),n.add(w(.3,3.4,10,R(i),5,1.7,0)),n.add(w(14,.2,10,R("#F0EAE0"),0,3.4,0));for(let E of[-1,1])n.add(w(6.3,.9,.02,R(e.portal?"#8A6A4A":"#9A7A5A"),E*3.85,.45,-3.04));n.add(w(1.5,.12,.1,Xn("#9EA2A6"),0,2.26,-3.02));for(let E of[-1,1])n.add(w(.12,2.3,.1,Xn("#9EA2A6"),E*.69,1.13,-3.02));let s=new le;s.add(w(1.3,.05,1.6,R("#4A4440"),0,0,-.8)),s.add(w(1.3,2.2,.05,za(),0,1.1,-1.6));for(let E of[-1,1])s.add(w(.05,2.2,1.6,za(),E*.65,1.1,-.8));let r=zt(1.1,1.2,"#FFF6E8",1.8);r.rotation.x=Math.PI/2,r.position.set(0,2.18,-.8),s.add(r),s.position.set(0,0,-3.05),n.add(s);let o=new nt("#FFF4E4",0,5,1.4);o.position.set(0,1.8,-3.6),n.add(o);let a=Xn("#B4B8BC"),l=w(.62,2.2,.05,a,-.31,1.1,-3),c=w(.62,2.2,.05,a,.31,1.1,-3);n.add(l,c),n.userData.doors=E=>{l.position.x=-.31-.6*E,c.position.x=.31+.6*E,o.intensity=8*E},n.userData.doors(e.open||0);let h=Ef(e.piso??8);h.scale.setScalar(.8),h.position.set(0,2.55,-3.02),n.add(h),n.userData.display=h;let d=w(.1,.2,.03,Xn(),.95,1.2,-3.03);n.add(d);let u=new z(new bt(.03,10,8),oo("#FFB040",1));u.position.set(.95,1.2,-3),n.add(u);let p=gf(String(e.piso??8),.45,.3,"#2A2A34","#F2C14E");if(p.position.set(1.5,2.2,-3.03),n.add(p),e.portal){let E=new le;for(let f=0;f<12;f++)E.add(w(.36,.26,.04,R("#8E6242"),-.6+f%4*.4,-Math.floor(f/4)*.3,0)),E.add(w(.2,.02,.02,R("#2A2A2A"),-.6+f%4*.4,-Math.floor(f/4)*.3+.05,.03));E.position.set(-3,1.9,-3.03),n.add(E),n.add(w(.04,2.6,2,R("#9FC8E8",{transparent:!0,opacity:.35,metalness:.3,roughness:.1}),4.84,1.3,.5));let m=Le(It(["PORTAL"],{bg:"#2A2A34",fg:"#F2C14E",size:80,w:400,h:120}),.8,.24);m.position.set(-3,2.6,-3.03),n.add(m)}else for(let[E,m]of[[-3.2,"A"],[3.2,"B"]]){n.add(w(1,2.2,.06,R("#6B4A33"),E,1.1,-3.02));let f=Le(It([String(e.piso??8)+"\xBA"+m],{bg:"#C8A858",fg:"#2A2A34",size:70,w:240,h:110}),.3,.14);f.position.set(E,1.85,-2.98),n.add(f);let v=new z(new bt(.04,10,8),Xn("#D8B860"));v.position.set(E+.38,1.05,-2.96),n.add(v)}let g=[];for(let E of[-2.5,2.5]){let m=new z(new bt(.16,14,10),oo("#FFE8C0",t?1.4:2));m.position.set(E,3.15,-1),n.add(m),g.push(m);let f=new nt("#FFE0B0",t?6:9,9,1.4);f.position.set(E,2.9,-.8),f.castShadow=E<0,n.add(f)}n.add(new we("#F4ECE0","#4A4034",t?.35:.6))};var is=3;ye.hueco=(n,e)=>{n.background=new ce("#05060C"),n.fog=new Re("#0A0C18",.02),ft(n,-120,500,260,[[0,"#04050C"],[.6,"#0E1230"],[1,"#2A2450"]]),vn(n,1600,220,3),ii(n,-60,300,50,["#0C0E1E","#12142A","#181A34"],!0,6);let t=13*is,i=R("#3A3A42",{roughness:.95});n.add(w(4.4,t+2,.3,i,0,t/2,-2.2));for(let g of[-1,1])n.add(w(.3,t+2,3.2,i,g*2.2,t/2,-.8));for(let g=0;g<=13;g++){let E=g*is;if(n.add(w(4.1,.14,.1,R("#6A6A74"),0,E-.07,-2.02)),g===0&&n.add(w(4.1,.25,3.2,R("#5A5A64"),0,-.12,-.8)),g<=12){let m=Le(It([g===0?"BAJO":"PISO "+g],{bg:"#F2C14E",fg:"#2A2A34",size:70,w:420,h:110}),.9,.24);m.position.set(-1.55,E+2.5,-2.03),n.add(m)}}for(let g of[-1,1])n.add(w(.08,t,.08,Xn("#7A7E84"),g*1.75,t/2,-1.6));let s=new le,r=za("#A4A8AC");s.add(w(2.6,.12,2.2,R("#3A3634"),0,0,0)),s.add(w(2.6,.1,2.2,R("#5A5E62",{metalness:.4}),0,2.85,0));for(let g of[-1,1])s.add(w(.08,2.8,2.2,r,g*1.3,1.4,0));s.add(w(2.6,2.8,.08,r,0,1.4,-1.1));let o=zt(1.6,1,"#FFF6E8",1.6);o.rotation.x=Math.PI/2,o.position.set(0,2.79,0),s.add(o);let a=new nt("#FFF4E4",8,5,1.4);a.position.set(0,2.4,.3),s.add(a);let l=new nt("#FFA840",0,5,1.4);l.position.set(0,2.4,.3),s.add(l),s.add(w(.4,.3,.4,R("#2A2A2E",{metalness:.6}),0,3.05,0));for(let g of[-1,1]){let E=w(.18,.3,.18,R("#C9361F",{metalness:.4}),g*1.6,.25,-.5);s.add(E)}s.position.set(0,0,-.6),n.add(s),n.userData.cab=s,n.userData.cabLuz=g=>{o.material.emissiveIntensity=1.6*g,a.intensity=8*g,l.intensity=7*(1-g)};let c=new z(new ot(.6,.6,.3,24),Xn("#6A6E74"));c.rotation.x=Math.PI/2,c.position.set(.6,t+.3,-1.4),n.add(c);let h=[];for(let g=0;g<4;g++){let E=new z(new ot(.018,.018,1,6),Xn("#2A2C30"));n.add(E),h.push([E,-.09+g*.06])}let d=w(.7,1.6,.3,R("#4A4C52",{metalness:.5}),1.25,0,-1.8);n.add(d);let u=new z(new ot(.03,.03,1,6),Xn("#2A2C30"));n.add(u),n.userData.setCab=(g,E=0)=>{s.position.y=g;let m=g+3.2;h.forEach(([_,y])=>{let L=Math.max(.01,(t-m)*(1-E));_.scale.y=L,_.position.set(y,t-L/2,-.6)});let f=t-4-g*.9%(t-6);d.position.y=Math.max(1,t-2-g);let v=t-d.position.y-.8;u.scale.y=Math.max(.01,v),u.position.set(1.25,t-v/2,-1.8)},n.userData.setCab(e.y??7.5*is);for(let g=0;g<=12;g+=2){let E=new nt("#8A9ACA",2.2,8,1.6);E.position.set(-1.5,g*is+2.2,.4),n.add(E)}n.add(new we("#6A78A8","#101018",.5));let p=Oe(12);for(let g=0;g<13;g++)for(let E of[-1,1])for(let m=0;m<2;m++){let f=p()<.55,v=zt(.8,1,f?"#FFD890":"#1A1C2A",f?1.2:.2);v.position.set(E*(3.2+m*1.6),g*is+1.6,-.6),n.add(v),n.add(w(1.4,is,.2,R("#2A2A34"),E*(3.2+m*1.6),g*is+is/2,-.75))}e.fuegos&&(n.userData.fuegos=!0)};ye.feria=(n,e)=>{n.background=new ce("#2A2018"),n.fog=new Re("#6A5A44",.03),n.add(pi(40,30,"#8A7258","#7E6850",14));for(let l=-3;l<=3;l++){n.add(w(.25,12,.25,R("#4A4A4E",{metalness:.5}),l*4,6,-9));let c=new z(new ln(2,.1,6,24,Math.PI),R("#4A4A4E",{metalness:.5}));c.position.set(l*4+2,12,-9),n.add(c)}for(let l=0;l<8;l++){let c=zt(3.6,4,"#FFF0D0",.55);c.position.set(-14+l*4,7,-9.15),n.add(c)}let t=["#C9361F","#F4F0E4","#2A4A8A"];for(let l=0;l<9;l++)n.add(w(.6,.4,.02,R(t[l%3]),-8+l*2,9.5,-6));let i=R("#6A4A30",{roughness:.8});for(let l of[-1,1])n.add(w(.25,9,.25,i,l*1.4,4.5,-3));n.add(w(3.2,.3,.4,i,0,9,-3));for(let l=1;l<9;l+=1.5)for(let c of[-1,1]){let h=w(.08,2.1,.08,i,c*1.4,l,-3.2);h.rotation.z=c*.7,n.add(h)}let s=new z(new ot(.4,.4,.15,18),R("#3A3A3E",{metalness:.6}));s.rotation.x=Math.PI/2,s.position.set(0,9.3,-3),n.add(s);let r=new le;r.add(w(2.4,.15,1.8,R("#8A6A44"),0,0,0));for(let l of[-1,1])r.add(w(.08,1,.08,i,l*1.1,.5,.8));r.add(w(2.3,.06,.06,i,0,1,.8));for(let l of[-1,1]){let c=w(.16,.2,.16,R("#3A3A3E",{metalness:.6}),l*1.3,.05,0);r.add(c)}r.position.set(0,5,-3),n.add(r),n.userData.plat=r;let o=new z(new ot(.03,.03,1,6),R("#C8A870"));n.add(o),n.userData.rope=o,n.userData.setPlat=(l,c=0)=>{r.position.y=l;let h=(9.2-(l+.1))*(1-c);o.visible=h>.02,o.scale.y=Math.max(.01,h),o.position.set(0,9.2-h/2,-3)},n.userData.setPlat(e.y??5);let a=Le(It(["NUEVA YORK \xB7 1854"],{bg:"#3A2A1A",fg:"#F4E0B0",size:80,w:900,h:140}),4,.62);a.position.set(0,10.6,-8.8),n.add(a),n.add(new we("#FFE8C8","#5A4A38",.9)),n.add(je("#FFD8A0",2.2,[-6,14,8],14,50))};var SE=n=>Math.max(0,Math.min(2.6,2.6-(n+3)/.32*.18));ye.escalera=(n,e)=>{n.background=new ce("#1E1A16"),n.fog=new Re("#2A2620",.04),n.add(pi(14,10,"#C8B898","#B8A888",8)),n.add(w(16,7,.3,R("#E0D4BC"),0,3.5,-2.4));for(let o=0;o<15;o++){let a=w(.34,.18*(15-o),1.6,R("#B8A890",{roughness:.8}),-3+o*.32+.16,.09*(15-o),-1.3);a.receiveShadow=!0,n.add(a),n.add(w(.34,.03,1.62,R("#8A7A60"),-3+o*.32+.16,.18*(15-o)+.01,-1.3))}n.add(w(2.6,2.6,1.6,R("#B8A890"),-4.3,1.3,-1.3));let i=new z(new ot(.03,.03,5.7,8),R("#5A3A22"));i.position.set(-.6,2.4,-.45),i.rotation.z=Math.atan2(2.7,4.8)+Math.PI/2,n.add(i);for(let o=0;o<14;o+=2)n.add(w(.025,.9,.025,R("#2A2A2E"),-2.9+o*.32,SE(-2.9+o*.32)+.45,-.5));let s=gf(String(e.piso??9),.5,.34,"#2A2A34","#F2C14E");s.position.set(-4.2,3.6,-2.23),n.add(s);let r=zt(1.1,1.4,e.night?"#2A3A6A":"#FFF4D8",e.night?.5:1.6);r.position.set(1.5,3.4,-2.23),n.add(r);for(let o of[-3.5,2]){let a=new nt("#FFE0B0",8,9,1.4);a.position.set(o,4.4,.5),a.castShadow=o<0,n.add(a)}n.add(new we("#F4ECE0","#4A4034",.6))};var Sr=[],TE=999,Tf=n=>n+1<no.length?no[n+1]:TE,zh=(n,e,t)=>n.map((i,s)=>e[s]+(i-e[s])*t),bf=(n,e)=>{let t=n.k??1.35;if(n.c&&t!==1){let[i,s,r,o]=n.c;n.c=[zh(i,s,t),s,zh(r,o,t),o]}else n.cam&&t!==1&&(n.cam=n.cam.map(([i,s,r])=>[i,zh(s,r,t),r]),n.f&&(n.f=n.f.map(([i,s])=>[i,s*t])));if(n.c){let[i,s,r,o]=n.c;n.cam=[[0,i,s],[e,r,o]];let a=(l,c)=>Math.hypot(l[0]-c[0],l[1]-c[1],l[2]-c[2]);n.f=[[0,a(i,s)],[e,a(r,o)]]}return n},te=(n,e)=>{let t=no[n],i=Tf(n),s=Math.min(i,578)-t;Sr.push([(r,o)=>Dh(r,o,bf(e(s,t),s)),t,i])},bE=(n,e,t)=>{let i=Math.min(e,578)-n;Sr.push([(s,r)=>Dh(s,r,bf(t(i,n),i)),n,e])},ri=(n,e,t)=>{let i=no[n],s=Tf(n),r=[i],o=i;for(let a of e){let[l,c]=Array.isArray(a)?a:[a,1];for(let h=0;h<c;h++)o=Uh(l,o+.01);r.push(o)}r.push(s),t.forEach((a,l)=>bE(r[l],r[l+1],a))},Rs=n=>({tipo:"humano",...n}),at=(n={})=>Rs({glow:.1,...n});var wE=(n={})=>Rs({outfit:"amarelo",hair:"long",hairc:"#4A2A1A",lash:!0,...n});var Gh=(n={})=>Rs({outfit:"jaleco",glasses:!0,glow:0,tint:"#E8E2D8",...n});var Y=(n,e,t=0)=>Uh(e,n+t)-n,Xe=(n,e,t,i,s={})=>{let r=Array.isArray(e)?e:[e],o=s.size||72,a={w:Math.max(720,Math.max(...r.map(c=>c.length))*o*.66+90),...s},l=Le(It(Array.isArray(e)?e:[e],{bg:"#2A2A34",fg:"#F2C14E",size:72,w:720,h:150,...a}),t,t*(a.h||150)/(a.w||720));return l.position.set(...i),l.renderOrder=4,n.add(l),l},Zt=(n,e,t,i,s={})=>Xe(n,e,t,i,{bg:"#FBF7EC",fg:"#2A2A34",...s}),xs=(n,e,t,i,s={})=>Xe(n,e,t,i,{bg:"#6A3AB8",fg:"#FFFFFF",...s});var Q=(n,e,t,i=1e9,s)=>{let r=Ve(t,t+.2,e)*(1-Ve(i,i+.2,e));n.visible=r>.01,n.scale.setScalar(Math.max(.001,.5+.5*r)),s&&yn(n,s)},Vh=(n,e)=>n.pose({armL:[12,8],armR:[150+Math.sin(e*9)*18,20]});var RE=(n,e)=>n.pose({head:Math.sin(e*7)*6,bob:Math.abs(Math.sin(e*7))*.02}),zn=(n,e)=>n.pose({armL:[12,8],armR:[50+Math.sin(e*8)*15,30],bob:Math.abs(Math.sin(e*8))*.015});var Xa=n=>n.pose({armL:[60,70],armR:[60,70]}),xE=n=>{for(let e of Object.values(n.legs))e.th.visible=!1,e.shin&&(e.shin.visible=!1)},Cs=n=>{n.pose({armL:[8,6],armR:[8,6]}),xE(n)};var Fs=n=>{let e=new I;return n.arms.R.hand.getWorldPosition(e),e},CE=n=>{let e=[-1,1].map(t=>{let i=Je("#FF3A4A",.42,0);return i.position.set(t*.2,-.12,.08),n.head.add(i),i});return t=>e.forEach(i=>i.material.opacity=t*.85)},wf=(n,e=6)=>{let t=[];for(let i=0;i<e;i++){let s=Le(to(i%2?"\u266A":"\u266B","#F2C14E",150),.35,.28);s.renderOrder=5,n.add(s),t.push(s)}return(i,s,r,o=!0)=>t.forEach((a,l)=>{let c=(i*.5+l/e)%1;a.visible=o,a.position.set(s.x+.4+Math.sin(l*2+i)*.3+c*.4,s.y+c*1.2,s.z),a.material.opacity=Math.sin(c*Math.PI),yn(a,r)})},Yn=(n,e=10,t="#FFF2C0")=>{let i=[];for(let s=0;s<e;s++){let r=Je(t,.3,0);n.add(r),i.push(r)}return(s,r,o=1)=>i.forEach((a,l)=>{let c=(s*.8+l/e)%1;a.position.set(r[0]+Math.sin(l*2.4)*r[3],r[1]+Math.cos(l*1.7)*r[3]*.6,r[2]),a.material.opacity=o*Math.sin(c*Math.PI)*.9,a.scale.setScalar(.15+Math.sin(c*Math.PI)*.25)})},FE=n=>{let e=[0,1,2].map(()=>{let t=Le(to("Z","#B8C8FF",150),.3,.24);return t.renderOrder=5,n.add(t),t});return(t,i,s,r=!0)=>e.forEach((o,a)=>{let l=(t*.35+a/3)%1;o.visible=r,o.position.set(i[0]+l*.6,i[1]+l*.9,i[2]),o.material.opacity=Math.sin(l*Math.PI),o.scale.setScalar(.6+l*.6),yn(o,s)})};var lo=(n,e={})=>n({eyes:[[0,"shut"]],...e,pose:(t,i)=>{t.pose({armL:[10,6],armR:[10,6]}),ef(t),e.p2&&e.p2(t,i)}});var qa=(n,e,t=-.1)=>{let i=Fs(e);n.position.set(i.x-.1,i.y+t,i.z+.1)},Wt=(n,e={})=>{let t=[["rosa","long","#6B3A22"],["azul",null,null],["amarelo","afro","#2a1b18"],["verde","bob","#D9B65A"],["laranja",null,null],["terno2",null,null],["rosa","bun","#3a2030"],["jaleco",null,null]][n%8];return Rs({outfit:t[0],hair:t[1],hairc:t[2],lash:!!t[1],glow:0,...e})},lt=(n,e,t,i,s=60)=>{let r=Array.isArray(e)?e:[e],o=Math.max(640,Math.max(...r.map(c=>c.length))*s*.62+80),a=Math.round(s*1.25*r.length/.72+60),l=Le(tf(r,{w:o,h:a,size:s}),t,t*a/o);return l.position.set(...i),l.renderOrder=6,n.add(l),l};var yf=[["rosa","long","#6B3A22"],["amarelo","afro","#2a1b18"],["azul","bob","#D9B65A"],["verde","long","#3a2418"],["roxo","bun","#3a2030"],["rosa","bob","#22161a"],["amarelo","bun","#8a4a26"],["laranja","long","#1E120C"]],PE=(n,e={})=>{let[t,i,s]=yf[n%yf.length];return Rs({outfit:t,hair:i,hairc:s,lash:!0,glow:0,...e})},Mr=(n=0,e={})=>PE(n,{outfit:"jaleco",glasses:!0,...e}),Dn={bg:"#C9361F",fg:"#fff"},Tr={bg:"#2F5A9A",fg:"#fff"};var rs={bloom:.38,bloomT:.9,vig:.6,exposure:1},Ne=(n,e,t,i,s=2.2)=>{let r={y:Xe,w:Zt,p:xs,r:(l,c,h,d)=>Xe(l,c,h,d,Dn),b:(l,c,h,d)=>Xe(l,c,h,d,Tr)},o=t.map(([l,,c="y",h=i,d=s])=>r[c](n,l,d,h)),a=t.map(([,l])=>typeof l=="number"?l:Y(e,l));return(l,c)=>o.forEach((h,d)=>Q(h,l,a[d],t[d][5]||d+1>=a.length?99:a[d+1]-.15,c))};var Rf=(n,e,t,i=.9,s=2,r=1,o="#C8A27A")=>{n.add(w(s,.08,r,R(o),e,i,t));for(let[a,l]of[[-1,-1],[1,-1],[-1,1],[1,1]])n.add(w(.07,i,.07,R("#5C3C28"),e+a*(s/2-.1),i/2,t+l*(r/2-.1)))},vf=(n,e,t,i=0,s="#8E6242")=>{let r=new le;r.add(w(.5,.06,.5,R(s),0,.5,0)),r.add(w(.5,.7,.06,R(s),0,.85,-.22));for(let[o,a]of[[-1,-1],[1,-1],[-1,1],[1,1]])r.add(w(.05,.5,.05,R(s),o*.2,.25,a*.2));return r.position.set(e,0,t),r.rotation.y=i,n.add(r),r};var IE=(n,e={})=>_e(540,1e3,t=>{t.fillStyle=e.bg||"#141830",t.fillRect(0,0,540,1e3),t.fillStyle="#fff",t.textAlign="center",t.font="700 70px Inter",t.fillText(e.hora||"23:31",270,130),t.font="800 52px Inter",(n||[]).forEach((i,s)=>{t.fillStyle=s===0?"#FF7A6A":"#F4F0E4",t.fillText(i,270,480+s*70)})}),Ln=(n,e)=>{let t=new le;t.add(w(.62,1.18,.06,R("#1A1A24",{metalness:.4}),0,0,0,!1));let i=new z(new be(.56,1.04),new rt({map:IE(n,e),toneMapped:!1}));return i.position.z=.032,t.add(i),t};var vt=(n={})=>wE({glow:0,...n});var Wh={bg:"#D66A86",fg:"#fff"};var ss=(n,e=.35,t="#E8667F")=>{let i=Le(to("\u2665",t,170),e,e*.8);return i.renderOrder=6,n.add(i),i},br=(n,e=120)=>{let t=n*e/60%1;return 1+.18*Math.exp(-t*9)+.1*Math.exp(-Math.max(0,t-.22)*12)*(t>.22?1:0)},Xh=(n,e)=>{let t=new nt("#9FC0FF",1.6,2.2,1.6);return n.add(t),()=>{let i=Fs(e);t.position.set(i.x,i.y+.1,i.z+.3)}},_f=(n,e,t)=>{let i=e.split(" "),s=[],r="";for(let o of i){let a=r?r+" "+o:o;n.measureText(a).width>t&&r?(s.push(r),r=o):r=a}return r&&s.push(r),s},LE=(n,e,t,i)=>{n.fillStyle="#F2C14E",n.beginPath(),n.arc(e,t,i,0,7),n.fill(),n.fillStyle="#2A2A34",n.beginPath(),n.arc(e-i*.35,t-i*.2,i*.12,0,7),n.arc(e+i*.35,t-i*.2,i*.12,0,7),n.fill(),n.strokeStyle="#2A2A34",n.lineWidth=i*.12,n.beginPath(),n.arc(e,t+i*.05,i*.5,.3,Math.PI-.3),n.stroke()},xf=(n,e,t,i,s="#E8445A")=>{n.fillStyle=s,n.beginPath(),n.moveTo(e,t+i*.9),n.bezierCurveTo(e-i*1.6,t-i*.2,e-i*.6,t-i*1.3,e,t-i*.45),n.bezierCurveTo(e+i*.6,t-i*1.3,e+i*1.6,t-i*.2,e,t+i*.9),n.fill()},DE=(n,e,t)=>{n.fillStyle="#10131F",n.fillRect(0,0,540,1e3),n.fillStyle="#1E2336",n.fillRect(0,0,540,150),n.fillStyle="#E8667F",n.beginPath(),n.arc(70,92,34,0,7),n.fill(),n.fillStyle="#4A2A1A",n.beginPath(),n.arc(70,92,26,Math.PI,0),n.fill(),n.fillStyle="#fff",n.textAlign="left",n.font="800 34px Inter",n.fillText(t.name||"MI CRUSH \u2665",120,88),n.font="600 24px Inter",n.fillStyle=t.off?"#8A90A0":"#5FD08A",n.fillText(t.off?"desconectada":t.typing?"escribiendo\u2026":"en l\xEDnea",120,122),n.fillStyle="#C8CCD8",n.font="700 26px Inter",n.textAlign="right",n.fillText(t.hora||"00:00",515,40);let i=190;n.font="700 36px Inter";for(let[s,r]of e){if(r==="@smile"||r==="@heart"){let h=s==="r"?440:100;r==="@smile"?LE(n,h,i+50,46):xf(n,h,i+50,44),i+=120;continue}if(s==="s"){n.font="900 40px Inter";let h=_f(n,r,420),d=h.length*50+34;n.fillStyle="#C9361F",n.beginPath(),n.roundRect(40,i,460,d,20),n.fill(),n.fillStyle="#fff",n.textAlign="center",h.forEach((u,p)=>n.fillText(u,270,i+52+p*50)),i+=d+24,n.font="700 36px Inter";continue}let o=_f(n,r,330),a=Math.max(...o.map(h=>n.measureText(h).width))+44,l=o.length*46+30,c=s==="r"?500-a:40;n.fillStyle=s==="r"?"#2E7D6A":"#EDEFF5",n.beginPath(),n.roundRect(c,i,a,l,26),n.fill(),n.fillStyle=s==="r"?"#fff":"#1A1C24",n.textAlign="left",o.forEach((h,d)=>n.fillText(h,c+22,i+46+d*46)),t.strike&&t.strike.includes(r)&&(n.strokeStyle="#FF5A5A",n.lineWidth=6,n.beginPath(),n.moveTo(c+10,i+l/2),n.lineTo(c+a-10,i+l/2),n.stroke()),i+=l+20}},co=(n,e,t,i,s={})=>{let r=new le;r.add(w(t*1.08,t*1.95,.06,R("#1A1A24",{metalness:.4}),0,0,0,!1));let o=document.createElement("canvas");o.width=540,o.height=1e3;let a=o.getContext("2d"),l=new Wn(o);l.colorSpace=Vt;let c=new z(new be(t,t*1.852),new rt({map:l,toneMapped:!1}));c.position.z=.032,r.add(c),r.position.set(...e),n.add(r);let h=new nt("#9FC0FF",1.5,3,1.6);h.position.set(e[0],e[1],e[2]+.8),n.add(h);let d="";return r.userData.upd=(u,p={})=>{let g=i.filter(f=>u>=f[2]).map(f=>[f[0],f[1]]),E={...s,...p},m=JSON.stringify([g,E]);m!==d&&(d=m,DE(a,g.slice(-(E.max||7)),E),l.needsUpdate=!0)},r.userData.upd(0),r};var Af=n=>_e(512,400,e=>{e.clearRect(0,0,512,400),e.fillStyle="#F2A6B4";for(let[t,i,s]of[[170,170,110],[300,150,120],[380,210,90],[230,250,100],[130,250,70]])e.beginPath(),e.arc(t,i,s,0,7),e.fill();e.fillStyle="#E08A9A",e.fillRect(250,300,50,80),e.strokeStyle="#D0788A",e.lineWidth=9;for(let t=0;t<9;t++)e.beginPath(),e.arc(150+t%3*100,130+Math.floor(t/3)*70,34,t,t+2.4),e.stroke();if(n){let t=e.createRadialGradient(270,230,5,270,230,120);t.addColorStop(0,"rgba(255,240,120,1)"),t.addColorStop(1,"rgba(255,200,60,0)"),e.fillStyle=t,e.beginPath(),e.arc(270,230,120,0,7),e.fill()}}),qh=(n,e,t=1.6)=>{let i=Le(Af(!1),t,t*.78),s=Le(Af(!0),t,t*.78);for(let r of[i,s])r.position.set(...e),r.renderOrder=4,n.add(r);return s.position.z+=.01,s.visible=!1,r=>{s.visible=r}},UE=(n,e={})=>_e(900,520,t=>{t.fillStyle=e.bg||"#FBF7EC",t.beginPath(),t.roundRect(0,0,900,520,30),t.fill(),t.fillStyle="#2A2A34",t.font="900 46px Inter",t.textAlign="center",t.fillText(e.title||"",450,64);let i=n.length,s=760/i;n.forEach(([r,o,a],l)=>{let c=70+s*l+s/2,h=o*300;t.fillStyle=a,t.beginPath(),t.roundRect(c-s*.3,420-h,s*.6,h,12),t.fill(),t.fillStyle="#2A2A34",t.font="800 30px Inter",r.split(`
`).forEach((d,u)=>t.fillText(d,c,462+u*34))})}),OE=(n,e,t,i,s)=>{let r=Le(UE(e,s),t,t*520/900);return r.position.set(...i),r.renderOrder=5,n.add(r),r},NE=(n,e=64)=>_e(700,520,t=>{t.fillStyle="#FFF6C8",t.fillRect(0,0,700,520),t.strokeStyle="#9EC0E8",t.lineWidth=3;for(let i=90;i<520;i+=70)t.beginPath(),t.moveTo(0,i),t.lineTo(700,i),t.stroke();t.fillStyle="#2A3A8A",t.font=`700 ${e}px Caveat`,t.textAlign="center",n.forEach((i,s)=>t.fillText(i,350,260-(n.length-1)*e*.55+s*e*1.1))}),Cf=(n,e,t,i,s)=>{let r=new z(new be(t,t*520/700),new Ie({map:NE(e,s),roughness:.9}));return r.position.set(...i),r.renderOrder=4,n.add(r),r},BE=n=>_e(256,200,e=>{e.clearRect(0,0,256,200),e.fillStyle=n;for(let t of[-1,1])e.beginPath(),e.ellipse(128+t*55,70,55,50,t*.4,0,7),e.fill(),e.beginPath(),e.ellipse(128+t*40,140,35,38,-t*.3,0,7),e.fill();e.fillStyle="#2A2A34",e.fillRect(122,40,12,130)}),HE=(n,e=10)=>{let t=[],i=["#F29AB0","#F2C14E","#8AC8F2","#B89AF2"];for(let s=0;s<e;s++){let r=Le(BE(i[s%4]),.26,.2);r.renderOrder=5,n.add(r),t.push(r)}return(s,r,o,a=1)=>t.forEach((l,c)=>{let h=s*(.8+c*.07)+c*1.9;l.visible=a>0,l.position.set(r[0]+Math.cos(h)*(.4+c%3*.2),r[1]+Math.sin(h*1.3)*.35+c%4*.1,r[2]+Math.sin(h)*.3),yn(l,o),l.scale.set(Math.max(.15,Math.abs(Math.sin(s*14+c)))*a,a,1)})};var zE=n=>{let e=rf(["INSTITUTO"],2.6,{bg:"#2F5A9A",fg:"#fff"});e.position.set(0,3.2,-4.2),n.add(e)};var kE=(n,e,t=-.1)=>{for(let i of e){n.add(w(1,.06,.6,R("#C8A27A"),i,.75,t));for(let[s,r]of[[-1,-1],[1,-1],[-1,1],[1,1]])n.add(w(.05,.75,.05,R("#6A6E78"),i+s*.44,.37,t+r*.25))}},Ya=()=>{let n=new le;return n.add(w(.32,.1,.12,R("#E0A860"),0,0,0)),n.add(w(.3,.03,.13,R("#C9361F"),0,.055,0)),n.add(w(.32,.07,.12,R("#E0A860"),0,.1,0)),n},Ff=(n={})=>({amb:"aula",fov:32,...n});var Mf=n=>(e,t)=>e.pose({armL:n>0?[12,8]:[40,0],armR:n>0?[40,0]:[12,8]});var GE=(n,e=-1.2)=>{let t=new z(new ln(.95,.5,20,48),R("#F4F2EE",{roughness:.35}));t.rotation.y=Math.PI/2,t.position.set(e,1.15,-.4),n.add(t),n.add(w(.9,.7,2.4,R("#E8E6E0"),e,.35,-.4)),n.add(w(2.6,.14,.7,R("#DDE6EE"),e+1.2,.78,-.4)),n.add(w(.4,.7,.4,R("#B8C0C8"),e+2.2,.35,-.4));let i=Je("#7FD0FF",.9,0);return i.position.set(e,1.15,-.4),n.add(i),i};var VE={bg:"#E8667F",fg:"#fff"};var f_=(()=>{let n=[];for(let e of[-1,1])for(let t of[0,1])for(let i=0;i<5;i++)n.push([e*(2.9+t*.75),-2+i*.8,e*-Math.PI/2]);return n})();var WE=(n,e,t,i=2)=>{n.add(w(i,.08,.5,R("#A87A52"),e,.5,t)),n.add(w(i,.5,.08,R("#A87A52"),e,.8,t-.24));for(let s of[-1,1])n.add(w(.08,.5,.45,R("#3A3A44"),e+s*(i/2-.15),.25,t))};var wr={amb:"cuartoYo"},Rr={amb:"cuartoYo",ambo:{night:!0}},qn={exposure:.95,bloom:.45};var XE={bg:"#3F8A52",fg:"#fff"},qE={bg:"#1E2230",fg:"#F2C14E"};var Za=(n,e=6,t="#8AC8F2")=>{let i=[];for(let s=0;s<e;s++){let r=Je(t,.12,0);n.add(r),i.push(r)}return(s,r,o=1)=>i.forEach((a,l)=>{let c=(s*.9+l/e)%1;a.position.set(r[0]+Math.sin(l*2.3)*r[3],r[1]-c*.7,r[2]+.1),a.material.opacity=o*(1-c)})};var Ps=(n,e,t,i,s="#F2C14E",r=150)=>{let o=Le(to(e,s,r),t,t*.8);return o.position.set(...i),o.renderOrder=6,n.add(o),o},YE=()=>_e(256,256,n=>{n.clearRect(0,0,256,256),n.fillStyle="#F4F0E4",n.font="900 150px Inter",n.textAlign="center",n.fillText("23",128,180)}),ZE=n=>{if(n.dorsal)return;let e=Le(YE(),.26,.26);e.position.set(0,-.3,.012),e.castShadow=!1,n.torso.add(e),n.dorsal=e},Oi=(n={})=>{let e=n.pose;return Rs({outfit:"laranja",glow:0,...n,pose:(t,i)=>{ZE(t),e?e(t,i):t.pose()}})},ho=-.28,JE=n=>WE(n,0,-.5,2.2),$E=()=>_e(256,128,n=>{n.fillStyle="#E07A2A",n.fillRect(0,0,256,128),n.strokeStyle="#2A1A10",n.lineWidth=5;for(let e of[64,128,192])n.beginPath(),n.moveTo(e,0),n.lineTo(e,128),n.stroke();n.beginPath(),n.moveTo(0,64),n.lineTo(256,64),n.stroke()}),xr=(n,e=.16)=>{let t=new z(new bt(e,24,16),new Ie({map:$E(),roughness:.7}));return t.castShadow=!0,n.add(t),t},Ja=(n,e=2.2,t=.12,i=.95)=>{let s=Math.abs(Math.sin(n*e*Math.PI));return t+(i-t)*s},Pf=(n,e,t)=>{n.add(w(.12,3,.12,R("#4A4A54",{metalness:.5}),e,1.5,t)),n.add(w(1.3,.9,.06,R("#F4F0E4"),e,3.05,t+.1)),n.add(w(.5,.36,.07,R("#C9361F"),e,2.85,t+.11));let i=new z(new ln(.23,.02,8,24),R("#E0602A"));i.rotation.x=Math.PI/2,i.position.set(e,2.68,t+.38),n.add(i)},mi=n=>{zE(n);for(let e=-6;e<=6;e++)n.add(w(.06,1.2,.06,R("#6A6E78"),e*.9,.6,-3.6));n.add(w(11,.05,.05,R("#6A6E78"),0,1.15,-3.6))},$a=(n,e,t=2.6)=>{let i=document.createElement("canvas");i.width=900,i.height=560;let s=i.getContext("2d"),r=new Wn(i);r.colorSpace=Vt;let o=new z(new be(t,t*560/900),new rt({map:r,toneMapped:!1}));o.position.set(...e),o.renderOrder=4,n.add(o);let a=[[170,170],[730,170],[450,430]],l=["JUGADOR 1","JUGADOR 2","VOLUNTARIO"],c=(h,d,u,p,g)=>{s.fillStyle=u,s.beginPath(),s.roundRect(h-46,d-10,92,86,24),s.fill(),s.fillStyle="#111",s.beginPath(),s.arc(h,d-40,44,0,7),s.fill(),s.fillStyle="#fff",s.beginPath(),s.arc(h-14,d-44,7,0,7),s.arc(h+14,d-44,7,0,7),s.fill(),s.fillStyle=g?"#F2C14E":"#C8CEE0",s.font="800 28px Inter",s.textAlign="center",s.fillText(p,h,d+110)};return(h,d="todos",u="EL JUEGO DE LA PELOTA")=>{let p=[0,2,1,0,2,1,0,2],g=[0,1],E=.9,m=Math.floor(h/E),f=h/E%1,v,_;d==="todos"?(v=p[m%p.length],_=p[(m+1)%p.length]):(v=g[m%2],_=g[(m+1)%2]),s.fillStyle="#10131F",s.fillRect(0,0,900,560),s.fillStyle="#1E2336",s.fillRect(0,0,900,70),s.fillStyle="#F2C14E",s.font="900 36px Inter",s.textAlign="center",s.fillText(u,450,48),c(...a[0],"#4A86C7",l[0]),c(...a[1],"#E8667F",l[1]),c(...a[2],"#43C4B4",l[2],d!=="todos");let y=f*f*(3-2*f),L=jt(a[v][0],a[_][0],y),C=jt(a[v][1]-10,a[_][1]-10,y)-Math.sin(y*Math.PI)*90;s.fillStyle="#F4F0E4",s.beginPath(),s.arc(L,C,22,0,7),s.fill(),r.needsUpdate=!0}},Sf=n=>_e(256,256,e=>{e.clearRect(0,0,256,256),e.save(),e.beginPath(),n<0?(e.moveTo(0,0),e.lineTo(128,0),e.lineTo(112,70),e.lineTo(140,120),e.lineTo(112,170),e.lineTo(128,256),e.lineTo(0,256)):(e.moveTo(256,0),e.lineTo(128,0),e.lineTo(112,70),e.lineTo(140,120),e.lineTo(112,170),e.lineTo(128,256),e.lineTo(256,256)),e.closePath(),e.clip(),xf(e,128,140,80,"#E8445A"),e.restore()}),uo=(n,e=.6)=>{let t=new le,i=Le(Sf(-1),e,e),s=Le(Sf(1),e,e);return i.renderOrder=s.renderOrder=6,t.add(i,s),n.add(t),{g:t,set:r=>{i.position.set(-r*.12,-r*.05,0),s.position.set(r*.12,r*.05,0),i.rotation.z=r*.25,s.rotation.z=-r*.25}}},QE=(n,e,t)=>_e(700,700,i=>{i.clearRect(0,0,700,700),i.fillStyle="#FBF7EC",i.beginPath(),i.roundRect(0,0,700,700,40),i.fill();let s=350,r=300,o=200;i.fillStyle="#D8CCB0",i.beginPath(),i.arc(s,r,o,0,7),i.fill(),i.fillStyle="#E8667F",i.beginPath(),i.moveTo(s,r),i.arc(s,r,o,-Math.PI/2,-Math.PI/2+n*Math.PI*2),i.closePath(),i.fill(),i.fillStyle="#FBF7EC",i.beginPath(),i.arc(s,r,o*.5,0,7),i.fill(),i.fillStyle="#2A2A34",i.font="900 84px Fraunces",i.textAlign="center",i.fillText(e,s,r+30),i.font="800 44px Inter",i.fillText(t,s,620)}),KE=(n,e,t,i,s,r)=>{let o=Le(QE(i,s,r),e,e);return o.position.set(...t),o.renderOrder=5,n.add(o),o},jE=(n,e,t)=>_e(520,300,i=>{i.fillStyle="#FBF7EC",i.beginPath(),i.roundRect(0,0,520,300,30),i.fill(),i.strokeStyle=t,i.lineWidth=10,i.stroke();for(let[s,r,o]of[[150,n,"#43C4B4"],[370,e,"#F7CC58"]])i.fillStyle=o,i.beginPath(),i.roundRect(s-50,150,100,90,24),i.fill(),i.fillStyle="#111",i.beginPath(),i.arc(s,110,52,0,7),i.fill(),i.fillStyle="#fff",i.beginPath(),i.arc(s-16,106,8,0,7),i.arc(s+16,106,8,0,7),i.fill(),i.fillStyle=t,i.font="900 46px Inter",i.textAlign="center",i.fillText(r,s,288);i.fillStyle="#E8667F",i.font="900 56px Inter",i.textAlign="center",i.fillText("\u2665",260,130)}),ka=(n,e,t,i,s,r="#2F5A9A")=>{let o=Le(jE(i,s,r),e,e*300/520);return o.position.set(...t),o.renderOrder=5,n.add(o),o},ey=(n,e,t)=>_e(600,720,i=>{i.fillStyle="#FBF7EC",i.fillRect(0,0,600,720),i.fillStyle=t,i.fillRect(0,0,600,120),i.fillStyle="#fff",i.font="900 52px Inter",i.textAlign="center",i.fillText(n,300,80),i.strokeStyle="#9EC0E8",i.lineWidth=3;for(let s=200;s<720;s+=70)i.beginPath(),i.moveTo(30,s),i.lineTo(570,s),i.stroke();i.fillStyle="#2A3A8A",i.font="700 50px Caveat",e.forEach((s,r)=>i.fillText(s,300,190+r*70))}),ao=(n,e,t,i,s,r)=>{let o=new z(new be(i,i*1.2),new Ie({map:ey(e,t,r),roughness:.9}));return o.position.set(...s),o.renderOrder=4,n.add(o),o},ty=(n,e)=>n.children.forEach((t,i)=>t.material.color.set(e?"#9A8E80":["#E0A860","#C9361F","#E0A860"][i])),Sn=(n,e,t=-.1,i=-.05,s=.12)=>{let r=Fs(e);n.position.set(r.x+t,r.y+i,r.z+s)},Yh={name:"MARCOS"},gi=(n,e=.28)=>{let t=CE(n);return i=>t(i*e)},Qa=[[0,1.5,4.6],[0,1.5,-.5],[0,1.5,4.1],[0,1.5,-.5]],Ye={amb:"parque",fov:30},Tn=[[0,1.6,3],[0,1.25,-.5],[0,1.55,2.5],[0,1.25,-.5]],Ka=[[-.45,1.5,2.2],[-.45,1.32,-.5],[-.45,1.48,1.8],[-.45,1.32,-.5]],If=[[.45,1.5,2.2],[.45,1.32,-.5],[.45,1.48,1.8],[.45,1.32,-.5]],Lf=n=>(e={})=>{let t=e.pose;return(e.mk||at)({x:n,z:-.5,y:ho,...e,pose:(i,s)=>{Cs(i),t&&t(i,s)}})},Rt=Lf(-.45),kt=(n={})=>Lf(.45)({mk:vt,...n}),ja=()=>[Wt(2,{x:-3.4,z:-2.6,talk:[[0,99]],eyes:[[0,"happy"]]}),Wt(4,{x:-2.6,z:-2.8,eyes:[[0,"look"]],pose:RE}),Wt(6,{x:3.4,z:-2.9,eyes:[[0,"happy"]],pose:(n,e)=>n.pose({head:Math.sin(e*2)*5})})],pt=n=>{mi(n),JE(n)},Df=(n,e)=>n.pose({armL:[8,6],armR:[55+Math.max(0,Math.sin(e*2.4))*45,50]}),Uf=(n,e,t=0)=>{let i=Ya();return i.scale.setScalar(.9),n.add(i),(s=!0)=>{i.visible=s,s&&qa(i,e[t],-.02)}},Ga=(n,e)=>n.pose({armL:[40,60],armR:[40,60],bob:Math.abs(Math.sin(e*12))*.04,head:Math.sin(e*12)*5}),Zh=(n,e,t,i,s)=>te(n,(r,o)=>({amb:"gris",fov:30,k:1,atores:[],extra:a=>{let l=Zt(a,[i],1.4,[0,2.4,-1]),c=Xe(a,["PLAN N\xBA "+e],2.2,[0,1.8,-1],{size:90}),h=xs(a,[t],2,[0,1.15,-1]),d=Yn(a,10);return{update:(u,p,g)=>{Q(l,u,0,99,g),Q(c,u,Y(o,"plan")-.1,99,g),Q(h,u,Y(o,s)-.1,99,g),d(u,[0,1.7,-.9,1.3])}}},c:[[0,1.7,3.6],[0,1.7,-1],[0,1.7,3],[0,1.7,-1]],range:3}));te(0,(n,e)=>({...Ye,atores:[Rt({eyes:[[0,"look"]],pose:Df}),...ja()],extra:(t,i,s)=>{pt(t);let r=Uf(t,s),o=Ne(t,e,[[["MARTES \xB7 RECREO"],.1,"y",[0,2.15,-.4],1.6],[["EL BANCO DE SIEMPRE"],"banco","w",[0,2.15,-.4],1.7]]);return{update:(a,l,c)=>{r(),o(a,c)}}},c:[[0,2.2,5.6],[0,1,-.5],[-.2,1.6,3.4],[-.3,1.05,-.5]],range:4}));te(1,(n,e)=>{let t=Y(e,"sienta");return{...Ye,atores:[Rt({eyes:[[0,"look"],[t+.3,"wide"]],pose:Df}),vt({x:.45,z:-.5,eyes:[[0,"happy"]],move:i=>i<t+.3?[jt(3.6,.45,Ve(0,t+.3,i)),0,-.15]:[.45,ho,-.5],pose:(i,s)=>s<t+.3?i.walk(s*2):Cs(i)}),...ja()],extra:(i,s,r)=>{pt(i);let o=Uf(i,r),a=Ne(i,e,[[["TU CRUSH SE SIENTA A TU LADO"],t,"p",[0,2.15,-.4],2.4],[["SIN AVISAR"],"avisar","r",[0,2.15,-.4],1.2,1]]);return{update:(l,c,h)=>{o(),a(l,h)}}},c:Tn,range:4}});te(2,(n,e)=>({...Ye,atores:[kt({eyes:[[0,"happy"]],pose:(t,i)=>t.pose({head:Math.sin(i*2)*4})}),Rt({eyes:[[0,"heart"]]})],extra:t=>{pt(t);let i=ss(t,.3);i.position.set(1.05,1.5,-.4);let s=Ne(t,e,[[["TU CRUSH"],0,"p",[.45,1.95,-.4],1],[["DESDE PRIMERO"],"primero","y",[.45,1.95,-.4],1.3,1]]);return{update:(r,o,a)=>{i.scale.setScalar(br(r,140)),yn(i,a),s(r,a)}}},c:If,range:2.5}));te(3,(n,e)=>{let t=Y(e,"respira"),i=Y(e,"necesito");return{...Ye,atores:[Rt({eyes:[[0,"look"]]}),kt({eyes:[[0,"look"],[t,"shut"],[i-.2,"look"]],talk:[[i,n]],pose:(s,r)=>s.pose({bob:r>t&&r<i?Math.sin((r-t)/(i-t)*Math.PI)*.05:0})})],extra:s=>{pt(s);let r=Zt(s,["RESPIRA HONDO"],1.3,[.45,1.95,-.4]),o=lt(s,["NECESITO PEDIRTE","UN FAVOR"],1.4,[.6,2,-.3],56);return{update:(a,l,c)=>{Q(r,a,t,i-.2,c),Q(o,a,i,99,c)}}},c:Tn,range:4}});te(4,(n,e)=>{let t=Y(e,"solo");return{...Ye,atores:[Rt({eyes:[[0,"wide"],[Y(e,"ti"),"heart"]]}),kt({eyes:[[0,"look"]],talk:[[0,n]],pose:i=>i.pose({armL:[50,70],armR:[50,70]})})],extra:i=>{pt(i);let s=lt(i,["UN FAVOR ENORME"],1.4,[.6,2,-.3],60),r=lt(i,["SOLO TE LO PUEDO","PEDIR A TI"],1.4,[.6,2,-.3],56);return{update:(o,a,l)=>{Q(s,o,0,t-.1,l),Q(r,o,t-.1,99,l)}}},c:[[.1,1.55,2.7],[.1,1.3,-.5],[.1,1.5,2.2],[.1,1.3,-.5]],range:3}});te(5,(n,e)=>{let t=Y(e,"dejas"),i=Y(e,"dime");return{...Ye,atores:[Rt({eyes:[[0,"wide"]],talk:[[i,n]],pose:(s,r)=>s.pose({armL:[8,6],armR:[r<t?55:jt(55,15,Ve(t,t+.5,r)),50]})})],extra:(s,r,o)=>{pt(s);let a=Ya();a.scale.setScalar(.9),s.add(a);let l=ss(s,.22),c=new I,h=Xe(s,["\xA1A LA GARGANTA!"],1.3,[-.45,1.95,-.4],Dn),d=lt(s,["DIME."],.8,[-.05,1.8,-.3],70);return{update:(u,p,g)=>{u<t+.5?qa(a,o[0],-.02):a.position.set(-.1,.6,-.45),o[0].torso.getWorldPosition(c);let E=Ve(.3,1.6,u);l.position.set(c.x,c.y-.1+E*.45,c.z+.3),l.scale.setScalar(br(u,170)),l.visible=u<i,yn(l,g),Q(h,u,.8,t,g),Q(d,u,i,99,g)}}},c:Ka,range:2.5}});ri(6,["el"],[(n,e)=>({...Ye,atores:[Rt({eyes:[[0,"look"],[.5,"flat"]]}),kt({eyes:[[0,"happy"]],talk:[[0,n]],pose:t=>t.pose({armL:[50,70],armR:[50,70]})})],extra:(t,i,s)=>{pt(t);let r=lt(t,["ME GUSTA MARCOS"],1.4,[.6,2,-.3],60),o=gi(s[1]);return{update:(a,l,c)=>{Q(r,a,0,99,c),o(.6)}}},c:Tn,range:4}),n=>({...Ye,atores:[Oi({x:0,z:-1.2,eyes:[[0,"smug"]],pose:(e,t)=>e.pose({armL:[12,8],armR:[40+Math.sin(t*2.2*Math.PI)*15,20]})}),Wt(0,{x:-2.2,z:-.6,eyes:[[0,"heart"]]}),Wt(3,{x:2.2,z:-.6,eyes:[[0,"heart"]]})],extra:(e,t,i)=>{mi(e),Pf(e,1.6,-2.4);let s=xr(e),r=Xe(e,["MARCOS \xB7 EL DE BALONCESTO"],2.2,[0,2.4,-1],Dn);return{update:(o,a,l)=>{let c=Fs(i[0]);s.position.set(c.x,Ja(o),c.z+.15),Q(r,o,0,99,l)}}},c:[[0,1.6,4.2],[0,1.3,-1.2],[0,1.55,3.6],[0,1.3,-1.2]],range:4})]);ri(7,["muerde"],[(n,e)=>({amb:"lab",fov:30,atores:[at({x:-.5,z:-.4,eyes:[[0,"flat"]],pose:Xa}),Oi({x:.5,z:-.4,eyes:[[0,"smug"]],pose:(t,i)=>t.pose({armL:[12,8],armR:[70,30]})})],extra:t=>{Rf(t,0,.5,.9,2.4,.8,"#E8E2D2");let i=Xe(t,["TU COMPA\xD1ERO DE LABORATORIO"],2.4,[0,2.3,-.3],Tr);return{update:(s,r,o)=>Q(i,s,Y(e,"companero"),99,o)}},c:[[0,1.7,3.6],[0,1.4,-.4],[0,1.65,3.1],[0,1.4,-.4]],range:3}),n=>({...Ye,atores:[kt({eyes:[[0,"down"]],pose:(e,t)=>e.pose({head:-6})})],extra:(e,t,i)=>{pt(e);let s=gi(i[0]),r=Zt(e,["SE MUERDE EL LABIO"],1.5,[.45,1.95,-.4]);return{update:(o,a,l)=>{s(.4),Q(r,o,.1,99,l)}}},c:If,range:2.5})]);te(8,(n,e)=>({...Ye,atores:[kt({eyes:[[0,"wide"]],talk:[[0,n]],pose:t=>t.pose({armL:[70,80],armR:[70,80]})})],extra:t=>{pt(t);let i=lt(t,["\xBFME AYUDAS A","CONQUISTARLO?"],1.2,[.45,1.85,-.3],58),s=Yn(t,8,"#FFB0C0");return{update:(r,o,a)=>{Q(i,r,0,99,a),s(r,[.45,1.3,-.3,.5])}}},c:[[.45,1.5,1.9],[.45,1.35,-.5],[.45,1.48,1.6],[.45,1.35,-.5]],range:2.5}));te(9,(n,e)=>{let t=Y(e,"carton");return{...Ye,atores:[Rt({eyes:[[0,"look"],[t,"flat"]],pose:i=>i.pose({armL:[8,6],armR:[75,50]})})],extra:(i,s,r)=>{pt(i);let o=Ya();o.scale.setScalar(1.2),i.add(o);let a=Xe(i,["SABE A CART\xD3N"],1.4,[-.45,1.95,-.4],{bg:"#6A6258",fg:"#E8E2D2"});return{update:(l,c,h)=>{qa(o,r[0],-.02),ty(o,l>t),Q(a,l,t,99,h)}}},c:Ka,range:2.5,look:{exposure:.95}}});te(10,(n,e)=>{let t=Y(e,"otra");return{amb:"gris",fov:30,k:1,atores:[at({x:0,z:-.4,eyes:[[0,"look"],[t,"sad"]]})],extra:i=>{let s=uo(i,.7);s.g.position.set(0,2.2,-.4);let r=Ne(i,e,[[["TU CRUSH"],0,"p",[-1.2,1.9,-.3],1],[["PIDI\xC9NDOTE AYUDA"],"pidiendote","w",[1.2,1.9,-.3],1.5],[["PARA ENAMORAR A OTRA PERSONA"],"enamorar","r",[0,.85,.2],2.5,1]]);return{update:(o,a,l)=>{s.set(Ve(t,t+.6,o)),s.g.visible=o>.2,r(o,l)}}},c:[[0,1.6,3.6],[0,1.5,-.4],[0,1.6,3.2],[0,1.5,-.4]],range:3}});te(11,(n,e)=>{let t=Y(e,"suscribete"),i=Y(e,"vamos");return{...wr,fov:32,atores:[at({x:-1,z:-.3,eyes:[[0,"look"],[t,"happy"]],pose:(s,r)=>r>t?Vh(s,r):s.pose()})],extra:s=>{let r=ff(2.4);r.position.set(.7,1.8,-1),s.add(r);let o=Yn(s,14,"#FFE27A"),a=Zt(s,["\xBFY SI\u2026?"],1,[-1,2.3,-.3]),l=Xe(s,["\xA1VAMOS ALL\xC1!"],1.4,[-1,2.3,-.3],VE);return{update:(c,h,d)=>{Q(a,c,.2,i-.2,d),Q(l,c,i-.2,99,d);let u=Ve(t-.3,t,c)*(1-Ve(i-.4,i,c));r.scale.setScalar(Math.max(.01,u)),o(c,[.7,1.8,-.9,1.1],u)}}},c:[[0,1.7,3.8],[0,1.5,-.6],[0,1.65,3.2],[0,1.5,-.6]],range:3}});te(12,(n,e)=>({...Ye,atores:[Rt({eyes:[[0,"lookl"]],pose:(t,i)=>t.pose({armL:[8,6],armR:[110,80],head:8})}),kt({eyes:[[0,"wide"]]})],extra:t=>{pt(t);let i=Ne(t,e,[[["LO L\xD3GICO: DECIR QUE NO"],0,"w",[-.3,2.1,-.3],2.1],[["INVENTARTE UNA EXCUSA"],"inventarte","y",[-.3,2.1,-.3],2,1]]);return{update:(s,r,o)=>i(s,o)}},c:Tn,range:4}));te(13,(n,e)=>{let t=Y(e,"australia");return{amb:"gris",fov:30,k:1,atores:[at({x:-1.3,z:-.4,eyes:[[0,"smug"],[t,"wide"]],talk:[[0,n]],pose:zn})],extra:i=>{let s=Ne(i,e,[[["TENGO EX\xC1MENES"],"examenes","w",[.3,2.3,-.4],1.4,1],[["MARCOS Y YO NO NOS HABLAMOS"],"marcos","y",[.3,1.75,-.4],2.2,1],[["ME MUDO A AUSTRALIA"],"australia","r",[.3,1.2,-.4],1.8,1]]),r=Ps(i,"?!",.5,[-.5,2.3,-.4],"#F2C14E");return{update:(o,a,l)=>{s(o,l),Q(r,o,t+.2,99,l)}}},c:[[-.2,1.7,3.8],[-.2,1.6,-.4],[-.2,1.65,3.3],[-.2,1.6,-.4]],range:3}});te(14,(n,e)=>({...Ye,atores:[kt({eyes:[[0,"wide"]],pose:t=>t.pose({armL:[70,80],armR:[70,80],head:-6})})],extra:(t,i,s)=>{pt(t);let r=Yn(t,12,"#FFF2C0"),o=new I,a=xs(t,["CON ESOS OJOS"],1.3,[.45,1.95,-.4]);return{update:(l,c,h)=>{s[0].head.getWorldPosition(o),r(l,[o.x,o.y,o.z+.25,.35]),Q(a,l,Y(e,"ojos")-.3,99,h)}}},c:[[.45,1.4,1.8],[.45,1.25,-.5],[.45,1.38,1.25],[.45,1.27,-.5]],range:2}));te(15,(n,e)=>{let t=Y(e,"vale");return{...Ye,atores:[Rt({eyes:[[0,"look"],[t,"flat"]],talk:[[t,n]]}),kt({eyes:[[0,"wide"],[t+.2,"happy"]],pose:(i,s)=>s>t+.2?i.pose({armL:[150,20],armR:[150,20]}):i.pose()})],extra:i=>{pt(i);let s=Xe(i,["LA PEOR PALABRA POSIBLE"],2,[0,2.15,-.4],Dn),r=lt(i,["VALE."],.8,[-.5,1.85,-.3],70);return{update:(o,a,l)=>{Q(s,o,.2,t-.1,l),Q(r,o,t,99,l)}}},c:Tn,range:4}});te(16,(n,e)=>({...Rr,fov:30,atores:[lo(at,{x:-.7,z:-1,y:1.08,eyes:[[0,"wide"]]})],extra:t=>{let i=Ne(t,e,[[["NO DUERMES"],.1,"y",[-.4,1.95,-.8],1.2],[["MIRAS EL TECHO"],"techo","w",[-.4,1.95,-.8],1.4,1]]);return{update:(s,r,o)=>i(s,o)}},c:[[-.6,2.3,3],[-.8,1,-1],[-.6,2.2,2.6],[-.8,1,-1]],range:3,look:qn}));te(17,(n,e)=>({...Rr,fov:30,atores:[lo(at,{x:-.7,z:-1,y:1.08,eyes:[[0,"sad"]]})],extra:t=>{let i=uo(t,.45);i.g.position.set(-.5,1.75,-.9);let s=Ne(t,e,[[["\xBFPOR QU\xC9 DUELE TANTO?"],.1,"y",[-.5,2.2,-.8],1.8],[["SI NO TE HA HECHO DA\xD1O"],"realidad","w",[-.5,2.2,-.8],2,1]]);return{update:(r,o,a)=>{i.set(.5+Math.sin(r*2)*.2),s(r,a)}}},c:[[-.6,2,2.4],[-.7,1.3,-1],[-.6,1.95,2],[-.7,1.3,-1]],range:3,look:qn}));te(18,(n,e)=>({amb:"gris",fov:30,k:1,atores:[at({x:0,z:-.4,eyes:[[0,"flat"]],pose:t=>t.pose({armL:[30,10],armR:[30,10]})})],extra:t=>{let i=Ne(t,e,[[["NADIE TE HA EMPUJADO"],0,"w",[-1.1,2.1,-.3],1.9,1],[["NADIE TE HA PEGADO"],"pegado","w",[1.1,1.5,-.3],1.8,1]]);return{update:(s,r,o)=>i(s,o)}},c:[[0,1.6,3.6],[0,1.5,-.4],[0,1.6,3.2],[0,1.5,-.4]],range:3}));te(19,(n,e)=>({amb:"gris",fov:30,k:1,atores:[at({x:0,z:-.4,eyes:[[0,"sad"]],pose:t=>t.pose({armL:[8,6],armR:[60,95],head:6})})],extra:(t,i,s)=>{let r=uo(t,.3),o=new I,a=Xe(t,["TE DUELE EL PECHO"],1.6,[0,2.2,-.3],Dn);return{update:(l,c,h)=>{s[0].torso.getWorldPosition(o),r.g.position.set(o.x-.12,o.y-.35,o.z+.3),r.set(.3+Math.abs(Math.sin(l*4))*.5),Q(a,l,Y(e,"pecho")-.2,99,h)}}},c:[[0,1.5,2.6],[0,1.35,-.4],[0,1.5,2.2],[0,1.35,-.4]],range:3}));ri(20,["2003"],[n=>({amb:"gris",fov:30,k:1,atores:[],extra:e=>{let t=Xe(e,["NO ES UNA","FORMA DE HABLAR"],2.4,[0,1.6,-1],{h:260});return{update:(i,s,r)=>Q(t,i,0,99,r)}},c:[[0,1.6,3.4],[0,1.6,-1],[0,1.6,2.9],[0,1.6,-1]],range:3}),(n,e)=>({amb:"lab",fov:30,atores:[Mr(1,{x:-.6,z:-.6,talk:[[1.5,n]],eyes:[[0,"smug"]],pose:zn}),Mr(3,{x:.7,z:-.9,eyes:[[0,"look"]],pose:Xa}),Gh({x:1.6,z:-1.1,eyes:[[0,"look"]]})],extra:t=>{let i=Ne(t,e,[[["NAOMI EISENBERGER"],"naomi","b",[-.6,2.15,-.5],1.7,1],[["UNIVERSIDAD DE CALIFORNIA \xB7 LOS \xC1NGELES"],"universidad","w",[.3,.55,.2],3,1]]);return{update:(s,r,o)=>i(s,o)}},c:[[0,1.7,4],[.2,1.4,-.7],[0,1.65,3.4],[.2,1.4,-.7]],range:4})]);te(21,(n,e)=>({amb:"lab",fov:30,atores:[lo(t=>Wt(1,t),{x:1,z:-.4,y:1,eyes:[[0,"wide"]],move:t=>[jt(1.2,-.3,Ve(0,n,t)),1,-.4]})],extra:t=>{let i=GE(t,-1.2),s=Xe(t,["UN ESC\xC1NER CEREBRAL"],1.8,[0,2.4,-.3],Tr);return{update:(r,o,a)=>{i.material.opacity=.4+.3*Math.sin(r*6),Q(s,r,Y(e,"escaner")-.2,99,a)}}},c:[[.2,1.8,4],[0,1.1,-.4],[.2,1.75,3.5],[0,1.1,-.4]],range:4}));te(22,(n,e)=>({amb:"gris",fov:30,k:1,atores:[],extra:t=>{let i=$a(t,[0,1.6,-1],2.8),s=Ne(t,e,[[["UN VIDEOJUEGO MUY SIMPLE"],"videojuego","y",[0,2.55,-.9],2.2],[["3 JUGADORES \xB7 1 PELOTA"],"tres","w",[0,2.55,-.9],2,1]]);return{update:(r,o,a)=>{i(r,"todos"),s(r,a)}}},c:[[0,1.8,3.6],[0,1.8,-1],[0,1.75,3.2],[0,1.75,-1]],range:3}));te(23,(n,e)=>({amb:"gris",fov:30,k:1,atores:[],extra:t=>{let i=$a(t,[0,1.6,-1],2.8),s=Zt(t,["TODOS A TODOS"],1.6,[0,2.55,-.9]);return{update:(r,o,a)=>{i(r+3,"todos"),Q(s,r,.2,99,a)}}},c:[[0,1.75,3.2],[0,1.75,-1],[0,1.75,3],[0,1.75,-1]],range:3}));te(24,(n,e)=>{let t=Y(e,"dejaban");return{amb:"gris",fov:30,k:1,atores:[],extra:i=>{let s=$a(i,[0,1.4,-1],2.6),r=Ne(i,e,[[["DE REPENTE\u2026"],.1,"w",[0,2.45,-.9],1.3],[["YA NO SE LA PASAN"],t,"r",[0,2.45,-.9],1.8,1]]);return{update:(o,a,l)=>{s(o,o>t?"fuera":"todos",o>t?"EL VOLUNTARIO SE QUEDA FUERA":"EL JUEGO DE LA PELOTA"),r(o,l)}}},c:[[0,1.75,3.2],[0,1.6,-1],[0,1.65,2.8],[0,1.55,-1]],range:3}});te(25,(n,e)=>{let t=Y(e,"fuera");return{amb:"gris",fov:30,k:1,atores:[Wt(1,{x:-1.5,z:.3,eyes:[[0,"look"],[Y(e,"voluntario"),"sad"]],pose:i=>i.pose({armL:[8,6],armR:[8,6],head:8})})],extra:i=>{let s=$a(i,[.75,1.65,-1.4],2.1),r=Xe(i,["FUERA"],1,[-1.5,2.1,.4],Dn),o=Zt(i,["SOLO ENTRE ELLOS"],1.5,[.75,2.45,-1.3]);return{update:(a,l,c)=>{s(a,"fuera","EL VOLUNTARIO SE QUEDA FUERA"),Q(o,a,.1,t-.3,c),Q(r,a,t-.1,99,c)}}},c:[[-.2,1.7,4],[-.2,1.6,-.6],[-.3,1.65,3.6],[-.3,1.6,-.6]],range:4}});te(26,(n,e)=>{let t=Y(e,"encendia"),i=Y(e,"corteza");return{amb:"gris",fov:30,k:1,atores:[],extra:s=>{let r=qh(s,[0,1.55,-1],2),o=Je("#FF5A6A",1,0);o.position.set(.1,1.75,-.9),s.add(o);let a=Ne(s,e,[[["\xBFQU\xC9 VIERON?"],0,"w",[0,2.55,-.9],1.4],[["SE ENCEND\xCDA UNA ZONA"],t,"y",[0,2.55,-.9],1.9],[["CORTEZA CINGULADA ANTERIOR"],i,"p",[0,2.55,-.9],2.5,1]]);return{update:(l,c,h)=>{r(l>t),o.material.opacity=l>t?.5+.3*Math.sin(l*6):0,a(l,h)}}},c:[[0,1.8,3.6],[0,1.8,-1],[0,1.75,3.1],[0,1.75,-1]],range:3}});te(27,(n,e)=>({amb:"gris",fov:30,k:1,atores:[Wt(3,{x:1.2,z:-.6,eyes:[[0,"shut"]],move:t=>[1.2,Math.abs(Math.sin(t*7))*.12,-.6],pose:(t,i)=>t.pose({legL:[-50,80],armL:[60,60],armR:[120,40]})})],extra:t=>{let i=qh(t,[-1,1.55,-1],1.5),s=Je("#FF5A6A",.8,.6);s.position.set(-.95,1.7,-.9),t.add(s);let r=Xe(t,["= DOLOR F\xCDSICO"],1.5,[0,2.6,-.9],Dn),o=lt(t,["\xA1AY!"],.6,[1.6,2.1,-.5],70);return{update:(a,l,c)=>{i(!0),s.material.opacity=.5+.3*Math.sin(a*6),Q(r,a,Y(e,"dolor")-.2,99,c),Q(o,a,.3,99,c)}}},c:[[0,1.8,3.8],[0,1.6,-.9],[0,1.75,3.4],[0,1.6,-.9]],range:3}));te(28,(n,e)=>{let t=Y(e,"mas",1);return{amb:"gris",fov:30,k:1,atores:[],extra:i=>{let s=OE(i,[["POCO EXCLUIDO",.3,"#8AC8F2"],["MUY EXCLUIDO",.95,"#E8445A"]],2.6,[0,1.6,-1],{title:"ACTIVIDAD EN ESA ZONA"}),r=Xe(i,["M\xC1S EXCLUIDO = M\xC1S ACTIVIDAD"],2.4,[0,2.6,-.9]);return{update:(o,a,l)=>{s.scale.setScalar(.6+.4*Ve(0,.5,o)),Q(r,o,t,99,l)}}},c:[[0,1.8,3.4],[0,1.8,-1],[0,1.75,3],[0,1.75,-1]],range:3}});te(29,(n,e)=>{let t=Y(e,"duele");return{amb:"gris",fov:30,k:1,atores:[at({x:0,z:-.4,eyes:[[0,"sad"],[t,"wide"]],pose:i=>i.pose({armL:[8,6],armR:[8,6]})})],extra:i=>{let s=qh(i,[0,2.55,-.6],.7),r=Ne(i,e,[[["QUEDARTE FUERA"],"quedarte","w",[-.95,1.95,-.3],1.3,1],[["NO ES SOLO TRISTE"],"triste","y",[.95,1.95,-.3],1.4,1],[["DUELE"],t,"r",[-.85,1.25,-.3],.9,1],[["LITERALMENTE"],"literalmente","p",[.9,1.25,-.3],1.3,1]]);return{update:(o,a,l)=>{s(o>t),r(o,l)}}},c:[[0,1.8,3.8],[0,1.7,-.4],[0,1.75,3.4],[0,1.7,-.4]],range:3}});te(30,(n,e)=>({...Rr,fov:30,atores:[lo(at,{x:-.7,z:-1,y:1.08,eyes:[[0,"sad"],[1.5,"shut"]]})],extra:t=>{let i=Xe(t,["NO EST\xC1S EXAGERANDO"],1.9,[-.5,1.95,-.8],qE);return{update:(s,r,o)=>Q(i,s,Y(e,"exagerando")-.4,99,o)}},c:[[-.6,2.4,3.2],[-.8,1,-1],[-.6,2.3,2.8],[-.8,1,-1]],range:3,look:qn}));Zh(31,1,"EL MENSAJE","MI\xC9RCOLES","mensaje");te(32,(n,e)=>({...Ye,atores:[kt({eyes:[[0,"down"],[Y(e,"sabe"),"flat"]],pose:t=>t.pose({armL:[60,70],armR:[60,70],head:-10})}),Rt({eyes:[[0,"look"]]})],extra:(t,i,s)=>{pt(t);let r=Ln(["MARCOS",""],{hora:"11:15"});r.scale.setScalar(.3),t.add(r);let o=lt(t,["\xBFQU\xC9 LE DIGO?"],1.1,[.6,1.95,-.3],60);return{update:(a,l,c)=>{Sn(r,s[0],0,.05,.1),Q(o,a,Y(e,"sabe")-.3,99,c)}}},c:Tn,range:4}));te(33,(n,e)=>{let t=Y(e,"hola");return{amb:"gris",fov:30,k:1,atores:[],extra:i=>{let s=co(i,[0,1.5,-.5],1.15,[["r","Hola. \xBFQu\xE9 tal? Jaja.",t]],{...Yh,hora:"11:16",typing:!1}),r=Zt(i,["EL BORRADOR"],1.2,[1.3,2.2,-.4]);return{update:(o,a,l)=>{s.userData.upd(o),Q(r,o,0,99,l)}}},c:Qa,range:3}});te(34,(n,e)=>{let t=Y(e,"esto"),i=Y(e,"eso");return{...Ye,atores:[Rt({eyes:[[0,"look"],[t,"flat"]],talk:[[t,i]]}),kt({eyes:[[0,"look"],[i,"angry"]],talk:[[i,n]],pose:(s,r)=>s.pose({armL:[12,8],armR:[r>i?120:12,30]})})],extra:s=>{pt(s);let r=lt(s,["ESTO ES HORRIBLE."],1.2,[-.6,1.95,-.3],60),o=lt(s,["\xA1POR ESO TE LO","PIDO A TI!"],1.3,[.6,2,-.3],56);return{update:(a,l,c)=>{Q(r,a,t,i-.1,c),Q(o,a,i,99,c)}}},c:Tn,range:4}});te(35,(n,e)=>{let t=Y(e,"escribes");return{...Ye,atores:[Rt({eyes:[[0,"look"],[t,"down"]],pose:(i,s)=>i.pose({armL:[8,6],armR:[60+(s>t?Math.sin(s*30)*6:0),70],head:s>t?-10:0})})],extra:(i,s,r)=>{pt(i);let o=Ln(["",""],{hora:"11:17"});o.scale.setScalar(.3),i.add(o);let a=Ne(i,e,[[["COGES SU M\xD3VIL"],0,"w",[-.45,1.95,-.4],1.4],[["Y ESCRIBES"],t,"y",[-.45,1.95,-.4],1.1,1]]);return{update:(l,c,h)=>{Sn(o,r[0],.05,.05,.1),a(l,h)}}},c:Ka,range:2.5}});te(36,(n,e)=>({...Ye,atores:[Rt({eyes:[[0,"down"]],pose:(t,i)=>t.pose({armL:[8,6],armR:[60+Math.sin(i*30)*6,70],head:-10})}),kt({eyes:[[0,"lookl"]],pose:t=>t.pose({head:10})})],extra:(t,i,s)=>{pt(t);let r=Ln(["",""],{hora:"11:17"});r.scale.setScalar(.3),t.add(r);let o=Ne(t,e,[[["LO QUE T\xDA LE DIR\xCDAS A ELLA"],.1,"p",[0,2.15,-.4],2.3],[["SI TE ATREVIERAS"],"atrevieras","w",[0,2.15,-.4],1.5,1]]),a=ss(t,.2);return{update:(l,c,h)=>{Sn(r,s[0],.05,.05,.1),a.position.set(-.3,1.55+l*.3%.5,-.2),yn(a,h),o(l,h)}}},c:Tn,range:4}));te(37,(n,e)=>({...Ff(),atores:[vt({x:-1.6,z:.2,eyes:[[0,"happy"]],pose:Ga}),Wt(0,{x:1.4,z:-.6,eyes:[[0,"look"],[1,"happy"]],pose:t=>t.pose({head:-12})}),Wt(5,{x:2.3,z:-.2,eyes:[[0,"look"],[1.3,"happy"]],pose:t=>t.pose({head:-12})})],extra:t=>{let i=wf(t,6),s=Cf(t,['"Tiene una risa que se oye',"desde el otro lado",'del pasillo"'],1.6,[.4,2.3,-.2],44),r=new I;return{update:(o,a,l)=>{r.set(-1.6,1.7,.2),i(o,r,l),s.visible=o>.3}}},c:[[0,1.8,4.4],[0,1.5,-.2],[0,1.75,3.9],[0,1.5,-.2]],range:4,look:rs}));te(38,(n,e)=>{let t=Y(e,"caen");return{...Ye,atores:[Wt(3,{x:.4,z:-.3,eyes:[[0,"look"],[t,"wide"]],pose:i=>i.pose({armL:[30,20],armR:[30,20]})}),vt({x:-.6,z:-.2,eyes:[[0,"look"]],move:i=>[jt(-1.6,-.4,Ve(t,t+.8,i)),0,-.2],pose:(i,s)=>s>t&&s<t+.8?i.walk(s*2):s>t+.8?i.pose({lean:-18,armL:[60,10],armR:[60,10]}):i.pose()})],extra:i=>{mi(i);let s=[0,1,2].map(o=>{let a=df("#"+["C9361F","2F5A9A","F2C14E"][o],["MATES","INGL\xC9S","HISTORIA"][o]);return a.scale.setScalar(.45),i.add(a),a}),r=Cf(i,['"Siempre es la primera','en ayudar"'],1.4,[0,2.3,-.4],48);return{update:(o,a,l)=>{s.forEach((c,h)=>{let d=Ve(t,t+.4,o);c.position.set(.3+h*.15,jt(1,.05+h*.05,d),.1-h*.1),c.rotation.z=d*(h-1)*.6,c.rotation.x=-d*1.4}),r.visible=o>.2}}},c:[[0,1.6,3.6],[0,1,-.2],[0,1.55,3],[0,1,-.2]],range:4,look:rs}});te(39,(n,e)=>({amb:"gris",fov:30,k:1,atores:[vt({x:-.6,z:-.4,eyes:[[0,"heart"]],talk:[[0,n]],pose:(t,i)=>t.pose({armL:[100+Math.sin(i*6)*25,40],armR:[100+Math.cos(i*6)*25,40],bob:Math.abs(Math.sin(i*6))*.03})})],extra:t=>{let i=Yn(t,14,"#FFE27A"),s=Zt(t,['"SE LE OLVIDA','TODO LO DEM\xC1S"'],1.5,[.9,1.8,-.4],{h:260});return{update:(r,o,a)=>{i(r,[-.6,2,-.3,.7]),Q(s,r,.2,99,a)}}},c:[[0,1.6,3.4],[0,1.5,-.4],[0,1.6,2.9],[0,1.5,-.4]],range:3,look:rs}));te(40,(n,e)=>{let t=Y(e,"bonito")-.9;return{...Ye,atores:[kt({eyes:[[0,"down"],[t,"happy"]],talk:[[t,n]],pose:i=>i.pose({armL:[60,70],armR:[60,70],head:-8})}),Rt({eyes:[[0,"look"]]})],extra:(i,s,r)=>{pt(i);let o=Ln(["",""],{hora:"11:19"});o.scale.setScalar(.3),i.add(o);let a=gi(r[0]),l=Zt(i,["EN SILENCIO"],1.2,[.45,1.95,-.4]),c=lt(i,["ES\u2026 MUY BONITO."],1.2,[.6,1.95,-.3],60);return{update:(h,d,u)=>{Sn(o,r[0],0,.05,.1),a(Ve(t,t+1,h)*.6),Q(l,h,.1,t-.1,u),Q(c,h,t,99,u)}}},c:Tn,range:4}});te(41,(n,e)=>{let t=Y(e,"como");return{...Ye,atores:[kt({eyes:[[0,"smug"]],talk:[[t,n]],pose:i=>i.pose({head:8})}),Rt({eyes:[[0,"wide"]]})],extra:i=>{pt(i);let s=Zt(i,["TE MIRA RARO"],1.2,[.45,1.95,-.4]),r=lt(i,["\xBFC\xD3MO SABES T\xDA","TODO ESO DE M\xCD?"],1.3,[.6,2,-.3],56);return{update:(o,a,l)=>{Q(s,o,.05,t-.1,l),Q(r,o,t,99,l)}}},c:Tn,range:4}});te(42,(n,e)=>{let t=Y(e,"eh"),i=Y(e,"envia");return{...Ye,atores:[Rt({eyes:[[0,"wide"],[t,"lookl"]],talk:[[t,i-.2]],pose:s=>s.pose({armL:[8,6],armR:[110,80]})}),kt({eyes:[[0,"smug"],[i,"down"]],pose:s=>s.pose({armL:[60,70],armR:[60,70]})})],extra:(s,r,o)=>{pt(s);let a=gi(o[0]),l=lt(s,["EH\u2026 ES LO QUE","DICE LA GENTE"],1.3,[-.6,2,-.3],56),c=Xe(s,["ENVIADO \u2713"],1.1,[.45,1.95,-.4],XE),h=Za(s,4);return{update:(d,u,p)=>{a(Ve(0,.8,d)*.85),Q(l,d,t,i-.1,p),Q(c,d,i,99,p),h(d,[-.3,1.55,-.4,.1],1)}}},c:Tn,range:4}});te(43,(n,e)=>{let t=Y(e,"jaja");return{amb:"gris",fov:30,k:1,atores:[],extra:i=>{let s=co(i,[0,1.5,-.5],1.15,[["r","Tienes una risa que se oye desde el otro lado del pasillo. Siempre eres la primera en ayudar\u2026",0],["l","Jaja gracias. Igualmente.",t]],{...Yh,hora:"JUEVES"}),r=Zt(i,["JUEVES"],1,[1.2,2.2,-.4]);return{update:(o,a,l)=>{s.userData.upd(o,{typing:o>t-1.2&&o<t}),Q(r,o,0,99,l)}}},c:Qa,range:3}});te(44,(n,e)=>{let t=Y(e,"entiendes"),i=Y(e,"igualmente");return{...Ye,atores:[vt({x:.7,z:-.2,eyes:[[0,"happy"]],move:s=>[.7,Math.abs(Math.sin(s*6))*.15,-.2],pose:(s,r)=>s.cheer(r)}),at({x:-.7,z:-.2,eyes:[[0,"look"],[t,"flat"]],pose:s=>s.pose({armL:[40,60],armR:[40,60]})})],extra:s=>{mi(s);let r=Ps(s,"?",.5,[-.7,2.25,-.2],"#F2C14E"),o=Ne(s,e,[[["ELLA EST\xC1 FELIZ"],0,"p",[.7,2.3,-.2],1.4],[["T\xDA NO ENTIENDES NADA"],t-.2,"w",[0,2.35,-.2],1.9],[["\xBFIGUALMENTE QU\xC9?"],i,"r",[0,2.35,-.2],1.7,1]]);return{update:(a,l,c)=>{Q(r,a,t,99,c),o(a,c)}}},c:[[0,1.7,3.8],[0,1.4,-.2],[0,1.65,3.2],[0,1.4,-.2]],range:4}});var Ei={amb:"cuartoElla",fov:30},kh={amb:"cuartoElla",ambo:{night:!0},fov:30},el=[[-1,1.7,3.6],[-1,1.35,-.3],[-1,1.65,3.1],[-1,1.35,-.3]],fo=n=>{Rf(n,-1,.5,.6,2.2,.6,"#C8A27A"),vf(n,-1.5,-.25),vf(n,-.5,-.25)},po=(n={})=>{let e=n.pose;return at({x:-1.5,z:-.1,y:ho,...n,pose:(t,i)=>{Cs(t),e&&e(t,i)}})},mo=(n={})=>{let e=n.pose;return vt({x:-.5,z:-.1,y:ho,...n,pose:(t,i)=>{Cs(t),e&&e(t,i)}})},Jh=[[-1,1.5,2.9],[-1,1.22,-.1],[-1,1.48,2.4],[-1,1.22,-.1]],tl=(n,e)=>n.pose({armL:[125,115],armR:[125,115],head:Math.sin(e*1.5)*4}),Is={amb:"noria",fov:32},Cr=n=>{let e=n.userData.wheel;return t=>{e&&(e.rotation.z=t*.08)}},nl=[[0,1.8,4.4],[0,1.5,-.3],[0,1.75,3.9],[0,1.5,-.3]],Va=n=>n.pose({armL:[8,6],armR:[150,150]}),ny=(n,e,t=0)=>{let i=Ln(["",""],{hora:"22:00",bg:"#2A1830"});i.scale.setScalar(.3),n.add(i);let s=Xh(n,e[t]);return()=>{Sn(i,e[t],0,.1,.15),s()}},iy=(n={})=>lo(at,{x:-.7,z:-1,y:1.08,...n,p2:(e,t)=>e.pose({armL:[10,6],armR:[100,60]})}),sy=[[-.6,2.2,2.8],[-.8,1.1,-1],[-.6,2.1,2.4],[-.8,1.1,-1]];Zh(45,2,"EL ENSAYO","VIERNES","ensayo");te(46,(n,e)=>{let t=Y(e,"nerviosa");return{...Ei,atores:[vt({x:-1,z:-.2,eyes:[[0,"look"],[t,"wide"]],move:i=>[-1+Math.sin(i*1.6)*.8,0,-.2],pose:(i,s)=>s>t?i.pose({armL:[130,110],armR:[130,110],bob:Math.abs(Math.sin(s*20))*.02}):i.walk(s)})],extra:(i,s,r)=>{let o=Za(i,5),a=new I,l=Ne(i,e,[[["HABLAR CON MARCOS EN PERSONA"],.1,"w",[-1,2.35,-.2],2.6],[["SE PONE NERVIOSA"],t-.1,"r",[-1,2.35,-.2],1.7,1]]);return{update:(c,h,d)=>{r[0].head.getWorldPosition(a),o(c,[a.x,a.y+.2,a.z+.1,.25],c>t?1:0),l(c,d)}}},c:el,range:4}});te(47,(n,e)=>{let t=Y(e,"practicar");return{...Ei,atores:[at({x:-1.6,z:-.2,eyes:[[0,"look"],[1,"wide"]]}),vt({x:-.4,z:-.2,eyes:[[0,"happy"]],talk:[[0,n]],pose:i=>i.pose({armL:[12,8],armR:[95,0]})})],extra:i=>{let s=lt(i,["\xBFHACES DE MARCOS?"],1.3,[-.3,2.15,-.1],60),r=Zt(i,["PARA PRACTICAR"],1.3,[-1.6,2.2,-.1]);return{update:(o,a,l)=>{Q(s,o,.1,99,l),Q(r,o,t-.2,99,l)}}},c:el,range:4}});te(48,(n,e)=>{let t=Y(e,"botas"),i=Y(e,"hola"),s=Y(e,"gusta");return{...Ei,atores:[at({x:-1.4,z:-.2,eyes:[[0,"look"],[i,"smug"]],talk:[[i,n]],pose:(r,o)=>o>t?r.pose({armL:[12,8],armR:[40+Math.sin(o*2.2*Math.PI)*15,20],legL:[6,0],legR:[-6,0]}):r.pose()}),vt({x:-.3,z:-.2,y:-.03,eyes:[[0,"look"],[i+.5,"happy"]],pose:r=>Cs(r)})],extra:(r,o,a)=>{let l=xr(r);l.material.transparent=!0,l.material.opacity=.35;let c=Zt(r,["UN BAL\xD3N IMAGINARIO"],1.6,[-1.4,2.3,-.1]),h=lt(r,["HOLA, SOY MARCOS."],1.3,[-1.3,2.25,-.1],60),d=lt(r,["ME GUSTA EL","BALONCESTO."],1.2,[-1.3,2.25,-.1],56);return{update:(u,p,g)=>{let E=Fs(a[0]);l.visible=u>t,l.position.set(E.x,Ja(u),E.z+.15),Q(c,u,t,i-.1,g),Q(h,u,i,s-.3,g),Q(d,u,s-.3,99,g)}}},c:el,range:4}});te(49,(n,e)=>{let t=Y(e,"tambien");return{...Ei,atores:[at({x:-1.4,z:-.2,eyes:[[0,"smug"],[t-.3,"happy"]],pose:(i,s)=>s>t-.3?Ga(i,s):i.pose()}),vt({x:-.3,z:-.2,y:-.03,eyes:[[0,"happy"]],pose:(i,s)=>{Cs(i),Ga(i,s)}})],extra:i=>{let s=xs(i,["\xA1JAJAJA!"],1,[-.3,2,-.1]),r=Xe(i,["\xA1JAJAJA!"],1,[-1.4,2.3,-.1]);return{update:(o,a,l)=>{Q(s,o,.1,99,l),Q(r,o,t-.2,99,l)}}},c:el,range:4}});te(50,(n,e)=>{let t=Y(e,"pregunta"),i=Y(e,"respondes");return{...Ei,atores:[po({eyes:[[0,"look"],[i,"smug"]],talk:[[i,n]]}),mo({eyes:[[0,"happy"]],talk:[[t,i-.1]],pose:s=>s.pose({armL:[60,70],armR:[60,70]})})],extra:s=>{fo(s);let r=Zt(s,["TODA LA TARDE"],1.3,[-1,1.9,0]),o=lt(s,["\xBFQU\xC9 TE GUSTA HACER?"],1.3,[-.4,1.9,.1],56),a=lt(s,["EL BALONCESTO.","COMO MARCOS."],1.3,[-1.5,1.9,.1],56);return{update:(l,c,h)=>{Q(r,l,.1,t-.2,h),Q(o,l,t,i-.2,h),Q(a,l,i,99,h)}}},c:Jh,range:3}});te(51,(n,e)=>{let t=Y(e,"convirtiendo");return{...Ei,atores:[po({eyes:[[0,"smug"],[t,"happy"]],talk:[[0,n]],pose:zn}),mo({eyes:[[0,"look"]],pose:tl})],extra:i=>{fo(i);let s=xr(i,.14);s.position.set(-1.5,1.72,0);let r=Ps(i,"\u2605",.4,[-1.5,1.72,.05],"#F2C14E"),o=Ne(i,e,[[["LAS RESPUESTAS\u2026"],.1,"w",[-1,2.2,0],1.5],[["\u2026SE VUELVEN LAS TUYAS"],t,"p",[-1,2.2,0],2,1]]);return{update:(a,l,c)=>{let h=Ve(t-.3,t+.5,a);s.scale.setScalar(Math.max(.01,1-h)),r.scale.setScalar(Math.max(.01,h)),yn(r,c),o(a,c)}}},c:Jh,range:3}});te(52,(n,e)=>({...Ei,atores:[po({eyes:[[0,"happy"]],talk:[[0,n]],pose:zn}),mo({eyes:[[0,"look"],[3,"happy"]],pose:tl})],extra:t=>{fo(t);let i=Yn(t,12,"#FFE27A"),s=Ne(t,e,[[["\u2605 VER LAS ESTRELLAS"],"estrellas","y",[-1,2.25,0],1.8,1],[["TU ABUELO TE ENSE\xD1\xD3 A PESCAR"],"abuelo","w",[-1,1.95,.05],2.4,1],[["QUER\xCDAS SER ASTRONAUTA"],"astronauta","p",[-1,1.65,.1],2.1,1]]);return{update:(r,o,a)=>{i(r,[-1.5,2,0,.5],r>Y(e,"estrellas")?1:0),s(r,a)}}},c:[[-1,1.6,3.4],[-1,1.4,-.1],[-1,1.58,2.9],[-1,1.4,-.1]],range:3}));te(53,(n,e)=>({...Ei,atores:[mo({eyes:[[0,"happy"]],pose:tl}),po({eyes:[[0,"happy"]],talk:[[0,n]],pose:zn})],extra:t=>{fo(t);let i=Ne(t,e,[[["TE ESCUCHA"],.1,"p",[-.55,1.62,.1],1],[["CON LOS CODOS EN LA MESA"],"codos","w",[-.55,1.62,.1],1.8],[["2 HORAS"],"dos","y",[-.55,1.62,.1],.9,1]]);return{update:(s,r,o)=>i(s,o)}},c:[[-.6,1.4,2.2],[-.6,1.18,-.1],[-.6,1.4,1.9],[-.6,1.18,-.1]],range:2.5,look:{exposure:1,bloom:.4}}));te(54,(n,e)=>{let t=Y(e,"oye");return{...Ei,atores:[at({x:-2,z:-.2,eyes:[[0,"look"],[t+1.5,"wide"]],move:i=>[jt(-1.2,-2.2,Ve(0,t,i)),0,-.2],pose:(i,s)=>s<t?i.walk(s):i.pose()}),vt({x:-.4,z:-.2,eyes:[[0,"happy"]],talk:[[t,n]],pose:(i,s)=>s>t?i.pose({armL:[60,70],armR:[60,70]}):Vh(i,s)})],extra:i=>{let s=lt(i,["OYE\u2026 ES LA PRIMERA VEZ","QUE HABLAMOS TANTO"],1.8,[-.6,2.2,-.1],52);return{update:(r,o,a)=>Q(s,r,t,99,a)}},c:[[-1.2,1.7,3.6],[-1.2,1.35,-.3],[-1.2,1.65,3.1],[-1.2,1.35,-.3]],range:4,look:{exposure:.98}}});Zh(55,3,"LA CITA","S\xC1BADO","cita");te(56,(n,e)=>{let t=Y(e,"tu");return{...Is,atores:[Oi({x:.6,z:-.2,eyes:[[0,"smug"]]}),vt({x:-.4,z:-.2,eyes:[[0,"happy"]],pose:i=>i.pose({armL:[60,70],armR:[60,70]})})],extra:i=>{let s=Cr(i),r=Ne(i,e,[[["LA FERIA"],.1,"y",[0,2.4,-.2],1.1],[["Y T\xDA LES HAS AYUDADO CON TODO"],t,"w",[0,2.4,-.2],2.6,1]]);return{update:(o,a,l)=>{s(o),r(o,l)}}},c:nl,range:4,look:{exposure:1,bloom:.45}}});te(57,(n,e)=>({...wr,fov:30,atores:[at({x:-1.2,z:-.3,eyes:[[0,"look"]],pose:t=>t.pose({armL:[12,8],armR:[95,0]})})],extra:t=>{let i=Ne(t,e,[[["\u2713 LA HORA: 19:00"],"hora","w",[.4,2.3,-.4],1.8,1],[["\u2713 EL TIEMPO: SOL"],"tiempo","w",[.4,1.85,-.4],1.8,1],[["\u2713 QU\xC9 PONERSE"],"ponerse","p",[.4,1.4,-.4],1.6,1]]);return{update:(s,r,o)=>i(s,o)}},c:[[-.3,1.7,3.6],[-.3,1.6,-.4],[-.3,1.65,3.1],[-.3,1.6,-.4]],range:3}));te(58,(n,e)=>({...wr,ambo:{night:!0},fov:30,atores:[at({x:-.8,z:-.3,eyes:[[0,"down"]],pose:t=>t.pose({armL:[8,6],armR:[70,60],head:-8})})],extra:(t,i,s)=>{let r=Ln(["",""],{hora:"19:30",bg:"#2A1830"});r.scale.setScalar(.3),t.add(r);let o=Xh(t,s[0]),a=Ne(t,e,[[["TE QUEDAS EN CASA"],.1,"w",[-.8,2.25,-.2],1.6],[["MIRANDO EL M\xD3VIL"],"movil","y",[-.8,2.25,-.2],1.5],[["ESPERANDO\u2026"],"esperando","p",[-.8,2.25,-.2],1.3,1]]);return{update:(l,c,h)=>{Sn(r,s[0],0,.05,.1),o(),a(l,h)}}},c:[[-.8,1.6,3],[-.8,1.4,-.3],[-.8,1.55,2.5],[-.8,1.4,-.3]],range:3,look:qn}));te(59,(n,e)=>{let t=Y(e,"nueve");return{...wr,ambo:{night:!0},fov:30,atores:[at({x:-.8,z:-.3,eyes:[[0,"down"],[t,"flat"]],pose:i=>i.pose({armL:[8,6],armR:[70,60],head:-8})})],extra:(i,s,r)=>{let o=Ln(["",""],{hora:"20:00",bg:"#2A1830"});o.scale.setScalar(.3),i.add(o);let a=Xh(i,r[0]),l=Xe(i,["20:00"],1,[.5,2.2,-.4],{bg:"#1E2230",fg:"#FF7A8A",size:96,w:420}),c=Xe(i,["21:00"],1,[.5,2.2,-.4],{bg:"#1E2230",fg:"#FF7A8A",size:96,w:420}),h=Zt(i,["NADA"],.8,[.5,1.65,-.4]);return{update:(d,u,p)=>{Sn(o,r[0],0,.05,.1),a(),Q(l,d,0,t-.1,p),Q(c,d,t,99,p),h.visible=d>Y(e,"nada")-.1&&d<t-.1||d>Y(e,"nada",t)-.1,yn(h,p)}}},c:[[-.2,1.7,3.4],[-.2,1.6,-.4],[-.2,1.65,2.9],[-.2,1.6,-.4]],range:3,look:qn}});te(60,(n,e)=>{let t=Y(e,"por");return{amb:"gris",fov:30,k:1,atores:[at({x:0,z:-.4,eyes:[[0,"sad"]],pose:i=>i.pose({armL:[8,6],armR:[70,60],head:-8})})],extra:(i,s,r)=>{let o=Ps(i,"?",.8,[0,2.4,-.8],"#F2C14E",180),a=Ne(i,e,[[["\xBFPOR QU\xC9 TE GUSTA","TANTO\u2026"],t,"y",[-1.05,1.95,-.2],1.5,1],[["\u2026ALGUIEN QUE NO","TE VE AS\xCD?"],"siquiera","p",[1.05,1.35,-.2],1.7,1]]);return{update:(l,c,h)=>{Q(o,l,0,99,h),o.rotation.z=Math.sin(l*2)*.1,a(l,h)}}},c:[[0,1.8,3.8],[0,1.7,-.4],[0,1.75,3.3],[0,1.7,-.4]],range:3}});ri(61,["pidieron"],[(n,e)=>({amb:"lab",fov:30,atores:[Gh({x:-.5,z:-.6,talk:[[1.2,n]],eyes:[[0,"smug"]],pose:zn}),Mr(2,{x:.7,z:-.9,eyes:[[0,"look"]],pose:Xa})],extra:t=>{let i=Xe(t,["ROY BAUMEISTER"],1.6,[-.5,2.2,-.5],Tr);return{update:(s,r,o)=>Q(i,s,Y(e,"roy")-.2,99,o)}},c:[[0,1.7,3.8],[0,1.4,-.7],[0,1.65,3.3],[0,1.4,-.7]],range:4}),(n,e)=>({...Ff(),atores:[...[-1.8,-.6,.6,1.8].map((t,i)=>Wt(i*2+1,{x:t,z:.4,eyes:[[0,"down"]],pose:(s,r)=>s.pose({armL:[60,70],armR:[60+Math.sin(r*20+i)*5,70],head:-10})}))],extra:t=>{kE(t,[-1.8,-.6,.6,1.8],.9);let i=Xe(t,["DOS HISTORIAS REALES"],2,[0,2.35,.4]);return{update:(s,r,o)=>Q(i,s,Y(e,"historias")-.3,99,o)}},c:[[0,1.9,4.6],[0,1.3,.4],[0,1.85,4],[0,1.3,.4]],range:4})]);var $h=["Me gustaba\u2026","\u2026y no me","correspond\xEDa."],Of=["Yo le gustaba\u2026","\u2026y yo no","le correspond\xEDa."];te(62,(n,e)=>({amb:"gris",fov:30,k:1,atores:[],extra:t=>{let i=ao(t,"HISTORIA 1",$h,1.2,[-.8,1.6,-1],"#E8667F"),s=Zt(t,["NO TE CORRESPONDEN"],1.6,[-.8,2.6,-.9]);return{update:(r,o,a)=>{i.rotation.z=-.05,i.scale.setScalar(.7+.3*Ve(0,.4,r)),Q(s,r,.3,99,a)}}},c:[[0,1.7,3.4],[0,1.7,-1],[0,1.7,3.1],[0,1.7,-1]],range:3}));te(63,(n,e)=>({amb:"gris",fov:30,k:1,atores:[],extra:t=>{let i=ao(t,"HISTORIA 1",$h,1.2,[-.8,1.6,-1],"#E8667F");i.rotation.z=-.05;let s=ao(t,"HISTORIA 2",Of,1.2,[.8,1.6,-1],"#2F5A9A"),r=Zt(t,["T\xDA NO CORRESPONDES"],1.6,[.8,2.6,-.9]);return{update:(o,a,l)=>{s.rotation.z=.05,s.scale.setScalar(Math.max(.01,Ve(.2,.6,o))),Q(r,o,Y(e,"sin")-.3,99,l)}}},c:[[0,1.7,3.4],[0,1.7,-1],[0,1.7,3.1],[0,1.7,-1]],range:3}));te(64,(n,e)=>{let t=Y(e,"donde");return{amb:"gris",fov:32,k:1,atores:[...[-2.4,-1.6,-.8,.8,1.6,2.4].map((i,s)=>Wt(s,{x:i,z:-.8-s%2*.4,eyes:[[0,"look"],[t,"happy"]]})),at({x:0,z:-.3,eyes:[[0,"look"],[t,"wide"]]})],extra:i=>{let s=Ne(i,e,[[["CASI TODOS: LOS DOS LADOS"],.1,"y",[0,2.45,-.4],2.4],[["DONDE EST\xC1S T\xDA AHORA"],t,"p",[0,2.45,-.4],2.1,1]]),r=Ps(i,"\u2193",.4,[0,2,-.3],"#E8667F");return{update:(o,a,l)=>{s(o,l),Q(r,o,t,99,l)}}},c:[[0,1.8,5],[0,1.4,-.5],[0,1.7,4],[0,1.4,-.4]],range:4}});ri(65,["los"],[n=>({amb:"gris",fov:30,k:1,atores:[],extra:e=>{let t=Xe(e,["ALGO LES SORPRENDI\xD3"],2.3,[0,1.7,-1],{size:80}),i=Ps(e,"!",.6,[0,2.4,-1],"#E8667F");return{update:(s,r,o)=>{Q(t,s,0,99,o),Q(i,s,.3,99,o)}}},c:[[0,1.8,3.4],[0,1.8,-1],[0,1.8,2.9],[0,1.8,-1]],range:3}),(n,e)=>({amb:"gris",fov:30,k:1,atores:[Wt(0,{x:1,z:-.4,eyes:[[0,"look"],[Y(e,"bonito"),"heart"]]})],extra:t=>{let i=ao(t,"HISTORIA 1",$h,1,[-1,1.5,-1],"#E8667F"),s=HE(t,8),r=Ne(t,e,[[["ALGO BONITO"],"bonito","p",[1,2.35,-.3],1.3],[["LA ILUSI\xD3N"],"ilusion","y",[1,2.35,-.3],1.2],[["LOS NERVIOS"],"nervios","w",[1,2.35,-.3],1.3],[["LO VIVO QUE SE SENT\xCDAN"],"vivo","p",[1,2.35,-.3],2,1]]);return{update:(o,a,l)=>{i.rotation.z=-.05,s(o,[-1,1.6,-.7],l,o>Y(e,"bonito")?1:0),r(o,l)}}},c:[[0,1.7,3.6],[0,1.6,-.6],[0,1.65,3.1],[0,1.6,-.6]],range:3})]);te(66,(n,e)=>{let t=Y(e,"culpa");return{amb:"gris",fov:30,k:1,atores:[Wt(5,{x:-1,z:-.4,eyes:[[0,"look"],[t,"sad"]],pose:i=>i.pose({armL:[40,60],armR:[40,60],head:8})})],extra:(i,s,r)=>{let o=ao(i,"HISTORIA 2",Of,1,[1,1.5,-1],"#2F5A9A"),a=Za(i,5),l=new I,c=Ne(i,e,[[["CULPA"],t,"r",[-1,2.35,-.3],.9,1],[["INCOMODIDAD"],"incomodidad","w",[-1,2,-.25],1.3,1]]);return{update:(h,d,u)=>{o.rotation.z=.05,r[0].head.getWorldPosition(l),a(h,[l.x,l.y+.2,l.z+.1,.25],h>t?1:0),c(h,u)}}},c:[[0,1.7,3.6],[0,1.6,-.6],[0,1.65,3.1],[0,1.6,-.6]],range:3,look:{exposure:.95,vig:.6}}});te(67,(n,e)=>{let t=Y(e,"nadie");return{amb:"gris",fov:30,k:1,atores:[Wt(5,{x:-.6,z:-.4,eyes:[[0,"wide"],[t,"flat"]],pose:(i,s)=>i.pose({armL:[40+Math.sin(s*3)*20,40],armR:[40-Math.sin(s*3)*20,40]})}),Wt(2,{x:.6,z:-.4,eyes:[[0,"heart"]]})],extra:i=>{let s=Ne(i,e,[[["NO SAB\xCDAN QU\xC9 HACER"],.1,"w",[0,2.35,-.3],1.8],[["\xBFC\xD3MO DECIR QUE NO","SIN HACER DA\xD1O?"],t,"y",[0,2.2,-.3],2,1]]);return{update:(r,o,a)=>s(r,a)}},c:[[0,1.7,3.6],[0,1.5,-.4],[0,1.65,3.1],[0,1.5,-.4]],range:3}});te(68,(n,e)=>{let t=Y(e,"pero");return{...wr,ambo:{night:!0},fov:30,atores:[at({x:-.6,z:-.6,eyes:[[0,"sad"],[t+.5,"look"]]})],extra:i=>{let s=Yn(i,14,"#CFE0FF"),r=uo(i,.4);r.g.position.set(-.6,2.3,-.5);let o=Ne(i,e,[[["QUERER A QUIEN NO TE QUIERE\u2026 DUELE"],.2,"w",[-.2,2.6,-.5],2.9],[["PERO NO ES EL PEOR LUGAR"],t,"p",[-.2,2.6,-.5],2.2,1]]);return{update:(a,l,c)=>{r.set(.6*(1-Ve(t,t+1.5,a))),s(a,[-.6,2,-.6,1.2],Ve(t,t+1,a)),o(a,c)}}},c:[[-.4,1.8,3.6],[-.5,1.6,-.6],[-.4,1.75,3.1],[-.5,1.6,-.6]],range:3,look:qn}});te(69,(n,e)=>{let t=Y(e,"mensaje"),i=Y(e,"estas");return{...Rr,fov:30,atores:[iy({eyes:[[0,"sad"],[t,"wide"]]})],extra:(s,r,o)=>{let a=ny(s,o),l=Xe(s,["22:00"],1,[-1.4,2,-.9],{bg:"#1E2230",fg:"#FF7A8A",size:96,w:420}),c=co(s,[.7,1.55,-.8],.75,[["l","\xBFEst\xE1s despierto?",i]],{name:"ELLA \u2665",hora:"22:00"}),h=Xe(s,["ES ELLA"],.9,[.7,2.45,-.7],Wh);return{update:(d,u,p)=>{a(),Q(l,d,0,99,p),c.visible=d>t-.2,c.userData.upd(d),Q(h,d,Y(e,"ella")-.1,99,p)}}},c:sy,range:3,look:qn}});te(70,(n,e)=>{let t=Y(e,"si"),i=Y(e,"ha");return{amb:"gris",fov:30,k:1,atores:[],extra:s=>{let r=co(s,[0,1.5,-.5],1.15,[["l","\xBFEst\xE1s despierto?",0],["r","S\xED.",t],["l","Ha sido horrible.",i]],{name:"ELLA \u2665",hora:"22:00"}),o=Xe(s,["0,3 SEGUNDOS"],1.2,[-1.3,2.1,-.3],Dn);return{update:(a,l,c)=>{r.userData.upd(a,{typing:a>t+.3&&a<i}),Q(o,a,.2,i-.3,c)}}},c:Qa,range:3}});ri(71,["marcos"],[(n,e)=>({...Rr,fov:30,atores:[at({x:-.8,z:-.3,eyes:[[0,"look"]],pose:Va})],extra:(t,i,s)=>{let r=Ln(["",""],{hora:"22:01"});r.scale.setScalar(.25),t.add(r);let o=Ne(t,e,[[["LE LLAMAS"],0,"y",[-.8,2.25,-.2],1.1],[["TE LO CUENTA TODO"],"cuenta","w",[-.8,2.25,-.2],1.7,1]]);return{update:(a,l,c)=>{Sn(r,s[0],.05,-.05,.05),o(a,c)}}},c:[[-.8,1.6,3],[-.8,1.4,-.3],[-.8,1.55,2.5],[-.8,1.4,-.3]],range:3,look:qn}),(n,e)=>({...Is,atores:[vt({x:-.5,z:-.2,eyes:[[0,"flat"]],pose:t=>t.pose({armL:[60,70],armR:[60,70]})}),Oi({x:.7,z:-.2,eyes:[[0,"smug"]],move:t=>[jt(3.5,.7,Ve(0,1.4,t)),0,-.2],pose:(t,i)=>i<1.4?t.walk(i):t.pose()})],extra:t=>{let i=Cr(t),s=Xe(t,["LLEG\xD3 TARDE"],1.3,[0,2.35,-.2],Dn),r=Xe(t,["19:40"],.8,[-.5,1.95,-.1],{bg:"#1E2230",fg:"#FF7A8A",size:96,w:420});return{update:(o,a,l)=>{i(o),Q(s,o,.1,99,l),Q(r,o,.3,99,l)}}},c:nl,range:4,look:rs})]);te(72,(n,e)=>{let t=Y(e,"hablo");return{...Is,atores:[vt({x:-.5,z:-.2,eyes:[[0,"flat"],[t+1.5,"shut"]],pose:i=>i.pose({armL:[60,70],armR:[60,70]})}),Oi({x:.6,z:-.2,eyes:[[0,"down"],[t,"smug"]],talk:[[t,n]],pose:(i,s)=>s<t?i.pose({armL:[8,6],armR:[70,60],head:-10}):zn(i,s)})],extra:(i,s,r)=>{let o=Cr(i),a=Ln(["",""],{hora:"20:10"});a.scale.setScalar(.28),i.add(a);let l=xr(i,.14),c=FE(i),h=Ne(i,e,[[["MIRANDO EL M\xD3VIL"],.1,"w",[.6,2.35,-.2],1.5],[["40 MINUTOS DE BALONCESTO"],t+.3,"y",[.2,2.4,-.2],2.3,1]]);return{update:(d,u,p)=>{o(d),a.visible=d<t,Sn(a,r[1],0,.05,.1),l.visible=d>t,l.position.set(1.2,1.9+Math.sin(d*4)*.1,-.1),c(d,[-.75,1.8,-.1],p,d>t+1.5),h(d,p)}}},c:nl,range:4,look:rs}});te(73,(n,e)=>({...Is,atores:[vt({x:-.5,z:-.2,eyes:[[0,"flat"]],pose:t=>t.pose({armL:[60,70],armR:[60,70]})}),Oi({x:.6,z:-.2,eyes:[[0,"smug"]],talk:[[0,n]],pose:zn})],extra:t=>{let i=Xe(t,["PREGUNTAS A ELLA: 0"],1.6,[-.3,2.02,-.1],Dn);return{update:(s,r,o)=>Q(i,s,.1,99,o)}},c:[[-.3,1.6,2.6],[-.3,1.4,-.2],[-.3,1.55,2.2],[-.3,1.4,-.2]],range:3,look:rs}));te(74,(n,e)=>{let t=Y(e,"dijo")+.3;return{...Is,atores:[vt({x:-.5,z:-.2,eyes:[[0,"happy"],[t+.3,"wide"]],talk:[[0,t-.3]],pose:zn}),Oi({x:.6,z:-.2,eyes:[[0,"look"],[t,"flat"]],talk:[[t,n]],pose:(i,s)=>i.pose({armL:[s>t?40:12,50],armR:[s>t?40:12,50]})})],extra:i=>{let s=Cr(i),r=lt(i,["EL MENSAJE\u2026","EL BONITO"],1.2,[-.6,2.2,-.1],56),o=lt(i,["\xBFQU\xC9 MENSAJE?"],1.2,[.7,2.25,-.1],60);return{update:(a,l,c)=>{s(a),Q(r,a,Y(e,"mensaje")-.3,t-.1,c),Q(o,a,t,99,c)}}},c:nl,range:4,look:rs}});te(75,(n,e)=>({amb:"gris",fov:30,k:1,atores:[],extra:t=>{let i=co(t,[0,1.5,-.5],1.15,[["r","Tienes una risa que se oye desde el otro lado del pasillo. Siempre eres la primera en ayudar\u2026",0]],{...Yh,hora:"20:30"}),s=Xe(t,["NO LO LEY\xD3 ENTERO"],1.6,[1.5,2,-.3],Dn);return{update:(r,o,a)=>{i.userData.upd(r),Q(s,r,0,99,a)}}},c:Qa,range:3}));ri(76,["sabes"],[(n,e)=>({...kh,atores:[vt({x:-.6,z:-.3,eyes:[[0,"down"]],pose:Va})],extra:(t,i,s)=>{let r=Ln(["",""],{hora:"22:03"});r.scale.setScalar(.25),t.add(r);let o=Zt(t,["SILENCIO\u2026"],1.1,[-.6,2.02,-.2]);return{update:(a,l,c)=>{Sn(r,s[0],.05,-.05,.05),Q(o,a,.1,99,c)}}},c:[[-.6,1.6,2.8],[-.6,1.4,-.3],[-.6,1.55,2.4],[-.6,1.4,-.3]],range:3,look:qn}),(n,e)=>{let t=Y(e,"mejor");return{...kh,atores:[vt({x:-.6,z:-.3,eyes:[[0,"look"],[t,"happy"]],talk:[[0,n]],pose:Va})],extra:(i,s,r)=>{let o=Ln(["",""],{hora:"22:03"});o.scale.setScalar(.25),i.add(o);let a=gi(r[0]),l=Ne(i,e,[[["\xBFSABES QU\xC9 ES LO PEOR?"],0,"w",[-.6,2.05,-.2],1.7],[["ME LO PASABA MEJOR\u2026"],t-.4,"y",[-.6,2.05,-.2],1.7],[["\u2026ENSAYANDO CONTIGO"],"contigo","p",[-.6,2.05,-.2],1.7,1]]);return{update:(c,h,d)=>{Sn(o,r[0],.05,-.05,.05),a(Ve(t,t+1,c)*.7),l(c,d)}}},c:[[-.6,1.6,2.8],[-.6,1.45,-.3],[-.6,1.55,2.2],[-.6,1.45,-.3]],range:3,look:qn}}]);te(77,(n,e)=>{let t=Y(e,"tiembla");return{...Rr,fov:30,atores:[at({x:-.8,z:-.3,eyes:[[0,"wide"]],pose:(i,s)=>i.pose({armL:[8,6],armR:[150+(s>t?Math.sin(s*40)*4:0),150]})})],extra:(i,s,r)=>{let o=Ln(["",""],{hora:"22:04"});o.scale.setScalar(.25),i.add(o);let a=Ne(i,e,[[["NO DICES NADA"],.1,"w",[-.8,2.08,-.2],1.3],[["TE TIEMBLA LA MANO"],t,"y",[-.8,2.08,-.2],1.6,1]]);return{update:(l,c,h)=>{Sn(o,r[0],.05,-.05,.05),a(l,h)}}},c:[[-.8,1.55,2.4],[-.8,1.45,-.3],[-.8,1.52,2],[-.8,1.45,-.3]],range:3,look:qn}});te(78,(n,e)=>{let t=Y(e,"cuelga");return{...kh,atores:[vt({x:-.6,z:-.3,eyes:[[0,"down"]],talk:[[0,t-.2]],pose:(i,s)=>s<t?Va(i):i.pose({armL:[8,6],armR:[60,60]})})],extra:(i,s,r)=>{let o=Ln(["",""],{hora:"22:05"});o.scale.setScalar(.25),i.add(o);let a=lt(i,["PERDONA. ES TARDE."],1.2,[-.4,2,-.2],56),l=lt(i,["MA\xD1ANA HABLAMOS."],1.2,[-.4,2,-.2],56),c=Xe(i,["LLAMADA FINALIZADA"],1.6,[-.6,2.02,-.2],Dn);return{update:(h,d,u)=>{h<t?Sn(o,r[0],.05,-.05,.05):Sn(o,r[0],0,.05,.1),Q(a,h,0,Y(e,"manana")-.1,u),Q(l,h,Y(e,"manana")-.1,t-.1,u),Q(c,h,t,99,u)}}},c:[[-.6,1.6,2.8],[-.6,1.45,-.3],[-.6,1.55,2.4],[-.6,1.45,-.3]],range:3,look:qn}});ri(79,["lunes"],[(n,e)=>({...wr,fov:30,atores:[at({x:-.8,z:-.3,eyes:[[0,"down"]],pose:t=>t.pose({armL:[8,6],armR:[70,60],head:-8})})],extra:(t,i,s)=>{let r=Ln(["",""],{hora:"12:00"});r.scale.setScalar(.3),t.add(r);let o=Ne(t,e,[[["DOMINGO"],0,"y",[.4,2.3,-.4],1,1],[["0 MENSAJES"],"escribe","r",[.4,1.85,-.4],1.2,1]]);return{update:(a,l,c)=>{Sn(r,s[0],0,.05,.1),o(a,c)}}},c:[[-.3,1.7,3.4],[-.3,1.5,-.4],[-.3,1.65,2.9],[-.3,1.5,-.4]],range:3}),(n,e)=>({...Ye,atores:[at({x:-1.4,z:-.3,eyes:[[0,"look"],[1,"sad"]],pose:(t,i)=>t.pose({armL:[12,8],armR:[i<1?120:12,20]})}),vt({x:.5,z:-.6,eyes:[[0,"lookl"],[.6,"down"]],move:t=>[jt(.3,3.4,Ve(.4,n,t)),0,-.6],pose:(t,i)=>i>.4?t.walk(i*1.3):t.pose()})],extra:t=>{mi(t);let i=Xe(t,["LUNES \xB7 TE EVITA"],1.6,[-.5,2.35,-.3],Dn);return{update:(s,r,o)=>Q(i,s,.1,99,o)}},c:[[0,1.7,4],[0,1.4,-.4],[0,1.65,3.4],[.3,1.4,-.4]],range:4})]);te(80,(n,e)=>{let t=Y(e,"tendrias");return{...Ye,atores:[Rt({eyes:[[0,"sad"]],pose:i=>i.pose({head:10})})],extra:i=>{pt(i);let s=uo(i,.35);s.g.position.set(-.45,1.85,-.4);let r=Ne(i,e,[[["LO HAS ESTROPEADO TODO"],.2,"r",[0,2.25,-.4],2],[["DEBISTE DECIR QUE NO"],t,"w",[0,2.25,-.4],1.9,1]]);return{update:(o,a,l)=>{s.set(.7),r(o,l)}}},c:[[-.2,1.9,4.2],[-.3,1.1,-.5],[-.3,1.6,2.8],[-.4,1.15,-.5]],range:4,look:{exposure:.92,vig:.6}}});var Wa=[[0,1.7,3.6],[0,1.6,-.6],[0,1.65,3.1],[0,1.6,-.6]];ri(81,["como"],[(n,e)=>({amb:"gris",fov:30,k:1,atores:[vt({x:.9,z:-.4,eyes:[[0,"lookl"]],pose:t=>t.pose({head:10})}),at({x:-.9,z:-.4,eyes:[[0,"wide"]]})],extra:t=>{let i=Xe(t,["\xBFPOR QU\xC9, DE REPENTE,","SE FIJA EN TI?"],2.3,[0,2.45,-.3],{h:260}),s=ss(t,.3);return s.position.set(.2,1.6,-.3),{update:(r,o,a)=>{Q(i,r,.1,99,a),s.scale.setScalar(br(r,120)),yn(s,a)}}},c:Wa,range:3}),(n,e)=>({amb:"gris",fov:30,k:1,atores:[at({x:-.9,z:-.4,eyes:[[0,"look"]]}),vt({x:.9,z:-.4,eyes:[[0,"look"],[Y(e,"nunca"),"wide"]]})],extra:t=>{let i=Ne(t,e,[[["A\xD1OS VI\xC9NDOLO\u2026"],"anos","w",[0,2.45,-.3],1.6],[["\u2026Y NUNCA TE HAB\xCDA","LLAMADO LA ATENCI\xD3N"],"nunca","y",[0,2.5,-.3],2.3,1]]);return{update:(s,r,o)=>i(s,o)}},c:Wa,range:3})]);te(82,(n,e)=>({amb:"lab",fov:30,atores:[Mr(0,{x:-1.2,z:-.6,eyes:[[0,"smug"]],talk:[[Y(e,"lucy"),Y(e,"paul")]]}),Gh({x:0,z:-.8,eyes:[[0,"look"]],talk:[[Y(e,"paul"),Y(e,"eli")]]}),Rs({outfit:"jaleco",glow:0,x:1.2,z:-.6,eyes:[[0,"happy"]],talk:[[Y(e,"eli"),Y(e,"estudiaron")]]})],extra:t=>{let i=Ne(t,e,[[["LUCY HUNT"],"lucy","b",[-1.2,2.2,-.5],1.1,1],[["PAUL EASTWICK"],"paul","b",[0,2.45,-.7],1.3,1],[["ELI FINKEL"],"eli","b",[1.2,2.2,-.5],1,1],[["167 PAREJAS"],"167","y",[0,.55,.1],1.5,1]]);return{update:(s,r,o)=>i(s,o)}},c:[[0,1.6,4.4],[0,1.4,-.7],[0,1.6,3.9],[0,1.3,-.7]],range:4}));te(83,(n,e)=>({amb:"gris",fov:32,k:1,atores:[...[[-2,0],[-1.2,1],[.6,2],[1.4,3]].map(([t,i])=>i%2?Wt(i*2,{x:t,z:-.5,eyes:[[0,"happy"]]}):Wt(i*2+1,{x:t,z:-.5,eyes:[[0,"look"]]}))],extra:t=>{let i=Xe(t,["\xBFCU\xC1NTO OS CONOC\xCDAIS","ANTES DE SALIR?"],2.3,[0,2.45,-.4],{h:260}),s=ss(t,.25),r=ss(t,.25);return s.position.set(-1.6,2,-.4),r.position.set(1,2,-.4),{update:(o,a,l)=>{Q(i,o,.2,99,l);for(let c of[s,r])c.scale.setScalar(br(o,100)*.8),yn(c,l)}}},c:[[0,1.7,4.6],[0,1.5,-.5],[0,1.65,4],[0,1.5,-.5]],range:4}));te(84,(n,e)=>({amb:"gris",fov:30,k:1,atores:[...[-1.6,-.8,0,.8,1.6].map((t,i)=>Wt(i+2,{x:t,z:-.4,eyes:[[0,"smug"]],pose:s=>s.pose({armL:[12,8],armR:[150,20]})}))],extra:t=>{let i=["7","5","8","6","9"].map((r,o)=>Zt(t,[r],.35,[-1.6+o*.8,2.25,-.3],{size:110,w:260,h:220})),s=Xe(t,["GENTE DE FUERA PUNT\xDAA"],2.1,[0,2.75,-.3]);return{update:(r,o,a)=>{i.forEach((l,c)=>Q(l,r,.3+c*.2,99,a)),Q(s,r,Y(e,"gente")-.3,99,a)}}},c:[[0,1.8,4.4],[0,1.7,-.4],[0,1.75,3.9],[0,1.7,-.4]],range:4}));te(85,(n,e)=>{let t=Y(e,"guapo"),i=Y(e,"normal");return{amb:"gris",fov:30,k:1,atores:[],extra:s=>{let r=ka(s,1.4,[-.8,1.55,-1],"9","9"),o=ka(s,1.4,[.8,1.55,-1],"5","5"),a=Ne(s,e,[[["SALIERON MUY R\xC1PIDO"],.1,"w",[0,2.45,-.9],1.9],[["SE PAREC\xCDAN"],"parecerse","y",[0,2.45,-.9],1.3,1]]);return{update:(l,c,h)=>{r.scale.setScalar(Math.max(.01,Ve(t-.2,t+.2,l))),o.scale.setScalar(Math.max(.01,Ve(i-.2,i+.2,l))),a(l,h)}}},c:[[0,1.8,3.4],[0,1.8,-1],[0,1.75,3],[0,1.75,-1]],range:3}});te(86,(n,e)=>{let t=Y(e,"amigos"),i=Y(e,"regla");return{amb:"gris",fov:30,k:1,atores:[],extra:s=>{let r=ka(s,1.4,[-.8,1.55,-1],"9","5","#E8667F"),o=ka(s,1.4,[.8,1.55,-1],"4","8","#E8667F"),a=Ne(s,e,[[["SE CONOC\xCDAN DESDE HAC\xCDA MUCHO"],.1,"w",[0,2.45,-.9],2.6],[["AMIGOS"],t,"p",[0,2.45,-.9],1],[["NO SEGU\xCDAN LA REGLA"],i-.4,"r",[0,2.45,-.9],1.8,1]]);return{update:(l,c,h)=>{r.scale.setScalar(Math.max(.01,Ve(t-.3,t+.1,l))),o.scale.setScalar(Math.max(.01,Ve(t,t+.4,l))),a(l,h)}}},c:[[0,1.8,3.4],[0,1.8,-1],[0,1.75,3],[0,1.75,-1]],range:3}});ri(87,["sino"],[(n,e)=>({amb:"gris",fov:30,k:1,atores:[vt({x:0,z:-.4,eyes:[[0,"look"]]})],extra:t=>{let i=Ne(t,e,[[["CON EL TIEMPO\u2026"],.1,"w",[0,2.3,-.3],1.5],[["YA NO CUENTA TANTO EL FUERA"],"fuera","y",[0,2.3,-.3],2.4,1]]);return{update:(s,r,o)=>i(s,o)}},c:Wa,range:3}),(n,e)=>({amb:"gris",fov:30,k:1,atores:[vt({x:0,z:-.4,eyes:[[0,"happy"]]})],extra:(t,i,s)=>{let r=Je("#FFB0C0",.9,0);t.add(r);let o=ss(t,.25),a=new I,l=Ne(t,e,[[["POR DENTRO"],.1,"p",[0,2.3,-.3],1.2],[["LO QUE LA HAC\xCDA \xDANICA"],"unica","y",[0,2.3,-.3],2,1]]),c=Yn(t,10);return{update:(h,d,u)=>{s[0].torso.getWorldPosition(a),r.position.set(a.x,a.y,a.z+.2),r.material.opacity=Ve(0,.6,h)*(.6+.2*Math.sin(h*4)),o.position.set(a.x,a.y,a.z+.3),o.scale.setScalar(br(h,100)),yn(o,u),c(h,[0,1.5,-.2,.8],Ve(Y(e,"unica")-.3,Y(e,"unica"),h)),l(h,u)}}},c:Wa,range:3})]);te(88,(n,e)=>({...Ye,atores:[Oi({x:0,z:-1.2,eyes:[[0,"smug"]],pose:(t,i)=>t.pose({armL:[12,8],armR:[40+Math.sin(i*2.2*Math.PI)*15,20]})}),...[-2.4,-1.5,1.5,2.4].map((t,i)=>Wt(i,{x:t,z:-.3+i%2*.4,eyes:[[0,"heart"]]}))],extra:(t,i,s)=>{mi(t),Pf(t,1,-2.6);let r=xr(t),o=Xe(t,["TODO EL MUNDO LO MIRA"],2,[0,2.45,-1]);return{update:(a,l,c)=>{let h=Fs(s[0]);r.position.set(h.x,Ja(a),h.z+.15),Q(o,a,.1,99,c)}}},c:[[0,1.8,4.6],[0,1.3,-1],[0,1.75,4],[0,1.3,-1]],range:4}));te(89,(n,e)=>({...Ei,atores:[mo({eyes:[[0,"happy"]],talk:[[0,n]],pose:zn}),po({eyes:[[0,"heart"]],pose:tl})],extra:t=>{fo(t);let i=[0,1,2,3,4].map(r=>Ps(t,"\u2605",.3,[-1.6+r*.3,2+r%2*.15,0],"#F2C14E")),s=xs(t,["T\xDA LA ESCUCHASTE 2 HORAS"],2.2,[-1,2.35,0]);return{update:(r,o,a)=>{i.forEach((l,c)=>{l.scale.setScalar(.8+.2*Math.sin(r*3+c)),yn(l,a)}),Q(s,r,.2,99,a)}}},c:Jh,range:3,look:rs}));te(90,(n,e)=>{let t=Y(e,"vuelve"),i=t+1.4;return{...Ye,atores:[Rt({eyes:[[0,"sad"],[t,"look"],[i,"wide"]],pose:s=>s.pose({head:6})}),vt({x:.45,z:-.5,eyes:[[0,"look"]],move:s=>s<i?[jt(3.6,.45,Ve(t-.6,i,s)),0,-.15]:[.45,ho,-.5],pose:(s,r)=>r<i?s.walk(r*2):Cs(s)}),...ja()],extra:s=>{pt(s);let r=Ne(s,e,[[["MARTES \xB7 RECREO"],.1,"y",[0,2.15,-.4],1.6],[["EL BANCO DE SIEMPRE"],"banco","w",[0,2.15,-.4],1.7],[["OTRA VEZ \xB7 SIN AVISAR"],"avisar","p",[0,2.15,-.4],2,1]]);return{update:(o,a,l)=>r(o,l)}},c:[[0,2.1,5.2],[0,1,-.5],[0,1.55,3],[0,1.1,-.5]],range:4}});te(91,(n,e)=>{let t=Y(e,"mensaje"),i=Y(e,"risa"),s=Y(e,"primera");return{...Ye,atores:[Rt({eyes:[[0,"look"],[t,"wide"]]}),kt({eyes:[[0,"look"]],talk:[[0,n]],pose:zn})],extra:(r,o,a)=>{pt(r);let l=Za(r,4),c=Ne(r,e,[[["TENGO QUE","PREGUNTARTE UNA COSA"],0,"w",[.6,2.1,-.3],1.6],[["EL MENSAJE A MARCOS\u2026"],t-.3,"w",[.6,2.05,-.3],1.7],[["LO DE MI RISA"],i-.3,"p",[.6,2.05,-.3],1.3],[["LO DE AYUDAR"],s-.5,"p",[.6,2.05,-.3],1.2,1]]);return{update:(h,d,u)=>{l(h,[-.25,1.55,-.4,.1],h>t?1:0),c(h,u)}}},c:Tn,range:4}});te(92,(n,e)=>{let t=Y(e,"eso",1.5);return{...Ye,atores:[kt({eyes:[[0,"look"]],talk:[[Y(e,"eso"),n]],pose:i=>i.pose({head:-6})})],extra:i=>{pt(i);let s=lt(i,["ESO NO LO","DICE LA GENTE."],1.1,[.45,1.78,-.3],56),r=lt(i,["ESO LO HAS","VISTO T\xDA."],1.1,[.45,1.78,-.3],56);return{update:(o,a,l)=>{Q(s,o,Y(e,"eso")-.1,t-.1,l),Q(r,o,t-.1,99,l)}}},c:[[.45,1.5,1.9],[.45,1.35,-.5],[.45,1.48,1.5],[.45,1.35,-.5]],range:2.5}});te(93,(n,e)=>{let t=Y(e,"pajaro");return{...Ye,atores:[Rt({eyes:[[0,"flat"]],pose:i=>i.pose({armL:[8,6],armR:[55,50]})}),kt({eyes:[[0,"look"]]}),{tipo:"paloma",s:.8,x:1.5,z:.2,move:i=>{let s=Ve(t,t+.8,i),r=Ve(t+1.6,n,i);return[jt(1.6,-.1,s)-r*1.5,.5*Ve(t+.8,t+1,i)*(1-r)+r*2.2,jt(.3,-.2,s)]}}],extra:(i,s,r)=>{pt(i);let o=Ya();o.scale.setScalar(.9),i.add(o);let a=Zt(i,["SILENCIO\u2026"],1.1,[0,2.15,-.4]),l=Xe(i,["\xA1TU MIGA!"],1,[0,2.15,-.4],Dn);return{update:(c,h,d)=>{qa(o,r[0],-.02),Q(a,c,0,t+.6,d),Q(l,c,t+1.6,99,d)}}},c:[[0,1.7,3.8],[0,1,-.4],[0,1.6,3.2],[0,1,-.4]],range:4}});te(94,(n,e)=>{let t=Y(e,"mientes")-.3;return{...Ye,atores:[Rt({eyes:[[0,"shut"],[t,"look"]],pose:(i,s)=>i.pose({bob:Math.sin(s*2)*.02})})],extra:i=>{pt(i);let s=Ne(i,e,[[["POR PRIMERA VEZ EN 3 A\xD1OS"],"primera","w",[-.45,1.95,-.4],2.1],[["NO MIENTES"],t,"y",[-.45,1.95,-.4],1.2,1]]),r=Yn(i,8);return{update:(o,a,l)=>{s(o,l),r(o,[-.45,1.3,-.3,.5],Ve(t,t+.5,o))}}},c:Ka,range:2.5}});te(95,(n,e)=>{let t=Y(e,"porque");return{...Ye,atores:[Rt({eyes:[[0,"look"]],talk:[[0,n]],pose:i=>i.pose({armL:[8,6],armR:[60,90]})}),kt({eyes:[[0,"look"],[t+.5,"wide"]]})],extra:(i,s,r)=>{pt(i);let o=gi(r[0]),a=lt(i,["S\xCD. LO HE VISTO YO."],1.3,[-.6,2,-.3],56),l=lt(i,["LLEVO DESDE PRIMERO","FIJ\xC1NDOME EN TI."],1.5,[-.5,2.05,-.3],54);return{update:(c,h,d)=>{o(.5),Q(a,c,0,t-.1,d),Q(l,c,t,99,d)}}},c:Tn,range:4}});te(96,(n,e)=>({...Ye,atores:[Rt({eyes:[[0,"look"],[Y(e,"esperas"),"shut"]],pose:(t,i)=>t.pose({armL:[40,60],armR:[40,60],bob:Math.abs(Math.sin(i*20))*.01})}),kt({eyes:[[0,"wide"]]})],extra:t=>{pt(t);let i=Ne(t,e,[[["NO DICE NADA"],.1,"w",[0,2.15,-.4],1.3],[["ESPERAS EL GOLPE"],"esperas","y",[0,2.15,-.4],1.6],[["QUE SE R\xCDA"],"ria","w",[0,2.15,-.4],1.1],[["QUE SE LEVANTE"],"levante","w",[0,2.15,-.4],1.4],[['"TE VEO COMO UN AMIGO"'],"siento","r",[0,2.15,-.4],2.2,1]]);return{update:(s,r,o)=>i(s,o)}},c:[[0,1.5,2.6],[0,1.15,-.5],[0,1.45,2],[0,1.15,-.5]],range:3,look:{exposure:.95,vig:.65}}));te(97,(n,e)=>({...Ye,atores:[Rt({eyes:[[0,"shut"],[.8,"look"]]}),kt({eyes:[[0,"down"]]})],extra:t=>{pt(t);let i=xs(t,["PERO NO."],1,[0,2.15,-.4]);return{update:(s,r,o)=>Q(i,s,.2,99,o)}},c:Tn,range:4}));te(98,(n,e)=>{let t=Y(e,"muy"),i=Y(e,"dice")+.3;return{...Ye,atores:[kt({eyes:[[0,"down"],[i,"look"]],talk:[[i,n]],pose:s=>s.pose({armL:[70,80],armR:[70,80]})})],extra:(s,r,o)=>{pt(s);let a=gi(o[0]),l=Xe(s,["MUY ROJA"],1.1,[.45,1.95,-.4],Wh),c=lt(s,["\xBFY POR QU\xC9 ME HAS","AYUDADO CON MARCOS?"],1.1,[.45,1.78,-.3],52);return{update:(h,d,u)=>{a(Ve(0,t+.3,h)*1),Q(l,h,t,i-.1,u),Q(c,h,i,99,u)}}},c:[[.45,1.5,1.9],[.45,1.35,-.5],[.45,1.48,1.5],[.45,1.35,-.5]],range:2.5}});te(99,(n,e)=>({...Ye,atores:[Rt({eyes:[[0,"happy"]],talk:[[0,n]]}),kt({eyes:[[0,"wide"]]})],extra:(t,i,s)=>{pt(t);let r=gi(s[1]),o=lt(t,["PORQUE ME LO","PEDISTE T\xDA."],1.2,[-.5,2,-.3],56);return{update:(a,l,c)=>{r(.9),Q(o,a,0,99,c)}}},c:Tn,range:4}));te(100,(n,e)=>{let t=Y(e,"idiota"),i=Y(e,"rie");return{...Ye,atores:[kt({eyes:[[0,"shut"],[i,"happy"]],talk:[[t-.4,t+.5]],pose:(s,r)=>r<i?s.pose({armL:[150,140],armR:[150,140]}):Ga(s,r)}),Rt({eyes:[[0,"look"],[i+.3,"happy"]]}),...ja().map((s,r)=>({...s,eyes:[[0,"look"],[i+1+r*.2,"happy"]],talk:void 0,pose:o=>o.pose({head:r<2?10:-10})}))],extra:(s,r,o)=>{pt(s);let a=gi(o[0]),l=lt(s,["SOY IDIOTA."],1,[.6,1.95,-.3],60),c=xs(s,["ESA RISA"],1,[.45,2.15,-.4]),h=wf(s,6),d=new I;return{update:(u,p,g)=>{a(.9),Q(l,u,t-.3,i-.1,g),Q(c,u,Y(e,"esa")-.1,99,g),o[0].head.getWorldPosition(d),h(u,d,g,u>i)}}},c:[[0,1.8,4.6],[0,1.1,-.5],[0,1.6,3.2],[.1,1.1,-.5]],range:4}});ri(101,["2021","preguntaron"],[n=>({amb:"gris",fov:30,k:1,atores:[],extra:e=>{let t=Xe(e,["EL \xDALTIMO DATO"],2.2,[0,1.7,-1],{size:84}),i=Yn(e,10);return{update:(s,r,o)=>{Q(t,s,0,99,o),i(s,[0,1.7,-.9,1.2])}}},c:[[0,1.7,3.4],[0,1.7,-1],[0,1.7,2.9],[0,1.7,-1]],range:3}),(n,e)=>({amb:"lab",fov:30,atores:[Mr(4,{x:-.4,z:-.6,eyes:[[0,"smug"]],talk:[[.8,n]],pose:zn}),Mr(6,{x:.9,z:-.9,eyes:[[0,"look"]],pose:Xa})],extra:t=>{let i=Xe(t,["DANU ANTHONY STINSON"],2,[-.4,2.2,-.5],Tr);return{update:(s,r,o)=>Q(i,s,Y(e,"danu")-.2,99,o)}},c:[[0,1.7,3.8],[0,1.4,-.7],[0,1.65,3.3],[0,1.4,-.7]],range:4}),(n,e)=>({amb:"gris",fov:34,k:1,atores:[...Array(10)].map((t,i)=>Wt(i,{x:-2.7+i%5*1.35,z:-.4-Math.floor(i/5)*1.1,eyes:[[0,"look"],[Y(e,"como"),"happy"]]})),extra:t=>{let i=Ne(t,e,[[["CASI 2.000 PERSONAS"],.1,"y",[0,2.55,-.2],1.9],[["UNIVERSITARIOS Y ADULTOS"],"universitarios","w",[0,2.55,-.2],2.2],[["\xBFC\xD3MO EMPEZ\xD3 VUESTRA RELACI\xD3N?"],"como","p",[0,2.55,-.2],2.8,1]]);return{update:(s,r,o)=>i(s,o)}},c:[[0,1.9,5.4],[0,1.4,-.8],[0,1.85,4.8],[0,1.4,-.8]],range:5})]);te(102,(n,e)=>{let t=Y(e,"amigos");return{amb:"gris",fov:30,k:1,atores:[],extra:i=>{let s=KE(i,1.7,[0,1.6,-1],.6666666666666666,"2 DE 3","EMPEZARON COMO AMIGOS"),r=Xe(i,["EMPEZARON SIENDO AMIGOS"],2.3,[0,2.65,-.9],Wh);return{update:(o,a,l)=>{s.scale.setScalar(Math.max(.01,Ve(0,.5,o))),s.rotation.z=(1-Ve(0,.8,o))*.6,Q(r,o,t-.5,99,l)}}},c:[[0,1.85,3.6],[0,1.85,-1],[0,1.8,3.2],[0,1.8,-1]],range:3}});te(103,(n,e)=>({...Ye,atores:[Rt({eyes:[[0,"happy"]]}),kt({eyes:[[0,"happy"]]})],extra:t=>{pt(t);let i=Ne(t,e,[[["\u2717 UN FLECHAZO"],"flechazo","r",[-1.2,2.3,-.4],1.4],[["\u2717 UNA CITA PERFECTA"],"cita","r",[-1.2,2.3,-.4],1.8],[["MUCHOS RECREOS"],"recreos","w",[1.2,2.35,-.4],1.5,1],[["MUCHAS CONVERSACIONES"],"conversaciones","w",[1.2,2,-.35],2,1],[["MUCHOS FAVORES"],"favores","p",[1.2,1.65,-.3],1.5,1]]);return{update:(s,r,o)=>i(s,o)}},c:[[0,1.6,3.8],[0,1.35,-.5],[0,1.55,3.3],[0,1.35,-.5]],range:4}));te(104,(n,e)=>{let t=Y(e,"desconocidos");return{amb:"lab",fov:30,atores:[Wt(1,{x:-.55,z:-.4,eyes:[[0,"look"],[t,"happy"]],pose:(i,s)=>i.pose({armL:[12,8],armR:[s>t?75+Math.sin(s*12)*6:12,10]})}),Wt(6,{x:.55,z:-.4,eyes:[[0,"look"],[t,"happy"]],pose:(i,s)=>i.pose({armL:[s>t?75+Math.sin(s*12)*6:12,10],armR:[12,8]})})],extra:i=>{let s=Ne(i,e,[[["LA MAYOR\xCDA DE LOS ESTUDIOS"],"mayoria","w",[0,2.3,-.3],2.3],[["DESCONOCIDOS \xB7 1\xAA VEZ"],t,"y",[0,2.3,-.3],2,1]]);return{update:(r,o,a)=>s(r,a)}},c:[[0,1.7,3.6],[0,1.4,-.4],[0,1.65,3.1],[0,1.4,-.4]],range:3}});te(105,(n,e)=>{let t=Y(e,"amigo");return{...Ye,atores:[Rt({eyes:[[0,"look"],[t,"happy"]]})],extra:i=>{pt(i);let s=Je("#FFE2A8",1.6,0);s.position.set(-.45,1.2,-.3),i.add(s);let r=Ne(i,e,[[["EL CAMINO M\xC1S COM\xDAN"],.2,"w",[-.4,1.9,-.4],1.6],[["EL AMIGO QUE ESTABA AH\xCD"],t-.2,"p",[-.4,1.9,-.4],1.8,1]]);return{update:(o,a,l)=>{s.material.opacity=Ve(t-.3,t+.6,o)*.7,r(o,l)}}},c:[[-.3,1.55,2.8],[-.4,1.3,-.5],[-.35,1.5,2.3],[-.4,1.3,-.5]],range:3}});te(106,(n,e)=>{let t=Y(e,"oye");return{...Ye,atores:[vt({x:.6,z:-.4,eyes:[[0,"look"],[t,"happy"]],talk:[[t,n]],pose:(i,s)=>s<t?i.pose({armL:[60,70],armR:[60,70]}):zn(i,s)}),at({x:-.5,z:-.4,eyes:[[0,"look"],[t+.8,"wide"]],move:i=>[jt(-2.8,-.5,Ve(.4,t,i)),0,-.4],pose:(i,s)=>s>.4&&s<t?i.walk(s):i.pose()})],extra:i=>{mi(i);let s=Xe(i,["SALIDA"],1,[2.2,2.6,-3.5],Tr),r=Ne(i,e,[[["MI\xC9RCOLES"],.1,"y",[-.7,2.4,-.4],1.1],[["TE ESPERA A LA SALIDA"],"espera","w",[-1,2.45,-.4],1.6]]),o=lt(i,["EL S\xC1BADO HAY","FERIA OTRA VEZ"],1.4,[.7,2.2,-.3],54);return{update:(a,l,c)=>{r(a,c),Q(o,a,t+.2,99,c)}}},c:[[0,1.7,4],[0,1.4,-.4],[0,1.65,3.4],[0,1.4,-.4]],range:4}});te(107,(n,e)=>{let t=Y(e,"solo");return{...Ye,atores:[at({x:-.4,z:-.4,eyes:[[0,"look"],[.6,"wide"],[t+.4,"heart"]],move:i=>[-.4-Math.sin(Ve(.3,.7,i)*Math.PI)*.12,0,-.4]}),vt({x:.4,z:-.4,eyes:[[0,"smug"],[t,"happy"]],talk:[[.9,n]],pose:(i,s)=>i.pose({lean:s<.9?14*Math.sin(Ve(.1,.9,s)*Math.PI):0,armL:[s<.9?50:12,30],armR:[12,8]})})],extra:(i,s,r)=>{mi(i);let o=gi(r[0]),a=Zt(i,["CODAZO"],.9,[-.1,2.2,-.3]),l=lt(i,["ESTA VEZ NO NECESITO","QUE ME AYUDES CON LA HORA"],1.7,[.4,2.25,-.3],46),c=lt(i,["SOLO QUE VENGAS."],1.3,[.4,2.2,-.3],58),h=ss(i,.3);return h.position.set(0,1.75,-.3),{update:(d,u,p)=>{o(Ve(t,t+.8,d)*.8),Q(a,d,.2,.9,p),Q(l,d,1,t-.1,p),Q(c,d,t,99,p),h.visible=d>t+.4,h.scale.setScalar(br(d,130)),yn(h,p)}}},c:[[0,1.6,3.2],[0,1.4,-.4],[0,1.55,2.7],[0,1.4,-.4]],range:3}});te(108,(n,e)=>{let t=Y(e,"eh");return{...Ye,atores:[at({x:-.6,z:-.4,eyes:[[0,"happy"],[t,"wide"]]}),vt({x:.2,z:-.4,eyes:[[0,"happy"],[t,"wide"]]}),Oi({x:1,z:.6,eyes:[[0,"smug"]],talk:[[t,n]],move:i=>[jt(3.6,1.2,Ve(0,t,i)),0,.6],pose:(i,s)=>{i.walk(s*(s<t?1:.2)),i.pose({armL:[12,8],armR:[40+Math.sin(s*2.2*Math.PI)*15,20],legL:s<t?[Math.sin(s*6.4)*15,0]:[0,0],legR:s<t?[-Math.sin(s*6.4)*15,0]:[0,0]})}})],extra:(i,s,r)=>{mi(i);let o=xr(i),a=lt(i,["\xA1EH! \xBFQU\xC9 MENSAJE","ERA ESE, AL FINAL?"],1.5,[1.4,2.35,.7],52);return{update:(l,c,h)=>{let d=Fs(r[2]);o.position.set(d.x,Ja(l),d.z+.15),Q(a,l,t,99,h)}}},c:[[.2,1.7,4.2],[.2,1.4,-.2],[.2,1.65,3.6],[.2,1.4,-.2]],range:4}});te(109,(n,e)=>{let t=Y(e,"nada");return{...Ye,atores:[at({x:-.4,z:-.4,eyes:[[0,"look"],[t+.5,"happy"]],talk:[[t,t+.6]]}),vt({x:.4,z:-.4,eyes:[[0,"look"],[t+.5,"happy"]],talk:[[t,t+.6]]})],extra:i=>{mi(i);let s=Ne(i,e,[[["ELLA TE MIRA"],.1,"w",[.4,2.15,-.3],1.2],[["T\xDA LA MIRAS"],"tu","w",[-.4,2.15,-.3],1.1],[["A LA VEZ\u2026"],"vez","y",[0,2.1,-.3],1.1]]),r=lt(i,["NADA."],.7,[-.55,2,-.3],70),o=lt(i,["NADA."],.7,[.55,2,-.3],70),a=Yn(i,12,"#FFB0C0");return{update:(l,c,h)=>{s(l,h),Q(r,l,t,99,h),Q(o,l,t,99,h),a(l,[0,1.6,-.3,.8],Ve(t+.4,t+1,l))}}},c:[[0,1.55,2.8],[0,1.4,-.4],[0,1.5,2.3],[0,1.4,-.4]],range:3}});te(110,(n,e)=>{let t=Y(e,"le",2);return{...Is,atores:[at({x:-.4,z:-.2,eyes:[[0,"happy"]]}),vt({x:.4,z:-.2,eyes:[[0,"happy"]],pose:i=>i.pose({lean:6})})],extra:i=>{let s=Cr(i),r=Ne(i,e,[[["NO LE AYUDASTE A CONQUISTAR A OTRO"],.2,"w",[0,2.4,-.2],2.9],[["LE AYUDASTE A VER LO QUE TEN\xCDA DELANTE"],"ver","p",[0,2.4,-.2],3,1]]);return{update:(o,a,l)=>{s(o),r(o,l)}}},c:[[0,2.4,5.4],[0,1.6,-.3],[0,1.7,3.8],[0,1.5,-.3]],range:4,look:{exposure:1.02,bloom:.5}}});te(111,(n,e)=>{let t=Y(e,"verdad");return{...Is,atores:[at({x:-.35,z:-.2,eyes:[[0,"happy"]],pose:Mf(1)}),vt({x:.35,z:-.2,eyes:[[0,"happy"]],pose:Mf(-1)})],extra:i=>{let s=Cr(i),r=Yn(i,14,"#FFE27A"),o=Ne(i,e,[[["M\xC1S MIEDO QUE CUALQUIER RECHAZO"],.3,"w",[0,2.3,-.2],2.7],[["DECIR LA VERDAD"],t-.2,"y",[0,2.3,-.2],1.7,1]]);return{update:(a,l,c)=>{s(a),r(a,[0,2,-.3,1],Ve(t,t+.6,a)),o(a,c)}}},c:[[0,1.6,3.4],[0,1.45,-.2],[0,1.55,2.9],[0,1.45,-.2]],range:3,look:{exposure:1.02,bloom:.5}}});te(112,(n,e)=>{let t=Y(e,"leo");return{amb:"gris",fov:30,k:1,atores:[at({x:0,z:-.4,eyes:[[0,"look"],[t,"happy"]],pose:(i,s)=>s>t?Vh(i,s):i.pose({armL:[40,60],armR:[40,60]})})],extra:i=>{let s=Ne(i,e,[[["\xBFQU\xC9 HABR\xCDAS HECHO?"],.1,"y",[0,2.4,-.3],2],[["\xBFLE HABR\xCDAS","AYUDADO\u2026"],"ayudado","w",[-1.05,2,-.3],1.3,1],[["\u2026O LE HABR\xCDAS DICHO","LA VERDAD?"],"dicho","p",[1.2,1.5,-.3],1.4,1],[["TE LEO EN LOS COMENTARIOS"],t-.2,"y",[0,1,.1],2.4,{h:200}]]);return{update:(r,o,a)=>s(r,a)}},c:[[0,1.7,4],[0,1.5,-.4],[0,1.65,3.5],[0,1.5,-.4]],range:3}});function ry(n){n.traverse(e=>{e.geometry&&e.geometry.dispose();let t=e.material;(Array.isArray(t)?t:t?[t]:[]).forEach(i=>{for(let s in i){let r=i[s];r&&r.isTexture&&r.dispose()}i.dispose()}),e.shadow&&e.shadow.map&&e.shadow.map.dispose()})}window.__hf=window.__hf||{};window.__hf.buildReady=window.__hf.buildReady||{};window.__hf.buildReady.film=(async()=>{await Promise.all(["900 40px Fraunces","700 40px Caveat","700 40px Inter","800 40px Inter","600 40px Inter","700 40px 'IBM Plex Mono'","600 40px 'IBM Plex Mono'"].map(r=>document.fonts.load(r))).catch(()=>{});let n=new wa(document.getElementById("film3d")),e=-1,t=null,i=r=>{let o=Sr.findIndex(([,a,l])=>r>=a&&r<l);return o<0&&(o=Sr.length-1),o},s=n.render.bind(n);n.render=r=>{let o=i(r);if(o!==e){t&&(ry(t.scene),n.r.renderLists.dispose()),window.__srv=1+o*7919;let[a,l,c]=Sr[o];t=a(l,c),n.shots=[t],e=o}s(r)},window.addEventListener("hf-seek",r=>n.render(r.detail.time)),n.render(0)})();})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
