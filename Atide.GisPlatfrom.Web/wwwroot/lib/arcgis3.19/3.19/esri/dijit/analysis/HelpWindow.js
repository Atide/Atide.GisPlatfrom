// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.19/esri/copyright.txt for details.
//>>built
define("esri/dijit/analysis/HelpWindow","require dojo/_base/array dojo/_base/declare dojo/_base/lang dojo/_base/connect dojo/_base/event dojo/_base/kernel dojo/aspect dojo/has dojo/dom-construct dojo/dom-class dojo/dom-attr dojo/dom-style dojo/query dojo/window dojo/dom-geometry dijit/_Widget dijit/TooltipDialog dijit/popup ../../kernel ../../lang ../../urlUtils ../../request ../_EventedWidget dojo/i18n!../../nls/jsapi".split(" "),function(m,p,e,f,D,E,g,t,q,F,G,H,u,v,w,x,y,z,l,A,r,B,C,I,s){e=e([y],
{declaredClass:"esri.dijit.analysis.HelpWindow",i18n:null,onlineHelpMap:null,showLearnMore:!1,"class":"esriAnalyisHelpWindow",postMixInProperties:function(){this.inherited(arguments);this.i18n={};f.mixin(this.i18n,s.common);f.mixin(this.i18n,s.analysisHelp)},postCreate:function(){this.inherited(arguments);var b=["ar","he"],a,d;this.onlineHelpMap={};for(a=0;a<b.length;a+=1)d=b[a],g.locale&&-1!==g.locale.indexOf(d)&&(-1!==g.locale.indexOf("-")?-1!==g.locale.indexOf(d+"-")&&(this._isRightToLeft=!0):
this._isRightToLeft=!0);b=m.toUrl("./help/helpmap.json");C({url:b}).then(f.hitch(this,function(a){this.onlineHelpMap=a.map}))},_getAbsoluteUrl:function(b){var a=B.getProtocolForWebResource();if(/^https?\:/i.test(b))return b;if(/^\/\//i.test(b))return a+b;if(/^\//i.test(b))return a+"//"+window.location.host+b},_computeSize:function(b){var a={w:400,h:200};q("esri-mobile")?a={w:"50%",h:"90%"}:-1!==b.indexOf("Category")?(a.w=400,a.h=320):-1!==b.indexOf("Tool")?(a.w=400,a.h=320):-1!==b.indexOf("toolDescription")&&
(a.w=400,a.h=520);return a},_setHelpTopicAttr:function(b){this.tooltipHelpDlg&&(l.close(this.tooltipHelpDlg),this.tooltipHelpDlg.destroy(),this.tooltipHelpDlg=null);var a,d,c,n,h="";this.showLearnMore=!1;d=this._analysisGpServer&&-1!==this._analysisGpServer.indexOf("dev")?"dev":this._analysisGpServer&&-1!==this._analysisGpServer.indexOf("qa")?"uat":"";h=this.isPortal?"-PortalOnly":"-OnlineOnly";a=f.clone(g.locale);"nb"===a&&(a="no");c=m.toUrl("esri/dijit/analysis/help/"+this.helpFileName+".html");
r.isDefined(this.onlineHelpMap[this.helpFileName])&&r.isDefined(this.onlineHelpMap[this.helpFileName][b])&&(this.showLearnMore=!0,n="http://doc"+d+".arcgis.com/en/arcgis-online/analyze/"+this.onlineHelpMap[this.helpFileName][b]);-1!==p.indexOf("ar bs cs da de es el et fi fr hr id it ja ko lt lv ru nl no pl pt-br pt-pt ro sv sr th tr vi zh-cn zh-hk zh-tw".split(" "),a)&&(-1!==a.indexOf("-")&&(c=a.split("-"),a=c[0]+"-"+c[1].toUpperCase()),c=m.toUrl("esri/dijit/analysis/help/"+a+"/"+this.helpFileName+
".html"));-1!==p.indexOf("ar de es fr it ja ko ru nl pl pt-br ro zh-cn zh-hk zh-tw".split(" "),a)&&this.showLearnMore&&(n="http://doc"+d+".arcgis.com/"+a+"/arcgis-online/analyze/"+this.onlineHelpMap[this.helpFileName][b]);this._size=d=this._computeSize(b);this.tooltipHelpDlg=new z({preload:!0,content:"\x3cdiv class\x3d'' style\x3d'position:relative'\x3cdiv class\x3d'sizer content'\x3e\x3cdiv class\x3d'contentPane'\x3e\x3cdiv class\x3d'esriFloatTrailing' style\x3d'padding:0;'\x3e\x3ca href\x3d'#' class\x3d'esriAnalysisCloseIcon' title\x3d'"+
this.i18n.close+"'\x3e\x3c/a\x3e\x3c/div\x3e\x3ciframe frameborder\x3d'0'  id\x3d'"+b+"' src\x3d'"+c+"#"+b+h+"' width\x3d'"+d.w+"' height\x3d'"+d.h+"' marginheight\x3d'0' marginwidth\x3d'0'\x3e\x3c/iframe\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d'sizer'\x3e\x3cdiv class\x3d'actionsPane'\x3e\x3cdiv class\x3d'actionList"+(this.showLearnMore?"'\x3e":" hidden'\x3e")+"\x3ca class\x3d'action zoomTo' href\x3d'"+(this.showLearnMore?n:"#")+"' target\x3d'_help'\x3e"+this.i18n.learnMore+"\x3c/a\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e",
"class":"esriHelpPopup esriHelpPopupWrapper esriAnalyisHelpWindow"});this.tooltipHelpDlg.startup()},show:function(b,a){this.helpFileName=a.helpFileName;this._analysisGpServer=a.analysisGpServer;this.isPortal=a.isPortal;a.analysisMode&&(this.analysisMode=a.analysisMode);this.set("helpTopic",a.helpId);var d=t.after(l,"open",f.hitch(this,function(){v(".esriAnalysisCloseIcon",this.tooltipHelpDlg.domNode).on("click",f.hitch(this,this.close));d.remove()})),c=b.pageX,g=w.getBox(),h,k,e;e=!1;a.helpParentNode&&
(h=a.helpParentNode);h&&(k=x.position(h));k&&g.w-b.pageX<k.w?(e=!0,c=k.x-this._size.w-10,this._isRightToLeft&&(c-=10)):this._isRightToLeft&&c-40<this._size.w&&(c=k.w+this._size.w+80);l.open({popup:this.tooltipHelpDlg,x:!0===this._isRightToLeft||e?c-40:c+40,y:b.screenY-b.pageY+10,onCancel:f.hitch(this,function(){this.close()}),onExecute:function(){this.close()}});this.tooltipHelpDlg.domNode.parentNode&&u.set(this.tooltipHelpDlg.domNode.parentNode,"overflowY","hidden")},close:function(b,a){l.close(this.tooltipHelpDlg)}});
q("extend-esri")&&f.setObject("dijit.analysis.HelpWindow",e,A);return e});