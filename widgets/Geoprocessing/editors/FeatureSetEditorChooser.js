// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/Geoprocessing/editors/FeatureSetEditorChooser.html":'\x3cdiv\x3e\r\n  \x3cdiv class\x3d"field"\x3e\r\n    \x3cinput name\x3d"mode" type\x3d"radio" data-dojo-attach-point\x3d"drawMode" data-dojo-props\x3d"" data-dojo-attach-event\x3d"onclick: _onDrawModeSelect" style\x3d"font-size: 10px;" class\x3d"jimu-leading-margin10"\x3e\x3clabel style\x3d"width: auto;" class\x3d"jimu-leading-margin025"\x3e${nls.drawOnMap}\x3c/label\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"field"\x3e\r\n    \x3cinput name\x3d"mode" type\x3d"radio" data-dojo-attach-point\x3d"layersMode" style\x3d"font-size: 10px;" data-dojo-attach-event\x3d"onclick: _onLayersModeSelect" class\x3d"jimu-leading-margin10"\x3e\x3clabel style\x3d" width: auto;" class\x3d"jimu-leading-margin025"\x3e${nls.selectLayer}\x3c/label\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"field" style\x3d"height: 60px;"\x3e\r\n    \x3cinput name\x3d"mode" type\x3d"radio" data-dojo-attach-point\x3d"urlMode" style\x3d"font-size: 10px;" data-dojo-attach-event\x3d"onclick: _onUrlModeSelect" class\x3d"jimu-leading-margin10"\x3e\x3clabel style\x3d"width: auto" class\x3d"jimu-leading-margin025"\x3e${nls.url}\x3c/label\x3e\r\n    \x3cdiv style\x3d"margin-top:5px;display:none;" data-dojo-attach-point\x3d"urlOptionsDiv"\x3e\r\n      \x3cinput name\x3d"mode" data-dojo-type\x3d"jimu/dijit/URLInput" data-dojo-attach-point\x3d"featureSetUrl" data-dojo-props\x3d\'placeholder: "${nls.urlPlaceholder}"\' class\x3d"jimu-leading-margin10" style\x3d"display: inline-block;"\x3e\r\n      \x3cdiv data-dojo-attach-point\x3d"visibleCheckboxDiv" style\x3d"display: inline-block;"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv data-dojo-attach-point\x3d"symbolChooserSection"\x3e\r\n    \x3clabel\x3e${nls.symbol}:\x3c/label\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"symbolChooserNode"\x3e\x3c/div\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e\r\n'}});
define("dojo/_base/declare dojo/_base/lang dojo/_base/html dojo/on dojo/text!./FeatureSetEditorChooser.html dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin jimu/dijit/SymbolChooser jimu/dijit/CheckBox jimu/utils esri/symbols/jsonUtils ../BaseEditor dijit/form/RadioButton".split(" "),function(c,d,a,e,f,g,h,k,l,m,n,p){return c([p,g,h],{baseClass:"jimu-gp-editor-base jimu-gp-editor-fsec",templateString:f,editorName:"FeatureSetEditorChooser",postCreate:function(){this.inherited(arguments);this.value=
{};this.visibleCheckbox=new l({checked:"url"===this.param.featureSetMode&&this.param.showUrlContent,label:this.nls.showLayerContent,onChange:d.hitch(this,this._viewLayerContent)});this.visibleCheckbox.placeAt(this.visibleCheckboxDiv);"url"===this.param.featureSetMode&&this.param.featureSetUrl&&this.featureSetUrl.setValue(this.param.featureSetUrl);this.param.featureSetMode&&(a.setAttr(this[this.param.featureSetMode+"Mode"],"checked",!0),e.emit(this[this.param.featureSetMode+"Mode"],"click",{cancelable:!0,
bubble:!0}))},getValue:function(){this.featureSetUrl.value&&(this.value.featureSetUrl=this.featureSetUrl.value);this.symbolChooser&&"block"===a.getStyle(this.symbolChooserSection,"display")&&(this.value.symbol=this.symbolChooser.getSymbol().toJson());"url"===this.value.featureSetMode&&(this.value.showUrlContent=this.visibleCheckbox.getValue());return this.value},_onDrawModeSelect:function(){this._showSymbolChooser();a.setStyle(this.urlOptionsDiv,"display","none");this.value.featureSetMode="draw"},
_showSymbolChooser:function(){if(!this.param.defaultValue||!this.param.defaultValue.geometryType)a.setStyle(this.symbolChooserSection,"display","none");else{if(!this.symbolChooser){var b={};this.param.symbol?b.symbol=n.fromJson(this.param.symbol):b.type=m.getSymbolTypeByGeometryType(this.param.defaultValue.geometryType);this.symbolChooser=new k(b,this.symbolChooserNode);this.symbolChooser.startup()}a.setStyle(this.symbolChooserSection,"display","block")}},_onLayersModeSelect:function(){a.setStyle(this.symbolChooserSection,
"display","none");a.setStyle(this.urlOptionsDiv,"display","none");this.value.featureSetMode="layers"},_onUrlModeSelect:function(){a.setStyle(this.urlOptionsDiv,"display","");this.visibleCheckbox.getValue()?this._showSymbolChooser():a.setStyle(this.symbolChooserSection,"display","none");this.value.featureSetMode="url"},_viewLayerContent:function(b){b?this._showSymbolChooser():a.setStyle(this.symbolChooserSection,"display","none")}})});