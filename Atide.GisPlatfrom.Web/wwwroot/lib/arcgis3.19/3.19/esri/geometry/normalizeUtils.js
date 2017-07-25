// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.19/esri/copyright.txt for details.
//>>built
define("esri/geometry/normalizeUtils","dojo/_base/array dojo/_base/lang dojo/_base/Deferred dojo/has ../kernel ../config ../deferredUtils ./Extent ./Polyline ./Polygon ./webMercatorUtils ./jsonUtils".split(" "),function(l,p,D,M,N,O,x,P,s,z,y,Q){function w(a,d){return Math.ceil((a-d)/(2*d))}function A(a,d){var b=a.paths||a.rings,c,e,f=b.length,q;for(c=0;c<f;c++){q=b[c].length;for(e=0;e<q;e++){var g=a.getPoint(c,e);a.setPoint(c,e,g.offset(d,0))}}return a}function E(a,d){if(!(a instanceof s||a instanceof
z))throw console.error("_straightLineDensify: the input geometry is neither polyline nor polygon"),Error("_straightLineDensify: the input geometry is neither polyline nor polygon");var b=a instanceof s,c=[],e;l.forEach(b?a.paths:a.rings,function(a){c.push(e=[]);e.push([a[0][0],a[0][1]]);var b,g,m,k,h,n,l,p,s,r,t,u;for(h=0;h<a.length-1;h++){b=a[h][0];g=a[h][1];m=a[h+1][0];k=a[h+1][1];l=Math.sqrt((m-b)*(m-b)+(k-g)*(k-g));p=(k-g)/l;s=(m-b)/l;r=l/d;if(1<r){for(n=1;n<=r-1;n++)u=n*d,t=s*u+b,u=p*u+g,e.push([t,
u]);n=(l+Math.floor(r-1)*d)/2;t=s*n+b;u=p*n+g;e.push([t,u])}e.push([m,k])}});return b?new s({paths:c,spatialReference:a.spatialReference}):new z({rings:c,spatialReference:a.spatialReference})}function B(a,d,b){d&&(a=E(a,1E6),a=y.webMercatorToGeographic(a,!0));b&&(a=A(a,b));return a}function C(a,d,b){var c=a.x||a[0],e;c>d?(e=w(c,d),a.x?a=a.offset(e*-2*d,0):a[0]=c+e*-2*d):c<b&&(e=w(c,b),a.x?a=a.offset(e*-2*b,0):a[0]=c+e*-2*b);return a}function G(a,d){var b=-1;l.forEach(d.cutIndexes,function(c,e){var f=
d.geometries[e];l.forEach(f.rings||f.paths,function(a,e){l.some(a,function(b){if(!(180>b[0])){b=0;var c,d=a.length,n;for(c=0;c<d;c++)n=a[c][0],b=n>b?n:b;b=Number(b.toFixed(9));b=-360*w(b,180);d=a.length;for(c=0;c<d;c++)n=f.getPoint(e,c),f.setPoint(e,c,n.offset(b,0))}return!0})});c===b?f.rings?l.forEach(f.rings,function(b){a[c]=a[c].addRing(b)}):l.forEach(f.paths,function(b){a[c]=a[c].addPath(b)}):(b=c,a[c]=f)});return a}function H(a,d,b,c){var e=new D;e.addCallbacks(b,c);d=d||O.defaults.geometryService;
var f=[],q=[],g,m,k,h,n,p,F,v,r=0;l.forEach(a,function(a){if(a)if(g||(g=a.spatialReference,m=g._getInfo(),h=(k=g._isWebMercator())?2.0037508342788905E7:180,n=k?-2.0037508342788905E7:-180,p=k?102100:4326,F=new s({paths:[[[h,n],[h,h]]],spatialReference:{wkid:p}}),v=new s({paths:[[[n,n],[n,h]]],spatialReference:{wkid:p}})),m){var b=Q.fromJson(a.toJson()),c=a.getExtent();"point"===a.type?f.push(C(b,h,n)):"multipoint"===a.type?(b.points=l.map(b.points,function(a){return C(a,h,n)}),f.push(b)):"extent"===
a.type?(b=c._normalize(null,null,m),f.push(b.rings?new z(b):b)):c?(a=w(c.xmin,n)*2*h,b=0===a?b:A(b,a),c=c.offset(a,0),c.intersects(F)&&c.xmax!==h?(r=c.xmax>r?c.xmax:r,b=B(b,k),q.push(b),f.push("cut")):c.intersects(v)&&c.xmin!==n?(r=c.xmax*2*h>r?c.xmax*2*h:r,b=B(b,k,360),q.push(b),f.push("cut")):f.push(b)):f.push(b)}else f.push(a);else f.push(a)});b=new s;c=w(r,h);for(var t=-90,u=c;0<c;){var x=-180+360*c;b.addPath([[x,t],[x,-1*t]]);t*=-1;c--}0<q.length&&0<u?d?d.cut(q,b,function(b){q=G(q,b);var c=[];
l.forEach(f,function(b,e){if("cut"===b){var d=q.shift();a[e].rings&&1<a[e].rings.length&&d.rings.length>=a[e].rings.length?(f[e]="simplify",c.push(d)):f[e]=!0===k?y.geographicToWebMercator(d):d}});0<c.length?d.simplify(c,function(a){l.forEach(f,function(b,c){"simplify"===b&&(f[c]=!0===k?y.geographicToWebMercator(a.shift()):a.shift())});e.callback(f)},function(a){e.errback(a)}):e.callback(f)},function(a){e.errback(a)}):e.errback(Error("esri.geometry.normalizeCentralMeridian: 'geometryService' argument is missing.")):
(l.forEach(f,function(a,b){if("cut"===a){var c=q.shift();f[b]=!0===k?y.geographicToWebMercator(c):c}}),e.callback(f));return e}function v(a,d,b,c){var e=!1,f;p.isObject(a)&&a&&(p.isArray(a)?a.length&&((f=a[0]&&a[0].declaredClass)&&-1!==f.indexOf("Graphic")?(a=l.map(a,function(a){return a.geometry}),e=a.length?!0:!1):f&&-1!==f.indexOf("esri.geometry.")&&(e=!0)):(f=a.declaredClass)&&-1!==f.indexOf("FeatureSet")?(a=l.map(a.features||[],function(a){return a.geometry}),e=a.length?!0:!1):f&&-1!==f.indexOf("esri.geometry.")&&
(e=!0));e&&d.push({index:b,property:c,value:a})}function I(a,d){var b=[];l.forEach(d,function(c){var e=c.i,f=a[e];c=c.p;var d;if(p.isObject(f)&&f)if(c)if("*"===c[0])for(d in f)f.hasOwnProperty(d)&&v(f[d],b,e,d);else l.forEach(c,function(a){v(p.getObject(a,!1,f),b,e,a)});else v(f,b,e)});return b}function J(a,d){var b=0,c={};l.forEach(d,function(e){var f=e.index,d=e.property,g=e.value,m=g.length||1,k=a.slice(b,b+m);p.isArray(g)||(k=k[0]);b+=m;delete e.value;d?(c[f]=c[f]||{},c[f][d]=k):c[f]=k});return c}
function K(a){for(var d=[],b=0,c=0,e=Math.min,f=Math.max,q=0;q<a.length;q++){for(var g=a[q],m=null,k=0;k<g.length;k++)m=g[k],d.push(m),0===k?c=b=m[0]:(b=e(b,m[0]),c=f(c,m[0]));m&&d.push([(b+c)/2,0])}return d}var L={normalizeCentralMeridian:H,_foldCutResults:G,_prepareGeometryForCut:B,_offsetMagnitude:w,_pointNormalization:C,_updatePolyGeometry:A,_straightLineDensify:E,_createWrappers:function(a){var d=p.isObject(a)?a.prototype:p.getObject(a+".prototype");l.forEach(d.__msigns,function(a){var c=d[a.n];
d[a.n]=function(){var e=this,f=[],d,g=new D(x._dfdCanceller);a.f&&x._fixDfd(g);for(d=0;d<a.c;d++)f[d]=arguments[d];var m={dfd:g};f.push(m);var k,h=[],n;e.normalization&&!e._isTable&&(k=I(f,a.a),l.forEach(k,function(a){h=h.concat(a.value)}),h.length&&(n=H(h)));n?(g._pendingDfd=n,n.addCallbacks(function(a){g.canceled||(m.assembly=J(a,k),g._pendingDfd=c.apply(e,f))},function(c){var d=e.declaredClass;d&&-1!==d.indexOf("FeatureLayer")?e._resolve([c],null,f[a.e],g,!0):e._errorHandler(c,f[a.e],g)})):g._pendingDfd=
c.apply(e,f);return g}})},_disassemble:I,_addToBucket:v,_reassemble:J,getDenormalizedExtent:function(a){if(!a)return null;var d=a.getExtent();if(!d)return null;var b=a.spatialReference&&a.spatialReference._getInfo();if(!b)return d;var c=b.valid[0],b=b.valid[1],e=2*b,f=d.getWidth(),l=d.xmax,g=d.xmin;if("extent"===a.type||0===f||f<=b||f>e||l<c||g>b)return d;var m;switch(a.type){case "polygon":if(1<a.rings.length)m=K(a.rings);else return d;break;case "polyline":if(1<a.paths.length)m=K(a.paths);else return d;
break;case "multipoint":m=a.points}a=Math.min;for(var c=Math.max,e=new P(d.toJson()),k=0;k<m.length;k++){var h=m[k][0];0>h?(h+=b,g=c(h,g)):(h-=b,l=a(h,l))}e.xmin=l;e.xmax=g;return e.getWidth()<f?(e.xmin-=b,e.xmax-=b,e):d}};M("extend-esri")&&p.mixin(p.getObject("geometry",!0,N),L);return L});