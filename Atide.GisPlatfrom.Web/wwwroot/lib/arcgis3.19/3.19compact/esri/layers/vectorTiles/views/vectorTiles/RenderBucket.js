// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.19/esri/copyright.txt for details.
//>>built
define("esri/layers/vectorTiles/views/vectorTiles/RenderBucket",["require","exports","../../core/tsSupport/extendsHelper","../../core/tsSupport/decorateHelper"],function(c,e,f,d){c=function(){return function(b){this.type=b}}();e.RenderBucket=c;d=function(b){function a(){b.call(this,2);this.joinCount=this.joinStart=this.triangleElementCount=this.triangleElementStart=0}f(a,b);a.prototype.hasData=function(){return 0<this.triangleElementCount||0<this.joinCount};return a}(c);e.LineRenderBucket=d;d=function(b){function a(){b.call(this,
1);this.outlineElementCount=this.outlineElementStart=this.triangleElementCount=this.triangleElementStart=0}f(a,b);a.prototype.hasData=function(){return 0<this.triangleElementCount||0<this.outlineElementCount};return a}(c);e.FillRenderBucket=d;d=function(b){function a(){b.call(this,3);this.textElementCount=this.textElementStart=this.marketElementCount=this.markerElementStart=0;this.isSDF=!1}f(a,b);a.prototype.hasData=function(){return 0<this.marketElementCount||0<this.textElementCount};return a}(c);
e.SymbolRenderBucket=d;c=function(b){function a(){b.call(this,0)}f(a,b);a.prototype.hasData=function(){return!0};return a}(c);e.BackgroundRenderBucket=c});