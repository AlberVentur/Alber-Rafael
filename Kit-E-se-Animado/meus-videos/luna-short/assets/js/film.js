var __srv=1;function __sr(){__srv=(__srv*16807)%2147483647;return __srv/2147483647}function __noRaf(){return 0}function __noCaf(){}
(()=>{var bc="170";var Ou=0,fh=1,zu=2;var bd=1,wc=2,si=3,xi=0,Ve=1,he=2,Xn=0,Ri=1,dn=2,ph=3,mh=4,ku=5,Yi=100,Gu=101,Vu=102,Wu=103,Xu=104,qu=200,Yu=201,Zu=202,$u=203,tl=204,el=205,Ju=206,Ku=207,Qu=208,ju=209,tf=210,ef=211,nf=212,sf=213,rf=214,nl=0,il=1,sl=2,Ds=3,rl=4,ol=5,al=6,ll=7,wd=0,of=1,af=2,qn=0,lf=1,cf=2,hf=3,df=4,uf=5,ff=6,pf=7;var Rd=300,Ls=301,Us=302,cl=303,hl=304,Yo=306,$e=1e3,$i=1001,dl=1002,Mn=1003,mf=1004;var Br=1005;var Vn=1006,ya=1007;var Ji=1008;var ci=1009,xd=1010,Cd=1011,Er=1012,Rc=1013,hi=1014,Wn=1015,mn=1016,xc=1017,Cc=1018,Hs=1020,Fd=35902,Pd=1021,Id=1022,Un=1023,Dd=1024,Ld=1025,Fs=1026,Bs=1027,Fc=1028,Pc=1029,Ud=1030,Ic=1031;var Dc=1033,mo=33776,go=33777,Eo=33778,yo=33779,ul=35840,fl=35841,pl=35842,ml=35843,gl=36196,El=37492,yl=37496,_l=37808,vl=37809,Al=37810,Ml=37811,Sl=37812,Tl=37813,bl=37814,wl=37815,Rl=37816,xl=37817,Cl=37818,Fl=37819,Pl=37820,Il=37821,_o=36492,Dl=36494,Ll=36495,Hd=36283,Ul=36284,Hl=36285,Bl=36286;var vo=2300,Nl=2301,_a=2302,gh=2400,Eh=2401,yh=2402;var gf=3200,qs=3201;var Bd=0,Ef=1,bi="",Fe="srgb",Di="srgb-linear",Zo="linear",Ee="srgb";var cs=7680;var _h=519,yf=512,_f=513,vf=514,Nd=515,Af=516,Mf=517,Sf=518,Tf=519,Ol=35044;var vh="300 es",oi=2e3,Ao=2001,Ci=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let i=this._listeners[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},Qe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var va=Math.PI/180,Mo=180/Math.PI;function ai(){let n=__sr()*4294967295|0,t=__sr()*4294967295|0,e=__sr()*4294967295|0,i=__sr()*4294967295|0;return(Qe[n&255]+Qe[n>>8&255]+Qe[n>>16&255]+Qe[n>>24&255]+"-"+Qe[t&255]+Qe[t>>8&255]+"-"+Qe[t>>16&15|64]+Qe[t>>24&255]+"-"+Qe[e&63|128]+Qe[e>>8&255]+"-"+Qe[e>>16&255]+Qe[e>>24&255]+Qe[i&255]+Qe[i>>8&255]+Qe[i>>16&255]+Qe[i>>24&255]).toLowerCase()}function tn(n,t,e){return Math.max(t,Math.min(e,n))}function bf(n,t){return(n%t+t)%t}function Aa(n,t,e){return(1-e)*n+e*t}function Gn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function ye(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var et=class n{constructor(t=0,e=0){n.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(tn(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=__sr(),this.y=__sr(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Wt=class n{constructor(t,e,i,s,r,o,a,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c)}set(t,e,i,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],d=i[7],u=i[2],p=i[5],g=i[8],E=s[0],m=s[3],f=s[6],v=s[1],_=s[4],y=s[7],I=s[2],C=s[5],b=s[8];return r[0]=o*E+a*v+l*I,r[3]=o*m+a*_+l*C,r[6]=o*f+a*y+l*b,r[1]=c*E+h*v+d*I,r[4]=c*m+h*_+d*C,r[7]=c*f+h*y+d*b,r[2]=u*E+p*v+g*I,r[5]=u*m+p*_+g*C,r[8]=u*f+p*y+g*b,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=h*o-a*c,u=a*l-h*r,p=c*r-o*l,g=e*d+i*u+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let E=1/g;return t[0]=d*E,t[1]=(s*c-h*i)*E,t[2]=(a*i-s*o)*E,t[3]=u*E,t[4]=(h*e-s*l)*E,t[5]=(s*r-a*e)*E,t[6]=p*E,t[7]=(i*l-c*e)*E,t[8]=(o*e-i*r)*E,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Ma.makeScale(t,e)),this}rotate(t){return this.premultiply(Ma.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ma.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Ma=new Wt;function Od(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function So(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function wf(){let n=So("canvas");return n.style.display="block",n}var Ah={};function dr(n){n in Ah||(Ah[n]=!0,console.warn(n))}function Rf(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}function xf(n){let t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Cf(n){let t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var ae={enabled:!0,workingColorSpace:Di,spaces:{},convert:function(n,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===Ee&&(n.r=li(n.r),n.g=li(n.g),n.b=li(n.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(n.applyMatrix3(this.spaces[t].toXYZ),n.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===Ee&&(n.r=Ps(n.r),n.g=Ps(n.g),n.b=Ps(n.b))),n},fromWorkingColorSpace:function(n,t){return this.convert(n,this.workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===bi?Zo:this.spaces[n].transfer},getLuminanceCoefficients:function(n,t=this.workingColorSpace){return n.fromArray(this.spaces[t].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,t,e){return n.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function li(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ps(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Mh=[.64,.33,.3,.6,.15,.06],Sh=[.2126,.7152,.0722],Th=[.3127,.329],bh=new Wt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),wh=new Wt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ae.define({[Di]:{primaries:Mh,whitePoint:Th,transfer:Zo,toXYZ:bh,fromXYZ:wh,luminanceCoefficients:Sh,workingColorSpaceConfig:{unpackColorSpace:Fe},outputColorSpaceConfig:{drawingBufferColorSpace:Fe}},[Fe]:{primaries:Mh,whitePoint:Th,transfer:Ee,toXYZ:bh,fromXYZ:wh,luminanceCoefficients:Sh,outputColorSpaceConfig:{drawingBufferColorSpace:Fe}}});var hs,zl=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{hs===void 0&&(hs=So("canvas")),hs.width=t.width,hs.height=t.height;let i=hs.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=hs}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=So("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=li(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(li(e[i]/255)*255):e[i]=li(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Ff=0,To=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ff++}),this.uuid=ai(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Sa(s[o].image)):r.push(Sa(s[o]))}else r=Sa(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function Sa(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?zl.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Pf=0,un=class n extends Ci{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=$i,s=$i,r=Vn,o=Ji,a=Un,l=ci,c=n.DEFAULT_ANISOTROPY,h=bi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Pf++}),this.uuid=ai(),this.name="",this.source=new To(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new et(0,0),this.repeat=new et(1,1),this.center=new et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Wt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Rd)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case $e:t.x=t.x-Math.floor(t.x);break;case $i:t.x=t.x<0?0:1;break;case dl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case $e:t.y=t.y-Math.floor(t.y);break;case $i:t.y=t.y<0?0:1;break;case dl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};un.DEFAULT_IMAGE=null;un.DEFAULT_MAPPING=Rd;un.DEFAULT_ANISOTROPY=1;var _e=class n{constructor(t=0,e=0,i=0,s=1){n.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],p=l[5],g=l[9],E=l[2],m=l[6],f=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-E)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+E)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let _=(c+1)/2,y=(p+1)/2,I=(f+1)/2,C=(h+u)/4,b=(d+E)/4,F=(g+m)/4;return _>y&&_>I?_<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(_),s=C/i,r=b/i):y>I?y<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),i=C/s,r=F/s):I<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(I),i=b/r,s=F/r),this.set(i,s,r,e),this}let v=Math.sqrt((m-g)*(m-g)+(d-E)*(d-E)+(u-h)*(u-h));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(d-E)/v,this.z=(u-h)/v,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=__sr(),this.y=__sr(),this.z=__sr(),this.w=__sr(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},kl=class extends Ci{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new _e(0,0,t,e),this.scissorTest=!1,this.viewport=new _e(0,0,t,e);let s={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Vn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let r=new un(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new To(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},We=class extends kl{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},bo=class extends un{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Mn,this.minFilter=Mn,this.wrapR=$i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Gl=class extends un{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Mn,this.minFilter=Mn,this.wrapR=$i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Fi=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],d=i[s+3],u=r[o+0],p=r[o+1],g=r[o+2],E=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d;return}if(a===1){t[e+0]=u,t[e+1]=p,t[e+2]=g,t[e+3]=E;return}if(d!==E||l!==u||c!==p||h!==g){let m=1-a,f=l*u+c*p+h*g+d*E,v=f>=0?1:-1,_=1-f*f;if(_>Number.EPSILON){let I=Math.sqrt(_),C=Math.atan2(I,f*v);m=Math.sin(m*C)/I,a=Math.sin(a*C)/I}let y=a*v;if(l=l*m+u*y,c=c*m+p*y,h=h*m+g*y,d=d*m+E*y,m===1-a){let I=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=I,c*=I,h*=I,d*=I}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],d=r[o],u=r[o+1],p=r[o+2],g=r[o+3];return t[e]=a*g+h*d+l*p-c*u,t[e+1]=l*g+h*u+c*d-a*p,t[e+2]=c*g+h*p+a*u-l*d,t[e+3]=h*g-a*d-l*u-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),d=a(r/2),u=l(i/2),p=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=u*h*d+c*p*g,this._y=c*p*d-u*h*g,this._z=c*h*g+u*p*d,this._w=c*h*d-u*p*g;break;case"YXZ":this._x=u*h*d+c*p*g,this._y=c*p*d-u*h*g,this._z=c*h*g-u*p*d,this._w=c*h*d+u*p*g;break;case"ZXY":this._x=u*h*d-c*p*g,this._y=c*p*d+u*h*g,this._z=c*h*g+u*p*d,this._w=c*h*d-u*p*g;break;case"ZYX":this._x=u*h*d-c*p*g,this._y=c*p*d+u*h*g,this._z=c*h*g-u*p*d,this._w=c*h*d+u*p*g;break;case"YZX":this._x=u*h*d+c*p*g,this._y=c*p*d+u*h*g,this._z=c*h*g-u*p*d,this._w=c*h*d-u*p*g;break;case"XZY":this._x=u*h*d-c*p*g,this._y=c*p*d-u*h*g,this._z=c*h*g+u*p*d,this._w=c*h*d+u*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=i+a+d;if(u>0){let p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(i>a&&i>d){let p=2*Math.sqrt(1+i-a-d);this._w=(h-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>d){let p=2*Math.sqrt(1+a-i-d);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+d-i-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(tn(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let i=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+i*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let p=1-e;return this._w=p*o+e*this._w,this._x=p*i+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),d=Math.sin((1-e)*h)/c,u=Math.sin(e*h)/c;return this._w=o*d+this._w*u,this._x=i*d+this._x*u,this._y=s*d+this._y*u,this._z=r*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*__sr(),e=2*Math.PI*__sr(),i=__sr(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},D=class n{constructor(t=0,e=0,i=0){n.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Rh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Rh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*i),h=2*(a*e-r*s),d=2*(r*i-o*e);return this.x=e+l*c+o*d-a*h,this.y=i+l*h+a*c-r*d,this.z=s+l*d+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Ta.copy(this).projectOnVector(t),this.sub(Ta)}reflect(t){return this.sub(Ta.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(tn(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=__sr(),this.y=__sr(),this.z=__sr(),this}randomDirection(){let t=__sr()*Math.PI*2,e=__sr()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ta=new D,Rh=new Fi,di=class{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(In.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(In.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=In.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,In):In.fromBufferAttribute(r,o),In.applyMatrix4(t.matrixWorld),this.expandByPoint(In);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Nr.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Nr.copy(i.boundingBox)),Nr.applyMatrix4(t.matrixWorld),this.union(Nr)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,In),In.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(er),Or.subVectors(this.max,er),ds.subVectors(t.a,er),us.subVectors(t.b,er),fs.subVectors(t.c,er),_i.subVectors(us,ds),vi.subVectors(fs,us),zi.subVectors(ds,fs);let e=[0,-_i.z,_i.y,0,-vi.z,vi.y,0,-zi.z,zi.y,_i.z,0,-_i.x,vi.z,0,-vi.x,zi.z,0,-zi.x,-_i.y,_i.x,0,-vi.y,vi.x,0,-zi.y,zi.x,0];return!ba(e,ds,us,fs,Or)||(e=[1,0,0,0,1,0,0,0,1],!ba(e,ds,us,fs,Or))?!1:(zr.crossVectors(_i,vi),e=[zr.x,zr.y,zr.z],ba(e,ds,us,fs,Or))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,In).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(In).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(jn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),jn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),jn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),jn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),jn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),jn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),jn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),jn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(jn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},jn=[new D,new D,new D,new D,new D,new D,new D,new D],In=new D,Nr=new di,ds=new D,us=new D,fs=new D,_i=new D,vi=new D,zi=new D,er=new D,Or=new D,zr=new D,ki=new D;function ba(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){ki.fromArray(n,r);let a=s.x*Math.abs(ki.x)+s.y*Math.abs(ki.y)+s.z*Math.abs(ki.z),l=t.dot(ki),c=e.dot(ki),h=i.dot(ki);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var If=new di,nr=new D,wa=new D,Pi=class{constructor(t=new D,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):If.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;nr.subVectors(t,this.center);let e=nr.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(nr,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(wa.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(nr.copy(t.center).add(wa)),this.expandByPoint(nr.copy(t.center).sub(wa))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},ti=new D,Ra=new D,kr=new D,Ai=new D,xa=new D,Gr=new D,Ca=new D,wo=class{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ti)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=ti.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ti.copy(this.origin).addScaledVector(this.direction,e),ti.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){Ra.copy(t).add(e).multiplyScalar(.5),kr.copy(e).sub(t).normalize(),Ai.copy(this.origin).sub(Ra);let r=t.distanceTo(e)*.5,o=-this.direction.dot(kr),a=Ai.dot(this.direction),l=-Ai.dot(kr),c=Ai.lengthSq(),h=Math.abs(1-o*o),d,u,p,g;if(h>0)if(d=o*l-a,u=o*a-l,g=r*h,d>=0)if(u>=-g)if(u<=g){let E=1/h;d*=E,u*=E,p=d*(d+o*u+2*a)+u*(o*d+u+2*l)+c}else u=r,d=Math.max(0,-(o*u+a)),p=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(o*u+a)),p=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-l),r),p=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-r,-l),r),p=u*(u+2*l)+c):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-l),r),p=-d*d+u*(u+2*l)+c);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),p=-d*d+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Ra).addScaledVector(kr,u),p}intersectSphere(t,e){ti.subVectors(t.center,this.origin);let i=ti.dot(this.direction),s=ti.dot(ti)-i*i,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(i=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(i=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(a=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,ti)!==null}intersectTriangle(t,e,i,s,r){xa.subVectors(e,t),Gr.subVectors(i,t),Ca.crossVectors(xa,Gr);let o=this.direction.dot(Ca),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ai.subVectors(this.origin,t);let l=a*this.direction.dot(Gr.crossVectors(Ai,Gr));if(l<0)return null;let c=a*this.direction.dot(xa.cross(Ai));if(c<0||l+c>o)return null;let h=-a*Ai.dot(Ca);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ve=class n{constructor(t,e,i,s,r,o,a,l,c,h,d,u,p,g,E,m){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c,h,d,u,p,g,E,m)}set(t,e,i,s,r,o,a,l,c,h,d,u,p,g,E,m){let f=this.elements;return f[0]=t,f[4]=e,f[8]=i,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=h,f[10]=d,f[14]=u,f[3]=p,f[7]=g,f[11]=E,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,i=t.elements,s=1/ps.setFromMatrixColumn(t,0).length(),r=1/ps.setFromMatrixColumn(t,1).length(),o=1/ps.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let u=o*h,p=o*d,g=a*h,E=a*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=p+g*c,e[5]=u-E*c,e[9]=-a*l,e[2]=E-u*c,e[6]=g+p*c,e[10]=o*l}else if(t.order==="YXZ"){let u=l*h,p=l*d,g=c*h,E=c*d;e[0]=u+E*a,e[4]=g*a-p,e[8]=o*c,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=p*a-g,e[6]=E+u*a,e[10]=o*l}else if(t.order==="ZXY"){let u=l*h,p=l*d,g=c*h,E=c*d;e[0]=u-E*a,e[4]=-o*d,e[8]=g+p*a,e[1]=p+g*a,e[5]=o*h,e[9]=E-u*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let u=o*h,p=o*d,g=a*h,E=a*d;e[0]=l*h,e[4]=g*c-p,e[8]=u*c+E,e[1]=l*d,e[5]=E*c+u,e[9]=p*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let u=o*l,p=o*c,g=a*l,E=a*c;e[0]=l*h,e[4]=E-u*d,e[8]=g*d+p,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=p*d+g,e[10]=u-E*d}else if(t.order==="XZY"){let u=o*l,p=o*c,g=a*l,E=a*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+E,e[5]=o*h,e[9]=p*d-g,e[2]=g*d-p,e[6]=a*h,e[10]=E*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Df,t,Lf)}lookAt(t,e,i){let s=this.elements;return vn.subVectors(t,e),vn.lengthSq()===0&&(vn.z=1),vn.normalize(),Mi.crossVectors(i,vn),Mi.lengthSq()===0&&(Math.abs(i.z)===1?vn.x+=1e-4:vn.z+=1e-4,vn.normalize(),Mi.crossVectors(i,vn)),Mi.normalize(),Vr.crossVectors(vn,Mi),s[0]=Mi.x,s[4]=Vr.x,s[8]=vn.x,s[1]=Mi.y,s[5]=Vr.y,s[9]=vn.y,s[2]=Mi.z,s[6]=Vr.z,s[10]=vn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],d=i[5],u=i[9],p=i[13],g=i[2],E=i[6],m=i[10],f=i[14],v=i[3],_=i[7],y=i[11],I=i[15],C=s[0],b=s[4],F=s[8],S=s[12],A=s[1],P=s[5],N=s[9],O=s[13],W=s[2],Q=s[6],Y=s[10],st=s[14],q=s[3],ht=s[7],Et=s[11],Dt=s[15];return r[0]=o*C+a*A+l*W+c*q,r[4]=o*b+a*P+l*Q+c*ht,r[8]=o*F+a*N+l*Y+c*Et,r[12]=o*S+a*O+l*st+c*Dt,r[1]=h*C+d*A+u*W+p*q,r[5]=h*b+d*P+u*Q+p*ht,r[9]=h*F+d*N+u*Y+p*Et,r[13]=h*S+d*O+u*st+p*Dt,r[2]=g*C+E*A+m*W+f*q,r[6]=g*b+E*P+m*Q+f*ht,r[10]=g*F+E*N+m*Y+f*Et,r[14]=g*S+E*O+m*st+f*Dt,r[3]=v*C+_*A+y*W+I*q,r[7]=v*b+_*P+y*Q+I*ht,r[11]=v*F+_*N+y*Y+I*Et,r[15]=v*S+_*O+y*st+I*Dt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],p=t[14],g=t[3],E=t[7],m=t[11],f=t[15];return g*(+r*l*d-s*c*d-r*a*u+i*c*u+s*a*p-i*l*p)+E*(+e*l*p-e*c*u+r*o*u-s*o*p+s*c*h-r*l*h)+m*(+e*c*d-e*a*p-r*o*d+i*o*p+r*a*h-i*c*h)+f*(-s*a*h-e*l*d+e*a*u+s*o*d-i*o*u+i*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],p=t[11],g=t[12],E=t[13],m=t[14],f=t[15],v=d*m*c-E*u*c+E*l*p-a*m*p-d*l*f+a*u*f,_=g*u*c-h*m*c-g*l*p+o*m*p+h*l*f-o*u*f,y=h*E*c-g*d*c+g*a*p-o*E*p-h*a*f+o*d*f,I=g*d*l-h*E*l-g*a*u+o*E*u+h*a*m-o*d*m,C=e*v+i*_+s*y+r*I;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let b=1/C;return t[0]=v*b,t[1]=(E*u*r-d*m*r-E*s*p+i*m*p+d*s*f-i*u*f)*b,t[2]=(a*m*r-E*l*r+E*s*c-i*m*c-a*s*f+i*l*f)*b,t[3]=(d*l*r-a*u*r-d*s*c+i*u*c+a*s*p-i*l*p)*b,t[4]=_*b,t[5]=(h*m*r-g*u*r+g*s*p-e*m*p-h*s*f+e*u*f)*b,t[6]=(g*l*r-o*m*r-g*s*c+e*m*c+o*s*f-e*l*f)*b,t[7]=(o*u*r-h*l*r+h*s*c-e*u*c-o*s*p+e*l*p)*b,t[8]=y*b,t[9]=(g*d*r-h*E*r-g*i*p+e*E*p+h*i*f-e*d*f)*b,t[10]=(o*E*r-g*a*r+g*i*c-e*E*c-o*i*f+e*a*f)*b,t[11]=(h*a*r-o*d*r-h*i*c+e*d*c+o*i*p-e*a*p)*b,t[12]=I*b,t[13]=(h*E*s-g*d*s+g*i*u-e*E*u-h*i*m+e*d*m)*b,t[14]=(g*a*s-o*E*s-g*i*l+e*E*l+o*i*m-e*a*m)*b,t[15]=(o*d*s-h*a*s+h*i*l-e*d*l-o*i*u+e*a*u)*b,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,d=a+a,u=r*c,p=r*h,g=r*d,E=o*h,m=o*d,f=a*d,v=l*c,_=l*h,y=l*d,I=i.x,C=i.y,b=i.z;return s[0]=(1-(E+f))*I,s[1]=(p+y)*I,s[2]=(g-_)*I,s[3]=0,s[4]=(p-y)*C,s[5]=(1-(u+f))*C,s[6]=(m+v)*C,s[7]=0,s[8]=(g+_)*b,s[9]=(m-v)*b,s[10]=(1-(u+E))*b,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements,r=ps.set(s[0],s[1],s[2]).length(),o=ps.set(s[4],s[5],s[6]).length(),a=ps.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Dn.copy(this);let c=1/r,h=1/o,d=1/a;return Dn.elements[0]*=c,Dn.elements[1]*=c,Dn.elements[2]*=c,Dn.elements[4]*=h,Dn.elements[5]*=h,Dn.elements[6]*=h,Dn.elements[8]*=d,Dn.elements[9]*=d,Dn.elements[10]*=d,e.setFromRotationMatrix(Dn),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,s,r,o,a=oi){let l=this.elements,c=2*r/(e-t),h=2*r/(i-s),d=(e+t)/(e-t),u=(i+s)/(i-s),p,g;if(a===oi)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Ao)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=oi){let l=this.elements,c=1/(e-t),h=1/(i-s),d=1/(o-r),u=(e+t)*c,p=(i+s)*h,g,E;if(a===oi)g=(o+r)*d,E=-2*d;else if(a===Ao)g=r*d,E=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=E,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},ps=new D,Dn=new ve,Df=new D(0,0,0),Lf=new D(1,1,1),Mi=new D,Vr=new D,vn=new D,xh=new ve,Ch=new Fi,Yn=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(tn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-tn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(tn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-tn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(tn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-tn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return xh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(xh,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ch.setFromEuler(this),this.setFromQuaternion(Ch,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Yn.DEFAULT_ORDER="XYZ";var Ro=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Uf=0,Fh=new D,ms=new Fi,ei=new ve,Wr=new D,ir=new D,Hf=new D,Bf=new Fi,Ph=new D(1,0,0),Ih=new D(0,1,0),Dh=new D(0,0,1),Lh={type:"added"},Nf={type:"removed"},gs={type:"childadded",child:null},Fa={type:"childremoved",child:null},Be=class n extends Ci{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Uf++}),this.uuid=ai(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new D,e=new Yn,i=new Fi,s=new D(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ve},normalMatrix:{value:new Wt}}),this.matrix=new ve,this.matrixWorld=new ve,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ro,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ms.setFromAxisAngle(t,e),this.quaternion.multiply(ms),this}rotateOnWorldAxis(t,e){return ms.setFromAxisAngle(t,e),this.quaternion.premultiply(ms),this}rotateX(t){return this.rotateOnAxis(Ph,t)}rotateY(t){return this.rotateOnAxis(Ih,t)}rotateZ(t){return this.rotateOnAxis(Dh,t)}translateOnAxis(t,e){return Fh.copy(t).applyQuaternion(this.quaternion),this.position.add(Fh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ph,t)}translateY(t){return this.translateOnAxis(Ih,t)}translateZ(t){return this.translateOnAxis(Dh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ei.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Wr.copy(t):Wr.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),ir.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ei.lookAt(ir,Wr,this.up):ei.lookAt(Wr,ir,this.up),this.quaternion.setFromRotationMatrix(ei),s&&(ei.extractRotation(s.matrixWorld),ms.setFromRotationMatrix(ei),this.quaternion.premultiply(ms.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Lh),gs.child=t,this.dispatchEvent(gs),gs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Nf),Fa.child=t,this.dispatchEvent(Fa),Fa.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ei.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ei.multiply(t.parent.matrixWorld)),t.applyMatrix4(ei),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Lh),gs.child=t,this.dispatchEvent(gs),gs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ir,t,Hf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ir,Bf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),d=o(t.shapes),u=o(t.skeletons),p=o(t.animations),g=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}};Be.DEFAULT_UP=new D(0,1,0);Be.DEFAULT_MATRIX_AUTO_UPDATE=!0;Be.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ln=new D,ni=new D,Pa=new D,ii=new D,Es=new D,ys=new D,Uh=new D,Ia=new D,Da=new D,La=new D,Ua=new _e,Ha=new _e,Ba=new _e,wi=class n{constructor(t=new D,e=new D,i=new D){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),Ln.subVectors(t,e),s.cross(Ln);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){Ln.subVectors(s,e),ni.subVectors(i,e),Pa.subVectors(t,e);let o=Ln.dot(Ln),a=Ln.dot(ni),l=Ln.dot(Pa),c=ni.dot(ni),h=ni.dot(Pa),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let u=1/d,p=(c*l-a*h)*u,g=(o*h-a*l)*u;return r.set(1-p-g,g,p)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,ii)===null?!1:ii.x>=0&&ii.y>=0&&ii.x+ii.y<=1}static getInterpolation(t,e,i,s,r,o,a,l){return this.getBarycoord(t,e,i,s,ii)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ii.x),l.addScaledVector(o,ii.y),l.addScaledVector(a,ii.z),l)}static getInterpolatedAttribute(t,e,i,s,r,o){return Ua.setScalar(0),Ha.setScalar(0),Ba.setScalar(0),Ua.fromBufferAttribute(t,e),Ha.fromBufferAttribute(t,i),Ba.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Ua,r.x),o.addScaledVector(Ha,r.y),o.addScaledVector(Ba,r.z),o}static isFrontFacing(t,e,i,s){return Ln.subVectors(i,e),ni.subVectors(t,e),Ln.cross(ni).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ln.subVectors(this.c,this.b),ni.subVectors(this.a,this.b),Ln.cross(ni).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,o,a;Es.subVectors(s,i),ys.subVectors(r,i),Ia.subVectors(t,i);let l=Es.dot(Ia),c=ys.dot(Ia);if(l<=0&&c<=0)return e.copy(i);Da.subVectors(t,s);let h=Es.dot(Da),d=ys.dot(Da);if(h>=0&&d<=h)return e.copy(s);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(i).addScaledVector(Es,o);La.subVectors(t,r);let p=Es.dot(La),g=ys.dot(La);if(g>=0&&p<=g)return e.copy(r);let E=p*c-l*g;if(E<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(i).addScaledVector(ys,a);let m=h*g-p*d;if(m<=0&&d-h>=0&&p-g>=0)return Uh.subVectors(r,s),a=(d-h)/(d-h+(p-g)),e.copy(s).addScaledVector(Uh,a);let f=1/(m+E+u);return o=E*f,a=u*f,e.copy(i).addScaledVector(Es,o).addScaledVector(ys,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},zd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Si={h:0,s:0,l:0},Xr={h:0,s:0,l:0};function Na(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var ot=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Fe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ae.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=ae.workingColorSpace){return this.r=t,this.g=e,this.b=i,ae.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=ae.workingColorSpace){if(t=bf(t,1),e=tn(e,0,1),i=tn(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=Na(o,r,t+1/3),this.g=Na(o,r,t),this.b=Na(o,r,t-1/3)}return ae.toWorkingColorSpace(this,s),this}setStyle(t,e=Fe){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Fe){let i=zd[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=li(t.r),this.g=li(t.g),this.b=li(t.b),this}copyLinearToSRGB(t){return this.r=Ps(t.r),this.g=Ps(t.g),this.b=Ps(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Fe){return ae.fromWorkingColorSpace(je.copy(this),t),Math.round(tn(je.r*255,0,255))*65536+Math.round(tn(je.g*255,0,255))*256+Math.round(tn(je.b*255,0,255))}getHexString(t=Fe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ae.workingColorSpace){ae.fromWorkingColorSpace(je.copy(this),e);let i=je.r,s=je.g,r=je.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ae.workingColorSpace){return ae.fromWorkingColorSpace(je.copy(this),e),t.r=je.r,t.g=je.g,t.b=je.b,t}getStyle(t=Fe){ae.fromWorkingColorSpace(je.copy(this),t);let e=je.r,i=je.g,s=je.b;return t!==Fe?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Si),this.setHSL(Si.h+t,Si.s+e,Si.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Si),t.getHSL(Xr);let i=Aa(Si.h,Xr.h,e),s=Aa(Si.s,Xr.s,e),r=Aa(Si.l,Xr.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},je=new ot;ot.NAMES=zd;var Of=0,ui=class extends Ci{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Of++}),this.uuid=ai(),this.name="",this.blending=Ri,this.side=xi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=tl,this.blendDst=el,this.blendEquation=Yi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ot(0,0,0),this.blendAlpha=0,this.depthFunc=Ds,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=_h,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=cs,this.stencilZFail=cs,this.stencilZPass=cs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ri&&(i.blending=this.blending),this.side!==xi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==tl&&(i.blendSrc=this.blendSrc),this.blendDst!==el&&(i.blendDst=this.blendDst),this.blendEquation!==Yi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ds&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==_h&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==cs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==cs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==cs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},jt=class extends ui{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yn,this.combine=wd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Ne=new D,qr=new et,Oe=class{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Ol,this.updateRanges=[],this.gpuType=Wn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)qr.fromBufferAttribute(this,e),qr.applyMatrix3(t),this.setXY(e,qr.x,qr.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Ne.fromBufferAttribute(this,e),Ne.applyMatrix3(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Ne.fromBufferAttribute(this,e),Ne.applyMatrix4(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ne.fromBufferAttribute(this,e),Ne.applyNormalMatrix(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ne.fromBufferAttribute(this,e),Ne.transformDirection(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Gn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ye(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Gn(e,this.array)),e}setX(t,e){return this.normalized&&(e=ye(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Gn(e,this.array)),e}setY(t,e){return this.normalized&&(e=ye(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Gn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ye(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Gn(e,this.array)),e}setW(t,e){return this.normalized&&(e=ye(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=ye(e,this.array),i=ye(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=ye(e,this.array),i=ye(i,this.array),s=ye(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=ye(e,this.array),i=ye(i,this.array),s=ye(s,this.array),r=ye(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ol&&(t.usage=this.usage),t}};var xo=class extends Oe{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var Co=class extends Oe{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var le=class extends Oe{constructor(t,e,i){super(new Float32Array(t),e,i)}},zf=0,wn=new ve,Oa=new Be,_s=new D,An=new di,sr=new di,Ge=new D,Ue=class n extends Ci{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:zf++}),this.uuid=ai(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Od(t)?Co:xo)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Wt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return wn.makeRotationFromQuaternion(t),this.applyMatrix4(wn),this}rotateX(t){return wn.makeRotationX(t),this.applyMatrix4(wn),this}rotateY(t){return wn.makeRotationY(t),this.applyMatrix4(wn),this}rotateZ(t){return wn.makeRotationZ(t),this.applyMatrix4(wn),this}translate(t,e,i){return wn.makeTranslation(t,e,i),this.applyMatrix4(wn),this}scale(t,e,i){return wn.makeScale(t,e,i),this.applyMatrix4(wn),this}lookAt(t){return Oa.lookAt(t),Oa.updateMatrix(),this.applyMatrix4(Oa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_s).negate(),this.translate(_s.x,_s.y,_s.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new le(i,3))}else{for(let i=0,s=e.count;i<s;i++){let r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new di);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];An.setFromBufferAttribute(r),this.morphTargetsRelative?(Ge.addVectors(this.boundingBox.min,An.min),this.boundingBox.expandByPoint(Ge),Ge.addVectors(this.boundingBox.max,An.max),this.boundingBox.expandByPoint(Ge)):(this.boundingBox.expandByPoint(An.min),this.boundingBox.expandByPoint(An.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Pi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(t){let i=this.boundingSphere.center;if(An.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];sr.setFromBufferAttribute(a),this.morphTargetsRelative?(Ge.addVectors(An.min,sr.min),An.expandByPoint(Ge),Ge.addVectors(An.max,sr.max),An.expandByPoint(Ge)):(An.expandByPoint(sr.min),An.expandByPoint(sr.max))}An.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)Ge.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Ge));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Ge.fromBufferAttribute(a,c),l&&(_s.fromBufferAttribute(t,c),Ge.add(_s)),s=Math.max(s,i.distanceToSquared(Ge))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Oe(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let F=0;F<i.count;F++)a[F]=new D,l[F]=new D;let c=new D,h=new D,d=new D,u=new et,p=new et,g=new et,E=new D,m=new D;function f(F,S,A){c.fromBufferAttribute(i,F),h.fromBufferAttribute(i,S),d.fromBufferAttribute(i,A),u.fromBufferAttribute(r,F),p.fromBufferAttribute(r,S),g.fromBufferAttribute(r,A),h.sub(c),d.sub(c),p.sub(u),g.sub(u);let P=1/(p.x*g.y-g.x*p.y);isFinite(P)&&(E.copy(h).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(P),m.copy(d).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(P),a[F].add(E),a[S].add(E),a[A].add(E),l[F].add(m),l[S].add(m),l[A].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let F=0,S=v.length;F<S;++F){let A=v[F],P=A.start,N=A.count;for(let O=P,W=P+N;O<W;O+=3)f(t.getX(O+0),t.getX(O+1),t.getX(O+2))}let _=new D,y=new D,I=new D,C=new D;function b(F){I.fromBufferAttribute(s,F),C.copy(I);let S=a[F];_.copy(S),_.sub(I.multiplyScalar(I.dot(S))).normalize(),y.crossVectors(C,S);let P=y.dot(l[F])<0?-1:1;o.setXYZW(F,_.x,_.y,_.z,P)}for(let F=0,S=v.length;F<S;++F){let A=v[F],P=A.start,N=A.count;for(let O=P,W=P+N;O<W;O+=3)b(t.getX(O+0)),b(t.getX(O+1)),b(t.getX(O+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Oe(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let u=0,p=i.count;u<p;u++)i.setXYZ(u,0,0,0);let s=new D,r=new D,o=new D,a=new D,l=new D,c=new D,h=new D,d=new D;if(t)for(let u=0,p=t.count;u<p;u+=3){let g=t.getX(u+0),E=t.getX(u+1),m=t.getX(u+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,E),o.fromBufferAttribute(e,m),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,m),a.add(h),l.add(h),c.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(E,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,p=e.count;u<p;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Ge.fromBufferAttribute(t,e),Ge.normalize(),t.setXYZ(e,Ge.x,Ge.y,Ge.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h),p=0,g=0;for(let E=0,m=l.length;E<m;E++){a.isInterleavedBufferAttribute?p=l[E]*a.data.stride+a.offset:p=l[E]*h;for(let f=0;f<h;f++)u[g++]=c[p++]}return new Oe(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,i);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){let u=c[h],p=t(u,i);l.push(p)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let p=c[d];h.push(p.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone(e));let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,p=d.length;u<p;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Hh=new ve,Gi=new wo,Yr=new Pi,Bh=new D,Zr=new D,$r=new D,Jr=new D,za=new D,Kr=new D,Nh=new D,Qr=new D,z=class extends Be{constructor(t=new Ue,e=new jt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Kr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],d=r[l];h!==0&&(za.fromBufferAttribute(d,t),o?Kr.addScaledVector(za,h):Kr.addScaledVector(za.sub(e),h))}e.add(Kr)}return e}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Yr.copy(i.boundingSphere),Yr.applyMatrix4(r),Gi.copy(t.ray).recast(t.near),!(Yr.containsPoint(Gi.origin)===!1&&(Gi.intersectSphere(Yr,Bh)===null||Gi.origin.distanceToSquared(Bh)>(t.far-t.near)**2))&&(Hh.copy(r).invert(),Gi.copy(t.ray).applyMatrix4(Hh),!(i.boundingBox!==null&&Gi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Gi)))}_computeIntersections(t,e,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,E=u.length;g<E;g++){let m=u[g],f=o[m.materialIndex],v=Math.max(m.start,p.start),_=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let y=v,I=_;y<I;y+=3){let C=a.getX(y),b=a.getX(y+1),F=a.getX(y+2);s=jr(this,f,t,i,c,h,d,C,b,F),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,p.start),E=Math.min(a.count,p.start+p.count);for(let m=g,f=E;m<f;m+=3){let v=a.getX(m),_=a.getX(m+1),y=a.getX(m+2);s=jr(this,o,t,i,c,h,d,v,_,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,E=u.length;g<E;g++){let m=u[g],f=o[m.materialIndex],v=Math.max(m.start,p.start),_=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=v,I=_;y<I;y+=3){let C=y,b=y+1,F=y+2;s=jr(this,f,t,i,c,h,d,C,b,F),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,p.start),E=Math.min(l.count,p.start+p.count);for(let m=g,f=E;m<f;m+=3){let v=m,_=m+1,y=m+2;s=jr(this,o,t,i,c,h,d,v,_,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function kf(n,t,e,i,s,r,o,a){let l;if(t.side===Ve?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,t.side===xi,a),l===null)return null;Qr.copy(a),Qr.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(Qr);return c<e.near||c>e.far?null:{distance:c,point:Qr.clone(),object:n}}function jr(n,t,e,i,s,r,o,a,l,c){n.getVertexPosition(a,Zr),n.getVertexPosition(l,$r),n.getVertexPosition(c,Jr);let h=kf(n,t,e,i,Zr,$r,Jr,Nh);if(h){let d=new D;wi.getBarycoord(Nh,Zr,$r,Jr,d),s&&(h.uv=wi.getInterpolatedAttribute(s,a,l,c,d,new et)),r&&(h.uv1=wi.getInterpolatedAttribute(r,a,l,c,d,new et)),o&&(h.normal=wi.getInterpolatedAttribute(o,a,l,c,d,new D),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new D,materialIndex:0};wi.getNormal(Zr,$r,Jr,u.normal),h.face=u,h.barycoord=d}return h}var fn=class n extends Ue{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],d=[],u=0,p=0;g("z","y","x",-1,-1,i,e,t,o,r,0),g("z","y","x",1,-1,i,e,-t,o,r,1),g("x","z","y",1,1,t,i,e,s,o,2),g("x","z","y",1,-1,t,i,-e,s,o,3),g("x","y","z",1,-1,t,e,i,s,r,4),g("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new le(c,3)),this.setAttribute("normal",new le(h,3)),this.setAttribute("uv",new le(d,2));function g(E,m,f,v,_,y,I,C,b,F,S){let A=y/b,P=I/F,N=y/2,O=I/2,W=C/2,Q=b+1,Y=F+1,st=0,q=0,ht=new D;for(let Et=0;Et<Y;Et++){let Dt=Et*P-O;for(let Kt=0;Kt<Q;Kt++){let Me=Kt*A-N;ht[E]=Me*v,ht[m]=Dt*_,ht[f]=W,c.push(ht.x,ht.y,ht.z),ht[E]=0,ht[m]=0,ht[f]=C>0?1:-1,h.push(ht.x,ht.y,ht.z),d.push(Kt/b),d.push(1-Et/F),st+=1}}for(let Et=0;Et<F;Et++)for(let Dt=0;Dt<b;Dt++){let Kt=u+Dt+Q*Et,Me=u+Dt+Q*(Et+1),$=u+(Dt+1)+Q*(Et+1),rt=u+(Dt+1)+Q*Et;l.push(Kt,Me,rt),l.push(Me,$,rt),q+=6}a.addGroup(p,q,S),p+=q,u+=st}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Ns(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function ln(n){let t={};for(let e=0;e<n.length;e++){let i=Ns(n[e]);for(let s in i)t[s]=i[s]}return t}function Gf(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function kd(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ae.workingColorSpace}var Ys={clone:Ns,merge:ln},Vf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Wf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Xe=class extends ui{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Vf,this.fragmentShader=Wf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ns(t.uniforms),this.uniformsGroups=Gf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}},Fo=class extends Be{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ve,this.projectionMatrix=new ve,this.projectionMatrixInverse=new ve,this.coordinateSystem=oi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Ti=new D,Oh=new et,zh=new et,Ze=class extends Fo{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Mo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(va*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Mo*2*Math.atan(Math.tan(va*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Ti.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ti.x,Ti.y).multiplyScalar(-t/Ti.z),Ti.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ti.x,Ti.y).multiplyScalar(-t/Ti.z)}getViewSize(t,e){return this.getViewBounds(t,Oh,zh),e.subVectors(zh,Oh)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(va*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},vs=-90,As=1,Vl=class extends Be{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ze(vs,As,t,e);s.layers=this.layers,this.add(s);let r=new Ze(vs,As,t,e);r.layers=this.layers,this.add(r);let o=new Ze(vs,As,t,e);o.layers=this.layers,this.add(o);let a=new Ze(vs,As,t,e);a.layers=this.layers,this.add(a);let l=new Ze(vs,As,t,e);l.layers=this.layers,this.add(l);let c=new Ze(vs,As,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===oi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ao)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let E=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,o),t.setRenderTarget(i,2,s),t.render(e,a),t.setRenderTarget(i,3,s),t.render(e,l),t.setRenderTarget(i,4,s),t.render(e,c),i.texture.generateMipmaps=E,t.setRenderTarget(i,5,s),t.render(e,h),t.setRenderTarget(d,u,p),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},Po=class extends un{constructor(t,e,i,s,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Ls,super(t,e,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Wl=class extends We{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Po(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Vn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new fn(5,5,5),r=new Xe({name:"CubemapFromEquirect",uniforms:Ns(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ve,blending:Xn});r.uniforms.tEquirect.value=e;let o=new z(s,r),a=e.minFilter;return e.minFilter===Ji&&(e.minFilter=Vn),new Vl(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}},ka=new D,Xf=new D,qf=new Wt,ri=class{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=ka.subVectors(i,e).cross(Xf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let i=t.delta(ka),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||qf.getNormalMatrix(t),s=this.coplanarPoint(ka).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Vi=new Pi,to=new D,yr=class{constructor(t=new ri,e=new ri,i=new ri,s=new ri,r=new ri,o=new ri){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=oi){let i=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],d=s[6],u=s[7],p=s[8],g=s[9],E=s[10],m=s[11],f=s[12],v=s[13],_=s[14],y=s[15];if(i[0].setComponents(l-r,u-c,m-p,y-f).normalize(),i[1].setComponents(l+r,u+c,m+p,y+f).normalize(),i[2].setComponents(l+o,u+h,m+g,y+v).normalize(),i[3].setComponents(l-o,u-h,m-g,y-v).normalize(),i[4].setComponents(l-a,u-d,m-E,y-_).normalize(),e===oi)i[5].setComponents(l+a,u+d,m+E,y+_).normalize();else if(e===Ao)i[5].setComponents(a,d,E,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Vi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Vi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Vi)}intersectsSprite(t){return Vi.center.set(0,0,0),Vi.radius=.7071067811865476,Vi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Vi)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(to.x=s.normal.x>0?t.max.x:t.min.x,to.y=s.normal.y>0?t.max.y:t.min.y,to.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(to)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Gd(){let n=null,t=!1,e=null,i=null;function s(r,o){e(r,o),i=n.__noRaf(s)}return{start:function(){t!==!0&&e!==null&&(i=n.__noRaf(s),t=!0)},stop:function(){n.__noCaf(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function Yf(n){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,d=c.byteLength,u=n.createBuffer();n.bindBuffer(l,u),n.bufferData(l,c,h),a.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){let h=l.array,d=l.updateRanges;if(n.bindBuffer(c,a),d.length===0)n.bufferSubData(c,0,h);else{d.sort((p,g)=>p.start-g.start);let u=0;for(let p=1;p<d.length;p++){let g=d[u],E=d[p];E.start<=g.start+g.count+1?g.count=Math.max(g.count,E.start+E.count-g.start):(++u,d[u]=E)}d.length=u+1;for(let p=0,g=d.length;p<g;p++){let E=d[p];n.bufferSubData(c,E.start*h.BYTES_PER_ELEMENT,h,E.start,E.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Mt=class n extends Ue{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,d=t/a,u=e/l,p=[],g=[],E=[],m=[];for(let f=0;f<h;f++){let v=f*u-o;for(let _=0;_<c;_++){let y=_*d-r;g.push(y,-v,0),E.push(0,0,1),m.push(_/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let v=0;v<a;v++){let _=v+c*f,y=v+c*(f+1),I=v+1+c*(f+1),C=v+1+c*f;p.push(_,y,C),p.push(y,I,C)}this.setIndex(p),this.setAttribute("position",new le(g,3)),this.setAttribute("normal",new le(E,3)),this.setAttribute("uv",new le(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}},Zf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,$f=`#ifdef USE_ALPHAHASH
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
#endif`,Jf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Kf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Qf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,jf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,t0=`#ifdef USE_AOMAP
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
#endif`,e0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,n0=`#ifdef USE_BATCHING
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
#endif`,i0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,s0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,r0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,o0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,a0=`#ifdef USE_IRIDESCENCE
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
#endif`,l0=`#ifdef USE_BUMPMAP
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
#endif`,c0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,h0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,d0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,u0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,f0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,p0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,m0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,g0=`#if defined( USE_COLOR_ALPHA )
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
#endif`,E0=`#define PI 3.141592653589793
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
} // validated`,y0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,_0=`vec3 transformedNormal = objectNormal;
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
#endif`,v0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,A0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,M0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,S0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,T0="gl_FragColor = linearToOutputTexel( gl_FragColor );",b0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,w0=`#ifdef USE_ENVMAP
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
#endif`,R0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,x0=`#ifdef USE_ENVMAP
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
#endif`,C0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,F0=`#ifdef USE_ENVMAP
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
#endif`,P0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,I0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,D0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,L0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,U0=`#ifdef USE_GRADIENTMAP
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
}`,H0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,B0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,N0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,O0=`uniform bool receiveShadow;
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
#endif`,z0=`#ifdef USE_ENVMAP
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
#endif`,k0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,G0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,V0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,W0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,X0=`PhysicalMaterial material;
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
#endif`,q0=`struct PhysicalMaterial {
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
}`,Y0=`
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
#endif`,Z0=`#if defined( RE_IndirectDiffuse )
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
#endif`,$0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,J0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,K0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Q0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,j0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,tp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ep=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,np=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ip=`#if defined( USE_POINTS_UV )
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
#endif`,sp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,rp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,op=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ap=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,lp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cp=`#ifdef USE_MORPHTARGETS
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
#endif`,hp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,dp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,up=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,fp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,gp=`#ifdef USE_NORMALMAP
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
#endif`,Ep=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,yp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,_p=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,vp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ap=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Mp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Sp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Tp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,bp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,wp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Rp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,xp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Cp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Fp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Pp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ip=`float getShadowMask() {
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
}`,Dp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Lp=`#ifdef USE_SKINNING
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
#endif`,Up=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Hp=`#ifdef USE_SKINNING
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
#endif`,Bp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Np=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Op=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,zp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,kp=`#ifdef USE_TRANSMISSION
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
#endif`,Gp=`#ifdef USE_TRANSMISSION
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
#endif`,Vp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Wp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Xp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Yp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Zp=`uniform sampler2D t2D;
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
}`,$p=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Kp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jp=`#include <common>
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
}`,tm=`#if DEPTH_PACKING == 3200
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
}`,em=`#define DISTANCE
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
}`,nm=`#define DISTANCE
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
}`,im=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,sm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rm=`uniform float scale;
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
}`,om=`uniform vec3 diffuse;
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
}`,am=`#include <common>
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
}`,lm=`uniform vec3 diffuse;
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
}`,cm=`#define LAMBERT
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
}`,hm=`#define LAMBERT
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
}`,dm=`#define MATCAP
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
}`,um=`#define MATCAP
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
}`,fm=`#define NORMAL
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
}`,pm=`#define NORMAL
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
}`,mm=`#define PHONG
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
}`,gm=`#define PHONG
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
}`,Em=`#define STANDARD
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
}`,ym=`#define STANDARD
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
}`,_m=`#define TOON
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
}`,vm=`#define TOON
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
}`,Am=`uniform float size;
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
}`,Mm=`uniform vec3 diffuse;
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
}`,Sm=`#include <common>
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
}`,Tm=`uniform vec3 color;
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
}`,bm=`uniform float rotation;
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
}`,wm=`uniform vec3 diffuse;
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
}`,Yt={alphahash_fragment:Zf,alphahash_pars_fragment:$f,alphamap_fragment:Jf,alphamap_pars_fragment:Kf,alphatest_fragment:Qf,alphatest_pars_fragment:jf,aomap_fragment:t0,aomap_pars_fragment:e0,batching_pars_vertex:n0,batching_vertex:i0,begin_vertex:s0,beginnormal_vertex:r0,bsdfs:o0,iridescence_fragment:a0,bumpmap_pars_fragment:l0,clipping_planes_fragment:c0,clipping_planes_pars_fragment:h0,clipping_planes_pars_vertex:d0,clipping_planes_vertex:u0,color_fragment:f0,color_pars_fragment:p0,color_pars_vertex:m0,color_vertex:g0,common:E0,cube_uv_reflection_fragment:y0,defaultnormal_vertex:_0,displacementmap_pars_vertex:v0,displacementmap_vertex:A0,emissivemap_fragment:M0,emissivemap_pars_fragment:S0,colorspace_fragment:T0,colorspace_pars_fragment:b0,envmap_fragment:w0,envmap_common_pars_fragment:R0,envmap_pars_fragment:x0,envmap_pars_vertex:C0,envmap_physical_pars_fragment:z0,envmap_vertex:F0,fog_vertex:P0,fog_pars_vertex:I0,fog_fragment:D0,fog_pars_fragment:L0,gradientmap_pars_fragment:U0,lightmap_pars_fragment:H0,lights_lambert_fragment:B0,lights_lambert_pars_fragment:N0,lights_pars_begin:O0,lights_toon_fragment:k0,lights_toon_pars_fragment:G0,lights_phong_fragment:V0,lights_phong_pars_fragment:W0,lights_physical_fragment:X0,lights_physical_pars_fragment:q0,lights_fragment_begin:Y0,lights_fragment_maps:Z0,lights_fragment_end:$0,logdepthbuf_fragment:J0,logdepthbuf_pars_fragment:K0,logdepthbuf_pars_vertex:Q0,logdepthbuf_vertex:j0,map_fragment:tp,map_pars_fragment:ep,map_particle_fragment:np,map_particle_pars_fragment:ip,metalnessmap_fragment:sp,metalnessmap_pars_fragment:rp,morphinstance_vertex:op,morphcolor_vertex:ap,morphnormal_vertex:lp,morphtarget_pars_vertex:cp,morphtarget_vertex:hp,normal_fragment_begin:dp,normal_fragment_maps:up,normal_pars_fragment:fp,normal_pars_vertex:pp,normal_vertex:mp,normalmap_pars_fragment:gp,clearcoat_normal_fragment_begin:Ep,clearcoat_normal_fragment_maps:yp,clearcoat_pars_fragment:_p,iridescence_pars_fragment:vp,opaque_fragment:Ap,packing:Mp,premultiplied_alpha_fragment:Sp,project_vertex:Tp,dithering_fragment:bp,dithering_pars_fragment:wp,roughnessmap_fragment:Rp,roughnessmap_pars_fragment:xp,shadowmap_pars_fragment:Cp,shadowmap_pars_vertex:Fp,shadowmap_vertex:Pp,shadowmask_pars_fragment:Ip,skinbase_vertex:Dp,skinning_pars_vertex:Lp,skinning_vertex:Up,skinnormal_vertex:Hp,specularmap_fragment:Bp,specularmap_pars_fragment:Np,tonemapping_fragment:Op,tonemapping_pars_fragment:zp,transmission_fragment:kp,transmission_pars_fragment:Gp,uv_pars_fragment:Vp,uv_pars_vertex:Wp,uv_vertex:Xp,worldpos_vertex:qp,background_vert:Yp,background_frag:Zp,backgroundCube_vert:$p,backgroundCube_frag:Jp,cube_vert:Kp,cube_frag:Qp,depth_vert:jp,depth_frag:tm,distanceRGBA_vert:em,distanceRGBA_frag:nm,equirect_vert:im,equirect_frag:sm,linedashed_vert:rm,linedashed_frag:om,meshbasic_vert:am,meshbasic_frag:lm,meshlambert_vert:cm,meshlambert_frag:hm,meshmatcap_vert:dm,meshmatcap_frag:um,meshnormal_vert:fm,meshnormal_frag:pm,meshphong_vert:mm,meshphong_frag:gm,meshphysical_vert:Em,meshphysical_frag:ym,meshtoon_vert:_m,meshtoon_frag:vm,points_vert:Am,points_frag:Mm,shadow_vert:Sm,shadow_frag:Tm,sprite_vert:bm,sprite_frag:wm},lt={common:{diffuse:{value:new ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Wt}},envmap:{envMap:{value:null},envMapRotation:{value:new Wt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Wt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Wt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Wt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Wt},normalScale:{value:new et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Wt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Wt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Wt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Wt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0},uvTransform:{value:new Wt}},sprite:{diffuse:{value:new ot(16777215)},opacity:{value:1},center:{value:new et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}}},kn={basic:{uniforms:ln([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.fog]),vertexShader:Yt.meshbasic_vert,fragmentShader:Yt.meshbasic_frag},lambert:{uniforms:ln([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,lt.lights,{emissive:{value:new ot(0)}}]),vertexShader:Yt.meshlambert_vert,fragmentShader:Yt.meshlambert_frag},phong:{uniforms:ln([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,lt.lights,{emissive:{value:new ot(0)},specular:{value:new ot(1118481)},shininess:{value:30}}]),vertexShader:Yt.meshphong_vert,fragmentShader:Yt.meshphong_frag},standard:{uniforms:ln([lt.common,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.roughnessmap,lt.metalnessmap,lt.fog,lt.lights,{emissive:{value:new ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag},toon:{uniforms:ln([lt.common,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.gradientmap,lt.fog,lt.lights,{emissive:{value:new ot(0)}}]),vertexShader:Yt.meshtoon_vert,fragmentShader:Yt.meshtoon_frag},matcap:{uniforms:ln([lt.common,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,{matcap:{value:null}}]),vertexShader:Yt.meshmatcap_vert,fragmentShader:Yt.meshmatcap_frag},points:{uniforms:ln([lt.points,lt.fog]),vertexShader:Yt.points_vert,fragmentShader:Yt.points_frag},dashed:{uniforms:ln([lt.common,lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Yt.linedashed_vert,fragmentShader:Yt.linedashed_frag},depth:{uniforms:ln([lt.common,lt.displacementmap]),vertexShader:Yt.depth_vert,fragmentShader:Yt.depth_frag},normal:{uniforms:ln([lt.common,lt.bumpmap,lt.normalmap,lt.displacementmap,{opacity:{value:1}}]),vertexShader:Yt.meshnormal_vert,fragmentShader:Yt.meshnormal_frag},sprite:{uniforms:ln([lt.sprite,lt.fog]),vertexShader:Yt.sprite_vert,fragmentShader:Yt.sprite_frag},background:{uniforms:{uvTransform:{value:new Wt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Yt.background_vert,fragmentShader:Yt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Wt}},vertexShader:Yt.backgroundCube_vert,fragmentShader:Yt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Yt.cube_vert,fragmentShader:Yt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Yt.equirect_vert,fragmentShader:Yt.equirect_frag},distanceRGBA:{uniforms:ln([lt.common,lt.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Yt.distanceRGBA_vert,fragmentShader:Yt.distanceRGBA_frag},shadow:{uniforms:ln([lt.lights,lt.fog,{color:{value:new ot(0)},opacity:{value:1}}]),vertexShader:Yt.shadow_vert,fragmentShader:Yt.shadow_frag}};kn.physical={uniforms:ln([kn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Wt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Wt},clearcoatNormalScale:{value:new et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Wt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Wt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Wt},sheen:{value:0},sheenColor:{value:new ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Wt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Wt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Wt},transmissionSamplerSize:{value:new et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Wt},attenuationDistance:{value:0},attenuationColor:{value:new ot(0)},specularColor:{value:new ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Wt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Wt},anisotropyVector:{value:new et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Wt}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag};var eo={r:0,b:0,g:0},Wi=new Yn,Rm=new ve;function xm(n,t,e,i,s,r,o){let a=new ot(0),l=r===!0?0:1,c,h,d=null,u=0,p=null;function g(v){let _=v.isScene===!0?v.background:null;return _&&_.isTexture&&(_=(v.backgroundBlurriness>0?e:t).get(_)),_}function E(v){let _=!1,y=g(v);y===null?f(a,l):y&&y.isColor&&(f(y,1),_=!0);let I=n.xr.getEnvironmentBlendMode();I==="additive"?i.buffers.color.setClear(0,0,0,1,o):I==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||_)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(v,_){let y=g(_);y&&(y.isCubeTexture||y.mapping===Yo)?(h===void 0&&(h=new z(new fn(1,1,1),new Xe({name:"BackgroundCubeMaterial",uniforms:Ns(kn.backgroundCube.uniforms),vertexShader:kn.backgroundCube.vertexShader,fragmentShader:kn.backgroundCube.fragmentShader,side:Ve,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(I,C,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Wi.copy(_.backgroundRotation),Wi.x*=-1,Wi.y*=-1,Wi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Wi.y*=-1,Wi.z*=-1),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Rm.makeRotationFromEuler(Wi)),h.material.toneMapped=ae.getTransfer(y.colorSpace)!==Ee,(d!==y||u!==y.version||p!==n.toneMapping)&&(h.material.needsUpdate=!0,d=y,u=y.version,p=n.toneMapping),h.layers.enableAll(),v.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new z(new Mt(2,2),new Xe({name:"BackgroundMaterial",uniforms:Ns(kn.background.uniforms),vertexShader:kn.background.vertexShader,fragmentShader:kn.background.fragmentShader,side:xi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=ae.getTransfer(y.colorSpace)!==Ee,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(d!==y||u!==y.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,d=y,u=y.version,p=n.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function f(v,_){v.getRGB(eo,kd(n)),i.buffers.color.setClear(eo.r,eo.g,eo.b,_,o)}return{getClearColor:function(){return a},setClearColor:function(v,_=1){a.set(v),l=_,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,f(a,l)},render:E,addToRenderList:m}}function Cm(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=u(null),r=s,o=!1;function a(A,P,N,O,W){let Q=!1,Y=d(O,N,P);r!==Y&&(r=Y,c(r.object)),Q=p(A,O,N,W),Q&&g(A,O,N,W),W!==null&&t.update(W,n.ELEMENT_ARRAY_BUFFER),(Q||o)&&(o=!1,y(A,P,N,O),W!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function l(){return n.createVertexArray()}function c(A){return n.bindVertexArray(A)}function h(A){return n.deleteVertexArray(A)}function d(A,P,N){let O=N.wireframe===!0,W=i[A.id];W===void 0&&(W={},i[A.id]=W);let Q=W[P.id];Q===void 0&&(Q={},W[P.id]=Q);let Y=Q[O];return Y===void 0&&(Y=u(l()),Q[O]=Y),Y}function u(A){let P=[],N=[],O=[];for(let W=0;W<e;W++)P[W]=0,N[W]=0,O[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:N,attributeDivisors:O,object:A,attributes:{},index:null}}function p(A,P,N,O){let W=r.attributes,Q=P.attributes,Y=0,st=N.getAttributes();for(let q in st)if(st[q].location>=0){let Et=W[q],Dt=Q[q];if(Dt===void 0&&(q==="instanceMatrix"&&A.instanceMatrix&&(Dt=A.instanceMatrix),q==="instanceColor"&&A.instanceColor&&(Dt=A.instanceColor)),Et===void 0||Et.attribute!==Dt||Dt&&Et.data!==Dt.data)return!0;Y++}return r.attributesNum!==Y||r.index!==O}function g(A,P,N,O){let W={},Q=P.attributes,Y=0,st=N.getAttributes();for(let q in st)if(st[q].location>=0){let Et=Q[q];Et===void 0&&(q==="instanceMatrix"&&A.instanceMatrix&&(Et=A.instanceMatrix),q==="instanceColor"&&A.instanceColor&&(Et=A.instanceColor));let Dt={};Dt.attribute=Et,Et&&Et.data&&(Dt.data=Et.data),W[q]=Dt,Y++}r.attributes=W,r.attributesNum=Y,r.index=O}function E(){let A=r.newAttributes;for(let P=0,N=A.length;P<N;P++)A[P]=0}function m(A){f(A,0)}function f(A,P){let N=r.newAttributes,O=r.enabledAttributes,W=r.attributeDivisors;N[A]=1,O[A]===0&&(n.enableVertexAttribArray(A),O[A]=1),W[A]!==P&&(n.vertexAttribDivisor(A,P),W[A]=P)}function v(){let A=r.newAttributes,P=r.enabledAttributes;for(let N=0,O=P.length;N<O;N++)P[N]!==A[N]&&(n.disableVertexAttribArray(N),P[N]=0)}function _(A,P,N,O,W,Q,Y){Y===!0?n.vertexAttribIPointer(A,P,N,W,Q):n.vertexAttribPointer(A,P,N,O,W,Q)}function y(A,P,N,O){E();let W=O.attributes,Q=N.getAttributes(),Y=P.defaultAttributeValues;for(let st in Q){let q=Q[st];if(q.location>=0){let ht=W[st];if(ht===void 0&&(st==="instanceMatrix"&&A.instanceMatrix&&(ht=A.instanceMatrix),st==="instanceColor"&&A.instanceColor&&(ht=A.instanceColor)),ht!==void 0){let Et=ht.normalized,Dt=ht.itemSize,Kt=t.get(ht);if(Kt===void 0)continue;let Me=Kt.buffer,$=Kt.type,rt=Kt.bytesPerElement,xt=$===n.INT||$===n.UNSIGNED_INT||ht.gpuType===Rc;if(ht.isInterleavedBufferAttribute){let dt=ht.data,Bt=dt.stride,kt=ht.offset;if(dt.isInstancedInterleavedBuffer){for(let Qt=0;Qt<q.locationSize;Qt++)f(q.location+Qt,dt.meshPerAttribute);A.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=dt.meshPerAttribute*dt.count)}else for(let Qt=0;Qt<q.locationSize;Qt++)m(q.location+Qt);n.bindBuffer(n.ARRAY_BUFFER,Me);for(let Qt=0;Qt<q.locationSize;Qt++)_(q.location+Qt,Dt/q.locationSize,$,Et,Bt*rt,(kt+Dt/q.locationSize*Qt)*rt,xt)}else{if(ht.isInstancedBufferAttribute){for(let dt=0;dt<q.locationSize;dt++)f(q.location+dt,ht.meshPerAttribute);A.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let dt=0;dt<q.locationSize;dt++)m(q.location+dt);n.bindBuffer(n.ARRAY_BUFFER,Me);for(let dt=0;dt<q.locationSize;dt++)_(q.location+dt,Dt/q.locationSize,$,Et,Dt*rt,Dt/q.locationSize*dt*rt,xt)}}else if(Y!==void 0){let Et=Y[st];if(Et!==void 0)switch(Et.length){case 2:n.vertexAttrib2fv(q.location,Et);break;case 3:n.vertexAttrib3fv(q.location,Et);break;case 4:n.vertexAttrib4fv(q.location,Et);break;default:n.vertexAttrib1fv(q.location,Et)}}}}v()}function I(){F();for(let A in i){let P=i[A];for(let N in P){let O=P[N];for(let W in O)h(O[W].object),delete O[W];delete P[N]}delete i[A]}}function C(A){if(i[A.id]===void 0)return;let P=i[A.id];for(let N in P){let O=P[N];for(let W in O)h(O[W].object),delete O[W];delete P[N]}delete i[A.id]}function b(A){for(let P in i){let N=i[P];if(N[A.id]===void 0)continue;let O=N[A.id];for(let W in O)h(O[W].object),delete O[W];delete N[A.id]}}function F(){S(),o=!0,r!==s&&(r=s,c(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:F,resetDefaultState:S,dispose:I,releaseStatesOfGeometry:C,releaseStatesOfProgram:b,initAttributes:E,enableAttribute:m,disableUnusedAttributes:v}}function Fm(n,t,e){let i;function s(c){i=c}function r(c,h){n.drawArrays(i,c,h),e.update(h,i,1)}function o(c,h,d){d!==0&&(n.drawArraysInstanced(i,c,h,d),e.update(h,i,d))}function a(c,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,d);let p=0;for(let g=0;g<d;g++)p+=h[g];e.update(p,i,1)}function l(c,h,d,u){if(d===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],h[g],u[g]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,h,0,u,0,d);let g=0;for(let E=0;E<d;E++)g+=h[E]*u[E];e.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Pm(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let b=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(b){return!(b!==Un&&i.convert(b)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(b){let F=b===mn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(b!==ci&&i.convert(b)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==Wn&&!F)}function l(b){if(b==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=e.logarithmicDepthBuffer===!0,u=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),f=n.getParameter(n.MAX_VERTEX_ATTRIBS),v=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),_=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),I=g>0,C=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:u,maxTextures:p,maxVertexTextures:g,maxTextureSize:E,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:v,maxVaryings:_,maxFragmentUniforms:y,vertexTextures:I,maxSamples:C}}function Im(n){let t=this,e=null,i=0,s=!1,r=!1,o=new ri,a=new Wt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let p=d.length!==0||u||i!==0||s;return s=u,i=d.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,p){let g=d.clippingPlanes,E=d.clipIntersection,m=d.clipShadows,f=n.get(d);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let v=r?0:i,_=v*4,y=f.clippingState||null;l.value=y,y=h(g,u,_,p);for(let I=0;I!==_;++I)y[I]=e[I];f.clippingState=y,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(d,u,p,g){let E=d!==null?d.length:0,m=null;if(E!==0){if(m=l.value,g!==!0||m===null){let f=p+E*4,v=u.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<f)&&(m=new Float32Array(f));for(let _=0,y=p;_!==E;++_,y+=4)o.copy(d[_]).applyMatrix4(v,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=E,t.numIntersection=0,m}}function Dm(n){let t=new WeakMap;function e(o,a){return a===cl?o.mapping=Ls:a===hl&&(o.mapping=Us),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===cl||a===hl)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Wl(l.height);return c.fromEquirectangularTexture(n,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}var Os=class extends Fo{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,o=i+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},xs=4,kh=[.125,.215,.35,.446,.526,.582],Zi=20,Ga=new Os,Gh=new ot,Va=null,Wa=0,Xa=0,qa=!1,qi=(1+Math.sqrt(5))/2,Ms=1/qi,Vh=[new D(-qi,Ms,0),new D(qi,Ms,0),new D(-Ms,0,qi),new D(Ms,0,qi),new D(0,qi,-Ms),new D(0,qi,Ms),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)],Io=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){Va=this._renderer.getRenderTarget(),Wa=this._renderer.getActiveCubeFace(),Xa=this._renderer.getActiveMipmapLevel(),qa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=qh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Xh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Va,Wa,Xa),this._renderer.xr.enabled=qa,t.scissorTest=!1,no(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ls||t.mapping===Us?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Va=this._renderer.getRenderTarget(),Wa=this._renderer.getActiveCubeFace(),Xa=this._renderer.getActiveMipmapLevel(),qa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Vn,minFilter:Vn,generateMipmaps:!1,type:mn,format:Un,colorSpace:Di,depthBuffer:!1},s=Wh(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Wh(t,e,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Lm(r)),this._blurMaterial=Um(r,t,e)}return s}_compileMaterial(t){let e=new z(this._lodPlanes[0],t);this._renderer.compile(e,Ga)}_sceneToCubeUV(t,e,i,s){let a=new Ze(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(Gh),h.toneMapping=qn,h.autoClear=!1;let p=new jt({name:"PMREM.Background",side:Ve,depthWrite:!1,depthTest:!1}),g=new z(new fn,p),E=!1,m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,E=!0):(p.color.copy(Gh),E=!0);for(let f=0;f<6;f++){let v=f%3;v===0?(a.up.set(0,l[f],0),a.lookAt(c[f],0,0)):v===1?(a.up.set(0,0,l[f]),a.lookAt(0,c[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,c[f]));let _=this._cubeSize;no(s,v*_,f>2?_:0,_,_),h.setRenderTarget(s),E&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=u,h.autoClear=d,t.background=m}_textureToCubeUV(t,e){let i=this._renderer,s=t.mapping===Ls||t.mapping===Us;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=qh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Xh());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new z(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;no(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,Ga)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Vh[(s-r-1)%Vh.length];this._blur(t,r-1,r,o,a)}e.autoClear=i}_blur(t,e,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,d=new z(this._lodPlanes[s],c),u=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Zi-1),E=r/g,m=isFinite(r)?1+Math.floor(h*E):Zi;m>Zi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Zi}`);let f=[],v=0;for(let b=0;b<Zi;++b){let F=b/E,S=Math.exp(-F*F/2);f.push(S),b===0?v+=S:b<m&&(v+=2*S)}for(let b=0;b<f.length;b++)f[b]=f[b]/v;u.envMap.value=t.texture,u.samples.value=m,u.weights.value=f,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);let{_lodMax:_}=this;u.dTheta.value=g,u.mipInt.value=_-i;let y=this._sizeLods[s],I=3*y*(s>_-xs?s-_+xs:0),C=4*(this._cubeSize-y);no(e,I,C,3*y,2*y),l.setRenderTarget(e),l.render(d,Ga)}};function Lm(n){let t=[],e=[],i=[],s=n,r=n-xs+1+kh.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let l=1/a;o>n-xs?l=kh[o-n+xs-1]:o===0&&(l=0),i.push(l);let c=1/(a-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],p=6,g=6,E=3,m=2,f=1,v=new Float32Array(E*g*p),_=new Float32Array(m*g*p),y=new Float32Array(f*g*p);for(let C=0;C<p;C++){let b=C%3*2/3-1,F=C>2?0:-1,S=[b,F,0,b+2/3,F,0,b+2/3,F+1,0,b,F,0,b+2/3,F+1,0,b,F+1,0];v.set(S,E*g*C),_.set(u,m*g*C);let A=[C,C,C,C,C,C];y.set(A,f*g*C)}let I=new Ue;I.setAttribute("position",new Oe(v,E)),I.setAttribute("uv",new Oe(_,m)),I.setAttribute("faceIndex",new Oe(y,f)),t.push(I),s>xs&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Wh(n,t,e){let i=new We(n,t,e);return i.texture.mapping=Yo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function no(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function Um(n,t,e){let i=new Float32Array(Zi),s=new D(0,1,0);return new Xe({name:"SphericalGaussianBlur",defines:{n:Zi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Lc(),fragmentShader:`

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
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function Xh(){return new Xe({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Lc(),fragmentShader:`

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
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function qh(){return new Xe({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Lc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function Lc(){return`

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
	`}function Hm(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){let l=a.mapping,c=l===cl||l===hl,h=l===Ls||l===Us;if(c||h){let d=t.get(a),u=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==u)return e===null&&(e=new Io(n)),d=c?e.fromEquirectangular(a,d):e.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),d.texture;if(d!==void 0)return d.texture;{let p=a.image;return c&&p&&p.height>0||h&&p&&s(p)?(e===null&&(e=new Io(n)),d=c?e.fromEquirectangular(a):e.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function Bm(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&dr("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function Nm(n,t,e,i){let s={},r=new WeakMap;function o(d){let u=d.target;u.index!==null&&t.remove(u.index);for(let g in u.attributes)t.remove(u.attributes[g]);for(let g in u.morphAttributes){let E=u.morphAttributes[g];for(let m=0,f=E.length;m<f;m++)t.remove(E[m])}u.removeEventListener("dispose",o),delete s[u.id];let p=r.get(u);p&&(t.remove(p),r.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(d,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,e.memory.geometries++),u}function l(d){let u=d.attributes;for(let g in u)t.update(u[g],n.ARRAY_BUFFER);let p=d.morphAttributes;for(let g in p){let E=p[g];for(let m=0,f=E.length;m<f;m++)t.update(E[m],n.ARRAY_BUFFER)}}function c(d){let u=[],p=d.index,g=d.attributes.position,E=0;if(p!==null){let v=p.array;E=p.version;for(let _=0,y=v.length;_<y;_+=3){let I=v[_+0],C=v[_+1],b=v[_+2];u.push(I,C,C,b,b,I)}}else if(g!==void 0){let v=g.array;E=g.version;for(let _=0,y=v.length/3-1;_<y;_+=3){let I=_+0,C=_+1,b=_+2;u.push(I,C,C,b,b,I)}}else return;let m=new(Od(u)?Co:xo)(u,1);m.version=E;let f=r.get(d);f&&t.remove(f),r.set(d,m)}function h(d){let u=r.get(d);if(u){let p=d.index;p!==null&&u.version<p.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function Om(n,t,e){let i;function s(u){i=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function l(u,p){n.drawElements(i,p,r,u*o),e.update(p,i,1)}function c(u,p,g){g!==0&&(n.drawElementsInstanced(i,p,r,u*o,g),e.update(p,i,g))}function h(u,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,r,u,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];e.update(m,i,1)}function d(u,p,g,E){if(g===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<u.length;f++)c(u[f]/o,p[f],E[f]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,r,u,0,E,0,g);let f=0;for(let v=0;v<g;v++)f+=p[v]*E[v];e.update(f,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function zm(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function km(n,t,e){let i=new WeakMap,s=new _e;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,u=i.get(a);if(u===void 0||u.count!==d){let S=function(){b.dispose(),i.delete(a),a.removeEventListener("dispose",S)};u!==void 0&&u.texture.dispose();let p=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,E=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],f=a.morphAttributes.normal||[],v=a.morphAttributes.color||[],_=0;p===!0&&(_=1),g===!0&&(_=2),E===!0&&(_=3);let y=a.attributes.position.count*_,I=1;y>t.maxTextureSize&&(I=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let C=new Float32Array(y*I*4*d),b=new bo(C,y,I,d);b.type=Wn,b.needsUpdate=!0;let F=_*4;for(let A=0;A<d;A++){let P=m[A],N=f[A],O=v[A],W=y*I*4*A;for(let Q=0;Q<P.count;Q++){let Y=Q*F;p===!0&&(s.fromBufferAttribute(P,Q),C[W+Y+0]=s.x,C[W+Y+1]=s.y,C[W+Y+2]=s.z,C[W+Y+3]=0),g===!0&&(s.fromBufferAttribute(N,Q),C[W+Y+4]=s.x,C[W+Y+5]=s.y,C[W+Y+6]=s.z,C[W+Y+7]=0),E===!0&&(s.fromBufferAttribute(O,Q),C[W+Y+8]=s.x,C[W+Y+9]=s.y,C[W+Y+10]=s.z,C[W+Y+11]=O.itemSize===4?s.w:1)}}u={count:d,texture:b,size:new et(y,I)},i.set(a,u),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let p=0;for(let E=0;E<c.length;E++)p+=c[E];let g=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:r}}function Gm(n,t,e,i){let s=new WeakMap;function r(l){let c=i.render.frame,h=l.geometry,d=t.get(l,h);if(s.get(d)!==c&&(t.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let u=l.skeleton;s.get(u)!==c&&(u.update(),s.set(u,c))}return d}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}var zs=class extends un{constructor(t,e,i,s,r,o,a,l,c,h=Fs){if(h!==Fs&&h!==Bs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Fs&&(i=hi),i===void 0&&h===Bs&&(i=Hs),super(null,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Mn,this.minFilter=l!==void 0?l:Mn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Vd=new un,Yh=new zs(1,1),Wd=new bo,Xd=new Gl,qd=new Po,Zh=[],$h=[],Jh=new Float32Array(16),Kh=new Float32Array(9),Qh=new Float32Array(4);function Zs(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=Zh[s];if(r===void 0&&(r=new Float32Array(s),Zh[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function ze(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function ke(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function $o(n,t){let e=$h[t];e===void 0&&(e=new Int32Array(t),$h[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function Vm(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function Wm(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;n.uniform2fv(this.addr,t),ke(e,t)}}function Xm(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ze(e,t))return;n.uniform3fv(this.addr,t),ke(e,t)}}function qm(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;n.uniform4fv(this.addr,t),ke(e,t)}}function Ym(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(ze(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),ke(e,t)}else{if(ze(e,i))return;Qh.set(i),n.uniformMatrix2fv(this.addr,!1,Qh),ke(e,i)}}function Zm(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(ze(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),ke(e,t)}else{if(ze(e,i))return;Kh.set(i),n.uniformMatrix3fv(this.addr,!1,Kh),ke(e,i)}}function $m(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(ze(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),ke(e,t)}else{if(ze(e,i))return;Jh.set(i),n.uniformMatrix4fv(this.addr,!1,Jh),ke(e,i)}}function Jm(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function Km(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;n.uniform2iv(this.addr,t),ke(e,t)}}function Qm(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ze(e,t))return;n.uniform3iv(this.addr,t),ke(e,t)}}function jm(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;n.uniform4iv(this.addr,t),ke(e,t)}}function t1(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function e1(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;n.uniform2uiv(this.addr,t),ke(e,t)}}function n1(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ze(e,t))return;n.uniform3uiv(this.addr,t),ke(e,t)}}function i1(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;n.uniform4uiv(this.addr,t),ke(e,t)}}function s1(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Yh.compareFunction=Nd,r=Yh):r=Vd,e.setTexture2D(t||r,s)}function r1(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Xd,s)}function o1(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||qd,s)}function a1(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||Wd,s)}function l1(n){switch(n){case 5126:return Vm;case 35664:return Wm;case 35665:return Xm;case 35666:return qm;case 35674:return Ym;case 35675:return Zm;case 35676:return $m;case 5124:case 35670:return Jm;case 35667:case 35671:return Km;case 35668:case 35672:return Qm;case 35669:case 35673:return jm;case 5125:return t1;case 36294:return e1;case 36295:return n1;case 36296:return i1;case 35678:case 36198:case 36298:case 36306:case 35682:return s1;case 35679:case 36299:case 36307:return r1;case 35680:case 36300:case 36308:case 36293:return o1;case 36289:case 36303:case 36311:case 36292:return a1}}function c1(n,t){n.uniform1fv(this.addr,t)}function h1(n,t){let e=Zs(t,this.size,2);n.uniform2fv(this.addr,e)}function d1(n,t){let e=Zs(t,this.size,3);n.uniform3fv(this.addr,e)}function u1(n,t){let e=Zs(t,this.size,4);n.uniform4fv(this.addr,e)}function f1(n,t){let e=Zs(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function p1(n,t){let e=Zs(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function m1(n,t){let e=Zs(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function g1(n,t){n.uniform1iv(this.addr,t)}function E1(n,t){n.uniform2iv(this.addr,t)}function y1(n,t){n.uniform3iv(this.addr,t)}function _1(n,t){n.uniform4iv(this.addr,t)}function v1(n,t){n.uniform1uiv(this.addr,t)}function A1(n,t){n.uniform2uiv(this.addr,t)}function M1(n,t){n.uniform3uiv(this.addr,t)}function S1(n,t){n.uniform4uiv(this.addr,t)}function T1(n,t,e){let i=this.cache,s=t.length,r=$o(e,s);ze(i,r)||(n.uniform1iv(this.addr,r),ke(i,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Vd,r[o])}function b1(n,t,e){let i=this.cache,s=t.length,r=$o(e,s);ze(i,r)||(n.uniform1iv(this.addr,r),ke(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Xd,r[o])}function w1(n,t,e){let i=this.cache,s=t.length,r=$o(e,s);ze(i,r)||(n.uniform1iv(this.addr,r),ke(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||qd,r[o])}function R1(n,t,e){let i=this.cache,s=t.length,r=$o(e,s);ze(i,r)||(n.uniform1iv(this.addr,r),ke(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Wd,r[o])}function x1(n){switch(n){case 5126:return c1;case 35664:return h1;case 35665:return d1;case 35666:return u1;case 35674:return f1;case 35675:return p1;case 35676:return m1;case 5124:case 35670:return g1;case 35667:case 35671:return E1;case 35668:case 35672:return y1;case 35669:case 35673:return _1;case 5125:return v1;case 36294:return A1;case 36295:return M1;case 36296:return S1;case 35678:case 36198:case 36298:case 36306:case 35682:return T1;case 35679:case 36299:case 36307:return b1;case 35680:case 36300:case 36308:case 36293:return w1;case 36289:case 36303:case 36311:case 36292:return R1}}var Xl=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=l1(e.type)}},ql=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=x1(e.type)}},Yl=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],i)}}},Ya=/(\w+)(\])?(\[|\.)?/g;function jh(n,t){n.seq.push(t),n.map[t.id]=t}function C1(n,t,e){let i=n.name,s=i.length;for(Ya.lastIndex=0;;){let r=Ya.exec(i),o=Ya.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){jh(e,c===void 0?new Xl(a,n,t):new ql(a,n,t));break}else{let d=e.map[a];d===void 0&&(d=new Yl(a),jh(e,d)),e=d}}}var Is=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);C1(r,o,this)}}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&i.push(o)}return i}};function td(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var F1=37297,P1=0;function I1(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}var ed=new Wt;function D1(n){ae._getMatrix(ed,ae.workingColorSpace,n);let t=`mat3( ${ed.elements.map(e=>e.toFixed(4))} )`;switch(ae.getTransfer(n)){case Zo:return[t,"LinearTransferOETF"];case Ee:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function nd(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+I1(n.getShaderSource(t),o)}else return s}function L1(n,t){let e=D1(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function U1(n,t){let e;switch(t){case lf:e="Linear";break;case cf:e="Reinhard";break;case hf:e="Cineon";break;case df:e="ACESFilmic";break;case ff:e="AgX";break;case pf:e="Neutral";break;case uf:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var io=new D;function H1(){ae.getLuminanceCoefficients(io);let n=io.x.toFixed(4),t=io.y.toFixed(4),e=io.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function B1(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ur).join(`
`)}function N1(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function O1(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function ur(n){return n!==""}function id(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function sd(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var z1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Zl(n){return n.replace(z1,G1)}var k1=new Map;function G1(n,t){let e=Yt[t];if(e===void 0){let i=k1.get(t);if(i!==void 0)e=Yt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Zl(e)}var V1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function rd(n){return n.replace(V1,W1)}function W1(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function od(n){let t=`precision ${n.precision} float;
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
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function X1(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===bd?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===wc?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===si&&(t="SHADOWMAP_TYPE_VSM"),t}function q1(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Ls:case Us:t="ENVMAP_TYPE_CUBE";break;case Yo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Y1(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Us:t="ENVMAP_MODE_REFRACTION";break}return t}function Z1(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case wd:t="ENVMAP_BLENDING_MULTIPLY";break;case of:t="ENVMAP_BLENDING_MIX";break;case af:t="ENVMAP_BLENDING_ADD";break}return t}function $1(n){let t=n.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function J1(n,t,e,i){let s=n.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=X1(e),c=q1(e),h=Y1(e),d=Z1(e),u=$1(e),p=B1(e),g=N1(r),E=s.createProgram(),m,f,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ur).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ur).join(`
`),f.length>0&&(f+=`
`)):(m=[od(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ur).join(`
`),f=[od(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==qn?"#define TONE_MAPPING":"",e.toneMapping!==qn?Yt.tonemapping_pars_fragment:"",e.toneMapping!==qn?U1("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Yt.colorspace_pars_fragment,L1("linearToOutputTexel",e.outputColorSpace),H1(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ur).join(`
`)),o=Zl(o),o=id(o,e),o=sd(o,e),a=Zl(a),a=id(a,e),a=sd(a,e),o=rd(o),a=rd(a),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===vh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===vh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let _=v+m+o,y=v+f+a,I=td(s,s.VERTEX_SHADER,_),C=td(s,s.FRAGMENT_SHADER,y);s.attachShader(E,I),s.attachShader(E,C),e.index0AttributeName!==void 0?s.bindAttribLocation(E,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(E,0,"position"),s.linkProgram(E);function b(P){if(n.debug.checkShaderErrors){let N=s.getProgramInfoLog(E).trim(),O=s.getShaderInfoLog(I).trim(),W=s.getShaderInfoLog(C).trim(),Q=!0,Y=!0;if(s.getProgramParameter(E,s.LINK_STATUS)===!1)if(Q=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,E,I,C);else{let st=nd(s,I,"vertex"),q=nd(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(E,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+N+`
`+st+`
`+q)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(O===""||W==="")&&(Y=!1);Y&&(P.diagnostics={runnable:Q,programLog:N,vertexShader:{log:O,prefix:m},fragmentShader:{log:W,prefix:f}})}s.deleteShader(I),s.deleteShader(C),F=new Is(s,E),S=O1(s,E)}let F;this.getUniforms=function(){return F===void 0&&b(this),F};let S;this.getAttributes=function(){return S===void 0&&b(this),S};let A=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=s.getProgramParameter(E,F1)),A},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(E),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=P1++,this.cacheKey=t,this.usedTimes=1,this.program=E,this.vertexShader=I,this.fragmentShader=C,this}var K1=0,$l=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new Jl(t),e.set(t,i)),i}},Jl=class{constructor(t){this.id=K1++,this.code=t,this.usedTimes=0}};function Q1(n,t,e,i,s,r,o){let a=new Ro,l=new $l,c=new Set,h=[],d=s.logarithmicDepthBuffer,u=s.vertexTextures,p=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,A,P,N,O){let W=N.fog,Q=O.geometry,Y=S.isMeshStandardMaterial?N.environment:null,st=(S.isMeshStandardMaterial?e:t).get(S.envMap||Y),q=st&&st.mapping===Yo?st.image.height:null,ht=g[S.type];S.precision!==null&&(p=s.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));let Et=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,Dt=Et!==void 0?Et.length:0,Kt=0;Q.morphAttributes.position!==void 0&&(Kt=1),Q.morphAttributes.normal!==void 0&&(Kt=2),Q.morphAttributes.color!==void 0&&(Kt=3);let Me,$,rt,xt;if(ht){let ge=kn[ht];Me=ge.vertexShader,$=ge.fragmentShader}else Me=S.vertexShader,$=S.fragmentShader,l.update(S),rt=l.getVertexShaderID(S),xt=l.getFragmentShaderID(S);let dt=n.getRenderTarget(),Bt=n.state.buffers.depth.getReversed(),kt=O.isInstancedMesh===!0,Qt=O.isBatchedMesh===!0,Pe=!!S.map,re=!!S.matcap,He=!!st,B=!!S.aoMap,Tn=!!S.lightMap,ee=!!S.bumpMap,ne=!!S.normalMap,Ut=!!S.displacementMap,be=!!S.emissiveMap,Lt=!!S.metalnessMap,x=!!S.roughnessMap,M=S.anisotropy>0,k=S.clearcoat>0,J=S.dispersion>0,j=S.iridescence>0,Z=S.sheen>0,Ft=S.transmission>0,ut=M&&!!S.anisotropyMap,yt=k&&!!S.clearcoatMap,oe=k&&!!S.clearcoatNormalMap,nt=k&&!!S.clearcoatRoughnessMap,_t=j&&!!S.iridescenceMap,Ht=j&&!!S.iridescenceThicknessMap,Nt=Z&&!!S.sheenColorMap,vt=Z&&!!S.sheenRoughnessMap,ie=!!S.specularMap,qt=!!S.specularColorMap,Se=!!S.specularIntensityMap,L=Ft&&!!S.transmissionMap,ct=Ft&&!!S.thicknessMap,X=!!S.gradientMap,K=!!S.alphaMap,gt=S.alphaTest>0,pt=!!S.alphaHash,Gt=!!S.extensions,Le=qn;S.toneMapped&&(dt===null||dt.isXRRenderTarget===!0)&&(Le=n.toneMapping);let Ke={shaderID:ht,shaderType:S.type,shaderName:S.name,vertexShader:Me,fragmentShader:$,defines:S.defines,customVertexShaderID:rt,customFragmentShaderID:xt,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:Qt,batchingColor:Qt&&O._colorsTexture!==null,instancing:kt,instancingColor:kt&&O.instanceColor!==null,instancingMorph:kt&&O.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:dt===null?n.outputColorSpace:dt.isXRRenderTarget===!0?dt.texture.colorSpace:Di,alphaToCoverage:!!S.alphaToCoverage,map:Pe,matcap:re,envMap:He,envMapMode:He&&st.mapping,envMapCubeUVHeight:q,aoMap:B,lightMap:Tn,bumpMap:ee,normalMap:ne,displacementMap:u&&Ut,emissiveMap:be,normalMapObjectSpace:ne&&S.normalMapType===Ef,normalMapTangentSpace:ne&&S.normalMapType===Bd,metalnessMap:Lt,roughnessMap:x,anisotropy:M,anisotropyMap:ut,clearcoat:k,clearcoatMap:yt,clearcoatNormalMap:oe,clearcoatRoughnessMap:nt,dispersion:J,iridescence:j,iridescenceMap:_t,iridescenceThicknessMap:Ht,sheen:Z,sheenColorMap:Nt,sheenRoughnessMap:vt,specularMap:ie,specularColorMap:qt,specularIntensityMap:Se,transmission:Ft,transmissionMap:L,thicknessMap:ct,gradientMap:X,opaque:S.transparent===!1&&S.blending===Ri&&S.alphaToCoverage===!1,alphaMap:K,alphaTest:gt,alphaHash:pt,combine:S.combine,mapUv:Pe&&E(S.map.channel),aoMapUv:B&&E(S.aoMap.channel),lightMapUv:Tn&&E(S.lightMap.channel),bumpMapUv:ee&&E(S.bumpMap.channel),normalMapUv:ne&&E(S.normalMap.channel),displacementMapUv:Ut&&E(S.displacementMap.channel),emissiveMapUv:be&&E(S.emissiveMap.channel),metalnessMapUv:Lt&&E(S.metalnessMap.channel),roughnessMapUv:x&&E(S.roughnessMap.channel),anisotropyMapUv:ut&&E(S.anisotropyMap.channel),clearcoatMapUv:yt&&E(S.clearcoatMap.channel),clearcoatNormalMapUv:oe&&E(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:nt&&E(S.clearcoatRoughnessMap.channel),iridescenceMapUv:_t&&E(S.iridescenceMap.channel),iridescenceThicknessMapUv:Ht&&E(S.iridescenceThicknessMap.channel),sheenColorMapUv:Nt&&E(S.sheenColorMap.channel),sheenRoughnessMapUv:vt&&E(S.sheenRoughnessMap.channel),specularMapUv:ie&&E(S.specularMap.channel),specularColorMapUv:qt&&E(S.specularColorMap.channel),specularIntensityMapUv:Se&&E(S.specularIntensityMap.channel),transmissionMapUv:L&&E(S.transmissionMap.channel),thicknessMapUv:ct&&E(S.thicknessMap.channel),alphaMapUv:K&&E(S.alphaMap.channel),vertexTangents:!!Q.attributes.tangent&&(ne||M),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!Q.attributes.uv&&(Pe||K),fog:!!W,useFog:S.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:Bt,skinning:O.isSkinnedMesh===!0,morphTargets:Q.morphAttributes.position!==void 0,morphNormals:Q.morphAttributes.normal!==void 0,morphColors:Q.morphAttributes.color!==void 0,morphTargetsCount:Dt,morphTextureStride:Kt,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:Le,decodeVideoTexture:Pe&&S.map.isVideoTexture===!0&&ae.getTransfer(S.map.colorSpace)===Ee,decodeVideoTextureEmissive:be&&S.emissiveMap.isVideoTexture===!0&&ae.getTransfer(S.emissiveMap.colorSpace)===Ee,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===he,flipSided:S.side===Ve,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Gt&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Gt&&S.extensions.multiDraw===!0||Qt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Ke.vertexUv1s=c.has(1),Ke.vertexUv2s=c.has(2),Ke.vertexUv3s=c.has(3),c.clear(),Ke}function f(S){let A=[];if(S.shaderID?A.push(S.shaderID):(A.push(S.customVertexShaderID),A.push(S.customFragmentShaderID)),S.defines!==void 0)for(let P in S.defines)A.push(P),A.push(S.defines[P]);return S.isRawShaderMaterial===!1&&(v(A,S),_(A,S),A.push(n.outputColorSpace)),A.push(S.customProgramCacheKey),A.join()}function v(S,A){S.push(A.precision),S.push(A.outputColorSpace),S.push(A.envMapMode),S.push(A.envMapCubeUVHeight),S.push(A.mapUv),S.push(A.alphaMapUv),S.push(A.lightMapUv),S.push(A.aoMapUv),S.push(A.bumpMapUv),S.push(A.normalMapUv),S.push(A.displacementMapUv),S.push(A.emissiveMapUv),S.push(A.metalnessMapUv),S.push(A.roughnessMapUv),S.push(A.anisotropyMapUv),S.push(A.clearcoatMapUv),S.push(A.clearcoatNormalMapUv),S.push(A.clearcoatRoughnessMapUv),S.push(A.iridescenceMapUv),S.push(A.iridescenceThicknessMapUv),S.push(A.sheenColorMapUv),S.push(A.sheenRoughnessMapUv),S.push(A.specularMapUv),S.push(A.specularColorMapUv),S.push(A.specularIntensityMapUv),S.push(A.transmissionMapUv),S.push(A.thicknessMapUv),S.push(A.combine),S.push(A.fogExp2),S.push(A.sizeAttenuation),S.push(A.morphTargetsCount),S.push(A.morphAttributeCount),S.push(A.numDirLights),S.push(A.numPointLights),S.push(A.numSpotLights),S.push(A.numSpotLightMaps),S.push(A.numHemiLights),S.push(A.numRectAreaLights),S.push(A.numDirLightShadows),S.push(A.numPointLightShadows),S.push(A.numSpotLightShadows),S.push(A.numSpotLightShadowsWithMaps),S.push(A.numLightProbes),S.push(A.shadowMapType),S.push(A.toneMapping),S.push(A.numClippingPlanes),S.push(A.numClipIntersection),S.push(A.depthPacking)}function _(S,A){a.disableAll(),A.supportsVertexTextures&&a.enable(0),A.instancing&&a.enable(1),A.instancingColor&&a.enable(2),A.instancingMorph&&a.enable(3),A.matcap&&a.enable(4),A.envMap&&a.enable(5),A.normalMapObjectSpace&&a.enable(6),A.normalMapTangentSpace&&a.enable(7),A.clearcoat&&a.enable(8),A.iridescence&&a.enable(9),A.alphaTest&&a.enable(10),A.vertexColors&&a.enable(11),A.vertexAlphas&&a.enable(12),A.vertexUv1s&&a.enable(13),A.vertexUv2s&&a.enable(14),A.vertexUv3s&&a.enable(15),A.vertexTangents&&a.enable(16),A.anisotropy&&a.enable(17),A.alphaHash&&a.enable(18),A.batching&&a.enable(19),A.dispersion&&a.enable(20),A.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.reverseDepthBuffer&&a.enable(4),A.skinning&&a.enable(5),A.morphTargets&&a.enable(6),A.morphNormals&&a.enable(7),A.morphColors&&a.enable(8),A.premultipliedAlpha&&a.enable(9),A.shadowMapEnabled&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),A.decodeVideoTextureEmissive&&a.enable(20),A.alphaToCoverage&&a.enable(21),S.push(a.mask)}function y(S){let A=g[S.type],P;if(A){let N=kn[A];P=Ys.clone(N.uniforms)}else P=S.uniforms;return P}function I(S,A){let P;for(let N=0,O=h.length;N<O;N++){let W=h[N];if(W.cacheKey===A){P=W,++P.usedTimes;break}}return P===void 0&&(P=new J1(n,A,S,r),h.push(P)),P}function C(S){if(--S.usedTimes===0){let A=h.indexOf(S);h[A]=h[h.length-1],h.pop(),S.destroy()}}function b(S){l.remove(S)}function F(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:y,acquireProgram:I,releaseProgram:C,releaseShaderCache:b,programs:h,dispose:F}}function j1(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function tg(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function ad(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function ld(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(d,u,p,g,E,m){let f=n[t];return f===void 0?(f={id:d.id,object:d,geometry:u,material:p,groupOrder:g,renderOrder:d.renderOrder,z:E,group:m},n[t]=f):(f.id=d.id,f.object=d,f.geometry=u,f.material=p,f.groupOrder=g,f.renderOrder=d.renderOrder,f.z=E,f.group=m),t++,f}function a(d,u,p,g,E,m){let f=o(d,u,p,g,E,m);p.transmission>0?i.push(f):p.transparent===!0?s.push(f):e.push(f)}function l(d,u,p,g,E,m){let f=o(d,u,p,g,E,m);p.transmission>0?i.unshift(f):p.transparent===!0?s.unshift(f):e.unshift(f)}function c(d,u){e.length>1&&e.sort(d||tg),i.length>1&&i.sort(u||ad),s.length>1&&s.sort(u||ad)}function h(){for(let d=t,u=n.length;d<u;d++){let p=n[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function eg(){let n=new WeakMap;function t(i,s){let r=n.get(i),o;return r===void 0?(o=new ld,n.set(i,[o])):s>=r.length?(o=new ld,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function ng(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new D,color:new ot};break;case"SpotLight":e={position:new D,direction:new D,color:new ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new ot,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new ot,groundColor:new ot};break;case"RectAreaLight":e={color:new ot,position:new D,halfWidth:new D,halfHeight:new D};break}return n[t.id]=e,e}}}function ig(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var sg=0;function rg(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function og(n){let t=new ng,e=ig(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new D);let s=new D,r=new ve,o=new ve;function a(c){let h=0,d=0,u=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let p=0,g=0,E=0,m=0,f=0,v=0,_=0,y=0,I=0,C=0,b=0;c.sort(rg);for(let S=0,A=c.length;S<A;S++){let P=c[S],N=P.color,O=P.intensity,W=P.distance,Q=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=N.r*O,d+=N.g*O,u+=N.b*O;else if(P.isLightProbe){for(let Y=0;Y<9;Y++)i.probe[Y].addScaledVector(P.sh.coefficients[Y],O);b++}else if(P.isDirectionalLight){let Y=t.get(P);if(Y.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let st=P.shadow,q=e.get(P);q.shadowIntensity=st.intensity,q.shadowBias=st.bias,q.shadowNormalBias=st.normalBias,q.shadowRadius=st.radius,q.shadowMapSize=st.mapSize,i.directionalShadow[p]=q,i.directionalShadowMap[p]=Q,i.directionalShadowMatrix[p]=P.shadow.matrix,v++}i.directional[p]=Y,p++}else if(P.isSpotLight){let Y=t.get(P);Y.position.setFromMatrixPosition(P.matrixWorld),Y.color.copy(N).multiplyScalar(O),Y.distance=W,Y.coneCos=Math.cos(P.angle),Y.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),Y.decay=P.decay,i.spot[E]=Y;let st=P.shadow;if(P.map&&(i.spotLightMap[I]=P.map,I++,st.updateMatrices(P),P.castShadow&&C++),i.spotLightMatrix[E]=st.matrix,P.castShadow){let q=e.get(P);q.shadowIntensity=st.intensity,q.shadowBias=st.bias,q.shadowNormalBias=st.normalBias,q.shadowRadius=st.radius,q.shadowMapSize=st.mapSize,i.spotShadow[E]=q,i.spotShadowMap[E]=Q,y++}E++}else if(P.isRectAreaLight){let Y=t.get(P);Y.color.copy(N).multiplyScalar(O),Y.halfWidth.set(P.width*.5,0,0),Y.halfHeight.set(0,P.height*.5,0),i.rectArea[m]=Y,m++}else if(P.isPointLight){let Y=t.get(P);if(Y.color.copy(P.color).multiplyScalar(P.intensity),Y.distance=P.distance,Y.decay=P.decay,P.castShadow){let st=P.shadow,q=e.get(P);q.shadowIntensity=st.intensity,q.shadowBias=st.bias,q.shadowNormalBias=st.normalBias,q.shadowRadius=st.radius,q.shadowMapSize=st.mapSize,q.shadowCameraNear=st.camera.near,q.shadowCameraFar=st.camera.far,i.pointShadow[g]=q,i.pointShadowMap[g]=Q,i.pointShadowMatrix[g]=P.shadow.matrix,_++}i.point[g]=Y,g++}else if(P.isHemisphereLight){let Y=t.get(P);Y.skyColor.copy(P.color).multiplyScalar(O),Y.groundColor.copy(P.groundColor).multiplyScalar(O),i.hemi[f]=Y,f++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=lt.LTC_FLOAT_1,i.rectAreaLTC2=lt.LTC_FLOAT_2):(i.rectAreaLTC1=lt.LTC_HALF_1,i.rectAreaLTC2=lt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=u;let F=i.hash;(F.directionalLength!==p||F.pointLength!==g||F.spotLength!==E||F.rectAreaLength!==m||F.hemiLength!==f||F.numDirectionalShadows!==v||F.numPointShadows!==_||F.numSpotShadows!==y||F.numSpotMaps!==I||F.numLightProbes!==b)&&(i.directional.length=p,i.spot.length=E,i.rectArea.length=m,i.point.length=g,i.hemi.length=f,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=_,i.spotLightMatrix.length=y+I-C,i.spotLightMap.length=I,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=b,F.directionalLength=p,F.pointLength=g,F.spotLength=E,F.rectAreaLength=m,F.hemiLength=f,F.numDirectionalShadows=v,F.numPointShadows=_,F.numSpotShadows=y,F.numSpotMaps=I,F.numLightProbes=b,i.version=sg++)}function l(c,h){let d=0,u=0,p=0,g=0,E=0,m=h.matrixWorldInverse;for(let f=0,v=c.length;f<v;f++){let _=c[f];if(_.isDirectionalLight){let y=i.directional[d];y.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),d++}else if(_.isSpotLight){let y=i.spot[p];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),p++}else if(_.isRectAreaLight){let y=i.rectArea[g];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(m),o.identity(),r.copy(_.matrixWorld),r.premultiply(m),o.extractRotation(r),y.halfWidth.set(_.width*.5,0,0),y.halfHeight.set(0,_.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(_.isPointLight){let y=i.point[u];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(m),u++}else if(_.isHemisphereLight){let y=i.hemi[E];y.direction.setFromMatrixPosition(_.matrixWorld),y.direction.transformDirection(m),E++}}}return{setup:a,setupView:l,state:i}}function cd(n){let t=new og(n),e=[],i=[];function s(h){c.camera=h,e.length=0,i.length=0}function r(h){e.push(h)}function o(h){i.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function ag(n){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new cd(n),t.set(s,[a])):r>=o.length?(a=new cd(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}var Ii=class extends ui{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=gf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Kl=class extends ui{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},lg=`void main() {
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
}`;function hg(n,t,e){let i=new yr,s=new et,r=new et,o=new _e,a=new Ii({depthPacking:qs}),l=new Kl,c={},h=e.maxTextureSize,d={[xi]:Ve,[Ve]:xi,[he]:he},u=new Xe({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new et},radius:{value:4}},vertexShader:lg,fragmentShader:cg}),p=u.clone();p.defines.HORIZONTAL_PASS=1;let g=new Ue;g.setAttribute("position",new Oe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let E=new z(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=bd;let f=this.type;this.render=function(C,b,F){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;let S=n.getRenderTarget(),A=n.getActiveCubeFace(),P=n.getActiveMipmapLevel(),N=n.state;N.setBlending(Xn),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let O=f!==si&&this.type===si,W=f===si&&this.type!==si;for(let Q=0,Y=C.length;Q<Y;Q++){let st=C[Q],q=st.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",st,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;s.copy(q.mapSize);let ht=q.getFrameExtents();if(s.multiply(ht),r.copy(q.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ht.x),s.x=r.x*ht.x,q.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ht.y),s.y=r.y*ht.y,q.mapSize.y=r.y)),q.map===null||O===!0||W===!0){let Dt=this.type!==si?{minFilter:Mn,magFilter:Mn}:{};q.map!==null&&q.map.dispose(),q.map=new We(s.x,s.y,Dt),q.map.texture.name=st.name+".shadowMap",q.camera.updateProjectionMatrix()}n.setRenderTarget(q.map),n.clear();let Et=q.getViewportCount();for(let Dt=0;Dt<Et;Dt++){let Kt=q.getViewport(Dt);o.set(r.x*Kt.x,r.y*Kt.y,r.x*Kt.z,r.y*Kt.w),N.viewport(o),q.updateMatrices(st,Dt),i=q.getFrustum(),y(b,F,q.camera,st,this.type)}q.isPointLightShadow!==!0&&this.type===si&&v(q,F),q.needsUpdate=!1}f=this.type,m.needsUpdate=!1,n.setRenderTarget(S,A,P)};function v(C,b){let F=t.update(E);u.defines.VSM_SAMPLES!==C.blurSamples&&(u.defines.VSM_SAMPLES=C.blurSamples,p.defines.VSM_SAMPLES=C.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new We(s.x,s.y)),u.uniforms.shadow_pass.value=C.map.texture,u.uniforms.resolution.value=C.mapSize,u.uniforms.radius.value=C.radius,n.setRenderTarget(C.mapPass),n.clear(),n.renderBufferDirect(b,null,F,u,E,null),p.uniforms.shadow_pass.value=C.mapPass.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,n.setRenderTarget(C.map),n.clear(),n.renderBufferDirect(b,null,F,p,E,null)}function _(C,b,F,S){let A=null,P=F.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(P!==void 0)A=P;else if(A=F.isPointLight===!0?l:a,n.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){let N=A.uuid,O=b.uuid,W=c[N];W===void 0&&(W={},c[N]=W);let Q=W[O];Q===void 0&&(Q=A.clone(),W[O]=Q,b.addEventListener("dispose",I)),A=Q}if(A.visible=b.visible,A.wireframe=b.wireframe,S===si?A.side=b.shadowSide!==null?b.shadowSide:b.side:A.side=b.shadowSide!==null?b.shadowSide:d[b.side],A.alphaMap=b.alphaMap,A.alphaTest=b.alphaTest,A.map=b.map,A.clipShadows=b.clipShadows,A.clippingPlanes=b.clippingPlanes,A.clipIntersection=b.clipIntersection,A.displacementMap=b.displacementMap,A.displacementScale=b.displacementScale,A.displacementBias=b.displacementBias,A.wireframeLinewidth=b.wireframeLinewidth,A.linewidth=b.linewidth,F.isPointLight===!0&&A.isMeshDistanceMaterial===!0){let N=n.properties.get(A);N.light=F}return A}function y(C,b,F,S,A){if(C.visible===!1)return;if(C.layers.test(b.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&A===si)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,C.matrixWorld);let O=t.update(C),W=C.material;if(Array.isArray(W)){let Q=O.groups;for(let Y=0,st=Q.length;Y<st;Y++){let q=Q[Y],ht=W[q.materialIndex];if(ht&&ht.visible){let Et=_(C,ht,S,A);C.onBeforeShadow(n,C,b,F,O,Et,q),n.renderBufferDirect(F,null,O,Et,C,q),C.onAfterShadow(n,C,b,F,O,Et,q)}}}else if(W.visible){let Q=_(C,W,S,A);C.onBeforeShadow(n,C,b,F,O,Q,null),n.renderBufferDirect(F,null,O,Q,C,null),C.onAfterShadow(n,C,b,F,O,Q,null)}}let N=C.children;for(let O=0,W=N.length;O<W;O++)y(N[O],b,F,S,A)}function I(C){C.target.removeEventListener("dispose",I);for(let F in c){let S=c[F],A=C.target.uuid;A in S&&(S[A].dispose(),delete S[A])}}}var dg={[nl]:il,[sl]:al,[rl]:ll,[Ds]:ol,[il]:nl,[al]:sl,[ll]:rl,[ol]:Ds};function ug(n,t){function e(){let L=!1,ct=new _e,X=null,K=new _e(0,0,0,0);return{setMask:function(gt){X!==gt&&!L&&(n.colorMask(gt,gt,gt,gt),X=gt)},setLocked:function(gt){L=gt},setClear:function(gt,pt,Gt,Le,Ke){Ke===!0&&(gt*=Le,pt*=Le,Gt*=Le),ct.set(gt,pt,Gt,Le),K.equals(ct)===!1&&(n.clearColor(gt,pt,Gt,Le),K.copy(ct))},reset:function(){L=!1,X=null,K.set(-1,0,0,0)}}}function i(){let L=!1,ct=!1,X=null,K=null,gt=null;return{setReversed:function(pt){if(ct!==pt){let Gt=t.get("EXT_clip_control");ct?Gt.clipControlEXT(Gt.LOWER_LEFT_EXT,Gt.ZERO_TO_ONE_EXT):Gt.clipControlEXT(Gt.LOWER_LEFT_EXT,Gt.NEGATIVE_ONE_TO_ONE_EXT);let Le=gt;gt=null,this.setClear(Le)}ct=pt},getReversed:function(){return ct},setTest:function(pt){pt?dt(n.DEPTH_TEST):Bt(n.DEPTH_TEST)},setMask:function(pt){X!==pt&&!L&&(n.depthMask(pt),X=pt)},setFunc:function(pt){if(ct&&(pt=dg[pt]),K!==pt){switch(pt){case nl:n.depthFunc(n.NEVER);break;case il:n.depthFunc(n.ALWAYS);break;case sl:n.depthFunc(n.LESS);break;case Ds:n.depthFunc(n.LEQUAL);break;case rl:n.depthFunc(n.EQUAL);break;case ol:n.depthFunc(n.GEQUAL);break;case al:n.depthFunc(n.GREATER);break;case ll:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}K=pt}},setLocked:function(pt){L=pt},setClear:function(pt){gt!==pt&&(ct&&(pt=1-pt),n.clearDepth(pt),gt=pt)},reset:function(){L=!1,X=null,K=null,gt=null,ct=!1}}}function s(){let L=!1,ct=null,X=null,K=null,gt=null,pt=null,Gt=null,Le=null,Ke=null;return{setTest:function(ge){L||(ge?dt(n.STENCIL_TEST):Bt(n.STENCIL_TEST))},setMask:function(ge){ct!==ge&&!L&&(n.stencilMask(ge),ct=ge)},setFunc:function(ge,Fn,Kn){(X!==ge||K!==Fn||gt!==Kn)&&(n.stencilFunc(ge,Fn,Kn),X=ge,K=Fn,gt=Kn)},setOp:function(ge,Fn,Kn){(pt!==ge||Gt!==Fn||Le!==Kn)&&(n.stencilOp(ge,Fn,Kn),pt=ge,Gt=Fn,Le=Kn)},setLocked:function(ge){L=ge},setClear:function(ge){Ke!==ge&&(n.clearStencil(ge),Ke=ge)},reset:function(){L=!1,ct=null,X=null,K=null,gt=null,pt=null,Gt=null,Le=null,Ke=null}}}let r=new e,o=new i,a=new s,l=new WeakMap,c=new WeakMap,h={},d={},u=new WeakMap,p=[],g=null,E=!1,m=null,f=null,v=null,_=null,y=null,I=null,C=null,b=new ot(0,0,0),F=0,S=!1,A=null,P=null,N=null,O=null,W=null,Q=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Y=!1,st=0,q=n.getParameter(n.VERSION);q.indexOf("WebGL")!==-1?(st=parseFloat(/^WebGL (\d)/.exec(q)[1]),Y=st>=1):q.indexOf("OpenGL ES")!==-1&&(st=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),Y=st>=2);let ht=null,Et={},Dt=n.getParameter(n.SCISSOR_BOX),Kt=n.getParameter(n.VIEWPORT),Me=new _e().fromArray(Dt),$=new _e().fromArray(Kt);function rt(L,ct,X,K){let gt=new Uint8Array(4),pt=n.createTexture();n.bindTexture(L,pt),n.texParameteri(L,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(L,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Gt=0;Gt<X;Gt++)L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY?n.texImage3D(ct,0,n.RGBA,1,1,K,0,n.RGBA,n.UNSIGNED_BYTE,gt):n.texImage2D(ct+Gt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,gt);return pt}let xt={};xt[n.TEXTURE_2D]=rt(n.TEXTURE_2D,n.TEXTURE_2D,1),xt[n.TEXTURE_CUBE_MAP]=rt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),xt[n.TEXTURE_2D_ARRAY]=rt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),xt[n.TEXTURE_3D]=rt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),dt(n.DEPTH_TEST),o.setFunc(Ds),ee(!1),ne(fh),dt(n.CULL_FACE),B(Xn);function dt(L){h[L]!==!0&&(n.enable(L),h[L]=!0)}function Bt(L){h[L]!==!1&&(n.disable(L),h[L]=!1)}function kt(L,ct){return d[L]!==ct?(n.bindFramebuffer(L,ct),d[L]=ct,L===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=ct),L===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=ct),!0):!1}function Qt(L,ct){let X=p,K=!1;if(L){X=u.get(ct),X===void 0&&(X=[],u.set(ct,X));let gt=L.textures;if(X.length!==gt.length||X[0]!==n.COLOR_ATTACHMENT0){for(let pt=0,Gt=gt.length;pt<Gt;pt++)X[pt]=n.COLOR_ATTACHMENT0+pt;X.length=gt.length,K=!0}}else X[0]!==n.BACK&&(X[0]=n.BACK,K=!0);K&&n.drawBuffers(X)}function Pe(L){return g!==L?(n.useProgram(L),g=L,!0):!1}let re={[Yi]:n.FUNC_ADD,[Gu]:n.FUNC_SUBTRACT,[Vu]:n.FUNC_REVERSE_SUBTRACT};re[Wu]=n.MIN,re[Xu]=n.MAX;let He={[qu]:n.ZERO,[Yu]:n.ONE,[Zu]:n.SRC_COLOR,[tl]:n.SRC_ALPHA,[tf]:n.SRC_ALPHA_SATURATE,[Qu]:n.DST_COLOR,[Ju]:n.DST_ALPHA,[$u]:n.ONE_MINUS_SRC_COLOR,[el]:n.ONE_MINUS_SRC_ALPHA,[ju]:n.ONE_MINUS_DST_COLOR,[Ku]:n.ONE_MINUS_DST_ALPHA,[ef]:n.CONSTANT_COLOR,[nf]:n.ONE_MINUS_CONSTANT_COLOR,[sf]:n.CONSTANT_ALPHA,[rf]:n.ONE_MINUS_CONSTANT_ALPHA};function B(L,ct,X,K,gt,pt,Gt,Le,Ke,ge){if(L===Xn){E===!0&&(Bt(n.BLEND),E=!1);return}if(E===!1&&(dt(n.BLEND),E=!0),L!==ku){if(L!==m||ge!==S){if((f!==Yi||y!==Yi)&&(n.blendEquation(n.FUNC_ADD),f=Yi,y=Yi),ge)switch(L){case Ri:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case dn:n.blendFunc(n.ONE,n.ONE);break;case ph:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case mh:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Ri:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case dn:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case ph:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case mh:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}v=null,_=null,I=null,C=null,b.set(0,0,0),F=0,m=L,S=ge}return}gt=gt||ct,pt=pt||X,Gt=Gt||K,(ct!==f||gt!==y)&&(n.blendEquationSeparate(re[ct],re[gt]),f=ct,y=gt),(X!==v||K!==_||pt!==I||Gt!==C)&&(n.blendFuncSeparate(He[X],He[K],He[pt],He[Gt]),v=X,_=K,I=pt,C=Gt),(Le.equals(b)===!1||Ke!==F)&&(n.blendColor(Le.r,Le.g,Le.b,Ke),b.copy(Le),F=Ke),m=L,S=!1}function Tn(L,ct){L.side===he?Bt(n.CULL_FACE):dt(n.CULL_FACE);let X=L.side===Ve;ct&&(X=!X),ee(X),L.blending===Ri&&L.transparent===!1?B(Xn):B(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),o.setFunc(L.depthFunc),o.setTest(L.depthTest),o.setMask(L.depthWrite),r.setMask(L.colorWrite);let K=L.stencilWrite;a.setTest(K),K&&(a.setMask(L.stencilWriteMask),a.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),a.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),be(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?dt(n.SAMPLE_ALPHA_TO_COVERAGE):Bt(n.SAMPLE_ALPHA_TO_COVERAGE)}function ee(L){A!==L&&(L?n.frontFace(n.CW):n.frontFace(n.CCW),A=L)}function ne(L){L!==Ou?(dt(n.CULL_FACE),L!==P&&(L===fh?n.cullFace(n.BACK):L===zu?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Bt(n.CULL_FACE),P=L}function Ut(L){L!==N&&(Y&&n.lineWidth(L),N=L)}function be(L,ct,X){L?(dt(n.POLYGON_OFFSET_FILL),(O!==ct||W!==X)&&(n.polygonOffset(ct,X),O=ct,W=X)):Bt(n.POLYGON_OFFSET_FILL)}function Lt(L){L?dt(n.SCISSOR_TEST):Bt(n.SCISSOR_TEST)}function x(L){L===void 0&&(L=n.TEXTURE0+Q-1),ht!==L&&(n.activeTexture(L),ht=L)}function M(L,ct,X){X===void 0&&(ht===null?X=n.TEXTURE0+Q-1:X=ht);let K=Et[X];K===void 0&&(K={type:void 0,texture:void 0},Et[X]=K),(K.type!==L||K.texture!==ct)&&(ht!==X&&(n.activeTexture(X),ht=X),n.bindTexture(L,ct||xt[L]),K.type=L,K.texture=ct)}function k(){let L=Et[ht];L!==void 0&&L.type!==void 0&&(n.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function J(){try{n.compressedTexImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function j(){try{n.compressedTexImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Z(){try{n.texSubImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ft(){try{n.texSubImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ut(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function yt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function oe(){try{n.texStorage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function nt(){try{n.texStorage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function _t(){try{n.texImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ht(){try{n.texImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Nt(L){Me.equals(L)===!1&&(n.scissor(L.x,L.y,L.z,L.w),Me.copy(L))}function vt(L){$.equals(L)===!1&&(n.viewport(L.x,L.y,L.z,L.w),$.copy(L))}function ie(L,ct){let X=c.get(ct);X===void 0&&(X=new WeakMap,c.set(ct,X));let K=X.get(L);K===void 0&&(K=n.getUniformBlockIndex(ct,L.name),X.set(L,K))}function qt(L,ct){let K=c.get(ct).get(L);l.get(ct)!==K&&(n.uniformBlockBinding(ct,K,L.__bindingPointIndex),l.set(ct,K))}function Se(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},ht=null,Et={},d={},u=new WeakMap,p=[],g=null,E=!1,m=null,f=null,v=null,_=null,y=null,I=null,C=null,b=new ot(0,0,0),F=0,S=!1,A=null,P=null,N=null,O=null,W=null,Me.set(0,0,n.canvas.width,n.canvas.height),$.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:dt,disable:Bt,bindFramebuffer:kt,drawBuffers:Qt,useProgram:Pe,setBlending:B,setMaterial:Tn,setFlipSided:ee,setCullFace:ne,setLineWidth:Ut,setPolygonOffset:be,setScissorTest:Lt,activeTexture:x,bindTexture:M,unbindTexture:k,compressedTexImage2D:J,compressedTexImage3D:j,texImage2D:_t,texImage3D:Ht,updateUBOMapping:ie,uniformBlockBinding:qt,texStorage2D:oe,texStorage3D:nt,texSubImage2D:Z,texSubImage3D:Ft,compressedTexSubImage2D:ut,compressedTexSubImage3D:yt,scissor:Nt,viewport:vt,reset:Se}}function hd(n,t,e,i){let s=fg(i);switch(e){case Pd:return n*t;case Dd:return n*t;case Ld:return n*t*2;case Fc:return n*t/s.components*s.byteLength;case Pc:return n*t/s.components*s.byteLength;case Ud:return n*t*2/s.components*s.byteLength;case Ic:return n*t*2/s.components*s.byteLength;case Id:return n*t*3/s.components*s.byteLength;case Un:return n*t*4/s.components*s.byteLength;case Dc:return n*t*4/s.components*s.byteLength;case mo:case go:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Eo:case yo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case fl:case ml:return Math.max(n,16)*Math.max(t,8)/4;case ul:case pl:return Math.max(n,8)*Math.max(t,8)/2;case gl:case El:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case yl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case _l:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case vl:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Al:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Ml:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Sl:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Tl:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case bl:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case wl:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Rl:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case xl:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Cl:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Fl:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Pl:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Il:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case _o:case Dl:case Ll:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Hd:case Ul:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Hl:case Bl:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function fg(n){switch(n){case ci:case xd:return{byteLength:1,components:1};case Er:case Cd:case mn:return{byteLength:2,components:1};case xc:case Cc:return{byteLength:2,components:4};case hi:case Rc:case Wn:return{byteLength:4,components:1};case Fd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function pg(n,t,e,i,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new et,h=new WeakMap,d,u=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(x,M){return p?new OffscreenCanvas(x,M):So("canvas")}function E(x,M,k){let J=1,j=Lt(x);if((j.width>k||j.height>k)&&(J=k/Math.max(j.width,j.height)),J<1)if(typeof HTMLImageElement<"u"&&x instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&x instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&x instanceof ImageBitmap||typeof VideoFrame<"u"&&x instanceof VideoFrame){let Z=Math.floor(J*j.width),Ft=Math.floor(J*j.height);d===void 0&&(d=g(Z,Ft));let ut=M?g(Z,Ft):d;return ut.width=Z,ut.height=Ft,ut.getContext("2d").drawImage(x,0,0,Z,Ft),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+Z+"x"+Ft+")."),ut}else return"data"in x&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),x;return x}function m(x){return x.generateMipmaps}function f(x){n.generateMipmap(x)}function v(x){return x.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:x.isWebGL3DRenderTarget?n.TEXTURE_3D:x.isWebGLArrayRenderTarget||x.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function _(x,M,k,J,j=!1){if(x!==null){if(n[x]!==void 0)return n[x];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+x+"'")}let Z=M;if(M===n.RED&&(k===n.FLOAT&&(Z=n.R32F),k===n.HALF_FLOAT&&(Z=n.R16F),k===n.UNSIGNED_BYTE&&(Z=n.R8)),M===n.RED_INTEGER&&(k===n.UNSIGNED_BYTE&&(Z=n.R8UI),k===n.UNSIGNED_SHORT&&(Z=n.R16UI),k===n.UNSIGNED_INT&&(Z=n.R32UI),k===n.BYTE&&(Z=n.R8I),k===n.SHORT&&(Z=n.R16I),k===n.INT&&(Z=n.R32I)),M===n.RG&&(k===n.FLOAT&&(Z=n.RG32F),k===n.HALF_FLOAT&&(Z=n.RG16F),k===n.UNSIGNED_BYTE&&(Z=n.RG8)),M===n.RG_INTEGER&&(k===n.UNSIGNED_BYTE&&(Z=n.RG8UI),k===n.UNSIGNED_SHORT&&(Z=n.RG16UI),k===n.UNSIGNED_INT&&(Z=n.RG32UI),k===n.BYTE&&(Z=n.RG8I),k===n.SHORT&&(Z=n.RG16I),k===n.INT&&(Z=n.RG32I)),M===n.RGB_INTEGER&&(k===n.UNSIGNED_BYTE&&(Z=n.RGB8UI),k===n.UNSIGNED_SHORT&&(Z=n.RGB16UI),k===n.UNSIGNED_INT&&(Z=n.RGB32UI),k===n.BYTE&&(Z=n.RGB8I),k===n.SHORT&&(Z=n.RGB16I),k===n.INT&&(Z=n.RGB32I)),M===n.RGBA_INTEGER&&(k===n.UNSIGNED_BYTE&&(Z=n.RGBA8UI),k===n.UNSIGNED_SHORT&&(Z=n.RGBA16UI),k===n.UNSIGNED_INT&&(Z=n.RGBA32UI),k===n.BYTE&&(Z=n.RGBA8I),k===n.SHORT&&(Z=n.RGBA16I),k===n.INT&&(Z=n.RGBA32I)),M===n.RGB&&k===n.UNSIGNED_INT_5_9_9_9_REV&&(Z=n.RGB9_E5),M===n.RGBA){let Ft=j?Zo:ae.getTransfer(J);k===n.FLOAT&&(Z=n.RGBA32F),k===n.HALF_FLOAT&&(Z=n.RGBA16F),k===n.UNSIGNED_BYTE&&(Z=Ft===Ee?n.SRGB8_ALPHA8:n.RGBA8),k===n.UNSIGNED_SHORT_4_4_4_4&&(Z=n.RGBA4),k===n.UNSIGNED_SHORT_5_5_5_1&&(Z=n.RGB5_A1)}return(Z===n.R16F||Z===n.R32F||Z===n.RG16F||Z===n.RG32F||Z===n.RGBA16F||Z===n.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function y(x,M){let k;return x?M===null||M===hi||M===Hs?k=n.DEPTH24_STENCIL8:M===Wn?k=n.DEPTH32F_STENCIL8:M===Er&&(k=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===hi||M===Hs?k=n.DEPTH_COMPONENT24:M===Wn?k=n.DEPTH_COMPONENT32F:M===Er&&(k=n.DEPTH_COMPONENT16),k}function I(x,M){return m(x)===!0||x.isFramebufferTexture&&x.minFilter!==Mn&&x.minFilter!==Vn?Math.log2(Math.max(M.width,M.height))+1:x.mipmaps!==void 0&&x.mipmaps.length>0?x.mipmaps.length:x.isCompressedTexture&&Array.isArray(x.image)?M.mipmaps.length:1}function C(x){let M=x.target;M.removeEventListener("dispose",C),F(M),M.isVideoTexture&&h.delete(M)}function b(x){let M=x.target;M.removeEventListener("dispose",b),A(M)}function F(x){let M=i.get(x);if(M.__webglInit===void 0)return;let k=x.source,J=u.get(k);if(J){let j=J[M.__cacheKey];j.usedTimes--,j.usedTimes===0&&S(x),Object.keys(J).length===0&&u.delete(k)}i.remove(x)}function S(x){let M=i.get(x);n.deleteTexture(M.__webglTexture);let k=x.source,J=u.get(k);delete J[M.__cacheKey],o.memory.textures--}function A(x){let M=i.get(x);if(x.depthTexture&&(x.depthTexture.dispose(),i.remove(x.depthTexture)),x.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(M.__webglFramebuffer[J]))for(let j=0;j<M.__webglFramebuffer[J].length;j++)n.deleteFramebuffer(M.__webglFramebuffer[J][j]);else n.deleteFramebuffer(M.__webglFramebuffer[J]);M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer[J])}else{if(Array.isArray(M.__webglFramebuffer))for(let J=0;J<M.__webglFramebuffer.length;J++)n.deleteFramebuffer(M.__webglFramebuffer[J]);else n.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&n.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let J=0;J<M.__webglColorRenderbuffer.length;J++)M.__webglColorRenderbuffer[J]&&n.deleteRenderbuffer(M.__webglColorRenderbuffer[J]);M.__webglDepthRenderbuffer&&n.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let k=x.textures;for(let J=0,j=k.length;J<j;J++){let Z=i.get(k[J]);Z.__webglTexture&&(n.deleteTexture(Z.__webglTexture),o.memory.textures--),i.remove(k[J])}i.remove(x)}let P=0;function N(){P=0}function O(){let x=P;return x>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+x+" texture units while this GPU supports only "+s.maxTextures),P+=1,x}function W(x){let M=[];return M.push(x.wrapS),M.push(x.wrapT),M.push(x.wrapR||0),M.push(x.magFilter),M.push(x.minFilter),M.push(x.anisotropy),M.push(x.internalFormat),M.push(x.format),M.push(x.type),M.push(x.generateMipmaps),M.push(x.premultiplyAlpha),M.push(x.flipY),M.push(x.unpackAlignment),M.push(x.colorSpace),M.join()}function Q(x,M){let k=i.get(x);if(x.isVideoTexture&&Ut(x),x.isRenderTargetTexture===!1&&x.version>0&&k.__version!==x.version){let J=x.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(k,x,M);return}}e.bindTexture(n.TEXTURE_2D,k.__webglTexture,n.TEXTURE0+M)}function Y(x,M){let k=i.get(x);if(x.version>0&&k.__version!==x.version){$(k,x,M);return}e.bindTexture(n.TEXTURE_2D_ARRAY,k.__webglTexture,n.TEXTURE0+M)}function st(x,M){let k=i.get(x);if(x.version>0&&k.__version!==x.version){$(k,x,M);return}e.bindTexture(n.TEXTURE_3D,k.__webglTexture,n.TEXTURE0+M)}function q(x,M){let k=i.get(x);if(x.version>0&&k.__version!==x.version){rt(k,x,M);return}e.bindTexture(n.TEXTURE_CUBE_MAP,k.__webglTexture,n.TEXTURE0+M)}let ht={[$e]:n.REPEAT,[$i]:n.CLAMP_TO_EDGE,[dl]:n.MIRRORED_REPEAT},Et={[Mn]:n.NEAREST,[mf]:n.NEAREST_MIPMAP_NEAREST,[Br]:n.NEAREST_MIPMAP_LINEAR,[Vn]:n.LINEAR,[ya]:n.LINEAR_MIPMAP_NEAREST,[Ji]:n.LINEAR_MIPMAP_LINEAR},Dt={[yf]:n.NEVER,[Tf]:n.ALWAYS,[_f]:n.LESS,[Nd]:n.LEQUAL,[vf]:n.EQUAL,[Sf]:n.GEQUAL,[Af]:n.GREATER,[Mf]:n.NOTEQUAL};function Kt(x,M){if(M.type===Wn&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===Vn||M.magFilter===ya||M.magFilter===Br||M.magFilter===Ji||M.minFilter===Vn||M.minFilter===ya||M.minFilter===Br||M.minFilter===Ji)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(x,n.TEXTURE_WRAP_S,ht[M.wrapS]),n.texParameteri(x,n.TEXTURE_WRAP_T,ht[M.wrapT]),(x===n.TEXTURE_3D||x===n.TEXTURE_2D_ARRAY)&&n.texParameteri(x,n.TEXTURE_WRAP_R,ht[M.wrapR]),n.texParameteri(x,n.TEXTURE_MAG_FILTER,Et[M.magFilter]),n.texParameteri(x,n.TEXTURE_MIN_FILTER,Et[M.minFilter]),M.compareFunction&&(n.texParameteri(x,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(x,n.TEXTURE_COMPARE_FUNC,Dt[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Mn||M.minFilter!==Br&&M.minFilter!==Ji||M.type===Wn&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){let k=t.get("EXT_texture_filter_anisotropic");n.texParameterf(x,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function Me(x,M){let k=!1;x.__webglInit===void 0&&(x.__webglInit=!0,M.addEventListener("dispose",C));let J=M.source,j=u.get(J);j===void 0&&(j={},u.set(J,j));let Z=W(M);if(Z!==x.__cacheKey){j[Z]===void 0&&(j[Z]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,k=!0),j[Z].usedTimes++;let Ft=j[x.__cacheKey];Ft!==void 0&&(j[x.__cacheKey].usedTimes--,Ft.usedTimes===0&&S(M)),x.__cacheKey=Z,x.__webglTexture=j[Z].texture}return k}function $(x,M,k){let J=n.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(J=n.TEXTURE_2D_ARRAY),M.isData3DTexture&&(J=n.TEXTURE_3D);let j=Me(x,M),Z=M.source;e.bindTexture(J,x.__webglTexture,n.TEXTURE0+k);let Ft=i.get(Z);if(Z.version!==Ft.__version||j===!0){e.activeTexture(n.TEXTURE0+k);let ut=ae.getPrimaries(ae.workingColorSpace),yt=M.colorSpace===bi?null:ae.getPrimaries(M.colorSpace),oe=M.colorSpace===bi||ut===yt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,oe);let nt=E(M.image,!1,s.maxTextureSize);nt=be(M,nt);let _t=r.convert(M.format,M.colorSpace),Ht=r.convert(M.type),Nt=_(M.internalFormat,_t,Ht,M.colorSpace,M.isVideoTexture);Kt(J,M);let vt,ie=M.mipmaps,qt=M.isVideoTexture!==!0,Se=Ft.__version===void 0||j===!0,L=Z.dataReady,ct=I(M,nt);if(M.isDepthTexture)Nt=y(M.format===Bs,M.type),Se&&(qt?e.texStorage2D(n.TEXTURE_2D,1,Nt,nt.width,nt.height):e.texImage2D(n.TEXTURE_2D,0,Nt,nt.width,nt.height,0,_t,Ht,null));else if(M.isDataTexture)if(ie.length>0){qt&&Se&&e.texStorage2D(n.TEXTURE_2D,ct,Nt,ie[0].width,ie[0].height);for(let X=0,K=ie.length;X<K;X++)vt=ie[X],qt?L&&e.texSubImage2D(n.TEXTURE_2D,X,0,0,vt.width,vt.height,_t,Ht,vt.data):e.texImage2D(n.TEXTURE_2D,X,Nt,vt.width,vt.height,0,_t,Ht,vt.data);M.generateMipmaps=!1}else qt?(Se&&e.texStorage2D(n.TEXTURE_2D,ct,Nt,nt.width,nt.height),L&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,nt.width,nt.height,_t,Ht,nt.data)):e.texImage2D(n.TEXTURE_2D,0,Nt,nt.width,nt.height,0,_t,Ht,nt.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){qt&&Se&&e.texStorage3D(n.TEXTURE_2D_ARRAY,ct,Nt,ie[0].width,ie[0].height,nt.depth);for(let X=0,K=ie.length;X<K;X++)if(vt=ie[X],M.format!==Un)if(_t!==null)if(qt){if(L)if(M.layerUpdates.size>0){let gt=hd(vt.width,vt.height,M.format,M.type);for(let pt of M.layerUpdates){let Gt=vt.data.subarray(pt*gt/vt.data.BYTES_PER_ELEMENT,(pt+1)*gt/vt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,X,0,0,pt,vt.width,vt.height,1,_t,Gt)}M.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,X,0,0,0,vt.width,vt.height,nt.depth,_t,vt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,X,Nt,vt.width,vt.height,nt.depth,0,vt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else qt?L&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,X,0,0,0,vt.width,vt.height,nt.depth,_t,Ht,vt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,X,Nt,vt.width,vt.height,nt.depth,0,_t,Ht,vt.data)}else{qt&&Se&&e.texStorage2D(n.TEXTURE_2D,ct,Nt,ie[0].width,ie[0].height);for(let X=0,K=ie.length;X<K;X++)vt=ie[X],M.format!==Un?_t!==null?qt?L&&e.compressedTexSubImage2D(n.TEXTURE_2D,X,0,0,vt.width,vt.height,_t,vt.data):e.compressedTexImage2D(n.TEXTURE_2D,X,Nt,vt.width,vt.height,0,vt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qt?L&&e.texSubImage2D(n.TEXTURE_2D,X,0,0,vt.width,vt.height,_t,Ht,vt.data):e.texImage2D(n.TEXTURE_2D,X,Nt,vt.width,vt.height,0,_t,Ht,vt.data)}else if(M.isDataArrayTexture)if(qt){if(Se&&e.texStorage3D(n.TEXTURE_2D_ARRAY,ct,Nt,nt.width,nt.height,nt.depth),L)if(M.layerUpdates.size>0){let X=hd(nt.width,nt.height,M.format,M.type);for(let K of M.layerUpdates){let gt=nt.data.subarray(K*X/nt.data.BYTES_PER_ELEMENT,(K+1)*X/nt.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,K,nt.width,nt.height,1,_t,Ht,gt)}M.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,nt.width,nt.height,nt.depth,_t,Ht,nt.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Nt,nt.width,nt.height,nt.depth,0,_t,Ht,nt.data);else if(M.isData3DTexture)qt?(Se&&e.texStorage3D(n.TEXTURE_3D,ct,Nt,nt.width,nt.height,nt.depth),L&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,nt.width,nt.height,nt.depth,_t,Ht,nt.data)):e.texImage3D(n.TEXTURE_3D,0,Nt,nt.width,nt.height,nt.depth,0,_t,Ht,nt.data);else if(M.isFramebufferTexture){if(Se)if(qt)e.texStorage2D(n.TEXTURE_2D,ct,Nt,nt.width,nt.height);else{let X=nt.width,K=nt.height;for(let gt=0;gt<ct;gt++)e.texImage2D(n.TEXTURE_2D,gt,Nt,X,K,0,_t,Ht,null),X>>=1,K>>=1}}else if(ie.length>0){if(qt&&Se){let X=Lt(ie[0]);e.texStorage2D(n.TEXTURE_2D,ct,Nt,X.width,X.height)}for(let X=0,K=ie.length;X<K;X++)vt=ie[X],qt?L&&e.texSubImage2D(n.TEXTURE_2D,X,0,0,_t,Ht,vt):e.texImage2D(n.TEXTURE_2D,X,Nt,_t,Ht,vt);M.generateMipmaps=!1}else if(qt){if(Se){let X=Lt(nt);e.texStorage2D(n.TEXTURE_2D,ct,Nt,X.width,X.height)}L&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,_t,Ht,nt)}else e.texImage2D(n.TEXTURE_2D,0,Nt,_t,Ht,nt);m(M)&&f(J),Ft.__version=Z.version,M.onUpdate&&M.onUpdate(M)}x.__version=M.version}function rt(x,M,k){if(M.image.length!==6)return;let J=Me(x,M),j=M.source;e.bindTexture(n.TEXTURE_CUBE_MAP,x.__webglTexture,n.TEXTURE0+k);let Z=i.get(j);if(j.version!==Z.__version||J===!0){e.activeTexture(n.TEXTURE0+k);let Ft=ae.getPrimaries(ae.workingColorSpace),ut=M.colorSpace===bi?null:ae.getPrimaries(M.colorSpace),yt=M.colorSpace===bi||Ft===ut?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,yt);let oe=M.isCompressedTexture||M.image[0].isCompressedTexture,nt=M.image[0]&&M.image[0].isDataTexture,_t=[];for(let K=0;K<6;K++)!oe&&!nt?_t[K]=E(M.image[K],!0,s.maxCubemapSize):_t[K]=nt?M.image[K].image:M.image[K],_t[K]=be(M,_t[K]);let Ht=_t[0],Nt=r.convert(M.format,M.colorSpace),vt=r.convert(M.type),ie=_(M.internalFormat,Nt,vt,M.colorSpace),qt=M.isVideoTexture!==!0,Se=Z.__version===void 0||J===!0,L=j.dataReady,ct=I(M,Ht);Kt(n.TEXTURE_CUBE_MAP,M);let X;if(oe){qt&&Se&&e.texStorage2D(n.TEXTURE_CUBE_MAP,ct,ie,Ht.width,Ht.height);for(let K=0;K<6;K++){X=_t[K].mipmaps;for(let gt=0;gt<X.length;gt++){let pt=X[gt];M.format!==Un?Nt!==null?qt?L&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,gt,0,0,pt.width,pt.height,Nt,pt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,gt,ie,pt.width,pt.height,0,pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):qt?L&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,gt,0,0,pt.width,pt.height,Nt,vt,pt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,gt,ie,pt.width,pt.height,0,Nt,vt,pt.data)}}}else{if(X=M.mipmaps,qt&&Se){X.length>0&&ct++;let K=Lt(_t[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,ct,ie,K.width,K.height)}for(let K=0;K<6;K++)if(nt){qt?L&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,_t[K].width,_t[K].height,Nt,vt,_t[K].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,ie,_t[K].width,_t[K].height,0,Nt,vt,_t[K].data);for(let gt=0;gt<X.length;gt++){let Gt=X[gt].image[K].image;qt?L&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,gt+1,0,0,Gt.width,Gt.height,Nt,vt,Gt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,gt+1,ie,Gt.width,Gt.height,0,Nt,vt,Gt.data)}}else{qt?L&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Nt,vt,_t[K]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,ie,Nt,vt,_t[K]);for(let gt=0;gt<X.length;gt++){let pt=X[gt];qt?L&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,gt+1,0,0,Nt,vt,pt.image[K]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,gt+1,ie,Nt,vt,pt.image[K])}}}m(M)&&f(n.TEXTURE_CUBE_MAP),Z.__version=j.version,M.onUpdate&&M.onUpdate(M)}x.__version=M.version}function xt(x,M,k,J,j,Z){let Ft=r.convert(k.format,k.colorSpace),ut=r.convert(k.type),yt=_(k.internalFormat,Ft,ut,k.colorSpace),oe=i.get(M),nt=i.get(k);if(nt.__renderTarget=M,!oe.__hasExternalTextures){let _t=Math.max(1,M.width>>Z),Ht=Math.max(1,M.height>>Z);j===n.TEXTURE_3D||j===n.TEXTURE_2D_ARRAY?e.texImage3D(j,Z,yt,_t,Ht,M.depth,0,Ft,ut,null):e.texImage2D(j,Z,yt,_t,Ht,0,Ft,ut,null)}e.bindFramebuffer(n.FRAMEBUFFER,x),ne(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,J,j,nt.__webglTexture,0,ee(M)):(j===n.TEXTURE_2D||j>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,J,j,nt.__webglTexture,Z),e.bindFramebuffer(n.FRAMEBUFFER,null)}function dt(x,M,k){if(n.bindRenderbuffer(n.RENDERBUFFER,x),M.depthBuffer){let J=M.depthTexture,j=J&&J.isDepthTexture?J.type:null,Z=y(M.stencilBuffer,j),Ft=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ut=ee(M);ne(M)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ut,Z,M.width,M.height):k?n.renderbufferStorageMultisample(n.RENDERBUFFER,ut,Z,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,Z,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ft,n.RENDERBUFFER,x)}else{let J=M.textures;for(let j=0;j<J.length;j++){let Z=J[j],Ft=r.convert(Z.format,Z.colorSpace),ut=r.convert(Z.type),yt=_(Z.internalFormat,Ft,ut,Z.colorSpace),oe=ee(M);k&&ne(M)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,oe,yt,M.width,M.height):ne(M)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,oe,yt,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,yt,M.width,M.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Bt(x,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,x),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let J=i.get(M.depthTexture);J.__renderTarget=M,(!J.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),Q(M.depthTexture,0);let j=J.__webglTexture,Z=ee(M);if(M.depthTexture.format===Fs)ne(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,j,0,Z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,j,0);else if(M.depthTexture.format===Bs)ne(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,j,0,Z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function kt(x){let M=i.get(x),k=x.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==x.depthTexture){let J=x.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),J){let j=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,J.removeEventListener("dispose",j)};J.addEventListener("dispose",j),M.__depthDisposeCallback=j}M.__boundDepthTexture=J}if(x.depthTexture&&!M.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");Bt(M.__webglFramebuffer,x)}else if(k){M.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(e.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[J]),M.__webglDepthbuffer[J]===void 0)M.__webglDepthbuffer[J]=n.createRenderbuffer(),dt(M.__webglDepthbuffer[J],x,!1);else{let j=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Z=M.__webglDepthbuffer[J];n.bindRenderbuffer(n.RENDERBUFFER,Z),n.framebufferRenderbuffer(n.FRAMEBUFFER,j,n.RENDERBUFFER,Z)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=n.createRenderbuffer(),dt(M.__webglDepthbuffer,x,!1);else{let J=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,j=M.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,j),n.framebufferRenderbuffer(n.FRAMEBUFFER,J,n.RENDERBUFFER,j)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function Qt(x,M,k){let J=i.get(x);M!==void 0&&xt(J.__webglFramebuffer,x,x.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),k!==void 0&&kt(x)}function Pe(x){let M=x.texture,k=i.get(x),J=i.get(M);x.addEventListener("dispose",b);let j=x.textures,Z=x.isWebGLCubeRenderTarget===!0,Ft=j.length>1;if(Ft||(J.__webglTexture===void 0&&(J.__webglTexture=n.createTexture()),J.__version=M.version,o.memory.textures++),Z){k.__webglFramebuffer=[];for(let ut=0;ut<6;ut++)if(M.mipmaps&&M.mipmaps.length>0){k.__webglFramebuffer[ut]=[];for(let yt=0;yt<M.mipmaps.length;yt++)k.__webglFramebuffer[ut][yt]=n.createFramebuffer()}else k.__webglFramebuffer[ut]=n.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){k.__webglFramebuffer=[];for(let ut=0;ut<M.mipmaps.length;ut++)k.__webglFramebuffer[ut]=n.createFramebuffer()}else k.__webglFramebuffer=n.createFramebuffer();if(Ft)for(let ut=0,yt=j.length;ut<yt;ut++){let oe=i.get(j[ut]);oe.__webglTexture===void 0&&(oe.__webglTexture=n.createTexture(),o.memory.textures++)}if(x.samples>0&&ne(x)===!1){k.__webglMultisampledFramebuffer=n.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let ut=0;ut<j.length;ut++){let yt=j[ut];k.__webglColorRenderbuffer[ut]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,k.__webglColorRenderbuffer[ut]);let oe=r.convert(yt.format,yt.colorSpace),nt=r.convert(yt.type),_t=_(yt.internalFormat,oe,nt,yt.colorSpace,x.isXRRenderTarget===!0),Ht=ee(x);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ht,_t,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ut,n.RENDERBUFFER,k.__webglColorRenderbuffer[ut])}n.bindRenderbuffer(n.RENDERBUFFER,null),x.depthBuffer&&(k.__webglDepthRenderbuffer=n.createRenderbuffer(),dt(k.__webglDepthRenderbuffer,x,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Z){e.bindTexture(n.TEXTURE_CUBE_MAP,J.__webglTexture),Kt(n.TEXTURE_CUBE_MAP,M);for(let ut=0;ut<6;ut++)if(M.mipmaps&&M.mipmaps.length>0)for(let yt=0;yt<M.mipmaps.length;yt++)xt(k.__webglFramebuffer[ut][yt],x,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ut,yt);else xt(k.__webglFramebuffer[ut],x,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0);m(M)&&f(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ft){for(let ut=0,yt=j.length;ut<yt;ut++){let oe=j[ut],nt=i.get(oe);e.bindTexture(n.TEXTURE_2D,nt.__webglTexture),Kt(n.TEXTURE_2D,oe),xt(k.__webglFramebuffer,x,oe,n.COLOR_ATTACHMENT0+ut,n.TEXTURE_2D,0),m(oe)&&f(n.TEXTURE_2D)}e.unbindTexture()}else{let ut=n.TEXTURE_2D;if((x.isWebGL3DRenderTarget||x.isWebGLArrayRenderTarget)&&(ut=x.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(ut,J.__webglTexture),Kt(ut,M),M.mipmaps&&M.mipmaps.length>0)for(let yt=0;yt<M.mipmaps.length;yt++)xt(k.__webglFramebuffer[yt],x,M,n.COLOR_ATTACHMENT0,ut,yt);else xt(k.__webglFramebuffer,x,M,n.COLOR_ATTACHMENT0,ut,0);m(M)&&f(ut),e.unbindTexture()}x.depthBuffer&&kt(x)}function re(x){let M=x.textures;for(let k=0,J=M.length;k<J;k++){let j=M[k];if(m(j)){let Z=v(x),Ft=i.get(j).__webglTexture;e.bindTexture(Z,Ft),f(Z),e.unbindTexture()}}}let He=[],B=[];function Tn(x){if(x.samples>0){if(ne(x)===!1){let M=x.textures,k=x.width,J=x.height,j=n.COLOR_BUFFER_BIT,Z=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ft=i.get(x),ut=M.length>1;if(ut)for(let yt=0;yt<M.length;yt++)e.bindFramebuffer(n.FRAMEBUFFER,Ft.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+yt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,Ft.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+yt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,Ft.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ft.__webglFramebuffer);for(let yt=0;yt<M.length;yt++){if(x.resolveDepthBuffer&&(x.depthBuffer&&(j|=n.DEPTH_BUFFER_BIT),x.stencilBuffer&&x.resolveStencilBuffer&&(j|=n.STENCIL_BUFFER_BIT)),ut){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ft.__webglColorRenderbuffer[yt]);let oe=i.get(M[yt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,oe,0)}n.blitFramebuffer(0,0,k,J,0,0,k,J,j,n.NEAREST),l===!0&&(He.length=0,B.length=0,He.push(n.COLOR_ATTACHMENT0+yt),x.depthBuffer&&x.resolveDepthBuffer===!1&&(He.push(Z),B.push(Z),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,B)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,He))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ut)for(let yt=0;yt<M.length;yt++){e.bindFramebuffer(n.FRAMEBUFFER,Ft.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+yt,n.RENDERBUFFER,Ft.__webglColorRenderbuffer[yt]);let oe=i.get(M[yt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,Ft.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+yt,n.TEXTURE_2D,oe,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ft.__webglMultisampledFramebuffer)}else if(x.depthBuffer&&x.resolveDepthBuffer===!1&&l){let M=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[M])}}}function ee(x){return Math.min(s.maxSamples,x.samples)}function ne(x){let M=i.get(x);return x.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Ut(x){let M=o.render.frame;h.get(x)!==M&&(h.set(x,M),x.update())}function be(x,M){let k=x.colorSpace,J=x.format,j=x.type;return x.isCompressedTexture===!0||x.isVideoTexture===!0||k!==Di&&k!==bi&&(ae.getTransfer(k)===Ee?(J!==Un||j!==ci)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),M}function Lt(x){return typeof HTMLImageElement<"u"&&x instanceof HTMLImageElement?(c.width=x.naturalWidth||x.width,c.height=x.naturalHeight||x.height):typeof VideoFrame<"u"&&x instanceof VideoFrame?(c.width=x.displayWidth,c.height=x.displayHeight):(c.width=x.width,c.height=x.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=N,this.setTexture2D=Q,this.setTexture2DArray=Y,this.setTexture3D=st,this.setTextureCube=q,this.rebindTextures=Qt,this.setupRenderTarget=Pe,this.updateRenderTargetMipmap=re,this.updateMultisampleRenderTarget=Tn,this.setupDepthRenderbuffer=kt,this.setupFrameBufferTexture=xt,this.useMultisampledRTT=ne}function mg(n,t){function e(i,s=bi){let r,o=ae.getTransfer(s);if(i===ci)return n.UNSIGNED_BYTE;if(i===xc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Cc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Fd)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===xd)return n.BYTE;if(i===Cd)return n.SHORT;if(i===Er)return n.UNSIGNED_SHORT;if(i===Rc)return n.INT;if(i===hi)return n.UNSIGNED_INT;if(i===Wn)return n.FLOAT;if(i===mn)return n.HALF_FLOAT;if(i===Pd)return n.ALPHA;if(i===Id)return n.RGB;if(i===Un)return n.RGBA;if(i===Dd)return n.LUMINANCE;if(i===Ld)return n.LUMINANCE_ALPHA;if(i===Fs)return n.DEPTH_COMPONENT;if(i===Bs)return n.DEPTH_STENCIL;if(i===Fc)return n.RED;if(i===Pc)return n.RED_INTEGER;if(i===Ud)return n.RG;if(i===Ic)return n.RG_INTEGER;if(i===Dc)return n.RGBA_INTEGER;if(i===mo||i===go||i===Eo||i===yo)if(o===Ee)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===mo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===go)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Eo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===yo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===mo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===go)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Eo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===yo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ul||i===fl||i===pl||i===ml)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===ul)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===fl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===pl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ml)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===gl||i===El||i===yl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===gl||i===El)return o===Ee?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===yl)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===_l||i===vl||i===Al||i===Ml||i===Sl||i===Tl||i===bl||i===wl||i===Rl||i===xl||i===Cl||i===Fl||i===Pl||i===Il)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===_l)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===vl)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Al)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ml)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Sl)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Tl)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===bl)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===wl)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Rl)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===xl)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Cl)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Fl)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Pl)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Il)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===_o||i===Dl||i===Ll)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===_o)return o===Ee?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Dl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ll)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Hd||i===Ul||i===Hl||i===Bl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===_o)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Ul)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Hl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Bl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Hs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var Ql=class extends Ze{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},at=class extends Be{constructor(){super(),this.isGroup=!0,this.type="Group"}},gg={type:"move"},fr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new at,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new at,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new at,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let E of t.hand.values()){let m=e.getJointPose(E,i),f=this._getHandJoint(c,E);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),p=.02,g=.005;c.inputState.pinching&&u>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(gg)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new at;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},Eg=`
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

}`,jl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){let s=new un,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new Xe({vertexShader:Eg,fragmentShader:yg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new z(new Mt(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},tc=class extends Ci{constructor(t,e){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,u=null,p=null,g=null,E=new jl,m=e.getContextAttributes(),f=null,v=null,_=[],y=[],I=new et,C=null,b=new Ze;b.viewport=new _e;let F=new Ze;F.viewport=new _e;let S=[b,F],A=new Ql,P=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let rt=_[$];return rt===void 0&&(rt=new fr,_[$]=rt),rt.getTargetRaySpace()},this.getControllerGrip=function($){let rt=_[$];return rt===void 0&&(rt=new fr,_[$]=rt),rt.getGripSpace()},this.getHand=function($){let rt=_[$];return rt===void 0&&(rt=new fr,_[$]=rt),rt.getHandSpace()};function O($){let rt=y.indexOf($.inputSource);if(rt===-1)return;let xt=_[rt];xt!==void 0&&(xt.update($.inputSource,$.frame,c||o),xt.dispatchEvent({type:$.type,data:$.inputSource}))}function W(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",Q);for(let $=0;$<_.length;$++){let rt=y[$];rt!==null&&(y[$]=null,_[$].disconnect(rt))}P=null,N=null,E.reset(),t.setRenderTarget(f),p=null,u=null,d=null,s=null,v=null,Me.stop(),i.isPresenting=!1,t.setPixelRatio(C),t.setSize(I.width,I.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(f=t.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",W),s.addEventListener("inputsourceschange",Q),m.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(I),s.renderState.layers===void 0){let rt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,rt),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new We(p.framebufferWidth,p.framebufferHeight,{format:Un,type:ci,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let rt=null,xt=null,dt=null;m.depth&&(dt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,rt=m.stencil?Bs:Fs,xt=m.stencil?Hs:hi);let Bt={colorFormat:e.RGBA8,depthFormat:dt,scaleFactor:r};d=new XRWebGLBinding(s,e),u=d.createProjectionLayer(Bt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),v=new We(u.textureWidth,u.textureHeight,{format:Un,type:ci,depthTexture:new zs(u.textureWidth,u.textureHeight,xt,void 0,void 0,void 0,void 0,void 0,void 0,rt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Me.setContext(s),Me.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return E.getDepthTexture()};function Q($){for(let rt=0;rt<$.removed.length;rt++){let xt=$.removed[rt],dt=y.indexOf(xt);dt>=0&&(y[dt]=null,_[dt].disconnect(xt))}for(let rt=0;rt<$.added.length;rt++){let xt=$.added[rt],dt=y.indexOf(xt);if(dt===-1){for(let kt=0;kt<_.length;kt++)if(kt>=y.length){y.push(xt),dt=kt;break}else if(y[kt]===null){y[kt]=xt,dt=kt;break}if(dt===-1)break}let Bt=_[dt];Bt&&Bt.connect(xt)}}let Y=new D,st=new D;function q($,rt,xt){Y.setFromMatrixPosition(rt.matrixWorld),st.setFromMatrixPosition(xt.matrixWorld);let dt=Y.distanceTo(st),Bt=rt.projectionMatrix.elements,kt=xt.projectionMatrix.elements,Qt=Bt[14]/(Bt[10]-1),Pe=Bt[14]/(Bt[10]+1),re=(Bt[9]+1)/Bt[5],He=(Bt[9]-1)/Bt[5],B=(Bt[8]-1)/Bt[0],Tn=(kt[8]+1)/kt[0],ee=Qt*B,ne=Qt*Tn,Ut=dt/(-B+Tn),be=Ut*-B;if(rt.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(be),$.translateZ(Ut),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Bt[10]===-1)$.projectionMatrix.copy(rt.projectionMatrix),$.projectionMatrixInverse.copy(rt.projectionMatrixInverse);else{let Lt=Qt+Ut,x=Pe+Ut,M=ee-be,k=ne+(dt-be),J=re*Pe/x*Lt,j=He*Pe/x*Lt;$.projectionMatrix.makePerspective(M,k,J,j,Lt,x),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function ht($,rt){rt===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(rt.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let rt=$.near,xt=$.far;E.texture!==null&&(E.depthNear>0&&(rt=E.depthNear),E.depthFar>0&&(xt=E.depthFar)),A.near=F.near=b.near=rt,A.far=F.far=b.far=xt,(P!==A.near||N!==A.far)&&(s.updateRenderState({depthNear:A.near,depthFar:A.far}),P=A.near,N=A.far),b.layers.mask=$.layers.mask|2,F.layers.mask=$.layers.mask|4,A.layers.mask=b.layers.mask|F.layers.mask;let dt=$.parent,Bt=A.cameras;ht(A,dt);for(let kt=0;kt<Bt.length;kt++)ht(Bt[kt],dt);Bt.length===2?q(A,b,F):A.projectionMatrix.copy(b.projectionMatrix),Et($,A,dt)};function Et($,rt,xt){xt===null?$.matrix.copy(rt.matrixWorld):($.matrix.copy(xt.matrixWorld),$.matrix.invert(),$.matrix.multiply(rt.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(rt.projectionMatrix),$.projectionMatrixInverse.copy(rt.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Mo*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(u===null&&p===null))return l},this.setFoveation=function($){l=$,u!==null&&(u.fixedFoveation=$),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=$)},this.hasDepthSensing=function(){return E.texture!==null},this.getDepthSensingMesh=function(){return E.getMesh(A)};let Dt=null;function Kt($,rt){if(h=rt.getViewerPose(c||o),g=rt,h!==null){let xt=h.views;p!==null&&(t.setRenderTargetFramebuffer(v,p.framebuffer),t.setRenderTarget(v));let dt=!1;xt.length!==A.cameras.length&&(A.cameras.length=0,dt=!0);for(let kt=0;kt<xt.length;kt++){let Qt=xt[kt],Pe=null;if(p!==null)Pe=p.getViewport(Qt);else{let He=d.getViewSubImage(u,Qt);Pe=He.viewport,kt===0&&(t.setRenderTargetTextures(v,He.colorTexture,u.ignoreDepthValues?void 0:He.depthStencilTexture),t.setRenderTarget(v))}let re=S[kt];re===void 0&&(re=new Ze,re.layers.enable(kt),re.viewport=new _e,S[kt]=re),re.matrix.fromArray(Qt.transform.matrix),re.matrix.decompose(re.position,re.quaternion,re.scale),re.projectionMatrix.fromArray(Qt.projectionMatrix),re.projectionMatrixInverse.copy(re.projectionMatrix).invert(),re.viewport.set(Pe.x,Pe.y,Pe.width,Pe.height),kt===0&&(A.matrix.copy(re.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),dt===!0&&A.cameras.push(re)}let Bt=s.enabledFeatures;if(Bt&&Bt.includes("depth-sensing")){let kt=d.getDepthInformation(xt[0]);kt&&kt.isValid&&kt.texture&&E.init(t,kt,s.renderState)}}for(let xt=0;xt<_.length;xt++){let dt=y[xt],Bt=_[xt];dt!==null&&Bt!==void 0&&Bt.update(dt,rt,c||o)}Dt&&Dt($,rt),rt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:rt}),g=null}let Me=new Gd;Me.setAnimationLoop(Kt),this.setAnimationLoop=function($){Dt=$},this.dispose=function(){}}},Xi=new Yn,_g=new ve;function vg(n,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,kd(n)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,v,_,y){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),d(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),u(m,f),f.isMeshPhysicalMaterial&&p(m,f,y)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),E(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,v,_):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Ve&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Ve&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let v=t.get(f),_=v.envMap,y=v.envMapRotation;_&&(m.envMap.value=_,Xi.copy(y),Xi.x*=-1,Xi.y*=-1,Xi.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Xi.y*=-1,Xi.z*=-1),m.envMapRotation.value.setFromMatrix4(_g.makeRotationFromEuler(Xi)),m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,v,_){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*v,m.scale.value=_*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function u(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,v){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Ve&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function E(m,f){let v=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Ag(n,t,e,i){let s={},r={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,_){let y=_.program;i.uniformBlockBinding(v,y)}function c(v,_){let y=s[v.id];y===void 0&&(g(v),y=h(v),s[v.id]=y,v.addEventListener("dispose",m));let I=_.program;i.updateUBOMapping(v,I);let C=t.render.frame;r[v.id]!==C&&(u(v),r[v.id]=C)}function h(v){let _=d();v.__bindingPointIndex=_;let y=n.createBuffer(),I=v.__size,C=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,I,C),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,_,y),y}function d(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(v){let _=s[v.id],y=v.uniforms,I=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,_);for(let C=0,b=y.length;C<b;C++){let F=Array.isArray(y[C])?y[C]:[y[C]];for(let S=0,A=F.length;S<A;S++){let P=F[S];if(p(P,C,S,I)===!0){let N=P.__offset,O=Array.isArray(P.value)?P.value:[P.value],W=0;for(let Q=0;Q<O.length;Q++){let Y=O[Q],st=E(Y);typeof Y=="number"||typeof Y=="boolean"?(P.__data[0]=Y,n.bufferSubData(n.UNIFORM_BUFFER,N+W,P.__data)):Y.isMatrix3?(P.__data[0]=Y.elements[0],P.__data[1]=Y.elements[1],P.__data[2]=Y.elements[2],P.__data[3]=0,P.__data[4]=Y.elements[3],P.__data[5]=Y.elements[4],P.__data[6]=Y.elements[5],P.__data[7]=0,P.__data[8]=Y.elements[6],P.__data[9]=Y.elements[7],P.__data[10]=Y.elements[8],P.__data[11]=0):(Y.toArray(P.__data,W),W+=st.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,N,P.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(v,_,y,I){let C=v.value,b=_+"_"+y;if(I[b]===void 0)return typeof C=="number"||typeof C=="boolean"?I[b]=C:I[b]=C.clone(),!0;{let F=I[b];if(typeof C=="number"||typeof C=="boolean"){if(F!==C)return I[b]=C,!0}else if(F.equals(C)===!1)return F.copy(C),!0}return!1}function g(v){let _=v.uniforms,y=0,I=16;for(let b=0,F=_.length;b<F;b++){let S=Array.isArray(_[b])?_[b]:[_[b]];for(let A=0,P=S.length;A<P;A++){let N=S[A],O=Array.isArray(N.value)?N.value:[N.value];for(let W=0,Q=O.length;W<Q;W++){let Y=O[W],st=E(Y),q=y%I,ht=q%st.boundary,Et=q+ht;y+=ht,Et!==0&&I-Et<st.storage&&(y+=I-Et),N.__data=new Float32Array(st.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=y,y+=st.storage}}}let C=y%I;return C>0&&(y+=I-C),v.__size=y,v.__cache={},this}function E(v){let _={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(_.boundary=4,_.storage=4):v.isVector2?(_.boundary=8,_.storage=8):v.isVector3||v.isColor?(_.boundary=16,_.storage=12):v.isVector4?(_.boundary=16,_.storage=16):v.isMatrix3?(_.boundary=48,_.storage=48):v.isMatrix4?(_.boundary=64,_.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),_}function m(v){let _=v.target;_.removeEventListener("dispose",m);let y=o.indexOf(_.__bindingPointIndex);o.splice(y,1),n.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function f(){for(let v in s)n.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:l,update:c,dispose:f}}var Do=class{constructor(t={}){let{canvas:e=wf(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:u=!1}=t;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;let g=new Uint32Array(4),E=new Int32Array(4),m=null,f=null,v=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Fe,this.toneMapping=qn,this.toneMappingExposure=1;let y=this,I=!1,C=0,b=0,F=null,S=-1,A=null,P=new _e,N=new _e,O=null,W=new ot(0),Q=0,Y=e.width,st=e.height,q=1,ht=null,Et=null,Dt=new _e(0,0,Y,st),Kt=new _e(0,0,Y,st),Me=!1,$=new yr,rt=!1,xt=!1,dt=new ve,Bt=new ve,kt=new D,Qt=new _e,Pe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},re=!1;function He(){return F===null?q:1}let B=i;function Tn(T,U){return e.getContext(T,U)}try{let T={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${bc}`),e.addEventListener("webglcontextlost",K,!1),e.addEventListener("webglcontextrestored",gt,!1),e.addEventListener("webglcontextcreationerror",pt,!1),B===null){let U="webgl2";if(B=Tn(U,T),B===null)throw Tn(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let ee,ne,Ut,be,Lt,x,M,k,J,j,Z,Ft,ut,yt,oe,nt,_t,Ht,Nt,vt,ie,qt,Se,L;function ct(){ee=new Bm(B),ee.init(),qt=new mg(B,ee),ne=new Pm(B,ee,t,qt),Ut=new ug(B,ee),ne.reverseDepthBuffer&&u&&Ut.buffers.depth.setReversed(!0),be=new zm(B),Lt=new j1,x=new pg(B,ee,Ut,Lt,ne,qt,be),M=new Dm(y),k=new Hm(y),J=new Yf(B),Se=new Cm(B,J),j=new Nm(B,J,be,Se),Z=new Gm(B,j,J,be),Nt=new km(B,ne,x),nt=new Im(Lt),Ft=new Q1(y,M,k,ee,ne,Se,nt),ut=new vg(y,Lt),yt=new eg,oe=new ag(ee),Ht=new xm(y,M,k,Ut,Z,p,l),_t=new hg(y,Z,ne),L=new Ag(B,be,ne,Ut),vt=new Fm(B,ee,be),ie=new Om(B,ee,be),be.programs=Ft.programs,y.capabilities=ne,y.extensions=ee,y.properties=Lt,y.renderLists=yt,y.shadowMap=_t,y.state=Ut,y.info=be}ct();let X=new tc(y,B);this.xr=X,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){let T=ee.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=ee.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(T){T!==void 0&&(q=T,this.setSize(Y,st,!1))},this.getSize=function(T){return T.set(Y,st)},this.setSize=function(T,U,G=!0){if(X.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=T,st=U,e.width=Math.floor(T*q),e.height=Math.floor(U*q),G===!0&&(e.style.width=T+"px",e.style.height=U+"px"),this.setViewport(0,0,T,U)},this.getDrawingBufferSize=function(T){return T.set(Y*q,st*q).floor()},this.setDrawingBufferSize=function(T,U,G){Y=T,st=U,q=G,e.width=Math.floor(T*G),e.height=Math.floor(U*G),this.setViewport(0,0,T,U)},this.getCurrentViewport=function(T){return T.copy(P)},this.getViewport=function(T){return T.copy(Dt)},this.setViewport=function(T,U,G,V){T.isVector4?Dt.set(T.x,T.y,T.z,T.w):Dt.set(T,U,G,V),Ut.viewport(P.copy(Dt).multiplyScalar(q).round())},this.getScissor=function(T){return T.copy(Kt)},this.setScissor=function(T,U,G,V){T.isVector4?Kt.set(T.x,T.y,T.z,T.w):Kt.set(T,U,G,V),Ut.scissor(N.copy(Kt).multiplyScalar(q).round())},this.getScissorTest=function(){return Me},this.setScissorTest=function(T){Ut.setScissorTest(Me=T)},this.setOpaqueSort=function(T){ht=T},this.setTransparentSort=function(T){Et=T},this.getClearColor=function(T){return T.copy(Ht.getClearColor())},this.setClearColor=function(){Ht.setClearColor.apply(Ht,arguments)},this.getClearAlpha=function(){return Ht.getClearAlpha()},this.setClearAlpha=function(){Ht.setClearAlpha.apply(Ht,arguments)},this.clear=function(T=!0,U=!0,G=!0){let V=0;if(T){let H=!1;if(F!==null){let it=F.texture.format;H=it===Dc||it===Ic||it===Pc}if(H){let it=F.texture.type,mt=it===ci||it===hi||it===Er||it===Hs||it===xc||it===Cc,Tt=Ht.getClearColor(),bt=Ht.getClearAlpha(),Ot=Tt.r,Vt=Tt.g,wt=Tt.b;mt?(g[0]=Ot,g[1]=Vt,g[2]=wt,g[3]=bt,B.clearBufferuiv(B.COLOR,0,g)):(E[0]=Ot,E[1]=Vt,E[2]=wt,E[3]=bt,B.clearBufferiv(B.COLOR,0,E))}else V|=B.COLOR_BUFFER_BIT}U&&(V|=B.DEPTH_BUFFER_BIT),G&&(V|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",K,!1),e.removeEventListener("webglcontextrestored",gt,!1),e.removeEventListener("webglcontextcreationerror",pt,!1),yt.dispose(),oe.dispose(),Lt.dispose(),M.dispose(),k.dispose(),Z.dispose(),Se.dispose(),L.dispose(),Ft.dispose(),X.dispose(),X.removeEventListener("sessionstart",rh),X.removeEventListener("sessionend",oh),Oi.stop()};function K(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function gt(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;let T=be.autoReset,U=_t.enabled,G=_t.autoUpdate,V=_t.needsUpdate,H=_t.type;ct(),be.autoReset=T,_t.enabled=U,_t.autoUpdate=G,_t.needsUpdate=V,_t.type=H}function pt(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Gt(T){let U=T.target;U.removeEventListener("dispose",Gt),Le(U)}function Le(T){Ke(T),Lt.remove(T)}function Ke(T){let U=Lt.get(T).programs;U!==void 0&&(U.forEach(function(G){Ft.releaseProgram(G)}),T.isShaderMaterial&&Ft.releaseShaderCache(T))}this.renderBufferDirect=function(T,U,G,V,H,it){U===null&&(U=Pe);let mt=H.isMesh&&H.matrixWorld.determinant()<0,Tt=Hu(T,U,G,V,H);Ut.setMaterial(V,mt);let bt=G.index,Ot=1;if(V.wireframe===!0){if(bt=j.getWireframeAttribute(G),bt===void 0)return;Ot=2}let Vt=G.drawRange,wt=G.attributes.position,ce=Vt.start*Ot,Te=(Vt.start+Vt.count)*Ot;it!==null&&(ce=Math.max(ce,it.start*Ot),Te=Math.min(Te,(it.start+it.count)*Ot)),bt!==null?(ce=Math.max(ce,0),Te=Math.min(Te,bt.count)):wt!=null&&(ce=Math.max(ce,0),Te=Math.min(Te,wt.count));let we=Te-ce;if(we<0||we===1/0)return;Se.setup(H,V,Tt,G,bt);let hn,pe=vt;if(bt!==null&&(hn=J.get(bt),pe=ie,pe.setIndex(hn)),H.isMesh)V.wireframe===!0?(Ut.setLineWidth(V.wireframeLinewidth*He()),pe.setMode(B.LINES)):pe.setMode(B.TRIANGLES);else if(H.isLine){let Pt=V.linewidth;Pt===void 0&&(Pt=1),Ut.setLineWidth(Pt*He()),H.isLineSegments?pe.setMode(B.LINES):H.isLineLoop?pe.setMode(B.LINE_LOOP):pe.setMode(B.LINE_STRIP)}else H.isPoints?pe.setMode(B.POINTS):H.isSprite&&pe.setMode(B.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)pe.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(ee.get("WEBGL_multi_draw"))pe.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{let Pt=H._multiDrawStarts,Qn=H._multiDrawCounts,me=H._multiDrawCount,Pn=bt?J.get(bt).bytesPerElement:1,ls=Lt.get(V).currentProgram.getUniforms();for(let _n=0;_n<me;_n++)ls.setValue(B,"_gl_DrawID",_n),pe.render(Pt[_n]/Pn,Qn[_n])}else if(H.isInstancedMesh)pe.renderInstances(ce,we,H.count);else if(G.isInstancedBufferGeometry){let Pt=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Qn=Math.min(G.instanceCount,Pt);pe.renderInstances(ce,we,Qn)}else pe.render(ce,we)};function ge(T,U,G){T.transparent===!0&&T.side===he&&T.forceSinglePass===!1?(T.side=Ve,T.needsUpdate=!0,Hr(T,U,G),T.side=xi,T.needsUpdate=!0,Hr(T,U,G),T.side=he):Hr(T,U,G)}this.compile=function(T,U,G=null){G===null&&(G=T),f=oe.get(G),f.init(U),_.push(f),G.traverseVisible(function(H){H.isLight&&H.layers.test(U.layers)&&(f.pushLight(H),H.castShadow&&f.pushShadow(H))}),T!==G&&T.traverseVisible(function(H){H.isLight&&H.layers.test(U.layers)&&(f.pushLight(H),H.castShadow&&f.pushShadow(H))}),f.setupLights();let V=new Set;return T.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;let it=H.material;if(it)if(Array.isArray(it))for(let mt=0;mt<it.length;mt++){let Tt=it[mt];ge(Tt,G,H),V.add(Tt)}else ge(it,G,H),V.add(it)}),_.pop(),f=null,V},this.compileAsync=function(T,U,G=null){let V=this.compile(T,U,G);return new Promise(H=>{function it(){if(V.forEach(function(mt){Lt.get(mt).currentProgram.isReady()&&V.delete(mt)}),V.size===0){H(T);return}setTimeout(it,10)}ee.get("KHR_parallel_shader_compile")!==null?it():setTimeout(it,10)})};let Fn=null;function Kn(T){Fn&&Fn(T)}function rh(){Oi.stop()}function oh(){Oi.start()}let Oi=new Gd;Oi.setAnimationLoop(Kn),typeof self<"u"&&Oi.setContext(self),this.setAnimationLoop=function(T){Fn=T,X.setAnimationLoop(T),T===null?Oi.stop():Oi.start()},X.addEventListener("sessionstart",rh),X.addEventListener("sessionend",oh),this.render=function(T,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),X.enabled===!0&&X.isPresenting===!0&&(X.cameraAutoUpdate===!0&&X.updateCamera(U),U=X.getCamera()),T.isScene===!0&&T.onBeforeRender(y,T,U,F),f=oe.get(T,_.length),f.init(U),_.push(f),Bt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),$.setFromProjectionMatrix(Bt),xt=this.localClippingEnabled,rt=nt.init(this.clippingPlanes,xt),m=yt.get(T,v.length),m.init(),v.push(m),X.enabled===!0&&X.isPresenting===!0){let it=y.xr.getDepthSensingMesh();it!==null&&Ea(it,U,-1/0,y.sortObjects)}Ea(T,U,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(ht,Et),re=X.enabled===!1||X.isPresenting===!1||X.hasDepthSensing()===!1,re&&Ht.addToRenderList(m,T),this.info.render.frame++,rt===!0&&nt.beginShadows();let G=f.state.shadowsArray;_t.render(G,T,U),rt===!0&&nt.endShadows(),this.info.autoReset===!0&&this.info.reset();let V=m.opaque,H=m.transmissive;if(f.setupLights(),U.isArrayCamera){let it=U.cameras;if(H.length>0)for(let mt=0,Tt=it.length;mt<Tt;mt++){let bt=it[mt];lh(V,H,T,bt)}re&&Ht.render(T);for(let mt=0,Tt=it.length;mt<Tt;mt++){let bt=it[mt];ah(m,T,bt,bt.viewport)}}else H.length>0&&lh(V,H,T,U),re&&Ht.render(T),ah(m,T,U);F!==null&&(x.updateMultisampleRenderTarget(F),x.updateRenderTargetMipmap(F)),T.isScene===!0&&T.onAfterRender(y,T,U),Se.resetDefaultState(),S=-1,A=null,_.pop(),_.length>0?(f=_[_.length-1],rt===!0&&nt.setGlobalState(y.clippingPlanes,f.state.camera)):f=null,v.pop(),v.length>0?m=v[v.length-1]:m=null};function Ea(T,U,G,V){if(T.visible===!1)return;if(T.layers.test(U.layers)){if(T.isGroup)G=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(U);else if(T.isLight)f.pushLight(T),T.castShadow&&f.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||$.intersectsSprite(T)){V&&Qt.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Bt);let mt=Z.update(T),Tt=T.material;Tt.visible&&m.push(T,mt,Tt,G,Qt.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||$.intersectsObject(T))){let mt=Z.update(T),Tt=T.material;if(V&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Qt.copy(T.boundingSphere.center)):(mt.boundingSphere===null&&mt.computeBoundingSphere(),Qt.copy(mt.boundingSphere.center)),Qt.applyMatrix4(T.matrixWorld).applyMatrix4(Bt)),Array.isArray(Tt)){let bt=mt.groups;for(let Ot=0,Vt=bt.length;Ot<Vt;Ot++){let wt=bt[Ot],ce=Tt[wt.materialIndex];ce&&ce.visible&&m.push(T,mt,ce,G,Qt.z,wt)}}else Tt.visible&&m.push(T,mt,Tt,G,Qt.z,null)}}let it=T.children;for(let mt=0,Tt=it.length;mt<Tt;mt++)Ea(it[mt],U,G,V)}function ah(T,U,G,V){let H=T.opaque,it=T.transmissive,mt=T.transparent;f.setupLightsView(G),rt===!0&&nt.setGlobalState(y.clippingPlanes,G),V&&Ut.viewport(P.copy(V)),H.length>0&&Ur(H,U,G),it.length>0&&Ur(it,U,G),mt.length>0&&Ur(mt,U,G),Ut.buffers.depth.setTest(!0),Ut.buffers.depth.setMask(!0),Ut.buffers.color.setMask(!0),Ut.setPolygonOffset(!1)}function lh(T,U,G,V){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[V.id]===void 0&&(f.state.transmissionRenderTarget[V.id]=new We(1,1,{generateMipmaps:!0,type:ee.has("EXT_color_buffer_half_float")||ee.has("EXT_color_buffer_float")?mn:ci,minFilter:Ji,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ae.workingColorSpace}));let it=f.state.transmissionRenderTarget[V.id],mt=V.viewport||P;it.setSize(mt.z,mt.w);let Tt=y.getRenderTarget();y.setRenderTarget(it),y.getClearColor(W),Q=y.getClearAlpha(),Q<1&&y.setClearColor(16777215,.5),y.clear(),re&&Ht.render(G);let bt=y.toneMapping;y.toneMapping=qn;let Ot=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),f.setupLightsView(V),rt===!0&&nt.setGlobalState(y.clippingPlanes,V),Ur(T,G,V),x.updateMultisampleRenderTarget(it),x.updateRenderTargetMipmap(it),ee.has("WEBGL_multisampled_render_to_texture")===!1){let Vt=!1;for(let wt=0,ce=U.length;wt<ce;wt++){let Te=U[wt],we=Te.object,hn=Te.geometry,pe=Te.material,Pt=Te.group;if(pe.side===he&&we.layers.test(V.layers)){let Qn=pe.side;pe.side=Ve,pe.needsUpdate=!0,ch(we,G,V,hn,pe,Pt),pe.side=Qn,pe.needsUpdate=!0,Vt=!0}}Vt===!0&&(x.updateMultisampleRenderTarget(it),x.updateRenderTargetMipmap(it))}y.setRenderTarget(Tt),y.setClearColor(W,Q),Ot!==void 0&&(V.viewport=Ot),y.toneMapping=bt}function Ur(T,U,G){let V=U.isScene===!0?U.overrideMaterial:null;for(let H=0,it=T.length;H<it;H++){let mt=T[H],Tt=mt.object,bt=mt.geometry,Ot=V===null?mt.material:V,Vt=mt.group;Tt.layers.test(G.layers)&&ch(Tt,U,G,bt,Ot,Vt)}}function ch(T,U,G,V,H,it){T.onBeforeRender(y,U,G,V,H,it),T.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),H.onBeforeRender(y,U,G,V,T,it),H.transparent===!0&&H.side===he&&H.forceSinglePass===!1?(H.side=Ve,H.needsUpdate=!0,y.renderBufferDirect(G,U,V,H,T,it),H.side=xi,H.needsUpdate=!0,y.renderBufferDirect(G,U,V,H,T,it),H.side=he):y.renderBufferDirect(G,U,V,H,T,it),T.onAfterRender(y,U,G,V,H,it)}function Hr(T,U,G){U.isScene!==!0&&(U=Pe);let V=Lt.get(T),H=f.state.lights,it=f.state.shadowsArray,mt=H.state.version,Tt=Ft.getParameters(T,H.state,it,U,G),bt=Ft.getProgramCacheKey(Tt),Ot=V.programs;V.environment=T.isMeshStandardMaterial?U.environment:null,V.fog=U.fog,V.envMap=(T.isMeshStandardMaterial?k:M).get(T.envMap||V.environment),V.envMapRotation=V.environment!==null&&T.envMap===null?U.environmentRotation:T.envMapRotation,Ot===void 0&&(T.addEventListener("dispose",Gt),Ot=new Map,V.programs=Ot);let Vt=Ot.get(bt);if(Vt!==void 0){if(V.currentProgram===Vt&&V.lightsStateVersion===mt)return dh(T,Tt),Vt}else Tt.uniforms=Ft.getUniforms(T),T.onBeforeCompile(Tt,y),Vt=Ft.acquireProgram(Tt,bt),Ot.set(bt,Vt),V.uniforms=Tt.uniforms;let wt=V.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(wt.clippingPlanes=nt.uniform),dh(T,Tt),V.needsLights=Nu(T),V.lightsStateVersion=mt,V.needsLights&&(wt.ambientLightColor.value=H.state.ambient,wt.lightProbe.value=H.state.probe,wt.directionalLights.value=H.state.directional,wt.directionalLightShadows.value=H.state.directionalShadow,wt.spotLights.value=H.state.spot,wt.spotLightShadows.value=H.state.spotShadow,wt.rectAreaLights.value=H.state.rectArea,wt.ltc_1.value=H.state.rectAreaLTC1,wt.ltc_2.value=H.state.rectAreaLTC2,wt.pointLights.value=H.state.point,wt.pointLightShadows.value=H.state.pointShadow,wt.hemisphereLights.value=H.state.hemi,wt.directionalShadowMap.value=H.state.directionalShadowMap,wt.directionalShadowMatrix.value=H.state.directionalShadowMatrix,wt.spotShadowMap.value=H.state.spotShadowMap,wt.spotLightMatrix.value=H.state.spotLightMatrix,wt.spotLightMap.value=H.state.spotLightMap,wt.pointShadowMap.value=H.state.pointShadowMap,wt.pointShadowMatrix.value=H.state.pointShadowMatrix),V.currentProgram=Vt,V.uniformsList=null,Vt}function hh(T){if(T.uniformsList===null){let U=T.currentProgram.getUniforms();T.uniformsList=Is.seqWithValue(U.seq,T.uniforms)}return T.uniformsList}function dh(T,U){let G=Lt.get(T);G.outputColorSpace=U.outputColorSpace,G.batching=U.batching,G.batchingColor=U.batchingColor,G.instancing=U.instancing,G.instancingColor=U.instancingColor,G.instancingMorph=U.instancingMorph,G.skinning=U.skinning,G.morphTargets=U.morphTargets,G.morphNormals=U.morphNormals,G.morphColors=U.morphColors,G.morphTargetsCount=U.morphTargetsCount,G.numClippingPlanes=U.numClippingPlanes,G.numIntersection=U.numClipIntersection,G.vertexAlphas=U.vertexAlphas,G.vertexTangents=U.vertexTangents,G.toneMapping=U.toneMapping}function Hu(T,U,G,V,H){U.isScene!==!0&&(U=Pe),x.resetTextureUnits();let it=U.fog,mt=V.isMeshStandardMaterial?U.environment:null,Tt=F===null?y.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:Di,bt=(V.isMeshStandardMaterial?k:M).get(V.envMap||mt),Ot=V.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Vt=!!G.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),wt=!!G.morphAttributes.position,ce=!!G.morphAttributes.normal,Te=!!G.morphAttributes.color,we=qn;V.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(we=y.toneMapping);let hn=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,pe=hn!==void 0?hn.length:0,Pt=Lt.get(V),Qn=f.state.lights;if(rt===!0&&(xt===!0||T!==A)){let bn=T===A&&V.id===S;nt.setState(V,T,bn)}let me=!1;V.version===Pt.__version?(Pt.needsLights&&Pt.lightsStateVersion!==Qn.state.version||Pt.outputColorSpace!==Tt||H.isBatchedMesh&&Pt.batching===!1||!H.isBatchedMesh&&Pt.batching===!0||H.isBatchedMesh&&Pt.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&Pt.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&Pt.instancing===!1||!H.isInstancedMesh&&Pt.instancing===!0||H.isSkinnedMesh&&Pt.skinning===!1||!H.isSkinnedMesh&&Pt.skinning===!0||H.isInstancedMesh&&Pt.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Pt.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Pt.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Pt.instancingMorph===!1&&H.morphTexture!==null||Pt.envMap!==bt||V.fog===!0&&Pt.fog!==it||Pt.numClippingPlanes!==void 0&&(Pt.numClippingPlanes!==nt.numPlanes||Pt.numIntersection!==nt.numIntersection)||Pt.vertexAlphas!==Ot||Pt.vertexTangents!==Vt||Pt.morphTargets!==wt||Pt.morphNormals!==ce||Pt.morphColors!==Te||Pt.toneMapping!==we||Pt.morphTargetsCount!==pe)&&(me=!0):(me=!0,Pt.__version=V.version);let Pn=Pt.currentProgram;me===!0&&(Pn=Hr(V,U,H));let ls=!1,_n=!1,js=!1,Re=Pn.getUniforms(),zn=Pt.uniforms;if(Ut.useProgram(Pn.program)&&(ls=!0,_n=!0,js=!0),V.id!==S&&(S=V.id,_n=!0),ls||A!==T){Ut.buffers.depth.getReversed()?(dt.copy(T.projectionMatrix),xf(dt),Cf(dt),Re.setValue(B,"projectionMatrix",dt)):Re.setValue(B,"projectionMatrix",T.projectionMatrix),Re.setValue(B,"viewMatrix",T.matrixWorldInverse);let Ei=Re.map.cameraPosition;Ei!==void 0&&Ei.setValue(B,kt.setFromMatrixPosition(T.matrixWorld)),ne.logarithmicDepthBuffer&&Re.setValue(B,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&Re.setValue(B,"isOrthographic",T.isOrthographicCamera===!0),A!==T&&(A=T,_n=!0,js=!0)}if(H.isSkinnedMesh){Re.setOptional(B,H,"bindMatrix"),Re.setOptional(B,H,"bindMatrixInverse");let bn=H.skeleton;bn&&(bn.boneTexture===null&&bn.computeBoneTexture(),Re.setValue(B,"boneTexture",bn.boneTexture,x))}H.isBatchedMesh&&(Re.setOptional(B,H,"batchingTexture"),Re.setValue(B,"batchingTexture",H._matricesTexture,x),Re.setOptional(B,H,"batchingIdTexture"),Re.setValue(B,"batchingIdTexture",H._indirectTexture,x),Re.setOptional(B,H,"batchingColorTexture"),H._colorsTexture!==null&&Re.setValue(B,"batchingColorTexture",H._colorsTexture,x));let tr=G.morphAttributes;if((tr.position!==void 0||tr.normal!==void 0||tr.color!==void 0)&&Nt.update(H,G,Pn),(_n||Pt.receiveShadow!==H.receiveShadow)&&(Pt.receiveShadow=H.receiveShadow,Re.setValue(B,"receiveShadow",H.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(zn.envMap.value=bt,zn.flipEnvMap.value=bt.isCubeTexture&&bt.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&U.environment!==null&&(zn.envMapIntensity.value=U.environmentIntensity),_n&&(Re.setValue(B,"toneMappingExposure",y.toneMappingExposure),Pt.needsLights&&Bu(zn,js),it&&V.fog===!0&&ut.refreshFogUniforms(zn,it),ut.refreshMaterialUniforms(zn,V,q,st,f.state.transmissionRenderTarget[T.id]),Is.upload(B,hh(Pt),zn,x)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Is.upload(B,hh(Pt),zn,x),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&Re.setValue(B,"center",H.center),Re.setValue(B,"modelViewMatrix",H.modelViewMatrix),Re.setValue(B,"normalMatrix",H.normalMatrix),Re.setValue(B,"modelMatrix",H.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){let bn=V.uniformsGroups;for(let Ei=0,yi=bn.length;Ei<yi;Ei++){let uh=bn[Ei];L.update(uh,Pn),L.bind(uh,Pn)}}return Pn}function Bu(T,U){T.ambientLightColor.needsUpdate=U,T.lightProbe.needsUpdate=U,T.directionalLights.needsUpdate=U,T.directionalLightShadows.needsUpdate=U,T.pointLights.needsUpdate=U,T.pointLightShadows.needsUpdate=U,T.spotLights.needsUpdate=U,T.spotLightShadows.needsUpdate=U,T.rectAreaLights.needsUpdate=U,T.hemisphereLights.needsUpdate=U}function Nu(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(T,U,G){Lt.get(T.texture).__webglTexture=U,Lt.get(T.depthTexture).__webglTexture=G;let V=Lt.get(T);V.__hasExternalTextures=!0,V.__autoAllocateDepthBuffer=G===void 0,V.__autoAllocateDepthBuffer||ee.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,U){let G=Lt.get(T);G.__webglFramebuffer=U,G.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(T,U=0,G=0){F=T,C=U,b=G;let V=!0,H=null,it=!1,mt=!1;if(T){let bt=Lt.get(T);if(bt.__useDefaultFramebuffer!==void 0)Ut.bindFramebuffer(B.FRAMEBUFFER,null),V=!1;else if(bt.__webglFramebuffer===void 0)x.setupRenderTarget(T);else if(bt.__hasExternalTextures)x.rebindTextures(T,Lt.get(T.texture).__webglTexture,Lt.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let wt=T.depthTexture;if(bt.__boundDepthTexture!==wt){if(wt!==null&&Lt.has(wt)&&(T.width!==wt.image.width||T.height!==wt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");x.setupDepthRenderbuffer(T)}}let Ot=T.texture;(Ot.isData3DTexture||Ot.isDataArrayTexture||Ot.isCompressedArrayTexture)&&(mt=!0);let Vt=Lt.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Vt[U])?H=Vt[U][G]:H=Vt[U],it=!0):T.samples>0&&x.useMultisampledRTT(T)===!1?H=Lt.get(T).__webglMultisampledFramebuffer:Array.isArray(Vt)?H=Vt[G]:H=Vt,P.copy(T.viewport),N.copy(T.scissor),O=T.scissorTest}else P.copy(Dt).multiplyScalar(q).floor(),N.copy(Kt).multiplyScalar(q).floor(),O=Me;if(Ut.bindFramebuffer(B.FRAMEBUFFER,H)&&V&&Ut.drawBuffers(T,H),Ut.viewport(P),Ut.scissor(N),Ut.setScissorTest(O),it){let bt=Lt.get(T.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+U,bt.__webglTexture,G)}else if(mt){let bt=Lt.get(T.texture),Ot=U||0;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,bt.__webglTexture,G||0,Ot)}S=-1},this.readRenderTargetPixels=function(T,U,G,V,H,it,mt){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Tt=Lt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&mt!==void 0&&(Tt=Tt[mt]),Tt){Ut.bindFramebuffer(B.FRAMEBUFFER,Tt);try{let bt=T.texture,Ot=bt.format,Vt=bt.type;if(!ne.textureFormatReadable(Ot)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ne.textureTypeReadable(Vt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=T.width-V&&G>=0&&G<=T.height-H&&B.readPixels(U,G,V,H,qt.convert(Ot),qt.convert(Vt),it)}finally{let bt=F!==null?Lt.get(F).__webglFramebuffer:null;Ut.bindFramebuffer(B.FRAMEBUFFER,bt)}}},this.readRenderTargetPixelsAsync=async function(T,U,G,V,H,it,mt){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Tt=Lt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&mt!==void 0&&(Tt=Tt[mt]),Tt){let bt=T.texture,Ot=bt.format,Vt=bt.type;if(!ne.textureFormatReadable(Ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ne.textureTypeReadable(Vt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=T.width-V&&G>=0&&G<=T.height-H){Ut.bindFramebuffer(B.FRAMEBUFFER,Tt);let wt=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,wt),B.bufferData(B.PIXEL_PACK_BUFFER,it.byteLength,B.STREAM_READ),B.readPixels(U,G,V,H,qt.convert(Ot),qt.convert(Vt),0);let ce=F!==null?Lt.get(F).__webglFramebuffer:null;Ut.bindFramebuffer(B.FRAMEBUFFER,ce);let Te=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await Rf(B,Te,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,wt),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,it),B.deleteBuffer(wt),B.deleteSync(Te),it}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,U=null,G=0){T.isTexture!==!0&&(dr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,T=arguments[1]);let V=Math.pow(2,-G),H=Math.floor(T.image.width*V),it=Math.floor(T.image.height*V),mt=U!==null?U.x:0,Tt=U!==null?U.y:0;x.setTexture2D(T,0),B.copyTexSubImage2D(B.TEXTURE_2D,G,0,0,mt,Tt,H,it),Ut.unbindTexture()},this.copyTextureToTexture=function(T,U,G=null,V=null,H=0){T.isTexture!==!0&&(dr("WebGLRenderer: copyTextureToTexture function signature has changed."),V=arguments[0]||null,T=arguments[1],U=arguments[2],H=arguments[3]||0,G=null);let it,mt,Tt,bt,Ot,Vt,wt,ce,Te,we=T.isCompressedTexture?T.mipmaps[H]:T.image;G!==null?(it=G.max.x-G.min.x,mt=G.max.y-G.min.y,Tt=G.isBox3?G.max.z-G.min.z:1,bt=G.min.x,Ot=G.min.y,Vt=G.isBox3?G.min.z:0):(it=we.width,mt=we.height,Tt=we.depth||1,bt=0,Ot=0,Vt=0),V!==null?(wt=V.x,ce=V.y,Te=V.z):(wt=0,ce=0,Te=0);let hn=qt.convert(U.format),pe=qt.convert(U.type),Pt;U.isData3DTexture?(x.setTexture3D(U,0),Pt=B.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(x.setTexture2DArray(U,0),Pt=B.TEXTURE_2D_ARRAY):(x.setTexture2D(U,0),Pt=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,U.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,U.unpackAlignment);let Qn=B.getParameter(B.UNPACK_ROW_LENGTH),me=B.getParameter(B.UNPACK_IMAGE_HEIGHT),Pn=B.getParameter(B.UNPACK_SKIP_PIXELS),ls=B.getParameter(B.UNPACK_SKIP_ROWS),_n=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,we.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,we.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,bt),B.pixelStorei(B.UNPACK_SKIP_ROWS,Ot),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Vt);let js=T.isDataArrayTexture||T.isData3DTexture,Re=U.isDataArrayTexture||U.isData3DTexture;if(T.isRenderTargetTexture||T.isDepthTexture){let zn=Lt.get(T),tr=Lt.get(U),bn=Lt.get(zn.__renderTarget),Ei=Lt.get(tr.__renderTarget);Ut.bindFramebuffer(B.READ_FRAMEBUFFER,bn.__webglFramebuffer),Ut.bindFramebuffer(B.DRAW_FRAMEBUFFER,Ei.__webglFramebuffer);for(let yi=0;yi<Tt;yi++)js&&B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Lt.get(T).__webglTexture,H,Vt+yi),T.isDepthTexture?(Re&&B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Lt.get(U).__webglTexture,H,Te+yi),B.blitFramebuffer(bt,Ot,it,mt,wt,ce,it,mt,B.DEPTH_BUFFER_BIT,B.NEAREST)):Re?B.copyTexSubImage3D(Pt,H,wt,ce,Te+yi,bt,Ot,it,mt):B.copyTexSubImage2D(Pt,H,wt,ce,Te+yi,bt,Ot,it,mt);Ut.bindFramebuffer(B.READ_FRAMEBUFFER,null),Ut.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else Re?T.isDataTexture||T.isData3DTexture?B.texSubImage3D(Pt,H,wt,ce,Te,it,mt,Tt,hn,pe,we.data):U.isCompressedArrayTexture?B.compressedTexSubImage3D(Pt,H,wt,ce,Te,it,mt,Tt,hn,we.data):B.texSubImage3D(Pt,H,wt,ce,Te,it,mt,Tt,hn,pe,we):T.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,H,wt,ce,it,mt,hn,pe,we.data):T.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,H,wt,ce,we.width,we.height,hn,we.data):B.texSubImage2D(B.TEXTURE_2D,H,wt,ce,it,mt,hn,pe,we);B.pixelStorei(B.UNPACK_ROW_LENGTH,Qn),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,me),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Pn),B.pixelStorei(B.UNPACK_SKIP_ROWS,ls),B.pixelStorei(B.UNPACK_SKIP_IMAGES,_n),H===0&&U.generateMipmaps&&B.generateMipmap(Pt),Ut.unbindTexture()},this.copyTextureToTexture3D=function(T,U,G=null,V=null,H=0){return T.isTexture!==!0&&(dr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),G=arguments[0]||null,V=arguments[1]||null,T=arguments[2],U=arguments[3],H=arguments[4]||0),dr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,U,G,V,H)},this.initRenderTarget=function(T){Lt.get(T).__webglFramebuffer===void 0&&x.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?x.setTextureCube(T,0):T.isData3DTexture?x.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?x.setTexture2DArray(T,0):x.setTexture2D(T,0),Ut.unbindTexture()},this.resetState=function(){C=0,b=0,F=null,Ut.reset(),Se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return oi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=ae._getDrawingBufferColorSpace(t),e.unpackColorSpace=ae._getUnpackColorSpace()}},St=class n{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new ot(t),this.density=e}clone(){return new n(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Lo=class extends Be{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Yn,this.environmentIntensity=1,this.environmentRotation=new Yn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},ec=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Ol,this.updateRanges=[],this.version=0,this.uuid=ai()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ai()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ai()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},an=new D,Uo=class n{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)an.fromBufferAttribute(this,e),an.applyMatrix4(t),this.setXYZ(e,an.x,an.y,an.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)an.fromBufferAttribute(this,e),an.applyNormalMatrix(t),this.setXYZ(e,an.x,an.y,an.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)an.fromBufferAttribute(this,e),an.transformDirection(t),this.setXYZ(e,an.x,an.y,an.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=Gn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ye(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=ye(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ye(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ye(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ye(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Gn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Gn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Gn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Gn(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=ye(e,this.array),i=ye(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ye(e,this.array),i=ye(i,this.array),s=ye(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ye(e,this.array),i=ye(i,this.array),s=ye(s,this.array),r=ye(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Oe(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new n(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},ks=class extends ui{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new ot(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Ss,rr=new D,Ts=new D,bs=new D,ws=new et,or=new et,Yd=new ve,so=new D,ar=new D,ro=new D,dd=new et,Za=new et,ud=new et,_r=class extends Be{constructor(t=new ks){if(super(),this.isSprite=!0,this.type="Sprite",Ss===void 0){Ss=new Ue;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new ec(e,5);Ss.setIndex([0,1,2,0,2,3]),Ss.setAttribute("position",new Uo(i,3,0,!1)),Ss.setAttribute("uv",new Uo(i,2,3,!1))}this.geometry=Ss,this.material=t,this.center=new et(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ts.setFromMatrixScale(this.matrixWorld),Yd.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),bs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ts.multiplyScalar(-bs.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let o=this.center;oo(so.set(-.5,-.5,0),bs,o,Ts,s,r),oo(ar.set(.5,-.5,0),bs,o,Ts,s,r),oo(ro.set(.5,.5,0),bs,o,Ts,s,r),dd.set(0,0),Za.set(1,0),ud.set(1,1);let a=t.ray.intersectTriangle(so,ar,ro,!1,rr);if(a===null&&(oo(ar.set(-.5,.5,0),bs,o,Ts,s,r),Za.set(0,1),a=t.ray.intersectTriangle(so,ro,ar,!1,rr),a===null))return;let l=t.ray.origin.distanceTo(rr);l<t.near||l>t.far||e.push({distance:l,point:rr.clone(),uv:wi.getInterpolation(rr,so,ar,ro,dd,Za,ud,new et),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function oo(n,t,e,i,s,r){ws.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(or.x=r*ws.x-s*ws.y,or.y=s*ws.x+r*ws.y):or.copy(ws),n.copy(t),n.x+=or.x,n.y+=or.y,n.applyMatrix4(Yd)}var nc=class extends un{constructor(t=null,e=1,i=1,s,r,o,a,l,c=Mn,h=Mn,d,u){super(null,o,a,l,c,h,s,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ho=class extends Oe{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Rs=new ve,fd=new ve,ao=[],pd=new di,Mg=new ve,lr=new z,cr=new Pi,Bo=class extends z{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Ho(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,Mg)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new di),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Rs),pd.copy(t.boundingBox).applyMatrix4(Rs),this.boundingBox.union(pd)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Pi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Rs),cr.copy(t.boundingSphere).applyMatrix4(Rs),this.boundingSphere.union(cr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let i=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=t*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(t,e){let i=this.matrixWorld,s=this.count;if(lr.geometry=this.geometry,lr.material=this.material,lr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),cr.copy(this.boundingSphere),cr.applyMatrix4(i),t.ray.intersectsSphere(cr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Rs),fd.multiplyMatrices(i,Rs),lr.matrixWorld=fd,lr.raycast(t,ao);for(let o=0,a=ao.length;o<a;o++){let l=ao[o];l.instanceId=r,l.object=this,e.push(l)}ao.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Ho(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let i=e.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new nc(new Float32Array(s*this.count),s,this.count,Fc,Wn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<i.length;c++)o+=i[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;r[l]=a,r.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var Gs=class extends ui{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new ot(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},md=new ve,ic=new wo,lo=new Pi,co=new D,vr=class extends Be{constructor(t=new Ue,e=new Gs){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),lo.copy(i.boundingSphere),lo.applyMatrix4(s),lo.radius+=r,t.ray.intersectsSphere(lo)===!1)return;md.copy(s).invert(),ic.copy(t.ray).applyMatrix4(md);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,d=i.attributes.position;if(c!==null){let u=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let g=u,E=p;g<E;g++){let m=c.getX(g);co.fromBufferAttribute(d,m),gd(co,m,l,s,t,e,this)}}else{let u=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let g=u,E=p;g<E;g++)co.fromBufferAttribute(d,g),gd(co,g,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function gd(n,t,e,i,s,r,o){let a=ic.distanceSqToPoint(n);if(a<e){let l=new D;ic.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Rn=class extends un{constructor(t,e,i,s,r,o,a,l,c){super(t,e,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},xn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],i,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let i=this.getLengths(),s=0,r=i.length,o;e?o=e:o=t*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);let h=i[s],u=i[s+1]-h,p=(o-h)/u;return(s+p)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new et:new D);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){let i=new D,s=[],r=[],o=[],a=new D,l=new ve;for(let p=0;p<=t;p++){let g=p/t;s[p]=this.getTangentAt(g,new D)}r[0]=new D,o[0]=new D;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),u<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(s[p-1],s[p]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(tn(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(a,g))}o[p].crossVectors(s[p],r[p])}if(e===!0){let p=Math.acos(tn(r[0].dot(r[t]),-1,1));p/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(p=-p);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],p*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Ar=class extends xn{constructor(t=0,e=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new et){let i=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,p=c-this.aY;l=u*h-p*d+this.aX,c=u*d+p*h+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},sc=class extends Ar{constructor(t,e,i,s,r,o){super(t,e,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Uc(){let n=0,t=0,e=0,i=0;function s(r,o,a,l){n=r,t=a,e=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,d){let u=(o-r)/c-(a-r)/(c+h)+(a-o)/h,p=(a-o)/h-(l-o)/(h+d)+(l-a)/d;u*=h,p*=h,s(o,a,u,p)},calc:function(r){let o=r*r,a=o*r;return n+t*r+e*o+i*a}}}var ho=new D,$a=new Uc,Ja=new Uc,Ka=new Uc,Ki=class extends xn{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new D){let i=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(ho.subVectors(s[0],s[1]).add(s[0]),c=ho);let d=s[a%r],u=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(ho.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=ho),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(d),p),E=Math.pow(d.distanceToSquared(u),p),m=Math.pow(u.distanceToSquared(h),p);E<1e-4&&(E=1),g<1e-4&&(g=E),m<1e-4&&(m=E),$a.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,g,E,m),Ja.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,g,E,m),Ka.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,g,E,m)}else this.curveType==="catmullrom"&&($a.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),Ja.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),Ka.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return i.set($a.calc(l),Ja.calc(l),Ka.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new D().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Ed(n,t,e,i,s){let r=(i-t)*.5,o=(s-e)*.5,a=n*n,l=n*a;return(2*e-2*i+r+o)*l+(-3*e+3*i-2*r-o)*a+r*n+e}function Sg(n,t){let e=1-n;return e*e*t}function Tg(n,t){return 2*(1-n)*n*t}function bg(n,t){return n*n*t}function pr(n,t,e,i){return Sg(n,t)+Tg(n,e)+bg(n,i)}function wg(n,t){let e=1-n;return e*e*e*t}function Rg(n,t){let e=1-n;return 3*e*e*n*t}function xg(n,t){return 3*(1-n)*n*n*t}function Cg(n,t){return n*n*n*t}function mr(n,t,e,i,s){return wg(n,t)+Rg(n,e)+xg(n,i)+Cg(n,s)}var No=class extends xn{constructor(t=new et,e=new et,i=new et,s=new et){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new et){let i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(mr(t,s.x,r.x,o.x,a.x),mr(t,s.y,r.y,o.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},rc=class extends xn{constructor(t=new D,e=new D,i=new D,s=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new D){let i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(mr(t,s.x,r.x,o.x,a.x),mr(t,s.y,r.y,o.y,a.y),mr(t,s.z,r.z,o.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Oo=class extends xn{constructor(t=new et,e=new et){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new et){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new et){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},oc=class extends xn{constructor(t=new D,e=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new D){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new D){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},zo=class extends xn{constructor(t=new et,e=new et,i=new et){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new et){let i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(pr(t,s.x,r.x,o.x),pr(t,s.y,r.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ko=class extends xn{constructor(t=new D,e=new D,i=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new D){let i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(pr(t,s.x,r.x,o.x),pr(t,s.y,r.y,o.y),pr(t,s.z,r.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Go=class extends xn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new et){let i=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return i.set(Ed(a,l.x,c.x,h.x,d.x),Ed(a,l.y,c.y,h.y,d.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new et().fromArray(s))}return this}},ac=Object.freeze({__proto__:null,ArcCurve:sc,CatmullRomCurve3:Ki,CubicBezierCurve:No,CubicBezierCurve3:rc,EllipseCurve:Ar,LineCurve:Oo,LineCurve3:oc,QuadraticBezierCurve:zo,QuadraticBezierCurve3:ko,SplineCurve:Go}),lc=class extends xn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ac[i](e,t))}return this}getPoint(t,e){let i=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],i;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(e.push(h),i=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(new ac[s.type]().fromJSON(s))}return this}},Vo=class extends lc{constructor(t){super(),this.type="Path",this.currentPoint=new et,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let i=new Oo(this.currentPoint.clone(),new et(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){let r=new zo(this.currentPoint.clone(),new et(t,e),new et(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,r,o){let a=new No(this.currentPoint.clone(),new et(t,e),new et(i,s),new et(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),i=new Go(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,i,s,r,o),this}absarc(t,e,i,s,r,o){return this.absellipse(t,e,i,i,s,r,o),this}ellipse(t,e,i,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,i,s,r,o,a,l),this}absellipse(t,e,i,s,r,o,a,l){let c=new Ar(t,e,i,s,r,o,a,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}};var en=class n extends Ue{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],l=[],c=new D,h=new et;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=e;d++,u+=3){let p=i+d/e*s;c.x=t*Math.cos(p),c.y=t*Math.sin(p),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[u]/t+1)/2,h.y=(o[u+1]/t+1)/2,l.push(h.x,h.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new le(o,3)),this.setAttribute("normal",new le(a,3)),this.setAttribute("uv",new le(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Zt=class n extends Ue{constructor(t=1,e=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],u=[],p=[],g=0,E=[],m=i/2,f=0;v(),o===!1&&(t>0&&_(!0),e>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new le(d,3)),this.setAttribute("normal",new le(u,3)),this.setAttribute("uv",new le(p,2));function v(){let y=new D,I=new D,C=0,b=(e-t)/i;for(let F=0;F<=r;F++){let S=[],A=F/r,P=A*(e-t)+t;for(let N=0;N<=s;N++){let O=N/s,W=O*l+a,Q=Math.sin(W),Y=Math.cos(W);I.x=P*Q,I.y=-A*i+m,I.z=P*Y,d.push(I.x,I.y,I.z),y.set(Q,b,Y).normalize(),u.push(y.x,y.y,y.z),p.push(O,1-A),S.push(g++)}E.push(S)}for(let F=0;F<s;F++)for(let S=0;S<r;S++){let A=E[S][F],P=E[S+1][F],N=E[S+1][F+1],O=E[S][F+1];(t>0||S!==0)&&(h.push(A,P,O),C+=3),(e>0||S!==r-1)&&(h.push(P,N,O),C+=3)}c.addGroup(f,C,0),f+=C}function _(y){let I=g,C=new et,b=new D,F=0,S=y===!0?t:e,A=y===!0?1:-1;for(let N=1;N<=s;N++)d.push(0,m*A,0),u.push(0,A,0),p.push(.5,.5),g++;let P=g;for(let N=0;N<=s;N++){let W=N/s*l+a,Q=Math.cos(W),Y=Math.sin(W);b.x=S*Y,b.y=m*A,b.z=S*Q,d.push(b.x,b.y,b.z),u.push(0,A,0),C.x=Q*.5+.5,C.y=Y*.5*A+.5,p.push(C.x,C.y),g++}for(let N=0;N<s;N++){let O=I+N,W=P+N;y===!0?h.push(W,W+1,O):h.push(W+1,W,O),F+=3}c.addGroup(f,F,y===!0?1:2),f+=F}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},qe=class n extends Zt{constructor(t=1,e=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new n(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},cc=class n extends Ue{constructor(t=[],e=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:s};let r=[],o=[];a(s),c(i),h(),this.setAttribute("position",new le(r,3)),this.setAttribute("normal",new le(r.slice(),3)),this.setAttribute("uv",new le(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(v){let _=new D,y=new D,I=new D;for(let C=0;C<e.length;C+=3)p(e[C+0],_),p(e[C+1],y),p(e[C+2],I),l(_,y,I,v)}function l(v,_,y,I){let C=I+1,b=[];for(let F=0;F<=C;F++){b[F]=[];let S=v.clone().lerp(y,F/C),A=_.clone().lerp(y,F/C),P=C-F;for(let N=0;N<=P;N++)N===0&&F===C?b[F][N]=S:b[F][N]=S.clone().lerp(A,N/P)}for(let F=0;F<C;F++)for(let S=0;S<2*(C-F)-1;S++){let A=Math.floor(S/2);S%2===0?(u(b[F][A+1]),u(b[F+1][A]),u(b[F][A])):(u(b[F][A+1]),u(b[F+1][A+1]),u(b[F+1][A]))}}function c(v){let _=new D;for(let y=0;y<r.length;y+=3)_.x=r[y+0],_.y=r[y+1],_.z=r[y+2],_.normalize().multiplyScalar(v),r[y+0]=_.x,r[y+1]=_.y,r[y+2]=_.z}function h(){let v=new D;for(let _=0;_<r.length;_+=3){v.x=r[_+0],v.y=r[_+1],v.z=r[_+2];let y=m(v)/2/Math.PI+.5,I=f(v)/Math.PI+.5;o.push(y,1-I)}g(),d()}function d(){for(let v=0;v<o.length;v+=6){let _=o[v+0],y=o[v+2],I=o[v+4],C=Math.max(_,y,I),b=Math.min(_,y,I);C>.9&&b<.1&&(_<.2&&(o[v+0]+=1),y<.2&&(o[v+2]+=1),I<.2&&(o[v+4]+=1))}}function u(v){r.push(v.x,v.y,v.z)}function p(v,_){let y=v*3;_.x=t[y+0],_.y=t[y+1],_.z=t[y+2]}function g(){let v=new D,_=new D,y=new D,I=new D,C=new et,b=new et,F=new et;for(let S=0,A=0;S<r.length;S+=9,A+=6){v.set(r[S+0],r[S+1],r[S+2]),_.set(r[S+3],r[S+4],r[S+5]),y.set(r[S+6],r[S+7],r[S+8]),C.set(o[A+0],o[A+1]),b.set(o[A+2],o[A+3]),F.set(o[A+4],o[A+5]),I.copy(v).add(_).add(y).divideScalar(3);let P=m(I);E(C,A+0,v,P),E(b,A+2,_,P),E(F,A+4,y,P)}}function E(v,_,y,I){I<0&&v.x===1&&(o[_]=v.x-1),y.x===0&&y.z===0&&(o[_]=I/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function f(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.vertices,t.indices,t.radius,t.details)}},fi=class n extends cc{constructor(t=1,e=0){let i=(1+Math.sqrt(5))/2,s=1/i,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-i,0,-s,i,0,s,-i,0,s,i,-s,-i,0,-s,i,0,s,-i,0,s,i,0,-i,0,-s,i,0,-s,-i,0,s,i,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new n(t.radius,t.detail)}};var Mr=class extends Vo{constructor(t){super(t),this.uuid=ai(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let i=0,s=this.holes.length;i<s;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let s=t.holes[e];this.holes.push(new Vo().fromJSON(s))}return this}},Fg={triangulate:function(n,t,e=2){let i=t&&t.length,s=i?t[0]*e:n.length,r=Zd(n,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c,h,d,u,p;if(i&&(r=Ug(n,t,r,e)),n.length>80*e){a=c=n[0],l=h=n[1];for(let g=e;g<s;g+=e)d=n[g],u=n[g+1],d<a&&(a=d),u<l&&(l=u),d>c&&(c=d),u>h&&(h=u);p=Math.max(c-a,h-l),p=p!==0?32767/p:0}return Sr(r,o,e,a,l,p,0),o}};function Zd(n,t,e,i,s){let r,o;if(s===qg(n,t,e,i)>0)for(r=t;r<e;r+=i)o=yd(r,n[r],n[r+1],o);else for(r=e-i;r>=t;r-=i)o=yd(r,n[r],n[r+1],o);return o&&Jo(o,o.next)&&(br(o),o=o.next),o}function Qi(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(Jo(e,e.next)||Ie(e.prev,e,e.next)===0)){if(br(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function Sr(n,t,e,i,s,r,o){if(!n)return;!o&&r&&zg(n,i,s,r);let a=n,l,c;for(;n.prev!==n.next;){if(l=n.prev,c=n.next,r?Ig(n,i,s,r):Pg(n)){t.push(l.i/e|0),t.push(n.i/e|0),t.push(c.i/e|0),br(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=Dg(Qi(n),t,e),Sr(n,t,e,i,s,r,2)):o===2&&Lg(n,t,e,i,s,r):Sr(Qi(n),t,e,i,s,r,1);break}}}function Pg(n){let t=n.prev,e=n,i=n.next;if(Ie(t,e,i)>=0)return!1;let s=t.x,r=e.x,o=i.x,a=t.y,l=e.y,c=i.y,h=s<r?s<o?s:o:r<o?r:o,d=a<l?a<c?a:c:l<c?l:c,u=s>r?s>o?s:o:r>o?r:o,p=a>l?a>c?a:c:l>c?l:c,g=i.next;for(;g!==t;){if(g.x>=h&&g.x<=u&&g.y>=d&&g.y<=p&&Cs(s,a,r,l,o,c,g.x,g.y)&&Ie(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Ig(n,t,e,i){let s=n.prev,r=n,o=n.next;if(Ie(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,d=r.y,u=o.y,p=a<l?a<c?a:c:l<c?l:c,g=h<d?h<u?h:u:d<u?d:u,E=a>l?a>c?a:c:l>c?l:c,m=h>d?h>u?h:u:d>u?d:u,f=hc(p,g,t,e,i),v=hc(E,m,t,e,i),_=n.prevZ,y=n.nextZ;for(;_&&_.z>=f&&y&&y.z<=v;){if(_.x>=p&&_.x<=E&&_.y>=g&&_.y<=m&&_!==s&&_!==o&&Cs(a,h,l,d,c,u,_.x,_.y)&&Ie(_.prev,_,_.next)>=0||(_=_.prevZ,y.x>=p&&y.x<=E&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&Cs(a,h,l,d,c,u,y.x,y.y)&&Ie(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;_&&_.z>=f;){if(_.x>=p&&_.x<=E&&_.y>=g&&_.y<=m&&_!==s&&_!==o&&Cs(a,h,l,d,c,u,_.x,_.y)&&Ie(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;y&&y.z<=v;){if(y.x>=p&&y.x<=E&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&Cs(a,h,l,d,c,u,y.x,y.y)&&Ie(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function Dg(n,t,e){let i=n;do{let s=i.prev,r=i.next.next;!Jo(s,r)&&$d(s,i,i.next,r)&&Tr(s,r)&&Tr(r,s)&&(t.push(s.i/e|0),t.push(i.i/e|0),t.push(r.i/e|0),br(i),br(i.next),i=n=r),i=i.next}while(i!==n);return Qi(i)}function Lg(n,t,e,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Vg(o,a)){let l=Jd(o,a);o=Qi(o,o.next),l=Qi(l,l.next),Sr(o,t,e,i,s,r,0),Sr(l,t,e,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function Ug(n,t,e,i){let s=[],r,o,a,l,c;for(r=0,o=t.length;r<o;r++)a=t[r]*i,l=r<o-1?t[r+1]*i:n.length,c=Zd(n,a,l,i,!1),c===c.next&&(c.steiner=!0),s.push(Gg(c));for(s.sort(Hg),r=0;r<s.length;r++)e=Bg(s[r],e);return e}function Hg(n,t){return n.x-t.x}function Bg(n,t){let e=Ng(n,t);if(!e)return t;let i=Jd(e,n);return Qi(i,i.next),Qi(e,e.next)}function Ng(n,t){let e=t,i=-1/0,s,r=n.x,o=n.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){let u=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=r&&u>i&&(i=u,s=e.x<e.next.x?e:e.next,u===r))return s}e=e.next}while(e!==t);if(!s)return null;let a=s,l=s.x,c=s.y,h=1/0,d;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&Cs(o<c?r:i,o,l,c,o<c?i:r,o,e.x,e.y)&&(d=Math.abs(o-e.y)/(r-e.x),Tr(e,n)&&(d<h||d===h&&(e.x>s.x||e.x===s.x&&Og(s,e)))&&(s=e,h=d)),e=e.next;while(e!==a);return s}function Og(n,t){return Ie(n.prev,n,t.prev)<0&&Ie(t.next,n,n.next)<0}function zg(n,t,e,i){let s=n;do s.z===0&&(s.z=hc(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,kg(s)}function kg(n){let t,e,i,s,r,o,a,l,c=1;do{for(e=n,n=null,r=null,o=0;e;){for(o++,i=e,a=0,t=0;t<c&&(a++,i=i.nextZ,!!i);t++);for(l=c;a>0||l>0&&i;)a!==0&&(l===0||!i||e.z<=i.z)?(s=e,e=e.nextZ,a--):(s=i,i=i.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;e=i}r.nextZ=null,c*=2}while(o>1);return n}function hc(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function Gg(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function Cs(n,t,e,i,s,r,o,a){return(s-o)*(t-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(i-a)}function Vg(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!Wg(n,t)&&(Tr(n,t)&&Tr(t,n)&&Xg(n,t)&&(Ie(n.prev,n,t.prev)||Ie(n,t.prev,t))||Jo(n,t)&&Ie(n.prev,n,n.next)>0&&Ie(t.prev,t,t.next)>0)}function Ie(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function Jo(n,t){return n.x===t.x&&n.y===t.y}function $d(n,t,e,i){let s=fo(Ie(n,t,e)),r=fo(Ie(n,t,i)),o=fo(Ie(e,i,n)),a=fo(Ie(e,i,t));return!!(s!==r&&o!==a||s===0&&uo(n,e,t)||r===0&&uo(n,i,t)||o===0&&uo(e,n,i)||a===0&&uo(e,t,i))}function uo(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function fo(n){return n>0?1:n<0?-1:0}function Wg(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&$d(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function Tr(n,t){return Ie(n.prev,n,n.next)<0?Ie(n,t,n.next)>=0&&Ie(n,n.prev,t)>=0:Ie(n,t,n.prev)<0||Ie(n,n.next,t)<0}function Xg(n,t){let e=n,i=!1,s=(n.x+t.x)/2,r=(n.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function Jd(n,t){let e=new dc(n.i,n.x,n.y),i=new dc(t.i,t.x,t.y),s=n.next,r=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function yd(n,t,e,i){let s=new dc(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function br(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function dc(n,t,e){this.i=n,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function qg(n,t,e,i){let s=0;for(let r=t,o=e-i;r<e;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}var gr=class n{static area(t){let e=t.length,i=0;for(let s=e-1,r=0;r<e;s=r++)i+=t[s].x*t[r].y-t[r].x*t[s].y;return i*.5}static isClockWise(t){return n.area(t)<0}static triangulateShape(t,e){let i=[],s=[],r=[];_d(t),vd(i,t);let o=t.length;e.forEach(_d);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,vd(i,e[l]);let a=Fg.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function _d(n){let t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function vd(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}var Wo=class n extends Ue{constructor(t=new Mr([new et(0,.5),new et(-.5,-.5),new et(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let i=[],s=[],r=[],o=[],a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(i),this.setAttribute("position",new le(s,3)),this.setAttribute("normal",new le(r,3)),this.setAttribute("uv",new le(o,2));function c(h){let d=s.length/3,u=h.extractPoints(e),p=u.shape,g=u.holes;gr.isClockWise(p)===!1&&(p=p.reverse());for(let m=0,f=g.length;m<f;m++){let v=g[m];gr.isClockWise(v)===!0&&(g[m]=v.reverse())}let E=gr.triangulateShape(p,g);for(let m=0,f=g.length;m<f;m++){let v=g[m];p=p.concat(v)}for(let m=0,f=p.length;m<f;m++){let v=p[m];s.push(v.x,v.y,0),r.push(0,0,1),o.push(v.x,v.y)}for(let m=0,f=E.length;m<f;m++){let v=E[m],_=v[0]+d,y=v[1]+d,I=v[2]+d;i.push(_,y,I),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return Yg(e,t)}static fromJSON(t,e){let i=[];for(let s=0,r=t.shapes.length;s<r;s++){let o=e[t.shapes[s]];i.push(o)}return new n(i,t.curveSegments)}};function Yg(n,t){if(t.shapes=[],Array.isArray(n))for(let e=0,i=n.length;e<i;e++){let s=n[e];t.shapes.push(s.uuid)}else t.shapes.push(n.uuid);return t}var de=class n extends Ue{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,h=[],d=new D,u=new D,p=[],g=[],E=[],m=[];for(let f=0;f<=i;f++){let v=[],_=f/i,y=0;f===0&&o===0?y=.5/e:f===i&&l===Math.PI&&(y=-.5/e);for(let I=0;I<=e;I++){let C=I/e;d.x=-t*Math.cos(s+C*r)*Math.sin(o+_*a),d.y=t*Math.cos(o+_*a),d.z=t*Math.sin(s+C*r)*Math.sin(o+_*a),g.push(d.x,d.y,d.z),u.copy(d).normalize(),E.push(u.x,u.y,u.z),m.push(C+y,1-_),v.push(c++)}h.push(v)}for(let f=0;f<i;f++)for(let v=0;v<e;v++){let _=h[f][v+1],y=h[f][v],I=h[f+1][v],C=h[f+1][v+1];(f!==0||o>0)&&p.push(_,y,C),(f!==i-1||l<Math.PI)&&p.push(y,I,C)}this.setIndex(p),this.setAttribute("position",new le(g,3)),this.setAttribute("normal",new le(E,3)),this.setAttribute("uv",new le(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var nn=class n extends Ue{constructor(t=1,e=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);let o=[],a=[],l=[],c=[],h=new D,d=new D,u=new D;for(let p=0;p<=i;p++)for(let g=0;g<=s;g++){let E=g/s*r,m=p/i*Math.PI*2;d.x=(t+e*Math.cos(m))*Math.cos(E),d.y=(t+e*Math.cos(m))*Math.sin(E),d.z=e*Math.sin(m),a.push(d.x,d.y,d.z),h.x=t*Math.cos(E),h.y=t*Math.sin(E),u.subVectors(d,h).normalize(),l.push(u.x,u.y,u.z),c.push(g/s),c.push(p/i)}for(let p=1;p<=i;p++)for(let g=1;g<=s;g++){let E=(s+1)*p+g-1,m=(s+1)*(p-1)+g-1,f=(s+1)*(p-1)+g,v=(s+1)*p+g;o.push(E,m,v),o.push(m,f,v)}this.setIndex(o),this.setAttribute("position",new le(a,3)),this.setAttribute("normal",new le(l,3)),this.setAttribute("uv",new le(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var Vs=class n extends Ue{constructor(t=new ko(new D(-1,-1,0),new D(-1,1,0),new D(1,1,0)),e=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:i,radialSegments:s,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new D,l=new D,c=new et,h=new D,d=[],u=[],p=[],g=[];E(),this.setIndex(g),this.setAttribute("position",new le(d,3)),this.setAttribute("normal",new le(u,3)),this.setAttribute("uv",new le(p,2));function E(){for(let _=0;_<e;_++)m(_);m(r===!1?e:0),v(),f()}function m(_){h=t.getPointAt(_/e,h);let y=o.normals[_],I=o.binormals[_];for(let C=0;C<=s;C++){let b=C/s*Math.PI*2,F=Math.sin(b),S=-Math.cos(b);l.x=S*y.x+F*I.x,l.y=S*y.y+F*I.y,l.z=S*y.z+F*I.z,l.normalize(),u.push(l.x,l.y,l.z),a.x=h.x+i*l.x,a.y=h.y+i*l.y,a.z=h.z+i*l.z,d.push(a.x,a.y,a.z)}}function f(){for(let _=1;_<=e;_++)for(let y=1;y<=s;y++){let I=(s+1)*(_-1)+(y-1),C=(s+1)*_+(y-1),b=(s+1)*_+y,F=(s+1)*(_-1)+y;g.push(I,C,F),g.push(C,b,F)}}function v(){for(let _=0;_<=e;_++)for(let y=0;y<=s;y++)c.x=_/e,c.y=y/s,p.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new n(new ac[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};var Ct=class extends ui{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new ot(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ot(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Bd,this.normalScale=new et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function po(n,t,e){return!n||!e&&n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function Zg(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var Ws=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=i+2;;){if(s===void 0){if(t<r)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=e[++i],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=e[--i-1],t>=r)break t}o=i,i=0;break e}break n}for(;i<o;){let a=i+o>>>1;t<e[a]?o=a:i=a+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=i[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},uc=class extends Ws{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:gh,endingEnd:gh}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Eh:r=t,a=2*e-i;break;case yh:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Eh:o=t,l=2*i-e;break;case yh:o=1,l=i+s[1]-s[0];break;default:o=t-1,l=e}let c=(i-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,p=this._weightNext,g=(i-e)/(s-e),E=g*g,m=E*g,f=-u*m+2*u*E-u*g,v=(1+u)*m+(-1.5-2*u)*E+(-.5+u)*g+1,_=(-1-p)*m+(1.5+p)*E+.5*g,y=p*m-p*E;for(let I=0;I!==a;++I)r[I]=f*o[h+I]+v*o[c+I]+_*o[l+I]+y*o[d+I];return r}},fc=class extends Ws{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(i-e)/(s-e),d=1-h;for(let u=0;u!==a;++u)r[u]=o[c+u]*d+o[l+u]*h;return r}},pc=class extends Ws{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Hn=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=po(e,this.TimeBufferType),this.values=po(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:po(t.times,Array),values:po(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new pc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new fc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new uc(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case vo:e=this.InterpolantFactoryMethodDiscrete;break;case Nl:e=this.InterpolantFactoryMethodLinear;break;case _a:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return vo;case this.InterpolantFactoryMethodLinear:return Nl;case this.InterpolantFactoryMethodSmooth:return _a}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t}return this}trim(t,e){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<t;)++r;for(;o!==-1&&i[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&Zg(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===_a,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let d=a*i,u=d-i,p=d+i;for(let g=0;g!==i;++g){let E=e[d+g];if(E!==e[u+g]||E!==e[p+g]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let d=a*i,u=o*i;for(let p=0;p!==i;++p)e[u+p]=e[d+p]}++o}}if(r>0){t[o]=t[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};Hn.prototype.TimeBufferType=Float32Array;Hn.prototype.ValueBufferType=Float32Array;Hn.prototype.DefaultInterpolation=Nl;var ji=class extends Hn{constructor(t,e,i){super(t,e,i)}};ji.prototype.ValueTypeName="bool";ji.prototype.ValueBufferType=Array;ji.prototype.DefaultInterpolation=vo;ji.prototype.InterpolantFactoryMethodLinear=void 0;ji.prototype.InterpolantFactoryMethodSmooth=void 0;var mc=class extends Hn{};mc.prototype.ValueTypeName="color";var gc=class extends Hn{};gc.prototype.ValueTypeName="number";var Ec=class extends Ws{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)Fi.slerpFlat(r,0,o,c-a,o,c,l);return r}},Xo=class extends Hn{InterpolantFactoryMethodLinear(t){return new Ec(this.times,this.values,this.getValueSize(),t)}};Xo.prototype.ValueTypeName="quaternion";Xo.prototype.InterpolantFactoryMethodSmooth=void 0;var ts=class extends Hn{constructor(t,e,i){super(t,e,i)}};ts.prototype.ValueTypeName="string";ts.prototype.ValueBufferType=Array;ts.prototype.DefaultInterpolation=vo;ts.prototype.InterpolantFactoryMethodLinear=void 0;ts.prototype.InterpolantFactoryMethodSmooth=void 0;var yc=class extends Hn{};yc.prototype.ValueTypeName="vector";var _c=class{constructor(t,e,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let p=c[d],g=c[d+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null}}},$g=new _c,vc=class{constructor(t){this.manager=t!==void 0?t:$g,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};vc.DEFAULT_MATERIAL_NAME="__DEFAULT";var Xs=class extends Be{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ot(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},At=class extends Xs{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Be.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ot(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Qa=new ve,Ad=new D,Md=new D,wr=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new et(512,512),this.map=null,this.mapPass=null,this.matrix=new ve,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new yr,this._frameExtents=new et(1,1),this._viewportCount=1,this._viewports=[new _e(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,i=this.matrix;Ad.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ad),Md.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Md),e.updateMatrixWorld(),Qa.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Qa),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Qa)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Ac=class extends wr{constructor(){super(new Ze(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){let e=this.camera,i=Mo*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(i!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=i,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}},pn=class extends Xs{constructor(t,e,i=0,s=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Be.DEFAULT_UP),this.updateMatrix(),this.target=new Be,this.distance=i,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Ac}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},Sd=new ve,hr=new D,ja=new D,Mc=class extends wr{constructor(){super(new Ze(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new et(4,2),this._viewportCount=6,this._viewports=[new _e(2,1,1,1),new _e(0,1,1,1),new _e(3,1,1,1),new _e(1,1,1,1),new _e(3,0,1,1),new _e(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(t,e=0){let i=this.camera,s=this.matrix,r=t.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),hr.setFromMatrixPosition(t.matrixWorld),i.position.copy(hr),ja.copy(i.position),ja.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(ja),i.updateMatrixWorld(),s.makeTranslation(-hr.x,-hr.y,-hr.z),Sd.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Sd)}},Jt=class extends Xs{constructor(t,e,i=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Mc}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},Sc=class extends wr{constructor(){super(new Os(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Zn=class extends Xs{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Be.DEFAULT_UP),this.updateMatrix(),this.target=new Be,this.shadow=new Sc}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var qo=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Td(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=Td();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function Td(){return 0}var Hc="\\[\\]\\.:\\/",Jg=new RegExp("["+Hc+"]","g"),Bc="[^"+Hc+"]",Kg="[^"+Hc.replace("\\.","")+"]",Qg=/((?:WC+[\/:])*)/.source.replace("WC",Bc),jg=/(WCOD+)?/.source.replace("WCOD",Kg),t2=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Bc),e2=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Bc),n2=new RegExp("^"+Qg+jg+t2+e2+"$"),i2=["material","materials","bones","map"],Tc=class{constructor(t,e,i){let s=i||Ce.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},Ce=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Jg,"")}static parseTrackName(t){let e=n2.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);i2.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=i(a.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ce.Composite=Tc;Ce.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ce.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ce.prototype.GetterByBindingType=[Ce.prototype._getValue_direct,Ce.prototype._getValue_array,Ce.prototype._getValue_arrayElement,Ce.prototype._getValue_toArray];Ce.prototype.SetterByBindingTypeAndVersioning=[[Ce.prototype._setValue_direct,Ce.prototype._setValue_direct_setNeedsUpdate,Ce.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ce.prototype._setValue_array,Ce.prototype._setValue_array_setNeedsUpdate,Ce.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ce.prototype._setValue_arrayElement,Ce.prototype._setValue_arrayElement_setNeedsUpdate,Ce.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ce.prototype._setValue_fromArray,Ce.prototype._setValue_fromArray_setNeedsUpdate,Ce.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var tE=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:bc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=bc);var Ko={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var pi=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},s2=new Os(-1,1,1,-1,0,1),Nc=class extends Ue{constructor(){super(),this.setAttribute("position",new le([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new le([0,2,0,0,2,0],2))}},r2=new Nc,$s=class{constructor(t){this._mesh=new z(r2,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,s2)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var es=class extends pi{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof Xe?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Ys.clone(t.uniforms),this.material=new Xe({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new $s(this.material)}render(t,e,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Rr=class extends pi{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,i){let s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(i),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Qo=class extends pi{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var jo=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let i=t.getSize(new et);this._width=i.width,this._height=i.height,e=new We(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:mn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new es(Ko),this.copyPass.material.blending=Xn,this.clock=new qo}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());let e=this.renderer.getRenderTarget(),i=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,i),o.needsSwap){if(i){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Rr!==void 0&&(o instanceof Rr?i=!0:o instanceof Qo&&(i=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new et);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Kd={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ot(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var Js=class n extends pi{constructor(t,e,i,s){super(),this.strength=e!==void 0?e:1,this.radius=i,this.threshold=s,this.resolution=t!==void 0?new et(t.x,t.y):new et(256,256),this.clearColor=new ot(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new We(r,o,{type:mn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let d=0;d<this.nMips;d++){let u=new We(r,o,{type:mn});u.texture.name="UnrealBloomPass.h"+d,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);let p=new We(r,o,{type:mn});p.texture.name="UnrealBloomPass.v"+d,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),r=Math.round(r/2),o=Math.round(o/2)}let a=Kd;this.highPassUniforms=Ys.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Xe({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let d=0;d<this.nMips;d++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[d])),this.separableBlurMaterials[d].uniforms.invSize.value=new et(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=Ko;this.copyUniforms=Ys.clone(h.uniforms),this.blendMaterial=new Xe({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:dn,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new ot,this.oldClearAlpha=1,this.basic=new jt,this.fsQuad=new $s(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let i=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(i,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,s),this.renderTargetsVertical[r].setSize(i,s),this.separableBlurMaterials[r].uniforms.invSize.value=new et(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(t,e,i,s,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(i),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=o}getSeperableBlurMaterial(t){let e=[];for(let i=0;i<t;i++)e.push(.39894*Math.exp(-.5*i*i/(t*t))/t);return new Xe({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new et(.5,.5)},direction:{value:new et(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(t){return new Xe({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}};Js.BlurDirectionX=new et(1,0);Js.BlurDirectionY=new et(0,1);var ns=1080,is=1920;function Rt(n){let t=n>>>0;return()=>{t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}var Oc=(n,t=0,e=1)=>Math.min(e,Math.max(t,n)),Li=(n,t,e)=>n+(t-n)*e,Je=(n,t,e)=>{let i=Oc((e-n)/(t-n));return i*i*(3-2*i)};var o2=n=>(n=Oc(n),n*n*(3-2*n));function ea(n,t){if(t<=n[0][0])return n[0][1];for(let e=1;e<n.length;e++)if(t<=n[e][0]){let i=o2((t-n[e-1][0])/(n[e][0]-n[e-1][0])),s=n[e-1][1],r=n[e][1];return Array.isArray(s)?s.map((o,a)=>Li(o,r[a],i)):Li(s,r,i)}return n[n.length-1][1]}var a2={uniforms:{tColor:{value:null},tDepth:{value:null},near:{value:.1},far:{value:400},focus:{value:6},range:{value:3},maxBlur:{value:22},res:{value:new et(ns,is)}},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}",fragmentShader:`varying vec2 vUv;uniform sampler2D tColor,tDepth;uniform float near,far,focus,range,maxBlur;uniform vec2 res;
  float lin(float z){float n=z*2.-1.;return 2.*near*far/(far+near-n*(far-near));}
  float coc(vec2 uv){float d=lin(texture2D(tDepth,uv).r);return clamp((d-focus)/(d<focus?range*.6:range),-1.,1.);}
  float hash(vec2 p){return fract(sin(dot(p,vec2(41.3,289.1)))*43758.5453);}
  void main(){float c0=coc(vUv);float r0=abs(c0)*maxBlur;vec3 sum=texture2D(tColor,vUv).rgb;float w=1.;float rot=hash(vUv*res)*6.283;
    const float G=2.39996;for(int i=1;i<72;i++){float fi=float(i);float r=sqrt(fi/72.)*maxBlur;float an=fi*G+rot;vec2 uv=vUv+vec2(cos(an),sin(an))*r/res;float c=coc(uv);float rs=abs(c)*maxBlur;
      float k=c<c0?smoothstep(r-1.5,r+1.5,rs):smoothstep(r-1.5,r+1.5,r0);sum+=texture2D(tColor,uv).rgb*k;w+=k;}
    gl_FragColor=vec4(sum/w,1.);}`},l2={uniforms:{tDiffuse:{value:null},vig:{value:.42},exposure:{value:1},grain:{value:.016},frame:{value:0},tint:{value:new ot(1,1,1)},sat:{value:1},flash:{value:0}},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}",fragmentShader:`varying vec2 vUv;uniform sampler2D tDiffuse;uniform float vig,exposure,grain,frame,sat,flash;uniform vec3 tint;
  vec3 aces(vec3 x){return clamp((x*(2.51*x+.03))/(x*(2.43*x+.59)+.14),0.,1.);}
  float rnd(vec2 p){return fract(sin(dot(p,vec2(12.9898,78.233))+frame)*43758.5453);}
  void main(){vec3 c=texture2D(tDiffuse,vUv).rgb*exposure*tint;c=aces(c*.88);
    float l=dot(c,vec3(.2126,.7152,.0722));c=mix(vec3(l),c,sat);
    vec2 q=(vUv-.5)*vec2(.86,1.);float v=smoothstep(.32,.86,length(q));c*=1.-vig*v;
    c=pow(c,vec3(1./2.2));c+=(rnd(vUv*vec2(1080.,1920.))-.5)*grain;c=mix(c,vec3(1.),flash);gl_FragColor=vec4(c,1.);}`},ta=class{constructor(t){let e=this.r=new Do({canvas:t,antialias:!1,preserveDrawingBuffer:!0,powerPreference:"high-performance"});e.setPixelRatio(1),e.setSize(ns,is,!1),e.shadowMap.enabled=!0,e.shadowMap.type=wc,e.toneMapping=qn,e.outputColorSpace=Di;let i=new zs(ns,is);i.type=hi,this.rt=new We(ns,is,{type:mn,samples:4,depthTexture:i}),this.composer=new jo(e,new We(ns,is,{type:mn})),this.dof=new es(a2,"tDummy"),this.dof.uniforms.tColor.value=this.rt.texture,this.dof.uniforms.tDepth.value=i,this.bloom=new Js(new et(ns/2,is/2),.45,.75,.82),this.grade=new es(l2),this.composer.addPass(this.dof),this.composer.addPass(this.bloom),this.composer.addPass(this.grade),this.shots=[]}add(t){this.shots.push(t)}render(t){let e=this.shots.find(o=>t>=o.t0&&t<o.t1)||this.shots[this.shots.length-1];e.update(t,t-e.t0,this);let i=e.update(t,t-e.t0,this)||{},s=this.dof.uniforms,r=this.grade.uniforms;s.near.value=e.camera.near,s.far.value=e.camera.far,s.focus.value=i.focus??6,s.range.value=i.range??3,s.maxBlur.value=i.blur??20,this.bloom.strength=i.bloom??.45,this.bloom.threshold=i.bloomT??.82,this.bloom.radius=i.bloomR??.75,r.vig.value=i.vig??.42,r.exposure.value=i.exposure??1,r.sat.value=i.sat??1,r.flash.value=i.flash??0,r.frame.value=Math.floor(t*30)%97,r.tint.value.set(i.tint??"#ffffff"),this.r.setRenderTarget(this.rt),this.r.clear(),this.r.render(e.scene,e.camera),this.r.setRenderTarget(null),this.composer.render()}};function Qd(n,t,e,i=40){let s=new Lo;s.background=new ot(e);let r=new Ze(i,ns/is,.08,400);return{t0:n,t1:t,scene:s,camera:r,update(){return{}}}}function jd(n,t,e,i=0){n.position.set(t[0],t[1],t[2]),n.up.set(Math.sin(i),Math.cos(i),0),n.lookAt(e[0],e[1],e[2])}var En=1/420,zc=new Map;function yn(n,t,e,i){if(zc.has(n))return zc.get(n);let s=document.createElement("canvas");s.width=t*2,s.height=e*2;let r=s.getContext("2d");r.scale(2,2),r.lineJoin="round",r.lineCap="round",i(r,t,e);let o=new Rn(s);return o.colorSpace=Fe,o.anisotropy=8,o.generateMipmaps=!0,o.premultiplyAlpha=!1,zc.set(n,o),o}var ue=n=>new Path2D(n);function Ye(n,t,e){n.save(),n.fillStyle=e,n.fill(t),n.restore()}function Bn(n,t,e,i,s,...r){let o=n.createLinearGradient(t,e,i,s);return r.forEach((a,l)=>o.addColorStop(l/(r.length-1),a)),o}var c2={hero:{a:"#43C4B4",b:"#27998C",c:"#1F7C72",s:"#6FDCCB",kind:"hoodie",cuff:"#2A9F93"},jaleco:{a:"#F6F4EE",b:"#D9D6CE",c:"#B9B6AE",s:"#FFFFFF",kind:"coat",cuff:"#E9E6DE",pants:"#2E3648"},terno2:{a:"#3C4C72",b:"#2A3756",c:"#1E2842",s:"#6D80A8",kind:"suit",cuff:"#F2EFE8"},terno3:{a:"#6A3A44",b:"#4C2830",c:"#381D23",s:"#8F5A66",kind:"suit",cuff:"#F2EFE8"},avental:{a:"#D2483A",b:"#AE3429",c:"#8A261D",s:"#EF7E70",kind:"hoodie",cuff:"#8A261D"},terno:{a:"#2E3442",b:"#1C2029",c:"#14171e",s:"#566072",kind:"suit",cuff:"#F2EFE8"},rosa:{a:"#F08AA0",b:"#D66A86",c:"#B44F6C",s:"#F9B6C4",kind:"dress",cuff:"#111",belt:"#EFC04F",flora:"#FFF3DA"},amarelo:{a:"#F7CC58",b:"#E3A92F",c:"#C78F22",s:"#FFE596",kind:"blouse",cuff:"#111",pants:"#59607a"},verde:{a:"#8EAE86",b:"#6F9068",c:"#58744f",s:"#B6CFAE",kind:"dress",cuff:"#111",belt:"#EFC04F",flora:"#FFF8E6"},azul:{a:"#6F97C4",b:"#4C729F",c:"#3A5A82",s:"#A3C2E0",kind:"blouse",cuff:"#111",pants:"#3a3f55"},laranja:{a:"#F2A766",b:"#DD8A45",c:"#BC6F2E",s:"#FBCB9B",kind:"hoodie",cuff:"#BC6F2E"},roxo:{a:"#A98AD0",b:"#8667B0",c:"#6D5093",s:"#CDB6E6",kind:"dress",cuff:"#111",belt:"#F2F0E6",flora:"#F6E4FF"}};function h2(n,t){return yn("torso_"+t,300,320,e=>{if(e.translate(150,20),n.kind==="hoodie"){let i=ue("M-92 34 Q-60 2 0 -2 Q60 2 92 34 Q106 130 104 262 L-104 262 Q-106 130 -92 34Z");Ye(e,i,Bn(e,-100,0,100,260,n.a,n.b)),e.fillStyle=n.c,e.globalAlpha=.3,e.fill(ue("M60 20 Q100 40 104 262 L52 262 Q70 150 60 20Z")),e.globalAlpha=1,e.fillStyle=n.b,e.fill(ue("M-70 26 Q0 92 70 26 Q84 44 72 70 Q0 118 -72 70 Q-84 44 -70 26Z")),e.fillStyle=n.c,e.fill(ue("M-44 22 Q0 -4 44 22 Q30 62 0 66 Q-30 62 -44 22Z")),e.strokeStyle="#F4F4EE",e.lineWidth=5,e.beginPath(),e.moveTo(-18,66),e.lineTo(-20,126),e.moveTo(18,66),e.lineTo(20,126),e.stroke(),e.fillStyle="#F4F4EE",e.beginPath(),e.arc(-20,130,4.5,0,7),e.arc(20,130,4.5,0,7),e.fill(),e.fillStyle=n.b,e.strokeStyle=n.c,e.lineWidth=3.5;let s=ue("M-62 164 L62 164 L78 240 L-78 240Z");e.fill(s),e.stroke(s),e.fillStyle=n.c,e.fillRect(-104,240,208,24),e.strokeStyle=n.b,e.lineWidth=2.5;for(let r=-100;r<104;r+=10)e.beginPath(),e.moveTo(r,242),e.lineTo(r,263),e.stroke()}else if(n.kind==="suit"){Ye(e,ue("M-92 26 Q-46 4 0 4 Q46 4 92 26 Q104 130 100 280 L-100 280 Q-104 130 -92 26Z"),Bn(e,-100,0,100,280,n.a,n.b)),e.strokeStyle="#ffffff10",e.lineWidth=2;for(let i=-92;i<96;i+=13)e.beginPath(),e.moveTo(i,30),e.lineTo(i,280),e.stroke();e.fillStyle="#F4F2EA",e.fill(ue("M-34 6 L34 6 L10 138 L-10 138Z")),e.fillStyle="#39AE9F",e.fill(ue("M-13 16 L13 16 L8 30 L18 116 L0 138 L-18 116 L-8 30Z")),e.strokeStyle="#8FDCCF",e.lineWidth=2;for(let i=0;i<4;i++)e.beginPath(),e.moveTo(-10,52+i*20),e.lineTo(10,44+i*20),e.stroke();e.fillStyle=n.c,e.fill(ue("M-34 6 L-58 22 L-46 66 L-8 146 L-12 150 L-34 6Z")),e.fill(ue("M34 6 L58 22 L46 66 L8 146 L12 150 L34 6Z")),e.fillStyle="#39AE9F",e.fill(ue("M-70 86 L-34 86 L-46 70 L-58 70Z")),e.fillStyle="#0d0f14",e.beginPath(),e.arc(0,176,7,0,7),e.arc(0,216,7,0,7),e.fill()}else if(n.kind==="coat")Ye(e,ue("M-88 26 Q-44 4 0 4 Q44 4 88 26 Q100 150 104 292 L-104 292 Q-100 150 -88 26Z"),Bn(e,-100,0,100,290,n.a,n.b)),e.fillStyle="#39AE9F",e.fill(ue("M-30 6 L30 6 L12 118 L-12 118Z")),e.fillStyle="#20273a",e.fillRect(-13,16,26,100),e.fillStyle=n.c,e.fill(ue("M-30 6 L-54 24 L-30 78 L-6 128 L-12 134Z")),e.fill(ue("M30 6 L54 24 L30 78 L6 128 L12 134Z")),e.strokeStyle=n.c,e.lineWidth=3,e.beginPath(),e.moveTo(0,130),e.lineTo(0,292),e.stroke(),e.strokeRect(-76,188,54,46),e.strokeRect(22,188,54,46),e.fillStyle="#3F6FB0",e.fillRect(44,182,5,26),e.fillStyle="#C9361F",e.fillRect(56,182,5,22);else if(n.kind==="dress"){Ye(e,ue("M-62 14 Q-30 26 0 26 Q30 26 62 14 Q78 40 58 96 L54 118 L-54 118 L-58 96 Q-78 40 -62 14Z"),Bn(e,-60,0,60,120,n.a,n.b)),Ye(e,ue("M-52 118 L52 118 Q90 190 116 292 Q0 312 -116 292 Q-90 190 -52 118Z"),Bn(e,-100,120,100,300,n.a,n.b)),e.fillStyle=n.belt,e.fillRect(-58,104,116,20);let i=7,s=()=>(i=i*16807%2147483647)/2147483647;e.fillStyle=n.flora;for(let r=0;r<34;r++){let o=34+s()*250,a=o<118?52:52+(o-118)*.36,l=(s()*2-1)*a;if(!(o>100&&o<128))for(let c=0;c<5;c++)e.beginPath(),e.arc(l+Math.cos(c*1.256)*5,o+Math.sin(c*1.256)*5,3.2,0,7),e.fill()}}else Ye(e,ue("M-74 18 Q-30 30 0 30 Q30 30 74 18 Q88 110 74 196 L-74 196 Q-88 110 -74 18Z"),Bn(e,-70,0,70,200,n.a,n.b)),e.fillStyle="#0a0a12",e.fill(ue("M-22 26 L22 26 L0 64Z")),Ye(e,ue("M-68 196 L68 196 L74 276 L-74 276Z"),n.pants||"#555",null),e.fillStyle=n.belt||n.c,e.fillRect(-70,192,140,12)})}function tu(n,t,e){return yn("sl_"+t+e,90,170,i=>{if(i.translate(45,10),n.kind==="dress"||n.kind==="blouse"){e==="u"?(Ye(i,ue("M-26 -2 Q0 -16 26 -2 Q32 34 22 54 Q0 62 -22 54 Q-32 34 -26 -2Z"),Bn(i,-26,0,26,50,n.a,n.b)),i.fillStyle="#17161e",i.fillRect(-7,48,14,100)):(Ye(i,ue("M-8 -4 L8 -4 L8 136 L-8 136Z"),"#17161e",n.kind?"#FFE9C8":null,3),i.fillStyle="#3a3a48",i.fillRect(-2,0,3,130));return}let s=134,r=e==="u"?27:23,o=e==="u"?23:18;Ye(i,ue(`M${-r} 4 Q0 -22 ${r} 4 L${o} ${s} Q0 ${s+16} ${-o} ${s}Z`),Bn(i,-r,0,r,0,n.a,n.b)),i.fillStyle=n.s,i.globalAlpha=.5,i.fill(ue(`M${-r+8} 10 L${-r+16} 6 L${-o+13} ${s-6} L${-o+6} ${s-4}Z`)),i.globalAlpha=1,e==="f"&&(i.fillStyle=n.cuff,i.fill(ue(`M-20 ${s-14} Q0 ${s-4} 20 ${s-14} L19 ${s+6} Q0 ${s+16} -19 ${s+6}Z`)))})}function d2(){return yn("hand",90,100,n=>{n.translate(45,14);let t=ue("M-20 0 Q-30 22 -26 44 L-22 72 Q-16 80 -11 70 L-10 50 L-6 78 Q0 86 5 76 L5 50 L12 72 Q18 78 22 68 L18 40 L32 44 Q40 38 32 28 L18 8 Q2 -6 -20 0Z");Ye(n,t,Bn(n,-20,0,20,70,"#34343F","#1C1C25"),"#FFE9C8",4),n.strokeStyle="#4a4a58",n.lineWidth=2,n.beginPath(),n.moveTo(-12,18),n.quadraticCurveTo(0,8,12,16),n.stroke()})}function eu(n){return yn("leg"+n,50,160,t=>{t.translate(25,6),t.fillStyle="#191922",t.beginPath(),t.roundRect(-9,-6,18,158,9),t.fill(),t.fillStyle="#46465a",t.fillRect(-2.5,2,3,140)})}function u2(){return yn("foot",80,40,n=>{n.translate(26,6),Ye(n,ue("M-13 -2 L13 -2 Q40 6 42 22 L-14 22Z"),"#20202A","#FFE9C8",3),n.fillStyle="#E8E4DA",n.fillRect(-14,19,56,5)})}function f2(n="round"){return yn("head"+n,300,300,t=>{t.translate(150,150);let e=new Path2D;e.arc(0,0,118,0,7);let i=t.createRadialGradient(10,-46,2,0,0,122);i.addColorStop(0,"#2C2E44"),i.addColorStop(.42,"#14141F"),i.addColorStop(1,"#08080E"),t.fillStyle=i,t.fill(e),t.save(),t.clip(e),t.globalAlpha=.1,t.fillStyle="#9fa4d8",t.beginPath(),t.ellipse(-4,-98,70,16,0,0,7),t.fill(),t.restore()})}var su={open(n,t){n.fillStyle="#F6EFE6",n.beginPath(),n.ellipse(0,0,18,27,t*.06,0,7),n.fill()},look(n,t){n.fillStyle="#F6EFE6",n.beginPath(),n.ellipse(11,0,18,26,0,0,7),n.fill()},lookl(n,t){n.fillStyle="#F6EFE6",n.beginPath(),n.ellipse(-11,0,18,26,0,0,7),n.fill()},down(n,t){n.fillStyle="#F6EFE6",n.beginPath(),n.ellipse(0,16,18,22,0,0,7),n.fill()},wide(n,t){n.fillStyle="#F6EFE6",n.beginPath(),n.ellipse(0,-2,23,33,0,0,7),n.fill()},small(n,t){n.fillStyle="#F6EFE6",n.beginPath(),n.ellipse(0,0,10,14,0,0,7),n.fill()},happy(n,t){n.strokeStyle="#F6EFE6",n.lineWidth=8.5,n.beginPath(),n.moveTo(-22,8),n.quadraticCurveTo(0,-24,22,8),n.stroke()},shut(n,t){n.strokeStyle="#F6EFE6",n.lineWidth=8.5,n.beginPath(),n.moveTo(-22,-6),n.quadraticCurveTo(0,18,22,-6),n.stroke()},flat(n,t){n.strokeStyle="#F6EFE6",n.lineWidth=8.5,n.beginPath(),n.moveTo(-22,2),n.lineTo(22,2),n.stroke()},smug(n,t){n.fillStyle="#F6EFE6",n.beginPath(),n.moveTo(-22,-6),n.lineTo(22,-6),n.quadraticCurveTo(20,24,0,24),n.quadraticCurveTo(-20,24,-22,-6),n.fill()},sad(n,t){n.fillStyle="#F6EFE6",n.beginPath(),n.moveTo(-19,t>0?-14:2),n.lineTo(19,t>0?2:-14),n.quadraticCurveTo(20,26,0,26),n.quadraticCurveTo(-20,26,-19,t>0?-14:2),n.fill()},angry(n,t){n.fillStyle="#F6EFE6",n.beginPath(),n.moveTo(-19,t>0?6:-14),n.lineTo(19,t>0?-14:6),n.quadraticCurveTo(20,26,0,26),n.quadraticCurveTo(-20,26,-19,t>0?6:-14),n.fill()},heart(n,t){n.fillStyle="#F0728C",n.beginPath(),n.moveTo(0,22),n.bezierCurveTo(-34,-2,-18,-30,0,-10),n.bezierCurveTo(18,-30,34,-2,0,22),n.fill()}};function p2(n,t){return yn("eye_"+n+(t?"L":""),300,300,e=>{e.translate(150,150),[-1,1].forEach(i=>{e.save(),e.translate(i*42,0),su[n](e,i),t&&(e.strokeStyle="#F6EFE6",e.lineWidth=3.5,[0,1,2].forEach(s=>{e.beginPath(),e.moveTo(i*(8+s*6),-22+s*3),e.quadraticCurveTo(i*(16+s*7),-34+s*2,i*(26+s*6),-36+s*5),e.stroke()})),e.restore()}),t&&(e.fillStyle="#E8667F55",[-1,1].forEach(i=>{e.beginPath(),e.ellipse(i*48,40,26,13,0,0,7),e.fill()}))})}function m2(n,t,e){return yn("hair_"+n+t,420,500,i=>{if(i.translate(210,170),n==="long"){let s=ue("M-130 -24 Q-136 -146 0 -152 Q136 -146 130 -24 Q150 120 128 250 Q0 276 -128 250 Q-150 120 -130 -24Z");Ye(i,s,Bn(i,-120,-150,120,250,t,e||t)),i.strokeStyle="#ffffff30",i.lineWidth=7,[[-90,-100,-118,180],[-60,-128,-70,40],[86,-100,112,200],[54,-130,70,60],[10,-146,20,-110]].forEach(([r,o,a,l])=>{i.beginPath(),i.moveTo(r,o),i.quadraticCurveTo(r*1.25,(o+l)/2,a,l),i.stroke()})}if(n==="bun"){let s=new Path2D;s.arc(0,-152,46,0,7),Ye(i,s,t);let r=ue("M-126 -24 Q-128 -128 0 -132 Q128 -128 126 -24 Q124 14 114 34 Q90 -40 0 -60 Q-90 -40 -114 34 Q-124 14 -126 -24Z");Ye(i,r,t),i.strokeStyle="#ffffff33",i.lineWidth=6,i.beginPath(),i.moveTo(-60,-112),i.quadraticCurveTo(-10,-128,40,-112),i.stroke()}if(n==="afro"){let s=(r,o,a)=>{let l=new Path2D;l.arc(r,o,a,0,7),Ye(i,l,t)};[[-118,-20,52],[-104,-82,56],[-58,-130,58],[0,-148,60],[58,-130,58],[104,-82,56],[118,-20,52],[-118,40,44],[118,40,44]].forEach(r=>s(...r)),i.strokeStyle="#ffffff22",i.lineWidth=4,[[-70,-120],[-10,-140],[60,-118],[100,-70],[-100,-66]].forEach(([r,o])=>{i.beginPath(),i.arc(r,o,26,3.6,5.4),i.stroke()})}if(n==="bob"){let s=ue("M-128 -20 Q-132 -146 0 -150 Q132 -146 128 -20 Q130 74 104 104 L-104 104 Q-130 74 -128 -20Z");Ye(i,s,Bn(i,0,-150,0,100,t,e||t)),i.strokeStyle="#ffffff30",i.lineWidth=6,[[-80,-110,-112,70],[78,-112,110,70],[0,-142,4,-110]].forEach(([r,o,a,l])=>{i.beginPath(),i.moveTo(r,o),i.quadraticCurveTo(r*1.22,(o+l)/2,a,l),i.stroke()})}n==="old"&&[[-1],[1]].forEach(([s])=>{[[118,-30,40],[132,18,44],[112,62,34],[92,-66,30]].forEach(([r,o,a])=>{let l=new Path2D;l.arc(s*r,o,a,0,7),Ye(i,l,"#E9E9EF")})})})}var nu=(n,t={})=>new jt({map:n,alphaTest:.5,alphaToCoverage:!0,side:he,...t}),iu=new Map,kc=new Map,g2=[];function E2(n){if(kc.has(n))return kc.get(n);let t=n.image,e=document.createElement("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d"),s=7;for(let o=0;o<16;o++){let a=o/16*6.283;i.drawImage(t,Math.cos(a)*s,Math.sin(a)*s)}i.globalCompositeOperation="source-in",i.fillStyle="#FFFFFF",i.fillRect(0,0,e.width,e.height);let r=new Rn(e);return r.colorSpace=Fe,r.anisotropy=8,kc.set(n,r),r}function gn(n,t,e,i,s,r=0,o,a=!1){let l=new Mt(t*En,e*En);l.translate((t/2-i)*En,(s-e/2)*En,0);let c=nu(n);o.push(c);let h=new z(l,c);if(h.position.z=r,h.castShadow=!0,!a){let u=nu(E2(n),{color:"#FFE9C8"});g2.push(u);let p=new z(l,u);p.position.z=-.045-r,h.add(p)}let d=iu.get(n);return d||(d=new Ii({depthPacking:qs,map:n,alphaTest:.5,side:he}),iu.set(n,d)),h.customDepthMaterial=d,h}function y2(){return yn("blob",128,128,n=>{let t=n.createRadialGradient(64,64,2,64,64,62);t.addColorStop(0,"#000000AA"),t.addColorStop(.55,"#00000055"),t.addColorStop(1,"#00000000"),n.fillStyle=t,n.fillRect(0,0,128,128)})}function _2(){return yn("halo",256,512,n=>{let t=n.createRadialGradient(128,256,10,128,256,128);t.addColorStop(0,"#FFE6C0"),t.addColorStop(.62,"#FFE6C066"),t.addColorStop(1,"#FFE6C000"),n.save(),n.translate(0,0),n.scale(1,2),n.translate(0,-128),n.fillStyle=t,n.fillRect(0,0,256,512),n.restore()})}function Gc(n={}){let t=c2[n.outfit||"hero"],e=n.outfit||"hero",i=new at,s=[],r=new at;i.add(r);let o=316,a=o+262,l={},c={};for(let[m,f,v]of[["L",-1,-.012],["R",1,-.01]]){let _=new at;_.position.set(f*34*En,o*En,v);let y=new at;y.position.y=-142*En,_.add(gn(eu(1),50,160,25,6,0,s)),y.add(gn(eu(1),50,160,25,6,0,s));let I=gn(u2(),80,40,26,6,.001,s);I.position.y=-142*En,f<0&&(I.scale.x=-1),y.add(I),_.add(y),r.add(_),l[m]={th:_,shin:y}}let h=gn(h2(t,e),300,320,150,20,0,s);h.position.y=(a+4)*En,r.add(h);for(let[m,f,v]of[["L",-1,-.006],["R",1,.006]]){let _=new at;_.position.set(f*(t.kind==="dress"?66:84)*En,(a-24)*En,v);let y=new at;y.position.y=-124*En,_.add(gn(tu(t,e,"u"),90,170,45,10,0,s)),y.add(gn(tu(t,e,"f"),90,170,45,10,.001,s));let I=gn(d2(),90,100,45,14,.002,s);I.position.y=-128*En,I.scale.set(f>0?-.8:.8,.8,1),y.add(I),_.add(y),r.add(_),c[m]={u:_,f:y,hand:I}}let d=new at;if(d.position.set(0,(a+104)*En,.02),r.add(d),n.hair){let m=gn(m2(n.hair,n.hairc||"#4a2c1a",n.hairhi),420,500,210,170,-.03,s);d.add(m)}if(d.add(gn(f2(),300,300,150,150,0,s)),n.hair&&n.hair!=="old"&&n.hair!=="afro"){let m=gn(yn("fringe_"+n.hair+(n.hairc||""),300,300,f=>{f.translate(150,150);let v=n.hairc||"#4a2c1a";f.fillStyle=v,f.fill(ue(n.hair==="bun"?"M-122 -18 Q-120 -122 0 -124 Q120 -122 122 -18 Q70 -78 0 -84 Q-70 -78 -122 -18Z":"M-124 12 Q-126 -124 0 -126 Q126 -124 124 12 Q106 -44 44 -66 Q0 -76 -44 -66 Q-106 -44 -124 12Z")),f.strokeStyle="#ffffff2c",f.lineWidth=5,f.beginPath(),f.moveTo(-70,-92),f.quadraticCurveTo(-10,-114,54,-96),f.stroke()}),300,300,150,150,.003,s,!0);d.add(m)}if(n.lash){let m=gn(yn("earring",300,300,f=>{f.translate(150,150),[-1,1].forEach(v=>{f.strokeStyle="#F2C94C",f.lineWidth=6,f.beginPath(),f.arc(v*124,58,15,0,7),f.stroke()})}),300,300,150,150,.004,s,!0);m.castShadow=!1,d.add(m)}let u={};for(let m of Object.keys(su)){let f=gn(p2(m,n.lash),300,300,150,150,.002,s,!0);f.castShadow=!1,f.visible=m==="open",d.add(f),u[m]=f}if(n.glasses){let m=gn(yn("glasses",300,300,f=>{f.translate(150,150),f.strokeStyle="#E4E6EC",f.lineWidth=7,f.beginPath(),f.arc(-42,0,36,0,7),f.stroke(),f.beginPath(),f.arc(42,0,36,0,7),f.stroke(),f.beginPath(),f.moveTo(-6,0),f.lineTo(6,0),f.stroke()}),300,300,150,150,.004,s,!0);m.castShadow=!1,d.add(m)}if(n.hat){let m=gn(n.hat(yn),300,300,150,150,.006,s);d.add(m)}let p=new z(new Mt(1,.4),new jt({map:y2(),transparent:!0,depthWrite:!1}));p.rotation.x=-Math.PI/2,p.position.y=.012,i.add(p);let g=null;n.glow&&(g=new z(new Mt(2.1,3),new jt({map:_2(),transparent:!0,depthWrite:!1,opacity:n.glow,blending:dn,side:he})),g.position.set(0,.95,-.09),r.add(g));let E={root:i,body:r,head:d,arms:c,legs:l,eyes:u,mats:s,torso:h,tint(m){s.forEach(f=>f.color.set(m))},eye(m){for(let f in u)u[f].visible=f===m},cheer(m,f=0,v=1){let _=m*6+f,y=Math.sin(_);E.pose({armL:[150+y*16*v,18+y*10],armR:[150-y*16*v,18-y*10],bob:Math.abs(Math.sin(_*.5))*.07*v,head:y*3,legL:[2,0],legR:[2,0]})},opacity(m){s.forEach(f=>{f.transparent=m<1,f.opacity=m,f.alphaTest=m<1?.02:.5,f.alphaToCoverage=m>=1,f.depthWrite=m>=1}),p.material.opacity=m,g&&(g.material.opacity=(n.glow||0)*m)},pose(m={}){let f=Math.PI/180,v=m.armL||[6,4],_=m.armR||[6,4],y=m.legL||[0,0],I=m.legR||[0,0];c.L.u.rotation.z=-v[0]*f,c.L.f.rotation.z=-v[1]*f,c.R.u.rotation.z=_[0]*f,c.R.f.rotation.z=_[1]*f,l.L.th.rotation.z=-y[0]*f,l.L.shin.rotation.z=-y[1]*f,l.R.th.rotation.z=I[0]*f,l.R.shin.rotation.z=I[1]*f,d.rotation.z=(m.head||0)*f,r.rotation.z=(m.lean||0)*f,r.position.y=m.bob||0;let C=m.squash||0;r.scale.set(1-C*.5,1+C,1)},walk(m,f=1,v=1){let _=m*6.4*f,y=Math.sin(_),I=Math.cos(_);E.pose({legL:[y*15*v,Math.max(0,-y)*26*v],legR:[-y*15*v,Math.max(0,y)*26*v],armL:[8-y*12*v,6],armR:[8+y*12*v,6],bob:Math.abs(I)*.03*v,head:y*2})},place(m,f,v=0,_=1){i.position.set(m,v,f),i.scale.setScalar(_)},face(m){let f=m.position;i.rotation.y=Math.atan2(f.x-i.position.x,f.z-i.position.z),p.rotation.z=-i.rotation.y}};return E.pose(),E}function It(n,t,e){let i=document.createElement("canvas");i.width=n,i.height=t;let s=i.getContext("2d");e(s,n,t);let r=new Rn(i);return r.colorSpace=Fe,r.anisotropy=8,r}var ss=(n,t={})=>new Ct({color:n,roughness:.88,metalness:0,...t});function w(n,t,e,i,s=0,r=0,o=0,a=!0){let l=new z(new fn(n,t,e),typeof i=="string"?ss(i):i);return l.position.set(s,r,o),l.castShadow=a,l.receiveShadow=!0,l}function $t(n,t,e=1){let i=It(128,128,r=>{let o=r.createRadialGradient(64,64,0,64,64,64);o.addColorStop(0,"#fff"),o.addColorStop(.25,"#ffffff66"),o.addColorStop(1,"#ffffff00"),r.fillStyle=o,r.fillRect(0,0,128,128)}),s=new _r(new ks({map:i,color:n,transparent:!0,depthWrite:!1,opacity:e,blending:dn}));return s.scale.set(t,t,1),s}var ru=["#8C4A3C","#6E4152","#4F5A70","#9A6A48","#59685E","#7B3B3B"];function v2(n,t,e,i,s,r=.42){let o=Rt(n),a=256*t,l=300*e,c,h=It(a,l,u=>{u.fillStyle=i,u.fillRect(0,0,a,l);for(let p=0;p<l;p+=12)for(let g=p/12%2*-14;g<a;g+=30)u.fillStyle=`rgba(${o()<.5?"255,235,215":"20,8,8"},${.03+o()*.07})`,u.fillRect(g,p,28,10);for(let p=0;p<e;p++)u.fillStyle="rgba(255,240,220,.14)",u.fillRect(0,p*300+292,a,8)}),d=It(a,l,u=>{u.fillStyle="#000",u.fillRect(0,0,a,l);let p=h.image.getContext("2d");for(let g=0;g<e;g++)for(let E=0;E<t;E++){let m=E*256+56,f=g*300+60,v=144,_=196,y=o()<r,I=o();if(p.fillStyle="#E8E0CE",p.fillRect(m-9,f-9,v+18,_+18),p.fillStyle="rgba(0,0,0,.35)",p.fillRect(m-18,f+_+9,v+36,12),p.fillStyle="rgba(245,235,215,.8)",p.fillRect(m-18,f+_+6,v+36,8),p.fillStyle=s?y?"#F7C97F":"#1C2238":o()<.5?"#7E93A8":"#94A9B6",p.fillRect(m,f,v,_),y||!s){let C=y?I<.5?"#D69A6A":"#E7AC8C":"#D9D2BE";p.fillStyle=C,p.fillRect(m,f,26,_),p.fillRect(m+v-26,f,26,_)}s||(p.fillStyle="#ffffff30",p.beginPath(),p.moveTo(m+20,f+_),p.lineTo(m+90,f),p.lineTo(m+124,f),p.lineTo(m+54,f+_),p.fill()),p.fillStyle="#E8E0CE",p.fillRect(m+v/2-3,f,6,_),p.fillRect(m,f+_*.45,v,6),y&&s&&(u.fillStyle=I<.5?"#FFC47A":"#FFD79C",u.fillRect(m,f,v,_),u.fillStyle="#000",u.fillRect(m+v/2-3,f,6,_),u.fillRect(m,f+_*.45,v,6))}h.needsUpdate=!0});return d.colorSpace=Fe,{map:h,emissiveMap:d}}function Ui(n,t){let{x:e,z:i,w:s,d:r,floors:o=5,side:a=1,night:l=!0,col:c,shop:h}=t,d=Rt(n),u=new at,p=o*2.9+3.6,g=c||ru[Math.floor(d()*ru.length)],E=Math.max(2,Math.round(r/2.1)),m=v2(n,E,o,g,l,t.lit??.42),f=new Ct({map:m.map,emissiveMap:m.emissiveMap,emissive:new ot(l?.62:0,l?.56:0,l?.48:0),roughness:.95}),v=ss(g),_=[a>0?f:v,a>0?v:f,ss("#2c2730"),v,v,v],y=new z(new fn(s,o*2.9,r),_);y.position.set(e,3.6+o*1.45,i),y.castShadow=y.receiveShadow=!0,u.add(y),u.add(w(s+.5,.5,r+.5,"#3d3540",e,p+.25,i)),u.add(w(s+.3,.35,r+.3,g,e,3.6,i));let I=e+a*(s/2+.01);if(h){let C=It(1024,180,P=>{P.fillStyle=h.bg,P.fillRect(0,0,1024,180),P.fillStyle="#ffffff22",P.fillRect(0,0,1024,8),P.font=`900 ${h.size||104}px ${h.font||"Fraunces"}`,P.textAlign="center",P.textBaseline="middle",P.fillStyle=h.fg||"#FFF4DC",P.shadowColor=h.fg||"#FFF4DC",P.shadowBlur=l?26:0,P.fillText(h.name,512,96)}),b=new z(new fn(.18,1.05,r-.3),[new Ct({map:C,emissiveMap:C,emissive:new ot(l?.85:0,l?.85:0,l?.85:0)}),new Ct({map:C,emissiveMap:C,emissive:new ot(l?.85:0,l?.85:0,l?.85:0)}),ss("#222"),ss("#222"),ss("#222"),ss("#222")]);b.position.set(I+a*.1,3.25,i),a>0&&(b.scale.z=-1),b.castShadow=!0,u.add(b);let F=It(512,256,P=>{let N=P.createLinearGradient(0,0,0,256);N.addColorStop(0,h.win||"#F4C783"),N.addColorStop(1,"#D59A5C"),P.fillStyle=N,P.fillRect(0,0,512,256);let O=Rt(n+9);for(let W=0;W<26;W++)P.fillStyle=["#C64236","#36AEA2","#EABA42","#D2728A","#4A86C7","#F6EFE6"][Math.floor(O()*6)],P.fillRect(O()*490,30+Math.floor(O()*3)*76,12+O()*26,52);for(let W of[84,160,236])P.fillStyle="#6b4530",P.fillRect(0,W,512,7)}),S=new Ct({map:F,emissiveMap:F,emissive:new ot(l?.62:.1,l?.62:.1,l?.62:.1),roughness:.25});u.add(w(.3,2.8,r-.1,"#3a2a24",I-a*.1,1.4,i));let A=new z(new Mt(r-.9,2.1),S);A.rotation.y=a*Math.PI/2,A.position.set(I+a*.07,1.5,i),u.add(A);for(let P=-1;P<=1;P++)u.add(w(.08,2.3,.09,"#2a1d18",I+a*.1,1.5,i+P*(r-.9)/2));if(h.awning){let P=It(512,128,O=>{for(let W=0;W<12;W++)O.fillStyle=W%2?h.awning:"#F4EEDF",O.fillRect(W*512/12,0,42.666666666666664,128)}),N=new z(new Mt(r-.3,1.3),new Ct({map:P,side:he,roughness:.9}));N.rotation.y=a*Math.PI/2,N.rotation.order="YXZ",N.rotation.x=-1,N.position.set(I+a*.55,2.56,i),N.castShadow=!0,u.add(N)}if(l){let P=new Jt(h.light||"#FFC88A",3.2,7,1.8);P.position.set(I+a*1.7,2.1,i),u.add(P)}}return u}function ou(n,t,e){let i=new z(new Mt(n,t),e);return i.rotation.x=-Math.PI/2,i.receiveShadow=!0,i}function A2(n="#A99D90"){let t=It(512,512,e=>{e.fillStyle=n,e.fillRect(0,0,512,512);let i=Rt(4);for(let s=0;s<2400;s++)e.fillStyle=`rgba(${i()<.5?"255,255,255":"0,0,0"},.035)`,e.fillRect(i()*512,i()*512,2,2);e.strokeStyle="rgba(30,20,20,.42)",e.lineWidth=4,e.strokeRect(0,0,512,512)});return t.wrapS=t.wrapT=$e,t}function na(n,t){let e=It(1024,1024,s=>{s.fillStyle=t?"#1E1E26":"#4b4a52",s.fillRect(0,0,1024,1024);let r=Rt(5);for(let o=0;o<7e3;o++)s.fillStyle=`rgba(255,255,255,${r()*.05})`,s.fillRect(r()*1024,r()*1024,2,2);s.fillStyle="#D9D2BD";for(let o=40;o<1024;o+=256)s.fillRect(504,o,14,130)});e.wrapS=e.wrapT=$e,e.repeat.set(1,12);let i=ou(9,240,new Ct({map:e,roughness:.78,metalness:.05}));i.position.set(0,0,-100),n.add(i);for(let s of[-1,1]){let r=A2(t?"#8E8378":"#B8AC9D");r.repeat.set(2,100);let o=ou(4.4,240,new Ct({map:r,roughness:.92}));o.position.set(s*6.7,.14,-100),n.add(o),n.add(w(.22,.16,240,t?"#B8AFA2":"#D0C6B6",s*4.55,.07,-100,!1))}}function ia(n,t,e,i,s=!0,r=5.5){let o=new at;o.add(w(.09,3.7,.09,"#15151b",t,1.85,e)),o.add(w(.26,.3,.26,"#15151b",t,.15,e));let a=w(.26,.4,.26,new Ct({color:"#FFE2AC",emissive:"#FFD089",emissiveIntensity:s?2.2:0}),t,3.85,e,!1);if(o.add(a),o.add(w(.34,.06,.34,"#15151b",t,4.08,e,!1)),s){let l=$t("#FFB870",1.8,.4);l.position.set(t,3.85,e),o.add(l);let c=new Jt("#FFC688",r,11,1.6);c.position.set(t,3.5,e),o.add(c)}return n.add(o),o}var au={};function De(n,t,e,i=1,s=["#2E4F2C","#3B6636","#55813F","#A9B65A"],r=1){let o=new at;o.add(w(.18*i,2.6*i,.18*i,"#2b1e18",t,1.3*i,e));let a=s.join()+r%3,l=au[a]||(au[a]=It(512,512,c=>{let h=Rt(r%3+3),d=(u,p,g,E)=>{c.fillStyle=E,c.beginPath();for(let m=0;m<=26;m++){let f=m/26*6.283,v=g*(.86+.14*Math.sin(f*5+u)+h()*.05);c.lineTo(u+Math.cos(f)*v,p+Math.sin(f)*v)}c.fill()};for(let[u,p,g]of[[256,170,130],[150,240,118],[362,240,118],[256,300,128],[188,150,92],[324,150,92]])d(u,p,g,s[0]);for(let[u,p,g]of[[256,150,92],[160,226,80],[350,226,80],[256,270,92]])d(u,p,g,s[1]);for(let[u,p,g]of[[226,122,52],[320,196,46],[160,200,40],[262,240,46]])d(u,p,g,s[2]);c.fillStyle=s[3];for(let u=0;u<70;u++){let p=90+h()*330,g=70+h()*300;c.save(),c.translate(p,g),c.rotate(h()*3),c.beginPath(),c.ellipse(0,0,8,3.6,0,0,7),c.fill(),c.restore()}}));for(let c=0;c<3;c++){let h=new z(new Mt(3.6*i,3.6*i),new Ct({map:l,alphaTest:.5,side:he,roughness:1}));h.position.set(t,3.5*i,e),h.rotation.y=c*1.05+r,h.castShadow=!0,h.customDepthMaterial=new Ii({depthPacking:qs,map:l,alphaTest:.5,side:he}),o.add(h)}return n.add(o),o}function Nn(n,t,e,i,s,r,o=3,a=0){let l=It(1600,900,h=>{h.clearRect(0,0,1600,900);let d=Rt(o);for(let u=0;u<3;u++)for(let p=-40;p<1620;){let g=50+d()*110,E=180+d()*(u===0?660:400);if(h.fillStyle=s[u],h.fillRect(p,900-E,g,E),d()<.2&&h.fillRect(p+g/2-4,900-E-60,8,60),r)for(let m=900-E+12;m<890;m+=18)for(let f=p+8;f<p+g-8;f+=14)d()<.34&&(h.fillStyle=u===2?"#FFD999":u===1?"#E9C28C":"#A98BA0",h.fillRect(f,m,7,10));p+=g*.92}}),c=new z(new Mt(e,i),new jt({map:l,transparent:!0,fog:!1,depthWrite:!1}));return c.position.set(0,a+i/2,t),n.add(c),c}function se(n,t,e,i,s){let r=It(8,512,a=>{let l=a.createLinearGradient(0,0,0,512);s.forEach(([c,h])=>l.addColorStop(c,h)),a.fillStyle=l,a.fillRect(0,0,8,512)}),o=new z(new Mt(e,i),new jt({map:r,fog:!1,depthWrite:!1}));return o.position.set(0,i*.32,t),n.add(o),o}var R=(n,t={})=>new Ct({color:n,roughness:.85,...t});function zt(n,t,e,i={}){let s=new z(new Mt(t,e),new jt({map:n,alphaTest:i.blend?0:.5,transparent:!!i.blend,depthWrite:!i.blend,side:he,color:i.color||"#fff",blending:i.add?dn:Ri,fog:i.fog??!0}));return i.shadow&&(s.castShadow=!0,s.customDepthMaterial=new Ii({depthPacking:qs,map:n,alphaTest:.5,side:he})),s}function Vc(n,t){n.rotation.y=Math.atan2(t.position.x-n.position.x,t.position.z-n.position.z)}var Wc={value:0};function sa(n="#8E3D30",t=4,e=3){let i=It(1024,1024,s=>{s.fillStyle="#4b2a24",s.fillRect(0,0,1024,1024);let r=Rt(7);for(let o=0,a=0;a<1024;a+=34,o++)for(let l=o%2*-44;l<1024;l+=88){let c=r();s.fillStyle=n,s.globalAlpha=.78+c*.22,s.fillRect(l+2,a+2,84,30),s.globalAlpha=1,s.fillStyle=`rgba(255,${200+c*40},${180+c*30},${c*.1})`,s.fillRect(l+2,a+2,84,6),c>.84&&(s.fillStyle="rgba(30,8,4,.2)",s.fillRect(l+2,a+2,84,30))}});return i.wrapS=i.wrapT=$e,i.repeat.set(t,e),i}function lu(n="#A59383",t=12,e=12){let i=It(1024,1024,s=>{s.fillStyle="#5e5248",s.fillRect(0,0,1024,1024);let r=Rt(3);for(let o=0;o<16;o++)for(let a=-1;a<17;a++){let l=r();s.fillStyle=n,s.globalAlpha=.7+l*.3,s.beginPath(),s.roundRect(a*64+o%2*32+3,o*64+3,58,58,12),s.fill(),s.globalAlpha=1}});return i.wrapS=i.wrapT=$e,i.repeat.set(t,e),i}var cu=[["#36AEA2","#1F7C72","#1A1A22",null],["#F08AA0","#C75C78","#3a2418","long"],["#F7CC58","#D39E2C","#2a1b18","afro"],["#6F97C4","#4C729F","#D9B65A","bob"],["#F2A766","#CC7E3C","#1d1412","bun"],["#A98AD0","#7E5FA8","#6b3d20","long"],["#8EAE86","#688A60","#111",null],["#E9E5DA","#C8C3B5","#8a4a26","bob"]];function M2(n,t){let[e,i,s,r]=cu[n];return It(192,384,o=>{o.translate(96,0),o.lineCap="round",o.strokeStyle="#17161e",o.lineWidth=11,o.beginPath(),o.moveTo(-20,270),o.lineTo(-22,378),o.moveTo(20,270),o.lineTo(22,378),o.stroke(),o.strokeStyle=e,o.lineWidth=22,o.beginPath(),t?(o.moveTo(-44,148),o.lineTo(-72,58),o.moveTo(44,148),o.lineTo(72,58)):(o.moveTo(-46,148),o.lineTo(-64,240),o.moveTo(46,148),o.lineTo(64,240)),o.stroke(),o.fillStyle=e,o.beginPath(),o.roundRect(-52,128,104,150,24),o.fill(),o.fillStyle=i,o.fillRect(-52,250,104,26),o.fillStyle="#1C1C25",o.beginPath(),t?(o.arc(-74,50,13,0,7),o.arc(74,50,13,0,7)):(o.arc(-66,246,12,0,7),o.arc(66,246,12,0,7)),o.fill(),(r==="long"||r==="bob")&&(o.fillStyle=s,o.beginPath(),o.roundRect(-64,22,128,r==="long"?160:110,54),o.fill()),r==="afro"&&(o.fillStyle=s,[[-52,58],[-36,28],[0,18],[36,28],[52,58]].forEach(([l,c])=>{o.beginPath(),o.arc(l,c,34,0,7),o.fill()})),r==="bun"&&(o.fillStyle=s,o.beginPath(),o.arc(0,14,22,0,7),o.fill());let a=o.createRadialGradient(4,56,2,0,76,58);a.addColorStop(0,"#2A2C40"),a.addColorStop(1,"#0A0A12"),o.fillStyle=a,o.beginPath(),o.arc(0,76,54,0,7),o.fill(),o.fillStyle="#F6EFE6",o.beginPath(),o.ellipse(-20,76,8,12,0,0,7),o.ellipse(20,76,8,12,0,0,7),o.fill(),r&&(o.fillStyle=s,o.beginPath(),o.moveTo(-54,70),o.quadraticCurveTo(-52,22,0,22),o.quadraticCurveTo(52,22,54,70),o.quadraticCurveTo(26,40,0,40),o.quadraticCurveTo(-26,40,-54,70),o.fill())})}function Xc(n,t,e={}){let{h:i=1.75,jump:s=.1,tint:r="#ffffff",seed:o=2}=e,a=Rt(o),l={};for(let c of t){let h=Math.floor(a()*cu.length)+(a()<(e.raised??.5)?100:0);(l[h]=l[h]||[]).push(c)}for(let c in l){let h=c>=100,d=c%100,u=M2(d,h),p=new jt({map:u,alphaTest:.5,side:he,color:r});p.onBeforeCompile=m=>{m.uniforms.uT=Wc,m.vertexShader=`uniform float uT;
`+m.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
 vec4 ip = instanceMatrix * vec4(0.,0.,0.,1.); float ph = ip.x*3.1 + ip.z*2.3; transformed.y += abs(sin(uT*${(5+d%3).toFixed(1)} + ph))*${s.toFixed(3)}/${i.toFixed(2)};`)};let g=new Bo(new Mt(i*.5,i),p,l[c].length),E=new Be;l[c].forEach((m,f)=>{E.position.set(m[0],(m[2]||0)+i/2,m[1]),E.rotation.y=m[3]||0;let v=.92+a()*.16;E.scale.set(v,v,1),E.updateMatrix(),g.setMatrixAt(f,E.matrix)}),g.frustumCulled=!1,n.add(g)}}function rn(n,t=2600,e=300,i=1){let s=Rt(i),r=new Float32Array(t*3),o=new Float32Array(t*3);for(let d=0;d<t;d++){let u=s()*2-1,p=s()*6.283,g=Math.sqrt(1-u*u);r[d*3]=g*Math.cos(p)*e,r[d*3+1]=u*e,r[d*3+2]=g*Math.sin(p)*e;let E=.55+s()*.45,m=s();o[d*3]=E*(m>.8?1:.9),o[d*3+1]=E*.94,o[d*3+2]=E*(m<.2?.8:1)}let a=new Ue;a.setAttribute("position",new Oe(r,3)),a.setAttribute("color",new Oe(o,3));let l=It(32,32,d=>{let u=d.createRadialGradient(16,16,0,16,16,16);u.addColorStop(0,"#fff"),u.addColorStop(.35,"#ffffffaa"),u.addColorStop(1,"#ffffff00"),d.fillStyle=u,d.fillRect(0,0,32,32)}),c=new Gs({map:l,size:3.2,vertexColors:!0,transparent:!0,depthWrite:!1,sizeAttenuation:!1,fog:!1}),h=new vr(a,c);return h.frustumCulled=!1,n.add(h),h}function On(n,t,e="#6D4A33"){let i=It(1024,1024,r=>{r.fillStyle=e,r.fillRect(0,0,1024,1024);let o=Rt(8);for(let a=0;a<11;a++){let l=a*94;r.fillStyle=`rgba(${o()<.5?"255,220,180":"20,10,5"},${o()*.13})`,r.fillRect(l,0,94,1024),r.fillStyle="#21140D",r.fillRect(l,0,4,1024);let c=o()*300;for(;c<1024;)r.fillRect(l,c,94,3),c+=340+o()*300}});i.wrapS=i.wrapT=$e,i.repeat.set(n/5,t/5);let s=new z(new Mt(n,t),new Ct({map:i,roughness:.55}));return s.rotation.x=-Math.PI/2,s.receiveShadow=!0,s}function $n(n,t,e="#D6D3C9",i="#C8C5BA",s=8){let r=It(256,256,a=>{a.fillStyle=e,a.fillRect(0,0,256,256),a.fillStyle=i,a.fillRect(0,0,128,128),a.fillRect(128,128,128,128)});r.wrapS=r.wrapT=$e,r.repeat.set(n/s*4,t/s*4);let o=new z(new Mt(n,t),new Ct({map:r,roughness:.3,metalness:.05}));return o.rotation.x=-Math.PI/2,o.receiveShadow=!0,o}function rs(n,t,e="#FFD9A0",i=.22){let s=It(64,256,o=>{let a=o.createLinearGradient(0,0,0,256);a.addColorStop(0,e+"FF"),a.addColorStop(1,e+"00"),o.fillStyle=a,o.fillRect(0,0,64,256);let l=o.createLinearGradient(0,0,64,0);l.addColorStop(0,"#000000"),l.addColorStop(.25,"#00000000"),l.addColorStop(.75,"#00000000"),l.addColorStop(1,"#000000"),o.globalCompositeOperation="destination-out",o.fillStyle=l,o.fillRect(0,0,64,256)});return new z(new Mt(n,t),new jt({map:s,transparent:!0,opacity:i,depthWrite:!1,blending:dn,side:he,fog:!1}))}function qc(n,t,e,i=1,s="#C76B4A",r="#3E8A52"){let o=new at,a=new z(new Zt(.3,.22,.5,20),R(s));a.position.y=.25,a.castShadow=!0,o.add(a);let l=It(256,256,h=>{h.clearRect(0,0,256,256);for(let d=0;d<9;d++)h.save(),h.translate(128,250),h.rotate((d-4)*.3),h.fillStyle=d%2?r:"#5BA868",h.beginPath(),h.ellipse(0,-110,20,110,0,0,7),h.fill(),h.restore()}),c=zt(l,1.5,1.5,{shadow:!0});return c.position.y=1.15,o.add(c),o.leaf=c,o.position.set(n,t,e),o.scale.setScalar(i),o}function Yc(n,t,e,i="#2A1E18"){let s=new at;s.add(w(n+.08,t+.08,.04,i,0,0,0));let r=It(Math.round(n*400),Math.round(t*400),e),o=new z(new Mt(n,t),new Ct({map:r,roughness:.8}));return o.position.z=.025,s.add(o),s}function xe(n,t,e,i=1.2){return new z(new Mt(n,t),new Ct({color:"#000",emissive:e,emissiveIntensity:i}))}function Xt(n,t,e,i=10,s=60){let r=new Zn(n,t);return r.position.set(...e),r.castShadow=!0,r.shadow.mapSize.set(1024,1024),Object.assign(r.shadow.camera,{left:-i,right:i,top:i,bottom:-i,far:s}),r.shadow.bias=-6e-4,r.shadow.radius=4,r}function xr(n,t={}){let{wall:e="#9A4632",night:i=!1,floor:s="#7A5236",win:r=!0}=t;n.fog=new St(i?"#2A1E2E":"#E9B48C",i?.02:.008),r&&(se(n,-60,220,120,i?[[0,"#0E1030"],[.6,"#2A2252"],[1,"#6B3A62"]]:[[0,"#7FA6D8"],[.55,"#F2C4A0"],[1,"#FFD9A8"]]),Nn(n,-50,220,30,i?["#2F2748","#3B2F54","#4A3A5E"]:["#C48A86","#B07A80","#9C6E7A"],i,4));let o=sa(e,2,2),a=()=>new Ct({map:o,roughness:.95});if(r){[[-5.4,2.6,7,5.2],[5.4,2.6,7,5.2],[0,.5,3.8,1],[0,4.7,3.8,.8]].forEach(([p,g,E,m])=>n.add(w(E,m,.3,a(),p,g,-3)));for(let[p,g,E,m]of[[-1.9,2.6,.12,3.4],[1.9,2.6,.12,3.4],[0,2.6,.07,3.3],[0,4.3,3.9,.12],[0,1.05,4,.16]])n.add(w(E,m,.2,"#EDE7DA",p,g,-2.95))}else n.add(w(18,5.2,.3,a(),0,2.6,-3));n.add(On(18,12,s));let l=Yc(.9,1.2,p=>{p.fillStyle="#F2E6CC",p.fillRect(0,0,360,480),p.fillStyle="#E8667F",p.beginPath(),p.arc(180,200,110,0,7),p.fill(),p.fillStyle="#36AEA2",p.fillRect(0,330,360,150)});l.position.set(-3.6,2.8,-2.83),n.add(l),n.add(qc(4.4,0,-2.4,1.1)),n.add(qc(-5,0,-2.4,.9,"#36AEA2")),n.add(new At(i?"#6E74C0":"#B9C8F0","#6A4430",i?.7:.9));let c=Xt(i?"#9FB0FF":"#FFD6A0",i?.9:2.4,[3,7,-10],9,40);c.target.position.set(-1,0,0),n.add(c,c.target);let h=new Jt("#FFB56E",i?10:4,8,1.6);h.position.set(3.4,2.2,-1.2),n.add(h);let d=new z(new Zt(.18,.3,.34,24),new Ct({color:"#F6DDA4",emissive:"#FFB866",emissiveIntensity:1.2}));d.position.set(3.6,1.9,-1.9),n.add(d),n.add(w(.04,1.7,.04,"#222",3.6,.85,-1.9));let u=$t("#FFC07A",1.2,.35);u.position.copy(d.position),n.add(u)}var hu=[{name:"PANADER\xCDA",bg:"#6C4A2C",fg:"#FFE7B8",awning:"#3E7A5C"},{name:"FARMACIA",bg:"#2F6E5A",fg:"#F0FFF4"},{name:"LUNA CAF\xC9",bg:"#A85A36",fg:"#FFE3C8",awning:"#D94F58",font:"Caveat",size:120},{name:"LIBROS",bg:"#3A4F7A",fg:"#FFF0C8"},{name:"FLORES",bg:"#B04463",fg:"#FFF2E2",awning:"#EFEDE0"}];function Cr(n,t={}){let{night:e=!1,seed:i=0,lit:s=.25,dusk:r=!1}=t;n.fog=new St(e?"#2A2240":r?"#C88A7A":"#F7CFA4",e?.012:.009),se(n,-170,500,240,e?[[0,"#0E1030"],[.5,"#2A2252"],[.8,"#5B3460"],[1,"#8A4A6A"]]:r?[[0,"#3A3A78"],[.5,"#B86A88"],[.8,"#F29A6A"],[1,"#FFC88A"]]:[[0,"#6FA7D8"],[.5,"#CFD8DC"],[.8,"#FBD7A6"],[1,"#FFE7BE"]]),Nn(n,-150,420,90,e?["#2F2748","#3B2F54","#4A3A5E"]:["#B89AA0","#A98E9A","#9A8592"],e||r,21),na(n,e||r);let o=6,a=0;for(;o>-90;){let l=7+a*37%5;n.add(Ui(100+a+i,{x:13,z:o-l/2,w:8,d:l,floors:4+a%3,side:-1,night:e||r,lit:s,shop:hu[(a+i)%5]})),n.add(Ui(200+a+i,{x:-13,z:o-l/2,w:8,d:l,floors:5+a%3,side:1,night:e||r,lit:s,shop:hu[(a+2+i)%5]})),o-=l,a++}for(let l=0;l<6;l++)De(n,5.2,-6-l*11,1.2,["#3E5F3A","#4F7A44","#6E9A50","#D7D282"],l),ia(n,-5,-3-l*12,1,e||r);n.add(new At(e?"#8E86C8":"#E9EEFF","#6A5A4A",e?.8:1.05)),n.add(Xt(e?"#B9B0F0":r?"#FFB080":"#FFD29A",e?1:2.8,[-20,16,10],30,90))}var tt=(n,t,e,i,s,r,o=0)=>{n.fillStyle=r,n.beginPath(),n.ellipse(t,e,i,s,o,0,7),n.fill()},te=(n,t,e,i,s,r,o)=>{n.fillStyle=o,n.beginPath(),n.roundRect(t,e,i,s,r),n.fill()},fe=(n,t,e)=>{n.fillStyle=e,n.beginPath(),n.moveTo(...t[0]);for(let i of t.slice(1))n.lineTo(...i);n.closePath(),n.fill()},Ks={perro:[520,440,n=>{tt(n,250,300,150,90,"#C98E5E"),tt(n,250,330,100,50,"#E9C49A"),te(n,120,330,34,100,14,"#B5784A"),te(n,340,330,34,100,14,"#B5784A"),te(n,180,340,34,90,14,"#C98E5E"),te(n,300,340,34,90,14,"#C98E5E"),n.strokeStyle="#B5784A",n.lineWidth=22,n.lineCap="round",n.beginPath(),n.moveTo(390,260),n.quadraticCurveTo(470,200,450,150),n.stroke(),tt(n,180,170,110,100,"#C98E5E"),tt(n,100,140,40,80,"#8A5A34",-.3),tt(n,262,140,40,80,"#8A5A34",.3),tt(n,180,220,54,40,"#E9C49A"),tt(n,180,200,22,16,"#1A1A24")},[.3,.34],22,1],viejo:[520,440,n=>{tt(n,250,300,150,90,"#C9A07E"),tt(n,250,330,100,50,"#EEDCC4"),te(n,120,330,34,100,14,"#B5906A"),te(n,340,330,34,100,14,"#B5906A"),te(n,180,340,34,90,14,"#C9A07E"),te(n,300,340,34,90,14,"#C9A07E"),tt(n,180,170,110,100,"#C9A07E"),tt(n,100,140,40,80,"#9A7A5A",-.3),tt(n,262,140,40,80,"#9A7A5A",.3),tt(n,180,220,60,46,"#F4F0E8"),tt(n,180,200,22,16,"#1A1A24")},[.3,.34],22,1],gato:[420,440,n=>{tt(n,220,320,110,90,"#E9853A"),n.strokeStyle="#E9853A",n.lineWidth=24,n.lineCap="round",n.beginPath(),n.moveTo(320,340),n.quadraticCurveTo(400,280,370,180),n.stroke(),tt(n,180,170,100,92,"#E9853A"),fe(n,[[96,120],[110,30],[160,100]],"#E9853A"),fe(n,[[264,120],[250,30],[200,100]],"#E9853A"),n.strokeStyle="#C96A22",n.lineWidth=9;for(let t=0;t<3;t++)n.beginPath(),n.moveTo(150+t*30,90),n.lineTo(160+t*30,120),n.stroke();tt(n,180,215,16,11,"#E8667F"),n.strokeStyle="#FFFFFF",n.lineWidth=4;for(let t of[-1,1])for(let e=0;e<3;e++)n.beginPath(),n.moveTo(180+t*30,220+e*8),n.lineTo(180+t*110,205+e*18),n.stroke()},[.43,.34],20,.8],loro:[300,440,n=>{tt(n,150,260,80,130,"#3FA34D"),tt(n,150,140,80,80,"#3FA34D"),fe(n,[[150,380],[110,440],[190,440]],"#2F6E9A"),tt(n,150,300,56,70,"#F2C14E"),fe(n,[[200,150],[250,180],[205,200]],"#2A2A34"),tt(n,120,90,26,18,"#C9361F")},[.48,.3],18,.5],paloma:[360,300,n=>{tt(n,170,190,130,80,"#8D94A8"),tt(n,90,110,56,52,"#7A8296"),tt(n,120,150,40,26,"#5FA898",.3),fe(n,[[40,110],[0,122],[40,128]],"#E9853A"),n.strokeStyle="#E9853A",n.lineWidth=8,n.beginPath(),n.moveTo(160,260),n.lineTo(150,296),n.moveTo(200,260),n.lineTo(210,296),n.stroke(),tt(n,280,170,70,30,"#6A7084",-.3)},[.25,.34],14,.5],mosquito:[300,240,n=>{tt(n,150,130,70,22,"#3A3040"),tt(n,90,120,34,30,"#3A3040"),n.strokeStyle="#3A3040",n.lineWidth=5,n.beginPath(),n.moveTo(60,120),n.lineTo(0,130),n.stroke();for(let t=0;t<3;t++)n.beginPath(),n.moveTo(130+t*30,145),n.lineTo(110+t*34,230),n.stroke();tt(n,150,70,60,26,"rgba(220,240,255,.8)",-.4),tt(n,190,76,50,22,"rgba(220,240,255,.7)",.3)},[.28,.48],12,.25],pradera:[300,380,n=>{tt(n,150,260,90,120,"#C9A06A"),tt(n,150,290,56,80,"#EBD3A8"),tt(n,150,120,74,70,"#C9A06A"),tt(n,100,70,18,14,"#A87A44"),tt(n,200,70,18,14,"#A87A44"),tt(n,150,156,14,10,"#1A1A24"),te(n,92,200,26,70,12,"#A87A44"),te(n,182,200,26,70,12,"#A87A44")},[.5,.28],14,.45],abeja:[300,240,n=>{tt(n,160,140,100,64,"#F2C14E"),n.fillStyle="#1A1A24";for(let t=0;t<3;t++)n.fillRect(120+t*40,80,20,120);tt(n,64,130,46,44,"#1A1A24"),tt(n,140,60,60,34,"rgba(230,246,255,.85)",-.4),tt(n,200,64,54,30,"rgba(230,246,255,.8)",.3),fe(n,[[258,140],[296,134],[258,150]],"#1A1A24")},[.2,.5],13,.35],delfin:[600,300,n=>{tt(n,300,160,250,80,"#6F9FC4"),tt(n,300,200,200,40,"#D8E8F4"),fe(n,[[60,150],[0,168],[62,178]],"#6F9FC4"),fe(n,[[300,90],[360,20],[370,100]],"#5A88AC"),fe(n,[[530,150],[600,90],[590,160],[600,230],[530,175]],"#5A88AC"),fe(n,[[260,220],[230,290],[300,230]],"#5A88AC")},[.2,.45],16,2],elefante:[600,520,n=>{tt(n,320,280,220,150,"#9A9AA8");for(let t of[170,240,390,460])te(n,t,360,70,160,20,"#8A8A98");tt(n,170,200,120,110,"#9A9AA8"),tt(n,270,190,100,130,"#8A8A9A",.2),n.strokeStyle="#9A9AA8",n.lineWidth=46,n.lineCap="round",n.beginPath(),n.moveTo(110,260),n.quadraticCurveTo(60,380,110,460),n.stroke(),fe(n,[[130,280],[110,330],[150,300]],"#F4F0E4")},[.24,.34],20,3],cachalote:[900,320,n=>{te(n,20,60,560,220,110,"#4A5A6E"),tt(n,600,180,220,90,"#4A5A6E"),fe(n,[[780,170],[900,90],[870,180],[900,270],[780,200]],"#3E4C60"),te(n,80,250,380,20,10,"#6A7A8E")},[.12,.45],20,8],pollo:[320,360,n=>{tt(n,170,230,120,100,"#FBF7EC"),tt(n,120,120,66,64,"#FBF7EC"),fe(n,[[100,50],[120,20],[140,52],[160,24],[170,62]],"#E2483A"),fe(n,[[60,120],[20,132],[60,144]],"#F2C14E"),tt(n,74,160,12,20,"#E2483A"),n.strokeStyle="#F2C14E",n.lineWidth=9,n.beginPath(),n.moveTo(150,320),n.lineTo(140,360),n.moveTo(200,320),n.lineTo(210,360),n.stroke(),tt(n,270,200,40,70,"#EDE6D4",.4)},[.36,.32],14,.5],vaca:[620,460,n=>{tt(n,340,220,230,130,"#FBF7EC");for(let[t,e,i]of[[300,180,50],[420,250,40],[240,260,34]])tt(n,t,e,i,i*.8,"#2A2A34");for(let t of[190,260,410,480])te(n,t,300,50,150,16,"#EDE6D4");tt(n,140,160,100,92,"#FBF7EC"),tt(n,120,220,70,46,"#F2B4C0"),fe(n,[[80,80],[60,40],[104,72]],"#C9A06A"),fe(n,[[200,80],[220,40],[176,72]],"#C9A06A")},[.2,.28],18,2.2],cerdo:[480,360,n=>{tt(n,250,200,200,120,"#F2A8B8");for(let t of[110,170,300,360])te(n,t,260,44,90,14,"#E890A4");tt(n,120,170,34,24,"#E06A84"),fe(n,[[160,70],[150,30],[196,70]],"#E890A4"),fe(n,[[250,70],[270,30],[226,70]],"#E890A4"),n.fillStyle="#B04A64",n.beginPath(),n.arc(110,170,6,0,7),n.arc(130,170,6,0,7),n.fill()},[.3,.34],16,1.4],gorila:[460,520,n=>{tt(n,230,320,170,170,"#2E2E38"),tt(n,230,160,110,104,"#2E2E38"),tt(n,230,190,70,56,"#5A5A68"),te(n,40,260,70,240,30,"#2E2E38"),te(n,350,260,70,240,30,"#2E2E38")},[.5,.28],16,1.6],jirafa:[400,900,n=>{te(n,160,120,70,560,30,"#F2C14E"),tt(n,230,700,150,110,"#F2C14E");for(let t of[120,180,290,340])te(n,t,760,30,140,12,"#E2A83A");tt(n,190,110,80,60,"#F2C14E"),te(n,160,20,12,50,6,"#8A5A2A"),te(n,210,20,12,50,6,"#8A5A2A"),n.fillStyle="#B5784A";for(let t=0;t<18;t++)n.beginPath(),n.ellipse(170+t%3*25,200+t*30,12,16,0,0,7),n.fill()},[.47,.1],14,1.8],lobo:[560,420,n=>{tt(n,300,260,190,100,"#8A8E9A"),tt(n,300,300,120,50,"#C8CCD4");for(let t of[160,220,360,420])te(n,t,320,36,100,14,"#7A7E8A");tt(n,140,170,96,90,"#8A8E9A"),fe(n,[[80,120],[90,40],[130,100]],"#7A7E8A"),fe(n,[[200,120],[190,40],[150,100]],"#7A7E8A"),fe(n,[[60,190],[10,210],[70,230]],"#8A8E9A"),n.strokeStyle="#8A8E9A",n.lineWidth=30,n.lineCap="round",n.beginPath(),n.moveTo(480,250),n.quadraticCurveTo(540,300,530,370),n.stroke()},[.26,.38],18,1.4],leon:[600,460,n=>{tt(n,340,280,200,110,"#E2A83A");for(let t of[200,260,400,460])te(n,t,330,44,120,16,"#D29A30");tt(n,170,200,150,150,"#A8642A"),tt(n,170,210,96,92,"#E2A83A"),tt(n,170,260,30,20,"#7A4A2A"),n.strokeStyle="#E2A83A",n.lineWidth=16,n.beginPath(),n.moveTo(530,250),n.quadraticCurveTo(600,300,580,380),n.stroke()},[.28,.4],18,2],pulpo:[420,420,n=>{tt(n,210,150,130,120,"#E8667F"),n.strokeStyle="#E8667F",n.lineWidth=26,n.lineCap="round";for(let t=0;t<8;t++)n.beginPath(),n.moveTo(110+t*28,240),n.quadraticCurveTo(80+t*36+Math.sin(t)*40,340,60+t*44,400),n.stroke()},[.5,.34],18,1],hormiga:[300,300,n=>{tt(n,230,190,60,46,"#3A2A2A"),tt(n,150,180,40,34,"#3A2A2A"),tt(n,80,150,50,46,"#3A2A2A"),n.strokeStyle="#3A2A2A",n.lineWidth=7;for(let t=0;t<3;t++)n.beginPath(),n.moveTo(140+t*20,200),n.lineTo(110+t*40,280),n.stroke();n.beginPath(),n.moveTo(70,110),n.lineTo(40,40),n.moveTo(90,108),n.lineTo(110,40),n.stroke()},[.27,.5],13,.35],ciervo:[520,520,n=>{tt(n,300,300,170,80,"#B5784A"),tt(n,300,330,110,40,"#E9C49A");for(let t of[170,220,360,410])te(n,t,330,26,180,12,"#9A6238");te(n,120,120,60,200,26,"#B5784A"),tt(n,130,110,70,56,"#B5784A"),tt(n,80,130,30,22,"#3A2A22"),fe(n,[[150,70],[200,30],[170,90]],"#9A6238"),n.strokeStyle="#7A5230",n.lineWidth=12,n.lineCap="round",n.beginPath(),n.moveTo(120,60),n.lineTo(90,10),n.moveTo(105,35),n.lineTo(60,25),n.moveTo(150,60),n.lineTo(180,8),n.moveTo(165,32),n.lineTo(210,22),n.stroke(),tt(n,470,270,26,20,"#F4F0E4")},[.25,.2],18,1.4],alce:[600,560,n=>{tt(n,340,300,200,110,"#5A3E2A");for(let t of[190,250,400,460])te(n,t,360,34,190,14,"#4A3222");te(n,110,150,90,200,36,"#5A3E2A"),tt(n,110,160,80,66,"#5A3E2A"),tt(n,60,200,54,46,"#6A4A34"),tt(n,40,200,12,10,"#2A1A12"),n.fillStyle="#C8AE84",n.beginPath(),n.ellipse(70,70,70,30,-.3,0,7),n.ellipse(170,70,70,30,.3,0,7),n.fill()},[.2,.28],16,2],jabali:[480,340,n=>{tt(n,250,190,190,110,"#5E4A3E"),n.fillStyle="#4A3A30";for(let t=0;t<9;t++)fe(n,[[150+t*22,90],[160+t*22,60],[172+t*22,92]],"#4A3A30");for(let t of[110,170,300,360])te(n,t,250,40,90,14,"#4A3A30");tt(n,90,200,70,60,"#5E4A3E"),tt(n,30,220,34,28,"#7A6050"),fe(n,[[50,240],[30,200],[62,236]],"#F4F0E4"),fe(n,[[100,130],[90,100],[126,136]],"#4A3A30")},[.18,.5],14,1.2],caballo:[620,560,n=>{tt(n,330,280,200,100,"#8A5A3A");for(let t of[190,240,400,450])te(n,t,320,34,230,14,"#7A4A2E");te(n,120,100,80,220,36,"#8A5A3A"),n.save(),n.translate(110,110),n.rotate(-.5),te(n,-50,-40,160,66,30,"#8A5A3A"),n.restore(),n.fillStyle="#2A1A12",n.fillRect(170,70,30,200),fe(n,[[110,60],[120,20],[140,64]],"#7A4A2E"),n.strokeStyle="#2A1A12",n.lineWidth=26,n.lineCap="round",n.beginPath(),n.moveTo(520,250),n.quadraticCurveTo(580,320,560,420),n.stroke()},[.2,.2],16,2.2]},ra={perro:[[.35,.39],.3],viejo:[[.35,.39],.3],gato:[[.43,.39],.34],loro:[[.5,.32],.4],paloma:[[.25,.37],.24],mosquito:[[.3,.5],.2],pradera:[[.5,.3],.36],abeja:[[.21,.54],.24],delfin:[[.2,.5],.12],elefante:[[.28,.38],.2],cachalote:[[.12,.45],.06],pollo:[[.37,.33],.32],vaca:[[.22,.33],.2],cerdo:[[.3,.4],.18],gorila:[[.5,.29],.3],jirafa:[[.47,.12],.3],lobo:[[.25,.4],.22],leon:[[.28,.44],.22],pulpo:[[.5,.34],.4],hormiga:[[.27,.48],.26]};Object.assign(ra,{ciervo:[[.24,.2],.14],alce:[[.18,.3],.12],jabali:[[.17,.55],.14],caballo:[[.22,.2],.1]});for(let n in ra)Ks[n][3]=ra[n][0],Ks[n][4]=ra[n][1];Ks.pato=[380,400,n=>{tt(n,210,280,150,100,"#F6D44A"),tt(n,290,250,70,50,"#E8BC30",-.4),tt(n,130,140,86,82,"#F6D44A"),tt(n,40,160,56,22,"#F2913A"),tt(n,46,172,46,14,"#E07A2A"),n.strokeStyle="#F2913A",n.lineWidth=14,n.lineCap="round",n.beginPath(),n.moveTo(180,370),n.lineTo(170,398),n.moveTo(240,370),n.lineTo(250,398),n.stroke(),fe(n,[[340,250],[380,220],[360,280]],"#F6D44A")},[.36,.3],.3,1];Ks.dragon=[480,440,n=>{tt(n,250,300,140,110,"#7BC86A"),tt(n,250,330,90,70,"#D8F0B8");for(let t=0;t<4;t++)fe(n,[[170+t*50,200],[190+t*50,150],[210+t*50,200]],"#F2913A");tt(n,380,210,80,50,"#9AD884",-.6),tt(n,130,160,100,92,"#7BC86A"),tt(n,70,190,46,34,"#9AD884"),fe(n,[[100,80],[90,30],[130,74]],"#F2913A"),fe(n,[[160,76],[170,26],[190,80]],"#F2913A"),te(n,160,380,40,56,18,"#6AB05A"),te(n,290,380,40,56,18,"#6AB05A"),n.strokeStyle="#7BC86A",n.lineWidth=30,n.lineCap="round",n.beginPath(),n.moveTo(380,330),n.quadraticCurveTo(470,360,450,280),n.stroke(),n.strokeStyle="rgba(0,0,0,.25)",n.lineWidth=4,n.setLineDash([10,8]),n.beginPath(),n.moveTo(250,200),n.lineTo(250,400),n.stroke()},[.28,.34],.3,1.6];Ks.caballoB=[620,560,n=>{tt(n,330,280,200,100,"#F4F0E8");for(let t of[190,240,400,450])te(n,t,320,34,230,14,"#E4DED2");te(n,120,100,80,220,36,"#F4F0E8"),n.save(),n.translate(110,110),n.rotate(-.5),te(n,-50,-40,160,66,30,"#F4F0E8"),n.restore(),n.fillStyle="#E8D8A8",n.fillRect(170,70,30,200),fe(n,[[110,60],[120,20],[140,64]],"#E4DED2"),n.strokeStyle="#E8D8A8",n.lineWidth=26,n.lineCap="round",n.beginPath(),n.moveTo(520,250),n.quadraticCurveTo(580,320,560,420),n.stroke()},[.2,.2],.1,2.2];var oa={},du=n=>oa["e"+n]||(oa["e"+n]=It(128,64,t=>{t.clearRect(0,0,128,64),t.fillStyle="#FBF7EC",t.strokeStyle="#FBF7EC",t.lineWidth=9,t.lineCap="round";for(let e of[32,96])if(n==="happy")t.beginPath(),t.arc(e,40,16,Math.PI*1.1,Math.PI*1.9),t.stroke();else if(n==="flat"||n==="shut")t.beginPath(),t.moveTo(e-16,34),t.lineTo(e+16,34),t.stroke();else if(n==="sad")t.beginPath(),t.ellipse(e,36,13,16,0,0,7),t.fill(),t.fillStyle="#1A1A24",t.fillRect(e-16,18,32,10),t.fillStyle="#FBF7EC";else{let i=n==="wide"?17:13;t.beginPath(),t.ellipse(e,32,i,i*1.25,0,0,7),t.fill(),n==="look"&&(t.fillStyle="#1A1A24",t.beginPath(),t.arc(e+5,34,5,0,7),t.fill(),t.fillStyle="#FBF7EC")}}));function uu(n,t={}){let[e,i,s,r,o,a]=Ks[n],l=oa[n]||(oa[n]=It(e,i,s)),c=a*i/e,h=new at,d=new at;h.add(d);let u=zt(l,a,c,{shadow:!0});u.position.y=c/2,d.add(u);let p=new z(new Mt(o*a,o*a*.5),new jt({map:du("open"),transparent:!0,depthWrite:!1}));p.position.set(-a/2+r[0]*a,c-r[1]*c,.01),d.add(p);let g=new z(new en(a*.45,24),new jt({color:"#000",transparent:!0,opacity:.22,depthWrite:!1}));g.rotation.x=-Math.PI/2,g.scale.y=.35,g.position.y=.01,h.add(g),t.flip&&(d.scale.x=-1);let E={root:h,card:d,kind:n,h:c,w:a,eye(m){p.material.map=du(m)},face(m){let f=new D;h.getWorldPosition(f),d.rotation.y=Math.atan2(m.position.x-f.x,m.position.z-f.z)},talk(m,f=!0){u.position.y=c/2+(f?Math.abs(Math.sin(m*14))*c*.015:0),d.scale.y=f?1+Math.sin(m*14)*.012:1},place(m,f,v=0,_=1){return h.position.set(m,v,f),h.scale.setScalar(_),E}};return E}var Hi=(n,t,e=200,i=200,s)=>{let r=new z(new Mt(e,i),s?new Ct({map:s,roughness:.95}):R(t,{roughness:1}));return r.rotation.x=-Math.PI/2,r.receiveShadow=!0,n.add(r),r},Zc=(n,t=1)=>{n.add(new At("#E9EEFF","#B08A6A",1.05*t)),n.add(Xt("#FFD29A",3*t,[-14,16,10],20,70))},ft={sala:(n,t)=>xr(n,{wall:t.wall||"#2F6E68",night:t.night,win:t.win??!0}),quarto:(n,t)=>{xr(n,{wall:"#9A4632",night:t.night}),n.add(w(2.4,.45,3.2,R("#6B4A33"),-1.7,.25,-1.4)),n.add(w(2.3,.3,3,R("#F3EEE4"),-1.7,.6,-1.4)),n.add(w(2.38,.22,2,R("#4A86C7",{roughness:.9}),-1.7,.8,-.7)),n.add(w(.8,.22,.5,R("#FFFFFF"),-1.7,.82,-2.5))},rua:(n,t)=>Cr(n,{seed:t.seed||0,night:t.night,dusk:t.dusk}),parque:(n,t)=>{n.fog=new St(t.dusk?"#E8A880":"#F2D8B8",.02),se(n,-100,500,200,t.dusk?[[0,"#3A3A78"],[.5,"#B86A88"],[.8,"#F29A6A"],[1,"#FFC88A"]]:[[0,"#6FA7D8"],[.6,"#CFD8DC"],[1,"#FFE7BE"]]),Nn(n,-80,400,40,["#B89AA0","#A98E9A","#9A8592"],!!t.dusk,5),Hi(n,"#7A9A50");for(let e=0;e<12;e++)De(n,-12+e*2.3,-7-e%3*2.5,1.4,["#3E5F3A","#4F7A44","#6E9A50","#D7D282"],e);n.add(w(2.4,.1,.5,R("#8E6242"),-3.4,.5,-2.2)),n.add(w(2.4,.5,.08,R("#8E6242"),-3.4,.8,-2.45));for(let e=0;e<3;e++)ia(n,-6+e*6,-4,1,!!t.dusk);n.add(new At("#E9EEFF","#B08A6A",1)),n.add(Xt(t.dusk?"#FFB080":"#FFD29A",t.dusk?2.2:3,[-10,12,8],14,50))},plaza:(n,t)=>{Cr(n,{seed:t.seed||2}),Hi(n,"",60,60,lu("#B49F8C",24,24)).position.set(0,.01,-10)},granja:(n,t)=>{n.fog=new St("#F2D8B8",.012),se(n,-200,700,260,[[0,"#6FA7D8"],[.6,"#CFE0E8"],[1,"#FFE7BE"]]),Hi(n,"#8AAA58");let e=new at;e.add(w(6,4,5,R("#B5402E"),0,2,0));let i=new z(new Zt(.01,4.4,2.2,4),R("#5A3A2A"));i.rotation.y=Math.PI/4,i.scale.z=.8,i.position.y=5.1,e.add(i),e.add(w(2,2.6,.1,R("#F4F0E4"),0,1.3,2.51)),e.position.set(-4,0,-12),n.add(e);for(let s=0;s<16;s++)n.add(w(.1,1,.1,R("#C9A06A"),-10+s*1.3,.5,-4));n.add(w(20,.08,.06,R("#C9A06A"),0,.9,-4)),n.add(w(20,.08,.06,R("#C9A06A"),0,.5,-4));for(let s=0;s<6;s++)De(n,6+s*3,-16-s%2*3,1.6,void 0,s);Zc(n)},sabana:(n,t)=>{n.fog=new St("#F2C890",.01),se(n,-300,900,300,[[0,"#E89A5A"],[.6,"#F6C888"],[1,"#FFE8B8"]]);let e=$t("#FFF0C0",40,.9);e.position.set(-30,20,-200),e.material.fog=!1,n.add(e),Hi(n,"#C8A858");for(let i=0;i<6;i++){let s=new at;s.add(w(.3,3,.3,R("#5A3A22"),0,1.5,0));let r=new z(new Zt(2.6,2.2,.6,12),R("#6E8A40"));r.position.y=3.2,s.add(r),s.position.set(-20+i*9,0,-14-i%3*8),n.add(s)}n.add(new At("#FFE8C8","#8A6A3A",1)),n.add(Xt("#FFD8A0",3,[-20,14,-10],30,90))},pradera:(n,t)=>{n.fog=new St("#F2E2C0",.012),se(n,-200,700,260,[[0,"#6FA7D8"],[.6,"#CFE0E8"],[1,"#F6E8C8"]]),Hi(n,"#B8B070");for(let e=0;e<14;e++){let i=new z(new de(.55,16,10,0,Math.PI*2,0,Math.PI/2),R("#A88A5A"));i.scale.y=.4,i.position.set(-8+e%7*2.6,0,-1-Math.floor(e/7)*4-e%3),n.add(i)}Zc(n)},mar:(n,t)=>{S2(n,t.deep?"#04182E":"#0A3A5A"),n.fog=new St(t.deep?"#06223E":"#0E4A6A",t.deep?.04:.06);let e=Hi(n,"#C8B48A");if(e.position.y=-3,!t.deep){let s=Rt(5);for(let r=0;r<30;r++){let o=new z(new qe(.2+s()*.3,.8+s()*1.4,7),R(["#E8667F","#F2A766","#B47AFF","#36AEA2"][r%4]));o.position.set((s()-.5)*14,-2.6,-2-s()*12),n.add(o)}}for(let s=0;s<7;s++){let r=rs(1.6,16,"#BFEFFF",t.deep?.05:.12);r.position.set(-6+s*2,5,-6),r.rotation.set(0,0,.25),n.add(r)}let i=[];for(let s=0;s<60;s++){let r=$t("#DFF8FF",.08,.7);n.add(r),i.push(r)}n.userData.bub=i,n.add(new At("#9FE0FF","#2A4A5A",t.deep?.5:1)),n.add(Xt("#BFEFFF",t.deep?.6:1.4,[0,20,4],14,40))},lab:(n,t)=>{n.fog=new St("#162238",.04),n.add($n(16,20,"#2A3348","#232B3E",6)),n.add(w(16,6,.3,R("#2E3A52"),0,3,-3.2));for(let r=0;r<4;r++){let o=xe(.6,3,"#9FC8FF",1.4);o.rotation.x=Math.PI/2,o.position.set(-3+r*2,4.2,-1),n.add(o)}let e=xe(2.6,1.4,"#7FD08A",.5);e.position.set(0,2.8,-3.03),n.add(e);let i=It(520,280,r=>{r.fillStyle="#0A1A12",r.fillRect(0,0,520,280),r.strokeStyle="#7FD08A",r.lineWidth=4,r.beginPath();for(let o=0;o<520;o++)r.lineTo(o,140+Math.sin(o*.08)*40*Math.sin(o*.013));r.stroke()}),s=new z(new Mt(2.5,1.3),new jt({map:i}));s.position.set(0,2.8,-3.02),n.add(s),n.add(new At("#6E86C8","#101420",.8)),n.add(Xt("#BFD4FF",1.4,[3,6,5],8,30))},hall:(n,t)=>{n.fog=new St("#1E2236",.02),Hi(n,"#2F4A7A"),n.add(w(30,10,.3,R("#E8E2D2"),0,5,-8));let e=It(512,512,r=>{r.clearRect(0,0,512,512),r.strokeStyle="#4A86C7",r.lineWidth=16,r.beginPath(),r.arc(256,256,200,0,7),r.stroke();for(let o=1;o<4;o++)r.beginPath(),r.arc(256,256,o*55,0,7),r.stroke();r.beginPath(),r.moveTo(56,256),r.lineTo(456,256),r.moveTo(256,56),r.lineTo(256,456),r.stroke()}),i=zt(e,4,4);i.position.set(0,6,-7.8),n.add(i);let s=new z(new nn(4,.35,10,48),R("#8E6242"));s.rotation.x=Math.PI/2,s.position.set(0,.8,-1),n.add(s);for(let r=0;r<8;r++){let o=new Jt("#FFE8C0",5,10,1.6);o.position.set(-6+r*1.8,6,0),n.add(o)}n.add(new At("#E8E8FF","#3A3A50",.9)),n.add(Xt("#FFF0D8",1.6,[4,10,8],12,40))},super:(n,t)=>{n.fog=new St("#E6E2D6",.03),n.add($n(9,40));for(let i of[-1,1]){n.add(w(.7,4.2,30,R("#8F96A3"),i*3.6,2.1,-10));for(let s=0;s<4;s++)n.add(w(1.2,.05,30,R("#DDE0E4"),i*3,.5+s*.9,-10))}let e=Rt(3);for(let i=0;i<160;i++){let s=i%2?1:-1;e()<.55||n.add(w(.3,.3,.4,R(["#3F8A52","#6E9A50","#E8843E","#C64236","#F2C14E"][i%5]),s*3,.7+Math.floor(e()*4)*.9,-i*.18))}for(let i=0;i<6;i++){let s=xe(1,2.6,"#FFF6DE",1.6);s.rotation.x=Math.PI/2,s.position.set(0,4.6,2-i*5),n.add(s)}n.add(new At("#FFFFFF","#B9B3A6",1)),n.add(Xt("#FFF6E0",.8,[1,8,6],10,30))},zoo:(n,t)=>{ft.parque(n,{});for(let e=0;e<12;e++)n.add(w(.08,1.4,.08,R("#3A3A40",{metalness:.5}),-4+e*.7,.7,1.2));n.add(w(8,.08,.08,R("#3A3A40"),0,1.35,1.2))},noite:(n,t)=>{xr(n,{night:!0,wall:"#3A3050"})},ruina:(n,t)=>{n.fog=new St("#8A8070",.03),se(n,-100,400,160,[[0,"#7A8A9A"],[1,"#C8C0B0"]]),Hi(n,"#8A8070");let e=Rt(8);for(let i=0;i<40;i++){let s=w(.4+e()*1.6,.3+e()*1,.4+e()*1.4,R(["#9A9088","#8A8078","#B0A898"][i%3]),(e()-.5)*10,.3,-1-e()*8);s.rotation.set(e(),e()*3,e()*.4),n.add(s)}Zc(n,.8)}};function S2(n,t){n.background=new ot(t)}function T2(n,t={}){let e=Gc({outfit:t.outfit||"hero",hair:t.hair,hairc:t.hairc,lash:!!t.lash,glasses:t.glasses,glow:t.glow??.14});return e.place(t.x||0,t.z||0,t.y||0,t.s||1),e.tint(t.tint||"#FFF0DC"),n.add(e.root),e}var b2=(n,t,e)=>{if(!n)return e;let i=e;for(let[s,r]of n)t>=s&&(i=r);return i};function $c(n,t,e){let i=Qd(n,t,e.bg||"#F1C39A",e.fov||32),s=i.scene;(ft[e.amb]||(()=>{}))(s,e.ambo||{});let r=(e.atores||[]).map(a=>{let l=a.tipo==="humano"?T2(s,a):(()=>{let c=uu(a.tipo,a);return c.place(a.x||0,a.z||0,a.y||0,a.s||1),s.add(c.root),c})();return{a,k:l}}),o=e.extra?e.extra(s,i,r.map(a=>a.k)):null;return i.update=(a,l)=>{Wc.value=a;let c=i.camera,h=s.userData.bub;h&&h.forEach((g,E)=>g.position.set(-4+E%12*.7,-2.5+(l*.5+E*.13)%7,-2-E%5*1.5));let d=ea(e.cam.map(([g,E])=>[g,E]),l),u=ea(e.cam.map(([g,,E])=>[g,E]),l);jd(c,d,u,0);for(let{a:g,k:E}of r){if(g.move){let f=g.move(l);E.root.position.set(f[0],f[1],f[2])}E.face(c),E.eye(b2(g.eyes,l,g.tipo==="humano"?"look":"open"));let m=(g.talk||[]).some(([f,v])=>l>=f&&l<v);g.tipo==="humano"?g.pose?g.pose(E,l):E.pose({armL:[12,8],armR:[m?50+Math.sin(l*8)*15:12,m?30:8],bob:m?Math.abs(Math.sin(l*8))*.015:0}):(E.talk(l,m),g.pose&&g.pose(E,l))}return o&&o.update&&o.update(l,a,c),{focus:e.f?ea(e.f,l):5,range:e.range??2.4,blur:e.blur??12,bloom:.3,bloomT:.92,vig:.45,exposure:1.02,...e.look||{},...e.lookFn?e.lookFn(l):{}}},i}function fu(n,t,e,i="#E8667F"){n.add(w(2.2,.45,3,R("#6B4A33"),t,.25,e)),n.add(w(2.1,.3,2.8,R("#F3EEE4"),t,.6,e)),n.add(w(2.18,.2,1.9,R(i,{roughness:.9}),t,.8,e+.5)),n.add(w(2.2,1.3,.16,R("#5A3C28"),t,.9,e-1.55)),n.add(w(.8,.2,.45,R("#FFFFFF"),t-.5,.82,e-1.1)),n.add(w(.8,.2,.45,R("#F6E6C8"),t+.5,.82,e-1.1))}function w2(n,t,e={}){let{S:i=256,vazio:s=!1,face:r="#FBF7EC",rim:o="#2A2A34"}=e;n.clearRect(0,0,i,i);let a=i*.46;if(n.save(),n.translate(i/2,i/2),s){n.fillStyle="rgba(255,232,205,.35)",n.beginPath(),n.arc(0,0,a*.95,0,7),n.fill(),n.setLineDash([14,12]),n.strokeStyle="#FFF0D8",n.lineWidth=9,n.beginPath(),n.arc(0,0,a*.95,0,7),n.stroke(),n.restore();return}n.fillStyle=o,n.beginPath(),n.arc(0,0,a,0,7),n.fill(),n.fillStyle=r,n.beginPath(),n.arc(0,0,a*.86,0,7),n.fill(),n.fillStyle=o;for(let c=0;c<12;c++){let h=c/12*Math.PI*2;n.save(),n.rotate(h),n.fillRect(-4,-a*.8,8,c%3?a*.1:a*.18),n.restore()}let l=(c,h,d)=>{n.save(),n.rotate(c),n.fillRect(-d/2,-h,d,h+10),n.restore()};l(t%12/12*Math.PI*2,a*.5,12),l(t%1*Math.PI*2,a*.72,7),n.fillStyle="#C9361F",n.beginPath(),n.arc(0,0,10,0,7),n.fill(),n.restore()}function pu(n=.6,t=3,e={}){let i=document.createElement("canvas");i.width=i.height=256;let s=i.getContext("2d"),r=new Rn(i);r.colorSpace=Fe;let o=new z(new Mt(n,n),new Ct({map:r,transparent:!0,alphaTest:.05,side:he,roughness:.7}));return o.set=(a,l={})=>{w2(s,a,{...e,...l}),r.needsUpdate=!0},o.set(t),o}var Fr=[.09,2.66,4.37,5.6,9.17,10.95,12.78,16.62,19.68,21.41,22.85,25.44,28.84,31.05,35.16,37.01],R2=[["y",.092],["si",.206],["esta",.373],["noche",.581],["desapareciera",.863],["la",1.529],["luna",1.623],["primero",2.656],["lo",2.99],["notas",3.083],["al",3.427],["mirar",3.531],["arriba",3.802],["ni",4.365],["rastro",4.479],["sin",5.604],["luna",5.875],["llena",6.073],["las",6.625],["noches",6.792],["serian",7.094],["mucho",7.406],["mas",7.698],["oscuras",7.906],["luego",9.167],["el",9.76],["mar",9.906],["las",10.948],["mareas",11.156],["no",11.5],["se",11.656],["irian",11.792],["del",12.104],["todo",12.26],["pero",12.781],["solo",12.958],["quedaria",13.208],["la",13.594],["del",13.677],["sol",13.833],["que",14.333],["tiene",14.458],["menos",14.677],["de",14.979],["la",15.052],["mitad",15.135],["de",15.417],["fuerza",15.5],["los",16.625],["corales",16.812],["que",17.469],["se",17.573],["reproducen",17.708],["guiados",18.229],["por",18.573],["la",18.729],["luz",18.802],["de",19],["la",19.073],["luna",19.156],["perderian",19.677],["su",20.156],["reloj",20.292],["y",21.406],["lo",21.521],["peor",21.635],["llega",21.875],["despacio",22.115],["la",22.854],["luna",22.938],["sujeta",23.167],["la",23.562],["inclinacion",23.646],["de",24.188],["la",24.26],["tierra",24.354],["sin",25.438],["ella",25.719],["en",26.177],["millones",26.312],["de",26.698],["anos",26.792],["el",27.354],["eje",27.51],["podria",27.708],["tambalearse",28.052],["y",28.844],["con",28.917],["el",29.104],["las",29.521],["estaciones",29.667],["fijate",31.052],["ahora",31.729],["mismo",31.99],["se",32.292],["aleja",32.406],["casi",32.688],["cuatro",32.99],["centimetros",33.271],["cada",33.885],["ano",34.177],["la",35.156],["echarias",35.333],["de",35.76],["menos",35.833],["suscribete",37.01],["para",37.625],["mas",37.812],["videos",38.031]],mu=(n,t=0)=>{for(let[e,i]of R2)if(i>=t&&e===n)return i;return t};var aa=(n,t,e=200,i=200)=>{let s=new z(new Mt(e,i),R(t,{roughness:1}));return s.rotation.x=-Math.PI/2,s.receiveShadow=!0,n.add(s),s},Ae=(n,t={})=>{let{w:e=512,h:i=200,bg:s="#FBF7EC",fg:r="#2A2A34",size:o=64}=t;return It(e,i,a=>{a.clearRect(0,0,e,i),a.fillStyle=s,a.beginPath(),a.roundRect(6,6,e-12,i-12,26),a.fill(),a.fillStyle=r,a.font=`900 ${o}px Fraunces`,a.textAlign="center",a.textBaseline="middle",n.forEach((l,c)=>a.fillText(l,e/2,i/2+(c-(n.length-1)/2)*o*1.1))})};function gu(n="#E9B44C"){let t=new at;t.add(w(2.4,2.4,9,R(n,{roughness:.5}),0,1.5,0));for(let i=0;i<6;i++)for(let s of[-1,1])t.add(w(.02,.8,1.1,R("#1A2233",{roughness:.1,metalness:.5}),s*1.21,2,-3.6+i*1.4));t.add(w(2.2,1,.02,R("#1A2233",{roughness:.1}),0,2,4.51));let e=w(.02,1.8,1,R("#2A2A34"),1.22,1.2,2.8);t.add(e);for(let i of[-3,3])for(let s of[-1,1]){let r=new z(new Zt(.45,.45,.3,20),R("#1A1A20"));r.rotation.z=Math.PI/2,r.position.set(s*1.1,.45,i),t.add(r)}return t}function x2(n,t=.5){let e=new at,i=It(1024,256,r=>{r.clearRect(0,0,1024,256);let o=Rt(77);for(let a=0;a<70;a++){let l=r.createRadialGradient(o()*1024,128+(o()-.5)*90,0,0,0,0)}for(let a=0;a<40;a++){let l=o()*1024,c=128+(o()-.5)*70,h=40+o()*80,d=r.createRadialGradient(l,c,0,l,c,h);d.addColorStop(0,["rgba(200,180,255,.22)","rgba(255,220,200,.2)","rgba(170,200,255,.2)"][a%3]),d.addColorStop(1,"rgba(0,0,0,0)"),r.fillStyle=d,r.fillRect(0,0,1024,256)}r.fillStyle="rgba(20,10,30,.35)";for(let a=0;a<18;a++)r.beginPath(),r.ellipse(o()*1024,128+(o()-.5)*30,40+o()*60,6+o()*8,(o()-.5)*.3,0,7),r.fill();for(let a=0;a<2600;a++){let l=128+(o()+o()+o()-1.5)*70;r.fillStyle=`rgba(255,255,255,${.3+o()*.7})`;let c=o()<.03?2.4:1.2;r.fillRect(o()*1024,l,c,c)}}),s=new z(new Mt(400,100),new jt({map:i,transparent:!0,depthWrite:!1,fog:!1,blending:dn}));return s.position.set(0,60,-150),s.rotation.z=t,e.add(s),n.add(e),e}function C2(n,t=0,e=-1){for(let i=0;i<4;i++){let s=w(5,.22,.6,R("#5A3E2A",{roughness:1}),t,.1,e-i*1.1);s.receiveShadow=!0,n.add(s);for(let r=0;r<7;r++){let o=new z(new qe(.16,.35,6),R(["#4F7A44","#6E9A50"][r%2]));o.position.set(t-2.1+r*.7,.38,e-i*1.1),n.add(o)}}}function Jc(n,t=40,e=3,i=[-12,12,-40,4]){let s=Rt(e),r=It(256,512,o=>{o.clearRect(0,0,256,512),o.strokeStyle="#3E6A34",o.lineWidth=6,o.beginPath(),o.moveTo(128,512);for(let a=512;a>0;a-=20)o.lineTo(128+Math.sin(a*.05)*40,a);o.stroke();for(let a=0;a<60;a++){o.fillStyle=["#4F8A44","#6EA850","#3E6A34"][a%3],o.beginPath();let l=s()*512;o.ellipse(128+Math.sin(l*.05)*40+(s()-.5)*60,l,16,10,s()*3,0,7),o.fill()}});for(let o=0;o<t;o++){let a=1.5+s()*4,l=zt(r,a*.5,a),c=s()<.5?-1:1;l.position.set(c*(8.8+s()*.4),a/2,i[2]+s()*(i[3]-i[2])),l.rotation.y=c*-Math.PI/2,n.add(l)}}function Eu(n,t=200,e=5,i=10,s=30,r=2){let o=Rt(e),a=It(64,64,l=>{l.clearRect(0,0,64,64),l.fillStyle="#6E9A50";for(let c=0;c<7;c++)l.beginPath(),l.moveTo(10+c*7,64),l.lineTo(14+c*7+(c-3)*3,10+c%3*8),l.lineTo(18+c*7,64),l.fill()});for(let l=0;l<t;l++){let c=zt(a,.5,.5);c.position.set((o()-.5)*i,.25,r-o()*s),c.rotation.y=o()*3,n.add(c)}}ft.pasteleria=n=>{n.fog=new St("#F3D2C0",.02),n.add($n(16,14,"#F2E6DA","#E2CFC0",8)),n.add(w(16,5,.3,R("#E89AA8"),0,2.5,-3.2));for(let i=0;i<6;i++)n.add(w(.12,5,.05,R("#F6C2CC"),-6+i*2.4,2.5,-3.02));n.add(w(5.4,1,.9,R("#8A5A3C"),0,.5,-1.2)),n.add(w(5.5,.08,1,R("#F4EEE6"),0,1.04,-1.2)),n.add(w(3.6,.1,.5,R("#F4EEE6"),0,2.1,-3)),n.add(w(3.6,.1,.5,R("#F4EEE6"),0,2.9,-3));let t=zt(Ae(["PASTELER\xCDA"],{bg:"#6C4A2C",fg:"#FFE7B8",size:80,w:768,h:160}),2.8,.58);t.position.set(0,3.9,-3),n.add(t),n.add(new At("#FFF0F0","#A07060",1));let e=Xt("#FFE6C8",1.8,[3,8,6],8,30);n.add(e);for(let i=0;i<3;i++){let s=new Jt("#FFD8A8",5,7,1.6);s.position.set(-2+i*2,3.4,-.5),n.add(s)}};ft.espacio=n=>{n.background=new ot("#05060E"),rn(n,2600,200,3),n.add(new At("#8FA8FF","#101020",.5));let t=new Zn("#FFF4E0",3.2);t.position.set(-10,6,8),n.add(t)};ft.aula=n=>{n.fog=new St("#E8DCC8",.02),n.add($n(16,16,"#C9B89A","#BBA98A",10)),n.add(w(16,5,.3,R("#E8DCC0"),0,2.5,-3.6)),n.add(w(4.4,1.8,.06,R("#2F5A48"),0,2.3,-3.42)),n.add(w(4.6,.1,.2,R("#8E6242"),0,1.36,-3.35));let t=zt(It(512,200,e=>{e.clearRect(0,0,512,200),e.fillStyle="#F4F0E4",e.font="700 60px Caveat",e.fillText("EXAMEN  \u2014  2 + 2 = ?",30,90),e.fillText("x\xB2 \u2212 9 = 0",60,170)}),3.4,1.3);t.position.set(0,2.35,-3.38),n.add(t),n.add(new At("#FFFFFF","#9A8A70",1)),n.add(Xt("#FFE8C8",2.2,[-6,8,6],10,40))};ft.ruaV=(n,t)=>{Cr(n,{seed:t.seed||0,night:t.night,dusk:t.dusk}),t.selva&&(Jc(n,60,4),Eu(n,260,6,9,40))};ft.apagon=(n,t)=>{n.fog=new St("#0A0C18",.03),se(n,-170,500,240,[[0,"#04050C"],[.6,"#0C1028"],[1,"#1A1A34"]]),rn(n,1800,200,4),na(n,!0);let e=6,i=0;for(;e>-60;){let s=7+i*37%5;n.add(Ui(300+i,{x:13,z:e-s/2,w:8,d:s,floors:5,side:-1,night:!0,lit:0})),n.add(Ui(400+i,{x:-13,z:e-s/2,w:8,d:s,floors:6,side:1,night:!0,lit:0})),e-=s,i++}n.add(new At("#5A64A8","#141420",.5)),n.add(Xt("#8A9AE0",.7,[-10,20,10],30,90))};ft.azotea=(n,t)=>{n.background=new ot("#03040A"),n.fog=new St("#060814",.008),rn(n,4200,200,9),x2(n,t.ang??.45),Nn(n,-60,300,30,["#0E1020","#121428","#161830"],!1,7);let e=w(16,.3,12,R("#3A3A44",{roughness:1}),0,-.15,-2);e.receiveShadow=!0,n.add(e),n.add(w(16,.5,.2,R("#4A4A54"),0,.25,-8)),n.add(w(1.4,1.2,1.4,R("#4A4A54"),4.5,.6,-5)),n.add(new At("#6A78C8","#141420",.55)),n.add(Xt("#9AAAF0",.6,[-6,10,6],12,40))};ft.panaderia=n=>{ft.pasteleria(n);let t=zt(Ae(["PANADER\xCDA"],{bg:"#6C4A2C",fg:"#FFE7B8",size:80,w:768,h:160}),2.8,.58);t.position.set(0,3.9,-2.98),n.add(t)};ft.metro=n=>{n.background=new ot("#0A0C10"),n.fog=new St("#0C1014",.07);let t=R("#4A4E54",{roughness:.9,side:Ve}),e=new z(new Zt(3.2,3.2,60,32,1,!0,0,Math.PI),t);e.rotation.set(Math.PI/2,0,Math.PI/2),e.rotation.order="YXZ";let i=new at,s=new z(new Zt(3.2,3.2,60,32,1,!0),t);s.rotation.x=Math.PI/2,s.position.set(0,1.2,-20),i.add(s),n.add(i);let r=w(6.4,.1,60,R("#2A2C30"),0,-.05,-20);n.add(r);for(let o of[-.75,.75])n.add(w(.08,.12,60,R("#8A8E98",{metalness:.8,roughness:.3}),o,.1,-20));for(let o=0;o<40;o++)n.add(w(2.2,.08,.2,R("#3A2E26"),0,.03,5-o*1.5));for(let o=0;o<6;o++){let a=new Jt("#FFE0A0",4,8,1.8);a.position.set(2.2,3,2-o*8),n.add(a);let l=$t("#FFE0A0",.5,.9);l.position.copy(a.position),n.add(l)}n.add(new At("#8A90A0","#202024",1.1))};ft.bosque=(n,t)=>{n.fog=new St(t.nieve?"#E8EEF4":"#C8D0B8",.025),se(n,-100,500,200,t.nieve?[[0,"#9AB0C8"],[1,"#EEF2F6"]]:[[0,"#8AA8C0"],[.7,"#C8D4C8"],[1,"#E8E4C8"]]),aa(n,t.nieve?"#F2F4F8":"#6E8A48");let e=Rt(14);for(let i=0;i<26;i++)De(n,(e()-.5)*30,-4-e()*22,1.2+e()*.8,t.nieve?["#4A6A5A","#5A7A6A","#E8EEF4","#FFFFFF"]:["#3E5F3A","#4F7A44","#6E9A50","#A9B65A"],i);if(t.ruina){let i=Ui(55,{x:6,z:-14,w:10,d:8,floors:5,side:-1,night:!1,lit:0,col:"#A8A49A"});n.add(i),Jc(n,0)}n.add(new At("#E9EEFF","#5A6A4A",.95)),n.add(Xt("#FFE8C0",2.4,[-10,14,8],18,60))};ft.rio=(n,t)=>{ft.parque(n,t);let e=new z(new Mt(60,3.4),new Ct({color:"#4A8AB0",roughness:.08,metalness:.3}));e.rotation.x=-Math.PI/2,e.position.set(0,.02,-3.6),n.add(e)};ft.playa=(n,t)=>{let e=!!t.dusk;n.fog=new St(e?"#F2A880":"#CFE8F0",.006),se(n,-200,900,300,e?[[0,"#3A3A78"],[.45,"#C86A88"],[.75,"#F6A060"],[1,"#FFD890"]]:[[0,"#4F9AD8"],[.6,"#9FD0E8"],[1,"#E8F4F0"]]);let i=$t(e?"#FFC070":"#FFFFF0",e?30:16,.9);i.position.set(0,e?6:40,-220),i.material.fog=!1,n.add(i);let s=aa(n,"#E8D4A0"),r=new z(new Mt(800,400),new Ct({color:e?"#5A6AA0":"#3A9AC0",roughness:.12,metalness:.4}));r.rotation.x=-Math.PI/2,r.position.set(0,.03,-206),n.add(r);let o=w(800,.02,.6,R("#F4F8FA"),0,.04,-6.2);if(n.add(o),n.userData.foam=o,t.roca){let a=new z(new fi(1.1,0),R("#7A6A60"));a.scale.set(1.4,.55,1),a.position.set(0,.25,-1),a.castShadow=a.receiveShadow=!0,n.add(a)}n.add(new At(e?"#FFC8A8":"#E9F4FF","#C8A878",1)),n.add(Xt(e?"#FFB070":"#FFF0D0",e?2.2:3,[0,e?5:16,-14],16,60))};ft.svalbard=n=>{n.fog=new St("#C8D8E8",.02),se(n,-200,700,260,[[0,"#4A5A8A"],[.6,"#A8B8D8"],[1,"#E8EEF8"]]),aa(n,"#F4F6FA");let t=Rt(19);for(let l=0;l<8;l++){let c=new z(new qe(10+t()*12,10+t()*10,7),R("#E8EEF4",{roughness:1}));c.position.set(-40+l*12,4,-40-t()*30),n.add(c)}let e=new z(new de(14,32,16,0,Math.PI*2,0,Math.PI/2),R("#EEF2F6",{roughness:1}));e.scale.y=.5,e.position.set(0,0,-20),n.add(e);let i=w(3,4.4,6,R("#9A9EA4",{roughness:.8}),0,1.6,-6.5);i.rotation.x=-.18,n.add(i);let s=w(1.4,2.2,.1,R("#4A4E56",{metalness:.5}),0,1.1,-3.45);n.add(s);let r=xe(2.6,1,"#7FE8FF",1.3);r.position.set(0,3.1,-3.3),r.rotation.x=-.18,n.add(r);let o=$t("#7FE8FF",4,.35);o.position.set(0,3.1,-3),n.add(o);let a=[];for(let l=0;l<300;l++){let c=$t("#FFFFFF",.05,.9);n.add(c),a.push([c,t()*20-10,t()*8,t()*12-8,t()])}n.userData.snow=a,n.add(new At("#D8E8FF","#8A9AB0",1.1)),n.add(Xt("#F0F4FF",1.6,[-8,10,8],16,50))};ft.huerto=(n,t)=>{ft.parque(n,t),C2(n,0,-1.4)};ft.biblio=n=>{n.fog=new St("#4A3A2A",.03),n.add(On(18,14,"#6D4A33")),n.add(w(18,6,.3,R("#5A3E2A"),0,3,-3.4));let t=Rt(8);for(let s=0;s<5;s++){n.add(w(14,.06,.4,R("#3E2A1C"),0,.5+s*.9,-3.05));for(let r=0;r<60;r++){let o=.1+t()*.1,a=.5+t()*.3;n.add(w(o,a,.3,R(["#8A3A2A","#2F5A48","#3A4F7A","#C9A06A","#6A3A5A"][r%5]),-6.8+r*.23,.5+s*.9+a/2+.03,-3.05))}}n.add(new At("#FFE8C8","#3A2A1C",.7));let e=new Jt("#FFC880",10,8,1.6);e.position.set(0,2.6,.5),n.add(e);let i=$t("#FFC880",1,.4);i.position.copy(e.position),n.add(i)};ft.hotel=n=>{n.fog=new St("#E8D8C0",.02),n.add(On(18,14,"#8A5A3A")),n.add(w(18,6,.3,R("#C8B898"),0,3,-3.4));for(let i of[-3,3]){n.add(w(2.4,2.6,.05,R("#9FC8E8",{roughness:.05,metalness:.3,transparent:!0,opacity:.35}),i,2.4,-3.22));let s=zt(It(256,256,r=>{r.clearRect(0,0,256,256),r.strokeStyle="#FFFFFF",r.lineWidth=3;for(let o=0;o<9;o++)r.beginPath(),r.moveTo(128,128),r.lineTo(128+Math.cos(o*.7)*140,128+Math.sin(o*.7)*140),r.stroke()}),2.4,2.4);s.position.set(i,2.4,-3.18),n.add(s)}let t=w(3.2,.6,2.4,R("#F4F0E4"),0,.3,-1.6);n.add(t),n.add(w(3.3,1.4,.2,R("#6A3A2A"),0,.7,-2.8)),Jc(n,0);let e=zt(It(256,256,i=>{i.clearRect(0,0,256,256);for(let s=0;s<90;s++)i.fillStyle=["#4F8A44","#6EA850"][s%2],i.beginPath(),i.ellipse(__sr()*256,__sr()*120,12,8,1,0,7),i.fill()}),3,3);e.position.set(3,3.6,-3.15),n.add(e),n.add(new At("#FFF0E0","#8A6A4A",1)),n.add(Xt("#FFE0B0",2,[-4,8,6],10,30))};ft.selva=n=>{n.fog=new St("#7AA870",.05),se(n,-100,400,200,[[0,"#4A7A5A"],[1,"#B8D8A0"]]),aa(n,"#3E5A2A");let t=Rt(23);for(let e=0;e<40;e++)De(n,(t()-.5)*26,-2-t()*18,1.6+t(),["#1E4A24","#2E6A34","#4A8A3E","#7AB048"],e);Eu(n,160,9,12,12,3),n.add(new At("#D8F0C8","#2A3A1A",.9)),n.add(Xt("#FFF0C0",2.2,[-6,14,4],14,50))};ft.desierto=n=>{ft.sabana(n,{})};var Qc=(n,t,e=200,i=200)=>{let s=new z(new Mt(e,i),R(t,{roughness:1}));return s.rotation.x=-Math.PI/2,s.receiveShadow=!0,n.add(s),s};function la(n={}){let{w:t=10,h:e=7,col:i="#E8C8A0",win:s=[0,2.6,2,1.8],night:r=!1,inner:o="#F2D49A",lit:a=r,brick:l=!1,sill:c=.9}=n,h=new at,[d,u,p,g]=s,E=()=>l?new Ct({map:sa(i,3,3),roughness:.95}):R(i,{roughness:.9}),m=d-p/2+t/2,f=t/2-(d+p/2),v=u-g/2,_=e-(u+g/2);h.add(w(m,e,.3,E(),-t/2+m/2,e/2,0)),h.add(w(f,e,.3,E(),t/2-f/2,e/2,0)),h.add(w(p,v,.3,E(),d,v/2,0)),h.add(w(p,_,.3,E(),d,e-_/2,0));let y=R("#F4F0E4");for(let[N,O,W,Q]of[[d-p/2,u,.1,g+.1],[d+p/2,u,.1,g+.1],[d,u+g/2,p+.2,.1],[d,u,.05,g]])h.add(w(W,Q,.36,y,N,O,0));h.add(w(p+.4,.1,.5,y,d,u-g/2-.03,.12));let I=3.2,C=R(o,{roughness:.9});h.add(w(p+3,e,.2,C,d,e/2,-I)),h.add(w(.2,e,I,C,d-p/2-1.4,e/2,-I/2)),h.add(w(.2,e,I,C,d+p/2+1.4,e/2,-I/2)),h.add(w(p+3,.2,I,R("#8A6A4A"),d,v-c,-I/2)),h.add(w(p+3,.2,I,C,d,u+g/2+.5,-I/2));let b=new Jt("#FFC880",a?9:2.5,7,1.4);b.position.set(d,u+.6,-1.2),h.add(b);let F=xe(p+2.6,e*.6,"#FFD9A0",a?.35:.08);F.position.set(d,u,-I+.12),h.add(F);let S=w(p-.04,g,.06,R("#E8E2D2",{roughness:.8}),d,u,.1);S.castShadow=!1,h.add(S);let A=[];for(let N=0;N<10;N++){let O=w(p-.04,.015,.07,"#B8B0A0",d,0,.11,!1);h.add(O),A.push([O,N])}let P=N=>{let O=Math.max(.001,g*N);S.scale.y=O/g,S.position.y=u+g/2-O/2,S.visible=N>.01,A.forEach(([W,Q])=>{let Y=u+g/2-(Q+.5)*g/10;W.visible=N>.01&&Y>u+g/2-O,W.position.y=Y})};return P(0),h.userData={persiana:P,luz:N=>{b.intensity=N?9:2.5,F.material.emissiveIntensity=N?.35:.08},win:s,lamp:b},h.children.forEach(N=>{N.castShadow=N.castShadow??!0,N.receiveShadow=!0}),h}function Pr(n={}){let{col:t="#E8C8A0",roof:e="#A8442E",w:i=7,h:s=5.6,d:r=7,door:o="#3E6A5A",night:a=!1}=n,l=new at;l.add(w(i,s,r,R(t,{roughness:.9}),0,s/2,-r/2));let c=new z(new Zt(.01,i*.62,2.4,4,1),R(e,{roughness:.8}));c.rotation.y=Math.PI/4,c.scale.set(1,1,r/i),c.position.set(0,s+1.2,-r/2),c.castShadow=!0,l.add(c),l.add(w(1.1,2.1,.1,R(o),0,1.05,.02)),l.add(w(.08,.08,.08,"#E9B44C",.38,1,.1));let h=()=>new Ct({color:"#1A2233",emissive:a?"#FFC880":"#000",emissiveIntensity:a?.7:0,roughness:.1,metalness:.3});for(let[d,u]of[[-2.2,1.6],[2.2,1.6],[-2.2,4.1],[2.2,4.1]])l.add(w(1.3,1.2,.06,h(),d,u,.03)),l.add(w(1.5,.1,.2,"#F4F0E4",d,u-.65,.08));return l.add(w(2,.2,1.2,R("#B8AC9D"),0,.1,.6)),l.children.forEach(d=>{d.castShadow=!0,d.receiveShadow=!0}),l}function Kc(n=4){let t=new at,e=Rt(n*7);for(let i=0;i<n*3;i++){let s=new z(new de(.42+e()*.12,12,10),R(["#3E6A34","#4F7A44","#5A8A48"][i%3],{roughness:1}));s.position.set(-n/2+i/3+.15,.5+e()*.25,(e()-.5)*.2),s.castShadow=!0,t.add(s)}return t}function yu(n=8,t="#E8E2D2"){let e=new at;for(let i=0;i<=n*4;i++)e.add(w(.1,1.3,.05,R(t),-n/2+i*.25,.65,0));for(let i of[.35,1.05])e.add(w(n,.08,.06,R(t),0,i,-.04));return e.children.forEach(i=>i.castShadow=!0),e}function ca(){let n=new at,t=Rt(4);for(let e=0;e<7;e++){let i=new z(new de(.35,12,10),R("#3E6A34",{roughness:1}));i.position.set((t()-.5)*1.4,.35+t()*.3,(t()-.5)*.5),n.add(i)}for(let e=0;e<16;e++){let i=new z(new de(.08,10,8),R(["#D8344A","#E8667F"][e%2],{roughness:.5}));i.position.set((t()-.5)*1.5,.55+t()*.4,(t()-.5)*.6+.2),n.add(i)}return n.children.forEach(e=>e.castShadow=!0),n}function F2(){let n=new at;n.add(w(2.2,2,1.8,R("#8A6A4A",{roughness:.9}),0,1,0));let t=w(2.6,.12,2.3,R("#5A3E2A"),0,2.12,0);return n.add(t),n.add(w(.8,1.5,.05,R("#5A3E2A"),0,.75,.92)),n.children.forEach(e=>{e.castShadow=!0,e.receiveShadow=!0}),n}function _u(n=.6){let t=w(n,n*.8,n,R("#C9A06A",{roughness:.9}),0,n*.4,0);return t.add(w(n*1.01,.06,.15,R("#E8D8A8"),0,n*.4,0)),t}function vu(){let n=new at;n.add(w(.04,1.4,.04,R("#E8667F"),0,.7,0));let t=new z(new de(.28,16,12),new Ct({color:"#FF8AA8",emissive:"#FF6A90",emissiveIntensity:.5}));t.scale.set(1.3,.8,.8),t.position.y=1.5,n.add(t);let e=new z(new nn(.18,.04,8,16,Math.PI*1.2),R("#FF8AA8"));e.position.set(.25,1.75,0),n.add(e);let i=$t("#FF9AB8",1.2,.4);return i.position.y=1.5,n.add(i),n}function Au(n=.9,t=1.2){let e=It(360,480,r=>{r.fillStyle="#BFE0F2",r.fillRect(0,0,360,480),r.fillStyle="#FFFFFF",r.beginPath(),r.ellipse(180,270,95,55,0,0,7),r.fill(),r.beginPath(),r.ellipse(270,200,30,50,.5,0,7),r.fill();for(let o of[120,150,210,240])r.fillRect(o,300,16,100);r.fillStyle="#F2C1E0",r.beginPath(),r.moveTo(170,240),r.quadraticCurveTo(80,90,40,140),r.quadraticCurveTo(100,180,170,260),r.fill(),r.fillStyle="#E9B44C",r.beginPath(),r.moveTo(280,160),r.lineTo(300,100),r.lineTo(295,165),r.fill(),r.fillStyle="#7F6BC4",r.font="700 46px Caveat",r.textAlign="center",r.fillText("\xA1VUELA ALTO!",180,455)}),i=new at;i.add(w(n+.08,t+.08,.04,"#2A1E18",0,0,0));let s=new z(new Mt(n,t),R("#fff"));return s.material.map=e,s.position.z=.025,i.add(s),i}function Mu(n=.9,t=1.2){let e=It(360,480,r=>{r.fillStyle="#1E1A30",r.fillRect(0,0,360,480),r.fillStyle="#E8667F",r.beginPath(),r.arc(180,210,120,0,7),r.fill(),r.fillStyle="#1E1A30",r.beginPath(),r.arc(180,210,40,0,7),r.fill(),r.fillStyle="#F2C14E",r.font="900 60px Fraunces",r.textAlign="center",r.fillText("LOS GRILLOS",180,420)}),i=new at;i.add(w(n+.08,t+.08,.04,"#111",0,0,0));let s=new z(new Mt(n,t),R("#fff"));return s.material.map=e,s.position.z=.025,i.add(s),i}var P2=(n,t)=>{ft.quarto(n,t);let e=Au();e.position.set(-3,2.8,-2.8),n.add(e)};ft.cuartoYo=(n,t)=>{P2(n,t);let e=la({w:18,h:9,col:t.night?"#7A6A88":"#E8C8A0",win:[1,2.2,1.7,1.6],night:!!t.night,lit:t.lit??!!t.night,inner:"#F2C8D0"});e.position.set(0,-.2,-6.2),n.add(e),n.userData.her=e;let i=vu();i.position.set(-.4,.4,-8.6),i.scale.setScalar(.9),n.add(i);let s=Mu(.7,.9);s.position.set(1.9,2.6,-9.2),n.add(s),t.night&&rn(n,600,120,2)};ft.cuartoElla=(n,t)=>{ft.sala(n,{wall:"#6E5A9A",night:t.night}),n.add(w(2.4,.45,3.2,R("#6B4A33"),1.7,.25,-1.4)),n.add(w(2.3,.3,3,R("#F3EEE4"),1.7,.6,-1.4)),n.add(w(2.38,.22,2,R("#E8667F",{roughness:.9}),1.7,.8,-.7));let e=vu();e.position.set(-3.2,0,-2.2),n.add(e);let i=Mu();i.position.set(-3.6,2.8,-2.8),n.add(i);let s=la({w:18,h:9,col:t.night?"#6A5A50":"#D8B890",win:[-1,2.2,1.7,1.6],night:!!t.night,lit:t.lit??!!t.night,inner:"#C8D8E8"});s.position.set(0,-.2,-6.2),n.add(s),n.userData.me=s;let r=Au(.6,.8);r.position.set(-2.2,2.6,-9.2),n.add(r),t.night&&rn(n,600,120,2)};ft.entreCasas=(n,t)=>{let e=!!t.night;n.background=new ot(e?"#0A0C1E":"#9FC8E8"),n.fog=new St(e?"#0E1028":"#CFE0EE",.02),se(n,-60,300,140,e?[[0,"#05060E"],[.6,"#141838"],[1,"#2A2A50"]]:[[0,"#6FA7D8"],[.6,"#CFE0E8"],[1,"#FFE7BE"]]),e&&rn(n,1600,120,5),Qc(n,e?"#24301E":"#6E9A50");let i=la({w:9,h:8,col:e?"#6A5A50":"#D8B890",win:[0,4.2,1.7,1.8],night:e,lit:e,inner:"#C8D8E8"});i.position.set(-2.3,0,-1),i.rotation.y=.62,n.add(i);let s=la({w:9,h:8,col:e?"#7A6A88":"#E8C8A0",win:[0,4.2,1.7,1.8],night:e,lit:e,inner:"#F2C8D0"});s.position.set(2.3,0,-1),s.rotation.y=-.62,n.add(s),n.userData.me=i,n.userData.her=s;let r=yu(10);r.rotation.y=Math.PI/2,r.position.set(0,0,2),n.add(r),n.add(new At(e?"#6E74C0":"#E9EEFF",e?"#1A1A24":"#6A5A4A",e?.55:1)),n.add(Xt(e?"#9FB0FF":"#FFD29A",e?.5:2.6,[6,14,10],14,40))};ft.barrio=(n,t)=>{let e=!!t.night,i=!!t.dusk;n.fog=new St(e?"#1A1A30":i?"#E8A880":"#F2E2C8",.012),se(n,-120,500,200,e?[[0,"#05060E"],[.6,"#141838"],[1,"#2A2A50"]]:i?[[0,"#3A3A78"],[.5,"#B86A88"],[.8,"#F29A6A"],[1,"#FFC88A"]]:[[0,"#6FA7D8"],[.6,"#CFE0E8"],[1,"#FFE7BE"]]),Qc(n,e?"#24301E":"#6E9A50");let s=w(200,.02,6,R(e?"#2A2A30":"#55545C",{roughness:.9}),0,.01,4);s.receiveShadow=!0,n.add(s);let r=w(200,.1,2,R("#B8AC9D"),0,.05,.2);r.receiveShadow=!0,n.add(r);let o=[[-13.5,"#C8D8B0","#5A6E8A"],[-4.5,"#D8B890","#A8442E"],[4.5,"#E8C8A0","#7A4A8A"],[13.5,"#B8D0E0","#A8442E"],[22.5,"#E8D8A8","#5A6E8A"],[-22.5,"#E0B8B0","#3E6A5A"]];for(let[h,d,u]of o){let p=Pr({col:d,roof:u,night:e});p.position.set(h,0,-3),n.add(p)}let a=Kc(3);a.position.set(-7.6,0,-1.4),n.add(a);let l=Kc(3);l.position.set(-1.4,0,-1.4),n.add(l);let c=Kc(3);c.position.set(7.6,0,-1.4),n.add(c);for(let h of[-9,0,9,18])De(n,h,-11,1.4,["#2E4F2C","#3B6636","#55813F","#A9B65A"],Math.abs(h));Nn(n,-60,300,16,["#B8C8D8","#A8B8C8","#98A8B8"],e,9),n.add(new At(e?"#6E74C0":"#E9EEFF","#6A5A4A",e?.6:1.05)),n.add(Xt(e?"#9FB0FF":i?"#FFB080":"#FFD29A",e?.6:2.8,[-14,16,12],24,70))};ft.jardin=(n,t)=>{let e=!!t.dusk;n.fog=new St(e?"#E8A880":"#F2E2C8",.015),se(n,-100,400,200,e?[[0,"#3A3A78"],[.5,"#B86A88"],[.8,"#F29A6A"],[1,"#FFC88A"]]:[[0,"#6FA7D8"],[.6,"#CFE0E8"],[1,"#FFE7BE"]]),Qc(n,"#6E9A50");let i=yu(16);i.rotation.y=Math.PI/2,i.position.set(0,0,-2),n.add(i);let s=ca();s.position.set(1.6,0,-1.2),n.add(s);let r=ca();r.position.set(2.8,0,-2.6),n.add(r);let o=F2();o.position.set(-2.4,0,-3.2),n.add(o);let a=Pr({col:"#D8B890",roof:"#A8442E"});a.position.set(-5,0,-9),a.rotation.y=0,n.add(a);let l=Pr({col:"#E8C8A0",roof:"#7A4A8A"});l.position.set(5,0,-9),n.add(l);for(let c of[-12,12])De(n,c,-8,1.3,["#2E4F2C","#3B6636","#55813F","#A9B65A"],Math.abs(c));n.add(new At("#E9EEFF","#6A5A4A",1.05)),n.add(Xt(e?"#FFB080":"#FFD29A",2.8,[-10,14,10],14,50)),n.userData.caseta=o};ft.esquina=(n,t)=>{ft.barrio(n,t)};ft.concurso=n=>{n.background=new ot("#140C24"),n.fog=new St("#1A1030",.03);let t=w(20,.2,12,R("#2A1E48",{metalness:.3,roughness:.4}),0,-.1,-2);t.receiveShadow=!0,n.add(t);for(let r=0;r<9;r++){let o=$t(["#FF5A9A","#5AC8FF","#F2C14E"][r%3],1,.9);o.position.set(-6+r*1.5,5,-6),n.add(o)}let e=zt(Ae(["\xBFQUI\xC9N SABE M\xC1S?"],{bg:"#3A1E6A",fg:"#F2C14E",size:90,w:1024,h:180}),6,1.05);e.position.set(0,4,-5.8),n.add(e);let i=w(1.2,1.1,.7,R("#C9361F",{metalness:.3}),0,.55,-.6);n.add(i),n.add(w(1.3,.1,.8,R("#F2C14E"),0,1.12,-.6)),n.add(new At("#B8A8FF","#2A1A3A",.9));let s=new pn("#FFF2D8",60,20,.5,.5,1.2);s.position.set(0,8,4),s.target.position.set(0,1,-.6),s.castShadow=!0,n.add(s,s.target)};ft.residencia=n=>{n.fog=new St("#E8DCC8",.02),n.add(On(20,14,"#8A6A4A")),n.add(w(20,4,.3,R("#E8DCC0"),0,2,-3.4));for(let t=0;t<8;t++){n.add(w(1,2.2,.08,R("#6B4A33"),-7+t*2,1.1,-3.2));let e=zt(Ae([String(t+1)],{bg:"#F2C14E",fg:"#2A2A34",size:90,w:160,h:140}),.4,.35);e.position.set(-7+t*2,2.5,-3.15),n.add(e)}n.add(new At("#FFFFFF","#9A8A70",1)),n.add(Xt("#FFE8C8",2,[-6,8,6],12,40))};var da=(n,t,e=200,i=200)=>{let s=new z(new Mt(e,i),R(t,{roughness:1}));return s.rotation.x=-Math.PI/2,s.receiveShadow=!0,n.add(s),s},ha=["#2E4F2C","#3B6636","#55813F","#A9B65A"],Su=["#0E1A16","#13221C","#1A2C22","#22382A"],ua=(n,t=-60,e="#7A8AA8",i="#F4F6FA",s=4,r=9)=>{let o=Rt(s);for(let a=0;a<r;a++){let l=14+o()*16,c=12+o()*10,h=new z(new qe(c,l,7),R(e,{roughness:1}));if(h.position.set(-70+a*17+o()*6,l/2-1,t-o()*25),n.add(h),i){let d=new z(new qe(c*.34,l*.34,7),R(i,{roughness:1}));d.position.set(h.position.x,l-l*.17-1,h.position.z),n.add(d)}}},jc=(n,t,e,i,s,r="#4A8AB0",o=!1)=>{let a=new z(new en(1,48),new Ct({color:r,roughness:.08,metalness:.35,emissive:o?"#0A1A30":"#000",emissiveIntensity:o?.6:0}));return a.rotation.x=-Math.PI/2,a.scale.set(i,s,1),a.position.set(t,.02,e),a.receiveShadow=!0,n.add(a),a};ft.albergue=(n,t)=>{let e=!!t.dusk;n.fog=new St(e?"#E8B090":"#D8E4E8",.012),se(n,-200,700,260,e?[[0,"#3A3A78"],[.5,"#B86A88"],[.8,"#F29A6A"],[1,"#FFC88A"]]:[[0,"#4F8AC8"],[.6,"#BFD8EC"],[1,"#EEF4F0"]]),ua(n,-70,e?"#6A5A88":"#7A8EAE"),da(n,"#6E9A48");let i=Pr({col:"#9A6A44",roof:"#5A3A2A",w:9,h:4.2,d:6,door:"#4A2E1E"});i.position.set(-3.5,0,-7),n.add(i);let s=zt(Ae(["ALBERGUE LOS PINOS"],{bg:"#4A2E1E",fg:"#F2C14E",size:70,w:900,h:150}),3.2,.54);s.position.set(-3.5,3.4,-6.9),n.add(s),jc(n,6,-9,6,3.2);let r=Rt(31);for(let o=0;o<22;o++){let a=(r()-.5)*40;Math.abs(a+3.5)<6&&o<14||De(n,a,-10-r()*16,1.3+r()*.7,ha,o)}for(let[o,a]of[[-9,-3],[9,-4],[-11,-6]])De(n,o,a,1.4,ha,o|0);n.add(new At("#E9EEFF","#5A6A4A",1)),n.add(Xt(e?"#FFB080":"#FFE2B0",e?2.2:2.8,[-10,16,10],16,70))};ft.gymkana=(n,t)=>{n.fog=new St("#D8E4E8",.012),se(n,-200,700,260,[[0,"#4F8AC8"],[.6,"#BFD8EC"],[1,"#EEF4F0"]]),ua(n,-70),da(n,"#7AA850"),jc(n,0,-9,9,3.4);let e=Rt(7);for(let s=0;s<18;s++)De(n,(e()-.5)*44,-14-e()*14,1.3+e()*.6,ha,s);let i=new z(new en(1,32),R("#6A4A2E",{roughness:.4}));i.rotation.x=-Math.PI/2,i.scale.set(1.6,1,1),i.position.set(1.2,.015,-1.2),n.add(i);for(let s of[-3,3]){let r=new z(new qe(.18,.45,12),R("#F2A766"));r.position.set(s,.22,.8),n.add(r)}n.add(new At("#E9EEFF","#5A6A4A",1)),n.add(Xt("#FFE2B0",2.8,[-10,16,10],16,70))};ft.lagoNoche=(n,t)=>{n.background=new ot("#05071A"),n.fog=new St("#0A0E24",.02),rn(n,4200,200,11),se(n,-150,600,220,[[0,"#03040E"],[.6,"#0E1434"],[1,"#22284A"]]),ua(n,-80,"#141A30","#3A4460",6),da(n,"#1E2A20"),jc(n,0,-8,12,4,"#1A2A48",!0);let e=Rt(17);for(let r=0;r<24;r++){let o=(e()-.5)*40;De(n,o,-14-e()*14,1.3+e()*.6,Su,r)}for(let[r,o]of[[-6,-2],[6.5,-3],[-8,-5]])De(n,r,o,1.3,Su,r*3|0);let i=$t("#F4F0D8",5,.9);i.position.set(14,22,-90),i.material.fog=!1,n.add(i),n.add(new At("#6A78C8","#10141E",.55));let s=new Zn("#9AA8E8",.6);s.position.set(8,12,-6),n.add(s)};ft.cima=(n,t)=>{n.fog=new St("#E4EEF4",.006),se(n,-200,900,300,[[0,"#2F6AB8"],[.55,"#8EC0E8"],[1,"#F4F8FA"]]);let e=new z(new Mt(800,800),R("#F6F8FA",{roughness:1}));e.rotation.x=-Math.PI/2,e.position.y=-14,n.add(e);let i=Rt(9);for(let l=0;l<40;l++){let c=$t("#FFFFFF",18+i()*14,.55);c.position.set((i()-.5)*300,-12+i()*3,-40-i()*200),n.add(c)}for(let l=0;l<6;l++){let c=10+i()*8,h=new z(new qe(8+i()*6,c,6),R("#8A8EA0"));h.position.set(-60+l*24,-14+c/2,-90-i()*40),n.add(h);let d=new z(new qe(3,c*.3,6),R("#F4F6FA"));d.position.set(h.position.x,-14+c*.85,h.position.z),n.add(d)}let s=new z(new Zt(4.5,9,14,9),R("#8A8070",{roughness:1}));s.position.set(0,-7,-1),n.add(s);let r=new z(new en(4.6,9),R("#9A9070",{roughness:1}));r.rotation.x=-Math.PI/2,r.position.set(0,.01,-1),n.add(r);for(let l=0;l<10;l++){let c=new z(new fi(.3+i()*.4),R("#7A7262")),h=i()*6.28;c.position.set(Math.cos(h)*(3+i()),.1,-1+Math.sin(h)*(2.5+i())),!(c.position.z>1.2)&&n.add(c)}n.add(w(.5,1,.5,R("#C8C0A8"),-2.6,.5,-2.6));let o=w(.06,.9,.06,R("#3A3A40"),-2.6,1.45,-2.6);n.add(o),n.add(w(.5,.06,.06,R("#3A3A40"),-2.6,1.6,-2.6));let a=zt(Ae(["PICO \xB7 2.130 m"],{bg:"#FBF7EC",fg:"#2A2A34",size:70,w:600,h:150}),1,.25);a.position.set(-2.6,.75,-2.34),n.add(a),n.add(new At("#EEF4FF","#8A8070",1.05)),n.add(Xt("#FFF0D0",3,[-8,18,10],12,60))};ft.sendero=(n,t)=>{n.fog=new St("#C8D8C8",.02),se(n,-200,700,260,[[0,"#5F96C8"],[.6,"#BFD4E0"],[1,"#EEF0E4"]]),ua(n,-60,"#7A8EAE"),da(n,"#6E8A48");let e=new z(new Mt(2.2,60),R("#B49A72",{roughness:1}));e.rotation.x=-Math.PI/2,e.position.set(0,.012,-20),n.add(e);let i=Rt(23);for(let s=0;s<30;s++){let r=i()<.5?-1:1;De(n,r*(2.6+i()*12),2-i()*30,1.2+i()*.7,ha,s)}for(let s=0;s<8;s++){let r=new z(new fi(.2+i()*.3),R("#8A8070"));r.position.set((i()<.5?-1:1)*(1.3+i()),.1,-i()*10),n.add(r)}n.add(new At("#E9EEFF","#5A6A4A",1)),n.add(Xt("#FFE2B0",2.6,[-10,16,10],16,70))};ft.comedor=(n,t)=>{n.background=new ot("#0E0A1E"),n.fog=new St("#140E2A",.03),n.add(On(20,14,"#6A4A30")),n.add(w(20,5,.3,R("#5A3A2A"),0,2.5,-4.2));for(let a of[-1,1])n.add(w(.3,5,14,R("#5A3A2A"),a*8,2.5,0));for(let a=0;a<9;a++)n.add(w(.12,5,.1,R("#3A2418"),-8+a*2,2.5,-4));let e=zt(Ae(["FIESTA FIN DE CURSO"],{bg:"#E8447A",fg:"#FFFFFF",size:80,w:1100,h:170}),4,.62);e.position.set(0,3.6,-4),n.add(e);for(let a of[-5.2,5.2]){n.add(w(1,.08,4,R("#8E6242"),a,.78,-1.2));for(let[l,c]of[[-1,-2.8],[1,-2.8],[-1,.4],[1,.4]])n.add(w(.06,.78,.06,R("#3A2418"),a+l*.4,.39,c))}let i=[];for(let a=0;a<26;a++){let l=-7+a*.56,c=$t(["#FF6A9A","#6AD8FF","#FFD84A","#9AFF8A"][a%4],.35,.9);c.position.set(l,3-Math.sin(a/25*Math.PI)*.5,-3.8),n.add(c),i.push(c)}let s=new z(new en(2.8,48),new Ct({color:"#2A2240",roughness:.2,metalness:.4,emissive:"#4A2A7A",emissiveIntensity:.35}));s.rotation.x=-Math.PI/2,s.position.set(0,.015,-.8),n.add(s);let r=[];for(let[a,l]of[["#FF3A8A",-3],["#3AB8FF",0],["#FFD83A",3]]){let c=new Jt(a,10,9,1.4);c.position.set(l,3.2,0),n.add(c),r.push(c)}n.add(new At("#8A7AC8","#20142A",.55));let o=new pn("#FFE8F0",30,14,.6,.6,1.2);o.position.set(0,6,3),o.target.position.set(0,0,-.8),o.castShadow=!0,n.add(o,o.target),n.userData.disco=a=>{r.forEach((l,c)=>{l.position.x=Math.sin(a*.9+c*2.1)*3.5,l.intensity=8+Math.sin(a*5+c)*3}),i.forEach((l,c)=>l.material.opacity=.55+.45*Math.sin(a*4+c))}};ft.salida=(n,t)=>{let e=!!t.dusk,i=!!t.manana;ft.barrio(n,{dusk:e});let s=gu("#F2C14E");s.rotation.y=Math.PI/2,s.position.set(1,0,-3.4),n.add(s);let r=zt(Ae(["VIAJE FIN DE CURSO"],{bg:"#2F5A9A",fg:"#FFFFFF",size:70,w:900,h:140}),2.6,.4);if(r.position.set(1,2.3,-2.18),n.add(r),i){let o=new Zn("#FFD0A0",.8);o.position.set(10,3,6),n.add(o)}};var Dr=(n,t,e=200,i=200,s={})=>{let r=new z(new Mt(e,i),R(t,{roughness:1,...s}));return r.rotation.x=-Math.PI/2,r.receiveShadow=!0,n.add(r),r},Ir=(n,t=1.6)=>new Ct({color:n,emissive:n,emissiveIntensity:t});function Tu(n=2.6){let t=new at,e=It(1024,300,s=>{s.clearRect(0,0,1024,300),s.fillStyle="#E2231A",s.beginPath(),s.roundRect(10,30,780,240,60),s.fill(),s.fillStyle="#fff",s.font="900 112px Inter",s.textAlign="center",s.textBaseline="middle",s.fillText("SUSCR\xCDBETE",400,156),s.fillStyle="#F2C14E",s.beginPath(),s.arc(910,150,100,0,7),s.fill(),s.fillStyle="#2A2A34",s.beginPath(),s.moveTo(860,190),s.quadraticCurveTo(870,80,910,78),s.quadraticCurveTo(950,80,960,190),s.closePath(),s.fill(),s.fillRect(850,186,120,16),s.beginPath(),s.arc(910,214,14,0,7),s.fill(),s.beginPath(),s.arc(910,70,10,0,7),s.fill()}),i=zt(e,n,n*300/1024,{blend:!0});return i.renderOrder=6,t.add(i),t.userData.m=i,t}function I2(n="#FFB25A"){let t=new at,e=new z(new Zt(.16,.12,.34,12),Ir(n,1.8));t.add(e);let i=$t(n,1,.55);return t.add(i),t}var D2=(n,t,e,i=3)=>{let s=Rt(i),r=["#F2A8C8","#FBF7EC","#F2C14E","#B48AE8","#E8667F"];for(let o=0;o<t;o++){let a=new z(new de(.07+s()*.06,10,8),Ir(r[o%5],.4));a.position.set((s()-.5)*e[0],.06,e[2]-s()*e[1]),n.add(a);let l=w(.02,.12,.02,R("#3E8A52"),a.position.x,.02,a.position.z,!1);n.add(l)}};ft.desvan=(n,t)=>{let e=!!t.night;n.background=new ot("#1A120C"),n.fog=new St("#2A1C12",.05),n.add(On(16,14,"#6A4630"));for(let h of[-1,1]){let d=w(16,.15,7.5,R("#5A3A26",{roughness:.9}),0,0,0);d.position.set(0,3.3,-1.2+h*2.3),d.rotation.x=h*-.62,d.position.y=3.2,d.position.z=h>0?2.4:-4.4,d.rotation.x=h>0?.62:-.62,h<0&&n.add(d)}n.add(w(16,6,.2,R("#4E3422",{roughness:1}),0,2.5,-4.6));for(let h=0;h<6;h++){let d=w(.22,.22,9,R("#3A2618"),-6+h*2.4,4.4,-1);n.add(d)}let i=Rt(6);for(let h=0;h<9;h++){let d=_u(.5+i()*.5);d.position.set(-5+i()*10,0,-3.6+i()*1.2),d.rotation.y=i(),Math.abs(d.position.x)>1.4&&n.add(d)}let s=w(1.4,.8,.7,R("#6A3A22",{roughness:.7}),-3.2,.4,-2.2);n.add(s),n.add(w(1.44,.1,.74,R("#C9A06A",{metalness:.4}),-3.2,.55,-2.2));let r=xe(.9,.9,e?"#5A6AA8":"#FFE2A8",e?.6:1.6);r.position.set(2.6,2.9,-4.48),n.add(r);let o=rs(1.4,7,e?"#9FB0FF":"#FFD9A0",e?.08:.2);o.position.set(1.6,1.7,-2.6),o.rotation.set(-.2,0,-.75),n.add(o);let a=new z(new de(.09,12,10),Ir("#FFD089",2));a.position.set(0,3.1,-1.2),n.add(a),n.add(w(.01,1.2,.01,"#111",0,3.75,-1.2,!1));let l=new Jt("#FFB66E",9,9,1.4);l.position.set(0,3,-1),l.castShadow=!0,n.add(l),n.add(new At("#FFD8A8","#3A2418",.55));let c=[];for(let h=0;h<40;h++){let d=$t("#FFE8C0",.05,.6);d.position.set(.5+i()*2.4,.6+i()*2.6,-3+i()*2.6),n.add(d),c.push(d)}n.userData.dust=c};ft.pasillo=(n,t)=>{n.background=new ot("#1A1036"),n.fog=new St("#2A1850",.045),rn(n,1600,120,7),Dr(n,"#C8A8E8",8,120,{roughness:.9}).position.z=-40;let e=Rt(11),i=["#E8667F","#36AEA2","#F2C14E","#4A86C7","#7F6BC4","#F2913A","#5FB04A"];for(let u=0;u<26;u++)for(let p of[-1,1]){let g=-2-u*2.2,E=i[(u*2+(p>0?1:0))%i.length],m=w(.12,2.6,1.3,R("#F4ECD6"),p*2.4,1.3,g);n.add(m);let f=w(.08,2.3,1.05,R(E,{roughness:.6}),p*2.35,1.15,g);n.add(f);let v=new z(new de(.05,8,6),Ir("#F2C14E",.6));v.position.set(p*2.29,1.1,g+.35),n.add(v)}let s=new at,r=new at;r.position.set(0,0,.55),s.add(r);let o=w(.08,2.3,1.05,R("#F2A8C8",{roughness:.5}),0,1.15,-.525);r.add(o);let a=new z(new de(.05,8,6),Ir("#F2C14E",.8));a.position.set(-.06,1.1,-.9),r.add(a);let l=zt(Ae(["SARA"],{bg:"#FBF7EC",fg:"#C9361F",size:110,w:400,h:160}),.6,.24);l.position.set(-.06,1.85,-.525),l.rotation.y=-Math.PI/2,r.add(l);let c=xe(.04,2.3,"#FFF0C8",2.2);c.rotation.y=-Math.PI/2,c.position.set(.05,1.15,-.525),s.add(c),s.position.set(2.35,0,-8.6),n.add(s),n.userData.door=r,n.userData.doorPos=[2.35,0,-8.6];for(let u=0;u<14;u++){let p=$t(["#FFB2E0","#B2D8FF","#FFF2B0"][u%3],.25+e()*.3,.7);p.position.set((e()-.5)*4,.5+e()*3,-1-e()*30),n.add(p)}n.add(new At("#D8C8FF","#4A3070",1));let h=new Jt("#FFE0F0",14,14,1.4);h.position.set(0,3,-4),n.add(h);let d=new Jt("#B8C8FF",10,14,1.4);d.position.set(0,3,-12),n.add(d)};ft.playaSueno=(n,t)=>{n.fog=new St("#E8B8E0",.018),se(n,-120,600,240,[[0,"#6A4AB8"],[.45,"#C88AD8"],[.75,"#F6B8C8"],[1,"#FFE2D0"]]);let e=$t("#FFF6E0",16,.9);e.position.set(10,22,-110),e.material.fog=!1,n.add(e);let i=new z(new en(4,40),new jt({color:"#FFF6E8",fog:!1}));i.position.set(10,22,-112),n.add(i);let s=Dr(n,"#F8EEF2",200,200),r=new z(new Mt(400,200),new Ct({color:"#B48AE8",roughness:.12,metalness:.35,emissive:"#6A3AA8",emissiveIntensity:.25}));r.rotation.x=-Math.PI/2,r.position.set(0,.03,-104),n.add(r),n.userData.sea=r;let o=w(400,.02,.3,R("#FFFFFF",{roughness:.5}),0,.04,-4.1,!1);n.add(o),n.userData.foam=o;let a=Rt(4);for(let l=0;l<70;l++){let c=$t("#FFFFFF",.08+a()*.1,.8);c.position.set((a()-.5)*16,.05,2-a()*6),n.add(c)}for(let l=0;l<4;l++){let c=new at;c.add(w(.18,2.8,.18,R("#E8A0C0"),0,1.4,0));let h=$t(["#7FD08A","#F2C14E","#5AC8FF","#FF8AC8"][l],1.6,.8);h.position.y=3,c.add(h),c.position.set([-6,-3.6,4.5,7][l],0,[-2.6,-3.4,-3,-2][l]),n.add(c)}n.add(new At("#FFE0F6","#B88AC8",1.15)),n.add(Xt("#FFD8E8",2,[8,14,-6],14,60))};ft.baile=(n,t)=>{n.background=new ot("#0E0A28"),n.fog=new St("#1A1240",.03),rn(n,2400,160,3),se(n,-100,500,200,[[0,"#0A0820"],[.6,"#2A1A58"],[1,"#6A3A78"]]),Dr(n,"#3A2A5A");let e=new z(new en(3.2,48),new Ct({color:"#F4E8F8",roughness:.25,metalness:.2,emissive:"#8A6AB8",emissiveIntensity:.25}));e.rotation.x=-Math.PI/2,e.position.set(0,.02,-1),e.receiveShadow=!0,n.add(e),D2(n,260,[16,12,3]);for(let[a,l]of[[-4.2,-2.4],[4.2,-2.4],[-5.2,-5],[5.2,-5],[0,-6]]){let c=ca();c.position.set(a,0,l),n.add(c)}let i=Rt(9),s=[];for(let a=0;a<22;a++){let l=I2(["#FFB25A","#FF8A6A","#FFD27A"][a%3]);l.position.set((i()-.5)*12,2.6+i()*4,-1-i()*9),l.userData.y0=l.position.y,l.userData.ph=i()*6,n.add(l),s.push(l)}n.userData.farol=s,n.add(new At("#B8A8FF","#2A1A3A",.7));let r=new pn("#FFE2C8",50,20,.6,.6,1.2);r.position.set(0,8,3),r.target.position.set(0,0,-1),r.castShadow=!0,n.add(r,r.target);let o=new Jt("#FFB25A",8,12,1.5);o.position.set(0,3.5,-2),n.add(o)};ft.estadio=(n,t)=>{n.background=new ot("#0A1020"),n.fog=new St("#18203A",.02),rn(n,800,160,5);let e=It(512,512,h=>{for(let d=0;d<8;d++)h.fillStyle=d%2?"#3E8A3E":"#4A9A46",h.fillRect(0,d*64,512,64);h.strokeStyle="#F4F4F4",h.lineWidth=6,h.strokeRect(20,20,472,472),h.beginPath(),h.moveTo(20,256),h.lineTo(492,256),h.stroke(),h.beginPath(),h.arc(256,256,60,0,7),h.stroke()}),i=new z(new Mt(40,40),new Ct({map:e,roughness:.9}));i.rotation.x=-Math.PI/2,i.position.z=-14,i.receiveShadow=!0,n.add(i);let s=new at,r=R("#FFFFFF",{roughness:.4});s.add(w(.12,2.4,.12,r,-3.6,1.2,0),w(.12,2.4,.12,r,3.6,1.2,0),w(7.3,.12,.12,r,0,2.4,0));let o=new z(new Mt(7.2,2.4),new jt({color:"#FFFFFF",transparent:!0,opacity:.18,side:he}));o.position.set(0,1.2,-1),s.add(o),s.position.set(0,0,-7),n.add(s);for(let h=0;h<4;h++)n.add(w(60,1,2,R(["#2A3A6A","#3A2A5A","#2A3A6A","#3A2A5A"][h]),0,.5+h*1.1,-14-h*2));let a=[],l=Rt(2);for(let h=0;h<4;h++)for(let d=0;d<48;d++)a.push([-24+d+l()*.4,1+h*1.1,-14-h*2]);Xc(n,a,{h:1.3,tint:"#C8C8E8",raised:.7});for(let h of[-1,1]){let d=$t("#FFFFFF",6,.9);d.position.set(h*16,14,-20),n.add(d)}n.add(new At("#D8E0FF","#2A3A2A",1));let c=Xt("#FFFFFF",2.6,[6,16,8],14,60);n.add(c)};ft.concierto=(n,t)=>{n.background=new ot("#0C0820"),n.fog=new St("#140C2C",.025);let e=w(14,.6,6,R("#2A1E48",{metalness:.3,roughness:.4}),0,.3,-2.5);e.receiveShadow=!0,n.add(e),Dr(n,"#140E26").position.y=-.01;let i=xe(14,6,"#3A1E6A",.5);i.position.set(0,3.6,-5.5),n.add(i);let s=Rt(4);for(let l=0;l<9;l++){let c=$t(["#FF5A9A","#5AC8FF","#F2C14E"][l%3],1.2,.9);c.position.set(-6+l*1.5,6,-5),n.add(c);let h=rs(1.2,8,["#FF5A9A","#5AC8FF","#F2C14E"][l%3],.1);h.position.set(-6+l*1.5,3,-4.5),h.rotation.z=(l-4)*.08,n.add(h)}let r=new at;r.add(w(.03,1.4,.03,R("#2A2A30",{metalness:.6}),0,.7+.6,0));let o=new z(new de(.06,12,10),R("#888",{metalness:.8}));o.position.y=2.05,r.add(o),r.position.set(.5,0,-.6),n.add(r);for(let l=0;l<40;l++){let c=$t(["#FFF2C0","#B8E0FF","#FFB2E0"][l%3],.18,.8);c.position.set(-7+s()*14,1.2+s()*1.2,2.5+s()*3),n.add(c)}n.add(new At("#B8A8FF","#2A1A3A",.8));let a=new pn("#FFF2D8",70,22,.45,.5,1.2);a.position.set(0,9,4),a.target.position.set(0,.6,-.6),a.castShadow=!0,n.add(a,a.target)};ft.gris=(n,t)=>{n.background=new ot("#1C1E24"),n.fog=new St("#262830",.06),Dr(n,"#4A4C54"),n.add(w(14,7,.2,R("#5A5C64",{roughness:1}),0,3.5,-4)),n.add(w(.2,7,12,R("#52545C",{roughness:1}),-4.2,3.5,0)),n.add(w(.2,7,12,R("#52545C",{roughness:1}),4.2,3.5,0));let e=xe(1.2,1.4,"#8A94A8",.35);e.position.set(1.8,2.8,-3.88),n.add(e);for(let r of[1.8])n.add(w(.06,1.4,.05,"#3A3C44",r,2.8,-3.86)),n.add(w(1.2,.06,.05,"#3A3C44",r,2.8,-3.86));n.add(new At("#A8B0C8","#2A2A30",.6));let i=new pn("#C8D0E8",28,14,.5,.7,1.3);i.position.set(-1.4,6,1),i.target.position.set(-2.6,0,-2.8),i.castShadow=!0,n.add(i,i.target);let s=new Jt("#FFD8A0",0,10,1.2);s.position.set(-2,2.4,-1.4),n.add(s),n.userData.warm=s};ft.labSueno=(n,t)=>{ft.lab(n,t),fu(n,-1.4,-1.6,"#4A86C7");let e=new at;e.add(w(.12,1.4,.12,R("#3A3A44"),0,.7,0)),e.add(w(1,.7,.1,R("#20242E"),0,1.7,0));let i=xe(.9,.6,"#7FD08A",.6);i.position.set(0,1.7,.06),e.add(i),e.position.set(1,0,-2.4),e.rotation.y=-.4,n.add(e),n.userData.mon=i};var fa=(n,t,e=200,i=200,s={})=>{let r=new z(new Mt(e,i),R(t,{roughness:1,...s}));return r.rotation.x=-Math.PI/2,r.receiveShadow=!0,n.add(r),r},bu=(n,t=1.6)=>new Ct({color:n,emissive:n,emissiveIntensity:t}),L2=(n="#8C8A84",t=3)=>{let e=It(512,512,i=>{i.fillStyle=n,i.fillRect(0,0,512,512);let s=Rt(t);for(let r=0;r<900;r++)i.fillStyle=`rgba(${s()<.5?"255,255,255":"0,0,0"},${s()*.07})`,i.fillRect(s()*512,s()*512,2+s()*6,2+s()*6);i.strokeStyle="rgba(0,0,0,.18)",i.lineWidth=3;for(let r=128;r<512;r+=128)i.beginPath(),i.moveTo(0,r),i.lineTo(512,r),i.stroke();for(let r=0;r<5;r++){i.strokeStyle="rgba(40,30,20,.12)",i.lineWidth=8,i.beginPath();let o=s()*512;i.moveTo(o,0),i.lineTo(o+(s()-.5)*30,140+s()*300),i.stroke()}});return e.wrapS=e.wrapT=$e,e},os=(n,t,e,i,s,r,o,a=3)=>{let l=L2(o);l.repeat.set(Math.max(1,Math.max(n,e)/a),Math.max(1,t/a));let c=new z(new fn(n,t,e),new Ct({map:l,roughness:.95}));return c.position.set(i,s,r),c.receiveShadow=!0,c.castShadow=!0,c};function U2(n="#B8B4A8"){let t=new at,e=new z(new Zt(.09,.09,.22,18),R(n,{metalness:.6,roughness:.35}));e.position.y=.11,e.castShadow=!0,t.add(e);let i=new z(new Zt(.092,.092,.12,18,1,!0),new Ct({map:It(256,64,s=>{s.fillStyle="#7A8A3A",s.fillRect(0,0,256,64),s.fillStyle="#F4E8C8",s.font="800 30px Inter",s.textAlign="center",s.fillText("JUD\xCDAS \xB7 1987",128,44)}),roughness:.7}));return i.position.y=.11,t.add(i),t}function H2(){let n=new at;n.add(w(1,.8,.6,R("#4A6A4A",{roughness:.6,metalness:.3}),0,.4,0)),n.add(w(.3,.3,.02,R("#222"),-.25,.5,.31));let t=new z(new de(.04,10,8),bu("#5AE05A",2.5));t.position.set(.3,.62,.31),n.add(t);for(let e=0;e<5;e++)n.add(w(.02,.4,.02,R("#2A3A2A"),.05+e*.06,.4,.31));return n.userData.led=t,n}function B2(){let n=new at;n.add(w(.36,.5,.08,R("#3A3C3A",{metalness:.5}),0,0,0));let t=new at;t.position.set(0,0,.06),n.add(t);let e=w(.05,.4,.05,R("#9A9A9A",{metalness:.8,roughness:.3}),0,.2,0);t.add(e);let i=new z(new de(.07,14,10),R("#D8251A",{roughness:.3}));return i.position.y=.42,t.add(i),t.rotation.x=-.5,n.userData.piv=t,n.userData.knob=i,n}function N2(){let n=new at;n.add(w(8,2.4,2.5,R("#F2B830",{roughness:.5}),0,1.6,0)),n.add(w(8.02,.25,2.52,R("#2A2A2A"),0,.9,0));for(let e=0;e<7;e++)for(let i of[-1,1])n.add(w(.85,.7,.02,R("#9AC8E8",{metalness:.4,roughness:.15}),-3.3+e*1.05,2.1,i*1.26));for(let e of[-2.6,2.6])for(let i of[-1,1]){let s=new z(new Zt(.45,.45,.3,16),R("#1A1A1A"));s.rotation.x=Math.PI/2,s.position.set(e,.45,i*1.2),n.add(s)}let t=$t("#FFF2C0",.5,.9);return t.position.set(4.02,1.1,.8),n.add(t),n}function wu(n,t,e={}){let i=Ae(n,{bg:"#3A4A2A",fg:"#F4E8C8",size:90,w:1100,h:260,...e});return zt(i,t,t*(e.h||260)/(e.w||1100))}ft.bunker=(n,t)=>{let e=!!t.dark,i=!!t.open;n.background=new ot("#0E0F10"),n.fog=new St(e?"#050608":"#2A2A28",e?.08:.045);let s=os(12,.2,10,0,-.1,-.5,"#6E6C66",2.5);n.add(s),n.add(os(12,4,.3,0,2,-3.55,"#8C8A84")),n.add(os(.3,4,10,-4.2,2,-.5,"#84827C")),n.add(os(.3,4,10,4.2,2,-.5,"#84827C")),n.add(os(12,.3,10,0,3.6,-.5,"#7A7872"));for(let b of[-2.4,0,2.4])n.add(w(.25,.3,10,R("#6A6862"),b,3.35,-.5));let r=new at;r.add(w(2,.2,.3,R("#5A5E5A",{metalness:.6,roughness:.4}),0,2.5,0),w(.2,2.6,.3,R("#5A5E5A",{metalness:.6,roughness:.4}),-.95,1.25,0),w(.2,2.6,.3,R("#5A5E5A",{metalness:.6,roughness:.4}),.95,1.25,0)),r.position.set(0,0,-3.36),n.add(r);let o=new at;o.position.set(-.85,0,-3.3),n.add(o);let a=R("#6E7670",{metalness:.7,roughness:.35}),l=w(1.7,2.4,.16,a,.85,1.2,0);o.add(l);for(let b of[.5,1.9])o.add(w(1.6,.08,.04,R("#5A605C",{metalness:.7}),.85,b,.1));let c=new z(new nn(.26,.035,8,28),R("#B8241A",{metalness:.4,roughness:.4}));c.position.set(.85,1.25,.14),o.add(c);for(let b=0;b<3;b++){let F=w(.5,.03,.03,R("#B8241A"),.85,1.25,.14);F.rotation.z=b*Math.PI/3,o.add(F)}o.rotation.y=i?-1.45:0,n.userData.door=o,n.userData.wheel=c;let h=B2();h.position.set(1.55,1.45,-3.36),n.add(h),n.userData.lever=h.userData.piv,n.userData.leverKnob=h.userData.knob;let d=zt(Ae(["\xA1NO TOCAR!"],{bg:"#F2C14E",fg:"#2A2A34",size:80,w:500,h:130}),.5,.13);d.position.set(1.55,1.82,-3.38),n.add(d);let u=b=>{let F=new at,S=R("#4A5450",{metalness:.6,roughness:.4});for(let A of[-.45,.45])for(let P of[-1,1])F.add(w(.06,2.3,.06,S,A,1.15,P));for(let A of[.45,1.6])F.add(w(.96,.06,2.1,S,0,A,0)),F.add(w(.86,.14,1.96,R("#7A8A6A",{roughness:1}),0,A+.1,0)),F.add(w(.5,.1,.3,R("#D8D2C0"),0,A+.21,-.8));return F.position.set(b,0,-1.1),F};n.add(u(-3.3)),n.add(u(3.3));let p=new at;for(let b of[.9,1.5])p.add(w(1.4,.05,.35,R("#5A4A3A"),0,b,0));for(let b of[-.7,.7])p.add(w(.05,1.6,.35,R("#5A4A3A"),b,.8,0));p.position.set(-2,0,-3.2),n.add(p);let g=[];for(let b=0;b<6;b++){let F=U2();F.position.set(-2.5+b%3*.26,b<3?.93:1.53,-3.2),p.parent.add(F),g.push(F)}n.userData.cans=g;let E=H2();E.position.set(2.6,0,-3),n.add(E),n.userData.gen=E.userData.led;let m=new at;m.add(w(.06,.7,.9,R("#3A3C3A",{metalness:.5}),0,0,0));for(let b=0;b<6;b++)m.add(w(.08,.04,.8,R("#5A5C5A",{metalness:.6}),.02,-.28+b*.11,0));if(m.position.set(-4.02,2.75,-1.1),n.add(m),t.mesa!==!1){n.add(w(1.4,.06,.8,R("#5A4632"),0,.75,.3));for(let b of[-.6,.6])for(let F of[-.32,.32])n.add(w(.05,.75,.05,R("#3A2E22"),b,.375,.3+F))}if(t.museo){let b=wu(["MUSEO DE LA GUERRA FR\xCDA"],2.4,{size:80});b.position.set(-2,2.6,-3.38),n.add(b)}let f=zt(It(360,480,b=>{b.fillStyle="#E8D8A0",b.fillRect(0,0,360,480),b.fillStyle="#7A2A1A",b.font="900 46px Fraunces",b.textAlign="center",b.fillText("REFUGIO",180,70),b.fillStyle="#3A3A2A",b.fillRect(80,140,200,140),b.fillStyle="#E8D8A0",b.beginPath(),b.moveTo(60,150),b.lineTo(180,90),b.lineTo(300,150),b.fill(),b.fillStyle="#7A2A1A",b.font="700 30px Inter",b.fillText("1962",180,340)}),.5,.66);f.position.set(2.6,2.3,-3.38),n.add(f);let v=[];for(let b of[-1.6,1.6]){let F=new z(new de(.09,12,10),bu("#FFD089",e?0:2.2));F.position.set(b,3.1,-.6),n.add(F),v.push(F),n.add(w(.22,.02,.22,R("#333"),b,3.2,-.6,!1))}let _=[];if(!e)for(let b of[-1.6,1.6]){let F=new Jt("#FFC27A",11,10,1.4);F.position.set(b,2.9,-.4),F.castShadow=b<0,n.add(F),_.push(F)}let y=new At(e?"#3A4A6A":"#E8DCC8",e?"#0A0A0E":"#3A3430",e?.12:.55);if(n.add(y),n.userData.lights=_,n.userData.bulbs=v,n.userData.hemi=y,i){let b=xe(1.7,2.4,"#FFF4D8",3.2);b.position.set(0,1.2,-3.5),n.add(b);let F=rs(2.2,8,"#FFE8B8",.3);F.position.set(0,1.4,-.6),F.rotation.set(-1.25,0,0),n.add(F);let S=new pn("#FFF0D0",60,14,.6,.6,1.2);S.position.set(0,2.2,-3.6),S.target.position.set(0,0,1.5),S.castShadow=!0,n.add(S,S.target),n.userData.sunObjs=[b,F,S]}let I=Rt(5),C=[];for(let b=0;b<26;b++){let F=$t("#FFE8C0",.04,e?.2:.5);F.position.set((I()-.5)*6,.5+I()*2.6,-3+I()*4),n.add(F),C.push(F)}n.userData.dust=C};ft.bosqueBunker=(n,t)=>{let e=!!t.storm;n.fog=new St(e?"#1A1E28":"#C8D0B8",e?.045:.022),se(n,-100,500,200,e?[[0,"#05070C"],[.6,"#1A2030"],[1,"#2A3040"]]:[[0,"#8AA8C0"],[.7,"#C8D4C8"],[1,"#E8E4C8"]]),fa(n,e?"#2A3A24":"#6E8A48");let i=Rt(14);for(let a=0;a<30;a++){let l=(i()-.5)*34,c=-3-i()*24;Math.abs(l)<4&&c>-9||De(n,l,c,1.2+i()*.8,e?["#1E2E1E","#24381F","#2E4628","#3A4A2A"]:["#3E5F3A","#4F7A44","#6E9A50","#A9B65A"],a)}let s=new z(new de(3.2,24,12,0,Math.PI*2,0,Math.PI/2),R(e?"#3A4A30":"#6E8A50",{roughness:1}));s.scale.set(1.3,.7,1),s.position.set(0,0,-6.5),n.add(s),n.add(os(3.2,2.6,.8,0,1.3,-4,"#8C8A84")),n.add(w(1.5,2,.1,R("#5E6660",{metalness:.6,roughness:.4}),0,1,-3.56));let r=wu(["MUSEO DE LA GUERRA FR\xCDA"],3,{size:84});r.position.set(0,2.95,-3.55),n.add(r);let o=N2();if(o.position.set(t.busX??6.5,0,-1.4),o.rotation.y=Math.PI,n.add(o),n.userData.bus=o,e){n.add(new At("#6A7A9A","#1A1E1A",.75));let a=new At("#DDE6FF","#5A6070",0);n.add(a),n.userData.flash=a;let l=Xt("#7A8AB8",.5,[-8,14,8],14,60);n.add(l);let c=[],h=new jt({color:"#AFC4E8",transparent:!0,opacity:.45});for(let d=0;d<260;d++){let u=new z(new fn(.012,.45,.012),h);u.userData.p=[(i()-.5)*16,i()*8,4-i()*14,i()],n.add(u),c.push(u)}n.userData.rain=d=>c.forEach(u=>{let[p,g,E,m]=u.userData.p;u.position.set(p+(d*1.2+m)%1*-.3,7-(g+d*14)%8,E),u.rotation.z=.12})}else n.add(new At("#E9EEFF","#5A6A4A",.95)),n.add(Xt("#FFD29A",2.6,[-12,16,10],16,70))};ft.puente=(n,t)=>{let e=!!t.normal;n.fog=new St("#C8D8E0",e?.02:.012),se(n,-200,700,260,[[0,"#5F96C8"],[.6,"#BFD4E0"],[1,"#EEF0E4"]]),n.add(new At("#E9EEFF","#5A6A4A",1)),n.add(Xt("#FFE2B0",2.6,[-10,18,12],16,80));let i=Rt(21),s=["#2E4F2C","#3B6636","#55813F","#A9B65A"];if(e){fa(n,"#6E8A48");let l=new z(new Mt(3.4,60),R("#5A8AB0",{roughness:.15,metalness:.3}));l.rotation.x=-Math.PI/2,l.position.set(0,.02,-10),n.add(l),n.add(w(1.4,.14,5,R("#8E6242"),0,.35,0));for(let c of[-1,1]){n.add(w(.08,.5,5,R("#6A4630"),c*.66,.65,0));for(let h=0;h<5;h++)n.add(w(.1,.6,.1,R("#6A4630"),c*.66,.3,-2+h))}for(let c=0;c<16;c++)De(n,(i()<.5?-1:1)*(4+i()*10),-2-i()*20,1.2+i()*.6,s,c);n.userData.y=.42;return}for(let l of[-1,1]){let c=os(20,40,30,l*16,-20,-6,"#8A7A62",6);n.add(c),fa(n,"#6E8A48",20,30).position.set(l*16,.01,-6);for(let d=0;d<8;d++)De(n,l*(8+i()*10),-4-i()*18,1.2+i()*.6,s,d+(l>0?9:0))}let r=new z(new Mt(14,200),new Ct({color:"#4A8AB0",roughness:.2,metalness:.3,emissive:"#1A3A50",emissiveIntensity:.3}));r.rotation.x=-Math.PI/2,r.position.set(0,-38,-40),n.add(r);for(let l=0;l<8;l++){let c=new z(new fi(1.5+i()*2),R("#7A6A52"));c.position.set((i()-.5)*10,-38,-10-i()*60),n.add(c)}let o=l=>-.55*(1-(l/6)**2);n.userData.sag=o;let a=R("#9A7448",{roughness:.9});for(let l=0;l<=40;l++){let c=-6+l*.3,h=w(.22,.05,1.1,a,c,o(c),0);h.rotation.z=Math.atan(.55*2*c/36),n.add(h)}for(let l of[-1,1]){let c=[];for(let d=0;d<=24;d++){let u=-6+d*.5;c.push(new D(u,o(u)+1,l*.55))}let h=new z(new Vs(new Ki(c),60,.025,6),R("#C8B088"));n.add(h);for(let d=0;d<=24;d+=2){let u=-6+d*.5;n.add(w(.015,1,.015,R("#C8B088"),u,o(u)+.5,l*.55))}for(let d of[-6.1,6.1])n.add(w(.18,1.6,.18,R("#6A4630"),d,.8,l*.55))}n.userData.y=0};ft.marte=(n,t)=>{n.background=new ot("#10141A"),n.fog=new St("#1A2028",.05);let e=new z(new Zt(2.4,2.4,30,28,1,!0),new Ct({color:"#C8CCD0",side:Ve,roughness:.6,metalness:.2}));e.rotation.x=Math.PI/2,e.position.set(0,1.9,-10),n.add(e),n.add(w(3.6,.1,30,R("#6A707A",{metalness:.4}),0,0,-10));for(let r=0;r<10;r++){let o=new z(new nn(2.38,.05,6,28),R("#8A9098",{metalness:.6}));o.position.set(0,1.9,2-r*3),n.add(o);let a=xe(1,.2,"#DDEEFF",1.6);a.rotation.x=Math.PI/2,a.position.set(0,4.2,1-r*3),n.add(a)}for(let r of[-1,1])for(let o=0;o<4;o++){n.add(w(.6,.5,1.8,R("#7A8A9A"),r*1.5,.45,-1-o*3)),n.add(w(.05,.6,.5,R("#2A3A4A"),r*1.75,1.6,-o*3));let a=xe(.5,.32,["#7FD08A","#5AC8FF"][o%2],.6);a.rotation.y=-r*Math.PI/2,a.position.set(r*1.72,1.6,-o*3),n.add(a)}let i=zt(Ae(["MARS-500 \xB7 MOSC\xDA"],{bg:"#2A3A6A",fg:"#FFFFFF",size:80,w:900,h:150}),2,.33);i.position.set(0,3,-6),n.add(i),n.add(new At("#E8F0FF","#4A505A",.9));let s=new Jt("#E8F0FF",12,12,1.4);s.position.set(0,3,0),n.add(s)};ft.biosfera=(n,t)=>{n.fog=new St("#F2D8B0",.012),se(n,-200,700,260,[[0,"#5F96C8"],[.6,"#F0C890"],[1,"#FFE2B8"]]),fa(n,"#D8B07A");let e=Rt(31);for(let l=0;l<8;l++){let c=new z(new qe(8+e()*8,6+e()*6,6),R("#C88A5A",{roughness:1}));c.position.set(-60+l*18,0,-70-e()*30),n.add(c)}for(let l=0;l<9;l++){let c=new at;c.add(w(.3,1.6+e(),.3,R("#4A8A4A"),0,.8,0)),c.position.set((e()-.5)*20,0,1-e()*6),Math.abs(c.position.x)>3&&n.add(c)}let i=new Ct({color:"#CFE8F0",transparent:!0,opacity:.32,roughness:.05,metalness:.5,side:he}),s=new jt({color:"#F4F4F0",wireframe:!0}),r=(l,c,h)=>{let d=new qe(l,l*1.1,4,4);for(let u of[i,s]){let p=new z(d,u);p.rotation.y=Math.PI/4,p.position.set(c,l*.55,h),n.add(p)}};r(5,-3,-12),r(3.4,5,-10);let o=new de(3.6,20,10,0,Math.PI*2,0,Math.PI/2);for(let l of[i,s]){let c=new z(o,l);c.position.set(11,0,-14),n.add(c)}for(let l=0;l<10;l++)De(n,-6+e()*6,-10-e()*4,.7+e()*.5,["#2E5F2C","#3B7636","#55913F","#A9C65A"],50+l);let a=zt(Ae(["BIOSFERA 2 \xB7 ARIZONA"],{bg:"#2A2A34",fg:"#F2C14E",size:80,w:1e3,h:150}),2.4,.36);a.position.set(-1,4.6,-6),n.add(a),n.userData.tag=a,n.add(new At("#FFF0DC","#B08A6A",1.05)),n.add(Xt("#FFD29A",3,[-14,16,10],20,70))};ft.noria=(n,t)=>{ft.parque(n,{dusk:!0});let e=new at,i=R("#E8E2D2",{metalness:.4,roughness:.4}),s=new z(new nn(5,.08,8,60),i);e.add(s);let r=s.clone();r.scale.setScalar(.7),e.add(r);for(let a=0;a<12;a++){let l=w(10,.06,.06,i,0,0,0);l.rotation.z=a*Math.PI/12,e.add(l)}let o=[];for(let a=0;a<12;a++){let l=a*Math.PI/6,c=new at;c.add(w(.7,.6,.6,R(["#E8667F","#F2C14E","#4A86C7","#36AEA2"][a%4]),0,-.35,0)),c.position.set(Math.cos(l)*5,Math.sin(l)*5,0),e.add(c),o.push(c);let h=$t("#FFE2A8",.6,.8);h.position.set(Math.cos(l)*5,Math.sin(l)*5,.1),e.add(h)}e.position.set(2.5,6.2,-9),n.add(e);for(let a of[-1,1]){let l=w(.2,7.5,.2,i,2.5+a*1.8,3.2,-9);l.rotation.z=a*.25,n.add(l)}n.userData.wheel=e,n.userData.cabs=o};var Lr=(n,t=1.6)=>new Ct({color:n,emissive:n,emissiveIntensity:t}),Cn=(n="#A8ACB0")=>R(n,{metalness:.75,roughness:.32}),pa=(n="#9EA2A6")=>{let t=It(256,256,e=>{e.fillStyle=n,e.fillRect(0,0,256,256);let i=Rt(7);for(let s=0;s<500;s++)e.fillStyle=`rgba(${i()<.5?"255,255,255":"0,0,0"},${i()*.06})`,e.fillRect(0,i()*256,256,1+i()*2)});return new Ct({map:t,metalness:.7,roughness:.35})},Ru=(n,t,e,i="#1A1C20",s="#FF5A3A",r=150)=>zt(Ae([n],{bg:i,fg:s,size:r,w:300,h:200}),t,e);function xu(n=7){let t=document.createElement("canvas");t.width=256,t.height=160;let e=t.getContext("2d"),i=new Rn(t);i.colorSpace=Fe;let s=(o,a="")=>{e.fillStyle="#0C0D10",e.fillRect(0,0,256,160),e.fillStyle="#FF6A3A",e.font="700 110px 'IBM Plex Mono'",e.textAlign="center",e.fillText(String(o),150,122),a&&(e.font="700 70px Inter",e.fillText(a,50,110)),i.needsUpdate=!0};s(n);let r=new z(new Mt(.5,.31),new jt({map:i,toneMapped:!1}));return r.userData.set=s,r}function O2(){let n=new at;n.add(w(.36,.9,.03,Cn("#8E9296"),0,0,0));let t=[];["12","11","10","9","8","7","6","5","4","3","2","1","0","\u25C0\u25B6"].forEach((o,a)=>{let l=new z(new Zt(.04,.04,.02,16),Lr("#F4E8C8",.15));l.rotation.x=Math.PI/2;let c=a%2,h=Math.floor(a/2);l.position.set(-.07+c*.14,.3-h*.085,.025),n.add(l);let d=zt(Ae([o],{bg:"rgba(0,0,0,0)",fg:"#1A1A1A",size:120,w:200,h:160}),.055,.044);d.position.set(-.07+c*.14,.3-h*.085,.037),n.add(d),t.push(l)});let i=new z(new Zt(.05,.05,.025,16),Lr("#F2C14E",.3));i.rotation.x=Math.PI/2,i.position.set(0,-.33,.025),n.add(i);let s=zt(Ae(["\u{1F514}"],{bg:"rgba(0,0,0,0)",fg:"#2A2A34",size:120,w:200,h:160}),.06,.048);s.position.set(0,-.33,.04),n.add(s);let r=new at;for(let o=0;o<5;o++)r.add(w(.16,.012,.01,R("#2A2A2A"),0,-.03*o,.02));return r.position.set(0,-.18,0),n.add(r),n.userData.btns=t,n.userData.alarm=i,n}ft.ascensor=(n,t)=>{n.background=new ot("#08090C"),n.fog=new St("#08090C",.03);let e=1.2,i=-1.6,s=2.8,r=pa("#A4A8AC"),o=w(2.6,.1,2.4,R("#3A3634",{roughness:.8}),0,-.05,-.4);o.receiveShadow=!0,n.add(o);let a=new z(new Mt(2.4,2),new Ct({map:(()=>{let C=It(256,256,b=>{b.fillStyle="#4A4440",b.fillRect(0,0,256,256),b.strokeStyle="#3A3430",b.lineWidth=3;for(let F=0;F<256;F+=32)b.beginPath(),b.moveTo(F,0),b.lineTo(F,256),b.stroke(),b.beginPath(),b.moveTo(0,F),b.lineTo(256,F),b.stroke()});return C.wrapS=C.wrapT=$e,C.repeat.set(3,3),C})(),roughness:.7}));a.rotation.x=-Math.PI/2,a.position.set(0,.005,-.6),a.receiveShadow=!0,n.add(a),n.add(w(.08,s,2.4,r,-e-.04,s/2,-.4)),n.add(w(.08,s,2.4,r,e+.04,s/2,-.4)),n.add(w(2.6,.08,2.4,R("#5A5E62",{metalness:.4,roughness:.5}),0,s+.04,-.4)),n.add(w(.65,s,.08,r,-e+.325-.02,s/2,i)),n.add(w(.65,s,.08,r,e-.325+.02,s/2,i)),n.add(w(1.2,s-2.2,.08,r,0,2.2+(s-2.2)/2,i));let l=Cn("#B4B8BC"),c=w(.56,2.2,.04,l,-.28,1.1,i+.03),h=w(.56,2.2,.04,l,.28,1.1,i+.03);n.add(c,h),n.add(w(.01,2.2,.045,R("#555"),0,1.1,i+.04));let d=w(1.1,2.2,.02,R("#050505"),0,1.1,i-.02);n.add(d),n.userData.doors=C=>{c.position.x=-.28-.55*C,h.position.x=.28+.55*C};let u=xu(t.piso??7);u.position.set(0,2.5,i+.05),n.add(u),n.userData.display=u;let p=O2();p.position.set(.85,1.25,i+.05),n.add(p),n.userData.botonera=p;for(let C of[-1,1])n.add(w(.04,.04,1.8,Cn("#C8CCD0"),C*(e-.06),.95,-.5));let g=new z(new Mt(1.5,1.5),new Ct({color:"#C8D4DC",metalness:.9,roughness:.08,emissive:"#22303A",emissiveIntensity:.35}));g.rotation.y=Math.PI/2,g.position.set(-e+.005,1.55,-.6),n.add(g),n.userData.mirror=g,n.add(w(.02,1.56,1.56,R("#6A6E72",{metalness:.6}),-e+.001,1.55,-.6));let E=zt(Ae(["M\xC1X. 6 PERSONAS \xB7 450 KG"],{bg:"#2A2C30",fg:"#D8DCE0",size:44,w:600,h:90}),.5,.075);E.position.set(.85,1.82,i+.05),n.add(E);let m=xe(1.6,.9,"#FFF6E8",1.6);m.rotation.x=Math.PI/2,m.position.set(0,s-.01,-.5),n.add(m);let f=new Jt("#FFF4E4",10,7,1.4);f.position.set(0,s-.3,-.3),f.castShadow=!0,n.add(f);let v=new z(new fn(.3,.06,.14),Lr("#FFB040",0));v.position.set(-.7,s-.05,-1.3),n.add(v);let _=new Jt("#FFA840",0,6,1.4);_.position.set(-.6,s-.4,-1),n.add(_);let y=new At("#E8ECF0","#3A3634",.5);n.add(y);let I=new Jt("#FFE8C8",0,8,1.6);I.position.set(0,1.8,2.4),n.add(I),n.userData.luz=(C,b=0)=>{let F=Math.max(0,Math.min(1,C))*(1-b);m.material.emissiveIntensity=1.6*F,f.intensity=10*F,v.material.emissiveIntensity=2.4*(1-F),_.intensity=9*(1-F),y.intensity=.14+.36*F,y.color.set(F>.5?"#E8ECF0":"#FFC890"),I.intensity=3.2*(1-F)},n.userData.luz(t.luz??1)};ft.rellano=(n,t)=>{let e=!!t.night;n.background=new ot("#14120F"),n.fog=new St("#2A2620",.035),n.add($n(14,10,t.portal?"#D8D0C0":"#B8A890",t.portal?"#C8C0B0":"#A89880",8));let i=t.portal?"#E8E0D0":"#D8C8A8";n.add(w(6.38,3.4,.3,R(i),-3.81,1.7,-3.2)),n.add(w(6.38,3.4,.3,R(i),3.81,1.7,-3.2)),n.add(w(1.24,1.2,.3,R(i),0,2.8,-3.2)),n.add(w(.3,3.4,10,R(i),-5,1.7,0)),n.add(w(.3,3.4,10,R(i),5,1.7,0)),n.add(w(14,.2,10,R("#F0EAE0"),0,3.4,0));for(let E of[-1,1])n.add(w(6.3,.9,.02,R(t.portal?"#8A6A4A":"#9A7A5A"),E*3.85,.45,-3.04));n.add(w(1.5,.12,.1,Cn("#9EA2A6"),0,2.26,-3.02));for(let E of[-1,1])n.add(w(.12,2.3,.1,Cn("#9EA2A6"),E*.69,1.13,-3.02));let s=new at;s.add(w(1.3,.05,1.6,R("#4A4440"),0,0,-.8)),s.add(w(1.3,2.2,.05,pa(),0,1.1,-1.6));for(let E of[-1,1])s.add(w(.05,2.2,1.6,pa(),E*.65,1.1,-.8));let r=xe(1.1,1.2,"#FFF6E8",1.8);r.rotation.x=Math.PI/2,r.position.set(0,2.18,-.8),s.add(r),s.position.set(0,0,-3.05),n.add(s);let o=new Jt("#FFF4E4",0,5,1.4);o.position.set(0,1.8,-3.6),n.add(o);let a=Cn("#B4B8BC"),l=w(.62,2.2,.05,a,-.31,1.1,-3),c=w(.62,2.2,.05,a,.31,1.1,-3);n.add(l,c),n.userData.doors=E=>{l.position.x=-.31-.6*E,c.position.x=.31+.6*E,o.intensity=8*E},n.userData.doors(t.open||0);let h=xu(t.piso??8);h.scale.setScalar(.8),h.position.set(0,2.55,-3.02),n.add(h),n.userData.display=h;let d=w(.1,.2,.03,Cn(),.95,1.2,-3.03);n.add(d);let u=new z(new de(.03,10,8),Lr("#FFB040",1));u.position.set(.95,1.2,-3),n.add(u);let p=Ru(String(t.piso??8),.45,.3,"#2A2A34","#F2C14E");if(p.position.set(1.5,2.2,-3.03),n.add(p),t.portal){let E=new at;for(let f=0;f<12;f++)E.add(w(.36,.26,.04,R("#8E6242"),-.6+f%4*.4,-Math.floor(f/4)*.3,0)),E.add(w(.2,.02,.02,R("#2A2A2A"),-.6+f%4*.4,-Math.floor(f/4)*.3+.05,.03));E.position.set(-3,1.9,-3.03),n.add(E),n.add(w(.04,2.6,2,R("#9FC8E8",{transparent:!0,opacity:.35,metalness:.3,roughness:.1}),4.84,1.3,.5));let m=zt(Ae(["PORTAL"],{bg:"#2A2A34",fg:"#F2C14E",size:80,w:400,h:120}),.8,.24);m.position.set(-3,2.6,-3.03),n.add(m)}else for(let[E,m]of[[-3.2,"A"],[3.2,"B"]]){n.add(w(1,2.2,.06,R("#6B4A33"),E,1.1,-3.02));let f=zt(Ae([String(t.piso??8)+"\xBA"+m],{bg:"#C8A858",fg:"#2A2A34",size:70,w:240,h:110}),.3,.14);f.position.set(E,1.85,-2.98),n.add(f);let v=new z(new de(.04,10,8),Cn("#D8B860"));v.position.set(E+.38,1.05,-2.96),n.add(v)}let g=[];for(let E of[-2.5,2.5]){let m=new z(new de(.16,14,10),Lr("#FFE8C0",e?1.4:2));m.position.set(E,3.15,-1),n.add(m),g.push(m);let f=new Jt("#FFE0B0",e?6:9,9,1.4);f.position.set(E,2.9,-.8),f.castShadow=E<0,n.add(f)}n.add(new At("#F4ECE0","#4A4034",e?.35:.6))};var Bi=3;ft.hueco=(n,t)=>{n.background=new ot("#05060C"),n.fog=new St("#0A0C18",.02),se(n,-120,500,260,[[0,"#04050C"],[.6,"#0E1230"],[1,"#2A2450"]]),rn(n,1600,220,3),Nn(n,-60,300,50,["#0C0E1E","#12142A","#181A34"],!0,6);let e=13*Bi,i=R("#3A3A42",{roughness:.95});n.add(w(4.4,e+2,.3,i,0,e/2,-2.2));for(let g of[-1,1])n.add(w(.3,e+2,3.2,i,g*2.2,e/2,-.8));for(let g=0;g<=13;g++){let E=g*Bi;if(n.add(w(4.1,.14,.1,R("#6A6A74"),0,E-.07,-2.02)),g===0&&n.add(w(4.1,.25,3.2,R("#5A5A64"),0,-.12,-.8)),g<=12){let m=zt(Ae([g===0?"BAJO":"PISO "+g],{bg:"#F2C14E",fg:"#2A2A34",size:70,w:420,h:110}),.9,.24);m.position.set(-1.55,E+2.5,-2.03),n.add(m)}}for(let g of[-1,1])n.add(w(.08,e,.08,Cn("#7A7E84"),g*1.75,e/2,-1.6));let s=new at,r=pa("#A4A8AC");s.add(w(2.6,.12,2.2,R("#3A3634"),0,0,0)),s.add(w(2.6,.1,2.2,R("#5A5E62",{metalness:.4}),0,2.85,0));for(let g of[-1,1])s.add(w(.08,2.8,2.2,r,g*1.3,1.4,0));s.add(w(2.6,2.8,.08,r,0,1.4,-1.1));let o=xe(1.6,1,"#FFF6E8",1.6);o.rotation.x=Math.PI/2,o.position.set(0,2.79,0),s.add(o);let a=new Jt("#FFF4E4",8,5,1.4);a.position.set(0,2.4,.3),s.add(a);let l=new Jt("#FFA840",0,5,1.4);l.position.set(0,2.4,.3),s.add(l),s.add(w(.4,.3,.4,R("#2A2A2E",{metalness:.6}),0,3.05,0));for(let g of[-1,1]){let E=w(.18,.3,.18,R("#C9361F",{metalness:.4}),g*1.6,.25,-.5);s.add(E)}s.position.set(0,0,-.6),n.add(s),n.userData.cab=s,n.userData.cabLuz=g=>{o.material.emissiveIntensity=1.6*g,a.intensity=8*g,l.intensity=7*(1-g)};let c=new z(new Zt(.6,.6,.3,24),Cn("#6A6E74"));c.rotation.x=Math.PI/2,c.position.set(.6,e+.3,-1.4),n.add(c);let h=[];for(let g=0;g<4;g++){let E=new z(new Zt(.018,.018,1,6),Cn("#2A2C30"));n.add(E),h.push([E,-.09+g*.06])}let d=w(.7,1.6,.3,R("#4A4C52",{metalness:.5}),1.25,0,-1.8);n.add(d);let u=new z(new Zt(.03,.03,1,6),Cn("#2A2C30"));n.add(u),n.userData.setCab=(g,E=0)=>{s.position.y=g;let m=g+3.2;h.forEach(([_,y])=>{let I=Math.max(.01,(e-m)*(1-E));_.scale.y=I,_.position.set(y,e-I/2,-.6)});let f=e-4-g*.9%(e-6);d.position.y=Math.max(1,e-2-g);let v=e-d.position.y-.8;u.scale.y=Math.max(.01,v),u.position.set(1.25,e-v/2,-1.8)},n.userData.setCab(t.y??7.5*Bi);for(let g=0;g<=12;g+=2){let E=new Jt("#8A9ACA",2.2,8,1.6);E.position.set(-1.5,g*Bi+2.2,.4),n.add(E)}n.add(new At("#6A78A8","#101018",.5));let p=Rt(12);for(let g=0;g<13;g++)for(let E of[-1,1])for(let m=0;m<2;m++){let f=p()<.55,v=xe(.8,1,f?"#FFD890":"#1A1C2A",f?1.2:.2);v.position.set(E*(3.2+m*1.6),g*Bi+1.6,-.6),n.add(v),n.add(w(1.4,Bi,.2,R("#2A2A34"),E*(3.2+m*1.6),g*Bi+Bi/2,-.75))}t.fuegos&&(n.userData.fuegos=!0)};ft.feria=(n,t)=>{n.background=new ot("#2A2018"),n.fog=new St("#6A5A44",.03),n.add($n(40,30,"#8A7258","#7E6850",14));for(let l=-3;l<=3;l++){n.add(w(.25,12,.25,R("#4A4A4E",{metalness:.5}),l*4,6,-9));let c=new z(new nn(2,.1,6,24,Math.PI),R("#4A4A4E",{metalness:.5}));c.position.set(l*4+2,12,-9),n.add(c)}for(let l=0;l<8;l++){let c=xe(3.6,4,"#FFF0D0",.55);c.position.set(-14+l*4,7,-9.15),n.add(c)}let e=["#C9361F","#F4F0E4","#2A4A8A"];for(let l=0;l<9;l++)n.add(w(.6,.4,.02,R(e[l%3]),-8+l*2,9.5,-6));let i=R("#6A4A30",{roughness:.8});for(let l of[-1,1])n.add(w(.25,9,.25,i,l*1.4,4.5,-3));n.add(w(3.2,.3,.4,i,0,9,-3));for(let l=1;l<9;l+=1.5)for(let c of[-1,1]){let h=w(.08,2.1,.08,i,c*1.4,l,-3.2);h.rotation.z=c*.7,n.add(h)}let s=new z(new Zt(.4,.4,.15,18),R("#3A3A3E",{metalness:.6}));s.rotation.x=Math.PI/2,s.position.set(0,9.3,-3),n.add(s);let r=new at;r.add(w(2.4,.15,1.8,R("#8A6A44"),0,0,0));for(let l of[-1,1])r.add(w(.08,1,.08,i,l*1.1,.5,.8));r.add(w(2.3,.06,.06,i,0,1,.8));for(let l of[-1,1]){let c=w(.16,.2,.16,R("#3A3A3E",{metalness:.6}),l*1.3,.05,0);r.add(c)}r.position.set(0,5,-3),n.add(r),n.userData.plat=r;let o=new z(new Zt(.03,.03,1,6),R("#C8A870"));n.add(o),n.userData.rope=o,n.userData.setPlat=(l,c=0)=>{r.position.y=l;let h=(9.2-(l+.1))*(1-c);o.visible=h>.02,o.scale.y=Math.max(.01,h),o.position.set(0,9.2-h/2,-3)},n.userData.setPlat(t.y??5);let a=zt(Ae(["NUEVA YORK \xB7 1854"],{bg:"#3A2A1A",fg:"#F4E0B0",size:80,w:900,h:140}),4,.62);a.position.set(0,10.6,-8.8),n.add(a),n.add(new At("#FFE8C8","#5A4A38",.9)),n.add(Xt("#FFD8A0",2.2,[-6,14,8],14,50))};var z2=n=>Math.max(0,Math.min(2.6,2.6-(n+3)/.32*.18));ft.escalera=(n,t)=>{n.background=new ot("#1E1A16"),n.fog=new St("#2A2620",.04),n.add($n(14,10,"#C8B898","#B8A888",8)),n.add(w(16,7,.3,R("#E0D4BC"),0,3.5,-2.4));for(let o=0;o<15;o++){let a=w(.34,.18*(15-o),1.6,R("#B8A890",{roughness:.8}),-3+o*.32+.16,.09*(15-o),-1.3);a.receiveShadow=!0,n.add(a),n.add(w(.34,.03,1.62,R("#8A7A60"),-3+o*.32+.16,.18*(15-o)+.01,-1.3))}n.add(w(2.6,2.6,1.6,R("#B8A890"),-4.3,1.3,-1.3));let i=new z(new Zt(.03,.03,5.7,8),R("#5A3A22"));i.position.set(-.6,2.4,-.45),i.rotation.z=Math.atan2(2.7,4.8)+Math.PI/2,n.add(i);for(let o=0;o<14;o+=2)n.add(w(.025,.9,.025,R("#2A2A2E"),-2.9+o*.32,z2(-2.9+o*.32)+.45,-.5));let s=Ru(String(t.piso??9),.5,.34,"#2A2A34","#F2C14E");s.position.set(-4.2,3.6,-2.23),n.add(s);let r=xe(1.1,1.4,t.night?"#2A3A6A":"#FFF4D8",t.night?.5:1.6);r.position.set(1.5,3.4,-2.23),n.add(r);for(let o of[-3.5,2]){let a=new Jt("#FFE0B0",8,9,1.4);a.position.set(o,4.4,.5),a.castShadow=o<0,n.add(a)}n.add(new At("#F4ECE0","#4A4034",.6))};var Qs=[],Cu=999,k2=n=>n+1<Fr.length?Fr[n+1]:Cu,th=(n,t,e)=>n.map((i,s)=>t[s]+(i-t[s])*e),Fu=(n,t)=>{let e=n.k??1.35;if(n.c&&e!==1){let[i,s,r,o]=n.c;n.c=[th(i,s,e),s,th(r,o,e),o]}else n.cam&&e!==1&&(n.cam=n.cam.map(([i,s,r])=>[i,th(s,r,e),r]),n.f&&(n.f=n.f.map(([i,s])=>[i,s*e])));if(n.c){let[i,s,r,o]=n.c;n.cam=[[0,i,s],[t,r,o]];let a=(l,c)=>Math.hypot(l[0]-c[0],l[1]-c[1],l[2]-c[2]);n.f=[[0,a(i,s)],[t,a(r,o)]]}return n},cn=(n,t)=>{let e=Fr[n],i=k2(n),s=Math.min(i,40.3)-e;Qs.push([(r,o)=>$c(r,o,Fu(t(s,e),s)),e,i])},G2=(n,t,e)=>{let i=Math.min(t,40.3)-n;Qs.push([(s,r)=>$c(s,r,Fu(e(i,n),i)),n,t])};var eh=n=>({tipo:"humano",...n}),gi=(n={})=>eh({glow:.1,...n});var Sn=(n,t,e=0)=>mu(t,n+e)-n,Jn=(n,t,e,i,s={})=>{let r=Array.isArray(t)?t:[t],o=s.size||72,a={w:Math.max(720,Math.max(...r.map(c=>c.length))*o*.66+90),...s},l=zt(Ae(Array.isArray(t)?t:[t],{bg:"#2A2A34",fg:"#F2C14E",size:72,w:720,h:150,...a}),e,e*(a.h||150)/(a.w||720));return l.position.set(...i),l.renderOrder=4,n.add(l),l},V2=(n,t,e,i,s={})=>Jn(n,t,e,i,{bg:"#FBF7EC",fg:"#2A2A34",...s}),Pu=(n,t,e,i,s={})=>Jn(n,t,e,i,{bg:"#6A3AB8",fg:"#FFFFFF",...s});var mi=(n,t,e,i=1e9,s)=>{let r=Je(e,e+.2,t)*(1-Je(i,i+.2,t));n.visible=r>.01,n.scale.setScalar(Math.max(.001,.5+.5*r)),s&&Vc(n,s)},W2=(n,t)=>n.pose({armL:[12,8],armR:[150+Math.sin(t*9)*18,20]});var X2=(n,t=10,e="#FFF2C0")=>{let i=[];for(let s=0;s<t;s++){let r=$t(e,.3,0);n.add(r),i.push(r)}return(s,r,o=1)=>i.forEach((a,l)=>{let c=(s*.8+l/t)%1;a.position.set(r[0]+Math.sin(l*2.4)*r[3],r[1]+Math.cos(l*1.7)*r[3]*.6,r[2]),a.material.opacity=o*Math.sin(c*Math.PI)*.9,a.scale.setScalar(.15+Math.sin(c*Math.PI)*.25)})};var q2={bg:"#C9361F",fg:"#fff"},Y2={bg:"#2F5A9A",fg:"#fff"};var Ni=(n,t,e,i,s=2.2)=>{let r={y:Jn,w:V2,p:Pu,r:(l,c,h,d)=>Jn(l,c,h,d,q2),b:(l,c,h,d)=>Jn(l,c,h,d,Y2)},o=e.map(([l,,c="y",h=i,d=s])=>r[c](n,l,d,h)),a=e.map(([,l])=>typeof l=="number"?l:Sn(t,l));return(l,c)=>o.forEach((h,d)=>mi(h,l,a[d],e[d][5]||d+1>=a.length?99:a[d+1]-.15,c))};var Z2=(n,t={})=>It(900,520,e=>{e.fillStyle=t.bg||"#FBF7EC",e.beginPath(),e.roundRect(0,0,900,520,30),e.fill(),e.fillStyle="#2A2A34",e.font="900 46px Inter",e.textAlign="center",e.fillText(t.title||"",450,64);let i=n.length,s=760/i;n.forEach(([r,o,a],l)=>{let c=70+s*l+s/2,h=o*300;e.fillStyle=a,e.beginPath(),e.roundRect(c-s*.3,420-h,s*.6,h,12),e.fill(),e.fillStyle="#2A2A34",e.font="800 30px Inter",r.split(`
`).forEach((d,u)=>e.fillText(d,c,462+u*34))})}),$2=(n,t,e,i,s)=>{let r=zt(Z2(t,s),e,e*520/900);return r.position.set(...i),r.renderOrder=5,n.add(r),r};var Ev=(()=>{let n=[];for(let t of[-1,1])for(let e of[0,1])for(let i=0;i<5;i++)n.push([t*(2.9+e*.75),-2+i*.8,t*-Math.PI/2]);return n})();ft.tiendaIn=(n,t)=>{n.background=new ot("#07060E");let e=t.col||"#C8602E",i=new z(new Mt(3.4,4.4),R("#3A3448",{roughness:1}));i.rotation.x=-Math.PI/2,i.receiveShadow=!0,n.add(i);let s=R(e,{roughness:.9,side:he,emissive:e,emissiveIntensity:t.glow??.12});s.depthWrite=!1;for(let l of[-1,1]){let c=w(.03,2.58,4.4,s,l*.82,1,0);c.rotation.z=l*.675,n.add(c)}let r=new Mr;r.moveTo(-1.65,0),r.lineTo(1.65,0),r.lineTo(0,2.05),r.lineTo(-1.65,0);let o=new z(new Wo(r),s);o.position.z=-2.2,n.add(o);let a=w(.02,1.9,.01,R("#3A2A22"),0,.95,-2.18);n.add(a),n.add(new At("#FFC890","#2A2440",t.dim?.25:.55))};var on=40,as={exposure:1,bloom:.45,vig:.55},J2=()=>It(256,256,n=>{n.clearRect(0,0,256,256);let t=n.createRadialGradient(105,100,20,128,128,124);t.addColorStop(0,"#FFFBEA"),t.addColorStop(1,"#D6CFB8"),n.fillStyle=t,n.beginPath(),n.arc(128,128,122,0,7),n.fill(),n.fillStyle="rgba(140,130,110,.33)";for(let[e,i,s]of[[88,82,24],[162,112,30],[118,172,19],[182,182,14],[66,150,13],[142,58,11],[200,70,9]])n.beginPath(),n.arc(e,i,s,0,7),n.fill()}),ma=(n,t,e)=>{let i=new z(new Mt(e,e),new jt({map:J2(),transparent:!0,fog:!1,toneMapped:!1,depthWrite:!1}));i.position.set(...t),i.renderOrder=2;let s=$t("#FFF2C8",e*1.6,.3);return s.material.fog=!1,s.position.set(t[0],t[1],t[2]-.2),n.add(s,i),{m:i,g:s,set:(r,o)=>{i.visible=s.visible=r>.01,i.scale.setScalar(Math.max(.001,r)),s.material.opacity=.3*r,o&&i.lookAt(o.position)}}},K2=()=>It(512,256,n=>{n.fillStyle="#2E6FB8",n.fillRect(0,0,512,256),n.fillStyle="#4FA45A";let t=Rt(5);for(let e=0;e<16;e++)n.beginPath(),n.ellipse(t()*512,50+t()*156,22+t()*50,14+t()*30,t()*3,0,7),n.fill();n.fillStyle="#F4F8FA",n.fillRect(0,0,512,24),n.fillRect(0,232,512,24),n.fillStyle="rgba(255,255,255,.55)";for(let e=0;e<12;e++)n.beginPath(),n.ellipse(t()*512,40+t()*176,30+t()*40,6+t()*6,0,0,7),n.fill()}),ga=(n,t,e=1)=>{let i=new at,s=new z(new de(e,48,32),new Ct({map:K2(),roughness:.75}));i.add(s);let r=new z(new Zt(.03,.03,e*3,8),new jt({color:"#FF5A6A",toneMapped:!1}));i.add(r);let o=$t("#7FB8FF",e*3.2,.35);return i.add(o),i.position.set(...t),n.add(i),{grp:i,s,ax:r}},nh=(n,t=.27)=>{let e=new z(new de(t,32,24),R("#D8D2C4",{roughness:.9}));return e.castShadow=!1,n.add(e),e},ih={exposure:.95,bloom:.3,vig:.5},Iu=n=>{n.background=new ot("#062C46"),n.fog=new St("#0A4664",.11);let t=new z(new Mt(60,60),R("#C8B48A",{roughness:1}));t.rotation.x=-Math.PI/2,t.receiveShadow=!0,n.add(t);let e=Rt(21),i=["#FF7A8A","#F6A04A","#B85AD8","#4AC4B4","#FFD27A","#FF5AA0"];for(let r=0;r<26;r++){let o=(e()-.5)*7,a=-e()*6+.6,l=i[r%i.length],c=.4+e()*.9,h=new at,d=e();if(d<.4)for(let u=0;u<4;u++){let p=new z(new Zt(.04,.07,c,8),R(l,{roughness:.7}));p.position.set((e()-.5)*.3,c/2,(e()-.5)*.3),p.rotation.z=(e()-.5)*.7,h.add(p)}else if(d<.7){let u=new z(new de(.22+e()*.2,16,12),R(l,{roughness:.9}));u.scale.y=.7,u.position.y=.12,h.add(u)}else{let u=new z(new qe(.18,c,10,1,!0),R(l,{roughness:.8,side:he}));u.rotation.x=Math.PI,u.position.y=c/2,h.add(u)}h.position.set(o,0,a),n.add(h)}let s=new pn("#BFE6FF",30,14,.6,.8,1.2);s.position.set(0,8,0),s.target.position.set(0,0,-2),n.add(s,s.target)},Du=(n,t=40)=>{let e=[],i=Rt(9);for(let s=0;s<t;s++){let r=$t(s%3?"#FFC8D8":"#FFF0B0",.18,0);r.material.fog=!1,n.add(r),e.push([r,(i()-.5)*6,-i()*5+.3,i()])}return(s,r)=>e.forEach(([o,a,l,c])=>{let h=(s*.35+c)%1;o.position.set(a+Math.sin(s+c*9)*.15,.3+h*3.4,l),o.material.opacity=r*Math.sin(h*Math.PI)*.95})},sh=n=>{let t=new z(new Mt(60,1),new Ct({color:"#2F8FC0",roughness:.2,metalness:.2}));t.rotation.x=-Math.PI/2,n.add(t);let e=w(60,.03,.25,R("#E8F0F4"),0,.05,0);return n.add(e),i=>{t.scale.y=Math.max(.01,i),t.position.set(0,.045,-6.2+i/2),e.position.z=-6.2+i}},Lu=(n,t)=>n.pose({armL:[165,20],armR:[165,20],head:Math.sin(t*5)*6}),Uu=n=>n.pose({armL:[12,8],armR:[12,8],lean:-6}),Q2=(n,t)=>n.pose({armL:[12,8],armR:[155+Math.sin(t*4)*4,10],lean:-4});cn(0,(n,t)=>{let e=Sn(t,"desapareciera"),i=Sn(t,"luna");return{amb:"azotea",fov:on,atores:[gi({x:-.35,z:.6,eyes:[[0,"look"],[i+.2,"wide"]],pose:(s,r)=>r<i+.1?Uu(s):Lu(s,r)})],extra:s=>{let r=ma(s,[1.2,6.2,-10],2),o=$t("#FFFFFF",5,0);return o.material.fog=!1,o.position.set(1.2,6.2,-9.8),s.add(o),{update:(a,l,c)=>{let h=1-Je(i-.05,i+.35,a);r.set(h,c),o.material.opacity=.8*Je(i-.1,i+.1,a)*(1-Je(i+.15,i+.6,a))}}},c:[[-.3,.9,4.6],[.3,3.4,-4],[-.3,1,4.2],[.3,3.5,-4]],k:1,range:6,look:as}});cn(1,(n,t)=>({amb:"azotea",fov:on,atores:[gi({x:0,z:0,eyes:[[0,"small"],[.6,"wide"]],pose:Q2})],extra:e=>{let i=X2(e,8,"#BFD0FF");return{update:s=>i(s,[0,3.2,-1,1.2],.6)}},c:[[0,1,3.4],[0,1.9,0],[0,1.05,3],[0,2,0]],k:1.65,range:3,look:as}));cn(2,(n,t)=>({amb:"azotea",fov:on,atores:[],extra:e=>{let i=Ni(e,t,[[["NI RASTRO"],.05,"r",[0,5,-8],2.4,1]]);return{update:(s,r,o)=>i(s,o)}},c:[[0,2,4],[0,5.2,-8],[0,2.1,3.6],[0,5.3,-8]],k:1,range:8,look:as}));cn(3,(n,t)=>{let e=Sn(t,"oscuras");return{amb:"azotea",fov:on,atores:[gi({x:-.35,z:0,eyes:[[0,"look"],[e-.3,"small"]],pose:(i,s)=>i.pose({armL:[14,14],armR:[14,14],bob:Math.abs(Math.sin(s*20))*.005})}),eh({outfit:"verde",x:.45,z:-.3,eyes:[[0,"lookl"],[e-.3,"small"]],pose:i=>i.pose({armL:[14,14],armR:[14,14]})})],extra:i=>{let s=Ni(i,t,[[["NOCHES M\xC1S OSCURAS"],e-.2,"b",[0,2.6,-.2],1.7,1]]);return{update:(r,o,a)=>s(r,a)}},lookFn:i=>({exposure:Li(1,.55,Je(.4,2.6,i))}),c:[[0,1.5,3.6],[0,1.3,-.1],[0,1.45,3],[0,1.35,-.1]],k:1.65,range:2.6,look:as}});cn(4,(n,t)=>({amb:"playa",fov:on,atores:[gi({x:-.7,z:-1.2,eyes:[[0,"look"]],move:e=>[Li(-1.2,-.7,Je(0,1.2,e)),0,-1.2]})],extra:e=>{let i=sh(e);return{update:s=>i(2.2+Math.sin(s*1.2)*.3)}},c:[[0,3.6,6.5],[0,.3,-4],[0,3.4,6],[0,.3,-4]],k:1,range:14,look:ih}));cn(5,(n,t)=>({amb:"playa",fov:on,atores:[gi({x:-.7,z:-1.2,eyes:[[0,"down"]]})],extra:e=>{let i=sh(e),s=Ni(e,t,[[["LAS MAREAS"],.1,"b",[0,2.8,-2],1.6,1]]);return{update:(r,o,a)=>{i(2.8+Math.sin(r*2.2)*1.6),s(r,a)}}},c:[[0,3.6,6.5],[0,.3,-4],[0,3.5,6.2],[0,.3,-4]],k:1,range:14,look:ih}));cn(6,(n,t)=>{let e=Sn(t,"sol"),i=Sn(t,"mitad");return{amb:"playa",fov:on,atores:[gi({x:-.8,z:-1.6,s:.9,eyes:[[0,"look"],[i,"wide"]]})],extra:s=>{let r=sh(s),o=$2(s,[["LUNA",1,"#9AA8E8"],["SOL",.46,"#F6A060"]],1.5,[0,2.4,-1],{title:"FUERZA DE LA MAREA"}),a=Jn(s,["SIN LUNA"],1,[0,3.2,-1],{bg:"#C83A4A",fg:"#FFFFFF"});return{update:(l,c,h)=>{let d=Je(e,e+.8,l);r(2.4+Math.sin(l*2.2)*Li(1.6,.7,d)),mi(o,l,e-.3,1e9,h),mi(a,l,i-.2,1e9,h)}}},c:[[0,2.6,5.4],[0,1.6,-1],[0,2.5,5],[0,1.6,-1]],k:1,range:8,look:ih}});cn(7,(n,t)=>{let e=Sn(t,"reproducen");return{amb:"espacio",fov:on,atores:[],extra:i=>{Iu(i);let s=Du(i,46),r=ma(i,[0,7.5,-6],1.4),o=$t("#DFF2FF",7,0);o.material.fog=!1,o.position.set(0,5,-4),i.add(o);let a=Ni(i,t,[[["LOS CORALES"],.1,"p",[0,2.2,-1.4],1.5,1]]);return{update:(l,c,h)=>{r.set(1,h),o.material.opacity=.25,s(l,Je(e-.3,e+.5,l)),a(l,h)}}},c:[[0,1,3.2],[0,1.4,-2],[0,1.2,2.6],[0,1.6,-2]],k:1,range:4,look:{exposure:1.1,bloom:.55,vig:.5}}});cn(8,(n,t)=>({amb:"espacio",fov:on,atores:[],extra:e=>{Iu(e);let i=Du(e,46),s=pu(1,9);s.position.set(0,1.75,-1.2),e.add(s);let r=Jn(e,["SIN RELOJ"],1.3,[0,2.7,-1.1],{bg:"#C83A4A",fg:"#FFFFFF"});return{update:(o,a,l)=>{i(o,1-Je(.2,1,o)),s.set(9+o*6),s.rotation.z=Math.sin(o*18)*.06*Je(.3,.6,o),mi(r,o,.45,1e9,l)}}},c:[[0,1.8,2.8],[0,1.8,-1.2],[0,1.85,2.4],[0,1.85,-1.2]],k:1,range:3.5,look:{exposure:.95,bloom:.45,vig:.55}}));cn(9,(n,t)=>({amb:"azotea",fov:on,atores:[gi({x:0,z:0,eyes:[[0,"wide"]],pose:Lu})],extra:e=>{let i=Ni(e,t,[[["LO PEOR\u2026"],.1,"r",[0,2.35,0],1.2,1]]);return{update:(s,r,o)=>i(s,o)}},c:[[0,1.4,2.6],[0,1.4,0],[0,1.4,2],[0,1.45,0]],k:1.65,range:2.2,look:as}));cn(10,(n,t)=>{let e=Sn(t,"inclinacion");return{amb:"espacio",fov:on,atores:[],extra:i=>{let s=ga(i,[0,1.6,0],.95),r=nh(i),o=Ni(i,t,[[["LA LUNA LA SUJETA"],.2,"y",[0,3.35,0],1.7,1],[["INCLINACI\xD3N"],e,"b",[0,-.05,.4],1.3,1]]);return{update:(a,l,c)=>{s.grp.rotation.z=-.41,s.s.rotation.y=a*.8;let h=a*.7+.6;r.position.set(Math.cos(h)*1.15,1.6+Math.sin(h)*.2,Math.sin(h)*1.5),o(a,c)}}},c:[[0,1.6,6.2],[0,1.6,0],[0,1.6,5.6],[0,1.6,0]],k:1,range:6,look:{exposure:1.05,bloom:.5}}});cn(11,(n,t)=>{let e=Sn(t,"tambalearse"),i=Sn(t,"millones");return{amb:"espacio",fov:on,atores:[],extra:s=>{let r=ga(s,[0,1.6,0],.95),o=nh(s),a=Ni(s,t,[[["MILLONES DE A\xD1OS"],i,"p",[0,3.35,0],1.6,1]]),l=Jn(s,["SIN LUNA"],1,[0,-.05,.4],{bg:"#C83A4A",fg:"#FFFFFF"});return{update:(c,h,d)=>{let u=Je(0,.5,c);o.position.set(1.15+u*2,1.6,-.2),o.scale.setScalar(Math.max(.001,1-u)),o.visible=u<.99;let p=Je(e-.6,e+.4,c);r.grp.rotation.z=-.41+Math.sin(c*3.2)*.55*p,r.grp.rotation.x=Math.cos(c*2.6)*.3*p,r.s.rotation.y=c*.8,a(c,d),mi(l,c,.1,1e9,d)}}},c:[[0,1.6,6.2],[0,1.6,0],[0,1.6,5.6],[0,1.6,0]],k:1,range:6,look:{exposure:1.05,bloom:.5}}});cn(12,(n,t)=>{let e=Sn(t,"estaciones");return{amb:"espacio",fov:on,atores:[],extra:i=>{let s=ga(i,[0,1.6,0],.95),r=Jn(i,["VERANO"],.9,[-.55,3.1,0],{bg:"#F6A04A",fg:"#2A2A34"}),o=Jn(i,["INVIERNO"],.9,[.55,2.75,0],{bg:"#7FB8FF",fg:"#1E2A55"});return{update:(a,l,c)=>{s.grp.rotation.z=-.41+Math.sin(a*3.2+1)*.55,s.grp.rotation.x=Math.cos(a*2.6+1)*.3,s.s.rotation.y=a*.8;let h=Math.sin(a*7)>0;mi(r,a,e-.4,1e9,c),mi(o,a,e-.2,1e9,c),r.position.x=h?-.55:.55,o.position.x=h?.55:-.55}}},c:[[0,1.6,6],[0,1.6,0],[0,1.6,5.4],[0,1.6,0]],k:1,range:6,look:{exposure:1.05,bloom:.5}}});cn(13,(n,t)=>{let e=Sn(t,"aleja"),i=Sn(t,"centimetros");return{amb:"espacio",fov:on,atores:[],extra:s=>{let r=ga(s,[-.55,1.6,0],.55),o=nh(s,.2),a=w(1,.03,.03,R("#FFD27A",{emissive:"#FFD27A",emissiveIntensity:.8}),0,0,0,!1);s.add(a);let l=Ni(s,t,[[["AHORA MISMO"],.1,"w",[0,3.3,0],1.3],[["SE ALEJA"],e-.1,"y",[0,3.3,0],1.2],[["CASI 4 CM CADA A\xD1O"],i-.5,"p",[0,3.3,0],1.8,1]]);return{update:(c,h,d)=>{r.grp.rotation.z=-.41,r.s.rotation.y=c*.8;let u=.35+Je(e-.2,n,c)*.65;o.position.set(u,1.6,0),a.scale.x=Math.max(.01,u-.35+.01),a.position.set(.35+(u-.35)/2,1.25,0),a.visible=c>e,l(c,d)}}},c:[[0,1.6,6],[0,1.6,0],[0,1.6,5.4],[0,1.6,0]],k:1,range:6,look:{exposure:1.05,bloom:.5}}});cn(14,(n,t)=>({amb:"azotea",fov:on,atores:[gi({x:-.35,z:.6,eyes:[[0,"look"],[.6,"happy"]],pose:Uu})],extra:e=>{let i=ma(e,[1.2,6.2,-10],2),s=Pu(e,["\xBFLA ECHAR\xCDAS","DE MENOS?"],1.5,[.05,2.7,-.6],{h:260});return{update:(r,o,a)=>{i.set(Je(0,.6,r),a),mi(s,r,.15,1e9,a)}}},c:[[-.3,.9,4.6],[.3,3.4,-4],[-.3,1,4.2],[.3,3.5,-4]],k:1,range:6,look:as}));G2(Fr[15],Cu,(n,t)=>({amb:"azotea",fov:on,atores:[gi({x:-.42,z:0,eyes:[[0,"happy"]],pose:(e,i)=>W2(e,i)}),eh({outfit:"verde",x:.45,z:-.2,eyes:[[0,"happy"]]})],extra:e=>{let i=ma(e,[1.6,5.4,-8],1.6),s=Tu(1.5);return e.add(s),s.position.set(0,2.55,.5),{update:(r,o,a)=>{i.set(1,a),mi(s,r,.05,1e9,a),s.scale.multiplyScalar(1+.04*Math.sin(r*6))}}},c:[[0,1.65,3.3],[0,1.9,0],[0,1.6,2.8],[0,1.95,0]],k:1.65,range:3.6,look:as}));function j2(n){n.traverse(t=>{t.geometry&&t.geometry.dispose();let e=t.material;(Array.isArray(e)?e:e?[e]:[]).forEach(i=>{for(let s in i){let r=i[s];r&&r.isTexture&&r.dispose()}i.dispose()}),t.shadow&&t.shadow.map&&t.shadow.map.dispose()})}window.__hf=window.__hf||{};window.__hf.buildReady=window.__hf.buildReady||{};window.__hf.buildReady.film=(async()=>{await Promise.all(["900 40px Fraunces","700 40px Caveat","700 40px Inter","800 40px Inter","600 40px Inter","700 40px 'IBM Plex Mono'","600 40px 'IBM Plex Mono'"].map(r=>document.fonts.load(r))).catch(()=>{});let n=new ta(document.getElementById("film3d")),t=-1,e=null,i=r=>{let o=Qs.findIndex(([,a,l])=>r>=a&&r<l);return o<0&&(o=Qs.length-1),o},s=n.render.bind(n);n.render=r=>{let o=i(r);if(o!==t){e&&(j2(e.scene),n.r.renderLists.dispose()),window.__srv=1+o*7919;let[a,l,c]=Qs[o];e=a(l,c),n.shots=[e],t=o}s(r)},window.addEventListener("hf-seek",r=>n.render(r.detail.time)),n.render(0)})();})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
