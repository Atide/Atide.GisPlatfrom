// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.19/esri/copyright.txt for details.
//>>built
define("esri/dijit/_RefreshMixin","dojo/_base/declare dojo/_base/lang dojo/_base/Deferred dojo/on dojo/has ../kernel".split(" "),function(b,c,g,e,d,h){function f(a){"object"!==typeof a&&(a=Error(a));a.grid=this;e.emit(this.domNode,"dgrid-error",{grid:this,error:a,cancelable:!0,bubbles:!0})&&console.error(a)}b=b(null,{_trackError:function(a){var b;"string"===typeof a&&(a=c.hitch(this,a));try{b=a()}catch(d){f.call(this,d)}return g.when(b,c.hitch(this,function(){e.emit(this.domNode,"refresh",{cancelable:!0,
bubbles:!0})}),c.hitch(this,f))}});d("extend-esri")&&c.setObject("dijit._RefreshMixin",b,h);return b});