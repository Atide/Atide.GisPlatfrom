// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.19/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/metadata/types/iso/srv/templates/CouplingType.html":'\x3cdiv data-dojo-attach-point\x3d"containerNode"\x3e\r\n\r\n  \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/iso/CodeListReference"\r\n    data-dojo-props\x3d"target:\'srv:couplingType\',\r\n      label:\'${i18nIso.SV_ServiceIdentification.couplingType}\'"\x3e\r\n    \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/iso/CodeListElement"\r\n      data-dojo-props\x3d"target:\'srv:SV_CouplingType\'"\x3e\r\n  \r\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/iso/CodeSpaceAttribute"\x3e\x3c/div\x3e\r\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/iso/CodeListAttribute"\r\n        data-dojo-props\x3d"value:\'http://schemas.opengis.net/iso19119/couplingType\'"\x3e\x3c/div\x3e\r\n  \r\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/iso/CodeListValueAttribute"\x3e\r\n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/InputSelectOne"\x3e\r\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Options"\x3e\r\n            \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option"\r\n              data-dojo-props\x3d"label:\'\',value:\'\'"\x3e\x3c/div\x3e\r\n            \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option"\r\n              data-dojo-props\x3d"label:\'${i18nIso.SV_CouplingType.loose}\',value:\'loose\'"\x3e\x3c/div\x3e  \r\n            \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option"\r\n              data-dojo-props\x3d"label:\'${i18nIso.SV_CouplingType.mixed}\',value:\'mixed\'"\x3e\x3c/div\x3e  \r\n            \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option"\r\n              data-dojo-props\x3d"label:\'${i18nIso.SV_CouplingType.tight}\',value:\'tight\',selected:true"\x3e\x3c/div\x3e  \r\n          \x3c/div\x3e\r\n        \x3c/div\x3e\r\n      \x3c/div\x3e\r\n  \r\n    \x3c/div\x3e      \r\n  \x3c/div\x3e  \r\n      \r\n\x3c/div\x3e'}});
define("esri/dijit/metadata/types/iso/srv/CouplingType","dojo/_base/declare dojo/_base/lang dojo/has ../../../base/Descriptor ../../../form/InputSelectOne ../../../form/Options ../../../form/Option ../../../form/iso/CodeListAttribute ../../../form/iso/CodeListValueAttribute ../../../form/iso/CodeListElement ../../../form/iso/CodeListReference ../../../form/iso/CodeSpaceAttribute dojo/text!./templates/CouplingType.html ../../../../../kernel".split(" "),function(a,b,c,d,g,h,k,l,m,n,p,q,e,f){a=a(d,{templateString:e});
c("extend-esri")&&b.setObject("dijit.metadata.types.iso.srv.CouplingType",a,f);return a});