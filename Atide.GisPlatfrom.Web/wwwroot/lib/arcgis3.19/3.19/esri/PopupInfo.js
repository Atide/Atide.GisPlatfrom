// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.19/esri/copyright.txt for details.
//>>built
define("esri/PopupInfo","dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/json dojo/i18n dojo/has dojo/Deferred dojo/sniff dojo/promise/all ./lang ./kernel ./request ./tasks/query ./tasks/QueryTask ./tasks/StatisticDefinition dojo/i18n!dojo/cldr/nls/number".split(" "),function(r,h,m,C,M,H,D,I,y,p,E,J,F,K,L,G){r=r(null,{declaredClass:"esri.PopupInfo",initialize:function(a,b){if(a){h.mixin(this,b);this.info=a;this.title=this.getTitle;this.content=this.getContent;var c=this._fieldLabels=
{},d=this._fieldsMap={};a.fieldInfos&&m.forEach(a.fieldInfos,function(a){var b=a.fieldName.toLowerCase();c[b]=a.label;d[b]=a});this._relatedFieldPrefix="relationships/";this.titleHasRelatedFields=!!(a.title&&-1!==a.title.indexOf("{"+this._relatedFieldPrefix))}},toJson:function(){return C.fromJson(C.toJson(this.info))},getTitle:function(){},getContent:function(){},getFieldInfo:function(a){var b;m.some(this.info&&this.info.fieldInfos,function(c){c.fieldName===a&&(b=c);return!!b});return b},getComponents:function(a){var b=
this.info,c=new D,d,e;b.fieldInfos&&(e=m.filter(b.fieldInfos,function(a){return-1!==a.fieldName.indexOf(this._relatedFieldPrefix)},this));e&&0<e.length&&(d=this._getRelatedRecords({graphic:a,fieldsInfo:e}));d?d.always(h.hitch(this,function(){c.resolve(this._getPopupValues(a))})):c.resolve(this._getPopupValues(a));return c.promise},getAttachments:function(a){var b=a.getLayer();a=a.attributes;if(this.info.showAttachments&&(b&&b.hasAttachments&&b.objectIdField)&&(a=a&&a[b.objectIdField]))return b.queryAttachmentInfos(a)},
_getPopupValues:function(a,b){var c=this.info,d=a.getLayer(),e=h.clone(a.attributes)||{},g=h.clone(e),q=c.fieldInfos,k="",l="",u,f,n,w,s,v=d&&d._getDateOpts&&d._getDateOpts().properties,v=v&&v.slice(0),t={dateFormat:{properties:v,formatter:"DateFormat"+this._insertOffset(this._dateFormats.shortDateShortTime)}};if(this._relatedInfo)for(w in this._relatedInfo)if(this._relatedInfo.hasOwnProperty(w)){var x=this._relatedInfo[w],r=this._relatedLayersInfo[w];x&&(m.forEach(x.relatedFeatures,function(a){for(s in a.attributes)if(a.attributes.hasOwnProperty(s)&&
"esriRelCardinalityOneToOne"===r.relation.cardinality){var b=this._toRelatedFieldName([r.relation.id,s]);e[b]=g[b]=a.attributes[s]}},this),m.forEach(x.relatedStatsFeatures,function(a){for(s in a.attributes)if(a.attributes.hasOwnProperty(s)){var b=this._toRelatedFieldName([r.relation.id,s]);e[b]=g[b]=a.attributes[s]}},this))}q&&m.forEach(q,function(a){f=a.fieldName;var b=this._getLayerFieldInfo(d,f);b&&(f=a.fieldName=b.name);g[f]=this._formatValue(g[f],f,t);v&&(a.format&&a.format.dateFormat)&&(a=m.indexOf(v,
f),-1<a&&v.splice(a,1))},this);if(d){w=d.types;var y=(x=d.typeIdField)&&e[x];for(f in e)if(e.hasOwnProperty(f)&&-1===f.indexOf(this._relatedFieldPrefix)&&(n=e[f],p.isDefined(n))){var z=this._getDomainName(d,a,w,y,f,n);p.isDefined(z)?g[f]=z:f===x&&(z=this._getTypeName(d,a,n),p.isDefined(z)&&(g[f]=z))}}c.title&&(k=this._processFieldsInLinks(this._fixTokens(c.title,d),e),k=h.trim(p.substitute(g,k,t)||""));if(b)return{title:k};c.description&&(l=this._processFieldsInLinks(this._fixTokens(c.description,
d),e),l=h.trim(p.substitute(g,l,t)||""));q&&(u=[],m.forEach(q,function(a){(f=a.fieldName)&&a.visible&&u.push([a.label||f,p.substitute(g,"${"+f+"}",t)||""])}));var A,B;c.mediaInfos&&(A=[],m.forEach(c.mediaInfos,function(a){B=0;n=a.value;switch(a.type){case "image":var b=n.sourceURL,b=b&&h.trim(p.substitute(e,this._fixTokens(b,d)));B=!!b;break;case "piechart":case "linechart":case "columnchart":case "barchart":var c,b=n.normalizeField;n.fields=m.map(n.fields,function(a){return(c=this._getLayerFieldInfo(d,
a))?c.name:a},this);b&&(c=this._getLayerFieldInfo(d,b),n.normalizeField=c?c.name:b);B=m.some(n.fields,function(a){return p.isDefined(e[a])||-1!==a.indexOf(this._relatedFieldPrefix)&&this._relatedInfo},this);break;default:return}if(B){a=h.clone(a);n=a.value;var b=a.title?this._processFieldsInLinks(this._fixTokens(a.title,d),e):"",f=a.caption?this._processFieldsInLinks(this._fixTokens(a.caption,d),e):"";a.title=b?h.trim(p.substitute(g,b,t)||""):"";a.caption=f?h.trim(p.substitute(g,f,t)||""):"";if("image"===
a.type)n.sourceURL=p.substitute(e,this._fixTokens(n.sourceURL,d)),n.linkURL&&(n.linkURL=h.trim(p.substitute(e,this._fixTokens(n.linkURL,d))||""));else{var k,q;m.forEach(n.fields,function(a,b){if(-1!==a.indexOf(this._relatedFieldPrefix))q=this._getRelatedChartInfos(a,n,e,t),q instanceof Array?n.fields=q:n.fields[b]=q;else{var c=e[a],c=void 0===c?null:c;k=e[n.normalizeField]||0;c&&k&&(c/=k);n.fields[b]={y:c,tooltip:(this._fieldLabels[a.toLowerCase()]||a)+":\x3cbr/\x3e"+this._formatValue(c,a,t,!!k)}}},
this)}A.push(a)}},this));return{title:k,description:l,hasDescription:!!c.description,fields:u&&u.length?u:null,mediaInfos:A&&A.length?A:null,formatted:g,editSummary:d&&d.getEditSummary?d.getEditSummary(a):""}},_getRelatedChartInfos:function(a,b,c,d){var e,g,q,k,l,h;e=[];h=this._fromRelatedFieldName(a);l=h[0];g=this._relatedInfo[l];l=this._relatedLayersInfo[l];g&&m.forEach(g.relatedFeatures,function(f){f=f.attributes;var g,l;for(l in f)if(f.hasOwnProperty(l)&&l===h[1]){g={};k=f[l];b.normalizeField&&
(q=-1!==b.normalizeField.indexOf(this._relatedFieldPrefix)?f[this._fromRelatedFieldName(b.normalizeField)[1]]:c[b.normalizeField]);k&&q&&(k/=q);if(b.tooltipField)if(-1!==b.tooltipField.indexOf(this._relatedFieldPrefix)){var m=this._fromRelatedFieldName(b.tooltipField)[1];g.tooltip=f[m]&&"string"===typeof f[m]?f[m]+":\x3cbr/\x3e"+this._formatValue(k,f[m],d,!!q):m+":\x3cbr/\x3e"+this._formatValue(k,m,d,!!q)}else g.tooltip=(this._fieldLabels[a.toLowerCase()]||a)+":\x3cbr/\x3e"+this._formatValue(k,b.tooltipField,
d,!!q);else g.tooltip=k;g.y=k;e.push(g)}},this);return"esriRelCardinalityOneToMany"===l.relation.cardinality||"esriRelCardinalityManyToMany"===l.relation.cardinality?e:e[0]},_dateFormats:{shortDate:"(datePattern: 'M/d/y', selector: 'date')",shortDateLE:"(datePattern: 'd/M/y', selector: 'date')",longMonthDayYear:"(datePattern: 'MMMM d, y', selector: 'date')",dayShortMonthYear:"(datePattern: 'd MMM y', selector: 'date')",longDate:"(datePattern: 'EEEE, MMMM d, y', selector: 'date')",shortDateShortTime:"(datePattern: 'M/d/y', timePattern: 'h:mm a', selector: 'date and time')",
shortDateLEShortTime:"(datePattern: 'd/M/y', timePattern: 'h:mm a', selector: 'date and time')",shortDateShortTime24:"(datePattern: 'M/d/y', timePattern: 'H:mm', selector: 'date and time')",shortDateLEShortTime24:"(datePattern: 'd/M/y', timePattern: 'H:mm', selector: 'date and time')",shortDateLongTime:"(datePattern: 'M/d/y', timePattern: 'h:mm:ss a', selector: 'date and time')",shortDateLELongTime:"(datePattern: 'd/M/y', timePattern: 'h:mm:ss a', selector: 'date and time')",shortDateLongTime24:"(datePattern: 'M/d/y', timePattern: 'H:mm:ss', selector: 'date and time')",
shortDateLELongTime24:"(datePattern: 'd/M/y', timePattern: 'H:mm:ss', selector: 'date and time')",longMonthYear:"(datePattern: 'MMMM y', selector: 'date')",shortMonthYear:"(datePattern: 'MMM y', selector: 'date')",year:"(datePattern: 'y', selector: 'date')"},_reHref:/href\s*=\s*\"([^\"]+)\"/ig,_reHrefApos:/href\s*=\s*\'([^\']+)\'/ig,_fixTokens:function(a,b){var c=this;return a.replace(/(\{([^\{\r\n]+)\})/g,function(a,e,g){a=c._getLayerFieldInfo(b,g);return"$"+(a?"{"+a.name+"}":e)})},_encodeAttributes:function(a){a=
h.clone(a)||{};var b,c;for(b in a)if((c=a[b])&&"string"===typeof c)c=encodeURIComponent(c).replace(/\'/g,"\x26apos;"),a[b]=c;return a},_processFieldsInLinks:function(a,b){var c=this._encodeAttributes(b),d=this;a&&(a=a.replace(this._reHref,function(a,g){return d._addValuesToHref(a,g,b,c)}).replace(this._reHrefApos,function(a,g){return d._addValuesToHref(a,g,b,c)}));return a},_addValuesToHref:function(a,b,c,d){b=b&&h.trim(b);return p.substitute(b&&0===b.indexOf("${")?c:d,a)},_getLayerFieldInfo:function(a,
b){return a&&a.getField?a.getField(b):null},_formatValue:function(a,b,c,d){var e=this._fieldsMap[b.toLowerCase()],g=e&&e.format;b=-1!==m.indexOf(c.dateFormat.properties,b);var q="number"===typeof a&&!b&&(!g||!g.dateFormat);if(!p.isDefined(a)||!e||!p.isDefined(g))return q?this._forceLTR(a):a;var k="",e=[],l=g.hasOwnProperty("places")||g.hasOwnProperty("digitSeparator"),u=g.hasOwnProperty("digitSeparator")?g.digitSeparator:!0;if(l&&!b)k="NumberFormat",e.push("places: "+(p.isDefined(g.places)&&(!d||
0<g.places)?Number(g.places):"Infinity")),e.length&&(k+="("+e.join(",")+")");else if(g.dateFormat)k="DateFormat"+this._insertOffset(this._dateFormats[g.dateFormat]||this._dateFormats.shortDateShortTime);else return q?this._forceLTR(a):a;var f=this._applyFormatting(a,k,c);l&&-1<a.constructor.toString().indexOf("Array")&&(f="",m.forEach(a,h.hitch(this,function(a,b){b&&(f+=" ");f+=this._applyFormatting(a,k,c)})));l&&!u&&G.group&&(f=f.replace(RegExp("\\"+G.group,"g"),""));b&&(f='\x3cspan class\x3d"esriDateValue"\x3e'+
f+"\x3c/span\x3e");return q?this._forceLTR(f):f},_applyFormatting:function(a,b,c){return p.substitute({myKey:a},"${myKey:"+b+"}",c)||""},_forceLTR:function(a){var b=I("ie");return b&&10>=b?a:"\x3cspan class\x3d'esriNumericValue'\x3e"+a+"\x3c/span\x3e"},_insertOffset:function(a){a&&(a=p.isDefined(this.utcOffset)?a.replace(/\)\s*$/,", utcOffset:"+this.utcOffset+")"):a);return a},_getDomainName:function(a,b,c,d,e,g){return(a=a.getDomain&&a.getDomain(e,{feature:b}))&&a.codedValues?a.getName(g):null},
_getTypeName:function(a,b,c){return(a=a.getType&&a.getType(b))&&a.name},_getRelatedRecords:function(a){var b=a.graphic,c=new D,d;this._relatedLayersInfo?this._queryRelatedLayers(b).then(h.hitch(this,function(a){this._setRelatedRecords(b,a);c.resolve(a)}),h.hitch(this,this._handlerErrorResponse,c)):this._getRelatedLayersInfo(a).then(h.hitch(this,function(a){for(d in a)a.hasOwnProperty(d)&&a[d]&&(this._relatedLayersInfo[d].relatedLayerInfo=a[d]);this._queryRelatedLayers(b).then(h.hitch(this,function(a){this._setRelatedRecords(b,
a);c.resolve(a)}),h.hitch(this,this._handlerErrorResponse,c))}),h.hitch(this,this._handlerErrorResponse,c));return c.promise},_getRelatedLayersInfo:function(a){var b=a.fieldsInfo,c,d,e={};c=a.graphic.getLayer();this._relatedLayersInfo||(this._relatedLayersInfo={});m.forEach(b,function(a){var b,d,e,h;b=this._fromRelatedFieldName(a.fieldName);d=b[0];b=b[1];d&&(this._relatedLayersInfo[d]||(m.some(c.relationships,function(a){if(a.id==d)return h=a,!0}),h&&(this._relatedLayersInfo[d]={relation:h,relatedFields:[],
outStatistics:[]})),this._relatedLayersInfo[d]&&(this._relatedLayersInfo[d].relatedFields.push(b),a.statisticType&&(e=new L,e.statisticType=a.statisticType,e.onStatisticField=b,e.outStatisticFieldName=b,this._relatedLayersInfo[d].outStatistics.push(e))))},this);for(d in this._relatedLayersInfo)this._relatedLayersInfo.hasOwnProperty(d)&&this._relatedLayersInfo[d]&&(a=this._relatedLayersInfo[d].relation,a=c.url.replace(/[0-9]+$/,a.relatedTableId),this._relatedLayersInfo[d].relatedLayerUrl=a,e[d]=J({url:a,
content:{f:"json"},callbackParamName:"callback"}));return y(e)},_queryRelatedLayers:function(a){var b={},c;for(c in this._relatedLayersInfo)this._relatedLayersInfo.hasOwnProperty(c)&&(b[c]=this._queryRelatedLayer({graphic:a,relatedInfo:this._relatedLayersInfo[c]}));return y(b)},_queryRelatedLayer:function(a){var b,c,d,e,g,h,k,l,p,f;b=a.graphic;c=b.getLayer().url.match(/[0-9]+$/g)[0];l=a.relatedInfo;k=l.relatedLayerInfo;p=l.relatedLayerUrl;f=l.relation;m.some(k.relationships,function(a){if(a.relatedTableId===
parseInt(c,10))return d=a,!0},this);d&&(a=new F,m.some(k.fields,function(a){if(a.name===d.keyField)return g=-1!==m.indexOf(["esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble"],a.type)?"number":"string",!0}),e="string"===g?d.keyField+"\x3d'"+b.attributes[f.keyField]+"'":d.keyField+"\x3d"+b.attributes[f.keyField],a.where=e,a.outFields=l.relatedFields,l.outStatistics&&(0<l.outStatistics.length&&k.supportsStatistics)&&(h=new F,h.where=a.where,h.outFields=a.outFields,
h.outStatistics=l.outStatistics),b=new K(p),e=[],e.push(b.execute(a)),h&&e.push(b.execute(h)));return y(e)},_setRelatedRecords:function(a,b){this._relatedInfo=[];for(var c in b)if(b.hasOwnProperty(c)&&b[c]){var d=b[c];this._relatedInfo[c]={};this._relatedInfo[c].relatedFeatures=d[0].features;p.isDefined(d[1])&&(this._relatedInfo[c].relatedStatsFeatures=d[1].features)}},_handlerErrorResponse:function(a,b){a.reject(b)},_fromRelatedFieldName:function(a){var b=[];-1!==a.indexOf(this._relatedFieldPrefix)&&
(a=a.split("/"),b=a.slice(1));return b},_toRelatedFieldName:function(a){var b="";a&&0<a.length&&(b=this._relatedFieldPrefix+a[0]+"/"+a[1]);return b}});H("extend-esri")&&(E.PopupInfo=E.PopupInfoTemplate=r);return r});