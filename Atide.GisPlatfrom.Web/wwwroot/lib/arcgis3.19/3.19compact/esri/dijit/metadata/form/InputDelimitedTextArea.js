// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.19/esri/copyright.txt for details.
//>>built
define("esri/dijit/metadata/form/InputDelimitedTextArea","dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/has ./InputTextArea dojo/i18n!../nls/i18nBase ../../../kernel".split(" "),function(e,g,h,k,l,m,n){e=e([l],{_supportsMultipleValues:!0,delimiter:",",hint:m.hints.delimitedTextArea,subTarget:null,postCreate:function(){this.inherited(arguments)},getDisplayValue:function(){if(!this.focusNode)return null;var b=[],c,a="";this._mergeTokens(b,this.focusNode.value);if(0<b.length)for(c=0;c<b.length;c++)0<
a.length&&(a+=this.delimiter),a+=b[c];return 0<a.length?a:null},getInputValue:function(){if(!this.focusNode)return null;var b=[];this._mergeTokens(b,this.focusNode.value);return 1===b.length?b[0]:1<b.length?b:null},importValues:function(b,c){var a,f=[],d="";for(a=0;a<c.length;a++)this._mergeTokens(f,c[a]);for(a=0;a<f.length;a++)0<d.length&&(d+=this.delimiter),d+=f[a];this.setInputValue(d)},_mergeTokens:function(b,c){var a;null!=c&&(c=c.replace(/(\r\n|\r|\n|\n\r)/g,this.delimiter),a=c.split(this.delimiter),
h.forEach(a,function(a){a=g.trim(a);0<a.length&&b.push(a)}))}});k("extend-esri")&&g.setObject("dijit.metadata.form.InputDelimitedTextArea",e,n);return e});