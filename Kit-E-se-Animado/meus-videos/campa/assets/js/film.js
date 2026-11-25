var __srv=1;function __sr(){__srv=(__srv*16807)%2147483647;return __srv/2147483647}function __noRaf(){return 0}function __noCaf(){}
(()=>{var Ih="170";var b0=0,Pd=1,w0=2;var Yu=1,Dh=2,Ii=3,es=0,ln=1,Se=2,mi=0,ts=1,Rn=2,Id=3,Dd=4,R0=5,_s=100,x0=101,C0=102,F0=103,P0=104,I0=200,D0=201,L0=202,U0=203,ac=204,lc=205,N0=206,H0=207,O0=208,B0=209,z0=210,k0=211,G0=212,V0=213,W0=214,cc=0,hc=1,dc=2,ur=3,uc=4,fc=5,pc=6,mc=7,Zu=0,X0=1,q0=2,gi=0,Y0=1,Z0=2,$0=3,J0=4,Q0=5,K0=6,j0=7;var $u=300,fr=301,pr=302,gc=303,Ec=304,Wa=306,fn=1e3,Ss=1001,yc=1002,Hn=1003,tp=1004;var Po=1005;var fi=1006,Tl=1007;var Ts=1008;var Hi=1009,Ju=1010,Qu=1011,eo=1012,Lh=1013,Oi=1014,pi=1015,Fn=1016,Uh=1017,Nh=1018,mr=1020,Ku=35902,ju=1021,tf=1022,ni=1023,ef=1024,nf=1025,cr=1026,gr=1027,Hh=1028,Oh=1029,sf=1030,Bh=1031;var zh=1033,ha=33776,da=33777,ua=33778,fa=33779,Ac=35840,vc=35841,_c=35842,Mc=35843,Sc=36196,Tc=37492,bc=37496,wc=37808,Rc=37809,xc=37810,Cc=37811,Fc=37812,Pc=37813,Ic=37814,Dc=37815,Lc=37816,Uc=37817,Nc=37818,Hc=37819,Oc=37820,Bc=37821,pa=36492,zc=36494,kc=36495,rf=36283,Gc=36284,Vc=36285,Wc=36286;var ma=2300,Xc=2301,bl=2302,Ld=2400,Ud=2401,Nd=2402;var ep=3200,wr=3201;var of=0,np=1,Ki="",Ye="srgb",rs="srgb-linear",Xa="linear",Ue="srgb";var Gs=7680;var Hd=519,ip=512,sp=513,rp=514,af=515,op=516,ap=517,lp=518,cp=519,qc=35044;var Od="300 es",Li=2e3,ga=2001,ns=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let i=this._listeners[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},yn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var wl=Math.PI/180,Ea=180/Math.PI;function Ui(){let n=__sr()*4294967295|0,t=__sr()*4294967295|0,e=__sr()*4294967295|0,i=__sr()*4294967295|0;return(yn[n&255]+yn[n>>8&255]+yn[n>>16&255]+yn[n>>24&255]+"-"+yn[t&255]+yn[t>>8&255]+"-"+yn[t>>16&15|64]+yn[t>>24&255]+"-"+yn[e&63|128]+yn[e>>8&255]+"-"+yn[e>>16&255]+yn[e>>24&255]+yn[i&255]+yn[i>>8&255]+yn[i>>16&255]+yn[i>>24&255]).toLowerCase()}function vn(n,t,e){return Math.max(t,Math.min(e,n))}function hp(n,t){return(n%t+t)%t}function Rl(n,t,e){return(1-e)*n+e*t}function ui(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Ne(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var st=class n{constructor(t=0,e=0){n.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(vn(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=__sr(),this.y=__sr(),this}*[Symbol.iterator](){yield this.x,yield this.y}},se=class n{constructor(t,e,i,s,r,o,a,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c)}set(t,e,i,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],d=i[7],u=i[2],f=i[5],g=i[8],E=s[0],m=s[3],p=s[6],v=s[1],A=s[4],y=s[7],D=s[2],C=s[5],b=s[8];return r[0]=o*E+a*v+l*D,r[3]=o*m+a*A+l*C,r[6]=o*p+a*y+l*b,r[1]=c*E+h*v+d*D,r[4]=c*m+h*A+d*C,r[7]=c*p+h*y+d*b,r[2]=u*E+f*v+g*D,r[5]=u*m+f*A+g*C,r[8]=u*p+f*y+g*b,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=h*o-a*c,u=a*l-h*r,f=c*r-o*l,g=e*d+i*u+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let E=1/g;return t[0]=d*E,t[1]=(s*c-h*i)*E,t[2]=(a*i-s*o)*E,t[3]=u*E,t[4]=(h*e-s*l)*E,t[5]=(s*r-a*e)*E,t[6]=f*E,t[7]=(i*l-c*e)*E,t[8]=(o*e-i*r)*E,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(xl.makeScale(t,e)),this}rotate(t){return this.premultiply(xl.makeRotation(-t)),this}translate(t,e){return this.premultiply(xl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},xl=new se;function lf(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function ya(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function dp(){let n=ya("canvas");return n.style.display="block",n}var Bd={};function $r(n){n in Bd||(Bd[n]=!0,console.warn(n))}function up(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}function fp(n){let t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function pp(n){let t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var _e={enabled:!0,workingColorSpace:rs,spaces:{},convert:function(n,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===Ue&&(n.r=Ni(n.r),n.g=Ni(n.g),n.b=Ni(n.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(n.applyMatrix3(this.spaces[t].toXYZ),n.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===Ue&&(n.r=hr(n.r),n.g=hr(n.g),n.b=hr(n.b))),n},fromWorkingColorSpace:function(n,t){return this.convert(n,this.workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Ki?Xa:this.spaces[n].transfer},getLuminanceCoefficients:function(n,t=this.workingColorSpace){return n.fromArray(this.spaces[t].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,t,e){return n.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function Ni(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function hr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var zd=[.64,.33,.3,.6,.15,.06],kd=[.2126,.7152,.0722],Gd=[.3127,.329],Vd=new se().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Wd=new se().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);_e.define({[rs]:{primaries:zd,whitePoint:Gd,transfer:Xa,toXYZ:Vd,fromXYZ:Wd,luminanceCoefficients:kd,workingColorSpaceConfig:{unpackColorSpace:Ye},outputColorSpaceConfig:{drawingBufferColorSpace:Ye}},[Ye]:{primaries:zd,whitePoint:Gd,transfer:Ue,toXYZ:Vd,fromXYZ:Wd,luminanceCoefficients:kd,outputColorSpaceConfig:{drawingBufferColorSpace:Ye}}});var Vs,Yc=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Vs===void 0&&(Vs=ya("canvas")),Vs.width=t.width,Vs.height=t.height;let i=Vs.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=Vs}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=ya("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ni(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Ni(e[i]/255)*255):e[i]=Ni(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},mp=0,Aa=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:mp++}),this.uuid=Ui(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Cl(s[o].image)):r.push(Cl(s[o]))}else r=Cl(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function Cl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Yc.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var gp=0,xn=class n extends ns{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=Ss,s=Ss,r=fi,o=Ts,a=ni,l=Hi,c=n.DEFAULT_ANISOTROPY,h=Ki){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:gp++}),this.uuid=Ui(),this.name="",this.source=new Aa(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new st(0,0),this.repeat=new st(1,1),this.center=new st(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new se,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==$u)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case fn:t.x=t.x-Math.floor(t.x);break;case Ss:t.x=t.x<0?0:1;break;case yc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case fn:t.y=t.y-Math.floor(t.y);break;case Ss:t.y=t.y<0?0:1;break;case yc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};xn.DEFAULT_IMAGE=null;xn.DEFAULT_MAPPING=$u;xn.DEFAULT_ANISOTROPY=1;var He=class n{constructor(t=0,e=0,i=0,s=1){n.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],g=l[9],E=l[2],m=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-E)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+E)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let A=(c+1)/2,y=(f+1)/2,D=(p+1)/2,C=(h+u)/4,b=(d+E)/4,F=(g+m)/4;return A>y&&A>D?A<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(A),s=C/i,r=b/i):y>D?y<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),i=C/s,r=F/s):D<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(D),i=b/r,s=F/r),this.set(i,s,r,e),this}let v=Math.sqrt((m-g)*(m-g)+(d-E)*(d-E)+(u-h)*(u-h));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(d-E)/v,this.z=(u-h)/v,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=__sr(),this.y=__sr(),this.z=__sr(),this.w=__sr(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Zc=class extends ns{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new He(0,0,t,e),this.scissorTest=!1,this.viewport=new He(0,0,t,e);let s={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:fi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let r=new xn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Aa(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},cn=class extends Zc{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},va=class extends xn{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Hn,this.minFilter=Hn,this.wrapR=Ss,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var $c=class extends xn{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Hn,this.minFilter=Hn,this.wrapR=Ss,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var is=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],d=i[s+3],u=r[o+0],f=r[o+1],g=r[o+2],E=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d;return}if(a===1){t[e+0]=u,t[e+1]=f,t[e+2]=g,t[e+3]=E;return}if(d!==E||l!==u||c!==f||h!==g){let m=1-a,p=l*u+c*f+h*g+d*E,v=p>=0?1:-1,A=1-p*p;if(A>Number.EPSILON){let D=Math.sqrt(A),C=Math.atan2(D,p*v);m=Math.sin(m*C)/D,a=Math.sin(a*C)/D}let y=a*v;if(l=l*m+u*y,c=c*m+f*y,h=h*m+g*y,d=d*m+E*y,m===1-a){let D=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=D,c*=D,h*=D,d*=D}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],d=r[o],u=r[o+1],f=r[o+2],g=r[o+3];return t[e]=a*g+h*d+l*f-c*u,t[e+1]=l*g+h*u+c*d-a*f,t[e+2]=c*g+h*f+a*u-l*d,t[e+3]=h*g-a*d-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),d=a(r/2),u=l(i/2),f=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"YZX":this._x=u*h*d+c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d-u*f*g;break;case"XZY":this._x=u*h*d-c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d+u*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=i+a+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(i>a&&i>d){let f=2*Math.sqrt(1+i-a-d);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>d){let f=2*Math.sqrt(1+a-i-d);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-i-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(vn(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let i=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+i*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let f=1-e;return this._w=f*o+e*this._w,this._x=f*i+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),d=Math.sin((1-e)*h)/c,u=Math.sin(e*h)/c;return this._w=o*d+this._w*u,this._x=i*d+this._x*u,this._y=s*d+this._y*u,this._z=r*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*__sr(),e=2*Math.PI*__sr(),i=__sr(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},P=class n{constructor(t=0,e=0,i=0){n.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Xd.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Xd.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*i),h=2*(a*e-r*s),d=2*(r*i-o*e);return this.x=e+l*c+o*d-a*h,this.y=i+l*h+a*c-r*d,this.z=s+l*d+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Fl.copy(this).projectOnVector(t),this.sub(Fl)}reflect(t){return this.sub(Fl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(vn(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=__sr(),this.y=__sr(),this.z=__sr(),this}randomDirection(){let t=__sr()*Math.PI*2,e=__sr()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Fl=new P,Xd=new is,Bi=class{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(jn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(jn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=jn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,jn):jn.fromBufferAttribute(r,o),jn.applyMatrix4(t.matrixWorld),this.expandByPoint(jn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Io.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Io.copy(i.boundingBox)),Io.applyMatrix4(t.matrixWorld),this.union(Io)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,jn),jn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Or),Do.subVectors(this.max,Or),Ws.subVectors(t.a,Or),Xs.subVectors(t.b,Or),qs.subVectors(t.c,Or),qi.subVectors(Xs,Ws),Yi.subVectors(qs,Xs),ps.subVectors(Ws,qs);let e=[0,-qi.z,qi.y,0,-Yi.z,Yi.y,0,-ps.z,ps.y,qi.z,0,-qi.x,Yi.z,0,-Yi.x,ps.z,0,-ps.x,-qi.y,qi.x,0,-Yi.y,Yi.x,0,-ps.y,ps.x,0];return!Pl(e,Ws,Xs,qs,Do)||(e=[1,0,0,0,1,0,0,0,1],!Pl(e,Ws,Xs,qs,Do))?!1:(Lo.crossVectors(qi,Yi),e=[Lo.x,Lo.y,Lo.z],Pl(e,Ws,Xs,qs,Do))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,jn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(jn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ri[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ri[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ri[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ri[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ri[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ri[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ri[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ri[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ri),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Ri=[new P,new P,new P,new P,new P,new P,new P,new P],jn=new P,Io=new Bi,Ws=new P,Xs=new P,qs=new P,qi=new P,Yi=new P,ps=new P,Or=new P,Do=new P,Lo=new P,ms=new P;function Pl(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){ms.fromArray(n,r);let a=s.x*Math.abs(ms.x)+s.y*Math.abs(ms.y)+s.z*Math.abs(ms.z),l=t.dot(ms),c=e.dot(ms),h=i.dot(ms);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Ep=new Bi,Br=new P,Il=new P,zi=class{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):Ep.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Br.subVectors(t,this.center);let e=Br.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Br,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Il.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Br.copy(t.center).add(Il)),this.expandByPoint(Br.copy(t.center).sub(Il))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},xi=new P,Dl=new P,Uo=new P,Zi=new P,Ll=new P,No=new P,Ul=new P,no=class{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,xi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=xi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(xi.copy(this.origin).addScaledVector(this.direction,e),xi.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){Dl.copy(t).add(e).multiplyScalar(.5),Uo.copy(e).sub(t).normalize(),Zi.copy(this.origin).sub(Dl);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Uo),a=Zi.dot(this.direction),l=-Zi.dot(Uo),c=Zi.lengthSq(),h=Math.abs(1-o*o),d,u,f,g;if(h>0)if(d=o*l-a,u=o*a-l,g=r*h,d>=0)if(u>=-g)if(u<=g){let E=1/h;d*=E,u*=E,f=d*(d+o*u+2*a)+u*(o*d+u+2*l)+c}else u=r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Dl).addScaledVector(Uo,u),f}intersectSphere(t,e){xi.subVectors(t.center,this.origin);let i=xi.dot(this.direction),s=xi.dot(xi)-i*i,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(i=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(i=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(a=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,xi)!==null}intersectTriangle(t,e,i,s,r){Ll.subVectors(e,t),No.subVectors(i,t),Ul.crossVectors(Ll,No);let o=this.direction.dot(Ul),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Zi.subVectors(this.origin,t);let l=a*this.direction.dot(No.crossVectors(Zi,No));if(l<0)return null;let c=a*this.direction.dot(Ll.cross(Zi));if(c<0||l+c>o)return null;let h=-a*Zi.dot(Ul);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},De=class n{constructor(t,e,i,s,r,o,a,l,c,h,d,u,f,g,E,m){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c,h,d,u,f,g,E,m)}set(t,e,i,s,r,o,a,l,c,h,d,u,f,g,E,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=g,p[11]=E,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,i=t.elements,s=1/Ys.setFromMatrixColumn(t,0).length(),r=1/Ys.setFromMatrixColumn(t,1).length(),o=1/Ys.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let u=o*h,f=o*d,g=a*h,E=a*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=f+g*c,e[5]=u-E*c,e[9]=-a*l,e[2]=E-u*c,e[6]=g+f*c,e[10]=o*l}else if(t.order==="YXZ"){let u=l*h,f=l*d,g=c*h,E=c*d;e[0]=u+E*a,e[4]=g*a-f,e[8]=o*c,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=f*a-g,e[6]=E+u*a,e[10]=o*l}else if(t.order==="ZXY"){let u=l*h,f=l*d,g=c*h,E=c*d;e[0]=u-E*a,e[4]=-o*d,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*h,e[9]=E-u*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let u=o*h,f=o*d,g=a*h,E=a*d;e[0]=l*h,e[4]=g*c-f,e[8]=u*c+E,e[1]=l*d,e[5]=E*c+u,e[9]=f*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let u=o*l,f=o*c,g=a*l,E=a*c;e[0]=l*h,e[4]=E-u*d,e[8]=g*d+f,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*d+g,e[10]=u-E*d}else if(t.order==="XZY"){let u=o*l,f=o*c,g=a*l,E=a*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+E,e[5]=o*h,e[9]=f*d-g,e[2]=g*d-f,e[6]=a*h,e[10]=E*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(yp,t,Ap)}lookAt(t,e,i){let s=this.elements;return Un.subVectors(t,e),Un.lengthSq()===0&&(Un.z=1),Un.normalize(),$i.crossVectors(i,Un),$i.lengthSq()===0&&(Math.abs(i.z)===1?Un.x+=1e-4:Un.z+=1e-4,Un.normalize(),$i.crossVectors(i,Un)),$i.normalize(),Ho.crossVectors(Un,$i),s[0]=$i.x,s[4]=Ho.x,s[8]=Un.x,s[1]=$i.y,s[5]=Ho.y,s[9]=Un.y,s[2]=$i.z,s[6]=Ho.z,s[10]=Un.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],d=i[5],u=i[9],f=i[13],g=i[2],E=i[6],m=i[10],p=i[14],v=i[3],A=i[7],y=i[11],D=i[15],C=s[0],b=s[4],F=s[8],S=s[12],_=s[1],I=s[5],O=s[9],z=s[13],X=s[2],j=s[6],Z=s[10],lt=s[14],Y=s[3],ft=s[7],vt=s[11],Ot=s[15];return r[0]=o*C+a*_+l*X+c*Y,r[4]=o*b+a*I+l*j+c*ft,r[8]=o*F+a*O+l*Z+c*vt,r[12]=o*S+a*z+l*lt+c*Ot,r[1]=h*C+d*_+u*X+f*Y,r[5]=h*b+d*I+u*j+f*ft,r[9]=h*F+d*O+u*Z+f*vt,r[13]=h*S+d*z+u*lt+f*Ot,r[2]=g*C+E*_+m*X+p*Y,r[6]=g*b+E*I+m*j+p*ft,r[10]=g*F+E*O+m*Z+p*vt,r[14]=g*S+E*z+m*lt+p*Ot,r[3]=v*C+A*_+y*X+D*Y,r[7]=v*b+A*I+y*j+D*ft,r[11]=v*F+A*O+y*Z+D*vt,r[15]=v*S+A*z+y*lt+D*Ot,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],f=t[14],g=t[3],E=t[7],m=t[11],p=t[15];return g*(+r*l*d-s*c*d-r*a*u+i*c*u+s*a*f-i*l*f)+E*(+e*l*f-e*c*u+r*o*u-s*o*f+s*c*h-r*l*h)+m*(+e*c*d-e*a*f-r*o*d+i*o*f+r*a*h-i*c*h)+p*(-s*a*h-e*l*d+e*a*u+s*o*d-i*o*u+i*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],f=t[11],g=t[12],E=t[13],m=t[14],p=t[15],v=d*m*c-E*u*c+E*l*f-a*m*f-d*l*p+a*u*p,A=g*u*c-h*m*c-g*l*f+o*m*f+h*l*p-o*u*p,y=h*E*c-g*d*c+g*a*f-o*E*f-h*a*p+o*d*p,D=g*d*l-h*E*l-g*a*u+o*E*u+h*a*m-o*d*m,C=e*v+i*A+s*y+r*D;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let b=1/C;return t[0]=v*b,t[1]=(E*u*r-d*m*r-E*s*f+i*m*f+d*s*p-i*u*p)*b,t[2]=(a*m*r-E*l*r+E*s*c-i*m*c-a*s*p+i*l*p)*b,t[3]=(d*l*r-a*u*r-d*s*c+i*u*c+a*s*f-i*l*f)*b,t[4]=A*b,t[5]=(h*m*r-g*u*r+g*s*f-e*m*f-h*s*p+e*u*p)*b,t[6]=(g*l*r-o*m*r-g*s*c+e*m*c+o*s*p-e*l*p)*b,t[7]=(o*u*r-h*l*r+h*s*c-e*u*c-o*s*f+e*l*f)*b,t[8]=y*b,t[9]=(g*d*r-h*E*r-g*i*f+e*E*f+h*i*p-e*d*p)*b,t[10]=(o*E*r-g*a*r+g*i*c-e*E*c-o*i*p+e*a*p)*b,t[11]=(h*a*r-o*d*r-h*i*c+e*d*c+o*i*f-e*a*f)*b,t[12]=D*b,t[13]=(h*E*s-g*d*s+g*i*u-e*E*u-h*i*m+e*d*m)*b,t[14]=(g*a*s-o*E*s-g*i*l+e*E*l+o*i*m-e*a*m)*b,t[15]=(o*d*s-h*a*s+h*i*l-e*d*l-o*i*u+e*a*u)*b,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,d=a+a,u=r*c,f=r*h,g=r*d,E=o*h,m=o*d,p=a*d,v=l*c,A=l*h,y=l*d,D=i.x,C=i.y,b=i.z;return s[0]=(1-(E+p))*D,s[1]=(f+y)*D,s[2]=(g-A)*D,s[3]=0,s[4]=(f-y)*C,s[5]=(1-(u+p))*C,s[6]=(m+v)*C,s[7]=0,s[8]=(g+A)*b,s[9]=(m-v)*b,s[10]=(1-(u+E))*b,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements,r=Ys.set(s[0],s[1],s[2]).length(),o=Ys.set(s[4],s[5],s[6]).length(),a=Ys.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],ti.copy(this);let c=1/r,h=1/o,d=1/a;return ti.elements[0]*=c,ti.elements[1]*=c,ti.elements[2]*=c,ti.elements[4]*=h,ti.elements[5]*=h,ti.elements[6]*=h,ti.elements[8]*=d,ti.elements[9]*=d,ti.elements[10]*=d,e.setFromRotationMatrix(ti),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,s,r,o,a=Li){let l=this.elements,c=2*r/(e-t),h=2*r/(i-s),d=(e+t)/(e-t),u=(i+s)/(i-s),f,g;if(a===Li)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===ga)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=Li){let l=this.elements,c=1/(e-t),h=1/(i-s),d=1/(o-r),u=(e+t)*c,f=(i+s)*h,g,E;if(a===Li)g=(o+r)*d,E=-2*d;else if(a===ga)g=r*d,E=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=E,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},Ys=new P,ti=new De,yp=new P(0,0,0),Ap=new P(1,1,1),$i=new P,Ho=new P,Un=new P,qd=new De,Yd=new is,Ei=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(vn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-vn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(vn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-vn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(vn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-vn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return qd.makeRotationFromQuaternion(t),this.setFromRotationMatrix(qd,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Yd.setFromEuler(this),this.setFromQuaternion(Yd,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ei.DEFAULT_ORDER="XYZ";var _a=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},vp=0,Zd=new P,Zs=new is,Ci=new De,Oo=new P,zr=new P,_p=new P,Mp=new is,$d=new P(1,0,0),Jd=new P(0,1,0),Qd=new P(0,0,1),Kd={type:"added"},Sp={type:"removed"},$s={type:"childadded",child:null},Nl={type:"childremoved",child:null},Ze=class n extends ns{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:vp++}),this.uuid=Ui(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new P,e=new Ei,i=new is,s=new P(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new De},normalMatrix:{value:new se}}),this.matrix=new De,this.matrixWorld=new De,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new _a,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Zs.setFromAxisAngle(t,e),this.quaternion.multiply(Zs),this}rotateOnWorldAxis(t,e){return Zs.setFromAxisAngle(t,e),this.quaternion.premultiply(Zs),this}rotateX(t){return this.rotateOnAxis($d,t)}rotateY(t){return this.rotateOnAxis(Jd,t)}rotateZ(t){return this.rotateOnAxis(Qd,t)}translateOnAxis(t,e){return Zd.copy(t).applyQuaternion(this.quaternion),this.position.add(Zd.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis($d,t)}translateY(t){return this.translateOnAxis(Jd,t)}translateZ(t){return this.translateOnAxis(Qd,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ci.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Oo.copy(t):Oo.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),zr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ci.lookAt(zr,Oo,this.up):Ci.lookAt(Oo,zr,this.up),this.quaternion.setFromRotationMatrix(Ci),s&&(Ci.extractRotation(s.matrixWorld),Zs.setFromRotationMatrix(Ci),this.quaternion.premultiply(Zs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Kd),$s.child=t,this.dispatchEvent($s),$s.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Sp),Nl.child=t,this.dispatchEvent(Nl),Nl.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ci.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ci.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ci),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Kd),$s.child=t,this.dispatchEvent($s),$s.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zr,t,_p),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zr,Mp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),d=o(t.shapes),u=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}};Ze.DEFAULT_UP=new P(0,1,0);Ze.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ze.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ei=new P,Fi=new P,Hl=new P,Pi=new P,Js=new P,Qs=new P,jd=new P,Ol=new P,Bl=new P,zl=new P,kl=new He,Gl=new He,Vl=new He,ji=class n{constructor(t=new P,e=new P,i=new P){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),ei.subVectors(t,e),s.cross(ei);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){ei.subVectors(s,e),Fi.subVectors(i,e),Hl.subVectors(t,e);let o=ei.dot(ei),a=ei.dot(Fi),l=ei.dot(Hl),c=Fi.dot(Fi),h=Fi.dot(Hl),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(c*l-a*h)*u,g=(o*h-a*l)*u;return r.set(1-f-g,g,f)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Pi)===null?!1:Pi.x>=0&&Pi.y>=0&&Pi.x+Pi.y<=1}static getInterpolation(t,e,i,s,r,o,a,l){return this.getBarycoord(t,e,i,s,Pi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Pi.x),l.addScaledVector(o,Pi.y),l.addScaledVector(a,Pi.z),l)}static getInterpolatedAttribute(t,e,i,s,r,o){return kl.setScalar(0),Gl.setScalar(0),Vl.setScalar(0),kl.fromBufferAttribute(t,e),Gl.fromBufferAttribute(t,i),Vl.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(kl,r.x),o.addScaledVector(Gl,r.y),o.addScaledVector(Vl,r.z),o}static isFrontFacing(t,e,i,s){return ei.subVectors(i,e),Fi.subVectors(t,e),ei.cross(Fi).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ei.subVectors(this.c,this.b),Fi.subVectors(this.a,this.b),ei.cross(Fi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,o,a;Js.subVectors(s,i),Qs.subVectors(r,i),Ol.subVectors(t,i);let l=Js.dot(Ol),c=Qs.dot(Ol);if(l<=0&&c<=0)return e.copy(i);Bl.subVectors(t,s);let h=Js.dot(Bl),d=Qs.dot(Bl);if(h>=0&&d<=h)return e.copy(s);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(i).addScaledVector(Js,o);zl.subVectors(t,r);let f=Js.dot(zl),g=Qs.dot(zl);if(g>=0&&f<=g)return e.copy(r);let E=f*c-l*g;if(E<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(i).addScaledVector(Qs,a);let m=h*g-f*d;if(m<=0&&d-h>=0&&f-g>=0)return jd.subVectors(r,s),a=(d-h)/(d-h+(f-g)),e.copy(s).addScaledVector(jd,a);let p=1/(m+E+u);return o=E*p,a=u*p,e.copy(i).addScaledVector(Js,o).addScaledVector(Qs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},cf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ji={h:0,s:0,l:0},Bo={h:0,s:0,l:0};function Wl(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var ht=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ye){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,_e.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=_e.workingColorSpace){return this.r=t,this.g=e,this.b=i,_e.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=_e.workingColorSpace){if(t=hp(t,1),e=vn(e,0,1),i=vn(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=Wl(o,r,t+1/3),this.g=Wl(o,r,t),this.b=Wl(o,r,t-1/3)}return _e.toWorkingColorSpace(this,s),this}setStyle(t,e=Ye){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ye){let i=cf[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ni(t.r),this.g=Ni(t.g),this.b=Ni(t.b),this}copyLinearToSRGB(t){return this.r=hr(t.r),this.g=hr(t.g),this.b=hr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ye){return _e.fromWorkingColorSpace(An.copy(this),t),Math.round(vn(An.r*255,0,255))*65536+Math.round(vn(An.g*255,0,255))*256+Math.round(vn(An.b*255,0,255))}getHexString(t=Ye){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=_e.workingColorSpace){_e.fromWorkingColorSpace(An.copy(this),e);let i=An.r,s=An.g,r=An.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=_e.workingColorSpace){return _e.fromWorkingColorSpace(An.copy(this),e),t.r=An.r,t.g=An.g,t.b=An.b,t}getStyle(t=Ye){_e.fromWorkingColorSpace(An.copy(this),t);let e=An.r,i=An.g,s=An.b;return t!==Ye?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Ji),this.setHSL(Ji.h+t,Ji.s+e,Ji.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Ji),t.getHSL(Bo);let i=Rl(Ji.h,Bo.h,e),s=Rl(Ji.s,Bo.s,e),r=Rl(Ji.l,Bo.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},An=new ht;ht.NAMES=cf;var Tp=0,yi=class extends ns{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Tp++}),this.uuid=Ui(),this.name="",this.blending=ts,this.side=es,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ac,this.blendDst=lc,this.blendEquation=_s,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ht(0,0,0),this.blendAlpha=0,this.depthFunc=ur,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Hd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Gs,this.stencilZFail=Gs,this.stencilZPass=Gs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ts&&(i.blending=this.blending),this.side!==es&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ac&&(i.blendSrc=this.blendSrc),this.blendDst!==lc&&(i.blendDst=this.blendDst),this.blendEquation!==_s&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ur&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Hd&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Gs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Gs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Gs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},pe=class extends yi{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ei,this.combine=Zu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var en=new P,zo=new st,nn=class{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=qc,this.updateRanges=[],this.gpuType=pi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)zo.fromBufferAttribute(this,e),zo.applyMatrix3(t),this.setXY(e,zo.x,zo.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)en.fromBufferAttribute(this,e),en.applyMatrix3(t),this.setXYZ(e,en.x,en.y,en.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)en.fromBufferAttribute(this,e),en.applyMatrix4(t),this.setXYZ(e,en.x,en.y,en.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)en.fromBufferAttribute(this,e),en.applyNormalMatrix(t),this.setXYZ(e,en.x,en.y,en.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)en.fromBufferAttribute(this,e),en.transformDirection(t),this.setXYZ(e,en.x,en.y,en.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=ui(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Ne(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ui(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ne(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ui(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ne(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ui(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ne(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ui(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ne(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Ne(e,this.array),i=Ne(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=Ne(e,this.array),i=Ne(i,this.array),s=Ne(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=Ne(e,this.array),i=Ne(i,this.array),s=Ne(s,this.array),r=Ne(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==qc&&(t.usage=this.usage),t}};var Ma=class extends nn{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var Sa=class extends nn{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var fe=class extends nn{constructor(t,e,i){super(new Float32Array(t),e,i)}},bp=0,Vn=new De,Xl=new Ze,Ks=new P,Nn=new Bi,kr=new Bi,an=new P,$e=class n extends ns{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:bp++}),this.uuid=Ui(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(lf(t)?Sa:Ma)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new se().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Vn.makeRotationFromQuaternion(t),this.applyMatrix4(Vn),this}rotateX(t){return Vn.makeRotationX(t),this.applyMatrix4(Vn),this}rotateY(t){return Vn.makeRotationY(t),this.applyMatrix4(Vn),this}rotateZ(t){return Vn.makeRotationZ(t),this.applyMatrix4(Vn),this}translate(t,e,i){return Vn.makeTranslation(t,e,i),this.applyMatrix4(Vn),this}scale(t,e,i){return Vn.makeScale(t,e,i),this.applyMatrix4(Vn),this}lookAt(t){return Xl.lookAt(t),Xl.updateMatrix(),this.applyMatrix4(Xl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ks).negate(),this.translate(Ks.x,Ks.y,Ks.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new fe(i,3))}else{for(let i=0,s=e.count;i<s;i++){let r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Bi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];Nn.setFromBufferAttribute(r),this.morphTargetsRelative?(an.addVectors(this.boundingBox.min,Nn.min),this.boundingBox.expandByPoint(an),an.addVectors(this.boundingBox.max,Nn.max),this.boundingBox.expandByPoint(an)):(this.boundingBox.expandByPoint(Nn.min),this.boundingBox.expandByPoint(Nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new zi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){let i=this.boundingSphere.center;if(Nn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];kr.setFromBufferAttribute(a),this.morphTargetsRelative?(an.addVectors(Nn.min,kr.min),Nn.expandByPoint(an),an.addVectors(Nn.max,kr.max),Nn.expandByPoint(an)):(Nn.expandByPoint(kr.min),Nn.expandByPoint(kr.max))}Nn.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)an.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(an));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)an.fromBufferAttribute(a,c),l&&(Ks.fromBufferAttribute(t,c),an.add(Ks)),s=Math.max(s,i.distanceToSquared(an))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new nn(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let F=0;F<i.count;F++)a[F]=new P,l[F]=new P;let c=new P,h=new P,d=new P,u=new st,f=new st,g=new st,E=new P,m=new P;function p(F,S,_){c.fromBufferAttribute(i,F),h.fromBufferAttribute(i,S),d.fromBufferAttribute(i,_),u.fromBufferAttribute(r,F),f.fromBufferAttribute(r,S),g.fromBufferAttribute(r,_),h.sub(c),d.sub(c),f.sub(u),g.sub(u);let I=1/(f.x*g.y-g.x*f.y);isFinite(I)&&(E.copy(h).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(I),m.copy(d).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(I),a[F].add(E),a[S].add(E),a[_].add(E),l[F].add(m),l[S].add(m),l[_].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let F=0,S=v.length;F<S;++F){let _=v[F],I=_.start,O=_.count;for(let z=I,X=I+O;z<X;z+=3)p(t.getX(z+0),t.getX(z+1),t.getX(z+2))}let A=new P,y=new P,D=new P,C=new P;function b(F){D.fromBufferAttribute(s,F),C.copy(D);let S=a[F];A.copy(S),A.sub(D.multiplyScalar(D.dot(S))).normalize(),y.crossVectors(C,S);let I=y.dot(l[F])<0?-1:1;o.setXYZW(F,A.x,A.y,A.z,I)}for(let F=0,S=v.length;F<S;++F){let _=v[F],I=_.start,O=_.count;for(let z=I,X=I+O;z<X;z+=3)b(t.getX(z+0)),b(t.getX(z+1)),b(t.getX(z+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new nn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let u=0,f=i.count;u<f;u++)i.setXYZ(u,0,0,0);let s=new P,r=new P,o=new P,a=new P,l=new P,c=new P,h=new P,d=new P;if(t)for(let u=0,f=t.count;u<f;u+=3){let g=t.getX(u+0),E=t.getX(u+1),m=t.getX(u+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,E),o.fromBufferAttribute(e,m),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,m),a.add(h),l.add(h),c.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(E,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)an.fromBufferAttribute(t,e),an.normalize(),t.setXYZ(e,an.x,an.y,an.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h),f=0,g=0;for(let E=0,m=l.length;E<m;E++){a.isInterleavedBufferAttribute?f=l[E]*a.data.stride+a.offset:f=l[E]*h;for(let p=0;p<h;p++)u[g++]=c[f++]}return new nn(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,i);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=t(u,i);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone(e));let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},tu=new De,gs=new no,ko=new zi,eu=new P,Go=new P,Vo=new P,Wo=new P,ql=new P,Xo=new P,nu=new P,qo=new P,k=class extends Ze{constructor(t=new $e,e=new pe){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Xo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],d=r[l];h!==0&&(ql.fromBufferAttribute(d,t),o?Xo.addScaledVector(ql,h):Xo.addScaledVector(ql.sub(e),h))}e.add(Xo)}return e}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ko.copy(i.boundingSphere),ko.applyMatrix4(r),gs.copy(t.ray).recast(t.near),!(ko.containsPoint(gs.origin)===!1&&(gs.intersectSphere(ko,eu)===null||gs.origin.distanceToSquared(eu)>(t.far-t.near)**2))&&(tu.copy(r).invert(),gs.copy(t.ray).applyMatrix4(tu),!(i.boundingBox!==null&&gs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,gs)))}_computeIntersections(t,e,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,E=u.length;g<E;g++){let m=u[g],p=o[m.materialIndex],v=Math.max(m.start,f.start),A=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let y=v,D=A;y<D;y+=3){let C=a.getX(y),b=a.getX(y+1),F=a.getX(y+2);s=Yo(this,p,t,i,c,h,d,C,b,F),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),E=Math.min(a.count,f.start+f.count);for(let m=g,p=E;m<p;m+=3){let v=a.getX(m),A=a.getX(m+1),y=a.getX(m+2);s=Yo(this,o,t,i,c,h,d,v,A,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,E=u.length;g<E;g++){let m=u[g],p=o[m.materialIndex],v=Math.max(m.start,f.start),A=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let y=v,D=A;y<D;y+=3){let C=y,b=y+1,F=y+2;s=Yo(this,p,t,i,c,h,d,C,b,F),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),E=Math.min(l.count,f.start+f.count);for(let m=g,p=E;m<p;m+=3){let v=m,A=m+1,y=m+2;s=Yo(this,o,t,i,c,h,d,v,A,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function wp(n,t,e,i,s,r,o,a){let l;if(t.side===ln?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,t.side===es,a),l===null)return null;qo.copy(a),qo.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(qo);return c<e.near||c>e.far?null:{distance:c,point:qo.clone(),object:n}}function Yo(n,t,e,i,s,r,o,a,l,c){n.getVertexPosition(a,Go),n.getVertexPosition(l,Vo),n.getVertexPosition(c,Wo);let h=wp(n,t,e,i,Go,Vo,Wo,nu);if(h){let d=new P;ji.getBarycoord(nu,Go,Vo,Wo,d),s&&(h.uv=ji.getInterpolatedAttribute(s,a,l,c,d,new st)),r&&(h.uv1=ji.getInterpolatedAttribute(r,a,l,c,d,new st)),o&&(h.normal=ji.getInterpolatedAttribute(o,a,l,c,d,new P),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new P,materialIndex:0};ji.getNormal(Go,Vo,Wo,u.normal),h.face=u,h.barycoord=d}return h}var Cn=class n extends $e{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],d=[],u=0,f=0;g("z","y","x",-1,-1,i,e,t,o,r,0),g("z","y","x",1,-1,i,e,-t,o,r,1),g("x","z","y",1,1,t,i,e,s,o,2),g("x","z","y",1,-1,t,i,-e,s,o,3),g("x","y","z",1,-1,t,e,i,s,r,4),g("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new fe(c,3)),this.setAttribute("normal",new fe(h,3)),this.setAttribute("uv",new fe(d,2));function g(E,m,p,v,A,y,D,C,b,F,S){let _=y/b,I=D/F,O=y/2,z=D/2,X=C/2,j=b+1,Z=F+1,lt=0,Y=0,ft=new P;for(let vt=0;vt<Z;vt++){let Ot=vt*I-z;for(let ce=0;ce<j;ce++){let Be=ce*_-O;ft[E]=Be*v,ft[m]=Ot*A,ft[p]=X,c.push(ft.x,ft.y,ft.z),ft[E]=0,ft[m]=0,ft[p]=C>0?1:-1,h.push(ft.x,ft.y,ft.z),d.push(ce/b),d.push(1-vt/F),lt+=1}}for(let vt=0;vt<F;vt++)for(let Ot=0;Ot<b;Ot++){let ce=u+Ot+j*vt,Be=u+Ot+j*(vt+1),J=u+(Ot+1)+j*(vt+1),ct=u+(Ot+1)+j*vt;l.push(ce,Be,ct),l.push(Be,J,ct),Y+=6}a.addGroup(f,Y,S),f+=Y,u+=lt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Er(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function bn(n){let t={};for(let e=0;e<n.length;e++){let i=Er(n[e]);for(let s in i)t[s]=i[s]}return t}function Rp(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function hf(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:_e.workingColorSpace}var Rr={clone:Er,merge:bn},xp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Cp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,hn=class extends yi{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=xp,this.fragmentShader=Cp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Er(t.uniforms),this.uniformsGroups=Rp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}},Ta=class extends Ze{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new De,this.projectionMatrix=new De,this.projectionMatrixInverse=new De,this.coordinateSystem=Li}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Qi=new P,iu=new st,su=new st,un=class extends Ta{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Ea*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(wl*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ea*2*Math.atan(Math.tan(wl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Qi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Qi.x,Qi.y).multiplyScalar(-t/Qi.z),Qi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Qi.x,Qi.y).multiplyScalar(-t/Qi.z)}getViewSize(t,e){return this.getViewBounds(t,iu,su),e.subVectors(su,iu)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(wl*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},js=-90,tr=1,Jc=class extends Ze{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new un(js,tr,t,e);s.layers=this.layers,this.add(s);let r=new un(js,tr,t,e);r.layers=this.layers,this.add(r);let o=new un(js,tr,t,e);o.layers=this.layers,this.add(o);let a=new un(js,tr,t,e);a.layers=this.layers,this.add(a);let l=new un(js,tr,t,e);l.layers=this.layers,this.add(l);let c=new un(js,tr,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===Li)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ga)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let E=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,o),t.setRenderTarget(i,2,s),t.render(e,a),t.setRenderTarget(i,3,s),t.render(e,l),t.setRenderTarget(i,4,s),t.render(e,c),i.texture.generateMipmaps=E,t.setRenderTarget(i,5,s),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},ba=class extends xn{constructor(t,e,i,s,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:fr,super(t,e,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Qc=class extends cn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new ba(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:fi}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Cn(5,5,5),r=new hn({name:"CubemapFromEquirect",uniforms:Er(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ln,blending:mi});r.uniforms.tEquirect.value=e;let o=new k(s,r),a=e.minFilter;return e.minFilter===Ts&&(e.minFilter=fi),new Jc(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}},Yl=new P,Fp=new P,Pp=new se,Di=class{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=Yl.subVectors(i,e).cross(Fp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let i=t.delta(Yl),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||Pp.getNormalMatrix(t),s=this.coplanarPoint(Yl).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Es=new zi,Zo=new P,io=class{constructor(t=new Di,e=new Di,i=new Di,s=new Di,r=new Di,o=new Di){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Li){let i=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],d=s[6],u=s[7],f=s[8],g=s[9],E=s[10],m=s[11],p=s[12],v=s[13],A=s[14],y=s[15];if(i[0].setComponents(l-r,u-c,m-f,y-p).normalize(),i[1].setComponents(l+r,u+c,m+f,y+p).normalize(),i[2].setComponents(l+o,u+h,m+g,y+v).normalize(),i[3].setComponents(l-o,u-h,m-g,y-v).normalize(),i[4].setComponents(l-a,u-d,m-E,y-A).normalize(),e===Li)i[5].setComponents(l+a,u+d,m+E,y+A).normalize();else if(e===ga)i[5].setComponents(a,d,E,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Es.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Es.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Es)}intersectsSprite(t){return Es.center.set(0,0,0),Es.radius=.7071067811865476,Es.applyMatrix4(t.matrixWorld),this.intersectsSphere(Es)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(Zo.x=s.normal.x>0?t.max.x:t.min.x,Zo.y=s.normal.y>0?t.max.y:t.min.y,Zo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Zo)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function df(){let n=null,t=!1,e=null,i=null;function s(r,o){e(r,o),i=n.__noRaf(s)}return{start:function(){t!==!0&&e!==null&&(i=n.__noRaf(s),t=!0)},stop:function(){n.__noCaf(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function Ip(n){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,d=c.byteLength,u=n.createBuffer();n.bindBuffer(l,u),n.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){let h=l.array,d=l.updateRanges;if(n.bindBuffer(c,a),d.length===0)n.bufferSubData(c,0,h);else{d.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<d.length;f++){let g=d[u],E=d[f];E.start<=g.start+g.count+1?g.count=Math.max(g.count,E.start+E.count-g.start):(++u,d[u]=E)}d.length=u+1;for(let f=0,g=d.length;f<g;f++){let E=d[f];n.bufferSubData(c,E.start*h.BYTES_PER_ELEMENT,h,E.start,E.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var bt=class n extends $e{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,d=t/a,u=e/l,f=[],g=[],E=[],m=[];for(let p=0;p<h;p++){let v=p*u-o;for(let A=0;A<c;A++){let y=A*d-r;g.push(y,-v,0),E.push(0,0,1),m.push(A/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let v=0;v<a;v++){let A=v+c*p,y=v+c*(p+1),D=v+1+c*(p+1),C=v+1+c*p;f.push(A,y,C),f.push(y,D,C)}this.setIndex(f),this.setAttribute("position",new fe(g,3)),this.setAttribute("normal",new fe(E,3)),this.setAttribute("uv",new fe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}},Dp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Lp=`#ifdef USE_ALPHAHASH
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
#endif`,Up=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Np=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Hp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Op=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Bp=`#ifdef USE_AOMAP
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
#endif`,zp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,kp=`#ifdef USE_BATCHING
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
#endif`,Gp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Vp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Wp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Xp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,qp=`#ifdef USE_IRIDESCENCE
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
#endif`,Yp=`#ifdef USE_BUMPMAP
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
#endif`,Zp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,$p=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Jp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Qp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Kp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,jp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,tm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,em=`#if defined( USE_COLOR_ALPHA )
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
#endif`,nm=`#define PI 3.141592653589793
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
} // validated`,im=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,sm=`vec3 transformedNormal = objectNormal;
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
#endif`,rm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,om=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,am=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,lm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,cm="gl_FragColor = linearToOutputTexel( gl_FragColor );",hm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,dm=`#ifdef USE_ENVMAP
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
#endif`,um=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,fm=`#ifdef USE_ENVMAP
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
#endif`,pm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,mm=`#ifdef USE_ENVMAP
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
#endif`,gm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Em=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ym=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Am=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,vm=`#ifdef USE_GRADIENTMAP
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
}`,_m=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Mm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Sm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Tm=`uniform bool receiveShadow;
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
#endif`,bm=`#ifdef USE_ENVMAP
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
#endif`,wm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Rm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,xm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Cm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Fm=`PhysicalMaterial material;
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
#endif`,Pm=`struct PhysicalMaterial {
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
}`,Im=`
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
#endif`,Dm=`#if defined( RE_IndirectDiffuse )
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
#endif`,Lm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Um=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Nm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Hm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Om=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Bm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,zm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,km=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Gm=`#if defined( USE_POINTS_UV )
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
#endif`,Vm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Wm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Xm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,qm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ym=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Zm=`#ifdef USE_MORPHTARGETS
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
#endif`,$m=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Jm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Qm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Km=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,t1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,e1=`#ifdef USE_NORMALMAP
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
#endif`,n1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,i1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,s1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,r1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,o1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,a1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,l1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,c1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,h1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,d1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,u1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,f1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,p1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,m1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,g1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,E1=`float getShadowMask() {
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
}`,y1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,A1=`#ifdef USE_SKINNING
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
#endif`,v1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,_1=`#ifdef USE_SKINNING
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
#endif`,M1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,S1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,T1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,b1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,w1=`#ifdef USE_TRANSMISSION
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
#endif`,R1=`#ifdef USE_TRANSMISSION
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
#endif`,x1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,C1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,F1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,P1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,I1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,D1=`uniform sampler2D t2D;
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
}`,L1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,U1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,N1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,H1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,O1=`#include <common>
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
}`,B1=`#if DEPTH_PACKING == 3200
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
}`,z1=`#define DISTANCE
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
}`,k1=`#define DISTANCE
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
}`,G1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,V1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,W1=`uniform float scale;
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
}`,X1=`uniform vec3 diffuse;
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
}`,q1=`#include <common>
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
}`,Y1=`uniform vec3 diffuse;
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
}`,Z1=`#define LAMBERT
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
}`,$1=`#define LAMBERT
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
}`,J1=`#define MATCAP
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
}`,Q1=`#define MATCAP
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
}`,K1=`#define NORMAL
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
}`,j1=`#define NORMAL
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
}`,t2=`#define PHONG
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
}`,e2=`#define PHONG
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
}`,n2=`#define STANDARD
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
}`,i2=`#define STANDARD
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
}`,s2=`#define TOON
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
}`,r2=`#define TOON
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
}`,o2=`uniform float size;
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
}`,a2=`uniform vec3 diffuse;
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
}`,l2=`#include <common>
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
}`,c2=`uniform vec3 color;
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
}`,h2=`uniform float rotation;
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
}`,d2=`uniform vec3 diffuse;
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
}`,ae={alphahash_fragment:Dp,alphahash_pars_fragment:Lp,alphamap_fragment:Up,alphamap_pars_fragment:Np,alphatest_fragment:Hp,alphatest_pars_fragment:Op,aomap_fragment:Bp,aomap_pars_fragment:zp,batching_pars_vertex:kp,batching_vertex:Gp,begin_vertex:Vp,beginnormal_vertex:Wp,bsdfs:Xp,iridescence_fragment:qp,bumpmap_pars_fragment:Yp,clipping_planes_fragment:Zp,clipping_planes_pars_fragment:$p,clipping_planes_pars_vertex:Jp,clipping_planes_vertex:Qp,color_fragment:Kp,color_pars_fragment:jp,color_pars_vertex:tm,color_vertex:em,common:nm,cube_uv_reflection_fragment:im,defaultnormal_vertex:sm,displacementmap_pars_vertex:rm,displacementmap_vertex:om,emissivemap_fragment:am,emissivemap_pars_fragment:lm,colorspace_fragment:cm,colorspace_pars_fragment:hm,envmap_fragment:dm,envmap_common_pars_fragment:um,envmap_pars_fragment:fm,envmap_pars_vertex:pm,envmap_physical_pars_fragment:bm,envmap_vertex:mm,fog_vertex:gm,fog_pars_vertex:Em,fog_fragment:ym,fog_pars_fragment:Am,gradientmap_pars_fragment:vm,lightmap_pars_fragment:_m,lights_lambert_fragment:Mm,lights_lambert_pars_fragment:Sm,lights_pars_begin:Tm,lights_toon_fragment:wm,lights_toon_pars_fragment:Rm,lights_phong_fragment:xm,lights_phong_pars_fragment:Cm,lights_physical_fragment:Fm,lights_physical_pars_fragment:Pm,lights_fragment_begin:Im,lights_fragment_maps:Dm,lights_fragment_end:Lm,logdepthbuf_fragment:Um,logdepthbuf_pars_fragment:Nm,logdepthbuf_pars_vertex:Hm,logdepthbuf_vertex:Om,map_fragment:Bm,map_pars_fragment:zm,map_particle_fragment:km,map_particle_pars_fragment:Gm,metalnessmap_fragment:Vm,metalnessmap_pars_fragment:Wm,morphinstance_vertex:Xm,morphcolor_vertex:qm,morphnormal_vertex:Ym,morphtarget_pars_vertex:Zm,morphtarget_vertex:$m,normal_fragment_begin:Jm,normal_fragment_maps:Qm,normal_pars_fragment:Km,normal_pars_vertex:jm,normal_vertex:t1,normalmap_pars_fragment:e1,clearcoat_normal_fragment_begin:n1,clearcoat_normal_fragment_maps:i1,clearcoat_pars_fragment:s1,iridescence_pars_fragment:r1,opaque_fragment:o1,packing:a1,premultiplied_alpha_fragment:l1,project_vertex:c1,dithering_fragment:h1,dithering_pars_fragment:d1,roughnessmap_fragment:u1,roughnessmap_pars_fragment:f1,shadowmap_pars_fragment:p1,shadowmap_pars_vertex:m1,shadowmap_vertex:g1,shadowmask_pars_fragment:E1,skinbase_vertex:y1,skinning_pars_vertex:A1,skinning_vertex:v1,skinnormal_vertex:_1,specularmap_fragment:M1,specularmap_pars_fragment:S1,tonemapping_fragment:T1,tonemapping_pars_fragment:b1,transmission_fragment:w1,transmission_pars_fragment:R1,uv_pars_fragment:x1,uv_pars_vertex:C1,uv_vertex:F1,worldpos_vertex:P1,background_vert:I1,background_frag:D1,backgroundCube_vert:L1,backgroundCube_frag:U1,cube_vert:N1,cube_frag:H1,depth_vert:O1,depth_frag:B1,distanceRGBA_vert:z1,distanceRGBA_frag:k1,equirect_vert:G1,equirect_frag:V1,linedashed_vert:W1,linedashed_frag:X1,meshbasic_vert:q1,meshbasic_frag:Y1,meshlambert_vert:Z1,meshlambert_frag:$1,meshmatcap_vert:J1,meshmatcap_frag:Q1,meshnormal_vert:K1,meshnormal_frag:j1,meshphong_vert:t2,meshphong_frag:e2,meshphysical_vert:n2,meshphysical_frag:i2,meshtoon_vert:s2,meshtoon_frag:r2,points_vert:o2,points_frag:a2,shadow_vert:l2,shadow_frag:c2,sprite_vert:h2,sprite_frag:d2},dt={common:{diffuse:{value:new ht(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new se},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new se}},envmap:{envMap:{value:null},envMapRotation:{value:new se},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new se}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new se}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new se},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new se},normalScale:{value:new st(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new se},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new se}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new se}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new se}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ht(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ht(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0},uvTransform:{value:new se}},sprite:{diffuse:{value:new ht(16777215)},opacity:{value:1},center:{value:new st(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new se},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0}}},di={basic:{uniforms:bn([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.fog]),vertexShader:ae.meshbasic_vert,fragmentShader:ae.meshbasic_frag},lambert:{uniforms:bn([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new ht(0)}}]),vertexShader:ae.meshlambert_vert,fragmentShader:ae.meshlambert_frag},phong:{uniforms:bn([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new ht(0)},specular:{value:new ht(1118481)},shininess:{value:30}}]),vertexShader:ae.meshphong_vert,fragmentShader:ae.meshphong_frag},standard:{uniforms:bn([dt.common,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.roughnessmap,dt.metalnessmap,dt.fog,dt.lights,{emissive:{value:new ht(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ae.meshphysical_vert,fragmentShader:ae.meshphysical_frag},toon:{uniforms:bn([dt.common,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.gradientmap,dt.fog,dt.lights,{emissive:{value:new ht(0)}}]),vertexShader:ae.meshtoon_vert,fragmentShader:ae.meshtoon_frag},matcap:{uniforms:bn([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,{matcap:{value:null}}]),vertexShader:ae.meshmatcap_vert,fragmentShader:ae.meshmatcap_frag},points:{uniforms:bn([dt.points,dt.fog]),vertexShader:ae.points_vert,fragmentShader:ae.points_frag},dashed:{uniforms:bn([dt.common,dt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ae.linedashed_vert,fragmentShader:ae.linedashed_frag},depth:{uniforms:bn([dt.common,dt.displacementmap]),vertexShader:ae.depth_vert,fragmentShader:ae.depth_frag},normal:{uniforms:bn([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,{opacity:{value:1}}]),vertexShader:ae.meshnormal_vert,fragmentShader:ae.meshnormal_frag},sprite:{uniforms:bn([dt.sprite,dt.fog]),vertexShader:ae.sprite_vert,fragmentShader:ae.sprite_frag},background:{uniforms:{uvTransform:{value:new se},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ae.background_vert,fragmentShader:ae.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new se}},vertexShader:ae.backgroundCube_vert,fragmentShader:ae.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ae.cube_vert,fragmentShader:ae.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ae.equirect_vert,fragmentShader:ae.equirect_frag},distanceRGBA:{uniforms:bn([dt.common,dt.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ae.distanceRGBA_vert,fragmentShader:ae.distanceRGBA_frag},shadow:{uniforms:bn([dt.lights,dt.fog,{color:{value:new ht(0)},opacity:{value:1}}]),vertexShader:ae.shadow_vert,fragmentShader:ae.shadow_frag}};di.physical={uniforms:bn([di.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new se},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new se},clearcoatNormalScale:{value:new st(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new se},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new se},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new se},sheen:{value:0},sheenColor:{value:new ht(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new se},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new se},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new se},transmissionSamplerSize:{value:new st},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new se},attenuationDistance:{value:0},attenuationColor:{value:new ht(0)},specularColor:{value:new ht(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new se},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new se},anisotropyVector:{value:new st},anisotropyMap:{value:null},anisotropyMapTransform:{value:new se}}]),vertexShader:ae.meshphysical_vert,fragmentShader:ae.meshphysical_frag};var $o={r:0,b:0,g:0},ys=new Ei,u2=new De;function f2(n,t,e,i,s,r,o){let a=new ht(0),l=r===!0?0:1,c,h,d=null,u=0,f=null;function g(v){let A=v.isScene===!0?v.background:null;return A&&A.isTexture&&(A=(v.backgroundBlurriness>0?e:t).get(A)),A}function E(v){let A=!1,y=g(v);y===null?p(a,l):y&&y.isColor&&(p(y,1),A=!0);let D=n.xr.getEnvironmentBlendMode();D==="additive"?i.buffers.color.setClear(0,0,0,1,o):D==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||A)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(v,A){let y=g(A);y&&(y.isCubeTexture||y.mapping===Wa)?(h===void 0&&(h=new k(new Cn(1,1,1),new hn({name:"BackgroundCubeMaterial",uniforms:Er(di.backgroundCube.uniforms),vertexShader:di.backgroundCube.vertexShader,fragmentShader:di.backgroundCube.fragmentShader,side:ln,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(D,C,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),ys.copy(A.backgroundRotation),ys.x*=-1,ys.y*=-1,ys.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(ys.y*=-1,ys.z*=-1),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(u2.makeRotationFromEuler(ys)),h.material.toneMapped=_e.getTransfer(y.colorSpace)!==Ue,(d!==y||u!==y.version||f!==n.toneMapping)&&(h.material.needsUpdate=!0,d=y,u=y.version,f=n.toneMapping),h.layers.enableAll(),v.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new k(new bt(2,2),new hn({name:"BackgroundMaterial",uniforms:Er(di.background.uniforms),vertexShader:di.background.vertexShader,fragmentShader:di.background.fragmentShader,side:es,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.toneMapped=_e.getTransfer(y.colorSpace)!==Ue,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(d!==y||u!==y.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,d=y,u=y.version,f=n.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function p(v,A){v.getRGB($o,hf(n)),i.buffers.color.setClear($o.r,$o.g,$o.b,A,o)}return{getClearColor:function(){return a},setClearColor:function(v,A=1){a.set(v),l=A,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,p(a,l)},render:E,addToRenderList:m}}function p2(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=u(null),r=s,o=!1;function a(_,I,O,z,X){let j=!1,Z=d(z,O,I);r!==Z&&(r=Z,c(r.object)),j=f(_,z,O,X),j&&g(_,z,O,X),X!==null&&t.update(X,n.ELEMENT_ARRAY_BUFFER),(j||o)&&(o=!1,y(_,I,O,z),X!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function l(){return n.createVertexArray()}function c(_){return n.bindVertexArray(_)}function h(_){return n.deleteVertexArray(_)}function d(_,I,O){let z=O.wireframe===!0,X=i[_.id];X===void 0&&(X={},i[_.id]=X);let j=X[I.id];j===void 0&&(j={},X[I.id]=j);let Z=j[z];return Z===void 0&&(Z=u(l()),j[z]=Z),Z}function u(_){let I=[],O=[],z=[];for(let X=0;X<e;X++)I[X]=0,O[X]=0,z[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:O,attributeDivisors:z,object:_,attributes:{},index:null}}function f(_,I,O,z){let X=r.attributes,j=I.attributes,Z=0,lt=O.getAttributes();for(let Y in lt)if(lt[Y].location>=0){let vt=X[Y],Ot=j[Y];if(Ot===void 0&&(Y==="instanceMatrix"&&_.instanceMatrix&&(Ot=_.instanceMatrix),Y==="instanceColor"&&_.instanceColor&&(Ot=_.instanceColor)),vt===void 0||vt.attribute!==Ot||Ot&&vt.data!==Ot.data)return!0;Z++}return r.attributesNum!==Z||r.index!==z}function g(_,I,O,z){let X={},j=I.attributes,Z=0,lt=O.getAttributes();for(let Y in lt)if(lt[Y].location>=0){let vt=j[Y];vt===void 0&&(Y==="instanceMatrix"&&_.instanceMatrix&&(vt=_.instanceMatrix),Y==="instanceColor"&&_.instanceColor&&(vt=_.instanceColor));let Ot={};Ot.attribute=vt,vt&&vt.data&&(Ot.data=vt.data),X[Y]=Ot,Z++}r.attributes=X,r.attributesNum=Z,r.index=z}function E(){let _=r.newAttributes;for(let I=0,O=_.length;I<O;I++)_[I]=0}function m(_){p(_,0)}function p(_,I){let O=r.newAttributes,z=r.enabledAttributes,X=r.attributeDivisors;O[_]=1,z[_]===0&&(n.enableVertexAttribArray(_),z[_]=1),X[_]!==I&&(n.vertexAttribDivisor(_,I),X[_]=I)}function v(){let _=r.newAttributes,I=r.enabledAttributes;for(let O=0,z=I.length;O<z;O++)I[O]!==_[O]&&(n.disableVertexAttribArray(O),I[O]=0)}function A(_,I,O,z,X,j,Z){Z===!0?n.vertexAttribIPointer(_,I,O,X,j):n.vertexAttribPointer(_,I,O,z,X,j)}function y(_,I,O,z){E();let X=z.attributes,j=O.getAttributes(),Z=I.defaultAttributeValues;for(let lt in j){let Y=j[lt];if(Y.location>=0){let ft=X[lt];if(ft===void 0&&(lt==="instanceMatrix"&&_.instanceMatrix&&(ft=_.instanceMatrix),lt==="instanceColor"&&_.instanceColor&&(ft=_.instanceColor)),ft!==void 0){let vt=ft.normalized,Ot=ft.itemSize,ce=t.get(ft);if(ce===void 0)continue;let Be=ce.buffer,J=ce.type,ct=ce.bytesPerElement,Pt=J===n.INT||J===n.UNSIGNED_INT||ft.gpuType===Lh;if(ft.isInterleavedBufferAttribute){let pt=ft.data,qt=pt.stride,ee=ft.offset;if(pt.isInstancedInterleavedBuffer){for(let he=0;he<Y.locationSize;he++)p(Y.location+he,pt.meshPerAttribute);_.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=pt.meshPerAttribute*pt.count)}else for(let he=0;he<Y.locationSize;he++)m(Y.location+he);n.bindBuffer(n.ARRAY_BUFFER,Be);for(let he=0;he<Y.locationSize;he++)A(Y.location+he,Ot/Y.locationSize,J,vt,qt*ct,(ee+Ot/Y.locationSize*he)*ct,Pt)}else{if(ft.isInstancedBufferAttribute){for(let pt=0;pt<Y.locationSize;pt++)p(Y.location+pt,ft.meshPerAttribute);_.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ft.meshPerAttribute*ft.count)}else for(let pt=0;pt<Y.locationSize;pt++)m(Y.location+pt);n.bindBuffer(n.ARRAY_BUFFER,Be);for(let pt=0;pt<Y.locationSize;pt++)A(Y.location+pt,Ot/Y.locationSize,J,vt,Ot*ct,Ot/Y.locationSize*pt*ct,Pt)}}else if(Z!==void 0){let vt=Z[lt];if(vt!==void 0)switch(vt.length){case 2:n.vertexAttrib2fv(Y.location,vt);break;case 3:n.vertexAttrib3fv(Y.location,vt);break;case 4:n.vertexAttrib4fv(Y.location,vt);break;default:n.vertexAttrib1fv(Y.location,vt)}}}}v()}function D(){F();for(let _ in i){let I=i[_];for(let O in I){let z=I[O];for(let X in z)h(z[X].object),delete z[X];delete I[O]}delete i[_]}}function C(_){if(i[_.id]===void 0)return;let I=i[_.id];for(let O in I){let z=I[O];for(let X in z)h(z[X].object),delete z[X];delete I[O]}delete i[_.id]}function b(_){for(let I in i){let O=i[I];if(O[_.id]===void 0)continue;let z=O[_.id];for(let X in z)h(z[X].object),delete z[X];delete O[_.id]}}function F(){S(),o=!0,r!==s&&(r=s,c(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:F,resetDefaultState:S,dispose:D,releaseStatesOfGeometry:C,releaseStatesOfProgram:b,initAttributes:E,enableAttribute:m,disableUnusedAttributes:v}}function m2(n,t,e){let i;function s(c){i=c}function r(c,h){n.drawArrays(i,c,h),e.update(h,i,1)}function o(c,h,d){d!==0&&(n.drawArraysInstanced(i,c,h,d),e.update(h,i,d))}function a(c,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,d);let f=0;for(let g=0;g<d;g++)f+=h[g];e.update(f,i,1)}function l(c,h,d,u){if(d===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)o(c[g],h[g],u[g]);else{f.multiDrawArraysInstancedWEBGL(i,c,0,h,0,u,0,d);let g=0;for(let E=0;E<d;E++)g+=h[E]*u[E];e.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function g2(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let b=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(b){return!(b!==ni&&i.convert(b)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(b){let F=b===Fn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(b!==Hi&&i.convert(b)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==pi&&!F)}function l(b){if(b==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=e.logarithmicDepthBuffer===!0,u=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),v=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),A=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),D=g>0,C=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:E,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:v,maxVaryings:A,maxFragmentUniforms:y,vertexTextures:D,maxSamples:C}}function E2(n){let t=this,e=null,i=0,s=!1,r=!1,o=new Di,a=new se,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||i!==0||s;return s=u,i=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){let g=d.clippingPlanes,E=d.clipIntersection,m=d.clipShadows,p=n.get(d);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let v=r?0:i,A=v*4,y=p.clippingState||null;l.value=y,y=h(g,u,A,f);for(let D=0;D!==A;++D)y[D]=e[D];p.clippingState=y,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(d,u,f,g){let E=d!==null?d.length:0,m=null;if(E!==0){if(m=l.value,g!==!0||m===null){let p=f+E*4,v=u.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<p)&&(m=new Float32Array(p));for(let A=0,y=f;A!==E;++A,y+=4)o.copy(d[A]).applyMatrix4(v,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=E,t.numIntersection=0,m}}function y2(n){let t=new WeakMap;function e(o,a){return a===gc?o.mapping=fr:a===Ec&&(o.mapping=pr),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===gc||a===Ec)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Qc(l.height);return c.fromEquirectangularTexture(n,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}var yr=class extends Ta{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,o=i+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},ar=4,ru=[.125,.215,.35,.446,.526,.582],Ms=20,Zl=new yr,ou=new ht,$l=null,Jl=0,Ql=0,Kl=!1,vs=(1+Math.sqrt(5))/2,er=1/vs,au=[new P(-vs,er,0),new P(vs,er,0),new P(-er,0,vs),new P(er,0,vs),new P(0,vs,-er),new P(0,vs,er),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)],wa=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){$l=this._renderer.getRenderTarget(),Jl=this._renderer.getActiveCubeFace(),Ql=this._renderer.getActiveMipmapLevel(),Kl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=hu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=cu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget($l,Jl,Ql),this._renderer.xr.enabled=Kl,t.scissorTest=!1,Jo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===fr||t.mapping===pr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),$l=this._renderer.getRenderTarget(),Jl=this._renderer.getActiveCubeFace(),Ql=this._renderer.getActiveMipmapLevel(),Kl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:fi,minFilter:fi,generateMipmaps:!1,type:Fn,format:ni,colorSpace:rs,depthBuffer:!1},s=lu(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=lu(t,e,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=A2(r)),this._blurMaterial=v2(r,t,e)}return s}_compileMaterial(t){let e=new k(this._lodPlanes[0],t);this._renderer.compile(e,Zl)}_sceneToCubeUV(t,e,i,s){let a=new un(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(ou),h.toneMapping=gi,h.autoClear=!1;let f=new pe({name:"PMREM.Background",side:ln,depthWrite:!1,depthTest:!1}),g=new k(new Cn,f),E=!1,m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,E=!0):(f.color.copy(ou),E=!0);for(let p=0;p<6;p++){let v=p%3;v===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):v===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));let A=this._cubeSize;Jo(s,v*A,p>2?A:0,A,A),h.setRenderTarget(s),E&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=u,h.autoClear=d,t.background=m}_textureToCubeUV(t,e){let i=this._renderer,s=t.mapping===fr||t.mapping===pr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=hu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=cu());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new k(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;Jo(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,Zl)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=au[(s-r-1)%au.length];this._blur(t,r-1,r,o,a)}e.autoClear=i}_blur(t,e,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,d=new k(this._lodPlanes[s],c),u=c.uniforms,f=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Ms-1),E=r/g,m=isFinite(r)?1+Math.floor(h*E):Ms;m>Ms&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ms}`);let p=[],v=0;for(let b=0;b<Ms;++b){let F=b/E,S=Math.exp(-F*F/2);p.push(S),b===0?v+=S:b<m&&(v+=2*S)}for(let b=0;b<p.length;b++)p[b]=p[b]/v;u.envMap.value=t.texture,u.samples.value=m,u.weights.value=p,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);let{_lodMax:A}=this;u.dTheta.value=g,u.mipInt.value=A-i;let y=this._sizeLods[s],D=3*y*(s>A-ar?s-A+ar:0),C=4*(this._cubeSize-y);Jo(e,D,C,3*y,2*y),l.setRenderTarget(e),l.render(d,Zl)}};function A2(n){let t=[],e=[],i=[],s=n,r=n-ar+1+ru.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let l=1/a;o>n-ar?l=ru[o-n+ar-1]:o===0&&(l=0),i.push(l);let c=1/(a-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,g=6,E=3,m=2,p=1,v=new Float32Array(E*g*f),A=new Float32Array(m*g*f),y=new Float32Array(p*g*f);for(let C=0;C<f;C++){let b=C%3*2/3-1,F=C>2?0:-1,S=[b,F,0,b+2/3,F,0,b+2/3,F+1,0,b,F,0,b+2/3,F+1,0,b,F+1,0];v.set(S,E*g*C),A.set(u,m*g*C);let _=[C,C,C,C,C,C];y.set(_,p*g*C)}let D=new $e;D.setAttribute("position",new nn(v,E)),D.setAttribute("uv",new nn(A,m)),D.setAttribute("faceIndex",new nn(y,p)),t.push(D),s>ar&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function lu(n,t,e){let i=new cn(n,t,e);return i.texture.mapping=Wa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Jo(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function v2(n,t,e){let i=new Float32Array(Ms),s=new P(0,1,0);return new hn({name:"SphericalGaussianBlur",defines:{n:Ms,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:kh(),fragmentShader:`

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
		`,blending:mi,depthTest:!1,depthWrite:!1})}function cu(){return new hn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:kh(),fragmentShader:`

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
		`,blending:mi,depthTest:!1,depthWrite:!1})}function hu(){return new hn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:kh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:mi,depthTest:!1,depthWrite:!1})}function kh(){return`

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
	`}function _2(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){let l=a.mapping,c=l===gc||l===Ec,h=l===fr||l===pr;if(c||h){let d=t.get(a),u=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==u)return e===null&&(e=new wa(n)),d=c?e.fromEquirectangular(a,d):e.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),d.texture;if(d!==void 0)return d.texture;{let f=a.image;return c&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new wa(n)),d=c?e.fromEquirectangular(a):e.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function M2(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&$r("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function S2(n,t,e,i){let s={},r=new WeakMap;function o(d){let u=d.target;u.index!==null&&t.remove(u.index);for(let g in u.attributes)t.remove(u.attributes[g]);for(let g in u.morphAttributes){let E=u.morphAttributes[g];for(let m=0,p=E.length;m<p;m++)t.remove(E[m])}u.removeEventListener("dispose",o),delete s[u.id];let f=r.get(u);f&&(t.remove(f),r.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(d,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,e.memory.geometries++),u}function l(d){let u=d.attributes;for(let g in u)t.update(u[g],n.ARRAY_BUFFER);let f=d.morphAttributes;for(let g in f){let E=f[g];for(let m=0,p=E.length;m<p;m++)t.update(E[m],n.ARRAY_BUFFER)}}function c(d){let u=[],f=d.index,g=d.attributes.position,E=0;if(f!==null){let v=f.array;E=f.version;for(let A=0,y=v.length;A<y;A+=3){let D=v[A+0],C=v[A+1],b=v[A+2];u.push(D,C,C,b,b,D)}}else if(g!==void 0){let v=g.array;E=g.version;for(let A=0,y=v.length/3-1;A<y;A+=3){let D=A+0,C=A+1,b=A+2;u.push(D,C,C,b,b,D)}}else return;let m=new(lf(u)?Sa:Ma)(u,1);m.version=E;let p=r.get(d);p&&t.remove(p),r.set(d,m)}function h(d){let u=r.get(d);if(u){let f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function T2(n,t,e){let i;function s(u){i=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function l(u,f){n.drawElements(i,f,r,u*o),e.update(f,i,1)}function c(u,f,g){g!==0&&(n.drawElementsInstanced(i,f,r,u*o,g),e.update(f,i,g))}function h(u,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,u,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,i,1)}function d(u,f,g,E){if(g===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<u.length;p++)c(u[p]/o,f[p],E[p]);else{m.multiDrawElementsInstancedWEBGL(i,f,0,r,u,0,E,0,g);let p=0;for(let v=0;v<g;v++)p+=f[v]*E[v];e.update(p,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function b2(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function w2(n,t,e){let i=new WeakMap,s=new He;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,u=i.get(a);if(u===void 0||u.count!==d){let S=function(){b.dispose(),i.delete(a),a.removeEventListener("dispose",S)};u!==void 0&&u.texture.dispose();let f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,E=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],v=a.morphAttributes.color||[],A=0;f===!0&&(A=1),g===!0&&(A=2),E===!0&&(A=3);let y=a.attributes.position.count*A,D=1;y>t.maxTextureSize&&(D=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let C=new Float32Array(y*D*4*d),b=new va(C,y,D,d);b.type=pi,b.needsUpdate=!0;let F=A*4;for(let _=0;_<d;_++){let I=m[_],O=p[_],z=v[_],X=y*D*4*_;for(let j=0;j<I.count;j++){let Z=j*F;f===!0&&(s.fromBufferAttribute(I,j),C[X+Z+0]=s.x,C[X+Z+1]=s.y,C[X+Z+2]=s.z,C[X+Z+3]=0),g===!0&&(s.fromBufferAttribute(O,j),C[X+Z+4]=s.x,C[X+Z+5]=s.y,C[X+Z+6]=s.z,C[X+Z+7]=0),E===!0&&(s.fromBufferAttribute(z,j),C[X+Z+8]=s.x,C[X+Z+9]=s.y,C[X+Z+10]=s.z,C[X+Z+11]=z.itemSize===4?s.w:1)}}u={count:d,texture:b,size:new st(y,D)},i.set(a,u),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let f=0;for(let E=0;E<c.length;E++)f+=c[E];let g=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:r}}function R2(n,t,e,i){let s=new WeakMap;function r(l){let c=i.render.frame,h=l.geometry,d=t.get(l,h);if(s.get(d)!==c&&(t.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let u=l.skeleton;s.get(u)!==c&&(u.update(),s.set(u,c))}return d}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}var Ar=class extends xn{constructor(t,e,i,s,r,o,a,l,c,h=cr){if(h!==cr&&h!==gr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===cr&&(i=Oi),i===void 0&&h===gr&&(i=mr),super(null,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Hn,this.minFilter=l!==void 0?l:Hn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},uf=new xn,du=new Ar(1,1),ff=new va,pf=new $c,mf=new ba,uu=[],fu=[],pu=new Float32Array(16),mu=new Float32Array(9),gu=new Float32Array(4);function xr(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=uu[s];if(r===void 0&&(r=new Float32Array(s),uu[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function rn(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function on(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function qa(n,t){let e=fu[t];e===void 0&&(e=new Int32Array(t),fu[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function x2(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function C2(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(rn(e,t))return;n.uniform2fv(this.addr,t),on(e,t)}}function F2(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(rn(e,t))return;n.uniform3fv(this.addr,t),on(e,t)}}function P2(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(rn(e,t))return;n.uniform4fv(this.addr,t),on(e,t)}}function I2(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(rn(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),on(e,t)}else{if(rn(e,i))return;gu.set(i),n.uniformMatrix2fv(this.addr,!1,gu),on(e,i)}}function D2(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(rn(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),on(e,t)}else{if(rn(e,i))return;mu.set(i),n.uniformMatrix3fv(this.addr,!1,mu),on(e,i)}}function L2(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(rn(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),on(e,t)}else{if(rn(e,i))return;pu.set(i),n.uniformMatrix4fv(this.addr,!1,pu),on(e,i)}}function U2(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function N2(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(rn(e,t))return;n.uniform2iv(this.addr,t),on(e,t)}}function H2(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(rn(e,t))return;n.uniform3iv(this.addr,t),on(e,t)}}function O2(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(rn(e,t))return;n.uniform4iv(this.addr,t),on(e,t)}}function B2(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function z2(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(rn(e,t))return;n.uniform2uiv(this.addr,t),on(e,t)}}function k2(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(rn(e,t))return;n.uniform3uiv(this.addr,t),on(e,t)}}function G2(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(rn(e,t))return;n.uniform4uiv(this.addr,t),on(e,t)}}function V2(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(du.compareFunction=af,r=du):r=uf,e.setTexture2D(t||r,s)}function W2(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||pf,s)}function X2(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||mf,s)}function q2(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||ff,s)}function Y2(n){switch(n){case 5126:return x2;case 35664:return C2;case 35665:return F2;case 35666:return P2;case 35674:return I2;case 35675:return D2;case 35676:return L2;case 5124:case 35670:return U2;case 35667:case 35671:return N2;case 35668:case 35672:return H2;case 35669:case 35673:return O2;case 5125:return B2;case 36294:return z2;case 36295:return k2;case 36296:return G2;case 35678:case 36198:case 36298:case 36306:case 35682:return V2;case 35679:case 36299:case 36307:return W2;case 35680:case 36300:case 36308:case 36293:return X2;case 36289:case 36303:case 36311:case 36292:return q2}}function Z2(n,t){n.uniform1fv(this.addr,t)}function $2(n,t){let e=xr(t,this.size,2);n.uniform2fv(this.addr,e)}function J2(n,t){let e=xr(t,this.size,3);n.uniform3fv(this.addr,e)}function Q2(n,t){let e=xr(t,this.size,4);n.uniform4fv(this.addr,e)}function K2(n,t){let e=xr(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function j2(n,t){let e=xr(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function tg(n,t){let e=xr(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function eg(n,t){n.uniform1iv(this.addr,t)}function ng(n,t){n.uniform2iv(this.addr,t)}function ig(n,t){n.uniform3iv(this.addr,t)}function sg(n,t){n.uniform4iv(this.addr,t)}function rg(n,t){n.uniform1uiv(this.addr,t)}function og(n,t){n.uniform2uiv(this.addr,t)}function ag(n,t){n.uniform3uiv(this.addr,t)}function lg(n,t){n.uniform4uiv(this.addr,t)}function cg(n,t,e){let i=this.cache,s=t.length,r=qa(e,s);rn(i,r)||(n.uniform1iv(this.addr,r),on(i,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||uf,r[o])}function hg(n,t,e){let i=this.cache,s=t.length,r=qa(e,s);rn(i,r)||(n.uniform1iv(this.addr,r),on(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||pf,r[o])}function dg(n,t,e){let i=this.cache,s=t.length,r=qa(e,s);rn(i,r)||(n.uniform1iv(this.addr,r),on(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||mf,r[o])}function ug(n,t,e){let i=this.cache,s=t.length,r=qa(e,s);rn(i,r)||(n.uniform1iv(this.addr,r),on(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||ff,r[o])}function fg(n){switch(n){case 5126:return Z2;case 35664:return $2;case 35665:return J2;case 35666:return Q2;case 35674:return K2;case 35675:return j2;case 35676:return tg;case 5124:case 35670:return eg;case 35667:case 35671:return ng;case 35668:case 35672:return ig;case 35669:case 35673:return sg;case 5125:return rg;case 36294:return og;case 36295:return ag;case 36296:return lg;case 35678:case 36198:case 36298:case 36306:case 35682:return cg;case 35679:case 36299:case 36307:return hg;case 35680:case 36300:case 36308:case 36293:return dg;case 36289:case 36303:case 36311:case 36292:return ug}}var Kc=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Y2(e.type)}},jc=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=fg(e.type)}},th=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],i)}}},jl=/(\w+)(\])?(\[|\.)?/g;function Eu(n,t){n.seq.push(t),n.map[t.id]=t}function pg(n,t,e){let i=n.name,s=i.length;for(jl.lastIndex=0;;){let r=jl.exec(i),o=jl.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Eu(e,c===void 0?new Kc(a,n,t):new jc(a,n,t));break}else{let d=e.map[a];d===void 0&&(d=new th(a),Eu(e,d)),e=d}}}var dr=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);pg(r,o,this)}}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&i.push(o)}return i}};function yu(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var mg=37297,gg=0;function Eg(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}var Au=new se;function yg(n){_e._getMatrix(Au,_e.workingColorSpace,n);let t=`mat3( ${Au.elements.map(e=>e.toFixed(4))} )`;switch(_e.getTransfer(n)){case Xa:return[t,"LinearTransferOETF"];case Ue:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function vu(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Eg(n.getShaderSource(t),o)}else return s}function Ag(n,t){let e=yg(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function vg(n,t){let e;switch(t){case Y0:e="Linear";break;case Z0:e="Reinhard";break;case $0:e="Cineon";break;case J0:e="ACESFilmic";break;case K0:e="AgX";break;case j0:e="Neutral";break;case Q0:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Qo=new P;function _g(){_e.getLuminanceCoefficients(Qo);let n=Qo.x.toFixed(4),t=Qo.y.toFixed(4),e=Qo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Mg(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Jr).join(`
`)}function Sg(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Tg(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function Jr(n){return n!==""}function _u(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Mu(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var bg=/^[ \t]*#include +<([\w\d./]+)>/gm;function eh(n){return n.replace(bg,Rg)}var wg=new Map;function Rg(n,t){let e=ae[t];if(e===void 0){let i=wg.get(t);if(i!==void 0)e=ae[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return eh(e)}var xg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Su(n){return n.replace(xg,Cg)}function Cg(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Tu(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}function Fg(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Yu?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===Dh?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Ii&&(t="SHADOWMAP_TYPE_VSM"),t}function Pg(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case fr:case pr:t="ENVMAP_TYPE_CUBE";break;case Wa:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Ig(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case pr:t="ENVMAP_MODE_REFRACTION";break}return t}function Dg(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Zu:t="ENVMAP_BLENDING_MULTIPLY";break;case X0:t="ENVMAP_BLENDING_MIX";break;case q0:t="ENVMAP_BLENDING_ADD";break}return t}function Lg(n){let t=n.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function Ug(n,t,e,i){let s=n.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=Fg(e),c=Pg(e),h=Ig(e),d=Dg(e),u=Lg(e),f=Mg(e),g=Sg(r),E=s.createProgram(),m,p,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Jr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Jr).join(`
`),p.length>0&&(p+=`
`)):(m=[Tu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Jr).join(`
`),p=[Tu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==gi?"#define TONE_MAPPING":"",e.toneMapping!==gi?ae.tonemapping_pars_fragment:"",e.toneMapping!==gi?vg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ae.colorspace_pars_fragment,Ag("linearToOutputTexel",e.outputColorSpace),_g(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Jr).join(`
`)),o=eh(o),o=_u(o,e),o=Mu(o,e),a=eh(a),a=_u(a,e),a=Mu(a,e),o=Su(o),a=Su(a),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Od?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Od?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let A=v+m+o,y=v+p+a,D=yu(s,s.VERTEX_SHADER,A),C=yu(s,s.FRAGMENT_SHADER,y);s.attachShader(E,D),s.attachShader(E,C),e.index0AttributeName!==void 0?s.bindAttribLocation(E,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(E,0,"position"),s.linkProgram(E);function b(I){if(n.debug.checkShaderErrors){let O=s.getProgramInfoLog(E).trim(),z=s.getShaderInfoLog(D).trim(),X=s.getShaderInfoLog(C).trim(),j=!0,Z=!0;if(s.getProgramParameter(E,s.LINK_STATUS)===!1)if(j=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,E,D,C);else{let lt=vu(s,D,"vertex"),Y=vu(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(E,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+O+`
`+lt+`
`+Y)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(z===""||X==="")&&(Z=!1);Z&&(I.diagnostics={runnable:j,programLog:O,vertexShader:{log:z,prefix:m},fragmentShader:{log:X,prefix:p}})}s.deleteShader(D),s.deleteShader(C),F=new dr(s,E),S=Tg(s,E)}let F;this.getUniforms=function(){return F===void 0&&b(this),F};let S;this.getAttributes=function(){return S===void 0&&b(this),S};let _=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=s.getProgramParameter(E,mg)),_},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(E),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=gg++,this.cacheKey=t,this.usedTimes=1,this.program=E,this.vertexShader=D,this.fragmentShader=C,this}var Ng=0,nh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new ih(t),e.set(t,i)),i}},ih=class{constructor(t){this.id=Ng++,this.code=t,this.usedTimes=0}};function Hg(n,t,e,i,s,r,o){let a=new _a,l=new nh,c=new Set,h=[],d=s.logarithmicDepthBuffer,u=s.vertexTextures,f=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,_,I,O,z){let X=O.fog,j=z.geometry,Z=S.isMeshStandardMaterial?O.environment:null,lt=(S.isMeshStandardMaterial?e:t).get(S.envMap||Z),Y=lt&&lt.mapping===Wa?lt.image.height:null,ft=g[S.type];S.precision!==null&&(f=s.getMaxPrecision(S.precision),f!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));let vt=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,Ot=vt!==void 0?vt.length:0,ce=0;j.morphAttributes.position!==void 0&&(ce=1),j.morphAttributes.normal!==void 0&&(ce=2),j.morphAttributes.color!==void 0&&(ce=3);let Be,J,ct,Pt;if(ft){let Ie=di[ft];Be=Ie.vertexShader,J=Ie.fragmentShader}else Be=S.vertexShader,J=S.fragmentShader,l.update(S),ct=l.getVertexShaderID(S),Pt=l.getFragmentShaderID(S);let pt=n.getRenderTarget(),qt=n.state.buffers.depth.getReversed(),ee=z.isInstancedMesh===!0,he=z.isBatchedMesh===!0,Je=!!S.map,Ae=!!S.matcap,tn=!!lt,H=!!S.aoMap,kn=!!S.lightMap,me=!!S.bumpMap,ge=!!S.normalMap,Vt=!!S.displacementMap,Ge=!!S.emissiveMap,kt=!!S.metalnessMap,x=!!S.roughnessMap,M=S.anisotropy>0,G=S.clearcoat>0,Q=S.dispersion>0,et=S.iridescence>0,$=S.sheen>0,Lt=S.transmission>0,mt=M&&!!S.anisotropyMap,_t=G&&!!S.clearcoatMap,ve=G&&!!S.clearcoatNormalMap,rt=G&&!!S.clearcoatRoughnessMap,St=et&&!!S.iridescenceMap,Wt=et&&!!S.iridescenceThicknessMap,Kt=$&&!!S.sheenColorMap,Tt=$&&!!S.sheenRoughnessMap,Ee=!!S.specularMap,oe=!!S.specularColorMap,ze=!!S.specularIntensityMap,L=Lt&&!!S.transmissionMap,ut=Lt&&!!S.thicknessMap,q=!!S.gradientMap,K=!!S.alphaMap,At=S.alphaTest>0,Et=!!S.alphaHash,ne=!!S.extensions,je=gi;S.toneMapped&&(pt===null||pt.isXRRenderTarget===!0)&&(je=n.toneMapping);let En={shaderID:ft,shaderType:S.type,shaderName:S.name,vertexShader:Be,fragmentShader:J,defines:S.defines,customVertexShaderID:ct,customFragmentShaderID:Pt,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:he,batchingColor:he&&z._colorsTexture!==null,instancing:ee,instancingColor:ee&&z.instanceColor!==null,instancingMorph:ee&&z.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:pt===null?n.outputColorSpace:pt.isXRRenderTarget===!0?pt.texture.colorSpace:rs,alphaToCoverage:!!S.alphaToCoverage,map:Je,matcap:Ae,envMap:tn,envMapMode:tn&&lt.mapping,envMapCubeUVHeight:Y,aoMap:H,lightMap:kn,bumpMap:me,normalMap:ge,displacementMap:u&&Vt,emissiveMap:Ge,normalMapObjectSpace:ge&&S.normalMapType===np,normalMapTangentSpace:ge&&S.normalMapType===of,metalnessMap:kt,roughnessMap:x,anisotropy:M,anisotropyMap:mt,clearcoat:G,clearcoatMap:_t,clearcoatNormalMap:ve,clearcoatRoughnessMap:rt,dispersion:Q,iridescence:et,iridescenceMap:St,iridescenceThicknessMap:Wt,sheen:$,sheenColorMap:Kt,sheenRoughnessMap:Tt,specularMap:Ee,specularColorMap:oe,specularIntensityMap:ze,transmission:Lt,transmissionMap:L,thicknessMap:ut,gradientMap:q,opaque:S.transparent===!1&&S.blending===ts&&S.alphaToCoverage===!1,alphaMap:K,alphaTest:At,alphaHash:Et,combine:S.combine,mapUv:Je&&E(S.map.channel),aoMapUv:H&&E(S.aoMap.channel),lightMapUv:kn&&E(S.lightMap.channel),bumpMapUv:me&&E(S.bumpMap.channel),normalMapUv:ge&&E(S.normalMap.channel),displacementMapUv:Vt&&E(S.displacementMap.channel),emissiveMapUv:Ge&&E(S.emissiveMap.channel),metalnessMapUv:kt&&E(S.metalnessMap.channel),roughnessMapUv:x&&E(S.roughnessMap.channel),anisotropyMapUv:mt&&E(S.anisotropyMap.channel),clearcoatMapUv:_t&&E(S.clearcoatMap.channel),clearcoatNormalMapUv:ve&&E(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:rt&&E(S.clearcoatRoughnessMap.channel),iridescenceMapUv:St&&E(S.iridescenceMap.channel),iridescenceThicknessMapUv:Wt&&E(S.iridescenceThicknessMap.channel),sheenColorMapUv:Kt&&E(S.sheenColorMap.channel),sheenRoughnessMapUv:Tt&&E(S.sheenRoughnessMap.channel),specularMapUv:Ee&&E(S.specularMap.channel),specularColorMapUv:oe&&E(S.specularColorMap.channel),specularIntensityMapUv:ze&&E(S.specularIntensityMap.channel),transmissionMapUv:L&&E(S.transmissionMap.channel),thicknessMapUv:ut&&E(S.thicknessMap.channel),alphaMapUv:K&&E(S.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(ge||M),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!j.attributes.uv&&(Je||K),fog:!!X,useFog:S.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:qt,skinning:z.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:Ot,morphTextureStride:ce,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&I.length>0,shadowMapType:n.shadowMap.type,toneMapping:je,decodeVideoTexture:Je&&S.map.isVideoTexture===!0&&_e.getTransfer(S.map.colorSpace)===Ue,decodeVideoTextureEmissive:Ge&&S.emissiveMap.isVideoTexture===!0&&_e.getTransfer(S.emissiveMap.colorSpace)===Ue,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Se,flipSided:S.side===ln,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:ne&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ne&&S.extensions.multiDraw===!0||he)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return En.vertexUv1s=c.has(1),En.vertexUv2s=c.has(2),En.vertexUv3s=c.has(3),c.clear(),En}function p(S){let _=[];if(S.shaderID?_.push(S.shaderID):(_.push(S.customVertexShaderID),_.push(S.customFragmentShaderID)),S.defines!==void 0)for(let I in S.defines)_.push(I),_.push(S.defines[I]);return S.isRawShaderMaterial===!1&&(v(_,S),A(_,S),_.push(n.outputColorSpace)),_.push(S.customProgramCacheKey),_.join()}function v(S,_){S.push(_.precision),S.push(_.outputColorSpace),S.push(_.envMapMode),S.push(_.envMapCubeUVHeight),S.push(_.mapUv),S.push(_.alphaMapUv),S.push(_.lightMapUv),S.push(_.aoMapUv),S.push(_.bumpMapUv),S.push(_.normalMapUv),S.push(_.displacementMapUv),S.push(_.emissiveMapUv),S.push(_.metalnessMapUv),S.push(_.roughnessMapUv),S.push(_.anisotropyMapUv),S.push(_.clearcoatMapUv),S.push(_.clearcoatNormalMapUv),S.push(_.clearcoatRoughnessMapUv),S.push(_.iridescenceMapUv),S.push(_.iridescenceThicknessMapUv),S.push(_.sheenColorMapUv),S.push(_.sheenRoughnessMapUv),S.push(_.specularMapUv),S.push(_.specularColorMapUv),S.push(_.specularIntensityMapUv),S.push(_.transmissionMapUv),S.push(_.thicknessMapUv),S.push(_.combine),S.push(_.fogExp2),S.push(_.sizeAttenuation),S.push(_.morphTargetsCount),S.push(_.morphAttributeCount),S.push(_.numDirLights),S.push(_.numPointLights),S.push(_.numSpotLights),S.push(_.numSpotLightMaps),S.push(_.numHemiLights),S.push(_.numRectAreaLights),S.push(_.numDirLightShadows),S.push(_.numPointLightShadows),S.push(_.numSpotLightShadows),S.push(_.numSpotLightShadowsWithMaps),S.push(_.numLightProbes),S.push(_.shadowMapType),S.push(_.toneMapping),S.push(_.numClippingPlanes),S.push(_.numClipIntersection),S.push(_.depthPacking)}function A(S,_){a.disableAll(),_.supportsVertexTextures&&a.enable(0),_.instancing&&a.enable(1),_.instancingColor&&a.enable(2),_.instancingMorph&&a.enable(3),_.matcap&&a.enable(4),_.envMap&&a.enable(5),_.normalMapObjectSpace&&a.enable(6),_.normalMapTangentSpace&&a.enable(7),_.clearcoat&&a.enable(8),_.iridescence&&a.enable(9),_.alphaTest&&a.enable(10),_.vertexColors&&a.enable(11),_.vertexAlphas&&a.enable(12),_.vertexUv1s&&a.enable(13),_.vertexUv2s&&a.enable(14),_.vertexUv3s&&a.enable(15),_.vertexTangents&&a.enable(16),_.anisotropy&&a.enable(17),_.alphaHash&&a.enable(18),_.batching&&a.enable(19),_.dispersion&&a.enable(20),_.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),_.fog&&a.enable(0),_.useFog&&a.enable(1),_.flatShading&&a.enable(2),_.logarithmicDepthBuffer&&a.enable(3),_.reverseDepthBuffer&&a.enable(4),_.skinning&&a.enable(5),_.morphTargets&&a.enable(6),_.morphNormals&&a.enable(7),_.morphColors&&a.enable(8),_.premultipliedAlpha&&a.enable(9),_.shadowMapEnabled&&a.enable(10),_.doubleSided&&a.enable(11),_.flipSided&&a.enable(12),_.useDepthPacking&&a.enable(13),_.dithering&&a.enable(14),_.transmission&&a.enable(15),_.sheen&&a.enable(16),_.opaque&&a.enable(17),_.pointsUvs&&a.enable(18),_.decodeVideoTexture&&a.enable(19),_.decodeVideoTextureEmissive&&a.enable(20),_.alphaToCoverage&&a.enable(21),S.push(a.mask)}function y(S){let _=g[S.type],I;if(_){let O=di[_];I=Rr.clone(O.uniforms)}else I=S.uniforms;return I}function D(S,_){let I;for(let O=0,z=h.length;O<z;O++){let X=h[O];if(X.cacheKey===_){I=X,++I.usedTimes;break}}return I===void 0&&(I=new Ug(n,_,S,r),h.push(I)),I}function C(S){if(--S.usedTimes===0){let _=h.indexOf(S);h[_]=h[h.length-1],h.pop(),S.destroy()}}function b(S){l.remove(S)}function F(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:y,acquireProgram:D,releaseProgram:C,releaseShaderCache:b,programs:h,dispose:F}}function Og(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function Bg(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function bu(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function wu(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(d,u,f,g,E,m){let p=n[t];return p===void 0?(p={id:d.id,object:d,geometry:u,material:f,groupOrder:g,renderOrder:d.renderOrder,z:E,group:m},n[t]=p):(p.id=d.id,p.object=d,p.geometry=u,p.material=f,p.groupOrder=g,p.renderOrder=d.renderOrder,p.z=E,p.group=m),t++,p}function a(d,u,f,g,E,m){let p=o(d,u,f,g,E,m);f.transmission>0?i.push(p):f.transparent===!0?s.push(p):e.push(p)}function l(d,u,f,g,E,m){let p=o(d,u,f,g,E,m);f.transmission>0?i.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function c(d,u){e.length>1&&e.sort(d||Bg),i.length>1&&i.sort(u||bu),s.length>1&&s.sort(u||bu)}function h(){for(let d=t,u=n.length;d<u;d++){let f=n[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function zg(){let n=new WeakMap;function t(i,s){let r=n.get(i),o;return r===void 0?(o=new wu,n.set(i,[o])):s>=r.length?(o=new wu,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function kg(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new P,color:new ht};break;case"SpotLight":e={position:new P,direction:new P,color:new ht,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new ht,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new ht,groundColor:new ht};break;case"RectAreaLight":e={color:new ht,position:new P,halfWidth:new P,halfHeight:new P};break}return n[t.id]=e,e}}}function Gg(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var Vg=0;function Wg(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function Xg(n){let t=new kg,e=Gg(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new P);let s=new P,r=new De,o=new De;function a(c){let h=0,d=0,u=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let f=0,g=0,E=0,m=0,p=0,v=0,A=0,y=0,D=0,C=0,b=0;c.sort(Wg);for(let S=0,_=c.length;S<_;S++){let I=c[S],O=I.color,z=I.intensity,X=I.distance,j=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)h+=O.r*z,d+=O.g*z,u+=O.b*z;else if(I.isLightProbe){for(let Z=0;Z<9;Z++)i.probe[Z].addScaledVector(I.sh.coefficients[Z],z);b++}else if(I.isDirectionalLight){let Z=t.get(I);if(Z.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let lt=I.shadow,Y=e.get(I);Y.shadowIntensity=lt.intensity,Y.shadowBias=lt.bias,Y.shadowNormalBias=lt.normalBias,Y.shadowRadius=lt.radius,Y.shadowMapSize=lt.mapSize,i.directionalShadow[f]=Y,i.directionalShadowMap[f]=j,i.directionalShadowMatrix[f]=I.shadow.matrix,v++}i.directional[f]=Z,f++}else if(I.isSpotLight){let Z=t.get(I);Z.position.setFromMatrixPosition(I.matrixWorld),Z.color.copy(O).multiplyScalar(z),Z.distance=X,Z.coneCos=Math.cos(I.angle),Z.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),Z.decay=I.decay,i.spot[E]=Z;let lt=I.shadow;if(I.map&&(i.spotLightMap[D]=I.map,D++,lt.updateMatrices(I),I.castShadow&&C++),i.spotLightMatrix[E]=lt.matrix,I.castShadow){let Y=e.get(I);Y.shadowIntensity=lt.intensity,Y.shadowBias=lt.bias,Y.shadowNormalBias=lt.normalBias,Y.shadowRadius=lt.radius,Y.shadowMapSize=lt.mapSize,i.spotShadow[E]=Y,i.spotShadowMap[E]=j,y++}E++}else if(I.isRectAreaLight){let Z=t.get(I);Z.color.copy(O).multiplyScalar(z),Z.halfWidth.set(I.width*.5,0,0),Z.halfHeight.set(0,I.height*.5,0),i.rectArea[m]=Z,m++}else if(I.isPointLight){let Z=t.get(I);if(Z.color.copy(I.color).multiplyScalar(I.intensity),Z.distance=I.distance,Z.decay=I.decay,I.castShadow){let lt=I.shadow,Y=e.get(I);Y.shadowIntensity=lt.intensity,Y.shadowBias=lt.bias,Y.shadowNormalBias=lt.normalBias,Y.shadowRadius=lt.radius,Y.shadowMapSize=lt.mapSize,Y.shadowCameraNear=lt.camera.near,Y.shadowCameraFar=lt.camera.far,i.pointShadow[g]=Y,i.pointShadowMap[g]=j,i.pointShadowMatrix[g]=I.shadow.matrix,A++}i.point[g]=Z,g++}else if(I.isHemisphereLight){let Z=t.get(I);Z.skyColor.copy(I.color).multiplyScalar(z),Z.groundColor.copy(I.groundColor).multiplyScalar(z),i.hemi[p]=Z,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=dt.LTC_FLOAT_1,i.rectAreaLTC2=dt.LTC_FLOAT_2):(i.rectAreaLTC1=dt.LTC_HALF_1,i.rectAreaLTC2=dt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=u;let F=i.hash;(F.directionalLength!==f||F.pointLength!==g||F.spotLength!==E||F.rectAreaLength!==m||F.hemiLength!==p||F.numDirectionalShadows!==v||F.numPointShadows!==A||F.numSpotShadows!==y||F.numSpotMaps!==D||F.numLightProbes!==b)&&(i.directional.length=f,i.spot.length=E,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=A,i.pointShadowMap.length=A,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=A,i.spotLightMatrix.length=y+D-C,i.spotLightMap.length=D,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=b,F.directionalLength=f,F.pointLength=g,F.spotLength=E,F.rectAreaLength=m,F.hemiLength=p,F.numDirectionalShadows=v,F.numPointShadows=A,F.numSpotShadows=y,F.numSpotMaps=D,F.numLightProbes=b,i.version=Vg++)}function l(c,h){let d=0,u=0,f=0,g=0,E=0,m=h.matrixWorldInverse;for(let p=0,v=c.length;p<v;p++){let A=c[p];if(A.isDirectionalLight){let y=i.directional[d];y.direction.setFromMatrixPosition(A.matrixWorld),s.setFromMatrixPosition(A.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),d++}else if(A.isSpotLight){let y=i.spot[f];y.position.setFromMatrixPosition(A.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(A.matrixWorld),s.setFromMatrixPosition(A.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),f++}else if(A.isRectAreaLight){let y=i.rectArea[g];y.position.setFromMatrixPosition(A.matrixWorld),y.position.applyMatrix4(m),o.identity(),r.copy(A.matrixWorld),r.premultiply(m),o.extractRotation(r),y.halfWidth.set(A.width*.5,0,0),y.halfHeight.set(0,A.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(A.isPointLight){let y=i.point[u];y.position.setFromMatrixPosition(A.matrixWorld),y.position.applyMatrix4(m),u++}else if(A.isHemisphereLight){let y=i.hemi[E];y.direction.setFromMatrixPosition(A.matrixWorld),y.direction.transformDirection(m),E++}}}return{setup:a,setupView:l,state:i}}function Ru(n){let t=new Xg(n),e=[],i=[];function s(h){c.camera=h,e.length=0,i.length=0}function r(h){e.push(h)}function o(h){i.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function qg(n){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new Ru(n),t.set(s,[a])):r>=o.length?(a=new Ru(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}var ss=class extends yi{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=ep,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},sh=class extends yi{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},Yg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Zg=`uniform sampler2D shadow_pass;
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
}`;function $g(n,t,e){let i=new io,s=new st,r=new st,o=new He,a=new ss({depthPacking:wr}),l=new sh,c={},h=e.maxTextureSize,d={[es]:ln,[ln]:es,[Se]:Se},u=new hn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new st},radius:{value:4}},vertexShader:Yg,fragmentShader:Zg}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let g=new $e;g.setAttribute("position",new nn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let E=new k(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Yu;let p=this.type;this.render=function(C,b,F){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;let S=n.getRenderTarget(),_=n.getActiveCubeFace(),I=n.getActiveMipmapLevel(),O=n.state;O.setBlending(mi),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let z=p!==Ii&&this.type===Ii,X=p===Ii&&this.type!==Ii;for(let j=0,Z=C.length;j<Z;j++){let lt=C[j],Y=lt.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",lt,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;s.copy(Y.mapSize);let ft=Y.getFrameExtents();if(s.multiply(ft),r.copy(Y.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ft.x),s.x=r.x*ft.x,Y.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ft.y),s.y=r.y*ft.y,Y.mapSize.y=r.y)),Y.map===null||z===!0||X===!0){let Ot=this.type!==Ii?{minFilter:Hn,magFilter:Hn}:{};Y.map!==null&&Y.map.dispose(),Y.map=new cn(s.x,s.y,Ot),Y.map.texture.name=lt.name+".shadowMap",Y.camera.updateProjectionMatrix()}n.setRenderTarget(Y.map),n.clear();let vt=Y.getViewportCount();for(let Ot=0;Ot<vt;Ot++){let ce=Y.getViewport(Ot);o.set(r.x*ce.x,r.y*ce.y,r.x*ce.z,r.y*ce.w),O.viewport(o),Y.updateMatrices(lt,Ot),i=Y.getFrustum(),y(b,F,Y.camera,lt,this.type)}Y.isPointLightShadow!==!0&&this.type===Ii&&v(Y,F),Y.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(S,_,I)};function v(C,b){let F=t.update(E);u.defines.VSM_SAMPLES!==C.blurSamples&&(u.defines.VSM_SAMPLES=C.blurSamples,f.defines.VSM_SAMPLES=C.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new cn(s.x,s.y)),u.uniforms.shadow_pass.value=C.map.texture,u.uniforms.resolution.value=C.mapSize,u.uniforms.radius.value=C.radius,n.setRenderTarget(C.mapPass),n.clear(),n.renderBufferDirect(b,null,F,u,E,null),f.uniforms.shadow_pass.value=C.mapPass.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,n.setRenderTarget(C.map),n.clear(),n.renderBufferDirect(b,null,F,f,E,null)}function A(C,b,F,S){let _=null,I=F.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(I!==void 0)_=I;else if(_=F.isPointLight===!0?l:a,n.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){let O=_.uuid,z=b.uuid,X=c[O];X===void 0&&(X={},c[O]=X);let j=X[z];j===void 0&&(j=_.clone(),X[z]=j,b.addEventListener("dispose",D)),_=j}if(_.visible=b.visible,_.wireframe=b.wireframe,S===Ii?_.side=b.shadowSide!==null?b.shadowSide:b.side:_.side=b.shadowSide!==null?b.shadowSide:d[b.side],_.alphaMap=b.alphaMap,_.alphaTest=b.alphaTest,_.map=b.map,_.clipShadows=b.clipShadows,_.clippingPlanes=b.clippingPlanes,_.clipIntersection=b.clipIntersection,_.displacementMap=b.displacementMap,_.displacementScale=b.displacementScale,_.displacementBias=b.displacementBias,_.wireframeLinewidth=b.wireframeLinewidth,_.linewidth=b.linewidth,F.isPointLight===!0&&_.isMeshDistanceMaterial===!0){let O=n.properties.get(_);O.light=F}return _}function y(C,b,F,S,_){if(C.visible===!1)return;if(C.layers.test(b.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&_===Ii)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,C.matrixWorld);let z=t.update(C),X=C.material;if(Array.isArray(X)){let j=z.groups;for(let Z=0,lt=j.length;Z<lt;Z++){let Y=j[Z],ft=X[Y.materialIndex];if(ft&&ft.visible){let vt=A(C,ft,S,_);C.onBeforeShadow(n,C,b,F,z,vt,Y),n.renderBufferDirect(F,null,z,vt,C,Y),C.onAfterShadow(n,C,b,F,z,vt,Y)}}}else if(X.visible){let j=A(C,X,S,_);C.onBeforeShadow(n,C,b,F,z,j,null),n.renderBufferDirect(F,null,z,j,C,null),C.onAfterShadow(n,C,b,F,z,j,null)}}let O=C.children;for(let z=0,X=O.length;z<X;z++)y(O[z],b,F,S,_)}function D(C){C.target.removeEventListener("dispose",D);for(let F in c){let S=c[F],_=C.target.uuid;_ in S&&(S[_].dispose(),delete S[_])}}}var Jg={[cc]:hc,[dc]:pc,[uc]:mc,[ur]:fc,[hc]:cc,[pc]:dc,[mc]:uc,[fc]:ur};function Qg(n,t){function e(){let L=!1,ut=new He,q=null,K=new He(0,0,0,0);return{setMask:function(At){q!==At&&!L&&(n.colorMask(At,At,At,At),q=At)},setLocked:function(At){L=At},setClear:function(At,Et,ne,je,En){En===!0&&(At*=je,Et*=je,ne*=je),ut.set(At,Et,ne,je),K.equals(ut)===!1&&(n.clearColor(At,Et,ne,je),K.copy(ut))},reset:function(){L=!1,q=null,K.set(-1,0,0,0)}}}function i(){let L=!1,ut=!1,q=null,K=null,At=null;return{setReversed:function(Et){if(ut!==Et){let ne=t.get("EXT_clip_control");ut?ne.clipControlEXT(ne.LOWER_LEFT_EXT,ne.ZERO_TO_ONE_EXT):ne.clipControlEXT(ne.LOWER_LEFT_EXT,ne.NEGATIVE_ONE_TO_ONE_EXT);let je=At;At=null,this.setClear(je)}ut=Et},getReversed:function(){return ut},setTest:function(Et){Et?pt(n.DEPTH_TEST):qt(n.DEPTH_TEST)},setMask:function(Et){q!==Et&&!L&&(n.depthMask(Et),q=Et)},setFunc:function(Et){if(ut&&(Et=Jg[Et]),K!==Et){switch(Et){case cc:n.depthFunc(n.NEVER);break;case hc:n.depthFunc(n.ALWAYS);break;case dc:n.depthFunc(n.LESS);break;case ur:n.depthFunc(n.LEQUAL);break;case uc:n.depthFunc(n.EQUAL);break;case fc:n.depthFunc(n.GEQUAL);break;case pc:n.depthFunc(n.GREATER);break;case mc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}K=Et}},setLocked:function(Et){L=Et},setClear:function(Et){At!==Et&&(ut&&(Et=1-Et),n.clearDepth(Et),At=Et)},reset:function(){L=!1,q=null,K=null,At=null,ut=!1}}}function s(){let L=!1,ut=null,q=null,K=null,At=null,Et=null,ne=null,je=null,En=null;return{setTest:function(Ie){L||(Ie?pt(n.STENCIL_TEST):qt(n.STENCIL_TEST))},setMask:function(Ie){ut!==Ie&&!L&&(n.stencilMask(Ie),ut=Ie)},setFunc:function(Ie,Qn,bi){(q!==Ie||K!==Qn||At!==bi)&&(n.stencilFunc(Ie,Qn,bi),q=Ie,K=Qn,At=bi)},setOp:function(Ie,Qn,bi){(Et!==Ie||ne!==Qn||je!==bi)&&(n.stencilOp(Ie,Qn,bi),Et=Ie,ne=Qn,je=bi)},setLocked:function(Ie){L=Ie},setClear:function(Ie){En!==Ie&&(n.clearStencil(Ie),En=Ie)},reset:function(){L=!1,ut=null,q=null,K=null,At=null,Et=null,ne=null,je=null,En=null}}}let r=new e,o=new i,a=new s,l=new WeakMap,c=new WeakMap,h={},d={},u=new WeakMap,f=[],g=null,E=!1,m=null,p=null,v=null,A=null,y=null,D=null,C=null,b=new ht(0,0,0),F=0,S=!1,_=null,I=null,O=null,z=null,X=null,j=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Z=!1,lt=0,Y=n.getParameter(n.VERSION);Y.indexOf("WebGL")!==-1?(lt=parseFloat(/^WebGL (\d)/.exec(Y)[1]),Z=lt>=1):Y.indexOf("OpenGL ES")!==-1&&(lt=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),Z=lt>=2);let ft=null,vt={},Ot=n.getParameter(n.SCISSOR_BOX),ce=n.getParameter(n.VIEWPORT),Be=new He().fromArray(Ot),J=new He().fromArray(ce);function ct(L,ut,q,K){let At=new Uint8Array(4),Et=n.createTexture();n.bindTexture(L,Et),n.texParameteri(L,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(L,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ne=0;ne<q;ne++)L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY?n.texImage3D(ut,0,n.RGBA,1,1,K,0,n.RGBA,n.UNSIGNED_BYTE,At):n.texImage2D(ut+ne,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,At);return Et}let Pt={};Pt[n.TEXTURE_2D]=ct(n.TEXTURE_2D,n.TEXTURE_2D,1),Pt[n.TEXTURE_CUBE_MAP]=ct(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Pt[n.TEXTURE_2D_ARRAY]=ct(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Pt[n.TEXTURE_3D]=ct(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),pt(n.DEPTH_TEST),o.setFunc(ur),me(!1),ge(Pd),pt(n.CULL_FACE),H(mi);function pt(L){h[L]!==!0&&(n.enable(L),h[L]=!0)}function qt(L){h[L]!==!1&&(n.disable(L),h[L]=!1)}function ee(L,ut){return d[L]!==ut?(n.bindFramebuffer(L,ut),d[L]=ut,L===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=ut),L===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=ut),!0):!1}function he(L,ut){let q=f,K=!1;if(L){q=u.get(ut),q===void 0&&(q=[],u.set(ut,q));let At=L.textures;if(q.length!==At.length||q[0]!==n.COLOR_ATTACHMENT0){for(let Et=0,ne=At.length;Et<ne;Et++)q[Et]=n.COLOR_ATTACHMENT0+Et;q.length=At.length,K=!0}}else q[0]!==n.BACK&&(q[0]=n.BACK,K=!0);K&&n.drawBuffers(q)}function Je(L){return g!==L?(n.useProgram(L),g=L,!0):!1}let Ae={[_s]:n.FUNC_ADD,[x0]:n.FUNC_SUBTRACT,[C0]:n.FUNC_REVERSE_SUBTRACT};Ae[F0]=n.MIN,Ae[P0]=n.MAX;let tn={[I0]:n.ZERO,[D0]:n.ONE,[L0]:n.SRC_COLOR,[ac]:n.SRC_ALPHA,[z0]:n.SRC_ALPHA_SATURATE,[O0]:n.DST_COLOR,[N0]:n.DST_ALPHA,[U0]:n.ONE_MINUS_SRC_COLOR,[lc]:n.ONE_MINUS_SRC_ALPHA,[B0]:n.ONE_MINUS_DST_COLOR,[H0]:n.ONE_MINUS_DST_ALPHA,[k0]:n.CONSTANT_COLOR,[G0]:n.ONE_MINUS_CONSTANT_COLOR,[V0]:n.CONSTANT_ALPHA,[W0]:n.ONE_MINUS_CONSTANT_ALPHA};function H(L,ut,q,K,At,Et,ne,je,En,Ie){if(L===mi){E===!0&&(qt(n.BLEND),E=!1);return}if(E===!1&&(pt(n.BLEND),E=!0),L!==R0){if(L!==m||Ie!==S){if((p!==_s||y!==_s)&&(n.blendEquation(n.FUNC_ADD),p=_s,y=_s),Ie)switch(L){case ts:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Rn:n.blendFunc(n.ONE,n.ONE);break;case Id:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Dd:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case ts:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Rn:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Id:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Dd:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}v=null,A=null,D=null,C=null,b.set(0,0,0),F=0,m=L,S=Ie}return}At=At||ut,Et=Et||q,ne=ne||K,(ut!==p||At!==y)&&(n.blendEquationSeparate(Ae[ut],Ae[At]),p=ut,y=At),(q!==v||K!==A||Et!==D||ne!==C)&&(n.blendFuncSeparate(tn[q],tn[K],tn[Et],tn[ne]),v=q,A=K,D=Et,C=ne),(je.equals(b)===!1||En!==F)&&(n.blendColor(je.r,je.g,je.b,En),b.copy(je),F=En),m=L,S=!1}function kn(L,ut){L.side===Se?qt(n.CULL_FACE):pt(n.CULL_FACE);let q=L.side===ln;ut&&(q=!q),me(q),L.blending===ts&&L.transparent===!1?H(mi):H(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),o.setFunc(L.depthFunc),o.setTest(L.depthTest),o.setMask(L.depthWrite),r.setMask(L.colorWrite);let K=L.stencilWrite;a.setTest(K),K&&(a.setMask(L.stencilWriteMask),a.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),a.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Ge(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?pt(n.SAMPLE_ALPHA_TO_COVERAGE):qt(n.SAMPLE_ALPHA_TO_COVERAGE)}function me(L){_!==L&&(L?n.frontFace(n.CW):n.frontFace(n.CCW),_=L)}function ge(L){L!==b0?(pt(n.CULL_FACE),L!==I&&(L===Pd?n.cullFace(n.BACK):L===w0?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):qt(n.CULL_FACE),I=L}function Vt(L){L!==O&&(Z&&n.lineWidth(L),O=L)}function Ge(L,ut,q){L?(pt(n.POLYGON_OFFSET_FILL),(z!==ut||X!==q)&&(n.polygonOffset(ut,q),z=ut,X=q)):qt(n.POLYGON_OFFSET_FILL)}function kt(L){L?pt(n.SCISSOR_TEST):qt(n.SCISSOR_TEST)}function x(L){L===void 0&&(L=n.TEXTURE0+j-1),ft!==L&&(n.activeTexture(L),ft=L)}function M(L,ut,q){q===void 0&&(ft===null?q=n.TEXTURE0+j-1:q=ft);let K=vt[q];K===void 0&&(K={type:void 0,texture:void 0},vt[q]=K),(K.type!==L||K.texture!==ut)&&(ft!==q&&(n.activeTexture(q),ft=q),n.bindTexture(L,ut||Pt[L]),K.type=L,K.texture=ut)}function G(){let L=vt[ft];L!==void 0&&L.type!==void 0&&(n.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function Q(){try{n.compressedTexImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function et(){try{n.compressedTexImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function $(){try{n.texSubImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Lt(){try{n.texSubImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function mt(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function _t(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ve(){try{n.texStorage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function rt(){try{n.texStorage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function St(){try{n.texImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Wt(){try{n.texImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Kt(L){Be.equals(L)===!1&&(n.scissor(L.x,L.y,L.z,L.w),Be.copy(L))}function Tt(L){J.equals(L)===!1&&(n.viewport(L.x,L.y,L.z,L.w),J.copy(L))}function Ee(L,ut){let q=c.get(ut);q===void 0&&(q=new WeakMap,c.set(ut,q));let K=q.get(L);K===void 0&&(K=n.getUniformBlockIndex(ut,L.name),q.set(L,K))}function oe(L,ut){let K=c.get(ut).get(L);l.get(ut)!==K&&(n.uniformBlockBinding(ut,K,L.__bindingPointIndex),l.set(ut,K))}function ze(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},ft=null,vt={},d={},u=new WeakMap,f=[],g=null,E=!1,m=null,p=null,v=null,A=null,y=null,D=null,C=null,b=new ht(0,0,0),F=0,S=!1,_=null,I=null,O=null,z=null,X=null,Be.set(0,0,n.canvas.width,n.canvas.height),J.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:pt,disable:qt,bindFramebuffer:ee,drawBuffers:he,useProgram:Je,setBlending:H,setMaterial:kn,setFlipSided:me,setCullFace:ge,setLineWidth:Vt,setPolygonOffset:Ge,setScissorTest:kt,activeTexture:x,bindTexture:M,unbindTexture:G,compressedTexImage2D:Q,compressedTexImage3D:et,texImage2D:St,texImage3D:Wt,updateUBOMapping:Ee,uniformBlockBinding:oe,texStorage2D:ve,texStorage3D:rt,texSubImage2D:$,texSubImage3D:Lt,compressedTexSubImage2D:mt,compressedTexSubImage3D:_t,scissor:Kt,viewport:Tt,reset:ze}}function xu(n,t,e,i){let s=Kg(i);switch(e){case ju:return n*t;case ef:return n*t;case nf:return n*t*2;case Hh:return n*t/s.components*s.byteLength;case Oh:return n*t/s.components*s.byteLength;case sf:return n*t*2/s.components*s.byteLength;case Bh:return n*t*2/s.components*s.byteLength;case tf:return n*t*3/s.components*s.byteLength;case ni:return n*t*4/s.components*s.byteLength;case zh:return n*t*4/s.components*s.byteLength;case ha:case da:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case ua:case fa:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case vc:case Mc:return Math.max(n,16)*Math.max(t,8)/4;case Ac:case _c:return Math.max(n,8)*Math.max(t,8)/2;case Sc:case Tc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case bc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case wc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Rc:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case xc:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Cc:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Fc:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Pc:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Ic:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Dc:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Lc:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Uc:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Nc:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Hc:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Oc:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Bc:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case pa:case zc:case kc:return Math.ceil(n/4)*Math.ceil(t/4)*16;case rf:case Gc:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Vc:case Wc:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Kg(n){switch(n){case Hi:case Ju:return{byteLength:1,components:1};case eo:case Qu:case Fn:return{byteLength:2,components:1};case Uh:case Nh:return{byteLength:2,components:4};case Oi:case Lh:case pi:return{byteLength:4,components:1};case Ku:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function jg(n,t,e,i,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new st,h=new WeakMap,d,u=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(x,M){return f?new OffscreenCanvas(x,M):ya("canvas")}function E(x,M,G){let Q=1,et=kt(x);if((et.width>G||et.height>G)&&(Q=G/Math.max(et.width,et.height)),Q<1)if(typeof HTMLImageElement<"u"&&x instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&x instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&x instanceof ImageBitmap||typeof VideoFrame<"u"&&x instanceof VideoFrame){let $=Math.floor(Q*et.width),Lt=Math.floor(Q*et.height);d===void 0&&(d=g($,Lt));let mt=M?g($,Lt):d;return mt.width=$,mt.height=Lt,mt.getContext("2d").drawImage(x,0,0,$,Lt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+et.width+"x"+et.height+") to ("+$+"x"+Lt+")."),mt}else return"data"in x&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+et.width+"x"+et.height+")."),x;return x}function m(x){return x.generateMipmaps}function p(x){n.generateMipmap(x)}function v(x){return x.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:x.isWebGL3DRenderTarget?n.TEXTURE_3D:x.isWebGLArrayRenderTarget||x.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function A(x,M,G,Q,et=!1){if(x!==null){if(n[x]!==void 0)return n[x];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+x+"'")}let $=M;if(M===n.RED&&(G===n.FLOAT&&($=n.R32F),G===n.HALF_FLOAT&&($=n.R16F),G===n.UNSIGNED_BYTE&&($=n.R8)),M===n.RED_INTEGER&&(G===n.UNSIGNED_BYTE&&($=n.R8UI),G===n.UNSIGNED_SHORT&&($=n.R16UI),G===n.UNSIGNED_INT&&($=n.R32UI),G===n.BYTE&&($=n.R8I),G===n.SHORT&&($=n.R16I),G===n.INT&&($=n.R32I)),M===n.RG&&(G===n.FLOAT&&($=n.RG32F),G===n.HALF_FLOAT&&($=n.RG16F),G===n.UNSIGNED_BYTE&&($=n.RG8)),M===n.RG_INTEGER&&(G===n.UNSIGNED_BYTE&&($=n.RG8UI),G===n.UNSIGNED_SHORT&&($=n.RG16UI),G===n.UNSIGNED_INT&&($=n.RG32UI),G===n.BYTE&&($=n.RG8I),G===n.SHORT&&($=n.RG16I),G===n.INT&&($=n.RG32I)),M===n.RGB_INTEGER&&(G===n.UNSIGNED_BYTE&&($=n.RGB8UI),G===n.UNSIGNED_SHORT&&($=n.RGB16UI),G===n.UNSIGNED_INT&&($=n.RGB32UI),G===n.BYTE&&($=n.RGB8I),G===n.SHORT&&($=n.RGB16I),G===n.INT&&($=n.RGB32I)),M===n.RGBA_INTEGER&&(G===n.UNSIGNED_BYTE&&($=n.RGBA8UI),G===n.UNSIGNED_SHORT&&($=n.RGBA16UI),G===n.UNSIGNED_INT&&($=n.RGBA32UI),G===n.BYTE&&($=n.RGBA8I),G===n.SHORT&&($=n.RGBA16I),G===n.INT&&($=n.RGBA32I)),M===n.RGB&&G===n.UNSIGNED_INT_5_9_9_9_REV&&($=n.RGB9_E5),M===n.RGBA){let Lt=et?Xa:_e.getTransfer(Q);G===n.FLOAT&&($=n.RGBA32F),G===n.HALF_FLOAT&&($=n.RGBA16F),G===n.UNSIGNED_BYTE&&($=Lt===Ue?n.SRGB8_ALPHA8:n.RGBA8),G===n.UNSIGNED_SHORT_4_4_4_4&&($=n.RGBA4),G===n.UNSIGNED_SHORT_5_5_5_1&&($=n.RGB5_A1)}return($===n.R16F||$===n.R32F||$===n.RG16F||$===n.RG32F||$===n.RGBA16F||$===n.RGBA32F)&&t.get("EXT_color_buffer_float"),$}function y(x,M){let G;return x?M===null||M===Oi||M===mr?G=n.DEPTH24_STENCIL8:M===pi?G=n.DEPTH32F_STENCIL8:M===eo&&(G=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Oi||M===mr?G=n.DEPTH_COMPONENT24:M===pi?G=n.DEPTH_COMPONENT32F:M===eo&&(G=n.DEPTH_COMPONENT16),G}function D(x,M){return m(x)===!0||x.isFramebufferTexture&&x.minFilter!==Hn&&x.minFilter!==fi?Math.log2(Math.max(M.width,M.height))+1:x.mipmaps!==void 0&&x.mipmaps.length>0?x.mipmaps.length:x.isCompressedTexture&&Array.isArray(x.image)?M.mipmaps.length:1}function C(x){let M=x.target;M.removeEventListener("dispose",C),F(M),M.isVideoTexture&&h.delete(M)}function b(x){let M=x.target;M.removeEventListener("dispose",b),_(M)}function F(x){let M=i.get(x);if(M.__webglInit===void 0)return;let G=x.source,Q=u.get(G);if(Q){let et=Q[M.__cacheKey];et.usedTimes--,et.usedTimes===0&&S(x),Object.keys(Q).length===0&&u.delete(G)}i.remove(x)}function S(x){let M=i.get(x);n.deleteTexture(M.__webglTexture);let G=x.source,Q=u.get(G);delete Q[M.__cacheKey],o.memory.textures--}function _(x){let M=i.get(x);if(x.depthTexture&&(x.depthTexture.dispose(),i.remove(x.depthTexture)),x.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(M.__webglFramebuffer[Q]))for(let et=0;et<M.__webglFramebuffer[Q].length;et++)n.deleteFramebuffer(M.__webglFramebuffer[Q][et]);else n.deleteFramebuffer(M.__webglFramebuffer[Q]);M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer[Q])}else{if(Array.isArray(M.__webglFramebuffer))for(let Q=0;Q<M.__webglFramebuffer.length;Q++)n.deleteFramebuffer(M.__webglFramebuffer[Q]);else n.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&n.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let Q=0;Q<M.__webglColorRenderbuffer.length;Q++)M.__webglColorRenderbuffer[Q]&&n.deleteRenderbuffer(M.__webglColorRenderbuffer[Q]);M.__webglDepthRenderbuffer&&n.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let G=x.textures;for(let Q=0,et=G.length;Q<et;Q++){let $=i.get(G[Q]);$.__webglTexture&&(n.deleteTexture($.__webglTexture),o.memory.textures--),i.remove(G[Q])}i.remove(x)}let I=0;function O(){I=0}function z(){let x=I;return x>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+x+" texture units while this GPU supports only "+s.maxTextures),I+=1,x}function X(x){let M=[];return M.push(x.wrapS),M.push(x.wrapT),M.push(x.wrapR||0),M.push(x.magFilter),M.push(x.minFilter),M.push(x.anisotropy),M.push(x.internalFormat),M.push(x.format),M.push(x.type),M.push(x.generateMipmaps),M.push(x.premultiplyAlpha),M.push(x.flipY),M.push(x.unpackAlignment),M.push(x.colorSpace),M.join()}function j(x,M){let G=i.get(x);if(x.isVideoTexture&&Vt(x),x.isRenderTargetTexture===!1&&x.version>0&&G.__version!==x.version){let Q=x.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(G,x,M);return}}e.bindTexture(n.TEXTURE_2D,G.__webglTexture,n.TEXTURE0+M)}function Z(x,M){let G=i.get(x);if(x.version>0&&G.__version!==x.version){J(G,x,M);return}e.bindTexture(n.TEXTURE_2D_ARRAY,G.__webglTexture,n.TEXTURE0+M)}function lt(x,M){let G=i.get(x);if(x.version>0&&G.__version!==x.version){J(G,x,M);return}e.bindTexture(n.TEXTURE_3D,G.__webglTexture,n.TEXTURE0+M)}function Y(x,M){let G=i.get(x);if(x.version>0&&G.__version!==x.version){ct(G,x,M);return}e.bindTexture(n.TEXTURE_CUBE_MAP,G.__webglTexture,n.TEXTURE0+M)}let ft={[fn]:n.REPEAT,[Ss]:n.CLAMP_TO_EDGE,[yc]:n.MIRRORED_REPEAT},vt={[Hn]:n.NEAREST,[tp]:n.NEAREST_MIPMAP_NEAREST,[Po]:n.NEAREST_MIPMAP_LINEAR,[fi]:n.LINEAR,[Tl]:n.LINEAR_MIPMAP_NEAREST,[Ts]:n.LINEAR_MIPMAP_LINEAR},Ot={[ip]:n.NEVER,[cp]:n.ALWAYS,[sp]:n.LESS,[af]:n.LEQUAL,[rp]:n.EQUAL,[lp]:n.GEQUAL,[op]:n.GREATER,[ap]:n.NOTEQUAL};function ce(x,M){if(M.type===pi&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===fi||M.magFilter===Tl||M.magFilter===Po||M.magFilter===Ts||M.minFilter===fi||M.minFilter===Tl||M.minFilter===Po||M.minFilter===Ts)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(x,n.TEXTURE_WRAP_S,ft[M.wrapS]),n.texParameteri(x,n.TEXTURE_WRAP_T,ft[M.wrapT]),(x===n.TEXTURE_3D||x===n.TEXTURE_2D_ARRAY)&&n.texParameteri(x,n.TEXTURE_WRAP_R,ft[M.wrapR]),n.texParameteri(x,n.TEXTURE_MAG_FILTER,vt[M.magFilter]),n.texParameteri(x,n.TEXTURE_MIN_FILTER,vt[M.minFilter]),M.compareFunction&&(n.texParameteri(x,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(x,n.TEXTURE_COMPARE_FUNC,Ot[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Hn||M.minFilter!==Po&&M.minFilter!==Ts||M.type===pi&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){let G=t.get("EXT_texture_filter_anisotropic");n.texParameterf(x,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function Be(x,M){let G=!1;x.__webglInit===void 0&&(x.__webglInit=!0,M.addEventListener("dispose",C));let Q=M.source,et=u.get(Q);et===void 0&&(et={},u.set(Q,et));let $=X(M);if($!==x.__cacheKey){et[$]===void 0&&(et[$]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,G=!0),et[$].usedTimes++;let Lt=et[x.__cacheKey];Lt!==void 0&&(et[x.__cacheKey].usedTimes--,Lt.usedTimes===0&&S(M)),x.__cacheKey=$,x.__webglTexture=et[$].texture}return G}function J(x,M,G){let Q=n.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(Q=n.TEXTURE_2D_ARRAY),M.isData3DTexture&&(Q=n.TEXTURE_3D);let et=Be(x,M),$=M.source;e.bindTexture(Q,x.__webglTexture,n.TEXTURE0+G);let Lt=i.get($);if($.version!==Lt.__version||et===!0){e.activeTexture(n.TEXTURE0+G);let mt=_e.getPrimaries(_e.workingColorSpace),_t=M.colorSpace===Ki?null:_e.getPrimaries(M.colorSpace),ve=M.colorSpace===Ki||mt===_t?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);let rt=E(M.image,!1,s.maxTextureSize);rt=Ge(M,rt);let St=r.convert(M.format,M.colorSpace),Wt=r.convert(M.type),Kt=A(M.internalFormat,St,Wt,M.colorSpace,M.isVideoTexture);ce(Q,M);let Tt,Ee=M.mipmaps,oe=M.isVideoTexture!==!0,ze=Lt.__version===void 0||et===!0,L=$.dataReady,ut=D(M,rt);if(M.isDepthTexture)Kt=y(M.format===gr,M.type),ze&&(oe?e.texStorage2D(n.TEXTURE_2D,1,Kt,rt.width,rt.height):e.texImage2D(n.TEXTURE_2D,0,Kt,rt.width,rt.height,0,St,Wt,null));else if(M.isDataTexture)if(Ee.length>0){oe&&ze&&e.texStorage2D(n.TEXTURE_2D,ut,Kt,Ee[0].width,Ee[0].height);for(let q=0,K=Ee.length;q<K;q++)Tt=Ee[q],oe?L&&e.texSubImage2D(n.TEXTURE_2D,q,0,0,Tt.width,Tt.height,St,Wt,Tt.data):e.texImage2D(n.TEXTURE_2D,q,Kt,Tt.width,Tt.height,0,St,Wt,Tt.data);M.generateMipmaps=!1}else oe?(ze&&e.texStorage2D(n.TEXTURE_2D,ut,Kt,rt.width,rt.height),L&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,rt.width,rt.height,St,Wt,rt.data)):e.texImage2D(n.TEXTURE_2D,0,Kt,rt.width,rt.height,0,St,Wt,rt.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){oe&&ze&&e.texStorage3D(n.TEXTURE_2D_ARRAY,ut,Kt,Ee[0].width,Ee[0].height,rt.depth);for(let q=0,K=Ee.length;q<K;q++)if(Tt=Ee[q],M.format!==ni)if(St!==null)if(oe){if(L)if(M.layerUpdates.size>0){let At=xu(Tt.width,Tt.height,M.format,M.type);for(let Et of M.layerUpdates){let ne=Tt.data.subarray(Et*At/Tt.data.BYTES_PER_ELEMENT,(Et+1)*At/Tt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,q,0,0,Et,Tt.width,Tt.height,1,St,ne)}M.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,q,0,0,0,Tt.width,Tt.height,rt.depth,St,Tt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,q,Kt,Tt.width,Tt.height,rt.depth,0,Tt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else oe?L&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,q,0,0,0,Tt.width,Tt.height,rt.depth,St,Wt,Tt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,q,Kt,Tt.width,Tt.height,rt.depth,0,St,Wt,Tt.data)}else{oe&&ze&&e.texStorage2D(n.TEXTURE_2D,ut,Kt,Ee[0].width,Ee[0].height);for(let q=0,K=Ee.length;q<K;q++)Tt=Ee[q],M.format!==ni?St!==null?oe?L&&e.compressedTexSubImage2D(n.TEXTURE_2D,q,0,0,Tt.width,Tt.height,St,Tt.data):e.compressedTexImage2D(n.TEXTURE_2D,q,Kt,Tt.width,Tt.height,0,Tt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):oe?L&&e.texSubImage2D(n.TEXTURE_2D,q,0,0,Tt.width,Tt.height,St,Wt,Tt.data):e.texImage2D(n.TEXTURE_2D,q,Kt,Tt.width,Tt.height,0,St,Wt,Tt.data)}else if(M.isDataArrayTexture)if(oe){if(ze&&e.texStorage3D(n.TEXTURE_2D_ARRAY,ut,Kt,rt.width,rt.height,rt.depth),L)if(M.layerUpdates.size>0){let q=xu(rt.width,rt.height,M.format,M.type);for(let K of M.layerUpdates){let At=rt.data.subarray(K*q/rt.data.BYTES_PER_ELEMENT,(K+1)*q/rt.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,K,rt.width,rt.height,1,St,Wt,At)}M.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,rt.width,rt.height,rt.depth,St,Wt,rt.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Kt,rt.width,rt.height,rt.depth,0,St,Wt,rt.data);else if(M.isData3DTexture)oe?(ze&&e.texStorage3D(n.TEXTURE_3D,ut,Kt,rt.width,rt.height,rt.depth),L&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,rt.width,rt.height,rt.depth,St,Wt,rt.data)):e.texImage3D(n.TEXTURE_3D,0,Kt,rt.width,rt.height,rt.depth,0,St,Wt,rt.data);else if(M.isFramebufferTexture){if(ze)if(oe)e.texStorage2D(n.TEXTURE_2D,ut,Kt,rt.width,rt.height);else{let q=rt.width,K=rt.height;for(let At=0;At<ut;At++)e.texImage2D(n.TEXTURE_2D,At,Kt,q,K,0,St,Wt,null),q>>=1,K>>=1}}else if(Ee.length>0){if(oe&&ze){let q=kt(Ee[0]);e.texStorage2D(n.TEXTURE_2D,ut,Kt,q.width,q.height)}for(let q=0,K=Ee.length;q<K;q++)Tt=Ee[q],oe?L&&e.texSubImage2D(n.TEXTURE_2D,q,0,0,St,Wt,Tt):e.texImage2D(n.TEXTURE_2D,q,Kt,St,Wt,Tt);M.generateMipmaps=!1}else if(oe){if(ze){let q=kt(rt);e.texStorage2D(n.TEXTURE_2D,ut,Kt,q.width,q.height)}L&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,St,Wt,rt)}else e.texImage2D(n.TEXTURE_2D,0,Kt,St,Wt,rt);m(M)&&p(Q),Lt.__version=$.version,M.onUpdate&&M.onUpdate(M)}x.__version=M.version}function ct(x,M,G){if(M.image.length!==6)return;let Q=Be(x,M),et=M.source;e.bindTexture(n.TEXTURE_CUBE_MAP,x.__webglTexture,n.TEXTURE0+G);let $=i.get(et);if(et.version!==$.__version||Q===!0){e.activeTexture(n.TEXTURE0+G);let Lt=_e.getPrimaries(_e.workingColorSpace),mt=M.colorSpace===Ki?null:_e.getPrimaries(M.colorSpace),_t=M.colorSpace===Ki||Lt===mt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,_t);let ve=M.isCompressedTexture||M.image[0].isCompressedTexture,rt=M.image[0]&&M.image[0].isDataTexture,St=[];for(let K=0;K<6;K++)!ve&&!rt?St[K]=E(M.image[K],!0,s.maxCubemapSize):St[K]=rt?M.image[K].image:M.image[K],St[K]=Ge(M,St[K]);let Wt=St[0],Kt=r.convert(M.format,M.colorSpace),Tt=r.convert(M.type),Ee=A(M.internalFormat,Kt,Tt,M.colorSpace),oe=M.isVideoTexture!==!0,ze=$.__version===void 0||Q===!0,L=et.dataReady,ut=D(M,Wt);ce(n.TEXTURE_CUBE_MAP,M);let q;if(ve){oe&&ze&&e.texStorage2D(n.TEXTURE_CUBE_MAP,ut,Ee,Wt.width,Wt.height);for(let K=0;K<6;K++){q=St[K].mipmaps;for(let At=0;At<q.length;At++){let Et=q[At];M.format!==ni?Kt!==null?oe?L&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,At,0,0,Et.width,Et.height,Kt,Et.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,At,Ee,Et.width,Et.height,0,Et.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):oe?L&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,At,0,0,Et.width,Et.height,Kt,Tt,Et.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,At,Ee,Et.width,Et.height,0,Kt,Tt,Et.data)}}}else{if(q=M.mipmaps,oe&&ze){q.length>0&&ut++;let K=kt(St[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,ut,Ee,K.width,K.height)}for(let K=0;K<6;K++)if(rt){oe?L&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,St[K].width,St[K].height,Kt,Tt,St[K].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Ee,St[K].width,St[K].height,0,Kt,Tt,St[K].data);for(let At=0;At<q.length;At++){let ne=q[At].image[K].image;oe?L&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,At+1,0,0,ne.width,ne.height,Kt,Tt,ne.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,At+1,Ee,ne.width,ne.height,0,Kt,Tt,ne.data)}}else{oe?L&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Kt,Tt,St[K]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Ee,Kt,Tt,St[K]);for(let At=0;At<q.length;At++){let Et=q[At];oe?L&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,At+1,0,0,Kt,Tt,Et.image[K]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,At+1,Ee,Kt,Tt,Et.image[K])}}}m(M)&&p(n.TEXTURE_CUBE_MAP),$.__version=et.version,M.onUpdate&&M.onUpdate(M)}x.__version=M.version}function Pt(x,M,G,Q,et,$){let Lt=r.convert(G.format,G.colorSpace),mt=r.convert(G.type),_t=A(G.internalFormat,Lt,mt,G.colorSpace),ve=i.get(M),rt=i.get(G);if(rt.__renderTarget=M,!ve.__hasExternalTextures){let St=Math.max(1,M.width>>$),Wt=Math.max(1,M.height>>$);et===n.TEXTURE_3D||et===n.TEXTURE_2D_ARRAY?e.texImage3D(et,$,_t,St,Wt,M.depth,0,Lt,mt,null):e.texImage2D(et,$,_t,St,Wt,0,Lt,mt,null)}e.bindFramebuffer(n.FRAMEBUFFER,x),ge(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Q,et,rt.__webglTexture,0,me(M)):(et===n.TEXTURE_2D||et>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&et<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Q,et,rt.__webglTexture,$),e.bindFramebuffer(n.FRAMEBUFFER,null)}function pt(x,M,G){if(n.bindRenderbuffer(n.RENDERBUFFER,x),M.depthBuffer){let Q=M.depthTexture,et=Q&&Q.isDepthTexture?Q.type:null,$=y(M.stencilBuffer,et),Lt=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,mt=me(M);ge(M)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,mt,$,M.width,M.height):G?n.renderbufferStorageMultisample(n.RENDERBUFFER,mt,$,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,$,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Lt,n.RENDERBUFFER,x)}else{let Q=M.textures;for(let et=0;et<Q.length;et++){let $=Q[et],Lt=r.convert($.format,$.colorSpace),mt=r.convert($.type),_t=A($.internalFormat,Lt,mt,$.colorSpace),ve=me(M);G&&ge(M)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ve,_t,M.width,M.height):ge(M)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ve,_t,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,_t,M.width,M.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function qt(x,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,x),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Q=i.get(M.depthTexture);Q.__renderTarget=M,(!Q.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),j(M.depthTexture,0);let et=Q.__webglTexture,$=me(M);if(M.depthTexture.format===cr)ge(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,et,0,$):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,et,0);else if(M.depthTexture.format===gr)ge(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,et,0,$):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,et,0);else throw new Error("Unknown depthTexture format")}function ee(x){let M=i.get(x),G=x.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==x.depthTexture){let Q=x.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),Q){let et=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,Q.removeEventListener("dispose",et)};Q.addEventListener("dispose",et),M.__depthDisposeCallback=et}M.__boundDepthTexture=Q}if(x.depthTexture&&!M.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");qt(M.__webglFramebuffer,x)}else if(G){M.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(e.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[Q]),M.__webglDepthbuffer[Q]===void 0)M.__webglDepthbuffer[Q]=n.createRenderbuffer(),pt(M.__webglDepthbuffer[Q],x,!1);else{let et=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,$=M.__webglDepthbuffer[Q];n.bindRenderbuffer(n.RENDERBUFFER,$),n.framebufferRenderbuffer(n.FRAMEBUFFER,et,n.RENDERBUFFER,$)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=n.createRenderbuffer(),pt(M.__webglDepthbuffer,x,!1);else{let Q=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,et=M.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,et),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,et)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function he(x,M,G){let Q=i.get(x);M!==void 0&&Pt(Q.__webglFramebuffer,x,x.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),G!==void 0&&ee(x)}function Je(x){let M=x.texture,G=i.get(x),Q=i.get(M);x.addEventListener("dispose",b);let et=x.textures,$=x.isWebGLCubeRenderTarget===!0,Lt=et.length>1;if(Lt||(Q.__webglTexture===void 0&&(Q.__webglTexture=n.createTexture()),Q.__version=M.version,o.memory.textures++),$){G.__webglFramebuffer=[];for(let mt=0;mt<6;mt++)if(M.mipmaps&&M.mipmaps.length>0){G.__webglFramebuffer[mt]=[];for(let _t=0;_t<M.mipmaps.length;_t++)G.__webglFramebuffer[mt][_t]=n.createFramebuffer()}else G.__webglFramebuffer[mt]=n.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){G.__webglFramebuffer=[];for(let mt=0;mt<M.mipmaps.length;mt++)G.__webglFramebuffer[mt]=n.createFramebuffer()}else G.__webglFramebuffer=n.createFramebuffer();if(Lt)for(let mt=0,_t=et.length;mt<_t;mt++){let ve=i.get(et[mt]);ve.__webglTexture===void 0&&(ve.__webglTexture=n.createTexture(),o.memory.textures++)}if(x.samples>0&&ge(x)===!1){G.__webglMultisampledFramebuffer=n.createFramebuffer(),G.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let mt=0;mt<et.length;mt++){let _t=et[mt];G.__webglColorRenderbuffer[mt]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,G.__webglColorRenderbuffer[mt]);let ve=r.convert(_t.format,_t.colorSpace),rt=r.convert(_t.type),St=A(_t.internalFormat,ve,rt,_t.colorSpace,x.isXRRenderTarget===!0),Wt=me(x);n.renderbufferStorageMultisample(n.RENDERBUFFER,Wt,St,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+mt,n.RENDERBUFFER,G.__webglColorRenderbuffer[mt])}n.bindRenderbuffer(n.RENDERBUFFER,null),x.depthBuffer&&(G.__webglDepthRenderbuffer=n.createRenderbuffer(),pt(G.__webglDepthRenderbuffer,x,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if($){e.bindTexture(n.TEXTURE_CUBE_MAP,Q.__webglTexture),ce(n.TEXTURE_CUBE_MAP,M);for(let mt=0;mt<6;mt++)if(M.mipmaps&&M.mipmaps.length>0)for(let _t=0;_t<M.mipmaps.length;_t++)Pt(G.__webglFramebuffer[mt][_t],x,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+mt,_t);else Pt(G.__webglFramebuffer[mt],x,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0);m(M)&&p(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Lt){for(let mt=0,_t=et.length;mt<_t;mt++){let ve=et[mt],rt=i.get(ve);e.bindTexture(n.TEXTURE_2D,rt.__webglTexture),ce(n.TEXTURE_2D,ve),Pt(G.__webglFramebuffer,x,ve,n.COLOR_ATTACHMENT0+mt,n.TEXTURE_2D,0),m(ve)&&p(n.TEXTURE_2D)}e.unbindTexture()}else{let mt=n.TEXTURE_2D;if((x.isWebGL3DRenderTarget||x.isWebGLArrayRenderTarget)&&(mt=x.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(mt,Q.__webglTexture),ce(mt,M),M.mipmaps&&M.mipmaps.length>0)for(let _t=0;_t<M.mipmaps.length;_t++)Pt(G.__webglFramebuffer[_t],x,M,n.COLOR_ATTACHMENT0,mt,_t);else Pt(G.__webglFramebuffer,x,M,n.COLOR_ATTACHMENT0,mt,0);m(M)&&p(mt),e.unbindTexture()}x.depthBuffer&&ee(x)}function Ae(x){let M=x.textures;for(let G=0,Q=M.length;G<Q;G++){let et=M[G];if(m(et)){let $=v(x),Lt=i.get(et).__webglTexture;e.bindTexture($,Lt),p($),e.unbindTexture()}}}let tn=[],H=[];function kn(x){if(x.samples>0){if(ge(x)===!1){let M=x.textures,G=x.width,Q=x.height,et=n.COLOR_BUFFER_BIT,$=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Lt=i.get(x),mt=M.length>1;if(mt)for(let _t=0;_t<M.length;_t++)e.bindFramebuffer(n.FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+_t,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,Lt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+_t,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Lt.__webglFramebuffer);for(let _t=0;_t<M.length;_t++){if(x.resolveDepthBuffer&&(x.depthBuffer&&(et|=n.DEPTH_BUFFER_BIT),x.stencilBuffer&&x.resolveStencilBuffer&&(et|=n.STENCIL_BUFFER_BIT)),mt){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Lt.__webglColorRenderbuffer[_t]);let ve=i.get(M[_t]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ve,0)}n.blitFramebuffer(0,0,G,Q,0,0,G,Q,et,n.NEAREST),l===!0&&(tn.length=0,H.length=0,tn.push(n.COLOR_ATTACHMENT0+_t),x.depthBuffer&&x.resolveDepthBuffer===!1&&(tn.push($),H.push($),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,H)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,tn))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),mt)for(let _t=0;_t<M.length;_t++){e.bindFramebuffer(n.FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+_t,n.RENDERBUFFER,Lt.__webglColorRenderbuffer[_t]);let ve=i.get(M[_t]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,Lt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+_t,n.TEXTURE_2D,ve,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Lt.__webglMultisampledFramebuffer)}else if(x.depthBuffer&&x.resolveDepthBuffer===!1&&l){let M=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[M])}}}function me(x){return Math.min(s.maxSamples,x.samples)}function ge(x){let M=i.get(x);return x.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Vt(x){let M=o.render.frame;h.get(x)!==M&&(h.set(x,M),x.update())}function Ge(x,M){let G=x.colorSpace,Q=x.format,et=x.type;return x.isCompressedTexture===!0||x.isVideoTexture===!0||G!==rs&&G!==Ki&&(_e.getTransfer(G)===Ue?(Q!==ni||et!==Hi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),M}function kt(x){return typeof HTMLImageElement<"u"&&x instanceof HTMLImageElement?(c.width=x.naturalWidth||x.width,c.height=x.naturalHeight||x.height):typeof VideoFrame<"u"&&x instanceof VideoFrame?(c.width=x.displayWidth,c.height=x.displayHeight):(c.width=x.width,c.height=x.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=O,this.setTexture2D=j,this.setTexture2DArray=Z,this.setTexture3D=lt,this.setTextureCube=Y,this.rebindTextures=he,this.setupRenderTarget=Je,this.updateRenderTargetMipmap=Ae,this.updateMultisampleRenderTarget=kn,this.setupDepthRenderbuffer=ee,this.setupFrameBufferTexture=Pt,this.useMultisampledRTT=ge}function tE(n,t){function e(i,s=Ki){let r,o=_e.getTransfer(s);if(i===Hi)return n.UNSIGNED_BYTE;if(i===Uh)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Nh)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Ku)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Ju)return n.BYTE;if(i===Qu)return n.SHORT;if(i===eo)return n.UNSIGNED_SHORT;if(i===Lh)return n.INT;if(i===Oi)return n.UNSIGNED_INT;if(i===pi)return n.FLOAT;if(i===Fn)return n.HALF_FLOAT;if(i===ju)return n.ALPHA;if(i===tf)return n.RGB;if(i===ni)return n.RGBA;if(i===ef)return n.LUMINANCE;if(i===nf)return n.LUMINANCE_ALPHA;if(i===cr)return n.DEPTH_COMPONENT;if(i===gr)return n.DEPTH_STENCIL;if(i===Hh)return n.RED;if(i===Oh)return n.RED_INTEGER;if(i===sf)return n.RG;if(i===Bh)return n.RG_INTEGER;if(i===zh)return n.RGBA_INTEGER;if(i===ha||i===da||i===ua||i===fa)if(o===Ue)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===ha)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===da)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ua)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===fa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===ha)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===da)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ua)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===fa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ac||i===vc||i===_c||i===Mc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Ac)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===vc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===_c)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Mc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Sc||i===Tc||i===bc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Sc||i===Tc)return o===Ue?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===bc)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===wc||i===Rc||i===xc||i===Cc||i===Fc||i===Pc||i===Ic||i===Dc||i===Lc||i===Uc||i===Nc||i===Hc||i===Oc||i===Bc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===wc)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Rc)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===xc)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Cc)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Fc)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Pc)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ic)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Dc)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Lc)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Uc)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Nc)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Hc)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Oc)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Bc)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===pa||i===zc||i===kc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===pa)return o===Ue?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===zc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===kc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===rf||i===Gc||i===Vc||i===Wc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===pa)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Gc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Vc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Wc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===mr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var rh=class extends un{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},at=class extends Ze{constructor(){super(),this.isGroup=!0,this.type="Group"}},eE={type:"move"},Qr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new at,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new at,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new at,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let E of t.hand.values()){let m=e.getJointPose(E,i),p=this._getHandJoint(c,E);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&u>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(eE)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new at;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},nE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,iE=`
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

}`,oh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){let s=new xn,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new hn({vertexShader:nE,fragmentShader:iE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new k(new bt(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},ah=class extends ns{constructor(t,e){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,g=null,E=new oh,m=e.getContextAttributes(),p=null,v=null,A=[],y=[],D=new st,C=null,b=new un;b.viewport=new He;let F=new un;F.viewport=new He;let S=[b,F],_=new rh,I=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let ct=A[J];return ct===void 0&&(ct=new Qr,A[J]=ct),ct.getTargetRaySpace()},this.getControllerGrip=function(J){let ct=A[J];return ct===void 0&&(ct=new Qr,A[J]=ct),ct.getGripSpace()},this.getHand=function(J){let ct=A[J];return ct===void 0&&(ct=new Qr,A[J]=ct),ct.getHandSpace()};function z(J){let ct=y.indexOf(J.inputSource);if(ct===-1)return;let Pt=A[ct];Pt!==void 0&&(Pt.update(J.inputSource,J.frame,c||o),Pt.dispatchEvent({type:J.type,data:J.inputSource}))}function X(){s.removeEventListener("select",z),s.removeEventListener("selectstart",z),s.removeEventListener("selectend",z),s.removeEventListener("squeeze",z),s.removeEventListener("squeezestart",z),s.removeEventListener("squeezeend",z),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",j);for(let J=0;J<A.length;J++){let ct=y[J];ct!==null&&(y[J]=null,A[J].disconnect(ct))}I=null,O=null,E.reset(),t.setRenderTarget(p),f=null,u=null,d=null,s=null,v=null,Be.stop(),i.isPresenting=!1,t.setPixelRatio(C),t.setSize(D.width,D.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){a=J,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",z),s.addEventListener("selectstart",z),s.addEventListener("selectend",z),s.addEventListener("squeeze",z),s.addEventListener("squeezestart",z),s.addEventListener("squeezeend",z),s.addEventListener("end",X),s.addEventListener("inputsourceschange",j),m.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(D),s.renderState.layers===void 0){let ct={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,ct),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new cn(f.framebufferWidth,f.framebufferHeight,{format:ni,type:Hi,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let ct=null,Pt=null,pt=null;m.depth&&(pt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ct=m.stencil?gr:cr,Pt=m.stencil?mr:Oi);let qt={colorFormat:e.RGBA8,depthFormat:pt,scaleFactor:r};d=new XRWebGLBinding(s,e),u=d.createProjectionLayer(qt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),v=new cn(u.textureWidth,u.textureHeight,{format:ni,type:Hi,depthTexture:new Ar(u.textureWidth,u.textureHeight,Pt,void 0,void 0,void 0,void 0,void 0,void 0,ct),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Be.setContext(s),Be.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return E.getDepthTexture()};function j(J){for(let ct=0;ct<J.removed.length;ct++){let Pt=J.removed[ct],pt=y.indexOf(Pt);pt>=0&&(y[pt]=null,A[pt].disconnect(Pt))}for(let ct=0;ct<J.added.length;ct++){let Pt=J.added[ct],pt=y.indexOf(Pt);if(pt===-1){for(let ee=0;ee<A.length;ee++)if(ee>=y.length){y.push(Pt),pt=ee;break}else if(y[ee]===null){y[ee]=Pt,pt=ee;break}if(pt===-1)break}let qt=A[pt];qt&&qt.connect(Pt)}}let Z=new P,lt=new P;function Y(J,ct,Pt){Z.setFromMatrixPosition(ct.matrixWorld),lt.setFromMatrixPosition(Pt.matrixWorld);let pt=Z.distanceTo(lt),qt=ct.projectionMatrix.elements,ee=Pt.projectionMatrix.elements,he=qt[14]/(qt[10]-1),Je=qt[14]/(qt[10]+1),Ae=(qt[9]+1)/qt[5],tn=(qt[9]-1)/qt[5],H=(qt[8]-1)/qt[0],kn=(ee[8]+1)/ee[0],me=he*H,ge=he*kn,Vt=pt/(-H+kn),Ge=Vt*-H;if(ct.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Ge),J.translateZ(Vt),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),qt[10]===-1)J.projectionMatrix.copy(ct.projectionMatrix),J.projectionMatrixInverse.copy(ct.projectionMatrixInverse);else{let kt=he+Vt,x=Je+Vt,M=me-Ge,G=ge+(pt-Ge),Q=Ae*Je/x*kt,et=tn*Je/x*kt;J.projectionMatrix.makePerspective(M,G,Q,et,kt,x),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function ft(J,ct){ct===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(ct.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;let ct=J.near,Pt=J.far;E.texture!==null&&(E.depthNear>0&&(ct=E.depthNear),E.depthFar>0&&(Pt=E.depthFar)),_.near=F.near=b.near=ct,_.far=F.far=b.far=Pt,(I!==_.near||O!==_.far)&&(s.updateRenderState({depthNear:_.near,depthFar:_.far}),I=_.near,O=_.far),b.layers.mask=J.layers.mask|2,F.layers.mask=J.layers.mask|4,_.layers.mask=b.layers.mask|F.layers.mask;let pt=J.parent,qt=_.cameras;ft(_,pt);for(let ee=0;ee<qt.length;ee++)ft(qt[ee],pt);qt.length===2?Y(_,b,F):_.projectionMatrix.copy(b.projectionMatrix),vt(J,_,pt)};function vt(J,ct,Pt){Pt===null?J.matrix.copy(ct.matrixWorld):(J.matrix.copy(Pt.matrixWorld),J.matrix.invert(),J.matrix.multiply(ct.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(ct.projectionMatrix),J.projectionMatrixInverse.copy(ct.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Ea*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(J){l=J,u!==null&&(u.fixedFoveation=J),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=J)},this.hasDepthSensing=function(){return E.texture!==null},this.getDepthSensingMesh=function(){return E.getMesh(_)};let Ot=null;function ce(J,ct){if(h=ct.getViewerPose(c||o),g=ct,h!==null){let Pt=h.views;f!==null&&(t.setRenderTargetFramebuffer(v,f.framebuffer),t.setRenderTarget(v));let pt=!1;Pt.length!==_.cameras.length&&(_.cameras.length=0,pt=!0);for(let ee=0;ee<Pt.length;ee++){let he=Pt[ee],Je=null;if(f!==null)Je=f.getViewport(he);else{let tn=d.getViewSubImage(u,he);Je=tn.viewport,ee===0&&(t.setRenderTargetTextures(v,tn.colorTexture,u.ignoreDepthValues?void 0:tn.depthStencilTexture),t.setRenderTarget(v))}let Ae=S[ee];Ae===void 0&&(Ae=new un,Ae.layers.enable(ee),Ae.viewport=new He,S[ee]=Ae),Ae.matrix.fromArray(he.transform.matrix),Ae.matrix.decompose(Ae.position,Ae.quaternion,Ae.scale),Ae.projectionMatrix.fromArray(he.projectionMatrix),Ae.projectionMatrixInverse.copy(Ae.projectionMatrix).invert(),Ae.viewport.set(Je.x,Je.y,Je.width,Je.height),ee===0&&(_.matrix.copy(Ae.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),pt===!0&&_.cameras.push(Ae)}let qt=s.enabledFeatures;if(qt&&qt.includes("depth-sensing")){let ee=d.getDepthInformation(Pt[0]);ee&&ee.isValid&&ee.texture&&E.init(t,ee,s.renderState)}}for(let Pt=0;Pt<A.length;Pt++){let pt=y[Pt],qt=A[Pt];pt!==null&&qt!==void 0&&qt.update(pt,ct,c||o)}Ot&&Ot(J,ct),ct.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ct}),g=null}let Be=new df;Be.setAnimationLoop(ce),this.setAnimationLoop=function(J){Ot=J},this.dispose=function(){}}},As=new Ei,sE=new De;function rE(n,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,hf(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,v,A,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,y)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),E(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,v,A):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===ln&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===ln&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let v=t.get(p),A=v.envMap,y=v.envMapRotation;A&&(m.envMap.value=A,As.copy(y),As.x*=-1,As.y*=-1,As.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(As.y*=-1,As.z*=-1),m.envMapRotation.value.setFromMatrix4(sE.makeRotationFromEuler(As)),m.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,v,A){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*v,m.scale.value=A*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,v){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===ln&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function E(m,p){let v=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function oE(n,t,e,i){let s={},r={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,A){let y=A.program;i.uniformBlockBinding(v,y)}function c(v,A){let y=s[v.id];y===void 0&&(g(v),y=h(v),s[v.id]=y,v.addEventListener("dispose",m));let D=A.program;i.updateUBOMapping(v,D);let C=t.render.frame;r[v.id]!==C&&(u(v),r[v.id]=C)}function h(v){let A=d();v.__bindingPointIndex=A;let y=n.createBuffer(),D=v.__size,C=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,D,C),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,A,y),y}function d(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(v){let A=s[v.id],y=v.uniforms,D=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,A);for(let C=0,b=y.length;C<b;C++){let F=Array.isArray(y[C])?y[C]:[y[C]];for(let S=0,_=F.length;S<_;S++){let I=F[S];if(f(I,C,S,D)===!0){let O=I.__offset,z=Array.isArray(I.value)?I.value:[I.value],X=0;for(let j=0;j<z.length;j++){let Z=z[j],lt=E(Z);typeof Z=="number"||typeof Z=="boolean"?(I.__data[0]=Z,n.bufferSubData(n.UNIFORM_BUFFER,O+X,I.__data)):Z.isMatrix3?(I.__data[0]=Z.elements[0],I.__data[1]=Z.elements[1],I.__data[2]=Z.elements[2],I.__data[3]=0,I.__data[4]=Z.elements[3],I.__data[5]=Z.elements[4],I.__data[6]=Z.elements[5],I.__data[7]=0,I.__data[8]=Z.elements[6],I.__data[9]=Z.elements[7],I.__data[10]=Z.elements[8],I.__data[11]=0):(Z.toArray(I.__data,X),X+=lt.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,O,I.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(v,A,y,D){let C=v.value,b=A+"_"+y;if(D[b]===void 0)return typeof C=="number"||typeof C=="boolean"?D[b]=C:D[b]=C.clone(),!0;{let F=D[b];if(typeof C=="number"||typeof C=="boolean"){if(F!==C)return D[b]=C,!0}else if(F.equals(C)===!1)return F.copy(C),!0}return!1}function g(v){let A=v.uniforms,y=0,D=16;for(let b=0,F=A.length;b<F;b++){let S=Array.isArray(A[b])?A[b]:[A[b]];for(let _=0,I=S.length;_<I;_++){let O=S[_],z=Array.isArray(O.value)?O.value:[O.value];for(let X=0,j=z.length;X<j;X++){let Z=z[X],lt=E(Z),Y=y%D,ft=Y%lt.boundary,vt=Y+ft;y+=ft,vt!==0&&D-vt<lt.storage&&(y+=D-vt),O.__data=new Float32Array(lt.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=y,y+=lt.storage}}}let C=y%D;return C>0&&(y+=D-C),v.__size=y,v.__cache={},this}function E(v){let A={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(A.boundary=4,A.storage=4):v.isVector2?(A.boundary=8,A.storage=8):v.isVector3||v.isColor?(A.boundary=16,A.storage=12):v.isVector4?(A.boundary=16,A.storage=16):v.isMatrix3?(A.boundary=48,A.storage=48):v.isMatrix4?(A.boundary=64,A.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),A}function m(v){let A=v.target;A.removeEventListener("dispose",m);let y=o.indexOf(A.__bindingPointIndex);o.splice(y,1),n.deleteBuffer(s[A.id]),delete s[A.id],delete r[A.id]}function p(){for(let v in s)n.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}var Ra=class{constructor(t={}){let{canvas:e=dp(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:u=!1}=t;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;let g=new Uint32Array(4),E=new Int32Array(4),m=null,p=null,v=[],A=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ye,this.toneMapping=gi,this.toneMappingExposure=1;let y=this,D=!1,C=0,b=0,F=null,S=-1,_=null,I=new He,O=new He,z=null,X=new ht(0),j=0,Z=e.width,lt=e.height,Y=1,ft=null,vt=null,Ot=new He(0,0,Z,lt),ce=new He(0,0,Z,lt),Be=!1,J=new io,ct=!1,Pt=!1,pt=new De,qt=new De,ee=new P,he=new He,Je={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ae=!1;function tn(){return F===null?Y:1}let H=i;function kn(T,U){return e.getContext(T,U)}try{let T={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ih}`),e.addEventListener("webglcontextlost",K,!1),e.addEventListener("webglcontextrestored",At,!1),e.addEventListener("webglcontextcreationerror",Et,!1),H===null){let U="webgl2";if(H=kn(U,T),H===null)throw kn(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let me,ge,Vt,Ge,kt,x,M,G,Q,et,$,Lt,mt,_t,ve,rt,St,Wt,Kt,Tt,Ee,oe,ze,L;function ut(){me=new M2(H),me.init(),oe=new tE(H,me),ge=new g2(H,me,t,oe),Vt=new Qg(H,me),ge.reverseDepthBuffer&&u&&Vt.buffers.depth.setReversed(!0),Ge=new b2(H),kt=new Og,x=new jg(H,me,Vt,kt,ge,oe,Ge),M=new y2(y),G=new _2(y),Q=new Ip(H),ze=new p2(H,Q),et=new S2(H,Q,Ge,ze),$=new R2(H,et,Q,Ge),Kt=new w2(H,ge,x),rt=new E2(kt),Lt=new Hg(y,M,G,me,ge,ze,rt),mt=new rE(y,kt),_t=new zg,ve=new qg(me),Wt=new f2(y,M,G,Vt,$,f,l),St=new $g(y,$,ge),L=new oE(H,Ge,ge,Vt),Tt=new m2(H,me,Ge),Ee=new T2(H,me,Ge),Ge.programs=Lt.programs,y.capabilities=ge,y.extensions=me,y.properties=kt,y.renderLists=_t,y.shadowMap=St,y.state=Vt,y.info=Ge}ut();let q=new ah(y,H);this.xr=q,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){let T=me.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=me.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(T){T!==void 0&&(Y=T,this.setSize(Z,lt,!1))},this.getSize=function(T){return T.set(Z,lt)},this.setSize=function(T,U,V=!0){if(q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Z=T,lt=U,e.width=Math.floor(T*Y),e.height=Math.floor(U*Y),V===!0&&(e.style.width=T+"px",e.style.height=U+"px"),this.setViewport(0,0,T,U)},this.getDrawingBufferSize=function(T){return T.set(Z*Y,lt*Y).floor()},this.setDrawingBufferSize=function(T,U,V){Z=T,lt=U,Y=V,e.width=Math.floor(T*V),e.height=Math.floor(U*V),this.setViewport(0,0,T,U)},this.getCurrentViewport=function(T){return T.copy(I)},this.getViewport=function(T){return T.copy(Ot)},this.setViewport=function(T,U,V,W){T.isVector4?Ot.set(T.x,T.y,T.z,T.w):Ot.set(T,U,V,W),Vt.viewport(I.copy(Ot).multiplyScalar(Y).round())},this.getScissor=function(T){return T.copy(ce)},this.setScissor=function(T,U,V,W){T.isVector4?ce.set(T.x,T.y,T.z,T.w):ce.set(T,U,V,W),Vt.scissor(O.copy(ce).multiplyScalar(Y).round())},this.getScissorTest=function(){return Be},this.setScissorTest=function(T){Vt.setScissorTest(Be=T)},this.setOpaqueSort=function(T){ft=T},this.setTransparentSort=function(T){vt=T},this.getClearColor=function(T){return T.copy(Wt.getClearColor())},this.setClearColor=function(){Wt.setClearColor.apply(Wt,arguments)},this.getClearAlpha=function(){return Wt.getClearAlpha()},this.setClearAlpha=function(){Wt.setClearAlpha.apply(Wt,arguments)},this.clear=function(T=!0,U=!0,V=!0){let W=0;if(T){let N=!1;if(F!==null){let ot=F.texture.format;N=ot===zh||ot===Bh||ot===Oh}if(N){let ot=F.texture.type,yt=ot===Hi||ot===Oi||ot===eo||ot===mr||ot===Uh||ot===Nh,Rt=Wt.getClearColor(),xt=Wt.getClearAlpha(),te=Rt.r,ie=Rt.g,Ct=Rt.b;yt?(g[0]=te,g[1]=ie,g[2]=Ct,g[3]=xt,H.clearBufferuiv(H.COLOR,0,g)):(E[0]=te,E[1]=ie,E[2]=Ct,E[3]=xt,H.clearBufferiv(H.COLOR,0,E))}else W|=H.COLOR_BUFFER_BIT}U&&(W|=H.DEPTH_BUFFER_BIT),V&&(W|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",K,!1),e.removeEventListener("webglcontextrestored",At,!1),e.removeEventListener("webglcontextcreationerror",Et,!1),_t.dispose(),ve.dispose(),kt.dispose(),M.dispose(),G.dispose(),$.dispose(),ze.dispose(),L.dispose(),Lt.dispose(),q.dispose(),q.removeEventListener("sessionstart",Sd),q.removeEventListener("sessionend",Td),fs.stop()};function K(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function At(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;let T=Ge.autoReset,U=St.enabled,V=St.autoUpdate,W=St.needsUpdate,N=St.type;ut(),Ge.autoReset=T,St.enabled=U,St.autoUpdate=V,St.needsUpdate=W,St.type=N}function Et(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function ne(T){let U=T.target;U.removeEventListener("dispose",ne),je(U)}function je(T){En(T),kt.remove(T)}function En(T){let U=kt.get(T).programs;U!==void 0&&(U.forEach(function(V){Lt.releaseProgram(V)}),T.isShaderMaterial&&Lt.releaseShaderCache(T))}this.renderBufferDirect=function(T,U,V,W,N,ot){U===null&&(U=Je);let yt=N.isMesh&&N.matrixWorld.determinant()<0,Rt=M0(T,U,V,W,N);Vt.setMaterial(W,yt);let xt=V.index,te=1;if(W.wireframe===!0){if(xt=et.getWireframeAttribute(V),xt===void 0)return;te=2}let ie=V.drawRange,Ct=V.attributes.position,Me=ie.start*te,ke=(ie.start+ie.count)*te;ot!==null&&(Me=Math.max(Me,ot.start*te),ke=Math.min(ke,(ot.start+ot.count)*te)),xt!==null?(Me=Math.max(Me,0),ke=Math.min(ke,xt.count)):Ct!=null&&(Me=Math.max(Me,0),ke=Math.min(ke,Ct.count));let Ve=ke-Me;if(Ve<0||Ve===1/0)return;ze.setup(N,W,Rt,V,xt);let wn,we=Tt;if(xt!==null&&(wn=Q.get(xt),we=Ee,we.setIndex(wn)),N.isMesh)W.wireframe===!0?(Vt.setLineWidth(W.wireframeLinewidth*tn()),we.setMode(H.LINES)):we.setMode(H.TRIANGLES);else if(N.isLine){let Ut=W.linewidth;Ut===void 0&&(Ut=1),Vt.setLineWidth(Ut*tn()),N.isLineSegments?we.setMode(H.LINES):N.isLineLoop?we.setMode(H.LINE_LOOP):we.setMode(H.LINE_STRIP)}else N.isPoints?we.setMode(H.POINTS):N.isSprite&&we.setMode(H.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)we.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(me.get("WEBGL_multi_draw"))we.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{let Ut=N._multiDrawStarts,wi=N._multiDrawCounts,Re=N._multiDrawCount,Kn=xt?Q.get(xt).bytesPerElement:1,ks=kt.get(W).currentProgram.getUniforms();for(let Ln=0;Ln<Re;Ln++)ks.setValue(H,"_gl_DrawID",Ln),we.render(Ut[Ln]/Kn,wi[Ln])}else if(N.isInstancedMesh)we.renderInstances(Me,Ve,N.count);else if(V.isInstancedBufferGeometry){let Ut=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,wi=Math.min(V.instanceCount,Ut);we.renderInstances(Me,Ve,wi)}else we.render(Me,Ve)};function Ie(T,U,V){T.transparent===!0&&T.side===Se&&T.forceSinglePass===!1?(T.side=ln,T.needsUpdate=!0,Fo(T,U,V),T.side=es,T.needsUpdate=!0,Fo(T,U,V),T.side=Se):Fo(T,U,V)}this.compile=function(T,U,V=null){V===null&&(V=T),p=ve.get(V),p.init(U),A.push(p),V.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),T!==V&&T.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),p.setupLights();let W=new Set;return T.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;let ot=N.material;if(ot)if(Array.isArray(ot))for(let yt=0;yt<ot.length;yt++){let Rt=ot[yt];Ie(Rt,V,N),W.add(Rt)}else Ie(ot,V,N),W.add(ot)}),A.pop(),p=null,W},this.compileAsync=function(T,U,V=null){let W=this.compile(T,U,V);return new Promise(N=>{function ot(){if(W.forEach(function(yt){kt.get(yt).currentProgram.isReady()&&W.delete(yt)}),W.size===0){N(T);return}setTimeout(ot,10)}me.get("KHR_parallel_shader_compile")!==null?ot():setTimeout(ot,10)})};let Qn=null;function bi(T){Qn&&Qn(T)}function Sd(){fs.stop()}function Td(){fs.start()}let fs=new df;fs.setAnimationLoop(bi),typeof self<"u"&&fs.setContext(self),this.setAnimationLoop=function(T){Qn=T,q.setAnimationLoop(T),T===null?fs.stop():fs.start()},q.addEventListener("sessionstart",Sd),q.addEventListener("sessionend",Td),this.render=function(T,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(q.cameraAutoUpdate===!0&&q.updateCamera(U),U=q.getCamera()),T.isScene===!0&&T.onBeforeRender(y,T,U,F),p=ve.get(T,A.length),p.init(U),A.push(p),qt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),J.setFromProjectionMatrix(qt),Pt=this.localClippingEnabled,ct=rt.init(this.clippingPlanes,Pt),m=_t.get(T,v.length),m.init(),v.push(m),q.enabled===!0&&q.isPresenting===!0){let ot=y.xr.getDepthSensingMesh();ot!==null&&Sl(ot,U,-1/0,y.sortObjects)}Sl(T,U,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(ft,vt),Ae=q.enabled===!1||q.isPresenting===!1||q.hasDepthSensing()===!1,Ae&&Wt.addToRenderList(m,T),this.info.render.frame++,ct===!0&&rt.beginShadows();let V=p.state.shadowsArray;St.render(V,T,U),ct===!0&&rt.endShadows(),this.info.autoReset===!0&&this.info.reset();let W=m.opaque,N=m.transmissive;if(p.setupLights(),U.isArrayCamera){let ot=U.cameras;if(N.length>0)for(let yt=0,Rt=ot.length;yt<Rt;yt++){let xt=ot[yt];wd(W,N,T,xt)}Ae&&Wt.render(T);for(let yt=0,Rt=ot.length;yt<Rt;yt++){let xt=ot[yt];bd(m,T,xt,xt.viewport)}}else N.length>0&&wd(W,N,T,U),Ae&&Wt.render(T),bd(m,T,U);F!==null&&(x.updateMultisampleRenderTarget(F),x.updateRenderTargetMipmap(F)),T.isScene===!0&&T.onAfterRender(y,T,U),ze.resetDefaultState(),S=-1,_=null,A.pop(),A.length>0?(p=A[A.length-1],ct===!0&&rt.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,v.pop(),v.length>0?m=v[v.length-1]:m=null};function Sl(T,U,V,W){if(T.visible===!1)return;if(T.layers.test(U.layers)){if(T.isGroup)V=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(U);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||J.intersectsSprite(T)){W&&he.setFromMatrixPosition(T.matrixWorld).applyMatrix4(qt);let yt=$.update(T),Rt=T.material;Rt.visible&&m.push(T,yt,Rt,V,he.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||J.intersectsObject(T))){let yt=$.update(T),Rt=T.material;if(W&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),he.copy(T.boundingSphere.center)):(yt.boundingSphere===null&&yt.computeBoundingSphere(),he.copy(yt.boundingSphere.center)),he.applyMatrix4(T.matrixWorld).applyMatrix4(qt)),Array.isArray(Rt)){let xt=yt.groups;for(let te=0,ie=xt.length;te<ie;te++){let Ct=xt[te],Me=Rt[Ct.materialIndex];Me&&Me.visible&&m.push(T,yt,Me,V,he.z,Ct)}}else Rt.visible&&m.push(T,yt,Rt,V,he.z,null)}}let ot=T.children;for(let yt=0,Rt=ot.length;yt<Rt;yt++)Sl(ot[yt],U,V,W)}function bd(T,U,V,W){let N=T.opaque,ot=T.transmissive,yt=T.transparent;p.setupLightsView(V),ct===!0&&rt.setGlobalState(y.clippingPlanes,V),W&&Vt.viewport(I.copy(W)),N.length>0&&Co(N,U,V),ot.length>0&&Co(ot,U,V),yt.length>0&&Co(yt,U,V),Vt.buffers.depth.setTest(!0),Vt.buffers.depth.setMask(!0),Vt.buffers.color.setMask(!0),Vt.setPolygonOffset(!1)}function wd(T,U,V,W){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[W.id]===void 0&&(p.state.transmissionRenderTarget[W.id]=new cn(1,1,{generateMipmaps:!0,type:me.has("EXT_color_buffer_half_float")||me.has("EXT_color_buffer_float")?Fn:Hi,minFilter:Ts,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:_e.workingColorSpace}));let ot=p.state.transmissionRenderTarget[W.id],yt=W.viewport||I;ot.setSize(yt.z,yt.w);let Rt=y.getRenderTarget();y.setRenderTarget(ot),y.getClearColor(X),j=y.getClearAlpha(),j<1&&y.setClearColor(16777215,.5),y.clear(),Ae&&Wt.render(V);let xt=y.toneMapping;y.toneMapping=gi;let te=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),p.setupLightsView(W),ct===!0&&rt.setGlobalState(y.clippingPlanes,W),Co(T,V,W),x.updateMultisampleRenderTarget(ot),x.updateRenderTargetMipmap(ot),me.has("WEBGL_multisampled_render_to_texture")===!1){let ie=!1;for(let Ct=0,Me=U.length;Ct<Me;Ct++){let ke=U[Ct],Ve=ke.object,wn=ke.geometry,we=ke.material,Ut=ke.group;if(we.side===Se&&Ve.layers.test(W.layers)){let wi=we.side;we.side=ln,we.needsUpdate=!0,Rd(Ve,V,W,wn,we,Ut),we.side=wi,we.needsUpdate=!0,ie=!0}}ie===!0&&(x.updateMultisampleRenderTarget(ot),x.updateRenderTargetMipmap(ot))}y.setRenderTarget(Rt),y.setClearColor(X,j),te!==void 0&&(W.viewport=te),y.toneMapping=xt}function Co(T,U,V){let W=U.isScene===!0?U.overrideMaterial:null;for(let N=0,ot=T.length;N<ot;N++){let yt=T[N],Rt=yt.object,xt=yt.geometry,te=W===null?yt.material:W,ie=yt.group;Rt.layers.test(V.layers)&&Rd(Rt,U,V,xt,te,ie)}}function Rd(T,U,V,W,N,ot){T.onBeforeRender(y,U,V,W,N,ot),T.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),N.onBeforeRender(y,U,V,W,T,ot),N.transparent===!0&&N.side===Se&&N.forceSinglePass===!1?(N.side=ln,N.needsUpdate=!0,y.renderBufferDirect(V,U,W,N,T,ot),N.side=es,N.needsUpdate=!0,y.renderBufferDirect(V,U,W,N,T,ot),N.side=Se):y.renderBufferDirect(V,U,W,N,T,ot),T.onAfterRender(y,U,V,W,N,ot)}function Fo(T,U,V){U.isScene!==!0&&(U=Je);let W=kt.get(T),N=p.state.lights,ot=p.state.shadowsArray,yt=N.state.version,Rt=Lt.getParameters(T,N.state,ot,U,V),xt=Lt.getProgramCacheKey(Rt),te=W.programs;W.environment=T.isMeshStandardMaterial?U.environment:null,W.fog=U.fog,W.envMap=(T.isMeshStandardMaterial?G:M).get(T.envMap||W.environment),W.envMapRotation=W.environment!==null&&T.envMap===null?U.environmentRotation:T.envMapRotation,te===void 0&&(T.addEventListener("dispose",ne),te=new Map,W.programs=te);let ie=te.get(xt);if(ie!==void 0){if(W.currentProgram===ie&&W.lightsStateVersion===yt)return Cd(T,Rt),ie}else Rt.uniforms=Lt.getUniforms(T),T.onBeforeCompile(Rt,y),ie=Lt.acquireProgram(Rt,xt),te.set(xt,ie),W.uniforms=Rt.uniforms;let Ct=W.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ct.clippingPlanes=rt.uniform),Cd(T,Rt),W.needsLights=T0(T),W.lightsStateVersion=yt,W.needsLights&&(Ct.ambientLightColor.value=N.state.ambient,Ct.lightProbe.value=N.state.probe,Ct.directionalLights.value=N.state.directional,Ct.directionalLightShadows.value=N.state.directionalShadow,Ct.spotLights.value=N.state.spot,Ct.spotLightShadows.value=N.state.spotShadow,Ct.rectAreaLights.value=N.state.rectArea,Ct.ltc_1.value=N.state.rectAreaLTC1,Ct.ltc_2.value=N.state.rectAreaLTC2,Ct.pointLights.value=N.state.point,Ct.pointLightShadows.value=N.state.pointShadow,Ct.hemisphereLights.value=N.state.hemi,Ct.directionalShadowMap.value=N.state.directionalShadowMap,Ct.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Ct.spotShadowMap.value=N.state.spotShadowMap,Ct.spotLightMatrix.value=N.state.spotLightMatrix,Ct.spotLightMap.value=N.state.spotLightMap,Ct.pointShadowMap.value=N.state.pointShadowMap,Ct.pointShadowMatrix.value=N.state.pointShadowMatrix),W.currentProgram=ie,W.uniformsList=null,ie}function xd(T){if(T.uniformsList===null){let U=T.currentProgram.getUniforms();T.uniformsList=dr.seqWithValue(U.seq,T.uniforms)}return T.uniformsList}function Cd(T,U){let V=kt.get(T);V.outputColorSpace=U.outputColorSpace,V.batching=U.batching,V.batchingColor=U.batchingColor,V.instancing=U.instancing,V.instancingColor=U.instancingColor,V.instancingMorph=U.instancingMorph,V.skinning=U.skinning,V.morphTargets=U.morphTargets,V.morphNormals=U.morphNormals,V.morphColors=U.morphColors,V.morphTargetsCount=U.morphTargetsCount,V.numClippingPlanes=U.numClippingPlanes,V.numIntersection=U.numClipIntersection,V.vertexAlphas=U.vertexAlphas,V.vertexTangents=U.vertexTangents,V.toneMapping=U.toneMapping}function M0(T,U,V,W,N){U.isScene!==!0&&(U=Je),x.resetTextureUnits();let ot=U.fog,yt=W.isMeshStandardMaterial?U.environment:null,Rt=F===null?y.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:rs,xt=(W.isMeshStandardMaterial?G:M).get(W.envMap||yt),te=W.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,ie=!!V.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Ct=!!V.morphAttributes.position,Me=!!V.morphAttributes.normal,ke=!!V.morphAttributes.color,Ve=gi;W.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(Ve=y.toneMapping);let wn=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,we=wn!==void 0?wn.length:0,Ut=kt.get(W),wi=p.state.lights;if(ct===!0&&(Pt===!0||T!==_)){let Gn=T===_&&W.id===S;rt.setState(W,T,Gn)}let Re=!1;W.version===Ut.__version?(Ut.needsLights&&Ut.lightsStateVersion!==wi.state.version||Ut.outputColorSpace!==Rt||N.isBatchedMesh&&Ut.batching===!1||!N.isBatchedMesh&&Ut.batching===!0||N.isBatchedMesh&&Ut.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Ut.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Ut.instancing===!1||!N.isInstancedMesh&&Ut.instancing===!0||N.isSkinnedMesh&&Ut.skinning===!1||!N.isSkinnedMesh&&Ut.skinning===!0||N.isInstancedMesh&&Ut.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Ut.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Ut.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Ut.instancingMorph===!1&&N.morphTexture!==null||Ut.envMap!==xt||W.fog===!0&&Ut.fog!==ot||Ut.numClippingPlanes!==void 0&&(Ut.numClippingPlanes!==rt.numPlanes||Ut.numIntersection!==rt.numIntersection)||Ut.vertexAlphas!==te||Ut.vertexTangents!==ie||Ut.morphTargets!==Ct||Ut.morphNormals!==Me||Ut.morphColors!==ke||Ut.toneMapping!==Ve||Ut.morphTargetsCount!==we)&&(Re=!0):(Re=!0,Ut.__version=W.version);let Kn=Ut.currentProgram;Re===!0&&(Kn=Fo(W,U,N));let ks=!1,Ln=!1,Nr=!1,We=Kn.getUniforms(),hi=Ut.uniforms;if(Vt.useProgram(Kn.program)&&(ks=!0,Ln=!0,Nr=!0),W.id!==S&&(S=W.id,Ln=!0),ks||_!==T){Vt.buffers.depth.getReversed()?(pt.copy(T.projectionMatrix),fp(pt),pp(pt),We.setValue(H,"projectionMatrix",pt)):We.setValue(H,"projectionMatrix",T.projectionMatrix),We.setValue(H,"viewMatrix",T.matrixWorldInverse);let Wi=We.map.cameraPosition;Wi!==void 0&&Wi.setValue(H,ee.setFromMatrixPosition(T.matrixWorld)),ge.logarithmicDepthBuffer&&We.setValue(H,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&We.setValue(H,"isOrthographic",T.isOrthographicCamera===!0),_!==T&&(_=T,Ln=!0,Nr=!0)}if(N.isSkinnedMesh){We.setOptional(H,N,"bindMatrix"),We.setOptional(H,N,"bindMatrixInverse");let Gn=N.skeleton;Gn&&(Gn.boneTexture===null&&Gn.computeBoneTexture(),We.setValue(H,"boneTexture",Gn.boneTexture,x))}N.isBatchedMesh&&(We.setOptional(H,N,"batchingTexture"),We.setValue(H,"batchingTexture",N._matricesTexture,x),We.setOptional(H,N,"batchingIdTexture"),We.setValue(H,"batchingIdTexture",N._indirectTexture,x),We.setOptional(H,N,"batchingColorTexture"),N._colorsTexture!==null&&We.setValue(H,"batchingColorTexture",N._colorsTexture,x));let Hr=V.morphAttributes;if((Hr.position!==void 0||Hr.normal!==void 0||Hr.color!==void 0)&&Kt.update(N,V,Kn),(Ln||Ut.receiveShadow!==N.receiveShadow)&&(Ut.receiveShadow=N.receiveShadow,We.setValue(H,"receiveShadow",N.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(hi.envMap.value=xt,hi.flipEnvMap.value=xt.isCubeTexture&&xt.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&U.environment!==null&&(hi.envMapIntensity.value=U.environmentIntensity),Ln&&(We.setValue(H,"toneMappingExposure",y.toneMappingExposure),Ut.needsLights&&S0(hi,Nr),ot&&W.fog===!0&&mt.refreshFogUniforms(hi,ot),mt.refreshMaterialUniforms(hi,W,Y,lt,p.state.transmissionRenderTarget[T.id]),dr.upload(H,xd(Ut),hi,x)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(dr.upload(H,xd(Ut),hi,x),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&We.setValue(H,"center",N.center),We.setValue(H,"modelViewMatrix",N.modelViewMatrix),We.setValue(H,"normalMatrix",N.normalMatrix),We.setValue(H,"modelMatrix",N.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){let Gn=W.uniformsGroups;for(let Wi=0,Xi=Gn.length;Wi<Xi;Wi++){let Fd=Gn[Wi];L.update(Fd,Kn),L.bind(Fd,Kn)}}return Kn}function S0(T,U){T.ambientLightColor.needsUpdate=U,T.lightProbe.needsUpdate=U,T.directionalLights.needsUpdate=U,T.directionalLightShadows.needsUpdate=U,T.pointLights.needsUpdate=U,T.pointLightShadows.needsUpdate=U,T.spotLights.needsUpdate=U,T.spotLightShadows.needsUpdate=U,T.rectAreaLights.needsUpdate=U,T.hemisphereLights.needsUpdate=U}function T0(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(T,U,V){kt.get(T.texture).__webglTexture=U,kt.get(T.depthTexture).__webglTexture=V;let W=kt.get(T);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=V===void 0,W.__autoAllocateDepthBuffer||me.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,U){let V=kt.get(T);V.__webglFramebuffer=U,V.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(T,U=0,V=0){F=T,C=U,b=V;let W=!0,N=null,ot=!1,yt=!1;if(T){let xt=kt.get(T);if(xt.__useDefaultFramebuffer!==void 0)Vt.bindFramebuffer(H.FRAMEBUFFER,null),W=!1;else if(xt.__webglFramebuffer===void 0)x.setupRenderTarget(T);else if(xt.__hasExternalTextures)x.rebindTextures(T,kt.get(T.texture).__webglTexture,kt.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let Ct=T.depthTexture;if(xt.__boundDepthTexture!==Ct){if(Ct!==null&&kt.has(Ct)&&(T.width!==Ct.image.width||T.height!==Ct.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");x.setupDepthRenderbuffer(T)}}let te=T.texture;(te.isData3DTexture||te.isDataArrayTexture||te.isCompressedArrayTexture)&&(yt=!0);let ie=kt.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(ie[U])?N=ie[U][V]:N=ie[U],ot=!0):T.samples>0&&x.useMultisampledRTT(T)===!1?N=kt.get(T).__webglMultisampledFramebuffer:Array.isArray(ie)?N=ie[V]:N=ie,I.copy(T.viewport),O.copy(T.scissor),z=T.scissorTest}else I.copy(Ot).multiplyScalar(Y).floor(),O.copy(ce).multiplyScalar(Y).floor(),z=Be;if(Vt.bindFramebuffer(H.FRAMEBUFFER,N)&&W&&Vt.drawBuffers(T,N),Vt.viewport(I),Vt.scissor(O),Vt.setScissorTest(z),ot){let xt=kt.get(T.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+U,xt.__webglTexture,V)}else if(yt){let xt=kt.get(T.texture),te=U||0;H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,xt.__webglTexture,V||0,te)}S=-1},this.readRenderTargetPixels=function(T,U,V,W,N,ot,yt){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Rt=kt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&yt!==void 0&&(Rt=Rt[yt]),Rt){Vt.bindFramebuffer(H.FRAMEBUFFER,Rt);try{let xt=T.texture,te=xt.format,ie=xt.type;if(!ge.textureFormatReadable(te)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ge.textureTypeReadable(ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=T.width-W&&V>=0&&V<=T.height-N&&H.readPixels(U,V,W,N,oe.convert(te),oe.convert(ie),ot)}finally{let xt=F!==null?kt.get(F).__webglFramebuffer:null;Vt.bindFramebuffer(H.FRAMEBUFFER,xt)}}},this.readRenderTargetPixelsAsync=async function(T,U,V,W,N,ot,yt){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Rt=kt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&yt!==void 0&&(Rt=Rt[yt]),Rt){let xt=T.texture,te=xt.format,ie=xt.type;if(!ge.textureFormatReadable(te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ge.textureTypeReadable(ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=T.width-W&&V>=0&&V<=T.height-N){Vt.bindFramebuffer(H.FRAMEBUFFER,Rt);let Ct=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,Ct),H.bufferData(H.PIXEL_PACK_BUFFER,ot.byteLength,H.STREAM_READ),H.readPixels(U,V,W,N,oe.convert(te),oe.convert(ie),0);let Me=F!==null?kt.get(F).__webglFramebuffer:null;Vt.bindFramebuffer(H.FRAMEBUFFER,Me);let ke=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await up(H,ke,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,Ct),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,ot),H.deleteBuffer(Ct),H.deleteSync(ke),ot}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,U=null,V=0){T.isTexture!==!0&&($r("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,T=arguments[1]);let W=Math.pow(2,-V),N=Math.floor(T.image.width*W),ot=Math.floor(T.image.height*W),yt=U!==null?U.x:0,Rt=U!==null?U.y:0;x.setTexture2D(T,0),H.copyTexSubImage2D(H.TEXTURE_2D,V,0,0,yt,Rt,N,ot),Vt.unbindTexture()},this.copyTextureToTexture=function(T,U,V=null,W=null,N=0){T.isTexture!==!0&&($r("WebGLRenderer: copyTextureToTexture function signature has changed."),W=arguments[0]||null,T=arguments[1],U=arguments[2],N=arguments[3]||0,V=null);let ot,yt,Rt,xt,te,ie,Ct,Me,ke,Ve=T.isCompressedTexture?T.mipmaps[N]:T.image;V!==null?(ot=V.max.x-V.min.x,yt=V.max.y-V.min.y,Rt=V.isBox3?V.max.z-V.min.z:1,xt=V.min.x,te=V.min.y,ie=V.isBox3?V.min.z:0):(ot=Ve.width,yt=Ve.height,Rt=Ve.depth||1,xt=0,te=0,ie=0),W!==null?(Ct=W.x,Me=W.y,ke=W.z):(Ct=0,Me=0,ke=0);let wn=oe.convert(U.format),we=oe.convert(U.type),Ut;U.isData3DTexture?(x.setTexture3D(U,0),Ut=H.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(x.setTexture2DArray(U,0),Ut=H.TEXTURE_2D_ARRAY):(x.setTexture2D(U,0),Ut=H.TEXTURE_2D),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,U.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,U.unpackAlignment);let wi=H.getParameter(H.UNPACK_ROW_LENGTH),Re=H.getParameter(H.UNPACK_IMAGE_HEIGHT),Kn=H.getParameter(H.UNPACK_SKIP_PIXELS),ks=H.getParameter(H.UNPACK_SKIP_ROWS),Ln=H.getParameter(H.UNPACK_SKIP_IMAGES);H.pixelStorei(H.UNPACK_ROW_LENGTH,Ve.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Ve.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,xt),H.pixelStorei(H.UNPACK_SKIP_ROWS,te),H.pixelStorei(H.UNPACK_SKIP_IMAGES,ie);let Nr=T.isDataArrayTexture||T.isData3DTexture,We=U.isDataArrayTexture||U.isData3DTexture;if(T.isRenderTargetTexture||T.isDepthTexture){let hi=kt.get(T),Hr=kt.get(U),Gn=kt.get(hi.__renderTarget),Wi=kt.get(Hr.__renderTarget);Vt.bindFramebuffer(H.READ_FRAMEBUFFER,Gn.__webglFramebuffer),Vt.bindFramebuffer(H.DRAW_FRAMEBUFFER,Wi.__webglFramebuffer);for(let Xi=0;Xi<Rt;Xi++)Nr&&H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,kt.get(T).__webglTexture,N,ie+Xi),T.isDepthTexture?(We&&H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,kt.get(U).__webglTexture,N,ke+Xi),H.blitFramebuffer(xt,te,ot,yt,Ct,Me,ot,yt,H.DEPTH_BUFFER_BIT,H.NEAREST)):We?H.copyTexSubImage3D(Ut,N,Ct,Me,ke+Xi,xt,te,ot,yt):H.copyTexSubImage2D(Ut,N,Ct,Me,ke+Xi,xt,te,ot,yt);Vt.bindFramebuffer(H.READ_FRAMEBUFFER,null),Vt.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else We?T.isDataTexture||T.isData3DTexture?H.texSubImage3D(Ut,N,Ct,Me,ke,ot,yt,Rt,wn,we,Ve.data):U.isCompressedArrayTexture?H.compressedTexSubImage3D(Ut,N,Ct,Me,ke,ot,yt,Rt,wn,Ve.data):H.texSubImage3D(Ut,N,Ct,Me,ke,ot,yt,Rt,wn,we,Ve):T.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,N,Ct,Me,ot,yt,wn,we,Ve.data):T.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,N,Ct,Me,Ve.width,Ve.height,wn,Ve.data):H.texSubImage2D(H.TEXTURE_2D,N,Ct,Me,ot,yt,wn,we,Ve);H.pixelStorei(H.UNPACK_ROW_LENGTH,wi),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Re),H.pixelStorei(H.UNPACK_SKIP_PIXELS,Kn),H.pixelStorei(H.UNPACK_SKIP_ROWS,ks),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Ln),N===0&&U.generateMipmaps&&H.generateMipmap(Ut),Vt.unbindTexture()},this.copyTextureToTexture3D=function(T,U,V=null,W=null,N=0){return T.isTexture!==!0&&($r("WebGLRenderer: copyTextureToTexture3D function signature has changed."),V=arguments[0]||null,W=arguments[1]||null,T=arguments[2],U=arguments[3],N=arguments[4]||0),$r('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,U,V,W,N)},this.initRenderTarget=function(T){kt.get(T).__webglFramebuffer===void 0&&x.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?x.setTextureCube(T,0):T.isData3DTexture?x.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?x.setTexture2DArray(T,0):x.setTexture2D(T,0),Vt.unbindTexture()},this.resetState=function(){C=0,b=0,F=null,Vt.reset(),ze.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Li}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=_e._getDrawingBufferColorSpace(t),e.unpackColorSpace=_e._getUnpackColorSpace()}},wt=class n{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new ht(t),this.density=e}clone(){return new n(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var xa=class extends Ze{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ei,this.environmentIntensity=1,this.environmentRotation=new Ei,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},lh=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=qc,this.updateRanges=[],this.version=0,this.uuid=Ui()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ui()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ui()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Tn=new P,Ca=class n{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)Tn.fromBufferAttribute(this,e),Tn.applyMatrix4(t),this.setXYZ(e,Tn.x,Tn.y,Tn.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Tn.fromBufferAttribute(this,e),Tn.applyNormalMatrix(t),this.setXYZ(e,Tn.x,Tn.y,Tn.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Tn.fromBufferAttribute(this,e),Tn.transformDirection(t),this.setXYZ(e,Tn.x,Tn.y,Tn.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=ui(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Ne(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=Ne(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Ne(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Ne(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Ne(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=ui(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=ui(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=ui(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=ui(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ne(e,this.array),i=Ne(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ne(e,this.array),i=Ne(i,this.array),s=Ne(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ne(e,this.array),i=Ne(i,this.array),s=Ne(s,this.array),r=Ne(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new nn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new n(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},vr=class extends yi{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new ht(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},nr,Gr=new P,ir=new P,sr=new P,rr=new st,Vr=new st,gf=new De,Ko=new P,Wr=new P,jo=new P,Cu=new st,tc=new st,Fu=new st,so=class extends Ze{constructor(t=new vr){if(super(),this.isSprite=!0,this.type="Sprite",nr===void 0){nr=new $e;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new lh(e,5);nr.setIndex([0,1,2,0,2,3]),nr.setAttribute("position",new Ca(i,3,0,!1)),nr.setAttribute("uv",new Ca(i,2,3,!1))}this.geometry=nr,this.material=t,this.center=new st(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ir.setFromMatrixScale(this.matrixWorld),gf.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),sr.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ir.multiplyScalar(-sr.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let o=this.center;ta(Ko.set(-.5,-.5,0),sr,o,ir,s,r),ta(Wr.set(.5,-.5,0),sr,o,ir,s,r),ta(jo.set(.5,.5,0),sr,o,ir,s,r),Cu.set(0,0),tc.set(1,0),Fu.set(1,1);let a=t.ray.intersectTriangle(Ko,Wr,jo,!1,Gr);if(a===null&&(ta(Wr.set(-.5,.5,0),sr,o,ir,s,r),tc.set(0,1),a=t.ray.intersectTriangle(Ko,jo,Wr,!1,Gr),a===null))return;let l=t.ray.origin.distanceTo(Gr);l<t.near||l>t.far||e.push({distance:l,point:Gr.clone(),uv:ji.getInterpolation(Gr,Ko,Wr,jo,Cu,tc,Fu,new st),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function ta(n,t,e,i,s,r){rr.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(Vr.x=r*rr.x-s*rr.y,Vr.y=s*rr.x+r*rr.y):Vr.copy(rr),n.copy(t),n.x+=Vr.x,n.y+=Vr.y,n.applyMatrix4(gf)}var ch=class extends xn{constructor(t=null,e=1,i=1,s,r,o,a,l,c=Hn,h=Hn,d,u){super(null,o,a,l,c,h,s,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Fa=class extends nn{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},or=new De,Pu=new De,ea=[],Iu=new Bi,aE=new De,Xr=new k,qr=new zi,Pa=class extends k{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Fa(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,aE)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Bi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,or),Iu.copy(t.boundingBox).applyMatrix4(or),this.boundingBox.union(Iu)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new zi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,or),qr.copy(t.boundingSphere).applyMatrix4(or),this.boundingSphere.union(qr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let i=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=t*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(t,e){let i=this.matrixWorld,s=this.count;if(Xr.geometry=this.geometry,Xr.material=this.material,Xr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),qr.copy(this.boundingSphere),qr.applyMatrix4(i),t.ray.intersectsSphere(qr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,or),Pu.multiplyMatrices(i,or),Xr.matrixWorld=Pu,Xr.raycast(t,ea);for(let o=0,a=ea.length;o<a;o++){let l=ea[o];l.instanceId=r,l.object=this,e.push(l)}ea.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Fa(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let i=e.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new ch(new Float32Array(s*this.count),s,this.count,Hh,pi));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<i.length;c++)o+=i[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;r[l]=a,r.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var ro=class extends yi{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new ht(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Ia=new P,Da=new P,Du=new De,Yr=new no,na=new zi,ec=new P,Lu=new P,La=class extends Ze{constructor(t=new $e,e=new ro){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)Ia.fromBufferAttribute(e,s-1),Da.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=Ia.distanceTo(Da);t.setAttribute("lineDistance",new fe(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),na.copy(i.boundingSphere),na.applyMatrix4(s),na.radius+=r,t.ray.intersectsSphere(na)===!1)return;Du.copy(s).invert(),Yr.copy(t.ray).applyMatrix4(Du);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=i.index,u=i.attributes.position;if(h!==null){let f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let E=f,m=g-1;E<m;E+=c){let p=h.getX(E),v=h.getX(E+1),A=ia(this,t,Yr,l,p,v);A&&e.push(A)}if(this.isLineLoop){let E=h.getX(g-1),m=h.getX(f),p=ia(this,t,Yr,l,E,m);p&&e.push(p)}}else{let f=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let E=f,m=g-1;E<m;E+=c){let p=ia(this,t,Yr,l,E,E+1);p&&e.push(p)}if(this.isLineLoop){let E=ia(this,t,Yr,l,g-1,f);E&&e.push(E)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function ia(n,t,e,i,s,r){let o=n.geometry.attributes.position;if(Ia.fromBufferAttribute(o,s),Da.fromBufferAttribute(o,r),e.distanceSqToSegment(Ia,Da,ec,Lu)>i)return;ec.applyMatrix4(n.matrixWorld);let l=t.ray.origin.distanceTo(ec);if(!(l<t.near||l>t.far))return{distance:l,point:Lu.clone().applyMatrix4(n.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:n}}var Uu=new P,Nu=new P,Ua=class extends La{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[];for(let s=0,r=e.count;s<r;s+=2)Uu.fromBufferAttribute(e,s),Nu.fromBufferAttribute(e,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Uu.distanceTo(Nu);t.setAttribute("lineDistance",new fe(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var _r=class extends yi{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new ht(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Hu=new De,hh=new no,sa=new zi,ra=new P,oo=class extends Ze{constructor(t=new $e,e=new _r){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),sa.copy(i.boundingSphere),sa.applyMatrix4(s),sa.radius+=r,t.ray.intersectsSphere(sa)===!1)return;Hu.copy(s).invert(),hh.copy(t.ray).applyMatrix4(Hu);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,d=i.attributes.position;if(c!==null){let u=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let g=u,E=f;g<E;g++){let m=c.getX(g);ra.fromBufferAttribute(d,m),Ou(ra,m,l,s,t,e,this)}}else{let u=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let g=u,E=f;g<E;g++)ra.fromBufferAttribute(d,g),Ou(ra,g,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Ou(n,t,e,i,s,r,o){let a=hh.distanceSqToPoint(n);if(a<e){let l=new P;hh.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Wn=class extends xn{constructor(t,e,i,s,r,o,a,l,c){super(t,e,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Xn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],i,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let i=this.getLengths(),s=0,r=i.length,o;e?o=e:o=t*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);let h=i[s],u=i[s+1]-h,f=(o-h)/u;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new st:new P);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){let i=new P,s=[],r=[],o=[],a=new P,l=new De;for(let f=0;f<=t;f++){let g=f/t;s[f]=this.getTangentAt(g,new P)}r[0]=new P,o[0]=new P;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),u<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(vn(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(vn(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},ao=class extends Xn{constructor(t=0,e=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new st){let i=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},dh=class extends ao{constructor(t,e,i,s,r,o){super(t,e,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Gh(){let n=0,t=0,e=0,i=0;function s(r,o,a,l){n=r,t=a,e=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,d){let u=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+d)+(l-a)/d;u*=h,f*=h,s(o,a,u,f)},calc:function(r){let o=r*r,a=o*r;return n+t*r+e*o+i*a}}}var oa=new P,nc=new Gh,ic=new Gh,sc=new Gh,bs=class extends Xn{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new P){let i=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(oa.subVectors(s[0],s[1]).add(s[0]),c=oa);let d=s[a%r],u=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(oa.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=oa),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(d),f),E=Math.pow(d.distanceToSquared(u),f),m=Math.pow(u.distanceToSquared(h),f);E<1e-4&&(E=1),g<1e-4&&(g=E),m<1e-4&&(m=E),nc.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,g,E,m),ic.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,g,E,m),sc.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,g,E,m)}else this.curveType==="catmullrom"&&(nc.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),ic.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),sc.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return i.set(nc.calc(l),ic.calc(l),sc.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new P().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Bu(n,t,e,i,s){let r=(i-t)*.5,o=(s-e)*.5,a=n*n,l=n*a;return(2*e-2*i+r+o)*l+(-3*e+3*i-2*r-o)*a+r*n+e}function lE(n,t){let e=1-n;return e*e*t}function cE(n,t){return 2*(1-n)*n*t}function hE(n,t){return n*n*t}function Kr(n,t,e,i){return lE(n,t)+cE(n,e)+hE(n,i)}function dE(n,t){let e=1-n;return e*e*e*t}function uE(n,t){let e=1-n;return 3*e*e*n*t}function fE(n,t){return 3*(1-n)*n*n*t}function pE(n,t){return n*n*n*t}function jr(n,t,e,i,s){return dE(n,t)+uE(n,e)+fE(n,i)+pE(n,s)}var Na=class extends Xn{constructor(t=new st,e=new st,i=new st,s=new st){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new st){let i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(jr(t,s.x,r.x,o.x,a.x),jr(t,s.y,r.y,o.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},uh=class extends Xn{constructor(t=new P,e=new P,i=new P,s=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new P){let i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(jr(t,s.x,r.x,o.x,a.x),jr(t,s.y,r.y,o.y,a.y),jr(t,s.z,r.z,o.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Ha=class extends Xn{constructor(t=new st,e=new st){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new st){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new st){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},fh=class extends Xn{constructor(t=new P,e=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new P){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new P){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Oa=class extends Xn{constructor(t=new st,e=new st,i=new st){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new st){let i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(Kr(t,s.x,r.x,o.x),Kr(t,s.y,r.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ba=class extends Xn{constructor(t=new P,e=new P,i=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new P){let i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(Kr(t,s.x,r.x,o.x),Kr(t,s.y,r.y,o.y),Kr(t,s.z,r.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},za=class extends Xn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new st){let i=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return i.set(Bu(a,l.x,c.x,h.x,d.x),Bu(a,l.y,c.y,h.y,d.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new st().fromArray(s))}return this}},ph=Object.freeze({__proto__:null,ArcCurve:dh,CatmullRomCurve3:bs,CubicBezierCurve:Na,CubicBezierCurve3:uh,EllipseCurve:ao,LineCurve:Ha,LineCurve3:fh,QuadraticBezierCurve:Oa,QuadraticBezierCurve3:Ba,SplineCurve:za}),mh=class extends Xn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ph[i](e,t))}return this}getPoint(t,e){let i=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],i;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(e.push(h),i=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(new ph[s.type]().fromJSON(s))}return this}},ka=class extends mh{constructor(t){super(),this.type="Path",this.currentPoint=new st,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let i=new Ha(this.currentPoint.clone(),new st(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){let r=new Oa(this.currentPoint.clone(),new st(t,e),new st(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,r,o){let a=new Na(this.currentPoint.clone(),new st(t,e),new st(i,s),new st(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),i=new za(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,i,s,r,o),this}absarc(t,e,i,s,r,o){return this.absellipse(t,e,i,i,s,r,o),this}ellipse(t,e,i,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,i,s,r,o,a,l),this}absellipse(t,e,i,s,r,o,a,l){let c=new ao(t,e,i,s,r,o,a,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}};var pn=class n extends $e{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],l=[],c=new P,h=new st;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=e;d++,u+=3){let f=i+d/e*s;c.x=t*Math.cos(f),c.y=t*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[u]/t+1)/2,h.y=(o[u+1]/t+1)/2,l.push(h.x,h.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new fe(o,3)),this.setAttribute("normal",new fe(a,3)),this.setAttribute("uv",new fe(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.segments,t.thetaStart,t.thetaLength)}},jt=class n extends $e{constructor(t=1,e=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],u=[],f=[],g=0,E=[],m=i/2,p=0;v(),o===!1&&(t>0&&A(!0),e>0&&A(!1)),this.setIndex(h),this.setAttribute("position",new fe(d,3)),this.setAttribute("normal",new fe(u,3)),this.setAttribute("uv",new fe(f,2));function v(){let y=new P,D=new P,C=0,b=(e-t)/i;for(let F=0;F<=r;F++){let S=[],_=F/r,I=_*(e-t)+t;for(let O=0;O<=s;O++){let z=O/s,X=z*l+a,j=Math.sin(X),Z=Math.cos(X);D.x=I*j,D.y=-_*i+m,D.z=I*Z,d.push(D.x,D.y,D.z),y.set(j,b,Z).normalize(),u.push(y.x,y.y,y.z),f.push(z,1-_),S.push(g++)}E.push(S)}for(let F=0;F<s;F++)for(let S=0;S<r;S++){let _=E[S][F],I=E[S+1][F],O=E[S+1][F+1],z=E[S][F+1];(t>0||S!==0)&&(h.push(_,I,z),C+=3),(e>0||S!==r-1)&&(h.push(I,O,z),C+=3)}c.addGroup(p,C,0),p+=C}function A(y){let D=g,C=new st,b=new P,F=0,S=y===!0?t:e,_=y===!0?1:-1;for(let O=1;O<=s;O++)d.push(0,m*_,0),u.push(0,_,0),f.push(.5,.5),g++;let I=g;for(let O=0;O<=s;O++){let X=O/s*l+a,j=Math.cos(X),Z=Math.sin(X);b.x=S*Z,b.y=m*_,b.z=S*j,d.push(b.x,b.y,b.z),u.push(0,_,0),C.x=j*.5+.5,C.y=Z*.5*_+.5,f.push(C.x,C.y),g++}for(let O=0;O<s;O++){let z=D+O,X=I+O;y===!0?h.push(X,X+1,z):h.push(X+1,X,z),F+=3}c.addGroup(p,F,y===!0?1:2),p+=F}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},mn=class n extends jt{constructor(t=1,e=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new n(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},gh=class n extends $e{constructor(t=[],e=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:s};let r=[],o=[];a(s),c(i),h(),this.setAttribute("position",new fe(r,3)),this.setAttribute("normal",new fe(r.slice(),3)),this.setAttribute("uv",new fe(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(v){let A=new P,y=new P,D=new P;for(let C=0;C<e.length;C+=3)f(e[C+0],A),f(e[C+1],y),f(e[C+2],D),l(A,y,D,v)}function l(v,A,y,D){let C=D+1,b=[];for(let F=0;F<=C;F++){b[F]=[];let S=v.clone().lerp(y,F/C),_=A.clone().lerp(y,F/C),I=C-F;for(let O=0;O<=I;O++)O===0&&F===C?b[F][O]=S:b[F][O]=S.clone().lerp(_,O/I)}for(let F=0;F<C;F++)for(let S=0;S<2*(C-F)-1;S++){let _=Math.floor(S/2);S%2===0?(u(b[F][_+1]),u(b[F+1][_]),u(b[F][_])):(u(b[F][_+1]),u(b[F+1][_+1]),u(b[F+1][_]))}}function c(v){let A=new P;for(let y=0;y<r.length;y+=3)A.x=r[y+0],A.y=r[y+1],A.z=r[y+2],A.normalize().multiplyScalar(v),r[y+0]=A.x,r[y+1]=A.y,r[y+2]=A.z}function h(){let v=new P;for(let A=0;A<r.length;A+=3){v.x=r[A+0],v.y=r[A+1],v.z=r[A+2];let y=m(v)/2/Math.PI+.5,D=p(v)/Math.PI+.5;o.push(y,1-D)}g(),d()}function d(){for(let v=0;v<o.length;v+=6){let A=o[v+0],y=o[v+2],D=o[v+4],C=Math.max(A,y,D),b=Math.min(A,y,D);C>.9&&b<.1&&(A<.2&&(o[v+0]+=1),y<.2&&(o[v+2]+=1),D<.2&&(o[v+4]+=1))}}function u(v){r.push(v.x,v.y,v.z)}function f(v,A){let y=v*3;A.x=t[y+0],A.y=t[y+1],A.z=t[y+2]}function g(){let v=new P,A=new P,y=new P,D=new P,C=new st,b=new st,F=new st;for(let S=0,_=0;S<r.length;S+=9,_+=6){v.set(r[S+0],r[S+1],r[S+2]),A.set(r[S+3],r[S+4],r[S+5]),y.set(r[S+6],r[S+7],r[S+8]),C.set(o[_+0],o[_+1]),b.set(o[_+2],o[_+3]),F.set(o[_+4],o[_+5]),D.copy(v).add(A).add(y).divideScalar(3);let I=m(D);E(C,_+0,v,I),E(b,_+2,A,I),E(F,_+4,y,I)}}function E(v,A,y,D){D<0&&v.x===1&&(o[A]=v.x-1),y.x===0&&y.z===0&&(o[A]=D/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function p(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.vertices,t.indices,t.radius,t.details)}},ki=class n extends gh{constructor(t=1,e=0){let i=(1+Math.sqrt(5))/2,s=1/i,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-i,0,-s,i,0,s,-i,0,s,i,-s,-i,0,-s,i,0,s,-i,0,s,i,0,-i,0,-s,i,0,-s,-i,0,s,i,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new n(t.radius,t.detail)}};var Mr=class extends ka{constructor(t){super(t),this.uuid=Ui(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let i=0,s=this.holes.length;i<s;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let s=t.holes[e];this.holes.push(new ka().fromJSON(s))}return this}},mE={triangulate:function(n,t,e=2){let i=t&&t.length,s=i?t[0]*e:n.length,r=Ef(n,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c,h,d,u,f;if(i&&(r=vE(n,t,r,e)),n.length>80*e){a=c=n[0],l=h=n[1];for(let g=e;g<s;g+=e)d=n[g],u=n[g+1],d<a&&(a=d),u<l&&(l=u),d>c&&(c=d),u>h&&(h=u);f=Math.max(c-a,h-l),f=f!==0?32767/f:0}return lo(r,o,e,a,l,f,0),o}};function Ef(n,t,e,i,s){let r,o;if(s===PE(n,t,e,i)>0)for(r=t;r<e;r+=i)o=zu(r,n[r],n[r+1],o);else for(r=e-i;r>=t;r-=i)o=zu(r,n[r],n[r+1],o);return o&&Ya(o,o.next)&&(ho(o),o=o.next),o}function ws(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(Ya(e,e.next)||Qe(e.prev,e,e.next)===0)){if(ho(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function lo(n,t,e,i,s,r,o){if(!n)return;!o&&r&&bE(n,i,s,r);let a=n,l,c;for(;n.prev!==n.next;){if(l=n.prev,c=n.next,r?EE(n,i,s,r):gE(n)){t.push(l.i/e|0),t.push(n.i/e|0),t.push(c.i/e|0),ho(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=yE(ws(n),t,e),lo(n,t,e,i,s,r,2)):o===2&&AE(n,t,e,i,s,r):lo(ws(n),t,e,i,s,r,1);break}}}function gE(n){let t=n.prev,e=n,i=n.next;if(Qe(t,e,i)>=0)return!1;let s=t.x,r=e.x,o=i.x,a=t.y,l=e.y,c=i.y,h=s<r?s<o?s:o:r<o?r:o,d=a<l?a<c?a:c:l<c?l:c,u=s>r?s>o?s:o:r>o?r:o,f=a>l?a>c?a:c:l>c?l:c,g=i.next;for(;g!==t;){if(g.x>=h&&g.x<=u&&g.y>=d&&g.y<=f&&lr(s,a,r,l,o,c,g.x,g.y)&&Qe(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function EE(n,t,e,i){let s=n.prev,r=n,o=n.next;if(Qe(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,d=r.y,u=o.y,f=a<l?a<c?a:c:l<c?l:c,g=h<d?h<u?h:u:d<u?d:u,E=a>l?a>c?a:c:l>c?l:c,m=h>d?h>u?h:u:d>u?d:u,p=Eh(f,g,t,e,i),v=Eh(E,m,t,e,i),A=n.prevZ,y=n.nextZ;for(;A&&A.z>=p&&y&&y.z<=v;){if(A.x>=f&&A.x<=E&&A.y>=g&&A.y<=m&&A!==s&&A!==o&&lr(a,h,l,d,c,u,A.x,A.y)&&Qe(A.prev,A,A.next)>=0||(A=A.prevZ,y.x>=f&&y.x<=E&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&lr(a,h,l,d,c,u,y.x,y.y)&&Qe(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;A&&A.z>=p;){if(A.x>=f&&A.x<=E&&A.y>=g&&A.y<=m&&A!==s&&A!==o&&lr(a,h,l,d,c,u,A.x,A.y)&&Qe(A.prev,A,A.next)>=0)return!1;A=A.prevZ}for(;y&&y.z<=v;){if(y.x>=f&&y.x<=E&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&lr(a,h,l,d,c,u,y.x,y.y)&&Qe(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function yE(n,t,e){let i=n;do{let s=i.prev,r=i.next.next;!Ya(s,r)&&yf(s,i,i.next,r)&&co(s,r)&&co(r,s)&&(t.push(s.i/e|0),t.push(i.i/e|0),t.push(r.i/e|0),ho(i),ho(i.next),i=n=r),i=i.next}while(i!==n);return ws(i)}function AE(n,t,e,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&xE(o,a)){let l=Af(o,a);o=ws(o,o.next),l=ws(l,l.next),lo(o,t,e,i,s,r,0),lo(l,t,e,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function vE(n,t,e,i){let s=[],r,o,a,l,c;for(r=0,o=t.length;r<o;r++)a=t[r]*i,l=r<o-1?t[r+1]*i:n.length,c=Ef(n,a,l,i,!1),c===c.next&&(c.steiner=!0),s.push(RE(c));for(s.sort(_E),r=0;r<s.length;r++)e=ME(s[r],e);return e}function _E(n,t){return n.x-t.x}function ME(n,t){let e=SE(n,t);if(!e)return t;let i=Af(e,n);return ws(i,i.next),ws(e,e.next)}function SE(n,t){let e=t,i=-1/0,s,r=n.x,o=n.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){let u=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=r&&u>i&&(i=u,s=e.x<e.next.x?e:e.next,u===r))return s}e=e.next}while(e!==t);if(!s)return null;let a=s,l=s.x,c=s.y,h=1/0,d;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&lr(o<c?r:i,o,l,c,o<c?i:r,o,e.x,e.y)&&(d=Math.abs(o-e.y)/(r-e.x),co(e,n)&&(d<h||d===h&&(e.x>s.x||e.x===s.x&&TE(s,e)))&&(s=e,h=d)),e=e.next;while(e!==a);return s}function TE(n,t){return Qe(n.prev,n,t.prev)<0&&Qe(t.next,n,n.next)<0}function bE(n,t,e,i){let s=n;do s.z===0&&(s.z=Eh(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,wE(s)}function wE(n){let t,e,i,s,r,o,a,l,c=1;do{for(e=n,n=null,r=null,o=0;e;){for(o++,i=e,a=0,t=0;t<c&&(a++,i=i.nextZ,!!i);t++);for(l=c;a>0||l>0&&i;)a!==0&&(l===0||!i||e.z<=i.z)?(s=e,e=e.nextZ,a--):(s=i,i=i.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;e=i}r.nextZ=null,c*=2}while(o>1);return n}function Eh(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function RE(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function lr(n,t,e,i,s,r,o,a){return(s-o)*(t-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(i-a)}function xE(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!CE(n,t)&&(co(n,t)&&co(t,n)&&FE(n,t)&&(Qe(n.prev,n,t.prev)||Qe(n,t.prev,t))||Ya(n,t)&&Qe(n.prev,n,n.next)>0&&Qe(t.prev,t,t.next)>0)}function Qe(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function Ya(n,t){return n.x===t.x&&n.y===t.y}function yf(n,t,e,i){let s=la(Qe(n,t,e)),r=la(Qe(n,t,i)),o=la(Qe(e,i,n)),a=la(Qe(e,i,t));return!!(s!==r&&o!==a||s===0&&aa(n,e,t)||r===0&&aa(n,i,t)||o===0&&aa(e,n,i)||a===0&&aa(e,t,i))}function aa(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function la(n){return n>0?1:n<0?-1:0}function CE(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&yf(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function co(n,t){return Qe(n.prev,n,n.next)<0?Qe(n,t,n.next)>=0&&Qe(n,n.prev,t)>=0:Qe(n,t,n.prev)<0||Qe(n,n.next,t)<0}function FE(n,t){let e=n,i=!1,s=(n.x+t.x)/2,r=(n.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function Af(n,t){let e=new yh(n.i,n.x,n.y),i=new yh(t.i,t.x,t.y),s=n.next,r=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function zu(n,t,e,i){let s=new yh(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function ho(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function yh(n,t,e){this.i=n,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function PE(n,t,e,i){let s=0;for(let r=t,o=e-i;r<e;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}var to=class n{static area(t){let e=t.length,i=0;for(let s=e-1,r=0;r<e;s=r++)i+=t[s].x*t[r].y-t[r].x*t[s].y;return i*.5}static isClockWise(t){return n.area(t)<0}static triangulateShape(t,e){let i=[],s=[],r=[];ku(t),Gu(i,t);let o=t.length;e.forEach(ku);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,Gu(i,e[l]);let a=mE.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function ku(n){let t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function Gu(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}var uo=class n extends $e{constructor(t=new Mr([new st(0,.5),new st(-.5,-.5),new st(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let i=[],s=[],r=[],o=[],a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(i),this.setAttribute("position",new fe(s,3)),this.setAttribute("normal",new fe(r,3)),this.setAttribute("uv",new fe(o,2));function c(h){let d=s.length/3,u=h.extractPoints(e),f=u.shape,g=u.holes;to.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,p=g.length;m<p;m++){let v=g[m];to.isClockWise(v)===!0&&(g[m]=v.reverse())}let E=to.triangulateShape(f,g);for(let m=0,p=g.length;m<p;m++){let v=g[m];f=f.concat(v)}for(let m=0,p=f.length;m<p;m++){let v=f[m];s.push(v.x,v.y,0),r.push(0,0,1),o.push(v.x,v.y)}for(let m=0,p=E.length;m<p;m++){let v=E[m],A=v[0]+d,y=v[1]+d,D=v[2]+d;i.push(A,y,D),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return IE(e,t)}static fromJSON(t,e){let i=[];for(let s=0,r=t.shapes.length;s<r;s++){let o=e[t.shapes[s]];i.push(o)}return new n(i,t.curveSegments)}};function IE(n,t){if(t.shapes=[],Array.isArray(n))for(let e=0,i=n.length;e<i;e++){let s=n[e];t.shapes.push(s.uuid)}else t.shapes.push(n.uuid);return t}var Le=class n extends $e{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,h=[],d=new P,u=new P,f=[],g=[],E=[],m=[];for(let p=0;p<=i;p++){let v=[],A=p/i,y=0;p===0&&o===0?y=.5/e:p===i&&l===Math.PI&&(y=-.5/e);for(let D=0;D<=e;D++){let C=D/e;d.x=-t*Math.cos(s+C*r)*Math.sin(o+A*a),d.y=t*Math.cos(o+A*a),d.z=t*Math.sin(s+C*r)*Math.sin(o+A*a),g.push(d.x,d.y,d.z),u.copy(d).normalize(),E.push(u.x,u.y,u.z),m.push(C+y,1-A),v.push(c++)}h.push(v)}for(let p=0;p<i;p++)for(let v=0;v<e;v++){let A=h[p][v+1],y=h[p][v],D=h[p+1][v],C=h[p+1][v+1];(p!==0||o>0)&&f.push(A,y,C),(p!==i-1||l<Math.PI)&&f.push(y,D,C)}this.setIndex(f),this.setAttribute("position",new fe(g,3)),this.setAttribute("normal",new fe(E,3)),this.setAttribute("uv",new fe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var _n=class n extends $e{constructor(t=1,e=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);let o=[],a=[],l=[],c=[],h=new P,d=new P,u=new P;for(let f=0;f<=i;f++)for(let g=0;g<=s;g++){let E=g/s*r,m=f/i*Math.PI*2;d.x=(t+e*Math.cos(m))*Math.cos(E),d.y=(t+e*Math.cos(m))*Math.sin(E),d.z=e*Math.sin(m),a.push(d.x,d.y,d.z),h.x=t*Math.cos(E),h.y=t*Math.sin(E),u.subVectors(d,h).normalize(),l.push(u.x,u.y,u.z),c.push(g/s),c.push(f/i)}for(let f=1;f<=i;f++)for(let g=1;g<=s;g++){let E=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,p=(s+1)*(f-1)+g,v=(s+1)*f+g;o.push(E,m,v),o.push(m,p,v)}this.setIndex(o),this.setAttribute("position",new fe(a,3)),this.setAttribute("normal",new fe(l,3)),this.setAttribute("uv",new fe(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var Sr=class n extends $e{constructor(t=new Ba(new P(-1,-1,0),new P(-1,1,0),new P(1,1,0)),e=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:i,radialSegments:s,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new P,l=new P,c=new st,h=new P,d=[],u=[],f=[],g=[];E(),this.setIndex(g),this.setAttribute("position",new fe(d,3)),this.setAttribute("normal",new fe(u,3)),this.setAttribute("uv",new fe(f,2));function E(){for(let A=0;A<e;A++)m(A);m(r===!1?e:0),v(),p()}function m(A){h=t.getPointAt(A/e,h);let y=o.normals[A],D=o.binormals[A];for(let C=0;C<=s;C++){let b=C/s*Math.PI*2,F=Math.sin(b),S=-Math.cos(b);l.x=S*y.x+F*D.x,l.y=S*y.y+F*D.y,l.z=S*y.z+F*D.z,l.normalize(),u.push(l.x,l.y,l.z),a.x=h.x+i*l.x,a.y=h.y+i*l.y,a.z=h.z+i*l.z,d.push(a.x,a.y,a.z)}}function p(){for(let A=1;A<=e;A++)for(let y=1;y<=s;y++){let D=(s+1)*(A-1)+(y-1),C=(s+1)*A+(y-1),b=(s+1)*A+y,F=(s+1)*(A-1)+y;g.push(D,C,F),g.push(C,b,F)}}function v(){for(let A=0;A<=e;A++)for(let y=0;y<=s;y++)c.x=A/e,c.y=y/s,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new n(new ph[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};var Ft=class extends yi{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new ht(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ht(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=of,this.normalScale=new st(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ei,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function ca(n,t,e){return!n||!e&&n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function DE(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var Tr=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=i+2;;){if(s===void 0){if(t<r)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=e[++i],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=e[--i-1],t>=r)break t}o=i,i=0;break e}break n}for(;i<o;){let a=i+o>>>1;t<e[a]?o=a:i=a+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=i[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Ah=class extends Tr{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ld,endingEnd:Ld}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Ud:r=t,a=2*e-i;break;case Nd:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Ud:o=t,l=2*i-e;break;case Nd:o=1,l=i+s[1]-s[0];break;default:o=t-1,l=e}let c=(i-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,g=(i-e)/(s-e),E=g*g,m=E*g,p=-u*m+2*u*E-u*g,v=(1+u)*m+(-1.5-2*u)*E+(-.5+u)*g+1,A=(-1-f)*m+(1.5+f)*E+.5*g,y=f*m-f*E;for(let D=0;D!==a;++D)r[D]=p*o[h+D]+v*o[c+D]+A*o[l+D]+y*o[d+D];return r}},vh=class extends Tr{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(i-e)/(s-e),d=1-h;for(let u=0;u!==a;++u)r[u]=o[c+u]*d+o[l+u]*h;return r}},_h=class extends Tr{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},ii=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ca(e,this.TimeBufferType),this.values=ca(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:ca(t.times,Array),values:ca(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new _h(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new vh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Ah(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case ma:e=this.InterpolantFactoryMethodDiscrete;break;case Xc:e=this.InterpolantFactoryMethodLinear;break;case bl:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ma;case this.InterpolantFactoryMethodLinear:return Xc;case this.InterpolantFactoryMethodSmooth:return bl}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t}return this}trim(t,e){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<t;)++r;for(;o!==-1&&i[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&DE(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===bl,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let d=a*i,u=d-i,f=d+i;for(let g=0;g!==i;++g){let E=e[d+g];if(E!==e[u+g]||E!==e[f+g]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let d=a*i,u=o*i;for(let f=0;f!==i;++f)e[u+f]=e[d+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};ii.prototype.TimeBufferType=Float32Array;ii.prototype.ValueBufferType=Float32Array;ii.prototype.DefaultInterpolation=Xc;var Rs=class extends ii{constructor(t,e,i){super(t,e,i)}};Rs.prototype.ValueTypeName="bool";Rs.prototype.ValueBufferType=Array;Rs.prototype.DefaultInterpolation=ma;Rs.prototype.InterpolantFactoryMethodLinear=void 0;Rs.prototype.InterpolantFactoryMethodSmooth=void 0;var Mh=class extends ii{};Mh.prototype.ValueTypeName="color";var Sh=class extends ii{};Sh.prototype.ValueTypeName="number";var Th=class extends Tr{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)is.slerpFlat(r,0,o,c-a,o,c,l);return r}},Ga=class extends ii{InterpolantFactoryMethodLinear(t){return new Th(this.times,this.values,this.getValueSize(),t)}};Ga.prototype.ValueTypeName="quaternion";Ga.prototype.InterpolantFactoryMethodSmooth=void 0;var xs=class extends ii{constructor(t,e,i){super(t,e,i)}};xs.prototype.ValueTypeName="string";xs.prototype.ValueBufferType=Array;xs.prototype.DefaultInterpolation=ma;xs.prototype.InterpolantFactoryMethodLinear=void 0;xs.prototype.InterpolantFactoryMethodSmooth=void 0;var bh=class extends ii{};bh.prototype.ValueTypeName="vector";var wh=class{constructor(t,e,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],g=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}},LE=new wh,Rh=class{constructor(t){this.manager=t!==void 0?t:LE,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Rh.DEFAULT_MATERIAL_NAME="__DEFAULT";var br=class extends Ze{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ht(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},Mt=class extends br{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ze.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ht(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},rc=new De,Vu=new P,Wu=new P,fo=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new st(512,512),this.map=null,this.mapPass=null,this.matrix=new De,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new io,this._frameExtents=new st(1,1),this._viewportCount=1,this._viewports=[new He(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,i=this.matrix;Vu.setFromMatrixPosition(t.matrixWorld),e.position.copy(Vu),Wu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Wu),e.updateMatrixWorld(),rc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(rc),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(rc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},xh=class extends fo{constructor(){super(new un(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){let e=this.camera,i=Ea*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(i!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=i,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}},On=class extends br{constructor(t,e,i=0,s=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ze.DEFAULT_UP),this.updateMatrix(),this.target=new Ze,this.distance=i,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new xh}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},Xu=new De,Zr=new P,oc=new P,Ch=class extends fo{constructor(){super(new un(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new st(4,2),this._viewportCount=6,this._viewports=[new He(2,1,1,1),new He(0,1,1,1),new He(3,1,1,1),new He(1,1,1,1),new He(3,0,1,1),new He(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(t,e=0){let i=this.camera,s=this.matrix,r=t.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),Zr.setFromMatrixPosition(t.matrixWorld),i.position.copy(Zr),oc.copy(i.position),oc.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(oc),i.updateMatrixWorld(),s.makeTranslation(-Zr.x,-Zr.y,-Zr.z),Xu.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Xu)}},Qt=class extends br{constructor(t,e,i=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Ch}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},Fh=class extends fo{constructor(){super(new yr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},si=class extends br{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ze.DEFAULT_UP),this.updateMatrix(),this.target=new Ze,this.shadow=new Fh}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Va=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=qu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=qu();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function qu(){return 0}var Vh="\\[\\]\\.:\\/",UE=new RegExp("["+Vh+"]","g"),Wh="[^"+Vh+"]",NE="[^"+Vh.replace("\\.","")+"]",HE=/((?:WC+[\/:])*)/.source.replace("WC",Wh),OE=/(WCOD+)?/.source.replace("WCOD",NE),BE=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Wh),zE=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Wh),kE=new RegExp("^"+HE+OE+BE+zE+"$"),GE=["material","materials","bones","map"],Ph=class{constructor(t,e,i){let s=i||qe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},qe=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(UE,"")}static parseTrackName(t){let e=kE.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);GE.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=i(a.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};qe.Composite=Ph;qe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};qe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};qe.prototype.GetterByBindingType=[qe.prototype._getValue_direct,qe.prototype._getValue_array,qe.prototype._getValue_arrayElement,qe.prototype._getValue_toArray];qe.prototype.SetterByBindingTypeAndVersioning=[[qe.prototype._setValue_direct,qe.prototype._setValue_direct_setNeedsUpdate,qe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[qe.prototype._setValue_array,qe.prototype._setValue_array_setNeedsUpdate,qe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[qe.prototype._setValue_arrayElement,qe.prototype._setValue_arrayElement_setNeedsUpdate,qe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[qe.prototype._setValue_fromArray,qe.prototype._setValue_fromArray_setNeedsUpdate,qe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Jy=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ih}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ih);var Za={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var Gi=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},VE=new yr(-1,1,1,-1,0,1),Xh=class extends $e{constructor(){super(),this.setAttribute("position",new fe([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new fe([0,2,0,0,2,0],2))}},WE=new Xh,Cr=class{constructor(t){this._mesh=new k(WE,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,VE)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var Cs=class extends Gi{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof hn?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Rr.clone(t.uniforms),this.material=new hn({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new Cr(this.material)}render(t,e,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var po=class extends Gi{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,i){let s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(i),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},$a=class extends Gi{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var Ja=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let i=t.getSize(new st);this._width=i.width,this._height=i.height,e=new cn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Fn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Cs(Za),this.copyPass.material.blending=mi,this.clock=new Va}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());let e=this.renderer.getRenderTarget(),i=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,i),o.needsSwap){if(i){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}po!==void 0&&(o instanceof po?i=!0:o instanceof $a&&(i=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new st);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var vf={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ht(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var Fr=class n extends Gi{constructor(t,e,i,s){super(),this.strength=e!==void 0?e:1,this.radius=i,this.threshold=s,this.resolution=t!==void 0?new st(t.x,t.y):new st(256,256),this.clearColor=new ht(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new cn(r,o,{type:Fn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let d=0;d<this.nMips;d++){let u=new cn(r,o,{type:Fn});u.texture.name="UnrealBloomPass.h"+d,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);let f=new cn(r,o,{type:Fn});f.texture.name="UnrealBloomPass.v"+d,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),o=Math.round(o/2)}let a=vf;this.highPassUniforms=Rr.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new hn({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let d=0;d<this.nMips;d++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[d])),this.separableBlurMaterials[d].uniforms.invSize.value=new st(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=Za;this.copyUniforms=Rr.clone(h.uniforms),this.blendMaterial=new hn({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Rn,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new ht,this.oldClearAlpha=1,this.basic=new pe,this.fsQuad=new Cr(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let i=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(i,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,s),this.renderTargetsVertical[r].setSize(i,s),this.separableBlurMaterials[r].uniforms.invSize.value=new st(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(t,e,i,s,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(i),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=o}getSeperableBlurMaterial(t){let e=[];for(let i=0;i<t;i++)e.push(.39894*Math.exp(-.5*i*i/(t*t))/t);return new hn({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new st(.5,.5)},direction:{value:new st(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(t){return new hn({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}};Fr.BlurDirectionX=new st(1,0);Fr.BlurDirectionY=new st(0,1);var Fs=1280,Ps=720;function Nt(n){let t=n>>>0;return()=>{t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}var qh=(n,t=0,e=1)=>Math.min(e,Math.max(t,n)),xe=(n,t,e)=>n+(t-n)*e,Xt=(n,t,e)=>{let i=qh((e-n)/(t-n));return i*i*(3-2*i)};var XE=n=>(n=qh(n),n*n*(3-2*n));function Ka(n,t){if(t<=n[0][0])return n[0][1];for(let e=1;e<n.length;e++)if(t<=n[e][0]){let i=XE((t-n[e-1][0])/(n[e][0]-n[e-1][0])),s=n[e-1][1],r=n[e][1];return Array.isArray(s)?s.map((o,a)=>xe(o,r[a],i)):xe(s,r,i)}return n[n.length-1][1]}var qE={uniforms:{tColor:{value:null},tDepth:{value:null},near:{value:.1},far:{value:400},focus:{value:6},range:{value:3},maxBlur:{value:22},res:{value:new st(Fs,Ps)}},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}",fragmentShader:`varying vec2 vUv;uniform sampler2D tColor,tDepth;uniform float near,far,focus,range,maxBlur;uniform vec2 res;
  float lin(float z){float n=z*2.-1.;return 2.*near*far/(far+near-n*(far-near));}
  float coc(vec2 uv){float d=lin(texture2D(tDepth,uv).r);return clamp((d-focus)/(d<focus?range*.6:range),-1.,1.);}
  float hash(vec2 p){return fract(sin(dot(p,vec2(41.3,289.1)))*43758.5453);}
  void main(){float c0=coc(vUv);float r0=abs(c0)*maxBlur;vec3 sum=texture2D(tColor,vUv).rgb;float w=1.;float rot=hash(vUv*res)*6.283;
    const float G=2.39996;for(int i=1;i<72;i++){float fi=float(i);float r=sqrt(fi/72.)*maxBlur;float an=fi*G+rot;vec2 uv=vUv+vec2(cos(an),sin(an))*r/res;float c=coc(uv);float rs=abs(c)*maxBlur;
      float k=c<c0?smoothstep(r-1.5,r+1.5,rs):smoothstep(r-1.5,r+1.5,r0);sum+=texture2D(tColor,uv).rgb*k;w+=k;}
    gl_FragColor=vec4(sum/w,1.);}`},YE={uniforms:{tDiffuse:{value:null},vig:{value:.42},exposure:{value:1},grain:{value:.016},frame:{value:0},tint:{value:new ht(1,1,1)},sat:{value:1},flash:{value:0}},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}",fragmentShader:`varying vec2 vUv;uniform sampler2D tDiffuse;uniform float vig,exposure,grain,frame,sat,flash;uniform vec3 tint;
  vec3 aces(vec3 x){return clamp((x*(2.51*x+.03))/(x*(2.43*x+.59)+.14),0.,1.);}
  float rnd(vec2 p){return fract(sin(dot(p,vec2(12.9898,78.233))+frame)*43758.5453);}
  void main(){vec3 c=texture2D(tDiffuse,vUv).rgb*exposure*tint;c=aces(c*.88);
    float l=dot(c,vec3(.2126,.7152,.0722));c=mix(vec3(l),c,sat);
    vec2 q=(vUv-.5)*vec2(.86,1.);float v=smoothstep(.32,.86,length(q));c*=1.-vig*v;
    c=pow(c,vec3(1./2.2));c+=(rnd(vUv*vec2(1280.,720.))-.5)*grain;c=mix(c,vec3(1.),flash);gl_FragColor=vec4(c,1.);}`},Qa=class{constructor(t){let e=this.r=new Ra({canvas:t,antialias:!1,preserveDrawingBuffer:!0,powerPreference:"high-performance"});e.setPixelRatio(1),e.setSize(Fs,Ps,!1),e.shadowMap.enabled=!0,e.shadowMap.type=Dh,e.toneMapping=gi,e.outputColorSpace=rs;let i=new Ar(Fs,Ps);i.type=Oi,this.rt=new cn(Fs,Ps,{type:Fn,samples:2,depthTexture:i}),this.composer=new Ja(e,new cn(Fs,Ps,{type:Fn})),this.dof=new Cs(qE,"tDummy"),this.dof.uniforms.tColor.value=this.rt.texture,this.dof.uniforms.tDepth.value=i,this.bloom=new Fr(new st(Fs/2,Ps/2),.45,.75,.82),this.grade=new Cs(YE),this.composer.addPass(this.dof),this.composer.addPass(this.bloom),this.composer.addPass(this.grade),this.shots=[]}add(t){this.shots.push(t)}render(t){let e=this.shots.find(o=>t>=o.t0&&t<o.t1)||this.shots[this.shots.length-1];e.update(t,t-e.t0,this);let i=e.update(t,t-e.t0,this)||{},s=this.dof.uniforms,r=this.grade.uniforms;s.near.value=e.camera.near,s.far.value=e.camera.far,s.focus.value=i.focus??6,s.range.value=i.range??3,s.maxBlur.value=i.blur??20,this.bloom.strength=i.bloom??.45,this.bloom.threshold=i.bloomT??.82,this.bloom.radius=i.bloomR??.75,r.vig.value=i.vig??.42,r.exposure.value=i.exposure??1,r.sat.value=i.sat??1,r.flash.value=i.flash??0,r.frame.value=Math.floor(t*30)%97,r.tint.value.set(i.tint??"#ffffff"),this.r.setRenderTarget(this.rt),this.r.clear(),this.r.render(e.scene,e.camera),this.r.setRenderTarget(null),this.composer.render()}};function _f(n,t,e,i=40){let s=new xa;s.background=new ht(e);let r=new un(i,Fs/Ps,.08,400);return{t0:n,t1:t,scene:s,camera:r,update(){return{}}}}function Mf(n,t,e,i=0){n.position.set(t[0],t[1],t[2]),n.up.set(Math.sin(i),Math.cos(i),0),n.lookAt(e[0],e[1],e[2])}var In=1/420,Yh=new Map;function Dn(n,t,e,i){if(Yh.has(n))return Yh.get(n);let s=document.createElement("canvas");s.width=t*2,s.height=e*2;let r=s.getContext("2d");r.scale(2,2),r.lineJoin="round",r.lineCap="round",i(r,t,e);let o=new Wn(s);return o.colorSpace=Ye,o.anisotropy=8,o.generateMipmaps=!0,o.premultiplyAlpha=!1,Yh.set(n,o),o}var Te=n=>new Path2D(n);function dn(n,t,e){n.save(),n.fillStyle=e,n.fill(t),n.restore()}function ri(n,t,e,i,s,...r){let o=n.createLinearGradient(t,e,i,s);return r.forEach((a,l)=>o.addColorStop(l/(r.length-1),a)),o}var ZE={hero:{a:"#43C4B4",b:"#27998C",c:"#1F7C72",s:"#6FDCCB",kind:"hoodie",cuff:"#2A9F93"},jaleco:{a:"#F6F4EE",b:"#D9D6CE",c:"#B9B6AE",s:"#FFFFFF",kind:"coat",cuff:"#E9E6DE",pants:"#2E3648"},terno2:{a:"#3C4C72",b:"#2A3756",c:"#1E2842",s:"#6D80A8",kind:"suit",cuff:"#F2EFE8"},terno3:{a:"#6A3A44",b:"#4C2830",c:"#381D23",s:"#8F5A66",kind:"suit",cuff:"#F2EFE8"},avental:{a:"#D2483A",b:"#AE3429",c:"#8A261D",s:"#EF7E70",kind:"hoodie",cuff:"#8A261D"},terno:{a:"#2E3442",b:"#1C2029",c:"#14171e",s:"#566072",kind:"suit",cuff:"#F2EFE8"},rosa:{a:"#F08AA0",b:"#D66A86",c:"#B44F6C",s:"#F9B6C4",kind:"dress",cuff:"#111",belt:"#EFC04F",flora:"#FFF3DA"},amarelo:{a:"#F7CC58",b:"#E3A92F",c:"#C78F22",s:"#FFE596",kind:"blouse",cuff:"#111",pants:"#59607a"},verde:{a:"#8EAE86",b:"#6F9068",c:"#58744f",s:"#B6CFAE",kind:"dress",cuff:"#111",belt:"#EFC04F",flora:"#FFF8E6"},azul:{a:"#6F97C4",b:"#4C729F",c:"#3A5A82",s:"#A3C2E0",kind:"blouse",cuff:"#111",pants:"#3a3f55"},laranja:{a:"#F2A766",b:"#DD8A45",c:"#BC6F2E",s:"#FBCB9B",kind:"hoodie",cuff:"#BC6F2E"},roxo:{a:"#A98AD0",b:"#8667B0",c:"#6D5093",s:"#CDB6E6",kind:"dress",cuff:"#111",belt:"#F2F0E6",flora:"#F6E4FF"}};function $E(n,t){return Dn("torso_"+t,300,320,e=>{if(e.translate(150,20),n.kind==="hoodie"){let i=Te("M-92 34 Q-60 2 0 -2 Q60 2 92 34 Q106 130 104 262 L-104 262 Q-106 130 -92 34Z");dn(e,i,ri(e,-100,0,100,260,n.a,n.b)),e.fillStyle=n.c,e.globalAlpha=.3,e.fill(Te("M60 20 Q100 40 104 262 L52 262 Q70 150 60 20Z")),e.globalAlpha=1,e.fillStyle=n.b,e.fill(Te("M-70 26 Q0 92 70 26 Q84 44 72 70 Q0 118 -72 70 Q-84 44 -70 26Z")),e.fillStyle=n.c,e.fill(Te("M-44 22 Q0 -4 44 22 Q30 62 0 66 Q-30 62 -44 22Z")),e.strokeStyle="#F4F4EE",e.lineWidth=5,e.beginPath(),e.moveTo(-18,66),e.lineTo(-20,126),e.moveTo(18,66),e.lineTo(20,126),e.stroke(),e.fillStyle="#F4F4EE",e.beginPath(),e.arc(-20,130,4.5,0,7),e.arc(20,130,4.5,0,7),e.fill(),e.fillStyle=n.b,e.strokeStyle=n.c,e.lineWidth=3.5;let s=Te("M-62 164 L62 164 L78 240 L-78 240Z");e.fill(s),e.stroke(s),e.fillStyle=n.c,e.fillRect(-104,240,208,24),e.strokeStyle=n.b,e.lineWidth=2.5;for(let r=-100;r<104;r+=10)e.beginPath(),e.moveTo(r,242),e.lineTo(r,263),e.stroke()}else if(n.kind==="suit"){dn(e,Te("M-92 26 Q-46 4 0 4 Q46 4 92 26 Q104 130 100 280 L-100 280 Q-104 130 -92 26Z"),ri(e,-100,0,100,280,n.a,n.b)),e.strokeStyle="#ffffff10",e.lineWidth=2;for(let i=-92;i<96;i+=13)e.beginPath(),e.moveTo(i,30),e.lineTo(i,280),e.stroke();e.fillStyle="#F4F2EA",e.fill(Te("M-34 6 L34 6 L10 138 L-10 138Z")),e.fillStyle="#39AE9F",e.fill(Te("M-13 16 L13 16 L8 30 L18 116 L0 138 L-18 116 L-8 30Z")),e.strokeStyle="#8FDCCF",e.lineWidth=2;for(let i=0;i<4;i++)e.beginPath(),e.moveTo(-10,52+i*20),e.lineTo(10,44+i*20),e.stroke();e.fillStyle=n.c,e.fill(Te("M-34 6 L-58 22 L-46 66 L-8 146 L-12 150 L-34 6Z")),e.fill(Te("M34 6 L58 22 L46 66 L8 146 L12 150 L34 6Z")),e.fillStyle="#39AE9F",e.fill(Te("M-70 86 L-34 86 L-46 70 L-58 70Z")),e.fillStyle="#0d0f14",e.beginPath(),e.arc(0,176,7,0,7),e.arc(0,216,7,0,7),e.fill()}else if(n.kind==="coat")dn(e,Te("M-88 26 Q-44 4 0 4 Q44 4 88 26 Q100 150 104 292 L-104 292 Q-100 150 -88 26Z"),ri(e,-100,0,100,290,n.a,n.b)),e.fillStyle="#39AE9F",e.fill(Te("M-30 6 L30 6 L12 118 L-12 118Z")),e.fillStyle="#20273a",e.fillRect(-13,16,26,100),e.fillStyle=n.c,e.fill(Te("M-30 6 L-54 24 L-30 78 L-6 128 L-12 134Z")),e.fill(Te("M30 6 L54 24 L30 78 L6 128 L12 134Z")),e.strokeStyle=n.c,e.lineWidth=3,e.beginPath(),e.moveTo(0,130),e.lineTo(0,292),e.stroke(),e.strokeRect(-76,188,54,46),e.strokeRect(22,188,54,46),e.fillStyle="#3F6FB0",e.fillRect(44,182,5,26),e.fillStyle="#C9361F",e.fillRect(56,182,5,22);else if(n.kind==="dress"){dn(e,Te("M-62 14 Q-30 26 0 26 Q30 26 62 14 Q78 40 58 96 L54 118 L-54 118 L-58 96 Q-78 40 -62 14Z"),ri(e,-60,0,60,120,n.a,n.b)),dn(e,Te("M-52 118 L52 118 Q90 190 116 292 Q0 312 -116 292 Q-90 190 -52 118Z"),ri(e,-100,120,100,300,n.a,n.b)),e.fillStyle=n.belt,e.fillRect(-58,104,116,20);let i=7,s=()=>(i=i*16807%2147483647)/2147483647;e.fillStyle=n.flora;for(let r=0;r<34;r++){let o=34+s()*250,a=o<118?52:52+(o-118)*.36,l=(s()*2-1)*a;if(!(o>100&&o<128))for(let c=0;c<5;c++)e.beginPath(),e.arc(l+Math.cos(c*1.256)*5,o+Math.sin(c*1.256)*5,3.2,0,7),e.fill()}}else dn(e,Te("M-74 18 Q-30 30 0 30 Q30 30 74 18 Q88 110 74 196 L-74 196 Q-88 110 -74 18Z"),ri(e,-70,0,70,200,n.a,n.b)),e.fillStyle="#0a0a12",e.fill(Te("M-22 26 L22 26 L0 64Z")),dn(e,Te("M-68 196 L68 196 L74 276 L-74 276Z"),n.pants||"#555",null),e.fillStyle=n.belt||n.c,e.fillRect(-70,192,140,12)})}function Sf(n,t,e){return Dn("sl_"+t+e,90,170,i=>{if(i.translate(45,10),n.kind==="dress"||n.kind==="blouse"){e==="u"?(dn(i,Te("M-26 -2 Q0 -16 26 -2 Q32 34 22 54 Q0 62 -22 54 Q-32 34 -26 -2Z"),ri(i,-26,0,26,50,n.a,n.b)),i.fillStyle="#17161e",i.fillRect(-7,48,14,100)):(dn(i,Te("M-8 -4 L8 -4 L8 136 L-8 136Z"),"#17161e",n.kind?"#FFE9C8":null,3),i.fillStyle="#3a3a48",i.fillRect(-2,0,3,130));return}let s=134,r=e==="u"?27:23,o=e==="u"?23:18;dn(i,Te(`M${-r} 4 Q0 -22 ${r} 4 L${o} ${s} Q0 ${s+16} ${-o} ${s}Z`),ri(i,-r,0,r,0,n.a,n.b)),i.fillStyle=n.s,i.globalAlpha=.5,i.fill(Te(`M${-r+8} 10 L${-r+16} 6 L${-o+13} ${s-6} L${-o+6} ${s-4}Z`)),i.globalAlpha=1,e==="f"&&(i.fillStyle=n.cuff,i.fill(Te(`M-20 ${s-14} Q0 ${s-4} 20 ${s-14} L19 ${s+6} Q0 ${s+16} -19 ${s+6}Z`)))})}function JE(){return Dn("hand",90,100,n=>{n.translate(45,14);let t=Te("M-20 0 Q-30 22 -26 44 L-22 72 Q-16 80 -11 70 L-10 50 L-6 78 Q0 86 5 76 L5 50 L12 72 Q18 78 22 68 L18 40 L32 44 Q40 38 32 28 L18 8 Q2 -6 -20 0Z");dn(n,t,ri(n,-20,0,20,70,"#34343F","#1C1C25"),"#FFE9C8",4),n.strokeStyle="#4a4a58",n.lineWidth=2,n.beginPath(),n.moveTo(-12,18),n.quadraticCurveTo(0,8,12,16),n.stroke()})}function Tf(n){return Dn("leg"+n,50,160,t=>{t.translate(25,6),t.fillStyle="#191922",t.beginPath(),t.roundRect(-9,-6,18,158,9),t.fill(),t.fillStyle="#46465a",t.fillRect(-2.5,2,3,140)})}function QE(){return Dn("foot",80,40,n=>{n.translate(26,6),dn(n,Te("M-13 -2 L13 -2 Q40 6 42 22 L-14 22Z"),"#20202A","#FFE9C8",3),n.fillStyle="#E8E4DA",n.fillRect(-14,19,56,5)})}function KE(n="round"){return Dn("head"+n,300,300,t=>{t.translate(150,150);let e=new Path2D;e.arc(0,0,118,0,7);let i=t.createRadialGradient(10,-46,2,0,0,122);i.addColorStop(0,"#2C2E44"),i.addColorStop(.42,"#14141F"),i.addColorStop(1,"#08080E"),t.fillStyle=i,t.fill(e),t.save(),t.clip(e),t.globalAlpha=.1,t.fillStyle="#9fa4d8",t.beginPath(),t.ellipse(-4,-98,70,16,0,0,7),t.fill(),t.restore()})}var Rf={open(n,t){n.fillStyle="#F6EFE6",n.beginPath(),n.ellipse(0,0,18,27,t*.06,0,7),n.fill()},look(n,t){n.fillStyle="#F6EFE6",n.beginPath(),n.ellipse(11,0,18,26,0,0,7),n.fill()},lookl(n,t){n.fillStyle="#F6EFE6",n.beginPath(),n.ellipse(-11,0,18,26,0,0,7),n.fill()},down(n,t){n.fillStyle="#F6EFE6",n.beginPath(),n.ellipse(0,16,18,22,0,0,7),n.fill()},wide(n,t){n.fillStyle="#F6EFE6",n.beginPath(),n.ellipse(0,-2,23,33,0,0,7),n.fill()},small(n,t){n.fillStyle="#F6EFE6",n.beginPath(),n.ellipse(0,0,10,14,0,0,7),n.fill()},happy(n,t){n.strokeStyle="#F6EFE6",n.lineWidth=8.5,n.beginPath(),n.moveTo(-22,8),n.quadraticCurveTo(0,-24,22,8),n.stroke()},shut(n,t){n.strokeStyle="#F6EFE6",n.lineWidth=8.5,n.beginPath(),n.moveTo(-22,-6),n.quadraticCurveTo(0,18,22,-6),n.stroke()},flat(n,t){n.strokeStyle="#F6EFE6",n.lineWidth=8.5,n.beginPath(),n.moveTo(-22,2),n.lineTo(22,2),n.stroke()},smug(n,t){n.fillStyle="#F6EFE6",n.beginPath(),n.moveTo(-22,-6),n.lineTo(22,-6),n.quadraticCurveTo(20,24,0,24),n.quadraticCurveTo(-20,24,-22,-6),n.fill()},sad(n,t){n.fillStyle="#F6EFE6",n.beginPath(),n.moveTo(-19,t>0?-14:2),n.lineTo(19,t>0?2:-14),n.quadraticCurveTo(20,26,0,26),n.quadraticCurveTo(-20,26,-19,t>0?-14:2),n.fill()},angry(n,t){n.fillStyle="#F6EFE6",n.beginPath(),n.moveTo(-19,t>0?6:-14),n.lineTo(19,t>0?-14:6),n.quadraticCurveTo(20,26,0,26),n.quadraticCurveTo(-20,26,-19,t>0?6:-14),n.fill()},heart(n,t){n.fillStyle="#F0728C",n.beginPath(),n.moveTo(0,22),n.bezierCurveTo(-34,-2,-18,-30,0,-10),n.bezierCurveTo(18,-30,34,-2,0,22),n.fill()}};function jE(n,t){return Dn("eye_"+n+(t?"L":""),300,300,e=>{e.translate(150,150),[-1,1].forEach(i=>{e.save(),e.translate(i*42,0),Rf[n](e,i),t&&(e.strokeStyle="#F6EFE6",e.lineWidth=3.5,[0,1,2].forEach(s=>{e.beginPath(),e.moveTo(i*(8+s*6),-22+s*3),e.quadraticCurveTo(i*(16+s*7),-34+s*2,i*(26+s*6),-36+s*5),e.stroke()})),e.restore()}),t&&(e.fillStyle="#E8667F55",[-1,1].forEach(i=>{e.beginPath(),e.ellipse(i*48,40,26,13,0,0,7),e.fill()}))})}function ty(n,t,e){return Dn("hair_"+n+t,420,500,i=>{if(i.translate(210,170),n==="long"){let s=Te("M-130 -24 Q-136 -146 0 -152 Q136 -146 130 -24 Q150 120 128 250 Q0 276 -128 250 Q-150 120 -130 -24Z");dn(i,s,ri(i,-120,-150,120,250,t,e||t)),i.strokeStyle="#ffffff30",i.lineWidth=7,[[-90,-100,-118,180],[-60,-128,-70,40],[86,-100,112,200],[54,-130,70,60],[10,-146,20,-110]].forEach(([r,o,a,l])=>{i.beginPath(),i.moveTo(r,o),i.quadraticCurveTo(r*1.25,(o+l)/2,a,l),i.stroke()})}if(n==="bun"){let s=new Path2D;s.arc(0,-152,46,0,7),dn(i,s,t);let r=Te("M-126 -24 Q-128 -128 0 -132 Q128 -128 126 -24 Q124 14 114 34 Q90 -40 0 -60 Q-90 -40 -114 34 Q-124 14 -126 -24Z");dn(i,r,t),i.strokeStyle="#ffffff33",i.lineWidth=6,i.beginPath(),i.moveTo(-60,-112),i.quadraticCurveTo(-10,-128,40,-112),i.stroke()}if(n==="afro"){let s=(r,o,a)=>{let l=new Path2D;l.arc(r,o,a,0,7),dn(i,l,t)};[[-118,-20,52],[-104,-82,56],[-58,-130,58],[0,-148,60],[58,-130,58],[104,-82,56],[118,-20,52],[-118,40,44],[118,40,44]].forEach(r=>s(...r)),i.strokeStyle="#ffffff22",i.lineWidth=4,[[-70,-120],[-10,-140],[60,-118],[100,-70],[-100,-66]].forEach(([r,o])=>{i.beginPath(),i.arc(r,o,26,3.6,5.4),i.stroke()})}if(n==="bob"){let s=Te("M-128 -20 Q-132 -146 0 -150 Q132 -146 128 -20 Q130 74 104 104 L-104 104 Q-130 74 -128 -20Z");dn(i,s,ri(i,0,-150,0,100,t,e||t)),i.strokeStyle="#ffffff30",i.lineWidth=6,[[-80,-110,-112,70],[78,-112,110,70],[0,-142,4,-110]].forEach(([r,o,a,l])=>{i.beginPath(),i.moveTo(r,o),i.quadraticCurveTo(r*1.22,(o+l)/2,a,l),i.stroke()})}n==="old"&&[[-1],[1]].forEach(([s])=>{[[118,-30,40],[132,18,44],[112,62,34],[92,-66,30]].forEach(([r,o,a])=>{let l=new Path2D;l.arc(s*r,o,a,0,7),dn(i,l,"#E9E9EF")})})})}var bf=(n,t={})=>new pe({map:n,alphaTest:.5,alphaToCoverage:!0,side:Se,...t}),wf=new Map,Zh=new Map,ey=[];function ny(n){if(Zh.has(n))return Zh.get(n);let t=n.image,e=document.createElement("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d"),s=7;for(let o=0;o<16;o++){let a=o/16*6.283;i.drawImage(t,Math.cos(a)*s,Math.sin(a)*s)}i.globalCompositeOperation="source-in",i.fillStyle="#FFFFFF",i.fillRect(0,0,e.width,e.height);let r=new Wn(e);return r.colorSpace=Ye,r.anisotropy=8,Zh.set(n,r),r}function Pn(n,t,e,i,s,r=0,o,a=!1){let l=new bt(t*In,e*In);l.translate((t/2-i)*In,(s-e/2)*In,0);let c=bf(n);o.push(c);let h=new k(l,c);if(h.position.z=r,h.castShadow=!0,!a){let u=bf(ny(n),{color:"#FFE9C8"});ey.push(u);let f=new k(l,u);f.position.z=-.045-r,h.add(f)}let d=wf.get(n);return d||(d=new ss({depthPacking:wr,map:n,alphaTest:.5,side:Se}),wf.set(n,d)),h.customDepthMaterial=d,h}function iy(){return Dn("blob",128,128,n=>{let t=n.createRadialGradient(64,64,2,64,64,62);t.addColorStop(0,"#000000AA"),t.addColorStop(.55,"#00000055"),t.addColorStop(1,"#00000000"),n.fillStyle=t,n.fillRect(0,0,128,128)})}function sy(){return Dn("halo",256,512,n=>{let t=n.createRadialGradient(128,256,10,128,256,128);t.addColorStop(0,"#FFE6C0"),t.addColorStop(.62,"#FFE6C066"),t.addColorStop(1,"#FFE6C000"),n.save(),n.translate(0,0),n.scale(1,2),n.translate(0,-128),n.fillStyle=t,n.fillRect(0,0,256,512),n.restore()})}function $h(n={}){let t=ZE[n.outfit||"hero"],e=n.outfit||"hero",i=new at,s=[],r=new at;i.add(r);let o=316,a=o+262,l={},c={};for(let[m,p,v]of[["L",-1,-.012],["R",1,-.01]]){let A=new at;A.position.set(p*34*In,o*In,v);let y=new at;y.position.y=-142*In,A.add(Pn(Tf(1),50,160,25,6,0,s)),y.add(Pn(Tf(1),50,160,25,6,0,s));let D=Pn(QE(),80,40,26,6,.001,s);D.position.y=-142*In,p<0&&(D.scale.x=-1),y.add(D),A.add(y),r.add(A),l[m]={th:A,shin:y}}let h=Pn($E(t,e),300,320,150,20,0,s);h.position.y=(a+4)*In,r.add(h);for(let[m,p,v]of[["L",-1,-.006],["R",1,.006]]){let A=new at;A.position.set(p*(t.kind==="dress"?66:84)*In,(a-24)*In,v);let y=new at;y.position.y=-124*In,A.add(Pn(Sf(t,e,"u"),90,170,45,10,0,s)),y.add(Pn(Sf(t,e,"f"),90,170,45,10,.001,s));let D=Pn(JE(),90,100,45,14,.002,s);D.position.y=-128*In,D.scale.set(p>0?-.8:.8,.8,1),y.add(D),A.add(y),r.add(A),c[m]={u:A,f:y,hand:D}}let d=new at;if(d.position.set(0,(a+104)*In,.02),r.add(d),n.hair){let m=Pn(ty(n.hair,n.hairc||"#4a2c1a",n.hairhi),420,500,210,170,-.03,s);d.add(m)}if(d.add(Pn(KE(),300,300,150,150,0,s)),n.hair&&n.hair!=="old"&&n.hair!=="afro"){let m=Pn(Dn("fringe_"+n.hair+(n.hairc||""),300,300,p=>{p.translate(150,150);let v=n.hairc||"#4a2c1a";p.fillStyle=v,p.fill(Te(n.hair==="bun"?"M-122 -18 Q-120 -122 0 -124 Q120 -122 122 -18 Q70 -78 0 -84 Q-70 -78 -122 -18Z":"M-124 12 Q-126 -124 0 -126 Q126 -124 124 12 Q106 -44 44 -66 Q0 -76 -44 -66 Q-106 -44 -124 12Z")),p.strokeStyle="#ffffff2c",p.lineWidth=5,p.beginPath(),p.moveTo(-70,-92),p.quadraticCurveTo(-10,-114,54,-96),p.stroke()}),300,300,150,150,.003,s,!0);d.add(m)}if(n.lash){let m=Pn(Dn("earring",300,300,p=>{p.translate(150,150),[-1,1].forEach(v=>{p.strokeStyle="#F2C94C",p.lineWidth=6,p.beginPath(),p.arc(v*124,58,15,0,7),p.stroke()})}),300,300,150,150,.004,s,!0);m.castShadow=!1,d.add(m)}let u={};for(let m of Object.keys(Rf)){let p=Pn(jE(m,n.lash),300,300,150,150,.002,s,!0);p.castShadow=!1,p.visible=m==="open",d.add(p),u[m]=p}if(n.glasses){let m=Pn(Dn("glasses",300,300,p=>{p.translate(150,150),p.strokeStyle="#E4E6EC",p.lineWidth=7,p.beginPath(),p.arc(-42,0,36,0,7),p.stroke(),p.beginPath(),p.arc(42,0,36,0,7),p.stroke(),p.beginPath(),p.moveTo(-6,0),p.lineTo(6,0),p.stroke()}),300,300,150,150,.004,s,!0);m.castShadow=!1,d.add(m)}if(n.hat){let m=Pn(n.hat(Dn),300,300,150,150,.006,s);d.add(m)}let f=new k(new bt(1,.4),new pe({map:iy(),transparent:!0,depthWrite:!1}));f.rotation.x=-Math.PI/2,f.position.y=.012,i.add(f);let g=null;n.glow&&(g=new k(new bt(2.1,3),new pe({map:sy(),transparent:!0,depthWrite:!1,opacity:n.glow,blending:Rn,side:Se})),g.position.set(0,.95,-.09),r.add(g));let E={root:i,body:r,head:d,arms:c,legs:l,eyes:u,mats:s,torso:h,tint(m){s.forEach(p=>p.color.set(m))},eye(m){for(let p in u)u[p].visible=p===m},cheer(m,p=0,v=1){let A=m*6+p,y=Math.sin(A);E.pose({armL:[150+y*16*v,18+y*10],armR:[150-y*16*v,18-y*10],bob:Math.abs(Math.sin(A*.5))*.07*v,head:y*3,legL:[2,0],legR:[2,0]})},opacity(m){s.forEach(p=>{p.transparent=m<1,p.opacity=m,p.alphaTest=m<1?.02:.5,p.alphaToCoverage=m>=1,p.depthWrite=m>=1}),f.material.opacity=m,g&&(g.material.opacity=(n.glow||0)*m)},pose(m={}){let p=Math.PI/180,v=m.armL||[6,4],A=m.armR||[6,4],y=m.legL||[0,0],D=m.legR||[0,0];c.L.u.rotation.z=-v[0]*p,c.L.f.rotation.z=-v[1]*p,c.R.u.rotation.z=A[0]*p,c.R.f.rotation.z=A[1]*p,l.L.th.rotation.z=-y[0]*p,l.L.shin.rotation.z=-y[1]*p,l.R.th.rotation.z=D[0]*p,l.R.shin.rotation.z=D[1]*p,d.rotation.z=(m.head||0)*p,r.rotation.z=(m.lean||0)*p,r.position.y=m.bob||0;let C=m.squash||0;r.scale.set(1-C*.5,1+C,1)},walk(m,p=1,v=1){let A=m*6.4*p,y=Math.sin(A),D=Math.cos(A);E.pose({legL:[y*15*v,Math.max(0,-y)*26*v],legR:[-y*15*v,Math.max(0,y)*26*v],armL:[8-y*12*v,6],armR:[8+y*12*v,6],bob:Math.abs(D)*.03*v,head:y*2})},place(m,p,v=0,A=1){i.position.set(m,v,p),i.scale.setScalar(A)},face(m){let p=m.position;i.rotation.y=Math.atan2(p.x-i.position.x,p.z-i.position.z),f.rotation.z=-i.rotation.y}};return E.pose(),E}function It(n,t,e){let i=document.createElement("canvas");i.width=n,i.height=t;let s=i.getContext("2d");e(s,n,t);let r=new Wn(i);return r.colorSpace=Ye,r.anisotropy=8,r}var Is=(n,t={})=>new Ft({color:n,roughness:.88,metalness:0,...t});function R(n,t,e,i,s=0,r=0,o=0,a=!0){let l=new k(new Cn(n,t,e),typeof i=="string"?Is(i):i);return l.position.set(s,r,o),l.castShadow=a,l.receiveShadow=!0,l}function Yt(n,t,e=1){let i=It(128,128,r=>{let o=r.createRadialGradient(64,64,0,64,64,64);o.addColorStop(0,"#fff"),o.addColorStop(.25,"#ffffff66"),o.addColorStop(1,"#ffffff00"),r.fillStyle=o,r.fillRect(0,0,128,128)}),s=new so(new vr({map:i,color:n,transparent:!0,depthWrite:!1,opacity:e,blending:Rn}));return s.scale.set(t,t,1),s}var xf=["#8C4A3C","#6E4152","#4F5A70","#9A6A48","#59685E","#7B3B3B"];function ry(n,t,e,i,s,r=.42){let o=Nt(n),a=256*t,l=300*e,c,h=It(a,l,u=>{u.fillStyle=i,u.fillRect(0,0,a,l);for(let f=0;f<l;f+=12)for(let g=f/12%2*-14;g<a;g+=30)u.fillStyle=`rgba(${o()<.5?"255,235,215":"20,8,8"},${.03+o()*.07})`,u.fillRect(g,f,28,10);for(let f=0;f<e;f++)u.fillStyle="rgba(255,240,220,.14)",u.fillRect(0,f*300+292,a,8)}),d=It(a,l,u=>{u.fillStyle="#000",u.fillRect(0,0,a,l);let f=h.image.getContext("2d");for(let g=0;g<e;g++)for(let E=0;E<t;E++){let m=E*256+56,p=g*300+60,v=144,A=196,y=o()<r,D=o();if(f.fillStyle="#E8E0CE",f.fillRect(m-9,p-9,v+18,A+18),f.fillStyle="rgba(0,0,0,.35)",f.fillRect(m-18,p+A+9,v+36,12),f.fillStyle="rgba(245,235,215,.8)",f.fillRect(m-18,p+A+6,v+36,8),f.fillStyle=s?y?"#F7C97F":"#1C2238":o()<.5?"#7E93A8":"#94A9B6",f.fillRect(m,p,v,A),y||!s){let C=y?D<.5?"#D69A6A":"#E7AC8C":"#D9D2BE";f.fillStyle=C,f.fillRect(m,p,26,A),f.fillRect(m+v-26,p,26,A)}s||(f.fillStyle="#ffffff30",f.beginPath(),f.moveTo(m+20,p+A),f.lineTo(m+90,p),f.lineTo(m+124,p),f.lineTo(m+54,p+A),f.fill()),f.fillStyle="#E8E0CE",f.fillRect(m+v/2-3,p,6,A),f.fillRect(m,p+A*.45,v,6),y&&s&&(u.fillStyle=D<.5?"#FFC47A":"#FFD79C",u.fillRect(m,p,v,A),u.fillStyle="#000",u.fillRect(m+v/2-3,p,6,A),u.fillRect(m,p+A*.45,v,6))}h.needsUpdate=!0});return d.colorSpace=Ye,{map:h,emissiveMap:d}}function os(n,t){let{x:e,z:i,w:s,d:r,floors:o=5,side:a=1,night:l=!0,col:c,shop:h}=t,d=Nt(n),u=new at,f=o*2.9+3.6,g=c||xf[Math.floor(d()*xf.length)],E=Math.max(2,Math.round(r/2.1)),m=ry(n,E,o,g,l,t.lit??.42),p=new Ft({map:m.map,emissiveMap:m.emissiveMap,emissive:new ht(l?.62:0,l?.56:0,l?.48:0),roughness:.95}),v=Is(g),A=[a>0?p:v,a>0?v:p,Is("#2c2730"),v,v,v],y=new k(new Cn(s,o*2.9,r),A);y.position.set(e,3.6+o*1.45,i),y.castShadow=y.receiveShadow=!0,u.add(y),u.add(R(s+.5,.5,r+.5,"#3d3540",e,f+.25,i)),u.add(R(s+.3,.35,r+.3,g,e,3.6,i));let D=e+a*(s/2+.01);if(h){let C=It(1024,180,I=>{I.fillStyle=h.bg,I.fillRect(0,0,1024,180),I.fillStyle="#ffffff22",I.fillRect(0,0,1024,8),I.font=`900 ${h.size||104}px ${h.font||"Fraunces"}`,I.textAlign="center",I.textBaseline="middle",I.fillStyle=h.fg||"#FFF4DC",I.shadowColor=h.fg||"#FFF4DC",I.shadowBlur=l?26:0,I.fillText(h.name,512,96)}),b=new k(new Cn(.18,1.05,r-.3),[new Ft({map:C,emissiveMap:C,emissive:new ht(l?.85:0,l?.85:0,l?.85:0)}),new Ft({map:C,emissiveMap:C,emissive:new ht(l?.85:0,l?.85:0,l?.85:0)}),Is("#222"),Is("#222"),Is("#222"),Is("#222")]);b.position.set(D+a*.1,3.25,i),a>0&&(b.scale.z=-1),b.castShadow=!0,u.add(b);let F=It(512,256,I=>{let O=I.createLinearGradient(0,0,0,256);O.addColorStop(0,h.win||"#F4C783"),O.addColorStop(1,"#D59A5C"),I.fillStyle=O,I.fillRect(0,0,512,256);let z=Nt(n+9);for(let X=0;X<26;X++)I.fillStyle=["#C64236","#36AEA2","#EABA42","#D2728A","#4A86C7","#F6EFE6"][Math.floor(z()*6)],I.fillRect(z()*490,30+Math.floor(z()*3)*76,12+z()*26,52);for(let X of[84,160,236])I.fillStyle="#6b4530",I.fillRect(0,X,512,7)}),S=new Ft({map:F,emissiveMap:F,emissive:new ht(l?.62:.1,l?.62:.1,l?.62:.1),roughness:.25});u.add(R(.3,2.8,r-.1,"#3a2a24",D-a*.1,1.4,i));let _=new k(new bt(r-.9,2.1),S);_.rotation.y=a*Math.PI/2,_.position.set(D+a*.07,1.5,i),u.add(_);for(let I=-1;I<=1;I++)u.add(R(.08,2.3,.09,"#2a1d18",D+a*.1,1.5,i+I*(r-.9)/2));if(h.awning){let I=It(512,128,z=>{for(let X=0;X<12;X++)z.fillStyle=X%2?h.awning:"#F4EEDF",z.fillRect(X*512/12,0,42.666666666666664,128)}),O=new k(new bt(r-.3,1.3),new Ft({map:I,side:Se,roughness:.9}));O.rotation.y=a*Math.PI/2,O.rotation.order="YXZ",O.rotation.x=-1,O.position.set(D+a*.55,2.56,i),O.castShadow=!0,u.add(O)}if(l){let I=new Qt(h.light||"#FFC88A",3.2,7,1.8);I.position.set(D+a*1.7,2.1,i),u.add(I)}}return u}function Cf(n,t,e){let i=new k(new bt(n,t),e);return i.rotation.x=-Math.PI/2,i.receiveShadow=!0,i}function oy(n="#A99D90"){let t=It(512,512,e=>{e.fillStyle=n,e.fillRect(0,0,512,512);let i=Nt(4);for(let s=0;s<2400;s++)e.fillStyle=`rgba(${i()<.5?"255,255,255":"0,0,0"},.035)`,e.fillRect(i()*512,i()*512,2,2);e.strokeStyle="rgba(30,20,20,.42)",e.lineWidth=4,e.strokeRect(0,0,512,512)});return t.wrapS=t.wrapT=fn,t}function ja(n,t){let e=It(1024,1024,s=>{s.fillStyle=t?"#1E1E26":"#4b4a52",s.fillRect(0,0,1024,1024);let r=Nt(5);for(let o=0;o<7e3;o++)s.fillStyle=`rgba(255,255,255,${r()*.05})`,s.fillRect(r()*1024,r()*1024,2,2);s.fillStyle="#D9D2BD";for(let o=40;o<1024;o+=256)s.fillRect(504,o,14,130)});e.wrapS=e.wrapT=fn,e.repeat.set(1,12);let i=Cf(9,240,new Ft({map:e,roughness:.78,metalness:.05}));i.position.set(0,0,-100),n.add(i);for(let s of[-1,1]){let r=oy(t?"#8E8378":"#B8AC9D");r.repeat.set(2,100);let o=Cf(4.4,240,new Ft({map:r,roughness:.92}));o.position.set(s*6.7,.14,-100),n.add(o),n.add(R(.22,.16,240,t?"#B8AFA2":"#D0C6B6",s*4.55,.07,-100,!1))}}function tl(n,t,e,i,s=!0,r=5.5){let o=new at;o.add(R(.09,3.7,.09,"#15151b",t,1.85,e)),o.add(R(.26,.3,.26,"#15151b",t,.15,e));let a=R(.26,.4,.26,new Ft({color:"#FFE2AC",emissive:"#FFD089",emissiveIntensity:s?2.2:0}),t,3.85,e,!1);if(o.add(a),o.add(R(.34,.06,.34,"#15151b",t,4.08,e,!1)),s){let l=Yt("#FFB870",1.8,.4);l.position.set(t,3.85,e),o.add(l);let c=new Qt("#FFC688",r,11,1.6);c.position.set(t,3.5,e),o.add(c)}return n.add(o),o}var Ff={};function Ke(n,t,e,i=1,s=["#2E4F2C","#3B6636","#55813F","#A9B65A"],r=1){let o=new at;o.add(R(.18*i,2.6*i,.18*i,"#2b1e18",t,1.3*i,e));let a=s.join()+r%3,l=Ff[a]||(Ff[a]=It(512,512,c=>{let h=Nt(r%3+3),d=(u,f,g,E)=>{c.fillStyle=E,c.beginPath();for(let m=0;m<=26;m++){let p=m/26*6.283,v=g*(.86+.14*Math.sin(p*5+u)+h()*.05);c.lineTo(u+Math.cos(p)*v,f+Math.sin(p)*v)}c.fill()};for(let[u,f,g]of[[256,170,130],[150,240,118],[362,240,118],[256,300,128],[188,150,92],[324,150,92]])d(u,f,g,s[0]);for(let[u,f,g]of[[256,150,92],[160,226,80],[350,226,80],[256,270,92]])d(u,f,g,s[1]);for(let[u,f,g]of[[226,122,52],[320,196,46],[160,200,40],[262,240,46]])d(u,f,g,s[2]);c.fillStyle=s[3];for(let u=0;u<70;u++){let f=90+h()*330,g=70+h()*300;c.save(),c.translate(f,g),c.rotate(h()*3),c.beginPath(),c.ellipse(0,0,8,3.6,0,0,7),c.fill(),c.restore()}}));for(let c=0;c<3;c++){let h=new k(new bt(3.6*i,3.6*i),new Ft({map:l,alphaTest:.5,side:Se,roughness:1}));h.position.set(t,3.5*i,e),h.rotation.y=c*1.05+r,h.castShadow=!0,h.customDepthMaterial=new ss({depthPacking:wr,map:l,alphaTest:.5,side:Se}),o.add(h)}return n.add(o),o}function oi(n,t,e,i,s,r,o=3,a=0){let l=It(1600,900,h=>{h.clearRect(0,0,1600,900);let d=Nt(o);for(let u=0;u<3;u++)for(let f=-40;f<1620;){let g=50+d()*110,E=180+d()*(u===0?660:400);if(h.fillStyle=s[u],h.fillRect(f,900-E,g,E),d()<.2&&h.fillRect(f+g/2-4,900-E-60,8,60),r)for(let m=900-E+12;m<890;m+=18)for(let p=f+8;p<f+g-8;p+=14)d()<.34&&(h.fillStyle=u===2?"#FFD999":u===1?"#E9C28C":"#A98BA0",h.fillRect(p,m,7,10));f+=g*.92}}),c=new k(new bt(e,i),new pe({map:l,transparent:!0,fog:!1,depthWrite:!1}));return c.position.set(0,a+i/2,t),n.add(c),c}function ye(n,t,e,i,s){let r=It(8,512,a=>{let l=a.createLinearGradient(0,0,0,512);s.forEach(([c,h])=>l.addColorStop(c,h)),a.fillStyle=l,a.fillRect(0,0,8,512)}),o=new k(new bt(e,i),new pe({map:r,fog:!1,depthWrite:!1}));return o.position.set(0,i*.32,t),n.add(o),o}var w=(n,t={})=>new Ft({color:n,roughness:.85,...t});function Dt(n,t,e,i={}){let s=new k(new bt(t,e),new pe({map:n,alphaTest:i.blend?0:.5,transparent:!!i.blend,depthWrite:!i.blend,side:Se,color:i.color||"#fff",blending:i.add?Rn:ts,fog:i.fog??!0}));return i.shadow&&(s.castShadow=!0,s.customDepthMaterial=new ss({depthPacking:wr,map:n,alphaTest:.5,side:Se})),s}function el(n,t){n.rotation.y=Math.atan2(t.position.x-n.position.x,t.position.z-n.position.z)}var Jh={value:0};function nl(n="#8E3D30",t=4,e=3){let i=It(1024,1024,s=>{s.fillStyle="#4b2a24",s.fillRect(0,0,1024,1024);let r=Nt(7);for(let o=0,a=0;a<1024;a+=34,o++)for(let l=o%2*-44;l<1024;l+=88){let c=r();s.fillStyle=n,s.globalAlpha=.78+c*.22,s.fillRect(l+2,a+2,84,30),s.globalAlpha=1,s.fillStyle=`rgba(255,${200+c*40},${180+c*30},${c*.1})`,s.fillRect(l+2,a+2,84,6),c>.84&&(s.fillStyle="rgba(30,8,4,.2)",s.fillRect(l+2,a+2,84,30))}});return i.wrapS=i.wrapT=fn,i.repeat.set(t,e),i}function Pf(n="#A59383",t=12,e=12){let i=It(1024,1024,s=>{s.fillStyle="#5e5248",s.fillRect(0,0,1024,1024);let r=Nt(3);for(let o=0;o<16;o++)for(let a=-1;a<17;a++){let l=r();s.fillStyle=n,s.globalAlpha=.7+l*.3,s.beginPath(),s.roundRect(a*64+o%2*32+3,o*64+3,58,58,12),s.fill(),s.globalAlpha=1}});return i.wrapS=i.wrapT=fn,i.repeat.set(t,e),i}var If=[["#36AEA2","#1F7C72","#1A1A22",null],["#F08AA0","#C75C78","#3a2418","long"],["#F7CC58","#D39E2C","#2a1b18","afro"],["#6F97C4","#4C729F","#D9B65A","bob"],["#F2A766","#CC7E3C","#1d1412","bun"],["#A98AD0","#7E5FA8","#6b3d20","long"],["#8EAE86","#688A60","#111",null],["#E9E5DA","#C8C3B5","#8a4a26","bob"]];function ay(n,t){let[e,i,s,r]=If[n];return It(192,384,o=>{o.translate(96,0),o.lineCap="round",o.strokeStyle="#17161e",o.lineWidth=11,o.beginPath(),o.moveTo(-20,270),o.lineTo(-22,378),o.moveTo(20,270),o.lineTo(22,378),o.stroke(),o.strokeStyle=e,o.lineWidth=22,o.beginPath(),t?(o.moveTo(-44,148),o.lineTo(-72,58),o.moveTo(44,148),o.lineTo(72,58)):(o.moveTo(-46,148),o.lineTo(-64,240),o.moveTo(46,148),o.lineTo(64,240)),o.stroke(),o.fillStyle=e,o.beginPath(),o.roundRect(-52,128,104,150,24),o.fill(),o.fillStyle=i,o.fillRect(-52,250,104,26),o.fillStyle="#1C1C25",o.beginPath(),t?(o.arc(-74,50,13,0,7),o.arc(74,50,13,0,7)):(o.arc(-66,246,12,0,7),o.arc(66,246,12,0,7)),o.fill(),(r==="long"||r==="bob")&&(o.fillStyle=s,o.beginPath(),o.roundRect(-64,22,128,r==="long"?160:110,54),o.fill()),r==="afro"&&(o.fillStyle=s,[[-52,58],[-36,28],[0,18],[36,28],[52,58]].forEach(([l,c])=>{o.beginPath(),o.arc(l,c,34,0,7),o.fill()})),r==="bun"&&(o.fillStyle=s,o.beginPath(),o.arc(0,14,22,0,7),o.fill());let a=o.createRadialGradient(4,56,2,0,76,58);a.addColorStop(0,"#2A2C40"),a.addColorStop(1,"#0A0A12"),o.fillStyle=a,o.beginPath(),o.arc(0,76,54,0,7),o.fill(),o.fillStyle="#F6EFE6",o.beginPath(),o.ellipse(-20,76,8,12,0,0,7),o.ellipse(20,76,8,12,0,0,7),o.fill(),r&&(o.fillStyle=s,o.beginPath(),o.moveTo(-54,70),o.quadraticCurveTo(-52,22,0,22),o.quadraticCurveTo(52,22,54,70),o.quadraticCurveTo(26,40,0,40),o.quadraticCurveTo(-26,40,-54,70),o.fill())})}function Qh(n,t,e={}){let{h:i=1.75,jump:s=.1,tint:r="#ffffff",seed:o=2}=e,a=Nt(o),l={};for(let c of t){let h=Math.floor(a()*If.length)+(a()<(e.raised??.5)?100:0);(l[h]=l[h]||[]).push(c)}for(let c in l){let h=c>=100,d=c%100,u=ay(d,h),f=new pe({map:u,alphaTest:.5,side:Se,color:r});f.onBeforeCompile=m=>{m.uniforms.uT=Jh,m.vertexShader=`uniform float uT;
`+m.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
 vec4 ip = instanceMatrix * vec4(0.,0.,0.,1.); float ph = ip.x*3.1 + ip.z*2.3; transformed.y += abs(sin(uT*${(5+d%3).toFixed(1)} + ph))*${s.toFixed(3)}/${i.toFixed(2)};`)};let g=new Pa(new bt(i*.5,i),f,l[c].length),E=new Ze;l[c].forEach((m,p)=>{E.position.set(m[0],(m[2]||0)+i/2,m[1]),E.rotation.y=m[3]||0;let v=.92+a()*.16;E.scale.set(v,v,1),E.updateMatrix(),g.setMatrixAt(p,E.matrix)}),g.frustumCulled=!1,n.add(g)}}function Sn(n,t=2600,e=300,i=1){let s=Nt(i),r=new Float32Array(t*3),o=new Float32Array(t*3);for(let d=0;d<t;d++){let u=s()*2-1,f=s()*6.283,g=Math.sqrt(1-u*u);r[d*3]=g*Math.cos(f)*e,r[d*3+1]=u*e,r[d*3+2]=g*Math.sin(f)*e;let E=.55+s()*.45,m=s();o[d*3]=E*(m>.8?1:.9),o[d*3+1]=E*.94,o[d*3+2]=E*(m<.2?.8:1)}let a=new $e;a.setAttribute("position",new nn(r,3)),a.setAttribute("color",new nn(o,3));let l=It(32,32,d=>{let u=d.createRadialGradient(16,16,0,16,16,16);u.addColorStop(0,"#fff"),u.addColorStop(.35,"#ffffffaa"),u.addColorStop(1,"#ffffff00"),d.fillStyle=u,d.fillRect(0,0,32,32)}),c=new _r({map:l,size:3.2,vertexColors:!0,transparent:!0,depthWrite:!1,sizeAttenuation:!1,fog:!1}),h=new oo(a,c);return h.frustumCulled=!1,n.add(h),h}function ai(n,t,e="#6D4A33"){let i=It(1024,1024,r=>{r.fillStyle=e,r.fillRect(0,0,1024,1024);let o=Nt(8);for(let a=0;a<11;a++){let l=a*94;r.fillStyle=`rgba(${o()<.5?"255,220,180":"20,10,5"},${o()*.13})`,r.fillRect(l,0,94,1024),r.fillStyle="#21140D",r.fillRect(l,0,4,1024);let c=o()*300;for(;c<1024;)r.fillRect(l,c,94,3),c+=340+o()*300}});i.wrapS=i.wrapT=fn,i.repeat.set(n/5,t/5);let s=new k(new bt(n,t),new Ft({map:i,roughness:.55}));return s.rotation.x=-Math.PI/2,s.receiveShadow=!0,s}function Ai(n,t,e="#D6D3C9",i="#C8C5BA",s=8){let r=It(256,256,a=>{a.fillStyle=e,a.fillRect(0,0,256,256),a.fillStyle=i,a.fillRect(0,0,128,128),a.fillRect(128,128,128,128)});r.wrapS=r.wrapT=fn,r.repeat.set(n/s*4,t/s*4);let o=new k(new bt(n,t),new Ft({map:r,roughness:.3,metalness:.05}));return o.rotation.x=-Math.PI/2,o.receiveShadow=!0,o}function Ds(n,t,e="#FFD9A0",i=.22){let s=It(64,256,o=>{let a=o.createLinearGradient(0,0,0,256);a.addColorStop(0,e+"FF"),a.addColorStop(1,e+"00"),o.fillStyle=a,o.fillRect(0,0,64,256);let l=o.createLinearGradient(0,0,64,0);l.addColorStop(0,"#000000"),l.addColorStop(.25,"#00000000"),l.addColorStop(.75,"#00000000"),l.addColorStop(1,"#000000"),o.globalCompositeOperation="destination-out",o.fillStyle=l,o.fillRect(0,0,64,256)});return new k(new bt(n,t),new pe({map:s,transparent:!0,opacity:i,depthWrite:!1,blending:Rn,side:Se,fog:!1}))}function Kh(n,t,e,i=1,s="#C76B4A",r="#3E8A52"){let o=new at,a=new k(new jt(.3,.22,.5,20),w(s));a.position.y=.25,a.castShadow=!0,o.add(a);let l=It(256,256,h=>{h.clearRect(0,0,256,256);for(let d=0;d<9;d++)h.save(),h.translate(128,250),h.rotate((d-4)*.3),h.fillStyle=d%2?r:"#5BA868",h.beginPath(),h.ellipse(0,-110,20,110,0,0,7),h.fill(),h.restore()}),c=Dt(l,1.5,1.5,{shadow:!0});return c.position.y=1.15,o.add(c),o.leaf=c,o.position.set(n,t,e),o.scale.setScalar(i),o}function jh(n,t,e,i="#2A1E18"){let s=new at;s.add(R(n+.08,t+.08,.04,i,0,0,0));let r=It(Math.round(n*400),Math.round(t*400),e),o=new k(new bt(n,t),new Ft({map:r,roughness:.8}));return o.position.z=.025,s.add(o),s}function Xe(n,t,e,i=1.2){return new k(new bt(n,t),new Ft({color:"#000",emissive:e,emissiveIntensity:i}))}function re(n,t,e,i=10,s=60){let r=new si(n,t);return r.position.set(...e),r.castShadow=!0,r.shadow.mapSize.set(1024,1024),Object.assign(r.shadow.camera,{left:-i,right:i,top:i,bottom:-i,far:s}),r.shadow.bias=-6e-4,r.shadow.radius=4,r}function mo(n,t={}){let{wall:e="#9A4632",night:i=!1,floor:s="#7A5236",win:r=!0}=t;n.fog=new wt(i?"#2A1E2E":"#E9B48C",i?.02:.008),r&&(ye(n,-60,220,120,i?[[0,"#0E1030"],[.6,"#2A2252"],[1,"#6B3A62"]]:[[0,"#7FA6D8"],[.55,"#F2C4A0"],[1,"#FFD9A8"]]),oi(n,-50,220,30,i?["#2F2748","#3B2F54","#4A3A5E"]:["#C48A86","#B07A80","#9C6E7A"],i,4));let o=nl(e,2,2),a=()=>new Ft({map:o,roughness:.95});if(r){[[-5.4,2.6,7,5.2],[5.4,2.6,7,5.2],[0,.5,3.8,1],[0,4.7,3.8,.8]].forEach(([f,g,E,m])=>n.add(R(E,m,.3,a(),f,g,-3)));for(let[f,g,E,m]of[[-1.9,2.6,.12,3.4],[1.9,2.6,.12,3.4],[0,2.6,.07,3.3],[0,4.3,3.9,.12],[0,1.05,4,.16]])n.add(R(E,m,.2,"#EDE7DA",f,g,-2.95))}else n.add(R(18,5.2,.3,a(),0,2.6,-3));n.add(ai(18,12,s));let l=jh(.9,1.2,f=>{f.fillStyle="#F2E6CC",f.fillRect(0,0,360,480),f.fillStyle="#E8667F",f.beginPath(),f.arc(180,200,110,0,7),f.fill(),f.fillStyle="#36AEA2",f.fillRect(0,330,360,150)});l.position.set(-3.6,2.8,-2.83),n.add(l),n.add(Kh(4.4,0,-2.4,1.1)),n.add(Kh(-5,0,-2.4,.9,"#36AEA2")),n.add(new Mt(i?"#6E74C0":"#B9C8F0","#6A4430",i?.7:.9));let c=re(i?"#9FB0FF":"#FFD6A0",i?.9:2.4,[3,7,-10],9,40);c.target.position.set(-1,0,0),n.add(c,c.target);let h=new Qt("#FFB56E",i?10:4,8,1.6);h.position.set(3.4,2.2,-1.2),n.add(h);let d=new k(new jt(.18,.3,.34,24),new Ft({color:"#F6DDA4",emissive:"#FFB866",emissiveIntensity:1.2}));d.position.set(3.6,1.9,-1.9),n.add(d),n.add(R(.04,1.7,.04,"#222",3.6,.85,-1.9));let u=Yt("#FFC07A",1.2,.35);u.position.copy(d.position),n.add(u)}var Df=[{name:"PANADER\xCDA",bg:"#6C4A2C",fg:"#FFE7B8",awning:"#3E7A5C"},{name:"FARMACIA",bg:"#2F6E5A",fg:"#F0FFF4"},{name:"LUNA CAF\xC9",bg:"#A85A36",fg:"#FFE3C8",awning:"#D94F58",font:"Caveat",size:120},{name:"LIBROS",bg:"#3A4F7A",fg:"#FFF0C8"},{name:"FLORES",bg:"#B04463",fg:"#FFF2E2",awning:"#EFEDE0"}];function go(n,t={}){let{night:e=!1,seed:i=0,lit:s=.25,dusk:r=!1}=t;n.fog=new wt(e?"#2A2240":r?"#C88A7A":"#F7CFA4",e?.012:.009),ye(n,-170,500,240,e?[[0,"#0E1030"],[.5,"#2A2252"],[.8,"#5B3460"],[1,"#8A4A6A"]]:r?[[0,"#3A3A78"],[.5,"#B86A88"],[.8,"#F29A6A"],[1,"#FFC88A"]]:[[0,"#6FA7D8"],[.5,"#CFD8DC"],[.8,"#FBD7A6"],[1,"#FFE7BE"]]),oi(n,-150,420,90,e?["#2F2748","#3B2F54","#4A3A5E"]:["#B89AA0","#A98E9A","#9A8592"],e||r,21),ja(n,e||r);let o=6,a=0;for(;o>-90;){let l=7+a*37%5;n.add(os(100+a+i,{x:13,z:o-l/2,w:8,d:l,floors:4+a%3,side:-1,night:e||r,lit:s,shop:Df[(a+i)%5]})),n.add(os(200+a+i,{x:-13,z:o-l/2,w:8,d:l,floors:5+a%3,side:1,night:e||r,lit:s,shop:Df[(a+2+i)%5]})),o-=l,a++}for(let l=0;l<6;l++)Ke(n,5.2,-6-l*11,1.2,["#3E5F3A","#4F7A44","#6E9A50","#D7D282"],l),tl(n,-5,-3-l*12,1,e||r);n.add(new Mt(e?"#8E86C8":"#E9EEFF","#6A5A4A",e?.8:1.05)),n.add(re(e?"#B9B0F0":r?"#FFB080":"#FFD29A",e?1:2.8,[-20,16,10],30,90))}var nt=(n,t,e,i,s,r,o=0)=>{n.fillStyle=r,n.beginPath(),n.ellipse(t,e,i,s,o,0,7),n.fill()},ue=(n,t,e,i,s,r,o)=>{n.fillStyle=o,n.beginPath(),n.roundRect(t,e,i,s,r),n.fill()},be=(n,t,e)=>{n.fillStyle=e,n.beginPath(),n.moveTo(...t[0]);for(let i of t.slice(1))n.lineTo(...i);n.closePath(),n.fill()},Pr={perro:[520,440,n=>{nt(n,250,300,150,90,"#C98E5E"),nt(n,250,330,100,50,"#E9C49A"),ue(n,120,330,34,100,14,"#B5784A"),ue(n,340,330,34,100,14,"#B5784A"),ue(n,180,340,34,90,14,"#C98E5E"),ue(n,300,340,34,90,14,"#C98E5E"),n.strokeStyle="#B5784A",n.lineWidth=22,n.lineCap="round",n.beginPath(),n.moveTo(390,260),n.quadraticCurveTo(470,200,450,150),n.stroke(),nt(n,180,170,110,100,"#C98E5E"),nt(n,100,140,40,80,"#8A5A34",-.3),nt(n,262,140,40,80,"#8A5A34",.3),nt(n,180,220,54,40,"#E9C49A"),nt(n,180,200,22,16,"#1A1A24")},[.3,.34],22,1],viejo:[520,440,n=>{nt(n,250,300,150,90,"#C9A07E"),nt(n,250,330,100,50,"#EEDCC4"),ue(n,120,330,34,100,14,"#B5906A"),ue(n,340,330,34,100,14,"#B5906A"),ue(n,180,340,34,90,14,"#C9A07E"),ue(n,300,340,34,90,14,"#C9A07E"),nt(n,180,170,110,100,"#C9A07E"),nt(n,100,140,40,80,"#9A7A5A",-.3),nt(n,262,140,40,80,"#9A7A5A",.3),nt(n,180,220,60,46,"#F4F0E8"),nt(n,180,200,22,16,"#1A1A24")},[.3,.34],22,1],gato:[420,440,n=>{nt(n,220,320,110,90,"#E9853A"),n.strokeStyle="#E9853A",n.lineWidth=24,n.lineCap="round",n.beginPath(),n.moveTo(320,340),n.quadraticCurveTo(400,280,370,180),n.stroke(),nt(n,180,170,100,92,"#E9853A"),be(n,[[96,120],[110,30],[160,100]],"#E9853A"),be(n,[[264,120],[250,30],[200,100]],"#E9853A"),n.strokeStyle="#C96A22",n.lineWidth=9;for(let t=0;t<3;t++)n.beginPath(),n.moveTo(150+t*30,90),n.lineTo(160+t*30,120),n.stroke();nt(n,180,215,16,11,"#E8667F"),n.strokeStyle="#FFFFFF",n.lineWidth=4;for(let t of[-1,1])for(let e=0;e<3;e++)n.beginPath(),n.moveTo(180+t*30,220+e*8),n.lineTo(180+t*110,205+e*18),n.stroke()},[.43,.34],20,.8],loro:[300,440,n=>{nt(n,150,260,80,130,"#3FA34D"),nt(n,150,140,80,80,"#3FA34D"),be(n,[[150,380],[110,440],[190,440]],"#2F6E9A"),nt(n,150,300,56,70,"#F2C14E"),be(n,[[200,150],[250,180],[205,200]],"#2A2A34"),nt(n,120,90,26,18,"#C9361F")},[.48,.3],18,.5],paloma:[360,300,n=>{nt(n,170,190,130,80,"#8D94A8"),nt(n,90,110,56,52,"#7A8296"),nt(n,120,150,40,26,"#5FA898",.3),be(n,[[40,110],[0,122],[40,128]],"#E9853A"),n.strokeStyle="#E9853A",n.lineWidth=8,n.beginPath(),n.moveTo(160,260),n.lineTo(150,296),n.moveTo(200,260),n.lineTo(210,296),n.stroke(),nt(n,280,170,70,30,"#6A7084",-.3)},[.25,.34],14,.5],mosquito:[300,240,n=>{nt(n,150,130,70,22,"#3A3040"),nt(n,90,120,34,30,"#3A3040"),n.strokeStyle="#3A3040",n.lineWidth=5,n.beginPath(),n.moveTo(60,120),n.lineTo(0,130),n.stroke();for(let t=0;t<3;t++)n.beginPath(),n.moveTo(130+t*30,145),n.lineTo(110+t*34,230),n.stroke();nt(n,150,70,60,26,"rgba(220,240,255,.8)",-.4),nt(n,190,76,50,22,"rgba(220,240,255,.7)",.3)},[.28,.48],12,.25],pradera:[300,380,n=>{nt(n,150,260,90,120,"#C9A06A"),nt(n,150,290,56,80,"#EBD3A8"),nt(n,150,120,74,70,"#C9A06A"),nt(n,100,70,18,14,"#A87A44"),nt(n,200,70,18,14,"#A87A44"),nt(n,150,156,14,10,"#1A1A24"),ue(n,92,200,26,70,12,"#A87A44"),ue(n,182,200,26,70,12,"#A87A44")},[.5,.28],14,.45],abeja:[300,240,n=>{nt(n,160,140,100,64,"#F2C14E"),n.fillStyle="#1A1A24";for(let t=0;t<3;t++)n.fillRect(120+t*40,80,20,120);nt(n,64,130,46,44,"#1A1A24"),nt(n,140,60,60,34,"rgba(230,246,255,.85)",-.4),nt(n,200,64,54,30,"rgba(230,246,255,.8)",.3),be(n,[[258,140],[296,134],[258,150]],"#1A1A24")},[.2,.5],13,.35],delfin:[600,300,n=>{nt(n,300,160,250,80,"#6F9FC4"),nt(n,300,200,200,40,"#D8E8F4"),be(n,[[60,150],[0,168],[62,178]],"#6F9FC4"),be(n,[[300,90],[360,20],[370,100]],"#5A88AC"),be(n,[[530,150],[600,90],[590,160],[600,230],[530,175]],"#5A88AC"),be(n,[[260,220],[230,290],[300,230]],"#5A88AC")},[.2,.45],16,2],elefante:[600,520,n=>{nt(n,320,280,220,150,"#9A9AA8");for(let t of[170,240,390,460])ue(n,t,360,70,160,20,"#8A8A98");nt(n,170,200,120,110,"#9A9AA8"),nt(n,270,190,100,130,"#8A8A9A",.2),n.strokeStyle="#9A9AA8",n.lineWidth=46,n.lineCap="round",n.beginPath(),n.moveTo(110,260),n.quadraticCurveTo(60,380,110,460),n.stroke(),be(n,[[130,280],[110,330],[150,300]],"#F4F0E4")},[.24,.34],20,3],cachalote:[900,320,n=>{ue(n,20,60,560,220,110,"#4A5A6E"),nt(n,600,180,220,90,"#4A5A6E"),be(n,[[780,170],[900,90],[870,180],[900,270],[780,200]],"#3E4C60"),ue(n,80,250,380,20,10,"#6A7A8E")},[.12,.45],20,8],pollo:[320,360,n=>{nt(n,170,230,120,100,"#FBF7EC"),nt(n,120,120,66,64,"#FBF7EC"),be(n,[[100,50],[120,20],[140,52],[160,24],[170,62]],"#E2483A"),be(n,[[60,120],[20,132],[60,144]],"#F2C14E"),nt(n,74,160,12,20,"#E2483A"),n.strokeStyle="#F2C14E",n.lineWidth=9,n.beginPath(),n.moveTo(150,320),n.lineTo(140,360),n.moveTo(200,320),n.lineTo(210,360),n.stroke(),nt(n,270,200,40,70,"#EDE6D4",.4)},[.36,.32],14,.5],vaca:[620,460,n=>{nt(n,340,220,230,130,"#FBF7EC");for(let[t,e,i]of[[300,180,50],[420,250,40],[240,260,34]])nt(n,t,e,i,i*.8,"#2A2A34");for(let t of[190,260,410,480])ue(n,t,300,50,150,16,"#EDE6D4");nt(n,140,160,100,92,"#FBF7EC"),nt(n,120,220,70,46,"#F2B4C0"),be(n,[[80,80],[60,40],[104,72]],"#C9A06A"),be(n,[[200,80],[220,40],[176,72]],"#C9A06A")},[.2,.28],18,2.2],cerdo:[480,360,n=>{nt(n,250,200,200,120,"#F2A8B8");for(let t of[110,170,300,360])ue(n,t,260,44,90,14,"#E890A4");nt(n,120,170,34,24,"#E06A84"),be(n,[[160,70],[150,30],[196,70]],"#E890A4"),be(n,[[250,70],[270,30],[226,70]],"#E890A4"),n.fillStyle="#B04A64",n.beginPath(),n.arc(110,170,6,0,7),n.arc(130,170,6,0,7),n.fill()},[.3,.34],16,1.4],gorila:[460,520,n=>{nt(n,230,320,170,170,"#2E2E38"),nt(n,230,160,110,104,"#2E2E38"),nt(n,230,190,70,56,"#5A5A68"),ue(n,40,260,70,240,30,"#2E2E38"),ue(n,350,260,70,240,30,"#2E2E38")},[.5,.28],16,1.6],jirafa:[400,900,n=>{ue(n,160,120,70,560,30,"#F2C14E"),nt(n,230,700,150,110,"#F2C14E");for(let t of[120,180,290,340])ue(n,t,760,30,140,12,"#E2A83A");nt(n,190,110,80,60,"#F2C14E"),ue(n,160,20,12,50,6,"#8A5A2A"),ue(n,210,20,12,50,6,"#8A5A2A"),n.fillStyle="#B5784A";for(let t=0;t<18;t++)n.beginPath(),n.ellipse(170+t%3*25,200+t*30,12,16,0,0,7),n.fill()},[.47,.1],14,1.8],lobo:[560,420,n=>{nt(n,300,260,190,100,"#8A8E9A"),nt(n,300,300,120,50,"#C8CCD4");for(let t of[160,220,360,420])ue(n,t,320,36,100,14,"#7A7E8A");nt(n,140,170,96,90,"#8A8E9A"),be(n,[[80,120],[90,40],[130,100]],"#7A7E8A"),be(n,[[200,120],[190,40],[150,100]],"#7A7E8A"),be(n,[[60,190],[10,210],[70,230]],"#8A8E9A"),n.strokeStyle="#8A8E9A",n.lineWidth=30,n.lineCap="round",n.beginPath(),n.moveTo(480,250),n.quadraticCurveTo(540,300,530,370),n.stroke()},[.26,.38],18,1.4],leon:[600,460,n=>{nt(n,340,280,200,110,"#E2A83A");for(let t of[200,260,400,460])ue(n,t,330,44,120,16,"#D29A30");nt(n,170,200,150,150,"#A8642A"),nt(n,170,210,96,92,"#E2A83A"),nt(n,170,260,30,20,"#7A4A2A"),n.strokeStyle="#E2A83A",n.lineWidth=16,n.beginPath(),n.moveTo(530,250),n.quadraticCurveTo(600,300,580,380),n.stroke()},[.28,.4],18,2],pulpo:[420,420,n=>{nt(n,210,150,130,120,"#E8667F"),n.strokeStyle="#E8667F",n.lineWidth=26,n.lineCap="round";for(let t=0;t<8;t++)n.beginPath(),n.moveTo(110+t*28,240),n.quadraticCurveTo(80+t*36+Math.sin(t)*40,340,60+t*44,400),n.stroke()},[.5,.34],18,1],hormiga:[300,300,n=>{nt(n,230,190,60,46,"#3A2A2A"),nt(n,150,180,40,34,"#3A2A2A"),nt(n,80,150,50,46,"#3A2A2A"),n.strokeStyle="#3A2A2A",n.lineWidth=7;for(let t=0;t<3;t++)n.beginPath(),n.moveTo(140+t*20,200),n.lineTo(110+t*40,280),n.stroke();n.beginPath(),n.moveTo(70,110),n.lineTo(40,40),n.moveTo(90,108),n.lineTo(110,40),n.stroke()},[.27,.5],13,.35],ciervo:[520,520,n=>{nt(n,300,300,170,80,"#B5784A"),nt(n,300,330,110,40,"#E9C49A");for(let t of[170,220,360,410])ue(n,t,330,26,180,12,"#9A6238");ue(n,120,120,60,200,26,"#B5784A"),nt(n,130,110,70,56,"#B5784A"),nt(n,80,130,30,22,"#3A2A22"),be(n,[[150,70],[200,30],[170,90]],"#9A6238"),n.strokeStyle="#7A5230",n.lineWidth=12,n.lineCap="round",n.beginPath(),n.moveTo(120,60),n.lineTo(90,10),n.moveTo(105,35),n.lineTo(60,25),n.moveTo(150,60),n.lineTo(180,8),n.moveTo(165,32),n.lineTo(210,22),n.stroke(),nt(n,470,270,26,20,"#F4F0E4")},[.25,.2],18,1.4],alce:[600,560,n=>{nt(n,340,300,200,110,"#5A3E2A");for(let t of[190,250,400,460])ue(n,t,360,34,190,14,"#4A3222");ue(n,110,150,90,200,36,"#5A3E2A"),nt(n,110,160,80,66,"#5A3E2A"),nt(n,60,200,54,46,"#6A4A34"),nt(n,40,200,12,10,"#2A1A12"),n.fillStyle="#C8AE84",n.beginPath(),n.ellipse(70,70,70,30,-.3,0,7),n.ellipse(170,70,70,30,.3,0,7),n.fill()},[.2,.28],16,2],jabali:[480,340,n=>{nt(n,250,190,190,110,"#5E4A3E"),n.fillStyle="#4A3A30";for(let t=0;t<9;t++)be(n,[[150+t*22,90],[160+t*22,60],[172+t*22,92]],"#4A3A30");for(let t of[110,170,300,360])ue(n,t,250,40,90,14,"#4A3A30");nt(n,90,200,70,60,"#5E4A3E"),nt(n,30,220,34,28,"#7A6050"),be(n,[[50,240],[30,200],[62,236]],"#F4F0E4"),be(n,[[100,130],[90,100],[126,136]],"#4A3A30")},[.18,.5],14,1.2],caballo:[620,560,n=>{nt(n,330,280,200,100,"#8A5A3A");for(let t of[190,240,400,450])ue(n,t,320,34,230,14,"#7A4A2E");ue(n,120,100,80,220,36,"#8A5A3A"),n.save(),n.translate(110,110),n.rotate(-.5),ue(n,-50,-40,160,66,30,"#8A5A3A"),n.restore(),n.fillStyle="#2A1A12",n.fillRect(170,70,30,200),be(n,[[110,60],[120,20],[140,64]],"#7A4A2E"),n.strokeStyle="#2A1A12",n.lineWidth=26,n.lineCap="round",n.beginPath(),n.moveTo(520,250),n.quadraticCurveTo(580,320,560,420),n.stroke()},[.2,.2],16,2.2]},il={perro:[[.35,.39],.3],viejo:[[.35,.39],.3],gato:[[.43,.39],.34],loro:[[.5,.32],.4],paloma:[[.25,.37],.24],mosquito:[[.3,.5],.2],pradera:[[.5,.3],.36],abeja:[[.21,.54],.24],delfin:[[.2,.5],.12],elefante:[[.28,.38],.2],cachalote:[[.12,.45],.06],pollo:[[.37,.33],.32],vaca:[[.22,.33],.2],cerdo:[[.3,.4],.18],gorila:[[.5,.29],.3],jirafa:[[.47,.12],.3],lobo:[[.25,.4],.22],leon:[[.28,.44],.22],pulpo:[[.5,.34],.4],hormiga:[[.27,.48],.26]};Object.assign(il,{ciervo:[[.24,.2],.14],alce:[[.18,.3],.12],jabali:[[.17,.55],.14],caballo:[[.22,.2],.1]});for(let n in il)Pr[n][3]=il[n][0],Pr[n][4]=il[n][1];Pr.pato=[380,400,n=>{nt(n,210,280,150,100,"#F6D44A"),nt(n,290,250,70,50,"#E8BC30",-.4),nt(n,130,140,86,82,"#F6D44A"),nt(n,40,160,56,22,"#F2913A"),nt(n,46,172,46,14,"#E07A2A"),n.strokeStyle="#F2913A",n.lineWidth=14,n.lineCap="round",n.beginPath(),n.moveTo(180,370),n.lineTo(170,398),n.moveTo(240,370),n.lineTo(250,398),n.stroke(),be(n,[[340,250],[380,220],[360,280]],"#F6D44A")},[.36,.3],.3,1];Pr.dragon=[480,440,n=>{nt(n,250,300,140,110,"#7BC86A"),nt(n,250,330,90,70,"#D8F0B8");for(let t=0;t<4;t++)be(n,[[170+t*50,200],[190+t*50,150],[210+t*50,200]],"#F2913A");nt(n,380,210,80,50,"#9AD884",-.6),nt(n,130,160,100,92,"#7BC86A"),nt(n,70,190,46,34,"#9AD884"),be(n,[[100,80],[90,30],[130,74]],"#F2913A"),be(n,[[160,76],[170,26],[190,80]],"#F2913A"),ue(n,160,380,40,56,18,"#6AB05A"),ue(n,290,380,40,56,18,"#6AB05A"),n.strokeStyle="#7BC86A",n.lineWidth=30,n.lineCap="round",n.beginPath(),n.moveTo(380,330),n.quadraticCurveTo(470,360,450,280),n.stroke(),n.strokeStyle="rgba(0,0,0,.25)",n.lineWidth=4,n.setLineDash([10,8]),n.beginPath(),n.moveTo(250,200),n.lineTo(250,400),n.stroke()},[.28,.34],.3,1.6];Pr.caballoB=[620,560,n=>{nt(n,330,280,200,100,"#F4F0E8");for(let t of[190,240,400,450])ue(n,t,320,34,230,14,"#E4DED2");ue(n,120,100,80,220,36,"#F4F0E8"),n.save(),n.translate(110,110),n.rotate(-.5),ue(n,-50,-40,160,66,30,"#F4F0E8"),n.restore(),n.fillStyle="#E8D8A8",n.fillRect(170,70,30,200),be(n,[[110,60],[120,20],[140,64]],"#E4DED2"),n.strokeStyle="#E8D8A8",n.lineWidth=26,n.lineCap="round",n.beginPath(),n.moveTo(520,250),n.quadraticCurveTo(580,320,560,420),n.stroke()},[.2,.2],.1,2.2];var sl={},Lf=n=>sl["e"+n]||(sl["e"+n]=It(128,64,t=>{t.clearRect(0,0,128,64),t.fillStyle="#FBF7EC",t.strokeStyle="#FBF7EC",t.lineWidth=9,t.lineCap="round";for(let e of[32,96])if(n==="happy")t.beginPath(),t.arc(e,40,16,Math.PI*1.1,Math.PI*1.9),t.stroke();else if(n==="flat"||n==="shut")t.beginPath(),t.moveTo(e-16,34),t.lineTo(e+16,34),t.stroke();else if(n==="sad")t.beginPath(),t.ellipse(e,36,13,16,0,0,7),t.fill(),t.fillStyle="#1A1A24",t.fillRect(e-16,18,32,10),t.fillStyle="#FBF7EC";else{let i=n==="wide"?17:13;t.beginPath(),t.ellipse(e,32,i,i*1.25,0,0,7),t.fill(),n==="look"&&(t.fillStyle="#1A1A24",t.beginPath(),t.arc(e+5,34,5,0,7),t.fill(),t.fillStyle="#FBF7EC")}}));function Uf(n,t={}){let[e,i,s,r,o,a]=Pr[n],l=sl[n]||(sl[n]=It(e,i,s)),c=a*i/e,h=new at,d=new at;h.add(d);let u=Dt(l,a,c,{shadow:!0});u.position.y=c/2,d.add(u);let f=new k(new bt(o*a,o*a*.5),new pe({map:Lf("open"),transparent:!0,depthWrite:!1}));f.position.set(-a/2+r[0]*a,c-r[1]*c,.01),d.add(f);let g=new k(new pn(a*.45,24),new pe({color:"#000",transparent:!0,opacity:.22,depthWrite:!1}));g.rotation.x=-Math.PI/2,g.scale.y=.35,g.position.y=.01,h.add(g),t.flip&&(d.scale.x=-1);let E={root:h,card:d,kind:n,h:c,w:a,eye(m){f.material.map=Lf(m)},face(m){let p=new P;h.getWorldPosition(p),d.rotation.y=Math.atan2(m.position.x-p.x,m.position.z-p.z)},talk(m,p=!0){u.position.y=c/2+(p?Math.abs(Math.sin(m*14))*c*.015:0),d.scale.y=p?1+Math.sin(m*14)*.012:1},place(m,p,v=0,A=1){return h.position.set(m,v,p),h.scale.setScalar(A),E}};return E}var as=(n,t,e=200,i=200,s)=>{let r=new k(new bt(e,i),s?new Ft({map:s,roughness:.95}):w(t,{roughness:1}));return r.rotation.x=-Math.PI/2,r.receiveShadow=!0,n.add(r),r},td=(n,t=1)=>{n.add(new Mt("#E9EEFF","#B08A6A",1.05*t)),n.add(re("#FFD29A",3*t,[-14,16,10],20,70))},gt={sala:(n,t)=>mo(n,{wall:t.wall||"#2F6E68",night:t.night,win:t.win??!0}),quarto:(n,t)=>{mo(n,{wall:"#9A4632",night:t.night}),n.add(R(2.4,.45,3.2,w("#6B4A33"),-1.7,.25,-1.4)),n.add(R(2.3,.3,3,w("#F3EEE4"),-1.7,.6,-1.4)),n.add(R(2.38,.22,2,w("#4A86C7",{roughness:.9}),-1.7,.8,-.7)),n.add(R(.8,.22,.5,w("#FFFFFF"),-1.7,.82,-2.5))},rua:(n,t)=>go(n,{seed:t.seed||0,night:t.night,dusk:t.dusk}),parque:(n,t)=>{n.fog=new wt(t.dusk?"#E8A880":"#F2D8B8",.02),ye(n,-100,500,200,t.dusk?[[0,"#3A3A78"],[.5,"#B86A88"],[.8,"#F29A6A"],[1,"#FFC88A"]]:[[0,"#6FA7D8"],[.6,"#CFD8DC"],[1,"#FFE7BE"]]),oi(n,-80,400,40,["#B89AA0","#A98E9A","#9A8592"],!!t.dusk,5),as(n,"#7A9A50");for(let e=0;e<12;e++)Ke(n,-12+e*2.3,-7-e%3*2.5,1.4,["#3E5F3A","#4F7A44","#6E9A50","#D7D282"],e);n.add(R(2.4,.1,.5,w("#8E6242"),-3.4,.5,-2.2)),n.add(R(2.4,.5,.08,w("#8E6242"),-3.4,.8,-2.45));for(let e=0;e<3;e++)tl(n,-6+e*6,-4,1,!!t.dusk);n.add(new Mt("#E9EEFF","#B08A6A",1)),n.add(re(t.dusk?"#FFB080":"#FFD29A",t.dusk?2.2:3,[-10,12,8],14,50))},plaza:(n,t)=>{go(n,{seed:t.seed||2}),as(n,"",60,60,Pf("#B49F8C",24,24)).position.set(0,.01,-10)},granja:(n,t)=>{n.fog=new wt("#F2D8B8",.012),ye(n,-200,700,260,[[0,"#6FA7D8"],[.6,"#CFE0E8"],[1,"#FFE7BE"]]),as(n,"#8AAA58");let e=new at;e.add(R(6,4,5,w("#B5402E"),0,2,0));let i=new k(new jt(.01,4.4,2.2,4),w("#5A3A2A"));i.rotation.y=Math.PI/4,i.scale.z=.8,i.position.y=5.1,e.add(i),e.add(R(2,2.6,.1,w("#F4F0E4"),0,1.3,2.51)),e.position.set(-4,0,-12),n.add(e);for(let s=0;s<16;s++)n.add(R(.1,1,.1,w("#C9A06A"),-10+s*1.3,.5,-4));n.add(R(20,.08,.06,w("#C9A06A"),0,.9,-4)),n.add(R(20,.08,.06,w("#C9A06A"),0,.5,-4));for(let s=0;s<6;s++)Ke(n,6+s*3,-16-s%2*3,1.6,void 0,s);td(n)},sabana:(n,t)=>{n.fog=new wt("#F2C890",.01),ye(n,-300,900,300,[[0,"#E89A5A"],[.6,"#F6C888"],[1,"#FFE8B8"]]);let e=Yt("#FFF0C0",40,.9);e.position.set(-30,20,-200),e.material.fog=!1,n.add(e),as(n,"#C8A858");for(let i=0;i<6;i++){let s=new at;s.add(R(.3,3,.3,w("#5A3A22"),0,1.5,0));let r=new k(new jt(2.6,2.2,.6,12),w("#6E8A40"));r.position.y=3.2,s.add(r),s.position.set(-20+i*9,0,-14-i%3*8),n.add(s)}n.add(new Mt("#FFE8C8","#8A6A3A",1)),n.add(re("#FFD8A0",3,[-20,14,-10],30,90))},pradera:(n,t)=>{n.fog=new wt("#F2E2C0",.012),ye(n,-200,700,260,[[0,"#6FA7D8"],[.6,"#CFE0E8"],[1,"#F6E8C8"]]),as(n,"#B8B070");for(let e=0;e<14;e++){let i=new k(new Le(.55,16,10,0,Math.PI*2,0,Math.PI/2),w("#A88A5A"));i.scale.y=.4,i.position.set(-8+e%7*2.6,0,-1-Math.floor(e/7)*4-e%3),n.add(i)}td(n)},mar:(n,t)=>{ly(n,t.deep?"#04182E":"#0A3A5A"),n.fog=new wt(t.deep?"#06223E":"#0E4A6A",t.deep?.04:.06);let e=as(n,"#C8B48A");if(e.position.y=-3,!t.deep){let s=Nt(5);for(let r=0;r<30;r++){let o=new k(new mn(.2+s()*.3,.8+s()*1.4,7),w(["#E8667F","#F2A766","#B47AFF","#36AEA2"][r%4]));o.position.set((s()-.5)*14,-2.6,-2-s()*12),n.add(o)}}for(let s=0;s<7;s++){let r=Ds(1.6,16,"#BFEFFF",t.deep?.05:.12);r.position.set(-6+s*2,5,-6),r.rotation.set(0,0,.25),n.add(r)}let i=[];for(let s=0;s<60;s++){let r=Yt("#DFF8FF",.08,.7);n.add(r),i.push(r)}n.userData.bub=i,n.add(new Mt("#9FE0FF","#2A4A5A",t.deep?.5:1)),n.add(re("#BFEFFF",t.deep?.6:1.4,[0,20,4],14,40))},lab:(n,t)=>{n.fog=new wt("#162238",.04),n.add(Ai(16,20,"#2A3348","#232B3E",6)),n.add(R(16,6,.3,w("#2E3A52"),0,3,-3.2));for(let r=0;r<4;r++){let o=Xe(.6,3,"#9FC8FF",1.4);o.rotation.x=Math.PI/2,o.position.set(-3+r*2,4.2,-1),n.add(o)}let e=Xe(2.6,1.4,"#7FD08A",.5);e.position.set(0,2.8,-3.03),n.add(e);let i=It(520,280,r=>{r.fillStyle="#0A1A12",r.fillRect(0,0,520,280),r.strokeStyle="#7FD08A",r.lineWidth=4,r.beginPath();for(let o=0;o<520;o++)r.lineTo(o,140+Math.sin(o*.08)*40*Math.sin(o*.013));r.stroke()}),s=new k(new bt(2.5,1.3),new pe({map:i}));s.position.set(0,2.8,-3.02),n.add(s),n.add(new Mt("#6E86C8","#101420",.8)),n.add(re("#BFD4FF",1.4,[3,6,5],8,30))},hall:(n,t)=>{n.fog=new wt("#1E2236",.02),as(n,"#2F4A7A"),n.add(R(30,10,.3,w("#E8E2D2"),0,5,-8));let e=It(512,512,r=>{r.clearRect(0,0,512,512),r.strokeStyle="#4A86C7",r.lineWidth=16,r.beginPath(),r.arc(256,256,200,0,7),r.stroke();for(let o=1;o<4;o++)r.beginPath(),r.arc(256,256,o*55,0,7),r.stroke();r.beginPath(),r.moveTo(56,256),r.lineTo(456,256),r.moveTo(256,56),r.lineTo(256,456),r.stroke()}),i=Dt(e,4,4);i.position.set(0,6,-7.8),n.add(i);let s=new k(new _n(4,.35,10,48),w("#8E6242"));s.rotation.x=Math.PI/2,s.position.set(0,.8,-1),n.add(s);for(let r=0;r<8;r++){let o=new Qt("#FFE8C0",5,10,1.6);o.position.set(-6+r*1.8,6,0),n.add(o)}n.add(new Mt("#E8E8FF","#3A3A50",.9)),n.add(re("#FFF0D8",1.6,[4,10,8],12,40))},super:(n,t)=>{n.fog=new wt("#E6E2D6",.03),n.add(Ai(9,40));for(let i of[-1,1]){n.add(R(.7,4.2,30,w("#8F96A3"),i*3.6,2.1,-10));for(let s=0;s<4;s++)n.add(R(1.2,.05,30,w("#DDE0E4"),i*3,.5+s*.9,-10))}let e=Nt(3);for(let i=0;i<160;i++){let s=i%2?1:-1;e()<.55||n.add(R(.3,.3,.4,w(["#3F8A52","#6E9A50","#E8843E","#C64236","#F2C14E"][i%5]),s*3,.7+Math.floor(e()*4)*.9,-i*.18))}for(let i=0;i<6;i++){let s=Xe(1,2.6,"#FFF6DE",1.6);s.rotation.x=Math.PI/2,s.position.set(0,4.6,2-i*5),n.add(s)}n.add(new Mt("#FFFFFF","#B9B3A6",1)),n.add(re("#FFF6E0",.8,[1,8,6],10,30))},zoo:(n,t)=>{gt.parque(n,{});for(let e=0;e<12;e++)n.add(R(.08,1.4,.08,w("#3A3A40",{metalness:.5}),-4+e*.7,.7,1.2));n.add(R(8,.08,.08,w("#3A3A40"),0,1.35,1.2))},noite:(n,t)=>{mo(n,{night:!0,wall:"#3A3050"})},ruina:(n,t)=>{n.fog=new wt("#8A8070",.03),ye(n,-100,400,160,[[0,"#7A8A9A"],[1,"#C8C0B0"]]),as(n,"#8A8070");let e=Nt(8);for(let i=0;i<40;i++){let s=R(.4+e()*1.6,.3+e()*1,.4+e()*1.4,w(["#9A9088","#8A8078","#B0A898"][i%3]),(e()-.5)*10,.3,-1-e()*8);s.rotation.set(e(),e()*3,e()*.4),n.add(s)}td(n,.8)}};function ly(n,t){n.background=new ht(t)}function cy(n,t={}){let e=$h({outfit:t.outfit||"hero",hair:t.hair,hairc:t.hairc,lash:!!t.lash,glasses:t.glasses,glow:t.glow??.14});return e.place(t.x||0,t.z||0,t.y||0,t.s||1),e.tint(t.tint||"#FFF0DC"),n.add(e.root),e}var hy=(n,t,e)=>{if(!n)return e;let i=e;for(let[s,r]of n)t>=s&&(i=r);return i};function ed(n,t,e){let i=_f(n,t,e.bg||"#F1C39A",e.fov||32),s=i.scene;(gt[e.amb]||(()=>{}))(s,e.ambo||{});let r=(e.atores||[]).map(a=>{let l=a.tipo==="humano"?cy(s,a):(()=>{let c=Uf(a.tipo,a);return c.place(a.x||0,a.z||0,a.y||0,a.s||1),s.add(c.root),c})();return{a,k:l}}),o=e.extra?e.extra(s,i,r.map(a=>a.k)):null;return i.update=(a,l)=>{Jh.value=a;let c=i.camera,h=s.userData.bub;h&&h.forEach((g,E)=>g.position.set(-4+E%12*.7,-2.5+(l*.5+E*.13)%7,-2-E%5*1.5));let d=Ka(e.cam.map(([g,E])=>[g,E]),l),u=Ka(e.cam.map(([g,,E])=>[g,E]),l);Mf(c,d,u,0);for(let{a:g,k:E}of r){if(g.move){let p=g.move(l);E.root.position.set(p[0],p[1],p[2])}E.face(c),E.eye(hy(g.eyes,l,g.tipo==="humano"?"look":"open"));let m=(g.talk||[]).some(([p,v])=>l>=p&&l<v);g.tipo==="humano"?g.pose?g.pose(E,l):E.pose({armL:[12,8],armR:[m?50+Math.sin(l*8)*15:12,m?30:8],bob:m?Math.abs(Math.sin(l*8))*.015:0}):(E.talk(l,m),g.pose&&g.pose(E,l))}return o&&o.update&&o.update(l,a,c),{focus:e.f?Ka(e.f,l):5,range:e.range??2.4,blur:e.blur??12,bloom:.3,bloomT:.92,vig:.45,exposure:1.02,...e.look||{},...e.lookFn?e.lookFn(l):{}}},i}function Nf(n,t,e,i="#E8667F"){n.add(R(2.2,.45,3,w("#6B4A33"),t,.25,e)),n.add(R(2.1,.3,2.8,w("#F3EEE4"),t,.6,e)),n.add(R(2.18,.2,1.9,w(i,{roughness:.9}),t,.8,e+.5)),n.add(R(2.2,1.3,.16,w("#5A3C28"),t,.9,e-1.55)),n.add(R(.8,.2,.45,w("#FFFFFF"),t-.5,.82,e-1.1)),n.add(R(.8,.2,.45,w("#F6E6C8"),t+.5,.82,e-1.1))}function Hf(n,t=Math.PI/2){n.root.rotation.z=t}function Of(n,t={}){let{w:e=640,h:i=400,bg:s="#FBF7EC",fg:r="#2A2A34",size:o=64,font:a="800",tail:l="left"}=t;return It(e,i,c=>{c.clearRect(0,0,e,i),c.fillStyle=s,c.strokeStyle="#2A2A34",c.lineWidth=8,c.beginPath(),c.ellipse(e/2,i*.42,e*.46,i*.37,0,0,7),c.fill(),c.stroke();let h=l==="left"?e*.3:e*.7;for(let[u,f,g]of[[h,i*.86,20],[h+(l==="left"?-40:40),i*.96,11]])c.beginPath(),c.arc(u,f,g,0,7),c.fill(),c.stroke();c.fillStyle=r,c.textAlign="center",c.textBaseline="middle",c.font=`${a} ${o}px Inter`;let d=Array.isArray(n)?n:[n];d.forEach((u,f)=>c.fillText(u,e/2,i*.42+(f-(d.length-1)/2)*o*1.15))})}function Bf(n,t={}){let{w:e=640,h:i=300,size:s=66}=t;return It(e,i,r=>{r.clearRect(0,0,e,i),r.fillStyle="#FFFFFF",r.strokeStyle="#2A2A34",r.lineWidth=8,r.beginPath(),r.roundRect(10,10,e-20,i*.72,40),r.fill(),r.stroke(),r.beginPath(),r.moveTo(e*.3,i*.72+6),r.lineTo(e*.26,i*.98),r.lineTo(e*.42,i*.72+6),r.fill(),r.stroke(),r.fillStyle="#2A2A34",r.font=`800 ${s}px Inter`,r.textAlign="center",r.textBaseline="middle";let o=Array.isArray(n)?n:[n];o.forEach((a,l)=>r.fillText(a,e/2,i*.38+(l-(o.length-1)/2)*s*1.15))})}function nd(n,t="#F2C14E",e=140,i=256,s=200){return It(i,s,r=>{r.clearRect(0,0,i,s),r.font=`900 ${e}px Fraunces`,r.textAlign="center",r.textBaseline="middle",r.lineWidth=12,r.strokeStyle="#2A2A34",r.strokeText(n,i/2,s/2),r.fillStyle=t,r.fillText(n,i/2,s/2)})}function dy(n,t,e={}){let{S:i=256,vazio:s=!1,face:r="#FBF7EC",rim:o="#2A2A34"}=e;n.clearRect(0,0,i,i);let a=i*.46;if(n.save(),n.translate(i/2,i/2),s){n.fillStyle="rgba(255,232,205,.35)",n.beginPath(),n.arc(0,0,a*.95,0,7),n.fill(),n.setLineDash([14,12]),n.strokeStyle="#FFF0D8",n.lineWidth=9,n.beginPath(),n.arc(0,0,a*.95,0,7),n.stroke(),n.restore();return}n.fillStyle=o,n.beginPath(),n.arc(0,0,a,0,7),n.fill(),n.fillStyle=r,n.beginPath(),n.arc(0,0,a*.86,0,7),n.fill(),n.fillStyle=o;for(let c=0;c<12;c++){let h=c/12*Math.PI*2;n.save(),n.rotate(h),n.fillRect(-4,-a*.8,8,c%3?a*.1:a*.18),n.restore()}let l=(c,h,d)=>{n.save(),n.rotate(c),n.fillRect(-d/2,-h,d,h+10),n.restore()};l(t%12/12*Math.PI*2,a*.5,12),l(t%1*Math.PI*2,a*.72,7),n.fillStyle="#C9361F",n.beginPath(),n.arc(0,0,10,0,7),n.fill(),n.restore()}function zf(n=.6,t=3,e={}){let i=document.createElement("canvas");i.width=i.height=256;let s=i.getContext("2d"),r=new Wn(i);r.colorSpace=Ye;let o=new k(new bt(n,n),new Ft({map:r,transparent:!0,alphaTest:.05,side:Se,roughness:.7}));return o.set=(a,l={})=>{dy(s,a,{...e,...l}),r.needsUpdate=!0},o.set(t),o}var Eo=[0,5.36,11.08,18.54,24.1,31,37.32,43.72,50.98,57.42,58.86,66.66,73.06,77.42,82.08,85.66,93.44,95.48,102.18,113.04,116.36,121.4,125.06,130.3,136.86,144.44,150.02,157.48,161.5,166.42,172.7,181.52,187.22,191.74,197.02,200.86,206.58,212.84,216.3,221.44,227.18,231.88,238.02,246.16,252.9,259.58,264.78,270.96,279.34,285.16,290.96,300.98,307.14,312.22,314.7,321.6,329.16,331.06,335.58,340.6,348,350.14,361.5,368.2,371.56,374.04,378.34,382.2,387.18,395.58,403.16,411.5,416.78,424.8,428.6,433.42,440.86,450.24,455.62,463.32,469.28,471.04,479.62,484.84,489.42,491.14,500.56,502.84,512.88,514.48,522.32,528.58,531.48,536.32,538.3,543.8,550.1,555.24,562.98,566.22],uy=[["campamento",0],["del",.56],["instituto",.8],["tercera",1.9],["noche",2.32],["las",3.28],["once",3.4],["y",3.72],["cinco",3.9],["las",5.36],["tiendas",5.5],["de",5.82],["campana",5.94],["de",6.38],["los",6.5],["chicos",6.64],["estan",6.96],["a",7.38],["un",7.52],["lado",7.62],["del",7.82],["campamento",8.06],["las",9.08],["de",9.32],["las",9.44],["chicas",9.58],["al",9.9],["otro",10.32],["y",11.08],["en",11.22],["medio",11.32],["la",11.62],["regla",12.04],["mas",12.4],["importante",12.74],["de",13.42],["toda",13.64],["la",13.96],["semana",14.16],["la",14.98],["que",15.2],["el",15.32],["profe",15.48],["ramirez",15.78],["ha",16.18],["repetido",16.34],["cuarenta",16.84],["veces",17.26],["despues",18.54],["de",19.04],["las",19.28],["once",19.4],["el",20.04],["que",20.16],["este",20.32],["en",20.54],["una",20.68],["tienda",20.82],["que",21.14],["no",21.38],["es",21.56],["la",21.68],["suya",21.82],["llamada",22.24],["a",22.78],["sus",22.88],["padres",23.04],["y",23.34],["a",23.72],["casa",23.82],["y",24.1],["tu",25.1],["estas",25.3],["saliendo",25.86],["de",26.42],["tu",26.62],["tienda",26.74],["descalzo",27.7],["con",28.82],["una",29.02],["linterna",29.22],["en",29.78],["la",29.88],["mano",30],["no",31],["es",31.34],["tu",31.48],["linterna",31.54],["es",32.4],["la",32.6],["de",32.76],["ella",32.9],["tu",33.66],["crush",33.78],["te",34.72],["la",34.84],["presto",34.94],["esta",35.28],["tarde",35.42],["en",36.06],["la",36.14],["excursion",36.24],["y",37.32],["tu",37.42],["has",37.62],["decidido",37.96],["que",38.46],["no",38.66],["puede",38.9],["esperar",39.28],["a",39.66],["manana",39.78],["que",40.6],["hay",40.74],["que",40.88],["devolverla",40.98],["ahora",41.92],["mismo",42.26],["cruzas",43.72],["el",44.16],["campamento",44.32],["agachado",44.86],["llegas",45.98],["a",46.24],["su",46.36],["tienda",46.5],["abres",47.28],["un",47.54],["poquito",47.78],["la",48.2],["cremallera",48.48],["hola",49.76],["ella",50.98],["se",51.22],["asoma",51.42],["con",52.18],["el",52.28],["saco",52.42],["de",52.74],["dormir",52.82],["hasta",53.12],["el",53.44],["cuello",53.58],["que",54.44],["haces",54.7],["aqui",54.9],["entra",55.66],["que",56.2],["te",56.26],["van",56.36],["a",56.5],["ver",56.6],["y",57.42],["entras",57.8],["dentro",58.86],["esta",59.26],["ella",59.72],["y",60.58],["tambien",60.68],["su",60.94],["mejor",61.22],["amiga",61.5],["lucia",62.22],["dormida",63.16],["roncando",64.18],["como",64.6],["un",65],["tractor",65.22],["le",66.66],["das",66.88],["la",67.04],["linterna",67.2],["ella",68.18],["la",68.36],["coge",68.52],["y",69.34],["justo",69.42],["cuando",69.7],["te",69.98],["das",70.2],["la",70.38],["vuelta",70.52],["para",70.8],["irte",71.06],["pum",72],["un",72.78],["trueno",73.06],["enorme",73.54],["y",74.56],["empieza",74.62],["a",75.02],["llover",75.18],["como",75.36],["si",75.66],["se",75.84],["acabara",75.96],["el",76.42],["mundo",76.6],["y",77.42],["entonces",77.64],["oyes",78.42],["unos",78.64],["pasos",78.84],["fuera",79.3],["ves",80.2],["una",80.36],["luz",80.58],["que",80.8],["se",80.96],["acerca",81.08],["es",82.08],["el",82.26],["profe",82.42],["ramirez",82.76],["con",83.52],["su",83.7],["linterna",83.86],["gigante",84.44],["y",85.66],["se",85.76],["sienta",85.88],["en",86.28],["el",86.38],["banco",86.48],["del",86.76],["porche",86.94],["justo",87.78],["delante",88.1],["de",88.68],["la",88.84],["tienda",88.94],["a",89.8],["resguardo",89.94],["de",90.4],["la",90.58],["lluvia",90.68],["con",91.5],["un",91.68],["termo",91.82],["de",92.26],["cafe",92.34],["no",93.44],["se",93.74],["va",93.94],["a",94.12],["mover",94.24],["de",94.44],["ahi",94.7],["estas",95.48],["atrapado",95.9],["en",96.6],["la",97.28],["tienda",97.42],["de",97.8],["tu",97.98],["crush",98.12],["con",99],["tu",99.16],["crush",99.38],["y",100.34],["con",100.4],["lucia",100.6],["roncando",101.06],["y",102.18],["antes",102.7],["de",102.96],["ver",103.14],["como",103.32],["acaba",103.58],["esta",103.88],["noche",104.18],["si",104.92],["te",105.04],["gustan",105.14],["estas",105.46],["historias",105.68],["de",106.22],["y",106.46],["si",106.75],["suscribete",107.72],["al",108.24],["canal",108.38],["y",108.62],["activa",108.92],["la",109.3],["campanita",109.4],["y",110.46],["ahora",110.66],["si",110.88],["vamos",111.62],["alla",111.86],["ella",113.04],["te",113.4],["mira",113.62],["a",113.82],["la",114],["luz",114.04],["de",114.24],["la",114.36],["linterna",114.46],["y",114.98],["te",115.1],["susurra",115.2],["de",116.36],["verdad",116.5],["has",116.72],["venido",116.98],["a",117.28],["devolverme",117.4],["la",117.88],["linterna",118],["te",118.94],["la",119.06],["preste",119.18],["hace",119.54],["cinco",119.68],["horas",120.14],["te",121.4],["ha",121.68],["pillado",121.8],["es",122.96],["que",123.18],["la",123.42],["podias",124.1],["necesitar",124.44],["tengo",125.06],["otra",126.12],["dice",126.84],["y",127.76],["te",127.82],["ensena",127.94],["otra",128.38],["linterna",128.66],["y",130.3],["aqui",130.38],["tienes",130.58],["que",130.92],["saber",131.06],["una",131.32],["cosa",131.54],["esta",132.38],["semana",132.62],["de",132.94],["campamento",133.12],["te",133.7],["ha",133.98],["venido",134.06],["de",134.42],["maravilla",134.6],["aunque",135.4],["no",135.64],["lo",135.86],["sepas",135.98],["desayunais",136.86],["en",137.4],["la",137.6],["misma",137.7],["mesa",137.9],["vais",138.68],["en",138.78],["el",139],["mismo",139.08],["autobus",139.34],["haceis",140.3],["las",140.56],["mismas",140.7],["excursiones",141.18],["y",142.46],["eso",142.62],["cuenta",142.88],["en",144.44],["1968",144.68],["el",146.56],["psicologo",146.58],["robert",147.02],["zajonc",147.4],["hizo",148],["un",148.28],["experimento",148.44],["muy",149.14],["curioso",149.42],["ensenaba",150.02],["a",151],["la",151.16],["gente",151.2],["palabras",151.5],["inventadas",151.88],["y",152.74],["simbolos",152.98],["que",153.48],["parecian",153.62],["letras",154.08],["chinas",154.46],["sin",155.08],["que",155.36],["supieran",155.5],["lo",155.92],["que",156.1],["significaban",156.22],["algunos",157.48],["los",158.1],["veian",158.24],["una",158.7],["vez",158.98],["otros",159.72],["muchas",160.04],["veces",160.62],["y",161.5],["luego",161.68],["les",161.9],["preguntaba",162.06],["esto",163.24],["significa",163.48],["algo",164.04],["bueno",164.42],["o",164.74],["algo",165.2],["malo",165.46],["cuantas",166.42],["mas",166.8],["veces",167.06],["habian",167.4],["visto",167.74],["una",168.08],["palabra",168.32],["mas",169.02],["positiva",169.32],["les",169.88],["parecia",170.04],["sin",170.9],["ninguna",171.12],["otra",171.5],["razon",171.78],["lo",172.7],["llamaron",172.98],["el",173.44],["efecto",173.7],["de",174.04],["mera",174.3],["exposicion",174.62],["lo",175.94],["que",176.16],["vemos",176.28],["a",176.5],["menudo",176.7],["nos",177.02],["acaba",177.32],["resultando",177.58],["mas",178.26],["familiar",178.58],["y",179.08],["muchas",179.52],["veces",179.76],["mas",180.14],["agradable",180.64],["ojo",181.52],["no",182.2],["es",182.44],["magia",182.64],["y",183.34],["no",183.42],["funciona",183.54],["si",183.92],["caes",184.22],["mal",184.5],["desde",184.72],["el",184.88],["principio",185.12],["pero",186],["ayuda",186.28],["y",187.22],["cinco",187.32],["dias",187.6],["viendoos",187.92],["a",188.5],["todas",188.68],["horas",188.84],["es",189.26],["mucha",190.12],["exposicion",190.46],["otro",191.74],["trueno",192.18],["mas",192.98],["fuerte",193.36],["la",194.3],["tienda",194.42],["entera",194.72],["se",195.16],["sacude",195.34],["con",195.86],["el",196.08],["viento",196.22],["y",197.02],["de",197.16],["repente",197.28],["notas",197.58],["una",198.14],["mano",198.32],["agarrandote",198.58],["del",199.3],["brazo",199.52],["es",200.38],["ella",200.64],["perdona",200.86],["susurra",202.28],["es",203.24],["que",203.44],["las",203.6],["tormentas",204.02],["me",204.6],["dan",204.8],["muchisimo",204.96],["miedo",205.56],["no",206.58],["te",206.86],["suelta",207.02],["y",207.8],["tu",208],["no",208.2],["te",208.64],["mueves",208.82],["no",209.64],["respiras",209.86],["eres",210.92],["una",211.2],["estatua",211.5],["por",212.84],["que",213.02],["cuando",213.18],["tenemos",213.36],["miedo",213.8],["buscamos",214.2],["a",214.76],["alguien",214.98],["cerca",215.24],["en",216.3],["1959",216.48],["el",218.4],["psicologo",218.44],["stanley",218.9],["schachter",219.34],["quiso",219.9],["averiguarlo",220.28],["le",221.44],["dijo",221.6],["a",221.84],["un",221.96],["grupo",222.06],["de",222.26],["voluntarias",222.44],["que",223.04],["iban",223.3],["a",223.52],["recibir",223.64],["descargas",223.92],["electricas",224.64],["bastante",225.32],["dolorosas",225.84],["era",227.18],["mentira",227.38],["nadie",228.3],["recibio",228.62],["ninguna",229.16],["pero",229.98],["ellas",230.2],["no",230.5],["lo",230.9],["sabian",231.02],["luego",231.88],["les",232.26],["pregunto",232.48],["mientras",233.56],["esperais",233.86],["preferis",234.8],["esperar",235.2],["solas",235.58],["o",236.18],["con",236.44],["otras",236.62],["personas",236.82],["las",238.02],["que",238.2],["estaban",238.36],["mas",238.68],["asustadas",238.96],["preferian",239.52],["mucho",240.22],["mas",240.72],["esperar",241.02],["acompanadas",241.68],["sobre",242.94],["todo",243.2],["con",243.5],["gente",243.8],["que",244.08],["estaba",244.26],["pasando",244.54],["por",244.94],["lo",245.22],["mismo",245.34],["cuando",246.16],["tenemos",246.38],["miedo",246.78],["no",247.24],["queremos",247.68],["estar",248.08],["solos",248.46],["queremos",249.26],["a",249.58],["alguien",249.84],["al",250.12],["lado",250.34],["que",250.58],["entienda",250.82],["lo",251.3],["que",251.48],["sentimos",251.58],["fuera",252.9],["el",253.78],["profe",253.86],["ramirez",254.24],["sorbe",254.6],["su",255.1],["cafe",255.26],["muy",255.98],["fuerte",256.28],["y",257.2],["tose",257.3],["y",258.14],["se",258.22],["queda",258.38],["ahi",258.66],["dentro",259.58],["os",260],["sentais",260.34],["en",260.7],["el",260.9],["suelo",261.02],["de",261.3],["la",261.42],["tienda",261.52],["muy",262.24],["pegados",262.48],["para",263.28],["no",263.42],["hacer",263.62],["ruido",263.84],["haceis",264.78],["inventario",265.04],["de",265.72],["provisiones",265.84],["media",266.98],["bolsa",267.3],["de",267.72],["gominolas",267.84],["un",268.86],["paquete",269.02],["de",269.36],["galletas",269.5],["aplastado",269.88],["y",270.96],["una",271.02],["chocolatina",271.18],["que",271.8],["lucia",272],["tenia",272.38],["escondida",272.68],["en",273.26],["la",273.38],["mochila",273.48],["os",274.36],["la",274.52],["comeis",274.68],["a",275],["medias",275.14],["lucia",275.46],["ronca",276.58],["mas",277],["fuerte",277.22],["como",277.92],["si",278.12],["lo",278.3],["supiera",278.4],["y",279.34],["luego",279.48],["llega",279.8],["el",280.36],["silencio",280.58],["ese",281.6],["silencio",281.84],["incomodo",282.38],["en",283.08],["el",283.26],["que",283.36],["no",283.5],["sabes",283.68],["que",284.02],["decir",284.22],["y",285.16],["entonces",285.28],["se",285.66],["te",286.2],["ocurre",286.3],["una",286.7],["idea",286.88],["jugamos",287.84],["a",288.14],["las",288.34],["preguntas",288.44],["pero",289.32],["en",289.5],["susurros",289.64],["esto",290.96],["tambien",291.36],["viene",291.9],["de",292.14],["la",292.3],["ciencia",292.42],["en",293.28],["1997",293.44],["el",295.28],["psicologo",295.38],["arthur",295.84],["aron",296.3],["y",296.8],["su",296.98],["equipo",297.12],["juntaron",297.42],["a",298.12],["parejas",298.24],["de",298.56],["estudiantes",298.76],["que",299.28],["no",299.56],["se",299.78],["conocian",299.94],["a",300.98],["unas",301.22],["les",301.46],["dieron",301.66],["una",301.92],["lista",302.14],["de",302.42],["treinta",302.62],["y",302.827],["seis",303.033],["preguntas",303.24],["que",303.68],["se",304.14],["iban",304.3],["volviendo",304.52],["cada",305.04],["vez",305.42],["mas",305.74],["personales",306.06],["a",307.14],["otras",307.38],["preguntas",307.88],["de",308.2],["charla",308.48],["normal",308.82],["tipo",309.44],["cual",309.64],["es",310.36],["tu",310.54],["asignatura",310.58],["favorita",311.08],["charlaban",312.22],["unos",312.72],["cuarenta",312.94],["y",313.127],["cinco",313.313],["minutos",313.5],["y",314.7],["al",314.9],["final",315.02],["las",315.7],["parejas",315.84],["de",316.2],["las",316.36],["preguntas",316.5],["personales",316.86],["se",317.68],["sentian",317.86],["bastante",318.28],["mas",318.84],["cercanas",319.22],["que",319.68],["las",319.92],["de",320.08],["la",320.22],["charla",320.34],["normal",320.7],["no",321.6],["es",321.82],["que",321.94],["las",322.06],["preguntas",322.22],["enamoren",322.88],["a",323.22],["nadie",323.38],["es",324.06],["que",324.26],["abrirse",324.4],["poco",324.96],["a",325.32],["poco",325.5],["por",326.02],["turnos",326.24],["hace",326.74],["que",327.16],["dos",327.34],["personas",327.54],["se",328.1],["acerquen",328.3],["asi",329.16],["que",329.54],["empezais",329.78],["si",331.06],["pudieras",331.24],["despertarte",331.68],["manana",332.28],["con",332.64],["una",333.02],["habilidad",333.22],["nueva",333.76],["cual",334.4],["seria",334.58],["ella",335.58],["dice",335.78],["volverme",336.62],["invisible",337.14],["para",337.58],["salir",338.2],["de",338.46],["aqui",338.66],["sin",338.86],["que",339.08],["me",339.24],["vea",339.36],["ramirez",339.62],["tu",340.6],["dices",340.84],["saber",341.64],["lo",341.92],["que",342.16],["piensa",342.26],["la",342.58],["gente",342.72],["ella",343.62],["se",343.9],["tapa",344.1],["la",344.36],["boca",344.52],["para",344.74],["no",345.02],["reirse",345.2],["eso",346.12],["seria",346.44],["horrible",346.82],["cual",348],["seria",348.26],["tu",348.56],["dia",348.78],["perfecto",348.98],["ella",350.14],["lo",350.44],["piensa",350.64],["mucho",351.04],["y",351.38],["dice",351.9],["un",352.8],["dia",353.02],["de",353.26],["excursion",353.4],["como",354.44],["el",354.66],["de",354.78],["hoy",354.9],["bueno",355.54],["como",356.28],["el",356.48],["de",356.62],["hoy",356.74],["pero",357.12],["sin",357.32],["barro",357.58],["y",358.4],["te",358.56],["mira",358.7],["y",359.46],["aparta",359.64],["la",359.93],["mirada",360.22],["las",361.5],["preguntas",361.72],["van",362.1],["subiendo",362.54],["ella",363.58],["te",363.78],["cuenta",363.98],["que",364.24],["quiere",364.5],["ser",364.74],["veterinaria",365],["pero",365.9],["que",366.06],["le",366.26],["da",366.36],["miedo",366.48],["no",366.78],["sacar",366.96],["la",367.18],["nota",367.44],["tu",368.2],["le",368.32],["cuentas",368.42],["que",368.86],["a",369.04],["veces",369.14],["te",369.34],["sientes",369.6],["invisible",369.9],["en",370.44],["clase",370.72],["ella",371.56],["te",371.78],["dice",371.96],["pues",372.78],["yo",372.98],["te",373.2],["veo",373.36],["y",374.04],["ahi",374.22],["se",374.44],["hace",374.7],["un",374.94],["silencio",375.12],["pero",376.14],["esta",376.34],["vez",376.6],["no",376.84],["es",377.16],["incomodo",377.32],["y",378.34],["de",378.54],["repente",378.64],["te",379.04],["das",379.52],["cuenta",379.72],["de",380.02],["que",380.26],["el",380.38],["corazon",380.54],["te",380.92],["va",381.22],["a",381.42],["mil",381.56],["es",382.2],["por",382.5],["la",382.68],["tormenta",382.82],["por",383.72],["el",383.9],["profe",384.06],["que",384.44],["esta",384.52],["a",384.74],["un",384.74],["metro",384.94],["o",385.62],["es",385.86],["por",386.04],["ella",386.2],["y",387.18],["entonces",387.34],["te",387.72],["acuerdas",388.08],["de",388.58],["esta",388.78],["tarde",389.04],["de",389.86],["la",390.02],["excursion",390.14],["del",391.08],["puente",391.32],["colgante",391.66],["sobre",392.18],["el",392.54],["rio",392.72],["el",393.46],["que",393.58],["se",393.7],["movia",393.84],["con",394.22],["cada",394.42],["paso",394.64],["tu",395.58],["ibas",395.7],["temblando",395.98],["y",396.92],["ella",397.14],["iba",397.42],["justo",397.84],["delante",398.22],["y",398.78],["se",399.32],["dio",399.46],["la",399.62],["vuelta",399.74],["y",400.04],["te",400.62],["dio",400.74],["la",400.9],["mano",401.02],["para",401.28],["ayudarte",401.54],["a",402.04],["cruzar",402.16],["pues",403.16],["esto",403.4],["tambien",403.7],["tiene",404.22],["experimento",404.5],["en",405.32],["1974",405.78],["donald",407.54],["dutton",407.86],["y",408.32],["arthur",408.56],["aron",408.78],["el",409.32],["mismo",409.52],["de",409.8],["las",409.98],["treinta",410.1],["y",410.267],["seis",410.433],["preguntas",410.6],["lo",411.5],["probaron",411.62],["en",412],["canada",412.2],["en",412.88],["un",413.02],["puente",413.18],["colgante",413.42],["altisimo",413.9],["que",414.52],["se",414.78],["balanceaba",414.9],["sobre",415.5],["un",415.82],["rio",416.04],["una",416.78],["chica",416.98],["paraba",417.3],["a",417.68],["los",417.86],["chicos",417.98],["que",418.28],["acababan",418.52],["de",418.94],["cruzarlo",419.1],["les",419.9],["hacia",420.04],["una",420.36],["encuesta",420.52],["y",420.94],["les",421.38],["daba",421.52],["su",421.74],["numero",421.98],["de",422.26],["telefono",422.44],["por",423.14],["si",423.3],["querian",423.44],["saber",423.76],["mas",424.04],["y",424.8],["lo",424.92],["mismo",425],["hacia",425.2],["con",425.56],["chicos",425.76],["que",426.08],["cruzaban",426.32],["un",426.74],["puente",426.94],["bajo",427.24],["y",427.6],["firme",427.78],["que",428.6],["paso",428.74],["muchos",429.44],["mas",429.94],["chicos",430.12],["del",430.4],["puente",430.66],["que",430.98],["daba",431.14],["miedo",431.36],["la",431.7],["llamaron",432],["despues",432.46],["la",433.42],["idea",433.66],["es",433.86],["que",434.16],["el",434.28],["cuerpo",434.44],["nota",434.7],["el",435.08],["corazon",435.26],["acelerado",435.62],["pero",436.46],["no",436.66],["siempre",436.86],["sabe",437.14],["por",437.58],["que",437.82],["y",438.4],["a",438.54],["veces",438.58],["lo",438.82],["confunde",439.1],["con",439.58],["atraccion",439.8],["eso",440.86],["si",441.08],["otros",441.72],["cientificos",441.94],["lo",442.72],["han",442.88],["intentado",442.96],["repetir",443.46],["despues",443.92],["y",444.3],["no",444.7],["siempre",444.86],["les",445.26],["ha",445.46],["salido",445.62],["igual",445.94],["asi",446.7],["que",446.94],["tomatelo",447.16],["como",447.7],["una",447.92],["pista",448.14],["no",448.88],["como",449.02],["una",449.26],["ley",449.5],["o",450.24],["sea",450.36],["que",450.9],["puede",451],["que",451.3],["sea",451.5],["la",451.68],["tormenta",451.86],["o",452.7],["el",452.88],["puente",453],["o",453.82],["puede",453.94],["que",454.26],["no",454.44],["ella",455.62],["apaga",455.92],["la",456.32],["linterna",456.48],["para",457],["ahorrar",457.2],["pila",457.52],["y",458.16],["en",458.38],["la",458.48],["oscuridad",458.56],["te",459.1],["susurra",459.52],["te",460.58],["puedo",460.7],["contar",460.96],["un",461.22],["secreto",461.46],["vale",462.34],["esta",463.32],["tarde",463.58],["en",464.24],["el",464.38],["puente",464.5],["yo",465.42],["no",465.54],["tenia",465.68],["nada",465.96],["de",466.38],["miedo",466.56],["te",467.28],["di",467.42],["la",467.54],["mano",467.66],["porque",467.94],["queria",468.32],["no",469.28],["sabes",469.54],["que",469.9],["decir",470.12],["y",471.04],["otro",471.22],["secreto",471.44],["sigue",472.02],["ella",472.68],["la",473.66],["linterna",473.74],["te",474.3],["la",474.78],["preste",474.9],["a",475.12],["proposito",475.34],["para",475.98],["que",476.48],["tuvieras",476.64],["una",477.08],["excusa",477.22],["para",477.74],["venir",477.96],["a",478.2],["devolvermela",478.38],["y",479.62],["justo",479.8],["entonces",480.04],["lucia",481.12],["sin",481.92],["despertarse",482.04],["murmura",483.22],["en",483.64],["suenos",483.74],["diselo",484.84],["ya",485.38],["que",485.6],["llevas",486.18],["toda",486.52],["la",486.84],["semana",486.98],["hablando",487.42],["de",487.86],["el",488.18],["silencio",489.42],["absoluto",489.94],["ella",491.14],["entierra",491.38],["la",491.86],["cara",492.06],["en",492.3],["el",492.46],["saco",492.58],["de",492.94],["dormir",493.02],["tu",493.88],["te",494.02],["tapas",494.2],["la",494.52],["boca",494.66],["para",494.9],["no",495.18],["reirte",495.36],["y",496.14],["los",496.3],["dos",496.48],["acabais",496.66],["llorando",497.16],["de",497.62],["la",497.78],["risa",497.9],["sin",498.26],["hacer",498.48],["ni",498.84],["un",499.12],["ruido",499.26],["la",500.56],["una",500.9],["menos",501.12],["cuarto",501.36],["de",501.76],["la",502],["noche",502.1],["ha",502.84],["dejado",503.06],["de",503.44],["llover",503.58],["fuera",504.42],["ya",505.14],["no",505.24],["se",505.38],["oye",505.56],["el",505.8],["cafe",505.92],["se",506.7],["oye",506.88],["otra",507.12],["cosa",507.38],["un",508.34],["ronquido",508.56],["el",509.74],["profe",509.88],["ramirez",510.2],["se",510.62],["ha",510.94],["quedado",511.04],["dormido",511.36],["en",511.82],["el",511.96],["banco",512.06],["es",512.88],["tu",513.16],["oportunidad",513.3],["ella",514.48],["te",514.7],["abre",514.94],["la",515.14],["cremallera",515.32],["muy",515.8],["despacio",516.3],["buenas",517.66],["noches",517.9],["susurra",518.78],["buenas",520.06],["noches",520.28],["dices",521.12],["tu",521.48],["sales",522.32],["a",522.58],["gatas",522.82],["pasas",523.52],["por",523.82],["delante",524],["del",524.38],["profe",524.58],["un",525.42],["paso",525.6],["dos",526.5],["tres",527.56],["y",528.58],["pisas",528.66],["un",529.08],["charco",529.28],["enorme",529.76],["chof",530.7],["el",531.48],["profe",531.7],["abre",532.12],["un",532.3],["ojo",532.48],["te",533.22],["apunta",533.32],["con",533.62],["la",533.84],["linterna",533.96],["que",534.96],["haces",535.08],["tu",535.32],["aqui",535.54],["iba",536.32],["al",536.64],["bano",537.4],["te",538.3],["mira",538.38],["mira",539.16],["los",539.46],["banos",539.68],["que",540.04],["estan",540.4],["justo",540.64],["en",541.02],["la",541.22],["otra",541.32],["punta",541.48],["te",542.32],["vuelve",542.56],["a",542.92],["mirar",543],["a",543.8],["dormir",544.05],["ya",544.68],["y",545.46],["no",545.62],["dice",545.78],["nada",546.06],["mas",546.38],["pero",547.18],["juraria",547.42],["que",547.96],["se",548.14],["le",548.28],["escapa",548.4],["una",548.74],["sonrisa",548.94],["a",550.1],["la",550.28],["manana",550.34],["siguiente",550.6],["en",551.42],["el",551.5],["desayuno",551.6],["ella",552.52],["se",552.72],["sienta",552.92],["a",553.28],["tu",553.42],["lado",553.46],["como",554.06],["si",554.34],["nada",554.48],["y",555.24],["te",555.34],["pasa",555.46],["algo",555.66],["por",556],["debajo",556.22],["de",556.58],["la",556.74],["mesa",556.84],["su",557.66],["linterna",558.06],["para",558.96],["esta",559.14],["noche",559.36],["dice",560.06],["por",560.96],["si",561.14],["necesitas",561.3],["una",561.8],["excusa",561.98],["lucia",562.98],["desde",563.86],["el",563.88],["otro",564.14],["lado",564.3],["pone",564.98],["los",565.16],["ojos",565.38],["en",565.64],["blanco",565.88],["y",566.22],["tu",566.92],["si",567.62],["te",567.72],["quedaras",567.86],["atrapado",568.22],["una",568.78],["noche",568.94],["en",569.24],["un",569.4],["sitio",569.52],["con",569.82],["alguien",570.1],["con",571.04],["quien",571.2],["te",571.4],["gustaria",571.58],["que",571.98],["fuera",572.22],["te",573.04],["leo",573.2],["en",573.46],["los",573.56],["comentarios",573.66]],id=(n,t=0)=>{for(let[e,i]of uy)if(i>=t&&e===n)return i;return t};var rl=(n,t,e=200,i=200)=>{let s=new k(new bt(e,i),w(t,{roughness:1}));return s.rotation.x=-Math.PI/2,s.receiveShadow=!0,n.add(s),s},de=(n,t={})=>{let{w:e=512,h:i=200,bg:s="#FBF7EC",fg:r="#2A2A34",size:o=64}=t;return It(e,i,a=>{a.clearRect(0,0,e,i),a.fillStyle=s,a.beginPath(),a.roundRect(6,6,e-12,i-12,26),a.fill(),a.fillStyle=r,a.font=`900 ${o}px Fraunces`,a.textAlign="center",a.textBaseline="middle",n.forEach((l,c)=>a.fillText(l,e/2,i/2+(c-(n.length-1)/2)*o*1.1))})};function kf(n="#E9B44C"){let t=new at;t.add(R(2.4,2.4,9,w(n,{roughness:.5}),0,1.5,0));for(let i=0;i<6;i++)for(let s of[-1,1])t.add(R(.02,.8,1.1,w("#1A2233",{roughness:.1,metalness:.5}),s*1.21,2,-3.6+i*1.4));t.add(R(2.2,1,.02,w("#1A2233",{roughness:.1}),0,2,4.51));let e=R(.02,1.8,1,w("#2A2A34"),1.22,1.2,2.8);t.add(e);for(let i of[-3,3])for(let s of[-1,1]){let r=new k(new jt(.45,.45,.3,20),w("#1A1A20"));r.rotation.z=Math.PI/2,r.position.set(s*1.1,.45,i),t.add(r)}return t}function sd(){let n=new at;for(let i=0;i<5;i++){let s=R(.6,.08,.08,w("#5A3A22"),0,.06,0);s.rotation.y=i/5*Math.PI,n.add(s)}let t=[];for(let i=0;i<3;i++){let s=Yt(["#FFB040","#FF7A30","#FFE080"][i],.5-i*.1,.9);s.position.y=.25+i*.1,n.add(s),t.push(s)}let e=new Qt("#FF9A40",6,6,1.6);return e.position.y=.5,n.add(e),n.tick=i=>{t.forEach((s,r)=>{s.scale.setScalar((.5-r*.1)*(1+Math.sin(i*13+r*2)*.15))}),e.intensity=6+Math.sin(i*17)*1.2},n}function fy(n,t=.5){let e=new at,i=It(1024,256,r=>{r.clearRect(0,0,1024,256);let o=Nt(77);for(let a=0;a<70;a++){let l=r.createRadialGradient(o()*1024,128+(o()-.5)*90,0,0,0,0)}for(let a=0;a<40;a++){let l=o()*1024,c=128+(o()-.5)*70,h=40+o()*80,d=r.createRadialGradient(l,c,0,l,c,h);d.addColorStop(0,["rgba(200,180,255,.22)","rgba(255,220,200,.2)","rgba(170,200,255,.2)"][a%3]),d.addColorStop(1,"rgba(0,0,0,0)"),r.fillStyle=d,r.fillRect(0,0,1024,256)}r.fillStyle="rgba(20,10,30,.35)";for(let a=0;a<18;a++)r.beginPath(),r.ellipse(o()*1024,128+(o()-.5)*30,40+o()*60,6+o()*8,(o()-.5)*.3,0,7),r.fill();for(let a=0;a<2600;a++){let l=128+(o()+o()+o()-1.5)*70;r.fillStyle=`rgba(255,255,255,${.3+o()*.7})`;let c=o()<.03?2.4:1.2;r.fillRect(o()*1024,l,c,c)}}),s=new k(new bt(400,100),new pe({map:i,transparent:!0,depthWrite:!1,fog:!1,blending:Rn}));return s.position.set(0,60,-150),s.rotation.z=t,e.add(s),n.add(e),e}function py(n,t=0,e=-1){for(let i=0;i<4;i++){let s=R(5,.22,.6,w("#5A3E2A",{roughness:1}),t,.1,e-i*1.1);s.receiveShadow=!0,n.add(s);for(let r=0;r<7;r++){let o=new k(new mn(.16,.35,6),w(["#4F7A44","#6E9A50"][r%2]));o.position.set(t-2.1+r*.7,.38,e-i*1.1),n.add(o)}}}function rd(n,t=40,e=3,i=[-12,12,-40,4]){let s=Nt(e),r=It(256,512,o=>{o.clearRect(0,0,256,512),o.strokeStyle="#3E6A34",o.lineWidth=6,o.beginPath(),o.moveTo(128,512);for(let a=512;a>0;a-=20)o.lineTo(128+Math.sin(a*.05)*40,a);o.stroke();for(let a=0;a<60;a++){o.fillStyle=["#4F8A44","#6EA850","#3E6A34"][a%3],o.beginPath();let l=s()*512;o.ellipse(128+Math.sin(l*.05)*40+(s()-.5)*60,l,16,10,s()*3,0,7),o.fill()}});for(let o=0;o<t;o++){let a=1.5+s()*4,l=Dt(r,a*.5,a),c=s()<.5?-1:1;l.position.set(c*(8.8+s()*.4),a/2,i[2]+s()*(i[3]-i[2])),l.rotation.y=c*-Math.PI/2,n.add(l)}}function Gf(n,t=200,e=5,i=10,s=30,r=2){let o=Nt(e),a=It(64,64,l=>{l.clearRect(0,0,64,64),l.fillStyle="#6E9A50";for(let c=0;c<7;c++)l.beginPath(),l.moveTo(10+c*7,64),l.lineTo(14+c*7+(c-3)*3,10+c%3*8),l.lineTo(18+c*7,64),l.fill()});for(let l=0;l<t;l++){let c=Dt(a,.5,.5);c.position.set((o()-.5)*i,.25,r-o()*s),c.rotation.y=o()*3,n.add(c)}}gt.pasteleria=n=>{n.fog=new wt("#F3D2C0",.02),n.add(Ai(16,14,"#F2E6DA","#E2CFC0",8)),n.add(R(16,5,.3,w("#E89AA8"),0,2.5,-3.2));for(let i=0;i<6;i++)n.add(R(.12,5,.05,w("#F6C2CC"),-6+i*2.4,2.5,-3.02));n.add(R(5.4,1,.9,w("#8A5A3C"),0,.5,-1.2)),n.add(R(5.5,.08,1,w("#F4EEE6"),0,1.04,-1.2)),n.add(R(3.6,.1,.5,w("#F4EEE6"),0,2.1,-3)),n.add(R(3.6,.1,.5,w("#F4EEE6"),0,2.9,-3));let t=Dt(de(["PASTELER\xCDA"],{bg:"#6C4A2C",fg:"#FFE7B8",size:80,w:768,h:160}),2.8,.58);t.position.set(0,3.9,-3),n.add(t),n.add(new Mt("#FFF0F0","#A07060",1));let e=re("#FFE6C8",1.8,[3,8,6],8,30);n.add(e);for(let i=0;i<3;i++){let s=new Qt("#FFD8A8",5,7,1.6);s.position.set(-2+i*2,3.4,-.5),n.add(s)}};gt.espacio=n=>{n.background=new ht("#05060E"),Sn(n,2600,200,3),n.add(new Mt("#8FA8FF","#101020",.5));let t=new si("#FFF4E0",3.2);t.position.set(-10,6,8),n.add(t)};gt.aula=n=>{n.fog=new wt("#E8DCC8",.02),n.add(Ai(16,16,"#C9B89A","#BBA98A",10)),n.add(R(16,5,.3,w("#E8DCC0"),0,2.5,-3.6)),n.add(R(4.4,1.8,.06,w("#2F5A48"),0,2.3,-3.42)),n.add(R(4.6,.1,.2,w("#8E6242"),0,1.36,-3.35));let t=Dt(It(512,200,e=>{e.clearRect(0,0,512,200),e.fillStyle="#F4F0E4",e.font="700 60px Caveat",e.fillText("EXAMEN  \u2014  2 + 2 = ?",30,90),e.fillText("x\xB2 \u2212 9 = 0",60,170)}),3.4,1.3);t.position.set(0,2.35,-3.38),n.add(t),n.add(new Mt("#FFFFFF","#9A8A70",1)),n.add(re("#FFE8C8",2.2,[-6,8,6],10,40))};gt.ruaV=(n,t)=>{go(n,{seed:t.seed||0,night:t.night,dusk:t.dusk}),t.selva&&(rd(n,60,4),Gf(n,260,6,9,40))};gt.apagon=(n,t)=>{n.fog=new wt("#0A0C18",.03),ye(n,-170,500,240,[[0,"#04050C"],[.6,"#0C1028"],[1,"#1A1A34"]]),Sn(n,1800,200,4),ja(n,!0);let e=6,i=0;for(;e>-60;){let s=7+i*37%5;n.add(os(300+i,{x:13,z:e-s/2,w:8,d:s,floors:5,side:-1,night:!0,lit:0})),n.add(os(400+i,{x:-13,z:e-s/2,w:8,d:s,floors:6,side:1,night:!0,lit:0})),e-=s,i++}n.add(new Mt("#5A64A8","#141420",.5)),n.add(re("#8A9AE0",.7,[-10,20,10],30,90))};gt.azotea=(n,t)=>{n.background=new ht("#03040A"),n.fog=new wt("#060814",.008),Sn(n,4200,200,9),fy(n,t.ang??.45),oi(n,-60,300,30,["#0E1020","#121428","#161830"],!1,7);let e=R(16,.3,12,w("#3A3A44",{roughness:1}),0,-.15,-2);e.receiveShadow=!0,n.add(e),n.add(R(16,.5,.2,w("#4A4A54"),0,.25,-8)),n.add(R(1.4,1.2,1.4,w("#4A4A54"),4.5,.6,-5)),n.add(new Mt("#6A78C8","#141420",.55)),n.add(re("#9AAAF0",.6,[-6,10,6],12,40))};gt.panaderia=n=>{gt.pasteleria(n);let t=Dt(de(["PANADER\xCDA"],{bg:"#6C4A2C",fg:"#FFE7B8",size:80,w:768,h:160}),2.8,.58);t.position.set(0,3.9,-2.98),n.add(t)};gt.metro=n=>{n.background=new ht("#0A0C10"),n.fog=new wt("#0C1014",.07);let t=w("#4A4E54",{roughness:.9,side:ln}),e=new k(new jt(3.2,3.2,60,32,1,!0,0,Math.PI),t);e.rotation.set(Math.PI/2,0,Math.PI/2),e.rotation.order="YXZ";let i=new at,s=new k(new jt(3.2,3.2,60,32,1,!0),t);s.rotation.x=Math.PI/2,s.position.set(0,1.2,-20),i.add(s),n.add(i);let r=R(6.4,.1,60,w("#2A2C30"),0,-.05,-20);n.add(r);for(let o of[-.75,.75])n.add(R(.08,.12,60,w("#8A8E98",{metalness:.8,roughness:.3}),o,.1,-20));for(let o=0;o<40;o++)n.add(R(2.2,.08,.2,w("#3A2E26"),0,.03,5-o*1.5));for(let o=0;o<6;o++){let a=new Qt("#FFE0A0",4,8,1.8);a.position.set(2.2,3,2-o*8),n.add(a);let l=Yt("#FFE0A0",.5,.9);l.position.copy(a.position),n.add(l)}n.add(new Mt("#8A90A0","#202024",1.1))};gt.bosque=(n,t)=>{n.fog=new wt(t.nieve?"#E8EEF4":"#C8D0B8",.025),ye(n,-100,500,200,t.nieve?[[0,"#9AB0C8"],[1,"#EEF2F6"]]:[[0,"#8AA8C0"],[.7,"#C8D4C8"],[1,"#E8E4C8"]]),rl(n,t.nieve?"#F2F4F8":"#6E8A48");let e=Nt(14);for(let i=0;i<26;i++)Ke(n,(e()-.5)*30,-4-e()*22,1.2+e()*.8,t.nieve?["#4A6A5A","#5A7A6A","#E8EEF4","#FFFFFF"]:["#3E5F3A","#4F7A44","#6E9A50","#A9B65A"],i);if(t.ruina){let i=os(55,{x:6,z:-14,w:10,d:8,floors:5,side:-1,night:!1,lit:0,col:"#A8A49A"});n.add(i),rd(n,0)}n.add(new Mt("#E9EEFF","#5A6A4A",.95)),n.add(re("#FFE8C0",2.4,[-10,14,8],18,60))};gt.rio=(n,t)=>{gt.parque(n,t);let e=new k(new bt(60,3.4),new Ft({color:"#4A8AB0",roughness:.08,metalness:.3}));e.rotation.x=-Math.PI/2,e.position.set(0,.02,-3.6),n.add(e)};gt.playa=(n,t)=>{let e=!!t.dusk;n.fog=new wt(e?"#F2A880":"#CFE8F0",.006),ye(n,-200,900,300,e?[[0,"#3A3A78"],[.45,"#C86A88"],[.75,"#F6A060"],[1,"#FFD890"]]:[[0,"#4F9AD8"],[.6,"#9FD0E8"],[1,"#E8F4F0"]]);let i=Yt(e?"#FFC070":"#FFFFF0",e?30:16,.9);i.position.set(0,e?6:40,-220),i.material.fog=!1,n.add(i);let s=rl(n,"#E8D4A0"),r=new k(new bt(800,400),new Ft({color:e?"#5A6AA0":"#3A9AC0",roughness:.12,metalness:.4}));r.rotation.x=-Math.PI/2,r.position.set(0,.03,-206),n.add(r);let o=R(800,.02,.6,w("#F4F8FA"),0,.04,-6.2);if(n.add(o),n.userData.foam=o,t.roca){let a=new k(new ki(1.1,0),w("#7A6A60"));a.scale.set(1.4,.55,1),a.position.set(0,.25,-1),a.castShadow=a.receiveShadow=!0,n.add(a)}n.add(new Mt(e?"#FFC8A8":"#E9F4FF","#C8A878",1)),n.add(re(e?"#FFB070":"#FFF0D0",e?2.2:3,[0,e?5:16,-14],16,60))};gt.svalbard=n=>{n.fog=new wt("#C8D8E8",.02),ye(n,-200,700,260,[[0,"#4A5A8A"],[.6,"#A8B8D8"],[1,"#E8EEF8"]]),rl(n,"#F4F6FA");let t=Nt(19);for(let l=0;l<8;l++){let c=new k(new mn(10+t()*12,10+t()*10,7),w("#E8EEF4",{roughness:1}));c.position.set(-40+l*12,4,-40-t()*30),n.add(c)}let e=new k(new Le(14,32,16,0,Math.PI*2,0,Math.PI/2),w("#EEF2F6",{roughness:1}));e.scale.y=.5,e.position.set(0,0,-20),n.add(e);let i=R(3,4.4,6,w("#9A9EA4",{roughness:.8}),0,1.6,-6.5);i.rotation.x=-.18,n.add(i);let s=R(1.4,2.2,.1,w("#4A4E56",{metalness:.5}),0,1.1,-3.45);n.add(s);let r=Xe(2.6,1,"#7FE8FF",1.3);r.position.set(0,3.1,-3.3),r.rotation.x=-.18,n.add(r);let o=Yt("#7FE8FF",4,.35);o.position.set(0,3.1,-3),n.add(o);let a=[];for(let l=0;l<300;l++){let c=Yt("#FFFFFF",.05,.9);n.add(c),a.push([c,t()*20-10,t()*8,t()*12-8,t()])}n.userData.snow=a,n.add(new Mt("#D8E8FF","#8A9AB0",1.1)),n.add(re("#F0F4FF",1.6,[-8,10,8],16,50))};gt.huerto=(n,t)=>{gt.parque(n,t),py(n,0,-1.4)};gt.biblio=n=>{n.fog=new wt("#4A3A2A",.03),n.add(ai(18,14,"#6D4A33")),n.add(R(18,6,.3,w("#5A3E2A"),0,3,-3.4));let t=Nt(8);for(let s=0;s<5;s++){n.add(R(14,.06,.4,w("#3E2A1C"),0,.5+s*.9,-3.05));for(let r=0;r<60;r++){let o=.1+t()*.1,a=.5+t()*.3;n.add(R(o,a,.3,w(["#8A3A2A","#2F5A48","#3A4F7A","#C9A06A","#6A3A5A"][r%5]),-6.8+r*.23,.5+s*.9+a/2+.03,-3.05))}}n.add(new Mt("#FFE8C8","#3A2A1C",.7));let e=new Qt("#FFC880",10,8,1.6);e.position.set(0,2.6,.5),n.add(e);let i=Yt("#FFC880",1,.4);i.position.copy(e.position),n.add(i)};gt.hotel=n=>{n.fog=new wt("#E8D8C0",.02),n.add(ai(18,14,"#8A5A3A")),n.add(R(18,6,.3,w("#C8B898"),0,3,-3.4));for(let i of[-3,3]){n.add(R(2.4,2.6,.05,w("#9FC8E8",{roughness:.05,metalness:.3,transparent:!0,opacity:.35}),i,2.4,-3.22));let s=Dt(It(256,256,r=>{r.clearRect(0,0,256,256),r.strokeStyle="#FFFFFF",r.lineWidth=3;for(let o=0;o<9;o++)r.beginPath(),r.moveTo(128,128),r.lineTo(128+Math.cos(o*.7)*140,128+Math.sin(o*.7)*140),r.stroke()}),2.4,2.4);s.position.set(i,2.4,-3.18),n.add(s)}let t=R(3.2,.6,2.4,w("#F4F0E4"),0,.3,-1.6);n.add(t),n.add(R(3.3,1.4,.2,w("#6A3A2A"),0,.7,-2.8)),rd(n,0);let e=Dt(It(256,256,i=>{i.clearRect(0,0,256,256);for(let s=0;s<90;s++)i.fillStyle=["#4F8A44","#6EA850"][s%2],i.beginPath(),i.ellipse(__sr()*256,__sr()*120,12,8,1,0,7),i.fill()}),3,3);e.position.set(3,3.6,-3.15),n.add(e),n.add(new Mt("#FFF0E0","#8A6A4A",1)),n.add(re("#FFE0B0",2,[-4,8,6],10,30))};gt.selva=n=>{n.fog=new wt("#7AA870",.05),ye(n,-100,400,200,[[0,"#4A7A5A"],[1,"#B8D8A0"]]),rl(n,"#3E5A2A");let t=Nt(23);for(let e=0;e<40;e++)Ke(n,(t()-.5)*26,-2-t()*18,1.6+t(),["#1E4A24","#2E6A34","#4A8A3E","#7AB048"],e);Gf(n,160,9,12,12,3),n.add(new Mt("#D8F0C8","#2A3A1A",.9)),n.add(re("#FFF0C0",2.2,[-6,14,4],14,50))};gt.desierto=n=>{gt.sabana(n,{})};var ad=(n,t,e=200,i=200)=>{let s=new k(new bt(e,i),w(t,{roughness:1}));return s.rotation.x=-Math.PI/2,s.receiveShadow=!0,n.add(s),s};function ol(n={}){let{w:t=10,h:e=7,col:i="#E8C8A0",win:s=[0,2.6,2,1.8],night:r=!1,inner:o="#F2D49A",lit:a=r,brick:l=!1,sill:c=.9}=n,h=new at,[d,u,f,g]=s,E=()=>l?new Ft({map:nl(i,3,3),roughness:.95}):w(i,{roughness:.9}),m=d-f/2+t/2,p=t/2-(d+f/2),v=u-g/2,A=e-(u+g/2);h.add(R(m,e,.3,E(),-t/2+m/2,e/2,0)),h.add(R(p,e,.3,E(),t/2-p/2,e/2,0)),h.add(R(f,v,.3,E(),d,v/2,0)),h.add(R(f,A,.3,E(),d,e-A/2,0));let y=w("#F4F0E4");for(let[O,z,X,j]of[[d-f/2,u,.1,g+.1],[d+f/2,u,.1,g+.1],[d,u+g/2,f+.2,.1],[d,u,.05,g]])h.add(R(X,j,.36,y,O,z,0));h.add(R(f+.4,.1,.5,y,d,u-g/2-.03,.12));let D=3.2,C=w(o,{roughness:.9});h.add(R(f+3,e,.2,C,d,e/2,-D)),h.add(R(.2,e,D,C,d-f/2-1.4,e/2,-D/2)),h.add(R(.2,e,D,C,d+f/2+1.4,e/2,-D/2)),h.add(R(f+3,.2,D,w("#8A6A4A"),d,v-c,-D/2)),h.add(R(f+3,.2,D,C,d,u+g/2+.5,-D/2));let b=new Qt("#FFC880",a?9:2.5,7,1.4);b.position.set(d,u+.6,-1.2),h.add(b);let F=Xe(f+2.6,e*.6,"#FFD9A0",a?.35:.08);F.position.set(d,u,-D+.12),h.add(F);let S=R(f-.04,g,.06,w("#E8E2D2",{roughness:.8}),d,u,.1);S.castShadow=!1,h.add(S);let _=[];for(let O=0;O<10;O++){let z=R(f-.04,.015,.07,"#B8B0A0",d,0,.11,!1);h.add(z),_.push([z,O])}let I=O=>{let z=Math.max(.001,g*O);S.scale.y=z/g,S.position.y=u+g/2-z/2,S.visible=O>.01,_.forEach(([X,j])=>{let Z=u+g/2-(j+.5)*g/10;X.visible=O>.01&&Z>u+g/2-z,X.position.y=Z})};return I(0),h.userData={persiana:I,luz:O=>{b.intensity=O?9:2.5,F.material.emissiveIntensity=O?.35:.08},win:s,lamp:b},h.children.forEach(O=>{O.castShadow=O.castShadow??!0,O.receiveShadow=!0}),h}function yo(n={}){let{col:t="#E8C8A0",roof:e="#A8442E",w:i=7,h:s=5.6,d:r=7,door:o="#3E6A5A",night:a=!1}=n,l=new at;l.add(R(i,s,r,w(t,{roughness:.9}),0,s/2,-r/2));let c=new k(new jt(.01,i*.62,2.4,4,1),w(e,{roughness:.8}));c.rotation.y=Math.PI/4,c.scale.set(1,1,r/i),c.position.set(0,s+1.2,-r/2),c.castShadow=!0,l.add(c),l.add(R(1.1,2.1,.1,w(o),0,1.05,.02)),l.add(R(.08,.08,.08,"#E9B44C",.38,1,.1));let h=()=>new Ft({color:"#1A2233",emissive:a?"#FFC880":"#000",emissiveIntensity:a?.7:0,roughness:.1,metalness:.3});for(let[d,u]of[[-2.2,1.6],[2.2,1.6],[-2.2,4.1],[2.2,4.1]])l.add(R(1.3,1.2,.06,h(),d,u,.03)),l.add(R(1.5,.1,.2,"#F4F0E4",d,u-.65,.08));return l.add(R(2,.2,1.2,w("#B8AC9D"),0,.1,.6)),l.children.forEach(d=>{d.castShadow=!0,d.receiveShadow=!0}),l}function od(n=4){let t=new at,e=Nt(n*7);for(let i=0;i<n*3;i++){let s=new k(new Le(.42+e()*.12,12,10),w(["#3E6A34","#4F7A44","#5A8A48"][i%3],{roughness:1}));s.position.set(-n/2+i/3+.15,.5+e()*.25,(e()-.5)*.2),s.castShadow=!0,t.add(s)}return t}function Vf(n=8,t="#E8E2D2"){let e=new at;for(let i=0;i<=n*4;i++)e.add(R(.1,1.3,.05,w(t),-n/2+i*.25,.65,0));for(let i of[.35,1.05])e.add(R(n,.08,.06,w(t),0,i,-.04));return e.children.forEach(i=>i.castShadow=!0),e}function al(){let n=new at,t=Nt(4);for(let e=0;e<7;e++){let i=new k(new Le(.35,12,10),w("#3E6A34",{roughness:1}));i.position.set((t()-.5)*1.4,.35+t()*.3,(t()-.5)*.5),n.add(i)}for(let e=0;e<16;e++){let i=new k(new Le(.08,10,8),w(["#D8344A","#E8667F"][e%2],{roughness:.5}));i.position.set((t()-.5)*1.5,.55+t()*.4,(t()-.5)*.6+.2),n.add(i)}return n.children.forEach(e=>e.castShadow=!0),n}function my(){let n=new at;n.add(R(2.2,2,1.8,w("#8A6A4A",{roughness:.9}),0,1,0));let t=R(2.6,.12,2.3,w("#5A3E2A"),0,2.12,0);return n.add(t),n.add(R(.8,1.5,.05,w("#5A3E2A"),0,.75,.92)),n.children.forEach(e=>{e.castShadow=!0,e.receiveShadow=!0}),n}function Wf(n=.6){let t=R(n,n*.8,n,w("#C9A06A",{roughness:.9}),0,n*.4,0);return t.add(R(n*1.01,.06,.15,w("#E8D8A8"),0,n*.4,0)),t}function Xf(){let n=new at;n.add(R(.04,1.4,.04,w("#E8667F"),0,.7,0));let t=new k(new Le(.28,16,12),new Ft({color:"#FF8AA8",emissive:"#FF6A90",emissiveIntensity:.5}));t.scale.set(1.3,.8,.8),t.position.y=1.5,n.add(t);let e=new k(new _n(.18,.04,8,16,Math.PI*1.2),w("#FF8AA8"));e.position.set(.25,1.75,0),n.add(e);let i=Yt("#FF9AB8",1.2,.4);return i.position.y=1.5,n.add(i),n}function qf(n=.9,t=1.2){let e=It(360,480,r=>{r.fillStyle="#BFE0F2",r.fillRect(0,0,360,480),r.fillStyle="#FFFFFF",r.beginPath(),r.ellipse(180,270,95,55,0,0,7),r.fill(),r.beginPath(),r.ellipse(270,200,30,50,.5,0,7),r.fill();for(let o of[120,150,210,240])r.fillRect(o,300,16,100);r.fillStyle="#F2C1E0",r.beginPath(),r.moveTo(170,240),r.quadraticCurveTo(80,90,40,140),r.quadraticCurveTo(100,180,170,260),r.fill(),r.fillStyle="#E9B44C",r.beginPath(),r.moveTo(280,160),r.lineTo(300,100),r.lineTo(295,165),r.fill(),r.fillStyle="#7F6BC4",r.font="700 46px Caveat",r.textAlign="center",r.fillText("\xA1VUELA ALTO!",180,455)}),i=new at;i.add(R(n+.08,t+.08,.04,"#2A1E18",0,0,0));let s=new k(new bt(n,t),w("#fff"));return s.material.map=e,s.position.z=.025,i.add(s),i}function Yf(n=.9,t=1.2){let e=It(360,480,r=>{r.fillStyle="#1E1A30",r.fillRect(0,0,360,480),r.fillStyle="#E8667F",r.beginPath(),r.arc(180,210,120,0,7),r.fill(),r.fillStyle="#1E1A30",r.beginPath(),r.arc(180,210,40,0,7),r.fill(),r.fillStyle="#F2C14E",r.font="900 60px Fraunces",r.textAlign="center",r.fillText("LOS GRILLOS",180,420)}),i=new at;i.add(R(n+.08,t+.08,.04,"#111",0,0,0));let s=new k(new bt(n,t),w("#fff"));return s.material.map=e,s.position.z=.025,i.add(s),i}function ls(n="#FFF2C0"){let t=new at,e=R(.07,.07,.26,w("#3A3A44",{metalness:.5}),0,0,0);t.add(e);let i=Yt(n,.9,.95);i.position.z=.16,t.add(i);let s=new Qt(n,4,4,1.5);return s.position.z=.25,t.add(s),t.userData.on=r=>{i.visible=r>.5,s.intensity=r>.5?4:0},t}var gy=(n,t)=>{gt.quarto(n,t);let e=qf();e.position.set(-3,2.8,-2.8),n.add(e)};gt.cuartoYo=(n,t)=>{gy(n,t);let e=ol({w:18,h:9,col:t.night?"#7A6A88":"#E8C8A0",win:[1,2.2,1.7,1.6],night:!!t.night,lit:t.lit??!!t.night,inner:"#F2C8D0"});e.position.set(0,-.2,-6.2),n.add(e),n.userData.her=e;let i=Xf();i.position.set(-.4,.4,-8.6),i.scale.setScalar(.9),n.add(i);let s=Yf(.7,.9);s.position.set(1.9,2.6,-9.2),n.add(s),t.night&&Sn(n,600,120,2)};gt.cuartoElla=(n,t)=>{gt.sala(n,{wall:"#6E5A9A",night:t.night}),n.add(R(2.4,.45,3.2,w("#6B4A33"),1.7,.25,-1.4)),n.add(R(2.3,.3,3,w("#F3EEE4"),1.7,.6,-1.4)),n.add(R(2.38,.22,2,w("#E8667F",{roughness:.9}),1.7,.8,-.7));let e=Xf();e.position.set(-3.2,0,-2.2),n.add(e);let i=Yf();i.position.set(-3.6,2.8,-2.8),n.add(i);let s=ol({w:18,h:9,col:t.night?"#6A5A50":"#D8B890",win:[-1,2.2,1.7,1.6],night:!!t.night,lit:t.lit??!!t.night,inner:"#C8D8E8"});s.position.set(0,-.2,-6.2),n.add(s),n.userData.me=s;let r=qf(.6,.8);r.position.set(-2.2,2.6,-9.2),n.add(r),t.night&&Sn(n,600,120,2)};gt.entreCasas=(n,t)=>{let e=!!t.night;n.background=new ht(e?"#0A0C1E":"#9FC8E8"),n.fog=new wt(e?"#0E1028":"#CFE0EE",.02),ye(n,-60,300,140,e?[[0,"#05060E"],[.6,"#141838"],[1,"#2A2A50"]]:[[0,"#6FA7D8"],[.6,"#CFE0E8"],[1,"#FFE7BE"]]),e&&Sn(n,1600,120,5),ad(n,e?"#24301E":"#6E9A50");let i=ol({w:9,h:8,col:e?"#6A5A50":"#D8B890",win:[0,4.2,1.7,1.8],night:e,lit:e,inner:"#C8D8E8"});i.position.set(-2.3,0,-1),i.rotation.y=.62,n.add(i);let s=ol({w:9,h:8,col:e?"#7A6A88":"#E8C8A0",win:[0,4.2,1.7,1.8],night:e,lit:e,inner:"#F2C8D0"});s.position.set(2.3,0,-1),s.rotation.y=-.62,n.add(s),n.userData.me=i,n.userData.her=s;let r=Vf(10);r.rotation.y=Math.PI/2,r.position.set(0,0,2),n.add(r),n.add(new Mt(e?"#6E74C0":"#E9EEFF",e?"#1A1A24":"#6A5A4A",e?.55:1)),n.add(re(e?"#9FB0FF":"#FFD29A",e?.5:2.6,[6,14,10],14,40))};gt.barrio=(n,t)=>{let e=!!t.night,i=!!t.dusk;n.fog=new wt(e?"#1A1A30":i?"#E8A880":"#F2E2C8",.012),ye(n,-120,500,200,e?[[0,"#05060E"],[.6,"#141838"],[1,"#2A2A50"]]:i?[[0,"#3A3A78"],[.5,"#B86A88"],[.8,"#F29A6A"],[1,"#FFC88A"]]:[[0,"#6FA7D8"],[.6,"#CFE0E8"],[1,"#FFE7BE"]]),ad(n,e?"#24301E":"#6E9A50");let s=R(200,.02,6,w(e?"#2A2A30":"#55545C",{roughness:.9}),0,.01,4);s.receiveShadow=!0,n.add(s);let r=R(200,.1,2,w("#B8AC9D"),0,.05,.2);r.receiveShadow=!0,n.add(r);let o=[[-13.5,"#C8D8B0","#5A6E8A"],[-4.5,"#D8B890","#A8442E"],[4.5,"#E8C8A0","#7A4A8A"],[13.5,"#B8D0E0","#A8442E"],[22.5,"#E8D8A8","#5A6E8A"],[-22.5,"#E0B8B0","#3E6A5A"]];for(let[h,d,u]of o){let f=yo({col:d,roof:u,night:e});f.position.set(h,0,-3),n.add(f)}let a=od(3);a.position.set(-7.6,0,-1.4),n.add(a);let l=od(3);l.position.set(-1.4,0,-1.4),n.add(l);let c=od(3);c.position.set(7.6,0,-1.4),n.add(c);for(let h of[-9,0,9,18])Ke(n,h,-11,1.4,["#2E4F2C","#3B6636","#55813F","#A9B65A"],Math.abs(h));oi(n,-60,300,16,["#B8C8D8","#A8B8C8","#98A8B8"],e,9),n.add(new Mt(e?"#6E74C0":"#E9EEFF","#6A5A4A",e?.6:1.05)),n.add(re(e?"#9FB0FF":i?"#FFB080":"#FFD29A",e?.6:2.8,[-14,16,12],24,70))};gt.jardin=(n,t)=>{let e=!!t.dusk;n.fog=new wt(e?"#E8A880":"#F2E2C8",.015),ye(n,-100,400,200,e?[[0,"#3A3A78"],[.5,"#B86A88"],[.8,"#F29A6A"],[1,"#FFC88A"]]:[[0,"#6FA7D8"],[.6,"#CFE0E8"],[1,"#FFE7BE"]]),ad(n,"#6E9A50");let i=Vf(16);i.rotation.y=Math.PI/2,i.position.set(0,0,-2),n.add(i);let s=al();s.position.set(1.6,0,-1.2),n.add(s);let r=al();r.position.set(2.8,0,-2.6),n.add(r);let o=my();o.position.set(-2.4,0,-3.2),n.add(o);let a=yo({col:"#D8B890",roof:"#A8442E"});a.position.set(-5,0,-9),a.rotation.y=0,n.add(a);let l=yo({col:"#E8C8A0",roof:"#7A4A8A"});l.position.set(5,0,-9),n.add(l);for(let c of[-12,12])Ke(n,c,-8,1.3,["#2E4F2C","#3B6636","#55813F","#A9B65A"],Math.abs(c));n.add(new Mt("#E9EEFF","#6A5A4A",1.05)),n.add(re(e?"#FFB080":"#FFD29A",2.8,[-10,14,10],14,50)),n.userData.caseta=o};gt.esquina=(n,t)=>{gt.barrio(n,t)};gt.concurso=n=>{n.background=new ht("#140C24"),n.fog=new wt("#1A1030",.03);let t=R(20,.2,12,w("#2A1E48",{metalness:.3,roughness:.4}),0,-.1,-2);t.receiveShadow=!0,n.add(t);for(let r=0;r<9;r++){let o=Yt(["#FF5A9A","#5AC8FF","#F2C14E"][r%3],1,.9);o.position.set(-6+r*1.5,5,-6),n.add(o)}let e=Dt(de(["\xBFQUI\xC9N SABE M\xC1S?"],{bg:"#3A1E6A",fg:"#F2C14E",size:90,w:1024,h:180}),6,1.05);e.position.set(0,4,-5.8),n.add(e);let i=R(1.2,1.1,.7,w("#C9361F",{metalness:.3}),0,.55,-.6);n.add(i),n.add(R(1.3,.1,.8,w("#F2C14E"),0,1.12,-.6)),n.add(new Mt("#B8A8FF","#2A1A3A",.9));let s=new On("#FFF2D8",60,20,.5,.5,1.2);s.position.set(0,8,4),s.target.position.set(0,1,-.6),s.castShadow=!0,n.add(s,s.target)};gt.residencia=n=>{n.fog=new wt("#E8DCC8",.02),n.add(ai(20,14,"#8A6A4A")),n.add(R(20,4,.3,w("#E8DCC0"),0,2,-3.4));for(let t=0;t<8;t++){n.add(R(1,2.2,.08,w("#6B4A33"),-7+t*2,1.1,-3.2));let e=Dt(de([String(t+1)],{bg:"#F2C14E",fg:"#2A2A34",size:90,w:160,h:140}),.4,.35);e.position.set(-7+t*2,2.5,-3.15),n.add(e)}n.add(new Mt("#FFFFFF","#9A8A70",1)),n.add(re("#FFE8C8",2,[-6,8,6],12,40))};var cl=(n,t,e=200,i=200)=>{let s=new k(new bt(e,i),w(t,{roughness:1}));return s.rotation.x=-Math.PI/2,s.receiveShadow=!0,n.add(s),s},ll=["#2E4F2C","#3B6636","#55813F","#A9B65A"],Zf=["#0E1A16","#13221C","#1A2C22","#22382A"],hl=(n,t=-60,e="#7A8AA8",i="#F4F6FA",s=4,r=9)=>{let o=Nt(s);for(let a=0;a<r;a++){let l=14+o()*16,c=12+o()*10,h=new k(new mn(c,l,7),w(e,{roughness:1}));if(h.position.set(-70+a*17+o()*6,l/2-1,t-o()*25),n.add(h),i){let d=new k(new mn(c*.34,l*.34,7),w(i,{roughness:1}));d.position.set(h.position.x,l-l*.17-1,h.position.z),n.add(d)}}},ld=(n,t,e,i,s,r="#4A8AB0",o=!1)=>{let a=new k(new pn(1,48),new Ft({color:r,roughness:.08,metalness:.35,emissive:o?"#0A1A30":"#000",emissiveIntensity:o?.6:0}));return a.rotation.x=-Math.PI/2,a.scale.set(i,s,1),a.position.set(t,.02,e),a.receiveShadow=!0,n.add(a),a};gt.albergue=(n,t)=>{let e=!!t.dusk;n.fog=new wt(e?"#E8B090":"#D8E4E8",.012),ye(n,-200,700,260,e?[[0,"#3A3A78"],[.5,"#B86A88"],[.8,"#F29A6A"],[1,"#FFC88A"]]:[[0,"#4F8AC8"],[.6,"#BFD8EC"],[1,"#EEF4F0"]]),hl(n,-70,e?"#6A5A88":"#7A8EAE"),cl(n,"#6E9A48");let i=yo({col:"#9A6A44",roof:"#5A3A2A",w:9,h:4.2,d:6,door:"#4A2E1E"});i.position.set(-3.5,0,-7),n.add(i);let s=Dt(de(["ALBERGUE LOS PINOS"],{bg:"#4A2E1E",fg:"#F2C14E",size:70,w:900,h:150}),3.2,.54);s.position.set(-3.5,3.4,-6.9),n.add(s),ld(n,6,-9,6,3.2);let r=Nt(31);for(let o=0;o<22;o++){let a=(r()-.5)*40;Math.abs(a+3.5)<6&&o<14||Ke(n,a,-10-r()*16,1.3+r()*.7,ll,o)}for(let[o,a]of[[-9,-3],[9,-4],[-11,-6]])Ke(n,o,a,1.4,ll,o|0);n.add(new Mt("#E9EEFF","#5A6A4A",1)),n.add(re(e?"#FFB080":"#FFE2B0",e?2.2:2.8,[-10,16,10],16,70))};gt.gymkana=(n,t)=>{n.fog=new wt("#D8E4E8",.012),ye(n,-200,700,260,[[0,"#4F8AC8"],[.6,"#BFD8EC"],[1,"#EEF4F0"]]),hl(n,-70),cl(n,"#7AA850"),ld(n,0,-9,9,3.4);let e=Nt(7);for(let s=0;s<18;s++)Ke(n,(e()-.5)*44,-14-e()*14,1.3+e()*.6,ll,s);let i=new k(new pn(1,32),w("#6A4A2E",{roughness:.4}));i.rotation.x=-Math.PI/2,i.scale.set(1.6,1,1),i.position.set(1.2,.015,-1.2),n.add(i);for(let s of[-3,3]){let r=new k(new mn(.18,.45,12),w("#F2A766"));r.position.set(s,.22,.8),n.add(r)}n.add(new Mt("#E9EEFF","#5A6A4A",1)),n.add(re("#FFE2B0",2.8,[-10,16,10],16,70))};gt.lagoNoche=(n,t)=>{n.background=new ht("#05071A"),n.fog=new wt("#0A0E24",.02),Sn(n,4200,200,11),ye(n,-150,600,220,[[0,"#03040E"],[.6,"#0E1434"],[1,"#22284A"]]),hl(n,-80,"#141A30","#3A4460",6),cl(n,"#1E2A20"),ld(n,0,-8,12,4,"#1A2A48",!0);let e=Nt(17);for(let r=0;r<24;r++){let o=(e()-.5)*40;Ke(n,o,-14-e()*14,1.3+e()*.6,Zf,r)}for(let[r,o]of[[-6,-2],[6.5,-3],[-8,-5]])Ke(n,r,o,1.3,Zf,r*3|0);let i=Yt("#F4F0D8",5,.9);i.position.set(14,22,-90),i.material.fog=!1,n.add(i),n.add(new Mt("#6A78C8","#10141E",.55));let s=new si("#9AA8E8",.6);s.position.set(8,12,-6),n.add(s)};gt.cima=(n,t)=>{n.fog=new wt("#E4EEF4",.006),ye(n,-200,900,300,[[0,"#2F6AB8"],[.55,"#8EC0E8"],[1,"#F4F8FA"]]);let e=new k(new bt(800,800),w("#F6F8FA",{roughness:1}));e.rotation.x=-Math.PI/2,e.position.y=-14,n.add(e);let i=Nt(9);for(let l=0;l<40;l++){let c=Yt("#FFFFFF",18+i()*14,.55);c.position.set((i()-.5)*300,-12+i()*3,-40-i()*200),n.add(c)}for(let l=0;l<6;l++){let c=10+i()*8,h=new k(new mn(8+i()*6,c,6),w("#8A8EA0"));h.position.set(-60+l*24,-14+c/2,-90-i()*40),n.add(h);let d=new k(new mn(3,c*.3,6),w("#F4F6FA"));d.position.set(h.position.x,-14+c*.85,h.position.z),n.add(d)}let s=new k(new jt(4.5,9,14,9),w("#8A8070",{roughness:1}));s.position.set(0,-7,-1),n.add(s);let r=new k(new pn(4.6,9),w("#9A9070",{roughness:1}));r.rotation.x=-Math.PI/2,r.position.set(0,.01,-1),n.add(r);for(let l=0;l<10;l++){let c=new k(new ki(.3+i()*.4),w("#7A7262")),h=i()*6.28;c.position.set(Math.cos(h)*(3+i()),.1,-1+Math.sin(h)*(2.5+i())),!(c.position.z>1.2)&&n.add(c)}n.add(R(.5,1,.5,w("#C8C0A8"),-2.6,.5,-2.6));let o=R(.06,.9,.06,w("#3A3A40"),-2.6,1.45,-2.6);n.add(o),n.add(R(.5,.06,.06,w("#3A3A40"),-2.6,1.6,-2.6));let a=Dt(de(["PICO \xB7 2.130 m"],{bg:"#FBF7EC",fg:"#2A2A34",size:70,w:600,h:150}),1,.25);a.position.set(-2.6,.75,-2.34),n.add(a),n.add(new Mt("#EEF4FF","#8A8070",1.05)),n.add(re("#FFF0D0",3,[-8,18,10],12,60))};gt.sendero=(n,t)=>{n.fog=new wt("#C8D8C8",.02),ye(n,-200,700,260,[[0,"#5F96C8"],[.6,"#BFD4E0"],[1,"#EEF0E4"]]),hl(n,-60,"#7A8EAE"),cl(n,"#6E8A48");let e=new k(new bt(2.2,60),w("#B49A72",{roughness:1}));e.rotation.x=-Math.PI/2,e.position.set(0,.012,-20),n.add(e);let i=Nt(23);for(let s=0;s<30;s++){let r=i()<.5?-1:1;Ke(n,r*(2.6+i()*12),2-i()*30,1.2+i()*.7,ll,s)}for(let s=0;s<8;s++){let r=new k(new ki(.2+i()*.3),w("#8A8070"));r.position.set((i()<.5?-1:1)*(1.3+i()),.1,-i()*10),n.add(r)}n.add(new Mt("#E9EEFF","#5A6A4A",1)),n.add(re("#FFE2B0",2.6,[-10,16,10],16,70))};gt.comedor=(n,t)=>{n.background=new ht("#0E0A1E"),n.fog=new wt("#140E2A",.03),n.add(ai(20,14,"#6A4A30")),n.add(R(20,5,.3,w("#5A3A2A"),0,2.5,-4.2));for(let a of[-1,1])n.add(R(.3,5,14,w("#5A3A2A"),a*8,2.5,0));for(let a=0;a<9;a++)n.add(R(.12,5,.1,w("#3A2418"),-8+a*2,2.5,-4));let e=Dt(de(["FIESTA FIN DE CURSO"],{bg:"#E8447A",fg:"#FFFFFF",size:80,w:1100,h:170}),4,.62);e.position.set(0,3.6,-4),n.add(e);for(let a of[-5.2,5.2]){n.add(R(1,.08,4,w("#8E6242"),a,.78,-1.2));for(let[l,c]of[[-1,-2.8],[1,-2.8],[-1,.4],[1,.4]])n.add(R(.06,.78,.06,w("#3A2418"),a+l*.4,.39,c))}let i=[];for(let a=0;a<26;a++){let l=-7+a*.56,c=Yt(["#FF6A9A","#6AD8FF","#FFD84A","#9AFF8A"][a%4],.35,.9);c.position.set(l,3-Math.sin(a/25*Math.PI)*.5,-3.8),n.add(c),i.push(c)}let s=new k(new pn(2.8,48),new Ft({color:"#2A2240",roughness:.2,metalness:.4,emissive:"#4A2A7A",emissiveIntensity:.35}));s.rotation.x=-Math.PI/2,s.position.set(0,.015,-.8),n.add(s);let r=[];for(let[a,l]of[["#FF3A8A",-3],["#3AB8FF",0],["#FFD83A",3]]){let c=new Qt(a,10,9,1.4);c.position.set(l,3.2,0),n.add(c),r.push(c)}n.add(new Mt("#8A7AC8","#20142A",.55));let o=new On("#FFE8F0",30,14,.6,.6,1.2);o.position.set(0,6,3),o.target.position.set(0,0,-.8),o.castShadow=!0,n.add(o,o.target),n.userData.disco=a=>{r.forEach((l,c)=>{l.position.x=Math.sin(a*.9+c*2.1)*3.5,l.intensity=8+Math.sin(a*5+c)*3}),i.forEach((l,c)=>l.material.opacity=.55+.45*Math.sin(a*4+c))}};gt.salida=(n,t)=>{let e=!!t.dusk,i=!!t.manana;gt.barrio(n,{dusk:e});let s=kf("#F2C14E");s.rotation.y=Math.PI/2,s.position.set(1,0,-3.4),n.add(s);let r=Dt(de(["VIAJE FIN DE CURSO"],{bg:"#2F5A9A",fg:"#FFFFFF",size:70,w:900,h:140}),2.6,.4);if(r.position.set(1,2.3,-2.18),n.add(r),i){let o=new si("#FFD0A0",.8);o.position.set(10,3,6),n.add(o)}};var vo=(n,t,e=200,i=200,s={})=>{let r=new k(new bt(e,i),w(t,{roughness:1,...s}));return r.rotation.x=-Math.PI/2,r.receiveShadow=!0,n.add(r),r},Ao=(n,t=1.6)=>new Ft({color:n,emissive:n,emissiveIntensity:t});function $f(n=2.6){let t=new at,e=It(1024,300,s=>{s.clearRect(0,0,1024,300),s.fillStyle="#E2231A",s.beginPath(),s.roundRect(10,30,780,240,60),s.fill(),s.fillStyle="#fff",s.font="900 112px Inter",s.textAlign="center",s.textBaseline="middle",s.fillText("SUSCR\xCDBETE",400,156),s.fillStyle="#F2C14E",s.beginPath(),s.arc(910,150,100,0,7),s.fill(),s.fillStyle="#2A2A34",s.beginPath(),s.moveTo(860,190),s.quadraticCurveTo(870,80,910,78),s.quadraticCurveTo(950,80,960,190),s.closePath(),s.fill(),s.fillRect(850,186,120,16),s.beginPath(),s.arc(910,214,14,0,7),s.fill(),s.beginPath(),s.arc(910,70,10,0,7),s.fill()}),i=Dt(e,n,n*300/1024,{blend:!0});return i.renderOrder=6,t.add(i),t.userData.m=i,t}function Ey(n="#FFB25A"){let t=new at,e=new k(new jt(.16,.12,.34,12),Ao(n,1.8));t.add(e);let i=Yt(n,1,.55);return t.add(i),t}var yy=(n,t,e,i=3)=>{let s=Nt(i),r=["#F2A8C8","#FBF7EC","#F2C14E","#B48AE8","#E8667F"];for(let o=0;o<t;o++){let a=new k(new Le(.07+s()*.06,10,8),Ao(r[o%5],.4));a.position.set((s()-.5)*e[0],.06,e[2]-s()*e[1]),n.add(a);let l=R(.02,.12,.02,w("#3E8A52"),a.position.x,.02,a.position.z,!1);n.add(l)}};gt.desvan=(n,t)=>{let e=!!t.night;n.background=new ht("#1A120C"),n.fog=new wt("#2A1C12",.05),n.add(ai(16,14,"#6A4630"));for(let h of[-1,1]){let d=R(16,.15,7.5,w("#5A3A26",{roughness:.9}),0,0,0);d.position.set(0,3.3,-1.2+h*2.3),d.rotation.x=h*-.62,d.position.y=3.2,d.position.z=h>0?2.4:-4.4,d.rotation.x=h>0?.62:-.62,h<0&&n.add(d)}n.add(R(16,6,.2,w("#4E3422",{roughness:1}),0,2.5,-4.6));for(let h=0;h<6;h++){let d=R(.22,.22,9,w("#3A2618"),-6+h*2.4,4.4,-1);n.add(d)}let i=Nt(6);for(let h=0;h<9;h++){let d=Wf(.5+i()*.5);d.position.set(-5+i()*10,0,-3.6+i()*1.2),d.rotation.y=i(),Math.abs(d.position.x)>1.4&&n.add(d)}let s=R(1.4,.8,.7,w("#6A3A22",{roughness:.7}),-3.2,.4,-2.2);n.add(s),n.add(R(1.44,.1,.74,w("#C9A06A",{metalness:.4}),-3.2,.55,-2.2));let r=Xe(.9,.9,e?"#5A6AA8":"#FFE2A8",e?.6:1.6);r.position.set(2.6,2.9,-4.48),n.add(r);let o=Ds(1.4,7,e?"#9FB0FF":"#FFD9A0",e?.08:.2);o.position.set(1.6,1.7,-2.6),o.rotation.set(-.2,0,-.75),n.add(o);let a=new k(new Le(.09,12,10),Ao("#FFD089",2));a.position.set(0,3.1,-1.2),n.add(a),n.add(R(.01,1.2,.01,"#111",0,3.75,-1.2,!1));let l=new Qt("#FFB66E",9,9,1.4);l.position.set(0,3,-1),l.castShadow=!0,n.add(l),n.add(new Mt("#FFD8A8","#3A2418",.55));let c=[];for(let h=0;h<40;h++){let d=Yt("#FFE8C0",.05,.6);d.position.set(.5+i()*2.4,.6+i()*2.6,-3+i()*2.6),n.add(d),c.push(d)}n.userData.dust=c};gt.pasillo=(n,t)=>{n.background=new ht("#1A1036"),n.fog=new wt("#2A1850",.045),Sn(n,1600,120,7),vo(n,"#C8A8E8",8,120,{roughness:.9}).position.z=-40;let e=Nt(11),i=["#E8667F","#36AEA2","#F2C14E","#4A86C7","#7F6BC4","#F2913A","#5FB04A"];for(let u=0;u<26;u++)for(let f of[-1,1]){let g=-2-u*2.2,E=i[(u*2+(f>0?1:0))%i.length],m=R(.12,2.6,1.3,w("#F4ECD6"),f*2.4,1.3,g);n.add(m);let p=R(.08,2.3,1.05,w(E,{roughness:.6}),f*2.35,1.15,g);n.add(p);let v=new k(new Le(.05,8,6),Ao("#F2C14E",.6));v.position.set(f*2.29,1.1,g+.35),n.add(v)}let s=new at,r=new at;r.position.set(0,0,.55),s.add(r);let o=R(.08,2.3,1.05,w("#F2A8C8",{roughness:.5}),0,1.15,-.525);r.add(o);let a=new k(new Le(.05,8,6),Ao("#F2C14E",.8));a.position.set(-.06,1.1,-.9),r.add(a);let l=Dt(de(["SARA"],{bg:"#FBF7EC",fg:"#C9361F",size:110,w:400,h:160}),.6,.24);l.position.set(-.06,1.85,-.525),l.rotation.y=-Math.PI/2,r.add(l);let c=Xe(.04,2.3,"#FFF0C8",2.2);c.rotation.y=-Math.PI/2,c.position.set(.05,1.15,-.525),s.add(c),s.position.set(2.35,0,-8.6),n.add(s),n.userData.door=r,n.userData.doorPos=[2.35,0,-8.6];for(let u=0;u<14;u++){let f=Yt(["#FFB2E0","#B2D8FF","#FFF2B0"][u%3],.25+e()*.3,.7);f.position.set((e()-.5)*4,.5+e()*3,-1-e()*30),n.add(f)}n.add(new Mt("#D8C8FF","#4A3070",1));let h=new Qt("#FFE0F0",14,14,1.4);h.position.set(0,3,-4),n.add(h);let d=new Qt("#B8C8FF",10,14,1.4);d.position.set(0,3,-12),n.add(d)};gt.playaSueno=(n,t)=>{n.fog=new wt("#E8B8E0",.018),ye(n,-120,600,240,[[0,"#6A4AB8"],[.45,"#C88AD8"],[.75,"#F6B8C8"],[1,"#FFE2D0"]]);let e=Yt("#FFF6E0",16,.9);e.position.set(10,22,-110),e.material.fog=!1,n.add(e);let i=new k(new pn(4,40),new pe({color:"#FFF6E8",fog:!1}));i.position.set(10,22,-112),n.add(i);let s=vo(n,"#F8EEF2",200,200),r=new k(new bt(400,200),new Ft({color:"#B48AE8",roughness:.12,metalness:.35,emissive:"#6A3AA8",emissiveIntensity:.25}));r.rotation.x=-Math.PI/2,r.position.set(0,.03,-104),n.add(r),n.userData.sea=r;let o=R(400,.02,.3,w("#FFFFFF",{roughness:.5}),0,.04,-4.1,!1);n.add(o),n.userData.foam=o;let a=Nt(4);for(let l=0;l<70;l++){let c=Yt("#FFFFFF",.08+a()*.1,.8);c.position.set((a()-.5)*16,.05,2-a()*6),n.add(c)}for(let l=0;l<4;l++){let c=new at;c.add(R(.18,2.8,.18,w("#E8A0C0"),0,1.4,0));let h=Yt(["#7FD08A","#F2C14E","#5AC8FF","#FF8AC8"][l],1.6,.8);h.position.y=3,c.add(h),c.position.set([-6,-3.6,4.5,7][l],0,[-2.6,-3.4,-3,-2][l]),n.add(c)}n.add(new Mt("#FFE0F6","#B88AC8",1.15)),n.add(re("#FFD8E8",2,[8,14,-6],14,60))};gt.baile=(n,t)=>{n.background=new ht("#0E0A28"),n.fog=new wt("#1A1240",.03),Sn(n,2400,160,3),ye(n,-100,500,200,[[0,"#0A0820"],[.6,"#2A1A58"],[1,"#6A3A78"]]),vo(n,"#3A2A5A");let e=new k(new pn(3.2,48),new Ft({color:"#F4E8F8",roughness:.25,metalness:.2,emissive:"#8A6AB8",emissiveIntensity:.25}));e.rotation.x=-Math.PI/2,e.position.set(0,.02,-1),e.receiveShadow=!0,n.add(e),yy(n,260,[16,12,3]);for(let[a,l]of[[-4.2,-2.4],[4.2,-2.4],[-5.2,-5],[5.2,-5],[0,-6]]){let c=al();c.position.set(a,0,l),n.add(c)}let i=Nt(9),s=[];for(let a=0;a<22;a++){let l=Ey(["#FFB25A","#FF8A6A","#FFD27A"][a%3]);l.position.set((i()-.5)*12,2.6+i()*4,-1-i()*9),l.userData.y0=l.position.y,l.userData.ph=i()*6,n.add(l),s.push(l)}n.userData.farol=s,n.add(new Mt("#B8A8FF","#2A1A3A",.7));let r=new On("#FFE2C8",50,20,.6,.6,1.2);r.position.set(0,8,3),r.target.position.set(0,0,-1),r.castShadow=!0,n.add(r,r.target);let o=new Qt("#FFB25A",8,12,1.5);o.position.set(0,3.5,-2),n.add(o)};gt.estadio=(n,t)=>{n.background=new ht("#0A1020"),n.fog=new wt("#18203A",.02),Sn(n,800,160,5);let e=It(512,512,h=>{for(let d=0;d<8;d++)h.fillStyle=d%2?"#3E8A3E":"#4A9A46",h.fillRect(0,d*64,512,64);h.strokeStyle="#F4F4F4",h.lineWidth=6,h.strokeRect(20,20,472,472),h.beginPath(),h.moveTo(20,256),h.lineTo(492,256),h.stroke(),h.beginPath(),h.arc(256,256,60,0,7),h.stroke()}),i=new k(new bt(40,40),new Ft({map:e,roughness:.9}));i.rotation.x=-Math.PI/2,i.position.z=-14,i.receiveShadow=!0,n.add(i);let s=new at,r=w("#FFFFFF",{roughness:.4});s.add(R(.12,2.4,.12,r,-3.6,1.2,0),R(.12,2.4,.12,r,3.6,1.2,0),R(7.3,.12,.12,r,0,2.4,0));let o=new k(new bt(7.2,2.4),new pe({color:"#FFFFFF",transparent:!0,opacity:.18,side:Se}));o.position.set(0,1.2,-1),s.add(o),s.position.set(0,0,-7),n.add(s);for(let h=0;h<4;h++)n.add(R(60,1,2,w(["#2A3A6A","#3A2A5A","#2A3A6A","#3A2A5A"][h]),0,.5+h*1.1,-14-h*2));let a=[],l=Nt(2);for(let h=0;h<4;h++)for(let d=0;d<48;d++)a.push([-24+d+l()*.4,1+h*1.1,-14-h*2]);Qh(n,a,{h:1.3,tint:"#C8C8E8",raised:.7});for(let h of[-1,1]){let d=Yt("#FFFFFF",6,.9);d.position.set(h*16,14,-20),n.add(d)}n.add(new Mt("#D8E0FF","#2A3A2A",1));let c=re("#FFFFFF",2.6,[6,16,8],14,60);n.add(c)};gt.concierto=(n,t)=>{n.background=new ht("#0C0820"),n.fog=new wt("#140C2C",.025);let e=R(14,.6,6,w("#2A1E48",{metalness:.3,roughness:.4}),0,.3,-2.5);e.receiveShadow=!0,n.add(e),vo(n,"#140E26").position.y=-.01;let i=Xe(14,6,"#3A1E6A",.5);i.position.set(0,3.6,-5.5),n.add(i);let s=Nt(4);for(let l=0;l<9;l++){let c=Yt(["#FF5A9A","#5AC8FF","#F2C14E"][l%3],1.2,.9);c.position.set(-6+l*1.5,6,-5),n.add(c);let h=Ds(1.2,8,["#FF5A9A","#5AC8FF","#F2C14E"][l%3],.1);h.position.set(-6+l*1.5,3,-4.5),h.rotation.z=(l-4)*.08,n.add(h)}let r=new at;r.add(R(.03,1.4,.03,w("#2A2A30",{metalness:.6}),0,.7+.6,0));let o=new k(new Le(.06,12,10),w("#888",{metalness:.8}));o.position.y=2.05,r.add(o),r.position.set(.5,0,-.6),n.add(r);for(let l=0;l<40;l++){let c=Yt(["#FFF2C0","#B8E0FF","#FFB2E0"][l%3],.18,.8);c.position.set(-7+s()*14,1.2+s()*1.2,2.5+s()*3),n.add(c)}n.add(new Mt("#B8A8FF","#2A1A3A",.8));let a=new On("#FFF2D8",70,22,.45,.5,1.2);a.position.set(0,9,4),a.target.position.set(0,.6,-.6),a.castShadow=!0,n.add(a,a.target)};gt.gris=(n,t)=>{n.background=new ht("#1C1E24"),n.fog=new wt("#262830",.06),vo(n,"#4A4C54"),n.add(R(14,7,.2,w("#5A5C64",{roughness:1}),0,3.5,-4)),n.add(R(.2,7,12,w("#52545C",{roughness:1}),-4.2,3.5,0)),n.add(R(.2,7,12,w("#52545C",{roughness:1}),4.2,3.5,0));let e=Xe(1.2,1.4,"#8A94A8",.35);e.position.set(1.8,2.8,-3.88),n.add(e);for(let r of[1.8])n.add(R(.06,1.4,.05,"#3A3C44",r,2.8,-3.86)),n.add(R(1.2,.06,.05,"#3A3C44",r,2.8,-3.86));n.add(new Mt("#A8B0C8","#2A2A30",.6));let i=new On("#C8D0E8",28,14,.5,.7,1.3);i.position.set(-1.4,6,1),i.target.position.set(-2.6,0,-2.8),i.castShadow=!0,n.add(i,i.target);let s=new Qt("#FFD8A0",0,10,1.2);s.position.set(-2,2.4,-1.4),n.add(s),n.userData.warm=s};gt.labSueno=(n,t)=>{gt.lab(n,t),Nf(n,-1.4,-1.6,"#4A86C7");let e=new at;e.add(R(.12,1.4,.12,w("#3A3A44"),0,.7,0)),e.add(R(1,.7,.1,w("#20242E"),0,1.7,0));let i=Xe(.9,.6,"#7FD08A",.6);i.position.set(0,1.7,.06),e.add(i),e.position.set(1,0,-2.4),e.rotation.y=-.4,n.add(e),n.userData.mon=i};var dl=(n,t,e=200,i=200,s={})=>{let r=new k(new bt(e,i),w(t,{roughness:1,...s}));return r.rotation.x=-Math.PI/2,r.receiveShadow=!0,n.add(r),r},Jf=(n,t=1.6)=>new Ft({color:n,emissive:n,emissiveIntensity:t}),Ay=(n="#8C8A84",t=3)=>{let e=It(512,512,i=>{i.fillStyle=n,i.fillRect(0,0,512,512);let s=Nt(t);for(let r=0;r<900;r++)i.fillStyle=`rgba(${s()<.5?"255,255,255":"0,0,0"},${s()*.07})`,i.fillRect(s()*512,s()*512,2+s()*6,2+s()*6);i.strokeStyle="rgba(0,0,0,.18)",i.lineWidth=3;for(let r=128;r<512;r+=128)i.beginPath(),i.moveTo(0,r),i.lineTo(512,r),i.stroke();for(let r=0;r<5;r++){i.strokeStyle="rgba(40,30,20,.12)",i.lineWidth=8,i.beginPath();let o=s()*512;i.moveTo(o,0),i.lineTo(o+(s()-.5)*30,140+s()*300),i.stroke()}});return e.wrapS=e.wrapT=fn,e},Ls=(n,t,e,i,s,r,o,a=3)=>{let l=Ay(o);l.repeat.set(Math.max(1,Math.max(n,e)/a),Math.max(1,t/a));let c=new k(new Cn(n,t,e),new Ft({map:l,roughness:.95}));return c.position.set(i,s,r),c.receiveShadow=!0,c.castShadow=!0,c};function vy(n="#B8B4A8"){let t=new at,e=new k(new jt(.09,.09,.22,18),w(n,{metalness:.6,roughness:.35}));e.position.y=.11,e.castShadow=!0,t.add(e);let i=new k(new jt(.092,.092,.12,18,1,!0),new Ft({map:It(256,64,s=>{s.fillStyle="#7A8A3A",s.fillRect(0,0,256,64),s.fillStyle="#F4E8C8",s.font="800 30px Inter",s.textAlign="center",s.fillText("JUD\xCDAS \xB7 1987",128,44)}),roughness:.7}));return i.position.y=.11,t.add(i),t}function _y(){let n=new at;n.add(R(1,.8,.6,w("#4A6A4A",{roughness:.6,metalness:.3}),0,.4,0)),n.add(R(.3,.3,.02,w("#222"),-.25,.5,.31));let t=new k(new Le(.04,10,8),Jf("#5AE05A",2.5));t.position.set(.3,.62,.31),n.add(t);for(let e=0;e<5;e++)n.add(R(.02,.4,.02,w("#2A3A2A"),.05+e*.06,.4,.31));return n.userData.led=t,n}function My(){let n=new at;n.add(R(.36,.5,.08,w("#3A3C3A",{metalness:.5}),0,0,0));let t=new at;t.position.set(0,0,.06),n.add(t);let e=R(.05,.4,.05,w("#9A9A9A",{metalness:.8,roughness:.3}),0,.2,0);t.add(e);let i=new k(new Le(.07,14,10),w("#D8251A",{roughness:.3}));return i.position.y=.42,t.add(i),t.rotation.x=-.5,n.userData.piv=t,n.userData.knob=i,n}function Sy(){let n=new at;n.add(R(8,2.4,2.5,w("#F2B830",{roughness:.5}),0,1.6,0)),n.add(R(8.02,.25,2.52,w("#2A2A2A"),0,.9,0));for(let e=0;e<7;e++)for(let i of[-1,1])n.add(R(.85,.7,.02,w("#9AC8E8",{metalness:.4,roughness:.15}),-3.3+e*1.05,2.1,i*1.26));for(let e of[-2.6,2.6])for(let i of[-1,1]){let s=new k(new jt(.45,.45,.3,16),w("#1A1A1A"));s.rotation.x=Math.PI/2,s.position.set(e,.45,i*1.2),n.add(s)}let t=Yt("#FFF2C0",.5,.9);return t.position.set(4.02,1.1,.8),n.add(t),n}function Qf(n,t,e={}){let i=de(n,{bg:"#3A4A2A",fg:"#F4E8C8",size:90,w:1100,h:260,...e});return Dt(i,t,t*(e.h||260)/(e.w||1100))}gt.bunker=(n,t)=>{let e=!!t.dark,i=!!t.open;n.background=new ht("#0E0F10"),n.fog=new wt(e?"#050608":"#2A2A28",e?.08:.045);let s=Ls(12,.2,10,0,-.1,-.5,"#6E6C66",2.5);n.add(s),n.add(Ls(12,4,.3,0,2,-3.55,"#8C8A84")),n.add(Ls(.3,4,10,-4.2,2,-.5,"#84827C")),n.add(Ls(.3,4,10,4.2,2,-.5,"#84827C")),n.add(Ls(12,.3,10,0,3.6,-.5,"#7A7872"));for(let b of[-2.4,0,2.4])n.add(R(.25,.3,10,w("#6A6862"),b,3.35,-.5));let r=new at;r.add(R(2,.2,.3,w("#5A5E5A",{metalness:.6,roughness:.4}),0,2.5,0),R(.2,2.6,.3,w("#5A5E5A",{metalness:.6,roughness:.4}),-.95,1.25,0),R(.2,2.6,.3,w("#5A5E5A",{metalness:.6,roughness:.4}),.95,1.25,0)),r.position.set(0,0,-3.36),n.add(r);let o=new at;o.position.set(-.85,0,-3.3),n.add(o);let a=w("#6E7670",{metalness:.7,roughness:.35}),l=R(1.7,2.4,.16,a,.85,1.2,0);o.add(l);for(let b of[.5,1.9])o.add(R(1.6,.08,.04,w("#5A605C",{metalness:.7}),.85,b,.1));let c=new k(new _n(.26,.035,8,28),w("#B8241A",{metalness:.4,roughness:.4}));c.position.set(.85,1.25,.14),o.add(c);for(let b=0;b<3;b++){let F=R(.5,.03,.03,w("#B8241A"),.85,1.25,.14);F.rotation.z=b*Math.PI/3,o.add(F)}o.rotation.y=i?-1.45:0,n.userData.door=o,n.userData.wheel=c;let h=My();h.position.set(1.55,1.45,-3.36),n.add(h),n.userData.lever=h.userData.piv,n.userData.leverKnob=h.userData.knob;let d=Dt(de(["\xA1NO TOCAR!"],{bg:"#F2C14E",fg:"#2A2A34",size:80,w:500,h:130}),.5,.13);d.position.set(1.55,1.82,-3.38),n.add(d);let u=b=>{let F=new at,S=w("#4A5450",{metalness:.6,roughness:.4});for(let _ of[-.45,.45])for(let I of[-1,1])F.add(R(.06,2.3,.06,S,_,1.15,I));for(let _ of[.45,1.6])F.add(R(.96,.06,2.1,S,0,_,0)),F.add(R(.86,.14,1.96,w("#7A8A6A",{roughness:1}),0,_+.1,0)),F.add(R(.5,.1,.3,w("#D8D2C0"),0,_+.21,-.8));return F.position.set(b,0,-1.1),F};n.add(u(-3.3)),n.add(u(3.3));let f=new at;for(let b of[.9,1.5])f.add(R(1.4,.05,.35,w("#5A4A3A"),0,b,0));for(let b of[-.7,.7])f.add(R(.05,1.6,.35,w("#5A4A3A"),b,.8,0));f.position.set(-2,0,-3.2),n.add(f);let g=[];for(let b=0;b<6;b++){let F=vy();F.position.set(-2.5+b%3*.26,b<3?.93:1.53,-3.2),f.parent.add(F),g.push(F)}n.userData.cans=g;let E=_y();E.position.set(2.6,0,-3),n.add(E),n.userData.gen=E.userData.led;let m=new at;m.add(R(.06,.7,.9,w("#3A3C3A",{metalness:.5}),0,0,0));for(let b=0;b<6;b++)m.add(R(.08,.04,.8,w("#5A5C5A",{metalness:.6}),.02,-.28+b*.11,0));if(m.position.set(-4.02,2.75,-1.1),n.add(m),t.mesa!==!1){n.add(R(1.4,.06,.8,w("#5A4632"),0,.75,.3));for(let b of[-.6,.6])for(let F of[-.32,.32])n.add(R(.05,.75,.05,w("#3A2E22"),b,.375,.3+F))}if(t.museo){let b=Qf(["MUSEO DE LA GUERRA FR\xCDA"],2.4,{size:80});b.position.set(-2,2.6,-3.38),n.add(b)}let p=Dt(It(360,480,b=>{b.fillStyle="#E8D8A0",b.fillRect(0,0,360,480),b.fillStyle="#7A2A1A",b.font="900 46px Fraunces",b.textAlign="center",b.fillText("REFUGIO",180,70),b.fillStyle="#3A3A2A",b.fillRect(80,140,200,140),b.fillStyle="#E8D8A0",b.beginPath(),b.moveTo(60,150),b.lineTo(180,90),b.lineTo(300,150),b.fill(),b.fillStyle="#7A2A1A",b.font="700 30px Inter",b.fillText("1962",180,340)}),.5,.66);p.position.set(2.6,2.3,-3.38),n.add(p);let v=[];for(let b of[-1.6,1.6]){let F=new k(new Le(.09,12,10),Jf("#FFD089",e?0:2.2));F.position.set(b,3.1,-.6),n.add(F),v.push(F),n.add(R(.22,.02,.22,w("#333"),b,3.2,-.6,!1))}let A=[];if(!e)for(let b of[-1.6,1.6]){let F=new Qt("#FFC27A",11,10,1.4);F.position.set(b,2.9,-.4),F.castShadow=b<0,n.add(F),A.push(F)}let y=new Mt(e?"#3A4A6A":"#E8DCC8",e?"#0A0A0E":"#3A3430",e?.12:.55);if(n.add(y),n.userData.lights=A,n.userData.bulbs=v,n.userData.hemi=y,i){let b=Xe(1.7,2.4,"#FFF4D8",3.2);b.position.set(0,1.2,-3.5),n.add(b);let F=Ds(2.2,8,"#FFE8B8",.3);F.position.set(0,1.4,-.6),F.rotation.set(-1.25,0,0),n.add(F);let S=new On("#FFF0D0",60,14,.6,.6,1.2);S.position.set(0,2.2,-3.6),S.target.position.set(0,0,1.5),S.castShadow=!0,n.add(S,S.target),n.userData.sunObjs=[b,F,S]}let D=Nt(5),C=[];for(let b=0;b<26;b++){let F=Yt("#FFE8C0",.04,e?.2:.5);F.position.set((D()-.5)*6,.5+D()*2.6,-3+D()*4),n.add(F),C.push(F)}n.userData.dust=C};gt.bosqueBunker=(n,t)=>{let e=!!t.storm;n.fog=new wt(e?"#1A1E28":"#C8D0B8",e?.045:.022),ye(n,-100,500,200,e?[[0,"#05070C"],[.6,"#1A2030"],[1,"#2A3040"]]:[[0,"#8AA8C0"],[.7,"#C8D4C8"],[1,"#E8E4C8"]]),dl(n,e?"#2A3A24":"#6E8A48");let i=Nt(14);for(let a=0;a<30;a++){let l=(i()-.5)*34,c=-3-i()*24;Math.abs(l)<4&&c>-9||Ke(n,l,c,1.2+i()*.8,e?["#1E2E1E","#24381F","#2E4628","#3A4A2A"]:["#3E5F3A","#4F7A44","#6E9A50","#A9B65A"],a)}let s=new k(new Le(3.2,24,12,0,Math.PI*2,0,Math.PI/2),w(e?"#3A4A30":"#6E8A50",{roughness:1}));s.scale.set(1.3,.7,1),s.position.set(0,0,-6.5),n.add(s),n.add(Ls(3.2,2.6,.8,0,1.3,-4,"#8C8A84")),n.add(R(1.5,2,.1,w("#5E6660",{metalness:.6,roughness:.4}),0,1,-3.56));let r=Qf(["MUSEO DE LA GUERRA FR\xCDA"],3,{size:84});r.position.set(0,2.95,-3.55),n.add(r);let o=Sy();if(o.position.set(t.busX??6.5,0,-1.4),o.rotation.y=Math.PI,n.add(o),n.userData.bus=o,e){n.add(new Mt("#6A7A9A","#1A1E1A",.75));let a=new Mt("#DDE6FF","#5A6070",0);n.add(a),n.userData.flash=a;let l=re("#7A8AB8",.5,[-8,14,8],14,60);n.add(l);let c=[],h=new pe({color:"#AFC4E8",transparent:!0,opacity:.45});for(let d=0;d<260;d++){let u=new k(new Cn(.012,.45,.012),h);u.userData.p=[(i()-.5)*16,i()*8,4-i()*14,i()],n.add(u),c.push(u)}n.userData.rain=d=>c.forEach(u=>{let[f,g,E,m]=u.userData.p;u.position.set(f+(d*1.2+m)%1*-.3,7-(g+d*14)%8,E),u.rotation.z=.12})}else n.add(new Mt("#E9EEFF","#5A6A4A",.95)),n.add(re("#FFD29A",2.6,[-12,16,10],16,70))};gt.puente=(n,t)=>{let e=!!t.normal;n.fog=new wt("#C8D8E0",e?.02:.012),ye(n,-200,700,260,[[0,"#5F96C8"],[.6,"#BFD4E0"],[1,"#EEF0E4"]]),n.add(new Mt("#E9EEFF","#5A6A4A",1)),n.add(re("#FFE2B0",2.6,[-10,18,12],16,80));let i=Nt(21),s=["#2E4F2C","#3B6636","#55813F","#A9B65A"];if(e){dl(n,"#6E8A48");let l=new k(new bt(3.4,60),w("#5A8AB0",{roughness:.15,metalness:.3}));l.rotation.x=-Math.PI/2,l.position.set(0,.02,-10),n.add(l),n.add(R(1.4,.14,5,w("#8E6242"),0,.35,0));for(let c of[-1,1]){n.add(R(.08,.5,5,w("#6A4630"),c*.66,.65,0));for(let h=0;h<5;h++)n.add(R(.1,.6,.1,w("#6A4630"),c*.66,.3,-2+h))}for(let c=0;c<16;c++)Ke(n,(i()<.5?-1:1)*(4+i()*10),-2-i()*20,1.2+i()*.6,s,c);n.userData.y=.42;return}for(let l of[-1,1]){let c=Ls(20,40,30,l*16,-20,-6,"#8A7A62",6);n.add(c),dl(n,"#6E8A48",20,30).position.set(l*16,.01,-6);for(let d=0;d<8;d++)Ke(n,l*(8+i()*10),-4-i()*18,1.2+i()*.6,s,d+(l>0?9:0))}let r=new k(new bt(14,200),new Ft({color:"#4A8AB0",roughness:.2,metalness:.3,emissive:"#1A3A50",emissiveIntensity:.3}));r.rotation.x=-Math.PI/2,r.position.set(0,-38,-40),n.add(r);for(let l=0;l<8;l++){let c=new k(new ki(1.5+i()*2),w("#7A6A52"));c.position.set((i()-.5)*10,-38,-10-i()*60),n.add(c)}let o=l=>-.55*(1-(l/6)**2);n.userData.sag=o;let a=w("#9A7448",{roughness:.9});for(let l=0;l<=40;l++){let c=-6+l*.3,h=R(.22,.05,1.1,a,c,o(c),0);h.rotation.z=Math.atan(.55*2*c/36),n.add(h)}for(let l of[-1,1]){let c=[];for(let d=0;d<=24;d++){let u=-6+d*.5;c.push(new P(u,o(u)+1,l*.55))}let h=new k(new Sr(new bs(c),60,.025,6),w("#C8B088"));n.add(h);for(let d=0;d<=24;d+=2){let u=-6+d*.5;n.add(R(.015,1,.015,w("#C8B088"),u,o(u)+.5,l*.55))}for(let d of[-6.1,6.1])n.add(R(.18,1.6,.18,w("#6A4630"),d,.8,l*.55))}n.userData.y=0};gt.marte=(n,t)=>{n.background=new ht("#10141A"),n.fog=new wt("#1A2028",.05);let e=new k(new jt(2.4,2.4,30,28,1,!0),new Ft({color:"#C8CCD0",side:ln,roughness:.6,metalness:.2}));e.rotation.x=Math.PI/2,e.position.set(0,1.9,-10),n.add(e),n.add(R(3.6,.1,30,w("#6A707A",{metalness:.4}),0,0,-10));for(let r=0;r<10;r++){let o=new k(new _n(2.38,.05,6,28),w("#8A9098",{metalness:.6}));o.position.set(0,1.9,2-r*3),n.add(o);let a=Xe(1,.2,"#DDEEFF",1.6);a.rotation.x=Math.PI/2,a.position.set(0,4.2,1-r*3),n.add(a)}for(let r of[-1,1])for(let o=0;o<4;o++){n.add(R(.6,.5,1.8,w("#7A8A9A"),r*1.5,.45,-1-o*3)),n.add(R(.05,.6,.5,w("#2A3A4A"),r*1.75,1.6,-o*3));let a=Xe(.5,.32,["#7FD08A","#5AC8FF"][o%2],.6);a.rotation.y=-r*Math.PI/2,a.position.set(r*1.72,1.6,-o*3),n.add(a)}let i=Dt(de(["MARS-500 \xB7 MOSC\xDA"],{bg:"#2A3A6A",fg:"#FFFFFF",size:80,w:900,h:150}),2,.33);i.position.set(0,3,-6),n.add(i),n.add(new Mt("#E8F0FF","#4A505A",.9));let s=new Qt("#E8F0FF",12,12,1.4);s.position.set(0,3,0),n.add(s)};gt.biosfera=(n,t)=>{n.fog=new wt("#F2D8B0",.012),ye(n,-200,700,260,[[0,"#5F96C8"],[.6,"#F0C890"],[1,"#FFE2B8"]]),dl(n,"#D8B07A");let e=Nt(31);for(let l=0;l<8;l++){let c=new k(new mn(8+e()*8,6+e()*6,6),w("#C88A5A",{roughness:1}));c.position.set(-60+l*18,0,-70-e()*30),n.add(c)}for(let l=0;l<9;l++){let c=new at;c.add(R(.3,1.6+e(),.3,w("#4A8A4A"),0,.8,0)),c.position.set((e()-.5)*20,0,1-e()*6),Math.abs(c.position.x)>3&&n.add(c)}let i=new Ft({color:"#CFE8F0",transparent:!0,opacity:.32,roughness:.05,metalness:.5,side:Se}),s=new pe({color:"#F4F4F0",wireframe:!0}),r=(l,c,h)=>{let d=new mn(l,l*1.1,4,4);for(let u of[i,s]){let f=new k(d,u);f.rotation.y=Math.PI/4,f.position.set(c,l*.55,h),n.add(f)}};r(5,-3,-12),r(3.4,5,-10);let o=new Le(3.6,20,10,0,Math.PI*2,0,Math.PI/2);for(let l of[i,s]){let c=new k(o,l);c.position.set(11,0,-14),n.add(c)}for(let l=0;l<10;l++)Ke(n,-6+e()*6,-10-e()*4,.7+e()*.5,["#2E5F2C","#3B7636","#55913F","#A9C65A"],50+l);let a=Dt(de(["BIOSFERA 2 \xB7 ARIZONA"],{bg:"#2A2A34",fg:"#F2C14E",size:80,w:1e3,h:150}),2.4,.36);a.position.set(-1,4.6,-6),n.add(a),n.userData.tag=a,n.add(new Mt("#FFF0DC","#B08A6A",1.05)),n.add(re("#FFD29A",3,[-14,16,10],20,70))};gt.noria=(n,t)=>{gt.parque(n,{dusk:!0});let e=new at,i=w("#E8E2D2",{metalness:.4,roughness:.4}),s=new k(new _n(5,.08,8,60),i);e.add(s);let r=s.clone();r.scale.setScalar(.7),e.add(r);for(let a=0;a<12;a++){let l=R(10,.06,.06,i,0,0,0);l.rotation.z=a*Math.PI/12,e.add(l)}let o=[];for(let a=0;a<12;a++){let l=a*Math.PI/6,c=new at;c.add(R(.7,.6,.6,w(["#E8667F","#F2C14E","#4A86C7","#36AEA2"][a%4]),0,-.35,0)),c.position.set(Math.cos(l)*5,Math.sin(l)*5,0),e.add(c),o.push(c);let h=Yt("#FFE2A8",.6,.8);h.position.set(Math.cos(l)*5,Math.sin(l)*5,.1),e.add(h)}e.position.set(2.5,6.2,-9),n.add(e);for(let a of[-1,1]){let l=R(.2,7.5,.2,i,2.5+a*1.8,3.2,-9);l.rotation.z=a*.25,n.add(l)}n.userData.wheel=e,n.userData.cabs=o};var _o=(n,t=1.6)=>new Ft({color:n,emissive:n,emissiveIntensity:t}),qn=(n="#A8ACB0")=>w(n,{metalness:.75,roughness:.32}),ul=(n="#9EA2A6")=>{let t=It(256,256,e=>{e.fillStyle=n,e.fillRect(0,0,256,256);let i=Nt(7);for(let s=0;s<500;s++)e.fillStyle=`rgba(${i()<.5?"255,255,255":"0,0,0"},${i()*.06})`,e.fillRect(0,i()*256,256,1+i()*2)});return new Ft({map:t,metalness:.7,roughness:.35})},Kf=(n,t,e,i="#1A1C20",s="#FF5A3A",r=150)=>Dt(de([n],{bg:i,fg:s,size:r,w:300,h:200}),t,e);function jf(n=7){let t=document.createElement("canvas");t.width=256,t.height=160;let e=t.getContext("2d"),i=new Wn(t);i.colorSpace=Ye;let s=(o,a="")=>{e.fillStyle="#0C0D10",e.fillRect(0,0,256,160),e.fillStyle="#FF6A3A",e.font="700 110px 'IBM Plex Mono'",e.textAlign="center",e.fillText(String(o),150,122),a&&(e.font="700 70px Inter",e.fillText(a,50,110)),i.needsUpdate=!0};s(n);let r=new k(new bt(.5,.31),new pe({map:i,toneMapped:!1}));return r.userData.set=s,r}function Ty(){let n=new at;n.add(R(.36,.9,.03,qn("#8E9296"),0,0,0));let t=[];["12","11","10","9","8","7","6","5","4","3","2","1","0","\u25C0\u25B6"].forEach((o,a)=>{let l=new k(new jt(.04,.04,.02,16),_o("#F4E8C8",.15));l.rotation.x=Math.PI/2;let c=a%2,h=Math.floor(a/2);l.position.set(-.07+c*.14,.3-h*.085,.025),n.add(l);let d=Dt(de([o],{bg:"rgba(0,0,0,0)",fg:"#1A1A1A",size:120,w:200,h:160}),.055,.044);d.position.set(-.07+c*.14,.3-h*.085,.037),n.add(d),t.push(l)});let i=new k(new jt(.05,.05,.025,16),_o("#F2C14E",.3));i.rotation.x=Math.PI/2,i.position.set(0,-.33,.025),n.add(i);let s=Dt(de(["\u{1F514}"],{bg:"rgba(0,0,0,0)",fg:"#2A2A34",size:120,w:200,h:160}),.06,.048);s.position.set(0,-.33,.04),n.add(s);let r=new at;for(let o=0;o<5;o++)r.add(R(.16,.012,.01,w("#2A2A2A"),0,-.03*o,.02));return r.position.set(0,-.18,0),n.add(r),n.userData.btns=t,n.userData.alarm=i,n}gt.ascensor=(n,t)=>{n.background=new ht("#08090C"),n.fog=new wt("#08090C",.03);let e=1.2,i=-1.6,s=2.8,r=ul("#A4A8AC"),o=R(2.6,.1,2.4,w("#3A3634",{roughness:.8}),0,-.05,-.4);o.receiveShadow=!0,n.add(o);let a=new k(new bt(2.4,2),new Ft({map:(()=>{let C=It(256,256,b=>{b.fillStyle="#4A4440",b.fillRect(0,0,256,256),b.strokeStyle="#3A3430",b.lineWidth=3;for(let F=0;F<256;F+=32)b.beginPath(),b.moveTo(F,0),b.lineTo(F,256),b.stroke(),b.beginPath(),b.moveTo(0,F),b.lineTo(256,F),b.stroke()});return C.wrapS=C.wrapT=fn,C.repeat.set(3,3),C})(),roughness:.7}));a.rotation.x=-Math.PI/2,a.position.set(0,.005,-.6),a.receiveShadow=!0,n.add(a),n.add(R(.08,s,2.4,r,-e-.04,s/2,-.4)),n.add(R(.08,s,2.4,r,e+.04,s/2,-.4)),n.add(R(2.6,.08,2.4,w("#5A5E62",{metalness:.4,roughness:.5}),0,s+.04,-.4)),n.add(R(.65,s,.08,r,-e+.325-.02,s/2,i)),n.add(R(.65,s,.08,r,e-.325+.02,s/2,i)),n.add(R(1.2,s-2.2,.08,r,0,2.2+(s-2.2)/2,i));let l=qn("#B4B8BC"),c=R(.56,2.2,.04,l,-.28,1.1,i+.03),h=R(.56,2.2,.04,l,.28,1.1,i+.03);n.add(c,h),n.add(R(.01,2.2,.045,w("#555"),0,1.1,i+.04));let d=R(1.1,2.2,.02,w("#050505"),0,1.1,i-.02);n.add(d),n.userData.doors=C=>{c.position.x=-.28-.55*C,h.position.x=.28+.55*C};let u=jf(t.piso??7);u.position.set(0,2.5,i+.05),n.add(u),n.userData.display=u;let f=Ty();f.position.set(.85,1.25,i+.05),n.add(f),n.userData.botonera=f;for(let C of[-1,1])n.add(R(.04,.04,1.8,qn("#C8CCD0"),C*(e-.06),.95,-.5));let g=new k(new bt(1.5,1.5),new Ft({color:"#C8D4DC",metalness:.9,roughness:.08,emissive:"#22303A",emissiveIntensity:.35}));g.rotation.y=Math.PI/2,g.position.set(-e+.005,1.55,-.6),n.add(g),n.userData.mirror=g,n.add(R(.02,1.56,1.56,w("#6A6E72",{metalness:.6}),-e+.001,1.55,-.6));let E=Dt(de(["M\xC1X. 6 PERSONAS \xB7 450 KG"],{bg:"#2A2C30",fg:"#D8DCE0",size:44,w:600,h:90}),.5,.075);E.position.set(.85,1.82,i+.05),n.add(E);let m=Xe(1.6,.9,"#FFF6E8",1.6);m.rotation.x=Math.PI/2,m.position.set(0,s-.01,-.5),n.add(m);let p=new Qt("#FFF4E4",10,7,1.4);p.position.set(0,s-.3,-.3),p.castShadow=!0,n.add(p);let v=new k(new Cn(.3,.06,.14),_o("#FFB040",0));v.position.set(-.7,s-.05,-1.3),n.add(v);let A=new Qt("#FFA840",0,6,1.4);A.position.set(-.6,s-.4,-1),n.add(A);let y=new Mt("#E8ECF0","#3A3634",.5);n.add(y);let D=new Qt("#FFE8C8",0,8,1.6);D.position.set(0,1.8,2.4),n.add(D),n.userData.luz=(C,b=0)=>{let F=Math.max(0,Math.min(1,C))*(1-b);m.material.emissiveIntensity=1.6*F,p.intensity=10*F,v.material.emissiveIntensity=2.4*(1-F),A.intensity=9*(1-F),y.intensity=.14+.36*F,y.color.set(F>.5?"#E8ECF0":"#FFC890"),D.intensity=3.2*(1-F)},n.userData.luz(t.luz??1)};gt.rellano=(n,t)=>{let e=!!t.night;n.background=new ht("#14120F"),n.fog=new wt("#2A2620",.035),n.add(Ai(14,10,t.portal?"#D8D0C0":"#B8A890",t.portal?"#C8C0B0":"#A89880",8));let i=t.portal?"#E8E0D0":"#D8C8A8";n.add(R(6.38,3.4,.3,w(i),-3.81,1.7,-3.2)),n.add(R(6.38,3.4,.3,w(i),3.81,1.7,-3.2)),n.add(R(1.24,1.2,.3,w(i),0,2.8,-3.2)),n.add(R(.3,3.4,10,w(i),-5,1.7,0)),n.add(R(.3,3.4,10,w(i),5,1.7,0)),n.add(R(14,.2,10,w("#F0EAE0"),0,3.4,0));for(let E of[-1,1])n.add(R(6.3,.9,.02,w(t.portal?"#8A6A4A":"#9A7A5A"),E*3.85,.45,-3.04));n.add(R(1.5,.12,.1,qn("#9EA2A6"),0,2.26,-3.02));for(let E of[-1,1])n.add(R(.12,2.3,.1,qn("#9EA2A6"),E*.69,1.13,-3.02));let s=new at;s.add(R(1.3,.05,1.6,w("#4A4440"),0,0,-.8)),s.add(R(1.3,2.2,.05,ul(),0,1.1,-1.6));for(let E of[-1,1])s.add(R(.05,2.2,1.6,ul(),E*.65,1.1,-.8));let r=Xe(1.1,1.2,"#FFF6E8",1.8);r.rotation.x=Math.PI/2,r.position.set(0,2.18,-.8),s.add(r),s.position.set(0,0,-3.05),n.add(s);let o=new Qt("#FFF4E4",0,5,1.4);o.position.set(0,1.8,-3.6),n.add(o);let a=qn("#B4B8BC"),l=R(.62,2.2,.05,a,-.31,1.1,-3),c=R(.62,2.2,.05,a,.31,1.1,-3);n.add(l,c),n.userData.doors=E=>{l.position.x=-.31-.6*E,c.position.x=.31+.6*E,o.intensity=8*E},n.userData.doors(t.open||0);let h=jf(t.piso??8);h.scale.setScalar(.8),h.position.set(0,2.55,-3.02),n.add(h),n.userData.display=h;let d=R(.1,.2,.03,qn(),.95,1.2,-3.03);n.add(d);let u=new k(new Le(.03,10,8),_o("#FFB040",1));u.position.set(.95,1.2,-3),n.add(u);let f=Kf(String(t.piso??8),.45,.3,"#2A2A34","#F2C14E");if(f.position.set(1.5,2.2,-3.03),n.add(f),t.portal){let E=new at;for(let p=0;p<12;p++)E.add(R(.36,.26,.04,w("#8E6242"),-.6+p%4*.4,-Math.floor(p/4)*.3,0)),E.add(R(.2,.02,.02,w("#2A2A2A"),-.6+p%4*.4,-Math.floor(p/4)*.3+.05,.03));E.position.set(-3,1.9,-3.03),n.add(E),n.add(R(.04,2.6,2,w("#9FC8E8",{transparent:!0,opacity:.35,metalness:.3,roughness:.1}),4.84,1.3,.5));let m=Dt(de(["PORTAL"],{bg:"#2A2A34",fg:"#F2C14E",size:80,w:400,h:120}),.8,.24);m.position.set(-3,2.6,-3.03),n.add(m)}else for(let[E,m]of[[-3.2,"A"],[3.2,"B"]]){n.add(R(1,2.2,.06,w("#6B4A33"),E,1.1,-3.02));let p=Dt(de([String(t.piso??8)+"\xBA"+m],{bg:"#C8A858",fg:"#2A2A34",size:70,w:240,h:110}),.3,.14);p.position.set(E,1.85,-2.98),n.add(p);let v=new k(new Le(.04,10,8),qn("#D8B860"));v.position.set(E+.38,1.05,-2.96),n.add(v)}let g=[];for(let E of[-2.5,2.5]){let m=new k(new Le(.16,14,10),_o("#FFE8C0",e?1.4:2));m.position.set(E,3.15,-1),n.add(m),g.push(m);let p=new Qt("#FFE0B0",e?6:9,9,1.4);p.position.set(E,2.9,-.8),p.castShadow=E<0,n.add(p)}n.add(new Mt("#F4ECE0","#4A4034",e?.35:.6))};var cs=3;gt.hueco=(n,t)=>{n.background=new ht("#05060C"),n.fog=new wt("#0A0C18",.02),ye(n,-120,500,260,[[0,"#04050C"],[.6,"#0E1230"],[1,"#2A2450"]]),Sn(n,1600,220,3),oi(n,-60,300,50,["#0C0E1E","#12142A","#181A34"],!0,6);let e=13*cs,i=w("#3A3A42",{roughness:.95});n.add(R(4.4,e+2,.3,i,0,e/2,-2.2));for(let g of[-1,1])n.add(R(.3,e+2,3.2,i,g*2.2,e/2,-.8));for(let g=0;g<=13;g++){let E=g*cs;if(n.add(R(4.1,.14,.1,w("#6A6A74"),0,E-.07,-2.02)),g===0&&n.add(R(4.1,.25,3.2,w("#5A5A64"),0,-.12,-.8)),g<=12){let m=Dt(de([g===0?"BAJO":"PISO "+g],{bg:"#F2C14E",fg:"#2A2A34",size:70,w:420,h:110}),.9,.24);m.position.set(-1.55,E+2.5,-2.03),n.add(m)}}for(let g of[-1,1])n.add(R(.08,e,.08,qn("#7A7E84"),g*1.75,e/2,-1.6));let s=new at,r=ul("#A4A8AC");s.add(R(2.6,.12,2.2,w("#3A3634"),0,0,0)),s.add(R(2.6,.1,2.2,w("#5A5E62",{metalness:.4}),0,2.85,0));for(let g of[-1,1])s.add(R(.08,2.8,2.2,r,g*1.3,1.4,0));s.add(R(2.6,2.8,.08,r,0,1.4,-1.1));let o=Xe(1.6,1,"#FFF6E8",1.6);o.rotation.x=Math.PI/2,o.position.set(0,2.79,0),s.add(o);let a=new Qt("#FFF4E4",8,5,1.4);a.position.set(0,2.4,.3),s.add(a);let l=new Qt("#FFA840",0,5,1.4);l.position.set(0,2.4,.3),s.add(l),s.add(R(.4,.3,.4,w("#2A2A2E",{metalness:.6}),0,3.05,0));for(let g of[-1,1]){let E=R(.18,.3,.18,w("#C9361F",{metalness:.4}),g*1.6,.25,-.5);s.add(E)}s.position.set(0,0,-.6),n.add(s),n.userData.cab=s,n.userData.cabLuz=g=>{o.material.emissiveIntensity=1.6*g,a.intensity=8*g,l.intensity=7*(1-g)};let c=new k(new jt(.6,.6,.3,24),qn("#6A6E74"));c.rotation.x=Math.PI/2,c.position.set(.6,e+.3,-1.4),n.add(c);let h=[];for(let g=0;g<4;g++){let E=new k(new jt(.018,.018,1,6),qn("#2A2C30"));n.add(E),h.push([E,-.09+g*.06])}let d=R(.7,1.6,.3,w("#4A4C52",{metalness:.5}),1.25,0,-1.8);n.add(d);let u=new k(new jt(.03,.03,1,6),qn("#2A2C30"));n.add(u),n.userData.setCab=(g,E=0)=>{s.position.y=g;let m=g+3.2;h.forEach(([A,y])=>{let D=Math.max(.01,(e-m)*(1-E));A.scale.y=D,A.position.set(y,e-D/2,-.6)});let p=e-4-g*.9%(e-6);d.position.y=Math.max(1,e-2-g);let v=e-d.position.y-.8;u.scale.y=Math.max(.01,v),u.position.set(1.25,e-v/2,-1.8)},n.userData.setCab(t.y??7.5*cs);for(let g=0;g<=12;g+=2){let E=new Qt("#8A9ACA",2.2,8,1.6);E.position.set(-1.5,g*cs+2.2,.4),n.add(E)}n.add(new Mt("#6A78A8","#101018",.5));let f=Nt(12);for(let g=0;g<13;g++)for(let E of[-1,1])for(let m=0;m<2;m++){let p=f()<.55,v=Xe(.8,1,p?"#FFD890":"#1A1C2A",p?1.2:.2);v.position.set(E*(3.2+m*1.6),g*cs+1.6,-.6),n.add(v),n.add(R(1.4,cs,.2,w("#2A2A34"),E*(3.2+m*1.6),g*cs+cs/2,-.75))}t.fuegos&&(n.userData.fuegos=!0)};gt.feria=(n,t)=>{n.background=new ht("#2A2018"),n.fog=new wt("#6A5A44",.03),n.add(Ai(40,30,"#8A7258","#7E6850",14));for(let l=-3;l<=3;l++){n.add(R(.25,12,.25,w("#4A4A4E",{metalness:.5}),l*4,6,-9));let c=new k(new _n(2,.1,6,24,Math.PI),w("#4A4A4E",{metalness:.5}));c.position.set(l*4+2,12,-9),n.add(c)}for(let l=0;l<8;l++){let c=Xe(3.6,4,"#FFF0D0",.55);c.position.set(-14+l*4,7,-9.15),n.add(c)}let e=["#C9361F","#F4F0E4","#2A4A8A"];for(let l=0;l<9;l++)n.add(R(.6,.4,.02,w(e[l%3]),-8+l*2,9.5,-6));let i=w("#6A4A30",{roughness:.8});for(let l of[-1,1])n.add(R(.25,9,.25,i,l*1.4,4.5,-3));n.add(R(3.2,.3,.4,i,0,9,-3));for(let l=1;l<9;l+=1.5)for(let c of[-1,1]){let h=R(.08,2.1,.08,i,c*1.4,l,-3.2);h.rotation.z=c*.7,n.add(h)}let s=new k(new jt(.4,.4,.15,18),w("#3A3A3E",{metalness:.6}));s.rotation.x=Math.PI/2,s.position.set(0,9.3,-3),n.add(s);let r=new at;r.add(R(2.4,.15,1.8,w("#8A6A44"),0,0,0));for(let l of[-1,1])r.add(R(.08,1,.08,i,l*1.1,.5,.8));r.add(R(2.3,.06,.06,i,0,1,.8));for(let l of[-1,1]){let c=R(.16,.2,.16,w("#3A3A3E",{metalness:.6}),l*1.3,.05,0);r.add(c)}r.position.set(0,5,-3),n.add(r),n.userData.plat=r;let o=new k(new jt(.03,.03,1,6),w("#C8A870"));n.add(o),n.userData.rope=o,n.userData.setPlat=(l,c=0)=>{r.position.y=l;let h=(9.2-(l+.1))*(1-c);o.visible=h>.02,o.scale.y=Math.max(.01,h),o.position.set(0,9.2-h/2,-3)},n.userData.setPlat(t.y??5);let a=Dt(de(["NUEVA YORK \xB7 1854"],{bg:"#3A2A1A",fg:"#F4E0B0",size:80,w:900,h:140}),4,.62);a.position.set(0,10.6,-8.8),n.add(a),n.add(new Mt("#FFE8C8","#5A4A38",.9)),n.add(re("#FFD8A0",2.2,[-6,14,8],14,50))};var by=n=>Math.max(0,Math.min(2.6,2.6-(n+3)/.32*.18));gt.escalera=(n,t)=>{n.background=new ht("#1E1A16"),n.fog=new wt("#2A2620",.04),n.add(Ai(14,10,"#C8B898","#B8A888",8)),n.add(R(16,7,.3,w("#E0D4BC"),0,3.5,-2.4));for(let o=0;o<15;o++){let a=R(.34,.18*(15-o),1.6,w("#B8A890",{roughness:.8}),-3+o*.32+.16,.09*(15-o),-1.3);a.receiveShadow=!0,n.add(a),n.add(R(.34,.03,1.62,w("#8A7A60"),-3+o*.32+.16,.18*(15-o)+.01,-1.3))}n.add(R(2.6,2.6,1.6,w("#B8A890"),-4.3,1.3,-1.3));let i=new k(new jt(.03,.03,5.7,8),w("#5A3A22"));i.position.set(-.6,2.4,-.45),i.rotation.z=Math.atan2(2.7,4.8)+Math.PI/2,n.add(i);for(let o=0;o<14;o+=2)n.add(R(.025,.9,.025,w("#2A2A2E"),-2.9+o*.32,by(-2.9+o*.32)+.45,-.5));let s=Kf(String(t.piso??9),.5,.34,"#2A2A34","#F2C14E");s.position.set(-4.2,3.6,-2.23),n.add(s);let r=Xe(1.1,1.4,t.night?"#2A3A6A":"#FFF4D8",t.night?.5:1.6);r.position.set(1.5,3.4,-2.23),n.add(r);for(let o of[-3.5,2]){let a=new Qt("#FFE0B0",8,9,1.4);a.position.set(o,4.4,.5),a.castShadow=o<0,n.add(a)}n.add(new Mt("#F4ECE0","#4A4034",.6))};var Dr=[],wy=999,a0=n=>n+1<Eo.length?Eo[n+1]:wy,cd=(n,t,e)=>n.map((i,s)=>t[s]+(i-t[s])*e),l0=(n,t)=>{let e=n.k??1.35;if(n.c&&e!==1){let[i,s,r,o]=n.c;n.c=[cd(i,s,e),s,cd(r,o,e),o]}else n.cam&&e!==1&&(n.cam=n.cam.map(([i,s,r])=>[i,cd(s,r,e),r]),n.f&&(n.f=n.f.map(([i,s])=>[i,s*e])));if(n.c){let[i,s,r,o]=n.c;n.cam=[[0,i,s],[t,r,o]];let a=(l,c)=>Math.hypot(l[0]-c[0],l[1]-c[1],l[2]-c[2]);n.f=[[0,a(i,s)],[t,a(r,o)]]}return n},it=(n,t)=>{let e=Eo[n],i=a0(n),s=Math.min(i,575)-e;Dr.push([(r,o)=>ed(r,o,l0(t(s,e),s)),e,i])},Ry=(n,t,e)=>{let i=Math.min(t,575)-n;Dr.push([(s,r)=>ed(s,r,l0(e(i,n),i)),n,t])},Jn=(n,t,e)=>{let i=Eo[n],s=a0(n),r=[i],o=i;for(let a of t){let[l,c]=Array.isArray(a)?a:[a,1];for(let h=0;h<c;h++)o=id(l,o+.01);r.push(o)}r.push(s),e.forEach((a,l)=>Ry(r[l],r[l+1],a))},Mi=n=>({tipo:"humano",...n}),Bt=(n={})=>Mi({glow:.1,...n});var le=(n={})=>Mi({outfit:"amarelo",hair:"long",hairc:"#4A2A1A",lash:!0,...n});var B=(n,t,e=0)=>id(t,n+e)-n,Gt=(n,t,e,i,s={})=>{let r=Array.isArray(t)?t:[t],o=s.size||72,a={w:Math.max(720,Math.max(...r.map(c=>c.length))*o*.66+90),...s},l=Dt(de(Array.isArray(t)?t:[t],{bg:"#2A2A34",fg:"#F2C14E",size:72,w:720,h:150,...a}),e,e*(a.h||150)/(a.w||720));return l.position.set(...i),l.renderOrder=4,n.add(l),l},gn=(n,t,e,i,s={})=>Gt(n,t,e,i,{bg:"#FBF7EC",fg:"#2A2A34",...s}),xy=(n,t,e,i,s={})=>Gt(n,t,e,i,{bg:"#6A3AB8",fg:"#FFFFFF",...s});var tt=(n,t,e,i=1e9,s)=>{let r=Xt(e,e+.2,t)*(1-Xt(i,i+.2,t));n.visible=r>.01,n.scale.setScalar(Math.max(.001,.5+.5*r)),s&&el(n,s)},fd=(n,t)=>n.pose({armL:[12,8],armR:[150+Math.sin(t*9)*18,20]});var gl=(n,t)=>n.pose({armL:[12,8],armR:[50+Math.sin(t*8)*15,30],bob:Math.abs(Math.sin(t*8))*.015}),El=n=>n.pose({armL:[12,8],armR:[95,0]});var Cy=n=>{for(let t of Object.values(n.legs))t.th.visible=!1,t.shin&&(t.shin.visible=!1)},Bn=n=>{n.pose({armL:[8,6],armR:[8,6]}),Cy(n)};var Zn=n=>{let t=new P;return n.arms.R.hand.getWorldPosition(t),t};var c0=(n,t=10,e="#FFF2C0")=>{let i=[];for(let s=0;s<t;s++){let r=Yt(e,.3,0);n.add(r),i.push(r)}return(s,r,o=1)=>i.forEach((a,l)=>{let c=(s*.8+l/t)%1;a.position.set(r[0]+Math.sin(l*2.4)*r[3],r[1]+Math.cos(l*1.7)*r[3]*.6,r[2]),a.material.opacity=o*Math.sin(c*Math.PI)*.9,a.scale.setScalar(.15+Math.sin(c*Math.PI)*.25)})},h0=n=>{let t=[0,1,2].map(()=>{let e=Dt(nd("Z","#B8C8FF",150),.3,.24);return e.renderOrder=5,n.add(e),e});return(e,i,s,r=!0)=>t.forEach((o,a)=>{let l=(e*.35+a/3)%1;o.visible=r,o.position.set(i[0]+l*.6,i[1]+l*.9,i[2]),o.material.opacity=Math.sin(l*Math.PI),o.scale.setScalar(.6+l*.6),el(o,s)})};var Fy=(n,t={})=>n({eyes:[[0,"shut"]],...t,pose:(e,i)=>{e.pose({armL:[10,6],armR:[10,6]}),Hf(e),t.p2&&t.p2(e,i)}});var Yn=(n,t={})=>{let e=[["rosa","long","#6B3A22"],["azul",null,null],["amarelo","afro","#2a1b18"],["verde","bob","#D9B65A"],["laranja",null,null],["terno2",null,null],["rosa","bun","#3a2030"],["jaleco",null,null]][n%8];return Mi({outfit:e[0],hair:e[1],hairc:e[2],lash:!!e[1],glow:0,...t})},Pe=(n,t,e,i,s=60)=>{let r=Array.isArray(t)?t:[t],o=Math.max(640,Math.max(...r.map(c=>c.length))*s*.62+80),a=Math.round(s*1.25*r.length/.72+60),l=Dt(Bf(r,{w:o,h:a,size:s}),e,e*a/o);return l.position.set(...i),l.renderOrder=6,n.add(l),l};var Py=(n,t,e)=>{t<=0||(n.position.x+=Math.sin(e*63)*t,n.position.y+=Math.cos(e*51)*t)};var t0=[["rosa","long","#6B3A22"],["amarelo","afro","#2a1b18"],["azul","bob","#D9B65A"],["verde","long","#3a2418"],["roxo","bun","#3a2030"],["rosa","bob","#22161a"],["amarelo","bun","#8a4a26"],["laranja","long","#1E120C"]],So=(n,t={})=>{let[e,i,s]=t0[n%t0.length];return Mi({outfit:e,hair:i,hairc:s,lash:!0,glow:0,...t})},e0=(n=0,t={})=>So(n,{outfit:"jaleco",glasses:!0,...t}),hs={bg:"#C9361F",fg:"#fff"},Us={bg:"#2F5A9A",fg:"#fff"};var pd={bloom:.38,bloomT:.9,vig:.6,exposure:1},Ht=(n,t,e,i,s=2.2)=>{let r={y:Gt,w:gn,p:xy,r:(l,c,h,d)=>Gt(l,c,h,d,hs),b:(l,c,h,d)=>Gt(l,c,h,d,Us)},o=e.map(([l,,c="y",h=i,d=s])=>r[c](n,l,d,h)),a=e.map(([,l])=>typeof l=="number"?l:B(t,l));return(l,c)=>o.forEach((h,d)=>tt(h,l,a[d],e[d][5]||d+1>=a.length?99:a[d+1]-.15,c))};var md=(n,t,e,i=.9,s=2,r=1,o="#C8A27A")=>{n.add(R(s,.08,r,w(o),t,i,e));for(let[a,l]of[[-1,-1],[1,-1],[-1,1],[1,1]])n.add(R(.07,i,.07,w("#5C3C28"),t+a*(s/2-.1),i/2,e+l*(r/2-.1)))},n0=(n,t,e,i=0,s="#8E6242")=>{let r=new at;r.add(R(.5,.06,.5,w(s),0,.5,0)),r.add(R(.5,.7,.06,w(s),0,.85,-.22));for(let[o,a]of[[-1,-1],[1,-1],[-1,1],[1,1]])r.add(R(.05,.5,.05,w(s),o*.2,.25,a*.2));return r.position.set(t,0,e),r.rotation.y=i,n.add(r),r};var To=(n,t=.35,e="#E8667F")=>{let i=Dt(nd("\u2665",e,170),t,t*.8);return i.renderOrder=6,n.add(i),i},bo=(n,t=120)=>{let e=n*t/60%1;return 1+.18*Math.exp(-e*9)+.1*Math.exp(-Math.max(0,e-.22)*12)*(e>.22?1:0)};var Iy=(n,t={})=>It(900,520,e=>{e.fillStyle=t.bg||"#FBF7EC",e.beginPath(),e.roundRect(0,0,900,520,30),e.fill(),e.fillStyle="#2A2A34",e.font="900 46px Inter",e.textAlign="center",e.fillText(t.title||"",450,64);let i=n.length,s=760/i;n.forEach(([r,o,a],l)=>{let c=70+s*l+s/2,h=o*300;e.fillStyle=a,e.beginPath(),e.roundRect(c-s*.3,420-h,s*.6,h,12),e.fill(),e.fillStyle="#2A2A34",e.font="800 30px Inter",r.split(`
`).forEach((d,u)=>e.fillText(d,c,462+u*34))})}),yl=(n,t,e,i,s)=>{let r=Dt(Iy(t,s),e,e*520/900);return r.position.set(...i),r.renderOrder=5,n.add(r),r},Dy=(n,t=64)=>It(700,520,e=>{e.fillStyle="#FFF6C8",e.fillRect(0,0,700,520),e.strokeStyle="#9EC0E8",e.lineWidth=3;for(let i=90;i<520;i+=70)e.beginPath(),e.moveTo(0,i),e.lineTo(700,i),e.stroke();e.fillStyle="#2A3A8A",e.font=`700 ${t}px Caveat`,e.textAlign="center",n.forEach((i,s)=>e.fillText(i,350,260-(n.length-1)*t*.55+s*t*1.1))}),hd=(n,t,e,i,s)=>{let r=new k(new bt(e,e*520/700),new Ft({map:Dy(t,s),roughness:.9}));return r.position.set(...i),r.renderOrder=4,n.add(r),r};var ci=(n={})=>({amb:"aula",fov:32,...n});var dd=(n,t,e,i,s={})=>{let r=Array.isArray(t)?t:[t],o=s.size||60,a=Math.round(Math.max(640,Math.max(...r.map(d=>d.length))*o*.6+220)),l=Math.round(o*1.2*r.length+230),c=Of(r,{w:a,h:l,size:o,bg:s.bg||"#EFE6FF",fg:s.fg||"#4A2A8A",tail:s.tail||"left"}),h=Dt(c,e,e*l/a);return h.position.set(...i),h.renderOrder=6,n.add(h),h};var Ns={exposure:1.02,bloom:.35};var ds={bg:"#E8667F",fg:"#fff"},Al={bg:"#2F8A5A",fg:"#fff"};var s4=(()=>{let n=[];for(let t of[-1,1])for(let e of[0,1])for(let i=0;i<5;i++)n.push([t*(2.9+e*.75),-2+i*.8,t*-Math.PI/2]);return n})();var Lr={bg:"#1E2230",fg:"#F2C14E"};var Ly=(n,t=1)=>{let e=new at;e.add(R(.42*t,.22*t,.1*t,w("#F2C14E"),0,0,0));let i=Dt(de(["SALADAS"],{bg:"#C9361F",fg:"#fff",size:70,w:420,h:130}),.38*t,.12*t);return i.position.z=.052*t,e.add(i),n.add(e),e};var fl=(n,t=6,e="#8AC8F2")=>{let i=[];for(let s=0;s<t;s++){let r=Yt(e,.12,0);n.add(r),i.push(r)}return(s,r,o=1)=>i.forEach((a,l)=>{let c=(s*.9+l/t)%1;a.position.set(r[0]+Math.sin(l*2.3)*r[3],r[1]-c*.7,r[2]+.1),a.material.opacity=o*(1-c)})},gd=(n,t="#7AD07A",e=.55)=>{let i=Yt(t,e,0);return i.position.set(0,0,.1),n.head.add(i),s=>i.material.opacity=s};var li=-.28;var d0=(n={})=>Mi({outfit:"verde",hair:"bob",hairc:"#D9B65A",lash:!0,glow:0,...n}),$n=(n={})=>Mi({outfit:"azul",glasses:!0,hair:"old",hairc:"#6A5A4A",glow:0,...n}),Oe={exposure:1,bloom:.45},Zt={exposure:1.05,bloom:.5,vig:.55},u0={bg:"#E8743A",fg:"#FFFFFF"},Hs=(n,t=Oe)=>e=>{let i=0;for(let s of n)i=Math.max(i,Xt(s,s+.04,e)*(1-Xt(s+.1,s+.45,e)));return{...t,exposure:t.exposure+i*2.4,bloom:t.bloom+i*.8}},Uy=(n="#E8743A",t=1,e=0)=>{let i=new at,s=.95*t,r=2.2*t,o=new k(new jt(s,s,r,3,1),w(n,{roughness:.85,emissive:n,emissiveIntensity:e}));o.rotation.x=-Math.PI/2,o.position.y=s/2,o.castShadow=!0,o.receiveShadow=!0,i.add(o);let a=new Mr;a.moveTo(-.42*t,0),a.lineTo(.42*t,0),a.lineTo(0,1.05*t),a.lineTo(-.42*t,0);let l=new k(new uo(a),new Ft({color:e?"#FFC070":"#3A2A22",emissive:e?"#FFA040":"#000",emissiveIntensity:e?.8:0,side:Se}));l.position.set(0,.02,r/2-.02),i.add(l);let c=R(.015,.9*t,.01,w("#1A1A20"),0,.47*t,r/2+.005,!1);i.add(c);let h=new k(new jt(.015,.015,.3,6),w("#C8CCD4"));if(h.position.set(0,s*1.5+.1,r/2-.05),i.add(h),e){let d=Yt("#FFB060",1.1*t,.14);d.position.set(0,.5*t,r/2+.05),i.add(d)}return i},i0=(n,t,e,i,s=1,r=0,o=0)=>{let a=Uy(i,s,r);return a.position.set(t,0,e),a.rotation.y=o,n.add(a),a},Ny=(n,t,e)=>{let i=new at;i.add(R(3.2,2.6,.2,w("#7A5034"),0,1.3,-.9));for(let a of[-1,1])i.add(R(.12,2.3,.12,w("#5A3A22"),a*1.5,1.15,.7));let s=R(3.5,.1,1.9,w("#4A2E1E"),0,2.35,-.1);s.rotation.x=.12,i.add(s),i.add(R(1.6,.08,.4,w("#9A6A44"),0,.45,-.5));for(let a of[-1,1])i.add(R(.08,.45,.35,w("#5A3A22"),a*.7,.22,-.5));let r=Yt("#FFD890",.5,.9);r.position.set(0,2.1,-.75),i.add(r);let o=new Qt("#FFD090",3,5,1.6);return o.position.set(0,2,-.3),i.add(o),i.position.set(t,0,e),n.add(i),i},us=(n,t=420,e=[-6,6,0,4.5,-6,3],i="#A8C4F0")=>{let[s,r,o,a,l,c]=e,h=Nt(9),d=[];for(let E=0;E<t;E++)d.push([s+(r-s)*h(),h(),l+(c-l)*h()]);let u=new Float32Array(t*6),f=new $e;f.setAttribute("position",new nn(u,3));let g=new Ua(f,new ro({color:i,transparent:!0,opacity:.6,fog:!1}));return g.frustumCulled=!1,g.renderOrder=3,n.add(g),(E,m=1)=>{g.visible=m>.01,g.material.opacity=.6*m;for(let p=0;p<t;p++){let[v,A,y]=d[p],D=a-(A+E*1.4)%1*(a-o);u.set([v,D,y,v-.04,D+.38,y],p*6)}f.attributes.position.needsUpdate=!0}},Hy=[[-2.6,-3.4,"#4A86C7"],[2.9,-3.8,"#E8667F"],[-4.9,-4.2,"#7AB85A"]],Oy=[[-8.2,-2.8,"#2F5A9A"],[-10.6,-3.4,"#F2C14E"],[-12.8,-2.6,"#8A5AC8"]],Ce=(n,t={})=>{n.add(new Mt("#8A9AE8","#283040",.75));let e=new si("#B8C4FF",.7);e.position.set(-6,10,8),n.add(e),i0(n,0,-2.6,"#E8743A",1,t.lit??.25);for(let[r,o,a]of[...Hy,...Oy])i0(n,r,o,a,.95,t.litAll?.15:0);t.porche!==!1&&Ny(n,2.4,-1.1);let i=Dt(de(["CHICAS"],{bg:"#E8667F",fg:"#fff",size:70,w:420,h:130}),.7,.22);i.position.set(-1.4,1,-1),n.add(i),n.add(R(.06,.9,.06,w("#5A3A22"),-1.4,.45,-1.05));let s=Dt(de(["CHICOS"],{bg:"#2F5A9A",fg:"#fff",size:70,w:420,h:130}),.7,.22);s.position.set(-6.6,1,-1),n.add(s),n.add(R(.06,.9,.06,w("#5A3A22"),-6.6,.45,-1.05))},Fe={amb:"lagoNoche",fov:32};gt.tiendaIn=(n,t)=>{n.background=new ht("#07060E");let e=t.col||"#C8602E",i=new k(new bt(3.4,4.4),w("#3A3448",{roughness:1}));i.rotation.x=-Math.PI/2,i.receiveShadow=!0,n.add(i);let s=w(e,{roughness:.9,side:Se,emissive:e,emissiveIntensity:t.glow??.12});s.depthWrite=!1;for(let l of[-1,1]){let c=R(.03,2.58,4.4,s,l*.82,1,0);c.rotation.z=l*.675,n.add(c)}let r=new Mr;r.moveTo(-1.65,0),r.lineTo(1.65,0),r.lineTo(0,2.05),r.lineTo(-1.65,0);let o=new k(new uo(r),s);o.position.z=-2.2,n.add(o);let a=R(.02,1.9,.01,w("#3A2A22"),0,.95,-2.18);n.add(a),n.add(new Mt("#FFC890","#2A2440",t.dim?.25:.55))};var $t={amb:"tiendaIn",fov:40},s0=(n,t,e,i="#2F5A9A",s=1.9,r=0)=>{let o=new at;return o.add(R(s,.16,.72,w(i,{roughness:.7}),0,.08,0)),o.add(R(.42,.17,.66,w("#E8E2D2",{roughness:.9}),-s/2+.24,.09,0)),o.position.set(t,0,e),o.rotation.y=r,n.add(o),o},By=(n,t=[0,1.55,-.6])=>{let e=Yt("#FFE2A8",.9,.9);e.position.set(...t),n.add(e);let i=new Qt("#FFD9A0",7,6,1.5);return i.position.set(t[0],t[1]-.1,t[2]+.3),i.castShadow=!0,n.add(i),s=>{e.material.opacity=.9*s,i.intensity=7*s}},Os=(n,t,e,i)=>{let s=ls(i);return n.add(s),(r=1)=>{let o=Zn(t[e]);s.position.set(o.x,o.y,o.z+.12),s.userData.on(r)}},zy=-.62,zt=(n,t,e,i={})=>{let s=i.pose;return n({x:t,z:e,y:zy,...i,pose:(r,o)=>{Bn(r),s&&s(r,o)}})},vl=()=>{let n=new at;n.add(new k(new jt(.05,.05,.26,14),w("#C9361F",{metalness:.3})));let t=new k(new jt(.055,.055,.06,14),w("#2A2A34"));return t.position.y=.16,n.add(t),n},ky=()=>{let n=new at;n.add(R(.26,.32,.05,w("#E8447A"),0,0,0,!1));let t=Dt(de(["GOMIS"],{bg:"#FFFFFF",fg:"#E8447A",size:80,w:420,h:150}),.22,.08);return t.position.z=.03,n.add(t),n},Gy=()=>{let n=new at;n.add(R(.3,.12,.03,w("#5A2E1A"),0,0,0,!1));let t=Dt(de(["CHOCO"],{bg:"#8A3A1A",fg:"#F2C14E",size:80,w:420,h:150}),.2,.07);return t.position.z=.02,n.add(t),n};var Vy=["IKTITAF","SARICIK","AFWORBU","NANSOMA","KADIRGA","BIWOJNI"],Mo=(n,t,e,i,s={})=>{let r=Dt(de([t],{bg:"#FBF7EC",fg:"#2A2A34",size:90,w:700,h:300,...s}),e,e*300/700);return r.position.set(...i),r.renderOrder=5,n.add(r),r},f0=(n,t,e)=>{let i=new at;i.add(R(1.2,.9,.6,w("#5A6070",{metalness:.4,roughness:.4}),0,.45,0));for(let o=0;o<4;o++){let a=new k(new jt(.07,.07,.04,16),w("#1A1A20"));a.rotation.x=Math.PI/2,a.position.set(-.4+o*.27,.6,.31),i.add(a)}let s=Yt("#FF3A3A",.25,.9);s.position.set(.45,.8,.32),i.add(s);let r=Dt(de(["\u26A1 PELIGRO"],{bg:"#F2C14E",fg:"#2A2A34",size:80,w:600,h:150}),.7,.18);return r.position.set(0,.28,.31),i.add(r),i.position.set(t,0,e),n.add(i),i},r0=(n,t,e,i,s="#2F5A9A")=>{n.add(R(.9,2,.08,w("#E8E2D2"),t,1,e)),n.add(R(.75,1.85,.1,w("#8E6242"),t,.95,e+.01));let r=Dt(de(i,{bg:s,fg:"#fff",size:64,w:600,h:70+80*i.length}),.95,.95*(70+80*i.length)/600);return r.position.set(t,2.35,e+.06),r.renderOrder=5,n.add(r),r},Ed=(n,t)=>n.pose({lean:22,head:-6,armL:[30,40],armR:[30,40],bob:-.12+Math.abs(Math.sin(t*9))*.03,legL:[Math.sin(t*9)*18,30],legR:[-Math.sin(t*9)*18,30]}),wo=(n,t)=>n.pose({armL:[8,6],armR:[80,140],head:6}),yd=(n,t)=>n.pose({armL:[12,8],armR:[110+Math.sin(t*2)*10,130]}),Wy=n=>n.pose({armL:[60,100],armR:[60,100],head:6});var p0=(n,t)=>n.pose({armL:[8,6],armR:[125,150],bob:Math.abs(Math.sin(t*14))*.025}),m0=(n,t)=>n.pose({lean:45,head:-20,armL:[60+Math.sin(t*8)*20,10],armR:[60-Math.sin(t*8)*20,10],bob:-.45,legL:[40+Math.sin(t*8)*15,70],legR:[40-Math.sin(t*8)*15,70]}),vi=(n,t,e,i={})=>{let s=i.pose;return n({x:t,z:e,y:li,...i,pose:(r,o)=>{Bn(r),s&&s(r,o)}})},Ir={exposure:1.05,bloom:.3},Ro=(n,t,e=1)=>n.pose({armL:[14+Math.sin(t*40)*4*e,8],armR:[14+Math.cos(t*38)*4*e,8],legL:[Math.sin(t*45)*5*e,0],legR:[Math.cos(t*43)*5*e,0]});var o0=(n,t)=>n.pose({armL:[40,60],armR:[40,60],bob:Math.abs(Math.sin(t*12))*.04,head:Math.sin(t*12)*5});var g0=[[.3,1.4,2.6],[0,.9,-1.4],[.3,1.35,2.2],[0,.9,-1.4]],Bs=[[0,1.3,3.2],[0,.85,-.7],[0,1.25,2.8],[0,.85,-.7]],zn=[[0,1.15,2.4],[0,.9,-.2],[0,1.12,2.1],[0,.9,-.2]],zs=[[-.35,1.1,1.8],[-.45,.95,-.2],[-.35,1.1,1.6],[-.45,.95,-.2]],Ur=[[.35,1.1,1.8],[.45,.95,-.2],[.35,1.1,1.6],[.45,.95,-.2]],Vi=(n={})=>zt(le,.48,-.15,n),_i=(n={})=>zt(Bt,-.48,-.15,n),sn=(n={})=>Fy(d0,{x:.15,z:-1.35,y:.18,...n}),Jt=(n,t={})=>{s0(n,.15,-1.35,"#7AB85A",1.9),s0(n,1.15,-.9,"#E8667F",1,Math.PI/2);let e=By(n);e(t.luz??1);let i=h0(n);return i(0,[0,0,0],new Ze,!1),{luz:e,z:(s,r,o=1)=>i(s,[-.75,.55,-1.3],r,o)}},xo=[-6,6,0,4.5,-5,3.5];it(0,(n,t)=>{let e=B(t,"tercera"),i=B(t,"once");return{...Fe,atores:[],extra:s=>{Ce(s,{litAll:1});let r=sd();r.position.set(-4.2,0,-.6),s.add(r);let o=Ht(s,t,[[["CAMPAMENTO DEL INSTITUTO"],.1,"y",[-.6,2.5,1.5],2.4],[["TERCERA NOCHE"],e,"w",[-.6,2.5,1.5],1.5],[["LAS 23:05"],i-.2,"p",[-.6,2.5,1.5],1.3,1]]);return{update:(a,l,c)=>{r.tick&&r.tick(a),o(a,c)}}},c:[[-1.5,3,7.5],[-1,1,-2.4],[-.5,2.4,6.2],[-.6,1,-2.4]],k:1,range:4,look:Oe}});it(1,(n,t)=>{let e=B(t,"chicas");return{...Fe,atores:[],extra:i=>{Ce(i,{litAll:1});let s=Ht(i,t,[[["CHICOS: A UN LADO"],.1,"b",[-10.2,2.1,-1],1.8],[["CHICAS: AL OTRO"],e-.2,"p",[-1,2.1,-1],1.7,1]]);return{update:(r,o,a)=>s(r,a)}},c:[[-10.5,2,3.6],[-10.2,.9,-2.6],[-1.2,2,3.6],[-.9,.9,-2.6]],k:1,range:4,look:Oe}});it(2,(n,t)=>{let e=B(t,"ramirez"),i=B(t,"cuarenta");return{amb:"albergue",fov:30,ambo:{dusk:1},atores:[$n({x:0,z:-.4,eyes:[[0,"flat"]],talk:[[e,n]],pose:(s,r)=>s.pose({armL:[12,8],armR:[150+Math.sin(r*6)*8,170]})})],extra:s=>{let r=Ht(s,t,[[["LA REGLA M\xC1S IMPORTANTE"],.1,"y",[0,2.4,-.3],2.4],[["PROFE RAM\xCDREZ"],e-.2,"b",[0,2.4,-.3],1.6],[["REPETIDA 40 VECES"],i-.2,"r",[0,2.4,-.3],2,1]]);return{update:(o,a,l)=>r(o,l)}},c:[[0,1.7,3.6],[0,1.5,-.4],[0,1.65,3.1],[0,1.5,-.4]],range:3,look:Ns}});it(3,(n,t)=>{let e=B(t,"tienda"),i=B(t,"padres"),s=B(t,"casa");return{amb:"albergue",fov:30,ambo:{dusk:1},atores:[$n({x:-.6,z:-.4,eyes:[[0,"flat"],[i,"wide"]],talk:[[0,n]],pose:(r,o)=>o>i?El(r):gl(r,o)})],extra:r=>{let o=Ht(r,t,[[["DESPU\xC9S DE LAS 23:00"],.1,"w",[.75,2.25,-.2],1.7],[["EN UNA TIENDA AJENA\u2026"],e-.3,"y",[.75,2.25,-.2],1.8],[["LLAMADA A TUS PADRES"],i-.3,"r",[.75,2.25,-.2],1.9],[["\xA1Y A CASA!"],s-.2,"r",[.75,2.25,-.2],1.2,1]]);return{update:(a,l,c)=>o(a,c)}},c:[[0,1.7,3.8],[0,1.5,-.4],[0,1.65,3.3],[0,1.5,-.4]],range:3,look:Ns}});it(4,(n,t)=>{let e=B(t,"descalzo"),i=B(t,"linterna");return{...Fe,atores:[Bt({x:-8.2,z:-1.5,eyes:[[0,"look"],[e,"wide"]],move:s=>[-8.2+Xt(.3,2.5,s)*.5,0,xe(-1.9,-.5,Xt(.2,2.4,s))],pose:(s,r)=>r<2.4?Ed(s,r):s.pose({armL:[12,8],armR:[70,20]})})],extra:(s,r,o)=>{Ce(s);let a=Os(s,o,0),l=Ht(s,t,[[["T\xDA, SALIENDO DE TU TIENDA"],.1,"w",[-7.6,2.1,-.8],2.2],[["DESCALZO"],e-.1,"y",[-7.6,2.1,-.8],1.1],[["CON UNA LINTERNA"],i-.3,"y",[-7.6,2.1,-.8],1.6,1]]);return{update:(c,h,d)=>{a(1),l(c,d)}}},c:[[-7.4,1.6,3],[-8,.9,-1.2],[-7.5,1.55,2.6],[-7.9,.95,-1]],range:3,look:Oe}});Jn(5,["presto"],[(n,t)=>{let e=B(t,"ella"),i=B(t,"crush");return{...Fe,atores:[Bt({x:-7.6,z:-.5,eyes:[[0,"look"],[i,"happy"]],pose:s=>s.pose({armL:[12,8],armR:[95,60]})})],extra:(s,r,o)=>{Ce(s);let a=Os(s,o,0),l=Ht(s,t,[[["NO ES TU LINTERNA"],.05,"w",[-7.6,1.95,-.4],1.6],[["ES LA DE ELLA"],e-.2,"y",[-7.6,1.95,-.4],1.4],[["TU CRUSH \u2665"],i-.2,"p",[-7.6,1.95,-.4],1.2,1]]);return{update:(c,h,d)=>{a(1),l(c,d)}}},c:[[-7.5,1.45,1.9],[-7.6,1.3,-.5],[-7.5,1.45,1.6],[-7.6,1.3,-.5]],range:2,look:Oe}},(n,t)=>{let e=B(t,"excursion");return{amb:"sendero",fov:30,atores:[Bt({x:-.5,z:0,eyes:[[0,"happy"]],pose:(i,s)=>i.pose({armL:[12,8],armR:[70,30]})}),le({x:.55,z:0,eyes:[[0,"happy"]],pose:i=>i.pose({armL:[70,40],armR:[12,8]})})],extra:(i,s,r)=>{let o=ls();i.add(o),o.userData.on(0);let a=Ht(i,t,[[["ESTA TARDE"],.05,"y",[0,2.3,-.2],1.3],[["EN LA EXCURSI\xD3N"],e-.3,"w",[0,2.3,-.2],1.7,1]]);return{update:(l,c,h)=>{let d=Zn(r[1]),u=Zn(r[0]),f=Xt(.2,1.2,l);o.position.set(xe(d.x,u.x,f),xe(d.y,u.y,f),d.z+.12),a(l,h)}}},c:[[0,1.6,3.6],[0,1.3,-.2],[0,1.6,3.1],[0,1.3,-.2]],range:3,look:pd}}]);it(6,(n,t)=>{let e=B(t,"manana"),i=B(t,"ahora");return{...Fe,atores:[Bt({x:-7,z:-.3,eyes:[[0,"flat"],[i,"wide"]],pose:(s,r)=>s.pose({armL:[r>i?150:12,r>i?30:8],armR:[95,60]})})],extra:(s,r,o)=>{Ce(s);let a=Os(s,o,0),l=Ht(s,t,[[["NO PUEDE ESPERAR"],.1,"w",[-7,2.05,-.2],1.7],[["A MA\xD1ANA"],e-.3,"w",[-7,2.05,-.2],1.1],[["HAY QUE DEVOLVERLA"],B(t,"devolverla")-.3,"y",[-7,2.05,-.2],1.9],[["\xA1AHORA MISMO!"],i-.2,"r",[-7,2.05,-.2],1.5,1]]);return{update:(c,h,d)=>{a(1),l(c,d)}}},c:[[-6.6,1.5,2.5],[-7,1.3,-.3],[-6.7,1.5,2.1],[-7,1.35,-.3]],range:2.5,look:Oe}});Jn(7,["llegas"],[n=>({...Fe,atores:[Bt({x:-7,z:-.2,eyes:[[0,"wide"]],move:t=>[xe(-7.2,-.9,t/n),0,-.3],pose:Ed})],extra:(t,e,i)=>{Ce(t);let s=Os(t,i,0),r=gn(t,["AGACHADO"],1.1,[0,0,0]);return{update:(o,a,l)=>{s(1),r.position.set(i[0].root.position.x,1.75,-.2),tt(r,o,.2,99,l)}}},cam:[[0,[-6.6,1.5,3.4],[-7,.9,-.4]],[99,[-.4,1.5,3.4],[-.8,.9,-.4]]],k:1,range:3,look:Oe}),(n,t)=>{let e=B(t,"cremallera"),i=B(t,"hola");return{...Fe,atores:[Bt({x:-.55,z:-1.1,eyes:[[0,"look"]],pose:(s,r)=>s.pose({lean:14,armL:[12,8],armR:[80,40]})})],extra:(s,r,o)=>{Ce(s,{lit:.3});let a=Gt(s,["ZIIIP\u2026"],.8,[.55,1.4,-1.2],Lr),l=Pe(s,["\xBFHOLA?"],.8,[-.55,1.95,-1],60),c=Ht(s,t,[[["SU TIENDA"],.05,"p",[0,2.2,-1.4],1.1,1]]);return{update:(h,d,u)=>{c(h,u),tt(a,h,e-.1,i-.1,u),tt(l,h,i-.1,99,u)}}},c:g0,range:2.5,look:Oe}}]);it(8,(n,t)=>{let e=B(t,"que"),i=B(t,"entra");return{...Fe,atores:[le({x:.05,z:-1.35,eyes:[[0,"wide"],[i,"flat"]],talk:[[e,n]],pose:(s,r)=>s.pose({armL:[100,150],armR:[r>i?70:100,r>i?10:150]})}),Bt({x:-1,z:-.7,eyes:[[0,"happy"]],pose:s=>s.pose({armL:[12,8],armR:[80,40]})})],extra:(s,r,o)=>{Ce(s,{lit:.3});let a=Ht(s,t,[[["SACO HASTA EL CUELLO"],.1,"w",[-.9,2.05,-.8],1.7]]),l=Pe(s,["\xBFQU\xC9 HACES AQU\xCD?","\xA1ENTRA, QUE TE VAN A VER!"],1.4,[.55,1.78,.05],56);return{update:(c,h,d)=>{a(c,d),tt(l,c,e-.1,99,d)}}},c:[[.1,1.35,2.4],[-.2,1,-1.2],[.1,1.3,2],[-.2,1,-1.2]],range:2.5,look:Oe}});it(9,n=>({...Fe,atores:[Bt({x:-.5,z:-.7,eyes:[[0,"look"]],move:t=>[xe(-.5,0,Xt(.1,.8,t)),-1.2*Xt(.5,1.3,t),xe(-.7,-1.6,Xt(.2,1.2,t))],pose:Ed})],extra:t=>{Ce(t,{lit:.3});let e=Gt(t,["Y ENTRAS"],1,[-.9,1.9,-1]);return{update:(i,s,r)=>tt(e,i,.1,99,r)}},c:g0,range:2.5,look:Oe}));it(10,(n,t)=>{let e=B(t,"lucia"),i=B(t,"roncando");return{...$t,atores:[Vi({eyes:[[0,"look"]]}),_i({eyes:[[0,"wide"],[i,"flat"]]}),sn()],extra:s=>{let r=Jt(s),o=Ht(s,t,[[["ELLA \u2665"],.1,"p",[.48,1.48,-.1],.8],[["Y LUC\xCDA, SU MEJOR AMIGA"],e-.4,"w",[0,1.48,-.1],2],[["DORMIDA"],B(t,"dormida")-.2,"w",[0,1.48,-.1],1],[["ROONC\u2026 ROOONC\u2026"],i-.1,"b",[0,1.48,-.1],1.5,1]]);return{update:(a,l,c)=>{o(a,c),r.z(a,c,a>e?1:0)}}},c:Bs,range:4,look:Zt}});Jn(11,["pum"],[(n,t)=>{let e=B(t,"coge"),i=B(t,"vuelta");return{...$t,atores:[Vi({eyes:[[0,"happy"]],pose:s=>s.pose({armL:[12,8],armR:[60,30]})}),_i({eyes:[[0,"happy"],[i,"look"]],pose:(s,r)=>s.pose({armL:[12,8],armR:[r<e?70:12,r<e?30:8]})}),sn()],extra:(s,r,o)=>{let a=Jt(s),l=ls();s.add(l),l.userData.on(0);let c=Ht(s,t,[[["LE DAS LA LINTERNA"],.05,"w",[0,1.48,-.1],1.8],[["ELLA LA COGE"],e-.2,"y",[0,1.48,-.1],1.4],[["TE DAS LA VUELTA\u2026"],i-.3,"w",[0,1.48,-.1],1.7,1]]);return{update:(h,d,u)=>{let f=Zn(o[1]),g=Zn(o[0]),E=Xt(e-.4,e+.2,h);l.position.set(xe(f.x,g.x,E),xe(f.y,g.y,E),f.z+.12),c(h,u),a.z(h,u)}}},c:zn,range:2,look:Zt}},n=>({...$t,atores:[Vi({eyes:[[0,"wide"]],pose:Wy}),_i({eyes:[[0,"wide"]],pose:t=>t.pose({armL:[40,60],armR:[40,60]})}),sn()],extra:t=>{Jt(t);let e=Gt(t,["\xA1PUM!"],1.3,[0,1.48,-.1],hs);return{update:(i,s,r)=>{tt(e,i,0,99,r)}}},c:zn,range:2,look:Hs([0],Zt)})]);it(12,(n,t)=>{let e=B(t,"llover"),i=B(t,"mundo");return{...Fe,atores:[],extra:s=>{Ce(s,{lit:.3});let r=us(s,520,xo),o=Ht(s,t,[[["UN TRUENO ENORME"],.05,"y",[-.6,2.25,-1.6],1.9],[["Y EMPIEZA A LLOVER\u2026"],e-.3,"b",[-.6,2.25,-1.6],2],[["\u2026COMO SI SE ACABARA EL MUNDO"],i-.9,"w",[-1,2.25,-1.6],2.7,1]]);return{update:(a,l,c)=>{r(a,Xt(e-.4,e+.4,a)),o(a,c)}}},c:[[1,2.4,5],[0,1.2,-2.4],[.6,2.2,4.3],[0,1.2,-2.4]],k:1,range:4,look:Hs([.05,2.4])}});it(13,(n,t)=>{let e=B(t,"pasos"),i=B(t,"luz");return{...$t,atores:[Vi({eyes:[[0,"wide"],[i,"look"]]}),_i({eyes:[[0,"wide"],[i,"look"]]}),sn()],extra:s=>{let r=Jt(s,{luz:.7}),o=Yt("#FFF2C0",1,0);s.add(o);let a=Ht(s,t,[[["PASOS FUERA\u2026"],e-.2,"w",[0,1.48,-.1],1.4],[["UNA LUZ QUE SE ACERCA"],i-.2,"y",[0,1.48,-.1],2,1]]);return{update:(l,c,h)=>{let d=Xt(i-.3,n,l);o.position.set(xe(2.5,1.25,d),.9,xe(-1.8,-.6,d)),o.material.opacity=d*.9,a(l,h),r.z(l,h)}}},c:Bs,range:4,look:Zt}});it(14,(n,t)=>{let e=B(t,"gigante");return{...Fe,atores:[$n({x:4.5,z:-.4,eyes:[[0,"flat"]],move:i=>[xe(5,3.2,i/n),0,-.5],pose:(i,s)=>{i.walk(s*1.4,.5),i.pose({armR:[80,10]})}})],extra:(i,s,r)=>{Ce(i,{lit:.3});let o=us(i,520,[-1,8,0,4.5,-4,3]),a=ls("#FFF6D8");a.scale.setScalar(1.4),i.add(a),a.userData.on(1);let l=Ht(i,t,[[["EL PROFE RAM\xCDREZ"],.05,"b",[3.8,2.4,-.4],1.8],[["CON SU LINTERNA GIGANTE"],e-.6,"y",[3.8,2.4,-.4],2.2,1]]);return{update:(c,h,d)=>{let u=Zn(r[0]);a.position.set(u.x,u.y,u.z+.2),o(c),l(c,d)}}},c:[[3,1.6,3.4],[3.8,1.2,-.5],[2.9,1.6,3],[3.4,1.2,-.5]],range:3,look:Oe}});it(15,(n,t)=>{let e=B(t,"justo"),i=B(t,"termo");return{...Fe,atores:[$n({x:2.4,z:-1.35,eyes:[[0,"flat"]],move:s=>s<.9?[xe(3.4,2.4,s/.9),0,-1]:[2.4,li,-1.35],pose:(s,r)=>r<.9?s.walk(r*1.4,.5):Bn(s)})],extra:(s,r,o)=>{Ce(s,{lit:.3});let a=us(s,520,xo),l=vl();s.add(l);let c=Ht(s,t,[[["SE SIENTA EN EL PORCHE"],.05,"w",[1.9,1.95,-1.1],1.9],[["JUSTO DELANTE DE LA TIENDA"],e-.2,"r",[1.9,1.95,-1.1],2.1],[["CON UN TERMO DE CAF\xC9"],i-.4,"y",[1.9,1.95,-1.1],1.8,1]]);return{update:(h,d,u)=>{let f=Zn(o[0]);l.position.set(f.x+.05,f.y+.1,f.z+.1),a(h),c(h,u)}}},c:[[1.2,1.7,3.3],[1.2,1,-1.6],[1.2,1.65,2.9],[1.2,1,-1.6]],range:3,look:Oe}});it(16,n=>({...Fe,atores:[$n({x:2.4,z:-1.35,y:li,eyes:[[0,"flat"]],pose:(t,e)=>{Bn(t),yd(t,e)}})],extra:(t,e,i)=>{Ce(t,{lit:.3});let s=us(t,300,[0,5,0,4.5,-3,2]),r=vl();t.add(r);let o=Gt(t,["NO SE VA A MOVER DE AH\xCD"],2,[2.4,2.05,-1.1],hs);return{update:(a,l,c)=>{let h=Zn(i[0]);r.position.set(h.x+.05,h.y+.1,h.z+.1),s(a),tt(o,a,.1,99,c)}}},c:[[2.4,1.3,1.8],[2.4,1.15,-1.3],[2.4,1.3,1.5],[2.4,1.15,-1.3]],range:2,look:Oe}));it(17,(n,t)=>{let e=B(t,"tienda"),i=B(t,"con"),s=B(t,"lucia");return{...$t,atores:[Vi({eyes:[[0,"look"]]}),_i({eyes:[[0,"wide"]],pose:(r,o)=>Ro(r,o,.5)}),sn()],extra:r=>{let o=Jt(r),a=Ht(r,t,[[["ATRAPADO"],.05,"r",[0,1.48,-.1],1.2],[["EN LA TIENDA DE TU CRUSH"],e-.3,"p",[0,1.48,-.1],2.2],[["CON TU CRUSH"],i-.1,"p",[0,1.48,-.1],1.4],[["Y CON LUC\xCDA RONCANDO"],s-.4,"w",[0,1.48,-.1],2,1]]);return{update:(l,c,h)=>{a(l,h),o.z(l,h)}}},c:Bs,range:4,look:Zt}});it(18,(n,t)=>{let e=B(t,"suscribete"),i=B(t,"vamos");return{...$t,atores:[_i({x:-.7,eyes:[[0,"look"],[e,"happy"]],pose:(s,r)=>{Bn(s),r>e&&fd(s,r)}}),sn()],extra:s=>{Jt(s);let r=$f(1.5);r.position.set(.55,1.05,-.4),s.add(r);let o=c0(s,12,"#FFE27A"),a=gn(s,["\xBFY SI\u2026?"],.8,[-.7,1.5,-.1]),l=Gt(s,["\xA1VAMOS ALL\xC1!"],1.2,[-.6,1.48,-.1],ds);return{update:(c,h,d)=>{tt(a,c,.1,i-.1,d),tt(l,c,i,99,d),o(c,[.55,1.05,-.3,.9],Xt(e-.3,e+.3,c))}}},c:Bs,range:4,look:Zt}});it(19,(n,t)=>{let e=B(t,"susurra");return{...$t,atores:[Vi({eyes:[[0,"look"]],pose:i=>i.pose({armL:[12,8],armR:[70,60]})})],extra:(i,s,r)=>{Jt(i,{luz:.35});let o=Os(i,r,0),a=gn(i,["TE SUSURRA\u2026"],1,[.45,1.45,-.1]);return{update:(l,c,h)=>{o(1),tt(a,l,e-.2,99,h)}}},c:Ur,range:2,look:Zt}});it(20,(n,t)=>{let e=B(t,"cinco");return{...$t,atores:[Vi({eyes:[[0,"flat"]],talk:[[0,n]],pose:i=>i.pose({armL:[12,8],armR:[70,60]})}),_i({eyes:[[0,"wide"]]})],extra:(i,s,r)=>{Jt(i,{luz:.5});let o=Os(i,r,0),a=Pe(i,["\xBFDE VERDAD HAS VENIDO","A DEVOLVERME LA LINTERNA?"],1.5,[.4,1.48,-.1],54),l=Pe(i,["TE LA PREST\xC9","HACE CINCO HORAS"],1.2,[.4,1.48,-.1],56),c=Gt(i,["5 HORAS"],.8,[-.5,1.42,-.05],Lr);return{update:(h,d,u)=>{o(1),tt(a,h,.05,e-1,u),tt(l,h,e-.9,99,u),tt(c,h,e,99,u)}}},c:zn,range:2,look:Zt}});it(21,(n,t)=>{let e=B(t,"es");return{...$t,atores:[_i({eyes:[[0,"wide"],[e,"flat"]],talk:[[e,n]],pose:(i,s)=>i.pose({armL:[12,8],armR:[s>e?150:12,s>e?150:8]})})],extra:(i,s,r)=>{Jt(i,{luz:.5});let o=Gt(i,["PILLADO"],1,[-.45,1.5,-.1],hs),a=Pe(i,["ES QUE\u2026 LA POD\xCDAS","NECESITAR"],1.2,[-.4,1.52,-.1],56),l=fl(i,3);return{update:(c,h,d)=>{tt(o,c,.05,e-.1,d),tt(a,c,e,99,d);let u=new P;r[0].head.getWorldPosition(u),l(c,[u.x+.2,u.y+.2,u.z,.1])}}},c:zs,range:2,look:Zt}});it(22,(n,t)=>{let e=B(t,"ensena");return{...$t,atores:[Vi({eyes:[[0,"happy"]],talk:[[0,1]],pose:(i,s)=>i.pose({armL:[s>e?120:60,s>e?20:30],armR:[70,60]})}),_i({eyes:[[0,"flat"]]})],extra:(i,s,r)=>{Jt(i,{luz:.6});let o=Os(i,r,0),a=ls("#C8F0FF");i.add(a);let l=Pe(i,["TENGO OTRA"],.9,[.45,1.48,-.1],60);return{update:(c,h,d)=>{o(1);let u=new P;r[0].arms.L.hand.getWorldPosition(u),a.position.set(u.x,u.y,u.z+.12),a.userData.on(c>e?1:0),tt(l,c,.05,99,d)}}},c:zn,range:2,look:Zt}});it(23,(n,t)=>{let e=B(t,"semana"),i=B(t,"maravilla"),s=["LUN","MAR","MI\xC9","JUE","VIE"];return{amb:"gris",fov:30,k:1,atores:[Bt({x:0,z:-.5,eyes:[[0,"look"],[i,"happy"]]})],extra:r=>{let o=s.map((l,c)=>Gt(r,[l],.5,[-1.1+c*.55,2.25,-.4],c%2?Us:u0)),a=Ht(r,t,[[["TIENES QUE SABER UNA COSA"],.1,"w",[0,.75,.1],2.3],[["ESTA SEMANA TE HA VENIDO"],e,"y",[0,.75,.1],2.3],[["DE MARAVILLA"],i-.2,"p",[0,.75,.1],1.5,1]]);return{update:(l,c,h)=>{o.forEach((d,u)=>tt(d,l,e+u*.15,99,h)),a(l,h)}}},c:[[0,1.55,4],[0,1.5,-.5],[0,1.55,3.5],[0,1.5,-.5]],range:3,look:Ns}});Jn(24,["vais","haceis"],[n=>({amb:"albergue",fov:30,atores:[vi(Bt,-.45,-.6,{eyes:[[0,"happy"]]}),vi(le,.45,-.6,{eyes:[[0,"happy"]]})],extra:t=>{md(t,0,-.15,.75,2,.7,"#C8A27A");for(let i of[-.45,.45]){let s=new k(new jt(.07,.06,.14,14),w("#E8E2D2"));s.position.set(i,.85,-.1),t.add(s)}let e=Gt(t,["LA MISMA MESA"],1.4,[0,1.85,-.5]);return{update:(i,s,r)=>tt(e,i,.1,99,r)}},c:[[0,1.5,3],[0,1.1,-.5],[0,1.5,2.6],[0,1.1,-.5]],range:3,look:Ir}),n=>({amb:"salida",fov:30,ambo:{manana:1},atores:[Bt({x:.5,z:-1.9,eyes:[[0,"happy"]]}),le({x:1.2,z:-1.9,eyes:[[0,"happy"]]})],extra:t=>{let e=Gt(t,["EL MISMO AUTOB\xDAS"],1.6,[.9,2.75,-1.6]);return{update:(i,s,r)=>tt(e,i,.1,99,r)}},c:[[.9,1.6,2.2],[.9,1.4,-2],[.9,1.6,1.8],[.9,1.4,-2]],range:3,look:Ir}),(n,t)=>{let e=B(t,"cuenta");return{amb:"sendero",fov:30,atores:[Bt({x:-.35,z:-1,move:i=>[-.35,0,-1+i*.35],eyes:[[0,"happy"]],pose:(i,s)=>i.walk(s*1.4,.5)}),le({x:.35,z:-1,move:i=>[.35,0,-1+i*.35],eyes:[[0,"happy"]],pose:(i,s)=>i.walk(s*1.4+.5,.5)})],extra:i=>{let s=Ht(i,t,[[["LAS MISMAS EXCURSIONES"],.05,"w",[0,2.3,-.4],2.2],[["Y ESO CUENTA"],e-.3,"y",[0,2.3,-.4],1.4,1]]);return{update:(r,o,a)=>s(r,a)}},c:[[0,1.6,3.6],[0,1.3,-.5],[0,1.6,3.2],[0,1.3,-.3]],range:3,look:Ir}}]);var Ad=(n={})=>Mi({outfit:"jaleco",glasses:!0,hair:"old",hairc:"#3A2A22",glow:0,...n});it(25,(n,t)=>{let e=B(t,"curioso");return{...ci(),atores:[Ad({x:0,z:-.4,eyes:[[0,"look"],[e,"happy"]],pose:(i,s)=>s>e?El(i):i.pose()})],extra:i=>{let s=Gt(i,["UN EXPERIMENTO MUY CURIOSO"],2.4,[0,.75,.2],{bg:"#FBF7EC",fg:"#2A2A34"});return{update:(r,o,a)=>tt(s,r,e-1.2,99,a)}},c:[[0,1.6,3.6],[0,1.5,-.4],[0,1.6,3.1],[0,1.5,-.4]],range:3}});it(26,(n,t)=>{let e=B(t,"simbolos"),i=B(t,"sin");return{...ci(),atores:[Ad({x:-1.3,z:-.4,eyes:[[0,"look"]],pose:El}),Yn(1,{x:1.4,z:-.2,eyes:[[0,"look"],[i,"wide"]]})],extra:s=>{let r=Vy.slice(0,3).map((c,h)=>Mo(s,c,1,[-.2+(h-1)*.2,2.2-h*.45,-.6+h*.05])),o=["\u2295 \u2297 \u229E","\u25B3 \u25C7 \u2610","\u221E \u2211 \u03A9"].map((c,h)=>Mo(s,c,.7,[.6+h*.5,.85,-.3],{bg:"#E8E2D2"})),a=Gt(s,["\xBF?"],.5,[1.4,2.05,-.1],hs),l=Ht(s,t,[[["PALABRAS INVENTADAS"],.2,"y",[0,2.75,-.5],2,1]]);return{update:(c,h,d)=>{r.forEach((u,f)=>tt(u,c,.4+f*.3,99,d)),o.forEach((u,f)=>tt(u,c,e-.2+f*.15,99,d)),tt(a,c,i,99,d),l(c,d)}}},c:[[0,1.6,4.4],[0,1.5,-.4],[0,1.6,3.9],[0,1.5,-.4]],k:1,range:3}});it(27,(n,t)=>{let e=B(t,"otros");return{...ci(),atores:[Yn(1,{x:-1.1,z:-.3,eyes:[[0,"look"]]}),Yn(3,{x:1.1,z:-.3,eyes:[[0,"look"],[e+.5,"wide"]]})],extra:i=>{let s=Mo(i,"SARICIK",.8,[-1.1,2.05,-.3]),r=Gt(i,["\xD7 1"],.6,[-1.1,.75,.1],Us),o=[0,1,2,3].map(l=>Mo(i,"SARICIK",.8,[1.1+l*.06,2.05-l*.06,-.3-l*.05])),a=Gt(i,["\xD7 25"],.7,[1.1,.75,.1],u0);return{update:(l,c,h)=>{tt(s,l,.1,99,h),tt(r,l,.3,99,h),o.forEach((d,u)=>tt(d,l,e+u*.2,99,h)),tt(a,l,e+.4,99,h)}}},c:[[0,1.6,4.2],[0,1.45,-.3],[0,1.6,3.8],[0,1.45,-.3]],k:1,range:3}});it(28,(n,t)=>{let e=B(t,"bueno"),i=B(t,"malo");return{...ci(),atores:[Ad({x:-1.2,z:-.4,eyes:[[0,"look"]],talk:[[0,n]],pose:gl})],extra:s=>{let r=Mo(s,"IKTITAF",1.3,[.5,2,-.4]),o=Gt(s,["\xBFALGO BUENO?"],1.2,[-.05,.95,-.1],Al),a=Gt(s,["\xBFALGO MALO?"],1.2,[1.1,.95,-.1],hs);return{update:(l,c,h)=>{tt(r,l,.1,99,h),tt(o,l,e-.3,99,h),tt(a,l,i-.3,99,h)}}},c:[[0,1.6,4],[0,1.45,-.4],[0,1.6,3.6],[0,1.45,-.4]],k:1,range:3}});it(29,(n,t)=>{let e=B(t,"sin");return{amb:"gris",fov:30,k:1,atores:[],extra:i=>{let s=yl(i,[["1 VEZ",.28,"#B8BCC8"],["2",.38,"#A8C8E0"],["5",.52,"#7AB8D8"],["10",.68,"#5FA0D8"],["25",.9,"#3F8A52"]],2.8,[0,1.6,-.4],{title:"\xBFLE PAREC\xCDA ALGO BUENO?"}),r=Gt(i,["SIN NINGUNA OTRA RAZ\xD3N"],2.1,[0,.55,-.2],ds);return{update:(o,a,l)=>{s.scale.y=Xt(0,1,o)*.999+.001,tt(r,o,e-.2,99,l)}}},c:[[0,1.4,3.9],[0,1.35,-.4],[0,1.4,3.5],[0,1.35,-.4]],range:3}});it(30,(n,t)=>{let e=B(t,"vemos"),i=B(t,"agradable");return{amb:"gris",fov:30,k:1,atores:[Bt({x:-.6,z:-.5,eyes:[[0,"look"],[i,"happy"]]}),le({x:.6,z:-.5,eyes:[[0,"look"],[i,"happy"]]})],extra:s=>{let r=To(s,.5);r.position.set(0,2,-.4);let o=Ht(s,t,[[["EFECTO DE MERA EXPOSICI\xD3N"],.1,"p",[0,2.55,-.4],2.6],[["LO QUE VEMOS A MENUDO\u2026"],e-.3,"w",[0,2.55,-.4],2.2],[["\u2026NOS GUSTA M\xC1S"],i-.6,"y",[0,2.55,-.4],1.6,1]]);return{update:(a,l,c)=>{o(a,c),r.visible=a>i-.3,r.scale.setScalar(bo(a))}}},c:[[0,1.75,4.2],[0,1.65,-.5],[0,1.75,3.7],[0,1.65,-.5]],range:3,look:Ns}});it(31,(n,t)=>{let e=B(t,"funciona"),i=B(t,"ayuda");return{amb:"gris",fov:30,k:1,atores:[Bt({x:0,z:-.5,eyes:[[0,"flat"],[i,"happy"]],pose:(s,r)=>r>i?s.pose({armL:[12,8],armR:[150,20]}):s.pose()})],extra:s=>{let r=Ht(s,t,[[["OJO: NO ES MAGIA"],.05,"r",[0,2.35,-.4],1.7],[["SI CAES MAL, NO FUNCIONA"],e-.4,"w",[0,2.35,-.4],2.2],[["PERO AYUDA"],i-.3,"y",[0,2.35,-.4],1.3,1]]);return{update:(o,a,l)=>r(o,l)}},c:[[0,1.65,3.8],[0,1.55,-.5],[0,1.65,3.3],[0,1.55,-.5]],range:3,look:Ns}});it(32,(n,t)=>{let e=B(t,"mucha");return{...$t,atores:[Vi({eyes:[[0,"look"]]}),_i({eyes:[[0,"happy"]]}),sn()],extra:i=>{let s=Jt(i),r=Ht(i,t,[[["5 D\xCDAS \xD7 24 HORAS"],.05,"w",[0,1.48,-.1],1.8],[["MUCHA EXPOSICI\xD3N"],e-.2,"y",[0,1.48,-.1],1.8,1]]);return{update:(o,a,l)=>{r(o,l),s.z(o,l)}}},c:Bs,range:4,look:Zt}});it(33,(n,t)=>{let e=B(t,"fuerte"),i=B(t,"sacude");return{...Fe,atores:[],extra:s=>{Ce(s,{lit:.3,porche:!0});let r=s.children.find(l=>l.isGroup),o=us(s,520,xo),a=Ht(s,t,[[["OTRO TRUENO"],.05,"y",[-.6,2.25,-1.6],1.5],[["M\xC1S FUERTE"],e-.2,"r",[-.6,2.25,-1.6],1.3],[["LA TIENDA SE SACUDE"],i-.3,"w",[-.6,2.25,-1.6],2,1]]);return{update:(l,c,h)=>{o(l),r&&(r.rotation.z=l>i-.3?Math.sin(l*30)*.03:0),a(l,h),Py(h,l>i-.3?.02:0,l)}}},c:[[.5,2,4.6],[0,1.1,-2.4],[.3,1.9,4],[0,1.1,-2.4]],k:1,range:4,look:Hs([.05,.9])}});var vd=(n={})=>Mi({outfit:"jaleco",glasses:!0,glow:0,...n}),E0=(n={})=>Mi({outfit:"jaleco",glasses:!0,hair:"old",hairc:"#8A7A6A",glow:0,...n}),y0=n=>n.pose({armL:[75,10],armR:[12,8],lean:-8}),_l=(n={})=>zt(le,.3,-.15,{pose:y0,...n}),Ml=(n={})=>zt(Bt,-.3,-.15,n),Si=[[0,1.1,2],[0,.88,-.2],[0,1.08,1.8],[0,.88,-.2]],Ti=(n,t,e)=>{let i=Yt("#FF4A5A",.55,0);n.add(i);let s=new P;return r=>{t[e].head.getWorldPosition(s),i.position.set(s.x,s.y-.1,s.z+.12),i.material.opacity=r*.35}};it(34,(n,t)=>{let e=B(t,"mano"),i=B(t,"ella");return{...$t,atores:[_l({eyes:[[0,"wide"]],pose:(s,r)=>r>e?y0(s):s.pose()}),Ml({eyes:[[0,"look"],[e,"wide"]]}),sn()],extra:(s,r,o)=>{let a=Jt(s,{luz:.8}),l=Ti(s,o,1),c=Ht(s,t,[[["UNA MANO EN TU BRAZO"],e-.2,"w",[0,1.48,-.1],1.9],[["ES ELLA \u2665"],i-.2,"p",[0,1.48,-.1],1.1,1]]);return{update:(h,d,u)=>{c(h,u),l(Xt(i,i+.6,h)),a.z(h,u)}}},c:Si,range:2,look:Hs([0],Zt)}});it(35,(n,t)=>{let e=B(t,"tormentas");return{...$t,atores:[_l({eyes:[[0,"sad"]],talk:[[0,n]]}),Ml({eyes:[[0,"wide"]]})],extra:(i,s,r)=>{Jt(i,{luz:.8});let o=Ti(i,r,1),a=Pe(i,["PERDONA\u2026"],.8,[.4,1.48,-.1],60),l=Pe(i,["ES QUE LAS TORMENTAS","ME DAN MUCH\xCDSIMO MIEDO"],1.5,[.35,1.48,-.1],54);return{update:(c,h,d)=>{tt(a,c,.05,e-.8,d),tt(l,c,e-.7,99,d),o(1)}}},c:Si,range:2,look:Zt}});it(36,(n,t)=>{let e=B(t,"mueves"),i=B(t,"respiras"),s=B(t,"estatua");return{...$t,atores:[_l({eyes:[[0,"shut"]]}),Ml({eyes:[[0,"wide"]],tint:void 0})],extra:(r,o,a)=>{Jt(r,{luz:.8});let l=Ti(r,a,1),c=gd(a[1],"#C8CCD4",.7),h=Ht(r,t,[[["NO TE SUELTA"],.05,"p",[-.1,1.48,-.1],1.3],[["NO TE MUEVES"],e-.3,"w",[-.1,1.48,-.1],1.3],[["NO RESPIRAS"],i-.3,"w",[-.1,1.48,-.1],1.3],[["ERES UNA ESTATUA"],s-.4,"b",[-.1,1.48,-.1],1.7,1]]);return{update:(d,u,f)=>{h(d,f),l(1),c(Xt(s-.4,s+.3,d)*.8)}}},c:zs,range:2,look:Zt}});it(37,(n,t)=>{let e=B(t,"buscamos");return{amb:"gris",fov:30,k:1,atores:[Bt({x:-.55,z:-.5,eyes:[[0,"wide"]],move:i=>[xe(-1,-.45,Xt(e-.3,e+.6,i)),0,-.5],pose:i=>Ro(i,0,.3)}),le({x:.55,z:-.5,eyes:[[0,"wide"]]})],extra:i=>{let s=Ht(i,t,[[["CUANDO TENEMOS MIEDO\u2026"],.05,"w",[0,2.35,-.4],2.1],[["\xBFPOR QU\xC9 BUSCAMOS A ALGUIEN?"],e-.3,"y",[0,2.35,-.4],2.5,1]]);return{update:(r,o,a)=>s(r,a)}},c:[[0,1.65,3.9],[0,1.55,-.5],[0,1.65,3.4],[0,1.55,-.5]],range:3,look:Hs([.2])}});it(38,(n,t)=>{let e=B(t,"quiso");return{...ci(),atores:[vd({x:0,z:-.4,eyes:[[0,"look"],[e,"smug"]],pose:(i,s)=>s>e?i.pose({armL:[12,8],armR:[150,150]}):i.pose()})],extra:i=>{let s=Gt(i,["QUISO AVERIGUARLO"],1.8,[0,.75,.2],{bg:"#FBF7EC",fg:"#2A2A34"});return{update:(r,o,a)=>tt(s,r,e-.2,99,a)}},c:[[0,1.6,3.6],[0,1.5,-.4],[0,1.6,3.1],[0,1.5,-.4]],range:3}});it(39,(n,t)=>{let e=B(t,"voluntarias"),i=B(t,"descargas");return{amb:"gris",fov:30,k:1,atores:[vd({x:-1.6,z:-.6,eyes:[[0,"flat"]],talk:[[0,n]],pose:(s,r)=>r>i?El(s):gl(s,r)}),...[0,1,2].map(s=>So(s,{x:-.4+s*.7,z:-.2,eyes:[[0,"look"],[i+.3,"wide"]],pose:(r,o)=>o>i+.3?Ro(r,o,.5):r.pose()}))],extra:s=>{f0(s,1.9,-.9);let r=Ht(s,t,[[["VOLUNTARIAS"],e-.2,"w",[.3,2.3,-.3],1.4],[["DESCARGAS EL\xC9CTRICAS"],i-.2,"r",[.3,2.3,-.3],2.1],[["\xA1BASTANTE DOLOROSAS!"],B(t,"dolorosas")-.5,"r",[.3,2.3,-.3],2,1]]);return{update:(o,a,l)=>r(o,l)}},c:[[0,1.6,4.6],[0,1.4,-.4],[0,1.6,4.1],[0,1.4,-.4]],range:3}});it(40,(n,t)=>{let e=B(t,"nadie"),i=B(t,"sabian");return{amb:"gris",fov:30,k:1,atores:[...[0,1,2].map(s=>So(s,{x:-1.2+s*.7,z:-.2,eyes:[[0,"wide"]],pose:(r,o)=>Ro(r,o,.4)}))],extra:s=>{f0(s,1.4,-.8);let r=Gt(s,["\u2717"],.5,[1.4,1.3,-.4],hs),o=Ht(s,t,[[["ERA MENTIRA"],.05,"y",[-.3,2.3,-.3],1.4],[["NADIE RECIBI\xD3 NINGUNA"],e-.2,"w",[-.3,2.3,-.3],2],[["PERO ELLAS NO LO SAB\xCDAN"],i-.9,"p",[-.3,2.3,-.3],2.2,1]]);return{update:(a,l,c)=>{o(a,c),tt(r,a,.3,99,c)}}},c:[[0,1.6,4.4],[0,1.4,-.4],[0,1.6,3.9],[0,1.4,-.4]],range:3}});it(41,(n,t)=>{let e=B(t,"solas"),i=B(t,"otras");return{amb:"gris",fov:30,k:1,atores:[vd({x:0,z:.2,eyes:[[0,"look"]],talk:[[0,n]],pose:gl}),So(0,{x:-.6,z:.4,eyes:[[0,"look"]]})],extra:s=>{let r=r0(s,-1.4,-1.4,["ESPERAR SOLA"],"#5A6070"),o=r0(s,1.4,-1.4,["ESPERAR","ACOMPA\xD1ADA"],"#3F8A52"),a=gn(s,["\xBFD\xD3NDE QUIERES ESPERAR?"],2,[0,2.4,.2]);return{update:(l,c,h)=>{tt(a,l,.1,e-.3,h),tt(r,l,e-.3,99),tt(o,l,i-.3,99)}}},c:[[0,1.6,4.8],[0,1.4,-.6],[0,1.6,4.3],[0,1.4,-.6]],range:3}});it(42,(n,t)=>{let e=B(t,"sobre");return{amb:"gris",fov:30,k:1,atores:[],extra:i=>{let s=yl(i,[[`POCO
ASUSTADAS`,.38,"#B8BCC8"],[`MUY
ASUSTADAS`,.9,"#3F8A52"]],2.6,[0,1.55,-.4],{title:"\xBFPREFER\xCDAN ESPERAR ACOMPA\xD1ADAS?"}),r=Gt(i,["CON GENTE EN SU MISMA SITUACI\xD3N"],2.5,[0,.5,-.2],Al);return{update:(o,a,l)=>{s.scale.y=Xt(0,1.2,o)*.999+.001,tt(r,o,e-.2,99,l)}}},c:[[0,1.4,3.9],[0,1.3,-.4],[0,1.4,3.5],[0,1.3,-.4]],range:3}});it(43,(n,t)=>{let e=B(t,"queremos",1.5);return{...$t,atores:[_l({eyes:[[0,"shut"]]}),Ml({eyes:[[0,"happy"]]}),sn()],extra:(i,s,r)=>{let o=Jt(i,{luz:.8}),a=Ht(i,t,[[["NO QUEREMOS ESTAR SOLOS"],.1,"w",[0,1.48,-.1],2.1],[["ALGUIEN AL LADO QUE NOS ENTIENDA"],e-.2,"y",[0,1.48,-.1],2.6,1]]);return{update:(l,c,h)=>{a(l,h),o.z(l,h)}}},c:Bs,range:4,look:Zt}});it(44,(n,t)=>{let e=B(t,"fuerte"),i=B(t,"tose"),s=B(t,"queda");return{...Fe,atores:[$n({x:2.4,z:-1.35,y:li,eyes:[[0,"flat"],[i,"shut"],[i+.8,"flat"]],pose:(r,o)=>{Bn(r),o<i?yd(r,o):r.pose({lean:o<i+.8?Math.sin(o*30)*6:0})}})],extra:(r,o,a)=>{Ce(r,{lit:.3});let l=us(r,300,[0,5,0,4.5,-3,2]),c=vl();r.add(c);let h=Ht(r,t,[[["SLUUUURP"],e-.4,"y",[2.4,2.05,-1.1],1.3],[["COF, COF"],i-.1,"w",[2.4,2.05,-1.1],1],[["Y SE QUEDA AH\xCD"],s-.4,"r",[2.4,2.05,-1.1],1.5,1]]);return{update:(d,u,f)=>{let g=Zn(a[0]);c.position.set(g.x+.05,g.y+.1,g.z+.1),l(d),h(d,f)}}},c:[[2.4,1.3,1.9],[2.4,1.15,-1.3],[2.4,1.3,1.6],[2.4,1.15,-1.3]],range:2,look:Oe}});it(45,(n,t)=>{let e=B(t,"pegados"),i=B(t,"ruido");return{...$t,atores:[zt(le,.28,-.15,{eyes:[[0,"happy"]],pose:s=>s.pose({armL:[8,6],armR:[125,150]})}),zt(Bt,-.28,-.15,{eyes:[[0,"look"]]}),sn()],extra:s=>{let r=Jt(s),o=Ht(s,t,[[["EN EL SUELO"],.1,"w",[0,1.48,-.1],1.2],[["MUY PEGADOS"],e-.3,"p",[0,1.48,-.1],1.3],[["SHHH\u2026"],i-.3,"b",[0,1.48,-.1],.9,1]]);return{update:(a,l,c)=>{o(a,c),r.z(a,c)}}},c:Si,range:2,look:Zt}});it(46,(n,t)=>{let e=B(t,"gominolas"),i=B(t,"paquete");return{...$t,atores:[zt(le,.45,-.25,{eyes:[[0,"happy"]]}),zt(Bt,-.45,-.25,{eyes:[[0,"look"]]})],extra:s=>{Jt(s);let r=ky();r.position.set(-.15,.17,.35),r.rotation.x=-.3,s.add(r);let o=Ly(s,.7);o.position.set(.2,.09,.4),o.rotation.set(-1.2,0,.2),o.scale.y=.5;let a=Ht(s,t,[[["INVENTARIO DE PROVISIONES"],.1,"w",[0,1.48,-.1],2.3],[["MEDIA BOLSA DE GOMINOLAS"],e-.9,"p",[0,1.48,-.1],2.3],[["GALLETAS APLASTADAS"],i-.2,"y",[0,1.48,-.1],2,1]]);return{update:(l,c,h)=>{r.visible=l>e-.9,o.visible=l>i-.2,a(l,h)}}},c:[[0,.95,1.7],[0,.55,-.1],[0,.92,1.45],[0,.55,-.1]],range:2,look:Zt}});Jn(47,["comeis","lucia"],[(n,t)=>({...$t,atores:[sn(),zt(Bt,-.45,-.15,{eyes:[[0,"wide"]]})],extra:e=>{let i=Jt(e),s=Gy();s.position.set(.6,.45,-1.1),s.renderOrder=6,e.add(s);let r=R(.4,.45,.25,w("#4A86C7"),.85,.22,-1.1);e.add(r);let o=Ht(e,t,[[["UNA CHOCOLATINA"],.05,"y",[.2,1.5,-.5],1.5],[["ESCONDIDA EN LA MOCHILA DE LUC\xCDA"],B(t,"escondida")-.3,"w",[.2,1.5,-.5],2.5,1]]);return{update:(a,l,c)=>{s.position.y=.45+Xt(.2,1,a)*.25,o(a,c),i.z(a,c)}}},c:Bs,range:4,look:Zt}),n=>({...$t,atores:[zt(le,.3,-.15,{eyes:[[0,"happy"]],pose:(t,e)=>t.pose({armL:[8,6],armR:[110+Math.sin(e*6)*8,140]})}),zt(Bt,-.3,-.15,{eyes:[[0,"happy"]],pose:(t,e)=>t.pose({armL:[110+Math.cos(e*6)*8,140],armR:[8,6]})})],extra:t=>{Jt(t);let e=Gt(t,["A MEDIAS"],1,[0,1.48,-.1],ds);return{update:(i,s,r)=>tt(e,i,.1,99,r)}},c:Si,range:2,look:Zt}),n=>({...$t,atores:[sn({p2:(t,e)=>t.pose({bob:Math.abs(Math.sin(e*3))*.03})})],extra:t=>{let e=Jt(t),i=Gt(t,["\xA1ROOOOONC!"],1.3,[.1,1.25,-.8],Us),s=gn(t,["\u2026COMO SI LO SUPIERA"],1.6,[.1,1.55,-.8]);return{update:(r,o,a)=>{tt(i,r,.1,99,a),tt(s,r,1.4,99,a),e.z(r*2,a)}}},c:[[.1,1,1],[.1,.45,-1.3],[.1,.95,.8],[.1,.45,-1.3]],range:2,look:Zt})]);it(48,(n,t)=>{let e=B(t,"incomodo"),i=B(t,"sabes");return{...$t,atores:[zt(le,.4,-.15,{eyes:[[0,"down"]]}),zt(Bt,-.4,-.15,{eyes:[[0,"lookl"],[i,"down"]]}),sn()],extra:s=>{Jt(s);let r=Ht(s,t,[[["\u2026"],.1,"w",[0,1.48,-.1],.6],[["SILENCIO INC\xD3MODO"],e-.6,"w",[0,1.48,-.1],1.8],[["\xBFQU\xC9 DIGO?"],i-.2,"b",[-.4,1.48,-.1],1.1,1]]);return{update:(o,a,l)=>r(o,l)}},c:zn,range:2,look:Zt}});it(49,(n,t)=>{let e=B(t,"jugamos"),i=B(t,"susurros");return{...$t,atores:[zt(le,.4,-.15,{eyes:[[0,"down"],[e+.3,"look"]]}),zt(Bt,-.4,-.15,{eyes:[[0,"look"],[.6,"happy"]],talk:[[e,n]],pose:(s,r)=>r>e?wo(s,r):s.pose({armL:[12,8],armR:[150,160]})})],extra:s=>{Jt(s);let r=Yt("#FFF2A0",.5,0);r.position.set(-.4,1.45,-.1),s.add(r);let o=Gt(s,["\xA1IDEA!"],.7,[-.4,1.48,-.05]),a=Pe(s,["\xBFJUGAMOS A LAS PREGUNTAS?","PERO EN SUSURROS"],1.5,[-.3,1.48,-.1],54);return{update:(l,c,h)=>{r.material.opacity=(1-Xt(e-.3,e,l))*Xt(.2,.5,l)*.9,tt(o,l,.3,e-.3,h),tt(a,l,e-.1,99,h)}}},c:zn,range:2,look:Zt}});Jn(50,["1997"],[n=>({amb:"gris",fov:30,k:1,atores:[],extra:t=>{let e=Gt(t,["ESTO TAMBI\xC9N VIENE","DE LA CIENCIA"],2.2,[0,1.6,-.4],{h:260});return{update:(i,s,r)=>tt(e,i,.05,99,r)}},c:[[0,1.6,3.4],[0,1.6,-.4],[0,1.6,3],[0,1.6,-.4]],range:3}),(n,t)=>{let e=B(t,"parejas");return{...ci(),atores:[E0({x:0,z:-.4,eyes:[[0,"look"]],pose:(i,s)=>s>e?i.pose({armL:[80,0],armR:[80,0]}):i.pose()}),Yn(0,{x:-1.5,z:-.1,eyes:[[0,"look"]]}),Yn(1,{x:-.9,z:-.1,eyes:[[0,"lookl"]]}),Yn(3,{x:.9,z:-.1,eyes:[[0,"look"]]}),Yn(4,{x:1.5,z:-.1,eyes:[[0,"lookl"]]})],extra:i=>{let s=Gt(i,["PAREJAS DE DESCONOCIDOS"],2.1,[0,.65,.3],{bg:"#FBF7EC",fg:"#2A2A34"});return{update:(r,o,a)=>tt(s,r,e-.2,99,a)}},c:[[0,1.6,4.4],[0,1.4,-.4],[0,1.6,3.9],[0,1.4,-.4]],k:1,range:3}}]);var _d=(n,t,e={})=>[vi(i=>Yn(n,i),-.7,-.3,{eyes:[[0,"look"]],...e}),vi(i=>Yn(t,i),.7,-.3,{eyes:[[0,"lookl"]],...e})],Md=n=>{n0(n,-.7,-.45,0),n0(n,.7,-.45,0)};it(51,(n,t)=>{let e=B(t,"lista"),i=B(t,"personales");return{...ci(),atores:_d(0,1,{talk:[[1,n]]}),extra:s=>{Md(s);let r=hd(s,["36 PREGUNTAS","1. \xBFTe gustar\xEDa ser famoso?","\u2026","36. \xBFQu\xE9 te da miedo?"],1.5,[0,1.75,-.3],52),o=Gt(s,["CADA VEZ M\xC1S PERSONALES \u2191"],2.2,[0,2.55,-.5],ds);return{update:(a,l,c)=>{r.visible=a>e-.3,tt(o,a,i-.6,99,c)}}},c:[[0,1.6,4],[0,1.5,-.5],[0,1.6,3.6],[0,1.5,-.5]],range:3}});it(52,(n,t)=>{let e=B(t,"cual");return{...ci(),atores:_d(3,4,{talk:[[1,n]]}),extra:i=>{Md(i);let s=gn(i,["CHARLA NORMAL"],1.4,[0,2.4,-.5]),r=Pe(i,["\xBFCU\xC1L ES TU","ASIGNATURA FAVORITA?"],1.4,[-.4,2,-.2],54);return{update:(o,a,l)=>{tt(s,o,.1,99,l),tt(r,o,e-.2,99,l)}}},c:[[0,1.6,4],[0,1.5,-.5],[0,1.6,3.6],[0,1.5,-.5]],range:3}});it(53,n=>({...ci(),atores:_d(0,1,{talk:[[0,n]]}),extra:t=>{Md(t);let e=zf(.5,3);e.position.set(0,2,-.6),t.add(e);let i=Gt(t,["45 MINUTOS"],1.2,[0,2.65,-.5],Lr);return{update:(s,r,o)=>{e.rotation.z=-s*2,tt(i,s,.1,99,o)}}},c:[[0,1.6,4],[0,1.6,-.5],[0,1.6,3.6],[0,1.6,-.5]],range:3}));it(54,(n,t)=>{let e=B(t,"cercanas");return{amb:"gris",fov:30,k:1,atores:[],extra:i=>{let s=yl(i,[[`CHARLA
NORMAL`,.42,"#B8BCC8"],[`36
PREGUNTAS`,.88,"#E8667F"]],2.6,[0,1.55,-.4],{title:"\xBFCU\xC1N CERCA SE SENT\xCDAN?"}),r=Gt(i,["M\xC1S CERCANAS"],1.4,[0,.5,-.2],ds);return{update:(o,a,l)=>{s.scale.y=Xt(0,1.2,o)*.999+.001,tt(r,o,e-.3,99,l)}}},c:[[0,1.4,3.9],[0,1.3,-.4],[0,1.4,3.5],[0,1.3,-.4]],range:3}});it(55,(n,t)=>{let e=B(t,"abrirse"),i=B(t,"turnos"),s=B(t,"acerquen");return{amb:"gris",fov:30,k:1,atores:[Bt({x:-1,z:-.5,eyes:[[0,"look"],[s,"happy"]],move:r=>[xe(-1.1,-.45,Xt(e,s+.3,r)),0,-.5]}),le({x:1,z:-.5,eyes:[[0,"look"],[s,"happy"]],move:r=>[xe(1.1,.45,Xt(e,s+.3,r)),0,-.5]})],extra:r=>{let o=Ht(r,t,[[["NO ENAMORAN A NADIE"],.1,"w",[0,2.4,-.4],2],[["ABRIRSE POCO A POCO"],e-.2,"y",[0,2.4,-.4],2],[["POR TURNOS"],i-.2,"y",[0,2.4,-.4],1.2],[["\u2026Y OS ACERC\xC1IS"],s-.5,"p",[0,2.4,-.4],1.6,1]]);return{update:(a,l,c)=>o(a,c)}},c:[[0,1.65,4],[0,1.55,-.5],[0,1.65,3.5],[0,1.55,-.5]],range:3,look:Ns}});it(56,n=>({...$t,atores:[zt(le,.4,-.15,{eyes:[[0,"happy"]]}),zt(Bt,-.4,-.15,{eyes:[[0,"happy"]]}),sn()],extra:t=>{Jt(t);let e=Gt(t,["EMPEZ\xC1IS"],1.1,[0,1.48,-.1]);return{update:(i,s,r)=>tt(e,i,.05,99,r)}},c:zn,range:2,look:Zt}));var A0=(n,t)=>Pe(n,t,1.5,[0,1.48,-.1],52);it(57,n=>({...$t,atores:[zt(le,.5,-.15,{eyes:[[0,"look"]]}),zt(Bt,-.5,-.15,{eyes:[[0,"happy"]],talk:[[0,n]],pose:wo})],extra:t=>{Jt(t);let e=A0(t,["Si pudieras despertarte","con una habilidad nueva,","\xBFcu\xE1l ser\xEDa?"]);return{update:()=>{}}},c:zn,range:2,look:Zt}));it(58,(n,t)=>{let e=B(t,"ramirez");return{...$t,atores:[zt(le,.45,-.15,{eyes:[[0,"smug"]],talk:[[0,n]]}),zt(Bt,-.45,-.15,{eyes:[[0,"look"],[e,"happy"]]})],extra:(i,s,r)=>{Jt(i);let o=gd(r[0],"#9AB8FF",.7),a=Pe(i,["VOLVERME INVISIBLE"],1.2,[.45,1.48,-.1],58),l=Pe(i,["PARA SALIR DE AQU\xCD","SIN QUE ME VEA RAM\xCDREZ"],1.5,[.35,1.48,-.1],54);return{update:(c,h,d)=>{tt(a,c,.1,B(t,"para")-.2,d),tt(l,c,B(t,"para")-.1,99,d),o(Xt(.4,1.2,c)*(1-Xt(B(t,"para")-.2,B(t,"para"),c))*.25)}}},c:zn,range:2,look:Zt}});it(59,(n,t)=>{let e=B(t,"tapa"),i=B(t,"eso");return{...$t,atores:[zt(le,.45,-.15,{eyes:[[0,"look"],[e,"happy"]],talk:[[i,n]],pose:(s,r)=>r>e?p0(s,r):s.pose()}),zt(Bt,-.45,-.15,{eyes:[[0,"smug"]],talk:[[0,e-.4]],pose:wo})],extra:s=>{Jt(s);let r=Pe(s,["SABER LO QUE","PIENSA LA GENTE"],1.2,[-.4,1.48,-.1],56),o=Pe(s,["ESO SER\xCDA HORRIBLE"],1.2,[.45,1.48,-.1],56),a=gn(s,["(SE AGUANTA LA RISA)"],1.3,[.45,1.35,0]);return{update:(l,c,h)=>{tt(r,l,.3,e-.3,h),tt(a,l,e,i-.2,h),tt(o,l,i-.1,99,h)}}},c:zn,range:2,look:Zt}});it(60,n=>({...$t,atores:[zt(le,.5,-.15,{eyes:[[0,"look"]],talk:[[0,n]],pose:wo}),zt(Bt,-.5,-.15,{eyes:[[0,"look"]]})],extra:t=>(Jt(t),A0(t,["\xBFCu\xE1l ser\xEDa","tu d\xEDa perfecto?"]),{update:()=>{}}),c:zn,range:2,look:Zt}));Jn(61,["mira"],[(n,t)=>{let e=B(t,"un"),i=B(t,"bueno");return{...$t,atores:[zt(le,.45,-.15,{eyes:[[0,"lookl"],[e,"happy"]],talk:[[e,n]],pose:(s,r)=>r<e?s.pose({armL:[8,6],armR:[130,160],head:8}):s.pose()}),zt(Bt,-.45,-.15,{eyes:[[0,"look"]]})],extra:s=>{Jt(s);let r=dd(s,["MMMM\u2026"],.8,[.75,1.55,-.2]),o=Pe(s,["UN D\xCDA DE EXCURSI\xD3N.","COMO EL DE HOY"],1.3,[.4,1.48,-.1],54),a=Pe(s,["BUENO\u2026 COMO EL DE HOY,","PERO SIN BARRO"],1.4,[.4,1.48,-.1],54);return{update:(l,c,h)=>{tt(r,l,.1,e-.2,h),tt(o,l,e-.1,i-.2,h),tt(a,l,i-.1,99,h)}}},c:zn,range:2,look:Zt}},(n,t)=>{let e=B(t,"aparta");return{...$t,atores:[zt(le,.45,-.15,{eyes:[[0,"lookl"],[e,"down"]],pose:(i,s)=>i.pose({head:s>e?-10:0})})],extra:(i,s,r)=>{Jt(i);let o=Ti(i,r,0),a=Ht(i,t,[[["TE MIRA"],.05,"p",[.45,1.45,-.1],.9],[["Y APARTA LA MIRADA"],e-.2,"w",[.45,1.45,-.1],1.6,1]]);return{update:(l,c,h)=>{a(l,h),o(Xt(e-.3,e+.4,l))}}},c:Ur,range:2,look:Zt}}]);it(62,(n,t)=>{let e=B(t,"veterinaria"),i=B(t,"miedo");return{...$t,atores:[zt(le,.45,-.15,{eyes:[[0,"look"],[i,"sad"]],talk:[[e-1,n]]}),zt(Bt,-.45,-.15,{eyes:[[0,"look"]]})],extra:s=>{Jt(s);let r=Gt(s,["LAS PREGUNTAS VAN SUBIENDO \u2191"],2.2,[0,1.48,-.1]),o=dd(s,["QUIERO SER VETERINARIA"],1.4,[.5,1.6,-.2]),a=dd(s,["\xBFY SI NO SACO LA NOTA?"],1.4,[.5,1.6,-.2],{bg:"#DCE4F0",fg:"#2A3A6A"});return{update:(l,c,h)=>{tt(r,l,.05,e-.5,h),tt(o,l,e-.4,i-.2,h),tt(a,l,i-.1,99,h)}}},c:zn,range:2,look:Zt}});it(63,(n,t)=>{let e=B(t,"invisible");return{...$t,atores:[zt(Bt,-.45,-.15,{eyes:[[0,"sad"]],talk:[[0,n]]})],extra:(i,s,r)=>{Jt(i);let o=gd(r[0],"#8A90A0",.7),a=gn(i,["INVISIBLE EN CLASE"],1.5,[-.45,1.42,-.1]);return{update:(l,c,h)=>{tt(a,l,e-.3,99,h),o(Xt(e-.3,e+.5,l)*.6)}}},c:zs,range:2,look:Zt}});it(64,(n,t)=>{let e=B(t,"pues");return{...$t,atores:[zt(le,.45,-.15,{eyes:[[0,"look"],[e+.8,"happy"]],talk:[[e,n]]})],extra:i=>{Jt(i);let s=Pe(i,["PUES YO TE VEO."],1.1,[.4,1.47,-.1],60),r=c0(i,10,"#FFE2A8");return{update:(o,a,l)=>{tt(s,o,e-.1,99,l),r(o,[.45,.95,-.3,.75],Xt(e,e+.4,o)*.5)}}},c:Ur,range:2,look:Zt}});it(65,(n,t)=>{let e=B(t,"pero");return{...$t,atores:[zt(le,.32,-.15,{eyes:[[0,"happy"]]}),zt(Bt,-.32,-.15,{eyes:[[0,"happy"]]}),sn()],extra:i=>{Jt(i);let s=To(i,.3);s.position.set(0,1.25,-.1);let r=Ht(i,t,[[["SILENCIO\u2026"],.05,"w",[0,1.48,-.1],1.1],[["PERO NO ES INC\xD3MODO"],e-.2,"p",[0,1.48,-.1],1.8,1]]);return{update:(o,a,l)=>{r(o,l),s.visible=o>e,s.scale.setScalar(bo(o,70))}}},c:Si,range:2,look:Zt}});it(66,(n,t)=>{let e=B(t,"corazon");return{...$t,atores:[zt(Bt,-.45,-.15,{eyes:[[0,"happy"],[e,"wide"]]})],extra:i=>{Jt(i);let s=To(i,.35);s.position.set(-.45,.55,.15);let r=Gt(i,["\xA1A MIL!"],.8,[-.45,1.45,-.1],hs);return{update:(o,a,l)=>{s.visible=o>e-.2,s.scale.setScalar(bo(o,220)*1.2),tt(r,o,e+.5,99,l)}}},c:zs,range:2,look:Zt}});var pl=n=>-.55*(1-(n/6)**2)+.03,ml=(n,t,e={})=>n({x:t,z:0,y:pl(t),...e}),Xy=[[-1,1.4,3.6],[-.4,.9,0],[-.6,1.35,3],[-.4,.9,0]];var qy=(n={})=>Mi({outfit:"jaleco",glasses:!0,glow:0,...n}),v0=(n,t,e)=>{let i=new k(new pn(1,32),new Ft({color:"#3A5A88",roughness:.05,metalness:.4}));return i.rotation.x=-Math.PI/2,i.scale.set(.6,.35,1),i.position.set(t,.012,e),n.add(i),i},Yy=(n,t,e)=>{n.add(R(1.6,2.2,1.4,w("#9AA8B8"),t,1.1,e)),n.add(R(.6,1.5,.05,w("#5A6A7A"),t,.75,e+.72));let i=Dt(de(["BA\xD1OS"],{bg:"#2F5A9A",fg:"#fff",size:80,w:500,h:150}),1,.3);i.position.set(t,2.45,e+.72),n.add(i)};Jn(67,["profe","ella"],[n=>({...Fe,atores:[],extra:t=>{Ce(t,{lit:.3});let e=us(t,520,xo),i=Gt(t,["\xBFES POR LA TORMENTA?"],1.9,[-.2,2.3,0]);return{update:(s,r,o)=>{e(s),tt(i,s,.05,99,o)}}},c:[[1,2.4,5],[0,1.2,-2.4],[.8,2.3,4.6],[0,1.2,-2.4]],k:1,range:4,look:Hs([.3])}),n=>({...Fe,atores:[$n({x:2.4,z:-1.35,y:li,eyes:[[0,"flat"]],pose:(t,e)=>{Bn(t),yd(t,e)}})],extra:(t,e,i)=>{Ce(t,{lit:.3});let s=vl();t.add(s);let r=Gt(t,["\xBFPOR EL PROFE A UN METRO?"],2,[2.4,2.05,-1.1],Us);return{update:(o,a,l)=>{let c=Zn(i[0]);s.position.set(c.x+.05,c.y+.1,c.z+.1),tt(r,o,.05,99,l)}}},c:[[2.4,1.3,1.9],[2.4,1.15,-1.3],[2.4,1.3,1.7],[2.4,1.15,-1.3]],range:2,look:Oe}),n=>({...$t,atores:[zt(le,.45,-.15,{eyes:[[0,"happy"]]})],extra:t=>{Jt(t);let e=To(t,.3);e.position.set(.1,1.2,-.05);let i=Gt(t,["\xBFO ES POR ELLA?"],1.3,[.45,1.42,-.1],ds);return{update:(s,r,o)=>{tt(i,s,.05,99,o),e.scale.setScalar(bo(s,160))}}},c:Ur,range:2,look:Zt})]);it(68,(n,t)=>{let e=B(t,"puente"),i=B(t,"movia");return{amb:"puente",fov:32,atores:[ml(Bt,-1.2,{eyes:[[0,"look"],[i,"wide"]],move:s=>{let r=xe(-3,-1.2,Xt(0,n,s));return[r,pl(r)+(s>i?Math.sin(s*8)*.03:0),0]},pose:(s,r)=>s.walk(r*.8,.5)}),ml(le,0,{eyes:[[0,"look"]],move:s=>{let r=xe(-1.6,0,Xt(0,n,s));return[r,pl(r)+(s>i?Math.sin(s*8+1)*.03:0),0]},pose:(s,r)=>s.walk(r*.8+.4,.5)})],extra:s=>{let r=Ht(s,t,[[["ESTA TARDE"],.05,"y",[-.6,1.8,0],1.3],[["EL PUENTE COLGANTE"],e-.3,"w",[-.6,1.8,0],1.8],[["SE MOV\xCDA CON CADA PASO"],i-.4,"r",[-.6,1.8,0],2,1]]);return{update:(o,a,l)=>r(o,l)}},c:Xy,range:3,look:pd}});it(69,(n,t)=>{let e=B(t,"delante"),i=B(t,"vuelta"),s=B(t,"mano");return{amb:"puente",fov:32,atores:[ml(Bt,-.75,{eyes:[[0,"wide"],[s+.4,"happy"]],pose:(r,o)=>o<s?Ro(r,o,.6):r.pose({armL:[12,8],armR:[70,10]})}),ml(le,.05,{eyes:[[0,"look"],[i,"happy"]],pose:(r,o)=>r.pose({armL:[o>s-.2?72:12,o>s-.2?10:8],armR:[12,8]})})],extra:(r,o,a)=>{let l=Ti(r,a,0),c=Ht(r,t,[[["TEMBLANDO"],.05,"b",[-.4,1.95,.4],1.2],[["ELLA, JUSTO DELANTE"],e-.5,"w",[-.4,1.95,.4],1.8],[["SE DA LA VUELTA"],i-.3,"w",[-.4,1.95,.4],1.6],[["Y TE DA LA MANO \u2665"],s-.3,"p",[-.4,1.95,.4],1.7,1]]);return{update:(h,d,u)=>{c(h,u),l(Xt(s,s+.6,h))}}},c:[[-.4,1.2,2.8],[-.35,.9,0],[-.4,1.15,2.4],[-.35,.9,0]],range:2.5,look:pd}});Jn(70,["1974"],[n=>({amb:"gris",fov:30,k:1,atores:[],extra:t=>{let e=Gt(t,["ESTO TAMBI\xC9N","TIENE EXPERIMENTO"],2.2,[0,1.6,-.4],{h:260});return{update:(i,s,r)=>tt(e,i,.05,99,r)}},c:[[0,1.6,3.4],[0,1.6,-.4],[0,1.6,3],[0,1.6,-.4]],range:3}),(n,t)=>{let e=B(t,"mismo");return{...ci(),atores:[qy({x:-.6,z:-.4,eyes:[[0,"look"]]}),E0({x:.6,z:-.4,eyes:[[0,"look"],[e,"happy"]],pose:(i,s)=>s>e?fd(i,s):i.pose()})],extra:i=>{let s=Gt(i,["EL MISMO DE LAS 36 PREGUNTAS"],2.3,[0,.7,.2],{bg:"#FBF7EC",fg:"#2A2A34"});return{update:(r,o,a)=>tt(s,r,e-.3,99,a)}},c:[[0,1.6,3.9],[0,1.45,-.4],[0,1.6,3.4],[0,1.45,-.4]],range:3}}]);it(71,(n,t)=>{let e=B(t,"altisimo");return{amb:"puente",fov:34,atores:[Yn(5,{x:-2,z:0,move:i=>{let s=xe(-4.5,0,Xt(0,n,i));return[s,pl(s)+Math.sin(i*6)*.03,0]},eyes:[[0,"wide"]],pose:(i,s)=>{i.walk(s*.7,.6),i.root.rotation.z=Math.sin(s*3)*.06}})],extra:i=>{let s=Ht(i,t,[[["CANAD\xC1"],.05,"b",[-1,2.2,.5],1],[["UN PUENTE ALT\xCDSIMO"],e-.4,"r",[-1,2.2,.5],1.8,1]]);return{update:(r,o,a)=>s(r,a)}},c:[[-3.5,1.2,5.5],[-1,-.5,0],[-1.5,1.6,5],[-.5,-.3,0]],k:1,range:4,look:{exposure:1.02}}});it(72,(n,t)=>{let e=B(t,"encuesta"),i=B(t,"numero");return{amb:"puente",fov:32,atores:[So(1,{x:7,z:.4,eyes:[[0,"happy"]],talk:[[e-.5,n]],pose:(s,r)=>s.pose({armL:[60,70],armR:[r>i?80:12,r>i?10:8]})}),Yn(5,{x:6.1,z:.9,eyes:[[0,"wide"],[i+.4,"happy"]],move:s=>[xe(5.2,6.1,Xt(0,1.2,s)),0,.9],pose:(s,r)=>r<1.2?s.walk(r*1.4,.5):s.pose()})],extra:(s,r,o)=>{let a=hd(s,["ENCUESTA"],.3,[0,0,0],70),l=hd(s,["\xBFQUIERES SABER M\xC1S?","LL\xC1MAME"],.45,[0,0,0],56),c=Ht(s,t,[[["AL CRUZAR EL PUENTE\u2026"],.05,"w",[6.5,2.2,.5],1.8],[["UNA ENCUESTA"],e-.3,"y",[6.5,2.2,.5],1.4],[["Y SU N\xDAMERO DE TEL\xC9FONO"],i-.3,"p",[6.5,2.2,.5],2.1,1]]);return{update:(h,d,u)=>{let f=new P;o[0].arms.L.hand.getWorldPosition(f),a.position.set(f.x,f.y+.1,f.z+.1);let g=Zn(o[0]);l.position.set(g.x-.1,g.y+.1,g.z+.12),l.visible=h>i,c(h,u)}}},c:[[6.5,1.5,3.6],[6.5,1.2,0],[6.5,1.5,3.2],[6.5,1.2,0]],range:3,look:{exposure:1.02}}});it(73,(n,t)=>{let e=B(t,"bajo");return{amb:"puente",ambo:{normal:1},fov:32,atores:[Yn(2,{x:0,z:0,y:.42,move:i=>[0,.42,xe(-1.6,.8,i/n)],eyes:[[0,"happy"]],pose:(i,s)=>i.walk(s*1.2,.5)})],extra:i=>{let s=Gt(i,["UN PUENTE BAJO Y FIRME"],2,[1,2.35,-.8],Al);return{update:(r,o,a)=>tt(s,r,e-.3,99,a)}},c:[[1.8,1.8,4.2],[0,.9,-.5],[1.5,1.7,3.8],[0,.9,-.3]],range:3,look:{exposure:1.02}}});it(74,(n,t)=>{let e=B(t,"llamaron");return{amb:"gris",fov:30,k:1,atores:[],extra:i=>{let s=yl(i,[[`PUENTE
FIRME`,.25,"#B8BCC8"],[`PUENTE QUE
DA MIEDO`,.85,"#E8667F"]],2.6,[0,1.55,-.4],{title:"\xBFCU\xC1NTOS LA LLAMARON?"}),r=Gt(i,["\xA1MUCHOS M\xC1S!"],1.3,[0,.5,-.2],ds);return{update:(o,a,l)=>{s.scale.y=Xt(.3,1.6,o)*.999+.001,tt(r,o,e-.3,99,l)}}},c:[[0,1.4,3.9],[0,1.3,-.4],[0,1.4,3.5],[0,1.3,-.4]],range:3}});it(75,(n,t)=>{let e=B(t,"que",2),i=B(t,"atraccion");return{amb:"gris",fov:30,k:1,atores:[Bt({x:0,z:-.5,eyes:[[0,"wide"],[i,"heart"]],pose:(s,r)=>s.pose({armL:[12,8],armR:[r>e&&r<i?150:12,r>e&&r<i?160:8]})})],extra:s=>{let r=To(s,.3);r.position.set(.05,1.15,-.3);let o=Ht(s,t,[[["CORAZ\xD3N ACELERADO"],.2,"r",[0,2.35,-.4],1.8],[["\xBFPOR QU\xC9?"],e-.3,"w",[0,2.35,-.4],1],[["LO CONFUNDE CON ATRACCI\xD3N"],i-.9,"p",[0,2.35,-.4],2.3,1]]);return{update:(a,l,c)=>{o(a,c),r.scale.setScalar(bo(a,180))}}},c:[[0,1.6,3.6],[0,1.5,-.5],[0,1.6,3.2],[0,1.5,-.5]],range:3,look:Ns}});it(76,(n,t)=>{let e=B(t,"siempre"),i=B(t,"pista");return{...ci(),atores:[e0(0,{x:-.9,z:-.4,eyes:[[0,"look"],[e,"flat"]]}),e0(2,{x:.9,z:-.4,eyes:[[0,"look"],[e,"sad"]],pose:(s,r)=>r>e?s.pose({armL:[60,100],armR:[60,100]}):s.pose()})],extra:s=>{let r=Ht(s,t,[[["OJO"],.05,"r",[0,2.3,-.3],.7],[["NO SIEMPRE SE REPITE"],e-.4,"w",[0,2.3,-.3],1.9],[["UNA PISTA, NO UNA LEY"],i-.3,"y",[0,2.3,-.3],2,1]]);return{update:(o,a,l)=>r(o,l)}},c:[[0,1.6,4],[0,1.45,-.4],[0,1.6,3.5],[0,1.45,-.4]],range:3}});it(77,(n,t)=>{let e=B(t,"tormenta"),i=B(t,"puente"),s=B(t,"no");return{...$t,atores:[zt(le,.3,-.15,{eyes:[[0,"happy"]]}),zt(Bt,-.3,-.15,{eyes:[[0,"look"],[s,"heart"]]}),sn()],extra:r=>{Jt(r);let o=Ht(r,t,[[["\xBFLA TORMENTA?"],e-.3,"b",[0,1.48,-.1],1.3],[["\xBFEL PUENTE?"],i-.3,"w",[0,1.48,-.1],1.1],[["\u2026O PUEDE QUE NO \u2665"],s-.4,"p",[0,1.48,-.1],1.6,1]]);return{update:(a,l,c)=>o(a,c)}},c:Si,range:2,look:Hs([.3],Zt)}});it(78,(n,t)=>{let e=B(t,"apaga"),i=B(t,"te",2),s=B(t,"vale");return{...$t,ambo:{dim:1,glow:.04},atores:[zt(le,.3,-.15,{eyes:[[0,"look"]],talk:[[i,s-.2]],pose:wo}),zt(Bt,-.3,-.15,{eyes:[[0,"look"],[i+.5,"wide"]],talk:[[s,n]]})],extra:r=>{let o=Jt(r),a=new Qt("#8AA0FF",1.5,4,1.6);a.position.set(0,1.4,1),r.add(a);let l=gn(r,["CLIC"],.6,[.3,1.42,-.1]),c=Pe(r,["\xBFTE PUEDO CONTAR","UN SECRETO?"],1.2,[.35,1.48,-.1],56),h=Pe(r,["VALE"],.6,[-.35,1.42,-.1],64);return{update:(d,u,f)=>{o.luz(1-Xt(e+.2,e+.5,d)*.9),tt(l,d,e+.1,e+1.2,f),tt(c,d,i-.1,s-.2,f),tt(h,d,s-.1,99,f)}}},c:Si,range:2,look:Zt}});it(79,(n,t)=>{let e=B(t,"mano");return{...$t,ambo:{dim:1,glow:.04},atores:[zt(le,.45,-.15,{eyes:[[0,"look"],[e,"happy"]],talk:[[0,n]]})],extra:(i,s,r)=>{let o=Jt(i,{luz:.12}),a=new Qt("#8AA0FF",1.5,4,1.6);a.position.set(.4,1.3,1),i.add(a);let l=Ti(i,r,0),c=Pe(i,["ESTA TARDE, EN EL PUENTE\u2026","YO NO TEN\xCDA NADA DE MIEDO"],1.3,[.45,1.4,-.1],52),h=Pe(i,["TE DI LA MANO","PORQUE QUER\xCDA"],1.1,[.45,1.4,-.1],56);return{update:(d,u,f)=>{tt(c,d,.05,e-1.3,f),tt(h,d,e-1.2,99,f),l(Xt(e-.5,e+.5,d))}}},c:Ur,range:2,look:Zt}});it(80,n=>({...$t,ambo:{dim:1,glow:.04},atores:[zt(Bt,-.45,-.15,{eyes:[[0,"wide"]]})],extra:(t,e,i)=>{Jt(t,{luz:.12});let s=new Qt("#8AA0FF",1.5,4,1.6);s.position.set(-.4,1.3,1),t.add(s);let r=Ti(t,i,0),o=gn(t,["\u2026"],.5,[-.45,1.38,-.1]);return{update:(a,l,c)=>{tt(o,a,.1,99,c),r(1)}}},c:zs,range:2,look:Zt}));it(81,(n,t)=>{let e=B(t,"linterna"),i=B(t,"proposito"),s=B(t,"excusa");return{...$t,ambo:{dim:1,glow:.04},atores:[zt(le,.32,-.15,{eyes:[[0,"smug"],[s,"happy"]],talk:[[0,n]]}),zt(Bt,-.32,-.15,{eyes:[[0,"look"],[i,"wide"]]})],extra:(r,o,a)=>{Jt(r,{luz:.12});let l=new Qt("#8AA0FF",1.5,4,1.6);l.position.set(0,1.3,1),r.add(l);let c=Ti(r,a,1),h=Ht(r,t,[[["OTRO SECRETO"],.05,"p",[0,1.48,-.1],1.3],[["LA LINTERNA\u2026"],e-.2,"w",[0,1.48,-.1],1.3],[["TE LA PREST\xC9 A PROP\xD3SITO"],i-.9,"y",[0,1.48,-.1],2.1],[["PARA QUE TUVIERAS UNA EXCUSA"],s-.9,"p",[0,1.48,-.1],2.4,1]]);return{update:(d,u,f)=>{h(d,f),c(Xt(i,i+.6,d))}}},c:Si,range:2,look:Zt}});it(82,(n,t)=>{let e=B(t,"murmura");return{...$t,ambo:{dim:1,glow:.04},atores:[sn()],extra:i=>{let s=Jt(i,{luz:.2}),r=Ht(i,t,[[["LUC\xCDA\u2026"],.1,"w",[.1,1.05,-.9],1],[["MURMURA EN SUE\xD1OS"],e-.2,"b",[.1,1.05,-.9],1.6,1]]);return{update:(o,a,l)=>{r(o,l),s.z(o,l)}}},c:[[.1,1,1],[.1,.45,-1.3],[.1,.95,.8],[.1,.45,-1.3]],range:2,look:Zt}});it(83,(n,t)=>{let e=B(t,"que");return{...$t,ambo:{dim:1,glow:.04},atores:[sn({talk:[[0,n]]})],extra:i=>{Jt(i,{luz:.2});let s=Pe(i,["D\xCDSELO YA\u2026"],.9,[.1,1,-.9],60),r=Pe(i,["QUE LLEVAS TODA LA SEMANA","HABLANDO DE \xC9L\u2026"],1.3,[.1,1,-.9],52);return{update:(o,a,l)=>{tt(s,o,.05,e-.1,l),tt(r,o,e,99,l)}}},c:[[.1,1,1],[.1,.5,-1.3],[.1,.95,.8],[.1,.5,-1.3]],range:2,look:Zt}});it(84,n=>({...$t,ambo:{dim:1,glow:.04},atores:[zt(le,.32,-.15,{eyes:[[0,"wide"]]}),zt(Bt,-.32,-.15,{eyes:[[0,"wide"]]}),sn()],extra:(t,e,i)=>{Jt(t,{luz:.25});let s=Ti(t,i,0),r=Gt(t,["SILENCIO ABSOLUTO"],1.6,[0,1.48,-.1],Lr);return{update:(o,a,l)=>{tt(r,o,.05,99,l),s(Xt(0,.6,o))}}},c:Si,range:2,look:Zt}));Jn(85,["tu","los"],[n=>({...$t,ambo:{dim:1,glow:.04},atores:[zt(le,.45,-.15,{eyes:[[0,"shut"]],pose:t=>t.pose({armL:[125,150],armR:[125,150],head:-14,lean:12})})],extra:(t,e,i)=>{Jt(t,{luz:.3});let s=Ti(t,i,0),r=R(.7,.5,.3,w("#E8667F"),.45,.55,.05);t.add(r);let o=gn(t,["ENTIERRA LA CARA"],1.4,[.45,1.38,-.1]);return{update:(a,l,c)=>{tt(o,a,.1,99,c),s(1)}}},c:Ur,range:2,look:Zt}),n=>({...$t,ambo:{dim:1,glow:.04},atores:[zt(Bt,-.45,-.15,{eyes:[[0,"happy"]],pose:p0})],extra:t=>{Jt(t,{luz:.3});let e=gn(t,["NO TE R\xCDAS, NO TE R\xCDAS\u2026"],1.6,[-.45,1.38,-.1]);return{update:(i,s,r)=>tt(e,i,.1,99,r)}},c:zs,range:2,look:Zt}),(n,t)=>{let e=B(t,"sin");return{...$t,ambo:{dim:1,glow:.04},atores:[zt(le,.32,-.15,{eyes:[[0,"happy"]],pose:o0}),zt(Bt,-.32,-.15,{eyes:[[0,"happy"]],pose:(i,s)=>o0(i,s+.3)}),sn()],extra:(i,s,r)=>{Jt(i,{luz:.35});let o=fl(i,3,"#BEE4FF"),a=fl(i,3,"#BEE4FF"),l=Ht(i,t,[[["LLORANDO DE LA RISA"],.05,"y",[0,1.48,-.1],1.8],[["SIN HACER NI UN RUIDO"],e-.2,"w",[0,1.48,-.1],1.9,1]]),c=new P;return{update:(h,d,u)=>{l(h,u),r[0].head.getWorldPosition(c),o(h,[c.x+.15,c.y,c.z,.05]),r[1].head.getWorldPosition(c),a(h+.4,[c.x-.15,c.y,c.z,.05])}}},c:Si,range:2,look:Zt}}]);it(86,n=>({...Fe,atores:[],extra:t=>{Ce(t,{lit:.2});let e=us(t,300,xo),i=Gt(t,["00:45"],1.1,[-.6,2.2,-1.6],Lr);return{update:(s,r,o)=>{e(s,1-Xt(0,n,s)),tt(i,s,.05,99,o)}}},c:[[.5,2,4.6],[0,1.1,-2.4],[.4,1.95,4.3],[0,1.1,-2.4]],k:1,range:4,look:Oe}));var ud=(n={})=>$n({x:2.4,z:-1.35,y:li,eyes:[[0,"shut"]],pose:(t,e)=>{Bn(t),t.pose({head:-18,lean:8,armL:[20,40],armR:[20,40],bob:Math.sin(e*2.2)*.015})},...n});Jn(87,["ronquido"],[(n,t)=>{let e=B(t,"cafe"),i=B(t,"otra");return{...Fe,atores:[ud()],extra:s=>{Ce(s,{lit:.2});let r=Ht(s,t,[[["HA DEJADO DE LLOVER"],.05,"w",[1.9,1.95,-1.1],1.9],[["YA NO SE OYE EL CAF\xC9"],e-.8,"w",[1.9,1.95,-1.1],1.9],[["SE OYE OTRA COSA\u2026"],i-.4,"y",[1.9,1.95,-1.1],1.7,1]]);return{update:(o,a,l)=>r(o,l)}},c:[[1.2,1.7,3.3],[1.2,1,-1.6],[1.2,1.65,3],[1.2,1,-1.6]],range:3,look:Oe}},(n,t)=>{let e=B(t,"dormido");return{...Fe,atores:[ud()],extra:(i,s,r)=>{Ce(i,{lit:.2});let o=h0(i),a=Ht(i,t,[[["ROOONC\u2026 ROOONC\u2026"],.05,"b",[2.4,2.05,-1.1],1.6],[["\xA1DORMIDO EN EL BANCO!"],e-.4,"y",[2.4,2.05,-1.1],1.9,1]]),l=new P;return{update:(c,h,d)=>{a(c,d),r[0].head.getWorldPosition(l),o(c,[l.x+.2,l.y+.2,l.z],d)}}},c:[[2.4,1.3,1.9],[2.4,1.15,-1.3],[2.4,1.3,1.6],[2.4,1.15,-1.3]],range:2,look:Oe}}]);it(88,n=>({...$t,atores:[zt(Bt,-.45,-.15,{eyes:[[0,"smug"]],pose:t=>t.pose({armL:[12,8],armR:[150,30]})})],extra:t=>{Jt(t,{luz:.4});let e=Gt(t,["\xA1ES TU OPORTUNIDAD!"],1.6,[-.45,1.38,-.1],ds);return{update:(i,s,r)=>tt(e,i,.05,99,r)}},c:zs,range:2,look:Zt}));it(89,(n,t)=>{let e=B(t,"buenas"),i=B(t,"buenas",e+.4);return{...Fe,atores:[le({x:.25,z:-1.35,eyes:[[0,"happy"]],talk:[[e,e+1.2]],pose:s=>s.pose({armL:[100,150],armR:[12,8]})}),Bt({x:-.45,z:-1.2,eyes:[[0,"happy"]],talk:[[i,n]],move:s=>[-.45,xe(-.6,0,Xt(.2,1.4,s)),xe(-1.5,-1,Xt(.2,1.4,s))],pose:(s,r)=>r<1.4?m0(s,r):s.pose()})],extra:s=>{Ce(s,{lit:.3});let r=Gt(s,["ZIIIIIIP\u2026 (MUY DESPACIO)"],1.8,[0,1.85,-1.1],Lr),o=Pe(s,["BUENAS NOCHES"],1.2,[.95,1.8,-.9],58),a=Pe(s,["BUENAS NOCHES"],1.2,[-1.05,1.75,-.8],58);return{update:(l,c,h)=>{tt(r,l,.05,e-.2,h),tt(o,l,e-.1,i-.1,h),tt(a,l,i-.1,99,h)}}},c:[[0,1.3,2.4],[-.1,.95,-1.2],[0,1.28,2.1],[-.1,.95,-1.2]],range:2.5,look:Oe}});it(90,(n,t)=>{let e=B(t,"paso"),i=B(t,"dos"),s=B(t,"tres");return{...Fe,atores:[ud(),Bt({x:0,z:-.3,eyes:[[0,"wide"]],move:r=>[xe(.3,3.2,Xt(.2,n,r)),-.3,.2],pose:m0})],extra:r=>{Ce(r,{lit:.2});let o=Ht(r,t,[[["A GATAS"],.05,"w",[2.1,1.8,-.6],1],[["UN PASO\u2026"],e-.2,"y",[2.1,1.8,-.6],1],[["DOS\u2026"],i-.2,"y",[2.1,1.8,-.6],.7],[["TRES\u2026"],s-.2,"y",[2.1,1.8,-.6],.8,1]]);return{update:(a,l,c)=>o(a,c)}},c:[[1.6,1.4,3],[1.8,.7,-1],[2.2,1.4,3],[2.4,.7,-1]],range:3,look:Oe}});it(91,(n,t)=>{let e=B(t,"chof");return{...Fe,atores:[Bt({x:3.2,z:.3,eyes:[[0,"wide"],[e,"shut"]],pose:(i,s)=>i.pose({armL:[60,20],armR:[60,20],legL:[s>e-.3?20:0,0]})})],extra:i=>{Ce(i,{lit:.2}),v0(i,3.2,.5);let s=fl(i,8,"#9AC8F2"),r=Gt(i,["\xA1CHOF!"],1,[2.3,1.55,.3],Us),o=gn(i,["UN CHARCO ENORME"],1.5,[2.3,1.55,.3]);return{update:(a,l,c)=>{tt(o,a,.05,e-.1,c),tt(r,a,e-.05,99,c),s(a*2,[3.2,.5,.6,.4],a>e-.1?1:0)}}},c:[[3.2,1.3,3],[3.2,.9,.3],[3.2,1.3,2.7],[3.2,.9,.3]],range:2.5,look:Oe}});it(92,(n,t)=>{let e=B(t,"apunta"),i=B(t,"que");return{...Fe,atores:[$n({x:2.4,z:-1.35,y:li,eyes:[[0,"shut"],[.5,"small"]],talk:[[i,n]],pose:(s,r)=>{Bn(s),s.pose({armL:[12,8],armR:[r>e?80:12,r>e?10:8]})}})],extra:(s,r,o)=>{Ce(s,{lit:.2});let a=ls("#FFF6D8");a.scale.setScalar(1.3),s.add(a);let l=gn(s,["ABRE UN OJO\u2026"],1.2,[2.4,2,-1.1]),c=Pe(s,["\xBFQU\xC9 HACES T\xDA AQU\xCD?"],1.3,[2.4,2,-1.1],58);return{update:(h,d,u)=>{let f=Zn(o[0]);a.position.set(f.x+.1,f.y,f.z+.15),a.userData.on(h>e?1:0),tt(l,h,.3,i-.2,u),tt(c,h,i-.1,99,u)}}},c:[[2.4,1.3,1.9],[2.4,1.15,-1.3],[2.4,1.3,1.6],[2.4,1.15,-1.3]],range:2,look:Oe}});it(93,n=>({...Fe,atores:[Bt({x:3.2,z:.3,eyes:[[0,"wide"]],talk:[[0,n]],pose:(t,e)=>t.pose({armL:[12,8],armR:[150,150]})})],extra:t=>{Ce(t,{lit:.2}),v0(t,3.2,.5);let e=Yt("#FFF6D8",2,.14);e.position.set(3.2,1.2,.5),t.add(e);let i=Pe(t,["IBA\u2026 AL BA\xD1O"],1,[3.2,1.78,.2],60);return{update:(s,r,o)=>tt(i,s,.05,99,o)}},c:[[3.2,1.3,3],[3.2,1.1,.3],[3.2,1.3,2.7],[3.2,1.1,.3]],range:2.5,look:Oe}));Jn(94,["banos","vuelve"],[n=>({...Fe,atores:[$n({x:2.4,z:-1.35,y:li,eyes:[[0,"small"]],pose:t=>{Bn(t),t.pose({armR:[80,10]})}})],extra:t=>{Ce(t,{lit:.2});let e=gn(t,["TE MIRA\u2026"],.9,[2.4,2,-1.1]);return{update:(i,s,r)=>tt(e,i,.05,99,r)}},c:[[2.4,1.3,1.9],[2.4,1.15,-1.3],[2.4,1.3,1.7],[2.4,1.15,-1.3]],range:2,look:Oe}),n=>({...Fe,atores:[],extra:t=>{Ce(t,{lit:.2}),Yy(t,-15,-3);let e=Gt(t,["BA\xD1OS: EN LA OTRA PUNTA"],2,[-14.6,3.1,-1.5],Us);return{update:(i,s,r)=>tt(e,i,.2,99,r)}},cam:[[0,[2,1.8,3],[1,1.2,-1.5]],[99,[-12,2,3.2],[-14.6,1.4,-2]]],k:1,range:4,look:Oe}),n=>({...Fe,atores:[$n({x:2.4,z:-1.35,y:li,eyes:[[0,"flat"]],pose:t=>{Bn(t),t.pose({armR:[80,10]})}})],extra:t=>{Ce(t,{lit:.2});let e=gn(t,["\u2026Y TE VUELVE A MIRAR"],1.6,[2.4,2,-1.1]);return{update:(i,s,r)=>tt(e,i,.05,99,r)}},c:[[2.4,1.3,1.7],[2.4,1.15,-1.3],[2.4,1.3,1.5],[2.4,1.15,-1.3]],range:2,look:Oe})]);it(95,(n,t)=>{let e=B(t,"nada"),i=B(t,"sonrisa");return{...Fe,atores:[$n({x:2.4,z:-1.35,y:li,eyes:[[0,"flat"],[i-.6,"happy"]],talk:[[0,e-.5]],pose:(s,r)=>{Bn(s),s.pose({armL:[12,8],armR:[r<e?95:12,r<e?0:8]})}})],extra:s=>{Ce(s,{lit:.2});let r=Pe(s,["A DORMIR. YA."],1,[2.4,2,-1.1],60),o=Ht(s,t,[[["NI UNA PALABRA M\xC1S"],e-.3,"w",[2.4,2,-1.1],1.7],[["\xBFUNA SONRISA?"],i-.7,"y",[2.4,2,-1.1],1.4,1]]);return{update:(a,l,c)=>{tt(r,a,.05,e-.4,c),o(a,c)}}},c:[[2.4,1.3,1.9],[2.4,1.15,-1.3],[2.4,1.3,1.6],[2.4,1.15,-1.3]],range:2,look:Oe}});var _0=n=>{md(n,0,-.15,.75,2.4,.8,"#C8A27A");for(let t of[-.45,.45]){let e=new k(new jt(.07,.06,.14,14),w("#E8E2D2"));e.position.set(t,.85,-.1),n.add(e)}},Zy=[[0,1.45,3],[0,1.1,-.5],[0,1.45,2.6],[0,1.1,-.5]];it(96,(n,t)=>{let e=B(t,"sienta"),i=B(t,"como");return{amb:"albergue",fov:30,atores:[vi(Bt,-.4,-.6,{eyes:[[0,"look"],[e+.8,"wide"]]}),le({x:1.5,z:-.6,eyes:[[0,"happy"]],move:s=>s<e+.6?[xe(2.2,.4,Xt(e-.8,e+.6,s)),0,-.6]:[.4,li,-.6],pose:(s,r)=>r<e+.6?s.walk(r*1.4,.5):Bn(s)})],extra:s=>{_0(s);let r=Ht(s,t,[[["A LA MA\xD1ANA SIGUIENTE"],.05,"y",[0,1.9,-.5],2],[["SE SIENTA A TU LADO"],e-.3,"p",[0,1.9,-.5],1.8],[["COMO SI NADA"],i-.2,"w",[0,1.9,-.5],1.3,1]]);return{update:(o,a,l)=>r(o,l)}},c:Zy,range:3,look:Ir}});it(97,(n,t)=>{let e=B(t,"linterna"),i=B(t,"para");return{amb:"albergue",fov:30,atores:[vi(Bt,-.4,-.6,{eyes:[[0,"look"],[e,"wide"],[i+2,"heart"]],pose:(s,r)=>s.pose({armL:[12,8],armR:[r>e?40:8,30]})}),vi(le,.4,-.6,{eyes:[[0,"smug"]],talk:[[i,n]],pose:(s,r)=>s.pose({armL:[r<e+.5?40:8,30],armR:[8,6]})})],extra:s=>{_0(s);let r=ls();r.userData.on(0),r.rotation.y=Math.PI/2,s.add(r);let o=Ht(s,t,[[["POR DEBAJO DE LA MESA\u2026"],.05,"w",[-.45,1.62,-.5],1.8],[["\xA1SU LINTERNA!"],e-.2,"y",[-.55,1.62,-.5],1.2,1]]),a=Pe(s,["PARA ESTA NOCHE.","POR SI NECESITAS UNA EXCUSA"],1.5,[.65,1.58,-.4],52);return{update:(l,c,h)=>{r.position.set(xe(.3,-.25,Xt(.5,e,l)),.55,-.3),o(l,h),tt(a,l,i-.1,99,h)}}},c:[[0,1.25,2.4],[0,.9,-.5],[0,1.25,2.1],[0,.9,-.5]],range:3,look:Ir}});it(98,(n,t)=>{let e=B(t,"ojos");return{amb:"albergue",fov:30,atores:[vi(d0,0,-1,{eyes:[[0,"look"],[e-.3,"flat"]],pose:(i,s)=>i.pose({head:s>e?10:0})}),vi(Bt,-.45,.1,{eyes:[[0,"happy"]]}),vi(le,.45,.1,{eyes:[[0,"happy"]]})],extra:i=>{md(i,0,-.5,.75,2.4,.8,"#C8A27A");let s=Gt(i,["OJOS EN BLANCO"],1.4,[0,1.85,-.9],Al);return{update:(r,o,a)=>tt(s,r,e-.3,99,a)}},c:[[0,1.55,2.6],[0,1,-.8],[0,1.5,2.3],[0,1,-.8]],range:3,look:Ir}});it(99,(n,t)=>{let e=B(t,"quien"),i=B(t,"comentarios");return{...Fe,atores:[Bt({x:-.6,z:.2,eyes:[[0,"look"],[i-.5,"happy"]],pose:(s,r)=>r>i-.5?fd(s,r):s.pose()})],extra:s=>{Ce(s,{litAll:1});let r=sd();r.position.set(-4.2,0,-.6),s.add(r);let o=Ht(s,t,[[["Y T\xDA\u2026"],.1,"w",[-.5,2.25,.2],.8],[["\xBFCON QUI\xC9N TE QUEDAR\xCDAS ATRAPADO?"],e-.6,"p",[-.5,2.25,.2],2.6],[["\xA1TE LEO EN LOS COMENTARIOS!"],i-1.2,"y",[-.5,2.25,.2],2.4,1]]);return{update:(a,l,c)=>{r.tick&&r.tick(a),o(a,c)}}},c:[[0,1.7,4],[-.5,1.4,.2],[-.1,1.65,3.6],[-.5,1.4,.2]],range:4,look:Oe}});function $y(n){n.traverse(t=>{t.geometry&&t.geometry.dispose();let e=t.material;(Array.isArray(e)?e:e?[e]:[]).forEach(i=>{for(let s in i){let r=i[s];r&&r.isTexture&&r.dispose()}i.dispose()}),t.shadow&&t.shadow.map&&t.shadow.map.dispose()})}window.__hf=window.__hf||{};window.__hf.buildReady=window.__hf.buildReady||{};window.__hf.buildReady.film=(async()=>{await Promise.all(["900 40px Fraunces","700 40px Caveat","700 40px Inter","800 40px Inter","600 40px Inter","700 40px 'IBM Plex Mono'","600 40px 'IBM Plex Mono'"].map(r=>document.fonts.load(r))).catch(()=>{});let n=new Qa(document.getElementById("film3d")),t=-1,e=null,i=r=>{let o=Dr.findIndex(([,a,l])=>r>=a&&r<l);return o<0&&(o=Dr.length-1),o},s=n.render.bind(n);n.render=r=>{let o=i(r);if(o!==t){e&&($y(e.scene),n.r.renderLists.dispose()),window.__srv=1+o*7919;let[a,l,c]=Dr[o];e=a(l,c),n.shots=[e],t=o}s(r)},window.addEventListener("hf-seek",r=>n.render(r.detail.time)),n.render(0)})();})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
