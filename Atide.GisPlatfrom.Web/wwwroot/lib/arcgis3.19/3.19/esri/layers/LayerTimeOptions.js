// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.19/esri/copyright.txt for details.
//>>built
define("esri/layers/LayerTimeOptions",["dojo/_base/declare","dojo/_base/lang","dojo/has","../kernel","../lang"],function(a,b,c,d,e){a=a(null,{declaredClass:"esri.layers.LayerTimeOptions",constructor:function(a){a&&b.mixin(this,a)},toJson:function(){return e.fixJson({timeDataCumulative:this.timeDataCumulative,timeOffset:this.timeOffset,timeOffsetUnits:this.timeOffsetUnits,useTime:this.useTime})}});c("extend-esri")&&b.setObject("layers.LayerTimeOptions",a,d);return a});