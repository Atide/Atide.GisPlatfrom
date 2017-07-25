// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.19/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/metadata/types/arcgis/reference/templates/SpatialReference.html":'\x3cdiv data-dojo-attach-point\x3d"containerNode"\x3e\r\n\r\n  \x3c!-- spatial reference --\x3e\r\n  \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\r\n    data-dojo-props\x3d"target:\'refSysInfo\',minOccurs:0,maxOccurs:\'unbounded\',label:\'${i18nArcGIS.refSysInfo.caption}\'"\x3e\r\n    \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\r\n      data-dojo-props\x3d"target:\'RefSystem\',minOccurs:0,showHeader:false"\x3e\r\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Attribute" \r\n        data-dojo-props\x3d"target:\'dimension\',minOccurs:0,label:\'${i18nArcGIS.codelist.RS_Dimension}\'"\x3e\r\n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/arcgis/form/InputSelectCode"\r\n          data-dojo-props\x3d"codelistType:\'RS_Dimension\'"\x3e\r\n        \x3c/div\x3e      \r\n      \x3c/div\x3e\r\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\r\n        data-dojo-props\x3d"target:\'refSysID\',minOccurs:0,showHeader:false"\x3e\r\n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/arcgis/citation/CodeRefElements"\x3e\x3c/div\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \r\n\x3c/div\x3e'}});
define("esri/dijit/metadata/types/arcgis/reference/SpatialReference","dojo/_base/declare dojo/_base/lang dojo/has ../../../../../kernel ../../../base/Descriptor dojo/text!./templates/SpatialReference.html ../citation/CodeRefElements".split(" "),function(a,b,c,d,e,f){a=a(e,{templateString:f});c("extend-esri")&&b.setObject("dijit.metadata.types.arcgis.reference.SpatialReference",a,d);return a});