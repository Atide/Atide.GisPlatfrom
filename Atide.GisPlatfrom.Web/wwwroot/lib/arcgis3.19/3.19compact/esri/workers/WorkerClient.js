// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.19/esri/copyright.txt for details.
//>>built
define("esri/workers/WorkerClient","dojo/Evented dojo/_base/declare dojo/Deferred dojo/_base/lang dojo/request ../sniff ../kernel ../urlUtils require".split(" "),function(g,q,l,d,r,m,s,f,t){var n=window.Blob||window.webkitBlob||window.mozBlob,p=window.URL||window.webkitURL||window.mozURL;g=q([g],{declaredClass:"esri.workers.WorkerClient",worker:null,returnDeferreds:!1,_queue:null,constructor:function(a,c,b){this._isIE=m("ie");this.returnDeferreds=!!b;this._queue={};this._acceptMessage=d.hitch(this,
this._acceptMessage);this._errorMessage=d.hitch(this,this._errorMessage);a&&this.setWorker(a,d.hitch(this,function(a){this.worker=a;c(a)}))},setWorker:function(a,c){if(a instanceof Array){var b=a;a=b.shift()}var k=this._getUrl(a),e=!f.hasSameOrigin(f.getAbsoluteUrl(k),location.href),h;if(!1===k)return console.log("Can not resolve worker path"),!1;this.worker&&(h=this.worker,h.removeEventListener("message",this._acceptMessage,!1),h.removeEventListener("error",this._errorMessage,!1),h.terminate(),h=
null);if(e){e=this._getUrl("./mutableWorker",!0);try{this._getRemoteText(e,d.hitch(this,function(a){a=p.createObjectURL(new n([a],{type:"text/javascript"}));c(this._createWorker(a,k))}))}catch(g){try{e=f.getProxyUrl(e).path+"?"+encodeURI(e),this._useProxy=!0,c(this._createWorker(e,b))}catch(l){return console.log("Can not create worker"),!1}}}else setTimeout(d.hitch(this,function(){c(this._createWorker(k,b))}),0)},_createWorker:function(a,c){var b=new Worker(a);b.addEventListener("message",this._acceptMessage,
!1);b.addEventListener("error",this._errorMessage,!1);this.worker=b;c&&this.importScripts(c);return b},postMessage:function(a,c){if(a instanceof Array||"object"!=typeof a)a={data:a};var b=Math.floor(64E9*Math.random()).toString(36);a.msgId=b;b=this._queue[b]=new l;this.worker?(c?this.worker.postMessage(a,c):this.worker.postMessage(a),this.emit("start-message",{target:this,message:a})):b.reject({message:"No worker was set."});return this.returnDeferreds?b:b.promise||b},terminate:function(){var a=Object.keys(this._queue);
this.worker&&this.worker.terminate();for(var c=a.length-1;0<=c;c--)this._queue[a[c]].cancel("terminated"),delete this._queue[a[c]]},addWorkerCallback:function(a,c){var b;b=this._getUrl(a,!0);!1===b?(b=new l,b.reject({message:"Could not load text from "+a})):(b=this.postMessage({action:"add-callback",url:b,cbName:c||"main"}),b.then(d.hitch(this,function(a){a.target=this;this.emit("callback-added",a)})));return b},importScripts:function(a){Array.isArray(a)||(a=[a]);a=a.map(function(a){a=this._getUrl(a,
!0);this._useProxy&&!f.hasSameOrigin(a,location.href)&&(a=f.getProxyUrl(a).path+"?"+encodeURI(a));return a},this);a=this.postMessage({action:"import-script",url:a});a.then(d.hitch(this,function(a){a.target=this;this.emit("scripts-imported",a)}));return a},_acceptMessage:function(a){var c=a.data,b=c.msgId;if(c.status&&"debug"==c.status)console[c.showAs||"debug"](c);else if(b&&b in this._queue){var d=this._queue[b];"progress"==c.status?d.progress(a.data):("error"==c.status?d.reject(a.data):d.resolve(a.data),
delete this._queue[b])}this.emit("message",{message:a.data,event:a,target:this})},_errorMessage:function(a){this.onerror||this.onError?this.onerror?this.onerror(a):this.onError(a):console.log("Worker Error: "+a.message+"\nIn "+a.filename+" on "+a.lineno)},_getUrl:function(a,c){if(!a)return console.error("can not resolve empty path"),!1;a.match(/\.js$/)||(a+=".js");var b=t.toUrl(a);return c?f.getAbsoluteUrl(b):b},_getRemoteText:function(a,c){(a=this._getUrl(a))&&r.get(a,{sync:!1,handleAs:"text",headers:{"X-Requested-With":"",
"Content-Type":"text/plain"}}).then(function(a){c(a)})},_startBlobWorker:function(){var a=this._xdSource;a||(a=this._getUrl("./mutableWorker"),a=new n(["if(!self._mutable){importScripts('"+a+"');}"],{type:"text/javascript"}),a=this._xdSource=p.createObjectURL(a));try{return new Worker(a)}catch(c){return console.log(c.message),!1}}});m("extend-esri")&&d.setObject("workers.WorkerClient",g,s);return g});