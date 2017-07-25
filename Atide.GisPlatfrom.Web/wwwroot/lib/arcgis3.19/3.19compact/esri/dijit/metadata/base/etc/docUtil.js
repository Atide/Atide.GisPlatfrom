// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.19/esri/copyright.txt for details.
//>>built
define("esri/dijit/metadata/base/etc/docUtil","dojo/_base/lang dojo/_base/array dojo/query dijit/registry dojo/has ../../../../kernel".split(" "),function(f,g,h,k,l,m){var e={cleanHtml:function(a){if("undefined"===typeof a||null===a)return null;a=a.replace(/<\s*script[^>]*>((.|\s)*?)<\\?\/\s*script\s*>/ig,"");a=a.replace(/<\s*script\b([^<>]|\s)*>?/ig,"");a=a.replace(/<[^>]*=(\s|)*[("|')]javascript:[^$1][(\s|.)]*[$1][^>]*>/ig,"");a=a.replace(/<\s*iframe[^>]*>((.|\s)*?)<\\?\/\s*iframe\s*>/ig,"");a=
a.replace(/\x3c!--(.|\s){1,}?--\x3e/g,"");g.forEach("script iframe embed object applet html head title meta link style body base basefont canvas svg input button select dialog img audio video figure".split(" "),function(b){var c=RegExp("\x3c\\\\?\\/\\s*"+b+"\\s*\x3e","igm");a=a.replace(RegExp("\x3c\\s*"+b+"[^\x3e]*\x3e","igm"),"");a=a.replace(c,"")});a=a.replace("_self","_blank");a=a.replace("_parent","_blank");return a=a.replace("_top","_blank")},ensureVisibility:function(a){if(a){var b=a;for(a=
a.getParent();a;)a._isGxeTabs?a.ensureActiveTab(b):a._isGxeMultiplicityHeader&&a.useTabs&&a.ensureActiveTab(b),b=a,a=a.getParent()}},findElementChoice:function(a,b){var c;c=a;for(var d=a.getParent();d;){if(d._isGxeElementChoice)return b&&(d.ensureActiveTab(c),(c=d.getParent())&&c.toggleContent&&c.toggleContent(!0)),d;c=d;d=d.getParent()}return null},findDescriptor:function(a){for(a=a.getParent();a;){if(a._isGxeDescriptor)return a;a=a.getParent()}return null},findDescriptorAndPath:function(a){var b=
{descriptor:null,path:""};a._isGxeNode&&(b.path=""+a.target);for(a=a.getParent();a;){a._isGxeElement&&(b.path=a.target+"/"+b.path);if(a._isGxeDescriptor){b.descriptor=a;break}a=a.getParent()}return b},findGxeContext:function(a){if(a.gxeContext)return a.gxeContext;for(a=a.getParent();a;){if(a.gxeContext)return a.gxeContext;a=a.getParent()}return null},findGxeDocument:function(a){if(a.gxeDocument)return a.gxeDocument;for(a=this.getParent();a;){if(a.gxeDocument)return a.gxeDocument;a=a.getParent()}return null},
findInputWidget:function(a,b){var c;if((c=h("[data-gxe-path\x3d'"+a+"']",b))&&1===c.length)if(c=k.byNode(c[0]))return c.inputWidget;return null},setI18nNodeText:function(a,b){"undefined"===typeof b&&(b=null);a.innerHTML="";null!==b&&a.appendChild(document.createTextNode(b))},setNodeText:function(a,b){"undefined"===typeof b&&(b=null);a.innerHTML="";null!==b&&a.appendChild(document.createTextNode(b))}};l("extend-esri")&&f.setObject("dijit.metadata.base.etc.docUtil",e,m);return e});