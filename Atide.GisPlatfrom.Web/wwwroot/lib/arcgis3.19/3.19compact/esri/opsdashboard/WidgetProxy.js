// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.19/esri/copyright.txt for details.
//>>built
define("dojo/_base/declare dojo/_base/lang dojo/Deferred dojo/when dojo/promise/all ../geometry/jsonUtils ./core/messageHandler ./core/errorMessages ./core/ExtensionBase ./FeatureActionFeatures".split(" "),function(l,d,f,g,k,m,h,e,n,p){return l([n],{hasFeatureActions:!1,hasDefaultFeatureAction:!1,featureActionFeatures:null,dataSourceConfigs:null,dataSourceProxies:null,_initializeResponseReceived:function(a){(!a||"object"!==typeof a)&&(new f).reject(Error(e.invalidArguments));return this.inherited(arguments).then(d.hitch(this,
function(){this.hasFeatureActions=a.supportFeatureActions;this.hasDefaultFeatureAction=a.supportDefaultFeatureAction;var b=g(this._setupMapWidgetProxy()),c=g(this._setupDataSourceProxies()),d=g(this._setupFeatureActionFeatures());return k([b,c,d])}))},_setupDataSourceProxies:function(){this.dataSourceConfigs||(this.dataSourceConfigs=[]);if(0!==this.dataSourceConfigs.length){var a=[];this.dataSourceConfigs.forEach(d.hitch(this,function(b){a.push(this.getDataSourceProxy(b.dataSourceId))}));return k(a).then(d.hitch(this,
function(a){this.dataSourceProxies=a}))}},_setupMapWidgetProxy:function(){if(this.mapWidgetId)return this.getMapWidgetProxy(this.mapWidgetId).then(d.hitch(this,function(a){this.mapWidgetProxy=a}))},_setupFeatureActionFeatures:function(){if(!this.hasFeatureActions||0===this.dataSourceConfigs.length)this.featureActionFeatures=null;else{var a=this.dataSourceConfigs[0].dataSourceId;if(this.featureActionFeatures)this.featureActionFeatures.dataSourceProxy.id!==a&&(this.featureActionFeatures=null);else return this.getDataSourceProxy(a).then(d.hitch(this,
function(a){this.featureActionFeatures=new p(a)}))}},_messageReceived:function(a){switch(a.functionName.toLowerCase()){case "datasourceexpired":case "datasourceupdated":this._dataSourceExpired(a.args.dataSourceId);break;case "drawcomplete":this._drawComplete(a.args)}},_dataSourceExpired:function(a){this.getDataSourceProxy(a).then(d.hitch(this,function(a){var c=this.getDataSourceConfig(a);this.dataSourceExpired(a,c);this.emit("data-source-expired",{dataSourceProxy:a,dataSourceConfig:c})}))},dataSourceExpired:function(a,
b){},getDataSourceConfig:function(a){if(!this._isHostInitialized())throw Error(e.hostNotReady);var b=a;"object"===typeof a&&(b=a.id);for(a=0;a<this.dataSourceConfigs.length;a++)if(this.dataSourceConfigs[a].dataSourceId===b)return this.dataSourceConfigs[a];return null},_dataSourceRemoved:function(a){this.inherited(arguments);if(this.dataSourceConfigs){for(var b=!1,c=0;c<this.dataSourceConfigs.length&&!b;c++)this.dataSourceConfigs[c].dataSourceId===a&&(this.dataSourceConfigs.splice(c,1),b=!0);b&&this._setupFeatureActionFeatures()}},
_mapWidgetRemoved:function(a){this.inherited(arguments);this.mapWidgetProxy&&this.mapWidgetProxy.id===a&&(this.mapWidgetId=this.mapWidgetProxy=null)},activateDrawingToolbar:function(a,b){if(!this._isHostInitialized())return(new f).reject(Error(e.hostNotReady));b||(b=this.mapWidgetProxy);if(!b)return(new f).reject(Error(e.invalidArguments));var c=b;"object"===typeof b&&(c=b.id);return h._sendMessageWithReply({functionName:"activateDrawingToolbar",args:d.mixin({mapWidgetId:c},a)}).then(function(){return!0},
function(){return!1})},deactivateDrawingToolbar:function(a){if(!this._isHostInitialized())throw Error(e.hostNotReady);a||(a=this.mapWidgetProxy);if(!a)throw Error(e.invalidArguments);var b=a;"object"===typeof a&&(b=a.id);h._sendMessage({functionName:"deactivateDrawingToolbar",args:{mapWidgetId:b}})},_drawComplete:function(a){a.cancelled?(this.drawingToolbarDeactivated(),this.emit("drawing-toolbar-deactivated")):(a=m.fromJson(a.geometry),this.toolbarDrawComplete(a),this.emit("toolbar-draw-complete",
{geometry:a}))},toolbarDrawComplete:function(a){},drawingToolbarDeactivated:function(){},executeDefaultFeatureAction:function(a){if(!this._isHostInitialized())throw Error(e.hostNotReady);if(this.hasDefaultFeatureAction&&Array.isArray(a)&&0!==a.length&&Array.isArray(this.dataSourceProxies)&&0!==this.dataSourceProxies.length){var b=this.dataSourceProxies[0],c=[];a.forEach(function(a){var d=a;if("object"===typeof a){if(!a.attributes||!a.attributes[b.objectIdFieldName])return;d=a.attributes[b.objectIdFieldName]}c.push(d)});
0!==c.length&&h._sendMessage({functionName:"executeDefaultFeatureAction",args:{dataSourceId:b.id,objectIds:c}})}}})});