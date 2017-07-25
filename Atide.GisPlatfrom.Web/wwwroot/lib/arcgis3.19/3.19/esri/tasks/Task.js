// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.19/esri/copyright.txt for details.
//>>built
define("esri/tasks/Task","dojo/_base/declare dojo/_base/lang dojo/_base/json dojo/has ../kernel ../deferredUtils ../urlUtils ../Evented".split(" "),function(g,k,l,m,n,p,q,r){g=g(r,{declaredClass:"esri.tasks._Task",_eventMap:{error:["error"],complete:["result"]},constructor:function(a,c){a&&k.isString(a)&&(this._url=q.urlToObject(this.url=a));c&&c.requestOptions&&(this.requestOptions=c.requestOptions);this.normalization=!0;this._errorHandler=k.hitch(this,this._errorHandler);this.registerConnectEvents()},
_useSSL:function(){var a=this._url,c=/^http:/i;this.url&&(this.url=this.url.replace(c,"https:"));a&&a.path&&(a.path=a.path.replace(c,"https:"))},_encode:function(a,c,e){var d,b,h={},f,g;for(f in a)if("declaredClass"!==f&&(d=a[f],b=typeof d,null!==d&&void 0!==d&&"function"!==b))if(k.isArray(d)){h[f]=[];g=d.length;for(b=0;b<g;b++)h[f][b]=this._encode(d[b])}else"object"===b?d.toJson&&(b=d.toJson(e&&e[f]),"esri.tasks.FeatureSet"===d.declaredClass&&b.spatialReference&&(b.sr=b.spatialReference,delete b.spatialReference),
h[f]=c?b:l.toJson(b)):h[f]=d;return h},_successHandler:function(a,c,e,d){c&&this[c].apply(this,a);e&&e.apply(null,a);d&&p._resDfd(d,a)},_errorHandler:function(a,c,e){this.onError(a);c&&c(a);e&&e.errback(a)},setNormalization:function(a){this.normalization=a},onError:function(){}});m("extend-esri")&&(n.Task=g);return g});